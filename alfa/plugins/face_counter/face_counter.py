'''
send video to container
gst-launch-1.0 filesrc location=/home/battisti/versionado/alfa/alfa/plugins/face_counter/test4.mp4 \
    ! decodebin \
    ! videoscale \
    ! video/x-raw,width=800,height=600 \
    ! x264enc \
    ! rtph264pay \
    ! udpsink port=10001 host=172.17.0.2

send video to machine
gst-launch-1.0 filesrc location=/home/battisti/versionado/alfa/alfa/plugins/face_counter/test4.mp4 \
    ! decodebin \
    ! videoscale \
    ! video/x-raw,width=800,height=600 \
    ! x264enc \
    ! rtph264pay \
    ! udpsink port=10001

play video
gst-launch-1.0 \
    udpsrc port=10001 caps = "application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264, payload=(int)96" \
    ! queue2 max-size-bytes=65536 max-size-buffers=65536 max-size-time=10 \
    ! rtph264depay \
    ! decodebin \
    ! videoconvert \
    ! autovideosink

docker build . -t alfa/plugin/face_counter
docker run --name face_counter alfa/plugin/face_counter
docker run -it alfa/plugin/face_counter sh 

docker run alfa/plugin/face_counter 172.17.0.1 5000

python /root/face_counter/face_counter.py
'''

import cv2
import numpy as np
import face_recognition
import paho.mqtt.publish as publish
import gi

gi.require_version('Gst', '1.0')
from gi.repository import Gst

class Video():
    """BlueRov video capture class constructor
    Attributes:
        port (int): Video UDP port
        video_codec (string): Source h264 parser
        video_decode (string): Transform YUV (12bits) to BGR (24bits)
        video_pipe (object): GStreamer top-level pipeline
        video_sink (object): Gstreamer sink element
        video_sink_conf (string): Sink configuration
        video_source (string): Udp source ip and port
    """

    def __init__(self, port=10001, mqtt_hostname="172.17.0.1", mqtt_port=1883, mqtt_topic = "faces"):
        """Summary
        Args:
            port (int, optional): UDP port
        """

        Gst.init(None)

        self.port = port
        self.mqtt_hostname = mqtt_hostname
        self.mqtt_port = mqtt_port
        self.mqtt_topic = mqtt_topic
        self._frame = None

        print(self.mqtt_hostname)
        print(self.mqtt_port)
        print(self.mqtt_topic)

        # [Software component diagram](https://www.ardusub.com/software/components.html)
        # UDP video stream (:5600)
        self.video_source = 'udpsrc port={}'.format(self.port)
        # [Rasp raw image](http://picamera.readthedocs.io/en/release-0.7/recipes2.html#raw-image-capture-yuv-format)
        # Cam -> CSI-2 -> H264 Raw (YUV 4-4-4 (12bits) I420)
        self.video_codec = '! application/x-rtp, payload=96 ! rtph264depay ! h264parse ! avdec_h264'
        # Python don't have nibble, convert YUV nibbles (4-4-4) to OpenCV standard BGR bytes (8-8-8)
        self.video_decode = \
            '! queue2 max-size-bytes=655360 max-size-buffers=655360 max-size-time=100 ! decodebin ! videoconvert ! video/x-raw,format=(string)BGR ! videoconvert '
        # Create a sink to get data
        self.video_sink_conf = \
            '! appsink emit-signals=true sync=false max-buffers=2 drop=true'

        self.video_pipe = None
        self.video_sink = None

        self.run()

    def start_gst(self, config=None):
        """ Start gstreamer pipeline and sink
        Pipeline description list e.g:
            [
                'videotestsrc ! decodebin', \
                '! videoconvert ! video/x-raw,format=(string)BGR ! videoconvert',
                '! appsink'
            ]
        Args:
            config (list, optional): Gstreamer pileline description list
        """

        if not config:
            config = \
                [
                    'videotestsrc ! decodebin',
                    '! videoconvert ! video/x-raw,format=(string)BGR ! videoconvert',
                    '! appsink'
                ]

        command = ' '.join(config)
        self.video_pipe = Gst.parse_launch(command)
        self.video_pipe.set_state(Gst.State.PLAYING)
        self.video_sink = self.video_pipe.get_by_name('appsink0')

    @staticmethod
    def gst_to_opencv(sample):
        """Transform byte array into np array
        Args:
            sample (TYPE): Description
        Returns:
            TYPE: Description
        """
        buf = sample.get_buffer()
        caps = sample.get_caps()
        array = np.ndarray(
            (
                caps.get_structure(0).get_value('height'),
                caps.get_structure(0).get_value('width'),
                3
            ),
            buffer=buf.extract_dup(0, buf.get_size()), dtype=np.uint8)
        return array

    def frame(self):
        """ Get Frame
        Returns:
            iterable: bool and image frame, cap.read() output
        """
        return self._frame

    def frame_available(self):
        """Check if frame is available
        Returns:
            bool: true if frame is available
        """
        return type(self._frame) != type(None)

    def run(self):
        """ Get frame to update _frame
        """

        self.start_gst(
            [
                self.video_source,
                self.video_codec,
                self.video_decode,
                self.video_sink_conf
            ])

        self.video_sink.connect('new-sample', self.callback)

    def callback(self, sink):
        sample = sink.emit('pull-sample')
        new_frame = self.gst_to_opencv(sample)
        self._frame = new_frame

        return Gst.FlowReturn.OK


if __name__ == '__main__':
    # Create the video object
    # Add port= if is necessary to use a different one
    video = Video()

    print("a")

    while True:
        # Wait for the next frame
        if not video.frame_available():
            continue

        frame = video.frame()
        
        frame.setflags(write=True)

        # Find all the faces in the image using the default HOG-based model.
        # This method is fairly accurate, but not as accurate as the CNN model and not GPU accelerated.
        # See also: find_faces_in_picture_cnn.py
        face_locations = face_recognition.face_locations(frame)
        
        print("I found {} face(s) in this photograph.".format(len(face_locations)))

        publish.single(self.mqtt_topic, str(len(face_locations)), hostname=self.mqtt_hostname, port=self.mqtt_port)

        # cv2.imshow('frame', frame)
        # if cv2.waitKey(1) & 0xFF == ord('q'):
        #    break
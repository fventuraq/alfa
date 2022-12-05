const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads/' })

const router = express.Router();

const chainFileController = require('../controllers/chainFileController');

router.post('/', upload.array('file'), chainFileController.post);

module.exports = router;
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vmsNew"],{6752:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("db49"),o={newChain:function(t){return t?new Promise((function(e,n){i["a"].api.post("/chain/",t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when creating a new VMS (MSG: ".concat(t,")")))}))})):Promise.reject(new Error("Data not informed"))},updateChain:function(t){return t?new Promise((function(e,n){i["a"].api.put("/chain/".concat(t.id),t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when creating a new VMS ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},removeChain:function(t){return t?new Promise((function(e,n){i["a"].api.delete("/chain/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when removing a new vmsType ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},getAllChain:function(){return new Promise((function(t,e){i["a"].api.get("/chain/").then((function(e){t(e.data)})).catch((function(t){e(new Error("Error when removing a new vmsType ".concat(t)))}))}))},getChain:function(t){return t?new Promise((function(e,n){i["a"].api.get("/chain/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when removing a new vmsType ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))}}},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,o={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,n,i,o,r,s,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:l}}var s=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,a=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=r({name:"vue-loading",mixins:[o],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:s,Dots:a,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r={programmatic:!0},s=Object.assign({},e,i,r),a=new(t.extend(l))({el:document.createElement("div"),propsData:s}),c=Object.assign({},n,o);return Object.keys(c).map((function(t){a.$slots[t]=c[t]})),a}}};n(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=u(t,e,n);t.$loading=i,t.prototype.$loading=i},e.default=l}]).default}))},ad11:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("h2",[t._v("New VMS")]),n("b-alert",{attrs:{show:t.msg.show,variant:t.msg.type}},[t._v("\n          "+t._s(t.msg.text)+"\n      ")]),n("b-form",{on:{submit:t.onSubmit}},[n("hr"),n("h4",[t._v("Details of VMS Type")]),n("b-form-group",[n("strong",[t._v("VMS Type:")]),t._v(" "+t._s(t.vmsType.name)+"\n          ")]),n("b-form-group",[n("strong",[t._v("Docker Image:")]),t._v(" "+t._s(t.vmsType.dockerImage)+"\n          ")]),n("b-form-group",[n("strong",[t._v("Description:")]),t._v(" "+t._s(t.vmsType.description)+"\n          ")]),n("b-form-group",{attrs:{id:"input-group-3",label:"Edge Node:","label-for":"node"}},[n("b-form-select",{staticClass:"mt-3",staticStyle:{"margin-top":"0px!important"},attrs:{required:"",id:"nodeIp",options:t.nodes,size:"sm"},model:{value:t.form.nodeIp,callback:function(e){t.$set(t.form,"nodeIp",e)},expression:"form.nodeIp"}})],1),n("b-form-group",[n("strong",[t._v("Startup Parameters Example:")]),t._v(" "+t._s(t.vmsType.startupParameters)+"\n          ")]),n("hr"),n("b-form-group",{attrs:{id:"input-group-2",label:"Name:","label-for":"name"}},[n("b-form-input",{attrs:{required:"",id:"name",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Startup Parameters:","label-for":"startupParameters"}},[n("b-form-input",{attrs:{id:"startupParameters",type:"text"},model:{value:t.form.startupParameters,callback:function(e){t.$set(t.form,"startupParameters",e)},expression:"form.startupParameters"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Port Forward:","label-for":"portForward",title:"EXT_POST:INT_PORT (; for multiple forward) - This is for testing VMS only, by default leave empty"}},[n("b-form-input",{attrs:{id:"portForward",type:"text"},model:{value:t.form.portForward,callback:function(e){t.$set(t.form,"portForward",e)},expression:"form.portForward"}})],1),n("b-form-group",{attrs:{id:"input-group-6",label:"Output Type:","label-for":"outputType"}},[n("b-form-radio",{attrs:{name:"outputType",value:"video"},model:{value:t.form.outputType,callback:function(e){t.$set(t.form,"outputType",e)},expression:"form.outputType"}},[t._v("Video")]),n("b-form-radio",{attrs:{name:"outputType",value:"audio"},model:{value:t.form.outputType,callback:function(e){t.$set(t.form,"outputType",e)},expression:"form.outputType"}},[t._v("Audio")]),n("b-form-radio",{attrs:{name:"outputType",value:"audioevideo"},model:{value:t.form.outputType,callback:function(e){t.$set(t.form,"outputType",e)},expression:"form.outputType"}},[t._v("Audio & Video")]),n("b-form-radio",{attrs:{name:"outputType",value:"audioevideo"},model:{value:t.form.outputType,callback:function(e){t.$set(t.form,"outputType",e)},expression:"form.outputType"}},[t._v("Text")])],1),n("b-row",[n("b-col",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Start")])],1),n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{to:"/vmsType",variant:"secondary"}},[t._v("Back")])],1)],1)],1)],1)},o=[],r=n("6154"),s=n("6af5"),a=n("827f"),c=n("9062"),l=n.n(c),u=(n("e40d"),{name:"vmsNew",components:{Loading:l.a},data:function(){return{nodes:[],vmsType:{name:"",dockerImage:"",startupParameters:"",description:""},form:{name:"",vmsType:"",startupParameters:"",nodeIp:"",node:"",outputType:"video"},msg:{text:!1,type:"",show:!1},isLoading:!1}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),this.isLoading=!0;for(var n=0;n<this.nodes.length;n++)this.nodes[n].value==this.form.nodeIp&&(this.form.node=this.nodes[n].id);r["a"].newVms(this.form).then((function(){e.msg.text="VMS created",e.msg.type="success",e.msg.show=!0,e.isLoading=!1})).catch((function(t){console.log(t),e.msg.text="Error when creating VMS ".concat(t),e.msg.type="danger",e.msg.show=!0,e.isLoading=!1}))},refresh:function(){var t=this;this.isLoading=!1,s["a"].getVmsType(this.$route.params.id).then((function(e){t.form.vmsType=e._id,t.vmsType=e})),a["a"].getNodesForVmsSelect().then((function(e){t.nodes=e}))}},created:function(){this.refresh()}}),m=u,d=n("2877"),f=Object(d["a"])(m,i,o,!1,null,null,null);e["default"]=f.exports},bbac:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("New Service Chain")]),n("b-alert",{attrs:{show:t.msg.show,variant:t.msg.type}},[t._v("\n          "+t._s(t.msg.text)+"\n      ")]),n("b-form",{on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Name:","label-for":"name"}},[n("b-form-input",{attrs:{id:"name",type:"text",autocomplete:"off",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Description:","label-for":"description"}},[n("b-form-input",{attrs:{id:"description",type:"text",autocomplete:"off",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Select sub-net:","label-for":"subnet"}},[n("b-form-select",{staticClass:"mt-3",staticStyle:{"margin-top":"0px!important"},attrs:{required:"",id:"subnet",options:t.listNetwork,size:"sm"},model:{value:t.form.subnet,callback:function(e){t.$set(t.form,"subnet",e)},expression:"form.subnet"}})],1),n("b-row",[n("b-col",[n("b-row",[n("b-col",[n("h2",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"send"}}),t._v("\n                              Devices\n                          ")],1)]),n("b-col",{staticClass:"text-right"},[n("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.showModalDevice()}}},[n("v-icon",{attrs:{name:"plus"}}),t._v("                   \n                              Add Device\n                          ")],1)],1)],1),n("b-table",{attrs:{small:"",busy:t.isBusy,items:t.myDevices,fields:t.devices,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(devices.name)",fn:function(e){return[t._v("\n                          "+t._s(e.myDevices.name)+"\n                      ")]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.removeDevice(e.item)}}},[n("v-icon",{attrs:{name:"trash"}})],1)]}}])})],1),n("b-col",[n("b-row",[n("b-col",[n("h2",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"send"}}),t._v("\n                              VMSs\n                          ")],1)]),n("b-col",{staticClass:"text-right"},[n("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.showModalVms()}}},[n("v-icon",{attrs:{name:"plus"}}),t._v("                   \n                              Add VMS\n                          ")],1)],1)],1),n("b-table",{attrs:{small:"",busy:t.isBusy,items:t.myVmss,fields:t.vmss,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(vmss.name)",fn:function(e){return[t._v("\n                          "+t._s(e.myVmss.name)+"\n                      ")]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.removeVms(e.item)}}},[n("v-icon",{attrs:{name:"trash"}})],1)]}}])})],1)],1),n("b-row",[n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")]),n("b-button",{attrs:{to:"/vmsType",variant:"secondary"}},[t._v("Cancel")])],1)],1)],1),n("b-modal",{ref:"deviceModal",attrs:{"cancel-only":"",size:"lg",id:"modal-device",title:"Add Device"},on:{show:t.resetModalDevice,hidden:t.resetModalDevice,ok:t.addDevice}},[n("form",{ref:"formDevice",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmitDevice(e)}}},[n("b-form-group",{attrs:{id:"input-group-3",label:"Select Device:","label-for":"device"}},[n("b-form-select",{staticClass:"mt-3",staticStyle:{"margin-top":"0px!important"},attrs:{required:"",id:"device",options:t.listDevices,size:"sm"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}})],1)],1)]),n("b-modal",{ref:"vmsModal",attrs:{"cancel-only":"",size:"lg",id:"modal-vms",title:"Add VMS"},on:{show:t.resetModalVms,hidden:t.resetModalVms,ok:t.addVms}},[n("form",{ref:"formVms",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmitVms(e)}}},[n("b-form-group",{attrs:{id:"input-group-3",label:"Select VMS:","label-for":"vms"}},[n("b-form-select",{staticClass:"mt-3",staticStyle:{"margin-top":"0px!important"},attrs:{required:"",id:"vms",options:t.listVmss,size:"sm"},model:{value:t.vms,callback:function(e){t.vms=e},expression:"vms"}})],1)],1)])],1)},o=[],r=(n("6752"),n("6154")),s=n("7668"),a=n("ca58"),c={name:"vmsTypeNew",data:function(){return{isBusy:!0,device:{},myDevices:[],devices:[{key:"name",label:"Name"},{key:"ip",label:"IP"},{destine:[{key:"nameVms",label:"Name"},{key:"ip",label:"IP"}]},{key:"actions",class:"deviceIndexActions3"}],vms:{},myVmss:[],vmss:[{key:"name",label:"Name"},{key:"ip",label:"IP"},{destine:[{key:"nameVms",label:"Name"},{key:"ip",label:"IP"}]},{key:"actions",class:"vmsIndexActions3"}],form:{name:"",description:"",network:null,devices:[],vmss:[]},listDevices:[],listDevicesComplit:[],listVmss:[],listVmssComplit:[],listNetwork:[],msg:{text:!1,type:"",show:!1}}},methods:{showModalDevice:function(){this.$refs["deviceModal"].show()},resetModalDevice:function(){this.device={}},addDevice:function(){this.form.devices.push(this.device);for(var t=this.device,e=0;e<this.listDevicesComplit.length;e++)t==this.listDevicesComplit[e]._id&&this.myDevices.push(this.listDevicesComplit[e])},removeDevice:function(t){var e=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.value){for(var i=0;i<e.myDevices.length;i++)t._id==e.myDevices[i]._id&&e.myDevices.splice(i,1);for(var o=0;o<e.form.devices.length;o++)t._id==e.form.devices[o]&&e.form.devices.splice(o,1)}}))},showModalVms:function(){this.$refs["vmsModal"].show()},resetModalVms:function(){this.vms={}},addVms:function(){this.form.vmss.push(this.vms);for(var t=this.vms,e=0;e<this.listVmssComplit.length;e++)t==this.listVmssComplit[e]._id&&this.myVmss.push(this.listVmssComplit[e])},removeVms:function(t){var e=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.value){for(var i=0;i<e.myVmss.length;i++)t._id==e.myVmss[i]._id&&e.myVmss.splice(i,1);for(var o=0;o<e.form.vmss.length;o++)t._id==e.form.vmss[o]&&e.form.vmss.splice(o,1)}}))},onSubmit:function(t){t.preventDefault(),this.isLoading=!0},firLoad:function(){for(var t=0;t<this.form.devices.length;t++)for(var e=0;e<this.listDevicesComplit.length;e++)this.form.devices[t]==this.listDevicesComplit[e]._id&&this.myDevices.push(this.listDevicesComplit[e])}},created:function(){var t=this;r["a"].getVmsToSelect().then((function(e){t.listVmss=e,console.log("lista de vms->",t.listVmss)})),r["a"].getAllVms().then((function(e){t.listVmssComplit=e,console.log("lista de vms->",t.listVmssComplit)})),s["a"].getDevicesToSelect().then((function(e){t.listDevices=e,console.log("lista de device->",t.listDevices)})),s["a"].getDevices().then((function(e){t.listDevicesComplit=e,console.log("lista detallada de devices",e)})),a["a"].getAllNetwork().then((function(e){t.listNetwork=e,console.log("lista de network->",t.listNetwork)}))}},l=c,u=(n("e956"),n("2877")),m=Object(u["a"])(l,i,o,!1,null,null,null);e["default"]=m.exports},ca58:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("db49"),o={newNetwork:function(t){return console.log("entre a newNetwork"),console.log("los datos enviado desde el formulario son: ",t),t?new Promise((function(e,n){i["a"].api.post("/network",t).then((function(t){console.log("resp:",t),e(t.data)})).catch((function(t){console.log("error:",t),n(new Error("Error when creating a new NETWORK (MSG: ".concat(t,")")))}))})):Promise.reject(new Error("Data not informed"))},getAllNetwork:function(){return new Promise((function(t,e){i["a"].api.get("/network/").then((function(e){t(e.data)})).catch((function(t){e(t)}))}))},getNetwork:function(t){return new Promise((function(e,n){i["a"].api.get("/network/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))},updateNetwork:function(t){return t?new Promise((function(e,n){i["a"].api.put("/network/".concat(t.id),t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when update a NETWORK ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},removeNetwork:function(t){return t?new Promise((function(e,n){i["a"].api.delete("/network/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when removing a NETWORK ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},startNetwork:function(t){return t?new Promise((function(e,n){i["a"].api.get("/network/start/".concat(t.networkId)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when starting a NETWORK ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},stopNetwork:function(t){return t?new Promise((function(e,n){i["a"].api.get("/network/".concat(t.dockerId)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when stopping the NETWORK ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))}}},e36e:function(t,e,n){},e40d:function(t,e,n){},e956:function(t,e,n){"use strict";var i=n("e36e"),o=n.n(i);o.a}}]);
//# sourceMappingURL=vmsNew.a2937b31.js.map
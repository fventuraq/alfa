(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vmsEdit"],{"252d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",[n("h2",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"align-justify"}}),t._v("\n              VMS Container LOG Details\n          ")],1)]),n("b-col",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"clock"}}),t._v("\n          Realod in "),n("strong",[t._v(t._s(t.reload_time))]),t._v(" seconds\n      ")],1)],1),n("hr"),n("b-row",[n("pre",[t._v("          "+t._s(t.log)+"\n      ")])]),n("br"),n("b-row",[n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{to:"/vms/allvms",variant:"secondary"}},[t._v("Back")])],1)],1)],1)},i=[],o=n("6154"),a={name:"vmsLog",data:function(){return{log:"null",reload_time:5}},methods:{refresh:function(){var t=this;this.isBusy=!0,o["a"].getLog(this.$route.params.id).then((function(e){t.log=e})).catch((function(t){console.log(t)}))},countDownTimer:function(){var t=this;this.reload_time>=0?setTimeout((function(){t.reload_time-=1,t.refresh(),t.countDownTimer()}),1e3):(this.reload_time=5,this.countDownTimer())}},created:function(){this.refresh(),this.countDownTimer()}},s=a,l=n("2877"),u=Object(l["a"])(s,r,i,!1,null,null,null);e["default"]=u.exports},"65fa":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("h2",[t._v("Edit VMS")]),n("b-alert",{attrs:{show:t.msg.show,variant:t.msg.type}},[t._v("\n          "+t._s(t.msg.text)+"\n      ")]),n("b-form",{on:{submit:t.onSubmit}},[n("hr"),n("h4",[t._v("Details of VMS Type")]),n("b-form-group",[n("strong",[t._v("VMS Type:")]),t._v(" "+t._s(t.vmsType.name)+"\n          ")]),n("b-form-group",[n("strong",[t._v("Docker Image:")]),t._v(" "+t._s(t.vmsType.dockerImage)+"\n          ")]),n("b-form-group",[n("strong",[t._v("VMS Description:")]),t._v(" "+t._s(t.vmsType.description)+"\n          ")]),n("b-form-group",[n("strong",[t._v("Startup Parameters Example:")]),t._v(" "+t._s(t.vmsType.startupParameters)+"\n          ")]),n("hr"),n("b-form-group",{attrs:{id:"input-group-3",label:"Edge Node:","label-for":"node"}},[n("b-form-select",{staticClass:"mt-3",staticStyle:{"margin-top":"0px!important"},attrs:{id:"nodeIp",options:t.nodes,size:"sm"},model:{value:t.form.nodeIp,callback:function(e){t.$set(t.form,"nodeIp",e)},expression:"form.nodeIp"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Name:","label-for":"name"}},[n("b-form-input",{attrs:{id:"name",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Startup Parameters:","label-for":"startupParameters"}},[n("b-form-input",{attrs:{id:"startupParameters",type:"text"},model:{value:t.form.startupParameters,callback:function(e){t.$set(t.form,"startupParameters",e)},expression:"form.startupParameters"}})],1),n("b-row",[n("b-col",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1),n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{to:"/vms/allvms",variant:"secondary"}},[t._v("Back")])],1)],1)],1)],1)},i=[],o=(n("7f7f"),n("6154")),a=n("6af5"),s=n("827f"),l=n("9062"),u=n.n(l),c=(n("e40d"),{name:"vmsNew",components:{Loading:u.a},data:function(){return{nodes:[],vmsType:{name:"",dockerImage:"",startupParameters:"",description:""},form:{name:"",vmsType:"",startupParameters:"",nodeIp:"",node:""},msg:{show:!1,text:!1,type:""},isLoading:!1}},methods:{onSubmit:function(t){for(var e=this,n=0;n<this.nodes.length;n++)this.nodes[n].value==this.form.nodeIp&&(this.form.node=this.nodes[n].id);t.preventDefault(),this.isLoading=!0,o["a"].updateVms(this.form).then((function(){e.msg.text="VMS Updated",e.msg.type="success",e.msg.show=!0,e.isLoading=!1})).catch((function(t){e.msg.text="Error when updating VMS ".concat(t),e.msg.type="danger",e.isLoading=!1,e.msg.show=!0}))},refresh:function(){var t=this;this.isLoading=!1,s["a"].getNodesForSelect().then((function(e){t.nodes=e})),o["a"].getVms(this.$route.params.id).then((function(e){a["a"].getVmsType(e.vmsType).then((function(e){t.form.vmsType=e._id,t.vmsType=e})),t.form.id=e._id,t.form.name=e.name,t.form.dockerId=e.dockerId,t.form.startupParameters=e.startupParameters,t.form.node=e.node._id,t.form.nodeIp=e.node.ip}))}},created:function(){this.refresh()}}),d=c,m=n("2877"),f=Object(m["a"])(d,r,i,!1,null,null,null);e["default"]=f.exports},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function o(t,e,n,r,i,o,a,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var a=o({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=o({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=o({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=o({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,r],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:a,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,o={programmatic:!0},a=Object.assign({},e,r,o),s=new(t.extend(u))({el:document.createElement("div"),propsData:a}),l=Object.assign({},n,i);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};n(0),u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=c(t,e,n);t.$loading=r,t.prototype.$loading=r},e.default=u}]).default}))},a72f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",[n("h2",[n("v-icon",{attrs:{name:"arrow-up-right"}}),t._v("\n              Foward Manager\n          ")],1)])],1),n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("b-alert",{attrs:{show:t.msg.show,variant:t.msg.type}},[t._v("\n      "+t._s(t.msg.text)+"\n  ")]),n("b-container",[n("b-row",[n("b-col",[n("h3",[t._v("Add Forwared")]),n("b-form",{on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{id:"input-group-2",label:"IP:","label-for":"ip"}},[n("b-form-input",{attrs:{id:"ip",type:"text"},model:{value:t.form.ip,callback:function(e){t.$set(t.form,"ip",e)},expression:"form.ip"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Port:","label-for":"port"}},[n("b-form-input",{attrs:{id:"port",type:"text"},model:{value:t.form.port,callback:function(e){t.$set(t.form,"port",e)},expression:"form.port"}})],1),n("b-row",[n("b-col",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1),n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{to:"/vms/allvms",variant:"secondary"}},[t._v("Back")])],1)],1)],1)],1),n("b-col",[n("h3",[t._v("List Forward")]),n("b-list-group",{directives:[{name:"show",rawName:"v-show",value:t.vms.forward.length>0,expression:"vms.forward.length > 0"}]},t._l(t.vms.forward,(function(e){return n("b-list-group-item",{key:e._id},[t._v("\n                  "+t._s(e.ip)+":"+t._s(e.port)+"\n                  "),n("b-button",{staticClass:"mr-2",attrs:{title:"Remove forwarding",variant:"danger",size:"sm"},on:{click:function(n){return t.remove(e)}}},[n("v-icon",{attrs:{name:"trash"}})],1)],1)})),1),n("b-alert",{staticClass:"text-center",attrs:{variant:"secondary",show:!t.vms.forward.length}},[t._v("\n              There are no forward itens yet!\n          ")])],1)],1)],1)],1)},i=[],o=n("9062"),a=n.n(o),s=(n("e40d"),n("6154")),l={name:"vmsForwarding",components:{Loading:a.a},data:function(){return{vms:[],form:{vmsId:"",ip:"",port:""},msg:{text:!1,type:"",show:!1},isLoading:!1}},methods:{remove:function(t){var e=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, stop it!"}).then((function(n){n.value&&s["a"].remFoward({vmsId:e.vms._id,forwardId:t._id}).then((function(){e.refresh()})).catch((function(t){e.refresh(),console.log(t)}))}))},onSubmit:function(t){var e=this;t.preventDefault(),this.isLoading=!0,s["a"].addFoward(this.form).then((function(){e.msg.text="Foward Added",e.msg.type="success",e.msg.show=!0,e.isLoading=!1,e.refresh()})).catch((function(t){e.msg.text="Error when fowarding ".concat(t),e.msg.type="danger",e.msg.show=!0,e.isLoading=!1,e.refresh()}))},refresh:function(){var t=this;this.isBusy=!0,s["a"].getVms(this.$route.params.id).then((function(e){t.form.vmsId=t.$route.params.id,t.vms=e})).catch((function(t){console.log(t)}))}},created:function(){this.refresh()}},u=l,c=n("2877"),d=Object(c["a"])(u,r,i,!1,null,null,null);e["default"]=d.exports},bc4e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("b-row",[n("b-col",[n("h2",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"layers"}}),t._v("\n              VMS Monitor "),n("strong",[t._v(t._s(this.$route.params.monitorName))])],1)]),n("b-col",{staticClass:"text-right"},[n("b-button",{staticClass:"mr-2",attrs:{variant:"info"},on:{click:function(e){return t.refresh()}}},[n("v-icon",{attrs:{name:"refresh-ccw"}}),t._v("\n              Update Monitor\n          ")],1)],1)],1),n("b-table",{attrs:{small:"",busy:t.isBusy,items:t.items,fields:t.fields,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(senderip)",fn:function(e){return[t._v("\n          "+t._s(e.item.senderip)+":"+t._s(e.item.senderport)+"\n      ")]}},{key:"cell(to)",fn:function(e){return[t._v("\n          "+t._s(e.item.toip)+":"+t._s(e.item.toport)+"\n      ")]}}])},[n("div",{staticClass:"text-center text-danger my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[t._v("Loading...")])],1)]),n("b-alert",{staticClass:"text-center",attrs:{variant:"secondary",show:!t.items.length}},[t._v("\n      There are no Monitors yet!\n  ")]),n("b-row",[n("b-col",{staticClass:"text-right"},[n("strong",[t._v("Total: "+t._s(t.items.length))])])],1)],1)},i=[],o=n("6154"),a=n("9062"),s=n.n(a),l=(n("e40d"),{name:"vmsIndex",components:{Loading:s.a},data:function(){return{isBusy:!0,isLoading:!1,fields:[{key:"senderip",label:"Sender"},{key:"to",label:"To"},{key:"milsec",label:"Time Intervall"},{key:"bs",label:"Total Bytes"},{key:"ps",label:"Total Packages"},{key:"timestamp",label:"Timestamp"}],items:[]}},methods:{refresh:function(){var t=this;this.isBusy=!0,o["a"].getMonitor(this.$route.params.monitorName).then((function(e){t.items=e,t.isBusy=!1,t.isLoading=!1})).catch((function(e){console.log(e),t.isBusy=!1,t.isLoading=!1}))}},created:function(){this.refresh()}}),u=l,c=n("2877"),d=Object(c["a"])(u,r,i,!1,null,null,null);e["default"]=d.exports},e40d:function(t,e,n){},f25e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",[n("h2",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"align-justify"}}),t._v("\n              Device Container LOG Details\n          ")],1)]),n("b-col",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"clock"}}),t._v("\n          Realod in "),n("strong",[t._v(t._s(t.reload_time))]),t._v(" seconds\n      ")],1)],1),n("hr"),n("b-row",[n("pre",[t._v("          "+t._s(t.log)+"\n      ")])]),n("br"),n("b-row",[n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{to:"/vms/allvms",variant:"secondary"}},[t._v("Back")])],1)],1)],1)},i=[],o=n("7668"),a={name:"vmsLog",data:function(){return{log:"null",reload_time:20}},methods:{refresh:function(){var t=this;this.isBusy=!0,o["a"].getLog(this.$route.params.id).then((function(e){t.log=e})).catch((function(t){console.log(t)}))},countDownTimer:function(){var t=this;this.reload_time>=0?setTimeout((function(){t.reload_time-=1,t.refresh(),t.countDownTimer()}),1e3):(this.reload_time=20,this.countDownTimer())}},created:function(){this.refresh(),this.countDownTimer()}},s=a,l=n("2877"),u=Object(l["a"])(s,r,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=vmsEdit.7fb7a241.js.map
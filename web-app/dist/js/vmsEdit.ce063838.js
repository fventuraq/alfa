(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vmsEdit"],{"65fa":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("h2",[t._v("Edit VMS")]),n("b-alert",{attrs:{show:t.msg.text,"v-show":t.msg.text,variant:t.msg.type}},[t._v("\n          "+t._s(t.msg.text)+"\n      ")]),n("b-form",{on:{submit:t.onSubmit}},[n("hr"),n("h4",[t._v("Details of VMS Type")]),n("b-form-group",[n("strong",[t._v("VMS Type:")]),t._v(" "+t._s(t.vmsType.name)+"\n          ")]),n("b-form-group",[n("strong",[t._v("Docker Image:")]),t._v(" "+t._s(t.vmsType.dockerImage)+"\n          ")]),n("b-form-group",[n("strong",[t._v("VMS Description:")]),t._v(" "+t._s(t.vmsType.description)+"\n          ")]),n("b-form-group",[n("strong",[t._v("Startup Parameters Example:")]),t._v(" "+t._s(t.vmsType.startupParameters)+"\n          ")]),n("hr"),n("b-form-group",{attrs:{id:"input-group-3",label:"Edge Node:","label-for":"node"}},[n("b-form-select",{staticClass:"mt-3",staticStyle:{"margin-top":"0px!important"},attrs:{id:"nodeIp",options:t.nodes,size:"sm"},model:{value:t.form.nodeIp,callback:function(e){t.$set(t.form,"nodeIp",e)},expression:"form.nodeIp"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Name:","label-for":"name"}},[n("b-form-input",{attrs:{id:"name",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Startup Parameters:","label-for":"startupParameters"}},[n("b-form-input",{attrs:{id:"startupParameters",type:"text"},model:{value:t.form.startupParameters,callback:function(e){t.$set(t.form,"startupParameters",e)},expression:"form.startupParameters"}})],1),n("b-row",[n("b-col",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1),n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{to:"/vms/allvms",variant:"secondary"}},[t._v("Back")])],1)],1)],1)],1)},r=[],a=(n("7f7f"),n("6154")),o=n("6af5"),s=n("827f"),u=n("9062"),c=n.n(u),d=(n("e40d"),{name:"vmsNew",components:{Loading:c.a},data:function(){return{nodes:[],vmsType:{name:"",dockerImage:"",startupParameters:"",description:""},form:{name:"",vmsType:"",startupParameters:"",nodeIp:"",node:""},msg:{text:!1,type:""},isLoading:!1}},methods:{onSubmit:function(t){for(var e=this,n=0;n<this.nodes.length;n++)this.nodes[n].value==this.form.nodeIp&&(this.form.node=this.nodes[n].id);t.preventDefault(),this.isLoading=!0,a["a"].updateVms(this.form).then((function(){e.msg.text="VMS Updated",e.msg.type="success",e.isLoading=!1})).catch((function(t){e.msg.text="Error when updating VMS ".concat(t),e.msg.type="danger",e.isLoading=!1}))},refresh:function(){var t=this;this.isLoading=!1,s["a"].getNodesForSelect().then((function(e){t.nodes=e})),a["a"].getVms(this.$route.params.id).then((function(e){o["a"].getVmsType(e.vmsType).then((function(e){t.form.vmsType=e._id,t.vmsType=e})),t.form.id=e._id,t.form.name=e.name,t.form.dockerId=e.dockerId,t.form.startupParameters=e.startupParameters,t.form.node=e.node._id,t.form.nodeIp=e.node.ip}))}},created:function(){this.refresh()}}),l=d,f=n("2877"),m=Object(f["a"])(l,i,r,!1,null,null,null);e["default"]=m.exports},"827f":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("7f7f"),n("ac6a");var i=n("db49"),r={newNode:function(t){return t?new Promise((function(e,n){i["a"].api.post("/node/",t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when creating a new node ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},updateNode:function(t){return t?new Promise((function(e,n){i["a"].api.put("/node/".concat(t.id),t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when updating a node ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},removeNode:function(t){return t?new Promise((function(e,n){i["a"].api.delete("/node/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when removing a new node ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},getNodes:function(){return new Promise((function(t,e){i["a"].api.get("/node/").then((function(e){t(e.data)})).catch((function(t){e(t)}))}))},getNode:function(t){return new Promise((function(e,n){i["a"].api.get("/node/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))},getNodeImages:function(t){return new Promise((function(e,n){i["a"].api.get("/node/images/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))},getNodeStats:function(t){return new Promise((function(e,n){i["a"].api.get("/node/status/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))},getNodesForSelect:function(){return new Promise((function(t,e){i["a"].api.get("/node/").then((function(e){var n=[];e.data.forEach((function(t){n.push({value:t.ip,text:"".concat(t.name," ").concat(t.ip),id:t._id})})),t(n)})).catch((function(t){e(t)}))}))}}},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,n,i,r,a,o,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:u},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:this.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a=Object.assign({},e,i,{programmatic:!0}),o=new(t.extend(c))({el:document.createElement("div"),propsData:a}),s=Object.assign({},n,r);return Object.keys(s).map((function(t){o.$slots[t]=s[t]})),o}}};n(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=d(t,e,n);t.$loading=i,t.prototype.$loading=i},e.default=c}]).default}))},e40d:function(t,e,n){}}]);
//# sourceMappingURL=vmsEdit.ce063838.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c567a508"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),r=n("e53d").document,a=i(r)&&i(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var i=n("d9f6"),r=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var i=n("e53d"),r=n("584a"),a=n("d864"),o=n("35e8"),s=n("07e3"),c="prototype",u=function(t,e,n){var l,f,d,h=t&u.F,p=t&u.G,m=t&u.S,v=t&u.P,b=t&u.B,g=t&u.W,y=p?r:r[e]||(r[e]={}),w=y[c],C=p?i:m?i[e]:(i[e]||{})[c];for(l in p&&(n=e),n)f=!h&&C&&void 0!==C[l],f&&s(y,l)||(d=f?C[l]:n[l],y[l]=p&&"function"!=typeof C[l]?n[l]:b&&f?a(d,i):g&&C[l]==d?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(d):v&&"function"==typeof d?a(Function.call,d):d,v&&((y.virtual||(y.virtual={}))[l]=d,t&u.R&&w&&!w[l]&&o(w,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6752:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("db49"),r={newChain:function(t){return t?new Promise((function(e,n){i["a"].api.post("/chain/",t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when creating a new VMS (MSG: ".concat(t,")")))}))})):Promise.reject(new Error("Data not informed"))},updateChain:function(t){return t?new Promise((function(e,n){i["a"].api.put("/chain/".concat(t.id),t).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when creating a new VMS ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},removeChain:function(t){return t?new Promise((function(e,n){i["a"].api.delete("/chain/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when removing a new vmsType ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))},getAllChain:function(){return new Promise((function(t,e){i["a"].api.get("/chain/").then((function(e){console.log("list of service chain",e),t(e.data)})).catch((function(t){e(new Error("Error when removing a new vmsType ".concat(t)))}))}))},getChain:function(t){return t?new Promise((function(e,n){i["a"].api.get("/chain/".concat(t)).then((function(t){e(t.data)})).catch((function(t){n(new Error("Error when removing a new vmsType ".concat(t)))}))})):Promise.reject(new Error("Data not informed"))}}},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,n,i,r,a,o,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a={programmatic:!0},o=Object.assign({},e,i,a),s=new(t.extend(u))({el:document.createElement("div"),propsData:o}),c=Object.assign({},n,r);return Object.keys(c).map((function(t){s.$slots[t]=c[t]})),s}}};n(0),u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=l(t,e,n);t.$loading=i,t.prototype.$loading=i},e.default=u}]).default}))},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},c7ac:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),n("b-row",[n("b-col",[n("h2",[n("v-icon",{staticStyle:{width:"32px"},attrs:{name:"settings"}}),t._v("\n                   List Multimedia service chains\n            ")],1)]),n("b-col",{staticClass:"text-right"},[n("b-button",{staticClass:"mr-2",attrs:{to:"/chains/new",variant:"success"}},[n("v-icon",{attrs:{name:"plus"}}),t._v("\n            Create New Chain\n        ")],1)],1)],1),n("b-table",{attrs:{small:"",busy:t.isBusy,items:t.items,fields:t.fields,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[t._v("\n            "+t._s(e.item.name)+"\n        ")]}},{key:"cell(description)",fn:function(e){return[t._v("\n            "+t._s(e.item.description)+"\n        ")]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{staticClass:"mr-2",attrs:{title:"Bind / Unbind",variant:"success",size:"sm"},on:{click:function(n){return t.startChain(e.item)}}},[n("v-icon",{attrs:{name:"minimize-2"}})],1),n("b-button",{staticClass:"mr-2",attrs:{title:"Stop",variant:"danger",size:"sm"},on:{click:function(n){return t.stopChain(e.item)}}},[n("v-icon",{attrs:{name:"stop-circle"}})],1),n("b-button",{staticClass:"mr-2",attrs:{title:"Edit",variant:"primary",size:"sm"},on:{click:function(n){return t.editChain(e.item)}}},[n("v-icon",{attrs:{name:"edit-2"}})],1),n("b-button",{staticClass:"mr-2",attrs:{title:"Delete",variant:"danger",size:"sm"},on:{click:function(n){return t.deleteChain(e.item)}}},[n("v-icon",{attrs:{name:"trash"}})],1)]}}])},[n("div",{staticClass:"text-center text-danger my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[t._v("Loading...")])],1)]),n("b-alert",{staticClass:"text-center",attrs:{variant:"secondary",show:!t.items.length}},[t._v("\n        There are no Service Chain yet!            \n    ")]),n("b-row",[n("b-col",{staticClass:"text-right"},[n("strong",[t._v("Total: "+t._s(t.items.length))])])],1)],1)},r=[],a=n("85f2"),o=n.n(a);function s(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c,u=n("9062"),l=n.n(u),f=n("6752"),d={name:"index",components:{Loading:l.a},data:function(){return{isBusy:!0,isLoading:!1,sdp:"",fields:[{key:"name",label:"Name"},{key:"description",label:"Description"},{key:"subnet",lebel:"Sub Network"},{key:"actions",class:"actions"}],items:[],msg:{text:!1,type:"",show:!1}}},methods:(c={monitor:function(){},refresh:function(){var t=this;this.isLoading=!1,f["a"].getAllChain().then((function(e){t.items=e,t.isBusy=!1,t.isLoading=!1})).catch((function(e){console.log(e),t.isBusy=!1,t.isLoading=!1}))},stopChain:function(){},startChain:function(){}},s(c,"stopChain",(function(){})),s(c,"deleteChain",(function(){})),c),created:function(){this.refresh()}},h=d,p=n("2877"),m=Object(p["a"])(h,i,r,!1,null,null,null);e["default"]=m.exports},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),r=n("794b"),a=n("1bc3"),o=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return o(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-c567a508.edd049a8.js.map
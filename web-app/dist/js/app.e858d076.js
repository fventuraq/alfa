(function(e){function t(t){for(var o,r,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({deviceEdit:"deviceEdit",deviceIndex:"deviceIndex",deviceNew:"deviceNew",locationDevices:"locationDevices",locationEdit:"locationEdit",locationIndex:"locationIndex",locationNew:"locationNew",vmsBindSrc:"vmsBindSrc",vmsIndex:"vmsIndex",vmsNew:"vmsNew",vmsStopped:"vmsStopped",vmsTypeEdit:"vmsTypeEdit",vmsTypeIndex:"vmsTypeIndex",vmsTypeIndexSrc:"vmsTypeIndexSrc",vmsTypeNew:"vmsTypeNew"}[e]||e)+"."+{deviceEdit:"3170a57e",deviceIndex:"079b5500",deviceNew:"ebb08bb7",locationDevices:"bad5b04b",locationEdit:"bd13f974",locationIndex:"beeb06cf",locationNew:"d30e879c",vmsBindSrc:"c83c935c",vmsIndex:"969ac214",vmsNew:"5e92069b",vmsStopped:"df741f0f",vmsTypeEdit:"0cb12d39",vmsTypeIndex:"396b4828",vmsTypeIndexSrc:"12f161ff",vmsTypeNew:"eaf2b050"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={deviceIndex:1,locationDevices:1,locationIndex:1,vmsBindSrc:1,vmsIndex:1,vmsNew:1,vmsStopped:1,vmsTypeIndex:1,vmsTypeIndexSrc:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({deviceEdit:"deviceEdit",deviceIndex:"deviceIndex",deviceNew:"deviceNew",locationDevices:"locationDevices",locationEdit:"locationEdit",locationIndex:"locationIndex",locationNew:"locationNew",vmsBindSrc:"vmsBindSrc",vmsIndex:"vmsIndex",vmsNew:"vmsNew",vmsStopped:"vmsStopped",vmsTypeEdit:"vmsTypeEdit",vmsTypeIndex:"vmsTypeIndex",vmsTypeIndexSrc:"vmsTypeIndexSrc",vmsTypeNew:"vmsTypeNew"}[e]||e)+"."+{deviceEdit:"31d6cfe0",deviceIndex:"b52d0095",deviceNew:"31d6cfe0",locationDevices:"87f6a13f",locationEdit:"31d6cfe0",locationIndex:"29b05344",locationNew:"31d6cfe0",vmsBindSrc:"472c2b9a",vmsIndex:"afea5473",vmsNew:"472c2b9a",vmsStopped:"26d2112d",vmsTypeEdit:"31d6cfe0",vmsTypeIndex:"6baa3529",vmsTypeIndexSrc:"93019d6e",vmsTypeNew:"31d6cfe0"}[e]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],d=u.getAttribute("data-href");if(d===o||d===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],m.parentNode.removeChild(m),n(c)},m.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",attrs:{id:"app"}},[n("b-container",{staticClass:"h-100",attrs:{fluid:""}},[n("b-row",{attrs:{id:"head"}},[n("div",[n("img",{staticStyle:{float:"left"},attrs:{src:"prism.png"}}),n("div",{staticStyle:{"font-size":"40px",float:"left","margin-top":"7px"}},[n("em",[e._v(" V-PRISM Manager")])])])]),n("b-row",[n("b-col",{attrs:{cols:"2",id:"menu"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[n("v-icon",{attrs:{name:"home"}}),e._v("\n              Home\n            ")],1)],1),n("li",[n("v-icon",{attrs:{name:"layers"}}),e._v("\n            VMS\n            "),n("ul",[n("li",{staticClass:"subMenu"},[n("router-link",{attrs:{to:"/vms"}},[e._v("\n                  -\n                  Running\n                ")])],1),n("li",{staticClass:"subMenu"},[n("router-link",{attrs:{to:"/vms/allvms"}},[e._v("- VMS")])],1)])],1),n("li",[n("router-link",{attrs:{to:"/location"}},[n("v-icon",{attrs:{name:"map-pin"}}),e._v("\n              Locations\n            ")],1)],1),n("li",[n("router-link",{attrs:{to:"/device"}},[n("v-icon",{attrs:{name:"cast"}}),e._v("\n              Devices\n            ")],1)],1),n("li",[n("router-link",{attrs:{to:"/vmsType"}},[n("v-icon",{attrs:{name:"command"}}),e._v("\n              VMS Types\n            ")],1)],1),n("li",[n("router-link",{attrs:{to:"/vmsType/indexSrc"}},[n("v-icon",{attrs:{name:"move"}}),e._v("\n              SRC Types\n            ")],1)],1),n("hr"),n("li",[n("a",{attrs:{target:"_blank",href:"https://github.com/anselmobattisti/alfa"}},[n("v-icon",{attrs:{name:"github"}}),e._v("\n              Github\n            ")],1)])])]),n("b-col",{staticClass:"h-100",attrs:{id:"content"}},[n("router-view")],1)],1)],1)],1)},a=[],c=(n("034f"),n("2877")),i={},s=Object(c["a"])(i,r,a,!1,null,null,null),u=s.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",{staticClass:"text-center"},[n("v-icon",{staticStyle:{width:"48px"},attrs:{name:"bar-chart"}}),e._v("\n    Dashboard\n  ")],1),n("b-alert",{attrs:{show:e.showMsg}},[n("h3",[e._v("It seems that is the first time you are here!")]),n("p",[e._v("If it's true then to run the above button and import the initial data.")]),n("hr"),n("strong",[e._v("This button will gerenate the above data.")]),n("ul",[n("li",[e._v("One Location")]),n("li",[e._v("5 SRC Types")]),n("li",[e._v("4 VMS Types")]),n("li",[e._v("6 Devices")])]),n("b-button",{attrs:{variant:"warning",size:"lg"},on:{click:function(t){return e.bootstrap()}}},[e._v("Import Data")])],1),n("b-alert",{attrs:{show:e.showMsg,variant:"danger"}},[n("h3",[e._v("Important!")]),n("strong",[e._v("Before using this system you need to build the docker images from SRC and VMS. The easy way to do it is running ./compile_src_and_vms.sh at the alfa/alfa folder .")])]),n("div",{staticStyle:{"font-size":"18px"},attrs:{show:!e.showMsg}},[n("b-card-group",{attrs:{deck:""}},[n("b-card",{attrs:{"bg-variant":"light","text-variant":"black"}},[n("b-card-title",[n("strong",[n("v-icon",{attrs:{name:"cast"}}),e._v("\n            Devices\n          ")],1)]),n("hr"),n("b-card-text",[n("ul",[n("li",[n("strong",[e._v("Created:")]),e._v(" "+e._s(e.devices.total)+"\n          ")]),n("li",[n("strong",[e._v("Started:")]),e._v(" "+e._s(e.devices.started)+"\n          ")])])]),n("b-button",{staticClass:"mr-2",attrs:{to:"/device",variant:"success"}},[e._v("\n        List Devices\n      ")])],1),n("b-card",{attrs:{"bg-variant":"light","text-variant":"black"}},[n("b-card-title",[n("strong",[n("v-icon",{attrs:{name:"command"}}),e._v("\n            VMS\n          ")],1)]),n("b-card-text",[n("ul",[n("li",[n("strong",[e._v("Created:")]),e._v(" "+e._s(e.vms.total)+"\n          ")]),n("li",[n("strong",[e._v("Started:")]),e._v(" "+e._s(e.vms.started)+"\n          ")])])]),n("b-button",{staticClass:"mr-2",attrs:{to:"/vms",variant:"success"}},[e._v("\n        List VMS\n      ")])],1)],1)],1)],1)},m=[],v=n("a0df"),l=n("7668"),p=n("6154"),h=n("db49"),w={name:"home",data:function(){return{items:[],showMsg:!1,devices:{total:0,started:0},vms:{total:0,started:0}}},methods:{bootstrap:function(){var e=this;h["a"].api.get("/bootstrap").then((function(){e.showMsg=!1,e.refresh()})).catch((function(e){console.log(e)}))},refresh:function(){var e=this;l["a"].getDevices().then((function(t){e.devices.total=t.length,t.forEach((function(t){""!=t.dockerId&&e.devices.started++}))})),p["a"].getAllVms().then((function(t){e.vms.started=t.length})),p["a"].getStoppedVms().then((function(t){e.vms.total=t.length})),v["a"].getLocations().then((function(t){0==t.length&&(e.showMsg=!0)})).catch((function(e){console.log(e)}))}},created:function(){this.refresh()}},g=w,b=Object(c["a"])(g,f,m,!1,null,null,null),y=b.exports;o["default"].use(d["a"]);var E=new d["a"]({routes:[{path:"/",name:"home",component:y},{path:"/location",name:"locationIndex",component:function(){return n.e("locationIndex").then(n.bind(null,"2b94"))}},{path:"/location/new",name:"locationNew",component:function(){return n.e("locationNew").then(n.bind(null,"2292"))}},{path:"/location/:id/edit",name:"locationEdit",component:function(){return n.e("locationEdit").then(n.bind(null,"6041"))}},{path:"/location/:id/devices",name:"locationDevices",component:function(){return n.e("locationDevices").then(n.bind(null,"7aeb"))}},{path:"/device",name:"deviceIndex",component:function(){return n.e("deviceIndex").then(n.bind(null,"c2fc"))}},{path:"/device/new",name:"deviceNew",component:function(){return n.e("deviceNew").then(n.bind(null,"3039"))}},{path:"/device/:id/edit",name:"deviceEdit",component:function(){return n.e("deviceEdit").then(n.bind(null,"4d7f"))}},{path:"/vmsType",name:"vmsTypeIndex",component:function(){return n.e("vmsTypeIndex").then(n.bind(null,"40dd"))}},{path:"/vmsType/indexSrc",name:"vmsTypeIndex",component:function(){return n.e("vmsTypeIndexSrc").then(n.bind(null,"f171"))}},{path:"/vmsType/new",name:"vmsTypeNew",component:function(){return n.e("vmsTypeNew").then(n.bind(null,"fcf1"))}},{path:"/vmsType/:id/edit",name:"vmsTypeEdit",component:function(){return n.e("vmsTypeEdit").then(n.bind(null,"adf8"))}},{path:"/vms",name:"vmsIndex",component:function(){return n.e("vmsIndex").then(n.bind(null,"b2c2"))}},{path:"/vms/allvms",name:"allVms",component:function(){return n.e("vmsStopped").then(n.bind(null,"213f"))}},{path:"/vms/new/:id",name:"vmsNew",component:function(){return n.e("vmsNew").then(n.bind(null,"ad11"))}},{path:"/vms/:id/details",name:"vmsDetails",component:function(){return n.e("vmsTypeEdit").then(n.bind(null,"cb7b"))}},{path:"/vms/:id/bindSrc",name:"vmsBindSrc",component:function(){return n.e("vmsBindSrc").then(n.bind(null,"2c24"))}}]}),S=n("2f62");o["default"].use(S["a"]);var T=new S["a"].Store({state:{},mutations:{},actions:{}}),x=n("5f5b"),P=n("3459"),_=n("5886");n("4413"),n("f9e3"),n("2dd8");o["default"].use(_["a"]),o["default"].use(P["a"],{name:"v-icon",props:{baseClass:{type:String,default:"v-icon"},classPrefix:{type:String,default:"v-icon-"}}}),o["default"].use(x["a"]);var I=function(e,t,n){n=n||"...";var o=document.createElement("div");o.innerHTML=e;var r=o.textContent;return r.length>t?r.slice(0,t)+n:r},D=function(e){var t="";return e.forEach((function(e){t+="".concat(e.port,"; ")})),t};o["default"].filter("truncate",I),o["default"].filter("showPorts",D),new o["default"]({router:E,store:T,render:function(e){return e(u)}}).$mount("#app")},6154:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("db49"),r={newVms:function(e){return e?new Promise((function(t,n){o["a"].api.post("/vms/",e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when creating a new VMS ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},bindSrc:function(e){return e?new Promise((function(t,n){o["a"].api.get("/vms/bindSrc/".concat(e.vmsId,"/").concat(e.deviceId,"/").concat(e.port)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when creating a new VMS ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},unbindSrc:function(e){return e?new Promise((function(t,n){o["a"].api.get("/vms/unbindSrc/".concat(e.vmsId,"/").concat(e.deviceId,"/").concat(e.port)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when creating a new VMS ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},stopVms:function(e){return e?new Promise((function(t,n){o["a"].api.get("/vms/stop/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when stopping the VMS ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},getType:function(e){return e?new Promise((function(t,n){o["a"].api.get("/vms/type/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when getting the VMS type ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},removeVms:function(e){return e?new Promise((function(t,n){o["a"].api.delete("/vms/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when removing a new vmsType ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},getAllVms:function(){return new Promise((function(e,t){o["a"].api.get("/vms/").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getStoppedVms:function(){return new Promise((function(e,t){o["a"].api.get("/vms/stopped").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getVms:function(e){return new Promise((function(t,n){o["a"].api.get("/vms/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))},getContainerDetails:function(e){return new Promise((function(t,n){o["a"].api.get("/vms/getContainerDetails/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},"64a9":function(e,t,n){},"6af5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("db49"),r={newVmsType:function(e){return e?new Promise((function(t,n){o["a"].api.post("/vmsType/",e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error whem creating a new vmsType ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},updateVmsType:function(e){return e?new Promise((function(t,n){o["a"].api.put("/vmsType/".concat(e.id),e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error whem updating  avmsType ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},removeVmsType:function(e){return e?new Promise((function(t,n){o["a"].api.delete("/vmsType/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error whem removing a new vmsType ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},getVmsTypes:function(){return new Promise((function(e,t){o["a"].api.get("/vmsType/").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getVmsTypesSrc:function(){return new Promise((function(e,t){o["a"].api.get("/vmsType/listSrc").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getVmsTypesVms:function(){return new Promise((function(e,t){o["a"].api.get("/vmsType/listVms").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getVmsType:function(e){return new Promise((function(t,n){o["a"].api.get("/vmsType/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},7668:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("7f7f"),n("ac6a");var o=n("db49"),r=n("6af5"),a={getConnectionTypes:function(){return new Promise((function(e){var t=[];r["a"].getVmsTypesSrc().then((function(n){n.forEach((function(e){t.push({text:e.name,value:e.dockerImage})})),e(t)}))}))},newDevice:function(e){return e?new Promise((function(t,n){o["a"].api.post("/device/",e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when creating a new device ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},updateDevice:function(e){return e?new Promise((function(t,n){o["a"].api.put("/device/".concat(e.id),e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when updating a device ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},starSrcDevice:function(e){return e?new Promise((function(t,n){o["a"].api.get("/device/".concat(e,"/startSrc")).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when starting the SRC for the device ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},stopSrcDevice:function(e){return e?new Promise((function(t,n){o["a"].api.get("/device/".concat(e,"/stopSrc")).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when stopping the SRC for the device ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},removeDevice:function(e){return e?new Promise((function(t,n){o["a"].api.delete("/device/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when removing a new device ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},getDevices:function(){return new Promise((function(e,t){o["a"].api.get("/device/").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getDevicesToSelect:function(){return new Promise((function(e,t){o["a"].api.get("/device/").then((function(t){var n=[];t.data.forEach((function(e){n.push({text:e.name,value:e._id})})),e(n)})).catch((function(e){t(e)}))}))},getDevicesToSelectSRCStarted:function(){return new Promise((function(e,t){o["a"].api.get("/device/").then((function(t){var n=[];t.data.forEach((function(e){e.dockerId&&n.push({text:e.name,value:e._id})})),e(n)})).catch((function(e){t(e)}))}))},getDevice:function(e){return new Promise((function(t,n){o["a"].api.get("/device/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},a0df:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("7f7f"),n("ac6a");var o=n("db49"),r={newLocation:function(e){return e?new Promise((function(t,n){o["a"].api.post("/location/",e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when creating a new location ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},updateLocation:function(e){return e?new Promise((function(t,n){o["a"].api.put("/location/".concat(e.id),e).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when updating a location ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},removeLocation:function(e){return e?new Promise((function(t,n){o["a"].api.delete("/location/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(new Error("Error when removing a new location ".concat(e)))}))})):Promise.reject(new Error("Data not informed"))},getLocations:function(){return new Promise((function(e,t){o["a"].api.get("/location/").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},getLocationsForSelect:function(){return new Promise((function(e,t){o["a"].api.get("/location/").then((function(t){var n=[];t.data.forEach((function(e){n.push({value:e._id,text:e.name})})),e(n)})).catch((function(e){t(e)}))}))},getLocation:function(e){return new Promise((function(t,n){o["a"].api.get("/location/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))},getDevices:function(e){return new Promise((function(t,n){o["a"].api.get("/location/".concat(e,"/devices")).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},db49:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("bc3a"),r=n.n(o),a={API_MAPS:"",URL_API:"http://localhost:3000",URL_APP:"http://localhost:8080",COLOR_DANGER:"red",COLOR_SUCCESS:"green",COLOR_DEFAULT:"grey",COLOR_WARNING:"yellow",api:""};a.api=r.a.create({baseURL:a.URL_API})}});
//# sourceMappingURL=app.e858d076.js.map
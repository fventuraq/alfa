(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vmsTypeIndex"],{"40dd":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",[s("b-col",[s("h2",[s("v-icon",{staticStyle:{width:"32px"},attrs:{name:"command"}}),t._v("\n              VMS Types\n          ")],1)]),s("b-col",{staticClass:"text-right"},[s("b-button",{staticClass:"mr-2",attrs:{to:"/vmsType/new",variant:"success"}},[s("v-icon",{attrs:{name:"plus"}}),t._v("\n              New\n          ")],1)],1)],1),s("b-table",{attrs:{busy:t.isBusy,items:t.items,fields:t.fields,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"[dockerImage]",fn:function(e){return[t._v("\n          "+t._s(e.item.dockerImage)+"\n      ")]}},{key:"cell(actions)",fn:function(e){return[s("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(s){return t.newVms(e.item)}}},[s("v-icon",{attrs:{name:"play-circle"}}),t._v("\n              Start New VMS\n          ")],1),s("b-button",{staticClass:"mr-2",attrs:{variant:"primary",size:"sm"},on:{click:function(s){return t.editVmsType(e.item)}}},[s("v-icon",{attrs:{name:"edit-2"}}),t._v("\n              Edit\n          ")],1),s("b-button",{staticClass:"mr-2",attrs:{variant:"danger",size:"sm"},on:{click:function(s){return t.removeVmsType(e.item)}}},[s("v-icon",{attrs:{name:"trash"}}),t._v("\n              Remove\n          ")],1)]}}])},[s("div",{staticClass:"text-center text-danger my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[s("b-spinner",{staticClass:"align-middle"}),s("strong",[t._v(" Loading...")])],1)]),s("b-alert",{staticClass:"text-center",attrs:{variant:"secondary",show:!t.items.length}},[t._v("\n      There are no VMS Types yet!\n  ")]),s("b-row",[s("b-col",{staticClass:"text-right"},[s("strong",[t._v("Total: "+t._s(t.items.length))])])],1)],1)},i=[],a=s("6af5"),r={name:"vmsTypeIndex",data:function(){return{isBusy:!0,fields:[{key:"name"},{key:"dockerImage"},{key:"actions",class:"vmsTypeIndexActions"}],items:[]}},methods:{editVmsType:function(t){this.$router.push("/vmsType/".concat(t._id,"/edit"))},newVms:function(t){this.$router.push("/vms/new/".concat(t._id,"/"))},removeVmsType:function(t){var e=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(s){s.value&&a["a"].removeVmsType(t._id).then((function(){e.refresh()})).catch((function(t){console.log(t)}))}))},refresh:function(){var t=this;this.isBusy=!0,a["a"].getVmsTypesVms().then((function(e){t.items=e,t.isBusy=!1})).catch((function(e){console.log(e),t.isBusy=!1}))}},created:function(){this.refresh()}},c=r,o=(s("da21"),s("2877")),u=Object(o["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},da21:function(t,e,s){"use strict";var n=s("dca3"),i=s.n(n);i.a},dca3:function(t,e,s){}}]);
//# sourceMappingURL=vmsTypeIndex.4b6b440d.js.map
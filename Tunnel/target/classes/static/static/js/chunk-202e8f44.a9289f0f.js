(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-202e8f44"],{"1c18":function(t,e,n){},2356:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" 刷新 ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"编号",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.id))])]}}])}),n("el-table-column",{attrs:{label:"名称",align:"center",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.name))])]}}])}),n("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"图像链接",align:"center",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.img))])]}}])}),n("el-table-column",{attrs:{label:"线路编号",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.routeId))])]}}])}),n("el-table-column",{attrs:{label:"距离",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.distance))])]}}])}),n("el-table-column",{attrs:{label:"时间编号",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.timeId))])]}}])}),n("el-table-column",{attrs:{label:"是否修复",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(1==a.isRepaired?"是":"否"))])]}}])}),n("el-table-column",{attrs:{label:"修复时间",align:"center",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.repairTime))])]}}])}),n("el-table-column",{attrs:{label:"是否检查",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(1==a.isChecked?"是":"否"))])]}}])}),n("el-table-column",{attrs:{label:"检查时间",align:"center",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.checkTime))])]}}])}),n("el-table-column",{attrs:{label:"修复人编号",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.repairUserId))])]}}])}),n("el-table-column",{attrs:{label:"检查人编号",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.checkUserId))])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}}),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.addTemp,"label-position":"left","label-width":"70px"}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{model:{value:t.addTemp.name,callback:function(e){t.$set(t.addTemp,"name",e)},expression:"addTemp.name"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" 提交 ")]),n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" 取消 ")])],1)],1),n("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"key",label:"Channel"}}),n("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},i=[],r=(n("c740"),n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("eef8")),o=(n("d3a6"),n("6724")),s=n("ed08"),l=n("333d"),u=(n("e456"),n("69a3")),d=n("b775");function c(t){return Object(d["a"])({url:"/fixture/list/"+t,method:"post"})}var p={name:"UserAdmin",components:{Pagination:l["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{list:void 0,total:0,listLoading:!0,listQuery:{name:"",sex:"",department:void 0,page:1,num:20},sexs:["男","女"],temp:{personName:"",sex:"男",personID:0x4bdb07d8b929000,politic:"党员",position:"环卫",speciality:"团队协作",department:void 0,score:88,status:"干事"},addTemp:{id:"",name:""},options:[{value:"admin",label:"局长"},{value:"fuadmin",label:"副局长"},{value:"officer",label:"干事"},{value:"useradmin",label:"人事admin"},{value:"stockadmin",label:"股所所长"}],userTemp:{personID:"",username:"",password:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增",userpass:"用户名密码"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},dialogUserVisible:!1,userdata:{personID:"",username:"",password:""},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!1,c(this.$route.params.id).then((function(e){t.list=e.data.items,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.addTemp={id:"",name:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this,e=this;this.$refs["dataForm"].validate((function(n){n&&Object(u["a"])(t.addTemp).then((function(){t.list.unshift(t.addTemp),t.dialogFormVisible=!1,e.$notify({title:"成功",message:"添加成功",type:"success",duration:2e3})}))}))},handleUpdate:function(t){var e=this;this.addTemp=Object.assign({},t),this.addTemp.timestamp=new Date(this.addTemp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},userUpdata:function(t){var e=this;this.addTemp=Object.assign({},t),this.dialogStatus="userpass",this.dialogUserVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this,e=this;this.$refs["dataForm"].validate((function(n){if(n){var a=Object.assign({},t.addTemp);a.timestamp=+new Date(a.timestamp),Object(r["i"])(t.addTemp).then((function(){var n=t.list.findIndex((function(e){return e.id===t.addTemp.personID}));t.list.splice(n,1,t.addTemp),t.dialogFormVisible=!1,e.$notify({title:"成功",message:"编辑成功",type:"success",duration:2e3})}))}}))},handleDelete:function(t,e){var n=this,a=this;Object(u["b"])(t.id).then((function(t){setTimeout((function(){n.listLoading=!1}),1500),a.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})),this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(r["fetchPv"])(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e("chunk-5ed393f0"),n.e("chunk-2125b98f")]).then(n.bind(null,"4bf8")).then((function(e){var n=["姓名","性别","身份证号","政治面貌","职位","专业特长","部门","绩效"],a=["personName","sex","personID","politic","status","speciality","department","score"],i=t.formatJson(a);e.export_json_to_excel({header:n,data:i,filename:"table-list"}),t.downloadLoading=!1}))},formatJson:function(t){return this.list.map((function(e){return t.map((function(t){return"timestamp"===t?Object(s["d"])(e[t]):e[t]}))}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},f=p,m=n("2877"),h=Object(m["a"])(f,a,i,!1,null,null,null);e["default"]=h.exports},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,n){var a=s(),i=t-a,l=20,u=0;e="undefined"===typeof e?500:e;var d=function t(){u+=l;var s=Math.easeInOutQuad(u,a,i,e);o(s),u<e?r(t):n&&"function"===typeof n&&n()};d()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},d=u,c=(n("e498"),n("2877")),p=Object(c["a"])(d,a,i,!1,null,"6af373ef",null);e["a"]=p.exports},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function i(t,e){function n(n){var a=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",r.appendChild(s)),i.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var r={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},o=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;e["a"]=r},"69a3":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var a=n("b775");function i(){return Object(a["a"])({url:"/route/list/1/200",method:"post"})}function r(t){return Object(a["a"])({url:"/route/add",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/route/delete",method:"post",params:{id:t}})}},"8d41":function(t,e,n){},d3a6:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}));var a=n("b775");function i(){return Object(a["a"])({url:"/department/list/1/200",method:"post"})}function r(t){return Object(a["a"])({url:"/department/getById/"+t,method:"post"})}function o(){return Object(a["a"])({url:"/identity/list/1/200",method:"post"})}function s(t){return Object(a["a"])({url:"/department/add",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/department/delete/"+t,method:"post"})}},e456:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var a=n("b775");function i(){return Object(a["a"])({url:"/identity/list/1/200",method:"post"})}function r(t){return Object(a["a"])({url:"/identity/add",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/identity/delete/"+t,method:"post"})}},e498:function(t,e,n){"use strict";n("1c18")},eef8:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return c}));var a=n("b775");function i(t,e){return Object(a["a"])({url:"/user/list/"+t+"/"+e,method:"post"})}function r(t){return Object(a["a"])({url:"/user/getByName",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/user/"+t,method:"get"})}function s(t){return Object(a["a"])({url:"/user/add",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/user/delete/"+t,method:"post"})}function u(t){return Object(a["a"])({url:"/performance",method:"post",params:{Id:t}})}function d(t){return Object(a["a"])({url:"/user/update/"+t.id,method:"post",data:t})}function c(t){return Object(a["a"])({url:"/user/revise",method:"post",data:t})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97a0260c"],{"1c18":function(t,e,n){},"2f96":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u}));var i=n("b775");function a(t,e){return Object(i["a"])({url:"/task/list/"+t+"/"+e,method:"post"})}function o(t){return Object(i["a"])({url:"/task/add",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/task/delete/"+t,method:"post"})}function u(t){return Object(i["a"])({url:"/task/getById/"+t,method:"post"})}},"333d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var i=u(),a=t-i,s=20,l=0;e="undefined"===typeof e?500:e;var c=function t(){l+=s;var u=Math.easeInOutQuad(l,i,a,e);r(u),l<e?o(t):n&&"function"===typeof n&&n()};c()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=l,d=(n("e498"),n("2877")),p=Object(d["a"])(c,i,a,!1,null,"6af373ef",null);e["a"]=p.exports},"6e79":function(t,e,n){},c652:function(t,e,n){"use strict";n("6e79")},d3a6:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var i=n("b775");function a(){return Object(i["a"])({url:"/department/list/1/200",method:"post"})}function o(t){return Object(i["a"])({url:"/department/getById/"+t,method:"post"})}function r(){return Object(i["a"])({url:"/identity/list/1/200",method:"post"})}function u(t){return Object(i["a"])({url:"/department/add",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/department/delete/"+t,method:"post"})}},e498:function(t,e,n){"use strict";n("1c18")},eef8:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"i",(function(){return c})),n.d(e,"h",(function(){return d}));var i=n("b775");function a(t,e){return Object(i["a"])({url:"/user/list/"+t+"/"+e,method:"post"})}function o(t){return Object(i["a"])({url:"/user/getByName",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/user/"+t,method:"get"})}function u(t){return Object(i["a"])({url:"/user/add",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/user/delete/"+t,method:"post"})}function l(t){return Object(i["a"])({url:"/performance",method:"post",params:{Id:t}})}function c(t){return Object(i["a"])({url:"/user/update/"+t.id,method:"post",data:t})}function d(t){return Object(i["a"])({url:"/user/revise",method:"post",data:t})}},f1de:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"编号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"时间",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.time))])]}}])}),n("el-table-column",{attrs:{width:"180px",align:"center",label:"负责人"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.userListOptions,(function(i){return n("span",[e.row.userId===i.id?n("el-button",{attrs:{plain:"",size:"mini",type:"primary"},on:{click:function(e){return t.showUserInfo(i)}}},[t._v(t._s(i.name))]):t._e()],1)}))}}])}),n("el-table-column",{attrs:{align:"center",label:"待修复数量",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.repairNum))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"待检查数量",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.checkNum))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{staticStyle:{"margin-right":"10px"},attrs:{to:"/tasks/edit/"+e.row.id}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}},[t._v(" 编辑 ")])],1),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.showTask(e.row.info)}}},[t._v(" 查看 ")]),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.deleteTask(e.row.id)}}},[t._v(" 删除 ")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.page,limit:t.num},on:{"update:page":function(e){t.page=e},"update:limit":function(e){t.num=e},pagination:t.getList}}),n("el-dialog",{attrs:{title:"信息",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.infoTemp,"label-position":"left","label-width":"70px"}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{readonly:""},model:{value:t.infoTemp.name,callback:function(e){t.$set(t.infoTemp,"name",e)},expression:"infoTemp.name"}})],1),n("el-form-item",{attrs:{label:"性别",prop:"gender"}},[n("el-input",{attrs:{readonly:""},model:{value:t.infoTemp.gender,callback:function(e){t.$set(t.infoTemp,"gender",e)},expression:"infoTemp.gender"}})],1),n("el-form-item",{attrs:{label:"身份证号",prop:"idCard"}},[n("el-input",{attrs:{readonly:""},model:{value:t.infoTemp.idCard,callback:function(e){t.$set(t.infoTemp,"idCard",e)},expression:"infoTemp.idCard"}})],1),n("el-form-item",{attrs:{label:"部门",prop:"department"}},[n("el-input",{attrs:{readonly:""},model:{value:t.infoTemp.department,callback:function(e){t.$set(t.infoTemp,"department",e)},expression:"infoTemp.department"}})],1)],1)],1),n("el-dialog",{attrs:{title:"任务详情",width:"70%",visible:t.contentVisible},on:{"update:visible":function(e){t.contentVisible=e}}},[n("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(this.content)}})])],1)},a=[],o=(n("b0c0"),n("eef8")),r=n("2f96"),u=n("333d"),s=n("d3a6"),l={name:"ArticleList",components:{Pagination:u["a"]},filters:{statusFilter:function(t){var e={0:"warning",1:"success",2:"info"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{id:"",taskName:"",senderId:"",text:"",beginTime:"",endTime:"",importance:"",status:""},page:1,num:20,userListOptions:[],userQuery:{name:"",sex:"",department:"",page:1,num:200},dialogFormVisible:!1,infoTemp:{id:100001,username:"",password:"",statusId:"",department:"",name:"",age:"",idCard:"",gender:"",phone:""},content:"",contentVisible:!1}},created:function(){this.getList(),this.getRemoteUserList()},methods:{getList:function(){var t=this;this.listLoading=!1,Object(r["d"])(this.page,this.num).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},getRemoteUserList:function(){var t=this;Object(o["c"])(1,200).then((function(e){e.data.items&&(t.userListOptions=e.data.items)}))},showUserInfo:function(t){var e=this;this.infoTemp.id=t.id,this.infoTemp.username=t.username,this.infoTemp.password=t.password,this.infoTemp.statusId=t.statusId,this.infoTemp.name=t.name,this.infoTemp.age=t.age,this.infoTemp.idCard=t.idCard,this.infoTemp.gender=t.gender,this.infoTemp.phone=t.phone;var n=this;Object(s["c"])(t.departmentId).then((function(t){n.infoTemp.department=t.data.department.name,console.log(t.data.department.name)})),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},showTask:function(t){var e=this;this.content=t,this.contentVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},deleteTask:function(t){var e=this,n=this;Object(r["b"])(t).then((function(t){setTimeout((function(){e.listLoading=!1}),1500),n.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),n.getList()}))}}},c=l,d=(n("c652"),n("2877")),p=Object(d["a"])(c,i,a,!1,null,"e28bce1c",null);e["default"]=p.exports}}]);
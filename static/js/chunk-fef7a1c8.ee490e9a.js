(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fef7a1c8"],{"203d":function(t,e,a){"use strict";var r=a("6a8e"),o=a.n(r);o.a},"2bb7":function(t,e,a){},"3ca3":function(t,e,a){"use strict";var r=a("6547").charAt,o=a("69f3"),n=a("7dd0"),i="String Iterator",s=o.set,l=o.getterFor(i);n(String,"String",(function(t){s(this,{type:i,string:String(t),index:0})}),(function(){var t,e=l(this),a=e.string,o=e.index;return o>=a.length?{value:void 0,done:!0}:(t=r(a,o),e.index+=t.length,{value:t,done:!1})}))},"4a3e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",{staticClass:"card",attrs:{title:"仓库管理",bordered:!1}},[a("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),a("a-card",{staticClass:"card",attrs:{title:"任务管理",bordered:!1}},[a("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),a("a-card",{attrs:{title:"用户管理",bordered:!1}},[a("table-form")],1),a("footer-tool-bar",[a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.validate}},[t._v("提交")])],1)],1)},o=[],n=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("a-form",{staticClass:"form",attrs:{autoFormCreate:function(e){return t.form=e}},on:{submit:e.handleSubmit}},[r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"仓库名",fieldDecoratorId:"repository.name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入仓库名称",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入仓库名称"}})],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"仓库域名",fieldDecoratorId:"repository.domain",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入仓库域名",whitespace:!0},{validator:e.validate}]}}},[r("a-input",{attrs:{addonBefore:"http://",addonAfter:".github.io",placeholder:"请输入"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"仓库管理员",fieldDecoratorId:"repository.manager",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择管理员"}]}}},[r("a-select",{attrs:{placeholder:"请选择管理员"}},[r("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),r("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),r("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"审批人",fieldDecoratorId:"repository.auditor",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择审批员"}]}}},[r("a-select",{attrs:{placeholder:"请选择审批员"}},[r("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),r("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"生效日期",fieldDecoratorId:"repository.effectiveDate",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择生效日期"}]}}},[r("a-range-picker",{staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"仓库类型",fieldDecoratorId:"repository.type",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择仓库类型"}]}}},[r("a-select",{attrs:{placeholder:"请选择仓库类型"}},[r("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),r("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},i=[],s={name:"RepositoryForm",props:["showSubmit"],methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields((function(t,e){t||console.log("Received values of form: ",e)}))},validate:function(t,e,a){void 0!==e&&"iczer"!==e&&a("输入'iczer'试下？"),a()}}},l=s,c=(a("203d"),a("2877")),d=Object(c["a"])(l,n,i,!1,null,"37ac67f0",null),u=d.exports,f=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("a-form",{staticClass:"form",attrs:{autoFormCreate:function(e){return t.form=e}},on:{submit:e.handleSubmit}},[r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"任务名",fieldDecoratorId:"task.name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入任务名称"}})],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"任务描述",fieldDecoratorId:"task.description",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入任务描述"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"执行人",fieldDecoratorId:"task.executor",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择执行人"}]}}},[r("a-select",{attrs:{placeholder:"请选择执行人"}},[r("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),r("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"责任人",fieldDecoratorId:"task.manager",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择责任人"}]}}},[r("a-select",{attrs:{placeholder:"请选择责任人"}},[r("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),r("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"提醒时间",fieldDecoratorId:"task.time",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择提醒时间"}]}}},[r("a-time-picker",{staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"任务类型",fieldDecoratorId:"task.type",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择任务类型"}]}}},[r("a-select",{attrs:{placeholder:"请选择任务类型"}},[r("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),r("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},m=[],p={name:"TaskForm",props:["showSubmit"],methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields((function(t,e){t||console.log("Received values of form: ",e)}))}}},v=p,b=(a("fbeed"),Object(c["a"])(v,f,m,!1,null,"026688a2",null)),h=b.exports,y=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("form",{attrs:{autoFormCreate:function(e){return t.form=e}}},[r("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1},scopedSlots:e._u([e._l(["name","workId","department"],(function(t,a){return{key:t,fn:function(o,n){return[n.editable?r("a-input",{key:t,staticStyle:{margin:"-5px 0"},attrs:{value:o,placeholder:e.columns[a].title},on:{change:function(a){return e.handleChange(a.target.value,n.key,t)}}}):[e._v(e._s(o))]]}}})),{key:"operation",fn:function(t,a){return[a.editable?[a.isNew?r("span",[r("a",{on:{click:function(t){return e.saveRow(a.key)}}},[e._v("添加")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[r("a",[e._v("删除")])])],1):r("span",[r("a",{on:{click:function(t){return e.saveRow(a.key)}}},[e._v("保存")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.cancle(a.key)}}},[e._v("取消")])],1)]:r("span",[r("a",{on:{click:function(t){return e.toggle(a.key)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[r("a",[e._v("删除")])])],1)]}}],null,!0)}),r("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newMeber}},[e._v("新增成员")])],1)},g=[];a("4de4");function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function w(t){if(Array.isArray(t))return k(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function S(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("fb6a"),a("b0c0"),a("25f0");function _(t,e){if(t){if("string"===typeof t)return k(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?k(t,e):void 0}}function D(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(t){return w(t)||S(t)||_(t)||D()}var x=[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],O=[{key:1,name:"小明",workId:"001",editable:!1,department:"行政部"},{key:2,name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:3,name:"王小帅",workId:"003",editable:!1,department:"财务部"}],F={name:"TableForm",data:function(){return{columns:x,dataSource:O}},methods:{handleSubmit:function(t){t.preventDefault()},newMeber:function(){this.dataSource.push({key:this.dataSource.length+1,name:"",workId:"",department:"",editable:!0,isNew:!0})},remove:function(t){var e=this.dataSource.filter((function(e){return e.key!==t}));this.dataSource=e},saveRow:function(t){var e=this.dataSource.filter((function(e){return e.key===t}))[0];e.editable=!1,e.isNew=!1},toggle:function(t){var e=this.dataSource.filter((function(e){return e.key===t}))[0];e.editable=!e.editable},getRowByKey:function(t,e){var a=this.dataSource;return(e||a).filter((function(e){return e.key===t}))[0]},cancle:function(t){var e=this.dataSource.filter((function(e){return e.key===t}))[0];e.editable=!1},handleChange:function(t,e,a){var r=I(this.dataSource),o=r.filter((function(t){return e===t.key}))[0];o&&(o[a]=t,this.dataSource=r)}}},C=F,A=Object(c["a"])(C,y,g,!1,null,"1d7185f7",null),R=A.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[a("div",{staticStyle:{float:"left"}},[t._t("extra")],2),a("div",{staticStyle:{float:"right"}},[t._t("default")],2)])},T=[],$={name:"FooterToolBar"},j=$,E=(a("8efc"),Object(c["a"])(j,q,T,!1,null,"0990a56b",null)),B=E.exports,M={name:"AdvancedForm",components:{FooterToolBar:B,TableForm:R,TaskForm:h,RepositoryForm:u},data:function(){return{desc:"高级表单常见于一次性输入和提交大批量数据的场景。",loading:!1}},methods:{validate:function(){this.$refs.repository.form.validateFields((function(t,e){t||console.log("Received values of form: ",e)})),this.$refs.task.form.validateFields((function(t,e){t||console.log("Received values of form: ",e)}))}}},N=M,z=(a("6a9d"),Object(c["a"])(N,r,o,!1,null,"87936dd8",null));e["default"]=z.exports},"4df4":function(t,e,a){"use strict";var r=a("0366"),o=a("7b0b"),n=a("9bdd"),i=a("e95a"),s=a("50c4"),l=a("8418"),c=a("35a1");t.exports=function(t){var e,a,d,u,f,m,p=o(t),v="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,y=void 0!==h,g=c(p),k=0;if(y&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==g||v==Array&&i(g))for(e=s(p.length),a=new v(e);e>k;k++)m=y?h(p[k],k):p[k],l(a,k,m);else for(u=g.call(p),f=u.next,a=new v;!(d=f.call(u)).done;k++)m=y?n(u,h,[d.value,k],!0):d.value,l(a,k,m);return a.length=k,a}},"6a8e":function(t,e,a){},"6a9d":function(t,e,a){"use strict";var r=a("b034"),o=a.n(r);o.a},"8efc":function(t,e,a){"use strict";var r=a("fd4f"),o=a.n(r);o.a},a630:function(t,e,a){var r=a("23e7"),o=a("4df4"),n=a("1c7e"),i=!n((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:o})},b034:function(t,e,a){},d28b:function(t,e,a){var r=a("746f");r("iterator")},e01a:function(t,e,a){"use strict";var r=a("23e7"),o=a("83ab"),n=a("da84"),i=a("5135"),s=a("861d"),l=a("9bf2").f,c=a("e893"),d=n.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};c(f,d);var m=f.prototype=d.prototype;m.constructor=f;var p=m.toString,v="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(i(u,t))return"";var a=v?e.slice(7,-1):e.replace(b,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:f})}},fbeed:function(t,e,a){"use strict";var r=a("2bb7"),o=a.n(r);o.a},fd4f:function(t,e,a){}}]);
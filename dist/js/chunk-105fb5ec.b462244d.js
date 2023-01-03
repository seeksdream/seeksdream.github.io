(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-105fb5ec"],{2733:function(t,e,l){"use strict";l("7935")},7935:function(t,e,l){var o=l("ebe9");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=l("499e").default;a("66668268",o,!0,{sourceMap:!1,shadowMode:!1})},d850:function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"c-doc-title"},[t._v("Arributes / 选项:")]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list_data_attributes}},[e("el-table-column",{attrs:{prop:"option",label:"参数",width:"180"}}),e("el-table-column",{attrs:{prop:"desc",label:"说明","min-width":"500"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("div",{domProps:{innerHTML:t._s(l.row.desc)}})]}}])}),e("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"}}),e("el-table-column",{attrs:{prop:"notnull",label:"必选/非必选",width:"100"}}),e("el-table-column",{attrs:{prop:"default_value",label:"默认值",width:"100"}})],1)],1),e("div",[t._m(0),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list_data_runtime}},[e("el-table-column",{attrs:{prop:"option",label:"属性名\t",width:"250"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("div",{domProps:{innerHTML:t._s(l.row.option)}})]}}])}),e("el-table-column",{attrs:{prop:"desc",label:"说明","min-width":"500"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("div",{domProps:{innerHTML:t._s(l.row.desc)}})]}}])})],1)],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-doc-title"},[t._v("Runtime-properties / 运行时属性:"),e("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("（更多复杂操作，后续可以通过"),e("a",{attrs:{href:"#/demo/graph-instance-api"}},[t._v("实例方法api")]),t._v("来实现）")])])}],n=l("2f62"),d={name:"NodeAttributes",components:{},data(){return{list_data_attributes:[{option:"id",desc:"节点id，不能重复，重复会被忽略",type:"string",notnull:"是",default_value:""},{option:"text",desc:"节点名称",type:"string",notnull:"是",default_value:""},{option:"styleClass",desc:"节点样式class",type:"string",notnull:"否",default_value:""},{option:"color",desc:"节点背景颜色",type:"string",notnull:"否",default_value:""},{option:"fontColor",desc:"节点文字颜色",type:"string",notnull:"否",default_value:""},{option:"borderWidth",desc:"节点边框粗细（像素）",type:"int",notnull:"否",default_value:"1"},{option:"borderColor",desc:"节点边框颜色",type:"string",notnull:"否",default_value:""},{option:"nodeShape",desc:'节点形状，0:圆形；1:矩形;<a href="#/demo/node">使用示例</a>',type:"int",notnull:"否",default_value:"1"},{option:"width",desc:"节点宽度",type:"int",notnull:"否",default_value:"自动"},{option:"height",desc:"节点高度",type:"int",notnull:"否",default_value:"自动"},{option:"opacity",desc:"透明度(值范围：0到1,或者0到100)",type:"number",notnull:"否",default_value:"1"},{option:"isHide",desc:"是否隐藏这个节点",type:"boolean",notnull:"否",default_value:"false"},{option:"disableDrag",desc:"是否禁用节点的拖动功能",type:"boolean",notnull:"否",default_value:"false"},{option:"disableDefaultClickEffect",desc:"是否禁用默认的点击选中效果（即使禁用，可以出发自定的节点点击事件）",type:"boolean",notnull:"否",default_value:"false"},{option:"expandHolderPosition",desc:'节点展开/关闭按钮位置（left/top/right/bottom）节点的这个设置会覆盖全局的expandHolderPosition设置，即使改节点没有子节点也可以让其显示展开/收缩按钮，可以实现部分节点显示展开/收缩按钮的效果;<a href="#/demo/adv-expand">使用示例</a>',type:"string",notnull:"否",default_value:"hide"},{option:"expanded",desc:'手工设置节点的展开收缩状态;<a href="#/demo/adv-expand">使用示例</a>',type:"boolean",notnull:"否",default_value:"true"},{option:"fixed",desc:'是否使用固定位置（以当前图谱左上角为0,0的坐标系）;<a href="#/demo/layout-diy">使用示例</a>',type:"boolean",notnull:"否",default_value:"false"},{option:"x",desc:"x坐标（以当前图谱左上角为0,0的坐标系）,fixed=true时有效",type:"int",notnull:"否",default_value:""},{option:"y",desc:"y坐标（以当前图谱左上角为0,0的坐标系）,fixed=true时有效",type:"int",notnull:"否",default_value:""},{option:"innerHTML",desc:'用HTML自定义节点内部的内容，当此属性不为空时，text属性将失效;<a href="#/demo/node">使用示例</a>',type:"string",notnull:"否",default_value:""},{option:"html",desc:'用HTML自定义节点，当此属性不为空时，节点的所有样式属性将失效<a href="#/demo/node">使用示例</a>',type:"string",notnull:"否",default_value:""},{option:"data",desc:'<span style="color:red">自定义属性需要放在这里，才能在后续使用中从节点获取，如:{myKey1:\'value1\',myKey2:\'value2\'}</span>，示例1：<a href="#/demo/adv-slot">使用自定义属性作为节点名称/节点图标</a>，示例1：<a href="#/demo/adv-data-filter">使用自定义属性进行筛选</a>',type:"Object",notnull:"否",default_value:""}],list_data_runtime:[{option:"targetNodes",desc:"获取与当前节点存在关系的其他所有节点，这些节点中包含的当前节点的父节点和子节点，如果只想获取父节点请使用lot.parent,获取子节点请使用lot.childs",type:"",notnull:"",default_value:""},{option:"lot",desc:"获取与当前节点的布局信息，其中包含了当前布局器为其设置的坐标、层级、权重、上下级节点等信息",type:"",notnull:"",default_value:""},{option:"lot.parent",desc:"单独说明lot中的这个属性，他可以获取节点的父节点，这个子节点是由布局器分析出来的父节点，在有循环闭合回路的关系网中是不准确的，他会强行从多个中取一个",type:"",notnull:"",default_value:""},{option:"lot.childs",desc:"单独说明lot中的这个属性：他可以获取节点的子节点，这个子节点是由布局器分析出来的子节点，在有循环闭合回路的关系网中是不完整的，他会强行剔除一些冲突的子节点",type:"",notnull:"",default_value:""}],list_data_events:[],list_data_methods:[],list_data_slot:[],checkedRoute:null}},computed:{...Object(n["a"])({})},methods:{}},i=d,u=(l("2733"),l("2877")),s=Object(u["a"])(i,o,a,!1,null,"0d94446c",null);e["default"]=s.exports},ebe9:function(t,e,l){var o=l("24fb");e=o(!1),e.push([t.i,".c-doc-title[data-v-0d94446c]{margin-top:30px;font-size:22px;line-height:30px;padding-left:0}[data-v-0d94446c] .el-table__row a{color:#1989fa}",""]),t.exports=e}}]);
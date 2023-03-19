import{n}from"./index-d446e728.js";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticStyle:{"margin-top":"10px","border-bottom":"#efefef solid 1px","padding-left":"20px"}},[e("div",{staticStyle:{width:"700px"}},[t._m(0),e("span",{staticClass:"c-label"},[t._v("层级距离系数:")]),e("el-slider",{attrs:{max:3,min:.2,step:.1},on:{change:t.onChangeOption},model:{value:t.distanceCoefficient,callback:function(i){t.distanceCoefficient=i},expression:"distanceCoefficient"}})],1)]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.g_loading,expression:"g_loading"}],staticStyle:{width:"calc(100% - 10px)",height:"calc(100vh - 190px)"}},[e("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:t.graphOptions}})],1),e("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[e("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4CenterDistanceCoefficient.vue",target:"_blank"}},[t._v("查看代码 ")])],1)],1)},r=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{"padding-bottom":"10px",color:"#333333"}},[t._v("图谱默认会根据当前可见范围自动调整各个层级之间的距离，"),e("b",[t._v("图谱会尽量让图谱显得舒展且不超出可见范围")]),t._v("。再次基础上你可以选择让距离更大一些或更小一些。")])}];const c={name:"SeeksRelationGraphDemo",components:{},data(){return{g_loading:!0,demoname:"---",activeTabName:"case1",distanceCoefficient:1,graphOptions:{debug:!0,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultExpandHolderPosition:"right",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",layouts:[{label:"中心",layoutName:"center",layoutClassName:"seeks-layout-center",distance_coefficient:1}]}}},created(){},mounted(){this.demoname=this.$route.params.demoname,this.setGraphData()},methods:{setGraphData(){const t={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]};this.g_loading=!1,this.$refs.seeksRelationGraph.setJsonData(t,o=>{})},onChangeOption(){this.graphOptions.layouts[0].distance_coefficient=this.distanceCoefficient,this.$refs.seeksRelationGraph.setOptions(this.graphOptions,t=>{console.log("setOptions:callback:",t)})}}},a={};var l=n(c,s,r,!1,d,"19f2391a",null,null);function d(t){for(let o in a)this[o]=a[o]}const b=function(){return l.exports}();export{b as default};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de84"],{d2ff:function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o._self._c;return t("div",[t("div",{staticStyle:{height:"50px","padding-top":"6px","padding-left":"30px","padding-right":"30px","border-bottom":"#efefef solid 1px"}},[t("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[t("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4BothwayTreeFAQ.vue",target:"_blank"}},[o._v("查看代码")])],1)],1),t("el-row",[t("el-col",{attrs:{span:9}},[t("div",{staticStyle:{height:"calc(100vh - 100px)"}},[t("RelationGraph",{ref:"seeksRelationGraph1",attrs:{options:o.graphOptions1,"on-node-click":o.onNodeClick,"on-line-click":o.onLineClick}})],1)]),t("el-col",{attrs:{span:6}},[t("div",{staticStyle:{height:"calc(100vh - 100px)","border-left":"#efefef solid 1px","border-right":"#efefef solid 1px",padding:"5px","font-size":"12px"}},[o._v(" 原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。"),t("br"),t("br"),o._v(" 如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下"),t("br"),o._v(" 你可以设置上方的所有线条属性showStartArrow=true;showEndArrow=false,来让上方线条反向展示"),t("br"),t("br"),o._v(" 最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。 ")])]),t("el-col",{attrs:{span:9}},[t("div",{staticStyle:{height:"calc(100vh - 100px)"}},[t("RelationGraph",{ref:"seeksRelationGraph2",attrs:{options:o.graphOptions2,"on-node-click":o.onNodeClick,"on-line-click":o.onLineClick}})],1)])],1)],1)},a=[],s={name:"Demo",components:{},data(){return{currentCase:"纵向树状图谱",isShowCodePanel:!1,graphOptions1:{},graphOptions2:{}}},mounted(){this.show()},methods:{show(o){const t=this.$refs.seeksRelationGraph1;this.resetGraph(t,"graph1");const e=this.$refs.seeksRelationGraph2;this.resetGraph(e,"graph2")},resetGraph(o,t){const e={debug:!0,layouts:[{layoutName:"tree",from:"left",max_per_width:"300",min_per_height:"40"}],allowShowMiniToolBar:!1,defaultNodeShape:1,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"};let r,a,s;e.layouts[0].from="top",e.layouts[0].min_per_width=40,e.layouts[0].max_per_width=200,e.layouts[0].min_per_height=40,e.layouts[0].max_per_height=200,e.defaultNodeWidth=30,e.defaultNodeHeight=100,e.defaultJunctionPoint="lr","graph2"===t&&(r=!0,a=!1,s="#ff0000");const i={rootId:"a",nodes:[{id:"a",text:"根节点a"},{id:"R-b",text:"R-b"},{id:"R-c",text:"R-c",expandHolderPosition:"top"},{id:"R-c-1",text:"R-c-1"},{id:"R-c-2",text:"R-c-2"},{id:"R-d",text:"R-d"},{id:"b",text:"b"},{id:"c",text:"c",expandHolderPosition:"bottom"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"},{id:"d",text:"d"},{id:"e",text:"e"}],lines:[{from:"R-b",to:"a",showStartArrow:r,showEndArrow:a,color:s},{from:"R-c",to:"a",showStartArrow:r,showEndArrow:a,color:s},{from:"R-c-1",to:"R-c",showStartArrow:r,showEndArrow:a,color:s},{from:"R-c-2",to:"R-c",showStartArrow:r,showEndArrow:a,color:s},{from:"R-d",to:"a",showStartArrow:r,showEndArrow:a,color:s},{from:"a",to:"b"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"},{from:"a",to:"d"},{from:"a",to:"e"}]};o.setOptions(e,t=>{this.showSeeksGraph(o,i)})},showSeeksGraph(o,t){o.setJsonData(t,o=>{o.focusNodeById("a")})},onNodeClick(o,t){console.log("onNodeClick:",o)},onLineClick(o,t,e){console.log("onLineClick:",o)}}},i=s,d=e("2877"),n=Object(d["a"])(i,r,a,!1,null,"6d48a13f",null);t["default"]=n.exports}}]);
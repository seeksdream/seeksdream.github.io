(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aabc"],{bd04:function(t,e,o){"use strict";o.r(e);var d=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{height:"50px","padding-top":"6px","padding-left":"30px","padding-right":"30px","border-bottom":"#efefef solid 1px"}},[e("el-radio-group",{attrs:{size:"small"},on:{change:t.resetGraph},model:{value:t.currentCase,callback:function(e){t.currentCase=e},expression:"currentCase"}},[e("el-radio-button",{attrs:{label:"横向树状图谱"}}),e("el-radio-button",{attrs:{label:"纵向树状图谱"}})],1),e("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[e("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4BothwayTree.vue",target:"_blank"}},[t._v("查看代码")])],1)],1),e("div",{staticStyle:{height:"calc(100vh - 100px)"}},[e("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:t.graphOptions,"on-node-click":t.onNodeClick,"on-line-click":t.onLineClick}})],1)])},i=[],r={name:"Demo",components:{},data(){return{currentCase:"横向树状图谱",isShowCodePanel:!1,graphOptions:{backgrounImage:"https://camo.githubusercontent.com/ede1654f055903cdc39044129d15d5b158f4f3b33ba5b7c21c7407792a506dea/687474703a2f2f72656c6174696f6e2d67726170682e636f6d2f776562736974652f6c6f676f",backgrounImageNoRepeat:!0,layouts:[{layoutName:"tree",from:"left",max_per_width:"300",min_per_height:"40"}],defaultNodeShape:1,defaultNodeWidth:"100",defaultLineShape:4,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},mounted(){this.resetGraph()},methods:{resetGraph(){"横向树状图谱"===this.currentCase?(this.graphOptions.layouts[0].from="left",this.graphOptions.layouts[0].min_per_width=40,this.graphOptions.layouts[0].max_per_width=300,this.graphOptions.layouts[0].min_per_height=40,this.graphOptions.layouts[0].max_per_height=200,this.graphOptions.defaultNodeWidth=100,this.graphOptions.defaultNodeHeight=30,this.graphOptions.defaultJunctionPoint="tb"):(this.graphOptions.layouts[0].from="top",this.graphOptions.layouts[0].min_per_width=40,this.graphOptions.layouts[0].max_per_width=200,this.graphOptions.layouts[0].min_per_height=40,this.graphOptions.layouts[0].max_per_height=200,this.graphOptions.defaultNodeWidth=30,this.graphOptions.defaultNodeHeight=100,this.graphOptions.defaultJunctionPoint="lr"),this.$refs.seeksRelationGraph.setOptions(this.graphOptions,t=>{this.showSeeksGraph()})},showSeeksGraph(){const t={rootId:"a",nodes:[{id:"a",text:"根节点a"},{id:"R-b",text:"R-b"},{id:"R-b-1",text:"R-b-1"},{id:"R-b-2",text:"R-b-2"},{id:"R-b-3",text:"R-b-3"},{id:"R-c",text:"R-c"},{id:"R-c-1",text:"R-c-1"},{id:"R-c-2",text:"R-c-2"},{id:"R-d",text:"R-d"},{id:"R-d-1",text:"R-d-1"},{id:"R-d-2",text:"R-d-2"},{id:"R-d-3",text:"R-d-3"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"b2-3",text:"b2-3"},{id:"b2-4",text:"b2-4"},{id:"b3",text:"b3"},{id:"b3-1",text:"b3-1"},{id:"b3-2",text:"b3-2"},{id:"b3-3",text:"b3-3"},{id:"b3-4",text:"b3-4"},{id:"b3-5",text:"b3-5"},{id:"b3-6",text:"b3-6"},{id:"b3-7",text:"b3-7"},{id:"b4",text:"b4"},{id:"b4-1",text:"b4-1"},{id:"b4-2",text:"b4-2"},{id:"b4-3",text:"b4-3"},{id:"b4-4",text:"b4-4"},{id:"b4-5",text:"b4-5"},{id:"b4-6",text:"b4-6"},{id:"b4-7",text:"b4-7"},{id:"b4-8",text:"b4-8"},{id:"b4-9",text:"b4-9"},{id:"b5",text:"b5"},{id:"b5-1",text:"b5-1"},{id:"b5-2",text:"b5-2"},{id:"b5-3",text:"b5-3"},{id:"b5-4",text:"b5-4"},{id:"b6",text:"b6"},{id:"b6-1",text:"b6-1"},{id:"b6-2",text:"b6-2"},{id:"b6-3",text:"b6-3"},{id:"b6-4",text:"b6-4"},{id:"b6-5",text:"b6-5"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c1-1",text:"c1-1"},{id:"c1-2",text:"c1-2"},{id:"c1-3",text:"c1-3"},{id:"c1-4",text:"c1-4"},{id:"c1-5",text:"c1-5"},{id:"c1-6",text:"c1-6"},{id:"c1-7",text:"c1-7"},{id:"c2",text:"c2"},{id:"c2-1",text:"c2-1"},{id:"c2-2",text:"c2-2"},{id:"c3",text:"c3"},{id:"c3-1",text:"c3-1"},{id:"c3-2",text:"c3-2"},{id:"c3-3",text:"c3-3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d1-1",text:"d1-1"},{id:"d1-2",text:"d1-2"},{id:"d1-3",text:"d1-3"},{id:"d1-4",text:"d1-4"},{id:"d1-5",text:"d1-5"},{id:"d1-6",text:"d1-6"},{id:"d1-7",text:"d1-7"},{id:"d1-8",text:"d1-8"},{id:"d2",text:"d2"},{id:"d2-1",text:"d2-1"},{id:"d2-2",text:"d2-2"},{id:"d3",text:"d3"},{id:"d3-1",text:"d3-1"},{id:"d3-2",text:"d3-2"},{id:"d3-3",text:"d3-3"},{id:"d3-4",text:"d3-4"},{id:"d3-5",text:"d3-5"},{id:"d4",text:"d4"},{id:"d4-1",text:"d4-1"},{id:"d4-2",text:"d4-2"},{id:"d4-3",text:"d4-3"},{id:"d4-4",text:"d4-4"},{id:"d4-5",text:"d4-5"},{id:"d4-6",text:"d4-6"},{id:"e",text:"e"},{id:"e1",text:"e1"},{id:"e1-1",text:"e1-1"},{id:"e1-2",text:"e1-2"},{id:"e1-3",text:"e1-3"},{id:"e1-4",text:"e1-4"},{id:"e1-5",text:"e1-5"},{id:"e1-6",text:"e1-6"},{id:"e2",text:"e2"},{id:"e2-1",text:"e2-1"},{id:"e2-2",text:"e2-2"},{id:"e2-3",text:"e2-3"},{id:"e2-4",text:"e2-4"},{id:"e2-5",text:"e2-5"},{id:"e2-6",text:"e2-6"},{id:"e2-7",text:"e2-7"},{id:"e2-8",text:"e2-8"},{id:"e2-9",text:"e2-9"}],lines:[{from:"R-b",to:"a"},{from:"R-b-1",to:"R-b"},{from:"R-b-2",to:"R-b"},{from:"R-b-3",to:"R-b"},{from:"R-c",to:"a"},{from:"R-c-1",to:"R-c"},{from:"R-c-2",to:"R-c"},{from:"R-d",to:"a",isReverse:!0},{from:"R-d-1",to:"R-d",isReverse:!0},{from:"R-d-2",to:"R-d",isReverse:!0},{from:"R-d-3",to:"R-d",isReverse:!0},{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"b2",to:"b2-3"},{from:"b2",to:"b2-4"},{from:"b",to:"b3"},{from:"b3",to:"b3-1"},{from:"b3",to:"b3-2"},{from:"b3",to:"b3-3"},{from:"b3",to:"b3-4"},{from:"b3",to:"b3-5"},{from:"b3",to:"b3-6"},{from:"b3",to:"b3-7"},{from:"b",to:"b4"},{from:"b4",to:"b4-1"},{from:"b4",to:"b4-2"},{from:"b4",to:"b4-3"},{from:"b4",to:"b4-4"},{from:"b4",to:"b4-5"},{from:"b4",to:"b4-6"},{from:"b4",to:"b4-7"},{from:"b4",to:"b4-8"},{from:"b4",to:"b4-9"},{from:"b",to:"b5"},{from:"b5",to:"b5-1"},{from:"b5",to:"b5-2"},{from:"b5",to:"b5-3"},{from:"b5",to:"b5-4"},{from:"b",to:"b6"},{from:"b6",to:"b6-1"},{from:"b6",to:"b6-2"},{from:"b6",to:"b6-3"},{from:"b6",to:"b6-4"},{from:"b6",to:"b6-5"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c1",to:"c1-1"},{from:"c1",to:"c1-2"},{from:"c1",to:"c1-3"},{from:"c1",to:"c1-4"},{from:"c1",to:"c1-5"},{from:"c1",to:"c1-6"},{from:"c1",to:"c1-7"},{from:"c",to:"c2"},{from:"c2",to:"c2-1"},{from:"c2",to:"c2-2"},{from:"c",to:"c3"},{from:"c3",to:"c3-1"},{from:"c3",to:"c3-2"},{from:"c3",to:"c3-3"},{from:"a",to:"d"},{from:"d",to:"d1"},{from:"d1",to:"d1-1"},{from:"d1",to:"d1-2"},{from:"d1",to:"d1-3"},{from:"d1",to:"d1-4"},{from:"d1",to:"d1-5"},{from:"d1",to:"d1-6"},{from:"d1",to:"d1-7"},{from:"d1",to:"d1-8"},{from:"d",to:"d2"},{from:"d2",to:"d2-1"},{from:"d2",to:"d2-2"},{from:"d",to:"d3"},{from:"d3",to:"d3-1"},{from:"d3",to:"d3-2"},{from:"d3",to:"d3-3"},{from:"d3",to:"d3-4"},{from:"d3",to:"d3-5"},{from:"d",to:"d4"},{from:"d4",to:"d4-1"},{from:"d4",to:"d4-2"},{from:"d4",to:"d4-3"},{from:"d4",to:"d4-4"},{from:"d4",to:"d4-5"},{from:"d4",to:"d4-6"},{from:"a",to:"e"},{from:"e",to:"e1"},{from:"e1",to:"e1-1"},{from:"e1",to:"e1-2"},{from:"e1",to:"e1-3"},{from:"e1",to:"e1-4"},{from:"e1",to:"e1-5"},{from:"e1",to:"e1-6"},{from:"e",to:"e2"},{from:"e2",to:"e2-1"},{from:"e2",to:"e2-2"},{from:"e2",to:"e2-3"},{from:"e2",to:"e2-4"},{from:"e2",to:"e2-5"},{from:"e2",to:"e2-6"},{from:"e2",to:"e2-7"},{from:"e2",to:"e2-8"},{from:"e2",to:"e2-9"}]};this.$refs.seeksRelationGraph.setJsonData(t,t=>{})},onNodeClick(t,e){console.log("onNodeClick:",t)},onLineClick(t,e){console.log("onLineClick:",t)}}},b=r,f=o("2877"),m=Object(f["a"])(b,d,i,!1,null,"fbd27b2a",null);e["default"]=m.exports}}]);
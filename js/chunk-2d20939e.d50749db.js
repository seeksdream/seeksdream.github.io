(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20939e"],{a7c5:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{height:"calc(100vh - 50px)"}},[e("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:t.graphOptions,"on-node-click":t.onNodeClick,"on-line-click":t.onLineClick}})],1),e("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[e("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4LineAdv.vue",target:"_blank"}},[t._v("查看代码")])],1)],1)},i=[],a={name:"Demo",components:{},data(){return{isShowCodePanel:!1,graphOptions:{defaultNodeBorderWidth:0,checkedLineColor:"#ff0000",layouts:[{layoutName:"fixed"}]}}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){const t=0,e=0,o={rootId:"a",nodes:[{id:"a",text:"A",x:t,y:e},{id:"c",text:"C",x:t+350,y:e+5},{id:"b",text:"B",x:t-220,y:e-2},{id:"e",text:"E",x:t+126,y:e-171},{id:"i",text:"I",x:t+1,y:e+173},{id:"m",text:"M",x:t+425,y:e+171},{id:"m2",text:"M-2",x:t+459,y:e-189},{id:"m3",text:"M-3",x:t+236,y:e-177},{id:"m4",text:"M-4",x:t+354,y:e-183},{id:"p3",text:"P-3",x:t-129,y:e-389},{id:"p4",text:"P-4",x:t-238,y:e-316}],lines:[{from:"a",to:"c",text:"a > c",color:"rgba(30, 144, 255, 1)"},{from:"c",to:"a",text:"c > a",color:"rgba(255, 140, 0, 1)"},{from:"a",to:"b",text:"双向箭头",showStartArrow:!0,showEndArrow:!0},{from:"a",to:"e",text:"不显示箭头",isHideArrow:!0},{from:"b",to:"i",text:"折线",lineShape:4},{from:"c",to:"m2",text:"样式3",lineShape:3,color:"#00ced1"},{from:"c",to:"m3",text:"样式3",lineShape:3,color:"#00ced1"},{from:"c",to:"m4",text:"样式3",lineShape:3,color:"#00ced1"},{from:"i",to:"m",text:"数据为：i > m 但显示为 m > i",showStartArrow:!0,showEndArrow:!1,color:"#00ced1"},{from:"i",to:"m",text:"数据为：i > m",showStartArrow:!1,showEndArrow:!0,color:"rgba(255, 140, 0, 1)"},{from:"e",to:"p3",text:"这条关系线的文字非常长，但不顺着这条线走",lineShape:5,color:"#ffd700"},{from:"e",to:"p4",text:"这条关系线的文字非常长，它可以顺着这条线走",lineShape:5,color:"#ffd700"}]};this.$refs.seeksRelationGraph.setJsonData(o,t=>{})},onNodeClick(t,e){console.log("onNodeClick:",t)},onLineClick(t,e,o){console.log("onLineClick:",t,e)}}},s=a,n=o("2877"),c=Object(n["a"])(s,r,i,!1,null,"014b5bd6",null);e["default"]=c.exports}}]);
import{n as i}from"./index-d446e728.js";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{},[t("div",{staticStyle:{"margin-top":"10px","border-bottom":"#efefef solid 1px","padding-left":"20px"}},[e._v(" 调整图谱大小到： "),t("el-radio-group",{attrs:{size:"mini"},on:{change:e.onSizeOptionChanged},model:{value:e.currentSize,callback:function(r){e.currentSize=r},expression:"currentSize"}},[t("el-radio-button",{attrs:{label:400}},[e._v("400")]),t("el-radio-button",{attrs:{label:600}},[e._v("600")]),t("el-radio-button",{attrs:{label:800}},[e._v("800")]),t("el-radio-button",{attrs:{label:1e3}},[e._v("1000")])],1)],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.g_loading,expression:"g_loading"}],staticStyle:{border:"#ff0000 solid 1px"},style:{width:e.myGraphPanelSize.width+"px",height:e.myGraphPanelSize.height+"px"}},[t("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.graphOptions}})],1),t("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[t("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4GraphResize.vue",target:"_blank"}},[e._v("查看代码 ")])],1)],1)},s=[];const l={name:"SeeksRelationGraphDemo",components:{},data(){return{g_loading:!0,demoname:"---",currentSize:400,myGraphPanelSize:{width:400,height:400},graphOptions:{debug:!0,layouts:[{label:"中心",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,from:"left",min_per_width:"200",max_per_width:"500",min_per_height:"40",max_per_height:"60",levelDistance:""}],defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},moveToCenterWhenRefresh:!0,useAnimationWhenRefresh:!0,zoomToFitWhenRefresh:!0,defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:"100",defaultLineShape:4,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},created(){},mounted(){this.demoname=this.$route.params.demoname,this.setGraphData()},methods:{setGraphData(){const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1-6",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]};console.log(JSON.stringify(e)),this.g_loading=!1,this.$refs.seeksRelationGraph.setJsonData(e,a=>{})},onSizeOptionChanged(){this.myGraphPanelSize.width=this.currentSize,this.myGraphPanelSize.height=this.currentSize,this.$nextTick(()=>{this.$refs.seeksRelationGraph.onGraphResize(),this.$refs.seeksRelationGraph.refresh()})}}},o={};var d=i(l,n,s,!1,h,null,null,null);function h(e){for(let a in o)this[a]=o[a]}const m=function(){return d.exports}();export{m as default};

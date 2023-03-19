import{n as r}from"./index-91226d8d.js";var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.g_loading,expression:"g_loading"}],staticStyle:{"margin-top":"50px",width:"calc(100% - 10px)",height:"calc(100vh - 140px)"}},[a("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.graphOptions,"on-node-expand":e.onNodeExpand,"on-node-collapse":e.onNodeCollapse}})],1),a("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[a("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4Expand.vue",target:"_blank"}},[e._v("查看代码 ")])],1)],1)},i=[];const s={name:"SeeksRelationGraphDemo",components:{},data(){return{g_loading:!0,demoname:"---",graphOptions:{backgrounImage:"https://camo.githubusercontent.com/ede1654f055903cdc39044129d15d5b158f4f3b33ba5b7c21c7407792a506dea/687474703a2f2f72656c6174696f6e2d67726170682e636f6d2f776562736974652f6c6f676f",backgrounImageNoRepeat:!0,layouts:[{label:"中心",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,from:"left",max_per_width:"300",min_per_height:"40"}],defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},moveToCenterWhenRefresh:!1,defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:"100",defaultLineShape:4,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},created(){},mounted(){this.demoname=this.$route.params.demoname,this.setGraphData()},methods:{setGraphData(){const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b-固定数据展开/关闭"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c-动态数据展开/关闭"},{id:"c1",text:"c1-动态获取子节点",expandHolderPosition:"right",expanded:!1,data:{isNeedLoadDataFromRemoteServer:!0,childrenLoaded:!1}},{id:"c2",text:"c2-动态获取子节点",expandHolderPosition:"right",expanded:!1,data:{isNeedLoadDataFromRemoteServer:!0,childrenLoaded:!1}},{id:"c3",text:"c3-动态获取子节点",expandHolderPosition:"right",expanded:!1,data:{isNeedLoadDataFromRemoteServer:!0,childrenLoaded:!1}}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]};console.log(JSON.stringify(e)),setTimeout(()=>{this.g_loading=!1,this.$refs.seeksRelationGraph.setJsonData(e,t=>{})},1e3)},onNodeCollapse(e,t){this.$refs.seeksRelationGraph.refresh()},onNodeExpand(e,t){if(console.log("onNodeExpand:",e),!e.data.isNeedLoadDataFromRemoteServer){console.log("这个节点的子节点已经加载过了"),this.$refs.seeksRelationGraph.refresh();return}if(e.data.childrenLoaded){console.log("这个节点的子节点已经加载过了"),this.$refs.seeksRelationGraph.refresh();return}this.g_loading=!0,e.data.childrenLoaded=!0,this.loadChildNodesFromRemoteServer(e,a=>{this.g_loading=!1,this.$refs.seeksRelationGraph.getInstance().appendJsonData(a,c=>{})})},loadChildNodesFromRemoteServer(e,t){setTimeout(function(){const a={nodes:[{id:e.id+"-child-1",text:e.id+"-的动态子节点1",width:150},{id:e.id+"-child-2",text:e.id+"-的动态子节点2",width:150},{id:e.id+"-child-3",text:e.id+"-的动态子节点3",width:150}],lines:[{from:e.id,to:e.id+"-child-1",text:"动态子节点"},{from:e.id,to:e.id+"-child-2",text:"动态子节点"},{from:e.id,to:e.id+"-child-3",text:"动态子节点"}]};t(a)},1e3)}}},o={};var n=r(s,d,i,!1,l,null,null,null);function l(e){for(let t in o)this[t]=o[t]}const h=function(){return n.exports}();export{h as default};

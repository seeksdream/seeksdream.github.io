import{n as i}from"./index-91226d8d.js";var c=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticStyle:{height:"calc(100vh - 50px)"}},[e("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:t.graphOptions,"on-node-click":t.onNodeClick,"on-line-click":t.onLineClick}})],1),e("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[e("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4LayoutCenter.vue",target:"_blank"}},[t._v("查看代码")])],1)],1)},s=[];const r={name:"Demo",components:{},data(){return{isShowCodePanel:!1,graphOptions:{defaultNodeBorderWidth:0,defaultNodeColor:"rgba(238, 178, 94, 1)",allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layouts:[{label:"中心",layoutName:"center",layoutClassName:"seeks-layout-center"}],defaultJunctionPoint:"border"}}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){const t={rootId:"2",nodes:[{id:"1",text:"节点-1",myicon:"el-icon-star-on"},{id:"2",text:"节点-2",myicon:"el-icon-setting"},{id:"3",text:"节点-3",myicon:"el-icon-setting"},{id:"4",text:"节点-4",myicon:"el-icon-star-on"},{id:"6",text:"节点-6",myicon:"el-icon-setting"},{id:"7",text:"节点-7",myicon:"el-icon-setting"},{id:"8",text:"节点-8",myicon:"el-icon-star-on"},{id:"9",text:"节点-9",myicon:"el-icon-headset"},{id:"71",text:"节点-71",myicon:"el-icon-headset"},{id:"72",text:"节点-72",myicon:"el-icon-s-tools"},{id:"73",text:"节点-73",myicon:"el-icon-star-on"},{id:"81",text:"节点-81",myicon:"el-icon-s-promotion"},{id:"82",text:"节点-82",myicon:"el-icon-s-promotion"},{id:"83",text:"节点-83",myicon:"el-icon-star-on"},{id:"84",text:"节点-84",myicon:"el-icon-s-promotion"},{id:"85",text:"节点-85",myicon:"el-icon-sunny"},{id:"91",text:"节点-91",myicon:"el-icon-sunny"},{id:"92",text:"节点-82",myicon:"el-icon-sunny"},{id:"51",text:"节点-51",myicon:"el-icon-sunny"},{id:"52",text:"节点-52",myicon:"el-icon-sunny"},{id:"53",text:"节点-53",myicon:"el-icon-sunny"},{id:"54",text:"节点-54",myicon:"el-icon-sunny"},{id:"55",text:"节点-55",myicon:"el-icon-sunny"},{id:"5",text:"节点-5",myicon:"el-icon-sunny"}],lines:[{from:"7",to:"71",text:"投资"},{from:"7",to:"72",text:"投资"},{from:"7",to:"73",text:"投资"},{from:"8",to:"81",text:"投资"},{from:"8",to:"82",text:"投资"},{from:"8",to:"83",text:"投资"},{from:"8",to:"84",text:"投资"},{from:"8",to:"85",text:"投资"},{from:"9",to:"91",text:"投资"},{from:"9",to:"92",text:"投资"},{from:"5",to:"51",text:"投资1"},{from:"5",to:"52",text:"投资"},{from:"5",to:"53",text:"投资3"},{from:"5",to:"54",text:"投资4"},{from:"5",to:"55",text:"投资"},{from:"1",to:"2",text:"投资"},{from:"3",to:"1",text:"高管"},{from:"4",to:"2",text:"高管"},{from:"6",to:"2",text:"高管"},{from:"7",to:"2",text:"高管"},{from:"8",to:"2",text:"高管"},{from:"9",to:"2",text:"高管"},{from:"1",to:"5",text:"投资"}]};this.$refs.seeksRelationGraph.setJsonData(t,o=>{})},onNodeClick(t,o){console.log("onNodeClick:",t)},onLineClick(t,o,e){console.log("onLineClick:",t)}}},n={};var l=i(r,c,s,!1,a,null,null,null);function a(t){for(let o in n)this[o]=n[o]}const d=function(){return l.exports}();export{d as default};

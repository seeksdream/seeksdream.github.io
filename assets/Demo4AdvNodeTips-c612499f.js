import{n as c}from"./index-d446e728.js";var d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{ref:"myPage",staticStyle:{height:"calc(100vh - 50px)"}},[e("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:t.graphOptions,"on-node-click":t.onNodeClick,"on-line-click":t.onLineClick},scopedSlots:t._u([{key:"node",fn:function(a){var n=a.node;return e("div",{on:{mouseover:function(i){return t.showNodeTips(n,i)},mouseout:function(i){return t.hideNodeTips(n,i)}}},[e("div",{staticStyle:{height:"80px","line-height":"80px","border-radius":"50%",cursor:"pointer"}},[e("i",{class:n.data.myicon,staticStyle:{"font-size":"30px"}})]),e("div",{staticStyle:{color:"forestgreen","font-size":"16px",position:"absolute",width:"160px",height:"25px","line-height":"25px","margin-top":"5px","margin-left":"-48px","text-align":"center","background-color":"rgba(66,187,66,0.2)"}},[t._v(" "+t._s(n.data.myicon)+" ")])])}}])},[e("div",{staticStyle:{"border-top":"#efefef solid 1px",height:"60px","line-height":"60px","text-align":"center","font-size":"18px","background-color":"#ffffff"},attrs:{slot:"bottomPanel"},slot:"bottomPanel"},[t._v(' 这里是底部插槽 slot="bottomPanel",可以自定义这里的内容 ')])])],1),t.isShowNodeTipsPanel?e("div",{staticStyle:{"z-index":"999",padding:"10px","background-color":"#ffffff",border:"#eeeeee solid 1px","box-shadow":"0px 0px 8px #cccccc",position:"absolute"},style:{left:t.nodeMenuPanelPosition.x+"px",top:t.nodeMenuPanelPosition.y+"px"}},[e("div",{staticStyle:{"line-height":"25px","padding-left":"10px",color:"#888888","font-size":"12px"}},[t._v("节点名称："+t._s(t.currentNode.text))]),e("div",{staticClass:"c-node-menu-item"},[t._v("id:"+t._s(t.currentNode.text))]),e("div",{staticClass:"c-node-menu-item"},[t._v("图标:"+t._s(t.currentNode.data.myicon))])]):t._e(),e("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[e("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4AdvNodeTips.vue",target:"_blank"}},[t._v("查看代码")])],1)],1)},r=[];const l={name:"Demo",components:{},data(){return{isShowCodePanel:!1,isShowNodeTipsPanel:!1,nodeMenuPanelPosition:{x:0,y:0},currentNode:{},graphOptions:{allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultJunctionPoint:"border"}}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){const t={rootId:"2",nodes:[{id:"1",text:"节点-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"节点-2",data:{myicon:"el-icon-setting"}},{id:"3",text:"节点-3",data:{myicon:"el-icon-setting"}},{id:"4",text:"节点-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"节点-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"节点-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"节点-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"节点-9",data:{myicon:"el-icon-headset"}},{id:"71",text:"节点-71",data:{myicon:"el-icon-headset"}},{id:"72",text:"节点-72",data:{myicon:"el-icon-s-tools"}},{id:"73",text:"节点-73",data:{myicon:"el-icon-star-on"}},{id:"81",text:"节点-81",data:{myicon:"el-icon-s-promotion"}},{id:"82",text:"节点-82",data:{myicon:"el-icon-s-promotion"}},{id:"83",text:"节点-83",data:{myicon:"el-icon-star-on"}},{id:"84",text:"节点-84",data:{myicon:"el-icon-s-promotion"}},{id:"85",text:"节点-85",data:{myicon:"el-icon-sunny"}},{id:"91",text:"节点-91",data:{myicon:"el-icon-sunny"}},{id:"92",text:"节点-82",data:{myicon:"el-icon-sunny"}},{id:"51",text:"节点-51",data:{myicon:"el-icon-sunny"}},{id:"52",text:"节点-52",data:{myicon:"el-icon-sunny"}},{id:"53",text:"节点-53",data:{myicon:"el-icon-sunny"}},{id:"54",text:"节点-54",data:{myicon:"el-icon-sunny"}},{id:"55",text:"节点-55",data:{myicon:"el-icon-sunny"}},{id:"5",text:"节点-5",data:{myicon:"el-icon-sunny"}}],lines:[{from:"7",to:"71",text:"投资"},{from:"7",to:"72",text:"投资"},{from:"7",to:"73",text:"投资"},{from:"8",to:"81",text:"投资"},{from:"8",to:"82",text:"投资"},{from:"8",to:"83",text:"投资"},{from:"8",to:"84",text:"投资"},{from:"8",to:"85",text:"投资"},{from:"9",to:"91",text:"投资"},{from:"9",to:"92",text:"投资"},{from:"5",to:"51",text:"投资1"},{from:"5",to:"52",text:"投资"},{from:"5",to:"53",text:"投资3"},{from:"5",to:"54",text:"投资4"},{from:"5",to:"55",text:"投资"},{from:"1",to:"2",text:"投资"},{from:"3",to:"1",text:"高管"},{from:"4",to:"2",text:"高管"},{from:"6",to:"2",text:"高管"},{from:"7",to:"2",text:"高管"},{from:"8",to:"2",text:"高管"},{from:"9",to:"2",text:"高管"},{from:"1",to:"5",text:"投资"}]};this.$refs.seeksRelationGraph.setJsonData(t,o=>{})},onNodeClick(t,o){console.log("onNodeClick:",t)},onLineClick(t,o,e){console.log("onLineClick:",t)},showNodeTips(t,o){this.currentNode=t;const e=this.$refs.myPage.getBoundingClientRect();console.log("showNodeMenus:",o,e),this.isShowNodeTipsPanel=!0,this.nodeMenuPanelPosition.x=o.clientX-e.x+10,this.nodeMenuPanelPosition.y=o.clientY-e.y+10},hideNodeTips(t,o){this.isShowNodeTipsPanel=!1}}},s={};var m=c(l,d,r,!1,x,"76f350f4",null,null);function x(t){for(let o in s)this[o]=s[o]}const p=function(){return m.exports}();export{p as default};

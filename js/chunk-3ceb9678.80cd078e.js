(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ceb9678"],{"0c41":function(o,t,e){var n=e("8442");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);var i=e("499e").default;i("071a4992",n,!0,{sourceMap:!1,shadowMode:!1})},"12ac":function(o,t,e){"use strict";e.r(t);var n=function(){var o=this,t=o._self._c;return t("div",[t("div",{ref:"myPage",staticStyle:{height:"calc(100vh - 50px)"},on:{click:function(t){o.isShowNodeMenuPanel=!1}}},[t("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:o.graphOptions,"on-node-click":o.onNodeClick,"on-line-click":o.onLineClick},scopedSlots:o._u([{key:"node",fn:function({node:e}){return t("div",{},[t("div",{staticStyle:{height:"80px","line-height":"80px","border-radius":"50%",cursor:"pointer"},on:{click:function(t){return o.showNodeMenus(e,t)},contextmenu:function(t){return t.preventDefault(),t.stopPropagation(),o.showNodeMenus(e,t)}}},[t("i",{class:e.data.myicon,staticStyle:{"font-size":"30px"}})]),t("div",{staticStyle:{color:"forestgreen","font-size":"16px",position:"absolute",width:"160px",height:"25px","line-height":"25px","margin-top":"5px","margin-left":"-48px","text-align":"center","background-color":"rgba(66,187,66,0.2)"}},[o._v(" "+o._s(e.data.myicon)+" ")])])}}])},[t("div",{staticStyle:{"border-top":"#efefef solid 1px",height:"60px","line-height":"60px","text-align":"center","font-size":"18px","background-color":"#ffffff"},attrs:{slot:"bottomPanel"},slot:"bottomPanel"},[o._v(' 这里是底部插槽 slot="bottomPanel",可以自定义这里的内容 ')])])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:o.isShowNodeMenuPanel,expression:"isShowNodeMenuPanel"}],staticStyle:{"z-index":"999",padding:"10px","background-color":"#ffffff",border:"#eeeeee solid 1px","box-shadow":"0px 0px 8px #cccccc",position:"absolute"},style:{left:o.nodeMenuPanelPosition.x+"px",top:o.nodeMenuPanelPosition.y+"px"}},[t("div",{staticStyle:{"line-height":"25px","padding-left":"10px",color:"#888888","font-size":"12px"}},[o._v("对这个节点进行操作：")]),t("div",{staticClass:"c-node-menu-item",on:{click:function(t){return t.stopPropagation(),o.doAction("操作1")}}},[o._v("操作1")]),t("div",{staticClass:"c-node-menu-item",on:{click:function(t){return t.stopPropagation(),o.doAction("操作1")}}},[o._v("操作2")]),t("div",{staticClass:"c-node-menu-item",on:{click:function(t){return t.stopPropagation(),o.doAction("操作1")}}},[o._v("操作3")]),t("div",{staticClass:"c-node-menu-item",on:{click:function(t){return t.stopPropagation(),o.doAction("操作1")}}},[o._v("操作4")])]),t("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[t("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4AdvSlot.vue",target:"_blank"}},[o._v("查看代码")])],1)],1)},i=[],a={name:"Demo",components:{},data(){return{isShowCodePanel:!1,isShowNodeMenuPanel:!1,nodeMenuPanelPosition:{x:0,y:0},graphOptions:{allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultJunctionPoint:"border"}}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){const o={rootId:"2",nodes:[{id:"1",name:"节点-1",data:{myicon:"el-icon-star-on"}},{id:"2",name:"节点-2",data:{myicon:"el-icon-setting"}},{id:"3",name:"节点-3",data:{myicon:"el-icon-setting"}},{id:"4",name:"节点-4",data:{myicon:"el-icon-star-on"}},{id:"6",name:"节点-6",data:{myicon:"el-icon-setting"}},{id:"7",name:"节点-7",data:{myicon:"el-icon-setting"}},{id:"8",name:"节点-8",data:{myicon:"el-icon-star-on"}},{id:"9",name:"节点-9",data:{myicon:"el-icon-headset"}},{id:"71",name:"节点-71",data:{myicon:"el-icon-headset"}},{id:"72",name:"节点-72",data:{myicon:"el-icon-s-tools"}},{id:"73",name:"节点-73",data:{myicon:"el-icon-star-on"}},{id:"81",name:"节点-81",data:{myicon:"el-icon-s-promotion"}},{id:"82",name:"节点-82",data:{myicon:"el-icon-s-promotion"}},{id:"83",name:"节点-83",data:{myicon:"el-icon-star-on"}},{id:"84",name:"节点-84",data:{myicon:"el-icon-s-promotion"}},{id:"85",name:"节点-85",data:{myicon:"el-icon-sunny"}},{id:"91",name:"节点-91",data:{myicon:"el-icon-sunny"}},{id:"92",name:"节点-82",data:{myicon:"el-icon-sunny"}},{id:"51",name:"节点-51",data:{myicon:"el-icon-sunny"}},{id:"52",name:"节点-52",data:{myicon:"el-icon-sunny"}},{id:"53",name:"节点-53",data:{myicon:"el-icon-sunny"}},{id:"54",name:"节点-54",data:{myicon:"el-icon-sunny"}},{id:"55",name:"节点-55",data:{myicon:"el-icon-sunny"}},{id:"5",name:"节点-5",data:{myicon:"el-icon-sunny"}}],lines:[{from:"7",to:"71",text:"投资"},{from:"7",to:"72",text:"投资"},{from:"7",to:"73",text:"投资"},{from:"8",to:"81",text:"投资"},{from:"8",to:"82",text:"投资"},{from:"8",to:"83",text:"投资"},{from:"8",to:"84",text:"投资"},{from:"8",to:"85",text:"投资"},{from:"9",to:"91",text:"投资"},{from:"9",to:"92",text:"投资"},{from:"5",to:"51",text:"投资1"},{from:"5",to:"52",text:"投资"},{from:"5",to:"53",text:"投资3"},{from:"5",to:"54",text:"投资4"},{from:"5",to:"55",text:"投资"},{from:"1",to:"2",text:"投资"},{from:"3",to:"1",text:"高管"},{from:"4",to:"2",text:"高管"},{from:"6",to:"2",text:"高管"},{from:"7",to:"2",text:"高管"},{from:"8",to:"2",text:"高管"},{from:"9",to:"2",text:"高管"},{from:"1",to:"5",text:"投资"}]};this.$refs.seeksRelationGraph.setJsonData(o,o=>{})},onNodeClick(o,t){console.log("onNodeClick:",o)},onLineClick(o,t){console.log("onLineClick:",o)},showNodeMenus(o,t){this.currentNode=o;const e=this.$refs.myPage.getBoundingClientRect();console.log("showNodeMenus:",t,e),this.isShowNodeMenuPanel=!0,this.nodeMenuPanelPosition.x=t.clientX-e.x,this.nodeMenuPanelPosition.y=t.clientY-e.y},doAction(o){this.$notify({title:"提示",message:"对节点【"+this.currentNode.text+"】进行了："+o,type:"success"}),this.isShowNodeMenuPanel=!1}}},s=a,c=(e("1f69"),e("2877")),d=Object(c["a"])(s,n,i,!1,null,"67c80d8a",null);t["default"]=d.exports},"1f69":function(o,t,e){"use strict";e("0c41")},8442:function(o,t,e){var n=e("24fb");t=n(!1),t.push([o.i,".c-node-menu-item[data-v-67c80d8a]{line-height:30px;padding-left:10px;cursor:pointer;color:#444;font-size:14px;border-top:1px solid #efefef}.c-node-menu-item[data-v-67c80d8a]:hover{background-color:rgba(66,187,66,.2)}",""]),o.exports=t}}]);
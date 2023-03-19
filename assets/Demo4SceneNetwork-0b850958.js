import{n}from"./index-91226d8d.js";var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.g_loading,expression:"g_loading"}],staticStyle:{width:"calc(100% - 2px)",height:"calc(100vh - 50px)"}},[o("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.userGraphOptions}})],1),o("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[o("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4SceneNetwork.vue",target:"_blank"}},[e._v("查看代码")])],1)],1)},l=[];const h={name:"SeeksRelationGraphDemo",components:{},data(){return{g_loading:!0,userGraphOptions:{backgrounImage:"",backgrounImageNoRepeat:!0,layouts:[{label:"中心",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,max_per_height:"60",levelDistance:"200,300,200",centerOffset_x:0,centerOffset_y:0,from:"left"}],defaultNodeBorderWidth:0,defaultNodeShape:1,allowShowMiniNameFilter:!1,defaultJunctionPoint:"lr",defaultLineShape:2}}},created(){},mounted(){this.setGraphData()},methods:{setGraphData(){const e={nodes:[{text:"采集管理中心",id:"centre",nodeShape:0,width:120,height:120,offset_y:-20,color:"#34A0CE"},{text:"《数据收集服务》<br> 2355条/分钟",id:"data",nodeShape:1,width:330,height:50,fixed:!0,x:30,y:-300},{text:"《代理池服务》<br> 今日剩余：32020个",id:"proxy",nodeShape:1,width:330,height:50,fixed:!0,x:30,y:-220},{text:"《采集任务分发服务》<br> 112个/分钟",id:"task",nodeShape:1,width:330,height:50,fixed:!0,x:30,y:-140,color:"#E6A23C"},{text:"程序调度服务",id:"cron",nodeShape:1,width:130,height:40,color:"#34A0CE"},{text:"ExeSvr-01@10.0.0.201 | 最后响应：3秒前",id:"exe-01",nodeShape:1,width:500,height:35},{text:"ExeSvr-02@10.0.0.202 | 最后响应：5秒前",id:"exe-02",nodeShape:1,width:500,height:35},{text:"ExeSvr-03@10.0.0.203 | 最后响应：2秒前",id:"exe-03",nodeShape:1,width:500,height:35},{text:"ExeSvr-04@10.0.0.204 | 最后响应：4分钟前",id:"exe-04",nodeShape:1,width:500,height:35,color:"#34A0CE"},{text:"ExeSvr-05@10.0.0.205 | 最后响应：2分钟前",id:"exe-05",nodeShape:1,width:500,height:35,color:"#34A0CE"},{text:"ExeSvr-06@10.0.0.206 | 最后响应：3秒前",id:"exe-06",nodeShape:1,width:500,height:35},{text:"ExeSvr-07@10.0.0.207 | 最后响应：3秒前",id:"exe-07",nodeShape:1,width:500,height:35},{text:"ExeSvr-docker-01@10.0.0.211 | 最后响应：17天前",id:"exe-08",nodeShape:1,width:500,height:35,color:"#F56C6C"},{text:"ExeSvr-docker-02@10.0.0.211 | 最后响应：3秒前",id:"exe-09",nodeShape:1,width:500,height:35},{text:"ExeSvr-docker-03@10.0.0.211 | 最后响应：3秒前",id:"exe-10",nodeShape:1,width:500,height:35}],lines:[{from:"data",to:"centre",text:null,isHideArrow:!0,lineShape:4},{from:"proxy",to:"centre",text:null,isHideArrow:!0,lineShape:4},{from:"task",to:"centre",text:null,isHideArrow:!0,lineShape:4},{from:"centre",to:"cron",text:null,isHideArrow:!0},{from:"cron",to:"exe-01",text:null},{from:"cron",to:"exe-02",text:null},{from:"cron",to:"exe-03",text:null},{from:"cron",to:"exe-04",text:null},{from:"cron",to:"exe-05",text:null},{from:"cron",to:"exe-06",text:null},{from:"cron",to:"exe-07",text:null},{from:"cron",to:"exe-08",text:null},{from:"cron",to:"exe-09",text:null},{from:"cron",to:"exe-10",text:null}]};setTimeout(()=>{this.g_loading=!1,this.$refs.seeksRelationGraph.setJsonData(e,t=>{t.getNodes().forEach(r=>{e.nodes.some(a=>a.fixed&&a.id===r.id)&&(r.x=t.graphData.rootNode.x+r.x,r.y=t.graphData.rootNode.y+r.y)})})},1e3)}}},i={};var s=n(h,d,l,!1,x,null,null,null);function x(e){for(let t in i)this[t]=i[t]}const u=function(){return s.exports}();export{u as default};

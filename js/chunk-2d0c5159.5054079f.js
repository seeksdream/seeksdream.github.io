(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5159"],{"3e1b":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{width:"calc(100% - 2px)",height:"calc(100vh - 50px)"}},[t("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.userGraphOptions}})],1),t("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[t("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4SceneCompany.vue",target:"_blank"}},[e._v("查看代码")])],1)],1)},i=[],d=(s("14d9"),{name:"SeeksRelationGraphDemo",components:{},data(){return{g_loading:!0,userGraphOptions:{backgrounImage:"",backgrounImageNoRepeat:!0,layouts:[{label:"手工",layoutName:"fixed",layoutClassName:"seeks-layout-fixed",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1}],defaultNodeBorderWidth:0,defaultNodeShape:1,allowShowMiniNameFilter:!1,defaultJunctionPoint:"lr",defaultLineShape:2}}},created(){},mounted(){this.setGraphData()},methods:{setGraphData(){const e={entname:"中数智汇数据科技股份有限公司",invs:[{id:"inv1",text:"北京某个公司科技有限公司",desc:"40%"},{id:"inv2",text:"张蜈支",desc:"30%"},{id:"inv3",text:"如花",desc:"10%"},{id:"inv4",text:"路人甲",desc:"10%"},{id:"inv5",text:"路人乙",desc:"10%"}],persons:[{id:"person1",text:"张蜈支",desc:"董事长"},{id:"person2",text:"包奥曼",desc:"总经理"},{id:"person3",text:"路人甲",desc:"监事"},{id:"person4",text:"路人乙",desc:"董事"}],asInvs:[{id:"asinv1",text:"北京超级大橘科技有限公司",desc:"80%"},{id:"asinv2",text:"北京超级大蚂蚁科技有限公司",desc:"70%"},{id:"asinv3",text:"北京超级大米粒儿科技有限公司",desc:"20%"}],branchs:[{id:"branch1",text:"某个公司（北京）科技股份有限公司",desc:"80%"},{id:"branch2",text:"某个公司（天津）科技股份有限公司",desc:"70%"},{id:"branch4",text:"某个公司（成都）科技股份有限公司",desc:"70%"},{id:"branch5",text:"某个公司（武汉）科技股份有限公司",desc:"20%"}]};this.$refs.seeksRelationGraph.graphSetting.defaultLineShape=1;const t={x:0,y:0},s={rootId:"root",nodes:[],lines:[]},o={id:s.rootId,text:e.entname,styleClass:"c-g-center",color:"#A4C1FF",width:250,height:50,x:t.x-125,y:t.y-25},i={id:"invRoot",text:"股东",styleClass:"c-g-group-node",color:"#FFC5A6",width:100,height:50},d={id:"personRoot",text:"高管",styleClass:"c-g-group-node",color:"#B9FFA7",width:100,height:50},n={id:"asinvRoot",text:"对外投资",styleClass:"c-g-group-node",color:"#FFBEC1",width:100,height:50},a={id:"branchRoot",text:"分支机构",styleClass:"c-g-group-node",color:"#FFA1F8",width:100,height:50};i.x=t.x-200-i.width,i.y=t.y-130,d.x=t.x-200-d.width,d.y=t.y+90,n.x=t.x+200,n.y=t.y-130,a.x=t.x+200,a.y=t.y+90,s.nodes.push(o),s.nodes.push(i),s.nodes.push(d),s.nodes.push(n),s.nodes.push(a),s.lines.push({from:o.id,to:i.id,styleClass:"c-g-l-group",color:"#C7E9FF",lineShape:2}),s.lines.push({from:o.id,to:d.id,styleClass:"c-g-l-group",color:"#C7E9FF",lineShape:2}),s.lines.push({from:o.id,to:n.id,styleClass:"c-g-l-group",color:"#C7E9FF",lineShape:2}),s.lines.push({from:o.id,to:a.id,styleClass:"c-g-l-group",color:"#C7E9FF",lineShape:2}),e.invs.forEach((e,t)=>{e.width=200,e.x=i.x-300-e.width,e.y=i.y+30*t*-1+30,s.nodes.push(e),s.lines.push({from:i.id,to:e.id,text:e.desc,color:"#FFC5A6",arrow:"none",lineShape:4})}),e.persons.forEach((e,t)=>{e.width=200,e.x=d.x-200-e.width,e.y=d.y+30*t,s.nodes.push(e),s.lines.push({from:d.id,to:e.id,text:e.desc,color:"#B9FFA7",arrow:"none",lineShape:4})}),e.asInvs.forEach((e,t)=>{e.x=n.x+200,e.y=n.y+30*t*-1+30,s.nodes.push(e),s.lines.push({from:n.id,to:e.id,text:e.desc,color:"#FFBEC1",lineShape:4})}),e.branchs.forEach((e,t)=>{e.x=a.x+200,e.y=a.y+30*t,s.nodes.push(e),s.lines.push({from:a.id,to:e.id,text:e.desc,color:"#FFA1F8",lineShape:4})}),this.$refs.seeksRelationGraph.setJsonData(s,e=>{})}}}),n=d,a=s("2877"),r=Object(a["a"])(n,o,i,!1,null,"d045e7bc",null);t["default"]=r.exports}}]);
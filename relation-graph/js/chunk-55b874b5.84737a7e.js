(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55b874b5"],{"686c":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e._self._c;return o("div",[o("div",{staticStyle:{height:"calc(100vh - 50px)"}},[o("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.graphOptions,"on-node-click":e.onNodeClick,"on-line-click":e.onLineClick}})],1),o("el-button",{staticClass:"c-show-code-button",attrs:{type:"success"}},[o("el-link",{staticStyle:{color:"#ffffff"},attrs:{href:"https://github.com/seeksdream/relation-graph/blob/master/examples/views/seeks-graph-docs/demo/Demo4Node.vue",target:"_blank"}},[e._v("查看代码")])],1)],1)},d=[],i={name:"Demo",components:{},data(){return{isShowCodePanel:!1,graphOptions:{}}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(e){const o={rootId:"a",nodes:[{id:"a",text:"边框颜色",borderColor:"yellow"},{id:"a1",text:"无边框",borderWidth:-1,color:"#ff8c00"},{id:"a1-1",html:'<span style="color:#ff8c00">纯文字节点</span>'},{id:"a1-2",html:'<img src="https://camo.githubusercontent.com/ede1654f055903cdc39044129d15d5b158f4f3b33ba5b7c21c7407792a506dea/687474703a2f2f72656c6174696f6e2d67726170682e636f6d2f776562736974652f6c6f676f" width="200" style="border:#ff8c00 solid 2px;" />',nodeShape:1},{id:"a1-3",html:'<img src="https://camo.githubusercontent.com/ede1654f055903cdc39044129d15d5b158f4f3b33ba5b7c21c7407792a506dea/687474703a2f2f72656c6174696f6e2d67726170682e636f6d2f776562736974652f6c6f676f" width="100" style="border:#ff8c00 solid 2px;border-radius: 60px;" />',nodeShape:0},{id:"a1-4",html:'<div style="border:#ff8c00 solid 2px;height:80px;width:80px;border-radius: 40px;background-image: url(https://camo.githubusercontent.com/ede1654f055903cdc39044129d15d5b158f4f3b33ba5b7c21c7407792a506dea/687474703a2f2f72656c6174696f6e2d67726170682e636f6d2f776562736974652f6c6f676f);background-position: center center;" />',nodeShape:0},{id:"b",text:"字体颜色",borderWidth:1,color:"#43a2f1"},{id:"c",text:"文字颜色",fontColor:"yellow"},{id:"d",text:"节点大小",width:150,height:150,color:"#ffd700",borderWidth:1},{id:"e",text:"矩形节点",nodeShape:1},{id:"f",text:"矩形节点-固定大小",borderWidth:1,nodeShape:1,width:300,height:60},{id:"f1",text:"固定位置",fixed:!0,x:20,y:20},{id:"g",text:"自定义class实现闪烁",styleClass:"my-node-style"}],lines:[{from:"a",to:"b"},{from:"a",to:"c"},{from:"a",to:"a1"},{from:"a1",to:"a1-1"},{from:"a1",to:"a1-2"},{from:"a1",to:"a1-3"},{from:"a1",to:"a1-4"},{from:"a",to:"f1"},{from:"a",to:"d"},{from:"d",to:"f"},{from:"a",to:"g"},{from:"a",to:"e"},{from:"b",to:"e"}]};this.$refs.seeksRelationGraph.setJsonData(o,e=>{})},onNodeClick(e,o){console.log("onNodeClick:",e)},onLineClick(e,o){console.log("onLineClick:",e)}}},s=i,r=(t("d533"),t("2877")),c=Object(r["a"])(s,a,d,!1,null,"2c911692",null);o["default"]=c.exports},"8fd2":function(e,o,t){var a=t("24fb");o=a(!1),o.push([e.i,".my-node-style{background-color:#00ced1!important}.my-node-style:hover{background-color:red!important}@keyframes myFlash{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.my-node-style{animation:myFlash .6s infinite;-webkit-animation:myFlash .6s infinite}",""]),e.exports=o},d202:function(e,o,t){var a=t("8fd2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var d=t("499e").default;d("1d88327b",a,!0,{sourceMap:!1,shadowMode:!1})},d533:function(e,o,t){"use strict";t("d202")}}]);
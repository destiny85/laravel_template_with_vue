webpackJsonp([15],{STSY:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInfo=function(){return Object(n.a)({url:"/api/role",method:"get"})},t.getRoles=function(){return Object(n.a)({url:"/api/getRoles",method:"get"})},t.getInfoById=function(e){return Object(n.a)({url:"/api/role/"+e,method:"get"})},t.updateInfo=function(e,t){return Object(n.a)({url:"/api/role/"+e,method:"PATCH",data:t})},t.deleteInfoById=function(e){return Object(n.a)({url:"/api/role/"+e,method:"delete"})},t.addInfo=function(e){return Object(n.a)({url:"/api/role",method:"post",data:e})},t.Model=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];this.name=e,this.explain=t,this.remark=o,this.permission=n};var n=o("Vo7i")}});
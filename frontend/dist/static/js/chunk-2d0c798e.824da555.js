(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c798e"],{"50fc":function(e,t,n){"use strict";n.r(t),n.d(t,"getInfo",(function(){return a})),n.d(t,"getCurrentPage",(function(){return o})),n.d(t,"getInfoById",(function(){return u})),n.d(t,"resetAdminByPsw",(function(){return i})),n.d(t,"uploadAdminByImg",(function(){return d})),n.d(t,"updateInfo",(function(){return s})),n.d(t,"deleteInfoById",(function(){return l})),n.d(t,"addInfo",(function(){return p})),n.d(t,"uploadFile",(function(){return c})),n.d(t,"exportCurrentPage",(function(){return f})),n.d(t,"exportAll",(function(){return m})),n.d(t,"download",(function(){return h})),n.d(t,"modifyUser",(function(){return g})),n.d(t,"deleteAll",(function(){return v})),n.d(t,"Model",(function(){return w})),n.d(t,"SearchModel",(function(){return b}));n("7f7f");var r=n("1c1e");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(r["a"])({url:"/api/users",method:"get",params:{page:t,pageSize:n,name:e.name,email:e.email}})}function o(e){return Object(r["a"])({url:"/api/users",method:"get",params:{page:e}})}function u(e){return Object(r["a"])({url:"/api/users/"+e,method:"get"})}function i(e,t){return Object(r["a"])({url:"/api/users/"+e+"/reset",method:"post",data:{password:t}})}function d(e){return Object(r["a"])({url:"/api/users/uploadAvatar",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function s(e,t){return Object(r["a"])({url:"/api/users/"+e,method:"put",params:{name:t.name,roles:t.roles,avatar:t.avatar},headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function l(e){return Object(r["a"])({url:"/api/users/"+e,method:"delete"})}function p(e){return Object(r["a"])({url:"/api/users",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/api/users/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(r["a"])({url:"/api/users/export",method:"post",data:{page:t,pageSize:e,name:n.name,email:n.email}})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/api/users/export",method:"get",params:{name:e.name,email:e.email}})}function h(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:"/api/users/download",method:"get",responseType:"blob"})}function g(e){return Object(r["a"])({url:"/api/users/modify",method:"post",data:{password:e.password,oldPassword:e.oldPassword,password_confirmation:e.password_confirmation}})}function v(e){return Object(r["a"])({url:"/api/users/deleteAll",method:"post",data:{ids:e}})}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";this.name=e,this.email=t,this.roles=n,this.avatar=r,this.password=a,this.password_confirmation=o}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";this.name=e,this.email=t}}}]);
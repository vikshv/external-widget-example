webpackJsonp([1],{0:function(n,l,u){n.exports=u("cDNt")},cDNt:function(n,l,u){"use strict";function t(n){return i._18(0,[(n()(),i._4(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),i._17(1,null,[""," @ ",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.data,l.context.$implicit.origin)})}function e(n){return i._18(0,[(n()(),i._4(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i._17(-1,null,["External widget example"])),(n()(),i._17(-1,null,["\n"])),(n()(),i._4(3,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(n()(),i._17(-1,null,["\n    "])),(n()(),i._4(5,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),i._17(-1,null,["List of message from host"])),(n()(),i._17(-1,null,["\n    "])),(n()(),i._4(8,0,null,null,4,"ul",[["class","container__list"]],null,null,null,null,null)),(n()(),i._17(-1,null,["\n      "])),(n()(),i.Y(16777216,null,null,1,null,t)),i._2(11,802816,null,0,s.c,[i.N,i.K,i.t],{ngForOf:[0,"ngForOf"]},null),(n()(),i._17(-1,null,["\n    "])),(n()(),i._17(-1,null,["\n"])),(n()(),i._17(-1,null,["\n"])),(n()(),i._4(15,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),i._17(-1,null,["\n    "])),(n()(),i._4(17,0,null,null,1,"a",[["href","https://github.com/vikshv/external-widget-example"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(n()(),i._17(-1,null,["GitHub"])),(n()(),i._17(-1,null,["\n"])),(n()(),i._17(-1,null,["\n"]))],function(n,l){n(l,11,0,l.component.messages)},null)}function o(n){return i._18(0,[(n()(),i._4(0,0,null,null,1,"app-root",[],null,[["window","message"]],function(n,l,u){var t=!0;if("window:message"===l){t=!1!==i._15(n,1).onMessage(u)&&t}return t},e,p)),i._2(1,114688,null,0,c,[],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var i=u("/oeL"),_={production:!0},r=function(){function n(){}return n}(),c=function(){function n(){this.messages=[]}return n.prototype.ngOnInit=function(){console.log("OnInit",window.alphaopen)},n.prototype.onMessage=function(n){this.messages.push({data:n.data,origin:n.origin}),"aoWidgetConnect"===n.data&&n.source.postMessage("connect",n.origin)},n.ctorParameters=function(){return[]},n}(),a=[".container__list[_ngcontent-%COMP%]{height:300px;max-height:300px;overflow-x:auto}"],s=u("qbdv"),f=[a],p=i._1({encapsulation:0,styles:f,data:{}}),g=i.Z("app-root",c,o,{},{},[]),d=u("fc+i"),m=i._0(r,[c],function(n){return i._13([i._14(512,i.i,i.W,[[8,[g]],[3,i.i],i.x]),i._14(5120,i.v,i._12,[[3,i.v]]),i._14(4608,s.e,s.d,[i.v]),i._14(4608,i.h,i.h,[]),i._14(5120,i.a,i._5,[]),i._14(5120,i.t,i._10,[]),i._14(5120,i.u,i._11,[]),i._14(4608,d.b,d.s,[s.b]),i._14(6144,i.H,null,[d.b]),i._14(4608,d.e,d.f,[]),i._14(5120,d.c,function(n,l,u,t){return[new d.k(n),new d.o(l),new d.n(u,t)]},[s.b,s.b,s.b,d.e]),i._14(4608,d.d,d.d,[d.c,i.z]),i._14(135680,d.m,d.m,[s.b]),i._14(4608,d.l,d.l,[d.d,d.m]),i._14(6144,i.F,null,[d.l]),i._14(6144,d.p,null,[d.m]),i._14(4608,i.L,i.L,[i.z]),i._14(4608,d.g,d.g,[s.b]),i._14(4608,d.i,d.i,[s.b]),i._14(512,s.a,s.a,[]),i._14(1024,i.l,d.q,[]),i._14(1024,i.b,function(n,l){return[d.r(n,l)]},[[2,d.h],[2,i.y]]),i._14(512,i.c,i.c,[[2,i.b]]),i._14(131584,i._3,i._3,[i.z,i.X,i.r,i.l,i.i,i.c]),i._14(2048,i.e,null,[i._3]),i._14(512,i.d,i.d,[i.e]),i._14(512,d.a,d.a,[[3,d.a]]),i._14(512,r,r,[])])});_.production&&Object(i.R)(),Object(d.j)().bootstrapModuleFactory(m).catch(function(n){return console.log(n)})},gFIY:function(n,l){function u(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="gFIY"}},[0]);
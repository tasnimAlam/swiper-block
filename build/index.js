(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(e,t,r){}}]),function(e){function t(t){for(var n,i,l=t[0],u=t[1],p=t[2],s=0,f=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);f.length;)f.shift()();return c.push.apply(c,p||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={0:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var a=u;c.push([5,1]),r()}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(0),c=(r(3),r(1));r(4);Object(n.registerBlockType)("create-block/swiper-slider",{title:Object(o.__)("Swiper Slider","create-block"),description:Object(o.__)("Example block written with ESNext standard and JSX support – build step required.","create-block"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(e){var t=e.className;return Object(c.createElement)("p",{className:t},Object(o.__)("Swiper Slider – hello from the editor!","create-block"))},save:function(){return Object(c.createElement)("p",null,Object(o.__)("Swiper Slider – hello from the saved content!","create-block"))}})}]);
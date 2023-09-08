import{i as E,t as N,w as W,n as I,a as L,u as R}from"./index.7e3a8c23.js";import{S as H,r as A,U as B,i as K,h as j,V as U,y as q}from"./app.3c4a4793.js";function G(e){var r;const t=N(e);return(r=t==null?void 0:t.$el)!=null?r:t}const T=E?window:void 0;E&&window.document;const Q=E?window.navigator:void 0;E&&window.location;function x(...e){let r,t,l,p;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,l,p]=e,r=T):[r,t,l,p]=e,!r)return I;Array.isArray(t)||(t=[t]),Array.isArray(l)||(l=[l]);const g=[],b=()=>{g.forEach(i=>i()),g.length=0},v=(i,u,m,f)=>(i.addEventListener(u,m,f),()=>i.removeEventListener(u,m,f)),w=K(()=>[G(r),N(p)],([i,u])=>{b(),i&&g.push(...t.flatMap(m=>l.map(f=>v(i,m,f,u))))},{immediate:!0,flush:"post"}),c=()=>{w(),b()};return L(c),c}function X(){const e=A(!1);return U()&&q(()=>{e.value=!0}),e}function Y(e){const r=X();return j(()=>(r.value,Boolean(e())))}function ue(e={}){const{navigator:r=Q,read:t=!1,source:l,copiedDuring:p=1500,legacy:g=!1}=e,b=["copy","cut"],v=Y(()=>r&&"clipboard"in r),w=j(()=>v.value||g),c=A(""),i=A(!1),u=R(()=>i.value=!1,p);function m(){v.value?r.clipboard.readText().then(o=>{c.value=o}):c.value=d()}if(w.value&&t)for(const o of b)x(o,m);async function f(o=N(l)){w.value&&o!=null&&(v.value?await r.clipboard.writeText(o):y(o),c.value=o,i.value=!0,u.start())}function y(o){const a=document.createElement("textarea");a.value=o!=null?o:"",a.style.position="absolute",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()}function d(){var o,a,h;return(h=(a=(o=document==null?void 0:document.getSelection)==null?void 0:o.call(document))==null?void 0:a.toString())!=null?h:""}return{isSupported:w,text:c,copied:i,copy:f}}const _=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",Z=k();function k(){return O in _||(_[O]=_[O]||{}),_[O]}function ee(e,r){return Z[e]||r}function te(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var re=Object.defineProperty,D=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,M=(e,r,t)=>r in e?re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,V=(e,r)=>{for(var t in r||(r={}))ne.call(r,t)&&M(e,t,r[t]);if(D)for(var t of D(r))oe.call(r,t)&&M(e,t,r[t]);return e};const ae={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},$="vueuse-storage";function le(e,r,t,l={}){var p;const{flush:g="pre",deep:b=!0,listenToStorageChanges:v=!0,writeDefaults:w=!0,mergeDefaults:c=!1,shallow:i,window:u=T,eventFilter:m,onError:f=n=>{console.error(n)}}=l,y=(i?H:A)(r);if(!t)try{t=ee("getDefaultStorage",()=>{var n;return(n=T)==null?void 0:n.localStorage})()}catch(n){f(n)}if(!t)return y;const d=N(r),o=te(d),a=(p=l.serializer)!=null?p:ae[o],{pause:h,resume:P}=W(y,()=>J(y.value),{flush:g,deep:b,eventFilter:m});return u&&v&&(x(u,"storage",C),x(u,$,F)),C(),y;function J(n){try{if(n==null)t.removeItem(e);else{const s=a.write(n),S=t.getItem(e);S!==s&&(t.setItem(e,s),u&&u.dispatchEvent(new CustomEvent($,{detail:{key:e,oldValue:S,newValue:s,storageArea:t}})))}}catch(s){f(s)}}function z(n){const s=n?n.newValue:t.getItem(e);if(s==null)return w&&d!==null&&t.setItem(e,a.write(d)),d;if(!n&&c){const S=a.read(s);return typeof c=="function"?c(S,d):o==="object"&&!Array.isArray(S)?V(V({},d),S):S}else return typeof s!="string"?s:a.read(s)}function F(n){C(n.detail)}function C(n){if(!(n&&n.storageArea!==t)){if(n&&n.key==null){y.value=d;return}if(!(n&&n.key!==e)){h();try{y.value=z(n)}catch(s){f(s)}finally{n?B(P):P()}}}}}export{ue as a,le as u};

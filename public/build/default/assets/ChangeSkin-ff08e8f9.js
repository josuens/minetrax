import{z as O,r as I,G as H,x,y as ee,A as J,E as ce,s as pe,F as K,B as ne,C as Q,T as me,l as fe,o as C,c as D,w as b,b as v,a as l,u as d,d as B,t as n,J as ge,e as N,f as $,g as te,i as q,j as ae,bF as le,n as be}from"./app-f1704ce4.js";import{s as ye}from"./vue-multiselect.esm-88e31988.js";import{X as se}from"./XInput-84f7468c.js";import{A as ve}from"./AppLayout-5f3e8958.js";import{L as M}from"./LoadingButton-37976f47.js";import{_ as Y}from"./AlertCard-2fc700d1.js";import{o as h,H as R,T as he,t as oe,N as re,u as z,b as _e,a as A}from"./use-resolve-button-type-18f071c1.js";import{a as xe,f as ie,O as j,T as G,m as ke,P as E,N as U}from"./hidden-44fa52d6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-4144b1c7.js";import"./useAuthorizable-18c71ef1.js";import"./XMarkIcon-2c5e91bb.js";function we(a){typeof queueMicrotask=="function"?queueMicrotask(a):Promise.resolve().then(a).catch(p=>setTimeout(()=>{throw p}))}let Se=O({props:{onFocus:{type:Function,required:!0}},setup(a){let p=I(!0);return()=>p.value?H(ie,{as:"button",type:"button",features:xe.Focusable,onFocus(i){i.preventDefault();let f,c=50;function o(){var t;if(c--<=0){f&&cancelAnimationFrame(f);return}if((t=a.onFocus)!=null&&t.call(a)){p.value=!1,cancelAnimationFrame(f);return}f=requestAnimationFrame(o)}f=requestAnimationFrame(o)}}):null}});var Pe=(a=>(a[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a))(Pe||{}),Ie=(a=>(a[a.Less=-1]="Less",a[a.Equal=0]="Equal",a[a.Greater=1]="Greater",a))(Ie||{});let ue=Symbol("TabsContext");function V(a){let p=Q(ue,null);if(p===null){let i=new Error(`<${a} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,V),i}return p}let Z=Symbol("TabsSSRContext"),Te=O({name:"TabGroup",emits:{change:a=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(a,{slots:p,attrs:i,emit:f}){var c;let o=I((c=a.selectedIndex)!=null?c:a.defaultIndex),t=I([]),w=I([]),S=x(()=>a.selectedIndex!==null),k=x(()=>S.value?a.selectedIndex:o.value);function g(r){var e;let u=j(m.tabs.value,h),_=j(m.panels.value,h),L=u.filter(T=>{var F;return!((F=h(T))!=null&&F.hasAttribute("disabled"))});if(r<0||r>u.length-1){let T=z(o.value===null?0:Math.sign(r-o.value),{[-1]:()=>1,0:()=>z(Math.sign(r),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),F=z(T,{0:()=>u.indexOf(L[0]),1:()=>u.indexOf(L[L.length-1])});F!==-1&&(o.value=F),m.tabs.value=u,m.panels.value=_}else{let T=u.slice(0,r),F=[...u.slice(r),...T].find(de=>L.includes(de));if(!F)return;let X=(e=u.indexOf(F))!=null?e:m.selectedIndex.value;X===-1&&(X=m.selectedIndex.value),o.value=X,m.tabs.value=u,m.panels.value=_}}let m={selectedIndex:x(()=>{var r,e;return(e=(r=o.value)!=null?r:a.defaultIndex)!=null?e:null}),orientation:x(()=>a.vertical?"vertical":"horizontal"),activation:x(()=>a.manual?"manual":"auto"),tabs:t,panels:w,setSelectedIndex(r){k.value!==r&&f("change",r),S.value||g(r)},registerTab(r){var e;if(t.value.includes(r))return;let u=t.value[o.value];t.value.push(r),t.value=j(t.value,h);let _=(e=t.value.indexOf(u))!=null?e:o.value;_!==-1&&(o.value=_)},unregisterTab(r){let e=t.value.indexOf(r);e!==-1&&t.value.splice(e,1)},registerPanel(r){w.value.includes(r)||(w.value.push(r),w.value=j(w.value,h))},unregisterPanel(r){let e=w.value.indexOf(r);e!==-1&&w.value.splice(e,1)}};ee(ue,m);let P=I({tabs:[],panels:[]}),s=I(!1);J(()=>{s.value=!0}),ee(Z,x(()=>s.value?null:P.value));let y=x(()=>a.selectedIndex);return J(()=>{ce([y],()=>{var r;return g((r=a.selectedIndex)!=null?r:a.defaultIndex)},{immediate:!0})}),pe(()=>{if(!S.value||k.value==null||m.tabs.value.length<=0)return;let r=j(m.tabs.value,h);r.some((e,u)=>h(m.tabs.value[u])!==h(e))&&m.setSelectedIndex(r.findIndex(e=>h(e)===h(m.tabs.value[k.value])))}),()=>{let r={selectedIndex:o.value};return H(K,[t.value.length<=0&&H(Se,{onFocus:()=>{for(let e of t.value){let u=h(e);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return!1}}),R({theirProps:{...i,...he(a,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:r,slots:p,attrs:i,name:"TabGroup"})])}}}),Fe=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:p,slots:i}){let f=V("TabList");return()=>{let c={selectedIndex:f.selectedIndex.value},o={role:"tablist","aria-orientation":f.orientation.value};return R({ourProps:o,theirProps:a,slot:c,attrs:p,slots:i,name:"TabList"})}}}),Ce=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${oe()}`}},setup(a,{attrs:p,slots:i,expose:f}){let c=V("Tab"),o=I(null);f({el:o,$el:o}),J(()=>c.registerTab(o)),ne(()=>c.unregisterTab(o));let t=Q(Z),w=x(()=>{if(t.value){let e=t.value.tabs.indexOf(a.id);return e===-1?t.value.tabs.push(a.id)-1:e}return-1}),S=x(()=>{let e=c.tabs.value.indexOf(o);return e===-1?w.value:e}),k=x(()=>S.value===c.selectedIndex.value);function g(e){var u;let _=e();if(_===G.Success&&c.activation.value==="auto"){let L=(u=ke(o))==null?void 0:u.activeElement,T=c.tabs.value.findIndex(F=>h(F)===L);T!==-1&&c.setSelectedIndex(T)}return _}function m(e){let u=c.tabs.value.map(_=>h(_)).filter(Boolean);if(e.key===A.Space||e.key===A.Enter){e.preventDefault(),e.stopPropagation(),c.setSelectedIndex(S.value);return}switch(e.key){case A.Home:case A.PageUp:return e.preventDefault(),e.stopPropagation(),g(()=>E(u,U.First));case A.End:case A.PageDown:return e.preventDefault(),e.stopPropagation(),g(()=>E(u,U.Last))}if(g(()=>z(c.orientation.value,{vertical(){return e.key===A.ArrowUp?E(u,U.Previous|U.WrapAround):e.key===A.ArrowDown?E(u,U.Next|U.WrapAround):G.Error},horizontal(){return e.key===A.ArrowLeft?E(u,U.Previous|U.WrapAround):e.key===A.ArrowRight?E(u,U.Next|U.WrapAround):G.Error}}))===G.Success)return e.preventDefault()}let P=I(!1);function s(){var e;P.value||(P.value=!0,!a.disabled&&((e=h(o))==null||e.focus({preventScroll:!0}),c.setSelectedIndex(S.value),we(()=>{P.value=!1})))}function y(e){e.preventDefault()}let r=_e(x(()=>({as:a.as,type:p.type})),o);return()=>{var e;let u={selected:k.value},{id:_,...L}=a,T={ref:o,onKeydown:m,onMousedown:y,onClick:s,id:_,role:"tab",type:r.value,"aria-controls":(e=h(c.panels.value[S.value]))==null?void 0:e.id,"aria-selected":k.value,tabIndex:k.value?0:-1,disabled:a.disabled?!0:void 0};return R({ourProps:T,theirProps:L,slot:u,attrs:p,slots:i,name:"Tab"})}}}),Ae=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(a,{slots:p,attrs:i}){let f=V("TabPanels");return()=>{let c={selectedIndex:f.selectedIndex.value};return R({theirProps:a,ourProps:{},slot:c,attrs:i,slots:p,name:"TabPanels"})}}}),W=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${oe()}`},tabIndex:{type:Number,default:0}},setup(a,{attrs:p,slots:i,expose:f}){let c=V("TabPanel"),o=I(null);f({el:o,$el:o}),J(()=>c.registerPanel(o)),ne(()=>c.unregisterPanel(o));let t=Q(Z),w=x(()=>{if(t.value){let g=t.value.panels.indexOf(a.id);return g===-1?t.value.panels.push(a.id)-1:g}return-1}),S=x(()=>{let g=c.panels.value.indexOf(o);return g===-1?w.value:g}),k=x(()=>S.value===c.selectedIndex.value);return()=>{var g;let m={selected:k.value},{id:P,tabIndex:s,...y}=a,r={ref:o,id:P,role:"tabpanel","aria-labelledby":(g=h(c.tabs.value[S.value]))==null?void 0:g.id,tabIndex:k.value?s:-1};return!k.value&&a.unmount&&!a.static?H(ie,{as:"span",...r}):R({ourProps:r,theirProps:y,slot:m,attrs:p,slots:i,features:re.Static|re.RenderStrategy,visible:k.value,name:"TabPanel"})}}});const Ue={class:"max-w-6xl px-2 py-3 mx-auto space-y-4 md:py-12 md:px-10"},$e={class:"flex flex-col md:flex-row md:items-center md:justify-between"},Le={key:0,class:"text-lg mb-2 md:mb-0 md:text-2xl font-bold text-gray-700 dark:text-gray-200"},Be={key:1,class:"text-lg italic mb-2 md:mb-0 md:text-2xl font-bold text-gray-500 dark:text-gray-500"},Ee={key:0,class:"text-xs text-gray-500 dark:text-gray-500"},Oe={class:"text-sm"},Ne={class:"text-gray-500 dark:text-gray-400"},je={class:"text-sm text-gray-500 dark:text-gray-400"},Re={class:"mb-2 text-lg font-bold text-gray-900 dark:text-white"},Ve={class:"flex flex-col md:flex-row justify-between pr-4"},De={class:"mb-2 text-sm"},qe={class:"text-sm"},Me=l("br",null,null,-1),Ge=l("a",{class:"text-blue-500 dark:text-blue-400 hover:underline",href:"https://mc-heads.net/skin/xinecraft.png",target:"_blank"},"https://mc-heads.net/skin/xinecraft.png",-1),We=l("img",{src:"/images/valid-skin-format.png",alt:"Skin Sample",class:"w48 h-40"},null,-1),ze=["onSubmit"],He={class:"col-span-6 sm:col-span-6 pt-4 space-y-3"},Je={class:"text-sm text-gray-700 font-bold dark:text-gray-300"},Xe={class:"flex gap-6"},Ye={class:"flex"},Ke={class:"flex items-center h-5"},Qe={class:"ml-2 text-sm"},Ze={for:"skin_type_steve",class:"font-medium text-gray-900 dark:text-gray-300"},et={class:"flex"},tt={class:"flex items-center h-5"},at={class:"ml-2 text-sm"},lt={for:"skin_type_alex",class:"font-medium text-gray-900 dark:text-gray-300"},st={class:"col-span-6 sm:col-span-6 pt-4 space-y-3"},rt={class:"text-sm text-gray-700 font-bold dark:text-gray-300"},nt={class:"flex gap-6"},ot={key:0,class:"text-xs text-red-500"},it={class:"mt-6"},ut={class:"mb-2 text-lg font-bold text-gray-900 dark:text-white"},dt={class:"text-sm"},ct={class:"mb-2"},pt={class:"list-disc list-inside"},mt=["onSubmit"],ft={class:"col-span-6 sm:col-span-6"},gt={class:"mt-6"},bt={class:"mb-2 text-lg font-bold text-gray-900 dark:text-white"},yt={class:"mb-2 text-sm"},vt={class:"text-sm"},ht=["onSubmit"],_t={class:"col-span-6 sm:col-span-6"},xt={class:"mt-6"},kt={class:"mb-2 text-lg font-bold text-gray-900 dark:text-white"},wt={class:"mb-2 text-sm"},St=["onSubmit"],Pt={class:"mt-6"},jt={__name:"ChangeSkin",props:{uuid:{type:String,required:!1},players:{type:Array,required:!0},hasServersWithFeature:{type:Boolean,required:!0},cooldown:{type:Number}},setup(a){const p=a;let i=I(p.players[0]);const f=p.players.find(s=>s.uuid===p.uuid);f&&(i.value=f);const c=["Upload Skin","From URL","From Username","Reset"],o=I(null),t=me({action_type:"upload",player_uuid:null,skin_type:"steve",file:null,username:"",url:""}),w=()=>{t.action_type="upload",t.file=o.value.files[0],t.player_uuid=i.value.uuid,t.post(route("change-player-skin.update"),{onSuccess:()=>{t.reset()}})},S=()=>{t.action_type="url",t.username=null,t.player_uuid=i.value.uuid,t.post(route("change-player-skin.update"),{onSuccess:()=>{t.reset()}})},k=()=>{t.action_type="username",t.url=null,t.player_uuid=i.value.uuid,t.post(route("change-player-skin.update"),{onSuccess:()=>{t.reset()}})},g=()=>{t.action_type="reset",t.url=null,t.username=null,t.player_uuid=i.value.uuid,t.post(route("change-player-skin.update"),{onSuccess:()=>{t.reset()}})},m=["https://namemc.com/skin/a569a3e7aad87b3a","https://minesk.in/7a8d3a710c5b440a875d9b6fb4d7d9a3","http://novask.in/6673493202.png","http://textures.minecraft.net/texture/63741c4509672cc31e43750d5223d4b3099f851e8039651550e98719692dd028"],P=x(()=>!p.hasServersWithFeature||t.processing||!i.value);return(s,y)=>{const r=fe("AppHead");return C(),D(ve,null,{default:b(()=>[v(r,{title:s.__("Change Player Skin")},null,8,["title"]),l("div",Ue,[l("div",$e,[d(i)?(C(),B("h2",Le,n(s.__("Change skin for :username",{username:d(i).username})),1)):(C(),B("h2",Be,n(s.__("No Linked Players")),1)),v(d(ye),{id:"country",modelValue:d(i),"onUpdate:modelValue":y[0]||(y[0]=e=>ge(i)?i.value=e:i=e),class:"w-full md:w-1/3 bg-gray-300 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm dark:bg-gray-900",options:a.players,multiple:!1,placeholder:s.__("Search")+"...",label:"username","allow-empty":!1,"deselect-label":s.__("Can't remove"),"track-by":"id"},null,8,["modelValue","options","placeholder","deselect-label"])]),d(i)?(C(),B("p",Ee,n(s.__("Player Uuid"))+": "+n(d(i).uuid),1)):N("",!0),a.hasServersWithFeature?N("",!0):(C(),D(Y,{key:1,"text-color":"text-red-800 dark:text-red-500","border-color":"border-red-500"},{body:b(()=>[l("p",Ne,n(s.__("This feature is not enabled in any of the servers. Below form will be disabled. ")),1),l("p",je,n(s.__("Please check back later or contact the server administrator.")),1)]),default:b(()=>[l("p",Oe,n(s.__("Oh Jeez! No server support changing of skin yet!")),1)]),_:1})),a.cooldown?(C(),D(Y,{key:2,"text-color":"text-yellow-800 dark:text-yellow-500","border-color":"border-yellow-500"},{default:b(()=>[$(n(s.__("You are on a cooldown! Please wait for :cooldown seconds before you can try again.",{cooldown:a.cooldown})),1)]),_:1})):N("",!0),d(i)?N("",!0):(C(),D(Y,{key:3,"text-color":"text-red-800 dark:text-red-500","border-color":"border-red-500"},{default:b(()=>[$(n(s.__("No linked players found. Please link a player to your account.")),1)]),_:1})),v(d(Te),{as:"div",class:"md:flex"},{default:b(()=>[v(d(Fe),{as:"ul",class:"mb-4 space-y-4 text-sm font-medium text-gray-500 flex-column space-y dark:text-gray-400 md:me-4 md:mb-0"},{default:b(()=>[(C(),B(K,null,te(c,(e,u)=>v(d(Ce),{key:u,as:"li",class:"focus:outline-none whitespace-nowrap"},{default:b(({selected:_})=>[l("a",{href:"#",class:be({"inline-flex items-center w-full px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white":!_,"inline-flex items-center w-full px-4 py-3 text-white bg-gray-500 rounded-lg active dark:bg-gray-600":_}),"aria-current":"page"},n(e),3)]),_:2},1024)),64))]),_:1}),v(d(Ae),{as:"div",class:"w-full"},{default:b(()=>[v(d(W),{as:"div",class:"w-full p-6 text-gray-500 rounded-lg bg-gray-50 text-medium dark:text-gray-400 dark:bg-gray-800"},{default:b(()=>[l("h3",Re,n(s.__("Change Skin"))+" - "+n(s.__("Upload Skin")),1),l("div",Ve,[l("div",null,[l("p",De,n(s.__("Please upload a valid skin image. ⚠️")),1),l("p",qe,[$(n(s.__("Refer to the provided sample guide image to understand which image should be upload."))+" ",1),Me,$(" "+n(s.__("A valid skin image should look like this: "))+" ",1),Ge])]),We]),l("form",{class:"w-full border-t mt-4 border-gray-300 dark:border-gray-700",onSubmit:q(w,["prevent"])},[l("div",He,[l("p",Je,n(s.__("Skin Type")),1),l("div",Xe,[l("div",Ye,[l("div",Ke,[ae(l("input",{id:"skin_type_steve","onUpdate:modelValue":y[1]||(y[1]=e=>d(t).skin_type=e),type:"radio",value:"steve",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"skin_type"},null,512),[[le,d(t).skin_type]])]),l("div",Qe,[l("label",Ze,n(s.__("Steve")),1)])]),l("div",et,[l("div",tt,[ae(l("input",{id:"skin_type_alex","onUpdate:modelValue":y[2]||(y[2]=e=>d(t).skin_type=e),type:"radio",value:"alex",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"skin_type"},null,512),[[le,d(t).skin_type]])]),l("div",at,[l("label",lt,n(s.__("Alex")),1)])])])]),l("div",st,[l("p",rt,n(s.__("Skin File")),1),l("div",nt,[l("input",{id:"file",ref_key:"file",ref:o,accept:".png",type:"file",class:"block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",required:""},null,512)]),d(t).errors.file?(C(),B("p",ot,n(d(t).errors.file),1)):N("",!0)]),l("div",it,[v(M,{loading:d(t).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",disabled:P.value,type:"submit"},{default:b(()=>[$(n(s.__("Change Skin")),1)]),_:1},8,["loading","disabled"])])],40,ze)]),_:1}),v(d(W),{as:"div",class:"w-full p-6 text-gray-500 rounded-lg bg-gray-50 text-medium dark:text-gray-400 dark:bg-gray-800"},{default:b(()=>[l("h3",ut,n(s.__("Change Skin"))+" - "+n(s.__("From URL")),1),l("div",dt,[l("p",ct,n(s.__("Change your skin by providing a valid skin URL. You can find skin from namemc.com, mineskin.org and other skin websites.")),1),l("p",null,[$(n(s.__("Here are some examples of valid skin url:"))+" ",1),l("ul",pt,[(C(),B(K,null,te(m,e=>l("li",{key:e,class:"list-item break-all"},n(e),1)),64))])])]),l("form",{class:"w-full mt-4",onSubmit:q(S,["prevent"])},[l("div",ft,[v(se,{id:"url",modelValue:d(t).url,"onUpdate:modelValue":y[3]||(y[3]=e=>d(t).url=e),label:s.__("Skin URL"),error:d(t).errors.url,type:"text",name:"url","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),l("div",gt,[v(M,{loading:d(t).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",disabled:P.value,type:"submit"},{default:b(()=>[$(n(s.__("Change Skin")),1)]),_:1},8,["loading","disabled"])])],40,mt)]),_:1}),v(d(W),{as:"div",class:"w-full p-6 text-gray-500 rounded-lg bg-gray-50 text-medium dark:text-gray-400 dark:bg-gray-800"},{default:b(()=>[l("h3",bt,n(s.__("Change Skin"))+" - "+n(s.__("From Username")),1),l("p",yt,n(s.__("Change your skin by providing a valid Minecraft username (Premium account).")),1),l("p",vt,n(s.__("The skin will be fetched from Mojang server.")),1),l("form",{class:"w-full mt-4",onSubmit:q(k,["prevent"])},[l("div",_t,[v(se,{id:"username",modelValue:d(t).username,"onUpdate:modelValue":y[4]||(y[4]=e=>d(t).username=e),label:s.__("Eg: xinecraft"),error:d(t).errors.username,type:"text",name:"username","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),l("div",xt,[v(M,{loading:d(t).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",disabled:P.value,type:"submit"},{default:b(()=>[$(n(s.__("Change Skin")),1)]),_:1},8,["loading","disabled"])])],40,ht)]),_:1}),v(d(W),{as:"div",class:"w-full p-6 text-gray-500 rounded-lg bg-gray-50 text-medium dark:text-gray-400 dark:bg-gray-800"},{default:b(()=>[l("h3",kt,n(s.__("Change Skin"))+" - "+n(s.__("Reset")),1),l("p",wt,n(s.__("Reset your skin to default Minecraft skin. If you have premium minecraft account it will reset to your premium skin.")),1),l("form",{class:"w-full mt-4",onSubmit:q(g,["prevent"])},[l("div",Pt,[v(M,{loading:d(t).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50",disabled:P.value,type:"submit"},{default:b(()=>[$(n(s.__("Reset to Default Skin")),1)]),_:1},8,["loading","disabled"])])],40,St)]),_:1})]),_:1})]),_:1})])]),_:1})}}};export{jt as default};

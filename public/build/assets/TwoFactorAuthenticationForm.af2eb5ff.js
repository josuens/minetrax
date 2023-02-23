import{r as p,a9 as H,o,d as n,a as c,q as I,b as r,w as a,f as i,t as s,X as R,n as k,aa as N,u as Q,i as Y,k as D,c as w,g as v,e as m,F as U,h as j,j as z,ab as A}from"./app.7e1a25c9.js";import{_ as G}from"./ActionSection.1c17934f.js";import{_ as $}from"./Button.7ac35784.js";import{_ as O}from"./DialogModal.bdf03de0.js";import{_ as B}from"./Input.25228941.js";import{_ as q}from"./InputError.e3cf4959.js";import{_ as S}from"./SecondaryButton.65ece2a5.js";import{_ as W}from"./DangerButton.3366a31a.js";import{_ as X}from"./Label.4033db1a.js";import"./SectionTitle.bf3b75c1.js";import"./Modal.9f8913c5.js";const J={class:"mt-4"},g={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(b,{emit:C}){const u=p(!1),e=H({password:"",error:"",processing:!1}),d=p(null),y=()=>{axios.get(route("password.confirmation")).then(l=>{l.data.confirmed?C("confirmed"):(u.value=!0,setTimeout(()=>d.value.focus(),250))})},h=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,f(),N().then(()=>C("confirmed"))}).catch(l=>{e.processing=!1,e.error=l.response.data.errors.password[0],d.value.focus()})},f=()=>{u.value=!1,e.password="",e.error=""};return(l,_)=>(o(),n("span",null,[c("span",{onClick:y},[I(l.$slots,"default")]),r(O,{show:u.value,onClose:f},{title:a(()=>[i(s(b.title),1)]),content:a(()=>[i(s(b.content)+" ",1),c("div",J,[r(B,{ref_key:"passwordInput",ref:d,modelValue:e.password,"onUpdate:modelValue":_[0]||(_[0]=T=>e.password=T),type:"password",class:"mt-1 block w-3/4",placeholder:l.__("Password"),onKeyup:R(h,["enter"])},null,8,["modelValue","placeholder","onKeyup"]),r(q,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:a(()=>[r(S,{onClick:f},{default:a(()=>[i(s(l.__("Cancel")),1)]),_:1}),r($,{class:k(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:h},{default:a(()=>[i(s(b.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900"},ee={key:1,class:"text-lg font-medium text-gray-900"},te={key:2,class:"text-lg font-medium text-gray-900"},oe={class:"mt-3 max-w-xl text-sm text-gray-600"},se={key:3},ae={key:0},ne={class:"mt-4 max-w-xl text-sm text-gray-600"},re={key:0,class:"font-semibold"},le={key:1},ie=["innerHTML"],ce={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},ue={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},_e={class:"mt-4 max-w-xl text-sm text-gray-600"},pe={class:"font-semibold"},he={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},ve={class:"mt-5"},ye={key:0},we={key:1},Pe={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(b){const C=b,u=p(!1),e=p(!1),d=p(!1),y=p(null),h=p(null),f=p([]),l=Q({code:""}),_=Y(()=>{var t;return!u.value&&((t=z().props.value.user)==null?void 0:t.two_factor_enabled)});D(_,()=>{_.value||(l.reset(),l.clearErrors())});const T=()=>{u.value=!0,A.Inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([L(),M(),F()]),onFinish:()=>{u.value=!1,e.value=C.requiresConfirmation}})},L=()=>axios.get("/user/two-factor-qr-code").then(t=>{y.value=t.data.svg}),M=()=>axios.get("/user/two-factor-secret-key").then(t=>{h.value=t.data.secretKey}),F=()=>axios.get("/user/two-factor-recovery-codes").then(t=>{f.value=t.data}),V=()=>{l.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,y.value=null,h.value=null}})},E=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>F())},K=()=>{d.value=!0,A.Inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{d.value=!1,e.value=!1}})};return(t,P)=>(o(),w(G,null,{title:a(()=>[i(s(t.__("Two Factor Authentication")),1)]),description:a(()=>[i(s(t.__("Add additional security to your account using two factor authentication.")),1)]),content:a(()=>[v(_)&&!e.value?(o(),n("h3",Z,s(t.__("You have enabled two factor authentication.")),1)):v(_)&&e.value?(o(),n("h3",ee,s(t.__("Finish enabling two factor authentication.")),1)):(o(),n("h3",te,s(t.__("You have not enabled two factor authentication.")),1)),c("div",oe,[c("p",null,s(t.__("When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.")),1)]),v(_)?(o(),n("div",se,[y.value?(o(),n("div",ae,[c("div",ne,[e.value?(o(),n("p",re,s(t.__("To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code.")),1)):(o(),n("p",le,s(t.__("Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key.")),1))]),c("div",{class:"mt-4",innerHTML:y.value},null,8,ie),h.value?(o(),n("div",ce,[c("p",ue,[i(s(t.__("Setup Key"))+": ",1),c("span",{innerHTML:h.value},null,8,de)])])):m("",!0),e.value?(o(),n("div",me,[r(X,{for:"code",value:"Code"}),r(B,{id:"code",modelValue:v(l).code,"onUpdate:modelValue":P[0]||(P[0]=x=>v(l).code=x),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(V,["enter"])},null,8,["modelValue","onKeyup"]),r(q,{message:v(l).errors.code,class:"mt-2"},null,8,["message"])])):m("",!0)])):m("",!0),f.value.length>0&&!e.value?(o(),n("div",fe,[c("div",_e,[c("p",pe,s(t.__("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")),1)]),c("div",he,[(o(!0),n(U,null,j(f.value,x=>(o(),n("div",{key:x},s(x),1))),128))])])):m("",!0)])):m("",!0),c("div",ve,[v(_)?(o(),n("div",we,[r(g,{onConfirmed:V},{default:a(()=>[e.value?(o(),w($,{key:0,type:"button",class:k(["mr-3",{"opacity-25":u.value}]),disabled:u.value},{default:a(()=>[i(s(t.__("Confirm")),1)]),_:1},8,["class","disabled"])):m("",!0)]),_:1}),r(g,{onConfirmed:E},{default:a(()=>[f.value.length>0&&!e.value?(o(),w(S,{key:0,class:"mr-3"},{default:a(()=>[i(s(t.__("Regenerate Recovery Codes")),1)]),_:1})):m("",!0)]),_:1}),r(g,{onConfirmed:F},{default:a(()=>[f.value.length===0&&!e.value?(o(),w(S,{key:0,class:"mr-3"},{default:a(()=>[i(s(t.__("Show Recovery Codes")),1)]),_:1})):m("",!0)]),_:1}),r(g,{onConfirmed:K},{default:a(()=>[e.value?(o(),w(S,{key:0,class:k({"opacity-25":d.value}),disabled:d.value},{default:a(()=>[i(s(t.__("Cancel")),1)]),_:1},8,["class","disabled"])):m("",!0)]),_:1}),r(g,{onConfirmed:K},{default:a(()=>[e.value?m("",!0):(o(),w(W,{key:0,class:k({"opacity-25":d.value}),disabled:d.value},{default:a(()=>[i(s(t.__("Disable")),1)]),_:1},8,["class","disabled"]))]),_:1})])):(o(),n("div",ye,[r(g,{onConfirmed:T},{default:a(()=>[r($,{type:"button",class:k({"opacity-25":u.value}),disabled:u.value},{default:a(()=>[i(s(t.__("Enable")),1)]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Pe as default};

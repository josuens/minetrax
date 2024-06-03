import{r as u,h as g,o as y,d as h,a as d,R as C,b as e,w as a,f as t,t as r,a6 as k,n as v,a2 as b}from"./app-f1704ce4.js";import{_ as x}from"./Button-0fddd99a.js";import{_ as P}from"./DialogModal-9816ba23.js";import{_ as V}from"./Input-3c640f45.js";import{_ as $}from"./InputError-99d060cb.js";import{_ as S}from"./SecondaryButton-c6d8a330.js";const B={class:"mt-4"},K={class:"text-gray-500 text-xs italic"},F={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(n,{emit:p}){const i=u(!1),s=g({password:"",error:"",processing:!1}),l=u(null),w=()=>{axios.get(route("password.confirmation")).then(o=>{o.data.confirmed?p("confirmed"):(i.value=!0,setTimeout(()=>l.value.focus(),250))})},f=()=>{s.processing=!0,axios.post(route("password.confirm"),{password:s.password}).then(()=>{s.processing=!1,c(),b().then(()=>p("confirmed"))}).catch(o=>{s.processing=!1,s.error=o.response.data.errors.password[0],l.value.focus()})},c=()=>{i.value=!1,s.password="",s.error=""};return(o,m)=>(y(),h("span",null,[d("span",{onClick:w},[C(o.$slots,"default")]),e(P,{show:i.value,onClose:c},{title:a(()=>[t(r(n.title),1)]),content:a(()=>[t(r(n.content)+" ",1),d("div",B,[e(V,{ref_key:"passwordInput",ref:l,modelValue:s.password,"onUpdate:modelValue":m[0]||(m[0]=_=>s.password=_),type:"password",class:"mt-1 block w-3/4",placeholder:o.__("Password"),onKeyup:k(f,["enter"])},null,8,["modelValue","placeholder","onKeyup"]),e($,{message:s.error,class:"mt-2"},null,8,["message"])]),d("span",K,r(o.__("Continue with empty password if you have no password.")),1)]),footer:a(()=>[e(S,{onClick:c},{default:a(()=>[t(r(o.__("Cancel")),1)]),_:1}),e(x,{class:v(["ml-3",{"opacity-25":s.processing}]),disabled:s.processing,onClick:f},{default:a(()=>[t(r(n.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as _};

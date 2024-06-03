import{u as w,A as g}from"./AppLayout-5f3e8958.js";import{l as y,q as k,o as u,c as d,w as s,k as v,b as a,u as r,_ as A,a as o,t as i,Z as D,f as n,j as x}from"./app-f1704ce4.js";import{D as l,_ as j}from"./DtRowItem-4c95fc92.js";import{_ as I}from"./CommonStatusBadge-64e0ca03.js";import{r as R}from"./EyeIcon-b9332d47.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-4144b1c7.js";import"./useAuthorizable-18c71ef1.js";import"./vue-multiselect.esm-88e31988.js";import"./XMarkIcon-2c5e91bb.js";import"./use-resolve-button-type-18f071c1.js";import"./hidden-44fa52d6.js";import"./open-closed-113ca95c.js";const T={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},L={class:"flex justify-between mb-8"},N={class:"font-bold text-lg md:text-3xl text-gray-500 dark:text-gray-300"},S={class:"flex space-x-2"},q={class:"flex flex-col md:flex-row md:space-x-4"},B={class:"text-sm px-4 font-medium text-left text-gray-800 whitespace-nowrap dark:text-gray-200"},C={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},Q={__name:"IndexRecruitmentSubmission",props:{filters:{type:Object},submissions:{type:Object}},setup(p){const{__:e}=v(),{formatTimeAgoToNow:m,formatToDayDateString:f}=w(),b=[{key:"id",label:e("ID"),sortable:!0,class:"text-left w-[5%]"},{key:"recruitment_id",label:e("Application"),sortable:!0},{key:"status",label:e("Status"),sortable:!0,filterable:{type:"multiselect",options:["pending","inprogress","approved","rejected","withdrawn","onhold"]}},{key:"created_at",label:e("Created At"),class:"text-right w-1/12 whitespace-nowrap",sortable:!0},{key:"updated_at",label:e("Last Updated At"),class:"text-right w-1/12 whitespace-nowrap",sortable:!0},{key:"actions",label:e("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(c,V)=>{const _=y("InertiaLink"),h=k("tippy");return u(),d(g,null,{default:s(()=>[a(A,{title:r(e)("My Application Requests")},null,8,["title"]),o("div",T,[o("div",L,[o("h1",N,i(r(e)("My Application Requests")),1),o("div",S,[a(r(D),{href:c.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:s(()=>[o("span",null,i(r(e)("Homepage")),1)]),_:1},8,["href"])])]),o("div",q,[a(j,{class:"bg-white rounded shadow dark:bg-gray-800 w-full",header:b,data:p.submissions,filters:p.filters},{default:s(({item:t})=>[o("td",B,[a(_,{as:"a",class:"hover:underline",href:c.route("recruitment-submission.show",{submission:t.id,recruitment:t.recruitment.slug})},{default:s(()=>[n(i(t.id),1)]),_:2},1032,["href"])]),a(l,null,{default:s(()=>[n(i(t.recruitment.title),1)]),_:2},1024),a(l,null,{default:s(()=>[a(I,{status:t.status.value},null,8,["status"])]),_:2},1024),x((u(),d(l,{class:"text-right whitespace-nowrap",content:r(f)(t.created_at)},{default:s(()=>[n(i(r(m)(t.created_at)),1)]),_:2},1032,["content"])),[[h]]),x((u(),d(l,{class:"text-right whitespace-nowrap",content:r(f)(t.updated_at)},{default:s(()=>[n(i(r(m)(t.updated_at)),1)]),_:2},1032,["content"])),[[h]]),o("td",C,[a(_,{as:"a",href:c.route("recruitment-submission.show",{recruitment:t.recruitment.slug,submission:t.id}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:s(()=>[a(r(R),{class:"inline-block w-5 h-5"})]),_:2},1032,["href"])])]),_:1},8,["data","filters"])])])]),_:1})}}};export{Q as default};

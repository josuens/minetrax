import{_ as D}from"./AdminLayout-cf9c4a02.js";import{u as A}from"./useAuthorizable-18c71ef1.js";import{u as J}from"./AppLayout-5f3e8958.js";import{l as y,q as g,o as l,c as n,w as s,k as I,b as i,u as e,a as o,t as r,f as d,e as p,j as m,d as N}from"./app-f1704ce4.js";import{D as b,_ as T}from"./DtRowItem-4c95fc92.js";import{r as C}from"./ArrowPathIcon-48bc1ee6.js";import{r as E}from"./TrashIcon-bf1d9404.js";import"./use-resolve-button-type-18f071c1.js";import"./open-closed-113ca95c.js";import"./CloudArrowDownIcon-6c974300.js";import"./index-638ebb4e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-4144b1c7.js";import"./vue-multiselect.esm-88e31988.js";import"./XMarkIcon-2c5e91bb.js";import"./hidden-44fa52d6.js";const B={class:"px-10 py-8 mx-auto text-gray-400"},F={class:"flex justify-between mb-4"},R={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},V={class:"flex"},L={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},$={class:"px-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},O={class:"text-sm text-gray-500 dark:text-gray-400"},S=["title"],U=["title"],z={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},le={__name:"IndexFailedJob",props:{jobs:Object,filters:Object},setup(h){const{can:c}=A(),{__:t}=I(),{formatTimeAgoToNow:k,formatToDayDateString:w}=J(),v=[{key:"id",label:t("ID"),sortable:!0},{key:"uuid",label:t("UUID"),sortable:!0},{key:"job",sortable:!1,label:t("Job")},{key:"connection",sortable:!0,label:t("Connection/Queue")},{key:"exception",label:t("Exception"),sortable:!0},{key:"failed_at",sortable:!0,label:t("Failed At")},{key:"actions",label:t("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(u,H)=>{const j=y("app-head"),f=y("InertiaLink"),x=g("confirm"),_=g("tippy");return l(),n(D,null,{default:s(()=>[i(j,{title:e(t)("Failed Jobs")},null,8,["title"]),o("div",B,[o("div",F,[o("h1",R,r(e(t)("Failed Jobs")),1),o("div",V,[e(c)("retry failed_jobs")?(l(),n(f,{key:0,href:u.route("admin.failed-job.retry"),method:"post",class:"mr-2 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:shadow-outline-gray"},{default:s(()=>[d(r(e(t)("Retry All Jobs")),1)]),_:1},8,["href"])):p("",!0),e(c)("delete failed_jobs")?m((l(),n(f,{key:1,method:"delete",as:"button",href:u.route("admin.failed-job.clear"),class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:shadow-outline-red transition ease-in-out duration-150"},{default:s(()=>[d(r(e(t)("Clear All Jobs")),1)]),_:1},8,["href"])),[[x,{message:"Are you sure you want to delete all failed jobs?"}]]):p("",!0)])]),i(T,{class:"bg-white rounded shadow dark:bg-gray-800",header:v,data:h.jobs,filters:h.filters},{default:s(({item:a})=>[o("td",L,r(a.id),1),i(b,{class:"text-left"},{default:s(()=>[d(r(a.uuid),1)]),_:2},1024),o("td",$,[o("div",null,[o("div",q,r(a.payload.displayName),1),o("div",O,r(e(t)("Attempts: :attempts",{attempts:a.payload.attempts})),1)])]),i(b,{class:"text-left"},{default:s(()=>[d(r(a.connection+"/"+a.queue),1)]),_:2},1024),i(b,{class:"text-left"},{default:s(()=>[o("span",{class:"truncate",title:a.exception},r(a.exception.substring(0,30)+"..."),9,S)]),_:2},1024),i(b,null,{default:s(()=>[m((l(),N("span",{title:e(w)(a.failed_at)},[d(r(e(k)(a.failed_at)),1)],8,U)),[[_]])]),_:2},1024),o("td",z,[e(c)("retry failed_jobs")?m((l(),n(f,{key:0,as:"button",method:"post",data:{uuid:a.uuid},href:u.route("admin.failed-job.retry"),class:"inline-flex items-center justify-center text-green-600 dark:text-green-500 hover:text-green-800 dark:hover:text-green-800",title:e(t)("Retry Job")},{default:s(()=>[i(e(C),{class:"inline-block w-5 h-5"})]),_:2},1032,["data","href","title"])),[[_]]):p("",!0),e(c)("delete failed_jobs")?m((l(),n(f,{key:1,as:"button",method:"DELETE",data:{uuid:a.uuid},href:u.route("admin.failed-job.clear"),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:e(t)("Delete Job")},{default:s(()=>[i(e(E),{class:"inline-block w-5 h-5"})]),_:2},1032,["data","href","title"])),[[x,{message:"Are you sure you want to delete this Job permanently?"}],[_]]):p("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{le as default};

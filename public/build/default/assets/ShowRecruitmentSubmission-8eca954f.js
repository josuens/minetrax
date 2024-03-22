import{o as l,d,a as t,x as B,r as F,T,l as y,q as L,c as _,w as a,b as n,u as e,_ as V,t as i,Z as D,f,e as x,j as v,A as N,p as z,z as K,k as R}from"./app-13432a2a.js";import{u as W,A as M}from"./AppLayout-bb7204d2.js";import{u as P}from"./useFormKit-cc6f0e5f.js";import{_ as E}from"./RecruitmentMessagesBox-f5057bcb.js";import{_ as k}from"./RecruitmentStatusBadge-aef8cf02.js";import{_ as H}from"./DialogModal-4167d4a9.js";import{_ as I}from"./SecondaryButton-c8d4c2bd.js";import{X as U}from"./XTextarea-aac85f83.js";import{L as X}from"./LoadingButton-f0d5d13d.js";import{_ as Y}from"./AlertCard-e85b7f75.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-38ac9d5b.js";import"./LoadingSpinner-be0f76fa.js";import"./UserDisplayname-e1b13ce3.js";import"./Modal-384608b1.js";import"./XMarkIcon-d1365086.js";function q(s,g){return l(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})])}const O={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},Z={class:"flex justify-between mb-8"},G={class:"font-bold text-xl text-gray-500 dark:text-gray-300"},J={class:"mr-3"},Q={class:"flex space-x-2"},tt={class:"flex flex-col md:flex-row md:space-x-4"},et={class:"flex w-full gap-4 flex-col md:flex-row"},st={class:"md:w-1/2 space-y-4"},it={class:"p-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800"},ot={class:"flex flex-col mt-3"},nt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},at={class:"flex items-center justify-between w-full"},rt=t("div",null," You ",-1),lt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},dt={class:"flex items-center justify-between w-full"},ut={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},ct={class:"flex items-center justify-between w-full"},mt=["title"],ft={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},xt={class:"flex items-center justify-between w-full"},bt=["title"],gt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},pt={class:"flex items-center justify-between w-full"},ht={key:0,class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},wt={class:"flex items-center justify-between w-full"},yt={class:"w-1/2 whitespace-pre-line text-right"},_t={key:1,class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},vt={class:"flex items-center justify-between w-full"},kt={class:"flex-shrink-0 h-10 w-10 mr-2"},St=["src"],Ct={class:"flex-col"},At={class:"text-sm text-gray-500"},jt={class:"button-group flex space-x-4 justify-end p-4"},$t={class:"p-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800"},Bt={class:"md:w-1/2 px-3 py-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800 md:px-10 md:py-5 no-disabled-effect"},Ft={class:"text-lg font-bold"},Tt={key:0,class:"text-xs text-gray-500"},qt={__name:"ShowRecruitmentSubmission",props:{submission:{type:Object}},setup(s){const g=s,{__:o}=R(),{formatTimeAgoToNow:p,formatToDayDateString:h,secondsToHMS:S}=W(),C=B(()=>g.submission.data.map(u=>({...u,value:u.data}))),A=P().generateSchemaFromFieldsArray(C.value,!0),c=F(!1),m=T({reason:""});return(u,r)=>{const j=y("InertiaLink"),$=y("FormKit"),w=L("tippy");return l(),_(M,null,{default:a(()=>[n(V,{title:e(o)("Your application for :recruitmenttitle #:index - Recruitments",{index:s.submission.id,recruitmenttitle:s.submission.recruitment.title})},null,8,["title"]),t("div",O,[t("div",Z,[t("h1",G,[t("span",J,i(e(o)("Application for :recruitmenttitle #:index",{index:s.submission.id,recruitmenttitle:s.submission.recruitment.title})),1),n(k,{status:s.submission.status.value},null,8,["status"])]),t("div",Q,[n(e(D),{href:u.route("recruitment-submission.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:a(()=>[t("span",null,i(e(o)("Back")),1)]),_:1},8,["href"])])]),s.submission.status.value==="pending"?(l(),_(Y,{key:0,"title-class":"flex items-center","text-color":"text-green-600 dark:text-green-400","border-color":"border-green-500"},{icon:a(()=>[n(e(q),{class:"h-6 w-6 text-green-500 mr-2"})]),default:a(()=>[f(i(e(o)("Success! A staff will soon review your application. Please be patience."))+" ",1)]),_:1})):x("",!0),t("div",tt,[t("div",et,[t("div",st,[t("div",it,[t("ul",ot,[t("li",nt,[t("div",at,[t("span",null,i(e(o)("Applicant")),1),rt])]),t("li",lt,[t("div",dt,[t("span",null,i(e(o)("Recruitment")),1),t("span",null,i(s.submission.recruitment.title),1)])]),t("li",ut,[t("div",ct,[t("span",null,i(e(o)("Created At")),1),v((l(),d("span",{title:e(p)(s.submission.created_at)},[f(i(e(h)(s.submission.created_at)),1)],8,mt)),[[w]])])]),t("li",ft,[t("div",xt,[t("span",null,i(e(o)("Last Updated At")),1),v((l(),d("span",{title:e(p)(s.submission.updated_at)},[f(i(e(h)(s.submission.updated_at)),1)],8,bt)),[[w]])])]),t("li",gt,[t("div",pt,[t("span",null,i(e(o)("Submission Status")),1),n(k,{status:s.submission.status.value},null,8,["status"])])]),s.submission.last_act_reason?(l(),d("li",ht,[t("div",wt,[t("span",null,i(e(o)("Reason")),1),t("span",yt,i(s.submission.last_act_reason),1)])])):x("",!0),s.submission.last_act_by?(l(),d("li",_t,[t("div",vt,[t("span",null,i(e(o)("Marked :status By",{status:e(N.startCase)(s.submission.status.value)})),1),t("span",null,[n(j,{href:u.route("user.public.get",s.submission.last_actor.username),class:"flex items-center"},{default:a(()=>[t("div",kt,[t("img",{class:"h-10 w-10 rounded-full",src:s.submission.last_actor.profile_photo_url,alt:"Avatar"},null,8,St)]),t("div",Ct,[t("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap truncate",style:z([s.submission.last_actor.roles[0].color?{color:s.submission.last_actor.roles[0].color}:null])},i(s.submission.last_actor.name),5),t("div",At," @"+i(s.submission.last_actor.username),1)])]),_:1},8,["href"])])])])):x("",!0)]),t("div",jt,[s.submission.i_can_withdraw?(l(),d("button",{key:0,class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:shadow-outline-gray",onClick:r[0]||(r[0]=b=>c.value=!0)},[t("span",null,i(e(o)("Withdraw")),1)])):x("",!0)])]),t("div",$t,[n(E,{submission:s.submission,"for-admin":!1},null,8,["submission"])])]),t("div",Bt,[n($,{disabled:!0,type:"form","submit-attrs":{inputClass:"hidden"}},{default:a(()=>[n(e(K),{schema:e(A)},null,8,["schema"])]),_:1})])])])]),n(H,{show:c.value,onClose:r[4]||(r[4]=b=>c.value=!1)},{title:a(()=>[t("h3",Ft,i(e(o)("Withdraw & Cancel Application")),1),s.submission.recruitment.submission_cooldown_in_seconds?(l(),d("p",Tt,i(e(o)("Please note that you won't be apply again for a given cooldown period of :hms.",{hms:e(S)(s.submission.recruitment.submission_cooldown_in_seconds,!0)})),1)):x("",!0)]),content:a(()=>[n(U,{modelValue:e(m).reason,"onUpdate:modelValue":r[1]||(r[1]=b=>e(m).reason=b),label:e(o)("Please provide a reason for withdrawing."),error:e(m).errors.reason},null,8,["modelValue","label","error"])]),footer:a(()=>[n(I,{class:"mr-2",onClick:r[2]||(r[2]=b=>c.value=!1)},{default:a(()=>[f(i(e(o)("Cancel")),1)]),_:1}),n(X,{loading:e(m).processing,class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:shadow-outline-gray",onClick:r[3]||(r[3]=()=>{e(m).post(u.route("recruitment-submission.withdraw",{submission:s.submission.id,recruitment:s.submission.recruitment.slug}),{onSuccess:()=>{c.value=!1}})})},{default:a(()=>[f(i(e(o)("Withdraw")),1)]),_:1},8,["loading"])]),_:1},8,["show"])]),_:1})}}};export{qt as default};

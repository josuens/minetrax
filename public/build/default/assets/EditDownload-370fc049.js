import{_ as v}from"./InputError-99d060cb.js";import{L as k}from"./LoadingButton-37976f47.js";import{X as V}from"./XInput-84f7468c.js";import{E as U}from"./easymde-fc3d3c3c.js";import{X as D}from"./XCheckbox-3936c579.js";import{T as E,l as a,o as d,c as L,w as p,b as t,a as o,t as n,i as q,j,v as M,d as m,e as _,f as A}from"./app-f1704ce4.js";import{_ as C}from"./AdminLayout-cf9c4a02.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-5f3e8958.js";import"./Icon-4144b1c7.js";import"./useAuthorizable-18c71ef1.js";import"./use-resolve-button-type-18f071c1.js";import"./open-closed-113ca95c.js";import"./CloudArrowDownIcon-6c974300.js";import"./index-638ebb4e.js";const R={components:{AdminLayout:C,JetInputError:v,LoadingButton:k,XInput:V,XCheckbox:D},props:{download:Object},data(){return{form:E({name:this.download.name,description:this.download.description,file_name:this.download.file_name,is_external_url_hidden:this.download.is_external_url_hidden,is_only_auth:this.download.is_only_auth,min_role_weight_required:this.download.min_role_weight_required,is_active:this.download.is_active,_method:"PUT"}),easyMDE:null}},mounted(){this.easyMDE=new U({previewClass:"editor-preview prose max-w-none"})},methods:{updateDownload(){this.form.description=this.easyMDE.value(),this.form.post(route("admin.download.update",this.download.id),{})}}},T={class:"py-12 px-10 max-w-6xl mx-auto"},B={class:"flex justify-between mb-8"},I={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},X={class:"mt-10 sm:mt-0"},z={class:"md:grid md:grid-cols-3 md:gap-6"},F={class:"md:col-span-1"},O={class:"px-4 sm:px-0"},H={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},S={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},J={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},P={class:"mt-5 md:mt-0 md:col-span-2"},W={class:"shadow overflow-hidden sm:rounded-md"},Y={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},G={class:"grid grid-cols-6 gap-6"},K={class:"col-span-6 sm:col-span-6"},Q={class:"col-span-6 sm:col-span-6"},Z={class:"flex items-center col-span-6 sm:col-span-3"},$={key:0,class:"flex items-center col-span-6 sm:col-span-3"},ee={key:1,class:"col-span-6 sm:col-span-6"},oe={key:2,class:"col-span-6 sm:col-span-6"},le={key:3,class:"col-span-6 sm:col-span-6"},re={for:"file",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},se={class:"block p-2 w-full text-sm text-gray-900 border border-gray-300 cursor-default rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"},te={class:"flex items-center col-span-6 sm:col-span-3"},ne={key:4,class:"col-span-6 sm:col-span-3"},ie={class:"flex items-center col-span-6 sm:col-span-6"},ae={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function de(l,r,i,me,e,f){const w=a("app-head"),y=a("inertia-link"),u=a("x-input"),h=a("jet-input-error"),c=a("x-checkbox"),b=a("loading-button"),x=a("AdminLayout");return d(),L(x,null,{default:p(()=>{var g;return[t(w,{title:`Edit Download #${i.download.id}`},null,8,["title"]),o("div",T,[o("div",B,[o("h1",I,n(l.__("Edit Download")),1),t(y,{href:l.route("admin.download.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:p(()=>[o("span",null,n(l.__("Cancel")),1)]),_:1},8,["href"])]),o("div",X,[o("div",z,[o("div",F,[o("div",O,[o("h3",H,n(l.__("Overview")),1),o("p",S,n(l.__("Using downloads you can safely provide your users way to download anything like resource packs etc.")),1),o("p",J,n(l.__("You can restrict the download to a paricular role and even hide actual external download URL from end user by stream the file directly from within minetrax.")),1)])]),o("div",P,[o("form",{onSubmit:r[7]||(r[7]=q((...s)=>f.updateDownload&&f.updateDownload(...s),["prevent"]))},[o("div",W,[o("div",Y,[o("div",G,[o("div",K,[t(u,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=s=>e.form.name=s),label:l.__("Download Name/Title"),error:e.form.errors.name,type:"text",name:"name","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),o("div",Q,[j(o("textarea",{id:"description","onUpdate:modelValue":r[1]||(r[1]=s=>e.form.description=s),"aria-label":"description",name:"description",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[M,e.form.description]]),t(h,{message:e.form.errors.description,class:"mt-2"},null,8,["message"])]),o("div",Z,[t(c,{id:"is_external","model-value":i.download.is_external,disabled:!0,label:l.__("External URL"),help:l.__("If you want to link to an external file, check this."),error:e.form.errors.is_external},null,8,["model-value","label","help","error"])]),i.download.is_external?(d(),m("div",$,[t(c,{id:"is_external_url_hidden",modelValue:e.form.is_external_url_hidden,"onUpdate:modelValue":r[2]||(r[2]=s=>e.form.is_external_url_hidden=s),label:l.__("Hide External URL"),help:l.__("Hide the actual external URL from end users."),name:"is_external_url_hidden",error:e.form.errors.is_external_url_hidden},null,8,["modelValue","label","help","error"])])):_("",!0),i.download.is_external?(d(),m("div",ee,[t(u,{id:"file_url",disabled:!0,"model-value":i.download.file_url,label:l.__("File Download URL"),error:e.form.errors.file_url,help:l.__("Eg: http://s3.amazonaws.com/bucket/file.zip"),type:"text",name:"file_url","help-error-flex":"flex-row"},null,8,["model-value","label","error","help"])])):_("",!0),i.download.is_external?(d(),m("div",oe,[t(u,{id:"file_name",modelValue:e.form.file_name,"onUpdate:modelValue":r[3]||(r[3]=s=>e.form.file_name=s),label:l.__("File Name (with extension)"),error:e.form.errors.file_name,help:l.__("Eg: file.zip"),type:"text",name:"file_name","help-error-flex":"flex-row"},null,8,["modelValue","label","error","help"])])):_("",!0),e.form.is_external?_("",!0):(d(),m("div",le,[o("label",re,n(l.__("File")),1),o("span",se,n((g=i.download.file)==null?void 0:g.file_name),1),t(h,{message:e.form.errors.file,class:"mt-2"},null,8,["message"])])),o("div",te,[t(c,{id:"is_only_auth",modelValue:e.form.is_only_auth,"onUpdate:modelValue":r[4]||(r[4]=s=>e.form.is_only_auth=s),label:l.__("Authenticated Users Only"),help:l.__("If only authenticated users should be able to view & download this file."),name:"is_only_auth",error:e.form.errors.is_only_auth},null,8,["modelValue","label","help","error"])]),e.form.is_only_auth?(d(),m("div",ne,[t(u,{id:"min_role_weight_required",modelValue:e.form.min_role_weight_required,"onUpdate:modelValue":r[5]||(r[5]=s=>e.form.min_role_weight_required=s),label:l.__("Minimum Role Weight"),help:l.__("The minimum role weight required to download. Leave empty to allow all authenticated users."),error:e.form.errors.min_role_weight_required,type:"number",name:"min_role_weight_required","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])])):_("",!0),o("div",ie,[t(c,{id:"is_active",modelValue:e.form.is_active,"onUpdate:modelValue":r[6]||(r[6]=s=>e.form.is_active=s),label:l.__("Active"),help:l.__("Active downloads are visible to end users."),name:"is_active",error:e.form.errors.is_active},null,8,["modelValue","label","help","error"])])])]),o("div",ae,[t(b,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:p(()=>[A(n(l.__("Update Download")),1)]),_:1},8,["loading"])])])],32)])])])])]}),_:1})}const De=N(R,[["render",de]]);export{De as default};

import{_ as P}from"./InputError-99d060cb.js";import{_ as E}from"./SecondaryButton-c6d8a330.js";import{L as S}from"./LoadingButton-37976f47.js";import{X as U}from"./XInput-84f7468c.js";import{s as j}from"./vue-multiselect.esm-88e31988.js";import{X as A}from"./XCheckbox-3936c579.js";import{T as N,l as i,q as C,o as g,c as L,w as d,b as l,a as o,t as n,f as p,i as b,j as _,m as y,p as B,d as I}from"./app-f1704ce4.js";import{_ as M}from"./AdminLayout-cf9c4a02.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-5f3e8958.js";import"./Icon-4144b1c7.js";import"./useAuthorizable-18c71ef1.js";import"./use-resolve-button-type-18f071c1.js";import"./open-closed-113ca95c.js";import"./CloudArrowDownIcon-6c974300.js";import"./index-638ebb4e.js";const D={components:{AdminLayout:M,XCheckbox:A,JetInputError:P,LoadingButton:S,JetSecondaryButton:E,Multiselect:j,XInput:U},props:{permissions:Array,role:Object},data(){return{form:N({name:this.role.name,display_name:this.role.display_name,color:this.role.color,weight:this.role.weight,is_staff:this.role.is_staff,is_hidden_from_staff_list:this.role.is_hidden_from_staff_list,permissions:this.role.permissions,web_message_format:this.role.web_message_format,photo:null,_method:"PUT"}),photoPreview:null}},methods:{updateRole(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.role.update",this.role.id),{preserveScroll:!0})},updatePhotoPreview(){const e=new FileReader;e.onload=t=>{this.photoPreview=t.target.result},e.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},T={class:"max-w-6xl px-10 py-12 mx-auto"},F={class:"flex justify-between mb-8"},X={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},W={class:"mt-10 sm:mt-0"},H={class:"md:grid md:grid-cols-3 md:gap-6"},J={class:"md:col-span-1"},O={class:"px-4 sm:px-0"},q={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},G={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},K=o("br",null,null,-1),Q={class:"mt-5 md:mt-0 md:col-span-2"},Y={class:"shadow sm:rounded-md"},Z={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},$={class:"grid grid-cols-6 gap-6"},ee={class:"col-span-6 sm:col-span-6"},oe={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},se={class:"mt-2"},te={content:"Role name cannot be changed!",class:"col-span-6 sm:col-span-3 focus:outline-none"},re={class:"col-span-6 sm:col-span-3"},le={class:"col-span-6 sm:col-span-6"},ie={class:"col-span-6 sm:col-span-3"},ne={class:"col-span-6 sm:col-span-3"},ae={class:"flex items-center col-span-6 sm:col-span-4"},me={class:"flex items-center col-span-6 sm:col-span-4"},de={class:"col-span-6 sm:col-span-6"},pe={for:"permissions",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},_e={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function fe(e,t,f,ue,s,a){const w=i("app-head"),v=i("inertia-link"),k=i("jet-secondary-button"),u=i("jet-input-error"),m=i("x-input"),c=i("x-checkbox"),x=i("multiselect"),V=i("loading-button"),R=i("AdminLayout"),h=C("tippy");return g(),L(R,null,{default:d(()=>[l(w,{title:e.__("Edit Role - :name",{name:f.role.name})},null,8,["title"]),o("div",T,[o("div",F,[o("h1",X,n(e.__("Edit Role")),1),l(v,{href:e.route("admin.role.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:d(()=>[o("span",null,n(e.__("Cancel")),1)]),_:1},8,["href"])]),o("div",W,[o("div",H,[o("div",J,[o("div",O,[o("h3",q,n(e.__("Overview")),1),o("p",G,[p(n(e.__("Roles are used to authorize registered users of your website to perform actions on web like ban, mute users etc."))+" ",1),K,p(" "+n(e.__("For each role you can customize 'Web Message Format' which is the in-game chat format.")),1)])])]),o("div",Q,[o("form",{onSubmit:t[9]||(t[9]=b((...r)=>a.updateRole&&a.updateRole(...r),["prevent"]))},[o("div",Y,[o("div",Z,[o("div",$,[o("div",ee,[o("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:t[0]||(t[0]=(...r)=>a.updatePhotoPreview&&a.updatePhotoPreview(...r))},null,544),o("label",oe,n(e.__("Role Image")),1),_(o("div",se,[o("span",{class:"block w-2/5 h-12",style:B("background-size: fill; background-repeat: no-repeat; background-size: contain; background-image: url('"+s.photoPreview+"');")},null,4)],512),[[y,s.photoPreview]]),l(k,{class:"mt-2 mr-2",type:"button",onClick:b(a.selectNewPhoto,["prevent"])},{default:d(()=>[p(n(e.__("Select A New Image")),1)]),_:1},8,["onClick"]),l(u,{message:s.form.errors.photo,class:"mt-2"},null,8,["message"])]),_((g(),I("div",te,[_(l(m,{id:"name",modelValue:s.form.name,"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.name=r),label:e.__("Role Name"),help:e.__("Eg: superadmin"),error:s.form.errors.name,type:"text",name:"name",disabled:!0,title:e.__("Role name cannot be changed!")},null,8,["modelValue","label","help","error","title"]),[[h]])])),[[h]]),o("div",re,[l(m,{id:"display_name",modelValue:s.form.display_name,"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.display_name=r),label:e.__("Display Name"),help:e.__("Eg: Super Administrator"),error:s.form.errors.display_name,type:"text",name:"display_name"},null,8,["modelValue","label","help","error"])]),o("div",le,[l(m,{id:"web_message_format",modelValue:s.form.web_message_format,"onUpdate:modelValue":t[3]||(t[3]=r=>s.form.web_message_format=r),label:e.__("Web Message Format"),help:e.__("Eg: &4&b{USERNAME}&r&7"),error:s.form.errors.web_message_format,type:"text",name:"web_message_format"},null,8,["modelValue","label","help","error"])]),o("div",ie,[l(m,{id:"color",modelValue:s.form.color,"onUpdate:modelValue":t[4]||(t[4]=r=>s.form.color=r),label:e.__("Color"),help:e.__("Eg: #ff00ff"),error:s.form.errors.color,type:"text",name:"color"},null,8,["modelValue","label","help","error"])]),o("div",ne,[l(m,{id:"weight",modelValue:s.form.weight,"onUpdate:modelValue":t[5]||(t[5]=r=>s.form.weight=r),label:e.__("Weight"),help:e.__("More important the role more the weight"),error:s.form.errors.weight,type:"number",name:"weight"},null,8,["modelValue","label","help","error"])]),o("div",ae,[l(c,{id:"is_staff",modelValue:s.form.is_staff,"onUpdate:modelValue":t[6]||(t[6]=r=>s.form.is_staff=r),label:e.__("Is Staff"),help:e.__("This role is a staff member. This flag is used to let other know staff and show admin panel."),name:"is_staff",error:s.form.errors.is_staff},null,8,["modelValue","label","help","error"])]),o("div",me,[l(c,{id:"is_hidden_from_staff_list",modelValue:s.form.is_hidden_from_staff_list,"onUpdate:modelValue":t[7]||(t[7]=r=>s.form.is_hidden_from_staff_list=r),label:e.__("Is Hidden from List"),help:e.__("Hide this role from staff list."),name:"is_hidden_from_staff_list",error:s.form.errors.is_hidden_from_staff_list},null,8,["modelValue","label","help","error"])]),_(o("div",de,[o("label",pe,n(e.__("Administrative Permissions")),1),l(x,{id:"permissions",modelValue:s.form.permissions,"onUpdate:modelValue":t[8]||(t[8]=r=>s.form.permissions=r),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:f.permissions,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:e.__("Search")+"..."},null,8,["modelValue","options","placeholder"]),l(u,{message:s.form.errors.permissions,class:"mt-2"},null,8,["message"])],512),[[y,s.form.is_staff]])])]),o("div",_e,[l(V,{loading:s.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:d(()=>[p(n(e.__("Edit Role")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const Ae=z(D,[["render",fe]]);export{Ae as default};

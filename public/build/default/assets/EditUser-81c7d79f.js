import{_ as A}from"./InputError-99d060cb.js";import{_ as B}from"./SecondaryButton-c6d8a330.js";import{L as R}from"./LoadingButton-37976f47.js";import{X as C}from"./XInput-84f7468c.js";import{_ as T}from"./Label-54d8da87.js";import{i as N}from"./index.es-7cdc35de.js";import{X}from"./XCheckbox-3936c579.js";import{X as I}from"./XSelect-071eb764.js";import{X as O}from"./XTextarea-d6659f51.js";import{s as F}from"./vue-multiselect.esm-88e31988.js";import{T as G,l as n,o as c,c as Y,w as L,b as t,a as r,t as _,i as P,d as h,j as S,m as E,p as z,f as j,e as b}from"./app-f1704ce4.js";import{_ as J}from"./AdminLayout-cf9c4a02.js";import{u as M}from"./useAuthorizable-18c71ef1.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-5f3e8958.js";import"./Icon-4144b1c7.js";import"./use-resolve-button-type-18f071c1.js";import"./open-closed-113ca95c.js";import"./CloudArrowDownIcon-6c974300.js";import"./index-638ebb4e.js";const q={components:{AdminLayout:J,XTextarea:O,XSelect:I,XCheckbox:X,JetInputError:A,LoadingButton:R,JetSecondaryButton:B,XInput:C,JetLabel:T,DatePicker:N,Multiselect:F},props:{userData:Object,rolesList:Object,badgesList:Object,countryList:Object},setup(){const{can:o}=M();return{can:o}},data(){var o,l,i,g,e,u,y,w,k,v,m,a,d,V,p,U,f,D;return{form:G({_method:"PUT",username:this.userData.username,name:this.userData.name,email:this.userData.email,photo:null,dob:this.userData.dob,gender:this.userData.gender,cover_image_url:this.userData.cover_image_url,s_discord_username:((l=(o=this.userData)==null?void 0:o.social_links)==null?void 0:l.s_discord_username)??null,s_steam_profile_url:((g=(i=this.userData)==null?void 0:i.social_links)==null?void 0:g.s_steam_profile_url)??null,s_twitter_url:((u=(e=this.userData)==null?void 0:e.social_links)==null?void 0:u.s_twitter_url)??null,s_youtube_url:((w=(y=this.userData)==null?void 0:y.social_links)==null?void 0:w.s_youtube_url)??null,s_facebook_url:((v=(k=this.userData)==null?void 0:k.social_links)==null?void 0:v.s_facebook_url)??null,s_twitch_url:((a=(m=this.userData)==null?void 0:m.social_links)==null?void 0:a.s_twitch_url)??null,s_website_url:((V=(d=this.userData)==null?void 0:d.social_links)==null?void 0:V.s_website_url)??null,s_linkedin_url:((U=(p=this.userData)==null?void 0:p.social_links)==null?void 0:U.s_linkedin_url)??null,s_tiktok_url:((D=(f=this.userData)==null?void 0:f.social_links)==null?void 0:D.s_tiktok_url)??null,about:this.userData.about,profile_photo_source:this.userData.settings?this.userData.settings.profile_photo_source:null,show_gender:this.userData.settings?!!+this.userData.settings.show_gender:!1,show_yob:this.userData.settings?!!+this.userData.settings.show_yob:!1,verified:!!this.userData.verified_at,role:this.userData.roles[0].name,badges:this.userData.badges,country:this.userData.country,country_id:this.userData.country_id,password:"",locale:this.userData.locale}),photoPreview:null,availableLocales:{}}},created(){this.$page.props.localeSwitcherEnabled&&this.getAvailableLocales()},methods:{updateUserInformation(){var l;this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]);const o=this.form.badges;this.form.badges=this.form.badges.map(i=>i.id),this.form.country_id=(l=this.form.country)==null?void 0:l.id,this.form.post(route("admin.user.update",this.userData.id),{preserveScroll:!0}),this.form.badges=o},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const o=new FileReader;o.onload=l=>{this.photoPreview=l.target.result},o.readAsDataURL(this.$refs.photo.files[0])},getAvailableLocales(){axios.get(route("locale.list")).then(o=>{o.data.forEach(i=>{this.availableLocales[i.code]=i.display})}).catch(o=>{console.log(o)})}}},H={class:"max-w-5xl px-10 py-12 mx-auto"},K={class:"flex justify-between mb-8"},Q={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},Z={class:"mt-10 sm:mt-0"},$={class:""},ee={class:"mt-5 md:mt-0"},oe={class:"shadow sm:rounded-md"},le={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},se={class:"grid grid-cols-6 gap-6"},re={key:0,class:"hidden col-span-6 sm:col-span-4"},te={class:"mt-2"},ae=["src","alt"],ie={class:"mt-2"},ne={class:"col-span-6 sm:col-span-3"},ue={class:"col-span-6 sm:col-span-3"},me={class:"col-span-6 sm:col-span-3"},de={class:"col-span-6 sm:col-span-3"},_e={class:"relative col-span-6 sm:col-span-3"},pe={for:"dob",class:"absolute -top-2.5 left-0 px-3 py-5 text-xs text-gray-500 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"},ce={key:1,class:"col-span-6 sm:col-span-3"},fe={class:"col-span-6 sm:col-span-3"},he={key:2,class:"col-span-6 sm:col-span-3"},be={class:"col-span-6 sm:col-span-3"},ge={class:"col-span-6 sm:col-span-3"},ye={class:"col-span-6 sm:col-span-3"},we={class:"col-span-6 sm:col-span-3"},ke={class:"col-span-6 sm:col-span-3"},ve={class:"col-span-6 sm:col-span-3"},Ve={class:"col-span-6 sm:col-span-3"},Ue={class:"col-span-6 sm:col-span-3"},De={class:"col-span-6 sm:col-span-3"},Le={class:"col-span-6 sm:col-span-3"},Pe={class:"col-span-6 sm:col-span-3"},Se={key:3,class:"col-span-6 sm:col-span-3"},Ee={for:"badges",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},je={class:"col-span-6 sm:col-span-3"},xe={for:"country",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Ae={key:4,class:"col-span-6 sm:col-span-3"},Be={class:"col-span-6 sm:col-span-3"},Re={class:"col-span-6 sm:col-span-6"},Ce={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function Te(o,l,i,g,e,u){const y=n("app-head"),w=n("inertia-link"),k=n("jet-label"),v=n("jet-secondary-button"),m=n("jet-input-error"),a=n("x-input"),d=n("x-select"),V=n("date-picker"),p=n("x-checkbox"),U=n("x-textarea"),f=n("multiselect"),D=n("loading-button"),x=n("AdminLayout");return c(),Y(x,null,{default:L(()=>[t(y,{title:o.__("Edit User @:username",{username:i.userData.username})},null,8,["title"]),r("div",H,[r("div",K,[r("h1",Q,_(o.__("Edit User ':username'",{username:i.userData.name})),1),t(w,{href:o.route("admin.user.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:L(()=>[r("span",null,_(o.__("Cancel")),1)]),_:1},8,["href"])]),r("div",Z,[r("div",$,[r("div",ee,[r("form",{onSubmit:l[25]||(l[25]=P((...s)=>u.updateUserInformation&&u.updateUserInformation(...s),["prevent"]))},[r("div",oe,[r("div",le,[r("div",se,[o.$page.props.jetstream.managesProfilePhotos?(c(),h("div",re,[r("input",{ref:"photo",type:"file",class:"hidden",onChange:l[0]||(l[0]=(...s)=>u.updatePhotoPreview&&u.updatePhotoPreview(...s))},null,544),t(k,{for:"photo",value:"Photo"}),S(r("div",te,[r("img",{src:i.userData.profile_photo_url,alt:i.userData.name,class:"object-cover w-20 h-20 rounded-full"},null,8,ae)],512),[[E,!e.photoPreview]]),S(r("div",ie,[r("span",{class:"block w-20 h-20 rounded-full",style:z("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[E,e.photoPreview]]),t(v,{class:"mt-2 mr-2",type:"button",onClick:P(u.selectNewPhoto,["prevent"])},{default:L(()=>[j(_(o.__("Select A New Photo")),1)]),_:1},8,["onClick"]),t(m,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):b("",!0),r("div",ne,[t(a,{id:"username",modelValue:e.form.username,"onUpdate:modelValue":l[1]||(l[1]=s=>e.form.username=s),label:o.__("Username"),error:e.form.errors.username,type:"text",name:"username"},null,8,["modelValue","label","error"])]),r("div",ue,[t(a,{id:"email",modelValue:e.form.email,"onUpdate:modelValue":l[2]||(l[2]=s=>e.form.email=s),label:o.__("Email Address"),error:e.form.errors.email,type:"email",name:"email"},null,8,["modelValue","label","error"])]),r("div",me,[t(a,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":l[3]||(l[3]=s=>e.form.name=s),label:o.__("Full Name"),error:e.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","error"])]),r("div",de,[t(d,{id:"profile_photo_source",modelValue:e.form.profile_photo_source,"onUpdate:modelValue":l[4]||(l[4]=s=>e.form.profile_photo_source=s),name:"profile_photo_source",error:e.form.errors.profile_photo_source,label:o.__("Use Avatar from"),"select-list":{linked_player:o.__("Linked Player"),gravatar:o.__("Gravatar")},placeholder:o.__("Uploaded Photo")},null,8,["modelValue","error","label","select-list","placeholder"])]),r("div",_e,[t(V,{id:"dob",value:e.form.dob,"onUpdate:value":l[5]||(l[5]=s=>e.form.dob=s),placeholder:o.__("Select your date of birth"),class:"w-full","value-type":"format","input-class":"block w-full p-3 text-sm border-gray-300 rounded-md h-14 pt-7 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900"},null,8,["value","placeholder"]),r("label",pe,_(o.__("Date of Birth")),1),t(m,{message:e.form.errors.dob,class:"mt-1"},null,8,["message"])]),e.form.dob?(c(),h("div",ce,[t(p,{id:"show_yob",modelValue:e.form.show_yob,"onUpdate:modelValue":l[6]||(l[6]=s=>e.form.show_yob=s),label:o.__("Show Year of Birth"),help:o.__("Show Year of Birth in your public profile."),name:"show_yob",error:e.form.errors.show_yob},null,8,["modelValue","label","help","error"])])):b("",!0),r("div",fe,[t(d,{id:"gender",modelValue:e.form.gender,"onUpdate:modelValue":l[7]||(l[7]=s=>e.form.gender=s),name:"gender",error:e.form.errors.gender,label:o.__("Gender"),placeholder:"Prefer not to say","select-list":{m:o.__("Male"),f:o.__("Female"),o:o.__("Others")}},null,8,["modelValue","error","label","select-list"])]),e.form.gender?(c(),h("div",he,[t(p,{id:"show_gender",modelValue:e.form.show_gender,"onUpdate:modelValue":l[8]||(l[8]=s=>e.form.show_gender=s),label:o.__("Show Gender"),help:o.__("Show Gender in your public profile."),name:"show_gender",error:e.form.errors.show_gender},null,8,["modelValue","label","help","error"])])):b("",!0),r("div",be,[t(a,{id:"s_discord_username",modelValue:e.form.s_discord_username,"onUpdate:modelValue":l[9]||(l[9]=s=>e.form.s_discord_username=s),label:o.__("Discord Username"),error:e.form.errors.s_discord_username,autocomplete:"s_discord_username",type:"text",name:"s_discord_username",help:o.__("Eg: username#1234")},null,8,["modelValue","label","error","help"])]),r("div",ge,[t(a,{id:"s_steam_profile_url",modelValue:e.form.s_steam_profile_url,"onUpdate:modelValue":l[10]||(l[10]=s=>e.form.s_steam_profile_url=s),label:o.__("Steam Profile URL"),error:e.form.errors.s_steam_profile_url,autocomplete:"s_steam_profile_url",type:"text",name:"s_steam_profile_url",help:o.__("Eg: https://steamcommunity.com/id/username")},null,8,["modelValue","label","error","help"])]),r("div",ye,[t(a,{id:"s_twitter_url",modelValue:e.form.s_twitter_url,"onUpdate:modelValue":l[11]||(l[11]=s=>e.form.s_twitter_url=s),label:o.__("Twitter Profile URL"),error:e.form.errors.s_twitter_url,autocomplete:"s_twitter_url",type:"text",name:"s_twitter_url",help:o.__("Eg: https://twitter.com/@username")},null,8,["modelValue","label","error","help"])]),r("div",we,[t(a,{id:"s_youtube_url",modelValue:e.form.s_youtube_url,"onUpdate:modelValue":l[12]||(l[12]=s=>e.form.s_youtube_url=s),label:o.__("YouTube URL"),error:e.form.errors.s_youtube_url,autocomplete:"s_youtube_url",type:"text",name:"s_youtube_url",help:o.__("Eg: https://www.youtube.com/minecraft")},null,8,["modelValue","label","error","help"])]),r("div",ke,[t(a,{id:"s_facebook_url",modelValue:e.form.s_facebook_url,"onUpdate:modelValue":l[13]||(l[13]=s=>e.form.s_facebook_url=s),label:o.__("Facebook URL"),error:e.form.errors.s_facebook_url,autocomplete:"s_facebook_url",type:"text",name:"s_facebook_url",help:o.__("Eg: https://www.facebook.com/minecraft")},null,8,["modelValue","label","error","help"])]),r("div",ve,[t(a,{id:"s_twitch_url",modelValue:e.form.s_twitch_url,"onUpdate:modelValue":l[14]||(l[14]=s=>e.form.s_twitch_url=s),label:o.__("Twitch URL"),error:e.form.errors.s_twitch_url,autocomplete:"s_twitch_url",type:"text",name:"s_twitch_url",help:o.__("Eg: https://www.twitch.tv/minecraft")},null,8,["modelValue","label","error","help"])]),r("div",Ve,[t(a,{id:"s_linkedin_url",modelValue:e.form.s_linkedin_url,"onUpdate:modelValue":l[15]||(l[15]=s=>e.form.s_linkedin_url=s),label:o.__("LinkedIn URL"),error:e.form.errors.s_linkedin_url,autocomplete:"s_linkedin_url",type:"text",name:"s_linkedin_url",help:o.__("Eg: https://www.linkedin.com/in/minecraft")},null,8,["modelValue","label","error","help"])]),r("div",Ue,[t(a,{id:"s_tiktok_url",modelValue:e.form.s_tiktok_url,"onUpdate:modelValue":l[16]||(l[16]=s=>e.form.s_tiktok_url=s),label:o.__("TikTok URL"),error:e.form.errors.s_tiktok_url,autocomplete:"s_tiktok_url",type:"text",name:"s_tiktok_url",help:o.__("Eg: https://www.tiktok.com/@minecraft")},null,8,["modelValue","label","error","help"])]),r("div",De,[t(a,{id:"s_website_url",modelValue:e.form.s_website_url,"onUpdate:modelValue":l[17]||(l[17]=s=>e.form.s_website_url=s),label:o.__("Website URL"),error:e.form.errors.s_website_url,autocomplete:"s_website_url",type:"text",name:"s_website_url",help:o.__("Eg: https://my-personal-blog.com")},null,8,["modelValue","label","error","help"])]),r("div",Le,[t(d,{id:"role",modelValue:e.form.role,"onUpdate:modelValue":l[18]||(l[18]=s=>e.form.role=s),name:"role",error:e.form.errors.role,label:"Role",placeholder:o.__("Select role"),"select-list":i.rolesList},null,8,["modelValue","error","placeholder","select-list"])]),r("div",Pe,[t(U,{id:"about",modelValue:e.form.about,"onUpdate:modelValue":l[19]||(l[19]=s=>e.form.about=s),rows:10,label:o.__("About Yourself"),help:o.__("Something about yourself in 255 characters."),error:e.form.errors.about,name:"about"},null,8,["modelValue","label","help","error"])]),g.can("assign badges")?(c(),h("div",Se,[r("label",Ee,_(o.__("User Badges")),1),t(f,{id:"badges",modelValue:e.form.badges,"onUpdate:modelValue":l[20]||(l[20]=s=>e.form.badges=s),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:i.badgesList,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:o.__("Search")+"...",label:"name","track-by":"id"},null,8,["modelValue","options","placeholder"]),t(m,{message:e.form.errors.permissions,class:"mt-2"},null,8,["message"])])):b("",!0),r("div",je,[r("label",xe,_(o.__("Country")),1),t(f,{id:"country",modelValue:e.form.country,"onUpdate:modelValue":l[21]||(l[21]=s=>e.form.country=s),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:i.countryList,multiple:!1,placeholder:o.__("Search")+"...",label:"name","track-by":"id"},null,8,["modelValue","options","placeholder"]),t(m,{message:e.form.errors.country_id,class:"mt-2"},null,8,["message"])]),o.$page.props.localeSwitcherEnabled?(c(),h("div",Ae,[t(d,{id:"locale",modelValue:e.form.locale,"onUpdate:modelValue":l[22]||(l[22]=s=>e.form.locale=s),name:"locale",error:e.form.errors.locale,label:o.__("Language"),placeholder:o.__("Select Language..."),"select-list":e.availableLocales},null,8,["modelValue","error","label","placeholder","select-list"])])):b("",!0),r("div",Be,[t(p,{id:"verified",modelValue:e.form.verified,"onUpdate:modelValue":l[23]||(l[23]=s=>e.form.verified=s),label:o.__("Verified User"),help:o.__("Show a blue verified tick after username."),name:"verified",error:e.form.errors.verified},null,8,["modelValue","label","help","error"])]),r("div",Re,[t(a,{id:"password",modelValue:e.form.password,"onUpdate:modelValue":l[24]||(l[24]=s=>e.form.password=s),label:o.__("Change User Password"),error:e.form.errors.password,autocomplete:"password",type:"text",name:"password",help:o.__("Leave it empty if you dont want to change password")},null,8,["modelValue","label","error","help"])])])]),r("div",Ce,[t(D,{loading:e.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:L(()=>[j(_(o.__("Update User")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const so=W(q,[["render",Te],["__scopeId","data-v-9f4f7aee"]]);export{so as default};

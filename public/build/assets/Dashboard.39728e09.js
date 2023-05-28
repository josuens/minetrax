import{o as l,d as s,a,c as f,n as h,P,t as o,f as N,e as v,u as r,r as d,y as m,W as x,b as i,w as C,C as F}from"./app.debd0895.js";import{_ as S}from"./AdminLayout.bf786d29.js";import{_ as u}from"./millify.524d1bf5.js";import{_ as p}from"./Chart.5493682a.js";import"./AppLayout.0f9b2e6b.js";const T={class:"p-4 bg-white dark:bg-gray-800 rounded shadow"},$={class:"flex"},q={class:"mb-3 font-bold text-gray-600 dark:text-gray-400 text-md"},A={class:"flex items-end justify-between space-x-4"},I={class:"text-4xl font-bold dark:text-gray-300 text-gray-800"},V={key:0,class:"text-end"},z={class:"text-xs text-gray-400 whitespace-nowrap"},k={__name:"KpiOverviewCard",props:{icon:{type:[Object,Function],required:!0},iconClass:{type:[Array,String],required:!1,default:"text-gray-500 bg-gray-100 dark:bg-gray-500 dark:text-white"},title:{type:[String,Number],required:!0},subValue:{type:[String,Number],required:!1,default:null},subValueClass:{type:[Array,String],required:!1,default:"text-gray-400"},description:{type:[String,Number],required:!1,default:null},descriptionClass:{type:[Array,String],required:!1,default:"text-gray-400"},value:{type:[String,Number],required:!0},change:{type:[String,Number],required:!1,default:null},changeClass:{type:[Array,String],required:!1,default:"text-gray-500 dark:text-gray-400 bg-gray-100"},changeDesc:{type:[String,Number],required:!1,default:null}},setup(e){return(t,n)=>(l(),s("div",T,[a("div",$,[(l(),f(P(e.icon),{class:h(["w-6 h-6 p-1 mr-1 rounded-full",e.iconClass])},null,8,["class"])),a("h3",q,o(t.__(e.title)),1)]),a("div",A,[a("div",null,[a("p",I,[N(o(e.value)+" ",1),e.subValue?(l(),s("span",{key:0,class:h(["text-sm font-semibold",e.subValueClass])},o(e.subValue),3)):v("",!0)]),e.description?(l(),s("p",{key:0,class:h(["text-xs",e.descriptionClass])},o(t.__(e.description)),3)):v("",!0)]),e.change?(l(),s("div",V,[a("span",{class:h(["text-sm w-12 font-bold dark:bg-opacity-10 rounded-full px-2 py-0.5",e.changeClass])},o(e.change),3),a("p",z,o(t.__(e.changeDesc)),1)])):v("",!0)])]))}};function J(e,t){return l(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z","clip-rule":"evenodd"})])}function M(e,t){return l(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z","clip-rule":"evenodd"})])}function B(e,t){return l(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})])}function D(e,t){return l(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"})])}const y={__name:"KpiOverviewCardForDashboard",props:{icon:{type:[Object,Function],required:!0},iconClass:{type:[Array,String],required:!1,default:"text-gray-500 bg-gray-100 dark:bg-gray-500 dark:text-white"},title:{type:[String,Number],required:!0},subValue:{type:[String,Number],required:!1,default:null},description:{type:[String,Number],required:!1,default:null},value:{type:[String,Number],required:!0},change:{type:[String,Number],required:!1,default:null},changeDesc:{type:[String,Number],required:!1,default:null}},setup(e){return(t,n)=>(l(),f(k,{class:"flex-1",title:e.title,value:r(u)(e.value),"sub-value":`(+${e.subValue})`,"sub-value-class":[e.subValue>0?"text-green-500":"text-gray-400"],change:`+${r(u)(e.change,{precision:2})}%`,"change-class":[e.change>0?"text-green-500 bg-green-100":"text-gray-400 bg-gray-100"],"change-desc":e.changeDesc,icon:e.icon,"icon-class":e.iconClass,description:e.description},null,8,["title","value","sub-value","sub-value-class","change","change-class","change-desc","icon","icon-class","description"]))}},U={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},L={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},O={__name:"PlayersOverTimeMetricBox",setup(e){let t=d({}),n=d(null),g=d(!0);return m(async()=>{const c=await x.get(route("admin.graph.online-players"));g.value=!1,n.value=c.data,t.value={tooltip:{trigger:"axis",position:function(b){return[b[0],"10%"]}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"time"},yAxis:{type:"value",boundaryGap:[0,"10%"]},dataZoom:[{type:"inside",start:90,end:100},{start:90,end:100}],series:n.value.servers.map((b,w)=>({name:b,type:"line",smooth:!0,symbol:"none",seriesLayoutBy:"column",encode:{y:w+1},emphasis:{focus:"series"}})),dataset:{source:n.value.data}}}),(c,b)=>(l(),s("div",U,[a("h3",L,o(c.__("Online Players")),1),i(p,{options:r(t),height:"350px",loading:r(g)},null,8,["options","loading"])]))}},j={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},H={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},_={__name:"PlayersPerServerMetricBox",setup(e){let t=d({}),n=d(null),g=d(!0);return m(async()=>{const c=await x.get(route("admin.graph.players-per-server"));g.value=!1,n.value=c.data,t.value={tooltip:{trigger:"item"},toolbox:{feature:{saveAsImage:{}}},legend:{top:"2%",left:"center"},series:[{name:"Unique Players",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:7,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:n.value}]}}),(c,b)=>(l(),s("div",j,[a("h3",H,o(c.__("Players per server")),1),i(p,{options:r(t),height:"350px",loading:r(g)},null,8,["options","loading"])]))}},W={class:"p-4 space-y-4"},K={id:"row1",class:"flex justify-between flex-1 space-x-4"},R={id:"row2",class:"flex justify-between flex-1 space-x-4"},Y={__name:"Dashboard",props:{kpiTotalUsers:Number,kpiUserCreatedForInterval:Number,kpiUserLastSeenForInterval:Number,kpiTotalUserPercent:Number,kpiTotalPlayers:Number,kpiPlayerCreatedForInterval:Number,kpiPlayerLastSeenForInterval:Number,kpiTotalPlayersPercent:Number,kpiTotalFailedJobs:Number,kpiFailedJobsForInterval:Number,kpiTotalFailedJobPercent:Number,kpiTotalPosts:Number,kpiPostCreatedForInterval:Number,kpiTotalPostsPercent:Number,kpiTotalComments:Number},setup(e){return(t,n)=>(l(),f(S,null,{default:C(()=>[i(F,{title:"Admin Dashboard"}),a("div",W,[a("div",K,[i(y,{class:"flex-1",title:"Registered Users",value:r(u)(e.kpiTotalUsers),"sub-value":e.kpiUserCreatedForInterval,change:e.kpiTotalUserPercent,"change-desc":"in last 7 days",icon:r(B),"icon-class":"text-light-blue-500 bg-light-blue-100 dark:bg-light-blue-500 dark:text-white",description:`Active: ${e.kpiUserLastSeenForInterval} users`},null,8,["value","sub-value","change","icon","description"]),i(y,{class:"flex-1",title:"Total Players",value:e.kpiTotalPlayers,"sub-value":e.kpiPlayerCreatedForInterval,change:e.kpiTotalPlayersPercent,"change-desc":"in last 7 days",icon:r(D),"icon-class":"text-green-500 bg-green-100 dark:bg-green-500 dark:text-white",description:`Active: ${e.kpiPlayerLastSeenForInterval} players`},null,8,["value","sub-value","change","icon","description"]),i(y,{class:"flex-1",title:"Total Posts",value:e.kpiTotalPosts,"sub-value":e.kpiPostCreatedForInterval,change:e.kpiTotalPostsPercent,"change-desc":"in last 7 days",icon:r(J),"icon-class":"text-amber-500 bg-amber-100 dark:bg-amber-500 dark:text-white",description:`Total comments: ${e.kpiTotalComments}`},null,8,["value","sub-value","change","icon","description"]),i(k,{class:"flex-1",title:"Failed Jobs",value:r(u)(e.kpiTotalFailedJobs),"sub-value":`(${e.kpiFailedJobsForInterval>0?"+":""}${r(u)(e.kpiFailedJobsForInterval)})`,"sub-value-class":[e.kpiFailedJobsForInterval>0?"text-red-500":"text-green-500"],change:`${e.kpiTotalFailedJobPercent>0?"+":""}${r(u)(e.kpiTotalFailedJobPercent,{precision:2})}%`,"change-class":[e.kpiTotalFailedJobPercent>0?"text-red-500 bg-red-100":"text-green-500 bg-green-100"],"change-desc":"in last 7 days",icon:r(M),"icon-class":"text-red-500 bg-red-100 dark:bg-red-500 dark:text-white",description:"Jobs failed to run."},null,8,["value","sub-value","sub-value-class","change","change-class","icon"])]),a("div",R,[i(O,{class:"basis-3/4"}),i(_,{class:"basis-1/4"})])])]),_:1}))}};export{Y as default};

import{o as t,d,R as o,n as s,x as n,c,w as l,f as b,t as g,u,I as y}from"./app-f1704ce4.js";const k={__name:"Badge",props:{colorClass:{type:String,default:"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"}},setup(r){return(e,a)=>(t(),d("span",{class:s(["font-medium me-2 px-2.5 py-0.5 rounded-full",r.colorClass])},[o(e.$slots,"default")],2))}},i={__name:"CommonStatusBadge",props:{status:{type:String,required:!0}},setup(r){const e=r,a=n(()=>{switch(e.status){case"pending":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700";case"inprogress":case"running":return"bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border border-cyan-300 dark:border-cyan-700";case"approved":case"completed":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border border-green-300 dark:border-green-700";case"rejected":case"failed":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border border-red-300 dark:border-red-700";case"onhold":case"deferred":return"bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700";default:return"bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-700"}});return(p,m)=>(t(),c(k,{"color-class":a.value},{default:l(()=>[b(g(u(y.startCase)(r.status)),1)]),_:1},8,["color-class"]))}};export{i as _};

import{i as e,t as n,u as c,r as p,s as m,j as i}from"./app-6c7f890d.js";import d from"./dashboard-line-cart-section-1f9753df.js";import l from"./dashboard-periodic-tab-section-b0311abd.js";import u from"./administrator-layout-4aaa24fc.js";import"./sidebar-section-a2b68ffd.js";import"./UserGroupIcon-91af0244.js";import"./description-14d0bd6b.js";import"./use-flags-721313dd.js";import"./keyboard-0f4c3d14.js";import"./toastify-d06cbffb.js";import"./logout-section-6131d01c.js";import"./account-service-c20e7684.js";import"./use-root-containers-0922f15e.js";import"./use-resolve-button-type-32580747.js";import"./open-closed-0003d754.js";import"./transition-b05fe103.js";import"./year-select-section-fa9678b6.js";async function f(r,t){return(await e.get(`/api/analytics?year=${r}&periodic=${t}`)).data}function y(){return async function(r,t){const{tab:a,year:s}=t().dashboard,o=(await f(s,a)).data;console.log("result",o),r(n.actions.setAnalytics(o))}}function T({auth:r}){const{year:t,tab:a,analytics:s}=c(o=>o.dashboard);return p.useEffect(()=>{m.dispatch(y())},[t,a]),i.jsxs(u,{user:r.user,children:[i.jsx(l,{}),i.jsx(d,{year:t,analytics:s,periodic:a})]})}export{T as default};

import{i as e,t as n,u as c,r as p,s as m,j as i}from"./app-5b9f29bb.js";import d from"./dashboard-line-cart-section-14b85250.js";import l from"./dashboard-periodic-tab-section-fc36e8fb.js";import u from"./administrator-layout-ee222135.js";import"./sidebar-section-3ed32215.js";import"./UserGroupIcon-e083c6cf.js";import"./description-6252cc91.js";import"./use-flags-c9881f04.js";import"./keyboard-99104053.js";import"./toastify-2bcdc149.js";import"./logout-section-0e0970ca.js";import"./account-service-6d1f1637.js";import"./use-root-containers-5f05a97f.js";import"./use-resolve-button-type-05a3356a.js";import"./open-closed-68fddb44.js";import"./transition-19561af8.js";import"./year-select-section-03a29dd9.js";async function f(r,t){return(await e.get(`/api/analytics?year=${r}&periodic=${t}`)).data}function y(){return async function(r,t){const{tab:a,year:s}=t().dashboard,o=(await f(s,a)).data;console.log("result",o),r(n.actions.setAnalytics(o))}}function T({auth:r}){const{year:t,tab:a,analytics:s}=c(o=>o.dashboard);return p.useEffect(()=>{m.dispatch(y())},[t,a]),i.jsxs(u,{user:r.user,children:[i.jsx(l,{}),i.jsx(d,{year:t,analytics:s,periodic:a})]})}export{T as default};
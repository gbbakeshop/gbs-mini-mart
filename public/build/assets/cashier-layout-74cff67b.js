import{b as i,r as e,y as o,t as c,j as s}from"./app-73e956c4.js";import n from"./toastify-a5a6795e.js";import{a as f}from"./account-service-3a4bcfe3.js";function p({children:a}){useNavigate();const r=i();return e.useEffect(()=>{f().then(t=>{t.role=="admin"&&o.visit("/administrator/dashboard"),r(c(t))})},[]),s.jsxs("div",{children:[s.jsx(n,{}),a]})}export{p as default};
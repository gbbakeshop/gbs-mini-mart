import{c as s,r as o,j as d,s as i}from"./app-cdff973d.js";import{a as c}from"./cashier-thunk-f5f24c3d.js";import{a as n}from"./products-service-2e54bc55.js";import"./sales-service-19b3eac2.js";function h({data:a}){s();const[r,t]=o.useState(!1);async function e(){t(!0),await i.dispatch(c(n(a.id))),t(!1)}return d.jsx("button",{className:"p-2 bg-red-500 w-24 hover:bg-red-600 text-white rounded-md",onClick:e,children:r?"Loading...":"ADD"})}export{h as default};

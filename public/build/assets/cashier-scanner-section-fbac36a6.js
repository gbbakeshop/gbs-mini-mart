import{u as n,b as o,j as t,s as i,F as u}from"./app-73e956c4.js";import m from"./Input-35b64ebb.js";import{a as p}from"./products-service-9828085c.js";import{a as h}from"./cashier-thunk-94e8e809.js";import"./sales-service-19b3eac2.js";function j(){const{search:a}=n(e=>e.cashier),r=o();async function s(e){e.preventDefault(),await i.dispatch(h(p(a)))}function c(e){r(u(e))}return t.jsx("div",{className:"m-10",children:t.jsx("form",{onCutCapture:s,onSubmit:s,children:t.jsx(m,{autofocus:!0,onChange:c,value:a,name:"search",type:"text",label:"Scanning Item"})})})}export{j as default};
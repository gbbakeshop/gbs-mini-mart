import{a as c}from"./sales-service-19b3eac2.js";import{H as t,g as o}from"./app-73e956c4.js";function f(a){return async function(s,e){if((await a).status=="success"){e().cashier.cart,(await a).data.id;const n=Math.floor(1e9+Math.random()*9e9);s(t.actions.setCart({...(await a).data,randomId:n,quantity:1,total:(await a).data.price})),s(t.actions.setSearch(""))}else s(t.actions.setSearch(""))}}function l(){return async function(a,s){a(t.actions.setLoading(!0)),a(o.actions.setToastStatus({status:"loading",message:"Loading..."}));const e=s().cashier.payment,n=s().cashier.cart,r={payment:e,cart:n};try{await c(r),await a(t.actions.setIsPrint(!0)),setTimeout(()=>{a(t.actions.setIsPrint(!1))},1e3),await a(t.actions.setLoading(!1)),await a(t.actions.resetPayment()),await a(o.actions.setToastStatus({status:"success",message:"Created Success!"}))}catch(i){a(t.actions.setLoading(!1)),a(o.actions.setToastStatus({status:"error",message:i.response.data.message}))}}}export{f as a,l as c};
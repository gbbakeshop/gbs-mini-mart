import{r as t,c as d,u,j as e,s as m}from"./app-d0aaa92d.js";import f from"./drawer-action-a0748ac2.js";import{c as p}from"./account-thunk-75ee709b.js";import"./XMarkIcon-1a9bb084.js";import"./transition-d08441b1.js";import"./use-flags-a344483c.js";import"./open-closed-f056f07e.js";import"./dialog-502f6b9d.js";import"./use-root-containers-3130e701.js";import"./keyboard-9d0c6e4e.js";import"./description-4cd0eb38.js";import"./account-details-71d3ff42.js";import"./account-service-4e8f8951.js";function x({title:o,titleId:a,...s},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":a},s),o?t.createElement("title",{id:a},o):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"}))}const h=t.forwardRef(x),w=h;function H({data:o}){const[a,s]=t.useState(!1);d();const{toastStatus:n}=u(r=>r.app),[i,l]=t.useState("");t.useEffect(()=>{n.status=="success"&&s(!1)},[n.status]);function c(r){r.preventDefault(),m.dispatch(p({id:o.id,password:i})),l("")}return e.jsx("div",{children:e.jsx(f,{open:a,setOpen:s,button:e.jsx("button",{onClick:()=>s(!0),className:" text-green-500",children:e.jsx(w,{className:"h-6"})}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{onSubmit:c,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Change Password"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"New Password"}),e.jsx("input",{required:!0,onChange:r=>l(r.target.value),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"text",placeholder:"Input password"})]})}),e.jsx("div",{className:"flex items-center justify-center w-full flex-none",children:e.jsx("button",{className:"bg-red-500 hover:bg-red-600 p-3 w-full rounded-md text-white font-bold",children:"Submit"})})]})})})})}export{H as default};
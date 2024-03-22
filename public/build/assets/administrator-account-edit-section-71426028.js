import{r,c as m,u,f as n,j as e,s as x}from"./app-096959b0.js";import p from"./drawer-action-f0bfb1bb.js";import{e as h}from"./account-thunk-3a2f3fed.js";import{P as f}from"./PencilIcon-e61aafd8.js";import"./XMarkIcon-52ce9da0.js";import"./transition-6e801a8e.js";import"./use-flags-08a574ed.js";import"./open-closed-072336db.js";import"./dialog-e3b73daa.js";import"./use-root-containers-b7ba4baf.js";import"./keyboard-026b3f8f.js";import"./description-ba62d0cb.js";import"./account-details-8ae9a5e3.js";import"./account-service-3caedbb8.js";function I({data:l}){const[o,c]=r.useState(!1),a=m(),{toastStatus:i}=u(t=>t.app),{accountsForm:s}=u(t=>t.accounts);r.useEffect(()=>{o&&a(n({...s,id:l.id,name:l.name,email:l.email,role:l.role,contact:l.contact,status:l.status}))},[o]),r.useEffect(()=>{i.status=="success"&&c(!1)},[i.status]);function d(t){t.preventDefault(),x.dispatch(h())}return e.jsx("div",{children:e.jsx(p,{open:o,setOpen:c,button:e.jsx("button",{onClick:()=>c(!0),className:" text-blue-500",children:e.jsx(f,{className:"h-6"})}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{onSubmit:d,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Edit Account"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Fullname"}),e.jsx("input",{required:!0,value:s.name??"",onChange:t=>a(n({...s,name:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Input name"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Email"}),e.jsx("input",{required:!0,value:s.email??"",onChange:t=>a(n({...s,email:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Input email"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Role"}),e.jsxs("select",{name:"role",id:"role",className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:t=>a(n({...s,role:t.target.value})),children:[e.jsx("option",{selected:s.role=="admin",value:"admin",children:"Admin"}),e.jsx("option",{selected:s.role=="cashier",value:"cashier",children:"Cashier"})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Status"}),e.jsxs("select",{name:"status",id:"status",className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:t=>a(n({...s,status:t.target.value})),children:[e.jsx("option",{selected:s.status=="Active",value:"Active",children:"Active"}),e.jsx("option",{selected:s.status=="Block",value:"Block",children:"Block"})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Contact"}),e.jsx("input",{required:!0,value:s.contact??"",onChange:t=>a(n({...s,contact:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"contact",type:"number",placeholder:"Input contact"})]})]})}),e.jsx("div",{className:"flex items-center justify-center w-full flex-none",children:e.jsx("button",{className:"bg-red-500 hover:bg-red-600 p-3 w-full rounded-md text-white font-bold",children:"Submit"})})]})})})})}export{I as default};

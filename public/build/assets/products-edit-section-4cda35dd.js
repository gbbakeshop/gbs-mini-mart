import{r as i,c as p,u,A as o,j as e,s as m}from"./app-25ad533c.js";import x from"./drawer-action-fc5b1f12.js";import{e as f}from"./products-thunk-b040c85d.js";import{P as h}from"./PencilIcon-923e7c54.js";import"./XMarkIcon-fb093e96.js";import"./transition-f613d65b.js";import"./use-flags-c9d1ad3d.js";import"./open-closed-53de6a19.js";import"./dialog-61f2c02d.js";import"./use-root-containers-9023e6c5.js";import"./keyboard-ca996c6b.js";import"./description-fd97eff9.js";import"./products-service-2e54bc55.js";function C({data:r}){const[n,l]=i.useState(!1),a=p(),{productForm:s}=u(t=>t.products),{toastStatus:c}=u(t=>t.app);i.useEffect(()=>{n&&a(o({...s,id:r.id,barcode:r.barcode,description:r.description,quantity:r.quantity,price:r.price}))},[n]),i.useEffect(()=>{c.status=="success"&&l(!1)},[c.status]);function d(t){t.preventDefault(),m.dispatch(f())}return e.jsx("div",{children:e.jsx(x,{open:n,setOpen:l,button:e.jsx("button",{onClick:()=>l(!0),className:" text-blue-500",children:e.jsx(h,{className:"h-6"})}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{onSubmit:d,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Barcode"}),e.jsx("input",{required:!0,value:s.barcode??"",onChange:t=>a(o({...s,barcode:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"barcode",type:"text",placeholder:"Input Barcode"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Description"}),e.jsx("input",{required:!0,value:s.description??"",onChange:t=>a(o({...s,description:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",type:"text",placeholder:"Input Description"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Quantity"}),e.jsx("input",{required:!0,value:s.quantity??"",onChange:t=>a(o({...s,quantity:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"quantity",type:"number",placeholder:"Input Quantity"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Price"}),e.jsx("input",{required:!0,value:s.price??"",onChange:t=>a(o({...s,price:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"price",type:"number",placeholder:"Input Price"})]})]})}),e.jsx("div",{className:"flex items-center justify-center w-full flex-none",children:e.jsx("button",{className:"bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold",children:"Submit"})})]})})})})}export{C as default};
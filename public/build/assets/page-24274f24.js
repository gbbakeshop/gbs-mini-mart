import{c as a,u as l,r as i,n as m,y as c,s as n,j as e}from"./app-25ad533c.js";import x from"./cashier-table-section-77e327df.js";import d from"./cashier-sub-total-section-2f84f91f.js";import f from"./cashier-scanner-section-8f4b2d9e.js";import p from"./cashier-pay-modal-section-39ffb83c.js";import h from"./cashier-print-data-component-3fd5eba5.js";import j from"./function-keys-section-999b8fdf.js";import u from"./cashier-layout-0674329d.js";import{g as b}from"./cashier-thunk-e0149413.js";import"./cashier-edit-modal-26b35c14.js";import"./Input-69ef6b82.js";import"./PencilIcon-923e7c54.js";import"./transition-f613d65b.js";import"./use-flags-c9d1ad3d.js";import"./open-closed-53de6a19.js";import"./dialog-61f2c02d.js";import"./use-root-containers-9023e6c5.js";import"./keyboard-ca996c6b.js";import"./description-fd97eff9.js";import"./cashier-delete-section-4ffbb574.js";import"./TrashIcon-9cc91a42.js";import"./products-service-2e54bc55.js";import"./react-barcode-415d2dd2.js";import"./cashier-logout-section-4bff42aa.js";import"./account-service-6f894e3d.js";import"./cashier-discount-modal-e3643ccc.js";import"./loyal-card-service-8d6deeca.js";import"./toastify-4f829d45.js";import"./sales-service-19b3eac2.js";function V({auth:r}){const t=a();l(o=>o.cashier);const s=i.useRef(null);return i.useEffect(()=>{t(m(r.user)),r.user.role=="admin"&&c.visit("/administrator/dashboard"),n.dispatch(b())},[]),e.jsxs(u,{children:[e.jsx("div",{className:"flex-1 basis-7/12 h-screen ",children:e.jsxs("div",{className:"flex flex-col h-full w-full ",children:[e.jsx("div",{className:"flex-1 basis-4/6 border-1",children:e.jsx(x,{inputRef:s})}),e.jsxs("div",{className:"flex-1 flex  basis-2/6 border-1",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center font-black bg-red-500 text-white text-center text-9xl",children:"GBS"}),e.jsx("div",{className:"flex-1 ",children:e.jsx(d,{})})]})]})}),e.jsxs("div",{className:"flex-1 flex flex-col basis-5/12 border-1",children:[e.jsxs("div",{className:"flex-1 flex flex-col basis-4/6 border-1",children:[e.jsx("div",{className:"flex-1",children:e.jsx(f,{inputRef:s})}),e.jsx("div",{className:"flex-none  m-4",children:e.jsx(p,{inputRef:s})})]}),e.jsx("div",{className:"flex-1 basis-2/6  border-1",children:e.jsx(j,{inputRef:s})})]}),e.jsx("div",{className:"hidden",children:e.jsx(h,{})})]})}export{V as default};
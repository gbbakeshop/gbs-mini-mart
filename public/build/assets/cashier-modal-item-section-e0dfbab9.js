import{r as t,u as m,j as e}from"./app-096959b0.js";import{E as c}from"./ExclamationTriangleIcon-5b2e98c7.js";import{q as a}from"./transition-6e801a8e.js";import{_ as r}from"./dialog-e3b73daa.js";import"./use-flags-08a574ed.js";import"./open-closed-072336db.js";import"./use-root-containers-b7ba4baf.js";import"./keyboard-026b3f8f.js";import"./description-ba62d0cb.js";function j(){const[n,s]=t.useState(!0),{selectedItem:i}=m(o=>o.cashier),l=t.useRef(null);return t.useEffect(()=>{i&&s(!0)},[i]),e.jsx(a.Root,{show:n,as:t.Fragment,children:e.jsxs(r,{as:"div",className:"relative z-10",initialFocus:l,onClose:s,children:[e.jsx(a.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsx(a.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(r.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[e.jsx("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:e.jsx(c,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),e.jsxs("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[e.jsx(r.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Deactivate account"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."})})]})]})}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>s(!1),children:"Deactivate"}),e.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>s(!1),ref:l,children:"Cancel"})]})]})})})})]})})}export{j as default};

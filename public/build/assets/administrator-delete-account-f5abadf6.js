import{r as t,j as e,s as m}from"./app-73e956c4.js";import{d as c}from"./account-thunk-5c668eb6.js";import{T as d}from"./TrashIcon-6366f4db.js";import{E as x}from"./ExclamationTriangleIcon-3bd8d0c2.js";import{q as a}from"./transition-8e5df15e.js";import{_ as r}from"./dialog-38320a1c.js";import"./account-details-d175f865.js";import"./account-service-3a4bcfe3.js";import"./use-flags-22cb74dc.js";import"./open-closed-740145de.js";import"./use-root-containers-3db68151.js";import"./keyboard-4d9875ee.js";import"./description-0fe789bd.js";function A({data:l}){const[i,s]=t.useState(!1),n=t.useRef(null);async function o(u){await m.dispatch(c(l)),s(!1)}return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>s(!0),className:" text-red-500 -mt-2",children:e.jsx(d,{className:"h-6"})}),e.jsx(a.Root,{show:i,as:t.Fragment,children:e.jsxs(r,{as:"div",className:"relative z-10",initialFocus:n,onClose:s,children:[e.jsx(a.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsx(a.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(r.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[e.jsx("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:e.jsx(x,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),e.jsxs("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[e.jsx(r.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Delete account"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."})})]})]})}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>o(),children:"Delete It"}),e.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>s(!1),ref:n,children:"Cancel"})]})]})})})})]})})]})}export{A as default};
import{j as e,r as a}from"./app-73e956c4.js";import{X as n}from"./XMarkIcon-8f9eede8.js";import{q as t}from"./transition-8e5df15e.js";import{_ as r}from"./dialog-38320a1c.js";import"./use-flags-22cb74dc.js";import"./open-closed-740145de.js";import"./use-root-containers-3db68151.js";import"./keyboard-4d9875ee.js";import"./description-0fe789bd.js";function v({children:i,isOpen:s,setIsOpen:o}){return console.log("isOpen",s),e.jsx(t.Root,{show:s??!0,as:a.Fragment,children:e.jsxs(r,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx(t.Child,{as:a.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(t.Child,{as:a.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsxs(r.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e.jsx(t.Child,{as:a.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:e.jsxs("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>o(!1),children:[e.jsx("span",{className:"absolute -inset-2.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(n,{className:"h-6 w-6","aria-hidden":"true"})]})})}),i]})})})})})]})})}export{v as default};
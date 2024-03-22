import{r as a,u as y,c as b,j as e,F as j,s as w}from"./app-096959b0.js";import{c as N}from"./cashier-thunk-4f9361d9.js";import{q as c}from"./transition-6e801a8e.js";import{_ as d}from"./dialog-e3b73daa.js";import"./sales-service-19b3eac2.js";import"./use-flags-08a574ed.js";import"./open-closed-072336db.js";import"./use-root-containers-b7ba4baf.js";import"./keyboard-026b3f8f.js";import"./description-ba62d0cb.js";function _({inputRef:m}){const[p,r]=a.useState(!1),{payment:t,cart:n}=y(s=>s.cashier),{user:f}=y(s=>s.app),u=a.useRef(null),g=b(),[i,x]=a.useState(!0);async function h(s){s.preventDefault(),o()||(await w.dispatch(N()),await r(!1),setTimeout(()=>{document.body.focus(),m.current.focus()},1e3))}a.useEffect(()=>{const s=l=>{(l.key==="F"||l.key==="f")&&i?(x(!0),m.current.focus()):l.key==="C"||l.key==="c"?r(!1):(l.key==="P"||l.key==="p")&&((n.length!=0||n.length!="0")&&r(!0),setTimeout(()=>{x(!0),document.getElementById("paymentDetails").focus()},500))};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[i,n.length]);function o(){return t.tenders<0||t.tenders<=0||t.change<0?!0:t.total==0}return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>r(!0),className:"w-full hover:bg-red-400 bg-red-500 p-4 text-lg font-black text-white flex items-center justify-center",children:"PAY"}),e.jsx(c.Root,{show:p,as:a.Fragment,children:e.jsxs(d,{as:"div",className:"relative z-10",initialFocus:u,onClose:r,children:[e.jsx(c.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsx(c.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(d.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[e.jsx("form",{onSubmit:h,className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[e.jsx(d.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Payment Details"}),e.jsx("div",{className:"mt-2",children:e.jsx("div",{className:"relative overflow-x-auto",children:e.jsx("table",{className:"w-full text-sm  ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white border-b ",children:[e.jsx("th",{scope:"row",className:" py-2 font-medium text-gray-900",children:"Subtotal:"}),e.jsxs("td",{className:"px-6 py-2 font-bold text-gray-900",children:["₱ ",t.subtotal]})]}),e.jsxs("tr",{className:"bg-white border-b ",children:[e.jsx("th",{scope:"row",className:" py-2 font-medium text-gray-900",children:"Discount:"}),e.jsxs("td",{className:"px-6 py-2 font-bold text-gray-900",children:[parseFloat(t.discount)*100,"%"]})]}),e.jsxs("tr",{className:"bg-white border-b ",children:[e.jsx("th",{scope:"row",className:" py-2 font-medium text-gray-900",children:"Tax:"}),e.jsxs("td",{className:"px-6 py-2 font-bold text-gray-900",children:["₱ ",t.tax]})]}),e.jsxs("tr",{className:"bg-white border-b ",children:[e.jsx("th",{scope:"row",className:" py-2 font-medium text-gray-900",children:"Total:"}),e.jsxs("td",{className:"px-6 py-2 font-bold text-gray-900",children:["₱ ",t.total]})]}),e.jsxs("tr",{className:"bg-white border-b ",children:[e.jsx("th",{scope:"row",className:" py-2 font-medium text-gray-900",children:"Tenders:"}),e.jsx("td",{className:"px-6 py-2 font-bold text-gray-900",children:e.jsx("input",{autoFocus:i,value:t.tenders==0?"":t.tenders,onChange:s=>g(j({value:s.target.value,cashier_id:f.id})),type:"text",id:"paymentDetails",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"})})]}),e.jsxs("tr",{className:"bg-white border-b ",children:[e.jsx("th",{scope:"row",className:" py-2 font-medium text-gray-900",children:"Change:"}),e.jsxs("td",{className:"px-6 py-2 font-bold text-gray-900",children:["₱ ",t.change]})]})]})})})})]})})}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{disabled:o(),type:"submit",className:`inline-flex w-full justify-center rounded-md ${o()?"bg-red-300":"bg-red-600 hover:bg-red-500"}  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`,onClick:h,children:"Confirm Payment"}),e.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>r(!1),ref:u,children:"Cancel"})]})]})})})})]})})]})}export{_ as default};

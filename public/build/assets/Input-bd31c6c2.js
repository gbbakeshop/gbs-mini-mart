import{r as d,j as e}from"./app-d0aaa92d.js";function u({name:r,type:a,label:c,errorMessage:s,onChange:i,autofocus:l,value:p,inputRef:o}){return d.useEffect(()=>{const t=n=>{(n.key==="F"||n.key==="f")&&o.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[l]),e.jsxs("div",{children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:o,autoFocus:l,onChange:t=>i(t.target.value.replace(/[^0-9.]/g,"")),type:a,id:r,name:r,value:p,className:"ring-offset-2 ring-2 ring-black peer text-black placeholder-transparent w-full py-2.5 px-5 border-slate-300 border bg-transparent rounded-lg bg-white focus-within:outline-none focus-within:border-blue-400",placeholder:""}),e.jsx("label",{htmlFor:r,className:"absolute left-2.5 px-2.5 transition-all bg-white text-black text-sm -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white",children:c})]}),s&&e.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:s})]})}export{u as default};
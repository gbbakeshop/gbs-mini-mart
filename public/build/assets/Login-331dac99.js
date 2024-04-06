import{j as e,W as h,r as n,y as l,a as j,d as b}from"./app-5b9f29bb.js";import{G as w}from"./GuestLayout-7378d452.js";import{T as d,I as c}from"./TextInput-daea078d.js";import{I as u}from"./InputLabel-f3d021ce.js";import{P as v}from"./PrimaryButton-0f058cca.js";function N({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function F({status:r,canResetPassword:a,auth:m}){const{data:t,setData:o,post:x,processing:p,errors:i,reset:f}=h({email:"",password:"",remember:!1});n.useEffect(()=>{m.user&&(m.user.role=="admin"?l.visit("/administrator/dashboard"):l.visit("/cashier"))},[]),n.useEffect(()=>()=>{f("password")},[]);const g=s=>{s.preventDefault(),x(route("login"))};return e.jsxs(w,{children:[e.jsx(j,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{children:[e.jsx(u,{htmlFor:"email",value:"Email"}),e.jsx(d,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(c,{message:i.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(u,{htmlFor:"password",value:"Password"}),e.jsx(d,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(c,{message:i.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(N,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[a&&e.jsx(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(v,{className:"ms-4",disabled:p,children:"Log in"})]})]})]})}export{F as default};
import{r as a,R as w,j as C,y as Pe}from"./app-73e956c4.js";import{l as ge}from"./account-service-3a4bcfe3.js";import{n as ae,e as ye,N as Se,E as he,y as Ee,a as de,d as xe,s as j}from"./use-root-containers-3db68151.js";import{O as Q,U as W,y as U,T as $e,s as pe,o as h,u as A,C as V,I as we,l as Ie}from"./use-flags-22cb74dc.js";import{b as le,I as q,f as ne,s as re,O as G,M as _,h as Te,T as Ce,a as L,r as fe,o as Fe,N as oe}from"./keyboard-4d9875ee.js";import{T as Me}from"./use-resolve-button-type-ffc5953c.js";import{s as Oe,d as z,u as ve}from"./open-closed-740145de.js";import{q as Ne}from"./transition-8e5df15e.js";var ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ke||{}),Re=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Re||{});let Be={0:e=>{let t={...e,popoverState:A(e.popoverState,{0:1,1:0})};return t.popoverState===0&&(t.__demoMode=!1),t},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},ue=a.createContext(null);ue.displayName="PopoverContext";function X(e){let t=a.useContext(ue);if(t===null){let d=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,X),d}return t}let se=a.createContext(null);se.displayName="PopoverAPIContext";function ie(e){let t=a.useContext(se);if(t===null){let d=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,ie),d}return t}let ce=a.createContext(null);ce.displayName="PopoverGroupContext";function me(){return a.useContext(ce)}let ee=a.createContext(null);ee.displayName="PopoverPanelContext";function De(){return a.useContext(ee)}function je(e,t){return A(t.type,Be,e,t)}let _e="div";function Le(e,t){var d;let{__demoMode:P=!1,...I}=e,l=a.useRef(null),n=U(t,$e(u=>{l.current=u})),m=a.useRef([]),b=a.useReducer(je,{__demoMode:P,popoverState:P?0:1,buttons:m,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:a.createRef(),afterPanelSentinel:a.createRef()}),[{popoverState:g,button:i,buttonId:E,panel:o,panelId:B,beforePanelSentinel:F,afterPanelSentinel:y},s]=b,f=ae((d=l.current)!=null?d:i),T=a.useMemo(()=>{if(!i||!o)return!1;for(let J of document.querySelectorAll("body > *"))if(Number(J==null?void 0:J.contains(i))^Number(J==null?void 0:J.contains(o)))return!0;let u=le(),M=u.indexOf(i),Y=(M+u.length-1)%u.length,H=(M+1)%u.length,Z=u[Y],be=u[H];return!o.contains(Z)&&!o.contains(be)},[i,o]),O=pe(E),k=pe(B),R=a.useMemo(()=>({buttonId:O,panelId:k,close:()=>s({type:1})}),[O,k,s]),N=me(),D=N==null?void 0:N.registerPopover,c=h(()=>{var u;return(u=N==null?void 0:N.isFocusWithinPopoverGroup())!=null?u:(f==null?void 0:f.activeElement)&&((i==null?void 0:i.contains(f.activeElement))||(o==null?void 0:o.contains(f.activeElement)))});a.useEffect(()=>D==null?void 0:D(R),[D,R]);let[x,v]=ye(),r=Se({mainTreeNodeRef:N==null?void 0:N.mainTreeNodeRef,portals:x,defaultContainers:[i,o]});he(f==null?void 0:f.defaultView,"focus",u=>{var M,Y,H,Z;u.target!==window&&u.target instanceof HTMLElement&&g===0&&(c()||i&&o&&(r.contains(u.target)||(Y=(M=F.current)==null?void 0:M.contains)!=null&&Y.call(M,u.target)||(Z=(H=y.current)==null?void 0:H.contains)!=null&&Z.call(H,u.target)||s({type:1})))},!0),Ee(r.resolveContainers,(u,M)=>{s({type:1}),Te(M,Ce.Loose)||(u.preventDefault(),i==null||i.focus())},g===0);let p=h(u=>{s({type:1});let M=(()=>u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:i:i)();M==null||M.focus()}),$=a.useMemo(()=>({close:p,isPortalled:T}),[p,T]),S=a.useMemo(()=>({open:g===0,close:p}),[g,p]),K={ref:n};return w.createElement(ee.Provider,{value:null},w.createElement(ue.Provider,{value:b},w.createElement(se.Provider,{value:$},w.createElement(Oe,{value:A(g,{0:z.Open,1:z.Closed})},w.createElement(v,null,V({ourProps:K,theirProps:I,slot:S,defaultTag:_e,name:"Popover"}),w.createElement(r.MainTreeNode,null))))))}let Ge="button";function Ae(e,t){let d=q(),{id:P=`headlessui-popover-button-${d}`,...I}=e,[l,n]=X("Popover.Button"),{isPortalled:m}=ie("Popover.Button"),b=a.useRef(null),g=`headlessui-focus-sentinel-${q()}`,i=me(),E=i==null?void 0:i.closeOthers,o=De()!==null;a.useEffect(()=>{if(!o)return n({type:3,buttonId:P}),()=>{n({type:3,buttonId:null})}},[o,P,n]);let[B]=a.useState(()=>Symbol()),F=U(b,t,o?null:r=>{if(r)l.buttons.current.push(B);else{let p=l.buttons.current.indexOf(B);p!==-1&&l.buttons.current.splice(p,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&n({type:2,button:r})}),y=U(b,t),s=ae(b),f=h(r=>{var p,$,S;if(o){if(l.popoverState===1)return;switch(r.key){case L.Space:case L.Enter:r.preventDefault(),($=(p=r.target).click)==null||$.call(p),n({type:1}),(S=l.button)==null||S.focus();break}}else switch(r.key){case L.Space:case L.Enter:r.preventDefault(),r.stopPropagation(),l.popoverState===1&&(E==null||E(l.buttonId)),n({type:0});break;case L.Escape:if(l.popoverState!==0)return E==null?void 0:E(l.buttonId);if(!b.current||s!=null&&s.activeElement&&!b.current.contains(s.activeElement))return;r.preventDefault(),r.stopPropagation(),n({type:1});break}}),T=h(r=>{o||r.key===L.Space&&r.preventDefault()}),O=h(r=>{var p,$;fe(r.currentTarget)||e.disabled||(o?(n({type:1}),(p=l.button)==null||p.focus()):(r.preventDefault(),r.stopPropagation(),l.popoverState===1&&(E==null||E(l.buttonId)),n({type:0}),($=l.button)==null||$.focus()))}),k=h(r=>{r.preventDefault(),r.stopPropagation()}),R=l.popoverState===0,N=a.useMemo(()=>({open:R}),[R]),D=Me(e,b),c=o?{ref:y,type:D,onKeyDown:f,onClick:O}:{ref:F,id:l.buttonId,type:D,"aria-expanded":l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:f,onKeyUp:T,onClick:O,onMouseDown:k},x=de(),v=h(()=>{let r=l.panel;if(!r)return;function p(){A(x.current,{[j.Forwards]:()=>G(r,_.First),[j.Backwards]:()=>G(r,_.Last)})===oe.Error&&G(le().filter($=>$.dataset.headlessuiFocusGuard!=="true"),A(x.current,{[j.Forwards]:_.Next,[j.Backwards]:_.Previous}),{relativeTo:l.button})}p()});return w.createElement(w.Fragment,null,V({ourProps:c,theirProps:I,slot:N,defaultTag:Ge,name:"Popover.Button"}),R&&!o&&m&&w.createElement(ne,{id:g,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:v}))}let qe="div",Ue=Q.RenderStrategy|Q.Static;function ze(e,t){let d=q(),{id:P=`headlessui-popover-overlay-${d}`,...I}=e,[{popoverState:l},n]=X("Popover.Overlay"),m=U(t),b=ve(),g=(()=>b!==null?(b&z.Open)===z.Open:l===0)(),i=h(o=>{if(fe(o.currentTarget))return o.preventDefault();n({type:1})}),E=a.useMemo(()=>({open:l===0}),[l]);return V({ourProps:{ref:m,id:P,"aria-hidden":!0,onClick:i},theirProps:I,slot:E,defaultTag:qe,features:Ue,visible:g,name:"Popover.Overlay"})}let Ke="div",He=Q.RenderStrategy|Q.Static;function We(e,t){let d=q(),{id:P=`headlessui-popover-panel-${d}`,focus:I=!1,...l}=e,[n,m]=X("Popover.Panel"),{close:b,isPortalled:g}=ie("Popover.Panel"),i=`headlessui-focus-sentinel-before-${q()}`,E=`headlessui-focus-sentinel-after-${q()}`,o=a.useRef(null),B=U(o,t,c=>{m({type:4,panel:c})}),F=ae(o),y=we();Ie(()=>(m({type:5,panelId:P}),()=>{m({type:5,panelId:null})}),[P,m]);let s=ve(),f=(()=>s!==null?(s&z.Open)===z.Open:n.popoverState===0)(),T=h(c=>{var x;switch(c.key){case L.Escape:if(n.popoverState!==0||!o.current||F!=null&&F.activeElement&&!o.current.contains(F.activeElement))return;c.preventDefault(),c.stopPropagation(),m({type:1}),(x=n.button)==null||x.focus();break}});a.useEffect(()=>{var c;e.static||n.popoverState===1&&((c=e.unmount)==null||c)&&m({type:4,panel:null})},[n.popoverState,e.unmount,e.static,m]),a.useEffect(()=>{if(n.__demoMode||!I||n.popoverState!==0||!o.current)return;let c=F==null?void 0:F.activeElement;o.current.contains(c)||G(o.current,_.First)},[n.__demoMode,I,o,n.popoverState]);let O=a.useMemo(()=>({open:n.popoverState===0,close:b}),[n,b]),k={ref:B,id:P,onKeyDown:T,onBlur:I&&n.popoverState===0?c=>{var x,v,r,p,$;let S=c.relatedTarget;S&&o.current&&((x=o.current)!=null&&x.contains(S)||(m({type:1}),((r=(v=n.beforePanelSentinel.current)==null?void 0:v.contains)!=null&&r.call(v,S)||($=(p=n.afterPanelSentinel.current)==null?void 0:p.contains)!=null&&$.call(p,S))&&S.focus({preventScroll:!0})))}:void 0,tabIndex:-1},R=de(),N=h(()=>{let c=o.current;if(!c)return;function x(){A(R.current,{[j.Forwards]:()=>{var v;G(c,_.First)===oe.Error&&((v=n.afterPanelSentinel.current)==null||v.focus())},[j.Backwards]:()=>{var v;(v=n.button)==null||v.focus({preventScroll:!0})}})}x()}),D=h(()=>{let c=o.current;if(!c)return;function x(){A(R.current,{[j.Forwards]:()=>{var v;if(!n.button)return;let r=le(),p=r.indexOf(n.button),$=r.slice(0,p+1),S=[...r.slice(p+1),...$];for(let K of S.slice())if(K.dataset.headlessuiFocusGuard==="true"||(v=n.panel)!=null&&v.contains(K)){let u=S.indexOf(K);u!==-1&&S.splice(u,1)}G(S,_.First,{sorted:!1})},[j.Backwards]:()=>{var v;G(c,_.Previous)===oe.Error&&((v=n.button)==null||v.focus())}})}x()});return w.createElement(ee.Provider,{value:P},f&&g&&w.createElement(ne,{id:i,ref:n.beforePanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}),V({mergeRefs:y,ourProps:k,theirProps:l,slot:O,defaultTag:Ke,features:He,visible:f,name:"Popover.Panel"}),f&&g&&w.createElement(ne,{id:E,ref:n.afterPanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}))}let Ve="div";function Ye(e,t){let d=a.useRef(null),P=U(d,t),[I,l]=a.useState([]),n=xe(),m=h(y=>{l(s=>{let f=s.indexOf(y);if(f!==-1){let T=s.slice();return T.splice(f,1),T}return s})}),b=h(y=>(l(s=>[...s,y]),()=>m(y))),g=h(()=>{var y;let s=Fe(d);if(!s)return!1;let f=s.activeElement;return(y=d.current)!=null&&y.contains(f)?!0:I.some(T=>{var O,k;return((O=s.getElementById(T.buttonId.current))==null?void 0:O.contains(f))||((k=s.getElementById(T.panelId.current))==null?void 0:k.contains(f))})}),i=h(y=>{for(let s of I)s.buttonId.current!==y&&s.close()}),E=a.useMemo(()=>({registerPopover:b,unregisterPopover:m,isFocusWithinPopoverGroup:g,closeOthers:i,mainTreeNodeRef:n.mainTreeNodeRef}),[b,m,g,i,n.mainTreeNodeRef]),o=a.useMemo(()=>({}),[]),B=e,F={ref:P};return w.createElement(ce.Provider,{value:E},V({ourProps:F,theirProps:B,slot:o,defaultTag:Ve,name:"Popover.Group"}),w.createElement(n.MainTreeNode,null))}let Ze=W(Le),Je=W(Ae),Qe=W(ze),Xe=W(We),et=W(Ye),te=Object.assign(Ze,{Button:Je,Overlay:Qe,Panel:Xe,Group:et});function tt({title:e,titleId:t,...d},P){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:P,"aria-labelledby":t},d),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const nt=a.forwardRef(tt),rt=nt;function dt(){async function e(){try{await ge(),Pe.visit("/")}catch{}}return C.jsx("div",{className:" top-16 w-full max-w-sm px-4",children:C.jsx(te,{className:"relative",children:({open:t})=>C.jsxs(C.Fragment,{children:[C.jsxs(te.Button,{className:`
                ${t?"text-white":"text-white/90"}
                group inline-flex items-center rounded-md bg-red-500 px-3 py-2 z-[99] text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`,children:[C.jsx("span",{children:"Dropdown"}),C.jsx(rt,{className:`${t?"text-orange-300":"text-orange-300/70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`,"aria-hidden":"true"})]}),C.jsx(Ne,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:C.jsx(te.Panel,{className:"absolute z-10  ",children:C.jsx("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 ",children:C.jsx("div",{className:"relative grid gap-8 bg-white",children:C.jsx("button",{onClick:e,className:"m-3 flex w-24  items-center rounded-lg p-2 transition duration-150 ease-in-out ",children:"LOGOUT"})})})})})]})})})}export{dt as default};
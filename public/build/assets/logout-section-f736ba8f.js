import{r as o,R as $,j as C,y as ye}from"./app-af275b0c.js";import{l as Pe}from"./account-service-e393e0ed.js";import{n as ae,e as ge,N as he,E as Ee,y as Se,a as de,d as xe,s as j}from"./use-root-containers-f3d48e72.js";import{O as Q,U as W,y as q,T as we,s as pe,o as E,u as K,C as V,I as $e,l as Ie}from"./use-flags-1e7c38ab.js";import{b as le,I as A,f as ne,s as re,O as G,M as _,h as Te,T as Ce,a as L,r as fe,o as Fe,N as oe}from"./keyboard-d9ce90ea.js";import{T as Me}from"./use-resolve-button-type-0f637699.js";import{s as Oe,d as U,u as ve}from"./open-closed-6db9fd15.js";import{q as ke}from"./transition-97a14c15.js";var Ne=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ne||{}),Re=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Re||{});let Be={0:e=>{let t={...e,popoverState:K(e.popoverState,{0:1,1:0})};return t.popoverState===0&&(t.__demoMode=!1),t},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},ue=o.createContext(null);ue.displayName="PopoverContext";function X(e){let t=o.useContext(ue);if(t===null){let c=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,X),c}return t}let se=o.createContext(null);se.displayName="PopoverAPIContext";function ie(e){let t=o.useContext(se);if(t===null){let c=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,ie),c}return t}let ce=o.createContext(null);ce.displayName="PopoverGroupContext";function me(){return o.useContext(ce)}let ee=o.createContext(null);ee.displayName="PopoverPanelContext";function De(){return o.useContext(ee)}function je(e,t){return K(t.type,Be,e,t)}let _e="div";function Le(e,t){var c;let{__demoMode:y=!1,...I}=e,l=o.useRef(null),n=q(t,we(u=>{l.current=u})),m=o.useRef([]),b=o.useReducer(je,{__demoMode:y,popoverState:y?0:1,buttons:m,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:o.createRef(),afterPanelSentinel:o.createRef()}),[{popoverState:P,button:i,buttonId:S,panel:a,panelId:B,beforePanelSentinel:F,afterPanelSentinel:g},s]=b,f=ae((c=l.current)!=null?c:i),T=o.useMemo(()=>{if(!i||!a)return!1;for(let J of document.querySelectorAll("body > *"))if(Number(J==null?void 0:J.contains(i))^Number(J==null?void 0:J.contains(a)))return!0;let u=le(),M=u.indexOf(i),Y=(M+u.length-1)%u.length,H=(M+1)%u.length,Z=u[Y],be=u[H];return!a.contains(Z)&&!a.contains(be)},[i,a]),O=pe(S),N=pe(B),R=o.useMemo(()=>({buttonId:O,panelId:N,close:()=>s({type:1})}),[O,N,s]),k=me(),D=k==null?void 0:k.registerPopover,p=E(()=>{var u;return(u=k==null?void 0:k.isFocusWithinPopoverGroup())!=null?u:(f==null?void 0:f.activeElement)&&((i==null?void 0:i.contains(f.activeElement))||(a==null?void 0:a.contains(f.activeElement)))});o.useEffect(()=>D==null?void 0:D(R),[D,R]);let[x,v]=ge(),r=he({mainTreeNodeRef:k==null?void 0:k.mainTreeNodeRef,portals:x,defaultContainers:[i,a]});Ee(f==null?void 0:f.defaultView,"focus",u=>{var M,Y,H,Z;u.target!==window&&u.target instanceof HTMLElement&&P===0&&(p()||i&&a&&(r.contains(u.target)||(Y=(M=F.current)==null?void 0:M.contains)!=null&&Y.call(M,u.target)||(Z=(H=g.current)==null?void 0:H.contains)!=null&&Z.call(H,u.target)||s({type:1})))},!0),Se(r.resolveContainers,(u,M)=>{s({type:1}),Te(M,Ce.Loose)||(u.preventDefault(),i==null||i.focus())},P===0);let d=E(u=>{s({type:1});let M=(()=>u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:i:i)();M==null||M.focus()}),w=o.useMemo(()=>({close:d,isPortalled:T}),[d,T]),h=o.useMemo(()=>({open:P===0,close:d}),[P,d]),z={ref:n};return $.createElement(ee.Provider,{value:null},$.createElement(ue.Provider,{value:b},$.createElement(se.Provider,{value:w},$.createElement(Oe,{value:K(P,{0:U.Open,1:U.Closed})},$.createElement(v,null,V({ourProps:z,theirProps:I,slot:h,defaultTag:_e,name:"Popover"}),$.createElement(r.MainTreeNode,null))))))}let Ge="button";function Ke(e,t){let c=A(),{id:y=`headlessui-popover-button-${c}`,...I}=e,[l,n]=X("Popover.Button"),{isPortalled:m}=ie("Popover.Button"),b=o.useRef(null),P=`headlessui-focus-sentinel-${A()}`,i=me(),S=i==null?void 0:i.closeOthers,a=De()!==null;o.useEffect(()=>{if(!a)return n({type:3,buttonId:y}),()=>{n({type:3,buttonId:null})}},[a,y,n]);let[B]=o.useState(()=>Symbol()),F=q(b,t,a?null:r=>{if(r)l.buttons.current.push(B);else{let d=l.buttons.current.indexOf(B);d!==-1&&l.buttons.current.splice(d,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&n({type:2,button:r})}),g=q(b,t),s=ae(b),f=E(r=>{var d,w,h;if(a){if(l.popoverState===1)return;switch(r.key){case L.Space:case L.Enter:r.preventDefault(),(w=(d=r.target).click)==null||w.call(d),n({type:1}),(h=l.button)==null||h.focus();break}}else switch(r.key){case L.Space:case L.Enter:r.preventDefault(),r.stopPropagation(),l.popoverState===1&&(S==null||S(l.buttonId)),n({type:0});break;case L.Escape:if(l.popoverState!==0)return S==null?void 0:S(l.buttonId);if(!b.current||s!=null&&s.activeElement&&!b.current.contains(s.activeElement))return;r.preventDefault(),r.stopPropagation(),n({type:1});break}}),T=E(r=>{a||r.key===L.Space&&r.preventDefault()}),O=E(r=>{var d,w;fe(r.currentTarget)||e.disabled||(a?(n({type:1}),(d=l.button)==null||d.focus()):(r.preventDefault(),r.stopPropagation(),l.popoverState===1&&(S==null||S(l.buttonId)),n({type:0}),(w=l.button)==null||w.focus()))}),N=E(r=>{r.preventDefault(),r.stopPropagation()}),R=l.popoverState===0,k=o.useMemo(()=>({open:R}),[R]),D=Me(e,b),p=a?{ref:g,type:D,onKeyDown:f,onClick:O}:{ref:F,id:l.buttonId,type:D,"aria-expanded":l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:f,onKeyUp:T,onClick:O,onMouseDown:N},x=de(),v=E(()=>{let r=l.panel;if(!r)return;function d(){K(x.current,{[j.Forwards]:()=>G(r,_.First),[j.Backwards]:()=>G(r,_.Last)})===oe.Error&&G(le().filter(w=>w.dataset.headlessuiFocusGuard!=="true"),K(x.current,{[j.Forwards]:_.Next,[j.Backwards]:_.Previous}),{relativeTo:l.button})}d()});return $.createElement($.Fragment,null,V({ourProps:p,theirProps:I,slot:k,defaultTag:Ge,name:"Popover.Button"}),R&&!a&&m&&$.createElement(ne,{id:P,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:v}))}let Ae="div",qe=Q.RenderStrategy|Q.Static;function Ue(e,t){let c=A(),{id:y=`headlessui-popover-overlay-${c}`,...I}=e,[{popoverState:l},n]=X("Popover.Overlay"),m=q(t),b=ve(),P=(()=>b!==null?(b&U.Open)===U.Open:l===0)(),i=E(a=>{if(fe(a.currentTarget))return a.preventDefault();n({type:1})}),S=o.useMemo(()=>({open:l===0}),[l]);return V({ourProps:{ref:m,id:y,"aria-hidden":!0,onClick:i},theirProps:I,slot:S,defaultTag:Ae,features:qe,visible:P,name:"Popover.Overlay"})}let ze="div",He=Q.RenderStrategy|Q.Static;function We(e,t){let c=A(),{id:y=`headlessui-popover-panel-${c}`,focus:I=!1,...l}=e,[n,m]=X("Popover.Panel"),{close:b,isPortalled:P}=ie("Popover.Panel"),i=`headlessui-focus-sentinel-before-${A()}`,S=`headlessui-focus-sentinel-after-${A()}`,a=o.useRef(null),B=q(a,t,p=>{m({type:4,panel:p})}),F=ae(a),g=$e();Ie(()=>(m({type:5,panelId:y}),()=>{m({type:5,panelId:null})}),[y,m]);let s=ve(),f=(()=>s!==null?(s&U.Open)===U.Open:n.popoverState===0)(),T=E(p=>{var x;switch(p.key){case L.Escape:if(n.popoverState!==0||!a.current||F!=null&&F.activeElement&&!a.current.contains(F.activeElement))return;p.preventDefault(),p.stopPropagation(),m({type:1}),(x=n.button)==null||x.focus();break}});o.useEffect(()=>{var p;e.static||n.popoverState===1&&((p=e.unmount)==null||p)&&m({type:4,panel:null})},[n.popoverState,e.unmount,e.static,m]),o.useEffect(()=>{if(n.__demoMode||!I||n.popoverState!==0||!a.current)return;let p=F==null?void 0:F.activeElement;a.current.contains(p)||G(a.current,_.First)},[n.__demoMode,I,a,n.popoverState]);let O=o.useMemo(()=>({open:n.popoverState===0,close:b}),[n,b]),N={ref:B,id:y,onKeyDown:T,onBlur:I&&n.popoverState===0?p=>{var x,v,r,d,w;let h=p.relatedTarget;h&&a.current&&((x=a.current)!=null&&x.contains(h)||(m({type:1}),((r=(v=n.beforePanelSentinel.current)==null?void 0:v.contains)!=null&&r.call(v,h)||(w=(d=n.afterPanelSentinel.current)==null?void 0:d.contains)!=null&&w.call(d,h))&&h.focus({preventScroll:!0})))}:void 0,tabIndex:-1},R=de(),k=E(()=>{let p=a.current;if(!p)return;function x(){K(R.current,{[j.Forwards]:()=>{var v;G(p,_.First)===oe.Error&&((v=n.afterPanelSentinel.current)==null||v.focus())},[j.Backwards]:()=>{var v;(v=n.button)==null||v.focus({preventScroll:!0})}})}x()}),D=E(()=>{let p=a.current;if(!p)return;function x(){K(R.current,{[j.Forwards]:()=>{var v;if(!n.button)return;let r=le(),d=r.indexOf(n.button),w=r.slice(0,d+1),h=[...r.slice(d+1),...w];for(let z of h.slice())if(z.dataset.headlessuiFocusGuard==="true"||(v=n.panel)!=null&&v.contains(z)){let u=h.indexOf(z);u!==-1&&h.splice(u,1)}G(h,_.First,{sorted:!1})},[j.Backwards]:()=>{var v;G(p,_.Previous)===oe.Error&&((v=n.button)==null||v.focus())}})}x()});return $.createElement(ee.Provider,{value:y},f&&P&&$.createElement(ne,{id:i,ref:n.beforePanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:k}),V({mergeRefs:g,ourProps:N,theirProps:l,slot:O,defaultTag:ze,features:He,visible:f,name:"Popover.Panel"}),f&&P&&$.createElement(ne,{id:S,ref:n.afterPanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}))}let Ve="div";function Ye(e,t){let c=o.useRef(null),y=q(c,t),[I,l]=o.useState([]),n=xe(),m=E(g=>{l(s=>{let f=s.indexOf(g);if(f!==-1){let T=s.slice();return T.splice(f,1),T}return s})}),b=E(g=>(l(s=>[...s,g]),()=>m(g))),P=E(()=>{var g;let s=Fe(c);if(!s)return!1;let f=s.activeElement;return(g=c.current)!=null&&g.contains(f)?!0:I.some(T=>{var O,N;return((O=s.getElementById(T.buttonId.current))==null?void 0:O.contains(f))||((N=s.getElementById(T.panelId.current))==null?void 0:N.contains(f))})}),i=E(g=>{for(let s of I)s.buttonId.current!==g&&s.close()}),S=o.useMemo(()=>({registerPopover:b,unregisterPopover:m,isFocusWithinPopoverGroup:P,closeOthers:i,mainTreeNodeRef:n.mainTreeNodeRef}),[b,m,P,i,n.mainTreeNodeRef]),a=o.useMemo(()=>({}),[]),B=e,F={ref:y};return $.createElement(ce.Provider,{value:S},V({ourProps:F,theirProps:B,slot:a,defaultTag:Ve,name:"Popover.Group"}),$.createElement(n.MainTreeNode,null))}let Ze=W(Le),Je=W(Ke),Qe=W(Ue),Xe=W(We),et=W(Ye),te=Object.assign(Ze,{Button:Je,Overlay:Qe,Panel:Xe,Group:et});function tt({title:e,titleId:t,...c},y){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:y,"aria-labelledby":t},c),e?o.createElement("title",{id:t},e):null,o.createElement("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const nt=o.forwardRef(tt),rt=nt;function dt(){o.useEffect(()=>{const t=c=>{c.key.toLowerCase()==="escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[]);async function e(){try{await Pe(),ye.visit("/")}catch{}}return C.jsx("div",{className:" top-16 w-full max-w-sm px-4",children:C.jsx(te,{className:"relative",children:({open:t})=>C.jsxs(C.Fragment,{children:[C.jsxs(te.Button,{className:`
                ${t?"text-white":"text-white/90"}
                group inline-flex items-center rounded-md bg-red-500 px-3 py-2 z-[99] text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`,children:[C.jsx("span",{children:"Dropdown"}),C.jsx(rt,{className:`${t?"text-orange-300":"text-orange-300/70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`,"aria-hidden":"true"})]}),C.jsx(ke,{as:o.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:C.jsx(te.Panel,{className:"absolute z-10  ",children:C.jsx("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 ",children:C.jsx("div",{className:"relative grid gap-8 bg-white",children:C.jsx("button",{onClick:e,className:"m-3 flex w-24  items-center rounded-lg p-2 transition duration-150 ease-in-out ",children:"LOGOUT"})})})})})]})})})}export{dt as default};
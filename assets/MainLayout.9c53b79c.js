import{i as O,e as d,j as C,k as N,l as Te,m as st,p as ze,q as ct,r as S,s as D,t as dt,v as Ae,w as Ne,_ as ft,o as W,f as vt,g as A,x as Ce,y as B,z as T,A as ne,R as me,B as K,C as ie,F as mt,D as Ie,E as X,G as oe,H as Y,I as $e,J as ke,K as Be,L as le,M as _,P as ht,N as gt,O as U,Q as bt,S as Z,T as he,U as Re,V as ge,W as xe,X as be,Y as yt,Z as pt,$ as wt,a0 as qt,a1 as _t,a2 as De,a3 as Ct,a4 as je,a5 as kt,a6 as xt,a7 as St,a8 as Tt,a9 as ye,aa as ee,ab as zt,ac as $t,ad as Ue,ae as Bt,d as Lt,af as Et,ag as Ot,u as te,ah as Pt,ai as Mt}from"./index.d226bdce.js";import{a as Rt}from"./SwitchBtn.5f366bf1.js";var pe=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const i=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:i.value},N(n.default))}}),we=O({name:"QItem",props:{...Te,...st,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=D(),t=ze(e,r),{hasLink:a,linkAttrs:u,linkClass:m,linkTag:c,navigateOnClick:s}=ct(),l=S(null),p=S(null),q=d(()=>e.clickable===!0||a.value===!0||e.tag==="label"),f=d(()=>e.disable!==!0&&q.value===!0),h=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),z=d(()=>{if(e.insetLevel===void 0)return null;const b=r.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function x(b){f.value===!0&&(p.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===l.value?p.value.focus():document.activeElement===p.value&&l.value.focus()),s(b))}function w(b){if(f.value===!0&&dt(b,13)===!0){Ae(b),b.qKeyEvent=!0;const g=new MouseEvent("click",b);g.qKeyEvent=!0,l.value.dispatchEvent(g)}i("keyup",b)}function v(){const b=Ne(n.default,[]);return f.value===!0&&b.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:p})),b}return()=>{const b={ref:l,class:h.value,style:z.value,onClick:x,onKeyup:w};return f.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,u.value)):q.value===!0&&(b["aria-disabled"]="true"),C(c.value,b,v())}}}),Dt=O({name:"QList",props:{...Te,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:n}){const i=D(),r=ze(e,i.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C("div",{class:t.value},N(n.default))}});const Qt={},Vt={m:"20",p:"20",text:"center bold 24"},Ft=A("div",{class:"i-uil:home",w:"24",h:"24",m:"r-20"},null,-1),Ht=A("div",{class:"i-uil:medium-m",w:"24",h:"24",m:"r-20"},null,-1),Wt=A("div",{class:"i-uil:exclamation-triangle",w:"24",h:"24",m:"r-20"},null,-1);function At(e,n){return W(),vt(mt,null,[A("div",Vt,Ce(e.$t("navi.title")),1),B(Dt,{bordered:"",separator:""},{default:T(()=>[ne((W(),K(we,{flex:"row items-center",clickable:"",to:"/"},{default:T(()=>[Ft,B(pe,null,{default:T(()=>[ie(Ce(e.$t("navi.home")),1)]),_:1})]),_:1})),[[me]]),ne((W(),K(we,{flex:"row items-center",clickable:"",to:"/markdownpage"},{default:T(()=>[Ht,B(pe,null,{default:T(()=>[ie(" Markdown ")]),_:1})]),_:1})),[[me]]),ne((W(),K(we,{flex:"row items-center",clickable:"",to:"/404"},{default:T(()=>[Wt,B(pe,null,{default:T(()=>[ie(" 404 ")]),_:1})]),_:1})),[[me]])]),_:1})],64)}var Nt=ft(Qt,[["render",At]]),It=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const i=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:i.value},N(n.default))}}),jt=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const i=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:i.value},N(n.default))}});function Ut(){const e=S(!Ie.value);return e.value===!1&&X(()=>{e.value=!0}),e}const Ke=typeof ResizeObserver!="undefined",Qe=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Se=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let i=null,r,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(clearTimeout(i),i=null,r){const{offsetWidth:c,offsetHeight:s}=r;(c!==t.width||s!==t.height)&&(t={width:c,height:s},n("resize",t))}}const{proxy:m}=D();if(Ke===!0){let c;return X(()=>{oe(()=>{r=m.$el.parentNode,r&&(c=new ResizeObserver(a),c.observe(r),u())})}),Y(()=>{clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),$e}else{let l=function(){clearTimeout(i),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,ke.passive),s=void 0)},p=function(){l(),r&&r.contentDocument&&(s=r.contentDocument.defaultView,s.addEventListener("resize",a,ke.passive),u())};const c=Ut();let s;return X(()=>{oe(()=>{r=m.$el,r&&p()})}),Y(l),m.trigger=a,()=>{if(c.value===!0)return C("object",{style:Qe.style,tabindex:-1,type:"text/html",data:Qe.url,"aria-hidden":"true",onLoad:p})}}}}),Kt=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=D(),t=Be(le,()=>{console.error("QHeader needs to be child of QLayout")}),a=S(parseInt(e.heightHint,10)),u=S(!0),m=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),c=d(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),s=d(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),l=d(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),p=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=d(()=>{const v=t.rows.value.top,b={};return v[0]==="l"&&t.left.space===!0&&(b[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(b[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function f(v,b){t.update("header",v,b)}function h(v,b){v.value!==b&&(v.value=b)}function z({height:v}){h(a,v),f("size",v)}function x(v){l.value===!0&&h(u,!0),i("focusin",v)}_(()=>e.modelValue,v=>{f("space",v),h(u,!0),t.animate()}),_(c,v=>{f("offset",v)}),_(()=>e.reveal,v=>{v===!1&&h(u,e.modelValue)}),_(u,v=>{t.animate(),i("reveal",v)}),_(t.scroll,v=>{e.reveal===!0&&h(u,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&f("size",a.value),f("space",e.modelValue),f("offset",c.value),Y(()=>{t.instances.header===w&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const v=Ne(n.default,[]);return e.elevated===!0&&v.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(C(Se,{debounce:0,onResize:z})),C("header",{class:p.value,style:q.value,onFocusin:x},v)}}});const Le={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Xt=Object.keys(Le);Le.all=!0;function Ve(e){const n={};for(const i of Xt)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?Le:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function Fe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Yt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ht.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function qe(e,n,i){const r=xe(e);let t,a=r.left-n.event.x,u=r.top-n.event.y,m=Math.abs(a),c=Math.abs(u);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",m>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&u>0?(t="down",m>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",m<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&a>0&&(t="right",m<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let l=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,l=!0,t==="left"||t==="right"?(r.left-=a,m=0,a=0):(r.top-=u,c=0,u=0)}return{synthetic:l,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:m,y:c},offset:{x:a,y:u},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let Gt=0;var _e=gt({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&U.has.touch!==!0)return;function r(a,u){i.mouse===!0&&u===!0?Ae(a):(i.stop===!0&&ge(a),i.prevent===!0&&Re(a))}const t={uid:"qvtp_"+Gt++,handler:n,modifiers:i,direction:Ve(i),noop:$e,mouseStart(a){Fe(a,t)&&bt(a)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Fe(a,t)){const u=a.target;Z(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(U.is.firefox===!0&&he(e,!0),t.lastEvt=a,u===!0||i.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Re(s),a.cancelBubble===!0&&ge(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}ge(a)}const{left:m,top:c}=xe(a);t.event={x:m,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(a){if(t.event===void 0)return;const u=xe(a),m=u.left-t.event.x,c=u.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=a;const s=t.event.mouse===!0,l=()=>{r(a,s);let f;i.preserveCursor!==!0&&i.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Yt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),s===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{z(),h()},50):z()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:f,synthetic:h}=qe(a,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=h===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const p=Math.abs(m),q=Math.abs(c);p!==q&&(t.direction.horizontal===!0&&p>q||t.direction.vertical===!0&&p<q||t.direction.up===!0&&p<q&&c<0||t.direction.down===!0&&p<q&&c>0||t.direction.left===!0&&p>q&&m<0||t.direction.right===!0&&p>q&&m>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(be(t,"temp"),U.is.firefox===!0&&he(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(a===void 0?t.lastEvt:a,t).payload);const{payload:m}=qe(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";Z(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}U.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Ve(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),be(n,"main"),be(n,"temp"),U.is.firefox===!0&&he(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ae(e,n,i){return i<=n?n:Math.min(i,Math.max(n,e))}const He=150;var Jt=O({name:"QDrawer",inheritAttrs:!1,props:{...yt,...Te,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...pt,"on-layout","mini-state"],setup(e,{slots:n,emit:i,attrs:r}){const t=D(),{proxy:{$q:a}}=t,u=ze(e,a),{preventBodyScroll:m}=Ct(),{registerTimeout:c,removeTimeout:s}=wt(),l=Be(le,()=>{console.error("QDrawer needs to be child of QLayout")});let p,q,f;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),z=d(()=>e.mini===!0&&h.value!==!0),x=d(()=>z.value===!0?e.miniWidth:e.width),w=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),v=d(()=>e.persistent!==!0&&(h.value===!0||Xe.value===!0));function b(o,y){if(Q(),o!==!1&&l.animate(),E(0),h.value===!0){const $=l.instances[G.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),M(1),l.isContainer.value!==!0&&m(!0)}else M(0),o!==!1&&de(!1);c(()=>{o!==!1&&de(!0),y!==!0&&i("show",o)},He)}function g(o,y){I(),o!==!1&&l.animate(),M(0),E(F.value*x.value),fe(),y!==!0?c(()=>{i("hide",o)},He):s()}const{show:k,hide:L}=qt({showing:w,hideOnRouteChange:v,handleShow:b,handleHide:g}),{addToHistory:Q,removeFromHistory:I}=_t(w,L,v),V={belowBreakpoint:h,hide:L},P=d(()=>e.side==="right"),F=d(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Ee=S(0),H=S(!1),re=S(!1),Oe=S(x.value*F.value),G=d(()=>P.value===!0?"left":"right"),ue=d(()=>w.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),se=d(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&l.isContainer.value===!0),j=d(()=>e.overlay===!1&&w.value===!0&&h.value===!1),Xe=d(()=>e.overlay===!0&&w.value===!0&&h.value===!1),Ye=d(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&H.value===!1?" hidden":"")),Ge=d(()=>({backgroundColor:`rgba(0,0,0,${Ee.value*.4})`})),Pe=d(()=>P.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Je=d(()=>P.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Ze=d(()=>{const o={};return l.header.space===!0&&Pe.value===!1&&(se.value===!0?o.top=`${l.header.offset}px`:l.header.space===!0&&(o.top=`${l.header.size}px`)),l.footer.space===!0&&Je.value===!1&&(se.value===!0?o.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(o.bottom=`${l.footer.size}px`)),o}),et=d(()=>{const o={width:`${x.value}px`,transform:`translateX(${Oe.value}px)`};return h.value===!0?o:Object.assign(o,Ze.value)}),tt=d(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),at=d(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(se.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Pe.value===!0?" q-drawer--top-padding":""))),nt=d(()=>{const o=a.lang.rtl===!0?e.side:G.value;return[[_e,rt,void 0,{[o]:!0,mouse:!0}]]}),it=d(()=>{const o=a.lang.rtl===!0?G.value:e.side;return[[_e,Me,void 0,{[o]:!0,mouse:!0}]]}),ot=d(()=>{const o=a.lang.rtl===!0?G.value:e.side;return[[_e,Me,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){ut(h,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}_(h,o=>{o===!0?(p=w.value,w.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&p!==!1&&(w.value===!0?(E(0),M(0),fe()):k(!1))}),_(()=>e.side,(o,y)=>{l.instances[y]===V&&(l.instances[y]=void 0,l[y].space=!1,l[y].offset=0),l.instances[o]=V,l[o].size=x.value,l[o].space=j.value,l[o].offset=ue.value}),_(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),_(()=>e.behavior+e.breakpoint,ce),_(l.isContainer,o=>{w.value===!0&&m(o!==!0),o===!0&&ce()}),_(l.scrollbarWidth,()=>{E(w.value===!0?0:void 0)}),_(ue,o=>{R("offset",o)}),_(j,o=>{i("on-layout",o),R("space",o)}),_(P,()=>{E()}),_(x,o=>{E(),ve(e.miniToOverlay,o)}),_(()=>e.miniToOverlay,o=>{ve(o,x.value)}),_(()=>a.lang.rtl,()=>{E()}),_(()=>e.mini,()=>{e.modelValue===!0&&(lt(),l.animate())}),_(z,o=>{i("mini-state",o)});function E(o){o===void 0?oe(()=>{o=w.value===!0?0:x.value,E(F.value*o)}):(l.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(o)===x.value)&&(o+=F.value*l.scrollbarWidth.value),Oe.value=o)}function M(o){Ee.value=o}function de(o){const y=o===!0?"remove":l.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function lt(){clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,q=setTimeout(()=>{re.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function rt(o){if(w.value!==!1)return;const y=x.value,$=ae(o.distance.x,0,y);if(o.isFinal===!0){$>=Math.min(75,y)===!0?k():(l.animate(),M(0),E(F.value*y)),H.value=!1;return}E((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(y-$,0):Math.min(0,$-y)),M(ae($/y,0,1)),o.isFirst===!0&&(H.value=!0)}function Me(o){if(w.value!==!0)return;const y=x.value,$=o.direction===e.side,J=(a.lang.rtl===!0?$!==!0:$)?ae(o.distance.x,0,y):0;if(o.isFinal===!0){Math.abs(J)<Math.min(75,y)===!0?(l.animate(),M(1),E(0)):L(),H.value=!1;return}E(F.value*J),M(ae(1-J/y,0,1)),o.isFirst===!0&&(H.value=!0)}function fe(){m(!1),de(!0)}function R(o,y){l.update(e.side,o,y)}function ut(o,y){o.value!==y&&(o.value=y)}function ve(o,y){R("size",o===!0?e.miniWidth:y)}return l.instances[e.side]=V,ve(e.miniToOverlay,x.value),R("space",j.value),R("offset",ue.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),X(()=>{i("on-layout",j.value),i("mini-state",z.value),p=e.showIfAbove===!0;const o=()=>{(w.value===!0?b:g)(!1,!0)};if(l.totalWidth.value!==0){oe(o);return}f=_(l.totalWidth,()=>{f(),f=void 0,w.value===!1&&e.showIfAbove===!0&&h.value===!1?k(!1):o()})}),Y(()=>{f!==void 0&&f(),clearTimeout(q),w.value===!0&&fe(),l.instances[e.side]===V&&(l.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const o=[];h.value===!0&&(e.noSwipeOpen===!1&&o.push(ne(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),nt.value)),o.push(De("div",{ref:"backdrop",class:Ye.value,style:Ge.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>ot.value)));const y=z.value===!0&&n.mini!==void 0,$=[C("div",{...r,key:""+y,class:[tt.value,r.class]},y===!0?n.mini():N(n.default))];return e.elevated===!0&&w.value===!0&&$.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(De("aside",{ref:"content",class:at.value,style:et.value},$,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>it.value)),C("div",{class:"q-drawer-container"},o)}}}),Zt=O({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=D(),r=Be(le,()=>{console.error("QPageContainer needs to be child of QLayout")});je(kt,!0);const t=d(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>C("div",{class:"q-page-container",style:t.value},N(n.default))}});const{passive:We}=ke,ea=["both","horizontal","vertical"];var ta=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ea.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;_(()=>e.scrollTarget,()=>{c(),m()});function u(){r!==null&&r();const p=Math.max(0,St(t)),q=Tt(t),f={top:p-i.position.top,left:q-i.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const h=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";i.position={top:p,left:q},i.directionChanged=i.direction!==h,i.delta=f,i.directionChanged===!0&&(i.direction=h,i.inflectionPoint=i.position),n("scroll",{...i})}function m(){t=xt(a,e.scrollTarget),t.addEventListener("scroll",s,We),s(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",s,We),t=void 0)}function s(p){if(p===!0||e.debounce===0||e.debounce==="0")u();else if(r===null){const[q,f]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];r=()=>{f(q),r=null}}}const{proxy:l}=D();return X(()=>{a=l.$el.parentNode,m()}),Y(()=>{r!==null&&r(),c()}),Object.assign(l,{trigger:s,getPosition:()=>i}),$e}}),aa=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=D(),t=S(null),a=S(r.screen.height),u=S(e.container===!0?0:r.screen.width),m=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),s=S(Ie.value===!0?0:ye()),l=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=d(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),q=d(()=>s.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),f=d(()=>s.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};m.value=k,e.onScroll!==void 0&&i("scroll",k)}}function z(g){const{height:k,width:L}=g;let Q=!1;a.value!==k&&(Q=!0,a.value=k,e.onScrollHeight!==void 0&&i("scroll-height",k),w()),u.value!==L&&(Q=!0,u.value=L),Q===!0&&e.onResize!==void 0&&i("resize",g)}function x({height:g}){c.value!==g&&(c.value=g,w())}function w(){if(e.container===!0){const g=a.value>c.value?ye():0;s.value!==g&&(s.value=g)}}let v;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:s,totalWidth:d(()=>u.value+s.value),rows:d(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:m,animate(){v!==void 0?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),v=void 0},155)},update(g,k,L){b[g][k]=L}};if(je(le,b),ye()>0){let L=function(){g=null,k.classList.remove("hide-scrollbar")},Q=function(){if(g===null){if(k.scrollHeight>r.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(L,300)},I=function(V){g!==null&&V==="remove"&&(clearTimeout(g),L()),window[`${V}EventListener`]("resize",Q)},g=null;const k=document.body;_(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),zt(()=>{I("remove")})}return()=>{const g=$t(n.default,[C(ta,{onScroll:h}),C(Se,{onResize:z})]),k=C("div",{class:l.value,style:p.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Se,{onResize:x}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:f.value},[k])])]):k}}});const na=Ue("theme",{state:()=>({dark:!1}),actions:{setTheme(){Bt.set(this.dark)}},persist:!0}),ia=Ue("lang",{state:()=>({value:!1}),actions:{setLang(e){e.value=this.value?"zh-CN":"en-US"}},persist:!0});const oa={p:"x-20"},sa=Lt({__name:"MainLayout",setup(e){const n=na(),i=ia(),{locale:r}=Et({useScope:"global"});n.setTheme(),i.setLang(r),n.$subscribe(n.setTheme),i.$subscribe(()=>{i.setLang(r)});const t=S(!1);return(a,u)=>{const m=Rt,c=Nt,s=Ot("router-view");return W(),K(aa,{view:"lHh Lpr lFf"},{default:T(()=>[B(Kt,{elevated:""},{default:T(()=>[B(jt,{text:"color-fcolor",bg:"color-theme"},{default:T(()=>[A("div",{class:"i-uil:bars",w:"24",h:"24",hover:"bg-color-positive",pointer:"",onClick:u[0]||(u[0]=l=>t.value=!t.value)}),B(It,null,{default:T(()=>[ie(Ce(a.$t("barTitle")),1)]),_:1}),B(m,{value:te(i).value,"onUpdate:value":u[1]||(u[1]=l=>te(i).value=l),size:24,"left-icon":"i-uil:letter-english-a","right-icon":"i-uil:letter-chinese-a",m:"r-20"},null,8,["value"]),B(m,{value:te(n).dark,"onUpdate:value":u[2]||(u[2]=l=>te(n).dark=l),size:24,"left-icon":"i-uil:sun","right-icon":"i-uil:moon"},null,8,["value"])]),_:1})]),_:1}),B(Jt,{modelValue:t.value,"onUpdate:modelValue":u[3]||(u[3]=l=>t.value=l),"show-if-above":"",width:200,breakpoint:1024,elevated:""},{default:T(()=>[B(c)]),_:1},8,["modelValue"]),B(Zt,null,{default:T(()=>[A("div",oa,[B(s,null,{default:T(({Component:l,route:p})=>[B(Pt,{name:"slide-fade",mode:"out-in"},{default:T(()=>[(W(),K(Mt(l),{key:p}))]),_:2},1024)]),_:1})])]),_:1})]),_:1})}}});export{sa as default};
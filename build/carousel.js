/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@bentoproject/base-carousel/dist/component-react.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@bentoproject/base-carousel/dist/component-react.module.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BentoBaseCarousel": function() { return /* binding */ Aq; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function $($,A,B){return A in $?Object.defineProperty($,A,{value:B,enumerable:!0,configurable:!0,writable:!0}):$[A]=B,$}function A($,A){var B=Object.keys($);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols($);A&&(C=C.filter((function(A){return Object.getOwnPropertyDescriptor($,A).enumerable}))),B.push.apply(B,C)}return B}function B(B){for(var C=1;C<arguments.length;C++){var D=null!=arguments[C]?arguments[C]:{};C%2?A(Object(D),!0).forEach((function(A){$(B,A,D[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(B,Object.getOwnPropertyDescriptors(D)):A(Object(D)).forEach((function($){Object.defineProperty(B,$,Object.getOwnPropertyDescriptor(D,$))}))}return B}var C={carousel:"carousel-f3d75e0",scrollContainer:"scroll-container-f3d75e0",hideScrollbar:"hide-scrollbar-f3d75e0",horizontalScroll:"horizontal-scroll-f3d75e0",verticalScroll:"vertical-scroll-f3d75e0",slideElement:"slide-element-f3d75e0",thumbnails:"thumbnails-f3d75e0",startAlign:"start-align-f3d75e0",centerAlign:"center-align-f3d75e0",enableSnap:"enable-snap-f3d75e0",disableSnap:"disable-snap-f3d75e0",slideSizing:"slide-sizing-f3d75e0",arrow:"arrow-f3d75e0",ltr:"ltr-f3d75e0",rtl:"rtl-f3d75e0",arrowPrev:"arrow-prev-f3d75e0",arrowNext:"arrow-next-f3d75e0",arrowDisabled:"arrow-disabled-f3d75e0",insetArrow:"inset-arrow-f3d75e0",outsetArrow:"outset-arrow-f3d75e0",defaultArrowButton:"default-arrow-button-f3d75e0",arrowBaseStyle:"arrow-base-style-f3d75e0",arrowFrosting:"arrow-frosting-f3d75e0",arrowBackdrop:"arrow-backdrop-f3d75e0",arrowBackground:"arrow-background-f3d75e0",arrowIcon:"arrow-icon-f3d75e0"};function D($,A){if(null==$)return{};var B,C,D={},E=Object.keys($);for(C=0;C<E.length;C++)B=E[C],A.indexOf(B)>=0||(D[B]=$[B]);return D}function T($,A,B){return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,arguments)}function U($,A,B){return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(void 0,arguments)}function V($){return $.children}function W($){return (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)($,void 0)}function X($){return react__WEBPACK_IMPORTED_MODULE_0__.toChildArray.apply(void 0,arguments)}function Y($){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)($)}function Z($){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)($)}function _($,A){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)($,A)}function a($,A){(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)($,A)}function b($){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($)}function c($,A){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)($,A)}function d($,A){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($,A)}function e($,A,B){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)($,A,B)}var{hasOwnProperty:f,toString:g}=Object.prototype;function h($,A){return $>0&&A>0?$%A:($%A+A)%A}var i={START:"start",CENTER:"center"},j={HORIZONTAL:"horizontal",VERTICAL:"vertical"};function k($,A){const{bottom:B,height:C,left:D,right:E,top:F,width:G}=A.getBoundingClientRect();return{start:Math.round(0==$?D:F),end:Math.round(0==$?E:B),length:Math.round(0==$?G:C)}}function l($,A){const{end:B,start:C}=k($,A);return(C+B)/2}function m($,A){const{start:B}=k($,A);return B}function n($,A,B){return A==i.START?m($,B):l($,B)}function o($,A,B){const{end:C,start:D}=k($,A);return D<=B&&B<C}function p($,A){return 0==$?A.scrollLeft:A.scrollTop}function q($,A){return 0==$?A.scrollWidth:A.scrollHeight}function r($,A,B,C,D=0){const E=A==i.START,{length:F}=k($,C),G=E?m($,C):l($,C),H=E?m($,B):l($,B),I=Math.round(G-H-D*F);!function($,A,B){!function($,A,B){0==$?A.scrollLeft=B:A.scrollTop=B}($,A,p($,A)+B)}($,B,I);const{length:J}=k($,B),K=J+p($,B)+I<q($,B);return!!I&&K}var s,t=["auto","lazy","eager","unload"],u={auto:0,lazy:1,eager:2,unload:3};function v($,A){const B=u[$]||0,C=u[A]||0,D=Math.max(B,C);return t[D]}function w(){return s||(s=W({renderable:!0,playable:!0,loading:"auto"}))}function x({children:$,loading:A="auto",notify:B,playable:C=!0,renderable:D=!0}){const E=b(w()),F=D&&E.renderable,G=F&&C&&E.playable,H=v(F?"auto":"lazy",v(A,E.loading)),I=B||E.notify,J=c((()=>({renderable:F,playable:G,loading:H,notify:I})),[F,G,H,I]);return T(w().Provider,{children:$,value:J})}function y({advance:$,as:A=z,by:B,disabled:C,outsetArrows:D,rtl:E}){const F=d((()=>{C||$()}),[$,C]);return T(A,{"aria-disabled":String(!!C),by:B,className:"arrow-f3d75e0"+(C?" arrow-disabled-f3d75e0":"")+(B<0?" arrow-prev-f3d75e0":"")+(B>0?" arrow-next-f3d75e0":"")+(D?" outset-arrow-f3d75e0":"")+(D?"":" inset-arrow-f3d75e0")+(E?" rtl-f3d75e0":"")+(E?"":" ltr-f3d75e0"),disabled:C,onClick:F,outsetArrows:D,rtl:E.toString()})}function z({"aria-disabled":$,by:A,disabled:B,onClick:C,"className":D}){return T("div",{className:D},T("button",{"aria-disabled":$,"aria-label":A<0?"Previous item in carousel":"Next item in carousel",className:"default-arrow-button-f3d75e0",disabled:B,onClick:C},T("div",{className:"arrow-base-style-f3d75e0 arrow-frosting-f3d75e0"}),T("div",{className:"arrow-base-style-f3d75e0 arrow-backdrop-f3d75e0"}),T("div",{className:"arrow-base-style-f3d75e0 arrow-background-f3d75e0"}),T("svg",{className:"arrow-icon-f3d75e0",viewBox:"0 0 24 24"},T("path",{d:A<0?"M14,7.4 L9.4,12 L14,16.6":"M10,7.4 L14.6,12 L10,16.6",fill:"none",strokeWidth:"2px",strokeLinejoin:"round",strokeLinecap:"round"}))))}var A$=W({slides:[],setSlides:$=>{}});function AA($){return(AA="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function($){return typeof $}:function($){return $&&"function"==typeof Symbol&&$.constructor===Symbol&&$!==Symbol.prototype?"symbol":typeof $})($)}function AB($){var A=function($,A){if("object"!==AA($)||null===$)return $;var B=$[Symbol.toPrimitive];if(void 0!==B){var C=B.call($,"string");if("object"!==AA(C))return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return String($)}($);return"symbol"===AA(A)?A:String(A)}var AD,AE=["ref"],AF="undefined"!=typeof Symbol&&(null===(AD=Symbol.for)||void 0===AD?void 0:AD.call(Symbol,"react.forward_ref"))||3911,AG=react__WEBPACK_IMPORTED_MODULE_0__.options.__b;function AH($){function A(A){const{ref:B}=A,C=D(A,AE);return $(C,B)}return A.$$typeof=AF,A.render=A,A.prototype.isReactComponent=!0,A.$=!0,A}react__WEBPACK_IMPORTED_MODULE_0__.options.__b=function($){var A;null!==(A=$.type)&&void 0!==A&&A.$&&$.ref&&($.props.ref=$.ref,$.ref=null),null==AG||AG($)};var AI=[null,"paint","layout","content","size","size paint","size layout","strict"],AJ={"position":"relative","width":"100%","height":"100%"},AK=AH((function($,A){let C="className",{as:E="div",children:F,contentAs:G="div",contentClassName:H,contentProps:I,contentRef:J,contentStyle:K,layout:L=!1,paint:M=!1,size:N=!1,"style":O,wrapperClassName:P,wrapperStyle:Q,[C]:R}=$;const S=(N?4:0)+(L?2:0)+(M?1:0);return T(E,B(B({},D($,["as","children","contentAs","contentClassName","contentProps","contentRef","contentStyle","layout","paint","size","style","wrapperClassName","wrapperStyle",C].map(AB))),{},{ref:A,className:`${R||""} ${P||""}`.trim()||null,style:B(B(B({},O),Q),{},{contain:AI[S]})}),T(G,B(B({},I),{},{ref:J,className:H,style:B(B({},N&&AJ),{},{"overflow":M?"hidden":"visible"},K)}),F))}));function AL($){const A=Z(null);return A.current=$,A}function AM($){return($.ownerDocument||$).defaultView}AH((function($,A){let C="className",{as:E="div",children:F,"style":G,wrapperClassName:H,wrapperStyle:I,[C]:J}=$;return T(E,B(B({},D($,["as","children","style","wrapperClassName","wrapperStyle",C].map(AB))),{},{ref:A,className:`${J||""} ${H||""}`.trim()||null,style:B(B({},G),I)}),F)})),new WeakMap,new WeakMap;var AN,AO={arrow:"arrow-d701172",auto:"auto-d701172",caption:"caption-d701172",captionText:"caption-text-d701172",clip:"clip-d701172",closeButton:"close-button-d701172",control:"control-d701172",controlsPanel:"controls-panel-d701172",expanded:"expanded-d701172",hideControls:"hide-controls-d701172",lightbox:"lightbox-d701172",gallery:"gallery-d701172",grid:"grid-d701172",nextArrow:"next-arrow-d701172",prevArrow:"prev-arrow-d701172",showControls:"show-controls-d701172",thumbnail:"thumbnail-d701172",topControl:"top-control-d701172"},AP="control-d701172",AQ=W({deregister:()=>{},register:()=>{},open:()=>{}}),AR=["Webkit","webkit","Moz","moz","ms","O","o"];function AS($,A,B,C,D){const E=function($,A,B){if(AT(A))return A;AN||(AN=Object.create(null));let C=AN[A];if(!C||B){if(C=A,void 0===$[A]){const B=function($){return $.charAt(0).toUpperCase()+$.slice(1)}(A),D=function($,A){for(let B=0;B<AR.length;B++){const C=AR[B]+A;if(void 0!==$[C])return C}return""}($,B);void 0!==$[D]&&(C=D)}B||(AN[A]=C)}return C}($.style,A,D);if(!E)return;const F=C?B+C:B;AT(E)?$.style.setProperty(E,F):$.style[E]=F}function AT($){return $.startsWith("--")}var AU=["animation","children","closeButtonAs","onAfterClose","onAfterOpen","onBeforeOpen"],AV={"fade-in":[{opacity:0,visibility:"visible"},{opacity:1,visibility:"visible"}],"fly-in-top":[{opacity:0,transform:"translate(0,-100%)",visibility:"visible"},{opacity:1,transform:"translate(0, 0)",visibility:"visible"}],"fly-in-bottom":[{opacity:0,transform:"translate(0, 100%)",visibility:"visible"},{opacity:1,transform:"translate(0, 0)",visibility:"visible"}]},AW={"part":"scroller"},AX=AH((function($,A){let{animation:C="fade-in",children:E,closeButtonAs:F,onAfterClose:G,onAfterOpen:H,onBeforeOpen:I}=$,J=D($,AU);const[K,L]=Y(!1),[M,N]=Y(!1),O=Z(),P=AL(C),Q=AL(I),R=AL(G),S=AL(H);return e(A,(()=>({open:()=>{var $;null===($=Q.current)||void 0===$||$.call(Q),L(!0),N(!0)},close:()=>N(!1)})),[Q]),a((()=>{const $=O.current;if(!$)return;let A;if(AS($,"visibility",M?"hidden":"visible"),M){const B=()=>{var A;AS($,"opacity",1),AS($,"visibility","visible"),function($){try{$.focus()}catch($){}}($),null===(A=S.current)||void 0===A||A.call(S)};if(!$.animate)return void B();A=$.animate(AV[P.current],{duration:200,fill:"both",easing:"ease-in"}),A.onfinish=B}else{const B=()=>{AS($,"opacity",0),AS($,"visibility","hidden"),R.current&&R.current(),A=null,L(!1)};if(!$.animate)return void B();A=$.animate(AV[P.current],{duration:200,direction:"reverse",fill:"both",easing:"ease-in"}),A.onfinish=B}return()=>{A&&A.cancel()}}),[M,P,R,S]),K&&T(AK,B({ref:O,size:!0,layout:!0,paint:!0,part:"lightbox",contentClassName:"content-88b9dee",wrapperClassName:"wrapper-88b9dee",contentProps:AW,role:"dialog",tabindex:"0",onKeyDown:$=>{"Escape"===$.key&&N(!1)}},J),T(AY,{as:F,onClick:()=>N(!1)}),E)}));function AY({onClick:$,as:A=AZ}){return T(A,{"aria-label":"Close the modal",onClick:$})}function AZ({"aria-label":$,onClick:A}){return T("button",{"aria-label":$,className:"close-button-88b9dee",onClick:A,tabindex:-1})}AX.displayName="Lightbox";var A_={"aria-label":"Toggle caption expanded state.","role":"button"};function Aa({onClick:$}){return T("svg",{"aria-label":"Close the lightbox",className:AP+" top-control-d701172 close-button-d701172",onClick:$,role:"button",tabindex:"0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M6.4 6.4 L17.6 17.6 Z M17.6 6.4 L6.4 17.6 Z",stroke:"#fff",strokeWidth:"2",strokeLinejoin:"round"}))}function Ab({"aria-disabled":$,by:A,disabled:B,onClick:C}){return T("svg",{"aria-disabled":$,className:"arrow-d701172 "+AP+(A<0?" prev-arrow-d701172":"")+(A>0?" next-arrow-d701172":""),disabled:B,onClick:C,role:"button",tabindex:"0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:A<0?"M14,7.4 L9.4,12 L14,16.6":"M10,7.4 L14.6,12 L10,16.6",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}))}function Ac({onClick:$,showCarousel:A}){return T("svg",{"aria-label":A?"Switch to grid view":"Switch to carousel view",className:AP+" top-control-d701172",onClick:$,role:"button",tabindex:"0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A?T("g",{fill:"#fff"},T("rect",{x:"3",y:"3",width:"6",height:"8",rx:"1",ry:"1"}),T("rect",{x:"15",y:"13",width:"6",height:"8",rx:"1",ry:"1"}),T("rect",{x:"11",y:"3",width:"10",height:"8",rx:"1",ry:"1"}),T("rect",{x:"3",y:"13",width:"10",height:"8",rx:"1",ry:"1"})):T(V,null,T("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1",strokeWidth:"2",stroke:"#fff",fill:"none"}),T("circle",{fill:"#fff",cx:"15.5",cy:"8.5",r:"1.5"}),T("polygon",{fill:"#fff",points:"5,19 5,13 8,10 13,15 16,12 19,15 19,19"})))}function Ad({onClick:$,render:A}){return T("div",{"aria-label":"View in carousel",className:"thumbnail-d701172",onClick:$,role:"button",tabindex:"0"},A())}function Ae(){let $=0;return()=>String(++$)}AH((function({children:$,onAfterClose:A,onAfterOpen:C,onBeforeOpen:D,onToggleCaption:E,onViewGrid:F,render:G},H){const I=AO,J=Z(null),K=Z(null),[L,M]=Y(0),N=Z({}),O=Z({}),P=Z({}),Q=Z({}),R=Z({}),[S,U]=Y(!0),[W,X]=Y(!0),[_,b]=Y(null),c=d(($=>{const A=null!=$?$:Object.keys(N.current)[0];A&&(Q.current[A]||(Q.current[A]=[],R.current[A]=[],P.current[A]=0),N.current[A].forEach((($,B)=>{if(!Q.current[A][B]){const C=P.current[A];Q.current[A][B]=$(),R.current[A][B]=T(Ad,{onClick:()=>{U(!0),M(C)},render:$}),P.current[A]+=1}})),b(A))}),[]),f=d((($,A="default",B,C)=>{N.current[A]||(N.current[A]=[],O.current[A]=[]),N.current[A][$-1]=B,O.current[A][$-1]=C}),[]),g=d((($,A="default")=>{delete N.current[A][$-1],delete O.current[A][$-1],delete Q.current[A][$-1],P.current[A]--}),[]),i=d((($,A)=>{var B;c(A),X(!0),U(!0),null!=$&&M($),null===(B=J.current)||void 0===B||B.open()}),[c]),j={deregister:g,register:f,open:i},k=Z(void 0),[l,m]=Y(null),[n,o]=Y("auto");return a((()=>{var $;if(null===($=K.current)||void 0===$||$.goToSlide(L),_){const $=N.current[_].length-P.current[_]+h(L,P.current[_]);m(O.current[_][$]),o("auto")}}),[_,L]),a((()=>{var $;const{offsetHeight:A,scrollHeight:B}=null!==($=k.current)&&void 0!==$?$:{};B>A+40&&o("clip")}),[l]),e(H,(()=>({open:i,close:()=>{var $;null===($=J.current)||void 0===$||$.close()}})),[i]),T(V,null,T(AX,{className:"lightbox-d701172"+(W?" show-controls-d701172":"")+(W?"":" hide-controls-d701172"),closeButtonAs:Aa,onBeforeOpen:D,onAfterOpen:C,onAfterClose:A,ref:J},T("div",{className:"controls-panel-d701172"},T(Ac,{onClick:()=>{S&&(null==F||F()),U(!S)},showCarousel:S})),T(Aq,{arrowPrevAs:Ab,arrowNextAs:Ab,className:"gallery-d701172",defaultSlide:h(L,P.current[_])||0,hidden:!S,loop:!0,onClick:()=>X(!W),onSlideChange:$=>M($),ref:K},Q.current[_]),T("div",B({hidden:!S,className:"caption-d701172 "+AP+" "+I[n],ref:k},"auto"===n?null:B({onClick:()=>{null==E||E(),o("clip"===n?"expanded":"clip")}},A_)),T("div",{className:"caption-text-d701172 amp-lightbox-gallery-caption",part:"caption"},l)),!S&&T("div",{className:"gallery-d701172 grid-d701172"},R.current[_])),T(AQ.Provider,{value:j},G?G():$))})).displayName="BentoLightboxGalleryProvider";var Af=["alt","aria-label","as","caption","children","enableActivation","group","onMount","render","srcset"],Ag=Ae(),Ah={"aria-label":"Open content in a lightbox view.",role:"button",tabIndex:0},Ai=$=>U($);function Aj($){let{alt:A,"aria-label":C,as:E="div",caption:F,children:G,enableActivation:H=!0,group:I,onMount:J,render:K,srcset:L}=$,M=D($,Af);const[N]=Y(Ag),{deregister:O,open:P,register:Q}=b(AQ),R=d((()=>K?K():G?X(G).map(Ai):T(E,{srcset:L})),[G,K,L]),S=c((()=>F||A||C),[A,C,F]);a((()=>(Q(N,I,R,S),()=>O(N,I))),[S,N,I,O,Q,R]),a((()=>null==J?void 0:J(Number(N)-1)),[N,J]);const U=c((()=>H&&B(B({},Ah),{},{onClick:()=>{P(Number(N)-1,I)}})),[H,N,I,P]);return T(E,B(B({},U),{},{srcset:L},M),G)}var Ak=AH((function({_thumbnails:$,advanceCount:A,alignment:B,axis:D,children:E,lightboxGroup:F,loop:G,mixedLength:H,onClick:I,restingIndex:J,setRestingIndex:K,snap:L,snapBy:M=1,visibleCount:N},O){const P=Z(null),Q=G?Math.floor(E.length/2):J,R=Z(!1),S=d(($=>{const A=P.current;A&&(_.current=h(_.current+$,E.length),X.current=0,r(D,B,A,A.children[h(Q+$,A.children.length)],X.current)||K(_.current))}),[B,D,E.length,Q,K]);e(O,(()=>({advance:S,next:()=>S(A),prev:()=>S(-A),get node(){return P.current}})),[S,A]);const U=C,W=Z(J),X=Z(0),Y=function({_thumbnails:$,alignment:A,children:B,lightboxGroup:C,loop:D,mixedLength:E,offsetRef:F,pivotIndex:G,restingIndex:H,snap:I,snapBy:J,visibleCount:K},L){const{length:M}=B,N=C?Aj:"div",O=B.map(((B,D)=>{const F=`slide-${B.key||D}`;return T(N,{caption:B.props.caption,key:F,"data-slide":D,className:`${L.slideSizing} ${L.slideElement} ${I&&0===h(D,J)?L.enableSnap:L.disableSnap} ${A===i.CENTER?L.centerAlign:L.startAlign} ${$?L.thumbnails:""} `,group:C||void 0,part:"slide",style:{flex:E?"0 0 auto":`0 0 ${100/K}%`}},B)}));if(!D)return O;const P=[],Q=[],R=h(M-H+G,M);if(H<=G)for(let $=0;$<R;$++)P.unshift(O.pop());else for(let $=0;$<M-R;$++)Q.push(O.shift());return F.current=P.length?P.length:-Q.length,T(V,null,P,O,Q)}({alignment:B,children:E,loop:G,mixedLength:H,offsetRef:W,lightboxGroup:F,pivotIndex:Q,restingIndex:J,snap:L,snapBy:M,visibleCount:N,_thumbnails:$},U),_=Z(J),b=d((()=>{if(!P.current||!P.current.children.length)return;const $=P.current;AS($,"scrollBehavior","auto"),R.current=!0,r(D,B,$,$.children[Q],X.current),AS($,"scrollBehavior","smooth")}),[B,D,Q]);a((()=>{P.current&&G&&P.current.children.length&&b()}),[G,J,b]),a((()=>{if(!P.current)return;const $=P.current;if(!$)return;const A=AM($);if(!A)return;const B=new A.ResizeObserver(b);return B.observe($),()=>B.disconnect()}),[b]);const f=c((()=>function($,A,B){let C=0,D=0,E=null;function F(){C=0;const B=200-($.Date.now()-D);var G;B>0?C=$.setTimeout(F,B):(G=E,E=null,A.apply(null,G))}return function(...A){D=$.Date.now(),E=A,C||(C=$.setTimeout(F,200))}}(P.current?AM(P.current):window,(()=>{null!==_.current&&_.current!==J&&K(_.current)}))),[J,K]);return T("div",{ref:P,onClick:I,onScroll:()=>{R.current?R.current=!1:((()=>{const $=P.current;if(!$)return;const A=function($,A,B,C,D){const E=n($,A,B);if(o($,C[D],E))return D;for(let A=1;A<=C.length/2;A++){const B=h(D+A,C.length),F=h(D-A,C.length);if(o($,C[B],E))return B;if(o($,C[F],E))return F}}(D,B,$,$.children,Q);L||(X.current=function($,A,B,C){const D=n($,A,C),E=n($,A,B),{length:F}=k($,C);return(D-E)/F}(D,B,$,$.children[A])),_.current=h(A-W.current,E.length)})(),f())},className:"scroll-container-f3d75e0 hide-scrollbar-f3d75e0 "+(0===D?"horizontal-scroll-f3d75e0":"vertical-scroll-f3d75e0"),tabindex:0},Y)}));Ak.displayName="Scroller";var Al=["advanceCount","arrowPrevAs","arrowNextAs","autoAdvance","autoAdvanceCount","autoAdvanceInterval","autoAdvanceLoops","children","controls","defaultSlide","dir","lightbox","loop","mixedLength","onClick","onFocus","onMouseEnter","onSlideChange","onTouchStart","orientation","outsetArrows","snap","snapAlign","snapBy","visibleCount","_thumbnails"],Am={ALWAYS:"always",NEVER:"never",AUTO:"auto"},An={LTR:"ltr",RTL:"rtl",AUTO:"auto"},Ao=1e3,Ap=Ae(),Aq=AH((function($,A){var C,E;let{advanceCount:F=1,arrowPrevAs:G,arrowNextAs:H,autoAdvance:I=!1,autoAdvanceCount:J=1,autoAdvanceInterval:K=Ao,autoAdvanceLoops:L=Number.POSITIVE_INFINITY,children:M,controls:N=Am.AUTO,defaultSlide:O=0,dir:P=An.AUTO,lightbox:Q=!1,loop:R,mixedLength:S=!1,onClick:V,onFocus:W,onMouseEnter:f,onSlideChange:g,onTouchStart:l,orientation:m=j.HORIZONTAL,outsetArrows:n=!1,snap:o=!0,snapAlign:p=i.START,snapBy:r=1,visibleCount:s=1,_thumbnails:t=!1}=$,u=D($,Al);const v=c((()=>X(M)),[M]),{length:w}=v,z=b(A$),[AA,AB]=Y(Math.min(Math.max(O,0),w)),AC=null!==(C=z.currentSlide)&&void 0!==C?C:AA,AD=null!==(E=z.setCurrentSlide)&&void 0!==E?E:AB,AE=t?AA:AC,AF=t?AB:AD,AG=Z(AE),AH=m==j.HORIZONTAL?0:1,[AI]=Y(Ap);a((()=>{AF(AC)}),[AC,AF]);const{setSlides:AJ,slides:AL}=z,AN=Z(null),AO=Z(null),AP=Z(null),AQ=Z(0),AR=c((()=>Math.max(K,Ao)),[K]),AS=d((()=>!(AQ.current+s/w>=L||4!==AX.current||(R||AG.current+s<w?(AN.current.advance(J),AQ.current+=J/w):(AN.current.advance(-AG.current),AQ.current=Math.ceil(AQ.current)),0))),[J,L,w,R,s]),AT=d((()=>AN.current.next()),[]),AU=d((()=>AN.current.prev()),[]);_((()=>{if(!I||!AO.current)return;const $=AM(AO.current),A=$.setInterval((()=>{AS()||$.clearInterval(A)}),AR);return()=>$.clearInterval(A)}),[AS,AR,I]);const AV=d(($=>{w<=0||isNaN($)||($=R?h($,w):Math.min(Math.max($,0),w-1),AF($),AG.current!==$&&(AG.current=$,g&&g($)))}),[w,R,AF,g]);e(A,(()=>({goToSlide:$=>{AX.current=0,AV($)},next:()=>{AX.current=0,AT()},prev:()=>{AX.current=0,AU()},get root(){return AO.current},get node(){return AP.current}})),[AT,AU,AV]),_((()=>{!t&&AL&&AL.length!==v.length&&AJ(v)}),[t,v,AJ,AL]);const AW=$=>{if(R)return!1;if(AE+$<0)return!0;if(AE+s+$>w)return!0;if(S&&$>0){if(!AN.current)return!1;const $=AN.current.node;if(!$||!$.children.length)return!1;const A=q(AH,$),B=function($,A){return 0==$?A.offsetLeft:A.offetTop}(AH,$.children[AE]),{length:C}=k(AH,$);if(C!==A&&C+B>=A)return!0}return!1},AX=Z(4),AY=c((()=>N!==Am.ALWAYS&&!n&&(N===Am.NEVER||3===AX.current)),[N,n]),[AZ,A_]=Y(P===An.RTL);return a((()=>{if(!AO.current||P!==An.AUTO)return;const $=AO.current.ownerDocument;$&&A_(function($){return"rtl"==($.body.getAttribute("dir")||$.documentElement.getAttribute("dir")||"ltr")}($))}),[P,A_]),T(AK,B({size:!0,layout:!0,paint:!0,contentStyle:{display:"flex",direction:AZ?An.RTL:An.LTR},ref:AO,onFocus:$=>{W&&W($),AX.current=1},onMouseEnter:$=>{f&&f($),AX.current=2},onTouchStart:$=>{l&&l($),AX.current=3},tabindex:"0",wrapperClassName:"carousel-f3d75e0",contentRef:AP},u),!AY&&T(y,{advance:AU,as:G,by:-F,disabled:AW(-1),outsetArrows:n,rtl:AZ}),T(Ak,{advanceCount:F,alignment:p,axis:AH,lightboxGroup:Q&&"carousel"+AI,loop:R,mixedLength:S,onClick:V,restingIndex:AE,setRestingIndex:AV,snap:o,snapBy:r,ref:AN,visibleCount:S?1:s,_thumbnails:t},v.map((($,A)=>{const{alt:C,"aria-label":D}=$.props;return T(x,{caption:C||D,key:A,renderable:A==AE,playable:A==AE},U($,B(B({},$.props),{},{thumbnailSrc:void 0})))}))),!AY&&T(y,{advance:AT,by:F,as:H,disabled:AW(1),outsetArrows:n,rtl:AZ}))}));Aq.displayName="BentoBaseCarousel";
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

/***/ }),

/***/ "./src/carousel/carousel.js":
/*!**********************************!*\
  !*** ./src/carousel/carousel.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/carousel/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/carousel/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/carousel/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('bento/carousel', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  Save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/carousel/edit.js":
/*!******************************!*\
  !*** ./src/carousel/edit.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bentoproject_base_carousel_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bentoproject/base-carousel/react */ "./node_modules/@bentoproject/base-carousel/dist/component-react.module.js");
/* harmony import */ var _bentoproject_base_carousel_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bentoproject/base-carousel/styles.css */ "./node_modules/@bentoproject/base-carousel/dist/styles.css");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/carousel/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement|JSX.Element} Element to render.
 */

function Edit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bento-carousel-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bentoproject_base_carousel_react__WEBPACK_IMPORTED_MODULE_1__.BentoBaseCarousel, {
    autoAdvance: false,
    loop: false,
    snap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?1",
    width: 1200,
    height: 800,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?2",
    width: 1200,
    height: 800,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?3",
    width: 1200,
    height: 800,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?4",
    width: 1200,
    height: 800,
    alt: ""
  }))));
}

/***/ }),

/***/ "./src/carousel/save.js":
/*!******************************!*\
  !*** ./src/carousel/save.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bentoproject_base_carousel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bentoproject/base-carousel/react */ "./node_modules/@bentoproject/base-carousel/dist/component-react.module.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
//import { __ } from '@wordpress/i18n';
// import { defineElement as defineBentoBaseCarousel } from '@bentoproject/base-carousel';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function Save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)().save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bento-carousel-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bentoproject_base_carousel_react__WEBPACK_IMPORTED_MODULE_2__.BentoBaseCarousel, {
    autoAdvance: false,
    loop: false,
    snap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?1",
    width: 1200,
    height: 800,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?2",
    width: 1200,
    height: 800,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?3",
    width: 1200,
    height: 800,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://source.unsplash.com/random/1200x800?4",
    width: 1200,
    height: 800,
    alt: ""
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bento-carousel-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bento-carousel-prev"
  }, 'Previous'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bento-carousel-next"
  }, 'Next')));
}

/***/ }),

/***/ "./node_modules/@bentoproject/base-carousel/dist/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/@bentoproject/base-carousel/dist/styles.css ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/carousel/editor.scss":
/*!**********************************!*\
  !*** ./src/carousel/editor.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/carousel/style.scss":
/*!*********************************!*\
  !*** ./src/carousel/style.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"carousel": 0,
/******/ 			"style-carousel": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbento_carousel"] = self["webpackChunkbento_carousel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-carousel"], function() { return __webpack_require__("./src/carousel/carousel.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=carousel.js.map
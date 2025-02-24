"use strict";(self.webpackChunkpreact_poc3=self.webpackChunkpreact_poc3||[]).push([[815],{"./src/stories/Alert.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ValidationError:()=>ValidationError,VerficationSuccess:()=>VerficationSuccess,VerificationInfo:()=>VerificationInfo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"),_components_Alert__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/preact/dist/preact.module.js"),__webpack_require__("./src/components/Alert.jsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",component:_components_Alert__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"]},ValidationError=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_components_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{type:"danger",msg:"Invalid User ID / Password combination, please try again"}),VerficationSuccess=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_components_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{type:"success",msg:"New login code has been sent via SMS"}),VerificationInfo=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_components_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{type:"info",msg:"You will be able to request another code in 30 seconds"}),__namedExportsOrder=["ValidationError","VerficationSuccess","VerificationInfo"];ValidationError.parameters={...ValidationError.parameters,docs:{...ValidationError.parameters?.docs,source:{originalSource:'props => <Alert type="danger" msg="Invalid User ID / Password combination, please try again" />',...ValidationError.parameters?.docs?.source}}},VerficationSuccess.parameters={...VerficationSuccess.parameters,docs:{...VerficationSuccess.parameters?.docs,source:{originalSource:'props => <Alert type="success" msg="New login code has been sent via SMS" />',...VerficationSuccess.parameters?.docs?.source}}},VerificationInfo.parameters={...VerificationInfo.parameters,docs:{...VerificationInfo.parameters?.docs,source:{originalSource:'props => <Alert type="info" msg="You will be able to request another code in 30 seconds" />',...VerificationInfo.parameters?.docs?.source}}}},"./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FD:()=>u,FK:()=>preact__WEBPACK_IMPORTED_MODULE_0__.FK,Y:()=>u});var preact__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/dist/preact.module.js");var f=0;Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return preact__WEBPACK_IMPORTED_MODULE_0__.fF.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.fF.vnode(l),l}},"./src/components/Alert.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const __WEBPACK_DEFAULT_EXPORT__=props=>{const mapping={success:"green",warning:"yellow",danger:"red",info:"blue"};return(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{class:`tw:text-${mapping[props.type]}-800 tw:bg-${mapping[props.type]}-50 tw:flex tw:items-center tw:p-4 tw:mb-4 tw:text-sm tw:rounded-lg tw:max-w-lg tw:m-auto`,role:"alert",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("svg",{class:"tw:flex-shrink-0 tw:inline tw:w-4 tw:h-4 tw:me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{class:"tw:font-bold",children:props.msg})}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("button",{type:"button",class:`tw:ms-auto tw:-mx-1.5 tw:-my-1.5 tw:rounded-lg tw:focus:ring-2 tw:focus:ring-${mapping[props.type]}-400 tw:p-1.5 tw:hover:bg-${mapping[props.type]}-200 tw:inline-flex tw:items-center tw:justify-center tw:h-8 tw:w-8`,"aria-label":"Close",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{class:"tw:sr-only",children:"Close"}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("svg",{class:"tw:w-3 tw:h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})]})]})}}}]);
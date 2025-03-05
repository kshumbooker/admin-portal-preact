"use strict";(self.webpackChunkpreact_poc3=self.webpackChunkpreact_poc3||[]).push([[669],{"./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FD:()=>u,FK:()=>preact__WEBPACK_IMPORTED_MODULE_0__.FK,Y:()=>u});var preact__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/dist/preact.module.js");var f=0;Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return preact__WEBPACK_IMPORTED_MODULE_0__.fF.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.fF.vnode(l),l}},"./src/components/Input.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>Input});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"),_Link__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/preact/dist/preact.module.js"),__webpack_require__("./src/components/Link.jsx"));const Input=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("label",{for:props.for,class:"tw:text-left tw:text-base tw:font-bold tw:text-black-700",children:props.label}),"password"===props.type?(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{class:"tw:float-right",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_Link__WEBPACK_IMPORTED_MODULE_2__.N,{href:"/admin/portal/passwordrecovery",class:"tw:text-base",text:"Forgot password?"})}):"",(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("input",{autocomplete:"disable-autocomplete",class:"tw:w-full tw:mt-2 tw:mb-4 tw:px-4 tw:py-2 tw:border tw:border-gray-300 tw:rounded-md","data-val":props.dataVal,"data-val-length":props.dataValLength,"data-val-length-max":props.dataValLengthMax,maxlength:props.maxlength,type:props.type,id:props.id,name:props.name})]}),__WEBPACK_DEFAULT_EXPORT__=Input},"./src/components/Link.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,N:()=>Link});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const Link=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("a",{class:`tw:text-black-1000 tw:cursor-pointer tw:decoration-primary tw:font-normal tw:underline-offset-8 tw:text-lg tw:lg:whitespace-nowrap tw:lg:hover:underline ${props.class?props.class:""} `,href:props.href,children:props.text}),__WEBPACK_DEFAULT_EXPORT__=Link},"./src/stories/Input.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"),_components_Input__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/preact/dist/preact.module.js"),__webpack_require__("./src/components/Input.jsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",component:_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"]},Default=()=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{for:"password",type:"password",label:"Password"}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <Input for="password" type="password" label="Password"></Input>',...Default.parameters?.docs?.source}}}}}]);
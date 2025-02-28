"use strict";(self.webpackChunkpreact_poc3=self.webpackChunkpreact_poc3||[]).push([[637],{"./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FD:()=>u,FK:()=>preact__WEBPACK_IMPORTED_MODULE_0__.FK,Y:()=>u});var preact__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/dist/preact.module.js");var f=0;Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return preact__WEBPACK_IMPORTED_MODULE_0__.fF.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.fF.vnode(l),l}},"./src/components/Alert.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const __WEBPACK_DEFAULT_EXPORT__=props=>{const mapping={success:"green",warning:"yellow",danger:"red",info:"blue"};return(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{class:`tw:bg-${mapping[props.type]}-100 tw:text-${mapping[props.type]}-800 tw:flex tw:items-center tw:p-4 tw:my-4 tw:text-sm tw:rounded-lg tw:max-w-lg tw:m-auto`,role:"alert",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("svg",{class:"tw:flex-shrink-0 tw:inline tw:w-4 tw:h-4 tw:me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{class:"tw:font-bold",children:props.msg})}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("button",{type:"button",class:`tw:ms-auto tw:-mx-1.5 tw:-my-1.5 tw:rounded-lg tw:focus:ring-2 tw:focus:ring-${mapping[props.type]}-400 tw:p-1.5 tw:hover:bg-${mapping[props.type]}-200 tw:inline-flex tw:items-center tw:justify-center tw:h-8 tw:w-8`,"aria-label":"Close",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{class:"tw:sr-only",children:"Close"}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("svg",{class:"tw:w-3 tw:h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})]})]})}},"./src/components/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const Button=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("button",{type:props.type,class:("full"==props.size?"tw:w-full":"")+" tw:my-2 tw:login-btn tw:bg-booker tw:text-white tw:font-bold tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors tw:cursor-pointer",children:props.text}),__WEBPACK_DEFAULT_EXPORT__=Button},"./src/components/Footer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>Footer});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const Footer=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("footer",{children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{id:"copyright",class:"tw:mt-3 tw:flex tw:items-center tw:justify-center tw:p-8",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("p",{class:"text-bold",children:["Booker 2025 - ",props.cd]})})}),__WEBPACK_DEFAULT_EXPORT__=Footer},"./src/components/Header.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>Header});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const Header=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("img",{class:"tw:h-12 tw:flex tw:ustify-center tw:items-center",src:props.src}),__WEBPACK_DEFAULT_EXPORT__=Header},"./src/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const __WEBPACK_DEFAULT_EXPORT__=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("h2",{class:"tw:text-2xl tw:font-bold tw:text-gray-900 tw:mb-8 tw:text-center",children:props.text})},"./src/components/Input.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>Input});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"),_Link__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/preact/dist/preact.module.js"),__webpack_require__("./src/components/Link.jsx"));const Input=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("label",{for:props.for,class:"tw:text-left tw:text-sm tw:font-bold tw:text-black-700",children:props.label}),"password"===props.type?(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{class:"tw:float-right",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_Link__WEBPACK_IMPORTED_MODULE_2__.N,{href:"/admin/portal/passwordrecovery",text:"Forgot password?"})}):"",(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("input",{autocomplete:"disable-autocomplete",class:"tw:w-full tw:mt-2 tw:mb-4 tw:px-4 tw:py-2 tw:border tw:border-gray-300 tw:rounded-md tw:hover:border-booker-400 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-booker-500 tw:focus:border-blue-500","data-val":props.dataVal,"data-val-length":props.dataValLength,"data-val-length-max":props.dataValLengthMax,maxlength:props.maxlength,type:props.type,id:props.id,name:props.name})]}),__WEBPACK_DEFAULT_EXPORT__=Input},"./src/components/Link.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,N:()=>Link});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const Link=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("a",{class:`${props.class?props.class:""} tw:text-sm tw:text-booker tw:hover:text-booker tw:font-bold`,href:props.href,children:props.text}),__WEBPACK_DEFAULT_EXPORT__=Link},"./src/components/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"),_Input__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/preact/dist/preact.module.js"),__webpack_require__("./src/components/Input.jsx")),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button.jsx");const __WEBPACK_DEFAULT_EXPORT__=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{class:"tw:relative tw:z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:fixed tw:inset-0 tw:bg-gray-500/75 tw:transition-opacity","aria-hidden":"true"}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:fixed tw:inset-0 tw:z-10 tw:w-screen tw:overflow-y-auto",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:flex tw:min-h-full tw:items-end tw:justify-center tw:p-4 tw:text-center tw:sm:items-center tw:sm:p-0",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{class:"tw:relative tw:transform tw:overflow-hidden tw:rounded-lg tw:bg-white tw:text-left tw:shadow-xl tw:transition-all tw:sm:my-8 tw:sm:w-full tw:sm:max-w-lg",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:bg-white tw:px-4 tw:pt-5 tw:pb-4 tw:sm:p-6 tw:sm:pb-4",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:sm:flex tw:sm:items-start",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{class:"tw:mt-3 tw:text-center tw:sm:mt-0 tw:sm:ml-4 tw:sm:text-left",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("h2",{class:"tw:text-base tw:font-semibold",id:"modal-title",children:props.title}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:mt-2",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("p",{class:"tw:text-sm tw:text-gray-500",children:props.msg})}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD)("div",{class:"tw:my-4",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_Input__WEBPACK_IMPORTED_MODULE_2__.p,{type:"text",label:"Mobile Number",id:"mobileNumber",name:"mobileNumber","data-valid":"false",pattern:"/^-?\\d+\\.?\\d*$/"}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_Input__WEBPACK_IMPORTED_MODULE_2__.p,{type:"text",label:"Confirm Mobile Number",id:"confirmMobileNumber",name:"confirmMobileNumber","data-valid":"false"})]})]})})}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("div",{class:"tw:bg-gray-50 tw:px-4 tw:py-3 tw:sm:flex tw:sm:flex-row-reverse tw:sm:px-6",children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"submit",text:"Update",size:""})})]})})})]})},"./src/components/Paragraph.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");__webpack_require__("./node_modules/preact/dist/preact.module.js");const __WEBPACK_DEFAULT_EXPORT__=props=>(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("p",{class:"tw:text tw:my-4",children:props.text})},"./src/stories/Master.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ForgottenPassword:()=>ForgottenPassword,Login:()=>Login,Otp:()=>Otp,PasswordRecovery:()=>PasswordRecovery,TwoFactorAuth:()=>TwoFactorAuth,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Master_stories});var jsxRuntime_module=__webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"),Header=(__webpack_require__("./node_modules/preact/dist/preact.module.js"),__webpack_require__("./src/components/Header.jsx")),Footer=__webpack_require__("./src/components/Footer.jsx");const components_Master=({validation,heading,children})=>(0,jsxRuntime_module.FD)(jsxRuntime_module.FK,{children:[(0,jsxRuntime_module.Y)("script",{src:"https://www.google.com/recaptcha/api.js",async:!0,defer:!0}),(0,jsxRuntime_module.FD)("body",{class:"tw:bg-gray-50 tw:px-4 tw:font-[Lato]",children:[(0,jsxRuntime_module.Y)("div",{class:"tw:flex tw:items-center tw:justify-center tw:p-8",children:(0,jsxRuntime_module.Y)(Header.Y,{src:"https://assets-global.website-files.com/61f27d3474c2ef62975a0106/61f27d3474c2ef78475a0118_Booker%20logo.svg"})}),heading,validation,(0,jsxRuntime_module.Y)("div",{class:"tw:flex tw:justify-center tw:bg-white tw:relative tw:border-solid tw:border tw:border-gray-50 tw:shadow-sm tw:border border-slate-100 tw:rounded-lg tw:max-w-lg tw:m-auto tw:p-8",children:(0,jsxRuntime_module.Y)("div",{class:"tw:max-w-sm tw:w-full",children:(0,jsxRuntime_module.Y)("form",{children})})}),(0,jsxRuntime_module.Y)(Footer.w,{cd:"CD1"})]})]});var Input=__webpack_require__("./src/components/Input.jsx"),Heading=__webpack_require__("./src/components/Heading.jsx"),Button=__webpack_require__("./src/components/Button.jsx"),Alert=__webpack_require__("./src/components/Alert.jsx"),Paragraph=__webpack_require__("./src/components/Paragraph.jsx"),Modal=__webpack_require__("./src/components/Modal.jsx"),Link=__webpack_require__("./src/components/Link.jsx");const Master_stories={title:"Pages/Master",component:components_Master},Template=args=>(0,jsxRuntime_module.Y)(jsxRuntime_module.FK,{children:(0,jsxRuntime_module.Y)(components_Master,{...args})}),Login=Template.bind({});Login.args={heading:(0,jsxRuntime_module.Y)(Heading.A,{text:"Administration Login"}),children:(0,jsxRuntime_module.FD)(jsxRuntime_module.FK,{children:[(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Input.A,{for:"Username",label:"Username",type:"text",dataVal:"true",dataValLength:"The field Username must be a string with a maximum length of 100.",dataValLengthMax:"100",maxLength:"100",id:"Username",name:"Username"})}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Input.A,{for:"Password",label:"Password",type:"password",dataVal:"true",dataValLength:"The field Password must be a string with a maximum length of 50.",dataValLengthMax:"100",maxLength:"50",id:"Password",name:"Password"})}),(0,jsxRuntime_module.Y)("div",{class:"g-recaptcha tw:my-4","data-sitekey":"6LfwwIQqAAAAANcF-qB9oAxVzaVwIum45H588zwK","data-callback":"onSubmit","data-badge":"inline","data-size":"invisible"}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Button.A,{type:"submit",text:"Sign In",size:"full"})})]})};const Validation=Template.bind({});Validation.args={...Login.args,validation:(0,jsxRuntime_module.Y)(jsxRuntime_module.FK,{children:(0,jsxRuntime_module.Y)(Alert.A,{msg:"Invalid User ID / Password combination, please try again",type:"danger"})})};const Otp=Template.bind({});Otp.args={heading:(0,jsxRuntime_module.Y)(Heading.A,{text:"Login Verification"}),children:(0,jsxRuntime_module.FD)(jsxRuntime_module.FK,{children:[(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Paragraph.A,{text:"We have sent you a verification code to your registered mobile number, please enter your 8-digit code in the box below to continue your login.      Didn't receive a SMS?"})}),(0,jsxRuntime_module.Y)(Link.A,{href:"#",id:"sendCode",text:"Click here to send a new code"}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Alert.A,{msg:"New login code has been sent via SMS",type:"success"})}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Alert.A,{msg:"You will be able to request another code in 30 seconds",type:"info"})}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Input.A,{for:"Username",label:"Verfication Code",type:"text",dataVal:"true",dataValLength:"The field Username must be a string with a maximum length of 100.",dataValLengthMax:"100",maxLength:"100",id:"Username",name:"Username"})}),(0,jsxRuntime_module.Y)("div",{class:"g-recaptcha tw:my-4","data-sitekey":"6LfwwIQqAAAAANcF-qB9oAxVzaVwIum45H588zwK","data-callback":"onSubmit","data-badge":"inline","data-size":"invisible"}),(0,jsxRuntime_module.FD)("div",{children:[(0,jsxRuntime_module.Y)(Button.A,{type:"submit",text:"Verify",size:"full"}),(0,jsxRuntime_module.Y)(Link.A,{href:"/admin/portal/login?action=cancel",text:"Cancel",class:"tw:text-center tw:block tw:my-4 tw:text-[16px]"})]})]})};const ForgottenPassword=Template.bind({});ForgottenPassword.args={heading:(0,jsxRuntime_module.Y)(Heading.A,{text:"Forgotten Password"}),children:(0,jsxRuntime_module.FD)(jsxRuntime_module.FK,{children:[(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Paragraph.A,{text:"If you have forgotten your website login password, fill this page in with your registered user ID."})}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Input.A,{for:"Username",label:"Enter your User ID",type:"text",dataVal:"true",dataValLength:"The field Username must be a string with a maximum length of 100.",dataValLengthMax:"100",maxLength:"100",id:"Username",name:"Username"})}),(0,jsxRuntime_module.Y)("div",{class:"g-recaptcha tw:my-4","data-sitekey":"6LfwwIQqAAAAANcF-qB9oAxVzaVwIum45H588zwK","data-callback":"onSubmit","data-badge":"inline","data-size":"invisible"}),(0,jsxRuntime_module.Y)("div",{children:(0,jsxRuntime_module.Y)(Button.A,{type:"submit",text:"Sign In",size:"full"})})]})};const TwoFactorAuth=Template.bind({});TwoFactorAuth.args={...Otp.Args,children:(0,jsxRuntime_module.Y)(jsxRuntime_module.FK,{children:(0,jsxRuntime_module.Y)(Modal.A,{title:"Two-Factor Authentication",msg:"As part of regular updates to the Booker Admin Portal, you will now be required to enter a mobile number for use with Two-Factor Authentication. Please enter your mobile number below. Once your number has been updated, you will be sent a One-Time Passcode to verify this is correct."})})};const PasswordRecovery=Template.bind({});PasswordRecovery.args={heading:(0,jsxRuntime_module.Y)(jsxRuntime_module.FK,{children:(0,jsxRuntime_module.Y)(Heading.A,{text:"Forgotten Password"})}),children:(0,jsxRuntime_module.FD)(jsxRuntime_module.FK,{children:[(0,jsxRuntime_module.Y)(Paragraph.A,{text:"If the user ID you have entered is valid and the account is active then a reset link will have been sent to you."}),(0,jsxRuntime_module.Y)(Button.A,{type:"button",size:"full",text:"Continue"})]})};const __namedExportsOrder=["Login","Validation","Otp","ForgottenPassword","TwoFactorAuth","PasswordRecovery"];Login.parameters={...Login.parameters,docs:{...Login.parameters?.docs,source:{originalSource:"args => <><Master {...args} /></>",...Login.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:"args => <><Master {...args} /></>",...Validation.parameters?.docs?.source}}},Otp.parameters={...Otp.parameters,docs:{...Otp.parameters?.docs,source:{originalSource:"args => <><Master {...args} /></>",...Otp.parameters?.docs?.source}}},ForgottenPassword.parameters={...ForgottenPassword.parameters,docs:{...ForgottenPassword.parameters?.docs,source:{originalSource:"args => <><Master {...args} /></>",...ForgottenPassword.parameters?.docs?.source}}},TwoFactorAuth.parameters={...TwoFactorAuth.parameters,docs:{...TwoFactorAuth.parameters?.docs,source:{originalSource:"args => <><Master {...args} /></>",...TwoFactorAuth.parameters?.docs?.source}}},PasswordRecovery.parameters={...PasswordRecovery.parameters,docs:{...PasswordRecovery.parameters?.docs,source:{originalSource:"args => <><Master {...args} /></>",...PasswordRecovery.parameters?.docs?.source}}}}}]);
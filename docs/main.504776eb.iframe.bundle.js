(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/NewWindowWithModal/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".backdrop {\n  position: fixed;\n  z-index: 1040;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.modal {\n  position: fixed;\n  width: 400px;\n  z-index: 1040;\n  top: 100px;\n  left: 100px;\n  border: 1px solid #e5e5e5;\n  background-color: white;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  padding: 20px;\n}",""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/NewWindow.stories.jsx":"./src/stories/NewWindow.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/NewWindowWithModal/NewWindowWithModal.stories.mdx":"./src/stories/NewWindowWithModal/NewWindowWithModal.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/hooks.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NewWindowContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useDocument}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),NewWindowContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useDocument=function useDocument(){var _useContext$document,_useContext;return null!==(_useContext$document=null===(_useContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NewWindowContext))||void 0===_useContext?void 0:_useContext.document)&&void 0!==_useContext$document?_useContext$document:window.document}},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react_dom_default=__webpack_require__.n(react_dom),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var hooks=__webpack_require__("./src/hooks.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function NewWindow(_ref){var children=_ref.children,onUnload=_ref.onUnload,placeHolder=_ref.placeHolder,title=_ref.title,_ref$copyStyleAndScri=_ref.copyStyleAndScripts,copyStyleAndScripts=void 0===_ref$copyStyleAndScri||_ref$copyStyleAndScri,_useState2=_slicedToArray(Object(react.useState)(),2),dest=_useState2[0],setDest=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(null),2),externalWindow=_useState4[0],setExternalWindow=_useState4[1],_onUnload=Object(react.useCallback)((function(){onUnload(),setDest(null)}),[onUnload,setDest]);Object(react.useEffect)((function(){var externalWindow=window.open("","","toolbar=no,width=720,height=480,left=200,top=200");externalWindow.document.write("<base href='"+window.location.href.split("#")[0]+"' /><body></body>"),setExternalWindow(externalWindow),externalWindow.document.title=title,"complete"===document.readyState||"interactive"===document.readyState?externalWindow.addEventListener("beforeunload",_onUnload):externalWindow.onload=function(){externalWindow.addEventListener("beforeunload",_onUnload)},window.addEventListener("beforeunload",(function(){return externalWindow.close()}));var containerEl=externalWindow.document.createElement("div");return externalWindow.document.body.appendChild(containerEl),externalWindow.document.body.style.position="absolute",setDest(containerEl),copyStyleAndScripts&&setTimeout((function(){!function copyResources(sourceDoc,targetDoc){Array.from(sourceDoc.styleSheets).forEach((function(styleSheet){try{if(styleSheet.cssRules){var newStyleEl=sourceDoc.createElement("style");Array.from(styleSheet.cssRules).forEach((function(cssRule){newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText))})),targetDoc.head.appendChild(newStyleEl)}else{var newLinkEl=sourceDoc.createElement("link");newLinkEl.rel="stylesheet",newLinkEl.href=styleSheet.href,targetDoc.head.appendChild(newLinkEl)}}catch(e){}}))}(document,externalWindow.document)})),function(){externalWindow.close(),setDest(null)}}),[setDest,title]);var contextValue=Object(react.useMemo)((function(){return{document:null==externalWindow?void 0:externalWindow.document,window:externalWindow,isOpen:!!externalWindow}}),[externalWindow]);return dest?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:placeHolder}),react_dom_default.a.createPortal(Object(jsx_runtime.jsx)(hooks.a.Provider,{value:contextValue,children:children}),dest)]}):children}NewWindow.propTypes={children:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node]).isRequired,onUnload:prop_types_default.a.func,placeholder:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node]),title:prop_types_default.a.string,copyStyleAndScripts:prop_types_default.a.bool},NewWindow.__docgenInfo={description:"",methods:[],displayName:"NewWindow",props:{copyStyleAndScripts:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Setting to false to disable the copy of the stylesheets and the scripts in the new page. The detached content may stop to work."},children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:"Element that will be shown in the window"},onUnload:{type:{name:"func"},required:!1,description:"Function invoked when the child window is closed"},placeholder:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1,description:"Content to show where the previous content was shown. It can be any JSX content (for instance, a button to re-attach the \nexternal window)"},title:{type:{name:"string"},required:!1,description:"Title of the external window"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/NewWindow.jsx"]={name:"NewWindow",docgenInfo:NewWindow.__docgenInfo,path:"src/NewWindow.jsx"});__webpack_exports__.b=NewWindow},"./src/stories/NewWindow.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DetachableContent",(function(){return DetachableContent}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"NewWindow",component:_index__WEBPACK_IMPORTED_MODULE_13__.b,parameters:{layout:"fullscreen"}};var DetachableContent=function DetachableContent(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1),2),isDetached=_useState2[0],setIsDetached=_useState2[1],content=Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{style:{backgroundColor:"red"},children:"Some Content that may be useful in another window"});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:function onClick(){return setIsDetached(!0)},children:"Detach the content"}),isDetached?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_index__WEBPACK_IMPORTED_MODULE_13__.b,{title:"My Detached Window",onUnload:function onUnload(){return setIsDetached(!1)},placeHolder:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("p",{children:["The content is detached - ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:function onClick(){return setIsDetached(!1)},children:"re-attach here"})]}),children:content}):content]})};DetachableContent.parameters=Object.assign({storySource:{source:"() => {\n  const [isDetached, setIsDetached] = useState(false);\n\n  const content = <div style={{backgroundColor: 'red'}}>Some Content that may be useful in another window</div>\n  return <>\n    <button onClick={() => setIsDetached(true)}>Detach the content</button>\n    {\n      isDetached \n        ? <NewWindow \n            title=\"My Detached Window\"\n            onUnload={() => setIsDetached(false)} \n            placeHolder={<p>The content is detached - <button onClick={() => setIsDetached(false)}>re-attach here</button></p>}\n          >\n          {content}\n        </NewWindow>\n        : content\n    }\n  </>\n}"}},DetachableContent.parameters),DetachableContent.__docgenInfo={description:"",methods:[],displayName:"DetachableContent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/NewWindow.stories.jsx"]={name:"DetachableContent",docgenInfo:DetachableContent.__docgenInfo,path:"src/stories/NewWindow.stories.jsx"})},"./src/stories/NewWindowWithModal/NewWindowWithModal.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"detachableContentWithModal",(function(){return NewWindowWithModal_stories_detachableContentWithModal}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),src=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./src/index.js")),Modal=__webpack_require__("./node_modules/react-overlays/esm/Modal.js"),hooks=__webpack_require__("./src/hooks.js"),jsx_runtime=(__webpack_require__("./src/stories/NewWindowWithModal/style.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Components_Backdrop=function Backdrop(props){return Object(jsx_runtime.jsx)("div",Object.assign({},props,{className:"backdrop"}))};function ModalExample(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),show=_useState2[0],setShow=_useState2[1];return Object(jsx_runtime.jsxs)("div",{className:"modal-example",children:[Object(jsx_runtime.jsx)("button",{type:"button",className:"btn btn-primary mb-4",onClick:function onClick(){return setShow(!0)},children:"Open Modal"}),Object(jsx_runtime.jsx)("p",{children:"Click to get the full Modal experience!"}),Object(jsx_runtime.jsx)(Modal.a,{className:"modal",show:show,onHide:function onHide(){return setShow(!1)},renderBackdrop:Components_Backdrop,"aria-labelledby":"modal-label",container:Object(hooks.b)().body,children:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h4",{id:"modal-label",children:"Text in a modal"}),Object(jsx_runtime.jsxs)("p",{children:["The modal works because of `container=","{","useDocument()","}","` props passed to the Modal component."]}),Object(jsx_runtime.jsx)(ModalExample,{})]})})]})}Components_Backdrop.displayName="Backdrop",ModalExample.displayName="ModalExample";var Components_DetachableContentWithModal=function DetachableContentWithModal(){var _useState4=_slicedToArray(Object(react.useState)(!1),2),isDetached=_useState4[0],setIsDetached=_useState4[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return setIsDetached(!0)},children:"Detach the content"}),isDetached?Object(jsx_runtime.jsx)(src.b,{title:"My Detached Window",onUnload:function onUnload(){return setIsDetached(!1)},placeHolder:Object(jsx_runtime.jsxs)("p",{children:["The content is detached - ",Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return setIsDetached(!1)},children:"re-attach here"})]}),children:Object(jsx_runtime.jsx)(ModalExample,{})}):Object(jsx_runtime.jsx)(ModalExample,{})]})};Components_DetachableContentWithModal.__docgenInfo={description:"",methods:[],displayName:"DetachableContentWithModal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/NewWindowWithModal/Components.jsx"]={name:"DetachableContentWithModal",docgenInfo:Components_DetachableContentWithModal.__docgenInfo,path:"src/stories/NewWindowWithModal/Components.jsx"});var _excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.c,{title:"NewWindowWithModal",component:src.NewWindow,mdxType:"Meta"}),Object(esm.b)("p",null,"Opening modals in External Windows can be tricky because the modal, to be rendered as we expect,\nneeds to know the document in which it must render itself. This can be a problem in our context\nbecause the React computation to render element is done in the main window and only the render\nknows that a particular element must be render in another window (using ",Object(esm.b)("inlineCode",{parentName:"p"},"React.createPortal"),")."),Object(esm.b)("p",null,"So to resolve that problem we created an hook, ",Object(esm.b)("inlineCode",{parentName:"p"},"useDocument()")," that always returns the real document\nin which the component lives at the moment (i.e. main or detached window)."),Object(esm.b)("p",null,"The example below shows how it can be used with ",Object(esm.b)("inlineCode",{parentName:"p"},"React-Overlay"),", that is the library behind ",Object(esm.b)("inlineCode",{parentName:"p"},"React-Bootstrap"),"\nbut same approach can be used on every library passing the container of the modal, usually set to ",Object(esm.b)("inlineCode",{parentName:"p"},"document.body"),"."),Object(esm.b)(dist_esm.b,{mdxType:"Canvas"},Object(esm.b)(dist_esm.d,{name:"DetachableContentWithModal",mdxType:"Story"},Object(esm.b)(Components_DetachableContentWithModal,{mdxType:"DetachableContentWithModal"}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var NewWindowWithModal_stories_detachableContentWithModal=function detachableContentWithModal(){return Object(esm.b)(Components_DetachableContentWithModal,null)};NewWindowWithModal_stories_detachableContentWithModal.displayName="detachableContentWithModal",NewWindowWithModal_stories_detachableContentWithModal.storyName="DetachableContentWithModal",NewWindowWithModal_stories_detachableContentWithModal.parameters={storySource:{source:"<DetachableContentWithModal />"}};var componentMeta={title:"NewWindowWithModal",component:src.NewWindow,includeStories:["detachableContentWithModal"]},mdxStoryNameToKey={DetachableContentWithModal:"detachableContentWithModal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./src/stories/NewWindowWithModal/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/NewWindowWithModal/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(t){var r={};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=19)}([function(e,n,t){"use strict";var r=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||((r=r||Array.prototype.slice.call(n,0,i))[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.sendMessageEventToChild=n.waitForMessageQueue=n.sendMessageToParent=n.uninitializeCommunication=n.initializeCommunication=n.Communication=void 0;var i=t(4),o=t(7),a=t(3),s=function(){return function(){}}();n.Communication=s;var l=function(){function e(){}return e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.callbacks={},e}();function u(e,n,t){n instanceof Function?t=n:n instanceof Array&&(r=n);var r,n=s.parentWindow,e=y(e,r);o.GlobalVars.isFramelessWindow?s.currentWindow&&s.currentWindow.nativeInterface&&s.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(e)):(r=h(n),n&&r?n.postMessage(e,r):C(n).push(e)),t&&(l.callbacks[e.id]=t)}function d(e){var n,t;e&&e.data&&"object"==typeof e.data&&(c(n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin)&&(m(n,t),n===s.parentWindow?p(e):n===s.childWindow&&g(e)))}function c(e,n){return(!s.currentWindow||e!==s.currentWindow)&&(s.currentWindow&&s.currentWindow.location&&n&&n===s.currentWindow.location.origin||!!(i.validOriginRegExp.test(n.toLowerCase())||o.GlobalVars.additionalValidOriginsRegexp&&o.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function m(e,n){o.GlobalVars.isFramelessWindow||s.parentWindow&&!s.parentWindow.closed&&e!==s.parentWindow?s.childWindow&&!s.childWindow.closed&&e!==s.childWindow||(s.childWindow=e,s.childOrigin=n):(s.parentWindow=e,s.parentOrigin=n),s.parentWindow&&s.parentWindow.closed&&(s.parentWindow=null,s.parentOrigin=null),s.childWindow&&s.childWindow.closed&&(s.childWindow=null,s.childOrigin=null),b(s.parentWindow),b(s.childWindow)}function p(e){var n,t;"id"in e.data&&"number"==typeof e.data.id?(t=e.data,(n=l.callbacks[t.id])&&(n.apply(null,r(r([],t.args,!0),[t.isPartialResponse],!1)),f(e)||delete l.callbacks[t.id])):"func"in e.data&&"string"==typeof e.data.func&&(t=e.data,(0,a.callHandler)(t.func,t.args))}function f(e){return!0===e.data.isPartialResponse}function g(e){var r,n;"id"in e.data&&"func"in e.data&&(r=e.data,e=(n=(0,a.callHandler)(r.func,r.args))[0],n=n[1],e&&void 0!==n?v(r.id,Array.isArray(n)?n:[n]):u(r.func,r.args,function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];s.childWindow&&(e=n.pop(),v(r.id,n,e))}))}function C(e){return e===s.parentWindow?l.parentMessageQueue:e===s.childWindow?l.childMessageQueue:[]}function h(e){return e===s.parentWindow?s.parentOrigin:e===s.childWindow?s.childOrigin:null}function b(e){for(var n=h(e),t=C(e);e&&n&&0<t.length;)e.postMessage(t.shift(),n)}function v(e,n,t){var r=s.childWindow,n=P(e,n,t),t=h(r);r&&t&&r.postMessage(n,t)}function y(e,n){return{id:l.nextMessageId++,func:e,timestamp:Date.now(),args:n||[]}}function P(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function T(e,n){return{func:e,args:n||[]}}n.initializeCommunication=function(e,n){l.messageListener=function(e){return d(e)},s.currentWindow=s.currentWindow||window,s.parentWindow=s.currentWindow.parent!==s.currentWindow.self?s.currentWindow.parent:s.currentWindow.opener,(s.parentWindow||n)&&s.currentWindow.addEventListener("message",l.messageListener,!1),s.parentWindow||(o.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=p);try{s.parentOrigin="*",u("initialize",[i.version],e)}finally{s.parentOrigin=null}},n.uninitializeCommunication=function(){s.currentWindow.removeEventListener("message",l.messageListener,!1),s.parentWindow=null,s.parentOrigin=null,s.childWindow=null,s.childOrigin=null,l.parentMessageQueue=[],l.childMessageQueue=[],l.nextMessageId=0,l.callbacks={}},n.sendMessageToParent=u,n.waitForMessageQueue=function(e,n){var t=s.currentWindow.setInterval(function(){0===C(e).length&&(clearInterval(t),n())},100)},n.sendMessageEventToChild=function(e,n){var t=s.childWindow,e=T(e,n),n=h(t);t&&n?t.postMessage(e,n):C(t).push(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.processAdditionalValidOrigins=n.isApiSupportedOnMobile=n.isHostClientMobile=n.isAPISupportedByPlatform=n.ensureInitialized=void 0;var r=t(2),i=t(6),o=t(4),a=t(7),s=t(5);function l(e){void 0===e&&(e=o.defaultSDKVersionForCompatCheck);e=(0,s.compareSDKVersions)(a.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(e)&&0<=e}function u(){return a.GlobalVars.hostClientType==r.HostClientType.android||a.GlobalVars.hostClientType==r.HostClientType.ios}n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!a.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(a.GlobalVars.frameContext&&e&&0<e.length){for(var t=!1,r=0;r<e.length;r++)if(e[r]===a.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+a.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=l,n.isHostClientMobile=u,n.isApiSupportedOnMobile=function(e){return void 0===e&&(e=o.defaultSDKVersionForCompatCheck),u()?l(e)?null:{errorCode:i.ErrorCode.OLD_PLATFORM}:{errorCode:i.ErrorCode.NOT_SUPPORTED_ON_PLATFORM}},n.processAdditionalValidOrigins=function(e){var e=a.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&o.userOriginUrlValidationRegExp.test(e)})),n={},e=e.filter(function(e){return!n[e]&&(n[e]=!0)});a.GlobalVars.additionalValidOrigins=e,0<a.GlobalVars.additionalValidOrigins.length?a.GlobalVars.additionalValidOriginsRegexp=(0,s.generateRegExpFromUrls)(a.GlobalVars.additionalValidOrigins):a.GlobalVars.additionalValidOriginsRegexp=null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ChannelType=n.TaskModuleDimension=n.UserTeamRole=n.TeamType=n.FrameContexts=n.HostClientType=void 0,function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";var i=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||((r=r||Array.prototype.slice.call(n,0,i))[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.registerBeforeUnloadHandler=n.registerOnLoadHandler=n.registerFocusEnterHandler=n.registerBackButtonHandler=n.handleThemeChange=n.registerOnThemeChangeHandler=n.removeHandler=n.registerHandler=n.callHandler=n.initializeHandlers=void 0;var r=t(8),o=t(0),a=function(){function e(){}return e.handlers={},e}();function s(e){a.themeChangeHandler&&a.themeChangeHandler(e),o.Communication.childWindow&&(0,o.sendMessageEventToChild)("themeChange",[e])}function l(){a.backButtonPressHandler&&a.backButtonPressHandler()||(0,r.navigateBack)()}function u(e){a.focusEnterHandler&&a.focusEnterHandler(e)}function d(e){a.loadHandler&&a.loadHandler(e),o.Communication.childWindow&&(0,o.sendMessageEventToChild)("load",[e])}function c(){function e(){(0,o.sendMessageToParent)("readyToUnload",[])}a.beforeUnloadHandler&&a.beforeUnloadHandler(e)||e()}n.initializeHandlers=function(){a.handlers.themeChange=s,a.handlers.backButtonPress=l,a.handlers.load=d,a.handlers.beforeUnload=c,a.handlers.focusEnter=u},n.callHandler=function(e,n){return(e=a.handlers[e])?[!0,e.apply(this,n)]:[!1,void 0]},n.registerHandler=function(e,n,t,r){void 0===t&&(t=!0),void 0===r&&(r=[]),n?(a.handlers[e]=n,t&&(0,o.sendMessageToParent)("registerHandler",i([e],r,!0))):delete a.handlers[e]},n.removeHandler=function(e){delete a.handlers[e]},n.registerOnThemeChangeHandler=function(e){(a.themeChangeHandler=e)&&(0,o.sendMessageToParent)("registerHandler",["themeChange"])},n.handleThemeChange=s,n.registerBackButtonHandler=function(e){(a.backButtonPressHandler=e)&&(0,o.sendMessageToParent)("registerHandler",["backButton"])},n.registerFocusEnterHandler=function(e){(a.focusEnterHandler=e)&&(0,o.sendMessageToParent)("registerHandler",["focusEnter"])},n.registerOnLoadHandler=function(e){(a.loadHandler=e)&&(0,o.sendMessageToParent)("registerHandler",["load"])},n.registerBeforeUnloadHandler=function(e){(a.beforeUnloadHandler=e)&&(0,o.sendMessageToParent)("registerHandler",["beforeUnload"])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.userOriginUrlValidationRegExp=n.validOriginRegExp=n.validOrigins=n.scanBarCodeAPIMobileSupportVersion=n.getMediaCallbackSupportVersion=n.mediaAPISupportVersion=n.captureImageMobileSupportVersion=n.peoplePickerRequiredVersion=n.locationAPIsRequiredVersion=n.getUserJoinedTeamsSupportedAndroidClientVersion=n.imageOutputFormatsAPISupportVersion=n.nonFullScreenVideoModeAPISupportVersion=n.videoAndImageMediaAPISupportVersion=n.defaultSDKVersionForCompatCheck=n.version=void 0;t=t(5);n.version="1.11.0",n.defaultSDKVersionForCompatCheck="2.0.1",n.videoAndImageMediaAPISupportVersion="2.0.2",n.nonFullScreenVideoModeAPISupportVersion="2.0.3",n.imageOutputFormatsAPISupportVersion="2.0.4",n.getUserJoinedTeamsSupportedAndroidClientVersion="2.0.1",n.locationAPIsRequiredVersion="1.9.0",n.peoplePickerRequiredVersion="2.0.0",n.captureImageMobileSupportVersion="1.7.0",n.mediaAPISupportVersion="1.8.0",n.getMediaCallbackSupportVersion="2.0.0",n.scanBarCodeAPIMobileSupportVersion="1.9.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.live.com","https://local.teams.live.com:8080","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com"],n.validOriginRegExp=(0,t.generateRegExpFromUrls)(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.generateGUID=n.compareSDKVersions=n.getGenericOnCompleteHandler=n.generateRegExpFromUrls=void 0;var r=t(22);function i(e){for(var n="^",t=e.split("."),r=0;r<t.length;r++)n+=(0<r?"[.]":"")+t[r].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+i(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(t){return function(e,n){if(!e)throw new Error(t||n)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),r=n.split(".");function i(e){return/^\d+$/.test(e)}if(!t.every(i)||!r.every(i))return NaN;for(;t.length<r.length;)t.push("0");for(;r.length<t.length;)r.push("0");for(var o=0;o<t.length;++o)if(Number(t[o])!=Number(r[o]))return Number(t[o])>Number(r[o])?1:-1;return 0},n.generateGUID=function(){return r.v4()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorCode=n.FileOpenPreference=void 0,function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(n.FileOpenPreference||(n.FileOpenPreference={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.GlobalVars=void 0;var r=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.printCapabilityEnabled=!1,e}();n.GlobalVars=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sharing=n.video=n.people=n.monetization=n.meeting=n.location=n.media=n.ParentAppWindow=n.ChildAppWindow=n.tasks=n.settings=n.navigateToTab=n.navigateCrossDomain=n.navigateBack=n.returnFocus=n.shareDeepLink=n.setFrameContext=n.registerAppButtonHoverLeaveHandler=n.registerAppButtonHoverEnterHandler=n.registerAppButtonClickHandler=n.registerOnThemeChangeHandler=n.registerOnLoadHandler=n.registerFullScreenHandler=n.registerEnterSettingsHandler=n.registerFocusEnterHandler=n.registerBeforeUnloadHandler=n.registerBackButtonHandler=n.print=n.initializeWithFrameContext=n.initialize=n.getTabInstances=n.getMruTabInstances=n.getContext=n.executeDeepLink=n.enablePrintCapability=n.FileOpenPreference=n.ErrorCode=n.ChannelType=n.UserTeamRole=n.TeamType=n.TaskModuleDimension=n.HostClientType=n.FrameContexts=n.authentication=n.appInitialization=void 0;var r=t(25);Object.defineProperty(n,"appInitialization",{enumerable:!0,get:function(){return r.appInitialization}});var i=t(11);Object.defineProperty(n,"authentication",{enumerable:!0,get:function(){return i.authentication}});var o=t(2);Object.defineProperty(n,"FrameContexts",{enumerable:!0,get:function(){return o.FrameContexts}}),Object.defineProperty(n,"HostClientType",{enumerable:!0,get:function(){return o.HostClientType}}),Object.defineProperty(n,"TaskModuleDimension",{enumerable:!0,get:function(){return o.TaskModuleDimension}}),Object.defineProperty(n,"TeamType",{enumerable:!0,get:function(){return o.TeamType}}),Object.defineProperty(n,"UserTeamRole",{enumerable:!0,get:function(){return o.UserTeamRole}}),Object.defineProperty(n,"ChannelType",{enumerable:!0,get:function(){return o.ChannelType}});var a=t(6);Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return a.ErrorCode}}),Object.defineProperty(n,"FileOpenPreference",{enumerable:!0,get:function(){return a.FileOpenPreference}});var s=t(26);Object.defineProperty(n,"enablePrintCapability",{enumerable:!0,get:function(){return s.enablePrintCapability}}),Object.defineProperty(n,"executeDeepLink",{enumerable:!0,get:function(){return s.executeDeepLink}}),Object.defineProperty(n,"getContext",{enumerable:!0,get:function(){return s.getContext}}),Object.defineProperty(n,"getMruTabInstances",{enumerable:!0,get:function(){return s.getMruTabInstances}}),Object.defineProperty(n,"getTabInstances",{enumerable:!0,get:function(){return s.getTabInstances}}),Object.defineProperty(n,"initialize",{enumerable:!0,get:function(){return s.initialize}}),Object.defineProperty(n,"initializeWithFrameContext",{enumerable:!0,get:function(){return s.initializeWithFrameContext}}),Object.defineProperty(n,"print",{enumerable:!0,get:function(){return s.print}}),Object.defineProperty(n,"registerBackButtonHandler",{enumerable:!0,get:function(){return s.registerBackButtonHandler}}),Object.defineProperty(n,"registerBeforeUnloadHandler",{enumerable:!0,get:function(){return s.registerBeforeUnloadHandler}}),Object.defineProperty(n,"registerFocusEnterHandler",{enumerable:!0,get:function(){return s.registerFocusEnterHandler}}),Object.defineProperty(n,"registerEnterSettingsHandler",{enumerable:!0,get:function(){return s.registerEnterSettingsHandler}}),Object.defineProperty(n,"registerFullScreenHandler",{enumerable:!0,get:function(){return s.registerFullScreenHandler}}),Object.defineProperty(n,"registerOnLoadHandler",{enumerable:!0,get:function(){return s.registerOnLoadHandler}}),Object.defineProperty(n,"registerOnThemeChangeHandler",{enumerable:!0,get:function(){return s.registerOnThemeChangeHandler}}),Object.defineProperty(n,"registerAppButtonClickHandler",{enumerable:!0,get:function(){return s.registerAppButtonClickHandler}}),Object.defineProperty(n,"registerAppButtonHoverEnterHandler",{enumerable:!0,get:function(){return s.registerAppButtonHoverEnterHandler}}),Object.defineProperty(n,"registerAppButtonHoverLeaveHandler",{enumerable:!0,get:function(){return s.registerAppButtonHoverLeaveHandler}}),Object.defineProperty(n,"setFrameContext",{enumerable:!0,get:function(){return s.setFrameContext}}),Object.defineProperty(n,"shareDeepLink",{enumerable:!0,get:function(){return s.shareDeepLink}});var l=t(27);Object.defineProperty(n,"returnFocus",{enumerable:!0,get:function(){return l.returnFocus}}),Object.defineProperty(n,"navigateBack",{enumerable:!0,get:function(){return l.navigateBack}}),Object.defineProperty(n,"navigateCrossDomain",{enumerable:!0,get:function(){return l.navigateCrossDomain}}),Object.defineProperty(n,"navigateToTab",{enumerable:!0,get:function(){return l.navigateToTab}});var u=t(12);Object.defineProperty(n,"settings",{enumerable:!0,get:function(){return u.settings}});var d=t(28);Object.defineProperty(n,"tasks",{enumerable:!0,get:function(){return d.tasks}});var c=t(16);Object.defineProperty(n,"ChildAppWindow",{enumerable:!0,get:function(){return c.ChildAppWindow}}),Object.defineProperty(n,"ParentAppWindow",{enumerable:!0,get:function(){return c.ParentAppWindow}});var m=t(17);Object.defineProperty(n,"media",{enumerable:!0,get:function(){return m.media}});var p=t(29);Object.defineProperty(n,"location",{enumerable:!0,get:function(){return p.location}});var f=t(30);Object.defineProperty(n,"meeting",{enumerable:!0,get:function(){return f.meeting}});var g=t(31);Object.defineProperty(n,"monetization",{enumerable:!0,get:function(){return g.monetization}});var C=t(32);Object.defineProperty(n,"people",{enumerable:!0,get:function(){return C.people}});var h=t(33);Object.defineProperty(n,"video",{enumerable:!0,get:function(){return h.video}});var b=t(34);Object.defineProperty(n,"sharing",{enumerable:!0,get:function(){return b.sharing}})},function(e,n){var t,r,i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);i?(t=new Uint8Array(16),e.exports=function(){return i(t),t}):(r=new Array(16),e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r})},function(e,n){for(var r=[],t=0;t<256;++t)r[t]=(t+256).toString(16).substr(1);e.exports=function(e,n){var t=n||0;return[(n=r)[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[+t]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.authentication=void 0;var c=t(1),m=t(7),p=t(2),f=t(0),g=t(3);!function(e){var o,n;function a(){t();try{f.Communication.childWindow&&f.Communication.childWindow.close()}finally{f.Communication.childWindow=null,f.Communication.childOrigin=null}}function r(e){o=e,a();var n=o.width||600,t=o.height||400,n=Math.min(n,f.Communication.currentWindow.outerWidth-400),t=Math.min(t,f.Communication.currentWindow.outerHeight-200),r=document.createElement("a");r.href=o.url.replace("{oauthRedirectMethod}","web");var i=void 0!==f.Communication.currentWindow.screenLeft?f.Communication.currentWindow.screenLeft:f.Communication.currentWindow.screenX,e=void 0!==f.Communication.currentWindow.screenTop?f.Communication.currentWindow.screenTop:f.Communication.currentWindow.screenY;i+=f.Communication.currentWindow.outerWidth/2-n/2,e+=f.Communication.currentWindow.outerHeight/2-t/2,f.Communication.childWindow=f.Communication.currentWindow.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+e+", left="+i+", width="+n+", height="+t),f.Communication.childWindow?s():l("FailedToOpenWindow")}function t(){n&&(clearInterval(n),n=0),(0,g.removeHandler)("initialize"),(0,g.removeHandler)("navigateCrossDomain")}function s(){t(),n=f.Communication.currentWindow.setInterval(function(){if(!f.Communication.childWindow||f.Communication.childWindow.closed)l("CancelledByUser");else{var e=f.Communication.childOrigin;try{f.Communication.childOrigin="*",(0,f.sendMessageEventToChild)("ping")}finally{f.Communication.childOrigin=e}}},100),(0,g.registerHandler)("initialize",function(){return[p.FrameContexts.authentication,m.GlobalVars.hostClientType]}),(0,g.registerHandler)("navigateCrossDomain",function(){return!1})}function i(e){try{o&&o.successCallback&&o.successCallback(e)}finally{o=null,a()}}function l(e){try{o&&o.failureCallback&&o.failureCallback(e)}finally{o=null,a()}}function u(e,n,t){var r;e&&((r=document.createElement("a")).href=decodeURIComponent(e),r.host&&r.host!==window.location.host&&"outlook.office.com"===r.host&&-1<r.search.indexOf("client_type=Win32_Outlook")&&(n&&"result"===n&&(t&&(r.href=d(r.href,"result",t)),f.Communication.currentWindow.location.assign(d(r.href,"authSuccess",""))),n&&"reason"===n&&(t&&(r.href=d(r.href,"reason",t)),f.Communication.currentWindow.location.assign(d(r.href,"authFailure","")))))}function d(e,n,t){var r=e.indexOf("#"),i=(i=-1===r?"#":e.substr(r))+"&"+n+(""!==t?"="+t:"");return(e=-1===r?e:e.substr(0,r))+i}e.initialize=function(){(0,g.registerHandler)("authentication.authenticate.success",i,!1),(0,g.registerHandler)("authentication.authenticate.failure",l,!1)},e.registerAuthenticationHandlers=function(e){o=e},e.authenticate=function(e){var t=void 0!==e?e:o;(0,c.ensureInitialized)(p.FrameContexts.content,p.FrameContexts.sidePanel,p.FrameContexts.settings,p.FrameContexts.remove,p.FrameContexts.task,p.FrameContexts.stage,p.FrameContexts.meetingStage),m.GlobalVars.hostClientType===p.HostClientType.desktop||m.GlobalVars.hostClientType===p.HostClientType.android||m.GlobalVars.hostClientType===p.HostClientType.ios||m.GlobalVars.hostClientType===p.HostClientType.rigel||m.GlobalVars.hostClientType===p.HostClientType.teamsRoomsWindows||m.GlobalVars.hostClientType===p.HostClientType.teamsRoomsAndroid||m.GlobalVars.hostClientType===p.HostClientType.teamsPhones||m.GlobalVars.hostClientType===p.HostClientType.teamsDisplays?((e=document.createElement("a")).href=t.url,(0,f.sendMessageToParent)("authentication.authenticate",[e.href,t.width,t.height,t.isExternal],function(e,n){e?t.successCallback(n):t.failureCallback(n)})):r(t)},e.getAuthToken=function(t){(0,c.ensureInitialized)(),(0,f.sendMessageToParent)("authentication.getAuthToken",[t.resources,t.claims,t.silent],function(e,n){e?t.successCallback(n):t.failureCallback(n)})},e.getUser=function(t){(0,c.ensureInitialized)(),(0,f.sendMessageToParent)("authentication.getUser",function(e,n){e?t.successCallback(n):t.failureCallback(n)})},e.notifySuccess=function(e,n){u(n,"result",e),(0,c.ensureInitialized)(p.FrameContexts.authentication),(0,f.sendMessageToParent)("authentication.authenticate.success",[e]),(0,f.waitForMessageQueue)(f.Communication.parentWindow,function(){return setTimeout(function(){return f.Communication.currentWindow.close()},200)})},e.notifyFailure=function(e,n){u(n,"reason",e),(0,c.ensureInitialized)(p.FrameContexts.authentication),(0,f.sendMessageToParent)("authentication.authenticate.failure",[e]),(0,f.waitForMessageQueue)(f.Communication.parentWindow,function(){return setTimeout(function(){return f.Communication.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.settings=void 0;var s=t(1),l=t(2),u=t(5),d=t(0),c=t(3);!function(e){var n,t;function r(e){e=new i(e);n?n(e):e.notifySuccess()}e.initialize=function(){(0,c.registerHandler)("settings.save",r,!1),(0,c.registerHandler)("settings.remove",o,!1)},e.setValidityState=function(e){(0,s.ensureInitialized)(l.FrameContexts.settings,l.FrameContexts.remove),(0,d.sendMessageToParent)("settings.setValidityState",[e])},e.getSettings=function(e){(0,s.ensureInitialized)(l.FrameContexts.content,l.FrameContexts.settings,l.FrameContexts.remove,l.FrameContexts.sidePanel),(0,d.sendMessageToParent)("settings.getSettings",e)},e.setSettings=function(e,n){(0,s.ensureInitialized)(l.FrameContexts.content,l.FrameContexts.settings,l.FrameContexts.sidePanel),(0,d.sendMessageToParent)("settings.setSettings",[e],n||(0,u.getGenericOnCompleteHandler)())},e.registerOnSaveHandler=function(e){(0,s.ensureInitialized)(l.FrameContexts.settings),(n=e)&&(0,d.sendMessageToParent)("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){(0,s.ensureInitialized)(l.FrameContexts.remove,l.FrameContexts.settings),(t=e)&&(0,d.sendMessageToParent)("registerHandler",["remove"])};var i=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),(0,d.sendMessageToParent)("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),(0,d.sendMessageToParent)("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();function o(){var e=new a;t?t(e):e.notifySuccess()}var a=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),(0,d.sendMessageToParent)("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),(0,d.sendMessageToParent)("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.logs=void 0;var r=t(1),i=t(0),o=t(3);!function(){(n.logs||(n.logs={})).registerGetLogHandler=function(n){(0,r.ensureInitialized)(),n?(0,o.registerHandler)("log.request",function(){var e=n();(0,i.sendMessageToParent)("log.receive",[e])}):(0,o.removeHandler)("log.request")}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.registerUserSettingsChangeHandler=n.getConfigSetting=n.getChatMembers=n.registerCustomHandler=n.sendCustomEvent=n.sendCustomMessage=n.uploadCustomApp=n.showNotification=n.openFilePreview=n.exitFullscreen=n.enterFullscreen=n.getUserJoinedTeams=n.initializePrivateApis=void 0;var i=t(1),r=t(2),o=t(5),a=t(0),s=t(15),l=t(3),u=t(7),d=t(6),c=t(4);n.initializePrivateApis=function(){s.menus.initialize()},n.getUserJoinedTeams=function(e,n){if((0,i.ensureInitialized)(),(u.GlobalVars.hostClientType===r.HostClientType.android||u.GlobalVars.hostClientType===r.HostClientType.teamsRoomsAndroid||u.GlobalVars.hostClientType===r.HostClientType.teamsPhones||u.GlobalVars.hostClientType===r.HostClientType.teamsDisplays)&&!(0,i.isAPISupportedByPlatform)(c.getUserJoinedTeamsSupportedAndroidClientVersion)){var t={errorCode:d.ErrorCode.OLD_PLATFORM};throw new Error(JSON.stringify(t))}(0,a.sendMessageToParent)("getUserJoinedTeams",[n],e)},n.enterFullscreen=function(){(0,i.ensureInitialized)(r.FrameContexts.content),(0,a.sendMessageToParent)("enterFullscreen",[])},n.exitFullscreen=function(){(0,i.ensureInitialized)(r.FrameContexts.content),(0,a.sendMessageToParent)("exitFullscreen",[])},n.openFilePreview=function(e){(0,i.ensureInitialized)(r.FrameContexts.content),e=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId],(0,a.sendMessageToParent)("openFilePreview",e)},n.showNotification=function(e){(0,i.ensureInitialized)(r.FrameContexts.content),e=[e.message,e.notificationType],(0,a.sendMessageToParent)("showNotification",e)},n.uploadCustomApp=function(e,n){(0,i.ensureInitialized)(),(0,a.sendMessageToParent)("uploadCustomApp",[e],n||(0,o.getGenericOnCompleteHandler)())},n.sendCustomMessage=function(e,n,t){(0,i.ensureInitialized)(),(0,a.sendMessageToParent)(e,n,t)},n.sendCustomEvent=function(e,n){if((0,i.ensureInitialized)(),!a.Communication.childWindow)throw new Error("The child window has not yet been initialized or is not present");(0,a.sendMessageEventToChild)(e,n)},n.registerCustomHandler=function(e,t){var r=this;(0,i.ensureInitialized)(),(0,l.registerHandler)(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.apply(r,e)})},n.getChatMembers=function(e){(0,i.ensureInitialized)(),(0,a.sendMessageToParent)("getChatMembers",e)},n.getConfigSetting=function(e,n){(0,i.ensureInitialized)(),(0,a.sendMessageToParent)("getConfigSetting",[n],e)},n.registerUserSettingsChangeHandler=function(e,n){(0,i.ensureInitialized)(),(0,l.registerHandler)("userSettingsChange",n,!0,[e])}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.menus=void 0;var l=t(1),u=t(0),d=t(3);!function(e){var t,r,i,n=function(){return function(){this.enabled=!0,this.selected=!1}}();function o(e){i&&i(e)||((0,l.ensureInitialized)(),(0,u.sendMessageToParent)("viewConfigItemPress",[e]))}function a(e){t&&t(e)||((0,l.ensureInitialized)(),(0,u.sendMessageToParent)("handleNavBarMenuItemPress",[e]))}function s(e){r&&r(e)||((0,l.ensureInitialized)(),(0,u.sendMessageToParent)("handleActionMenuItemPress",[e]))}e.MenuItem=n,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),e.initialize=function(){(0,d.registerHandler)("navBarMenuItemPress",a,!1),(0,d.registerHandler)("actionMenuItemPress",s,!1),(0,d.registerHandler)("setModuleView",o,!1)},e.setUpViews=function(e,n){(0,l.ensureInitialized)(),i=n,(0,u.sendMessageToParent)("setUpViews",[e])},e.setNavBarMenu=function(e,n){(0,l.ensureInitialized)(),t=n,(0,u.sendMessageToParent)("setNavBarMenu",[e])},e.showActionMenu=function(e,n){(0,l.ensureInitialized)(),r=n,(0,u.sendMessageToParent)("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ParentAppWindow=n.ChildAppWindow=void 0;var r=t(1),i=t(2),o=t(5),a=t(0),s=t(3),t=function(){function e(){}return e.prototype.postMessage=function(e,n){(0,r.ensureInitialized)(),(0,a.sendMessageToParent)("messageForChild",[e],n||(0,o.getGenericOnCompleteHandler)())},e.prototype.addEventListener=function(e,n){"message"===e&&(0,s.registerHandler)("messageForParent",n)},e}();n.ChildAppWindow=t;t=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!1,configurable:!0}),e.prototype.postMessage=function(e,n){(0,r.ensureInitialized)(i.FrameContexts.task),(0,a.sendMessageToParent)("messageForParent",[e],n||(0,o.getGenericOnCompleteHandler)())},e.prototype.addEventListener=function(e,n){"message"===e&&(0,s.registerHandler)("messageForChild",n)},e}();n.ParentAppWindow=t},function(e,n,t){"use strict";var i=this&&this.__extends||function(){var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.media=void 0;var o=t(7),a=t(6),d=t(1),c=t(2),s=t(5),m=t(18),p=t(0),l=t(3),f=t(4);!function(e){!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var n=function(){return function(){}}();e.File=n,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");(0,d.ensureInitialized)(c.FrameContexts.content,c.FrameContexts.task),o.GlobalVars.isFramelessWindow?(0,d.isAPISupportedByPlatform)(f.captureImageMobileSupportVersion)?(0,p.sendMessageToParent)("captureImage",e):e({errorCode:a.ErrorCode.OLD_PLATFORM},void 0):e({errorCode:a.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var u=function(t){function e(e){void 0===e&&(e=null);var n=t.call(this)||this;return e&&(n.content=e.content,n.format=e.format,n.mimeType=e.mimeType,n.name=e.name,n.preview=e.preview,n.size=e.size),n}return i(e,t),e.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(0,d.ensureInitialized)(c.FrameContexts.content,c.FrameContexts.task),(0,d.isAPISupportedByPlatform)(f.mediaAPISupportVersion)?(0,m.validateGetMediaInputs)(this.mimeType,this.format,this.content)?(0,d.isAPISupportedByPlatform)(f.getMediaCallbackSupportVersion)?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:a.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:a.ErrorCode.OLD_PLATFORM},null)},e.prototype.getMediaViaCallback=function(t){var r={mediaMimeType:this.mimeType,assembleAttachment:[]},e=[this.content];(0,p.sendMessageToParent)("getMedia",e,function(e){var n;t&&(e&&e.error?t(e.error,null):e&&e.mediaChunk?e.mediaChunk.chunkSequence<=0?(n=(0,m.createFile)(r.assembleAttachment,r.mediaMimeType),t(e.error,n)):(e=(0,m.decodeAttachment)(e.mediaChunk,r.mediaMimeType),r.assembleAttachment.push(e)):t({errorCode:a.ErrorCode.INTERNAL_ERROR,message:"data received is null"},null))})},e.prototype.getMediaViaHandler=function(t){var r=(0,s.generateGUID)(),i={mediaMimeType:this.mimeType,assembleAttachment:[]},e=[r,this.content];this.content&&t&&(0,p.sendMessageToParent)("getMedia",e),(0,l.registerHandler)("getMedia"+r,function(e){var n;t&&((n=JSON.parse(e)).error?(t(n.error,null),(0,l.removeHandler)("getMedia"+r)):n.mediaChunk?n.mediaChunk.chunkSequence<=0?(e=(0,m.createFile)(i.assembleAttachment,i.mediaMimeType),t(n.error,e),(0,l.removeHandler)("getMedia"+r)):(n=(0,m.decodeAttachment)(n.mediaChunk,i.mediaMimeType),i.assembleAttachment.push(n)):(t({errorCode:a.ErrorCode.INTERNAL_ERROR,message:"data received is null"},null),(0,l.removeHandler)("getMedia"+r)))})},e}(n);e.Media=u;var t,r,n=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n.prototype.getMediaType=function(){return r.Video},n.prototype.notifyEventToApp=function(e){if(this.controllerCallback)switch(e){case t.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}},n}(function(){function e(e){this.controllerCallback=e}return e.prototype.notifyEventToHost=function(e,n){(0,d.ensureInitialized)(c.FrameContexts.content,c.FrameContexts.task);var t=(0,d.isApiSupportedOnMobile)(f.nonFullScreenVideoModeAPISupportVersion);t?n&&n(t):(e={mediaType:this.getMediaType(),mediaControllerEvent:e},(0,p.sendMessageToParent)("media.controller",[e],function(e){n&&n(e)}))},e.prototype.stop=function(e){this.notifyEventToHost(t.StopRecording,e)},e}());e.VideoController=n,function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(t=t||{}),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(r=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(s,l){if(!l)throw new Error("[select Media] Callback cannot be null");var e,n;(0,d.ensureInitialized)(c.FrameContexts.content,c.FrameContexts.task),(0,d.isAPISupportedByPlatform)(f.mediaAPISupportVersion)?(e=(0,m.isMediaCallSupportedOnMobile)(s))?l(e,null):(0,m.validateSelectMediaInputs)(s)?(0,p.sendMessageToParent)("selectMedia",[s],function(e,n,t){if(t)(0,m.isVideoControllerRegistered)(s)&&s.videoProps.videoController.notifyEventToApp(t);else if(n){for(var r=[],i=0,o=n;i<o.length;i++){var a=o[i];r.push(new u(a))}l(e,r)}else l(e,null)}):(n={errorCode:a.ErrorCode.INVALID_ARGUMENTS},l(n,null)):(n={errorCode:a.ErrorCode.OLD_PLATFORM},l(n,null))},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");(0,d.ensureInitialized)(c.FrameContexts.content,c.FrameContexts.task),(0,d.isAPISupportedByPlatform)(f.mediaAPISupportVersion)?(0,m.validateViewImagesInput)(e)?(0,p.sendMessageToParent)("viewImages",[e],n):n({errorCode:a.ErrorCode.INVALID_ARGUMENTS}):n({errorCode:a.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");(0,d.ensureInitialized)(c.FrameContexts.content,c.FrameContexts.task),o.GlobalVars.hostClientType!==c.HostClientType.desktop&&o.GlobalVars.hostClientType!==c.HostClientType.web&&o.GlobalVars.hostClientType!==c.HostClientType.rigel&&o.GlobalVars.hostClientType!==c.HostClientType.teamsRoomsWindows&&o.GlobalVars.hostClientType!==c.HostClientType.teamsRoomsAndroid&&o.GlobalVars.hostClientType!==c.HostClientType.teamsPhones&&o.GlobalVars.hostClientType!==c.HostClientType.teamsDisplays?(0,d.isAPISupportedByPlatform)(f.scanBarCodeAPIMobileSupportVersion)?(0,m.validateScanBarCodeInput)(n)?(0,p.sendMessageToParent)("media.scanBarCode",[n],e):e({errorCode:a.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:a.ErrorCode.OLD_PLATFORM},null):e({errorCode:a.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.validatePeoplePickerInput=n.validateScanBarCodeInput=n.validateViewImagesInput=n.validateGetMediaInputs=n.isMediaCallForNonFullScreenVideoMode=n.isMediaCallForVideoAndImageInputs=n.isMediaCallForImageOutputFormats=n.validateSelectMediaInputs=n.isVideoControllerRegistered=n.isMediaCallSupportedOnMobile=n.decodeAttachment=n.createFile=void 0;var r=t(17),i=t(4),o=t(1);function a(e){var n;return!((null==e?void 0:e.mediaType)!=r.media.MediaType.Image||null===(n=null==e?void 0:e.imageProps)||void 0===n||!n.imageOutputFormats)}function s(e){return!(!e||e.mediaType!=r.media.MediaType.VideoAndImage&&!e.videoAndImageProps)}function l(e){return!(!e||e.mediaType!=r.media.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,r=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==r&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),r++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),r=new Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);var o=new Uint8Array(r),n=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:n}},n.isMediaCallSupportedOnMobile=function(e){return s(e)?(0,o.isApiSupportedOnMobile)(i.videoAndImageMediaAPISupportVersion):l(e)?(0,o.isApiSupportedOnMobile)(i.nonFullScreenVideoModeAPISupportVersion):a(e)?(0,o.isApiSupportedOnMobile)(i.imageOutputFormatsAPISupportVersion):null},n.isVideoControllerRegistered=function(e){return!(e.mediaType!=r.media.MediaType.Video||!e.videoProps||!e.videoProps.videoController)},n.validateSelectMediaInputs=function(e){return!(null==e||10<e.maxMediaCount)},n.isMediaCallForImageOutputFormats=a,n.isMediaCallForVideoAndImageInputs=s,n.isMediaCallForNonFullScreenVideoMode=l,n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==r.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||10<e.length)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||60<e.timeOutIntervalInSec)},n.validatePeoplePickerInput=function(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}},function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){e[r=void 0===r?t:r]=n[t]}),i=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||r(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),i(t(20),n),i(t(8),n)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.teams=n.appEntity=n.files=n.remoteCamera=n.meetingRoom=n.conversations=n.registerUserSettingsChangeHandler=n.uploadCustomApp=n.registerCustomHandler=n.sendCustomEvent=n.showNotification=n.sendCustomMessage=n.openFilePreview=n.getUserJoinedTeams=n.getConfigSetting=n.getChatMembers=n.exitFullscreen=n.enterFullscreen=n.UserSettingTypes=n.ViewerActionTypes=n.NotificationTypes=n.logs=n.menus=n.bot=void 0;var r=t(21);Object.defineProperty(n,"bot",{enumerable:!0,get:function(){return r.bot}});var i=t(15);Object.defineProperty(n,"menus",{enumerable:!0,get:function(){return i.menus}});var o=t(13);Object.defineProperty(n,"logs",{enumerable:!0,get:function(){return o.logs}});var a=t(35);Object.defineProperty(n,"NotificationTypes",{enumerable:!0,get:function(){return a.NotificationTypes}}),Object.defineProperty(n,"ViewerActionTypes",{enumerable:!0,get:function(){return a.ViewerActionTypes}}),Object.defineProperty(n,"UserSettingTypes",{enumerable:!0,get:function(){return a.UserSettingTypes}});var s=t(14);Object.defineProperty(n,"enterFullscreen",{enumerable:!0,get:function(){return s.enterFullscreen}}),Object.defineProperty(n,"exitFullscreen",{enumerable:!0,get:function(){return s.exitFullscreen}}),Object.defineProperty(n,"getChatMembers",{enumerable:!0,get:function(){return s.getChatMembers}}),Object.defineProperty(n,"getConfigSetting",{enumerable:!0,get:function(){return s.getConfigSetting}}),Object.defineProperty(n,"getUserJoinedTeams",{enumerable:!0,get:function(){return s.getUserJoinedTeams}}),Object.defineProperty(n,"openFilePreview",{enumerable:!0,get:function(){return s.openFilePreview}}),Object.defineProperty(n,"sendCustomMessage",{enumerable:!0,get:function(){return s.sendCustomMessage}}),Object.defineProperty(n,"showNotification",{enumerable:!0,get:function(){return s.showNotification}}),Object.defineProperty(n,"sendCustomEvent",{enumerable:!0,get:function(){return s.sendCustomEvent}}),Object.defineProperty(n,"registerCustomHandler",{enumerable:!0,get:function(){return s.registerCustomHandler}}),Object.defineProperty(n,"uploadCustomApp",{enumerable:!0,get:function(){return s.uploadCustomApp}}),Object.defineProperty(n,"registerUserSettingsChangeHandler",{enumerable:!0,get:function(){return s.registerUserSettingsChangeHandler}});var l=t(36);Object.defineProperty(n,"conversations",{enumerable:!0,get:function(){return l.conversations}});var u=t(37);Object.defineProperty(n,"meetingRoom",{enumerable:!0,get:function(){return u.meetingRoom}});var d=t(38);Object.defineProperty(n,"remoteCamera",{enumerable:!0,get:function(){return d.remoteCamera}});var c=t(39);Object.defineProperty(n,"files",{enumerable:!0,get:function(){return c.files}});var m=t(40);Object.defineProperty(n,"appEntity",{enumerable:!0,get:function(){return m.appEntity}});var p=t(41);Object.defineProperty(n,"teams",{enumerable:!0,get:function(){return p.teams}})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.bot=void 0;var i=t(0),o=t(1);!function(e){e.sendQuery=function(e,t,r){(0,o.ensureInitialized)(),(0,i.sendMessageToParent)("bot.executeQuery",[e],function(e,n){(e?t:r)(n)})},e.getSupportedCommands=function(t,r){(0,o.ensureInitialized)(),(0,i.sendMessageToParent)("bot.getSupportedCommands",function(e,n){(e?t:r)(n)})},e.authenticate=function(e,t,r){(0,o.ensureInitialized)(),(0,i.sendMessageToParent)("bot.authenticate",[e],function(e,n){(e?t:r)(n)})},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var r=t(23),i=t(24),t=i;t.v1=r,t.v4=i,e.exports=t},function(e,n,t){var d,c,m=t(9),p=t(10),f=0,g=0;e.exports=function(e,n,t){var r=n&&t||0,i=n||[],o=(e=e||{}).node||d,a=void 0!==e.clockseq?e.clockseq:c;null!=o&&null!=a||(l=m(),null==o&&(o=d=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==a&&(a=c=16383&(l[6]<<8|l[7])));var s=void 0!==e.msecs?e.msecs:(new Date).getTime(),t=void 0!==e.nsecs?e.nsecs:g+1,l=s-f+(t-g)/1e4;if(l<0&&void 0===e.clockseq&&(a=a+1&16383),1e4<=(t=(l<0||f<s)&&void 0===e.nsecs?0:t))throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=s,c=a,t=(1e4*(268435455&(s+=122192928e5))+(g=t))%4294967296,i[r++]=t>>>24&255,i[r++]=t>>>16&255,i[r++]=t>>>8&255,i[r++]=255&t,s=s/4294967296*1e4&268435455,i[r++]=s>>>8&255,i[r++]=255&s,i[r++]=s>>>24&15|16,i[r++]=s>>>16&255,i[r++]=a>>>8|128,i[r++]=255&a;for(var u=0;u<6;++u)i[r+u]=o[u];return n||p(i)}},function(e,n,t){var a=t(9),s=t(10);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var o=0;o<16;++o)n[r+o]=i[o];return n||s(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appInitialization=void 0;var r=t(1),i=t(4),o=t(0);!function(n){n.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(n.FailedReason||(n.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(n.ExpectedFailureReason||(n.ExpectedFailureReason={})),n.notifyAppLoaded=function(){(0,r.ensureInitialized)(),(0,o.sendMessageToParent)(n.Messages.AppLoaded,[i.version])},n.notifySuccess=function(){(0,r.ensureInitialized)(),(0,o.sendMessageToParent)(n.Messages.Success,[i.version])},n.notifyFailure=function(e){(0,r.ensureInitialized)(),(0,o.sendMessageToParent)(n.Messages.Failure,[e.reason,e.message])},n.notifyExpectedFailure=function(e){(0,r.ensureInitialized)(),(0,o.sendMessageToParent)(n.Messages.ExpectedFailure,[e.reason,e.message])}}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeWithFrameContext=n.setFrameContext=n.executeDeepLink=n.shareDeepLink=n.getMruTabInstances=n.getTabInstances=n.registerEnterSettingsHandler=n.registerFocusEnterHandler=n.registerBeforeUnloadHandler=n.registerOnLoadHandler=n.registerBackButtonHandler=n.registerAppButtonHoverLeaveHandler=n.registerAppButtonHoverEnterHandler=n.registerAppButtonClickHandler=n.registerFullScreenHandler=n.registerOnThemeChangeHandler=n.getContext=n.print=n.enablePrintCapability=n._uninitialize=n._initialize=n.initialize=void 0;var r=t(1),i=t(7),o=t(4),a=t(12),s=t(5),l=t(13),u=t(2),d=t(0),c=t(11),m=t(14),p=t(3);function f(e,n){i.GlobalVars.initializeCalled||(i.GlobalVars.initializeCalled=!0,p.initializeHandlers(),(0,d.initializeCommunication)(function(e,n,t){void 0===t&&(t=o.defaultSDKVersionForCompatCheck),i.GlobalVars.frameContext=e,i.GlobalVars.hostClientType=n,i.GlobalVars.clientSupportedSDKVersion=t,i.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),i.GlobalVars.initializeCallbacks=[],i.GlobalVars.initializeCompleted=!0},n),c.authentication.initialize(),a.settings.initialize(),(0,m.initializePrivateApis)()),Array.isArray(n)&&(0,r.processAdditionalValidOrigins)(n),e&&(i.GlobalVars.initializeCompleted?e():i.GlobalVars.initializeCallbacks.push(e))}function g(){window.print()}function C(e){(0,r.ensureInitialized)(),p.registerOnThemeChangeHandler(e)}function h(e){(0,r.ensureInitialized)(),p.registerHandler("fullScreenChange",e)}function b(e){(0,r.ensureInitialized)(),p.registerBackButtonHandler(e)}function v(e){(0,r.ensureInitialized)(),p.registerOnLoadHandler(e)}function y(e){(0,r.ensureInitialized)(),p.registerBeforeUnloadHandler(e)}function P(e){(0,r.ensureInitialized)(),p.registerFocusEnterHandler(e)}function T(e){(0,r.ensureInitialized)(u.FrameContexts.content),(0,d.sendMessageToParent)("setFrameContext",[e])}n.initialize=f,n._initialize=function(e){d.Communication.currentWindow=e},n._uninitialize=function(){i.GlobalVars.initializeCalled&&(i.GlobalVars.frameContext&&(C(null),h(null),b(null),y(null),P(null),v(null),l.logs.registerGetLogHandler(null)),i.GlobalVars.frameContext===u.FrameContexts.settings&&a.settings.registerOnSaveHandler(null),i.GlobalVars.frameContext===u.FrameContexts.remove&&a.settings.registerOnRemoveHandler(null),i.GlobalVars.initializeCalled=!1,i.GlobalVars.initializeCompleted=!1,i.GlobalVars.initializeCallbacks=[],i.GlobalVars.additionalValidOrigins=[],i.GlobalVars.frameContext=null,i.GlobalVars.hostClientType=null,(i.GlobalVars.isFramelessWindow=!1,d.uninitializeCommunication)())},n.enablePrintCapability=function(){i.GlobalVars.printCapabilityEnabled||(i.GlobalVars.printCapabilityEnabled=!0,(0,r.ensureInitialized)(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(g(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=g,n.getContext=function(n){(0,r.ensureInitialized)(),(0,d.sendMessageToParent)("getContext",function(e){e.frameContext||(e.frameContext=i.GlobalVars.frameContext),n(e)})},n.registerOnThemeChangeHandler=C,n.registerFullScreenHandler=h,n.registerAppButtonClickHandler=function(e){(0,r.ensureInitialized)(u.FrameContexts.content),p.registerHandler("appButtonClick",e)},n.registerAppButtonHoverEnterHandler=function(e){(0,r.ensureInitialized)(u.FrameContexts.content),p.registerHandler("appButtonHoverEnter",e)},n.registerAppButtonHoverLeaveHandler=function(e){(0,r.ensureInitialized)(u.FrameContexts.content),p.registerHandler("appButtonHoverLeave",e)},n.registerBackButtonHandler=b,n.registerOnLoadHandler=v,n.registerBeforeUnloadHandler=y,n.registerFocusEnterHandler=P,n.registerEnterSettingsHandler=function(e){(0,r.ensureInitialized)(u.FrameContexts.content),p.registerHandler("changeSettings",e)},n.getTabInstances=function(e,n){(0,r.ensureInitialized)(),(0,d.sendMessageToParent)("getTabInstances",[n],e)},n.getMruTabInstances=function(e,n){(0,r.ensureInitialized)(),(0,d.sendMessageToParent)("getMruTabInstances",[n],e)},n.shareDeepLink=function(e){(0,r.ensureInitialized)(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.meetingStage),(0,d.sendMessageToParent)("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){(0,r.ensureInitialized)(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage,u.FrameContexts.meetingStage),(0,d.sendMessageToParent)("executeDeepLink",[e],n||(0,s.getGenericOnCompleteHandler)())},n.setFrameContext=T,n.initializeWithFrameContext=function(e,n,t){f(n,t),T(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.navigateBack=n.navigateCrossDomain=n.navigateToTab=n.returnFocus=void 0;var r=t(1),i=t(5),o=t(2),a=t(0);n.returnFocus=function(e){(0,r.ensureInitialized)(o.FrameContexts.content),(0,a.sendMessageToParent)("returnFocus",[e])},n.navigateToTab=function(e,n){(0,r.ensureInitialized)(),(0,a.sendMessageToParent)("navigateToTab",[e],n||(0,i.getGenericOnCompleteHandler)("Invalid internalTabInstanceId and/or channelId were/was provided"))},n.navigateCrossDomain=function(e,n){(0,r.ensureInitialized)(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage,o.FrameContexts.meetingStage),(0,a.sendMessageToParent)("navigateCrossDomain",[e],n||(0,i.getGenericOnCompleteHandler)("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))},n.navigateBack=function(e){(0,r.ensureInitialized)(),(0,a.sendMessageToParent)("navigateBack",[],e||(0,i.getGenericOnCompleteHandler)("Back navigation is not supported in the current client or context."))}},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]]);return t};Object.defineProperty(n,"__esModule",{value:!0}),n.tasks=void 0;var i=t(2),o=t(16),a=t(0),s=t(1);!function(e){e.startTask=function(e,n){return(0,s.ensureInitialized)(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.meetingStage),(0,a.sendMessageToParent)("tasks.startTask",[e],n),new o.ChildAppWindow},e.updateTask=function(e){(0,s.ensureInitialized)(i.FrameContexts.task),e.width,e.height;var n=r(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");(0,a.sendMessageToParent)("tasks.updateTask",[e])},e.submitTask=function(e,n){(0,s.ensureInitialized)(i.FrameContexts.task),(0,a.sendMessageToParent)("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.location=void 0;var r=t(6),i=t(1),o=t(2),a=t(0),s=t(4);!function(e){e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");(0,i.ensureInitialized)(o.FrameContexts.content,o.FrameContexts.task),(0,i.isAPISupportedByPlatform)(s.locationAPIsRequiredVersion)?e?(0,a.sendMessageToParent)("location.getLocation",[e],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");(0,i.ensureInitialized)(o.FrameContexts.content,o.FrameContexts.task),(0,i.isAPISupportedByPlatform)(s.locationAPIsRequiredVersion)?e?(0,a.sendMessageToParent)("location.showLocation",[e],n):n({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0):n({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.meeting=void 0;var r=t(0),i=t(3),o=t(1),a=t(2);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),(0,r.sendMessageToParent)("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),(0,r.sendMessageToParent)("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage,a.FrameContexts.settings,a.FrameContexts.content),(0,r.sendMessageToParent)("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel,a.FrameContexts.meetingStage),(0,r.sendMessageToParent)("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,n,t){if(!e)throw new Error("[request start live streaming] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.requestStartLiveStreaming",[n,t],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,i.registerHandler)("meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,n){if(!e)throw new Error("[share app content to stage] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.shareAppContentToStage",[n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,r.sendMessageToParent)("meeting.getAppContentStageSharingState",e)}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.monetization=void 0;var r=t(0),i=t(1),o=t(2);!function(){(n.monetization||(n.monetization={})).openPurchaseExperience=function(e,n){if(!e)throw new Error("[open purchase experience] Callback cannot be null");(0,i.ensureInitialized)(o.FrameContexts.content),(0,r.sendMessageToParent)("monetization.openPurchaseExperience",[n],e)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.people=void 0;var r=t(1),i=t(2),o=t(6),a=t(18),s=t(0),l=t(4);!function(){(n.people||(n.people={})).selectPeople=function(e,n){if(!e)throw new Error("[people picker] Callback cannot be null");(0,r.ensureInitialized)(i.FrameContexts.content,i.FrameContexts.task,i.FrameContexts.settings),(0,r.isAPISupportedByPlatform)(l.peoplePickerRequiredVersion)?(0,a.validatePeoplePickerInput)(n)?(0,s.sendMessageToParent)("people.selectPeople",[n],e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.video=void 0;var i=t(0),o=t(1),a=t(2),s=t(3);!function(e){function t(){(0,i.sendMessageToParent)("video.videoFrameProcessed")}function r(e){(0,i.sendMessageToParent)("video.notifyError",[e])}!function(e){e[e.NV12=0]="NV12"}(e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e[e.EffectChanged=0]="EffectChanged",e[e.EffectDisabled=1]="EffectDisabled"}(e.EffectChangeType||(e.EffectChangeType={})),e.registerForVideoFrame=function(n,e){(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,s.registerHandler)("video.newVideoFrame",function(e){void 0!==e&&n(e,t,r)}),(0,i.sendMessageToParent)("video.registerForVideoFrame",[e])},e.notifySelectedVideoEffectChanged=function(e,n){(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,i.sendMessageToParent)("video.videoEffectChanged",[e,n])},e.registerForVideoEffect=function(e){(0,o.ensureInitialized)(a.FrameContexts.sidePanel),(0,s.registerHandler)("video.effectParameterChange",e)}}(n.video||(n.video={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sharing=void 0;var a=t(1),s=t(0),l=t(6),u=t(2);!function(t){function r(e,n){if(e&&e.content&&e.content.length)return 1;n&&n({errorCode:l.ErrorCode.INVALID_ARGUMENTS,message:"Shared content is missing"})}function i(n,e){if(n.content.some(function(e){return!e.type}))e&&e({errorCode:l.ErrorCode.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"});else{if(!n.content.some(function(e){return e.type!==n.content[0].type}))return 1;e&&e({errorCode:l.ErrorCode.INVALID_ARGUMENTS,message:"Shared content must be of the same type"})}}function o(e,n){if("URL"===e.content[0].type){if(!e.content.some(function(e){return!e.url}))return 1;n&&n({errorCode:l.ErrorCode.INVALID_ARGUMENTS,message:"URLs are required for URL content types"})}else n&&n({errorCode:l.ErrorCode.INVALID_ARGUMENTS,message:"Content type is unsupported"})}t.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},t.shareWebContent=function(e,n){r(e,n)&&i(e,n)&&o(e,n)&&((0,a.ensureInitialized)(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.task,u.FrameContexts.stage,u.FrameContexts.meetingStage),(0,s.sendMessageToParent)(t.SharingAPIMessages.shareWebContent,[e],n))}}(n.sharing||(n.sharing={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.UserSettingTypes=n.ViewerActionTypes=n.NotificationTypes=void 0,function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(n.UserSettingTypes||(n.UserSettingTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.conversations=void 0;var r=t(1),o=t(2),a=t(0),s=t(3);!function(e){e.openConversation=function(i){(0,r.ensureInitialized)(o.FrameContexts.content),(0,a.sendMessageToParent)("conversations.openConversation",[{title:i.title,subEntityId:i.subEntityId,conversationId:i.conversationId,channelId:i.channelId,entityId:i.entityId}],function(e,n){if(!e)throw new Error(n)}),i.onStartConversation&&(0,s.registerHandler)("startConversation",function(e,n,t,r){return i.onStartConversation({subEntityId:e,conversationId:n,channelId:t,entityId:r})}),i.onCloseConversation&&(0,s.registerHandler)("closeConversation",function(e,n,t,r){return i.onCloseConversation({subEntityId:e,conversationId:n,channelId:t,entityId:r})})},e.closeConversation=function(){(0,r.ensureInitialized)(o.FrameContexts.content),(0,a.sendMessageToParent)("conversations.closeConversation"),(0,s.removeHandler)("startConversation"),(0,s.removeHandler)("closeConversation")}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.meetingRoom=void 0;var r=t(1),i=t(0),o=t(3);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),e.getPairedMeetingRoomInfo=function(e){(0,r.ensureInitialized)(),(0,i.sendMessageToParent)("meetingRoom.getPairedMeetingRoomInfo",e)},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");(0,r.ensureInitialized)(),(0,i.sendMessageToParent)("meetingRoom.sendCommandToPairedMeetingRoom",[e],n)},e.registerMeetingRoomCapabilitiesUpdateHandler=function(n){if(!n)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");(0,r.ensureInitialized)(),(0,o.registerHandler)("meetingRoom.meetingRoomCapabilitiesUpdate",function(e){(0,r.ensureInitialized)(),n(e)})},e.registerMeetingRoomStatesUpdateHandler=function(n){if(!n)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");(0,r.ensureInitialized)(),(0,o.registerHandler)("meetingRoom.meetingRoomStatesUpdate",function(e){(0,r.ensureInitialized)(),n(e)})}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.remoteCamera=void 0;var r=t(1),i=t(2),o=t(0),a=t(3);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,o.sendMessageToParent)("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,o.sendMessageToParent)("remoteCamera.requestControl",[e],n)},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,o.sendMessageToParent)("remoteCamera.sendControlCommand",[e],n)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,o.sendMessageToParent)("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,a.registerHandler)("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,a.registerHandler)("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,a.registerHandler)("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");(0,r.ensureInitialized)(i.FrameContexts.sidePanel),(0,a.registerHandler)("remoteCamera.sessionStatusChange",e)}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.files=void 0;var a=t(0),s=t(1),l=t(8);!function(e){!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(){(e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})).ClassMaterials="classMaterials"}(),function(){(e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})).Readonly="readonly"}(),e.getCloudStorageFolders=function(e,n){if((0,s.ensureInitialized)(l.FrameContexts.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");(0,a.sendMessageToParent)("files.getCloudStorageFolders",[e],n)},e.addCloudStorageFolder=function(e,n){if((0,s.ensureInitialized)(l.FrameContexts.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");(0,a.sendMessageToParent)("files.addCloudStorageFolder",[e],n)},e.deleteCloudStorageFolder=function(e,n,t){if((0,s.ensureInitialized)(l.FrameContexts.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");(0,a.sendMessageToParent)("files.deleteCloudStorageFolder",[e,n],t)},e.getCloudStorageFolderContents=function(e,n,t){if((0,s.ensureInitialized)(l.FrameContexts.content),!e||!n)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");(0,a.sendMessageToParent)("files.getCloudStorageFolderContents",[e,n],t)},e.openCloudStorageFile=function(e,n,t){if((0,s.ensureInitialized)(l.FrameContexts.content),!e||!n)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");(0,a.sendMessageToParent)("files.openCloudStorageFile",[e,n,t])},e.getExternalProviders=function(e,n){if(void 0===e&&(e=!1),(0,s.ensureInitialized)(l.FrameContexts.content),!n)throw new Error("[files.getExternalProviders] Callback cannot be null");(0,a.sendMessageToParent)("files.getExternalProviders",[e],n)},e.copyMoveFiles=function(e,n,t,r,i,o){if(void 0===i&&(i=!1),(0,s.ensureInitialized)(l.FrameContexts.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!o)throw new Error("[files.copyMoveFiles] callback cannot be null");(0,a.sendMessageToParent)("files.copyMoveFiles",[e,n,t,r,i],o)}}(n.files||(n.files={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appEntity=void 0;var i=t(0),o=t(1),a=t(8);!function(){(n.appEntity||(n.appEntity={})).selectAppEntity=function(e,n,t,r){if((0,o.ensureInitialized)(a.FrameContexts.content),!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!r)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");(0,i.sendMessageToParent)("appEntity.selectAppEntity",[e,n,t],r)}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.teams=void 0;var r=t(0),i=t(1),o=t(8);!function(e){!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,n){if((0,i.ensureInitialized)(o.FrameContexts.content),!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!n)throw new Error("[teams.getTeamChannels] Callback cannot be null");(0,r.sendMessageToParent)("teams.getTeamChannels",[e],n)},e.refreshSiteUrl=function(e,n){if((0,i.ensureInitialized)(),!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!n)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");(0,r.sendMessageToParent)("teams.refreshSiteUrl",[e],n)}}(n.teams||(n.teams={}))}])});

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(248);
;// CONCATENATED MODULE: ./src/utils.ts

let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.setAttribute("aria-label", config.name);
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            let input;
            let valueGetter;
            const defaultInputValue = (config.inputs[i].defaultValue) ? config.inputs[i].defaultValue : null;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            if (defaultInputValue) {
                                input.value = defaultInputValue;
                            }
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.setAttribute("aria-label", "input-" + config.name);
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.setAttribute("aria-label", "textarea-" + config.name);
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}
function initializeDownloadLinks() {
    const csv = "Id,Value\n1,Hello world!\n";
    const data = new Blob([csv]);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = URL.createObjectURL(data);
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.onclick = () => {
        const csv = "Id, Value\n1,Hello world!\n";
        const data = new Blob([csv]);
        let downloadLink = document.getElementById("hiddenDownloadLink");
        if (downloadLink == null) {
            downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'DownloadViaButton.csv');
            downloadLink.setAttribute('id', 'hiddenDownloadLink');
            document.body.appendChild(downloadLink);
        }
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        downloadLink.href = URL.createObjectURL(data);
        downloadLink.style.display = 'none';
        downloadLink.click();
    };
}
function outputTabRenderedLocation(getContext) {
    if (isInTeams()) {
        getContext(outputTabRenderedLocationInTeams);
    }
    else {
        add_page_header(`Currently running outside of Microsoft Teams.`);
    }
    function isInTeams() {
        if ((window.parent === window.self && window.nativeInterface) ||
            window.name === "embedded-page-container" ||
            window.name === "extension-tab-frame") {
            return true;
        }
        return false;
    }
}
function outputTabRenderedLocationInTeams(context) {
    var appLocation = 'unidentified location...';
    const perfData = window.performance;
    if (context.meetingId) {
        appLocation = 'Meeting';
    }
    else if (context.chatId) {
        appLocation = 'Chat';
    }
    else if (context.teamId && context.channelId) {
        appLocation = `${context.channelName} channel in ${context.teamName}`;
    }
    else {
        appLocation = 'Teams App';
    }
    if (isInConfig()) {
        appLocation = `${appLocation} (Config page)`;
    }
    else if (isInSidePanel()) {
        appLocation = `${appLocation} (Side Panel)`;
    }
    add_page_header(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`);
    function isInConfig() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.settings;
    }
    function isInSidePanel() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.sidePanel;
    }
}
;
function add_page_header(content) {
    var h2 = document.createElement("h2");
    h2.textContent = content;
    container.prepend(h2);
}

;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min.initialize();
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        initializeDownloadLinks();
        outputTabRenderedLocation(MicrosoftTeams_min.getContext);
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getContext(output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getTabInstances(output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getMruTabInstances(output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            }
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "navigateForward"
                }],
            action: function (navigateForward) {
                MicrosoftTeams_min.returnFocus(navigateForward);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            }
        });
        addModule({
            name: "registerEnterSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerEnterSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
                    output(`Hover leave event received`);
                });
            }
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "deepLinkParameters"
                }],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
            }
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "deepLink"
                }],
            action: function (deepLink) {
                MicrosoftTeams_min.executeDeepLink(deepLink);
            }
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            hasOutput: true,
            action: function (url, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: url,
                    isExternal: false,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    }
                });
            }
        });
        addModule({
            name: "authentication_externalBrowser",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "mockOAuth" // do not go to the actual oauth provider, for scenario testing purpose
                }],
            hasOutput: true,
            action: function (mockOAuth, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: `${window.location.origin}/auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}`,
                    isExternal: true,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                    }
                });
            }
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min.tasks.startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            }
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            }
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                MicrosoftTeams_min.authentication.notifyFailure(reason);
            }
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                }],
            action: function (result) {
                MicrosoftTeams_min.authentication.notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams_min.settings.setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave"
                    });
                    output("SaveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.saveEvent && window.saveEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            }
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "settings"
                }],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min.settings.setSettings(settings);
            }
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "validityState"
                }],
            action: function (validityState) {
                MicrosoftTeams_min.settings.setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.removeEvent && window.removeEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent && window.removeEvent.notifySuccess();
            }
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "filePreviewParameters"
                }],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min.openFilePreview(filePreviewParameters);
            }
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                },
                {
                    type: "string",
                    name: "appId"
                }],
            action: function (result, appId) {
                MicrosoftTeams_min.tasks.submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            hasOutput: true,
            action: function (taskInfo, output) {
                MicrosoftTeams_min.tasks.startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            }
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                MicrosoftTeams_min.tasks.updateTask(taskInfo);
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.showNotification(showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getChatMembers(output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min;
                MicrosoftTeams_min.getUserJoinedTeams(output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "readyToUnloadDelay"
                }],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                MicrosoftTeams_min.registerBeforeUnloadHandler(function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
                    return true;
                });
            }
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            }
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                totalStates++;
                window.history.pushState({ some: 'state', id: totalStates }, "tab state" + totalStates, '/testTab');
                output("total States: " + totalStates);
                window.addEventListener('popstate', function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " + event.state.id);
                    }
                }, false);
            }
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams_min.registerBackButtonHandler(function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            }
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "openConversationRequest"
                }],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            }
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.conversations.closeConversation();
            }
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams_min.media.captureImage((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " + file.format + ", size: " + file.size + ", mimeType: " + file.mimeType + ", content: " + content);
                });
            }
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    let message = "";
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        let preview = "";
                        let len = 20;
                        if (media.preview) {
                            len = Math.min(len, media.preview.length);
                            preview = media.preview.substr(0, len);
                        }
                        message += "[format: " + media.format + ", size: " + media.size
                            + ", mimeType: " + media.mimeType + ", content: " + media.content
                            + ", preview: " + preview + "],";
                    }
                    output(message);
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "inputParams",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (inputParams, output) => {
                MicrosoftTeams_min.media.selectMedia(inputParams, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const media = medias[0];
                    media.getMedia((gmErr, blob) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            if (reader.result) {
                                output("Received Blob");
                            }
                        };
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":5,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (selectMediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1 //microsoftTeams.ImageUriType.ID
                        });
                    }
                    MicrosoftTeams_min.media.viewImages(urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "imageUrls",
                    defaultValue: "[\"https://www.w3schools.com/images/picture.jpg\",\"https://www.w3schools.com/images/picture.jpg\"]"
                }],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2 //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams_min.media.viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            }
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "locationProps",
                    defaultValue: "{\"allowChooseLocation\":true,\"showMap\":true}"
                }],
            action: (locationProps, output) => {
                MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            }
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "location",
                    defaultValue: "{\"latitude\":17,\"longitude\":17}"
                }],
            action: (location, output) => {
                MicrosoftTeams_min.location.showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            }
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: "{\"timeOutIntervalInSec\":30}"
                }],
            action: (scanBarCodeConfig, output) => {
                MicrosoftTeams_min.media.scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
            }
        });
        addModule({
            name: "meeting.getMeetingDetails",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getMeetingDetails((err, getMeetingDetails) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(getMeetingDetails);
                });
            }
        });
        addModule({
            name: "monetization.openPurchaseExperience",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.monetization.openPurchaseExperience((err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(null);
                });
            }
        });
        addModule({
            name: "getIncomingClientAudioState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getIncomingClientAudioState((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            }
        });
        addModule({
            name: "toggleIncomingClientAudio",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.toggleIncomingClientAudio((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            }
        });
        addModule({
            name: "meeting.getAuthenticationTokenForAnonymousUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAuthenticationTokenForAnonymousUser((err, authenticationTokenOfAnonymousUser) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(authenticationTokenOfAnonymousUser);
                });
            }
        });
        addModule({
            name: "people.selectPeople",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "peoplePickerInputs",
                    defaultValue: "{\"title\":\"\", \"setSelected\":[], \"openOrgWideSearchInChatOrChannel\":false, \"singleSelect\":false}"
                }],
            action: (peoplePickerInputs, output) => {
                MicrosoftTeams_min.people.selectPeople((err, people) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("People length: " + people.length + " " + JSON.stringify(people));
                }, peoplePickerInputs);
            }
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({ reason: MicrosoftTeams_min.appInitialization.FailedReason.Other, message: err.message });
    }
};

;// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();

})();

/******/ })()
;
//# sourceMappingURL=app.js.map
!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,a,o,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=a;return i=a=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(O,t),s?b(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=o}function O(){var e=p();if(h(e))return S(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?g(n,o-(e-c)):n}(e))}function S(e){return l=void 0,m&&i?b(e):(i=a=void 0,u)}function w(){var e=p(),n=h(e);if(i=arguments,a=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(O,t),b(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,o=(d="maxWait"in n)?v(T(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=a=l=void 0},w.flush=function(){return void 0===l?u:S(p())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:i,maxWait:t,trailing:a})};var j=document.querySelector(".feedback-form"),h=(document.querySelector("button"),{});j.addEventListener("input",(function(e){var t=e.currentTarget.elements,n=t.email,i=t.message;h.email=n.value,h.message=i.value})),j.addEventListener("input",e(t)((function(){null===h.email&&null===h.message||localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));var O=localStorage.getItem("feedback-form-state");if(O){var S=JSON.parse(O);j.elements.email.value=S.email,j.elements.message.value=S.message}j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,i=t.message;return(""!==n.value||""!==i.value)&&(""===n.value||""===i.value?alert("Please fill in the missing gaps"):(h.email=n.value,h.message=i.value,console.log("Email: ".concat(h.email,", Message: ").concat(h.message)),e.currentTarget.reset(),void localStorage.removeItem("feedback-form-state")))}))}();
//# sourceMappingURL=03-feedback.450e6556.js.map
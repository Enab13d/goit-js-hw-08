function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(T,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function T(){var e=g();if(j(e))return w(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function w(e){return u=void 0,m&&i?b(e):(i=o=void 0,a)}function O(){var e=g(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(T,t),b(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");let h;const{elements:{email:j,message:T}}=b;let w;function O(){if(""!==j.value&&""!==T.value)return w={email:j.value,message:T.value}}b.addEventListener("submit",(e=>{if(e.preventDefault(),""===j.value||""===T.value)return alert("All fields should be fulfilled");O(),console.log(w),e.currentTarget.reset()})),b.addEventListener("input",e(t)((()=>{O();try{localStorage.setItem("feedback-form-state",JSON.stringify(w))}catch(e){console.log(e.message)}}),500)),(()=>{if(localStorage)try{h=JSON.parse(localStorage.getItem("feedback-form-state")),j.value=h.email,T.value=h.message}catch(e){console.log(e.message)}})();
//# sourceMappingURL=03-feedback.92606edf.js.map

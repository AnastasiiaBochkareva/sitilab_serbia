!function(){var t,e={6896:function(){var t=function(t){t&&(t.classList.remove("active"),t.querySelector(".accordion__body").style.maxHeight=null)};document.addEventListener("click",(function(e){if(e.target.closest(".accordion__head")){var i=e.target.closest(".accordion"),r=e.target.closest(".accordion__item"),s=i.querySelector(".accordion__item.active");r!==s?(!function(t){if(t){t.classList.add("active");var e=t.querySelector(".accordion__body");e.style.maxHeight="".concat(e.scrollHeight,"px")}}(r),t(s)):t(r)}}))},6376:function(t,e,i){"use strict";i(1800),i(6896),i(9344);function r(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var n,o=function(){return window.matchMedia("(max-width: 1024px)").matches};function u(t,e){return new Promise((function(i){var s,n=e,o=1===t.nodeType?t:document.querySelector(t);(s=o.classList).add.apply(s,r(n.split(" "))),o.addEventListener("animationend",(function(){var t;(t=o.classList).remove.apply(t,r(n.split(" "))),i("End")}),{once:!0})}))}function a(t){return t}function c(t){var e=t.draw,i=t.timing,r=void 0===i?a:i,s=t.duration,n=void 0===s?300:s;return new Promise((function(t){var i=performance.now();requestAnimationFrame((function s(o){var u=(o-i)/n;u>1&&(u=1);var a=r(u);e(a),u<1?requestAnimationFrame(s):t()}))}))}function l(t,e,i,r,s,n,o){try{var u=t[n](o),a=u.value}catch(t){return void i(t)}u.done?e(a):Promise.resolve(a).then(r,s)}n=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var i,r,s,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.target.closest(".tabs-nav__btn")){t.next=3;break}return t.abrupt("return");case 3:return r=i.parentElement,(s=r.querySelector(".tabs-nav__btn.active")).classList.remove("active"),n=document.getElementById(s.dataset.tabTarget),t.next=9,c({draw:function(t){n.style.opacity=1-t}});case 9:return n.style.display="none",n.style.opacity=null,i.classList.add("active"),(o=document.getElementById(i.dataset.tabTarget)).style.opacity=0,o.style.display=null,t.next=17,c({draw:function(t){o.style.opacity=t}});case 17:o.style.opacity=null;case 18:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(r,s){var n=t.apply(e,i);function o(t){l(n,r,s,o,u,"next",t)}function u(t){l(n,r,s,o,u,"throw",t)}o(void 0)}))});return function(t){return e.apply(this,arguments)}}(),document.addEventListener("click",n);i(1598),i(710),i(6947);function g(t,e,i,r,s,n,o){try{var u=t[n](o),a=u.value}catch(t){return void i(t)}u.done?e(a):Promise.resolve(a).then(r,s)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(r,s){var n=t.apply(e,i);function o(t){g(n,r,s,o,u,"next",t)}function u(t){g(n,r,s,o,u,"throw",t)}o(void 0)}))}}function f(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};w(this,t);var r={openSelector:"data-my-modal",closeSelector:"data-my-modal-close",teleportToBody:!1,afterOpen:function(){},beforeClose:function(){return!0},submitHandler:function(){return!0},resetHandler:function(){return!0}};this.config=m(m({},r),i),this.clickHandler=this.clickHandler.bind(this),this.eventBeforeOpen=new Event("modal:beforeOpen",{bubbles:!0}),this.eventAfterOpen=new Event("modal:afterOpen",{bubbles:!0}),this.eventBeforeClose=new Event("modal:beforeClose",{bubbles:!0}),this.eventAfterClose=new Event("modal:afterClose",{bubbles:!0}),this.eventSubmit=new Event("modal:submit",{bubbles:!0}),this.eventReset=new Event("modal:reset",{bubbles:!0}),this.shadow=document.querySelector(".my-modal-shadow")||document.createElement("div"),this.shadow.classList.add("my-modal-shadow"),document.body.append(this.shadow)}var e,i,r,s,n;return e=t,i=[{key:"init",value:function(){var t=this;document.addEventListener("click",this.clickHandler),document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.clickHandler(e)}))}},{key:"clickHandler",value:function(t){var e=this,i=t.target.closest("[".concat(this.config.openSelector,"]")),r=t.target.closest(".my-modal.active"),s=document.querySelector(".my-modal_menu.active");if(null!=s&&s.contains(t.target)||this.close(s),i){t.preventDefault();var n=i.getAttribute(this.config.openSelector),o=document.querySelector(n),u=document.querySelector("[".concat(this.config.closeSelector,'="').concat(n,'"]')),a=i.closest(".my-modal_drawer.active .my-modal__body");console.log(!a),a?(console.log(i),this.open(o)):(this.close(r,!1).then((function(){return e.open(o)})),null==i||i.classList.remove("active"),null==u||u.classList.add("active"))}if(r){if(t.target.hasAttribute("data-my-modal-submit"))return r.dispatchEvent(this.eventSubmit),void(this.config.submitHandler()&&this.close(r));if(t.target.hasAttribute("data-my-modal-reset"))return r.dispatchEvent(this.eventReset),void(this.config.resetHandler()&&this.close(r))}var c=t.target.closest("[".concat(this.config.closeSelector,"]")),l=!(null!=r&&r.contains(t.target)),g=f(document.querySelectorAll(".my-modal.active")),d=l&&g.length,v=document.querySelector("[".concat(this.config.openSelector,'="').concat(null==c?void 0:c.dataset.myModalClose,'"]'));if(g.length&&(c&&(null==c||c.classList.remove("active"),null==v||v.classList.add("active")),c||d)){if(d&&!c&&document.querySelector(".my-modal_mobile-menu.active"))return;this.closeAllActive(g)}}},{key:"open",value:function(e){return e?(e.dispatchEvent(this.eventBeforeOpen),"notification"===t.getMode(e)&&this.shadow.classList.contains("active")&&this.hideShadow(),(this.config.teleportToBody&&"BODY"!==e.parentNode.tagName&&"menu"!==t.getMode(e)||"notification"===t.getMode(e))&&document.body.append(e),e.classList.add("active"),this.intersectionObserver(e),this.config.afterOpen(),e.dispatchEvent(this.eventAfterOpen),["modal","drawer"].includes(t.getMode(e))&&(document.querySelector("body").style.overflow="hidden"),"drawer"===t.getMode(e)&&o()||"mobile-menu"===t.getMode(e)||this.showShadow(e),this):(console.warn("modal not found"),this)}},{key:"intersectionObserver",value:function(e){if(!o()&&"menu"===t.getMode(e)){var i=e.getBoundingClientRect();i.x+i.width>window.innerWidth?e.classList.add("my-modal_left"):e.classList.remove("my-modal_left")}}},{key:"close",value:(n=d(regeneratorRuntime.mark((function e(i){var r,s,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!(n.length>1&&void 0!==n[1])||n[1],i&&null!=i&&i.classList.contains("active")){e.next=3;break}return e.abrupt("return",this);case 3:if(this.config.beforeClose()){e.next=5;break}return e.abrupt("return",this);case 5:if(i.dispatchEvent(this.eventBeforeClose),"drawer"!==(s=t.getMode(i))){e.next=10;break}return e.next=10,u(i,"closeDrawer");case 10:if("modal"!==s){e.next=13;break}return e.next=13,u(i,"closeModal");case 13:if("notification"!==s){e.next=16;break}return e.next=16,u(i,"closeNotification");case 16:return document.querySelector("body").style.overflow=null,i.classList.remove("active","my-modal_left"),i.dispatchEvent(this.eventAfterClose),r&&this.hideShadow(i),e.abrupt("return",this);case 21:case"end":return e.stop()}}),e,this)}))),function(t){return n.apply(this,arguments)})},{key:"closeAllActive",value:function(t){var e=this;return t.forEach(function(){var t=d(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.close(i,!0);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this}},{key:"showShadow",value:function(e){return"menu"!==t.getMode(e)||o()?("notification"===t.getMode(e)||this.shadow.classList.add("active"),this):this}},{key:"hideShadow",value:(s=d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.shadow.classList.contains("active")){t.next=2;break}return t.abrupt("return",this);case 2:return this.shadow.classList.remove("active"),t.next=5,u(this.shadow,"disabling");case 5:return document.querySelector("body").style.overflow=null,t.abrupt("return",this);case 7:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})}],r=[{key:"getMode",value:function(t){return t?t.classList.contains("my-modal_menu")?"menu":t.classList.contains("my-modal_drawer")?"drawer":t.classList.contains("my-modal_notification")?"notification":t.classList.contains("my-modal_mobile-menu")?"mobile-menu":"modal":null}}],i&&b(e.prototype,i),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();(new y).init();var S=i(904),x=i(2090);document.addEventListener("DOMContentLoaded",(function(){if(document.documentElement.clientWidth<1270)new S.Z(".main-about__slider",{modules:[x.tl,x.pt],slidesPerView:"3",spaceBetween:20,observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!0,slideToClickedSlide:!0,pagination:{el:".slider-pagination",type:"bullets"},autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{700:{slidesPerView:"2.8",spaceBetween:10},500:{slidesPerView:"2",spaceBetween:5},300:{slidesPerView:"1"}}});new S.Z(".main-review__slider",{modules:[x.W_,x.tl,x.pt],slidesPerView:"4",spaceBetween:20,navigation:{prevEl:".slider-navigation_prev",nextEl:".slider-navigation_next"},observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!0,slideToClickedSlide:!0,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,breakpoints:{1270:{slidesPerView:"4",spaceBetween:20},1e3:{slidesPerView:"3.5"},900:{slidesPerView:"2.5"},600:{slidesPerView:"2"},374:{slidesPerView:"1.3",spaceBetween:10},300:{slidesPerView:"1"}}}),new S.Z(".article__slider ",{modules:[x.W_,x.tl,x.pt],slidesPerView:"4",spaceBetween:20,observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!0,breakpoints:{1440:{slidesPerView:"4",spaceBetween:20},1e3:{slidesPerView:"4"},900:{slidesPerView:"3.5"},600:{slidesPerView:"2.5"},376:{slidesPerView:"1.5",spaceBetween:10},300:{slidesPerView:"1.1",spaceBetween:10}}})}));i(3538)},1800:function(t,e,i){var r;(r=i(5896)).keys().forEach(r)},3538:function(){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#ui-container");if(t){var e=t.querySelectorAll(".tab");t.addEventListener("click",(function(i){var r,s=null===(r=i.target.dataset)||void 0===r?void 0:r.tab;if(s){var n=t.querySelector(".tab-".concat(s));e.forEach((function(t){t.style.display="none"})),n.style.display="block"}}))}}))},710:function(){document.addEventListener("click",(function(t){var e=t.target,i=e.closest(".btn-callback");i&&(i.classList.contains("active")?i.classList.remove("active"):i.classList.add("active"));var r=document.querySelector(".btn-callback"),s=e.closest(".btn-callback__whatsapp");!r.classList.contains("active")||i||s||r.classList.remove("active")}))},6947:function(){document.addEventListener("click",(function(t){t.target.closest(".btn-up")&&window.scrollTo(0,0)}))},1598:function(){document.addEventListener("click",(function(t){var e=t.target,i=e.closest(".header__lang");i&&(i.classList.contains("active")?i.classList.remove("active"):i.classList.add("active"));var r=document.querySelector(".header__lang"),s=e.closest(".header__lang_choosing");!r.classList.contains("active")||i||s||r.classList.remove("active")}))},1259:function(t,e,i){"use strict";i.r(e),e.default={id:"Group-usage",viewBox:"0 0 184 136",url:i.p+"./assets/img/icons/sprite.svg#Group",toString:function(){return this.url}}},4606:function(t,e,i){"use strict";i.r(e),e.default={id:"Ratings-usage",viewBox:"0 0 100 17",url:i.p+"./assets/img/icons/sprite.svg#Ratings",toString:function(){return this.url}}},9924:function(t,e,i){"use strict";i.r(e),e.default={id:"Vector-usage",viewBox:"0 0 183.33 136",url:i.p+"./assets/img/icons/sprite.svg#Vector",toString:function(){return this.url}}},3513:function(t,e,i){"use strict";i.r(e),e.default={id:"arrow-accordion-usage",viewBox:"0 0 13.9043 7.6543",url:i.p+"./assets/img/icons/sprite.svg#arrow-accordion",toString:function(){return this.url}}},1938:function(t,e,i){"use strict";i.r(e),e.default={id:"arrow-down-usage",viewBox:"0 0 15 8",url:i.p+"./assets/img/icons/sprite.svg#arrow-down",toString:function(){return this.url}}},8385:function(t,e,i){"use strict";i.r(e),e.default={id:"arrow-left-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#arrow-left",toString:function(){return this.url}}},617:function(t,e,i){"use strict";i.r(e),e.default={id:"arrow-right-top-usage",viewBox:"0 0 12 12",url:i.p+"./assets/img/icons/sprite.svg#arrow-right-top",toString:function(){return this.url}}},8592:function(t,e,i){"use strict";i.r(e),e.default={id:"arrow-right-usage",viewBox:"0 0 8 14",url:i.p+"./assets/img/icons/sprite.svg#arrow-right",toString:function(){return this.url}}},2813:function(t,e,i){"use strict";i.r(e),e.default={id:"ask-usage",viewBox:"0 0 182 159",url:i.p+"./assets/img/icons/sprite.svg#ask",toString:function(){return this.url}}},8642:function(t,e,i){"use strict";i.r(e),e.default={id:"btn-up-usage",viewBox:"0 0 18.8711 10.4839",url:i.p+"./assets/img/icons/sprite.svg#btn-up",toString:function(){return this.url}}},7618:function(t,e,i){"use strict";i.r(e),e.default={id:"burger-usage",viewBox:"0 0 23 17",url:i.p+"./assets/img/icons/sprite.svg#burger",toString:function(){return this.url}}},1996:function(t,e,i){"use strict";i.r(e),e.default={id:"callback-usage",viewBox:"0 0 64 64",url:i.p+"./assets/img/icons/sprite.svg#callback",toString:function(){return this.url}}},2318:function(t,e,i){"use strict";i.r(e),e.default={id:"cap-usage",viewBox:"0 0 60 61",url:i.p+"./assets/img/icons/sprite.svg#cap",toString:function(){return this.url}}},6685:function(t,e,i){"use strict";i.r(e),e.default={id:"car-usage",viewBox:"0 0 57 55",url:i.p+"./assets/img/icons/sprite.svg#car",toString:function(){return this.url}}},153:function(t,e,i){"use strict";i.r(e),e.default={id:"cashback-usage",viewBox:"0 0 80 80",url:i.p+"./assets/img/icons/sprite.svg#cashback",toString:function(){return this.url}}},5112:function(t,e,i){"use strict";i.r(e),e.default={id:"check-usage",viewBox:"0 0 17 12",url:i.p+"./assets/img/icons/sprite.svg#check",toString:function(){return this.url}}},4314:function(t,e,i){"use strict";i.r(e),e.default={id:"clear-usage",viewBox:"0 0 21 20",url:i.p+"./assets/img/icons/sprite.svg#clear",toString:function(){return this.url}}},9266:function(t,e,i){"use strict";i.r(e),e.default={id:"close-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#close-line",toString:function(){return this.url}}},2439:function(t,e,i){"use strict";i.r(e),e.default={id:"close-usage",viewBox:"0 0 16 16",url:i.p+"./assets/img/icons/sprite.svg#close",toString:function(){return this.url}}},2834:function(t,e,i){"use strict";i.r(e),e.default={id:"done-usage",viewBox:"0 0 49 50",url:i.p+"./assets/img/icons/sprite.svg#done",toString:function(){return this.url}}},3353:function(t,e,i){"use strict";i.r(e),e.default={id:"down-usage",viewBox:"0 0 20 20",url:i.p+"./assets/img/icons/sprite.svg#down",toString:function(){return this.url}}},4966:function(t,e,i){"use strict";i.r(e),e.default={id:"educ-usage",viewBox:"0 0 22 18.8237",url:i.p+"./assets/img/icons/sprite.svg#educ",toString:function(){return this.url}}},5428:function(t,e,i){"use strict";i.r(e),e.default={id:"expir-usage",viewBox:"0 0 22 20",url:i.p+"./assets/img/icons/sprite.svg#expir",toString:function(){return this.url}}},7054:function(t,e,i){"use strict";i.r(e),e.default={id:"female-sign-usage",viewBox:"0 0 18 28",url:i.p+"./assets/img/icons/sprite.svg#female-sign",toString:function(){return this.url}}},9837:function(t,e,i){"use strict";i.r(e),e.default={id:"female-usage",viewBox:"0 0 70 70",url:i.p+"./assets/img/icons/sprite.svg#female",toString:function(){return this.url}}},7154:function(t,e,i){"use strict";i.r(e),e.default={id:"file-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#file-line",toString:function(){return this.url}}},5709:function(t,e,i){"use strict";i.r(e),e.default={id:"file-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#file",toString:function(){return this.url}}},766:function(t,e,i){"use strict";i.r(e),e.default={id:"flower-sign-usage",viewBox:"0 0 22 30",url:i.p+"./assets/img/icons/sprite.svg#flower-sign",toString:function(){return this.url}}},7700:function(t,e,i){"use strict";i.r(e),e.default={id:"gen-usage",viewBox:"0 0 70 70",url:i.p+"./assets/img/icons/sprite.svg#gen",toString:function(){return this.url}}},4162:function(t,e,i){"use strict";i.r(e),e.default={id:"hopper-usage",viewBox:"0 0 20 20",url:i.p+"./assets/img/icons/sprite.svg#hopper",toString:function(){return this.url}}},6089:function(t,e,i){"use strict";i.r(e),e.default={id:"instagram-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#instagram",toString:function(){return this.url}}},320:function(t,e,i){"use strict";i.r(e),e.default={id:"logo-white-usage",viewBox:"0 0 200 61.7095",url:i.p+"./assets/img/icons/sprite.svg#logo-white",toString:function(){return this.url}}},4137:function(t,e,i){"use strict";i.r(e),e.default={id:"mail-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#mail-line",toString:function(){return this.url}}},5761:function(t,e,i){"use strict";i.r(e),e.default={id:"male-sign-usage",viewBox:"0 0 23 23",url:i.p+"./assets/img/icons/sprite.svg#male-sign",toString:function(){return this.url}}},4228:function(t,e,i){"use strict";i.r(e),e.default={id:"male-usage",viewBox:"0 0 70 70",url:i.p+"./assets/img/icons/sprite.svg#male",toString:function(){return this.url}}},591:function(t,e,i){"use strict";i.r(e),e.default={id:"mark-usage",viewBox:"0 0 12 17",url:i.p+"./assets/img/icons/sprite.svg#mark",toString:function(){return this.url}}},4640:function(t,e,i){"use strict";i.r(e),e.default={id:"menu-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#menu-line",toString:function(){return this.url}}},9059:function(t,e,i){"use strict";i.r(e),e.default={id:"minus-usage",viewBox:"0 0 20 20",url:i.p+"./assets/img/icons/sprite.svg#minus",toString:function(){return this.url}}},2908:function(t,e,i){"use strict";i.r(e),e.default={id:"more-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#more-line",toString:function(){return this.url}}},26:function(t,e,i){"use strict";i.r(e),e.default={id:"notification-info-usage",viewBox:"0 0 20 20",url:i.p+"./assets/img/icons/sprite.svg#notification-info",toString:function(){return this.url}}},7084:function(t,e,i){"use strict";i.r(e),e.default={id:"page-right-usage",viewBox:"0 0 7.65515 13.9048",url:i.p+"./assets/img/icons/sprite.svg#page-right",toString:function(){return this.url}}},4292:function(t,e,i){"use strict";i.r(e),e.default={id:"pcr-usage",viewBox:"0 0 70 70",url:i.p+"./assets/img/icons/sprite.svg#pcr",toString:function(){return this.url}}},4442:function(t,e,i){"use strict";i.r(e),e.default={id:"person-usage",viewBox:"0 0 40 47",url:i.p+"./assets/img/icons/sprite.svg#person",toString:function(){return this.url}}},1779:function(t,e,i){"use strict";i.r(e),e.default={id:"phone-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#phone-line",toString:function(){return this.url}}},6734:function(t,e,i){"use strict";i.r(e),e.default={id:"phone-usage",viewBox:"0 0 9 10",url:i.p+"./assets/img/icons/sprite.svg#phone",toString:function(){return this.url}}},2919:function(t,e,i){"use strict";i.r(e),e.default={id:"plus-usage",viewBox:"0 0 20 20",url:i.p+"./assets/img/icons/sprite.svg#plus",toString:function(){return this.url}}},9097:function(t,e,i){"use strict";i.r(e),e.default={id:"princ-usage",viewBox:"0 0 21.5046 22",url:i.p+"./assets/img/icons/sprite.svg#princ",toString:function(){return this.url}}},2487:function(t,e,i){"use strict";i.r(e),e.default={id:"search-sign-usage",viewBox:"0 0 22 30",url:i.p+"./assets/img/icons/sprite.svg#search-sign",toString:function(){return this.url}}},347:function(t,e,i){"use strict";i.r(e),e.default={id:"search-usage",viewBox:"0 0 20 20",url:i.p+"./assets/img/icons/sprite.svg#search",toString:function(){return this.url}}},6694:function(t,e,i){"use strict";i.r(e),e.default={id:"serv-usage",viewBox:"0 0 20 14",url:i.p+"./assets/img/icons/sprite.svg#serv",toString:function(){return this.url}}},6774:function(t,e,i){"use strict";i.r(e),e.default={id:"shield-usage",viewBox:"0 0 46 58",url:i.p+"./assets/img/icons/sprite.svg#shield",toString:function(){return this.url}}},2485:function(t,e,i){"use strict";i.r(e),e.default={id:"shopping-cart-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#shopping-cart-line",toString:function(){return this.url}}},5123:function(t,e,i){"use strict";i.r(e),e.default={id:"slim-arrow-left-usage",viewBox:"0 0 16 14",url:i.p+"./assets/img/icons/sprite.svg#slim-arrow-left",toString:function(){return this.url}}},8476:function(t,e,i){"use strict";i.r(e),e.default={id:"slim-arrow-right-usage",viewBox:"0 0 16 14",url:i.p+"./assets/img/icons/sprite.svg#slim-arrow-right",toString:function(){return this.url}}},9577:function(t,e,i){"use strict";i.r(e),e.default={id:"star-new-usage",viewBox:"0 0 12.1914 11.6929",url:i.p+"./assets/img/icons/sprite.svg#star-new",toString:function(){return this.url}}},7500:function(t,e,i){"use strict";i.r(e),e.default={id:"star-usage",viewBox:"0 0 12.1914 11.6929",url:i.p+"./assets/img/icons/sprite.svg#star",toString:function(){return this.url}}},3277:function(t,e,i){"use strict";i.r(e),e.default={id:"success-mob-usage",viewBox:"0 0 216.329 168",url:i.p+"./assets/img/icons/sprite.svg#success-mob",toString:function(){return this.url}}},5282:function(t,e,i){"use strict";i.r(e),e.default={id:"success-usage",viewBox:"0 0 23.5938 17.4707",url:i.p+"./assets/img/icons/sprite.svg#success",toString:function(){return this.url}}},1651:function(t,e,i){"use strict";i.r(e),e.default={id:"telegram-usage",viewBox:"0 0 28 28",url:i.p+"./assets/img/icons/sprite.svg#telegram",toString:function(){return this.url}}},3138:function(t,e,i){"use strict";i.r(e),e.default={id:"time-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#time-line",toString:function(){return this.url}}},8316:function(t,e,i){"use strict";i.r(e),e.default={id:"twitter-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#twitter",toString:function(){return this.url}}},301:function(t,e,i){"use strict";i.r(e),e.default={id:"user (2)-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#user (2)",toString:function(){return this.url}}},7426:function(t,e,i){"use strict";i.r(e),e.default={id:"user-line-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#user-line",toString:function(){return this.url}}},9121:function(t,e,i){"use strict";i.r(e),e.default={id:"user-usage",viewBox:"0 0 512 512",url:i.p+"./assets/img/icons/sprite.svg#user",toString:function(){return this.url}}},9057:function(t,e,i){"use strict";i.r(e),e.default={id:"value-usage",viewBox:"0 0 22 22",url:i.p+"./assets/img/icons/sprite.svg#value",toString:function(){return this.url}}},4947:function(t,e,i){"use strict";i.r(e),e.default={id:"vk-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#vk",toString:function(){return this.url}}},3009:function(t,e,i){"use strict";i.r(e),e.default={id:"whatsapp-close-usage",viewBox:"0 0 10 10",url:i.p+"./assets/img/icons/sprite.svg#whatsapp-close",toString:function(){return this.url}}},8877:function(t,e,i){"use strict";i.r(e),e.default={id:"whatsapp-usage",viewBox:"0 0 28 28",url:i.p+"./assets/img/icons/sprite.svg#whatsapp",toString:function(){return this.url}}},8191:function(t,e,i){"use strict";i.r(e),e.default={id:"why-usage",viewBox:"0 0 22 22",url:i.p+"./assets/img/icons/sprite.svg#why",toString:function(){return this.url}}},5444:function(t,e,i){"use strict";i.r(e),e.default={id:"work-usage",viewBox:"0 0 22 22",url:i.p+"./assets/img/icons/sprite.svg#work",toString:function(){return this.url}}},5964:function(t,e,i){"use strict";i.r(e),e.default={id:"youtube-usage",viewBox:"0 0 24 24",url:i.p+"./assets/img/icons/sprite.svg#youtube",toString:function(){return this.url}}},5896:function(t,e,i){var r={"./Group.svg":1259,"./Ratings.svg":4606,"./Vector.svg":9924,"./arrow-accordion.svg":3513,"./arrow-down.svg":1938,"./arrow-left.svg":8385,"./arrow-right-top.svg":617,"./arrow-right.svg":8592,"./ask.svg":2813,"./btn-up.svg":8642,"./burger.svg":7618,"./callback.svg":1996,"./cap.svg":2318,"./car.svg":6685,"./cashback.svg":153,"./check.svg":5112,"./clear.svg":4314,"./close-line.svg":9266,"./close.svg":2439,"./done.svg":2834,"./down.svg":3353,"./educ.svg":4966,"./expir.svg":5428,"./female-sign.svg":7054,"./female.svg":9837,"./file-line.svg":7154,"./file.svg":5709,"./flower-sign.svg":766,"./gen.svg":7700,"./hopper.svg":4162,"./instagram.svg":6089,"./logo-white.svg":320,"./mail-line.svg":4137,"./male-sign.svg":5761,"./male.svg":4228,"./mark.svg":591,"./menu-line.svg":4640,"./minus.svg":9059,"./more-line.svg":2908,"./notification-info.svg":26,"./page-right.svg":7084,"./pcr.svg":4292,"./person.svg":4442,"./phone-line.svg":1779,"./phone.svg":6734,"./plus.svg":2919,"./princ.svg":9097,"./search-sign.svg":2487,"./search.svg":347,"./serv.svg":6694,"./shield.svg":6774,"./shopping-cart-line.svg":2485,"./slim-arrow-left.svg":5123,"./slim-arrow-right.svg":8476,"./star-new.svg":9577,"./star.svg":7500,"./success-mob.svg":3277,"./success.svg":5282,"./telegram.svg":1651,"./time-line.svg":3138,"./twitter.svg":8316,"./user (2).svg":301,"./user-line.svg":7426,"./user.svg":9121,"./value.svg":9057,"./vk.svg":4947,"./whatsapp-close.svg":3009,"./whatsapp.svg":8877,"./why.svg":8191,"./work.svg":5444,"./youtube.svg":5964};function s(t){var e=n(t);return i(e)}function n(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id=5896}},i={};function r(t){var s=i[t];if(void 0!==s)return s.exports;var n=i[t]={exports:{}};return e[t].call(n.exports,n,n.exports,r),n.exports}r.m=e,t=[],r.O=function(e,i,s,n){if(!i){var o=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],n=t[l][2];for(var u=!0,a=0;a<i.length;a++)(!1&n||o>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[a])}))?i.splice(a--,1):(u=!1,n<o&&(o=n));if(u){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[i,s,n]},r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),function(){var t={826:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,o=i[0],u=i[1],a=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in u)r.o(u,s)&&(r.m[s]=u[s]);if(a)var l=a(r)}for(e&&e(i);c<o.length;c++)n=o[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(l)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}(),r.O(void 0,[78],(function(){return r(1202)}));var s=r.O(void 0,[78],(function(){return r(6376)}));s=r.O(s)}();
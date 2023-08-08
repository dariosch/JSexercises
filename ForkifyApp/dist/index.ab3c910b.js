function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequire52af;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequire52af=a),a.register("27Lyk",function(t,r){"use strict";e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>i,e=>i=e);var n,i,a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("27Lyk").register(JSON.parse('{"6oMUc":"index.ab3c910b.js","3n0Kx":"icons.c14567a0.svg"}'));var o=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof _?r:_).prototype);return i(c,"_invoke",{value:(o=new S(a||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return H()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(t===a)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var l=d(e,n,o);if("normal"===l.type){if(s=o.done?f:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=f,o.method="throw",o.arg=l.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};function _(){}function v(){}function m(){}var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,o)&&(y=w);var k=m.prototype=_.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:H}}function H(){return{value:t,done:!0}}return v.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),l($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),l(k,c,"Generator"),l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}const s="https://forkify-api.herokuapp.com/api/v2/recipes/",c=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},l=async function(e){try{let t=await Promise.race([fetch(e),c(10)]),r=await t.json();if(!t.ok)throw Error(`${r.message} ${t.status}`);return r}catch(e){throw e}},u=async function(e,t){try{fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});let r=await Promise.race([fetch(e),c(10)]),n=await r.json();if(!r.ok)throw Error(`${n.message} ${r.status}`);return n}catch(e){throw e}},d={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},h=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},p=async function(e){try{let t=await l(`${s}${e}`);d.recipe=h(t),d.bookmarks.some(t=>t.id===e)?d.recipe.bookmarked=!0:d.recipe.bookmarked=!1}catch(e){throw e}},f=async function(e){try{d.search.query=e;let t=await l(`${s}?search=${e}`);d.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),d.search.page=1}catch(e){throw e}},g=function(e=d.search.page){d.search.page=e;let t=(e-1)*d.search.resultsPerPage,r=e*d.search.resultsPerPage;return d.search.results.slice(t,r)},_=function(e){d.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/d.recipe.servings}),d.recipe.servings=e},v=function(){localStorage.setItem("bookmarks",JSON.stringify(d.bookmarks))},m=function(e){d.bookmarks.push(e),e.id===d.recipe.id&&(d.recipe.bookmarked=!0),v()},y=function(e){let t=d.bookmarks.findIndex(t=>t.id===e);d.bookmarks.splice(t,1),e===d.recipe.id&&(d.recipe.bookmarked=!1),v()},b=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await u(`${s}?key=695a481f-612a-409f-9e10-284efcbe2850`,r);d.recipe=h(n),m(d.recipe)}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(d.bookmarks=JSON.parse(e))}();var w={};w=new URL(a("27Lyk").resolve("3n0Kx"),import.meta.url).toString();class k{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner=function(){let e=`
    <svg>
      <use href="${t(w)}#icon-loader"></use>
    </svg>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};_clear(){this._parentElement.innerHTML=""}renderError(e=this._errorMessage){let r=`
      <div class="error">
          <div>
              <svg>
                  <use href="${t(w)}#icon-alert-triangle"></use>
              </svg>
          </div>
          <p>${e}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}}class E extends k{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find the recipe. Please try again with another one!";_message="";_data;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${t(w)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${t(w)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${t(w)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${t(w)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${t(w)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(e=>`
            <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${t(w)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
            </li>
        `).join()}

    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${t(w)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
`}}var $=new E;class x{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var L=new x;class S extends k{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${e.id===t?"preview__link-active":""}" href="#${e.id}">
            <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
            </div>
            </a>
        </li>
    `}}var P=new S;class H extends k{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice one and add it! :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${e.id===t?"preview__link-active":""}" href="#${e.id}">
            <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
            </div>
            </a>
        </li>
    `}}var M=new H;class j extends k{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goTo;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
            ${this._generateMarkupButtonNext(e+1)}
      `:e===t?`
            ${this._generateMarkupButtonPrev(e-1)}
      `:e<t?`
        ${this._generateMarkupButtonPrev(e-1)}
        ${this._generateMarkupButtonNext(e+1)}
  `:""}_generateMarkupButtonPrev(e){return`
        <button data-go-to="${e}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${t(w)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e}</span>
        </button>
    `}_generateMarkupButtonNext(e){return`
            <button data-go-to="${e}" class="btn--inline pagination__btn--next">
                <span>Page ${e}</span>
                <svg class="search__icon">
                    <use href="${t(w)}#icon-arrow-right"></use>
                </svg>
            </button>
      `}}var O=new j;class q extends k{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var T=new q;const N=async function(){try{let e=window.location.hash.slice(1);if(!e)return;$.renderSpinner(),P.update(g()),M.update(d.bookmarks),await p(e),$.render(d.recipe)}catch(e){$.renderError()}},A=async function(){try{P.renderSpinner();let e=L.getQuery();if(!e)return;await f(e),P.render(g(1)),O.render(d.search)}catch(e){console.log(e)}};A();const R=async function(e){try{await b(e)}catch(e){console.error(e),T.renderError(e.message)}};M.addHandlerRender(function(){M.render(d.bookmarks)}),$.addHandlerRender(N),$.addHandlerUpdateServings(function(e){_(e),$.update(d.recipe)}),$.addHandlerAddBookmark(function(){d.recipe.bookmarked?y(d.recipe.id):m(d.recipe),$.update(d.recipe),M.render(d.bookmarks)}),L.addHandlerSearch(A),O.addHandlerClick(function(e){P.render(g(e)),O.render(d.search)}),T.addHandlerUpload(R);
//# sourceMappingURL=index.ab3c910b.js.map

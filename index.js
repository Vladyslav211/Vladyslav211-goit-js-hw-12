import{a as w,S as b,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const v="57439014-651b11918c0474541601eccf4",S="https://pixabay.com/api/";async function f(s,r){return(await w.get(S,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />

            <div class="info">
              <p class="info-item">
                <span>Likes</span>
                ${e.likes}
              </p>

              <p class="info-item">
                <span>Views</span>
                ${e.views}
              </p>

              <p class="info-item">
                <span>Comments</span>
                ${e.comments}
              </p>

              <p class="info-item">
                <span>Downloads</span>
                ${e.downloads}
              </p>
            </div>
          </a>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",r),q.refresh()}function P(){m.innerHTML=""}function g(){y.classList.add("is-visible")}function L(){y.classList.remove("is-visible")}function c(){p.classList.add("is-visible")}function i(){p.classList.remove("is-visible")}const B=document.querySelector(".form"),E=document.querySelector(".load-more");let a=1,u="";B.addEventListener("submit",M);E.addEventListener("click",$);async function M(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query"});return}u=r,a=1,P(),i(),g();try{const e=await f(u,a);if(e.hits.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e.hits),a*15>=e.totalHits?(i(),n.info({message:"We're sorry, but you've reached the end of search results."})):c()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L()}}async function $(){a+=1,i(),g();try{const s=await f(u,a);h(s.hits),a*15>=s.totalHits?(i(),n.info({message:"We're sorry, but you've reached the end of search results."})):c();const r=document.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}catch{a-=1,n.error({title:"Error",message:"Something went wrong. Please try again later."}),c()}finally{L()}}
//# sourceMappingURL=index.js.map

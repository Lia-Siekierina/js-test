import{A as u}from"./assets/vendor-CTqzIL4Y.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function l(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=l(s);fetch(s.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{new u(".accordion",{duration:300,showMultiple:!1,collapse:!0});const r=document.querySelectorAll(".faq-item"),c=r[0],l=r[0].querySelector(".faq-answer"),n=r[0].querySelector(".faq-arrow"),s=c.querySelector(".faq-question");c.classList.add("open"),l.classList.add("show"),n.classList.add("open"),s.classList.add("active"),r.forEach(e=>{const t=e.querySelector(".faq-question"),a=e.querySelector(".faq-answer"),i=e.querySelector(".faq-arrow"),f=()=>{a.classList.contains("show")?(e.classList.remove("open"),a.classList.remove("show"),i.classList.remove("open"),t.classList.remove("active")):(e.classList.add("open"),a.classList.add("show"),i.classList.add("open"),t.classList.add("active"))},d=()=>{r.forEach(o=>{o!==e&&(o.classList.remove("open"),o.querySelector(".faq-answer").classList.remove("show"),o.querySelector(".faq-arrow").classList.remove("open"),o.querySelector(".faq-question").classList.remove("active"))}),f()};t.addEventListener("click",d),i.addEventListener("click",o=>{o.stopPropagation(),a.classList.contains("show")?(e.classList.remove("open"),a.classList.remove("show"),i.classList.remove("open"),t.classList.remove("active")):d()})})});
//# sourceMappingURL=index.js.map

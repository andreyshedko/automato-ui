import{i as V,o as E,c as T,a as L}from"../chunks/session.CQqZf1Q6.js";import{s as q,o as w,a as z,u as B,g as D,b as H,n as b}from"../chunks/scheduler.CtbWrGNo.js";import{S as N,i as O,e as k,s as j,o as C,c as y,g as x,f as M,h as I,a as _,p as g,q as P,r as h,d as f,u as U,t as A,b as F,m as S,j as v,n as G}from"../chunks/index.DpWq0RiH.js";import{g as J}from"../chunks/entry.BeDGvT7n.js";async function K({url:d}){try{V()}catch(r){console.error(r)}function a(){return new Promise(r=>{E(T,i=>r(i||!1))})}return{getAuthUser:a,url:d.pathname}}const ae=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function Q(d){let a,r,i,n,t;const u=d[4].default,l=z(u,d,d[3],null);return{c(){a=k("div"),r=A("Logged in: "),i=A(d[1]),n=j(),l&&l.c()},l(e){a=y(e,"DIV",{});var s=F(a);r=S(s,"Logged in: "),i=S(s,d[1]),n=M(s),l&&l.l(s),s.forEach(f)},m(e,s){_(e,a,s),v(a,r),v(a,i),v(a,n),l&&l.m(a,null),t=!0},p(e,s){(!t||s&2)&&G(i,e[1]),l&&l.p&&(!t||s&8)&&B(l,u,e,e[3],t?H(u,e[3],s,null):D(e[3]),null)},i(e){t||(h(l,e),t=!0)},o(e){g(l,e),t=!1},d(e){e&&f(a),l&&l.d(e)}}}function R(d){let a,r="Loading...";return{c(){a=k("div"),a.textContent=r},l(i){a=y(i,"DIV",{"data-svelte-h":!0}),x(a)!=="svelte-194gxkm"&&(a.textContent=r)},m(i,n){_(i,a,n)},p:b,i:b,o:b,d(i){i&&f(a)}}}function W(d){let a,r='<div class="navbar-brand"><a class="navbar-item" href="/"><img src="./roboto.svg" alt="Automato"/></a> <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a></div> <div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"></div> <div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-light" href="/login">Log in</a></div></div></div></div>',i,n,t,u,l;const e=[R,Q],s=[];function m(o,c){return o[0]?0:1}return n=m(d),t=s[n]=e[n](d),{c(){a=k("nav"),a.innerHTML=r,i=j(),t.c(),u=C(),this.h()},l(o){a=y(o,"NAV",{class:!0,"aria-label":!0,"data-svelte-h":!0}),x(a)!=="svelte-1gj3r32"&&(a.innerHTML=r),i=M(o),t.l(o),u=C(),this.h()},h(){I(a,"class","navbar"),I(a,"aria-label","main navigation")},m(o,c){_(o,a,c),_(o,i,c),s[n].m(o,c),_(o,u,c),l=!0},p(o,[c]){let p=n;n=m(o),n===p?s[n].p(o,c):(U(),g(s[p],1,1,()=>{s[p]=null}),P(),t=s[n],t?t.p(o,c):(t=s[n]=e[n](o),t.c()),h(t,1),t.m(u.parentNode,u))},i(o){l||(h(t),l=!0)},o(o){g(t),l=!1},d(o){o&&(f(a),f(i),f(u)),s[n].d(o)}}}function X(d,a,r){let{$$slots:i={},$$scope:n}=a,{data:t}=a,u=!0,l=!1;return L.subscribe(e=>{r(0,u=e==null?void 0:e.loading),r(1,l=e==null?void 0:e.loggedIn)}),w(async()=>{const e=await t.getAuthUser(),s=!!e&&(e==null?void 0:e.emailVerified);L.update(m=>(r(0,u=!1),{...m,user:e,loggedIn:s,loading:!1})),s&&J("/")}),d.$$set=e=>{"data"in e&&r(2,t=e.data),"$$scope"in e&&r(3,n=e.$$scope)},[u,l,t,n,i]}class te extends N{constructor(a){super(),O(this,a,X,W,q,{data:2})}}export{te as component,ae as universal};

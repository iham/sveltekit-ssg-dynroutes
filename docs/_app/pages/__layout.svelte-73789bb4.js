import{S as B,i as R,s as w,F as C,G as F,e as m,k as g,t as O,H as G,c as v,d as o,m as E,a as k,h as U,b as a,I as c,g as j,J as I,K as J,L as K,q as L,o as N}from"../chunks/vendor-e1d9f028.js";import{b as q}from"../chunks/paths-4b3c6e7e.js";function V(i){C(i,"svelte-1rhg2al","nav.svelte-1rhg2al{padding:1rem;box-shadow:-1px 1px 11px 4px #898989}a.svelte-1rhg2al{text-decoration:none;color:gray;margin-right:1rem}")}function z(i){let r,h,t,l,_,b,f,A,x,u,y,$,p;const S=i[1].default,s=F(S,i,i[0],null);return{c(){r=m("meta"),h=g(),t=m("nav"),l=m("a"),_=O("HOME"),b=g(),f=m("a"),A=O("ABOUT"),x=g(),u=m("a"),y=O("USERS"),$=g(),s&&s.c(),this.h()},l(e){const n=G('[data-svelte="svelte-1m6jots"]',document.head);r=v(n,"META",{name:!0,content:!0}),n.forEach(o),h=E(e),t=v(e,"NAV",{class:!0});var d=k(t);l=v(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var H=k(l);_=U(H,"HOME"),H.forEach(o),b=E(d),f=v(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var M=k(f);A=U(M,"ABOUT"),M.forEach(o),x=E(d),u=v(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var T=k(u);y=U(T,"USERS"),T.forEach(o),d.forEach(o),$=E(e),s&&s.l(e),this.h()},h(){a(r,"name","robots"),a(r,"content","noindex"),a(l,"sveltekit:prefetch",""),a(l,"href",`${q}/`),a(l,"class","svelte-1rhg2al"),a(f,"sveltekit:prefetch",""),a(f,"href",`${q}/about`),a(f,"class","svelte-1rhg2al"),a(u,"sveltekit:prefetch",""),a(u,"href",`${q}/users`),a(u,"class","svelte-1rhg2al"),a(t,"class","svelte-1rhg2al")},m(e,n){c(document.head,r),j(e,h,n),j(e,t,n),c(t,l),c(l,_),c(t,b),c(t,f),c(f,A),c(t,x),c(t,u),c(u,y),j(e,$,n),s&&s.m(e,n),p=!0},p(e,[n]){s&&s.p&&(!p||n&1)&&I(s,S,e,e[0],p?K(S,e[0],n,null):J(e[0]),null)},i(e){p||(L(s,e),p=!0)},o(e){N(s,e),p=!1},d(e){o(r),e&&o(h),e&&o(t),e&&o($),s&&s.d(e)}}}function D(i,r,h){let{$$slots:t={},$$scope:l}=r;return i.$$set=_=>{"$$scope"in _&&h(0,l=_.$$scope)},[l,t]}class W extends B{constructor(r){super();R(this,r,D,z,w,{},V)}}export{W as default};
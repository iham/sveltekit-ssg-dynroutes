import{S as M,i as N,s as q,F as A,e as p,k,t as S,c as y,a as v,m as x,h as C,d as u,N as w,b as c,g as j,I as f,j as F,M as $,O as G}from"../chunks/vendor-e1d9f028.js";import{b as g}from"../chunks/paths-4b3c6e7e.js";function H(l){A(l,"svelte-kybryy","main.svelte-kybryy{display:flex;flex-wrap:wrap;justify-content:center}.box.svelte-kybryy{padding:0.25rem;margin:1.5rem;color:salmon;box-shadow:4px 5px 11px 2px lightgray}.box.svelte-kybryy:hover{box-shadow:4px 5px 11px 10px lightgray}img.svelte-kybryy{width:15rem;object-fit:contain}")}function E(l,e,r){const t=l.slice();return t[1]=e[r].avatar,t[2]=e[r].lastName,t}function I(l){let e,r,t,s,i,a,h=l[2]+"",_,d,m;return{c(){e=p("a"),r=p("img"),i=k(),a=p("h2"),_=S(h),d=k(),this.h()},l(o){e=y(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var n=v(e);r=y(n,"IMG",{src:!0,alt:!0,class:!0}),i=x(n),a=y(n,"H2",{});var b=v(a);_=C(b,h),b.forEach(u),d=x(n),n.forEach(u),this.h()},h(){w(r.src,t=l[1])||c(r,"src",t),c(r,"alt",s=l[2]),c(r,"class","svelte-kybryy"),c(e,"sveltekit:prefetch",""),c(e,"href",m=`${g}/user/${l[2]}`),c(e,"class","box svelte-kybryy")},m(o,n){j(o,e,n),f(e,r),f(e,i),f(e,a),f(a,_),f(e,d)},p(o,n){n&1&&!w(r.src,t=o[1])&&c(r,"src",t),n&1&&s!==(s=o[2])&&c(r,"alt",s),n&1&&h!==(h=o[2]+"")&&F(_,h),n&1&&m!==(m=`${g}/user/${o[2]}`)&&c(e,"href",m)},d(o){o&&u(e)}}}function O(l){let e,r=l[0],t=[];for(let s=0;s<r.length;s+=1)t[s]=I(E(l,r,s));return{c(){e=p("main");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=y(s,"MAIN",{class:!0});var i=v(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(u),this.h()},h(){c(e,"class","svelte-kybryy")},m(s,i){j(s,e,i);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(s,[i]){if(i&1){r=s[0];let a;for(a=0;a<r.length;a+=1){const h=E(s,r,a);t[a]?t[a].p(h,i):(t[a]=I(h),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},i:$,o:$,d(s){s&&u(e),G(t,s)}}}async function D({fetch:l}){const e=await l(`${g}/api/users.json`);return e.ok?{props:{users:await e.json()}}:{status:e.status,error:new Error}}function U(l,e,r){let{users:t}=e;return l.$$set=s=>{"users"in s&&r(0,t=s.users)},[t]}class J extends M{constructor(e){super();N(this,e,U,O,q,{users:0},H)}}export{J as default,D as load};
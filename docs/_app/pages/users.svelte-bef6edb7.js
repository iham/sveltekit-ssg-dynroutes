import{S as q,i as A,s as H,e as v,k as y,t as I,c as p,a as g,m as j,h as S,d as u,M as $,b as o,g as E,H as f,j as C,L as w,N as G}from"../chunks/vendor-2bd32843.js";import{b}from"../chunks/paths-4b3c6e7e.js";function M(l,e,r){const s=l.slice();return s[1]=e[r].avatar,s[2]=e[r].lastName,s}function N(l){let e,r,s,t,c,a,h=l[2]+"",_,d,m;return{c(){e=v("a"),r=v("img"),c=y(),a=v("h2"),_=I(h),d=y(),this.h()},l(i){e=p(i,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var n=g(e);r=p(n,"IMG",{src:!0,alt:!0,class:!0}),c=j(n),a=p(n,"H2",{});var k=g(a);_=S(k,h),k.forEach(u),d=j(n),n.forEach(u),this.h()},h(){$(r.src,s=l[1])||o(r,"src",s),o(r,"alt",t=l[2]),o(r,"class","svelte-kybryy"),o(e,"sveltekit:prefetch",""),o(e,"href",m=`${b}/user/${l[2]}`),o(e,"class","box svelte-kybryy")},m(i,n){E(i,e,n),f(e,r),f(e,c),f(e,a),f(a,_),f(e,d)},p(i,n){n&1&&!$(r.src,s=i[1])&&o(r,"src",s),n&1&&t!==(t=i[2])&&o(r,"alt",t),n&1&&h!==(h=i[2]+"")&&C(_,h),n&1&&m!==(m=`${b}/user/${i[2]}`)&&o(e,"href",m)},d(i){i&&u(e)}}}function L(l){let e,r=l[0],s=[];for(let t=0;t<r.length;t+=1)s[t]=N(M(l,r,t));return{c(){e=v("main");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=p(t,"MAIN",{class:!0});var c=g(e);for(let a=0;a<s.length;a+=1)s[a].l(c);c.forEach(u),this.h()},h(){o(e,"class","svelte-kybryy")},m(t,c){E(t,e,c);for(let a=0;a<s.length;a+=1)s[a].m(e,null)},p(t,[c]){if(c&1){r=t[0];let a;for(a=0;a<r.length;a+=1){const h=M(t,r,a);s[a]?s[a].p(h,c):(s[a]=N(h),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i:w,o:w,d(t){t&&u(e),G(s,t)}}}async function B({fetch:l}){const e=await l(`${b}/api/users.json`);return e.ok?{props:{users:await e.json()}}:{status:e.status,error:new Error}}function U(l,e,r){let{users:s}=e;return l.$$set=t=>{"users"in t&&r(0,s=t.users)},[s]}class D extends q{constructor(e){super();A(this,e,U,L,H,{users:0})}}export{D as default,B as load};

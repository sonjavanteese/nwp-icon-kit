import{S as G,i as J,s as K,e as v,t as D,k as w,j as Q,c as m,a as d,g as S,d as h,n as A,m as R,b as f,f as P,D as l,o as W,L as X,x as V,u as O,v as Y,w as Z,O as ee,r as te}from"../chunks/vendor-ea06e4a4.js";import{I as se}from"../chunks/Icon-cd1d65ae.js";import{i as T}from"../chunks/iconlist-6c6bff32.js";/* empty css                                                   */function U(y,t,n){const r=y.slice();return r[0]=t[n],r}function z(y){let t,n,r=y[0].toUpperCase()+"",u,E,g,x,_,p,N,I;return _=new se({props:{name:y[0]}}),{c(){t=v("a"),n=v("div"),u=D(r),E=w(),g=v("span"),x=w(),Q(_.$$.fragment),p=w(),this.h()},l(o){t=m(o,"A",{href:!0,class:!0});var i=d(t);n=m(i,"DIV",{class:!0});var L=d(n);u=S(L,r),L.forEach(h),E=A(i),g=m(i,"SPAN",{class:!0}),d(g).forEach(h),x=A(i),R(_.$$.fragment,i),p=A(i),i.forEach(h),this.h()},h(){f(n,"class","text-2xl font-medium svelte-epn5h9"),f(g,"class","flex-grow svelte-epn5h9"),f(t,"href",N="/details/"+y[0]),f(t,"class","flex items-center px-4 py-3 svelte-epn5h9")},m(o,i){P(o,t,i),l(t,n),l(n,u),l(t,E),l(t,g),l(t,x),W(_,t,null),l(t,p),I=!0},p:X,i(o){I||(V(_.$$.fragment,o),I=!0)},o(o){O(_.$$.fragment,o),I=!1},d(o){o&&h(t),Y(_)}}}function ae(y){let t,n,r,u,E,g,x,_,p,N,I,o,i,L,k,j,$=T,s=[];for(let a=0;a<$.length;a+=1)s[a]=z(U(y,$,a));const F=a=>O(s[a],1,1,()=>{s[a]=null});return{c(){t=v("main"),n=v("section"),r=v("nav"),u=v("a"),E=D("\u276E back"),g=w(),x=v("div"),_=w(),p=v("a"),N=D("Icon Libary"),I=w(),o=v("h1"),i=D("Nwp Icon List"),L=w(),k=v("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){t=m(a,"MAIN",{});var c=d(t);n=m(c,"SECTION",{class:!0});var e=d(n);r=m(e,"NAV",{class:!0});var b=d(r);u=m(b,"A",{href:!0,class:!0});var q=d(u);E=S(q,"\u276E back"),q.forEach(h),g=A(b),x=m(b,"DIV",{class:!0}),d(x).forEach(h),_=A(b),p=m(b,"A",{href:!0,class:!0});var B=d(p);N=S(B,"Icon Libary"),B.forEach(h),b.forEach(h),I=A(e),o=m(e,"H1",{class:!0});var H=d(o);i=S(H,"Nwp Icon List"),H.forEach(h),L=A(e),k=m(e,"DIV",{class:!0});var M=d(k);for(let C=0;C<s.length;C+=1)s[C].l(M);M.forEach(h),e.forEach(h),c.forEach(h),this.h()},h(){f(u,"href","/"),f(u,"class","text-xl text-blue-800 svelte-epn5h9"),f(x,"class","flex-grow svelte-epn5h9"),f(p,"href","/icons"),f(p,"class","text-blue-800 text-lg font-medium svelte-epn5h9"),f(r,"class","flex items-center mb-4 svelte-epn5h9"),f(o,"class","py-4 text-center border-b mb-8 svelte-epn5h9"),f(k,"class","flex flex-col divide-y divide-opacity-10 svelte-epn5h9"),f(n,"class","page-container")},m(a,c){P(a,t,c),l(t,n),l(n,r),l(r,u),l(u,E),l(r,g),l(r,x),l(r,_),l(r,p),l(p,N),l(n,I),l(n,o),l(o,i),l(n,L),l(n,k);for(let e=0;e<s.length;e+=1)s[e].m(k,null);j=!0},p(a,[c]){if(c&0){$=T;let e;for(e=0;e<$.length;e+=1){const b=U(a,$,e);s[e]?(s[e].p(b,c),V(s[e],1)):(s[e]=z(b),s[e].c(),V(s[e],1),s[e].m(k,null))}for(te(),e=$.length;e<s.length;e+=1)F(e);Z()}},i(a){if(!j){for(let c=0;c<$.length;c+=1)V(s[c]);j=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)O(s[c]);j=!1},d(a){a&&h(t),ee(s,a)}}}class ce extends G{constructor(t){super();J(this,t,null,ae,K,{})}}export{ce as default};
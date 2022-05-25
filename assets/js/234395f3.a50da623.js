"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8668],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2886:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l={unversionedId:"fees",id:"fees",isDocsHomePage:!1,title:"Fees",description:"Validation rewards that Lido for Solana receives are split into four parts:",source:"@site/docs/fees.md",sourceDirName:".",slug:"/fees",permalink:"/fees",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Administration",permalink:"/administration"},next:{title:"Validator onboarding",permalink:"/validator-onboarding"}},c=[],p={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Validation rewards that Lido for Solana receives are split into four parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"90%")," goes to stSOL holders in the form of stSOL value appreciation: stSOL\nholders now own a share of a larger pool of SOL. This is how users benefit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"5%")," goes to validators to cover their operating expenses. The fees are\ndistributed equally among all validators."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"4%")," goes to the treasury of the Lido DAO. The Lido DAO ",(0,a.kt)("a",{parentName:"li",href:"https://blog.lido.fi/lido-dao-treasury-fund/"},"spends its\ntreasury funds")," on e.g. bug bounties and grants to advance the\necosystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1%")," goes to the developer for the development and ongoing maintenance of\nthe Solido program.")),(0,a.kt)("p",null,"All fees are distributed in the form of stSOL. The fee percentages ",(0,a.kt)("a",{parentName:"p",href:"/governance"},"are set by\nthe Lido DAO"),", and can be changed by ",(0,a.kt)("a",{parentName:"p",href:"/administration"},"the administration\nmultisig")," when called for by the Lido DAO. The fee\npercentages are stored on-chain, and you can inspect the current values with\n",(0,a.kt)("a",{parentName:"p",href:"operation/the-solido-utility"},(0,a.kt)("inlineCode",{parentName:"a"},"solido show-solido")),"."))}u.isMDXComponent=!0}}]);
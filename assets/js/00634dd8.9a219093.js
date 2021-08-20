(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9428],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9096:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={},s={unversionedId:"deployments",id:"deployments",isDocsHomePage:!1,title:"Deployments",description:"This page lists official addresses at which Lido for Solana is deployed, in the",source:"@site/docs/deployments.md",sourceDirName:".",slug:"/deployments",permalink:"/solido/deployments",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Exchange rate",permalink:"/solido/internals/exchange-rate"}},l=[{value:"Testnet",id:"testnet",children:[]},{value:"Mainnet-beta",id:"mainnet-beta",children:[]}],c={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page lists official addresses at which Lido for Solana is deployed, in the\nform of ",(0,a.kt)("a",{parentName:"p",href:"the-solido-utility#configuration"},"a ",(0,a.kt)("inlineCode",{parentName:"a"},"solido")," config file"),"."),(0,a.kt)("p",null,"Aside from the config keys, we list a few additional addresses that do not need\nto be part of the config file, and that can be obtained through ",(0,a.kt)("a",{parentName:"p",href:"/solido/the-solido-utility"},(0,a.kt)("inlineCode",{parentName:"a"},"solido\nshow-solido")),", but which are useful to know anyway."),(0,a.kt)("h2",{id:"testnet"},"Testnet"),(0,a.kt)("p",null,"Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster": "https://api.testnet.solana.com",\n  "multisig_program_id": "BY7D3NJMevi3JiT49xmAKditKL69a8TuyiCc9YuSvy4W",\n  "multisig_address": "7Yh1UgKE1KQoLYohynqdo84aNBwQ3GwU4XrCNY153PQ5",\n  "solido_program_id": "7k3rzqoNQxgTLTooAvXriGBKYsd16bV3JMvatvXcBfNo",\n  "solido_address": "7yoacaUf7yu5wqxpcHaXtwCaMciR7kFqps8FwnX4cjeK"\n}\n')),(0,a.kt)("p",null,"Related addresses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "st_sol_mint": "8ry9FhmvhifEBwLPJpg89fAu19rmUHskDVvEfKuDbQbT",\n  "withdraw_authority": "4t57fC1TwHGo5d6X4fpH9hkEvvDLaMDXj13vfkSZvvrQ",\n  "reserve": "BfT1Sn54zwUk46WtJRhizcu6izUvw9eTanndawX5MdR"\n}\n')),(0,a.kt)("p",null,"Multisig owners:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp": "Staking Facilities",\n  "DBd1yUhptC7yRq79sM4cAH1Zhe5rdTpJizxXJQGxRTyn": "Figment",\n  "J4RLjzbJUrm4vRk5ZpPpk6CHzrmAiZGDByuyJ8f9jXR7": "P2P",\n  "6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK": "Chorus One",\n  "CeuSTdUx4XnPET4K4o3Zxx3zjh1yrR4f8fyWycGjs7wj": "Bonafida",\n  "6DzkRQ3CJXMdnwm9aS2ww7KNeKxw3YLANzpUeTFoRCtC": "Solana Foundation",\n  "F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm": "Saber"\n}\n')),(0,a.kt)("h2",{id:"mainnet-beta"},"Mainnet-beta"),(0,a.kt)("p",null,"Lido for Solana is not yet available on mainnet-beta, but we did reserve the\nfollowing addresses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "solido_program_id": "CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi",\n  "solido_address": "49Yi1TKkNyYjPAFdR9LBvoHcUjuPX4Df5T5yv39w2XTn"\n}\n')),(0,a.kt)("p",null,"Related addresses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "st_sol_mint": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",\n  "withdraw_authority": "GgrQiJ8s2pfHsfMbEFtNcejnzLegzZ16c9XtJ2X2FpuF",\n  "reserve": "3Kwv3pEAuoe4WevPB4rgMBTZndGDb53XT7qwQKnvHPfX"\n}\n')))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2416],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9300:function(e,t,r){r.r(t),r.d(t,{default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"solido",description:"Overview of the specification of the solido program of the LIDO for Solana repo",keywords:["development","developers","lido","specification","solido","intent","solido","solana"],sidebar_position:2},s={unversionedId:"development/specification/solido/solido",id:"development/specification/solido/solido",isDocsHomePage:!1,title:"Solido",description:"Overview of the specification of the solido program of the LIDO for Solana repo",source:"@site/docs/development/specification/solido/solido.md",sourceDirName:"development/specification/solido",slug:"/development/specification/solido/solido",permalink:"/development/specification/solido/solido",version:"current",sidebarPosition:2,frontMatter:{title:"solido",description:"Overview of the specification of the solido program of the LIDO for Solana repo",keywords:["development","developers","lido","specification","solido","intent","solido","solana"],sidebar_position:2},sidebar:"solidoSidebar",previous:{title:"multisig",permalink:"/development/specification/multisig/multisig"},next:{title:"Account Map",permalink:"/development/specification/solido/account_map"}},p=[{value:"Program Structure",id:"program-structure",children:[]},{value:"Terminology",id:"terminology",children:[]}],c={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Solido is the core on-chain program (aside from the multisig governance program) for LIDO for Solana."),(0,a.kt)("h2",{id:"program-structure"},"Program Structure"),(0,a.kt)("p",null,"The program structure follows the recommended structure for Solana programs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lib.rs"),"                 -> to register modules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"entrypoint.rs"),"          -> initial entrypoint into the program"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"instruction.rs"),"         -> program api and the (de)serializing of instruction related data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"processor.rs"),"           -> program logic"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"state.rs"),"               -> program objects/structures and the (de)serializing of program state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"error.rs"),"               -> error objects specific to the program"),(0,a.kt)("li",{parentName:"ul"},"...")))),(0,a.kt)("p",null,"Solido has a couple of additional modules for specific behaviour or domain functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"account_map.rs"),"    -> objects to assist with mapping objects to a PubKey as key value pair"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"balance.rs"),"            -> functionality related to target balances associated with validators"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"logic.rs"),"              -> logic and helper functions associated with the program"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"process_management.rs")," -> functionality associated with changing the state of the program"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"token.rs"),"              -> types to make working with token balances safer")))),(0,a.kt)("p",null,"The solido specification documents will go into detail for each of these modules to describe the structure and intent of the affiliated code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./account_map"},"account_map")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./balance"},"balance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./entrypoint"},"entrypoint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./error"},"error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./instruction"},"instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./lib"},"lib")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./process_management"},"process_management")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./processor"},"processor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./state"},"state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./token"},"token"))),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lamport"),":  The minimum unit of denomination in Solana, which an equivalent value of 0.000000001 SOL. A helper struct,",(0,a.kt)("a",{parentName:"li",href:"/development/specification/solido/token#Lamports"},"Lamports")," , is used in Solido to ensure safety when dealing with balances."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"StLamport"),":  The minimum unit of denomination in Solido pool tokens, stSOL, which an equivalent value of 0.000000001 stSOL. A helper struct,",(0,a.kt)("a",{parentName:"li",href:"/development/specification/solido/token#StLamports"},"StLamports")," , is used in Solido to ensure safety when dealing with balances.")),(0,a.kt)("p",null,"Additional Solana specific terminology can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology"},"here"),"."))}m.isMDXComponent=!0}}]);
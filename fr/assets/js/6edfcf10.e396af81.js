(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),i=(t(0),t(149)),o={title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},c={unversionedId:"api-reference/utils/waitForAll",id:"api-reference/utils/waitForAll",isDocsHomePage:!1,title:"waitForAll(dependencies)",description:"Un assistant d'acc\xe8s concurrentiel qui nous permet d'\xe9valuer simultan\xe9ment plusieurs d\xe9pendances asynchrones.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAll.md",slug:"/api-reference/utils/waitForAll",permalink:"/fr/docs/api-reference/utils/waitForAll",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAll.md",version:"current",sidebar_label:"waitForAll()",sidebar:"docs",previous:{title:"noWait(state)",permalink:"/fr/docs/api-reference/utils/noWait"},next:{title:"waitForAllSettled(dependencies)",permalink:"/fr/docs/api-reference/utils/waitForAllSettled"}},l=[{value:"Exemples",id:"exemples",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un assistant d'acc\xe8s concurrentiel qui nous permet d'\xe9valuer simultan\xe9ment plusieurs d\xe9pendances asynchrones."),Object(i.b)("p",null,"Les d\xe9pendances peuvent \xeatre fournies sous forme de tableau de tuples ou de d\xe9pendances nomm\xe9es dans un objet."),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArray>\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObject>\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Comme l'assistant de concurrence est fourni en tant que s\xe9lecteur, il peut \xeatre utilis\xe9 par les hooks Recoil dans un composant React, en tant que d\xe9pendance dans un s\xe9lecteur Recoil, ou partout o\xf9 un \xe9tat Recoil est utilis\xe9."),Object(i.b)("h3",{id:"exemples"},"Exemples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function FriendsInfo() {\n  const [friendA, friendB] = useRecoilValue(\n    waitForAll([friendAState, friendBState])\n  );\n  return (\n    <div>\n      Friend A Name: {friendA.name}\n      Friend B Name: {friendB.name}\n    </div>\n  );\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friends = get(waitForAll(\n      friendList.map(friendID => userInfoQuery(friendID))\n    ));\n    return friends;\n  },\n});\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const customerInfoQuery = selectorFamily({\n  key: 'CustomerInfoQuery',\n  get: id => ({get}) => {\n    const {info, invoices, payments} = get(waitForAll({\n      info: customerInfoQuery(id),\n      invoices: invoicesQuery(id),\n      payments: paymentsQuery(id),\n    }));\n\n    return {\n      name: info.name,\n      transactions: [\n        ...invoices,\n        ...payments,\n      ],\n    };\n  },\n});\n")))}u.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
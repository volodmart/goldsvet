(this["webpackJsonppharao-frontend"]=this["webpackJsonppharao-frontend"]||[]).push([[11],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),s=a.n(r).a.createContext({})},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return b}));var r=a(3),s=a(91),n=a(13),c=a(8),i=a(28),o=function(e){return function(t){t({type:"LOGIN",data:e.user}),s.a.setToken(e.accessToken.accessToken),s.a.setRefreshToken(e.accessToken.refreshToken),localStorage.setItem(c.a.app.token,JSON.stringify(e.user))}},l=function(e){return function(t){var a=Object(i.a)(),s=Object(r.a)(Object(r.a)({},a),e);t({type:"LOGIN",data:s}),localStorage.setItem(c.a.app.token,JSON.stringify(s))}},b=function(){return function(e){e({type:"LOGOUT"}),localStorage.removeItem(n.a.storageTokenKeyName),localStorage.removeItem(n.a.storageRefreshTokenKeyName),localStorage.removeItem(c.a.app.token)}}},137:function(e,t,a){"use strict";var r=a(6),s=a(7),n=a(0),c=a.n(n),i=a(1),o=a.n(i),l=a(12),b=a.n(l),d=a(16),u={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,n=e.tabs,i=e.pills,o=e.vertical,l=e.horizontal,u=e.justified,p=e.fill,h=e.navbar,j=e.card,m=e.tag,f=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(d.mapToCssModules)(b()(t,h?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":n,"card-header-tabs":j&&n,"nav-pills":i,"card-header-pills":j&&i,"nav-justified":u,"nav-fill":p}),a);return c.a.createElement(m,Object(r.a)({},f,{className:g}))};p.propTypes=u,p.defaultProps={tag:"ul",vertical:!1},t.a=p},138:function(e,t,a){"use strict";var r=a(6),s=a(7),n=a(23),c=a(14),i=a(0),o=a.n(i),l=a(1),b=a.n(l),d=a(12),u=a.n(d),p=a(16),h={tag:p.tagPropType,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),disabled:b.a.bool,active:b.a.bool,className:b.a.string,cssModule:b.a.object,onClick:b.a.func,href:b.a.any},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.active,c=e.tag,i=e.innerRef,l=Object(s.a)(e,["className","cssModule","active","tag","innerRef"]),b=Object(p.mapToCssModules)(u()(t,"nav-link",{disabled:l.disabled,active:n}),a);return o.a.createElement(c,Object(r.a)({},l,{ref:i,onClick:this.onClick,className:b}))},t}(o.a.Component);j.propTypes=h,j.defaultProps={tag:"a"},t.a=j},140:function(e,t,a){"use strict";var r=a(6),s=a(7),n=a(0),c=a.n(n),i=a(1),o=a.n(i),l=a(12),b=a.n(l),d=a(16),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var t=e.className,a=e.cssModule,n=e.size,i=e.bordered,o=e.borderless,l=e.striped,u=e.dark,p=e.hover,h=e.responsive,j=e.tag,m=e.responsiveTag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(d.mapToCssModules)(b()(t,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!o&&"table-borderless",!!l&&"table-striped",!!u&&"table-dark",!!p&&"table-hover"),a),O=c.a.createElement(j,Object(r.a)({},g,{ref:f,className:v}));if(h){var x=Object(d.mapToCssModules)(!0===h?"table-responsive":"table-responsive-"+h,a);return c.a.createElement(m,{className:x},O)}return O};p.propTypes=u,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},141:function(e,t,a){"use strict";var r=a(6),s=a(14),n=a(0),c=a.n(n),i=a(1),o=a.n(i),l=a(12),b=a.n(l),d=a(103),u=a(16),p={tag:u.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.tag,n=Object(u.omit)(this.props,Object.keys(p)),i=Object(u.mapToCssModules)(b()("tab-content",t),a);return c.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(s,Object(r.a)({},n,{className:i})))},t}(n.Component);t.a=h,h.propTypes=p,h.defaultProps={tag:"div"}},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a(6),s=a(7),n=a(0),c=a.n(n),i=a(1),o=a.n(i),l=a(12),b=a.n(l),d=a(103),u=a(16),p={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function h(e){var t=e.className,a=e.cssModule,n=e.tabId,i=e.tag,o=Object(s.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(u.mapToCssModules)(b()("tab-pane",t,{active:n===e}),a)};return c.a.createElement(d.a.Consumer,null,(function(e){var t=e.activeTabId;return c.a.createElement(i,Object(r.a)({},o,{className:l(t)}))}))}h.propTypes=p,h.defaultProps={tag:"div"}},346:function(e,t,a){"use strict";var r=a(0),s=a.n(r),n=a(1),c=a.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,l=o(e,["color","size"]);return s.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronLeft",t.a=l},347:function(e,t,a){"use strict";var r=a(0),s=a.n(r),n=a(1),c=a.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,l=o(e,["color","size"]);return s.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="ChevronRight",t.a=l},670:function(e,t,a){"use strict";a.r(t);var r=a(22),s=a(0),n=a(24),c=a(137),i=a(285),o=a(138),l=a(141),b=a(142),d=a(278),u=a(279),p=a(140),h=a(346),j=a(347),m=a(91),f=a(124),g=a(151),v=a(4);t.default=function(){var e=Object(n.b)(),t=Object(s.useState)("2"),a=Object(r.a)(t,2),O=a[0],x=a[1],N=Object(s.useState)([]),y=Object(r.a)(N,2),T=y[0],w=y[1],k=Object(s.useState)(!1),C=Object(r.a)(k,2),M=C[0],P=C[1],S=Object(n.c)((function(e){return e.auth})).userData;return Object(s.useEffect)((function(){S.teams_id?(P(!0),m.a.loadTeamMembers({teams_id:S.teams_id}).then((function(e){e.data.status&&w(e.data.data)})).catch((function(e){return console.log(e)}))):m.a.loadTeams().then((function(e){e.data.status&&w(e.data.data)})).catch((function(e){return console.log(e)}))}),[S,M]),Object(v.jsxs)("div",{className:"tabbed-page",children:[Object(v.jsxs)(c.a,{tabs:!0,children:[Object(v.jsx)(i.a,{active:"1"===O,children:Object(v.jsx)(o.a,{className:"game-tab",disabled:!M,active:"1"===O,onClick:function(){return x("1")},children:"  slot battle  "})}),Object(v.jsx)(i.a,{active:"2"===O,children:Object(v.jsxs)(o.a,{className:"game-tab",active:"2"===O,onClick:function(){return x("2")},children:["  ",!M&&"Join"," Team  "]})}),Object(v.jsx)(i.a,{active:"3"===O,children:Object(v.jsx)(o.a,{className:"game-tab",disabled:!M,active:"3"===O,onClick:function(){return x("3")},children:"  team league  "})}),Object(v.jsx)(i.a,{active:"4"===O,children:Object(v.jsx)(o.a,{className:"game-tab",active:"4"===O,onClick:function(){return x("4")},children:"  friends  "})}),Object(v.jsx)(i.a,{active:"5"===O,children:Object(v.jsx)(o.a,{className:"game-tab",disabled:!M,active:"5"===O,onClick:function(){return x("5")},children:"  chat  "})})]}),Object(v.jsx)(l.a,{className:"py-50",activeTab:O,children:Object(v.jsx)(b.a,{tabId:"2",className:"w-100",children:Object(v.jsx)(d.a,{children:M?Object(v.jsxs)(u.a,{sm:"12",children:[Object(v.jsxs)("div",{className:"teams-pagination",children:[Object(v.jsx)(h.a,{}),Object(v.jsx)("span",{className:"title",children:" team "}),Object(v.jsx)(j.a,{})]}),Object(v.jsxs)(p.a,{responsive:!0,className:"custom-table teams",children:[Object(v.jsx)("thead",{className:"custom-table-head team",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Rank "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Member "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Score "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Battles "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Activity "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Reward "})]})}),Object(v.jsx)("tbody",{children:T.map((function(e,t){var a;return Object(v.jsxs)("tr",{className:"custom-talbe-row",children:[Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",e.rank," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",null===(a=e.users_id)||void 0===a?void 0:a.username," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",e.score," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",e.battles,"/10 "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",e.activity," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",Object(g.a)(e.reward)," "]})]},t)}))})]})]}):Object(v.jsxs)(u.a,{sm:"12",children:[Object(v.jsxs)("div",{className:"teams-pagination",children:[Object(v.jsx)(h.a,{}),Object(v.jsx)("span",{className:"title",children:" Join team "}),Object(v.jsx)(j.a,{})]}),Object(v.jsxs)(p.a,{responsive:!0,className:"custom-table teams",children:[Object(v.jsx)("thead",{className:"custom-table-head team",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Team "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" League "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Space "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:" Join At "}),Object(v.jsx)("th",{className:"bg-transparent border-0 text-white super-headline1-light",children:"  "})]})}),Object(v.jsx)("tbody",{children:T.map((function(t,a){return Object(v.jsxs)("tr",{className:"custom-talbe-row",children:[Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",t.team," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",t.league," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" ",t.space," "]}),Object(v.jsxs)("td",{className:"bg-transparent border-0 text-white super-headline1-light",children:[" Level",t.joinAt," "]}),Object(v.jsx)("td",{className:"bg-transparent border-0 text-white",onClick:function(){return a=t,void m.a.joinTeams(a).then((function(t){t.data.status?(P(!0),e(Object(f.c)(t.data.data))):console.log("res.data",t.data)})).catch((function(e){return console.log(e)}));var a},children:Object(v.jsx)("div",{className:"game-button",children:" Join "})})]},a)}))})]})]})})})})]})}}}]);
//# sourceMappingURL=11.5e4fa9b8.chunk.js.map
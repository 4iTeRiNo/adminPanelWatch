(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[9],{130:function(e,t,r){"use strict";r.r(t);t.default=function(e,t){}},493:function(e,t,r){"use strict";var n=r(2),i=r(16),a=(r(0),r(510)),o=function(e){return Object(n.jsx)(a.a,Object(i.a)(Object(i.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.a=function(e){var t=e.name,r=e.suffix,i=e.subTitle,a=e.id,c=e.type,s=e.src,u=e.icon,l=e.size,f=e.shape,d=e.gap,p=e.text,m=e.onNameClick;return Object(n.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[o({icon:u,src:s,type:c,size:l,shape:f,gap:d,text:p}),Object(n.jsxs)("div",{className:"ml-2",children:[Object(n.jsxs)("div",{children:[m?Object(n.jsx)("div",{onClick:function(){return m({name:t,subTitle:i,src:s,id:a})},className:"avatar-status-name clickable",children:t}):Object(n.jsx)("div",{className:"avatar-status-name",children:t}),Object(n.jsx)("span",{children:r})]}),Object(n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:i})]})]})}},507:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var i=r(42),a=n(r(0)),o=r(159);r(9),r(130);var c=n(r(56));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function l(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],0<=t.indexOf(r)||(i[r]=e[r]);return i}var f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createBrowserHistory(t.props),t}return u(t,e),t.prototype.render=function(){return a.createElement(i.Router,{history:this.history,children:this.props.children})},t}(a.Component),d=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createHashHistory(t.props),t}return u(t,e),t.prototype.render=function(){return a.createElement(i.Router,{history:this.history,children:this.props.children})},t}(a.Component),p=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?o.createLocation(e,null,null,t):e},h=function(e){return e},b=a.forwardRef;void 0===b&&(b=h);var y=b((function(e,t){var r=e.innerRef,n=e.navigate,i=e.onClick,o=l(e,["innerRef","navigate","onClick"]),c=o.target,u=s({},o,{onClick:function(t){try{i&&i(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return u.ref=h!==b&&t||r,a.createElement("a",u)})),j=b((function(e,t){var r=e.component,n=void 0===r?y:r,o=e.replace,u=e.to,f=e.innerRef,d=l(e,["component","replace","to","innerRef"]);return a.createElement(i.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=e.history,i=m(p(u,e.location),e.location),l=i?r.createHref(i):"",y=s({},d,{href:l,navigate:function(){var t=p(u,e.location);(o?r.replace:r.push)(t)}});return h!==b?y.ref=t||f:y.innerRef=f,a.createElement(n,y)}))})),v=function(e){return e},O=a.forwardRef;void 0===O&&(O=v);var x=O((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,o=e.activeClassName,u=void 0===o?"active":o,f=e.activeStyle,d=e.className,h=e.exact,b=e.isActive,y=e.location,x=e.sensitive,g=e.strict,P=e.style,R=e.to,w=e.innerRef,C=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(i.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=y||e.location,o=m(p(R,r),r),l=o.pathname,N=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=N?i.matchPath(r.pathname,{path:N,exact:h,sensitive:x,strict:g}):null,L=!!(b?b(k,r):k),U=L?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(d,u):d,S=L?s({},P,{},f):P,_=s({"aria-current":L&&n||null,className:U,style:S,to:o},C);return v!==O?_.ref=t||w:_.innerRef=w,a.createElement(j,_)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return i.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return i.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return i.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return i.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return i.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return i.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return i.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return i.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return i.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return i.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return i.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return i.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return i.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return i.withRouter}}),t.BrowserRouter=f,t.HashRouter=d,t.Link=j,t.NavLink=x},511:function(e,t,r){"use strict";r.r(t),r.d(t,"UserList",(function(){return O}));var n=r(2),i=r(85),a=r(86),o=r(108),c=r(106),s=r(0),u=r(281),l=r(196),f=r(107),d=r(526),p=r(523),m=r(249),h=r(493),b=(r(54),r(91)),y=r(38),j=r(507),v=r(18),O=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={userProfileVisible:!1,selectedUser:null},e.deleteUser=function(t){e.setState({users:e.props.users.list.filter((function(e){return e.id!==t}))}),u.b.success({content:"Deleted user ".concat(t),duration:2})},e.showUserProfile=function(t){e.setState({userProfileVisible:!0,selectedUser:t})},e.closeUserProfile=function(){e.setState({userProfileVisible:!1,selectedUser:null})},e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.getUserRequested()}},{key:"render",value:function(){var e=this,t=this.props,r=(t.selectedUser,t.userProfileVisible,this.props.users.list),i=[{title:"User",dataIndex:"name",render:function(e,t){return Object(n.jsx)("div",{className:"d-flex",children:Object(n.jsx)(h.a,{src:t.img,name:t.name,subTitle:t.email})})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"User Name",dataIndex:"username",render:function(e){return Object(n.jsx)("span",{children:e})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"City",dataIndex:"address",render:function(e){return Object(n.jsx)("span",{children:e.city})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"Website",dataIndex:"website",render:function(e){return Object(n.jsx)("span",{children:e})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"",dataIndex:"actions",render:function(t,r){return Object(n.jsx)("div",{className:"text-right",children:Object(n.jsx)(l.a,{title:"View",children:Object(n.jsx)(j.Link,{to:"".concat(v.c,"/clients/edit-profile"),children:Object(n.jsx)(f.a,{type:"primary",className:"mr-2",icon:Object(n.jsx)(m.a,{}),onClick:function(){e.showUserProfile(r)},size:"small"})})})})}}];return Object(n.jsx)(d.a,{bodyStyle:{padding:"0px"},children:Object(n.jsx)(p.a,{columns:i,dataSource:r,rowKey:"id"})})}}]),r}(s.Component);t.default=Object(y.b)((function(e){return{users:e.users}}),(function(e){return{getUserRequested:function(){return e({type:b.b})}}}))(O)}}]);
//# sourceMappingURL=9.d9c65f94.chunk.js.map
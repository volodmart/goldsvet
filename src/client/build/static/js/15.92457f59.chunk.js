(this["webpackJsonppharao-frontend"]=this["webpackJsonppharao-frontend"]||[]).push([[15],{170:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/station-image.3ec9c7cb.png"},214:function(e,t,n){"use strict";var i=n(6),r=n(92),a=n(7),o=n(0),l=n.n(o),s=n(1),c=n.n(s),u=n(12),d=n.n(u),h=n(16);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={children:c.a.node,bar:c.a.bool,multi:c.a.bool,tag:h.tagPropType,value:c.a.oneOfType([c.a.string,c.a.number]),min:c.a.oneOfType([c.a.string,c.a.number]),max:c.a.oneOfType([c.a.string,c.a.number]),animated:c.a.bool,striped:c.a.bool,color:c.a.string,className:c.a.string,barClassName:c.a.string,cssModule:c.a.object,style:c.a.object,barAriaValueText:c.a.string,barAriaLabelledBy:c.a.string},m=function(e){var t=e.children,n=e.className,r=e.barClassName,o=e.cssModule,s=e.value,c=e.min,u=e.max,p=e.animated,x=e.striped,m=e.color,g=e.bar,v=e.multi,b=e.tag,y=e.style,O=e.barAriaValueText,j=e.barAriaLabelledBy,w=Object(a.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),_=Object(h.toNumber)(s)/Object(h.toNumber)(u)*100,C=Object(h.mapToCssModules)(d()(n,"progress"),o),k=Object(h.mapToCssModules)(d()("progress-bar",g&&n||r,p?"progress-bar-animated":null,m?"bg-"+m:null,x||p?"progress-bar-striped":null),o),S=v?t:l.a.createElement("div",Object(i.a)({},w,{className:k,style:f(f({},y),{},{width:_+"%"}),role:"progressbar","aria-valuenow":s,"aria-valuemin":c,"aria-valuemax":u,"aria-valuetext":O,"aria-labelledby":j,children:t}));return g?S:l.a.createElement(b,Object(i.a)({},w,{className:C,children:S}))};m.propTypes=x,m.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},t.a=m},678:function(e,t,n){"use strict";n.r(t);var i=n(22),r=n(0),a=n(353),o=n(87),l=n(86),s=n(88),c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var u=function(e){function t(t,n,i){void 0===t&&(t=4),void 0===n&&(n=3),void 0===i&&(i=!1);var r=e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",i?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return r._kernels=[],r._blur=4,r._quality=3,r.uniforms.uOffset=new Float32Array(2),r._pixelSize=new s.g,r.pixelSize=1,r._clamp=i,Array.isArray(t)?r.kernels=t:(r._blur=t,r.quality=n),r}return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.apply=function(e,t,n,i){var r,a=this._pixelSize.x/t._frame.width,o=this._pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)r=this._kernels[0]+.5,this.uniforms.uOffset[0]=r*a,this.uniforms.uOffset[1]=r*o,e.applyFilter(this,t,n,i);else{for(var l=e.getFilterTexture(),s=t,c=l,u=void 0,d=this._quality-1,h=0;h<d;h++)r=this._kernels[h]+.5,this.uniforms.uOffset[0]=r*a,this.uniforms.uOffset[1]=r*o,e.applyFilter(this,s,c,1),u=s,s=c,c=u;r=this._kernels[d]+.5,this.uniforms.uOffset[0]=r*a,this.uniforms.uOffset[1]=r*o,e.applyFilter(this,s,n,i),e.returnFilterTexture(l)}},t.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce((function(e,t){return e+t+.5}),0))},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var i=e,r=e/t,a=1;a<t;a++)i-=r,n.push(i);this._kernels=n,this._updatePadding()},Object.defineProperty(t.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"===typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof s.g?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),t}(l.h),d=n(90),h=n(89),p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var f=function(e){function t(n){var i=e.call(this)||this;i.angle=45,i._distance=5,i._resolution=d.b.FILTER_RESOLUTION;var r=Object.assign(t.defaults,n),a=r.kernels,o=r.blur,c=r.quality,h=r.pixelSize,p=r.resolution;i._tintFilter=new l.h("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"),i._tintFilter.uniforms.color=new Float32Array(4),i._tintFilter.uniforms.shift=new s.g,i._tintFilter.resolution=p,i._blurFilter=a?new u(a):new u(o,c),i.pixelSize=h,i.resolution=p;var f=r.shadowOnly,x=r.rotation,m=r.distance,g=r.alpha,v=r.color;return i.shadowOnly=f,i.rotation=x,i.distance=m,i.alpha=g,i.color=v,i._updatePadding(),i}return function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.apply=function(e,t,n,i){var r=e.getFilterTexture();this._tintFilter.apply(e,t,r,1),this._blurFilter.apply(e,r,n,i),!0!==this.shadowOnly&&e.applyFilter(this,t,n,0),e.returnFilterTexture(r)},t.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},t.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.angle/s.b},set:function(e){this.angle=e*s.b,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return Object(h.rgb2hex)(this._tintFilter.uniforms.color)},set:function(e){Object(h.hex2rgb)(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),t.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:d.b.FILTER_RESOLUTION},t}(l.h),x=n(13),m=n(3),g=n(355),v=n(277),b=n(278),y=n(279),O=n(214),j=n(4),w=function(e){var t=e.setIsOpen,a=e.isOpen,o=Object(r.useState)({activeStations:["easy","normal"],activePlayingCard:"easy"}),l=Object(i.a)(o,2),s=l[0],c=l[1],u=function(){t(!a)},d=function(e){var t=s.activeStations;0===s.activeStations.filter((function(t){return t===e})).length&&(t.push(e),c(Object(m.a)(Object(m.a)({},s),{},{activeStations:t})))};return Object(j.jsx)(r.Fragment,{children:Object(j.jsxs)(g.a,{isOpen:a,toggle:u,size:"lg",className:"station-modal",children:[Object(j.jsx)("div",{style:{cursor:"pointer"},className:"close-button",onClick:u,children:Object(j.jsx)("img",{src:n(116).default,draggable:!1})}),Object(j.jsxs)(v.a,{style:{background:"transparent"},children:[Object(j.jsx)("div",{className:"bg"}),Object(j.jsx)("div",{className:"position-relative station",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(y.a,{className:"p-0",children:Object(j.jsxs)("div",{className:"station-card ".concat(s.activeStations.filter((function(e){return"normal"===e})).length>0?"unlocked":"locked"," card-1"),children:[Object(j.jsx)("div",{className:"station-info",children:s.activeStations.filter((function(e){return"normal"===e})).length>0?Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(O.a,{className:"station-progress",value:"25",children:"25%"}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:n(170).default})}),Object(j.jsx)("p",{className:"station-description",children:"Win 3.200.00 in total"}),Object(j.jsx)("div",{className:"difficult-type",children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"NORMAL"})})]}):null}),Object(j.jsx)("div",{className:"station-button",onClick:function(){return d("normal")},children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"normal"===s.activePlayingCard?"CONTINUE":s.activeStations.filter((function(e){return"normal"===e})).length>0?"START":"30"})})]})}),Object(j.jsx)(y.a,{className:"p-0",children:Object(j.jsxs)("div",{className:"station-card ".concat(s.activeStations.filter((function(e){return"hard"===e})).length>0?"unlocked":"locked"," card-2"),children:[Object(j.jsx)("div",{className:"station-info",children:s.activeStations.filter((function(e){return"hard"===e})).length>0?Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(O.a,{className:"station-progress",value:"25",children:"25%"}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:n(170).default})}),Object(j.jsx)("p",{className:"station-description",children:"Win 3.200.00 in total"}),Object(j.jsx)("div",{className:"difficult-type",children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"HARD"})})]}):null}),Object(j.jsx)("div",{className:"station-button",onClick:function(){return d("hard")},children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"hard"===s.activePlayingCard?"CONTINUE":s.activeStations.filter((function(e){return"hard"===e})).length>0?"START":"30"})})]})}),Object(j.jsx)(y.a,{className:"p-0",children:Object(j.jsxs)("div",{className:"station-card ".concat(s.activeStations.filter((function(e){return"easy"===e})).length>0?"unlocked":"locked"," card-3"),children:[Object(j.jsx)("div",{className:"station-info",children:s.activeStations.filter((function(e){return"easy"===e})).length>0?Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(O.a,{className:"station-progress",value:"25",children:"25%"}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:n(170).default})}),Object(j.jsx)("p",{className:"station-description",children:"Win 3.200.00 in total"}),Object(j.jsx)("div",{className:"difficult-type",children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"EASY"})})]}):null}),Object(j.jsx)("div",{className:"station-button",onClick:function(){return d("easy")},children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"easy"===s.activePlayingCard?"CONTINUE":s.activeStations.filter((function(e){return"easy"===e})).length>0?"START":"30"})})]})}),Object(j.jsx)(y.a,{className:"p-0",children:Object(j.jsxs)("div",{className:"station-card ".concat(s.activeStations.filter((function(e){return"extreme"===e})).length>0?"unlocked":"locked"," card-4"),children:[Object(j.jsx)("div",{className:"station-info",children:s.activeStations.filter((function(e){return"extreme"===e})).length>0?Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(O.a,{className:"station-progress",value:"25",children:"25%"}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:n(170).default})}),Object(j.jsx)("p",{className:"station-description",children:"Win 3.200.00 in total"}),Object(j.jsx)("div",{className:"difficult-type",children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"EXTREME"})})]}):null}),Object(j.jsx)("div",{className:"station-button",onClick:function(){return d("extreme")},children:Object(j.jsx)("p",{className:"d-flex align-items-center h-100",children:"extreme"===s.activePlayingCard?"CONTINUE":s.activeStations.filter((function(e){return"extreme"===e})).length>0?"START":"30"})})]})})]})})]})]})})},_={current:{level:"1",missions:[]},friends:[],wheel:null,config:{wheel:{sequence:{repeat_level:2,parity:"odd"}}}};t.default=function(){var e=Object(r.useState)({counter:"",missions:[],isWheelActive:!1,expired:!1,canvas:null,destroyApp:!1,unsubscribeEvents:[],testGoRight:!1,testShowOvertake:!1,overviewData:_,intervalId:null,currentFriendsData:null}),t=Object(i.a)(e,2),n=t[0],l=(t[1],Object(r.useState)(!1)),s=Object(i.a)(l,2),c=s[0],u=s[1];return Object(r.useEffect)((function(){var e=document.getElementById("pixi-container");if(e)if(e.getElementsByTagName("canvas")[0])console.log("map already created. close");else{a.f.DEFAULT=a.f.NEAREST;var t,i,r,l,s,c,d,h=[{id:43618,user_id:16516,mission_id:9,game_id:67,modifier_id:1,value:0,target:32e5,status:"ACTIVE",timeout_at:"2021-04-30T10:36:13.000000Z",created_at:"2021-04-27T10:36:14.000000Z",progress:{value:0,target:32e5,percentage:50},difficulty:"NORMAL",game_details:{id:67,title:"Coins of Egypt",thumbnail:"http://h2931731.stratoserver.net/game-6.jpg"},mission:{id:9,level:3,type:"WIN_TOTAL",value:4e6,game_id:null,created_at:"2021-01-05T11:57:47.000000Z"}}],p=[],m=[],g=[],v=[],b=300,y=650,O=!1,j=[],w="".concat(x.a.Domain,"/path/kleinekrone-kp-scrolls-sides.png"),_="".concat(x.a.Domain,"/path/left.png"),C="".concat(x.a.Domain,"/path/kleinekrone-kp-main-bg-web.png"),k="".concat(x.a.Domain,"/path/element-24-6-x@3x.png"),S="".concat(x.a.Domain,"/path/element-25-6-x@3x.png"),T="".concat(x.a.Domain,"/path/element-26-6-x@3x.png"),N="".concat(x.a.Domain,"/path/element-27-6-x@3x.png"),z="".concat(x.a.Domain,"/path/element-28-6-x@3x.png"),I="".concat(x.a.Domain,"/path/element-29-6-x@3x.png"),D="".concat(x.a.Domain,"/path/element-30-6-x@3x.png"),E="".concat(x.a.Domain,"/path/element-31-6-x@3x.png"),F="".concat(x.a.Domain,"/path/element-32-6-x@3x.png"),P="".concat(x.a.Domain,"/path/element-33-6-x@3x.png"),A="".concat(x.a.Domain,"/path/element-34-6-x@3x.png"),M="".concat(x.a.Domain,"/path/element-35-6-x@3x.png"),R="".concat(x.a.Domain,"/path/element-36-6-x@3x.png"),W="".concat(x.a.Domain,"/path/element-37-6-x@3x.png"),L="".concat(x.a.Domain,"/path/element-38-6-x@3x.png"),q="".concat(x.a.Domain,"/path/element-39-6-x@3x.png"),B="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-slotstation-progress-outer.png"),U="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-lvl-complete@2x.png"),V="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-lvl-locked@2x.png"),X="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-wheel-locked@2x.png"),H="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-wheel-unlocked@2x.png"),G="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-ownstate-and-cards-main-back@2x.png"),K="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-slotstation-mainframe@2x.png"),J="".concat(x.a.Domain,"/path/btn-own-position-out.png"),Y="".concat(x.a.Domain,"/path/btn-own-position-hover.png"),Z="".concat(x.a.Domain,"/path/kleinekrone-kp-hl-background.png"),Q="".concat(x.a.Domain,"/path/kleinekrone-kp-hl-en.png"),$="".concat(x.a.Domain,"/path/kleinekrone-kp-small-parchement.png"),ee="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-ownstate-friends.png"),te="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-ownstate-counterfriends.png"),ne=[w,_,C,k,S,R,W,L,B,E,A,D,T,N,M,z,I,q,P,F,U,V,X,H,G,K,J,Y,Z,Q,$,ee,te],ie=[300,150,320,100,320,430,450,250,150,220,70,380,260,250,170,320,400,380,150,350],re=[A,E,R,I,R,D,q,E,W,T,P,W,E,L,N,R,z,S,L,N,S,F,M,W,q,E,R],ae=new a.b;ae.x=0,ae.y=0,ae.vx=0,ae.vy=0;var oe=new a.b;oe.x=0,oe.y=0,oe.vx=0,oe.vy=0;var le=1279,se=a.d.shared;se.reset(),a.i.clearTextureCache();var ce=a.a,ue=se.resources,de=a.g,he=new ce({width:le,height:710,antialias:!0,transparent:!0,autoResize:!0});he.view.id="pixi-kingspath-canvas",document.getElementById("pixi-container").appendChild(he.view);for(var pe={loadType:a.e.LOAD_TYPE.IMAGE,xhrType:a.e.XHR_RESPONSE_TYPE.BLOB},fe=0;fe<ne.length;fe++)se.add(ne[fe],ne[fe],pe);se.load((function(){xe()}));var xe=function(){be(),Ie(),De(),window.addEventListener("resize",De),n.unsubscribeEvents.push((function(){window.removeEventListener("resize",De)})),he.ticker.fps=60,he.ticker.add((function(e){return me(e)}))},me=function(){!0===n.destroyApp&&function(){for(n.destroyApp=!1;he.stage.children[0];)he.stage.children[0].destroy(!0);for(;ae.children[0];)ae.children[0].destroy(!0);he.loader.reset(),he.loader.destroy(!0),se.reset(),se.destroy(!0);for(var e=["bitmaprenderer","2d","webgl","webg2"],t=0;t<e.length;t++){var i=he.view.getContext(e[t]);if(i){var r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r);for(var o=i.getParameter(i.MAX_VERTEX_ATTRIBS),l=0;l<o;++l)i.vertexAttribPointer(l,1,i.FLOAT,!1,0,0);for(var s=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),c=0;c<s;++c)i.activeTexture(i.TEXTURE0+c),i.bindTexture(i.TEXTURE_2D,null),i.bindTexture(i.TEXTURE_CUBE_MAP,null);i.canvas.width=1,i.canvas.height=1;var u=i.getExtension("WEBGL_lose_context");u&&u.loseContext()}}he.destroy(!0),a.i.clearTextureCache(),a.i.destroyTextureCache();for(var d=0;d<unsubscribeEvents.length;d++)unsubscribeEvents[d]()}(),O&&null!=ae&&(ae.x+ae.vx>-100||Math.abs(ae.x+ae.vx+-1279/3)>ae.width||(oe.x+=ae.vx,oe.vx+=ae.vx,(oe.vx<=-2312||oe.vx>=0)&&(oe.x=-1156-oe.vx%1156,oe.vx=-1156),ae.x+=ae.vx)),n.testGoRight&&(ae.x=-ae.width+le/3,n.testGoRight=!1),n.testShowOvertake&&(n.testShowOvertake=!1,ge())},ge=function(){n.mapApiJsonKingspathComplete(n.completedRewards)},ve=function(e){(l=new o.d).fromTo(e.scale,.2,{x:1.2,y:1.2},{x:1.4,y:1.4,onComplete:function(){l.reversed(!l.reversed())},onReverseComplete:function(){l.restart()}},1);for(var t=0;t<j.length;t++)l.fromTo(j[t],.2,{alpha:0},{alpha:.5},1)},be=function(){!0,ye()},ye=function(){!function(){var e;(e=new de(ue[k].texture)).name="land_begin",e.height=680,e.width=430,e.height*=1.2,e.width*=1.2,e.x=350,e.y=100,e.zIndex=20,e.keep=!0,ae.addChild(e)}();var e,t=(e=100)+Math.round(e/10)-Math.round(.1);for(var n=Math.round(2+t),i=1,r=0;r<n&&!(i>100);r++)r<1?(je(r,i),i++):1!==r?r<t&&((i-1)%10===0?(Ce(r,i),r++,Oe(r,i+1),i++):(Ce(r,i),i++)):(Se(r),Te(),(i-1)%10===0&&(r++,Oe(r,i+1)),i++);ze(),Me()},Oe=function(e,t,n){var o=H;n||(o=X);var l=ie[e%ie.length],s=new de(ue[o].texture);s.x=y+b*e+50,s.y=l+70,s.zIndex=20,s.width=95,s.height=102,s.anchor.set(.5,.5);var u=new a.h("SPIN",{fontSize:15,fill:"#ffffff",align:"center",fontWeight:"bold"});return u.resolution=10,u.anchor.set(.5,.5),u.x=0,u.y=5,s.addChild(u),n&&(s.interactive=!0,s.buttonMode=!0,s.on("mousedown",(function(){return console.log('state.handleOpenModal("modal-kingswheel")')})),s.on("touchstart",(function(){return console.log('state.handleOpenModal("modal-kingswheel")')})),s.filters=j,ve(s),s.x+10,s.y+10,c.text="kingspath.info.spin_kingswheel.title",c.y=110,c.style.wordWrapWidth=230,d.text="kingspath.info.spin_kingswheel.message",d.y=210,d.style.wordWrapWidth=230),p.push(s),we(e,s),_e(e,s.x,s.y),i=s.x,r=s.y,s},je=function(e,t){var n=ie[e%ie.length],o=new de(ue[U].texture);o.x=y+b*e,o.y=n,o.width=102,o.height=137,o.zIndex=20;var l=new a.h(t,{fill:"#fff",fontSize:20,align:"center"});return l.anchor.set(.5),l.x=50,l.y=88,o.addChild(l),we(e,o),_e(e,o.x+50,o.y+100),i=o.x,r=o.y+100,p.push(o),ke(y+b*e,n+50,t),1===t&&(o.x-50,o.y+10),o},we=function(e,t){function n(e){return e.y+e.height<600&&e.y+e.height>200}var i,r;i=y+b*e,r=t.y-150;var a=re[e%re.length],o=new de(ue[a].texture);o.width*=1.2,o.height*=1.2,o.x=i,o.y=r,o.zIndex=21,n(o)&&g.push(o),i=y+b*e,r=t.y+200,(o=new de(ue[a=re[(e+1)%re.length]].texture)).width*=1.2,o.height*=1.2,o.x=i,o.y=r,o.zIndex=21,n(o)&&g.push(o),i=y+b*e,r=t.y+250,(o=new de(ue[a=re[(e+2)%re.length]].texture)).width*=1.2,o.height*=1.2,o.x=i,o.y=r,o.zIndex=21,n(o)&&g.push(o),i=y+b*e,r=t.y-250,(o=new de(ue[a=re[(e+3)%re.length]].texture)).width*=1.2,o.height*=1.2,o.x=i,o.y=r,o.zIndex=21,n(o)&&g.push(o)},_e=function(e,t,n){if(0!==e){var i=r-n,o=new a.c;o.x=t,o.y=n,o.zIndex=10,o.lineStyle(5,63724);for(var l=1;l<20;l++){var s=.05*l,c=.05*l+.02,u=Math.PI/20*l;n<r&&(u*=-1);var d=50*Math.sin(u);o.lineTo(-300*s,i*s+d).moveTo(-300*c,i*c+d)}m.push(o)}},Ce=function(e,t){var n=ie[e%ie.length],o=new de(ue[V].texture);o.x=y+b*e,o.y=n,o.width=95,o.height=102,o.zIndex=20;var l=new a.h(t,{fontSize:20,fill:"#fff",align:"center"});return l.anchor.set(.5),l.x=48,l.y=53,o.addChild(l),p.push(o),ke(y+b*e,n,t),we(e,o),_e(e,o.x+50,o.y+50),i=o.x,r=o.y+20,o.x,o},ke=function(e,t,i){var r=new de(ue[ee].texture);r.height=58,r.width=58,r.x=e+120,r.y=t-20,r.anchor.set(.5,.5),r.zIndex=50,r.interactive=!0,r.buttonMode=!0,r.on("mousedown",(function(){n.currentFriendsData=friendArr,n.handleOpenModal("modal-kingspath-friends")})),r.on("touchstart",(function(){n.currentFriendsData=friendArr,n.handleOpenModal("modal-kingspath-friends")}));var o=new de(ue[te].texture);o.height=29,o.width=29,o.x=-25,o.y=-20,o.anchor.set(.5,.5),o.zIndex=50,r.addChild(o);var l=new a.h("friendArr.length.toString()",{fontSize:14,align:"center"});l.anchor.set(.5),l.zIndex=16,l.x=-1,l.y=0,o.addChild(l)},Se=function(e){!function(e,t){var n=ie[e%ie.length],o=new a.b;o.x=y+b*e+60,o.y=n+100,o.filters=j,ve(o);var l=a.g.from("http://h2931731.stratoserver.net/game-6.jpg");l.width=140,l.height=90,l.x=0,l.y=-10,l.zIndex=12,l.anchor.set(.5,.5),o.addChild(l);var s=new de(ue[K].texture);s.x=0,s.y=0,s.zIndex=20,s.width=146,s.height=112,s.interactive=!0,s.buttonMode=!0,s.anchor.set(.5,.5),s.on("mousedown",(function(){return u(!0)})),s.on("touchstart",(function(){return console.log('state.handleOpenModal("modal-kingspath-choose-mission")')})),o.addChild(s);var c=new a.h(10,{fontSize:11,fill:"#fff",align:"center"});c.anchor.set(.5,.5),c.resolution=4,c.x=0,c.y=17,s.addChild(c);var d=new a.h(2,{fontSize:21,fill:"#fff",align:"center"});d.anchor.set(.5,.5),d.resolution=4,d.x=0,d.y=39,s.addChild(d);var h=t.progress.percentage,f=new de(ue[B].texture);f.x=-73,f.y=-80,f.width=146,f.height=20,f.anchor.set(0,0),o.addChild(f);var x=new a.c;x.beginFill(16776960),x.drawRoundedRect(-69,-77,138,14,20),o.addChild(x);var m=1.38*h,g=new a.c;g.beginFill(5105151),g.drawRoundedRect(-69,-77,m,14,0),g.endFill(),g.mask=x,o.addChild(g);var v=new a.h(Math.round(h)+"%",{fontSize:14,fill:16777215,align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowDistance:1,fontWeight:"bold",lineHeight:30});v.anchor.set(.5,.5),v.x=50,v.y=-70,v.resolution=3,o.addChild(v),Re(),p.push(o),ke(y+b*e+25,n-15,e+1),we(e,s),_e(e,o.x,o.y),i=o.x,r=o.y;var O={};O.x=o.x,O.y=o.y,O.x-=50,O.y-=50}(e,h[0])},Te=function(){(!i||i<0)&&(i=-50),t=600-i,Ne()},Ne=function(){ae.x=t},ze=function(){for(var e=0;e<g.length;e++)ae.addChild(g[e]);for(var t=0;t<m.length;t++)ae.addChild(m[t]);for(var n=0;n<p.length;n++)p[n].width*=1.25,p[n].height*=1.25,ae.addChild(p[n]);for(var i=0;i<v.length;i++)ae.addChild(v[i])},Ie=function(){var e;ae.zIndex=20,he.stage.addChild(ae),he.stage.y=50;var t=new a.c;t.beginFill(16776960),t.drawRoundedRect(50,-10,1156,676,20),t.zIndex=50,he.stage.addChild(t),ae.mask=t,oe.x=-1156,oe.vx=-1156,oe.y=10,oe.zIndex=10,oe.mask=t,he.stage.addChild(oe);for(var n=0;n<3;n++)(e=new de(ue[C].texture)).name="",e.height=626,e.width=1156,e.x=1156*n,e.y=0,e.zIndex=10,oe.addChild(e);(e=new de(ue[w].texture)).name="map_left",e.height=653,e.width=292,e.x=10,e.y=0,e.vx=0,e.vy=0,e.zIndex=30,he.stage.addChild(e),(e=new de(ue[_].texture)).name="map_arrow_left",e.interactive=!0,e.buttonMode=!0,e.on("mousedown",(function(){return Ee()})),e.on("touchstart",(function(){return Ee()})),e.on("mouseup",(function(){return Fe()})),e.on("touchend",(function(){return Fe()})),e.height=104,e.width=50,e.x=45,e.y=270,e.vx=0,e.vy=0,e.zIndex=35,he.stage.addChild(e),(e=new de(ue[w].texture)).name="map_right",e.height=653,e.width=292,e.x=1269,e.y=0,e.scale.x*=-1,e.zIndex=30,he.stage.addChild(e),(e=new de(ue[_].texture)).name="map_arrow_right",e.interactive=!0,e.buttonMode=!0,e.on("mousedown",(function(){return Pe()})),e.on("touchstart",(function(){return Pe()})),e.on("mouseup",(function(){return Ae()})),e.on("touchend",(function(){return Ae()})),e.height=104,e.width=50,e.x=1234,e.y=270,e.scale.x*=-1,e.zIndex=35,he.stage.addChild(e),(e=new de(ue[$].texture)).name="parchment",e.height=260,e.width=350,e.x=90,e.y=400,e.zIndex=30,s=e,he.stage.addChild(e),(c=new a.h("SELETE MISSION",{fontSize:31,fill:"#a73000",align:"center",lineHeight:40,wordWrap:!0,wordWrapWidth:150})).x=110,c.y=130,c.angle=6,c.anchor.set(.5,.5),c.resolution=2,s.addChild(c),(d=new a.h("Turn over a card & takes on another mission on the pyramid path",{fontSize:22,fill:"#720d02",align:"center",lineHeight:25,wordWrapWidth:150,wordWrap:!0})).x=295,d.y=150,d.angle=6,d.anchor.set(.5,.5),d.resolution=2,s.addChild(d);for(var i=0;i<4;i++){var r=new f;r.blur=4,r.alpha=.5,r.rotation=90*i,r.color=16777215,r.distance=20,r.alpha=0,j.push(r)}var o=new de(ue[J].texture);o.name="button-position",o.height=32,o.width=221,o.x=515,o.y=610,o.zIndex=55,o.interactive=!0,o.buttonMode=!0,o.on("mousedown",(function(){return Ne()})),o.on("touchstart",(function(){return Ne()})),o.mouseover=function(){this.alpha=0},o.mouseout=function(){this.alpha=1},he.stage.addChild(o);var l=new de(ue[Y].texture);l.name="button-position",l.height=32,l.width=221,l.x=515,l.y=610,l.zIndex=50,l.interactive=!0,l.buttonMode=!0,l.on("mousedown",(function(){return Ne()})),l.on("touchstart",(function(){return Ne()})),he.stage.addChild(l);var u=new a.h("POSITION",{fontSize:18,align:"center"});u.anchor.set(.5),u.zIndex=56,u.x=624,u.y=626,he.stage.addChild(u);var h=new de(ue[Z].texture);h.name="",h.height=276,h.width=676,h.x=5,h.y=-35,h.zIndex=50,he.stage.addChild(h);var p=new de(ue[Q].texture);p.name="",p.height=145,p.width=334,p.x=210,p.y=50,p.zIndex=50,he.stage.addChild(p);he.stage.children.sort((function(e,t){return e.zIndex=e.zIndex||0,t.zIndex=t.zIndex||0,e.zIndex-t.zIndex}))},De=function(){var e=document.getElementById("kingspath");if(e){var t,n,i=[le,710],r=i[0]/i[1],a=he.view.parentNode;a.clientWidth/a.clientHeight>=r?(t=a.clientHeight*r,n=a.clientHeight):(t=a.clientWidth,n=a.clientWidth/r),he.view.style.width=t+"px",he.view.style.height=n+"px";var o=e.getElementsByClassName("timer-container")[0];o&&(o.style.width=t+"px")}},Ee=function(){O=!0,ae.vx=80,ae.vy=0},Fe=function(){O=!1,ae.vx=0},Pe=function(){O=!0,ae.vx=-80,ae.vy=0},Ae=function(){O=!1,ae.vx=0},Me=function(){try{he.view.style.display="inline-table",!0,n.completedRewards&&(n.overtake?ge():n.mapApiJsonKingspathComplete(n.completedRewards))}catch(e){console.log("lost context...")}},Re=function(){n.intervalId=setInterval((function(){if(!(n.missions.length<=0)){var e=(new Date).getTime(),t=n.endDate-e;if(t<0)return n.expired=!0,void clearInterval(n.intervalId);n.expired=!1;var i=Math.floor(t%31536e6/864e5),r=Math.floor(t%864e5/36e5)+24*i,a=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);r=("0"+r).substr(-2,2),a=("0"+a).substr(-2,2),o=("0"+o).substr(-2,2),undefined.text=r+":"+a+":"+o}}),1e3)}}else console.log("no container. close")}),[]),Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(w,{isOpen:c,setIsOpen:function(e){return u(e)}}),Object(j.jsx)("div",{id:"pixi-container",style:{marginTop:"-70px"}})]})}}}]);
//# sourceMappingURL=15.92457f59.chunk.js.map
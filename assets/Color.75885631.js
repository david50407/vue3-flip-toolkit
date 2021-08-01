import{R as e,W as t,a1 as r,a2 as n,a3 as a,U as o,a4 as l,a5 as c,a6 as i,a7 as u,a8 as s}from"./vendor.486a9800.js";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}var d="undefined"!=typeof window?t.exports.useLayoutEffect:t.exports.useEffect;function g(e){var r=t.exports.useRef(e);return t.exports.useEffect((function(){r.current=e})),t.exports.useCallback((function(e){return r.current&&r.current(e)}),[])}var p=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},v=function(e){return"touches"in e},b=function(e,t){var r=e.getBoundingClientRect(),n=v(t)?t.touches[0]:t;return{left:p((n.pageX-(r.left+window.pageXOffset))/r.width),top:p((n.pageY-(r.top+window.pageYOffset))/r.height)}},m=function(e){!v(e)&&e.preventDefault()},y=e.memo((function(r){var n=r.onMove,a=r.onKey,o=h(r,["onMove","onKey"]),l=t.exports.useRef(null),c=t.exports.useRef(!1),i=t.exports.useState(!1),u=i[0],s=i[1],p=g(n),y=g(a),x=t.exports.useCallback((function(e){m(e),(v(e)?e.touches.length>0:e.buttons>0)&&l.current?p(b(l.current,e)):s(!1)}),[p]),w=t.exports.useCallback((function(e){var t,r=e.nativeEvent,n=l.current;m(r),t=r,c.current&&!v(t)||(c.current||(c.current=v(t)),0)||!n||(n.focus(),p(b(n,r)),s(!0))}),[p]),k=t.exports.useCallback((function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),y({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))}),[y]),M=t.exports.useCallback((function(){return s(!1)}),[]),_=t.exports.useCallback((function(e){var t=e?window.addEventListener:window.removeEventListener;t(c.current?"touchmove":"mousemove",x),t(c.current?"touchend":"mouseup",M)}),[x,M]);return d((function(){return _(u),function(){u&&_(!1)}}),[u,_]),e.createElement("div",f({},o,{className:"react-colorful__interactive",ref:l,onTouchStart:w,onMouseDown:w,onKeyDown:k,tabIndex:0,role:"slider"}))})),x=function(e){return e.filter(Boolean).join(" ")},w=function(t){var r=t.color,n=t.left,a=t.top,o=void 0===a?.5:a,l=x(["react-colorful__pointer",t.className]);return e.createElement("div",{className:l,style:{top:100*o+"%",left:100*n+"%"}},e.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},k=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},M={grad:.9,turn:360,rad:360/(2*Math.PI)},_=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},E=function(e,t){return void 0===t&&(t="deg"),Number(e)*(M[t]||1)},C=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},O=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:k(e.h),s:k(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:k(a/2),a:k(n,2)}},S=function(e){var t=O(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},j=function(e){var t=O(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},N=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var o=Math.floor(t),l=n*(1-r),c=n*(1-(t-o)*r),i=n*(1-(1-t+o)*r),u=o%6;return{r:k(255*[n,c,l,l,i,n][u]),g:k(255*[i,n,n,c,l,l][u]),b:k(255*[l,l,i,n,n,c][u]),a:k(a,2)}},H=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},z=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,o=Math.max(t,r,n),l=o-Math.min(t,r,n),c=l?o===t?(r-n)/l:o===r?2+(n-t)/l:4+(t-r)/l:0;return{h:k(60*(c<0?c+6:c)),s:k(o?l/o*100:0),v:k(o/255*100),a:a}},I=e.memo((function(t){var r=t.hue,n=t.onChange,a=x(["react-colorful__hue",t.className]);return e.createElement("div",{className:a},e.createElement(y,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:p(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":k(r)},e.createElement(w,{className:"react-colorful__hue-pointer",left:r/360,color:S({h:r,s:100,v:100,a:1})})))})),L=e.memo((function(t){var r=t.hsva,n=t.onChange,a={backgroundColor:S({h:r.h,s:100,v:100,a:1})};return e.createElement("div",{className:"react-colorful__saturation",style:a},e.createElement(y,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:p(r.s+100*e.left,0,100),v:p(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+k(r.s)+"%, Brightness "+k(r.v)+"%"},e.createElement(w,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:S(r)})))})),R=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},B=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")};function q(e,r,n){var a=g(n),o=t.exports.useState((function(){return e.toHsva(r)})),l=o[0],c=o[1],i=t.exports.useRef({color:r,hsva:l});t.exports.useEffect((function(){if(!e.equal(r,i.current.color)){var t=e.toHsva(r);i.current={hsva:t,color:r},c(t)}}),[r,e]),t.exports.useEffect((function(){var t;R(l,i.current.hsva)||e.equal(t=e.fromHsva(l),i.current.color)||(i.current={hsva:l,color:t},a(t))}),[l,e,a]);var u=t.exports.useCallback((function(e){c((function(t){return Object.assign({},t,e)}))}),[]);return[l,u]}var P,T=function(){d((function(){if("undefined"!=typeof document&&!P){(P=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0;e&&P.setAttribute("nonce",e),document.head.appendChild(P)}}),[])},X=function(t){var r=t.className,n=t.colorModel,a=t.color,o=void 0===a?n.defaultColor:a,l=t.onChange,c=h(t,["className","colorModel","color","onChange"]);T();var i=q(n,o,l),u=i[0],s=i[1],d=x(["react-colorful",r]);return e.createElement("div",f({},c,{className:d}),e.createElement(L,{hsva:u,onChange:s}),e.createElement(I,{hue:u.h,onChange:s,className:"react-colorful__last-control"}))},A={defaultColor:"000",toHsva:function(e){return z(_(e))},fromHsva:function(e){return r=(t=N(e)).g,n=t.b,"#"+H(t.r)+H(r)+H(n);var t,r,n},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||R(_(e),_(t))}},$=function(t){var r=t.className,n=t.hsva,a=t.onChange,o={backgroundImage:"linear-gradient(90deg, "+j(Object.assign({},n,{a:0}))+", "+j(Object.assign({},n,{a:1}))+")"},l=x(["react-colorful__alpha",r]);return e.createElement("div",{className:l},e.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),e.createElement(y,{onMove:function(e){a({a:e.left})},onKey:function(e){a({a:p(n.a+e.left)})},"aria-label":"Alpha","aria-valuetext":k(100*n.a)+"%"},e.createElement(w,{className:"react-colorful__alpha-pointer",left:n.a,color:j(n)})))},G=function(t){var r=t.className,n=t.colorModel,a=t.color,o=void 0===a?n.defaultColor:a,l=t.onChange,c=h(t,["className","colorModel","color","onChange"]);T();var i=q(n,o,l),u=i[0],s=i[1],d=x(["react-colorful",r]);return e.createElement("div",f({},c,{className:d}),e.createElement(L,{hsva:u,onChange:s}),e.createElement(I,{hue:u.h,onChange:s}),e.createElement($,{hsva:u,onChange:s,className:"react-colorful__last-control"}))},W={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?C({h:E(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:j,equal:B},K={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?z({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var t=N(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:B};const D={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},F={};for(const et of Object.keys(D))F[D[et]]=et;const V={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var U=V;for(const et of Object.keys(V)){if(!("channels"in V[et]))throw new Error("missing channels property: "+et);if(!("labels"in V[et]))throw new Error("missing channel labels property: "+et);if(V[et].labels.length!==V[et].channels)throw new Error("channel and label counts mismatch: "+et);const{channels:e,labels:t}=V[et];delete V[et].channels,delete V[et].labels,Object.defineProperty(V[et],"channels",{value:e}),Object.defineProperty(V[et],"labels",{value:t})}V.rgb.hsl=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(t,r,n),o=Math.max(t,r,n),l=o-a;let c,i;o===a?c=0:t===o?c=(r-n)/l:r===o?c=2+(n-t)/l:n===o&&(c=4+(t-r)/l),c=Math.min(60*c,360),c<0&&(c+=360);const u=(a+o)/2;return i=o===a?0:u<=.5?l/(o+a):l/(2-o-a),[c,100*i,100*u]},V.rgb.hsv=function(e){let t,r,n,a,o;const l=e[0]/255,c=e[1]/255,i=e[2]/255,u=Math.max(l,c,i),s=u-Math.min(l,c,i),f=function(e){return(u-e)/6/s+.5};return 0===s?(a=0,o=0):(o=s/u,t=f(l),r=f(c),n=f(i),l===u?a=n-r:c===u?a=1/3+t-n:i===u&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*u]},V.rgb.hwb=function(e){const t=e[0],r=e[1];let n=e[2];const a=V.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[a,100*o,100*n]},V.rgb.cmyk=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(1-t,1-r,1-n);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},V.rgb.keyword=function(e){const t=F[e];if(t)return t;let r,n=1/0;for(const l of Object.keys(D)){const t=(o=D[l],((a=e)[0]-o[0])**2+(a[1]-o[1])**2+(a[2]-o[2])**2);t<n&&(n=t,r=l)}var a,o;return r},V.keyword.rgb=function(e){return D[e]},V.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;return[100*(.4124*t+.3576*r+.1805*n),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},V.rgb.lab=function(e){const t=V.rgb.xyz(e);let r=t[0],n=t[1],a=t[2];r/=95.047,n/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*n-16,500*(r-n),200*(n-a)]},V.hsl.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;let a,o,l;if(0===r)return l=255*n,[l,l,l];a=n<.5?n*(1+r):n+r-n*r;const c=2*n-a,i=[0,0,0];for(let u=0;u<3;u++)o=t+1/3*-(u-1),o<0&&o++,o>1&&o--,l=6*o<1?c+6*(a-c)*o:2*o<1?a:3*o<2?c+(a-c)*(2/3-o)*6:c,i[u]=255*l;return i},V.hsl.hsv=function(e){const t=e[0];let r=e[1]/100,n=e[2]/100,a=r;const o=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,a*=o<=1?o:2-o;return[t,100*(0===n?2*a/(o+a):2*r/(n+r)),100*((n+r)/2)]},V.hsv.rgb=function(e){const t=e[0]/60,r=e[1]/100;let n=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),l=255*n*(1-r),c=255*n*(1-r*o),i=255*n*(1-r*(1-o));switch(n*=255,a){case 0:return[n,i,l];case 1:return[c,n,l];case 2:return[l,n,i];case 3:return[l,c,n];case 4:return[i,l,n];case 5:return[n,l,c]}},V.hsv.hsl=function(e){const t=e[0],r=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let o,l;l=(2-r)*n;const c=(2-r)*a;return o=r*a,o/=c<=1?c:2-c,o=o||0,l/=2,[t,100*o,100*l]},V.hwb.rgb=function(e){const t=e[0]/360;let r=e[1]/100,n=e[2]/100;const a=r+n;let o;a>1&&(r/=a,n/=a);const l=Math.floor(6*t),c=1-n;o=6*t-l,0!=(1&l)&&(o=1-o);const i=r+o*(c-r);let u,s,f;switch(l){default:case 6:case 0:u=c,s=i,f=r;break;case 1:u=i,s=c,f=r;break;case 2:u=r,s=c,f=i;break;case 3:u=r,s=i,f=c;break;case 4:u=i,s=r,f=c;break;case 5:u=c,s=r,f=i}return[255*u,255*s,255*f]},V.cmyk.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},V.xyz.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100;let a,o,l;return a=3.2406*t+-1.5372*r+-.4986*n,o=-.9689*t+1.8758*r+.0415*n,l=.0557*t+-.204*r+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},V.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*r-16,500*(t-r),200*(r-n)]},V.lab.xyz=function(e){let t,r,n;r=(e[0]+16)/116,t=e[1]/500+r,n=r-e[2]/200;const a=r**3,o=t**3,l=n**3;return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},V.lab.lch=function(e){const t=e[0],r=e[1],n=e[2];let a;a=360*Math.atan2(n,r)/2/Math.PI,a<0&&(a+=360);return[t,Math.sqrt(r*r+n*n),a]},V.lch.lab=function(e){const t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},V.rgb.ansi16=function(e,t=null){const[r,n,a]=e;let o=null===t?V.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),0===o)return 30;let l=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(l+=60),l},V.hsv.ansi16=function(e){return V.rgb.ansi16(V.hsv.rgb(e),e[2])},V.rgb.ansi256=function(e){const t=e[0],r=e[1],n=e[2];if(t===r&&r===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},V.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},V.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},V.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},V.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map((e=>e+e)).join(""));const n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},V.rgb.hcg=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(Math.max(t,r),n),o=Math.min(Math.min(t,r),n),l=a-o;let c,i;return c=l<1?o/(1-l):0,i=l<=0?0:a===t?(r-n)/l%6:a===r?2+(n-t)/l:4+(t-r)/l,i/=6,i%=1,[360*i,100*l,100*c]},V.hsl.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r);let a=0;return n<1&&(a=(r-.5*n)/(1-n)),[e[0],100*n,100*a]},V.hsv.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=t*r;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},V.hcg.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];const a=[0,0,0],o=t%1*6,l=o%1,c=1-l;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=c,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=c,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=c}return i=(1-r)*n,[255*(r*a[0]+i),255*(r*a[1]+i),255*(r*a[2]+i)]},V.hcg.hsv=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);let n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},V.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},V.hcg.hwb=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},V.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,n=r-t;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},V.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},V.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},V.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},V.gray.hsl=function(e){return[0,0,e[0]]},V.gray.hsv=V.gray.hsl,V.gray.hwb=function(e){return[0,100,e[0]]},V.gray.cmyk=function(e){return[0,0,0,e[0]]},V.gray.lab=function(e){return[e[0],0,0]},V.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},V.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const Y=U;function J(e){const t=function(){const e={},t=Object.keys(Y);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){const e=r.pop(),n=Object.keys(Y[e]);for(let a=n.length,o=0;o<a;o++){const a=n[o],l=t[a];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,r.unshift(a))}}return t}function Q(e,t){return function(r){return t(e(r))}}function Z(e,t){const r=[t[e].parent,e];let n=Y[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),n=Q(Y[t[a].parent][a],n),a=t[a].parent;return n.conversion=r,n}const ee=U,te=function(e){const t=J(e),r={},n=Object.keys(t);for(let a=n.length,o=0;o<a;o++){const e=n[o];null!==t[e].parent&&(r[e]=Z(e,t))}return r},re={};Object.keys(ee).forEach((e=>{re[e]={},Object.defineProperty(re[e],"channels",{value:ee[e].channels}),Object.defineProperty(re[e],"labels",{value:ee[e].labels});const t=te(e);Object.keys(t).forEach((r=>{const n=t[r];re[e][r]=function(e){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const n=e(t);if("object"==typeof n)for(let e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),re[e][r].raw=function(e){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))}));var ne=re,ae=r,oe=/\s/;var le=function(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t},ce=/^\s+/;var ie=function(e){return e?e.slice(0,le(e)+1).replace(ce,""):e},ue=n,se=a,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,de=/^0o[0-7]+$/i,ge=parseInt;var pe=n,ve=function(){return ae.Date.now()},be=function(e){if("number"==typeof e)return e;if(se(e))return NaN;if(ue(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ue(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ie(e);var r=he.test(e);return r||de.test(e)?ge(e.slice(2),r?2:8):fe.test(e)?NaN:+e},me=Math.max,ye=Math.min;var xe=function(e,t,r){var n,a,o,l,c,i,u=0,s=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,o=a;return n=a=void 0,u=t,l=e.apply(o,r)}function g(e){return u=e,c=setTimeout(v,t),s?d(e):l}function p(e){var r=e-i;return void 0===i||r>=t||r<0||f&&e-u>=o}function v(){var e=ve();if(p(e))return b(e);c=setTimeout(v,function(e){var r=t-(e-i);return f?ye(r,o-(e-u)):r}(e))}function b(e){return c=void 0,h&&n?d(e):(n=a=void 0,l)}function m(){var e=ve(),r=p(e);if(n=arguments,a=this,i=e,r){if(void 0===c)return g(i);if(f)return clearTimeout(c),c=setTimeout(v,t),d(i)}return void 0===c&&(c=setTimeout(v,t)),l}return t=be(t)||0,pe(r)&&(s=!!r.leading,o=(f="maxWait"in r)?me(be(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,n=i=a=c=void 0},m.flush=function(){return void 0===c?l:b(ve())},m},we=n;var ke,Me,_e=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return we(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),xe(e,t,{leading:n,maxWait:t,trailing:a})};function Ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var Ne=o.div({position:"relative",maxWidth:250}),He=o(l)({position:"absolute",zIndex:1,top:4,left:4}),ze=o.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ie=o(c)((function(e){return{fontFamily:e.theme.typography.fonts.base}})),Le=o.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Re=o.div((function(e){var t=e.theme;return{width:16,height:16,boxShadow:e.active?"".concat(t.appBorderColor," 0 0 0 1px inset, ").concat(t.color.mediumdark,"50 0 0 0 4px"):"".concat(t.appBorderColor," 0 0 0 1px inset"),borderRadius:t.appBorderRadius}})),Be=function(t){var r=t.value,n=t.active,a=t.onClick,o=t.style,l=je(t,["value","active","onClick","style"]),c="linear-gradient(".concat(r,", ").concat(r,"), ").concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',", linear-gradient(#fff, #fff)");return e.createElement(Re,Se({},l,{active:n,onClick:a,style:Object.assign({},o,{backgroundImage:c})}))};Be.displayName="Swatch";var qe,Pe,Te=o(i.Input)((function(e){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.theme.typography.fonts.base}})),Xe=o(u)((function(e){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.theme.input.color}}));(Pe=qe||(qe={})).RGB="rgb",Pe.HSL="hsl",Pe.HEX="hex";var Ae=Object.values(qe),$e=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Ge=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,We=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Ke=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,De=/^\s*#?([0-9a-f]{3})\s*$/i,Fe=(Oe(ke={},qe.HEX,(function(t){return e.createElement(X,f({},t,{colorModel:A}))})),Oe(ke,qe.RGB,(function(t){return e.createElement(G,f({},t,{colorModel:K}))})),Oe(ke,qe.HSL,(function(t){return e.createElement(G,f({},t,{colorModel:W}))})),ke),Ve=(Oe(Me={},qe.HEX,"transparent"),Oe(Me,qe.RGB,"rgba(0, 0, 0, 0)"),Oe(Me,qe.HSL,"hsla(0, 0%, 0%, 0)"),Me),Ue=function(e){var t=null==e?void 0:e.match($e);if(!t)return[0,0,0,1];var r=Ee(t,5),n=r[1],a=r[2],o=r[3],l=r[4];return[n,a,o,void 0===l?1:l].map(Number)},Ye=function(e){var t;if(e){var r=!0;if(Ge.test(e)){var n,a=Ee(Ue(e),4),o=a[0],l=a[1],c=a[2],i=a[3],u=Ee(ne.rgb.hsl([o,l,c])||[0,0,0],3),s=u[0],f=u[1],h=u[2];return Oe(n={valid:r,value:e,keyword:ne.rgb.keyword([o,l,c]),colorSpace:qe.RGB},qe.RGB,e),Oe(n,qe.HSL,"hsla(".concat(s,", ").concat(f,"%, ").concat(h,"%, ").concat(i,")")),Oe(n,qe.HEX,"#".concat(ne.rgb.hex([o,l,c]).toLowerCase())),n}if(We.test(e)){var d,g=Ee(Ue(e),4),p=g[0],v=g[1],b=g[2],m=g[3],y=Ee(ne.hsl.rgb([p,v,b])||[0,0,0],3),x=y[0],w=y[1],k=y[2];return Oe(d={valid:r,value:e,keyword:ne.hsl.keyword([p,v,b]),colorSpace:qe.HSL},qe.RGB,"rgba(".concat(x,", ").concat(w,", ").concat(k,", ").concat(m,")")),Oe(d,qe.HSL,e),Oe(d,qe.HEX,"#".concat(ne.hsl.hex([p,v,b]).toLowerCase())),d}var M=e.replace("#",""),_=ne.keyword.rgb(M)||ne.hex.rgb(M),E=ne.rgb.hsl(_),C=e;if(/[^#a-f0-9]/i.test(e)?C=M:Ke.test(e)&&(C="#".concat(M)),C.startsWith("#"))r=Ke.test(C);else try{ne.keyword.hex(C)}catch(O){r=!1}return Oe(t={valid:r,value:C,keyword:ne.rgb.keyword(_),colorSpace:qe.HEX},qe.RGB,"rgba(".concat(_[0],", ").concat(_[1],", ").concat(_[2],", 1)")),Oe(t,qe.HSL,"hsla(".concat(E[0],", ").concat(E[1],"%, ").concat(E[2],"%, 1)")),Oe(t,qe.HEX,C),t}},Je=function(e,r){var n=Ee(t.exports.useState(e||""),2),a=n[0],o=n[1],l=Ee(t.exports.useState((function(){return Ye(a)})),2),c=l[0],i=l[1],u=Ee(t.exports.useState((null==c?void 0:c.colorSpace)||qe.HEX),2),s=u[0],f=u[1];t.exports.useEffect((function(){void 0===e&&(o(""),i(void 0),f(qe.HEX))}),[e]);var h=t.exports.useMemo((function(){return function(e,t,r){if(!e||null==t||!t.valid)return Ve[r];if(r!==qe.HEX)return(null==t?void 0:t[r])||Ve[r];if(!t.hex.startsWith("#"))try{return"#".concat(ne.keyword.hex(t.hex))}catch(i){return Ve.hex}var n=t.hex.match(De);if(!n)return Ke.test(t.hex)?t.hex:Ve.hex;var a=Ee(n[1].split(""),3),o=a[0],l=a[1],c=a[2];return"#".concat(o).concat(o).concat(l).concat(l).concat(c).concat(c)}(a,c,s).toLowerCase()}),[a,c,s]),d=t.exports.useCallback((function(e){var t=Ye(e);o((null==t?void 0:t.value)||e||""),t&&(i(t),f(t.colorSpace),r(t.value))}),[r]),g=t.exports.useCallback((function(){var e=Ae.indexOf(s)+1;e>=Ae.length&&(e=0),f(Ae[e]);var t=(null==c?void 0:c[Ae[e]])||"";o(t),r(t)}),[c,s,r]);return{value:a,realValue:h,updateValue:d,color:c,colorSpace:s,cycleColorSpace:g}},Qe=function(e){return e.replace(/\s*/,"").toLowerCase()},Ze=function(r){var n=r.name,a=r.value,o=r.onChange,c=r.onFocus,i=r.onBlur,u=r.presetColors,f=r.startOpen,h=Je(a,_e(o,200)),d=h.value,g=h.realValue,p=h.updateValue,v=h.color,b=h.colorSpace,m=h.cycleColorSpace,y=function(e,r,n){var a=Ee(t.exports.useState(null!=r&&r.valid?[r]:[]),2),o=a[0],l=a[1];t.exports.useEffect((function(){void 0===r&&l([])}),[r]);var c=t.exports.useMemo((function(){return(e||[]).map((function(e){return"string"==typeof e?Ye(e):e.title?Object.assign({},Ye(e.color),{keyword:e.title}):Ye(e.color)})).concat(o).filter(Boolean).slice(-27)}),[e,o]),i=t.exports.useCallback((function(e){null!=e&&e.valid&&(c.some((function(t){return Qe(t[n])===Qe(e[n])}))||l((function(t){return t.concat(e)})))}),[n,c]);return{presets:c,addPreset:i}}(u,v,b),x=y.presets,w=y.addPreset,k=Fe[b];return e.createElement(Ne,null,e.createElement(He,{trigger:"click",startOpen:f,closeOnClick:!0,onVisibilityChange:function(){return w(v)},tooltip:e.createElement(ze,null,e.createElement(k,{color:"transparent"===g?"#000000":g,onChange:p,onFocus:c,onBlur:i}),x.length>0&&e.createElement(Le,null,x.map((function(t,r){return e.createElement(l,{key:"".concat(t.value,"-").concat(r),hasChrome:!1,tooltip:e.createElement(Ie,{note:t.keyword||t.value})},e.createElement(Be,{value:t[b],active:v&&Qe(t[b])===Qe(v[b]),onClick:function(){return p(t.value)}}))}))))},e.createElement(Be,{value:g,style:{margin:4}})),e.createElement(Te,{id:s(n),value:d,onChange:function(e){return p(e.target.value)},onFocus:function(e){return e.target.select()},placeholder:"Choose color..."}),e.createElement(Xe,{icon:"markup",onClick:m}))};Ze.displayName="ColorControl";export{Ze as ColorControl,Ze as default};
//# sourceMappingURL=Color.75885631.js.map
var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(l,t,i)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[t]=i,o=(e,l)=>{for(var t in l||(l={}))a.call(l,t)&&n(e,t,l[t]);if(i)for(var t of i(l))s.call(l,t)&&n(e,t,l[t]);return e},r=(e,i)=>l(e,t(i));import{c as p,A as d,M as u,d as c,u as f,o as m,a as g,w as _,b as v,E as y,L as h,e as b,t as x,f as k,r as C,g as E,h as w,D as S,F as N,i as $,j as I,k as M,v as F,l as T,m as O,n as j,p as D,q as B,s as L,x as A,y as V,z,B as q,C as P,G as U,H as J,I as R,J as X,K as G}from"./vendor.486a9800.js";var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Example",["Introduction","Simple Examples","List Transitions","Stagger Effects"]]}}}});const H={};function W(e){var l=e,{components:t}=l,n=((e,l)=>{var t={};for(var n in e)a.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))l.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(l,["components"]);return p("wrapper",r(o(o({},H),n),{components:t,mdxType:"MDXLayout"}),p(u,{title:"Example/Introduction",mdxType:"Meta"}),p("h1",null,"vue3-flip-toolkit"),p("p",null,"Vue 3 port of ",p("a",o({parentName:"p"},{href:"https://github.com/aholachek/react-flip-toolkit"}),"flip-toolkit"),"."),p("h2",null,"Examples"),p("p",null,"See examples in storybook or source of examples under ",p("inlineCode",{parentName:"p"},"stories/"),"."),p("p",null,"To launch storybook, run ",p("inlineCode",{parentName:"p"},"npm run serve"),"."),p("h2",null,"Different to ",p("inlineCode",{parentName:"h2"},"react-flip-toolkit")),p("ul",null,p("li",{parentName:"ul"},p("inlineCode",{parentName:"li"},'<Flipper element="div">')," becomes ",p("inlineCode",{parentName:"li"},'<Flipper is="div">')," to match ",p("inlineCode",{parentName:"li"},'<component is="div">')," syntax in Vue"),p("li",{parentName:"ul"},p("inlineCode",{parentName:"li"},"<Flipped>")," also wrappers ",p("inlineCode",{parentName:"li"},"<slots />")," while React don't, you can control wrapper element with ",p("inlineCode",{parentName:"li"},'<Flipped is="div">'))),p("h2",null,"Recommended IDE Setup"),p("p",null,p("a",o({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VSCode")," + ",p("a",o({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar"}),"Volar")," (and disable Vetur, if you installed)."),p("h2",null,"TODOs"),p("ul",null,p("li",{parentName:"ul"},"Port more examples from ",p("inlineCode",{parentName:"li"},"react-flip-toolkit"))))}W.isMDXComponent=!0;const Y=()=>{throw new Error("Docs-only story")};Y.parameters={docsOnly:!0};const Z={title:"Example/Introduction",includeStories:["__page"]},Q={};Z.parameters=Z.parameters||{},Z.parameters.docs=r(o({},Z.parameters.docs||{}),{page:()=>p(d,{mdxStoryNameToKey:Q,mdxComponentMeta:Z},p(W,null))});var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Y,default:Z});const le=k("×");var te=c({props:{id:{type:Number,required:!0},title:{type:String,required:!0},type:{type:String,required:!0},stagger:{type:Boolean,required:!0}},emits:["filtered"],setup(e,{emit:l}){const t=e,i=f(),a=`item-${t.id}`,s=(e,l)=>e.type!==l.type,n=({el:e,index:l})=>{h({onUpdate:l=>e.style.opacity=l,delay:50*l})},o=e=>({el:l,index:t,removeElement:i})=>{h({config:{overshootClamping:!0},onUpdate:t=>{l.style.transform=`scale${"grid"===e?"X":"Y"}(${1-t})`},delay:50*t,onComplete:()=>{l.style.opacity="",i()}})},r=o("grid"),p=o("list");return(t,o)=>(m(),g(v(y),{is:"li",class:[v(i).item,{[v(i).list]:"list"===e.type}],"flip-id":a,stagger:e.stagger,"should-invert":s,onAppear:n,onExit:o[2]||(o[2]=l=>"grid"===e.type?v(r)(l):v(p)(l))},{default:_((()=>[b(v(y),{"inverse-flip-id":a},{default:_((()=>[b(v(y),{"flip-id":`${a}-content`,translate:"","should-flip":s,"delay-until":a},{default:_((()=>[b("h3",null,x(e.title),1),b("p",null,x(e.title),1)])),_:1},8,["flip-id"]),b(v(y),{is:"button","flip-id":`${a}-button`,"should-flip":s,"delay-until":a,class:v(i).remove,onClick:o[1]||(o[1]=t=>l("filtered",e.id))},{default:_((()=>[le])),_:1},8,["flip-id","class"])])),_:1})])),_:1},8,["class","stagger"]))}});var ie={list:"_list_17gss_2",item:"_item_17gss_2",remove:"_remove_17gss_37"};(te.__cssModules={}).$style=ie,te.__docgenInfo={displayName:"Card",description:"",tags:{}};var ae=[{id:1,title:"Twas brillig and the slithy toves"},{id:2,title:"Did gyre and gimbel in the wabe"},{id:3,title:"All mimsy were the borogroves"},{id:4,title:"The mome raths outgrabe"},{id:5,title:"Beware the jabberwock my son!!"},{id:6,title:"The jaws that bite, the claws that snatch"}];const se=b("legend",null,"Sort",-1),ne=b("legend",null,"Type",-1),oe=b("legend",null,"Stagger",-1),re=b("legend",null,"Spring",-1);var pe=c({setup(e){const l=f(),t=C("asc"),i=C("list"),a=C("forward"),s=C("stiff"),n=C([]),o=E((()=>ae.filter((({id:e})=>!n.value.includes(e))).sort((({id:e},{id:l})=>"asc"===t.value?e-l:l-e))));return w(a,(()=>{t.value="asc"===t.value?"desc":"asc"})),(e,r)=>(m(),g("div",{class:v(l).example},[b(v(S),{"flip-key":`${i.value}-${JSON.stringify(v(o))}`,spring:s.value,"stagger-config":{default:{reverse:"forward"!==a.value,speed:1}},"decision-data":{type:i.value,listData:v(o)}},{default:_((()=>[b("div",{class:v(l).container},[b("fieldset",null,[se,(m(),g(N,null,$(["asc","desc"],(e=>b("label",{key:e},[M(b("input",{type:"radio","onUpdate:modelValue":r[1]||(r[1]=e=>t.value=e),value:e},null,8,["value"]),[[F,t.value]]),k(" "+x(e),1)]))),64))]),b("fieldset",null,[ne,(m(),g(N,null,$(["grid","list"],(e=>b("label",{key:e},[M(b("input",{type:"radio","onUpdate:modelValue":r[2]||(r[2]=e=>i.value=e),value:e},null,8,["value"]),[[F,i.value]]),k(" "+x(e),1)]))),64))]),b("fieldset",null,[oe,(m(),g(N,null,$(["forward","reverse","none"],(e=>b("label",{key:e},[M(b("input",{type:"radio","onUpdate:modelValue":r[3]||(r[3]=e=>a.value=e),value:e},null,8,["value"]),[[F,a.value]]),k(" "+x(e),1)]))),64))]),b("fieldset",null,[re,(m(),g(N,null,$(["stiff","noWobble","veryGentle","gentle","wobbly"],(e=>b("label",{key:e},[M(b("input",{type:"radio","onUpdate:modelValue":r[4]||(r[4]=e=>s.value=e),value:e},null,8,["value"]),[[F,s.value]]),k(" "+x(e),1)]))),64))])],2),b("div",null,[n.value.length>0?(m(),g("button",{key:0,class:v(l).showAll,onClick:r[5]||(r[5]=e=>n.value=[])},"show all cards",2)):I("",!0)]),b(v(y),{class:"grid"===i.value?v(l).grid:v(l).list,"flip-id":"list"},{default:_((()=>[b(v(y),{is:"ul",class:v(l).listContents,"inverse-flip-id":"list"},{default:_((()=>[(m(!0),g(N,null,$(v(o),(({id:e,title:l})=>(m(),g(te,{key:e,id:e,title:l,stagger:"none"!==a.value,type:i.value,onFiltered:l=>(e=>n.value.push(e))(e)},null,8,["id","title","stagger","type","onFiltered"])))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["flip-key","spring","stagger-config","decision-data"])],2))}});var de={example:"_example_oml8h_2",grid:"_grid_oml8h_18",list:"_list_oml8h_28",showAll:"_showAll_oml8h_49",container:"_container_oml8h_58"};(pe.__cssModules={}).$style=de,pe.__docgenInfo={displayName:"Example",description:"",tags:{}};var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Example/List Transitions"},ListTransitions:()=>pe,__namedExportsOrder:["ListTransitions"]}),ce=c({setup(e){const l=f(),t=C(!1),i=()=>{t.value=!t.value};return(e,a)=>(m(),g(v(S),{"flip-key":t.value},{default:_((()=>[b(v(y),{"flip-id":"box",class:t.value?v(l).boxBig:v(l).box,onClick:i},null,8,["class"])])),_:1},8,["flip-key"]))}});var fe={box:"_box_1gc89_2",boxBig:"_boxBig_1gc89_13"};(ce.__cssModules={}).$style=fe,ce.__docgenInfo={displayName:"AnExpandingDiv",description:"",tags:{}};var me=c({setup(e){const l=f(),t=C(!1),i=()=>{t.value=!t.value};return(e,a)=>(m(),g(v(S),{"flip-key":t.value},{default:_((()=>[t.value?(m(),g(v(y),{key:0,"flip-id":"box",class:v(l).boxBig,onClick:i},null,8,["class"])):(m(),g(v(y),{key:1,"flip-id":"box",class:v(l).box,onClick:i},null,8,["class"]))])),_:1},8,["flip-key"]))}});var ge={box:"_box_4fsgz_2",boxBig:"_boxBig_4fsgz_13"};(me.__cssModules={}).$style=ge,me.__docgenInfo={displayName:"TwoDivs",description:"",tags:{}};var _e=c({setup(e){const l=f(),t=C(["1","2","3","4","5","6","7","8","9","10"]);return(e,i)=>(m(),g(v(S),{"flip-key":t.value.join("")},{default:_((()=>[b("button",{onClick:i[1]||(i[1]=e=>(()=>{for(let e=t.value.length-1;e>0;e--){const l=Math.floor(Math.random()*(e+1));[t.value[e],t.value[l]]=[t.value[l],t.value[e]]}})())},"shuffle"),b("ul",{class:v(l).list},[(m(!0),g(N,null,$(t.value,(e=>(m(),g(v(y),{is:"li",key:e,"flip-id":e},{default:_((()=>[k(x(e),1)])),_:2},1032,["flip-id"])))),128))],2)])),_:1},8,["flip-key"]))}});var ve={list:"_list_1nonw_2"};(_e.__cssModules={}).$style=ve,_e.__docgenInfo={displayName:"ListShuffle",description:"",tags:{}};const ye=()=>ce;ye.parameters={layout:"centered",docs:{source:{type:"code",code:'\n<template>\n  <Flipper :flip-key="flip">\n    <Flipped flip-id="box" :class="flip ? style.boxBig : style.box" @click="toggle"></Flipped>\n  </Flipper>\n</template>\n\n<script setup lang="ts">\nimport { ref, useCssModule } from \'vue\'\nimport { Flipped, Flipper } from \'vue3-flip-toolkit\'\n\nconst style = useCssModule()\nconst flip = ref(false)\n\nconst toggle = () => { flip.value = !flip.value }\n<\/script>\n      '}}};const he=()=>me;he.parameters={layout:"centered",docs:{source:{type:"code",code:'\n<template>\n  <Flipper :flip-key="flip">\n    <Flipped flip-id="box" :class="style.boxBig" @click="toggle" v-if="flip"></Flipped>\n    <Flipped flip-id="box" :class="style.box" @click="toggle" v-else></Flipped>\n  </Flipper>\n</template>\n\n<script setup lang="ts">\nimport { ref, useCssModule } from \'vue\'\nimport { Flipped, Flipper } from \'vue3-flip-toolkit\'\n\nconst style = useCssModule()\nconst flip = ref(false)\n\nconst toggle = () => { flip.value = !flip.value }\n<\/script>\n      '}}};const be=()=>_e;be.parameters={docs:{source:{type:"code",code:"\n<template>\n  <Flipper :flip-key=\"list.join('')\">\n    <button @click=\"shuffle()\">shuffle</button>\n    <ul :class=\"style.list\">\n      <Flipped v-for=\"i in list\" is=\"li\" :key=\"i\" :flip-id=\"i\">{{ i }}</Flipped>\n    </ul>\n  </Flipper>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref, useCssModule } from 'vue'\nimport { Flipped, Flipper } from 'vue3-flip-toolkit'\n\nconst style = useCssModule()\nconst list = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])\n\nconst shuffle = () => {\n  for (let i = list.value.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n\n    [list.value[i], list.value[j]] = [list.value[j], list.value[i]]\n  }\n}\n<\/script>\n      "}}};var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Example/Simple Examples"},AnExpandingDiv:ye,TwoDivs:he,ListShuffle:be,__namedExportsOrder:["AnExpandingDiv","TwoDivs","ListShuffle"]}),ke=c({props:{index:{type:Number,required:!0}},emits:["click"],setup(e,{emit:l}){const{index:t}=e,i=f(),a=({el:e})=>{setTimeout((()=>{e.classList.add(i.animatedIn)}),400)};return(e,s)=>(m(),g(v(y),{"flip-id":`listItem-${t}`,stagger:"card",class:v(i).item,onClick:s[1]||(s[1]=e=>l("click")),onStart:a},{default:_((()=>[b(v(y),{"inverse-flip-id":`listItem-${t}`,class:v(i).content},{default:_((()=>[b(v(y),{"flip-id":`avatar-${t}`,stagger:"card-content","delay-until":`listItem-${t}`,class:v(i).avatar},null,8,["flip-id","delay-until","class"]),b("div",{class:v(i).description},[(m(),g(N,null,$(3,(e=>b(v(y),{key:e,"flip-id":`description-${t}-${e}`,stagger:"card-content","delay-until":`listItem-${t}`},null,8,["flip-id","delay-until"]))),64))],2),b("div",{class:v(i).additional},[(m(),g(N,null,$(3,(e=>b("div",{key:e}))),64))],2)])),_:1},8,["inverse-flip-id","class"])])),_:1},8,["flip-id","class"]))}});var Ce={item:"_item_xdt8s_2",content:"_content_xdt8s_6",avatar:"_avatar_xdt8s_12",description:"_description_xdt8s_20",additional:"_additional_xdt8s_41",animatedIn:"_animatedIn_xdt8s_64",fadeIn:"_fadeIn_xdt8s_1"};(ke.__cssModules={}).$style=Ce,ke.__docgenInfo={displayName:"ExpandedListItem",description:"",tags:{}};var Ee=c({props:{index:{type:Number,required:!0}},emits:["click"],setup(e,{emit:l}){const{index:t}=e,i=f(),a=(e,l)=>t===e||t===l;return(e,s)=>(m(),g(v(y),{"flip-id":`listItem-${t}`,stagger:"card","should-invert":a,class:v(i).item,onClick:s[1]||(s[1]=e=>l("click"))},{default:_((()=>[b(v(y),{"inverse-flip-id":`listItem-${t}`,class:v(i).content},{default:_((()=>[b(v(y),{"flip-id":`avatar-${t}`,stagger:"card-content","should-flip":a,"delay-until":`listItem-${t}`,class:v(i).avatar},null,8,["flip-id","delay-until","class"]),b("div",{class:v(i).description},[(m(),g(N,null,$(3,(e=>b(v(y),{key:e,"flip-id":`description-${t}-${e}`,stagger:"card-content","should-flip":a,"delay-until":`listItem-${t}`},null,8,["flip-id","delay-until"]))),64))],2)])),_:1},8,["inverse-flip-id","class"])])),_:1},8,["flip-id","class"]))}});var we={item:"_item_n6u0p_2",content:"_content_n6u0p_8",avatar:"_avatar_n6u0p_14",description:"_description_n6u0p_21"};(Ee.__cssModules={}).$style=we,Ee.__docgenInfo={displayName:"ListItem",description:"",tags:{}};var Se=c({setup(e){const l=f(),t=C(!1),i=e=>{t.value=t.value!==e&&e};return(e,a)=>(m(),g("div",{class:v(l).example},[b(v(S),{spring:"gentle",class:v(l).container,"flip-key":t.value,"stagger-config":{card:{reverse:!1!==t.value}},"decision-data":t.value},{default:_((()=>[b("ul",{class:v(l).list},[(m(),g(N,null,$(7,(e=>b("li",{key:e},[e===t.value?(m(),g(ke,{key:0,index:e,onClick:l=>i(e)},null,8,["index","onClick"])):(m(),g(Ee,{key:1,index:e,onClick:l=>i(e)},null,8,["index","onClick"]))]))),64))],2)])),_:1},8,["class","flip-key","stagger-config","decision-data"])],2))}});var Ne={container:"_container_ngiui_2",list:"_list_ngiui_7"};(Se.__cssModules={}).$style=Ne,Se.__docgenInfo={displayName:"Example",description:"",tags:{}};const $e=()=>Se;$e.parameters={layout:"fullscreen"};var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"Example/Stagger Effects"},StaggerEffects:$e,__namedExportsOrder:["StaggerEffects"]});[K,V,z,q,P,U,J,R,X,G].forEach((e=>{Object.keys(e).forEach((l=>{const t=e[l];switch(l){case"args":case"argTypes":return L.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach((e=>B(e,!1)));case"loaders":return t.forEach((e=>D(e,!1)));case"parameters":return T(o({},t),!1);case"argTypesEnhancers":return t.forEach((e=>j(e)));case"argsEnhancers":return t.forEach((e=>O(e)));case"globals":case"globalTypes":{const e={};return e[l]=t,T(e,!1)}default:return console.log(l+" was not supported :( !")}}))})),A((()=>[ee,ue,xe,Ie].filter((e=>e.default))),{hot:!1},!1);
//# sourceMappingURL=iframe.b82f2964.js.map
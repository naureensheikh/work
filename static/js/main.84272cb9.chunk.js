(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{19:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return y}));var r=a(0),s=a.p+"static/media/glamseven.675fcc2d.png",i=a.p+"static/media/weclickk.44f1b3de.png",c=a.p+"static/media/nanotek.20545c44.png",n=a.p+"static/media/browcode.39715fea.png",o=a.p+"static/media/samuelsohn.b0737d21.png",l=a.p+"static/media/tableeffect.fa62911a.png",d=a.p+"static/media/powerhouse.180586ea.png",m=a.p+"static/media/foundspace.4b985d3f.png",p=a.p+"static/media/passievoorslapen.3f88cb39.png",g=a.p+"static/media/tonygambiano.a183774c.png",j=a.p+"static/media/ontapgroup.f328bb24.png",x=a.p+"static/media/amandajenny.a0d3ed02.png";const u=[{id:1,title:"Glam Seven",category:"Nest.JS",url:"https://www.glamseven.com",img:s},{id:2,title:"WeClickk App",category:"Nest.JS",url:"https://www.weclickk.com",img:i},{id:3,title:"Nanotek",category:"Laravel",url:"https://www.nanotek.lk",img:c},{id:4,title:"Browcode",category:"Shopify",url:"https://browcodepro.au",img:n},{id:5,title:"Samuel Sohn",category:"Shopify",url:"https://samuelsohn.com",img:o},{id:6,title:"Table Effect",category:"Shopify",url:"https://www.tableeffect.com",img:l},{id:7,title:"We Are Amma",category:"Shopify",url:"https://weareamma.com",img:a.p+"static/media/weareamma.085f7e5f.png"},{id:8,title:"Wylera Hair",category:"Shopify",url:"https://wylerahair.com",img:a.p+"static/media/wylerahair.c42c368e.png"},{id:9,title:"Georgie Stevenson",category:"Shopify",url:"https://www.georgiestevenson.net",img:a.p+"static/media/georgiasteven.ff4dbe6d.png"},{id:10,title:"Solamer",category:"Shopify",url:"https://solamer.com",img:a.p+"static/media/solamer.7c33ae13.png"},{id:11,title:"Powerhouse Supplements",category:"Shopify",url:"https://www.powerhousesupplements.com.au",img:d},{id:12,title:"Foundspace",category:"WordPress",url:"https://foundspace.com.au",img:m},{id:13,title:"Passie voor slapen",category:"WordPress",url:"https://www.passievoorslapen.nl",img:p},{id:14,title:"Every Life Foundation",category:"WordPress",url:"https://everylifefoundation.org",img:a.p+"static/media/everylifefoundation.081a348d.png"},{id:15,title:"MT Digital",category:"WordPress",url:"https://mtdigital.co.nz",img:a.p+"static/media/mtdigital.71c257fb.png"},{id:16,title:"Miami Modern Homes",category:"WordPress",url:"https://miamimodernhomes.com",img:a.p+"static/media/miamimodernhouse.cf7e854d.png"},{id:17,title:"Archipro",category:"WordPress",url:"https://archipro.com",img:a.p+"static/media/archipro.bec8a61c.png"},{id:18,title:"American Construtora",category:"WordPress",url:"https://www.americanconstrutora.com.br",img:a.p+"static/media/americanconstritura.ade5545a.png"},{id:19,title:"ODM Construction",category:"WordPress",url:"https://odmconstruction.com",img:a.p+"static/media/odmconstruction.621a6330.png"},{id:20,title:"The Bio Supps",category:"WordPress",url:"https://thebiosupps.com",img:a.p+"static/media/thebiospps.f57d0fe9.png"},{id:21,title:"Basin Street",category:"WordPress",url:"https://basin-street.com",img:a.p+"static/media/basinstreet.0d0a8a3a.png"},{id:22,title:"Tony gambino",category:"Squarespace",url:"https://tonygambinophoto.com",img:g},{id:23,title:"Ontap group",category:"Magento",url:"https://www.ontapgroup.com",img:j},{id:24,title:"Amanda Jenny",category:"Wix",url:"https://www.amandajenny.com",img:x}];var h=a(3);const b=Object(r.createContext)(),y=e=>{const[t,a]=Object(r.useState)(u),[s,i]=Object(r.useState)(""),[c,n]=Object(r.useState)(""),o=t.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())||""===s?e:"")),l=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(c)));return Object(h.jsx)(b.Provider,{value:{projects:t,setProjects:a,searchProject:s,setSearchProject:i,searchProjectsByTitle:o,selectProject:c,setSelectProject:n,selectProjectsByCategory:l},children:e.children})}},22:function(e,t,a){"use strict";var r=a(0),s=a(12),i=a(37),c=a(18),n=a(3);var o=e=>{let{title:t,category:a,image:r,url:s}=e;return Object(n.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(c.b,{to:s,"aria-label":"Single Project",target:"_blank",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(19);const d=["Nest.JS","WordPress","Shopify","Squarespace","Magento","Wix"];var m=e=>{let{setSelectProject:t}=e;return Object(n.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:i,selectProject:c,setSelectProject:d,selectProjectsByCategory:p}=Object(r.useContext)(l.a);return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Projects portfolio"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(s.j,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:d})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?p.map((e=>Object(n.jsx)(o,{title:e.title,category:e.category,url:e.url,image:e.img},e.id))):t?i.map((e=>Object(n.jsx)(o,{title:e.title,category:e.category,url:e.url,image:e.img},e.id))):e.map((e=>Object(n.jsx)(o,{title:e.title,category:e.category,url:e.url,image:e.img},e.id)))})]})}},24:function(e,t,a){},25:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);a(24),a(25);var r=a(38),s=a(0),i=a(18),c=a(4);var n=()=>{const{pathname:e}=Object(c.m)();return Object(s.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},o=a(12),l=a(3);const d=[{id:1,icon:Object(l.jsx)(o.d,{}),url:"https://www.naureensheikh.com/"},{id:4,icon:Object(l.jsx)(o.f,{}),url:"https://linkedin.com/in/naureen-sheikh-246080238"},{id:5,icon:Object(l.jsx)(o.g,{}),url:"mailto:naureensheikh4@gmail.com"}];var m=()=>Object(l.jsx)("div",{className:"container mx-auto",children:Object(l.jsx)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:Object(l.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(l.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Get In Touch"}),Object(l.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:d.map((e=>Object(l.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(l.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)))})]})})});var p=()=>{const e="dark",t="dark";return Object(s.useEffect)((()=>{const a=window.document.documentElement;a.classList.remove(e),a.classList.add(t),localStorage.setItem("theme",t)}),[t,e]),[e,t]},g=a.p+"static/media/developer.865416cd.png",j=a(37);var x=()=>{const[e]=p();return Object(l.jsxs)(j.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(l.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(l.jsx)(j.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Naureen"}),Object(l.jsx)(j.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full Stack Developer."}),Object(l.jsx)(j.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-sm md:text-sm lg:text-xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"Who needs a social life when the bugs in your code provide all the drama you need?"})]}),Object(l.jsx)(j.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(l.jsx)("img",{src:g,alt:"Developer"})})]})},u=a(22),h=a(19);var b=()=>Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)(x,{}),Object(l.jsx)(h.b,{children:Object(l.jsx)(u.a,{})})]});var y=()=>{const[e,t]=Object(s.useState)(!1);Object(s.useEffect)((()=>(window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)})));const a=()=>{!e&&window.pageYOffset>400?t(!0):e&&window.pageYOffset<=400&&t(!1)};return window.addEventListener("scroll",a),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o.a,{className:"scrollToTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:e?"flex":"none",padding:5}})})};const f=Object(s.lazy)((()=>a.e(3).then(a.bind(null,42)))),O=Object(s.lazy)((()=>a.e(5).then(a.bind(null,39)))),w=Object(s.lazy)((()=>a.e(4).then(a.bind(null,41))));var k=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(l.jsxs)(i.a,{basename:"/work",children:[Object(l.jsx)(n,{}),Object(l.jsx)(s.Suspense,{fallback:"",children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{path:"/",element:Object(l.jsx)(b,{})}),Object(l.jsx)(c.a,{path:"projects",element:Object(l.jsx)(O,{})}),Object(l.jsx)(c.a,{path:"projects/single-project",element:Object(l.jsx)(w,{})}),Object(l.jsx)(c.a,{path:"contact",element:Object(l.jsx)(f,{})})]})}),Object(l.jsx)(m,{})]}),Object(l.jsx)(y,{})]})})};var v=e=>{e&&e instanceof Function&&a.e(6).then(a.bind(null,40)).then((t=>{let{getCLS:a,getFID:r,getFCP:s,getLCP:i,getTTFB:c}=t;a(e),r(e),s(e),i(e),c(e)}))},N=a(23);const S=document.getElementById("root");Object(N.createRoot)(S).render(Object(l.jsx)(k,{})),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.84272cb9.chunk.js.map
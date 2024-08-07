(this["webpackJsonppy-react-ex"]=this["webpackJsonppy-react-ex"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"src":"categories/bath_tubs.png","title":"Bath Tubs","desc":"Are you ready to transform your bathroom? We offer modern, smart and stylish bathtub products with focus on comfort, sophistication, hygiene and durability.","page":"bathtubs"},{"src":"categories/cisterns.jpeg","title":"Cisterns","desc":"Hindware\u2019s cistern collection offers you the best-in-class products that match your needs. Explore our range of cisterns or water closets to find something that suits your requirements.","page":"cisterns"},{"src":"categories/faucets.jpg","title":"Faucets","desc":"Hindware Faucets and bathroom taps bring elegance to your bathroom. Choose from various designs and finishes to achieve that perfect look for your bathroom. Indulge in carefully curated design themed collections for your unique taste such as Glamour, Geometry, Urban and Neo Classic collections.","page":"faucets"},{"src":"categories/shower_enclosures.jpeg","title":"Shower Enclosures","desc":"Brighten up your bathroom with stylish, contemporary bathroom design ideas and create your own special space. Browse our collection of shower enclosures to find your perfect match.","page":"shower_enclosures"},{"src":"categories/showers.jpeg","title":"Showers","desc":"Hindware, without a doubt, is one of India\'s top manufacturers of bathroom showers. And, the best part is that you can go through a wide selection of our opulent shower units. So, wait no more and have a look at some of our luxury bathroom shower designs.","page":"showers"},{"src":"categories/urinals.jpg","title":"Urinals","desc":"At Hindware, technology and innovation go hand-in-hand to create aqua-free and hygienic urinals. Browse our collection to find the perfect fit.","page":"urinals"},{"src":"categories/wash_basins.jpg","title":"Wash Basins","desc":"Choosing the best basin for your bathroom can be an uphill task, especially with our wide range of products. With our wide range of basins, now you can choose something that fits your requirements and needs to perfection.","page":"wash_basins"},{"src":"categories/water_closets.jpg","title":"Water Closets","desc":"Hindware\u2019s water closet and commode collection features high-end quality products, such as intelligent water closets, wall-mounted closets, coupled closets, extended closets, one-piece closets that offer a variety of benefits which include space-saving designs, slow-falling seat covers, feet touch flush, warm seat, 3D massage & oscillating cleanse and much more.","page":"water_closets"}]')},function(e,a,t){e.exports=t(25)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),o=t(7),r=t.n(o),c=(t(19),t(3));var l=function(){const e=Object(c.m)();return n.a.createElement("h1",{style:{color:"#a6a6a6"}},e.state.prod_name)},i=t(4);t(20);var m=function(){const e=["showroom_pics\\one.png","showroom_pics\\two.png","showroom_pics\\three.png","showroom_pics\\four.png"],[a,t]=Object(s.useState)(0),o=Object(s.useRef)(null);function r(){o.current&&clearTimeout(o.current)}return Object(s.useEffect)(()=>(r(),o.current=setTimeout(()=>t(a=>a===e.length-1?0:a+1),5e3),()=>{r()}),[a]),n.a.createElement("div",{className:"slideshow-container"},n.a.createElement("div",{className:"slideshowDots slideshow-container"},e.map((e,s)=>n.a.createElement("div",{key:s,className:`slideshowDot ${a===s?"active":""} `,onClick:()=>t(s)}))),n.a.createElement("div",{className:"slideshowSlider",style:{transform:`translate3d(${100*-a}%, 0, 0)`}},e.map((e,a)=>n.a.createElement("img",{className:"img-spec",src:e,key:a,alt:"jsx-a11y/alt-text"}))))},u=(t(21),t(22),t(8)),d=t(9);var h=function(){const[e,a]=Object(s.useState)(!1),[t,o]=Object(s.useState)(!0);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"btn-div"},n.a.createElement("button",{className:"video-button",onClick:()=>{a(!e)}},"Visit Showroom",n.a.createElement("img",{src:"icons\\circle-play-regular.svg",alt:"play",className:"play-icon"}),e?n.a.createElement("section",{className:"modal__bg"},n.a.createElement("div",{className:"modal__align"},n.a.createElement("div",{className:"modal__content",modal:e},n.a.createElement(u.a,{className:"modal__close","arial-label":"Close modal",onClick:a}),n.a.createElement("div",{className:"modal__video-align"},t?n.a.createElement("div",{className:"modal__spinner"},n.a.createElement(d.a,{className:"modal__spinner-style",fadeIn:"none"})):null,n.a.createElement("iframe",{className:"modal__video-style",onLoad:()=>{o(!t)},loading:"lazy",width:"800",height:"500",src:"video\\vid_1.mp4",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))):null)))},p=(t(23),t(10));function g(){return n.a.createElement("div",null,n.a.createElement("img",{className:"heading",src:"icons/hindware.png",alt:"hindware"}),n.a.createElement("div",{className:"line",key:""}),n.a.createElement("div",null,p.map((e,a)=>n.a.createElement(i.b,{className:"category",to:"/products",state:{prod_name:e.page}},n.a.createElement("img",{src:e.src,alt:a,key:a,className:"img"}),n.a.createElement("h3",{className:"txt"},e.title),n.a.createElement("p",{className:"txt"},e.desc)))),n.a.createElement("div",{className:"btn-div"},n.a.createElement("a",{href:"documents\\\\Full_Catalogue.pdf",download:"Full_Catalogue.pdf"},n.a.createElement("button",{className:"video-button download-btn"},"Download Full Catalogue",n.a.createElement("img",{src:"icons\\cloud_down.svg",alt:"play",className:"download-icon"})))))}t(24);var f=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"flex-container"},n.a.createElement("img",{src:"icons/logo.svg",alt:"Logo",className:"logo"}),n.a.createElement("a",{href:"/",className:"brand"},"KHANDELWAL"),n.a.createElement("div",{className:"navs"},n.a.createElement("div",{className:"nav-item"},n.a.createElement("img",{src:"icons/phone.svg",alt:"phone",className:"icons"}),n.a.createElement("a",{href:"tel:+91 9962049900",target:"_blank",rel:"noopener noreferrer",className:"icon-text"},"+91-9962049900")),n.a.createElement("div",{className:"nav-item"},n.a.createElement("img",{src:"icons/whatsapp-1.svg",alt:"phone",className:"icons"}),n.a.createElement("a",{href:"https://wa.me/+919962049900?text=Hi",target:"_blank",rel:"noopener noreferrer",className:"icon-text"},"+91 9962049900")),n.a.createElement("div",{className:"nav-item"},n.a.createElement("img",{src:"icons/location.svg",alt:"phone",className:"icons"}),n.a.createElement("a",{href:"https://maps.app.goo.gl/kjJqxsXxRSGyafvJ6",target:"_blank",rel:"noopener noreferrer",className:"icon-text"},"Locate Us")))),n.a.createElement("div",{className:"brand sub-brand"},"HARDWARE"))};var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement(m,null),n.a.createElement(h,null),n.a.createElement(g,null))};var E=function(){return n.a.createElement(i.a,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",element:n.a.createElement(w,null)}),n.a.createElement(c.a,{exact:!0,path:"/products",element:n.a.createElement(l,null)})))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)))}],[[11,1,2]]]);
//# sourceMappingURL=main.6d8b616d.chunk.js.map
(this["webpackJsonpcode-sandbox-examples"]=this["webpackJsonpcode-sandbox-examples"]||[]).push([[0],{52:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(14),a=c.n(s),r=c(32),j=c(7),o=c(13),l=c(53),d=c(54),x=c(55),b=c(56),h=c(57),u=c(58),O=c(59),p=c(3),m=function(e){var t=Object(n.useState)(!0),c=Object(o.a)(t,2),i=c[0],s=c[1];return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{color:"faded",light:!0,children:[Object(p.jsx)(d.a,{href:"/",className:"mr-auto",children:"reactstrap"}),Object(p.jsx)(x.a,{onClick:function(){return s(!i)},className:"mr-2"}),Object(p.jsx)(b.a,{isOpen:!i,navbar:!0,children:Object(p.jsxs)(h.a,{navbar:!0,children:[Object(p.jsx)(u.a,{children:Object(p.jsx)(O.a,{href:"/",children:"Inicio"})}),Object(p.jsx)(u.a,{children:Object(p.jsx)(O.a,{href:"Contato",children:"Contato"})})]})})]})})},f=c(60),v=c(61),g=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(f.a,{fluid:!0,children:Object(p.jsxs)(v.a,{fluid:!0,children:[Object(p.jsx)("h1",{className:"display-3",children:"Eletronics.com"}),Object(p.jsx)("p",{className:"lead",children:"Tudo para game em um s\xf3 lugar. Aproveite e pa\xe7a j\xe1 o seu xbox."})]})})})},k=c(27),S=c(62),T=c(63),C=c(64),w=c(65),y=[{src:"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg",altText:"Slide 1",caption:"Slide 1"},{src:"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg",altText:"Slide 2",caption:"Slide 2"},{src:"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg",altText:"Slide 3",caption:"Slide 3"}],N=function(e){var t=Object(n.useState)(0),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(!1),r=Object(o.a)(a,2),j=r[0],l=r[1],d=function(){if(!j){var e=i===y.length-1?0:i+1;s(e)}},x=function(){if(!j){var e=0===i?y.length-1:i-1;s(e)}},b=y.map((function(e){return Object(p.jsxs)(k.a,{onExiting:function(){return l(!0)},onExited:function(){return l(!1)},children:[Object(p.jsx)("img",{src:e.src,alt:e.altText}),Object(p.jsx)(S.a,{captionText:e.caption,captionHeader:e.caption})]},e.src)}));return Object(p.jsxs)(T.a,{activeIndex:i,next:d,previous:x,children:[Object(p.jsx)(C.a,{items:y,activeIndex:i,onClickHandler:function(e){j||s(e)}}),b,Object(p.jsx)(w.a,{direction:"prev",directionText:"Previous",onClickHandler:x}),Object(p.jsx)(w.a,{direction:"next",directionText:"Next",onClickHandler:d})]})},E=c(28),H=c(29),I=c(33),A=c(31),B=c(66),D=c(67),J=c(68),P=c(69),L=c(70),M=c(71),q=c(72),z=c(73),F=function(e){Object(I.a)(c,e);var t=Object(A.a)(c);function c(){var e;Object(E.a)(this,c);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={filmes:[]},e}return Object(H.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://apiifpacav.herokuapp.com/api/project/").then((function(e){return e.json()})).then((function(t){e.setState({filmes:t})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Lista de filmes"}),Object(p.jsx)("ul",{children:this.state.filmes.map((function(e){return Object(p.jsx)(B.a,{children:Object(p.jsxs)(D.a,{children:[Object(p.jsx)(J.a,{top:!0,width:"100%",src:e.image.url,alt:"Card image cap"}),Object(p.jsxs)(P.a,{children:[Object(p.jsxs)(L.a,{tag:"h6",children:[Object(p.jsx)("b",{children:"id: "})," ",e.id]}),Object(p.jsxs)(L.a,{tag:"h3",children:[Object(p.jsx)("b",{children:"Produto: "})," ",e.title]}),Object(p.jsxs)(M.a,{tag:"h6",className:"mb-2 text-muted",children:[Object(p.jsx)("b",{children:"Descri\xe7\xe3o: "}),e.description]}),Object(p.jsxs)(q.a,{children:[Object(p.jsx)("b",{children:"Tecnologia: "}),e.technology]}),Object(p.jsx)(z.a,{children:"Button"})]})]})})}))})]})}}]),c}(i.a.Component);var G=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{}),Object(p.jsx)(N,{}),Object(p.jsx)(F,{}),Object(p.jsx)(g,{})]})};var K=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"sobre"})})};var Q=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"contato"})})};var R=function(){return Object(p.jsx)(r.a,{children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",exact:!0,component:G}),Object(p.jsx)(j.a,{path:"/sobre",component:K}),Object(p.jsx)(j.a,{path:"/contato",component:Q})]})})};c(51);a.a.render(Object(p.jsx)(R,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d4a853bb.chunk.js.map
(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[5],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(11),c=function(e){return{type:a.b,id:e}},r=function(e){return{type:a.d,id:e}},i=function(e){return{type:a.c,id:e}}},50:function(e,t,n){"use strict";var a=n(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),r=(0,a(n(44)).default)(c.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=r},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),c=n.n(a),r=(n(41),n(21)),i=n(50),u=n.n(i),l=n(42),o=n(19);function s(){var e=Object(r.c)((function(e){return{sumPrice:e.sumPrice,items:e.addedProducts}})),t=e.sumPrice,n=e.items,i=Object(r.b)();Object(a.useEffect)((function(){document.title="Total price: ".concat(t)}));var s=n.length?n.map((function(e){return c.a.createElement("div",{className:"product",key:e.id},c.a.createElement("img",{src:e.url}),c.a.createElement("div",{className:"about-product"},c.a.createElement("div",{style:{display:"grid",gridRowGap:"5px"}},c.a.createElement("h4",null,"price: ",e.price,"$"),c.a.createElement("p",null,"size: ",e.size),c.a.createElement("p",null,"count: ",e.quantity)),c.a.createElement("button",{className:"add-button add",onClick:function(){return t=e.id,void i(Object(l.c)(t));var t}},"-1"),c.a.createElement(u.a,{class:"delete",onClick:function(){var t;t=e.id,i(Object(l.b)(t))},style:{cursor:"pointer"}})))})):c.a.createElement("p",{className:"message"},"You have 0 items in cart");return c.a.createElement("div",{style:{margin:"30px"}},c.a.createElement(o.b,{to:{pathname:"/"}},c.a.createElement("button",{class:"back"},"back")),c.a.createElement("div",{className:"product-container"},s,c.a.createElement("h4",null,"Total price: ",t)))}}}]);
//# sourceMappingURL=5.e0f28b37.chunk.js.map
(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[1],{11:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return c})),i.d(t,"d",(function(){return a}));var n="add_to_cart",r="remove_item",c="add_quantity",a="sub_quantity"},27:function(e,t,i){e.exports=i(39)},32:function(e,t,i){},33:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),c=i(12),a=i.n(c),d=(i(32),i(33),i(19)),o=i(8),s=Object(n.lazy)((function(){return Promise.all([i.e(0),i.e(4)]).then(i.bind(null,61))})),u=Object(n.lazy)((function(){return Promise.all([i.e(0),i.e(5)]).then(i.bind(null,60))}));var p=function(){return r.a.createElement(d.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:s}),r.a.createElement(o.a,{exact:!0,path:"/cart",component:u}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=i(24),m=i(9),f=i(11),h={items:[{id:1,price:10,url:"https://ae01.alicdn.com/kf/HTB11umIcEKF3KVjSZFEq6xExFXaZ.jpg_q50.jpg",size:"36"},{id:2,price:15,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmMJO0BNY6VJx7bGmBsZfpkwwM11vU5sTSgBcCUxadM0031XrO",size:"36"},{id:3,price:13,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0WWZ1D_8QaoV-D1-QwcROu_fMdo62oGqxzsXIxuMObch3GTSb",size:"37"},{id:4,price:15,url:"https://ae01.alicdn.com/kf/H5b8030e10aad45dc8443f43ff4b90907I.jpg",size:"35"},{id:5,price:20,url:"https://cdn.shopify.com/s/files/1/1349/6913/products/product-image-635730235_large.jpg?v=1571439913",size:"37"},{id:6,price:18,url:"https://cdn.shopify.com/s/files/1/0047/7052/9378/products/Sexy-Women-Pumps-High-Heels-Wedding-Shoes-Women-Block-Square-Heels-Transparent-Ladies-Pointed-Shoes-Party.jpg_640x640_da8f8709-2c7c-424c-9d81-d11706e781e8_1024x1024.jpg?v=1571713662",size:"35"},{id:4,price:15,url:"https://ae01.alicdn.com/kf/H5b8030e10aad45dc8443f43ff4b90907I.jpg",size:"35"},{id:5,price:20,url:"https://cdn.shopify.com/s/files/1/1349/6913/products/product-image-635730235_large.jpg?v=1571439913",size:"37"},{id:6,price:18,url:"https://cdn.shopify.com/s/files/1/0047/7052/9378/products/Sexy-Women-Pumps-High-Heels-Wedding-Shoes-Women-Block-Square-Heels-Transparent-Ladies-Pointed-Shoes-Party.jpg_640x640_da8f8709-2c7c-424c-9d81-d11706e781e8_1024x1024.jpg?v=1571713662",size:"35"}],addedProducts:[],sumPrice:0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;if(t.type===f.b){var i=e.items.find((function(e){return e.id===t.id})),n=e.addedProducts.find((function(e){return t.id===e.id}));if(n)return i.quantity+=1,Object(m.a)({},e,{sumPrice:e.sumPrice+i.price});i.quantity=1;var r=e.sumPrice+i.price;return console.log(i.quantity),Object(m.a)({},e,{addedProducts:[].concat(Object(l.a)(e.addedProducts),[i]),sumPrice:r})}if(t.type===f.c){var c=e.addedProducts.find((function(e){return t.id===e.id})),a=e.addedProducts.filter((function(e){return t.id!==e.id})),d=e.sumPrice-c.price*c.quantity;return console.log(c),Object(m.a)({},e,{addedProducts:a,sumPrice:d})}if(t.type===f.a){var o=e.items.find((function(e){return e.id===t.id}));o.quantity+=1;var s=e.sumPrice+o.price;return Object(m.a)({},e,{sumPrice:s})}if(t.type===f.d){var u=e.items.find((function(e){return e.id===t.id})),p=0;return 0===u.quantity?Object(m.a)({},e,{sumPrice:0}):(u.quantity-=1,p=e.sumPrice-u.price,Object(m.a)({},e,{sumPrice:p}))}return e},b=i(21),y=i(14),P=Object(y.b)(g);a.a.render(r.a.createElement(b.a,{store:P},r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,2,3]]]);
//# sourceMappingURL=main.2ec26e7c.chunk.js.map
(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/unavailable.3e8e998a.png"},,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),o=(a(19),a(20),a(21),a(22),function(){return l.a.createElement("div",{className:"cover-text"},l.a.createElement("h3",{className:"heading-text"},"Discover a Unique Experience"),l.a.createElement("p",{className:"para-text"},"We bring you the wide collection of delicious and enchanting food recipes that too on the cost of few clicks!!"))}),i=a(3),m=a(13),s=function(){return l.a.createElement("div",{className:"cover"},l.a.createElement(o,null),l.a.createElement(i.a,{onClick:function(){return document.getElementById("search-card").scrollIntoView({behavior:"smooth"})},icon:m.a,className:"arrow-down"}))},u=(a(28),a(4)),d=function(){return l.a.createElement("nav",{className:"sticky-nav"},l.a.createElement("h3",{className:"brand-name"},"Eatify \u2714"),l.a.createElement("ul",{className:"main-nav"},l.a.createElement("li",null,l.a.createElement(i.a,{icon:u.b})),l.a.createElement("li",null,l.a.createElement(i.a,{icon:u.c})),l.a.createElement("li",null,l.a.createElement(i.a,{icon:u.d})),l.a.createElement("li",null,l.a.createElement(i.a,{icon:u.a}))))},E=a(5),p=a.n(E),f=a(9),g=a(2),h=(a(30),a(31),a(6)),b=a.n(h),y=function(e){var t=e.recipes;return e.loading?l.a.createElement("h3",{style:{marginTop:"50px"}},"Loading..."):l.a.createElement("div",{className:"recipe-table-div"},l.a.createElement("h2",null,"Recipe Database"),l.a.createElement("select",{id:"recipe-filter",onChange:function(){var e,t,a,n;for(e=document.getElementById("recipe-filter").value.toUpperCase(),t=document.getElementById("recipe-table").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[5])&&(a.innerHTML.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},className:"select-form-control"},l.a.createElement("option",null,"High Protein"),l.a.createElement("option",null,"Balanced"),l.a.createElement("option",null,"High Carb"),l.a.createElement("option",null,"Regular")),l.a.createElement("table",{id:"recipe-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Qty."),l.a.createElement("th",null,"Energy"),l.a.createElement("th",null,"Nutrients"),l.a.createElement("th",null,"Label"))),l.a.createElement("tbody",null,t.map((function(e){var t=e.recipe.totalNutrients.PROCNT.quantity.toFixed(2),a=e.recipe.totalNutrients.CHOCDF.quantity.toFixed(2),n=e.recipe.totalNutrients.FAT.quantity.toFixed(2),c=t+n+a,r="";return r=t/c>15?"High Protein":t/c>=12&&t/c<=15?"Balanced":(a+n)/c>50?"High Carb":"Regular",l.a.createElement("tr",{key:e.recipe.url},l.a.createElement("td",{"data-column":"Title"},e.recipe.label),l.a.createElement("td",{"data-column":"Image"},l.a.createElement("img",{src:e.recipe.image?e.recipe.image:b.a,alt:"",className:"recipe-image"})),l.a.createElement("td",{"data-column":"Qty."},e.recipe.yield),l.a.createElement("td",{"data-column":"Energy"},e.recipe.calories.toFixed(2)," kcal"),l.a.createElement("td",{"data-column":"Nutrients",style:{width:"22%"}},l.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"15px"}},l.a.createElement("li",null,"Protien:"," ",e.recipe.totalNutrients.PROCNT.quantity.toFixed(2),"g"),l.a.createElement("li",null,"Carbs:"," ",e.recipe.totalNutrients.CHOCDF.quantity.toFixed(2),"g"),l.a.createElement("li",null,"Fats:"," ",e.recipe.totalNutrients.FAT.quantity.toFixed(2),"g"))),l.a.createElement("td",null,r))})))))},v=(a(32),function(e){var t=e.foodData;return e.loading?l.a.createElement("h3",{style:{marginTop:"50px"}},"Loading..."):l.a.createElement("div",{className:"foodData-table-div"},l.a.createElement("h2",null,"Food Database"),l.a.createElement("select",{id:"foodData-filter",onChange:function(){var e,t,a,n;for(e=document.getElementById("foodData-filter").value.toUpperCase(),t=document.getElementById("foodData-table").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[4])&&(a.innerHTML.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},className:"select-form-control"},l.a.createElement("option",null,"High Protein"),l.a.createElement("option",null,"Balanced"),l.a.createElement("option",null,"High Carb"),l.a.createElement("option",null,"Regular")),l.a.createElement("table",{id:"foodData-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Energy"),l.a.createElement("th",null,"Nutrients"),l.a.createElement("th",null,"Label"))),l.a.createElement("tbody",null,t.map((function(e){var t=e.food.nutrients.PROCNT.toFixed(2),a=e.food.nutrients.CHOCDF.toFixed(2),n=e.food.nutrients.FAT.toFixed(2),c=t+n+a,r="";return r=t/c>15?"High Protein":t/c>=12&&t/c<=15?"Balanced":(a+n)/c>50?"High Carb":"Regular",l.a.createElement("tr",{key:e.food.foodId},l.a.createElement("td",{"data-column":"Title"},e.food.label),l.a.createElement("td",{"data-column":"Image"},l.a.createElement("img",{src:e.food.image?e.food.image:b.a,alt:"",className:"food-image"})),l.a.createElement("td",{"data-column":"Energy"},e.food.nutrients.ENERC_KCAL.toFixed(2)," kcal"),l.a.createElement("td",{"data-column":"Nutrients",style:{width:"22%"}},l.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"15px"}},l.a.createElement("li",null,"Protien: ",t,"g"),l.a.createElement("li",null,"Carbs: ",a,"g"),l.a.createElement("li",null,"Fats: ",n,"g"))),l.a.createElement("td",null,r))})))))}),N=(a(11),function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginate,c=[],r=1;r<=Math.ceil(a/t);r++)c.push(r);return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("ul",{className:"pagination"},c.map((function(e){return l.a.createElement("li",{key:e,className:"page-item"},l.a.createElement("a",{onClick:function(){return n(e)},className:"page-link"},e))}))))}),O=function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginateFood,c=[],r=1;r<=Math.ceil(a/t);r++)c.push(r);return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("ul",{className:"pagination"},c.map((function(e){return l.a.createElement("li",{key:e,className:"page-item"},l.a.createElement("a",{onClick:function(){return n(e)},className:"page-link"},e))}))))},j=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(g.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),u=Object(g.a)(s,2),d=u[0],E=u[1],h=Object(n.useState)(1),b=Object(g.a)(h,2),j=b[0],x=b[1],C=Object(n.useState)(1),w=Object(g.a)(C,2),F=w[0],k=w[1],T=Object(n.useState)(5),P=Object(g.a)(T,1)[0],I=Object(n.useState)(""),B=Object(g.a)(I,2),D=B[0],S=B[1],H=Object(n.useState)(""),R=Object(g.a)(H,2),q=R[0],L=R[1],A=Object(n.useState)([]),M=Object(g.a)(A,2),U=M[0],W=M[1],_=Object(n.useState)([]),J=Object(g.a)(_,2),K=J[0],Q=J[1],V="https://api.edamam.com/search?q=".concat(q,"&app_id=").concat("aeac802a","&app_key=").concat("bad9a6e0eaed49f24e44e1582cb2cef6"),Y="https://api.edamam.com/api/food-database/v2/parser?ingr=".concat(q,"&app_id=").concat("94e02b3f","&app_key=").concat("1ece35194048f6f22f5d30db37b69a40"),$=j*P,z=$-P,G=F*P,X=G-P;Object(n.useEffect)((function(){ee()}),[q]),Object(n.useEffect)((function(){"undefined"!==typeof a&&W(a.slice(z,$))}),[j,a]),Object(n.useEffect)((function(){Z()}),[q]),Object(n.useEffect)((function(){"undefined"!==typeof i&&Q(i.slice(X,G))}),[F,i]);var Z=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch(V);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.hits),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch(Y);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,m(a.hints),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{id:"search-card"},l.a.createElement("h3",{className:"search-card-title"},"Food Cravings? Can't Decide What to Cook?"),l.a.createElement("p",{className:"search-card-text"},"Well You're just one search away from a wide range of collection of food recipes as per your choice!!",l.a.createElement("span",{role:"img","aria-label":"emoji"}," ","\ud83d\ude0b")),l.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),L(D),S("")}},l.a.createElement("input",{className:"search-bar",placeholder:"Type food name",required:!0,value:D,onChange:function(e){S(e.target.value)}}),l.a.createElement("button",{className:"search-button",type:"submit"},"Search")),a.length?l.a.createElement("div",null,l.a.createElement(y,{recipes:U,loading:d}),l.a.createElement(N,{itemsPerPage:P,totalItems:a.length,paginate:function(e){return x(e)}}),l.a.createElement(v,{foodData:K,loading:d}),l.a.createElement(O,{itemsPerPage:P,totalItems:i.length,paginateFood:function(e){return k(e)}})):l.a.createElement("h2",{style:{color:"rgb(74, 172, 18)",marginTop:"70px"}},"No contents selected yet....."))},x=(a(33),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Created with ",l.a.createElement("span",{role:"img","aria-label":"footer-emoji"},"\u2764")," by Roshan Kanwar"))}),C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(s,null),l.a.createElement(j,null),l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.16379502.chunk.js.map
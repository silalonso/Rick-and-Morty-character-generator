(this.webpackJsonpexamen=this.webpackJsonpexamen||[]).push([[0],[,function(e,t,a){},,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(10),a(2));a(1);var i=function(e){return c.a.createElement("li",{className:"card"},c.a.createElement("img",{className:"card__img",src:e.character.image,alt:"Imagen de ".concat(e.character.name)}),c.a.createElement("h4",{className:"card__title"},e.character.name),c.a.createElement("p",{className:"card__description"},e.character.specie))},l=function(e){console.log(e);var t=e.characters.map((function(e,t){return c.a.createElement(i,{key:e.id,character:e})}));return c.a.createElement("section",null,c.a.createElement("ul",{className:"cards"},t))},m=function(e){return c.a.createElement("form",null,c.a.createElement("label",{className:"form__label display-block",htmlFor:"name"},"Busca un personaje:"),c.a.createElement("input",{className:"form__input-text",type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter(t.target.value)}}))},u=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,specie:e.species,planet:e.origin.name,status:e.status}}))}))},h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),h=i[0],f=i[1];Object(n.useEffect)((function(){u().then((function(e){r(e)}))}),[]);var d=a.filter((function(e){return e.name.toUpperCase().includes(h.toUpperCase())}));return console.log(d),c.a.createElement("div",{className:"App"},c.a.createElement(m,{handleFilter:function(e){console.log("est\xe1n escribiendo algo",e),f(e)}}),c.a.createElement(l,{characters:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.d3115280.chunk.js.map
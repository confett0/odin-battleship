(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(81),o=n.n(r),a=n(645),s=n.n(a),i=n(667),c=n.n(i),l=new URL(n(55),n.b),d=new URL(n(434),n.b),u=new URL(n(631),n.b),p=new URL(n(280),n.b),h=new URL(n(805),n.b),f=new URL(n(420),n.b),m=s()(o()),g=c()(l),b=c()(d),v=c()(u),y=c()(p),x=c()(h),w=c()(f);m.push([e.id,`@font-face {\n    font-family: 'Inter Regular';\n    src: url(${g});\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Inter Semibold';\n    src: url(${b});\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Inter Light';\n    src: url(${v});\n    font-weight: 300;\n    font-style: normal;\n}\n\n:root {\n    --red: #E74460;\n    --grey: #7BA0B0;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    align-items: center;\n    background: #69D2E7 url(${y}) no-repeat top center;\n    display: flex;\n    font-family: "Inter Regular";\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    height: 130px;\n    padding: 20px 0;\n    width: min(1200px, 100vh);\n}\n\n.logo {\n    color: var(--red);\n    font-family: 'Inter Light';\n    font-size: 24px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\nmain {\n    display: flex;\n    gap: 100px;\n    justify-content: space-evenly;\n    max-width: 1200px;\n    padding: 30px;\n}\n\n.gameboard {\n    display: grid;\n    gap: 4px;\n    grid-template-columns: repeat(10, 1fr);\n    height: 450px;\n    width: 450px;\n}\n\n.cell {\n    background: #fff;\n    border: 2px solid #000;\n    border-radius: 20%;\n    box-shadow: 1px 0px 0px rgba(0, 0, 0, 1)\n}\n\n.computer-board .cell:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n.has-ship {\n    background: var(--grey);\n}\n\n.missed {\n    background: url(${x}) var(--red) no-repeat center;\n}\n\n.hit {\n    background: url(${w}) var(--grey) no-repeat center;\n}`,""]);const S=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},631:(e,t,n)=>{e.exports=n.p+"02850f28027788580733.ttf"},55:(e,t,n)=>{e.exports=n.p+"9ca9ba81e9dcaa12b3a1.ttf"},434:(e,t,n)=>{e.exports=n.p+"6058d3da655fb35169c2.ttf"},280:(e,t,n)=>{e.exports=n.p+"4186d38e661c2ca2674b.png"},420:(e,t,n)=>{e.exports=n.p+"04bbc5c7a27374eac379.png"},805:(e,t,n)=>{e.exports=n.p+"a2260fae27f0527c7129.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),i=n(565),c=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class m{constructor(e,t){this.name=t,this.length=e,this.hitsReceived=0,this.sunk=!1}hit(){this.hitsReceived++,this.isSunk()}isSunk(){this.hitsReceived===this.length&&(this.sunk=!0)}}const g=()=>{const e=()=>Math.floor(10*Math.random());return[e(),e()]};class b{constructor(){this.board=Array(10).fill().map((()=>Array(10).fill(null)));for(let e=0;e<10;e++)for(let t=0;t<10;t++)this.board[e][t]={ship:null};this.shipList=[{name:"Carrier",length:5},{name:"Battleship",length:4},{name:"Cruiser",length:3},{name:"Submarine",length:3},{name:"Destroyer",length:2}],this.ships=[],this.occupiedCells=[],this.hitCells=[],this.missedCells=[]}createShip(e,t){const n=new m(t,e);return this.ships.push(n),n}placeShip(e,t,n){const r=(e,t)=>e<0||e>=10||t<0||t>=10||null!==this.board[e][t].ship,[o,a]=t;if("horizontal"===n){for(let t=o;t<o+e.length;t++)if(r(t,a))return;for(let t=o;t<o+e.length;t++)this.board[t][a].ship=e.name,this.occupiedCells.push([t,a])}if("vertical"===n){for(let t=a;t<a+e.length;t++)if(r(o,t))return;for(let t=a;t<a+e.length;t++)this.board[o][t].ship=e.name,this.occupiedCells.push([o,t])}return e}receiveAttack(e){let[t,n]=e;if(this.missedCells.includes([t,n])||this.hitCells.includes([t,n]))return;const r=this.board[t][n].ship;if(null!==r){const e=this.ships.find((e=>e.name===r));e&&(e.hit(),this.hitCells.push([t,n]))}else this.missedCells.push([t,n])}allSunk(){return this.ships.every((e=>!0===e.sunk))}autoPopulateBoard(){const e=(t,n)=>{if(n>=t.length)return;const r=t[n],o=g(),a=Math.random()>=.5?"horizontal":"vertical",s=this.placeShip(r,o,a);e(t,s?n+1:n)};this.shipList.forEach((e=>this.createShip(e.name,e.length))),e(this.ships,0)}}class v{constructor(e){this.name=e,this.gameboard=new b}}const y={player:new v("player"),computer:new class extends v{constructor(e){super(),this.name=e,this.moves=[]}attack(){const e=g();if(!this.moves.includes(e))return this.moves.push(e),e;this.attack()}}("computer"),init(){this.player.gameboard.autoPopulateBoard(),this.computer.gameboard.autoPopulateBoard(),(e=>{for(const t of e.occupiedCells)document.querySelectorAll(`.player-board [data-coord-x="${t[0]}"][data-coord-y="${t[1]}"]`).forEach((e=>{e.classList.add("has-ship")}))})(this.player.gameboard)},playRound(e){this.computer.gameboard.receiveAttack(e),(e=>{for(const t of e.gameboard.missedCells)document.querySelectorAll(`.${e.name}-board [data-coord-x="${t[0]}"][data-coord-y="${t[1]}"]`).forEach((e=>{e.classList.add("missed")}));for(const t of e.gameboard.hitCells)document.querySelectorAll(`.${e.name}-board [data-coord-x="${t[0]}"][data-coord-y="${t[1]}"]`).forEach((e=>{e.classList.add("hit")}))})(this.computer)}};document.querySelectorAll(".gameboard").forEach((e=>(e=>{for(let t=0;t<10;t++)for(let n=0;n<10;n++){const r=document.createElement("div");r.setAttribute("data-coord-x",`${n}`),r.setAttribute("data-coord-y",`${t}`),r.setAttribute("class","cell"),e.appendChild(r)}})(e))),y.init(),document.querySelector(".computer-board").addEventListener("click",(e=>{if("cell"===e.target.className){const t=+e.target.dataset.coordX,n=+e.target.dataset.coordY;y.playRound([t,n])}}))})()})();
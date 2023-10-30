(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>b});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(55),n.b),u=new URL(n(434),n.b),p=new URL(n(631),n.b),h=new URL(n(280),n.b),d=i()(o()),f=c()(l),m=c()(u),g=c()(p),v=c()(h);d.push([t.id,`@font-face {\n    font-family: 'Inter Regular';\n    src: url(${f});\n    font-weight: 400;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'Inter Semibold';\n    src: url(${m});\n    font-weight: 600;\n    font-style: normal;\n  }\n\n@font-face {\n    font-family: 'Inter Light';\n    src: url(${g});\n    font-weight: 300;\n    font-style: normal;\n  }\n\n:root {\n    --red: #E74460;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    align-items: center;\n    background: #69D2E7 url(${v}) no-repeat top center;\n    display: flex;\n    font-family: "Inter Regular";\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    height: 130px;\n    padding: 20px 0;\n    width: min(1200px, 100vh);\n}\n\n.logo {\n    color: var(--red);\n    font-family: 'Inter Light';\n    font-size: 24px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\nmain {\n    display: flex;\n    gap: 100px;\n    justify-content: space-evenly;\n    max-width: 1200px;\n    padding: 30px;\n}\n\n.gameboard {\n    display: grid;\n    gap: 4px;\n    grid-template-columns: repeat(10, 1fr);\n    height: 450px;\n    width: 450px;\n}\n\n.cell {\n    background: #fff;\n    border: 2px solid #000;\n    border-radius: 20%;\n    box-shadow: 1px 0px 0px rgba(0,0,0,1)\n}\n\n.has-ship {\n    background: #7BA0B0;\n}\n\n.computer-board .cell:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n`,""]);const b=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var h=n(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(d);else{var f=o(d,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),l=0;l<a.length;l++){var u=n(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},631:(t,e,n)=>{t.exports=n.p+"02850f28027788580733.ttf"},55:(t,e,n)=>{t.exports=n.p+"9ca9ba81e9dcaa12b3a1.ttf"},434:(t,e,n)=>{t.exports=n.p+"6058d3da655fb35169c2.ttf"},280:(t,e,n)=>{t.exports=n.p+"4186d38e661c2ca2674b.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),u=n.n(l),p=n(589),h=n.n(p),d=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;class m{constructor(t,e){this.name=e,this.length=t,this.hitsReceived=0,this.sunk=!1}hit(){this.hitsReceived++,this.isSunk()}isSunk(){this.hitsReceived===this.length&&(this.sunk=!0)}}const g=()=>{const t=()=>Math.floor(10*Math.random());return[t(),t()]};class v{constructor(){this.board=Array(10).fill().map((()=>Array(10).fill(null)));for(let t=0;t<10;t++)for(let e=0;e<10;e++)this.board[t][e]={ship:null,isHit:!1};this.shipList=[{name:"Carrier",length:5},{name:"Battleship",length:4},{name:"Cruiser",length:3},{name:"Submarine",length:3},{name:"Destroyer",length:2}],this.ships=[],this.occupiedCells=[]}createShip(t,e){const n=new m(e,t);return this.ships.push(n),n}placeShip(t,e,n){const r=(t,e)=>t<0||t>=10||e<0||e>=10||null!==this.board[t][e].ship,[o,a]=e;if("horizontal"===n){for(let e=o;e<o+t.length;e++)if(r(e,a))return;for(let e=o;e<o+t.length;e++)this.board[e][a].ship=t.name,this.occupiedCells.push([e,a])}if("vertical"===n){for(let e=a;e<a+t.length;e++)if(r(o,e))return;for(let e=a;e<a+t.length;e++)this.board[o][e].ship=t.name,this.occupiedCells.push([o,e])}return t}receiveAttack(t){let[e,n]=t;if(this.board[e][n].isHit)return;this.board[e][n].isHit=!0;const r=this.board[e][n].ship;if(null!==r){const t=this.ships.find((t=>t.name===r));t&&t.hit()}}allSunk(){return this.ships.every((t=>!0===t.sunk))}autoPopulateBoard(){const t=(e,n)=>{if(n>=e.length)return;const r=e[n],o=g(),a=Math.random()>=.5?"horizontal":"vertical",i=this.placeShip(r,o,a);t(e,i?n+1:n)};this.shipList.forEach((t=>this.createShip(t.name,t.length))),t(this.ships,0)}}class b{constructor(t){this.name=t,this.gameboard=new v}}const y={player:new b("player"),computer:new class extends b{constructor(){super(),this.moves=[]}attack(){const t=g();if(!this.moves.includes(t))return this.moves.push(t),t;this.attack()}}("computer"),init(){this.player.gameboard.autoPopulateBoard(),this.computer.gameboard.autoPopulateBoard(),(t=>{for(const e of t.occupiedCells)document.querySelectorAll(`.player-board [data-coord="${e}"]`).forEach((t=>{t.classList.add("has-ship")}))})(this.player.gameboard)},playRound(t){this.computer.gameboard.receiveAttack(t);const e=this.computer.attack();setTimeout(this.player.gameboard.receiveAttack(e),1e3)}};document.querySelectorAll(".gameboard").forEach((t=>(t=>{for(let e=0;e<10;e++)for(let n=0;n<10;n++){const r=document.createElement("div");r.setAttribute("data-coord",`${n},${e}`),r.setAttribute("class","cell"),t.appendChild(r)}})(t))),y.init()})()})();
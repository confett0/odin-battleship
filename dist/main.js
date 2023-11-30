(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),l=t.n(s),d=new URL(t(55),t.b),c=new URL(t(434),t.b),p=new URL(t(631),t.b),u=new URL(t(280),t.b),h=new URL(t(805),t.b),m=new URL(t(420),t.b),g=new URL(t(551),t.b),f=i()(a()),b=l()(d),x=l()(c),y=l()(p),v=l()(u),w=l()(h),S=l()(m),L=l()(g);f.push([e.id,`@font-face {\n    font-family: 'Inter Regular';\n    src: url(${b});\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Inter Semibold';\n    src: url(${x});\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Inter Light';\n    src: url(${y});\n    font-weight: 300;\n    font-style: normal;\n}\n\n:root {\n    --red: #E74460;\n    --grey: #7BA0B0;\n    --seafoam: #27C7AB;\n    --yellow: #DAE744;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    align-items: center;\n    background: #69D2E7 url(${v}) no-repeat top center;\n    display: flex;\n    font-family: "Inter Regular";\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nh2, h3 {\n    font-family: 'Inter Semibold';\n}\n\nheader {\n    height: 130px;\n    padding: 20px;\n    width: min(1000px, 100vw);\n}\n\n.logo {\n    color: var(--red);\n    font-family: 'Inter Light';\n    font-size: 28px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\nmain {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 100px;\n    justify-content: space-evenly;\n    max-width: 1200px;\n    padding: 30px;\n}\n\n.message-board {\n    background-color: var(--seafoam);\n    border: 2px solid #000;\n    border-radius: 15px;\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);\n    font-family: 'Inter Semibold';\n    margin-bottom: 20px;\n    padding: 20px;\n    width: 700px;\n}\n\n.board-label {\n    border: 2px solid #000;\n    border-radius: 15px;\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);\n    font-family: 'Inter Semibold';\n    margin-bottom: 20px;\n    padding: 10px 15px;\n    text-align: center;\n    width: 160px;\n}\n\n.board-label.player {\n    background-color: var(--seafoam);\n}\n\n.board-label.computer {\n    background-color: var(--red);\n}\n\n.gameboard {\n    display: grid;\n    gap: 4px;\n    grid-template-columns: repeat(10, 1fr);\n    height: 450px;\n    width: 450px;\n}\n\n.cell {\n    background: #fff;\n    border: 2px solid #000;\n    border-radius: 20%;\n    box-shadow: 1px 0px 0px rgba(0, 0, 0, 1);\n    height: 42px;\n    position: relative;\n    width: 42px;\n}\n\n.computer-board .cell:not(.missed, .hit):hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n.has-ship {\n    background: var(--grey);\n}\n\n.missed {\n    background: url(${w}) var(--red) no-repeat center;\n}\n\n.hit {\n    background: url(${S}) var(--grey) no-repeat center;\n}\n\nbutton {\n    background-color: var(--red);\n    border: 2px solid #000;\n    border-radius: 15px;\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);\n    cursor: pointer;\n    display: block;\n    font-family: 'Inter Semibold';\n    font-size: 16px;\n    padding: 12px 15px;\n    text-align: center;\n    transition: ease-in-out 300ms;\n    width: 160px;\n}\n\nbutton:hover {\n    background-color: var(--seafoam);\n}\n\n.visible {\n    display: block;\n}\n\n.hidden {\n    display: none;\n}\n\n/* Drag and drop */\n\n.drag-and-drop-wrap {\n    border: 2px solid #000;\n    border-radius: 5%;\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);\n    padding: 20px 15px 30px 22px;\n}\n\n.ship-wrap {\n    display: grid;\n    grid-template-columns: 150px 250px;\n    align-items: end;\n    height: 62px;\n}\n\n.drag-ship {\n    cursor: grab;\n    display: flex;\n    gap: 4px;\n    margin-top: 20px;\n}\n\n.drag-ship-cell {\n    background-color: var(--grey);\n}\n\n.instructions {\n    margin-top: 30px;\n}\n\n.drag-over {\n    background-color: var(--seafoam);\n}\n\n.positioned-ship {\n    margin: -2px 0 0 -2px;\n    position: absolute;\n    z-index: 1;\n}\n\n.vertical {\n    flex-direction: column;\n}\n\n.start-game-button {\n    margin: 20px auto;\n}\n\n.disabled-button {\n    background-color: var(--grey);\n    border: 2px solid #57737f;\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n    color: #57737f;\n    cursor: default;\n}\n\n.disabled-button:hover {\n    background-color: var(--grey);\n}\n\n/* Winner Modal */\n\n.winner-modal {\n    display: none;\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.6);\n    overflow: hidden;\n\n}\n\n.winner-modal-content {\n    background: url(${L}) no-repeat center;\n    border: 2px solid #000;\n    border-radius: 5%;\n    box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.1);\n    color: var(--red);\n    height: 450px;\n    letter-spacing: 2px;\n    margin: 10% auto;\n    padding: 80px 0 45px;\n    text-transform: uppercase;\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}`,""]);const k=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],d=r.base?l[0]+r.base:l[0],c=o[d]||0,p="".concat(d," ").concat(c);o[d]=c+1;var u=t(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var l=r(e,a),d=0;d<o.length;d++){var c=t(o[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},631:(e,n,t)=>{e.exports=t.p+"02850f28027788580733.ttf"},55:(e,n,t)=>{e.exports=t.p+"9ca9ba81e9dcaa12b3a1.ttf"},434:(e,n,t)=>{e.exports=t.p+"6058d3da655fb35169c2.ttf"},280:(e,n,t)=>{e.exports=t.p+"4186d38e661c2ca2674b.png"},420:(e,n,t)=>{e.exports=t.p+"04bbc5c7a27374eac379.png"},805:(e,n,t)=>{e.exports=t.p+"a2260fae27f0527c7129.png"},551:(e,n,t)=>{e.exports=t.p+"84c75679c14519c58ed5.jpeg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),l=t.n(s),d=t(216),c=t.n(d),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class g{constructor(e,n){this.name=n,this.length=e,this.hitsReceived=0,this.sunk=!1}hit(){this.hitsReceived++,this.isSunk()}isSunk(){this.hitsReceived===this.length&&(this.sunk=!0)}}const f=()=>{const e=()=>Math.floor(10*Math.random());return[e(),e()]};class b{constructor(){this.board=Array(10).fill().map((()=>Array(10).fill(null)));for(let e=0;e<10;e++)for(let n=0;n<10;n++)this.board[e][n]={ship:null};this.shipList=[{name:"Carrier",length:5},{name:"Battleship",length:4},{name:"Cruiser",length:3},{name:"Submarine",length:3},{name:"Destroyer",length:2}],this.ships=[],this.hitCells=[],this.missedCells=[]}createShip(e,n){const t=new g(n,e);return this.ships.push(t),t}placeShip(e,n,t){const r=(e,n)=>e<0||e>=10||n<0||n>=10||null!==this.board[e][n].ship,[a,o]=n;if("horizontal"===t){for(let n=a;n<a+e.length;n++)if(r(n,o))return;for(let n=a;n<a+e.length;n++)this.board[n][o].ship=e.name}if("vertical"===t){for(let n=o;n<o+e.length;n++)if(r(a,n))return;for(let n=o;n<o+e.length;n++)this.board[a][n].ship=e.name}return e}removeShip(e){for(let n=0;n<10;n++)for(let t=0;t<10;t++)this.board[n][t].ship===e.name&&(this.board[n][t].ship=null)}receiveAttack(e){let[n,t]=e;if(this.missedCells.includes([n,t])||this.hitCells.includes([n,t]))return;const r=this.board[n][t].ship;if(null===r)return this.missedCells.push([n,t]),"It's a miss.";{const e=this.ships.find((e=>e.name===r));if(e)return e.hit(),this.hitCells.push([n,t]),e.sunk?`The ${e.name} is sunk!`:"It's a hit!"}}allSunk(){return this.ships.every((e=>!0===e.sunk))}resetBoard(){for(let e=0;e<10;e++)for(let n=0;n<10;n++)this.board[e][n].ship=null;this.ships=[]}autoPopulateBoard(){const e=(n,t)=>{if(t>=n.length)return;const r=n[t],a=f(),o=Math.random()>=.5?"horizontal":"vertical",i=this.placeShip(r,a,o);e(n,i?t+1:t)};this.shipList.forEach((e=>this.createShip(e.name,e.length))),e(this.ships,0),console.log(this.board)}}class x{constructor(e){this.name=e,this.gameboard=new b}}class y extends x{constructor(e){super(),this.name=e,this.moves=[]}attack(){const e=f();if(!this.moves.includes(e))return this.moves.push(e),e;this.attack()}}const v=e=>{(e=>{e.innerHTML="";for(let n=0;n<10;n++)for(let t=0;t<10;t++){const r=document.createElement("div");r.setAttribute("data-coord-x",`${t}`),r.setAttribute("data-coord-y",`${n}`),r.setAttribute("class","cell"),e.appendChild(r)}})(document.querySelector(`.${e}-board`))},w=()=>{const e=document.querySelector(".computer-wrap"),n=document.querySelector(".message-board"),t=document.querySelector(".drag-and-drop-wrap");e.classList.toggle("hidden"),n.classList.toggle("hidden"),t.classList.toggle("hidden")},S=()=>{const e=E.player.gameboard.board;for(let n=0;n<10;n++)for(let t=0;t<10;t++)null!==e[t][n].ship?document.querySelector(`.player-board [data-coord-x="${t}"][data-coord-y="${n}"]`).classList.add("has-ship"):document.querySelector(`.player-board [data-coord-x="${t}"][data-coord-y="${n}"]`).classList.remove("has-ship")},L=e=>{for(const n of e.gameboard.missedCells)document.querySelectorAll(`.${e.name}-board [data-coord-x="${n[0]}"][data-coord-y="${n[1]}"]`).forEach((e=>{e.classList.add("missed")}));for(const n of e.gameboard.hitCells)document.querySelectorAll(`.${e.name}-board [data-coord-x="${n[0]}"][data-coord-y="${n[1]}"]`).forEach((e=>{e.classList.add("hit")}))},k=(e,n)=>{const t=document.querySelector(".message-board");"player"===n?t.innerText=`You fire into enemy waters... ${e}`:"computer"===n&&(t.innerText=`The enemy fires into your waters... ${e}`)},E={player:new x("player"),computer:new y("computer"),playerTurn:!0,isGameOn:!0,setUp(){v("player"),(()=>{const e=E.player.gameboard.shipList,n=document.querySelector(".draggable-ship-container");n.innerHTML="",e.map((e=>(e=>{const t=document.createElement("div"),r=document.createElement("h3"),a=document.createElement("div");t.setAttribute("class","ship-wrap"),r.textContent=e.name,a.setAttribute("class","drag-ship"),a.setAttribute("id",e.name),a.setAttribute("data-length",e.length),a.setAttribute("draggable","true");for(let n=0;n<e.length;n++){const e=document.createElement("div");e.classList.add("drag-ship-cell","cell"),a.appendChild(e)}t.append(r,a),n.appendChild(t)})(e)))})(),(()=>{const e=document.querySelectorAll(".drag-ship"),n=document.querySelectorAll(".cell"),t=document.querySelector(".start-game-button");function r(e){e.dataTransfer.setData("text/plain",e.target.id),setTimeout((()=>{e.target.classList.add("hidden")}),0)}function a(e){e.preventDefault(),e.target.classList.add("drag-over")}function o(e){e.preventDefault(),e.target.classList.add("drag-over")}function i(e){e.target.classList.remove("drag-over")}function s(e){e.preventDefault(),e.target.classList.remove("drag-over");const n=e.dataTransfer.getData("text/plain"),r=document.getElementById(n),a=+r.getAttribute("data-length"),o=+e.target.dataset.coordX,i=+e.target.dataset.coordY,s=E.player.gameboard.createShip(n,a);let l="horizontal";const d=()=>l="horizontal"===l?"vertical":"horizontal";E.player.gameboard.removeShip(s),E.player.gameboard.placeShip(s,[o,i],l)&&(e.target.appendChild(r),r.classList.add("positioned-ship")),r.addEventListener("click",(()=>{d(),E.player.gameboard.removeShip(s),E.player.gameboard.placeShip(s,[o,i],l)?r.classList.toggle("vertical"):d()})),0===document.querySelectorAll(".draggable-ship-container .drag-ship").length&&(t.classList.remove("disabled-button"),t.addEventListener("click",(()=>{w(),E.start()})))}e.forEach((e=>e.addEventListener("dragstart",r))),n.forEach((e=>{e.addEventListener("dragenter",a),e.addEventListener("dragover",o),e.addEventListener("dragleave",i),e.addEventListener("drop",s)})),document.querySelector(".auto-place").addEventListener("click",(()=>{E.player.gameboard.resetBoard(),E.player.gameboard.autoPopulateBoard(),S()}))})()},start(){v("player"),v("computer"),S(),this.computer.gameboard.autoPopulateBoard(),document.querySelector(".computer-board").addEventListener("click",(e=>{if("cell"===e.target.className&&E.playerTurn&&E.isGameOn){const n=+e.target.dataset.coordX,t=+e.target.dataset.coordY;E.playRound([n,t])}}))},playerMove(e){const n=this.computer.gameboard.receiveAttack(e);L(this.computer),k(n,"player"),this.playerTurn=!1},computerMove(){const e=E.computer.attack(),n=E.player.gameboard.receiveAttack(e);L(E.player),k(n,"computer"),E.playerTurn=!0},playRound(e){this.playerMove(e),this.endGame(),this.isGameOn&&(setTimeout(E.computerMove,1300),this.endGame())},checkWinner(){return this.computer.gameboard.allSunk()?this.player:this.player.gameboard.allSunk()?this.computer:void 0},endGame(){const e=this.checkWinner();e&&(this.isGameOn=!1,(e=>{const n=document.querySelector(".winner-modal-content"),t=document.querySelector(".winner-text"),r=document.querySelector(".winner-modal"),a=document.querySelector(".new-game-button");r.classList.add("visible"),e===E.player&&(t.innerText="You win!"),e===E.computer&&(n.style.background="url('images/loser-bg.jpeg') no-repeat center",t.innerText="You lose!"),a.addEventListener("click",(()=>{r.classList.remove("visible"),E.resetGame(),E.setUp()}))})(e))},resetGame(){w(),this.player=new x("player"),this.computer=new y("computer"),this.isGameOn=!0,this.playerTurn=!0,k("Awaiting orders, admiral!")}};E.setUp()})()})();
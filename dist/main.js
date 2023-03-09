(()=>{"use strict";var t={418:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var o=n(810),r=n(33);const s=function(){const t=document.createElement("div");t.setAttribute("class","board");for(let e=8;e>0;e--){const n=document.createElement("div");n.setAttribute("id",`row${e}`),n.setAttribute("class","row"),n.textContent=`${e}`,t.appendChild(n);for(let n=0;n<8;n++){const s=document.createElement("div");s.setAttribute("id",`${r.t[n]+e}`),(e+n)%2==1?s.setAttribute("class","dark"):s.setAttribute("class","light"),t.appendChild(s),s.onclick=()=>{(0,o.D)(s.id)}}}let e=r.t;return e.unshift(""),e.forEach((e=>{const n=document.createElement("div");n.setAttribute("id",`col${e}`),n.setAttribute("class","col"),n.textContent=e,t.appendChild(n)})),t}},106:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var o=n(33);let r=new class{constructor(t){this.vertices=t,this.Adjlist=new Map}addvertex(t){this.Adjlist.set(t,[])}addEdge(t,e){this.Adjlist.get(t).push(e)}printGraph(){console.log("Printing Graph"),console.log(this.Adjlist)}allnodes(t,e,n=[t],o=[]){if(t==e)return o.push(e),o;const r=this.Adjlist.get(t);return o.push(t),r.forEach((t=>{o.includes(t)||n.includes(t)||n.push(t)})),n.shift(),this.allnodes(n[0],e,n,o)}knightMoves(t,e){let n=this.allnodes(t,e);n.reverse();for(let t=0;t<n.length-2;t++)this.Adjlist.get(n[t]).includes(n[t+1])||(n.splice(t+1,1),t--);return n.reverse()}}(64);const s=o.E;s.forEach((t=>{t.forEach((t=>{r.addvertex(t)}))})),s.forEach((t=>{t.forEach((e=>{(function(t,e,n){let o=[],r=Number(t),s=Number(e);return s+2>7||r-1<0||o.push(n[r-1][s+2]),s+2>7||r+1>7||o.push(n[r+1][s+2]),r+2>7||s+1>7||o.push(n[r+2][s+1]),r+2>7||s-1<0||o.push(n[r+2][s-1]),s-2<0||r+1>7||o.push(n[r+1][s-2]),s-2<0||r-1<0||o.push(n[r-1][s-2]),r-2<0||s-1<0||o.push(n[r-2][s-1]),r-2<0||s+1>7||o.push(n[r-2][s+1]),o})(s.indexOf(t),t.indexOf(e),s).forEach((t=>{r.addEdge(e,t)}))}))}));const d=r},810:(t,e,n)=>{n.d(e,{D:()=>f});const{default:o}=n(418),{default:r}=n(106),s=document.getElementById("content"),d=document.createElement("div");d.setAttribute("class","title"),d.textContent="Knights Traversals",s.appendChild(d);const l=document.createElement("div");l.setAttribute("class","instructions"),l.textContent="Select START location on the board",s.appendChild(l),s.appendChild(o());const c=document.createElement("div");c.setAttribute("class","controls"),s.appendChild(c);let i="",a="";const u=document.createElement("div");u.textContent=`Start: ${i}`,c.appendChild(u);const h=document.createElement("div");h.textContent=`End: ${a}`,c.appendChild(h);const p=document.createElement("div");s.appendChild(p);let m="START";function f(t){if(console.log(t),"START"===m){console.log("Start Selected"),u.textContent=`Start: ${t}`,i=t;const e=document.createElement("img");return document.getElementById(t).appendChild(e),e.src="../img//knight.png",l.textContent="Select END location on the board",void(m="END")}if("END"===m&&t!==i){console.log("End Selected"),h.textContent=`End: ${t}`,a=t,document.getElementById(a).setAttribute("class","red"),m="SET";const n=r.knightMoves(i,a);return s.appendChild(function(t){const e=document.createElement("div"),n=document.createElement("div");let o="";return t.forEach((e=>{e!==t[0]?o+=` => ${e}`:o+=e})),n.textContent=o,e.appendChild(n),e}(n)),(e=n).forEach((t=>{if(t!==e[0]){const e=document.createElement("img");document.getElementById(t).appendChild(e),e.src="../img//circle.png"}})),void(l.textContent=function(t){const e=t.length>2?"moves":"move";return`The knight on ${t[0]} will make it to ${t[t.length-1]} in ${t.length-1} ${e}`}(n))}var e}},33:(t,e,n)=>{n.d(e,{E:()=>r,t:()=>o});const o=["A","B","C","D","E","F","G","H"],r=function(){let t=[];for(let e=1;e<9;e++){let n=[];for(let t=0;t<8;t++){const r=o[t]+e;n.push(r)}t.push(n)}return t}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(810)})();
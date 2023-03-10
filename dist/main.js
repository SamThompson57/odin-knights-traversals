(()=>{"use strict";var t={418:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var o=n(810),r=n(33);const d=function(){const t=document.createElement("div");t.setAttribute("class","board"),t.setAttribute("id","board");for(let e=8;e>0;e--){const n=document.createElement("div");n.setAttribute("id",`row${e}`),n.setAttribute("class","row"),n.textContent=`${e}`,t.appendChild(n);for(let n=0;n<8;n++){const d=document.createElement("div");d.setAttribute("id",`${r.t[n]+e}`),(e+n)%2==1?d.setAttribute("class","dark"):d.setAttribute("class","light"),t.appendChild(d),d.onclick=()=>{(0,o.D)(d.id)}}}let e=r.t;return e.unshift(""),e.forEach((e=>{const n=document.createElement("div");n.setAttribute("id",`col${e}`),n.setAttribute("class","col"),n.textContent=e,t.appendChild(n)})),e.shift(),t}},410:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var o=n(33);let r=new class{constructor(t){this.vertices=t,this.Adjlist=new Map}addvertex(t){this.Adjlist.set(t,[])}addEdge(t,e){this.Adjlist.get(t).push(e)}printGraph(){console.log("Printing Graph"),console.log(this.Adjlist)}allnodes(t,e,n=[t],o=[]){if(t==e)return o.push(e),o;o.push(t);const r=this.Adjlist.get(t);return function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),o=t[e];t[e]=t[n],t[n]=o}}(r),r.forEach((t=>{o.includes(t)||n.includes(t)||n.push(t)})),n.shift(),this.allnodes(n[0],e,n,o)}knightMoves(t,e){let n=this.allnodes(t,e);n.reverse();for(let t=0;t<n.length-2;t++)this.Adjlist.get(n[t]).includes(n[t+1])||(n.splice(t+1,1),t--);return n.reverse()}}(64);const d=o.E;d.forEach((t=>{t.forEach((t=>{r.addvertex(t)}))})),d.forEach((t=>{t.forEach((e=>{(function(t,e,n){let o=[],r=Number(t),d=Number(e);return d+2>7||r-1<0||o.push(n[r-1][d+2]),d+2>7||r+1>7||o.push(n[r+1][d+2]),r+2>7||d+1>7||o.push(n[r+2][d+1]),r+2>7||d-1<0||o.push(n[r+2][d-1]),d-2<0||r+1>7||o.push(n[r+1][d-2]),d-2<0||r-1<0||o.push(n[r-1][d-2]),r-2<0||d-1<0||o.push(n[r-2][d-1]),r-2<0||d+1>7||o.push(n[r-2][d+1]),o})(d.indexOf(t),t.indexOf(e),d).forEach((t=>{r.addEdge(e,t)}))}))}));const s=r},810:(t,e,n)=>{n.d(e,{D:()=>v});const{default:o}=n(418),{default:r}=n(410),d=document.getElementById("content"),s=document.createElement("div");s.setAttribute("class","title"),s.textContent="Knights Traversals",d.appendChild(s);const i=document.createElement("div");i.setAttribute("class","instructions"),i.textContent="Select START location on the board",d.appendChild(i),d.appendChild(o());const l=document.createElement("div");l.setAttribute("class","controls"),d.appendChild(l);let c="",a="";const u=document.createElement("div");u.textContent="Start:",l.appendChild(u);const h=document.createElement("div");h.textContent="End:",l.appendChild(h);const p=document.createElement("div");d.appendChild(p);let m="START";const f=document.createElement("div"),E=document.createElement("button");function v(t){if("START"===m){u.textContent=`Start: ${t}`,c=t;const e=document.createElement("img");return document.getElementById(t).appendChild(e),e.src="../img//knight.png",i.textContent="Select END location on the board",void(m="END")}if("END"===m&&t!==c){h.textContent=`End: ${t}`,a=t,document.getElementById(a).setAttribute("class","red"),m="SET";const e=r.knightMoves(c,a);return d.appendChild(function(t){const e=document.createElement("div");e.setAttribute("id","output");const n=document.createElement("div");n.setAttribute("class","path"),n.textContent="An example of the knights path is:",e.appendChild(n);const o=document.createElement("div");o.setAttribute("class","path");let r="";return t.forEach((e=>{e!==t[0]?r+=` => ${e}`:r+=e})),o.textContent=r,e.appendChild(o),e}(e)),function(t){let e=0;t.forEach((n=>{if(n!==t[0]){const t=document.createElement("div");t.textContent=e,t.setAttribute("class","ringlabel"),document.getElementById(n).appendChild(t)}e++}))}(e),void(i.textContent=function(t){const e=t.length>2?"moves":"move";return`The knight on ${t[0]} will make it to ${t[t.length-1]} in ${t.length-1} ${e}`}(e))}}E.textContent="RESET",f.setAttribute("class","controls"),f.appendChild(E),d.appendChild(f),E.onclick=()=>{i.textContent="Select START location on the board";const t=document.getElementById("board");d.removeChild(t),u.textContent="Start:",h.textContent="End:";const e=document.getElementById("output");e&&d.removeChild(e),m="START",d.insertBefore(o(),l)}},33:(t,e,n)=>{n.d(e,{E:()=>r,t:()=>o});const o=["A","B","C","D","E","F","G","H"],r=function(){let t=[];for(let e=1;e<9;e++){let n=[];for(let t=0;t<8;t++){const r=o[t]+e;n.push(r)}t.push(n)}return t}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var d=e[o]={exports:{}};return t[o](d,d.exports,n),d.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(810)})();
(this.webpackJsonpinfoskjerm=this.webpackJsonpinfoskjerm||[]).push([[0],{26:function(e,t,n){e.exports=n(69)},31:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),c=n.n(r),l=(n(31),n(32),n(33),n(5)),i=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return r(e.data.children[0].data)})).catch((function(e){return console.error(e)}))}),[]),n?o.a.createElement("div",{className:"reddit"},o.a.createElement("h3",null,o.a.createElement("p",null,n.title)),o.a.createElement("h4",null,o.a.createElement("p",null,n.selftext))):o.a.createElement(o.a.Fragment,null)},s=n(25),u=n.n(s)()({clientName:"cheney-infoskjermkurs"}),m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){u.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return r(e)}))}),[]),console.log(n),o.a.createElement("div",{className:"BikeStations"},o.a.createElement("h3",null,"bysykkel"),n.map((function(e){return o.a.createElement(d,{key:e.id,station:e})})))},d=function(e){var t=e.station;return console.log(t),o.a.createElement("div",{className:"station"},t.name," -//- ",t.bikesAvailable," : ",t.spacesAvailable)};var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"I N F O S K J E R M"),o.a.createElement(i,null),o.a.createElement("hr",null),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ecdb68b1.chunk.js.map
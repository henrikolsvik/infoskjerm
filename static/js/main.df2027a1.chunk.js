(this.webpackJsonpinfoskjerm=this.webpackJsonpinfoskjerm||[]).push([[0],{27:function(e,t,n){e.exports=n(70)},32:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},34:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(25),o=n.n(c),r=(n(32),n(33),n(34),n(5)),i=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return c(e.data.children[0].data)})).catch((function(e){return console.error(e)}))}),[]),n?l.a.createElement("div",{className:"reddit"},l.a.createElement("h3",null,l.a.createElement("p",null,n.title)),l.a.createElement("h4",null,l.a.createElement("p",null,n.selftext))):l.a.createElement(l.a.Fragment,null)},s=n(26),u=n.n(s)()({clientName:"cheney-infoskjermkurs"}),m=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){u.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return c(e)}))}),[]),console.log(n),l.a.createElement("div",{className:"BikeStations"},l.a.createElement("h3",null,"bysykkel"),n.map((function(e){return l.a.createElement(d,{key:e.id,station:e})})))},d=function(e){var t=e.station;return console.log(t),l.a.createElement("div",{className:"station"},t.name," -//- ",t.bikesAvailable," : ",t.spacesAvailable)},f=n(12),E=function(){var e=f.DateTime.local().setLocale("nb-NO");return console.log(e),l.a.createElement("div",{className:"clock"}," ",l.a.createElement("h3",null," ",e.toLocaleString(f.DateTime.TIME_24_SIMPLEn))," ")};var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"I N F O S K J E R M"),l.a.createElement(E,null),l.a.createElement("hr",null),l.a.createElement(i,null),l.a.createElement("hr",null),l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.df2027a1.chunk.js.map
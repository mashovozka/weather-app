(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{15:function(e,t,n){e.exports={weatherWrapper:"currentLocation_weatherWrapper__GdMHf",textWrapper:"currentLocation_textWrapper__2PvQM",location:"currentLocation_location__2f_6r",date:"currentLocation_date__14ErJ",weatherDetails:"currentLocation_weatherDetails__2QUfA",tempDetails:"currentLocation_tempDetails__3biFn",tempWrapper:"currentLocation_tempWrapper__2Eizi",temp:"currentLocation_temp__3l_W2",minAmdMax:"currentLocation_minAmdMax__2sJfu",otherDetails:"currentLocation_otherDetails__2gIRH",preloader:"currentLocation_preloader__MDtmR",error:"currentLocation_error__2rNbP",sadFace:"currentLocation_sadFace__1q4-O"}},189:function(e,t,n){e.exports={cityName:"GoogleMaps_cityName__2CGnY"}},199:function(e,t,n){},200:function(e,t,n){},31:function(e,t,n){e.exports={locations:"OtherLocations_locations__2q0wA",location:"OtherLocations_location__2ll1k",infoWrapper:"OtherLocations_infoWrapper__1aiMz",deleteButton:"OtherLocations_deleteButton__eTBgh",cityName:"OtherLocations_cityName__2qQi2",weatherDetails:"OtherLocations_weatherDetails__2N31c",weatherDetail:"OtherLocations_weatherDetail__1ch5y"}},421:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"GET_MAIN_WEATHER_SUCCESS",(function(){return w})),n.d(a,"GET_MAIN_WEATHER_FAILURE",(function(){return L})),n.d(a,"weatherFailure",(function(){return N})),n.d(a,"setCurrentLocationWeather",(function(){return y})),n.d(a,"getCurrentLocationWeather",(function(){return T}));var r={};n.r(r),n.d(r,"GET_OTHER_LOCATION_WEATHER",(function(){return S})),n.d(r,"GET_OTHER_LOCATION_WEATHER_SUCCESS",(function(){return C})),n.d(r,"DELETE_LOCATION",(function(){return A})),n.d(r,"ADD_NEW_LOCATION_TO_LIST",(function(){return D})),n.d(r,"addNewLocationToList",(function(){return M})),n.d(r,"deleteLocation",(function(){return I})),n.d(r,"setOtherLocationWeather",(function(){return H})),n.d(r,"getOtherLocationWeather",(function(){return k}));var c=n(2),i=n(0),o=n.n(i),s=n(6),l=n.n(s),u=(n(199),n(200),n(36)),d=n(14),p=n(15),j=n.n(p),h=function(e){var t=new Date((new Date).setHours((new Date).getHours()+(new Date).getTimezoneOffset()/60)),n=new Date(t.setHours(t.getHours()+e/3600)),a=n.getHours(),r=n.getMinutes(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],i=n.getDate();return"".concat(a,":").concat(r<10?"0".concat(r):r,", ").concat(c," ").concat(i)},O=n.p+"static/media/spinner.b767aab4.svg",b=n.p+"static/media/sadEmoji.a66a02c5.png",m=n(27),_=n.n(m),f=n(52),x=n(184),v="b8bf13ed5333b61d48834aebf903865a",g=n.n(x).a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),E=function(e){return g.get("/weather?lat=".concat(e.lat,"&lon=").concat(e.lng,"&units=metric&appid=").concat(v))},w="GET_WEATHER_SUCCESS",L="GET_WEATHER_FAILURE",N=function(e){return{type:L,payload:e}},y=function(e){return{type:w,payload:e}},T=function(e){return function(){var t=Object(f.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e).then((function(e){n(y(e.data))})).catch((function(e){n(N(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};function W(){var e=Object(d.b)();Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,a=n.latitude,r=n.longitude;console.log({latitude:a,longitude:r}),e(T({lat:a,lng:r}))}),(function(e){r("Can't find current location")}))}),[e]);var t=Object(i.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],o=Object(d.c)((function(e){return e.currentLocationWeather}));console.log(o);var s,l=function(e){return"".concat(new Date(1e3*e).getHours(),":").concat(new Date(1e3*e).getMinutes())};return Object(c.jsx)("div",{className:j.a.wrapper,"data-test":"component-currentLocation",children:Object(c.jsxs)("div",{className:j.a.weatherWrapper,children:[!a&&o&&Object(c.jsxs)("div",{className:j.a.textWrapper,"data-test":"weather",children:[Object(c.jsxs)("div",{className:j.a.location,children:[o.name,", ",o.sys.country]}),Object(c.jsx)("div",{className:j.a.date,children:h(o.timezone)}),Object(c.jsxs)("div",{className:j.a.weatherDetails,children:[Object(c.jsxs)("div",{className:j.a.tempDetails,children:[Object(c.jsxs)("div",{className:j.a.tempWrapper,children:[Object(c.jsx)("img",{className:j.a.tempImg,src:"https://openweathermap.org/img/w/".concat(o.weather[0].icon,".png"),alt:"weather img"}),Object(c.jsxs)("div",{className:j.a.temp,children:[Math.round(o.main.temp),"\xb0C"]})]}),Object(c.jsxs)("div",{className:j.a.minAmdMax,children:[Object(c.jsx)("div",{children:o.weather[0].description}),Object(c.jsxs)("div",{children:["feels like: ",Math.round(o.main.feels_like)]}),Object(c.jsxs)("div",{children:["Max: ",Math.round(o.main.temp_max),"\xb0C"]}),Object(c.jsxs)("div",{children:["Min: ",Math.round(o.main.temp_min),"\xb0C"]})]})]}),Object(c.jsxs)("div",{className:j.a.otherDetails,children:[Object(c.jsxs)("div",{children:["Humidity: ",o.main.humidity,"%"]}),Object(c.jsxs)("div",{children:["Pressure: ",o.main.pressure," hPa"]}),Object(c.jsxs)("div",{children:["Visibility: ",o.visibility/1e3,"km"]}),Object(c.jsxs)("div",{children:["Wind: ",o.wind.speed," m/s ",(s=o.wind.deg,s>11.25&&s<=33.75?"NNE":s>33.75&&s<=56.25?"ENE":s>56.25&&s<=78.75?"E":s>78.75&&s<=101.25||s>101.25&&s<=123.75?"ESE":s>123.75&&s<=146.25?"SE":s>146.25&&s<=168.75?"SSE":s>168.75&&s<=191.25?"S":s>191.25&&s<=213.75?"SSW":s>213.75&&s<=236.25?"SW":s>236.25&&s<=258.75?"WSW":s>258.75&&s<=281.25?"W":s>281.25&&s<=303.75?"WNW":s>303.75&&s<=326.25?"NW":s>326.25&&s<=348.75?"NNW":"N")]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:["Sunrise: ",l(o.sys.sunrise)]}),Object(c.jsxs)("div",{children:["Sunset: ",l(o.sys.sunset)]})]})]})]})]}),!o&&!a&&Object(c.jsx)("div",{className:j.a.preloader,"data-test":"spinner",children:Object(c.jsx)("img",{src:O,alt:"loading..."})}),a&&Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:j.a.error,children:a}),Object(c.jsx)("img",{src:b,alt:"",className:j.a.sadFace})]})]})})}var S="GET_OTHER_LOCATION_WEATHER",C="GET_OTHER_LOCATION_WEATHER_SUCCESS",A="DELETE_LOCATION",D="ADD_NEW_LOCATION_TO_LIST",M=function(e){return{type:D,payload:e}},I=function(e){return{type:A,payload:e}},H=function(e){return{type:C,payload:e}},k=function(e){return function(){var t=Object(f.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e).then((function(e){n(H(e.data))})).catch((function(e){n(N(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=n(31),G=n.n(R),F=n(442);function P(){var e=Object(d.c)((function(e){return e.otherLocations})),t=Object(d.c)((function(e){return e.newOtherLocation})),n=Object(d.b)(),o=Object(i.useState)(""),s=Object(u.a)(o,2),l=s[0],p=s[1],j=e.every((function(e){return e.id!==t.id}));Object(i.useEffect)((function(){t&&n(j?r.addNewLocationToList(t):a.getWeatherFailure({type:"error",message:"Location already exists"}))}),[t]);return Object(c.jsx)("div",{className:G.a.locations,children:e.map((function(e){return Object(c.jsxs)("div",{className:G.a.location,style:{opacity:"".concat(l===e.id?0:1)},children:[Object(c.jsx)(F.a,{variant:"outlined",className:G.a.deleteButton,onClick:function(){return t=e.id,p(t),void setTimeout((function(){n(r.deleteLocation(t))}),1e3);var t},children:"delete"}),Object(c.jsxs)("div",{className:G.a.cityName,children:[e.name,", ",e.sys.country]}),Object(c.jsxs)("div",{className:G.a.weatherDetails,children:[Object(c.jsx)("img",{className:G.a.tempImg,src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"weather img"}),Object(c.jsxs)("span",{className:G.a.weatherDetail,children:[Math.round(e.main.temp),"\xb0C"]}),Object(c.jsxs)("span",{className:G.a.weatherDetail,children:["feels like: ",Math.round(e.main.feels_like)]})]})]},e.id)}))})}var U=n(18),J=n(57),B=n.n(J),z=n(68),q=n.n(z);function V(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(d.b)(),o=function(){var e=Object(f.a)(_.a.mark((function e(t){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.geocodeByAddress)(t);case 2:return n=e.sent,e.next=5,Object(z.getLatLng)(n[0]);case 5:c=e.sent,r(k(c)),a("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:B.a.wrapper,children:[Object(c.jsxs)("div",{className:B.a.info,children:[Object(c.jsxs)("p",{children:["Type a city name and see its weather on the map!",Object(c.jsx)("br",{}),"Click the icon to expand."]}),Object(c.jsxs)("p",{children:["\u0412\u043f\u0438\u0448\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0435\u0433\u043e \u043f\u043e\u0433\u043e\u0434\u0443 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435!",Object(c.jsx)("br",{}),"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0438\u043a\u043e\u043d\u043a\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0434\u0435\u0442\u0430\u043b\u0435\u0439"]})]}),Object(c.jsx)(q.a,{searchOptions:{types:["(cities)"]},value:n,onChange:a,onSelect:o,children:function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,r=e.loading;return Object(c.jsxs)("div",{className:B.a.autocompleteWrapper,children:[Object(c.jsx)("input",Object(U.a)({},t({placeholder:"Type city",className:"".concat(B.a.input)}))),Object(c.jsxs)("div",{className:B.a.dropdown,style:{visibility:"".concat(n.length>0?"visible":"hidden"),border:"1px solid purple"},children:[r?Object(c.jsx)("div",{children:"...loading"}):null,n.map((function(e,t){var n={background:e.active?"#E9DEFF":"white",padding:"3px 5px"};return Object(c.jsx)("div",Object(U.a)(Object(U.a)({},a(e,{style:n})),{},{children:e.description}),t)}))]})]})}})]})}var Q=n(90),Z=function(e){var t=e.children,n=Object(Q.b)(),a=n.enqueueSnackbar,r=n.closeSnackbar,c=Object(d.c)((function(e){return e.error}));return Object(i.useEffect)((function(){if(c&&c.message)var e=a(c.message,{variant:c.type,onClick:function(){r(e)}})}),[c,r,a]),t},X=n(44),Y=n(189),K=n.n(Y);var $=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(){var e=Object(i.useRef)(),t=Object(d.c)((function(e){return e.currentLocationWeather})),n=Object(d.c)((function(e){return e.otherLocations})),a=Object(i.useState)(null),r=Object(u.a)(a,2),o=r[0],s=r[1];return t&&Object(c.jsxs)(X.GoogleMap,{defaultZoom:1.5,defaultCenter:{lat:t.coord.lat,lng:t.coord.lon},ref:e,children:[Object(c.jsx)(X.Marker,{position:{lat:t.coord.lat,lng:t.coord.lon},onClick:function(){s(t)},icon:{url:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png")}}),n.map((function(e){return Object(c.jsx)(X.Marker,{position:{lat:e.coord.lat,lng:e.coord.lon},icon:{url:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")},onClick:function(){s(e)}},e.id)})),o&&Object(c.jsx)(X.InfoWindow,{onCloseClick:function(){s(null)},position:{lat:o.coord.lat,lng:o.coord.lon},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:K.a.cityName,children:[o.name,", ",o.sys.country]}),Object(c.jsxs)("div",{children:[Math.round(o.main.temp),"\xb0C"]}),Object(c.jsxs)("div",{children:["feels like: ",Math.round(o.main.feels_like)]})]})})]})})));var ee=function(){return Object(c.jsx)(Q.a,{maxSnack:10,children:Object(c.jsx)(Z,{children:Object(c.jsxs)("div",{className:"wrapper","data-test":"appComponent",children:[Object(c.jsx)("h1",{className:"header",children:"WEATHER APP"}),Object(c.jsxs)("div",{className:"content-wrapper",children:[Object(c.jsx)("div",{className:"MainInfo",children:Object(c.jsx)(W,{})}),Object(c.jsxs)("div",{className:"otherLocations",children:[Object(c.jsx)(V,{}),Object(c.jsx)(P,{})]}),Object(c.jsx)("div",{className:"MapsWrapper",children:Object(c.jsx)($,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCSCREDVjbJ-WOVvD2JTWGCViXbwgjbyP0",loadingElement:Object(c.jsx)("div",{style:{height:"100%"}}),containerElement:Object(c.jsx)("div",{style:{height:"400px"}}),mapElement:Object(c.jsx)("div",{style:{height:"100%"}})})})]})]})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,444)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ne=n(65),ae=n(191),re={currentLocationWeather:"",otherLocations:[],newOtherLocation:"",error:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_MAIN_WEATHER_SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{currentLocationWeather:t.payload});case r.GET_OTHER_LOCATION_WEATHER_SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{newOtherLocation:t.payload});case r.ADD_NEW_LOCATION_TO_LIST:return Object(U.a)(Object(U.a)({},e),{},{otherLocations:[t.payload].concat(Object(ae.a)(e.otherLocations))});case a.GET_MAIN_WEATHER_FAILURE:return Object(U.a)(Object(U.a)({},e),{},{error:t.payload});case r.DELETE_LOCATION:return Object(U.a)(Object(U.a)({},e),{},{otherLocations:e.otherLocations.filter((function(e){return e.id!==t.payload}))});default:return e}},ie=[n(190).a],oe=ne.a.apply(void 0,ie)(ne.c)(ce);l.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d.a,{store:oe,children:Object(c.jsx)(ee,{})})}),document.getElementById("root")),te()},57:function(e,t,n){e.exports={wrapper:"WeatherSearch_wrapper__1_jcp",autocompleteWrapper:"WeatherSearch_autocompleteWrapper__AiDbZ",input:"WeatherSearch_input__13Hi_",dropdown:"WeatherSearch_dropdown__1sL4x",info:"WeatherSearch_info__1A3NP"}}},[[421,1,2]]]);
//# sourceMappingURL=main.3119eb9a.chunk.js.map
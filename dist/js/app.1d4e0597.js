(function(t){function e(e){for(var i,s,r=e[0],c=e[1],u=e[2],f=0,m=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var i=n("2b0e"),o=n("ecee"),a=n("c074"),s=n("ad3d");o["c"].add(a["a"]),i["default"].component("font-awesome-icon",s["a"]),i["default"].component("font-awesome-layers",s["b"]),i["default"].component("font-awesome-layers-text",s["c"]);var r=n("5f5b");n("ab8b"),n("2dd8");i["default"].use(r["a"]);var c=n("5886");n("4413");i["default"].use(c["a"]);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{attrs:{id:"title"}},[t._v("Shoppies Movie Nominations")]),n("SearchBar"),n("NominationView"),n("ResultsList")],1)},l=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageWrapper"},[n("div",{staticClass:"contentWrap"},[n("b-row",[n("b-col",[n("b-form-input",{attrs:{placeholder:"Search"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.movie_search_text,callback:function(e){t.movie_search_text=e},expression:"movie_search_text"}})],1),n("b-col",{attrs:{md:"auto"}},[n("font-awesome-icon",{attrs:{id:"search_icon",icon:"search",size:"2x"},on:{click:t.search}})],1)],1)],1)])},m=[],d={name:"SearchBar",data:function(){return{movie_search_text:null}},methods:{search:function(){this.$store.commit("UPDATE_SEARCH_TEXT",this.movie_search_text)}}},h=d,p=(n("ef89"),n("2877")),_=Object(p["a"])(h,f,m,!1,null,"b0a4a238",null),v=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==t.nominations.length?n("div",{staticClass:"pageWrapper"},[n("div",{staticClass:"contentWrap"},[n("div",{staticStyle:{"text-align":"left"}},t._l(t.nominations,(function(e){return n("b-button",{key:e.imdbID,staticClass:"del_nomination_button",on:{click:function(n){return t.del_nomination(e)}}},[t._v(" "+t._s(e.Title)+" "),n("font-awesome-icon",{attrs:{icon:"times"}})],1)})),1),n("div",{staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.nominations.length)+"/5 ")])])]):t._e()},x=[],w=(n("498a"),{name:"SearchBar",data:function(){return{movie_search_text:null}},methods:{search:function(){this.movie_search_text.trim()&&this.$store.commit("UPDATE_SEARCH_TEXT",this.movie_search_text)},del_nomination:function(t){this.$store.commit("REMOVE_NOMINATION",t)}},computed:{nominations:function(){return this.$store.state.nominations}}}),y=w,g=(n("bbbb"),Object(p["a"])(y,b,x,!1,null,"6ae24b87",null)),O=g.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageWrapper"},t._l(t.movies,(function(t){return n("div",{key:t.imdbID,staticClass:"contentWrap"},[n("MovieView",{attrs:{movie:t}})],1)})),0)},E=[],T=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[n("img",{staticClass:"poster",attrs:{src:t.movie.Poster}})]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.movie.Title)+" ")]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.movie.Year)+" ")]),n("div",[n("b-button",{attrs:{hidden:t.is_nominated,disabled:!t.button_state},on:{click:t.nominate}},[t._v("Nominate")]),n("svg",{staticClass:"checkmark",attrs:{hidden:!t.is_nominated,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[n("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),n("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})])],1)])}),C=[],S={name:"MovieView",props:["movie"],data:function(){return{is_nominated:!1,button_state:!0}},methods:{nominate:function(){this.$store.commit("ADD_NOMINATION",this.movie),5===this.nominations.length&&this.$swal({title:"Max Nominations Reached",icon:"success"})},update:function(){this.get_is_nominated(),this.get_is_max_hit()},get_is_nominated:function(){for(var t in this.nominations)if(this.nominations[t].imdbID===this.movie.imdbID)return void(this.is_nominated=!0);this.is_nominated=!1},get_is_max_hit:function(){this.button_state=this.nominations.length<5}},computed:{nominations:function(){return this.$store.state.nominations}},watch:{nominations:{handler:function(){this.update()},deep:!0}},created:function(){this.update()}},N=S,M=(n("ae12"),Object(p["a"])(N,T,C,!1,null,"5a0459c7",null)),j=M.exports,$={name:"ResultsList",components:{MovieView:j},data:function(){return{movies:[],error_text:null}},methods:{update_list:function(t){"True"===t.Response||""===this.search_text?this.movies=t.Search:this.$swal({icon:"error",title:t.Error})}},watch:{search_text:{handler:function(t){var e=this.update_list;fetch("https://omdbapi.com/?s=".concat(t,"&type=movie&apikey=5a15e8f")).then((function(t){return t.json()})).then((function(t){e(t)}))}}},computed:{search_text:function(){return this.$store.state.search_text}}},A=$,I=(n("ee2b"),Object(p["a"])(A,k,E,!1,null,"0702b147",null)),D=I.exports,P={name:"App",components:{SearchBar:v,NominationView:O,ResultsList:D}},R=P,V=(n("034f"),Object(p["a"])(R,u,l,!1,null,null,null)),W=V.exports,B=(n("4de4"),n("2f62"));i["default"].use(B["a"]);var H=new B["a"].Store({state:function(){return{search_text:null,nominations:[]}},mutations:{UPDATE_SEARCH_TEXT:function(t,e){t.search_text=e},ADD_NOMINATION:function(t,e){t.nominations.push(e)},REMOVE_NOMINATION:function(t,e){var n=t.nominations.filter((function(t){return t!==e}));t.nominations=n}}});i["default"].config.productionTip=!1,new i["default"]({store:H,render:function(t){return t(W)}}).$mount("#app")},"677a":function(t,e,n){},"85ec":function(t,e,n){},ae12:function(t,e,n){"use strict";var i=n("bee8"),o=n.n(i);o.a},bbbb:function(t,e,n){"use strict";var i=n("677a"),o=n.n(i);o.a},bee8:function(t,e,n){},d754:function(t,e,n){},ee2b:function(t,e,n){"use strict";var i=n("faff"),o=n.n(i);o.a},ef89:function(t,e,n){"use strict";var i=n("d754"),o=n.n(i);o.a},faff:function(t,e,n){}});
//# sourceMappingURL=app.1d4e0597.js.map
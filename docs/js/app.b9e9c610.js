(function(t){function e(e){for(var a,c,r=e[0],o=e[1],l=e[2],d=0,v=[];d<r.length;d++)c=r[d],s[c]&&v.push(s[c][0]),s[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},s={app:0},n=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bored-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"194e":function(t,e,i){},"1bd4":function(t,e,i){},"54b8":function(t,e,i){"use strict";var a=i("1bd4"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("14c6"),i("08c1"),i("4842"),i("d9fc"),i("50c4");var a=i("2b0e"),s=i("a65d"),n=i.n(s),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("app-header"),i("div",{staticClass:"container",attrs:{id:"app"}},[i("transition",{attrs:{mode:"out-in",name:"slide-up"}},[i("router-view")],1)],1),i("app-loader")],1)},r=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("\n          Me is so bored!\n        ")]),i("h2",{staticClass:"subtitle"},[t._v("Give me something... :/")])])])]),i("br")])}],u={name:"AppHeader"},d=u,v=i("2877"),p=Object(v["a"])(d,o,l,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"custom-loader"},[i("p",[i("i",{staticClass:"fa fa-spinner fa-spin"}),i("br"),i("span",[t._v("Loading, please wait...")])])])])],1)},h=[],b=i("cebc"),y=i("2f62"),_={name:"AppLoader",computed:Object(b["a"])({},Object(y["c"])(["isLoading"]))},g=_,C=(i("dd3b"),Object(v["a"])(g,m,h,!1,null,"60439560",null)),w=C.exports,A={components:{AppHeader:f,AppLoader:w}},O=A,j=Object(v["a"])(O,c,r,!1,null,null,null),x=j.exports,k=(i("bc44"),i("faaa"),i("b383"),i("bc3a")),$=i.n(k),E={baseURL:Object({NODE_ENV:"production",BASE_URL:"/bored-app/"}).baseURL||Object({NODE_ENV:"production",BASE_URL:"/bored-app/"}).apiUrl||"https://www.boredapi.com/api/"},L=$.a.create(E);L.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),L.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=L,window.axios=L,Object.defineProperties(t.prototype,{axios:{get:function(){return L}},$axios:{get:function(){return L}}})},a["a"].use(Plugin);Plugin;var P=i("9483");Object(P["a"])("".concat("/bored-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var N=i("8c4f"),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-offset-2 is-8"},[i("div",{staticClass:"tabs is-large"},[i("ul",[i("li",{class:{"is-active":!1===t.listViewActive},on:{click:function(e){t.listViewActive=!1}}},[t._m(0)]),i("li",{class:{"is-active":!0===t.listViewActive},on:{click:function(e){t.listViewActive=!0}}},[t._m(1)])])]),i("Transition",{attrs:{mode:"out-in",name:"slide-down"}},[i("keep-alive",[t.listViewActive?i("activity-list"):i("new-activity")],1)],1)],1)])},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}})]),i("span",[t._v("Activities")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}})]),i("span",[t._v("List")])])}],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab-content"},[i("transition",{attrs:{mode:"out-in",name:"slide-up"}},[0===t.list.length?i("div",{staticClass:"notification is-dark"},[i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fa fa-info-circle"})]),i("span",[t._v("\n        No Saved Activities!\n      ")])]):i("div",[i("table",{staticClass:"table is-hoverable is-fullwidth"},[i("thead",[i("th",[t._v("#")]),i("th",[t._v("Activity")]),i("th",[t._v("Participants")]),i("th",[t._v("Budget")]),i("th")]),i("transition-group",{attrs:{name:"list-out",tag:"tbody"}},t._l(t.list,function(e,a){return i("tr",{key:e.key},[i("td",[t._v(t._s(a+1))]),i("td",[t._v(t._s(e.activity))]),i("td",[t._v(t._s(e.participants))]),i("td",[t._v(t._s(e.price))]),i("td",[i("a",{staticClass:"button is-square",on:{click:function(i){return t.remove(e.key)}}},[i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fa fa-check-circle"})])])])])}),0)],1),i("br"),i("div",{staticClass:"field"},[i("p",{staticClass:"control"},[i("button",{staticClass:"button is-fullwidth is-danger",on:{click:t.clear}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-ban"})]),i("span",[t._v("\n              Clear All\n            ")])])])])])])],1)},q=[],B={name:"ActivityList",data:function(){return{}},computed:Object(b["a"])({},Object(y["c"])(["list"])),watch:{},created:function(){},methods:Object(b["a"])({},Object(y["b"])(["clearActivities","removeActivity"]),{clear:function(){this.clearActivities(),this.$toasted.show("Cleared activity list!")},remove:function(t){this.removeActivity(t),this.$toasted.show("Removed activity!")}})},M=B,R=Object(v["a"])(M,T,q,!1,null,null,null),U=R.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab-content"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-6"},[i("h2",{staticClass:"title is-4"},[t._v("You should:")]),i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activity.activity,expression:"activity.activity"}],staticClass:"textarea activity-textarea",attrs:{placeholder:"Activity Details"},domProps:{value:t.activity.activity},on:{input:function(e){e.target.composing||t.$set(t.activity,"activity",e.target.value)}}})])]),i("br"),i("div",{staticClass:"field"},[i("p",{staticClass:"control"},[i("button",{staticClass:"button is-fullwidth is-danger",attrs:{disabled:!t.activity},on:{click:t.save}},[t._m(0),i("span",[t._v("\n              Save for Later\n            ")])])])])]),i("div",{staticClass:"column is-6"},[i("h2",{staticClass:"title is-4"},[t._v("Activity details:")]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Type")]),i("div",{staticClass:"control"},[i("div",{staticClass:"select is-fullwidth"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.details.type,expression:"details.type"}],attrs:{required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.details,"type",e.target.multiple?i:i[0])}}},t._l(t.types,function(e){return i("option",{key:e},[t._v(t._s(e))])}),0)])])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Participants")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.details.participants,expression:"details.participants"}],staticClass:"input",attrs:{type:"number",value:"1",required:""},domProps:{value:t.details.participants},on:{input:function(e){e.target.composing||t.$set(t.details,"participants",e.target.value)}}})])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Budget")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.details.price,expression:"details.price"}],staticClass:"slider is-fullwidth is-circle",attrs:{step:"0.05",min:"0",max:"1",value:"0",type:"range",required:""},domProps:{value:t.details.price},on:{__r:function(e){return t.$set(t.details,"price",e.target.value)}}}),t._m(1)])]),i("br"),i("div",{staticClass:"field"},[i("p",{staticClass:"control"},[i("button",{staticClass:"button is-fullwidth is-info",on:{click:t.load}},[t._m(2),i("span",[t._v("\n              Hit me with a new One!\n            ")])])])])])])])},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-save"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"help-text"},[i("span",[t._v("cheap")]),i("span",{staticClass:"is-pulled-right"},[t._v("expensive")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-magic"})])}],F={name:"NewActivity",data:function(){return{activity:{},details:{}}},computed:Object(b["a"])({},Object(y["c"])(["types"])),created:function(){var t=this;this.load().then(function(){t.details=t.activity})},methods:Object(b["a"])({},Object(y["b"])(["saveActivity","loadActivity"]),{load:function(){var t=this;return this.loadActivity(this.details).then(function(e){var i=e.data,a=i.error;a?t.$toasted.show(a,{type:"error"}):t.activity=i})},save:function(){var t=this;this.saveActivity(this.activity).then(function(){t.$toasted.show("Activity Added",{type:"success"})}).catch(function(e){t.$toasted.show(e,{type:"error"})})}})},J=F,G=(i("54b8"),Object(v["a"])(J,D,H,!1,null,"6a5a877d",null)),Y=G.exports,z={components:{NewActivity:Y,ActivityList:U},data:function(){return{listViewActive:!1}}},I=z,K=(i("8673"),Object(v["a"])(I,S,V,!1,null,"08f9e877",null)),Q=K.exports;a["a"].use(N["a"]);var W=new N["a"]({routes:[{path:"/activities",name:"activities",component:Q},{path:"*",redirect:"/activities"}]}),X=i("0e44"),Z=a["a"].axios;a["a"].use(y["a"]);var tt=new y["a"].Store({plugins:[Object(X["a"])()],state:{isLoading:!1,list:[],types:["education","recreational","social","diy","charity","cooking","relaxation","music","busywork"]},mutations:{save:function(t,e){t.list.push(e)},remove:function(t,e){t.list=t.list.filter(function(t){return t.key!==e})},clear:function(t){t.list=[]},isLoading:function(t,e){t.isLoading=e}},actions:{saveActivity:function(t,e){return new Promise(function(i,a){var s=0!==t.state.list.filter(function(t){return t.key===e.key}).length;s?a(new Error("This activity is already saved!")):(t.commit("save",e),i())})},loadActivity:function(t,e){return t.commit("isLoading",!0),e.type||e.price||e.participants?Z.get("/activity?type=".concat(e.type,"&price=").concat(e.price,"&participants=").concat(e.participants)).then(function(e){return t.commit("isLoading",!1),e}):Z.get("/activity").then(function(e){return t.commit("isLoading",!1),e})},removeActivity:function(t,e){t.commit("remove",e)},clearActivities:function(t){t.commit("clear")}}});a["a"].use(n.a,{iconPack:"fontawesome",type:"info",duration:2e3,position:"bottom-center",icon:"info"}),a["a"].config.productionTip=!1,new a["a"]({router:W,store:tt,render:function(t){return t(x)}}).$mount("#app")},8673:function(t,e,i){"use strict";var a=i("194e"),s=i.n(a);s.a},b383:function(t,e,i){},bc44:function(t,e,i){},cd21:function(t,e,i){},dd3b:function(t,e,i){"use strict";var a=i("cd21"),s=i.n(a);s.a},faaa:function(t,e,i){}});
//# sourceMappingURL=app.b9e9c610.js.map
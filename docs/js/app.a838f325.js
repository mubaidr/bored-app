(function(t) {
  function e(e) {
    for (
      var a, c, r = e[0], o = e[1], l = e[2], v = 0, d = [];
      v < r.length;
      v++
    )
      (c = r[v]), n[c] && d.push(n[c][0]), (n[c] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    u && u(e);
    while (d.length) d.shift()();
    return s.push.apply(s, l || []), i();
  }
  function i() {
    for (var t, e = 0; e < s.length; e++) {
      for (var i = s[e], a = !0, r = 1; r < i.length; r++) {
        var o = i[r];
        0 !== n[o] && (a = !1);
      }
      a && (s.splice(e--, 1), (t = c((c.s = i[0]))));
    }
    return t;
  }
  var a = {},
    n = { app: 0 },
    s = [];
  function c(e) {
    if (a[e]) return a[e].exports;
    var i = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, c), (i.l = !0), i.exports;
  }
  (c.m = t),
    (c.c = a),
    (c.d = function(t, e, i) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (c.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function(t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (c.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          c.d(
            i,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return i;
    }),
    (c.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "/bored-app/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var l = 0; l < r.length; l++) e(r[l]);
  var u = o;
  s.push([0, "chunk-vendors"]), i();
})({
  0: function(t, e, i) {
    t.exports = i("56d7");
  },
  "56d7": function(t, e, i) {
    "use strict";
    i.r(e);
    i("14c6"), i("08c1"), i("4842"), i("d9fc"), i("50c4");
    var a = i("2b0e"),
      n = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          [
            i("app-header"),
            i(
              "div",
              { staticClass: "container", attrs: { id: "app" } },
              [
                i(
                  "Transition",
                  { attrs: { mode: "out-in", name: "slide-up" } },
                  [i("router-view")],
                  1
                )
              ],
              1
            ),
            i("app-loader")
          ],
          1
        );
      },
      s = [],
      c = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div");
      },
      r = [],
      o = { name: "AppHeader" },
      l = o,
      u = i("2877"),
      v = Object(u["a"])(l, c, r, !1, null, null, null),
      d = v.exports,
      p = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          [
            i("Transition", { attrs: { name: "fade" } }, [
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.isLoading,
                      expression: "isLoading"
                    }
                  ],
                  staticClass: "custom-loader"
                },
                [
                  i("p", [
                    i("i", { staticClass: "fa fa-spinner fa-spin" }),
                    i("br"),
                    i("span", [t._v("Loading, please wait...")])
                  ])
                ]
              )
            ])
          ],
          1
        );
      },
      f = [],
      m = i("cebc"),
      b = i("2f62"),
      y = {
        name: "AppLoader",
        computed: Object(m["a"])({}, Object(b["c"])(["isLoading"]))
      },
      h = y,
      _ = (i("dd3b"), Object(u["a"])(h, p, f, !1, null, "60439560", null)),
      g = _.exports,
      C = { components: { AppHeader: d, AppLoader: g } },
      w = C,
      O = Object(u["a"])(w, n, s, !1, null, null, null),
      j = O.exports,
      A = (i("bc44"), i("faaa"), i("b383"), i("bc3a")),
      x = i.n(A),
      k = {
        baseURL:
          Object({ NODE_ENV: "production", BASE_URL: "/bored-app/" }).baseURL ||
          Object({ NODE_ENV: "production", BASE_URL: "/bored-app/" }).apiUrl ||
          "http://www.boredapi.com/api/"
      },
      E = x.a.create(k);
    E.interceptors.request.use(
      function(t) {
        return t;
      },
      function(t) {
        return Promise.reject(t);
      }
    ),
      E.interceptors.response.use(
        function(t) {
          return t;
        },
        function(t) {
          return Promise.reject(t);
        }
      ),
      (Plugin.install = function(t, e) {
        (t.axios = E),
          (window.axios = E),
          Object.defineProperties(t.prototype, {
            axios: {
              get: function() {
                return E;
              }
            },
            $axios: {
              get: function() {
                return E;
              }
            }
          });
      }),
      a["a"].use(Plugin);
    Plugin;
    var L = i("9483");
    Object(L["a"])("".concat("/bored-app/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(t) {
        console.error("Error during service worker registration:", t);
      }
    });
    var P = i("8c4f"),
      $ = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", { staticClass: "columns" }, [
          i(
            "div",
            { staticClass: "column is-offset-2 is-8" },
            [i("new-activity"), i("activity-list")],
            1
          )
        ]);
      },
      N = [],
      S = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "tab-content" },
          [
            void 0,
            i(
              "table",
              { staticClass: "table is-hoverable is-fullwidth" },
              [
                t._m(0),
                i(
                  "transition-group",
                  { attrs: { name: "list-out", tag: "tbody" } },
                  t._l(t.list, function(e, a) {
                    return i("tr", { key: e.key }, [
                      i("td", [t._v(t._s(a + 1))]),
                      i("td", [t._v(t._s(e.activity))]),
                      i("td", [t._v(t._s(e.participants))]),
                      i("td", [t._v(t._s(e.price))]),
                      i("td", [
                        i(
                          "a",
                          {
                            staticClass: "button is-square",
                            on: {
                              click: function(i) {
                                return t.remove(e.key);
                              }
                            }
                          },
                          [
                            i("span", { staticClass: "icon is-medium" }, [
                              i("i", { staticClass: "fa fa-check-circle" })
                            ])
                          ]
                        )
                      ])
                    ]);
                  }),
                  0
                )
              ],
              1
            ),
            i("br"),
            t._m(1)
          ],
          2
        );
      },
      T = [
        function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("thead", [
            i("th", [t._v("#")]),
            i("th", [t._v("Activity")]),
            i("th", [t._v("Participants")]),
            i("th", [t._v("Budget")]),
            i("th")
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "field" }, [
            i("p", { staticClass: "control" }, [
              i("button", { staticClass: "button is-fullwidth is-danger" }, [
                i("span", { staticClass: "icon" }, [
                  i("i", { staticClass: "fa fa-ban" })
                ]),
                i("span", [t._v("\n          Clear All\n        ")])
              ])
            ])
          ]);
        }
      ],
      B = {
        name: "ActivityList",
        data: function() {
          return {};
        },
        computed: Object(m["a"])({}, Object(b["c"])(["list"])),
        watch: {},
        created: function() {},
        methods: Object(m["a"])(
          {},
          Object(b["b"])(["clearActivities", "removeActivity"]),
          {
            clear: function() {
              this.clearActivities();
            },
            remove: function(t) {
              this.removeActivity(t);
            }
          }
        )
      },
      U = B,
      M = Object(u["a"])(U, S, T, !1, null, null, null),
      R = M.exports,
      q = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", { staticClass: "tab-content" }, [
          i("div", { staticClass: "columns" }, [
            i("div", { staticClass: "column is-6" }, [
              i("h2", { staticClass: "title is-4" }, [t._v("You should:")]),
              i("div", { staticClass: "field" }, [
                i("div", { staticClass: "control" }, [
                  i("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.activity.activity,
                        expression: "activity.activity"
                      }
                    ],
                    staticClass: "textarea activity-textarea",
                    attrs: { placeholder: "Activity Details" },
                    domProps: { value: t.activity.activity },
                    on: {
                      input: function(e) {
                        e.target.composing ||
                          t.$set(t.activity, "activity", e.target.value);
                      }
                    }
                  })
                ])
              ]),
              i("br"),
              i("div", { staticClass: "field" }, [
                i("p", { staticClass: "control" }, [
                  i(
                    "button",
                    {
                      staticClass: "button is-fullwidth is-danger",
                      on: { click: t.save }
                    },
                    [
                      t._m(0),
                      i("span", [
                        t._v("\n              Save for Later\n            ")
                      ])
                    ]
                  )
                ])
              ])
            ]),
            i("div", { staticClass: "column is-6" }, [
              i("h2", { staticClass: "title is-4" }, [
                t._v("Activity details:")
              ]),
              i("div", { staticClass: "field" }, [
                i("label", { staticClass: "label" }, [t._v("Type")]),
                i("div", { staticClass: "control" }, [
                  i("div", { staticClass: "select is-fullwidth" }, [
                    i(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.activity.type,
                            expression: "activity.type"
                          }
                        ],
                        on: {
                          change: function(e) {
                            var i = Array.prototype.filter
                              .call(e.target.options, function(t) {
                                return t.selected;
                              })
                              .map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e;
                              });
                            t.$set(
                              t.activity,
                              "type",
                              e.target.multiple ? i : i[0]
                            );
                          }
                        }
                      },
                      t._l(t.types, function(e) {
                        return i("option", { key: e }, [t._v(t._s(e))]);
                      }),
                      0
                    )
                  ])
                ])
              ]),
              i("div", { staticClass: "field" }, [
                i("label", { staticClass: "label" }, [t._v("Participants")]),
                i("div", { staticClass: "control" }, [
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.activity.participants,
                        expression: "activity.participants"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "number", value: "1" },
                    domProps: { value: t.activity.participants },
                    on: {
                      input: function(e) {
                        e.target.composing ||
                          t.$set(t.activity, "participants", e.target.value);
                      }
                    }
                  })
                ])
              ]),
              i("div", { staticClass: "field" }, [
                i("label", { staticClass: "label" }, [t._v("Budget")]),
                i("div", { staticClass: "control" }, [
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.activity.price,
                        expression: "activity.price"
                      }
                    ],
                    staticClass: "slider is-fullwidth is-circle",
                    attrs: {
                      step: "0.1",
                      min: "0",
                      max: "1",
                      value: "0",
                      type: "range"
                    },
                    domProps: { value: t.activity.price },
                    on: {
                      __r: function(e) {
                        return t.$set(t.activity, "price", e.target.value);
                      }
                    }
                  }),
                  t._m(1)
                ])
              ]),
              i("br"),
              i("div", { staticClass: "field" }, [
                i("p", { staticClass: "control" }, [
                  i(
                    "button",
                    {
                      staticClass: "button is-fullwidth is-info",
                      on: { click: t.load }
                    },
                    [
                      t._m(2),
                      i("span", [
                        t._v(
                          "\n              Hit me with a new One!\n            "
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ]);
      },
      D = [
        function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("span", { staticClass: "icon" }, [
            i("i", { staticClass: "fa fa-save" })
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "help-text" }, [
            i("span", [t._v("cheap")]),
            i("span", { staticClass: "is-pulled-right" }, [t._v("expensive")])
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("span", { staticClass: "icon" }, [
            i("i", { staticClass: "fa fa-magic" })
          ]);
        }
      ],
      H = {
        name: "NewActivity",
        data: function() {
          return { activity: {} };
        },
        computed: Object(m["a"])({}, Object(b["c"])(["types"])),
        created: function() {
          this.load();
        },
        methods: Object(m["a"])(
          {},
          Object(b["b"])(["saveActivity", "loadActivity"]),
          {
            load: function() {
              var t = this;
              this.loadActivity().then(function(e) {
                t.activity = e.data;
              });
            },
            save: function() {
              this.saveActivity(this.activity);
            }
          }
        )
      },
      F = H,
      J = (i("6b6c"), Object(u["a"])(F, q, D, !1, null, "29edfe62", null)),
      V = J.exports,
      Y = {
        components: { NewActivity: V, ActivityList: R },
        data: function() {
          return {};
        }
      },
      z = Y,
      G = Object(u["a"])(z, $, N, !1, null, null, null),
      I = G.exports;
    a["a"].use(P["a"]);
    var K = new P["a"]({
        routes: [
          { path: "/activities", name: "activities", component: I },
          { path: "*", redirect: "/activities" }
        ]
      }),
      Q = i("0e44"),
      W = a["a"].axios;
    a["a"].use(b["a"]);
    var X = new b["a"].Store({
      plugins: [Object(Q["a"])()],
      state: {
        isLoading: !1,
        list: [],
        types: [
          "education",
          "recreational",
          "social",
          "diy",
          "charity",
          "cooking",
          "relaxation",
          "music",
          "busywork"
        ]
      },
      mutations: {
        save: function(t, e) {
          var i =
            0 !==
            t.list.filter(function(t) {
              return t.key === e.key;
            }).length;
          i ? alert("This activity is already saved!") : t.list.push(e);
        },
        remove: function(t, e) {
          t.list = t.list.filter(function(t) {
            return t.key !== e;
          });
        },
        clear: function(t) {
          t.list = [];
        },
        isLoading: function(t, e) {
          t.isLoading = e;
        }
      },
      actions: {
        saveActivity: function(t, e) {
          t.commit("save", e);
        },
        loadActivity: function(t) {
          return (
            t.commit("isLoading", !0),
            W.get("/activity").then(function(e) {
              return t.commit("isLoading", !1), e;
            })
          );
        },
        removeActivity: function(t, e) {
          t.commit("remove", e);
        },
        clearAllActivities: function(t) {
          t.commit("clear");
        }
      }
    });
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: K,
        store: X,
        render: function(t) {
          return t(j);
        }
      }).$mount("#app");
  },
  "6b6c": function(t, e, i) {
    "use strict";
    var a = i("a63e"),
      n = i.n(a);
    n.a;
  },
  a63e: function(t, e, i) {},
  b383: function(t, e, i) {},
  bc44: function(t, e, i) {},
  cd21: function(t, e, i) {},
  dd3b: function(t, e, i) {
    "use strict";
    var a = i("cd21"),
      n = i.n(a);
    n.a;
  },
  faaa: function(t, e, i) {}
});
//# sourceMappingURL=app.a838f325.js.map

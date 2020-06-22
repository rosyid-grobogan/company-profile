(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        id: '',
        name: '',
        email: '',
        password: '',
        type: '',
        bio: '',
        photo: ''
      })
    };
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  methods: {
    updateProfile: function updateProfile(e) {
      var _this = this;

      //console.log('uploading')
      var file = e.target.files[0];
      console.log(file['size']); // File { name: "man-muslim.svg", lastModified: 1591362486000, webkitRelativePath: "", size: 4394, type: "image/svg+xml" }2111775

      var reader = new FileReader();

      if (file['size'] < 2111775) {
        reader.onloadend = function (file) {
          // output base64
          //console.log('RESULT', reader.result)
          _this.form.photo = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You are uploading a large file!',
          footer: '<a href>Why do I have this issue?</a>'
        });
      }
    },
    updateInfo: function updateInfo() {
      var _this2 = this;

      this.$Progress.start();
      this.form.put('api/profile/').then(function () {
        _this2.$Progress.finish();
      })["catch"](function () {
        _this2.$Progress.fail();
      });
    }
  },
  created: function created() {
    var _this3 = this;

    axios.get('api/profile').then(function (_ref) {
      var data = _ref.data;
      return _this3.form.fill(data);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.widget-user-header[data-v-3bd692e4] {\n    background-position: center center;\n    background-size: cover;\n    height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-10" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "tab-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tab-pane", attrs: { id: "settings" } },
                [
                  _c("form", { staticClass: "form-horizontal" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-12 col-form-label",
                          attrs: { for: "inputName" }
                        },
                        [_vm._v("Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "inputName",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-12 col-form-label",
                          attrs: { for: "email" }
                        },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "email",
                            placeholder: "Email"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-12 col-form-label",
                          attrs: { for: "bio" }
                        },
                        [_vm._v("Experience")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.bio,
                              expression: "form.bio"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "bio", placeholder: "Experience" },
                          domProps: { value: _vm.form.bio },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "bio", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-12 col-form-label",
                          attrs: { for: "photo" }
                        },
                        [_vm._v("Profile Photo")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12 custom-file" }, [
                        _c("input", {
                          staticClass: "form-control custom-file-input",
                          attrs: { type: "file", id: "photo" },
                          on: { change: _vm.updateProfile }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-file-label",
                            attrs: { for: "photo" }
                          },
                          [_vm._v("Choose file")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-12 col-form-label",
                          attrs: { for: "password" }
                        },
                        [_vm._v("Password (leave empty if not changing)")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "password",
                            placeholder: "Password"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "submit" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.updateInfo($event)
                              }
                            }
                          },
                          [_vm._v("Update")]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-10 mt-3" }, [
        _c("div", { staticClass: "card card-widget widget-user" }, [
          _c(
            "div",
            {
              staticClass: "widget-user-header text-white",
              staticStyle: {
                background: "url('./img/photo1.png') center center"
              }
            },
            [
              _c("h3", { staticClass: "widget-user-username text-right" }, [
                _vm._v("Elizabeth Pierce")
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "widget-user-desc text-right" }, [
                _vm._v("Web Designer")
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "widget-user-image" }, [
            _c("img", {
              staticClass: "img-circle",
              attrs: { src: "/img/man.svg", alt: "User Avatar" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4 border-right" }, [
                _c("div", { staticClass: "description-block" }, [
                  _c("h5", { staticClass: "description-header" }, [
                    _vm._v("3,200")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "description-text" }, [
                    _vm._v("SALES")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 border-right" }, [
                _c("div", { staticClass: "description-block" }, [
                  _c("h5", { staticClass: "description-header" }, [
                    _vm._v("13,000")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "description-text" }, [
                    _vm._v("FOLLOWERS")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "description-block" }, [
                  _c("h5", { staticClass: "description-header" }, [
                    _vm._v("35")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "description-text" }, [
                    _vm._v("PRODUCTS")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#activity", "data-toggle": "tab" }
            },
            [_vm._v("Activity")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#timeline", "data-toggle": "tab" }
            },
            [_vm._v("Timeline")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link ",
              attrs: { href: "#settings", "data-toggle": "tab" }
            },
            [_vm._v("Settings")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tab-pane active", attrs: { id: "activity" } },
      [
        _c("div", { staticClass: "post" }, [
          _c("div", { staticClass: "user-block" }, [
            _c("img", {
              staticClass: "img-circle img-bordered-sm",
              attrs: { src: "/img/man.svg", alt: "user image" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "username" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Jonathan Burke Jr.")]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "float-right btn-tool", attrs: { href: "#" } },
                [_c("i", { staticClass: "fas fa-times" })]
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "description" }, [
              _vm._v("Shared publicly - 7:30 PM today")
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                        Lorem ipsum represents a long-held tradition for designers,\n                        typographers and the like. Some people hate it and argue for\n                        its demise, but others ignore the hate as they create awesome\n                        tools to help create filler text for everyone from bacon lovers\n                        to Charlie Sheen fans.\n                      "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c(
              "a",
              { staticClass: "link-black text-sm mr-2", attrs: { href: "#" } },
              [_c("i", { staticClass: "fas fa-share mr-1" }), _vm._v(" Share")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "link-black text-sm", attrs: { href: "#" } },
              [
                _c("i", { staticClass: "far fa-thumbs-up mr-1" }),
                _vm._v(" Like")
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "float-right" }, [
              _c(
                "a",
                { staticClass: "link-black text-sm", attrs: { href: "#" } },
                [
                  _c("i", { staticClass: "far fa-comments mr-1" }),
                  _vm._v(" Comments (5)\n                          ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control form-control-sm",
            attrs: { type: "text", placeholder: "Type a comment" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "post clearfix" }, [
          _c("div", { staticClass: "user-block" }, [
            _c("img", {
              staticClass: "img-circle img-bordered-sm",
              attrs: { src: "/img/man.svg", alt: "User Image" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "username" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Sarah Ross")]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "float-right btn-tool", attrs: { href: "#" } },
                [_c("i", { staticClass: "fas fa-times" })]
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "description" }, [
              _vm._v("Sent you a message - 3 days ago")
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                        Lorem ipsum represents a long-held tradition for designers,\n                        typographers and the like. Some people hate it and argue for\n                        its demise, but others ignore the hate as they create awesome\n                        tools to help create filler text for everyone from bacon lovers\n                        to Charlie Sheen fans.\n                      "
            )
          ]),
          _vm._v(" "),
          _c("form", { staticClass: "form-horizontal" }, [
            _c("div", { staticClass: "input-group input-group-sm mb-0" }, [
              _c("input", {
                staticClass: "form-control form-control-sm",
                attrs: { placeholder: "Response" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-danger", attrs: { type: "submit" } },
                  [_vm._v("Send")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "post" }, [
          _c("div", { staticClass: "user-block" }, [
            _c("img", {
              staticClass: "img-circle img-bordered-sm",
              attrs: { src: "/img/man.svg", alt: "User Image" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "username" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Adam Jones")]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "float-right btn-tool", attrs: { href: "#" } },
                [_c("i", { staticClass: "fas fa-times" })]
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "description" }, [
              _vm._v("Posted 5 photos - 5 days ago")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: "/img/photo1.png", alt: "Photo" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("img", {
                    staticClass: "img-fluid mb-3",
                    attrs: { src: "/img/photo1.png", alt: "Photo" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/img/photo1.png", alt: "Photo" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("img", {
                    staticClass: "img-fluid mb-3",
                    attrs: { src: "/img/photo1.png", alt: "Photo" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/img/photo1.png", alt: "Photo" }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _c(
              "a",
              { staticClass: "link-black text-sm mr-2", attrs: { href: "#" } },
              [_c("i", { staticClass: "fas fa-share mr-1" }), _vm._v(" Share")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "link-black text-sm", attrs: { href: "#" } },
              [
                _c("i", { staticClass: "far fa-thumbs-up mr-1" }),
                _vm._v(" Like")
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "float-right" }, [
              _c(
                "a",
                { staticClass: "link-black text-sm", attrs: { href: "#" } },
                [
                  _c("i", { staticClass: "far fa-comments mr-1" }),
                  _vm._v(" Comments (5)\n                          ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control form-control-sm",
            attrs: { type: "text", placeholder: "Type a comment" }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "timeline" } }, [
      _c("div", { staticClass: "timeline timeline-inverse" }, [
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-danger" }, [
            _vm._v(
              "\n                          10 Feb. 2014\n                        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-envelope bg-primary" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 12:05")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Support Team")]),
              _vm._v(" sent you an email")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _vm._v(
                "\n                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,\n                            weebly ning heekya handango imeem plugg dopplr jibjab, movity\n                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle\n                            quora plaxo ideeli hulu weebly balihoo...\n                          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-footer" }, [
              _c(
                "a",
                { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
                [_vm._v("Read more")]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-danger btn-sm", attrs: { href: "#" } },
                [_vm._v("Delete")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-user bg-info" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 5 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header border-0" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Sarah Young")]),
              _vm._v(
                " accepted your friend request\n                          "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-comments bg-warning" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 27 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Jay White")]),
              _vm._v(" commented on your post")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _vm._v(
                "\n                            Take me to your leader!\n                            Switzerland is small and neutral!\n                            We are more like Germany, ambitious and misunderstood!\n                          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-footer" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-warning btn-flat btn-sm",
                  attrs: { href: "#" }
                },
                [_vm._v("View comment")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-success" }, [
            _vm._v(
              "\n                          3 Jan. 2014\n                        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-camera bg-purple" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 2 days ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Mina Lee")]),
              _vm._v(" uploaded new photos")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("img", {
                attrs: { src: "http://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "http://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "http://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "http://placehold.it/150x100", alt: "..." }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [_c("i", { staticClass: "far fa-clock bg-gray" })])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_3bd692e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=3bd692e4&scoped=true& */ "./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css& */ "./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_3bd692e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_3bd692e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3bd692e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&id=3bd692e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_3bd692e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=3bd692e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
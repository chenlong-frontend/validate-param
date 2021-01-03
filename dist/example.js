(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.example = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    /*!
     * Released under the ISC License.
     */

    /*! *****************************************************************************
    Copyright (C) Microsoft. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var t;
    !function (t) {
      !function (e) {
        var r = "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "object" == _typeof(this) ? this : Function("return this;")(),
            n = o(t);

        function o(t, e) {
          return function (r, n) {
            "function" != typeof t[r] && Object.defineProperty(t, r, {
              configurable: !0,
              writable: !0,
              value: n
            }), e && e(r, n);
          };
        }

        void 0 === r.Reflect ? r.Reflect = t : n = o(r.Reflect, n), function (t) {
          var e = Object.prototype.hasOwnProperty,
              r = "function" == typeof Symbol,
              n = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
              o = r && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
              i = "function" == typeof Object.create,
              u = {
            __proto__: []
          } instanceof Array,
              f = !i && !u,
              a = {
            create: i ? function () {
              return nt(Object.create(null));
            } : u ? function () {
              return nt({
                __proto__: null
              });
            } : function () {
              return nt({});
            },
            has: f ? function (t, r) {
              return e.call(t, r);
            } : function (t, e) {
              return e in t;
            },
            get: f ? function (t, r) {
              return e.call(t, r) ? t[r] : void 0;
            } : function (t, e) {
              return t[e];
            }
          },
              c = Object.getPrototypeOf(Function),
              s = "object" == (typeof process === "undefined" ? "undefined" : _typeof(process)) && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL,
              h = s || "function" != typeof Map || "function" != typeof Map.prototype.entries ? tt() : Map,
              p = s || "function" != typeof Set || "function" != typeof Set.prototype.entries ? et() : Set,
              y = new (s || "function" != typeof WeakMap ? rt() : WeakMap)();

          function l(t, e, r, n) {
            if (z(r)) {
              if (!Y(t)) throw new TypeError();
              if (!B(e)) throw new TypeError();
              return O(t, e);
            }

            if (!Y(t)) throw new TypeError();
            if (!C(e)) throw new TypeError();
            if (!C(n) && !z(n) && !L(n)) throw new TypeError();
            return L(n) && (n = void 0), T(t, e, r = D(r), n);
          }

          function v(t, e) {
            function r(r, n) {
              if (!C(r)) throw new TypeError();
              if (!z(n) && !G(n)) throw new TypeError();
              P(t, e, r, n);
            }

            return r;
          }

          function d(t, e, r, n) {
            if (!C(r)) throw new TypeError();
            return z(n) || (n = D(n)), P(t, e, r, n);
          }

          function _(t, e, r) {
            if (!C(e)) throw new TypeError();
            return z(r) || (r = D(r)), M(t, e, r);
          }

          function w(t, e, r) {
            if (!C(e)) throw new TypeError();
            return z(r) || (r = D(r)), x(t, e, r);
          }

          function g(t, e, r) {
            if (!C(e)) throw new TypeError();
            return z(r) || (r = D(r)), A(t, e, r);
          }

          function b(t, e, r) {
            if (!C(e)) throw new TypeError();
            return z(r) || (r = D(r)), S(t, e, r);
          }

          function k(t, e) {
            if (!C(t)) throw new TypeError();
            return z(e) || (e = D(e)), I(t, e);
          }

          function m(t, e) {
            if (!C(t)) throw new TypeError();
            return z(e) || (e = D(e)), R(t, e);
          }

          function E(t, e, r) {
            if (!C(e)) throw new TypeError();
            z(r) || (r = D(r));
            var n = j(e, r, !1);
            if (z(n)) return !1;
            if (!n["delete"](t)) return !1;
            if (n.size > 0) return !0;
            var o = y.get(e);
            return o["delete"](r), o.size > 0 || y["delete"](e), !0;
          }

          function O(t, e) {
            for (var r = t.length - 1; r >= 0; --r) {
              var n = (0, t[r])(e);

              if (!z(n) && !L(n)) {
                if (!B(n)) throw new TypeError();
                e = n;
              }
            }

            return e;
          }

          function T(t, e, r, n) {
            for (var o = t.length - 1; o >= 0; --o) {
              var i = (0, t[o])(e, r, n);

              if (!z(i) && !L(i)) {
                if (!C(i)) throw new TypeError();
                n = i;
              }
            }

            return n;
          }

          function j(t, e, r) {
            var n = y.get(t);

            if (z(n)) {
              if (!r) return;
              n = new h(), y.set(t, n);
            }

            var o = n.get(e);

            if (z(o)) {
              if (!r) return;
              o = new h(), n.set(e, o);
            }

            return o;
          }

          function M(t, e, r) {
            if (x(t, e, r)) return !0;
            var n = $(e);
            return !L(n) && M(t, n, r);
          }

          function x(t, e, r) {
            var n = j(e, r, !1);
            return !z(n) && N(n.has(t));
          }

          function A(t, e, r) {
            if (x(t, e, r)) return S(t, e, r);
            var n = $(e);
            return L(n) ? void 0 : A(t, n, r);
          }

          function S(t, e, r) {
            var n = j(e, r, !1);
            if (!z(n)) return n.get(t);
          }

          function P(t, e, r, n) {
            j(r, n, !0).set(t, e);
          }

          function I(t, e) {
            var r = R(t, e),
                n = $(t);
            if (null === n) return r;
            var o = I(n, e);
            if (o.length <= 0) return r;
            if (r.length <= 0) return o;

            for (var i = new p(), u = [], f = 0, a = r; f < a.length; f++) {
              var c = a[f];
              i.has(c) || (i.add(c), u.push(c));
            }

            for (var s = 0, h = o; s < h.length; s++) {
              c = h[s];
              i.has(c) || (i.add(c), u.push(c));
            }

            return u;
          }

          function R(t, e) {
            var r = [],
                n = j(t, e, !1);
            if (z(n)) return r;

            for (var o = J(n.keys()), i = 0;;) {
              var u = X(o);
              if (!u) return r.length = i, r;
              var f = Q(u);

              try {
                r[i] = f;
              } catch (t) {
                try {
                  Z(o);
                } finally {
                  throw t;
                }
              }

              i++;
            }
          }

          function K(t) {
            if (null === t) return 1;

            switch (_typeof(t)) {
              case "undefined":
                return 0;

              case "boolean":
                return 2;

              case "string":
                return 3;

              case "symbol":
                return 4;

              case "number":
                return 5;

              case "object":
                return null === t ? 1 : 6;

              default:
                return 6;
            }
          }

          function z(t) {
            return void 0 === t;
          }

          function L(t) {
            return null === t;
          }

          function U(t) {
            return "symbol" == _typeof(t);
          }

          function C(t) {
            return "object" == _typeof(t) ? null !== t : "function" == typeof t;
          }

          function F(t, e) {
            switch (K(t)) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return t;
            }

            var r = 3 === e ? "string" : 5 === e ? "number" : "default",
                o = H(t, n);

            if (void 0 !== o) {
              var i = o.call(t, r);
              if (C(i)) throw new TypeError();
              return i;
            }

            return W(t, "default" === r ? "number" : r);
          }

          function W(t, e) {
            if ("string" === e) {
              var r = t.toString;
              if (q(r)) if (!C(o = r.call(t))) return o;
              if (q(n = t.valueOf)) if (!C(o = n.call(t))) return o;
            } else {
              var n;
              if (q(n = t.valueOf)) if (!C(o = n.call(t))) return o;
              var o,
                  i = t.toString;
              if (q(i)) if (!C(o = i.call(t))) return o;
            }

            throw new TypeError();
          }

          function N(t) {
            return !!t;
          }

          function V(t) {
            return "" + t;
          }

          function D(t) {
            var e = F(t, 3);
            return U(e) ? e : V(e);
          }

          function Y(t) {
            return Array.isArray ? Array.isArray(t) : t instanceof Object ? t instanceof Array : "[object Array]" === Object.prototype.toString.call(t);
          }

          function q(t) {
            return "function" == typeof t;
          }

          function B(t) {
            return "function" == typeof t;
          }

          function G(t) {
            switch (K(t)) {
              case 3:
              case 4:
                return !0;

              default:
                return !1;
            }
          }

          function H(t, e) {
            var r = t[e];

            if (null != r) {
              if (!q(r)) throw new TypeError();
              return r;
            }
          }

          function J(t) {
            var e = H(t, o);
            if (!q(e)) throw new TypeError();
            var r = e.call(t);
            if (!C(r)) throw new TypeError();
            return r;
          }

          function Q(t) {
            return t.value;
          }

          function X(t) {
            var e = t.next();
            return !e.done && e;
          }

          function Z(t) {
            var e = t["return"];
            e && e.call(t);
          }

          function $(t) {
            var e = Object.getPrototypeOf(t);
            if ("function" != typeof t || t === c) return e;
            if (e !== c) return e;
            var r = t.prototype,
                n = r && Object.getPrototypeOf(r);
            if (null == n || n === Object.prototype) return e;
            var o = n.constructor;
            return "function" != typeof o || o === t ? e : o;
          }

          function tt() {
            var t = {},
                e = [],
                r = function () {
              function t(t, e, r) {
                this._index = 0, this._keys = t, this._values = e, this._selector = r;
              }

              return t.prototype["@@iterator"] = function () {
                return this;
              }, t.prototype[o] = function () {
                return this;
              }, t.prototype.next = function () {
                var t = this._index;

                if (t >= 0 && t < this._keys.length) {
                  var r = this._selector(this._keys[t], this._values[t]);

                  return t + 1 >= this._keys.length ? (this._index = -1, this._keys = e, this._values = e) : this._index++, {
                    value: r,
                    done: !1
                  };
                }

                return {
                  value: void 0,
                  done: !0
                };
              }, t.prototype["throw"] = function (t) {
                throw this._index >= 0 && (this._index = -1, this._keys = e, this._values = e), t;
              }, t.prototype["return"] = function (t) {
                return this._index >= 0 && (this._index = -1, this._keys = e, this._values = e), {
                  value: t,
                  done: !0
                };
              }, t;
            }();

            return function () {
              function e() {
                this._keys = [], this._values = [], this._cacheKey = t, this._cacheIndex = -2;
              }

              return Object.defineProperty(e.prototype, "size", {
                get: function get() {
                  return this._keys.length;
                },
                enumerable: !0,
                configurable: !0
              }), e.prototype.has = function (t) {
                return this._find(t, !1) >= 0;
              }, e.prototype.get = function (t) {
                var e = this._find(t, !1);

                return e >= 0 ? this._values[e] : void 0;
              }, e.prototype.set = function (t, e) {
                var r = this._find(t, !0);

                return this._values[r] = e, this;
              }, e.prototype["delete"] = function (e) {
                var r = this._find(e, !1);

                if (r >= 0) {
                  for (var n = this._keys.length, o = r + 1; o < n; o++) {
                    this._keys[o - 1] = this._keys[o], this._values[o - 1] = this._values[o];
                  }

                  return this._keys.length--, this._values.length--, e === this._cacheKey && (this._cacheKey = t, this._cacheIndex = -2), !0;
                }

                return !1;
              }, e.prototype.clear = function () {
                this._keys.length = 0, this._values.length = 0, this._cacheKey = t, this._cacheIndex = -2;
              }, e.prototype.keys = function () {
                return new r(this._keys, this._values, n);
              }, e.prototype.values = function () {
                return new r(this._keys, this._values, i);
              }, e.prototype.entries = function () {
                return new r(this._keys, this._values, u);
              }, e.prototype["@@iterator"] = function () {
                return this.entries();
              }, e.prototype[o] = function () {
                return this.entries();
              }, e.prototype._find = function (t, e) {
                return this._cacheKey !== t && (this._cacheIndex = this._keys.indexOf(this._cacheKey = t)), this._cacheIndex < 0 && e && (this._cacheIndex = this._keys.length, this._keys.push(t), this._values.push(void 0)), this._cacheIndex;
              }, e;
            }();

            function n(t, e) {
              return t;
            }

            function i(t, e) {
              return e;
            }

            function u(t, e) {
              return [t, e];
            }
          }

          function et() {
            return function () {
              function t() {
                this._map = new h();
              }

              return Object.defineProperty(t.prototype, "size", {
                get: function get() {
                  return this._map.size;
                },
                enumerable: !0,
                configurable: !0
              }), t.prototype.has = function (t) {
                return this._map.has(t);
              }, t.prototype.add = function (t) {
                return this._map.set(t, t), this;
              }, t.prototype["delete"] = function (t) {
                return this._map["delete"](t);
              }, t.prototype.clear = function () {
                this._map.clear();
              }, t.prototype.keys = function () {
                return this._map.keys();
              }, t.prototype.values = function () {
                return this._map.values();
              }, t.prototype.entries = function () {
                return this._map.entries();
              }, t.prototype["@@iterator"] = function () {
                return this.keys();
              }, t.prototype[o] = function () {
                return this.keys();
              }, t;
            }();
          }

          function rt() {
            var t = 16,
                r = a.create(),
                n = o();
            return function () {
              function t() {
                this._key = o();
              }

              return t.prototype.has = function (t) {
                var e = i(t, !1);
                return void 0 !== e && a.has(e, this._key);
              }, t.prototype.get = function (t) {
                var e = i(t, !1);
                return void 0 !== e ? a.get(e, this._key) : void 0;
              }, t.prototype.set = function (t, e) {
                return i(t, !0)[this._key] = e, this;
              }, t.prototype["delete"] = function (t) {
                var e = i(t, !1);
                return void 0 !== e && delete e[this._key];
              }, t.prototype.clear = function () {
                this._key = o();
              }, t;
            }();

            function o() {
              var t;

              do {
                t = "@@WeakMap@@" + c();
              } while (a.has(r, t));

              return r[t] = !0, t;
            }

            function i(t, r) {
              if (!e.call(t, n)) {
                if (!r) return;
                Object.defineProperty(t, n, {
                  value: a.create()
                });
              }

              return t[n];
            }

            function u(t, e) {
              for (var r = 0; r < e; ++r) {
                t[r] = 255 * Math.random() | 0;
              }

              return t;
            }

            function f(t) {
              return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(t)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(t)) : u(new Uint8Array(t), t) : u(new Array(t), t);
            }

            function c() {
              var e = f(t);
              e[6] = 79 & e[6] | 64, e[8] = 191 & e[8] | 128;

              for (var r = "", n = 0; n < t; ++n) {
                var o = e[n];
                4 !== n && 6 !== n && 8 !== n || (r += "-"), o < 16 && (r += "0"), r += o.toString(16).toLowerCase();
              }

              return r;
            }
          }

          function nt(t) {
            return t.__ = void 0, delete t.__, t;
          }

          t("decorate", l), t("metadata", v), t("defineMetadata", d), t("hasMetadata", _), t("hasOwnMetadata", w), t("getMetadata", g), t("getOwnMetadata", b), t("getMetadataKeys", k), t("getOwnMetadataKeys", m), t("deleteMetadata", E);
        }(n);
      }();
    }(t || (t = {}));
    var e = Symbol("parameterSchemaMetadataKey");

    function r(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return function (r) {
        var o = r,
            i = function i() {
          for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
            i[_key] = arguments[_key];
          }

          e && n(r, i);

          var u = _construct(o, i),
              _t$validate = t.validate(u),
              f = _t$validate.error;

          if (f instanceof Error) throw f;
          return u;
        };

        return i.prototype = o.prototype, i;
      };
    }

    function n(t, r) {
      var n = Reflect.getOwnMetadata(e, t, "constructor");

      if (n) {
        var _t = Object.keys(n);

        for (var _i = 0, _t2 = _t; _i < _t2.length; _i++) {
          var _e = _t2[_i];

          var _n$_e$validate = n[_e].validate(r[Number.parseInt(_e)]),
              _t3 = _n$_e$validate.error;

          if (_t3 instanceof Error) throw _t3;
        }
      }
    }

    function o(t) {
      return function (r, n, o) {
        n = void 0 === n ? "constructor" : n;
        var i = Reflect.getOwnMetadata(e, r, n) || [];
        i[o] = t, Reflect.defineMetadata(e, i, r, n);
      };
    }

    function i(t) {
      return function (r, n, o) {
        var i = Reflect.getOwnMetadata(e, r, n) || [];
        var u = o.value;
        return o.value = function () {
          for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          if (i) {
            var _r = Object.keys(i);

            for (var _i2 = 0, _r2 = _r; _i2 < _r2.length; _i2++) {
              var _o = _r2[_i2];

              var _i$_o$validate = i[_o].validate(e[Number.parseInt(_o)]),
                  _r3 = _i$_o$validate.error;

              if (_r3 instanceof Error) return void t.apply(this, [_r3, n]);
            }
          }

          return u.apply(this, e);
        }, o;
      };
    }

    const Joi = require('joi');
    const fn = Joi.function();
    const str = Joi.string().allow('');
    const num = Joi.number();
    const bool = Joi.boolean();
    const obj = Joi.object();
    const showLayers = Joi.object({
        privateIds: Joi.array().items(Joi.number())
    }).unknown();
    const setTollgate = Joi.array().items(Joi.object({
        channelId: Joi.string().required(),
        position: Joi.object({
            x: Joi.number().required(),
            y: Joi.number().required()
        }).unknown(),
        title: Joi.string().required()
    }).unknown());
    const openScreenTrack = Joi.object({
        mode: Joi.number().allow('TRACKCOLOR.SINGLE', 'TRACKCOLOR.MULTIPLE').only().required()
    });
    const getPresetImage = Joi.object({
        id: Joi.number().required()
    }).unknown();
    const ptzSet = Joi.object({
        lon: Joi.number().required(),
        lat: Joi.number().required(),
        alt: Joi.number().required()
    }).unknown();
    const ptzControlEnum = Joi.string().allow(...Object.entries({ PTZCONTROL: 'PTZCONTROL' }).map(v => v[1])).only();
    const ptzCtrlParam = Joi.object({
        deviceId: Joi.string().required(),
        action: ptzControlEnum.required(),
        Type: Joi.number(),
        Pan: Joi.number(),
        Tilt: Joi.number(),
        Zoom: Joi.number(),
    }).unknown();
    const ptzControl = Joi.alternatives().try(ptzCtrlParam, ptzControlEnum);
    const ptzSetStatic = getPresetImage;
    const ptzBox = Joi.object({
        mode: Joi.string().allow('PTZCONTROL.ZOOMOUT', 'PTZCONTROL.ZOOMIN').only().required(),
        midPointX: Joi.number().required(),
        midPointY: Joi.number().required(),
        lengthX: Joi.number().required(),
        lengthY: Joi.number().required(),
    }).unknown().required();
    const ptzSpeed = Joi.number().min(1).max(100);
    const changeSceneMode = Joi.number().allow(...Object.entries('SCENEMODE').map(v => v[1])).only().required();
    const threedMode = Joi.object({
        alpha: Joi.number()
    });
    const changeChannel = Joi.string().required();
    const setMarkWarn = Joi.object({
        id: Joi.number(),
        ids: Joi.array().items(Joi.number())
    }).required();
    const removeMarkWarn = Joi.object({
        ids: Joi.array().items(Joi.number()).required()
    }).required();
    const addPreset = Joi.object({
        name: Joi.string().required()
    }).unknown();
    const personNameSchema = Joi.string().min(3);
    const personAgeSchema = Joi.number().min(1);
    const personSchema = Joi.object({
        name: personNameSchema,
        age: personAgeSchema
    });
    function error(err, key) {
        console.error('err is', err);
        console.log(this.age);
        console.log(key);
    }
    let Person = class Person {
        constructor(name, age) {
            (this.age = age), (this.name = name);
        }
        test2(name, age) {
            this.age = age;
            this.name = name;
        }
    };
    __decorate([
        i(error),
        __param(0, o(personNameSchema)),
        __param(1, o(personAgeSchema)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "test2", null);
    Person = __decorate([
        r(personSchema, true),
        __metadata("design:paramtypes", [String, Number])
    ], Person);
    let a = new Person('Jake', 9);
    a.test2('3', 1);

    exports.addPreset = addPreset;
    exports.bool = bool;
    exports.changeChannel = changeChannel;
    exports.changeSceneMode = changeSceneMode;
    exports.fn = fn;
    exports.getPresetImage = getPresetImage;
    exports.num = num;
    exports.obj = obj;
    exports.openScreenTrack = openScreenTrack;
    exports.ptzBox = ptzBox;
    exports.ptzControl = ptzControl;
    exports.ptzControlEnum = ptzControlEnum;
    exports.ptzCtrlParam = ptzCtrlParam;
    exports.ptzSet = ptzSet;
    exports.ptzSetStatic = ptzSetStatic;
    exports.ptzSpeed = ptzSpeed;
    exports.removeMarkWarn = removeMarkWarn;
    exports.setMarkWarn = setMarkWarn;
    exports.setTollgate = setTollgate;
    exports.showLayers = showLayers;
    exports.str = str;
    exports.threedMode = threedMode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

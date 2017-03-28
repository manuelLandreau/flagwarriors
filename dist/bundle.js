!function (n) {
    function r(e) {
        if (t[e])return t[e].exports;
        var a = t[e] = {i: e, l: !1, exports: {}};
        return n[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }

    var t = {};
    r.m = n, r.c = t, r.i = function (n) {
        return n
    }, r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {configurable: !1, enumerable: !0, get: e})
    }, r.n = function (n) {
        var t = n && n.__esModule ? function () {
                return n.default
            } : function () {
                return n
            };
        return r.d(t, "a", t), t
    }, r.o = function (n, r) {
        return Object.prototype.hasOwnProperty.call(n, r)
    }, r.p = "./dist/", r(r.s = 34)
}([function (n, r) {
    n.exports = function (n) {
        "undefined" != typeof execScript ? execScript(n) : eval.call(null, n)
    }
}, function (n, r, t) {
    t(0)(t(18))
}, function (n, r, t) {
    t(0)(t(19))
}, function (n, r, t) {
    t(0)(t(20))
}, function (n, r, t) {
    t(0)(t(21))
}, function (n, r, t) {
    t(0)(t(22))
}, function (n, r, t) {
    t(0)(t(23))
}, function (n, r, t) {
    t(0)(t(24))
}, function (n, r, t) {
    t(0)(t(25))
}, function (n, r, t) {
    t(0)(t(26))
}, function (n, r, t) {
    t(0)(t(27))
}, function (n, r, t) {
    t(0)(t(28))
}, function (n, r, t) {
    t(0)(t(29))
}, function (n, r, t) {
    t(0)(t(30))
}, function (n, r, t) {
    t(0)(t(31))
}, function (n, r, t) {
    t(0)(t(32))
}, function (n, r, t) {
    t(0)(t(33))
}, function (n, r) {
    !function (n, r, t) {
        function e(n) {
            return function () {
                return this[n]
            }
        }

        function a(n, r) {
            var t = n.split("."), e = on;
            !(t[0] in e) && e.execScript && e.execScript("var " + t[0]);
            for (var a; t.length && (a = t.shift());)t.length || r === rn ? e = e[a] ? e[a] : e[a] = {} : e[a] = r
        }

        function o(n, r, t) {
            return n.call.apply(n.bind, arguments)
        }

        function i(n, r, t) {
            if (!n)throw Error();
            if (2 < arguments.length) {
                var e = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var t = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(t, e), n.apply(r, t)
                }
            }
            return function () {
                return n.apply(r, arguments)
            }
        }

        function s(n, r, t) {
            return s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? o : i, s.apply(en, arguments)
        }

        function l(n, r) {
            this.G = n, this.u = r || n, this.z = this.u.document, this.R = rn
        }

        function p(n, t, e) {
            n = n.z.getElementsByTagName(t)[0], n || (n = r.documentElement), n && n.lastChild && n.insertBefore(e, n.lastChild)
        }

        function h(n, r) {
            return n.createElement("link", {rel: "stylesheet", href: r})
        }

        function d(n, r) {
            return n.createElement("script", {src: r})
        }

        function c(n, r) {
            for (var t = n.className.split(/\s+/), e = 0, a = t.length; e < a; e++)if (t[e] == r)return;
            t.push(r), n.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function u(n, r) {
            for (var t = n.className.split(/\s+/), e = [], a = 0, o = t.length; a < o; a++)t[a] != r && e.push(t[a]);
            n.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function f(n, r) {
            for (var t = n.className.split(/\s+/), e = 0, a = t.length; e < a; e++)if (t[e] == r)return tn;
            return an
        }

        function g(n) {
            if (n.R === rn) {
                var r = n.z.createElement("p");
                r.innerHTML = '<a style="top:1px;">w</a>', n.R = /top/.test(r.getElementsByTagName("a")[0].getAttribute("style"))
            }
            return n.R
        }

        function m(n) {
            var r = n.u.location.protocol;
            return "about:" == r && (r = n.G.location.protocol), "https:" == r ? "https:" : "http:"
        }

        function w(n, r, t) {
            this.w = n, this.T = r, this.Aa = t
        }

        function y(n, r, t, e) {
            this.e = n != en ? n : en, this.o = r != en ? r : en, this.ba = t != en ? t : en, this.f = e != en ? e : en
        }

        function v(n) {
            n = ln.exec(n);
            var r = en, t = en, e = en, a = en;
            return n && (n[1] !== en && n[1] && (r = parseInt(n[1], 10)), n[2] !== en && n[2] && (t = parseInt(n[2], 10)), n[3] !== en && n[3] && (e = parseInt(n[3], 10)), n[4] !== en && n[4] && (a = /^[0-9]+$/.test(n[4]) ? parseInt(n[4], 10) : n[4])), new y(r, t, e, a)
        }

        function x(n, r, t, e, a, o, i, s, l, p, h) {
            this.J = n, this.Ha = r, this.za = t, this.ga = e, this.Fa = a, this.fa = o, this.xa = i, this.Ga = s, this.wa = l, this.ea = p, this.k = h
        }

        function b(n, r) {
            this.a = n, this.H = r
        }

        function k(n) {
            var r = S(n.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            return "" != r ? (/BB\d{2}/.test(r) && (r = "BlackBerry"), r) : (n = S(n.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != n ? ("Mac_PowerPC" == n && (n = "Macintosh"), n) : "Unknown")
        }

        function E(n) {
            var r = S(n.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (r || (r = S(n.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (r = S(n.a, /(iPhone )?OS ([\d_]+)/, 2)))return r;
            if (r = S(n.a, /(?:Linux|CrOS) ([^;)]+)/, 1))for (var r = r.split(/\s/), t = 0; t < r.length; t += 1)if (/^[\d\._]+$/.test(r[t]))return r[t];
            return (n = S(n.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? n : "Unknown"
        }

        function S(n, r, t) {
            return (n = n.match(r)) && n[t] ? n[t] : ""
        }

        function T(n) {
            if (n.documentMode)return n.documentMode
        }

        function A(n) {
            this.va = n || "-"
        }

        function O(n, r) {
            this.J = n, this.U = 4, this.K = "n";
            var t = (r || "n4").match(/^([nio])([1-9])$/i);
            t && (this.K = t[1], this.U = parseInt(t[2], 10))
        }

        function I(n) {
            return n.K + n.U
        }

        function _(n) {
            var r = 4, t = "n", e = en;
            return n && ((e = n.match(/(normal|oblique|italic)/i)) && e[1] && (t = e[1].substr(0, 1).toLowerCase()), (e = n.match(/([1-9]00|normal|bold)/i)) && e[1] && (/bold/i.test(e[1]) ? r = 7 : /[1-9]00/.test(e[1]) && (r = parseInt(e[1].substr(0, 1), 10)))), t + r
        }

        function N(n, r, t) {
            this.c = n, this.h = r, this.M = t, this.j = "wf", this.g = new A("-")
        }

        function B(n) {
            c(n.h, n.g.f(n.j, "loading")), C(n, "loading")
        }

        function D(n) {
            u(n.h, n.g.f(n.j, "loading")), f(n.h, n.g.f(n.j, "active")) || c(n.h, n.g.f(n.j, "inactive")), C(n, "inactive")
        }

        function C(n, r, t) {
            n.M[r] && (t ? n.M[r](t.getName(), I(t)) : n.M[r]())
        }

        function F(n, r) {
            this.c = n, this.C = r, this.s = this.c.createElement("span", {"aria-hidden": "true"}, this.C)
        }

        function P(n, r) {
            var t, e = n.s;
            t = [];
            for (var a = r.J.split(/,\s*/), o = 0; o < a.length; o++) {
                var i = a[o].replace(/['"]/g, "");
                -1 == i.indexOf(" ") ? t.push(i) : t.push("'" + i + "'")
            }
            t = t.join(","), a = "normal", o = r.U + "00", "o" === r.K ? a = "oblique" : "i" === r.K && (a = "italic"), t = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + t + ";font-style:" + a + ";font-weight:" + o + ";", g(n.c) ? e.setAttribute("style", t) : e.style.cssText = t
        }

        function G(n) {
            p(n.c, "body", n.s)
        }

        function L(n, r, t, e, a, o, i, s) {
            this.V = n, this.ta = r, this.c = t, this.q = e, this.C = s || "BESbswy", this.k = a, this.F = {}, this.S = o || 5e3, this.Z = i || en, this.B = this.A = en, n = new F(this.c, this.C), G(n);
            for (var l in hn)hn.hasOwnProperty(l) && (P(n, new O(hn[l], I(this.q))), this.F[hn[l]] = n.s.offsetWidth);
            n.remove()
        }

        function M(n, r, t) {
            for (var e in hn)if (hn.hasOwnProperty(e) && r === n.F[hn[e]] && t === n.F[hn[e]])return tn;
            return an
        }

        function j(n) {
            var r = n.A.s.offsetWidth, t = n.B.s.offsetWidth;
            r === n.F.serif && t === n.F["sans-serif"] || n.k.T && M(n, r, t) ? sn() - n.ya >= n.S ? n.k.T && M(n, r, t) && (n.Z === en || n.Z.hasOwnProperty(n.q.getName())) ? R(n, n.V) : R(n, n.ta) : setTimeout(s(function () {
                        j(this)
                    }, n), 25) : R(n, n.V)
        }

        function R(n, r) {
            n.A.remove(), n.B.remove(), r(n.q)
        }

        function Y(n, r, t, e) {
            this.c = r, this.t = t, this.N = 0, this.ca = this.Y = an, this.S = e, this.k = n.k
        }

        function $(n, r, t, e, a) {
            if (0 === r.length && a) D(n.t); else for (n.N += r.length, a && (n.Y = a), a = 0; a < r.length; a++) {
                var o = r[a], i = t[o.getName()], l = n.t, p = o;
                c(l.h, l.g.f(l.j, p.getName(), I(p).toString(), "loading")), C(l, "fontloading", p), new L(s(n.ha, n), s(n.ia, n), n.c, o, n.k, n.S, e, i).start()
            }
        }

        function W(n) {
            0 == --n.N && n.Y && (n.ca ? (n = n.t, u(n.h, n.g.f(n.j, "loading")), u(n.h, n.g.f(n.j, "inactive")), c(n.h, n.g.f(n.j, "active")), C(n, "active")) : D(n.t))
        }

        function U(n, r, t) {
            this.G = n, this.W = r, this.a = t, this.O = this.P = 0
        }

        function X(n, r) {
            un.W.$[n] = r
        }

        function H(n, r) {
            this.c = n, this.d = r
        }

        function z(n, r) {
            this.c = n, this.d = r
        }

        function V(n) {
            var r = n.split(":");
            if (n = r[0], r[1]) {
                for (var t = r[1].split(","), r = [], e = 0, a = t.length; e < a; e++) {
                    var o = t[e];
                    if (o) {
                        var i = fn[o];
                        r.push(i ? i : o)
                    }
                }
                for (t = [], e = 0; e < r.length; e += 1)t.push(new O(n, r[e]));
                return t
            }
            return [new O(n)]
        }

        function q(n, r, t) {
            this.a = n, this.c = r, this.d = t, this.m = []
        }

        function K(n, r) {
            this.c = n, this.d = r, this.m = []
        }

        function J(n, r, t) {
            this.L = n ? n : r + gn, this.p = [], this.Q = [], this.da = t || ""
        }

        function Q(n) {
            this.p = n, this.aa = [], this.I = {}
        }

        function Z(n, r, t) {
            this.a = n, this.c = r, this.d = t
        }

        function nn(n, r) {
            this.c = n, this.d = r, this.m = []
        }

        var rn = void 0, tn = !0, en = null, an = !1, on = this;
        on.Ba = tn;
        var sn = Date.now || function () {
                return +new Date
            };
        l.prototype.createElement = function (n, r, t) {
            if (n = this.z.createElement(n), r)for (var e in r)if (r.hasOwnProperty(e))if ("style" == e) {
                var a = n, o = r[e];
                g(this) ? a.setAttribute("style", o) : a.style.cssText = o
            } else n.setAttribute(e, r[e]);
            return t && n.appendChild(this.z.createTextNode(t)), n
        }, a("webfont.BrowserInfo", w), w.prototype.qa = e("w"), w.prototype.hasWebFontSupport = w.prototype.qa, w.prototype.ra = e("T"), w.prototype.hasWebKitFallbackBug = w.prototype.ra, w.prototype.sa = e("Aa"), w.prototype.hasWebKitMetricsBug = w.prototype.sa;
        var ln = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        y.prototype.toString = function () {
            return [this.e, this.o || "", this.ba || "", this.f || ""].join("")
        }, a("webfont.UserAgent", x), x.prototype.getName = e("J"), x.prototype.getName = x.prototype.getName, x.prototype.pa = e("za"), x.prototype.getVersion = x.prototype.pa, x.prototype.la = e("ga"), x.prototype.getEngine = x.prototype.la, x.prototype.ma = e("fa"), x.prototype.getEngineVersion = x.prototype.ma, x.prototype.na = e("xa"), x.prototype.getPlatform = x.prototype.na, x.prototype.oa = e("wa"), x.prototype.getPlatformVersion = x.prototype.oa, x.prototype.ka = e("ea"), x.prototype.getDocumentMode = x.prototype.ka, x.prototype.ja = e("k"), x.prototype.getBrowserInfo = x.prototype.ja;
        var pn = new x("Unknown", new y, "Unknown", "Unknown", new y, "Unknown", "Unknown", new y, "Unknown", rn, new w(an, an, an));
        b.prototype.parse = function () {
            var n;
            if (-1 != this.a.indexOf("MSIE")) {
                n = k(this);
                var r = E(this), t = v(r), e = S(this.a, /MSIE ([\d\w\.]+)/, 1), a = v(e);
                n = new x("MSIE", a, e, "MSIE", a, e, n, t, r, T(this.H), new w("Windows" == n && 6 <= a.e || "Windows Phone" == n && 8 <= t.e, an, an))
            } else if (-1 != this.a.indexOf("Opera"))n:{
                n = "Unknown";
                var r = S(this.a, /Presto\/([\d\w\.]+)/, 1), t = v(r), e = E(this), a = v(e), o = T(this.H);
                if (t.e !== en ? n = "Presto" : (-1 != this.a.indexOf("Gecko") && (n = "Gecko"), r = S(this.a, /rv:([^\)]+)/, 1), t = v(r)), -1 != this.a.indexOf("Opera Mini/")) {
                    var i = S(this.a, /Opera Mini\/([\d\.]+)/, 1), s = v(i);
                    n = new x("OperaMini", s, i, n, t, r, k(this), a, e, o, new w(an, an, an))
                } else {
                    if (-1 != this.a.indexOf("Version/") && (i = S(this.a, /Version\/([\d\.]+)/, 1), s = v(i), s.e !== en)) {
                        n = new x("Opera", s, i, n, t, r, k(this), a, e, o, new w(10 <= s.e, an, an));
                        break n
                    }
                    i = S(this.a, /Opera[\/ ]([\d\.]+)/, 1), s = v(i), n = s.e !== en ? new x("Opera", s, i, n, t, r, k(this), a, e, o, new w(10 <= s.e, an, an)) : new x("Opera", new y, "Unknown", n, t, r, k(this), a, e, o, new w(an, an, an))
                }
            } else if (/AppleWeb(K|k)it/.test(this.a)) {
                n = k(this);
                var r = E(this), t = v(r), e = S(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1), a = v(e), o = "Unknown", i = new y, s = "Unknown", l = an;
                -1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? o = "Chrome" : /Silk\/\d/.test(this.a) ? o = "Silk" : "BlackBerry" == n || "Android" == n ? o = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? o = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (o = "AdobeAIR"), "BuiltinBrowser" == o ? s = "Unknown" : "Silk" == o ? s = S(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == o ? s = S(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? s = S(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == o && (s = S(this.a, /AdobeAIR\/([\d\.]+)/, 1)), i = v(s), l = "AdobeAIR" == o ? 2 < i.e || 2 == i.e && 5 <= i.o : "BlackBerry" == n ? 10 <= t.e : "Android" == n ? 2 < t.e || 2 == t.e && 1 < t.o : 526 <= a.e || 525 <= a.e && 13 <= a.o, n = new x(o, i, s, "AppleWebKit", a, e, n, t, r, T(this.H), new w(l, 536 > a.e || 536 == a.e && 11 > a.o, "iPhone" == n || "iPad" == n || "iPod" == n || "Macintosh" == n))
            } else-1 != this.a.indexOf("Gecko") ? (n = "Unknown", r = new y, t = "Unknown", e = E(this), a = v(e), o = an, -1 != this.a.indexOf("Firefox") ? (n = "Firefox", t = S(this.a, /Firefox\/([\d\w\.]+)/, 1), r = v(t), o = 3 <= r.e && 5 <= r.o) : -1 != this.a.indexOf("Mozilla") && (n = "Mozilla"), i = S(this.a, /rv:([^\)]+)/, 1), s = v(i), o || (o = 1 < s.e || 1 == s.e && 9 < s.o || 1 == s.e && 9 == s.o && 2 <= s.ba || i.match(/1\.9\.1b[123]/) != en || i.match(/1\.9\.1\.[\d\.]+/) != en), n = new x(n, r, t, "Gecko", s, i, k(this), a, e, T(this.H), new w(o, an, an))) : n = pn;
            return n
        }, A.prototype.f = function (n) {
            for (var r = [], t = 0; t < arguments.length; t++)r.push(arguments[t].replace(/[\W_]+/g, "").toLowerCase());
            return r.join(this.va)
        }, O.prototype.getName = e("J"), F.prototype.remove = function () {
            var n = this.s;
            n.parentNode && n.parentNode.removeChild(n)
        };
        var hn = {Ea: "serif", Da: "sans-serif", Ca: "monospace"};
        L.prototype.start = function () {
            this.A = new F(this.c, this.C), G(this.A), this.B = new F(this.c, this.C), G(this.B), this.ya = sn(), P(this.A, new O(this.q.getName() + ",serif", I(this.q))), P(this.B, new O(this.q.getName() + ",sans-serif", I(this.q))), j(this)
        }, Y.prototype.ha = function (n) {
            var r = this.t;
            u(r.h, r.g.f(r.j, n.getName(), I(n).toString(), "loading")), u(r.h, r.g.f(r.j, n.getName(), I(n).toString(), "inactive")), c(r.h, r.g.f(r.j, n.getName(), I(n).toString(), "active")), C(r, "fontactive", n), this.ca = tn, W(this)
        }, Y.prototype.ia = function (n) {
            var r = this.t;
            u(r.h, r.g.f(r.j, n.getName(), I(n).toString(), "loading")), f(r.h, r.g.f(r.j, n.getName(), I(n).toString(), "active")) || c(r.h, r.g.f(r.j, n.getName(), I(n).toString(), "inactive")), C(r, "fontinactive", n), W(this)
        }, U.prototype.load = function (n) {
            var r = n.context || this.G;
            if (this.c = new l(this.G, r), r = new N(this.c, r.document.documentElement, n), this.a.k.w) {
                var t, e = this.W, a = this.c, o = [];
                for (t in n)if (n.hasOwnProperty(t)) {
                    var i = e.$[t];
                    i && o.push(i(n[t], a))
                }
                for (n = n.timeout, this.O = this.P = o.length, n = new Y(this.a, this.c, r, n), t = 0, e = o.length; t < e; t++)a = o[t], a.v(this.a, s(this.ua, this, a, r, n))
            } else D(r)
        }, U.prototype.ua = function (n, r, t, e) {
            var a = this;
            e ? n.load(function (n, e, o) {
                    var i = 0 == --a.P;
                    i && B(r), setTimeout(function () {
                        $(t, n, e || {}, o || en, i)
                    }, 0)
                }) : (n = 0 == --this.P, this.O--, n && (0 == this.O ? D(r) : B(r)), $(t, [], {}, en, n))
        };
        var dn = n, cn = new b(navigator.userAgent, r).parse(), un = dn.WebFont = new U(n, new function () {
            this.$ = {}
        }, cn);
        un.load = un.load, H.prototype.load = function (n) {
            var r, t, e = this.d.urls || [], a = this.d.families || [];
            for (r = 0, t = e.length; r < t; r++)p(this.c, "head", h(this.c, e[r]));
            for (e = [], r = 0, t = a.length; r < t; r++) {
                var o = a[r].split(":");
                if (o[1])for (var i = o[1].split(","), s = 0; s < i.length; s += 1)e.push(new O(o[0], i[s])); else e.push(new O(o[0]))
            }
            n(e)
        }, H.prototype.v = function (n, r) {
            return r(n.k.w)
        }, X("custom", function (n, r) {
            return new H(r, n)
        });
        var fn = {regular: "n4", bold: "n7", italic: "i4", bolditalic: "i7", r: "n4", b: "n7", i: "i4", bi: "i7"};
        z.prototype.v = function (n, r) {
            return r(n.k.w)
        }, z.prototype.load = function (n) {
            p(this.c, "head", h(this.c, m(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
            for (var r = this.d.families, t = [], e = 0, a = r.length; e < a; e++)t.push.apply(t, V(r[e]));
            n(t)
        }, X("ascender", function (n, r) {
            return new z(r, n)
        }), q.prototype.v = function (n, r) {
            var t = this, e = t.d.projectId, a = t.d.version;
            if (e) {
                var o = t.c.u, i = t.c.createElement("script");
                i.id = "__MonotypeAPIScript__" + e;
                var s = an;
                i.onload = i.onreadystatechange = function () {
                    if (!(s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                        if (s = tn, o["__mti_fntLst" + e]) {
                            var a = o["__mti_fntLst" + e]();
                            if (a)for (var l = 0; l < a.length; l++)t.m.push(new O(a[l].fontfamily))
                        }
                        r(n.k.w), i.onload = i.onreadystatechange = en
                    }
                }, i.src = t.D(e, a), p(this.c, "head", i)
            } else r(tn)
        }, q.prototype.D = function (n, r) {
            return m(this.c) + "//" + (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "") + "/" + n + ".js" + (r ? "?v=" + r : "")
        }, q.prototype.load = function (n) {
            n(this.m)
        }, X("monotype", function (n, t) {
            return new q(new b(navigator.userAgent, r).parse(), t, n)
        }), K.prototype.D = function (n) {
            var r = m(this.c);
            return (this.d.api || r + "//use.typekit.net") + "/" + n + ".js"
        }, K.prototype.v = function (n, r) {
            var t = this.d.id, e = this.d, a = this.c.u, o = this;
            t ? (a.__webfonttypekitmodule__ || (a.__webfonttypekitmodule__ = {}), a.__webfonttypekitmodule__[t] = function (t) {
                    t(n, e, function (n, t, e) {
                        for (var a = 0; a < t.length; a += 1) {
                            var i = e[t[a]];
                            if (i)for (var s = 0; s < i.length; s += 1)o.m.push(new O(t[a], i[s])); else o.m.push(new O(t[a]))
                        }
                        r(n)
                    })
                }, t = d(this.c, this.D(t)), p(this.c, "head", t)) : r(tn)
        }, K.prototype.load = function (n) {
            n(this.m)
        }, X("typekit", function (n, r) {
            return new K(r, n)
        });
        var gn = "//fonts.googleapis.com/css";
        J.prototype.f = function () {
            if (0 == this.p.length)throw Error("No fonts to load !");
            if (-1 != this.L.indexOf("kit="))return this.L;
            for (var n = this.p.length, r = [], t = 0; t < n; t++)r.push(this.p[t].replace(/ /g, "+"));
            return n = this.L + "?family=" + r.join("%7C"), 0 < this.Q.length && (n += "&subset=" + this.Q.join(",")), 0 < this.da.length && (n += "&text=" + encodeURIComponent(this.da)), n
        };
        var mn = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        }, wn = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        }, yn = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        }, vn = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
        Q.prototype.parse = function () {
            for (var n = this.p.length, r = 0; r < n; r++) {
                var t = this.p[r].split(":"), e = t[0].replace(/\+/g, " "), a = ["n4"];
                if (2 <= t.length) {
                    var o, i = t[1];
                    if (o = [], i)for (var i = i.split(","), s = i.length, l = 0; l < s; l++) {
                        var p;
                        if (p = i[l], p.match(/^[\w]+$/)) {
                            p = vn.exec(p.toLowerCase());
                            var h = rn;
                            if (p == en) h = ""; else {
                                if (h = rn, (h = p[1]) == en || "" == h) h = "4"; else var d = wn[h], h = d ? d : isNaN(h) ? "4" : h.substr(0, 1);
                                h = [p[2] == en || "" == p[2] ? "n" : yn[p[2]], h].join("")
                            }
                            p = h
                        } else p = "";
                        p && o.push(p)
                    }
                    0 < o.length && (a = o), 3 == t.length && (t = t[2], o = [], t = t ? t.split(",") : o, 0 < t.length && (t = mn[t[0]]) && (this.I[e] = t))
                }
                for (this.I[e] || (t = mn[e]) && (this.I[e] = t), t = 0; t < a.length; t += 1)this.aa.push(new O(e, a[t]))
            }
        };
        var xn = {Arimo: tn, Cousine: tn, Tinos: tn};
        Z.prototype.v = function (n, r) {
            r(n.k.w)
        }, Z.prototype.load = function (n) {
            var r = this.c;
            if ("MSIE" == this.a.getName() && this.d.blocking != tn) {
                var t = s(this.X, this, n), e = function () {
                    r.z.body ? t() : setTimeout(e, 0)
                };
                e()
            } else this.X(n)
        }, Z.prototype.X = function (n) {
            for (var r = this.c, t = new J(this.d.api, m(r), this.d.text), e = this.d.families, a = e.length, o = 0; o < a; o++) {
                var i = e[o].split(":");
                3 == i.length && t.Q.push(i.pop());
                var s = "";
                2 == i.length && "" != i[1] && (s = ":"), t.p.push(i.join(s))
            }
            e = new Q(e), e.parse(), p(r, "head", h(r, t.f())), n(e.aa, e.I, xn)
        }, X("google", function (n, t) {
            return new Z(new b(navigator.userAgent, r).parse(), t, n)
        }), nn.prototype.D = function (n) {
            return m(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + n + ".js"
        }, nn.prototype.v = function (n, r) {
            var t = this.d.id, e = this.c.u, a = this;
            t ? (e.__webfontfontdeckmodule__ || (e.__webfontfontdeckmodule__ = {}), e.__webfontfontdeckmodule__[t] = function (n, t) {
                    for (var e = 0, o = t.fonts.length; e < o; ++e) {
                        var i = t.fonts[e];
                        a.m.push(new O(i.name, _("font-weight:" + i.weight + ";font-style:" + i.style)))
                    }
                    r(n)
                }, t = d(this.c, this.D(t)), p(this.c, "head", t)) : r(tn)
        }, nn.prototype.load = function (n) {
            n(this.m)
        }, X("fontdeck", function (n, r) {
            return new nn(r, n)
        }), n.WebFontConfig && un.load(n.WebFontConfig)
    }(this, document)
}, function (n, r) {
    n.exports = "function walkAnimation(caracter, path0x, path1x, path0y, path1y) {\r\n    if (path0x / 32 * 32 > path1x / 32 * 32 && path0y / 16 * 16 > path1y / 16 * 16) {\r\n        caracter.animations.play('west', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 > path1x / 32 * 32 && path0y / 16 * 16 < path1y / 16 * 16) {\r\n        caracter.animations.play('north', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 < path1x / 32 * 32 && path0y / 16 * 16 < path1y / 16 * 16) {\r\n        caracter.animations.play('north', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 < path1x / 32 * 32 && path0y / 16 * 16 > path1y / 16 * 16) {\r\n        caracter.animations.play('east', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 == path1x / 32 * 32 && path0y / 16 * 16 > path1y / 16 * 16) {\r\n        caracter.animations.play('north', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 == path1x / 32 * 32 && path0y / 16 * 16 < path1y / 16 * 16) {\r\n        caracter.animations.play('south', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 > path1x / 32 * 32 && path0y / 16 * 16 == path1y / 16 * 16) {\r\n        caracter.animations.play('east', 10, false);\r\n    }\r\n    else if (path0x / 32 * 32 < path1x / 32 * 32 && path0y / 16 * 16 == path1y / 16 * 16) {\r\n        caracter.animations.play('west', 10, false);\r\n    }\r\n}\r\n\r\nfunction fightAnimation(caracter, ennemy) {\r\n    if (caracter.x > ennemy.x && caracter.y > ennemy.y) {\r\n        caracter.animations.play('eattack', 10, false);\r\n    }\r\n    else if (caracter.x > ennemy.x && caracter.y < ennemy.y) {\r\n        caracter.animations.play('sattack', 10, false);\r\n    }\r\n    else if (caracter.x < ennemy.x && caracter.y < ennemy.y) {\r\n        caracter.animations.play('sattack', 10, false);\r\n    }\r\n    else if (caracter.x < ennemy.x && caracter.y > ennemy.y) {\r\n        caracter.animations.play('wattack', 10, false);\r\n    }\r\n    else if (caracter.x == ennemy.x && caracter.y > ennemy.y) {\r\n        caracter.animations.play('sattack', 10, false);\r\n    }\r\n    else if (caracter.x == ennemy.x && caracter.y < ennemy.y) {\r\n        caracter.animations.play('nattack', 10, false);\r\n    }\r\n    else if (caracter.x > ennemy.x && caracter.y == ennemy.y) {\r\n        caracter.animations.play('wattack', 10, false);\r\n    }\r\n    else if (caracter.x < ennemy.x && caracter.y == ennemy.y) {\r\n        caracter.animations.play('eattack', 10, false);\r\n    }\r\n}\r\n\r\nfunction swordSound() {\r\n    var rd = Math.random();\r\n    switch (Math.round(rd * 10)) {\r\n        case 1:\r\n        case 2:\r\n        case 3:\r\n            sword1.play();\r\n            break;\r\n        case 4:\r\n        case 5:\r\n        case 6:\r\n            sword2.play();\r\n            break;\r\n        case 7:\r\n        case 8:\r\n        case 9:\r\n            pare.play();\r\n            break;\r\n    }\r\n}\r\n"
}, function (n, r) {
    n.exports = "var Caracter = function (x, y, name) {\r\n    Phaser.Sprite.call(this, paper.game, x, y, 'warrior');\r\n    paper.game.physics.arcade.enable(this);\r\n    this.body.immovable = true;\r\n    this.inputEnabled = true;\r\n    this.scale.setTo(2);\r\n    this.input.priorityID = 1;\r\n    this.anchor.setTo(0.5, 0.5);\r\n    this.selected = false;\r\n    this.newPosX = this.x;\r\n    this.newPosY = this.y;\r\n    this.pathx = this.x / 32;\r\n    this.pathy = this.y / 16;\r\n    this.path = new EasyStar.js();\r\n    this.path.setAcceptableTiles([0]);\r\n    this.path.setIterationsPerCalculation(1000);\r\n    this.health = 100;\r\n    this.name = name;\r\n    allies.push(this);\r\n    all.add(this);\r\n    // Anim\r\n    this.animations.add('south', [0, 1, 2, 3, 4]);\r\n    this.animations.add('north', [5, 6, 7, 8, 9]);\r\n    this.animations.add('east', [10, 11, 12, 13, 14]);\r\n    this.animations.add('west', [15, 16, 17, 18, 19]);\r\n    this.animations.add('sattack', [0, 20, 21, 22, 23, 24]);\r\n    this.animations.add('nattack', [5, 25, 26, 27, 28, 29]);\r\n    this.animations.add('eattack', [10, 30, 31, 32, 33, 34]);\r\n    this.animations.add('wattack', [15, 35, 36, 37, 38, 39]);\r\n\r\n    this.select = function () {\r\n        allies.forEach(function (caracter) {\r\n            caracter.selected = false;\r\n        });\r\n        this.selected = true;\r\n    };\r\n    this.events.onInputDown.add(this.select, this);\r\n\r\n    paper.game.input.onUp.add(function (pointer) {\r\n        if (gameOn && this.selected && pointer.x < 477 && pointer.y < 797 && pointer.x > 3 && pointer.y > 3) {\r\n            this.newPosX = pointer.x;\r\n            this.newPosY = pointer.y;\r\n\r\n            this.move;\r\n        }\r\n    }, this);\r\n\r\n    this.move = paper.game.time.events.loop(300, function () {\r\n        this.path.setGrid(map.grid);\r\n        this.path.findPath(\r\n            Math.round(this.x / 32),\r\n            Math.round(this.y / 16),\r\n            Math.abs(Math.round(this.newPosX / 32)), //TODO: Bug to fix\r\n            Math.abs(Math.round(this.newPosY / 16)),\r\n            function (path) {\r\n                if (path === null) {\r\n                    this.body.velocity.x = 0;\r\n                    this.body.velocity.y = 0;\r\n                    this.move.pause;\r\n                }\r\n                if (path && path[1]) {\r\n                    this.move.resume;\r\n                    paper.game.physics.arcade.moveToXY(this, path[1].x * 32, path[1].y * 16);\r\n                    walkAnimation(this, path[0].x, path[1].x, path[0].y, path[1].y);\r\n                    all.sort('x', Phaser.Group.SORT_ACENDING);\r\n                    all.sort('y', Phaser.Group.SORT_ACENDING);\r\n\r\n                    // Set obstacle on the caracter and emit\r\n                    if (this.pathx != path[0].x || this.pathy != path[0].y) {\r\n                        socket.emit('is_moving', {\r\n                            nextx: path[1].x * 32,\r\n                            nexty: path[1].y * 16,\r\n                            name: this.name,\r\n                            gameId: gameId\r\n                        });\r\n                        // map.caracterObstacle(this.pathx, this.pathy, 0);\r\n                    }\r\n                    // map.caracterObstacle(path[0].x, path[0].y, 1);\r\n                    this.pathx = path[0].x;\r\n                    this.pathy = path[0].y;\r\n                }\r\n                else {\r\n                    if (this.body)\r\n                        this.body.velocity.setTo(0, 0);\r\n                }\r\n            }.bind(this));\r\n        this.path.calculate();\r\n    }, this);\r\n\r\n    this.attack = paper.game.time.events.loop(Phaser.Timer.SECOND, function () {\r\n        ennemies.forEach(function (ennemy) {\r\n            if (ennemy.alive && paper.game.physics.arcade.distanceBetween(this, ennemy) < 32) {\r\n                socket.emit('attack', {\r\n                    name: ennemy.name,\r\n                    damage: paper.game.rnd.integerInRange(2, 6),\r\n                    gameId: gameId\r\n                });\r\n                fightAnimation(this, ennemy);\r\n                swordSound();\r\n                console.log('fight');\r\n            }\r\n        }, this);\r\n    }, this);\r\n\r\n    this.getFlag = function () {\r\n        if (paper.game.physics.arcade.distanceBetween(this, theirFlag) < 32) {\r\n            socket.emit('got_flag', {name: this.name, gameId: gameId});\r\n            theirFlag.x = this.x;\r\n            theirFlag.y = this.y - 24;\r\n        }\r\n    }.bind(this);\r\n\r\n    this.damage = function (lp) {\r\n        this.health -= lp;\r\n        if (this.health < 0) {\r\n            if (this.alive)\r\n                deadWarior++;\r\n            this.kill();\r\n            socket.emit('death', {name: this.name, gameId: gameId});\r\n            if (deadWarior > 5) {\r\n                socket.emit('we_have_a_looser', {gameId: gameId});\r\n                var looser = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.LOOSE, {\r\n                    fill: '#000000',\r\n                    font: 'bold 32px Almendra'\r\n                });\r\n                looser.anchor.setTo(0.5);\r\n                if (logged) {\r\n                    var body = {\r\n                        token: window.localStorage.getItem('jtw'),\r\n                        victory: false,\r\n                        defeat: true\r\n                    };\r\n                    $.ajax({\r\n                        url: '/update_ratio',\r\n                        type: 'PUT',\r\n                        data: body,\r\n                        success: function (data) {\r\n                            user_infos = data.infos;\r\n                        },\r\n                        error: function (err) {\r\n                        }\r\n                    });\r\n                }\r\n                paper.game.paused = true;\r\n            }\r\n        }\r\n    };\r\n\r\n    this.events.onKilled.add(function () {\r\n        socket.emit('death', {name: this.name, gameId: gameId});\r\n        var skeleton = paper.game.add.sprite(this.x, this.y, 'skeleton');\r\n        skeleton.anchor.setTo(0.5, 0.5);\r\n        all.add(skeleton);\r\n        skeleton.animations.add('death', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);\r\n        skeleton.animations.play('death', 10, false);\r\n        this.x = 0;\r\n        this.y = 800;\r\n    }, this);\r\n};\r\n\r\nCaracter.prototype = Object.create(Phaser.Sprite.prototype);\r\nCaracter.prototype.constructor = Caracter;\r\n"
}, function (n, r) {
    n.exports = "var Ennemy = function (x, y, name) {\r\n    Phaser.Sprite.call(this, paper.game, x, y, 'blueWarrior');\r\n    paper.game.physics.arcade.enable(this);\r\n    this.body.immovable = true;\r\n    this.scale.setTo(2);\r\n    this.anchor.setTo(0.5, 0.5);\r\n    this.newPosX = this.x;\r\n    this.newPosY = this.y;\r\n    this.pathx = this.x / 32;\r\n    this.pathy = this.y / 16;\r\n    this.path = new EasyStar.js();\r\n    this.path.setAcceptableTiles([0]);\r\n    this.path.setIterationsPerCalculation(1000);\r\n    this.health = 100;\r\n    this.animations.add('iddle', [0]);\r\n    this.animations.add('south', [0, 1, 2, 3, 4]);\r\n    this.animations.add('north', [5, 6, 7, 8, 9]);\r\n    this.animations.add('east', [10, 11, 12, 13, 14]);\r\n    this.animations.add('west', [15, 16, 17, 18, 19]);\r\n    this.animations.add('sattack', [0, 20, 21, 22, 23, 24]);\r\n    this.animations.add('nattack', [5, 25, 26, 27, 28, 29]);\r\n    this.animations.add('eattack', [10, 30, 31, 32, 33, 34]);\r\n    this.animations.add('wattack', [15, 35, 36, 37, 38, 39]);\r\n    this.name = name;\r\n    ennemies.push(this);\r\n    all.add(this);\r\n\r\n    this.move = paper.game.time.events.loop(300, function () {\r\n        this.path.setGrid(map.grid);\r\n        this.path.findPath(\r\n            Math.round(this.x / 32),\r\n            Math.round(this.y / 16),\r\n            Math.abs(Math.round(this.newPosX / 32)), //TODO: Bug to fix\r\n            Math.abs(Math.round(this.newPosY / 16)),\r\n            function (path) {\r\n                if (path === null) {\r\n                    this.body.velocity.x = 0;\r\n                    this.body.velocity.y = 0;\r\n                    this.move.pause;\r\n                }\r\n                if (path && path[1]) {\r\n                    this.move.resume;\r\n                    paper.game.physics.arcade.moveToXY(this, path[1].x * 32, path[1].y * 16);\r\n\r\n                    // Set obstacle on the caracter\r\n                    // if (this.pathx != path[0].x || this.pathy != path[0].y)\r\n                    // map.caracterObstacle(this.pathx, this.pathy, 0);\r\n                    // map.caracterObstacle(path[0].x, path[0].y, 1);\r\n\r\n                    walkAnimation(this, path[0].x, path[1].x, path[0].y, path[1].y);\r\n                    all.sort('x', Phaser.Group.SORT_ACENDING);\r\n                    all.sort('y', Phaser.Group.SORT_ACENDING);\r\n                }\r\n                else {\r\n                    this.body.velocity.x = 0;\r\n                    this.body.velocity.y = 0;\r\n                }\r\n            }.bind(this));\r\n        this.path.calculate();\r\n    }, this);\r\n\r\n    this.attack = paper.game.time.events.loop(Phaser.Timer.SECOND, function () {\r\n\r\n        allies.forEach(function (ennemy) {\r\n            if (ennemy.alive && paper.game.physics.arcade.distanceBetween(this, ennemy) < 32) {\r\n                fightAnimation(this, ennemy);\r\n                swordSound();\r\n            }\r\n        }, this);\r\n    }, this);\r\n\r\n    this.events.onKilled.add(function () {\r\n        var skeleton = paper.game.add.sprite(this.x, this.y, 'skeleton');\r\n        skeleton.anchor.setTo(0.5, 0.5);\r\n        skeleton.animations.add('death', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);\r\n        skeleton.animations.play('death', 10, false);\r\n        this.x = 0;\r\n        this.y = 800;\r\n    }, this);\r\n};\r\n\r\nEnnemy.prototype = Object.create(Phaser.Sprite.prototype);\r\nEnnemy.prototype.constructor = Ennemy;\r\n"
}, function (n, r) {
    n.exports = "var Map = function (game, group) {\r\n\r\n    this.game = game;\r\n    this.group = group;\r\n\r\n    wallGroup = paper.game.add.group();\r\n    wallGroup.createMultiple(14, 'walle');\r\n    wallGroup.forEach(function (wall) {\r\n        wall.anchor.setTo(0.33, 0.5);\r\n    });\r\n\r\n    this.grid = [];\r\n    for (var i = 0; i < 54; i++) {\r\n        var t = [];\r\n        for (var j = 0; j < 16; j++) {\r\n            t.push(0);\r\n        }\r\n        this.grid.push(t);\r\n    }\r\n\r\n    this.spawnTiles = function () {\r\n        for (var xt = 0; xt < 16 * 32; xt += 32) {\r\n            for (var yt = 400; yt < 54 * 16; yt += 16) {\r\n                var tile = this.game.add.image(xt, yt, 'grid', 0, this.group);\r\n                tile.anchor.setTo(0.5);\r\n                tile.alpha = 0;\r\n                tile.inputEnabled = true;\r\n                tile.walled = false;\r\n            }\r\n        }\r\n    }.bind(this);\r\n\r\n    this.setObstacle = function (tileY, tileX) {\r\n        this.grid[tileX / 16][tileY / 32] = 1;\r\n    }.bind(this);\r\n\r\n    this.caracterObstacle = function (tileY, tileX, nb) {\r\n        this.grid[tileX][tileY] = nb;\r\n    }.bind(this);\r\n\r\n    this.buildWall = function (pointer) {\r\n        tileGroup.forEach(function (tile) {\r\n            tile.events.onInputOver.add(makeWall, this);\r\n            function makeWall(tile, x, y) {\r\n                if (wallSwitch && wallCount > 13) {\r\n                    wallButton.kill();\r\n                    readyCheck();\r\n                    wallSwitch = false;\r\n                    tileGroup.forEach(function(tile) {\r\n                        tile.alpha = 0;\r\n                    });\r\n                }\r\n                if (wallCount < 14 && pointer.isDown && wallSwitch == true) {\r\n                    if (tile.walled == false && tile.y > 384 && tile.y < 752) {\r\n                        window['walle' + wallCount] = wallGroup.getFirstExists(false);\r\n                        window['walle' + wallCount].reset(tile.x, tile.y);\r\n                        wallGroup.remove(window['walle' + wallCount]);\r\n                        all.add(window['walle' + wallCount]);\r\n                        all.sort('x', Phaser.Group.SORT_ACENDING);\r\n                        all.sort('y', Phaser.Group.SORT_ACENDING);\r\n                        undo.push({type: 'walle', name: wallCount});\r\n                        // allies.push(window['walle' + wallCount]); // Later\r\n                        wallCount++;\r\n                        tile.walled = true;\r\n                        map.setObstacle(tile.x, tile.y);\r\n                        wallsArray.push({x: tile.x, y: tile.y, name: wallCount});\r\n                    }\r\n                }\r\n            }\r\n        });\r\n    };\r\n};\r\n\r\nMap.prototype = Object.create(Phaser.Sprite.prototype);\r\nMap.prototype.constructor = Map;\r\n"
}, function (n, r) {
    n.exports = "var Tower = function (x, y, name, ennemyGroup) {\r\n    Phaser.Sprite.call(this, paper.game, x, y, 'tower');\r\n    paper.game.physics.arcade.enable(this);\r\n    this.body.immovable = true;\r\n    this.name = name;\r\n    this.anchor.setTo(0.33, 0.5);\r\n    this.ennemies = ennemyGroup;\r\n    all.add(this);\r\n\r\n    this.arrowAttack = paper.game.time.events.loop(Phaser.Timer.SECOND * 3, function () {\r\n        this.ennemies.forEach(function (ennemy) {\r\n            if (ennemy.alive && paper.game.physics.arcade.distanceBetween(this, ennemy) < 150\r\n                || paper.game.physics.arcade.distanceBetween(this, ennemy) < -150) {\r\n                var canon = paper.game.add.audio('canon');\r\n                if (sound)\r\n                    canon.play();\r\n                var arrow = arrows.getFirstExists(false);\r\n                arrow.reset(this.x, this.y);\r\n                paper.game.physics.arcade.enable(arrow);\r\n                arrow.body.onCollide = new Phaser.Signal();\r\n                arrow.body.onCollide.add(function () {\r\n                    canon.stop();\r\n                    var explosion = paper.game.add.audio('explosion');\r\n                    if (sound)\r\n                        explosion.play();\r\n                    var kaboom = explosions.getFirstExists(false);\r\n                    kaboom.reset(ennemy.body.x, ennemy.body.y);\r\n                    kaboom.alpha = 0.7;\r\n                    kaboom.play('kaboom', 30, false, true);\r\n                    if (this.ennemies == ennemies)\r\n                        socket.emit('attack', {\r\n                            name: ennemy.name,\r\n                            damage: paper.game.rnd.integerInRange(8, 15),\r\n                            gameId: gameId\r\n                        });\r\n                    arrow.kill();\r\n                }, this);\r\n                arrow.rotation = paper.game.physics.arcade.angleToXY(arrow, ennemy.x, ennemy.y) + 1.6;\r\n                paper.game.physics.arcade.moveToObject(arrow, ennemy, 300);\r\n            }\r\n        }, this);\r\n    }, this);\r\n};\r\n\r\nTower.prototype = Object.create(Phaser.Sprite.prototype);\r\nTower.prototype.constructor = Tower;\r\n\r\n"
}, function (n, r) {
    n.exports = "var fr = {\r\n    LOADING: 'Chargement...',\r\n    LANGUAGE: 'Language',\r\n    FR: 'Français',\r\n    EN: 'English',\r\n    ES: 'Español',\r\n    RETURN: 'return',\r\n    NO_CONNECTION: 'Network issues',\r\n    PLAY: 'Rejoindre une partie',\r\n    WAITING_MENU: 'Attente d\\'une partie...',\r\n    WAITING_READY: 'L\\'adversaire n\\'est pas encore prêt\\nVeuillez patienter...',\r\n    WIN: 'Vous avez GAGNÉ !',\r\n    LOOSE: 'Vous avez perdu...',\r\n    READY: 'Prêt',\r\n    CONNECTION: 'Créer un compte/Se connecter',\r\n    LOGGED: 'Accès authorisé',\r\n    LOG_OR_PASS: 'Saisissez un mot de passe et une adresse Email',\r\n    EMAIL_ALLREADY_EXIST: 'L\\'Email existe déjà',\r\n    PSEUDO_ALLREADY_EXIST: 'le pseudonyme existe déjà',\r\n    DONT_MATCH: 'L\\'Email et le mot de passe ne correspondent pas',\r\n    HI: 'Bienvenue ',\r\n    RATIO: 'Votre ratio est de ',\r\n    SURE: 'Êtes vous sure ?',\r\n    YES: 'Oui',\r\n    NO: 'Non'\r\n};\r\n\r\n\r\nvar en = {\r\n    LOADING: 'Loading...',\r\n    LANGUAGE: 'Language',\r\n    FR: 'Français',\r\n    EN: 'English',\r\n    ES: 'Español',\r\n    RETURN: 'Back',\r\n    NO_CONNECTION: 'Pas de connexion',\r\n    PLAY: 'Play',\r\n    WAITING_MENU: 'Waiting for a game...',\r\n    WAITING_READY: 'Waiting for the other dude\\nto be ready...',\r\n    WIN: 'You WIN !',\r\n    LOOSE: 'You loose...',\r\n    READY: 'Ready',\r\n    CONNECTION: 'Sign up/in',\r\n    LOGGED: 'Acces granted',\r\n    LOG_OR_PASS: 'You must send the email and the password',\r\n    EMAIL_ALLREADY_EXIST: 'Email already Taken',\r\n    PSEUDO_ALLREADY_EXIST: 'Pseudonym already taken',\r\n    DONT_MATCH: 'The email or password don\\'t match',\r\n    HI: 'Welcome ',\r\n    RATIO: 'Your ratio is ',\r\n    SURE: 'Are you sure ?',\r\n    YES: 'Yes',\r\n    NO: 'No'\r\n};\r\n\r\nvar es = {\r\n    LOADING: 'Cargando...',\r\n    LANGUAGE: 'Idioma',\r\n    FR: 'Français',\r\n    EN: 'English',\r\n    ES: 'Español',\r\n    RETURN: 'Espalda',\r\n    NO_CONNECTION: 'No hay conexión',\r\n    PLAY: 'Jugar',\r\n    WAITING_MENU: 'Esperando un juego...',\r\n    WAITING_READY: 'Esperando que el otro amigo esté listo...',\r\n    WIN: 'habéis ganado !',\r\n    LOOSE: 'habéis perdido...',\r\n    READY: 'Listo',\r\n    CONNECTION: 'Regístrate/Registrarse',\r\n    LOGGED: 'Acceso concedido',\r\n    LOG_OR_PASS: 'Debe enviar el correo electrónico y la contraseña',\r\n    EMAIL_ALLREADY_EXIST: 'Correo electrónico ya tomado',\r\n    PSEUDO_ALLREADY_EXIST: 'Seudónimo ya tomado',\r\n    DONT_MATCH: 'El correo electrónico o la contraseña no coinciden',\r\n    HI: 'Bienvenido ',\r\n    RATIO: 'Su ratio es ',\r\n    SURE: 'Seguro ?',\r\n    YES: 'Si',\r\n    NO: 'No'\r\n};"
}, function (n, r) {
    n.exports = "$('#close-popup').click(function () {\r\n    $('.form').toggle();\r\n});\r\n\r\n$('.form').find('input, textarea').on('keyup blur focus', function (e) {\r\n\r\n    var $this = $(this),\r\n        label = $this.prev('label');\r\n\r\n    if (e.type === 'keyup') {\r\n        if ($this.val() === '') {\r\n            label.removeClass('active highlight');\r\n        } else {\r\n            label.addClass('active highlight');\r\n        }\r\n    } else if (e.type === 'blur') {\r\n        if ($this.val() === '') {\r\n            label.removeClass('active highlight');\r\n        } else {\r\n            label.removeClass('highlight');\r\n        }\r\n    } else if (e.type === 'focus') {\r\n\r\n        if ($this.val() === '') {\r\n            label.removeClass('highlight');\r\n        }\r\n        else if ($this.val() !== '') {\r\n            label.addClass('highlight');\r\n        }\r\n    }\r\n\r\n});\r\n$('#signup-btn').click(function (e) {\r\n    this\r\n    e.preventDefault();\r\n    $('#signup').show();\r\n    $('#login').hide();\r\n    $(this).parent().addClass('active');\r\n    $(this).parent().siblings().removeClass('active');\r\n});\r\n$('#login-btn').click(function (e) {\r\n    e.preventDefault();\r\n    $('#login').show();\r\n    $('#signup').hide();\r\n    $(this).parent().addClass('active');\r\n    $(this).parent().siblings().removeClass('active');\r\n});\r\n\r\n$('#login-form').on('submit', function (e)  {\r\n    e.preventDefault();\r\n\r\n    var body = {\r\n        email: $('#login-mail').val(),\r\n        password: $('#password').val()\r\n    };\r\n    $.ajax({\r\n        url: '/login',\r\n        type: 'POST',\r\n        data: body,\r\n        success: function (data) {\r\n            user_infos = data.infos;\r\n            window.localStorage.setItem('jtw', data.id_token);\r\n            $('.form').toggle();\r\n            paper.game.msg = lang.LOGGED;\r\n            paper.game.stateTransition.to('Menu');\r\n        },\r\n        error: function (err) {\r\n            var response = JSON.parse(err.response);\r\n            switch (response.type) {\r\n                case 1:\r\n                    $('.server_msg').append(lang.LOG_OR_PASS);\r\n                        break;\r\n                case 4:\r\n                    $('.server_msg').append(lang.DONT_MATCH);\r\n                    break;\r\n                default: $('.server_msg').append('');\r\n            }\r\n        }\r\n    });\r\n});\r\n\r\n$('#register-form').on('submit', function(e) {\r\n    e.preventDefault();\r\n    var body = {\r\n        email: $('#email').val(),\r\n        pseudo: $('#pseudo').val(),\r\n        password1: $('#password1').val(),\r\n        password2: $('#password2').val()\r\n    };\r\n    $.ajax({\r\n        url: '/register',\r\n        type: 'POST',\r\n        data: body,\r\n        success: function (data) {\r\n            user_infos = data.infos;\r\n            window.localStorage.setItem('jtw', data.id_token);\r\n            $('.form').toggle();\r\n            paper.game.msg = lang.LOGGED;\r\n            paper.game.stateTransition.to('Menu');\r\n        },\r\n        error: function (err) {\r\n            var response = JSON.parse(err.response);\r\n            switch (response.type) {\r\n                case 1:\r\n                    $('.server_msg').append(lang.LOG_OR_PASS);\r\n                    break;\r\n                case 2:\r\n                    $('.server_msg').append(lang.EMAIL_ALLREADY_EXIST);\r\n                    break;\r\n                case 3:\r\n                    $('.server_msg').append(lang.PSEUDO_ALLREADY_EXIST);\r\n                    break;\r\n                default: $('.server_msg').html('');\r\n            }\r\n        }\r\n    });\r\n});"
}, function (n, r) {
    n.exports = "// Large scoped variable\r\nvar gameId, lang = en, sound = true, deadWarior = 1;\r\nvar map, all, wallGroup, ennemies, allies, tileGroup, arrows, wallSwitch = false;\r\nvar caracter1, caracter2, caracter3, caracter4, caracter5, tower1, tower2;\r\nvar ennemy1, ennemy2, ennemy3, ennemy4, ennemy5, ennemyTower1, ennemyTower2, explosions;\r\nvar wallCount = 0, wallButton, wallsArray = [], undo = [], sword1, sword2, pare;\r\nvar theirFlag = {x: 0, y: 0}, ourFlag, readyCheck, readyButton = false, undoButton, readySwitch = false, gameOn = false;\r\nvar button, loginButton, logoutButton, start, ambiance, langButton, soundFlag = true, user_infos = false;\r\n\r\nif (window.localStorage.getItem('lang') != null) {\r\n    if (window.localStorage.getItem('lang') == 'fr') {\r\n        lang = fr;\r\n    } else if (window.localStorage.getItem('lang') == 'es') {\r\n        lang = es;\r\n    } else {\r\n        lang = en;\r\n    }\r\n}\r\n\r\nif (window.localStorage.getItem('sound') != null) {\r\n    if (window.localStorage.getItem('sound') == 'on') {\r\n        sound = true;\r\n    } else {\r\n        sound = false;\r\n    }\r\n}\r\n\r\nif (window.localStorage.getItem('jtw') != null) {\r\n    var body = {\r\n        token: window.localStorage.getItem('jtw')\r\n    };\r\n    $.ajax({\r\n        url: '/refresh',\r\n        type: 'POST',\r\n        data: body,\r\n        success: function (data) {\r\n            user_infos = data.infos;\r\n            window.localStorage.setItem('jtw', data.id_token);\r\n        },\r\n        error: function (err) {\r\n        }\r\n    });\r\n}\r\n\r\npaper.game = new Phaser.Game(480, 800, Phaser.AUTO, '', null, false, false); // 1440, 2400\r\npaper.game.state.add('Preload', paper.Preload);\r\npaper.game.state.add('Menu', paper.Menu);\r\npaper.game.state.add('Language', paper.Language);\r\npaper.game.state.add('Login', paper.Login);\r\npaper.game.state.add('Logout', paper.Logout);\r\npaper.game.state.add('Game', paper.Game);\r\npaper.game.state.add('GameOver', paper.GameOver);\r\npaper.game.state.start('Preload');\r\npaper.game.msg = '';"
}, function (n, r) {
    n.exports = "try {\r\n    socket = io.connect('https://flagwarriors.herokuapp.com');\r\n} catch (e) {\r\n    paper.game.msg = lang.NO_CONNECTION;\r\n    gameId = false;\r\n}\r\nvar ennemyData = false;\r\n\r\nfunction readyAction(readyButton) {\r\n    readySwitch = true;\r\n    tileGroup.removeAll();\r\n    readyButton.destroy();\r\n    undoButton.destroy();\r\n    socket.emit('ready', {\r\n            warriors: [\r\n                {x: caracter1.x, y: caracter1.y, name: '1'},\r\n                {x: caracter2.x, y: caracter2.y, name: '2'},\r\n                {x: caracter3.x, y: caracter3.y, name: '3'},\r\n                {x: caracter4.x, y: caracter4.y, name: '4'},\r\n                {x: caracter5.x, y: caracter5.y, name: '5'}\r\n            ],\r\n            towers: [\r\n                {x: tower1.x, y: tower1.y, name: '1'},\r\n                {x: tower2.x, y: tower2.y, name: '2'}\r\n            ],\r\n            walls: wallsArray,\r\n            gameId: gameId\r\n        }\r\n    );\r\n\r\n    if (ennemyData) {\r\n        addEnnemies(ennemyData);\r\n    } else {\r\n        paper.game.waitText1 = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY - 32, lang.WAITING_READY, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        paper.game.waitText1.anchor.setTo(0.5);\r\n    }\r\n}\r\n\r\nsocket.on('ready', function (data) {\r\n    ennemyData = data;\r\n    if (readySwitch) {\r\n        addEnnemies(ennemyData);\r\n        ennemyData = false;\r\n    }\r\n\r\n    if (paper.game.waitText1)\r\n        paper.game.waitText1.destroy();\r\n\r\n    if (paper.game.waitText2)\r\n        paper.game.waitText2.destroy();\r\n\r\n    gameOn = true;\r\n});\r\n\r\nfunction addEnnemies(data) {\r\n    undoButton.destroy();\r\n    readyButton.destroy();\r\n    data.warriors.forEach(function (warrior) {\r\n        window['ennemy' + warrior.name] = new Ennemy(480 - warrior.x, 800 - warrior.y, warrior.name);\r\n        ennemies.push(window['ennemy' + warrior.name]);\r\n        all.add(window['ennemy' + warrior.name]);\r\n    });\r\n\r\n    data.towers.forEach(function (tower) {\r\n        window['ennemyTower' + tower.name] = new Tower(480 - tower.x, 800 - tower.y, tower.name, allies);\r\n        // ennemies.push(window['ennemyTower' + tower.name]); // Later\r\n        all.add(window['ennemyTower' + tower.name]);\r\n        map.setObstacle(window['ennemyTower' + tower.name].x, window['ennemyTower' + tower.name].y);\r\n    });\r\n\r\n    data.walls.forEach(function (wall) {\r\n        window['wallen' + wall.name] = paper.game.add.sprite(480 - wall.x, 800 - wall.y, 'walle');\r\n        paper.game.physics.arcade.enable(window['wallen' + wall.name]);\r\n        window['wallen' + wall.name].anchor.setTo(0.5, 0.5);\r\n        // ennemies.push(window['wallen' + tower.name]); // Later\r\n        all.add(window['wallen' + wall.name]);\r\n        all.sort('x', Phaser.Group.SORT_ACENDING);\r\n        all.sort('y', Phaser.Group.SORT_ACENDING);\r\n        window['wallen' + wall.name].body.immovable = true;\r\n        map.setObstacle(480 - wall.x, 800 - wall.y);\r\n    });\r\n\r\n    theirFlag = paper.game.add.sprite(240, 24, 'flags');\r\n    theirFlag.scale.setTo(2);\r\n    theirFlag.anchor.setTo(0.5, 0.5);\r\n    theirFlag.animations.add('float', [9, 10, 11, 12]);\r\n    theirFlag.animations.play('float', 5, true);\r\n    all.add(theirFlag);\r\n\r\n    socket.on('is_moving', function (data) {\r\n        window['ennemy' + data.name].newPosX = Math.abs(480 - data.nextx);\r\n        window['ennemy' + data.name].newPosY = Math.abs(800 - data.nexty);\r\n    });\r\n\r\n    socket.on('set_obstacle', function (data) {\r\n        map.caracterObstacle(16 - data.y, 54 - data.x, data.value);\r\n    });\r\n\r\n    socket.on('attack', function (data) {\r\n        window['caracter' + data.name].damage(data.damage);\r\n    });\r\n\r\n    socket.on('got_flag', function (data) {\r\n        ourFlag.x = window['ennemy' + data.name].x;\r\n        ourFlag.y = window['ennemy' + data.name].y - 24;\r\n    });\r\n\r\n    socket.on('death', function (data) {\r\n        window['ennemy' + data.name].kill();\r\n    });\r\n\r\n    socket.on('we_have_a_winner', function () {\r\n        var looser = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.LOOSE, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        looser.anchor.setTo(0.5);\r\n        if (logged) {\r\n            var body = {\r\n                token: window.localStorage.getItem('jtw'),\r\n                victory: false,\r\n                defeat: true\r\n            };\r\n            $.ajax({\r\n                url: '/update_ratio',\r\n                type: 'PUT',\r\n                data: body,\r\n                success: function (data) {\r\n                    user_infos = data.infos;\r\n                },\r\n                error: function (err) {\r\n                }\r\n            });\r\n        }\r\n        paper.game.paused = true;\r\n\r\n    });\r\n\r\n    socket.on('we_have_a_looser', function () {\r\n        var winner = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WIN, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        winner.anchor.setTo(0.5);\r\n        if (logged) {\r\n            var body = {\r\n                token: window.localStorage.getItem('jtw'),\r\n                victory: false,\r\n                defeat: true\r\n            };\r\n            $.ajax({\r\n                url: '/update_ratio',\r\n                type: 'PUT',\r\n                data: body,\r\n                success: function (data) {\r\n                    user_infos = data.infos;\r\n                },\r\n                error: function (err) {\r\n                }\r\n            });\r\n        }\r\n        paper.game.paused = true;\r\n    });\r\n}\r\n\r\n"
}, function (n, r) {
    n.exports = "paper.Game = function () {\r\n};\r\n\r\npaper.Game.prototype = {\r\n\r\n    create: function () {\r\n\r\n        var background = this.add.image(0, 0, 'background');\r\n\r\n        //tile map\r\n        tileGroup = this.add.group();\r\n        map = new Map(this, tileGroup);\r\n        map.spawnTiles();\r\n\r\n        // Sword sounds\r\n        sword1 = paper.game.add.audio('sword1');\r\n        sword2 = paper.game.add.audio('sword2');\r\n        pare = paper.game.add.audio('pare');\r\n\r\n        //groups\r\n        all = this.add.group();\r\n        allies = [];\r\n        ennemies = [];\r\n        arrows = this.add.group();\r\n        arrows.createMultiple(90, 'arrow');\r\n\r\n        ourFlag = this.add.sprite(240, 776, 'flags');\r\n        ourFlag.scale.setTo(2);\r\n        ourFlag.anchor.setTo(0.5, 0.5);\r\n        ourFlag.animations.add('float', [4, 5, 6, 7]);\r\n        ourFlag.animations.play('float', 5, true);\r\n        all.add(ourFlag);\r\n\r\n        explosions = this.add.group();\r\n        explosions.createMultiple(90, 'kaboom');\r\n        explosions.forEach(function (kaboom) {\r\n            kaboom.anchor.x = 0.4;\r\n            kaboom.anchor.y = 0.4;\r\n            kaboom.animations.add('kaboom');\r\n        });\r\n\r\n        //buttons\r\n        var warriorButton = this.add.image(-16, 772, 'warrior');\r\n        warriorButton.scale.setTo(2);\r\n        wallButton = this.add.button(49, 772, 'walle', wallAction);\r\n        var towerButton = this.add.image(96, 772, 'tower');\r\n\r\n        // Drag buttons\r\n        var warriorDrag = this.add.image(16, 804, 'warrior');\r\n        warriorDrag.anchor.setTo(0.5, 0.5);\r\n        warriorDrag.scale.setTo(2);\r\n        warriorDrag.inputEnabled = true;\r\n        warriorDrag.input.enableDrag();\r\n        warriorDrag.events.onDragStart.add(spriteDragStart, this);\r\n        warriorDrag.events.onDragUpdate.add(onDragSprite, this);\r\n        warriorDrag.events.onDragStop.add(addWarrior, this);\r\n\r\n        var towerDrag = this.add.image(120, 812, 'tower');\r\n        towerDrag.anchor.setTo(0.5, 0.5);\r\n        towerDrag.inputEnabled = true;\r\n        towerDrag.input.enableDrag();\r\n        towerDrag.events.onDragStart.add(spriteDragStart, this);\r\n        towerDrag.events.onDragUpdate.add(onDragSprite, this);\r\n        towerDrag.events.onDragStop.add(addTower, this);\r\n\r\n        function onDragSprite(sprite) {\r\n            if (sprite.y < 384 || sprite.y > 750) {\r\n                sprite.tint = 0xFF7F50;\r\n            } else {\r\n                sprite.tint = 0xFFFFFF;\r\n            }\r\n        }\r\n\r\n        // Caracter selection handler\r\n        function spriteDragStart() {\r\n            tileGroup.forEach(function (tile) {\r\n                tile.alpha = 0.3;\r\n            });\r\n            allies.forEach(function (caracter) {\r\n                caracter.selected = false;\r\n            }, this);\r\n        }\r\n\r\n        // i for warriors, j for towers\r\n        var i = 1, j = 1;\r\n\r\n        function addWarrior(pointer) {\r\n            if (pointer.y > 384) {\r\n                window['caracter' + i] = new Caracter(((pointer.x / 32) | 0) * 32 + 16, ((pointer.y / 32) | 0) * 32 + 16, i); // Bitwise\r\n                window['caracter' + i].selected = true;\r\n                all.sort('y', Phaser.Group.SORT_ACENDING);\r\n                undo.push({type: 'caracter', name: i});\r\n                i++;\r\n                warriorDrag.x = 16;\r\n                warriorDrag.y = 804;\r\n                warriorDrag.tint = '0xFFFFFF';\r\n                if (i == 6) {\r\n                    warriorDrag.kill();\r\n                    warriorButton.kill();\r\n                    readyCheck();\r\n                }\r\n            } else {\r\n                warriorDrag.x = 16;\r\n                warriorDrag.y = 804;\r\n                warriorDrag.tint = '0xFFFFFF';\r\n            }\r\n\r\n            tileGroup.forEach(function (tile) {\r\n                tile.alpha = 0;\r\n            });\r\n        }\r\n\r\n        function addTower(pointer) {\r\n            tileGroup.forEach(function (tile) {\r\n                tile.alpha = 0;\r\n            });\r\n\r\n            if (pointer.y > 384) {\r\n                window['tower' + j] = new Tower(Math.round(pointer.x / 32) * 32, Math.round(pointer.y / 32) * 32, j, ennemies);\r\n                allies.push(window['tower' + j]);\r\n                all.sort('x', Phaser.Group.SORT_ACENDING);\r\n                all.sort('y', Phaser.Group.SORT_ACENDING);\r\n                map.setObstacle(Math.round(pointer.x / 32) * 32, Math.round(pointer.y / 32) * 32);\r\n                window['tower' + j].arrowAttack;\r\n                undo.push({type: 'tower', name: j});\r\n                j++;\r\n                towerDrag.x = 120;\r\n                towerDrag.y = 812;\r\n                towerDrag.tint = '0xFFFFFF';\r\n                if (j == 3) {\r\n                    readyCheck();\r\n                    towerDrag.kill();\r\n                    towerButton.kill();\r\n                }\r\n            } else {\r\n                towerDrag.x = 120;\r\n                towerDrag.y = 812;\r\n                towerDrag.tint = '0xFFFFFF';\r\n            }\r\n        }\r\n\r\n        function wallAction() {\r\n            wallSwitch = !wallSwitch;\r\n            if (wallSwitch) {\r\n                tileGroup.forEach(function (tile) {\r\n                    tile.alpha = 0.3;\r\n                });\r\n                wallButton.tint = '0x00FF00';\r\n                paper.game.input.addMoveCallback(map.buildWall, this);\r\n            } else {\r\n                tileGroup.forEach(function (tile) {\r\n                    tile.alpha = 0;\r\n                });\r\n                wallButton.tint = '0xFFFFFF';\r\n            }\r\n        }\r\n\r\n        readyCheck = function () {\r\n            if (wallCount > 13 && i > 5 && j > 2) {\r\n                readyButton = this.add.button(416, 768, 'ready', readyAction);\r\n            }\r\n        }.bind(this);\r\n\r\n        // Undo button handleler\r\n        undoButton = this.add.button(350, 770, 'undo', function () {\r\n            if (undo.length > 0) {\r\n                if (readyButton) readyButton.destroy();\r\n                var obj = undo.pop();\r\n                switch (obj.type) {\r\n                    case 'tower':\r\n                        window['tower' + obj.name].destroy();\r\n                        if (!towerDrag.alive) towerDrag.revive();\r\n                        if (!towerButton.alive) towerButton.revive();\r\n                        j--;\r\n                        wallAction();\r\n                        break;\r\n                    case 'walle':\r\n                        window['walle' + obj.name].destroy();\r\n                        if (!wallButton.alive) {\r\n                            wallButton.revive();\r\n                            wallAction();\r\n                        }\r\n                        wallGroup.createMultiple(1, 'walle');\r\n                        wallCount--;\r\n                        break;\r\n                    case 'caracter':\r\n                        window['caracter' + obj.name].destroy();\r\n                        if (!warriorDrag.alive) warriorDrag.revive();\r\n                        if (!warriorButton.alive) warriorButton.revive();\r\n                        i--;\r\n                        wallAction();\r\n                        break;\r\n                }\r\n            }\r\n        });\r\n    },\r\n\r\n    update: function () {\r\n\r\n        this.physics.arcade.collide(arrows, all);\r\n\r\n        if (caracter1)\r\n            caracter1.getFlag();\r\n        if (caracter2)\r\n            caracter2.getFlag();\r\n        if (caracter3)\r\n            caracter3.getFlag();\r\n        if (caracter4)\r\n            caracter4.getFlag();\r\n        if (caracter5)\r\n            caracter5.getFlag();\r\n\r\n        if (this.physics.arcade.distanceToXY(theirFlag, 240, 774) < 16) {\r\n            socket.emit('we_have_a_winner', {gameId: gameId});\r\n            var winner = this.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WIN, {\r\n                fill: '#000000',\r\n                font: 'bold 32px Almendra'\r\n            });\r\n            winner.anchor.setTo(0.5);\r\n            paper.game.paused = true;\r\n        }\r\n    }\r\n}\r\n"
}, function (n, r) {
    n.exports = "paper.GameOver = function () {\r\n};\r\n\r\npaper.GameOver.prototype = {\r\n\r\n    preload: function () {\r\n    },\r\n\r\n    create: function () {\r\n    },\r\n\r\n    startLoad: function () {\r\n    },\r\n\r\n    update: function () {\r\n    }\r\n};\r\n"
}, function (n, r) {
    n.exports = "paper.Language = function () {\r\n};\r\n\r\npaper.Language.prototype = {\r\n\r\n    create: function () {\r\n\r\n        var background = this.add.image(0, 0, 'paper');\r\n        paper.game.msg = '';\r\n\r\n        var backButton = paper.game.add.text(400, 740, lang.RETURN, {fill: '#000000', font: 'bold 24px Almendra'});\r\n        backButton.inputEnabled = true;\r\n        backButton.anchor.setTo(0.5);\r\n        backButton.events.onInputDown.add(function () {\r\n            this.game.stateTransition.to('Menu');\r\n        }, this);\r\n\r\n        var soundButton = this.add.button(440, 5, 'sound', function () {\r\n            if (sound) {\r\n                paper.game.sound.stopAll();\r\n                this.play('off');\r\n                sound = false;\r\n                window.localStorage.setItem('sound', 'off');\r\n            } else {\r\n                ambiance.play();\r\n                this.play('on');\r\n                sound = true;\r\n                window.localStorage.setItem('sound', 'on');\r\n            }\r\n\r\n        }, soundButton);\r\n\r\n        soundButton.animations.add('on', [0]);\r\n        soundButton.animations.add('off', [1]);\r\n\r\n        if (sound) {\r\n            soundButton.play('on');\r\n        } else {\r\n            soundButton.play('off');\r\n        }\r\n\r\n        var frButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY - 50, lang.FR, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        paper.game.physics.arcade.enable(frButton);\r\n        frButton.inputEnabled = true;\r\n        frButton.anchor.setTo(0.5);\r\n        frButton.events.onInputDown.add(function () {\r\n            frButton.text = '<' + lang.FR + '>';\r\n            enButton.text = lang.EN;\r\n            esButton.text = lang.ES;\r\n            window.localStorage.setItem('lang', 'fr');\r\n            lang = fr;\r\n        }, this);\r\n\r\n        var enButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.EN, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        paper.game.physics.arcade.enable(enButton);\r\n        enButton.inputEnabled = true;\r\n        enButton.anchor.setTo(0.5);\r\n        enButton.events.onInputDown.add(function () {\r\n            enButton.text = '<' + lang.EN + '>';\r\n            frButton.text = lang.FR;\r\n            esButton.text = lang.ES;\r\n            window.localStorage.setItem('lang', 'en');\r\n            lang = en;\r\n        }, this);\r\n\r\n        var esButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY + 50, lang.ES, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        paper.game.physics.arcade.enable(esButton);\r\n        esButton.inputEnabled = true;\r\n        esButton.anchor.setTo(0.5);\r\n        esButton.events.onInputDown.add(function () {\r\n            esButton.text = '<' + lang.ES + '>';\r\n            frButton.text = lang.FR;\r\n            enButton.text = lang.EN;\r\n            window.localStorage.setItem('lang', 'es');\r\n            lang = es;\r\n        }, this);\r\n\r\n        if (window.localStorage.getItem(\"lang\") != null) {\r\n            if (window.localStorage.getItem(\"lang\") == 'fr') frButton.text = '<' + lang.FR + '>';\r\n            if (window.localStorage.getItem(\"lang\") == 'es') esButton.text = '<' + lang.ES + '>';\r\n            if (window.localStorage.getItem(\"lang\") == 'en') enButton.text = '<' + lang.EN + '>';\r\n        } else {\r\n            enButton.text = '<' + lang.EN + '>';\r\n        }\r\n    }\r\n};\r\n"
}, function (n, r) {
    n.exports = "paper.Login = function () {\r\n};\r\n\r\npaper.Login.prototype = {\r\n\r\n    create: function () {\r\n\r\n        var background = this.add.image(0, 0, 'paper');\r\n        paper.game.msg = '';\r\n\r\n        $('.form').toggle();\r\n\r\n        var backButton = paper.game.add.text(400, 740, lang.RETURN, {fill: '#000000', font: 'bold 24px Almendra'});\r\n        backButton.inputEnabled = true;\r\n        backButton.anchor.setTo(0.5);\r\n        backButton.events.onInputDown.add(function () {\r\n            this.game.stateTransition.to('Menu');\r\n            $('.form').toggle();\r\n        }, this);\r\n    }\r\n};\r\n"
}, function (n, r) {
    n.exports = "paper.Logout = function () {\r\n};\r\n\r\npaper.Logout.prototype = {\r\n\r\n    create: function () {\r\n\r\n        var background = this.add.image(0, 0, 'paper');\r\n        paper.game.msg = '';\r\n\r\n        var sure = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.SURE, {\r\n            fill: '#000000',\r\n            font: 'bold 24px Almendra'\r\n        });\r\n        sure.anchor.setTo(0.5);\r\n        var yes = paper.game.add.text(paper.game.world.centerX - 30, paper.game.world.centerY + 30, lang.YES, {\r\n            fill: '#000000',\r\n            font: 'bold 20px Almendra'\r\n        });\r\n        var no = paper.game.add.text(paper.game.world.centerX + 30, paper.game.world.centerY + 30, lang.NO, {\r\n            fill: '#000000',\r\n            font: 'bold 20px Almendra'\r\n        });\r\n        yes.inputEnabled = true;\r\n        yes.anchor.setTo(0.5);\r\n        yes.events.onInputDown.add(function () {\r\n            window.localStorage.removeItem('jtw');\r\n            user_infos = false;\r\n            this.game.stateTransition.to('Menu');\r\n        }, this);\r\n        no.inputEnabled = true;\r\n        no.anchor.setTo(0.5);\r\n        no.events.onInputDown.add(function () {\r\n            this.game.stateTransition.to('Menu');\r\n        }, this);\r\n    }\r\n};\r\n"
}, function (n, r) {
    n.exports = "paper.Menu = function () {\r\n};\r\n\r\npaper.Menu.prototype = {\r\n\r\n    create: function () {\r\n        var background = this.add.image(0, 0, 'paper');\r\n        if (soundFlag)\r\n            ambiance = this.add.audio('ambiance');\r\n        start = this.add.audio('start');\r\n        if (sound && soundFlag)\r\n            ambiance.play();\r\n        soundFlag = false;\r\n        button = this.add.button(paper.game.world.centerX, paper.game.world.centerY, 'start', this.start, this);\r\n        button.anchor.setTo(0.5);\r\n        var msg = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY + 100, paper.game.msg, {fill: '#000000'});\r\n        msg.anchor.setTo(0.5);\r\n\r\n        langButton = paper.game.add.text(10, 7, lang.LANGUAGE, {fill: '#000000', font: 'bold 20px Almendra'});\r\n        paper.game.physics.arcade.enable(langButton);\r\n        langButton.inputEnabled = true;\r\n        button.anchor.setTo(0.5);\r\n        langButton.events.onInputDown.add(function () {\r\n            this.game.stateTransition.to('Language');\r\n        }, this);\r\n        if (!user_infos) {\r\n            loginButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY + 70, lang.CONNECTION, {fill: '#000000', font: 'bold 20px Almendra'});\r\n            paper.game.physics.arcade.enable(loginButton);\r\n            loginButton.inputEnabled = true;\r\n            loginButton.anchor.setTo(0.5);\r\n            loginButton.events.onInputDown.add(function () {\r\n                this.state.start('Login');\r\n            }, this);\r\n        } else {\r\n            logoutButton = this.add.button(400, 8, 'logout', function () {\r\n                this.game.stateTransition.to('Logout');\r\n            }, this);\r\n            logoutButton.scale.setTo(0.20);\r\n            var ratio = ((1/user_infos.defeats*user_infos.victories)*10|0)/10;\r\n            this.userHi = paper.game.add.text(50, 100, lang.HI + user_infos.pseudo, {fill: '#000000', font: 'bold 20px Almendra'});\r\n            this.userRatio = paper.game.add.text(50, 140, lang.RATIO + ratio, {fill: '#000000', font: 'bold 20px Almendra'});\r\n        }\r\n\r\n        var soundButton = this.add.button(440, 5, 'sound', function () {\r\n            if (sound) {\r\n                paper.game.sound.stopAll();\r\n                this.play('off');\r\n                sound = false;\r\n                window.localStorage.setItem('sound', 'off');\r\n            } else {\r\n                ambiance.play();\r\n                this.play('on');\r\n                sound = true;\r\n                window.localStorage.setItem('sound', 'on');\r\n            }\r\n\r\n        }, soundButton);\r\n\r\n        soundButton.animations.add('on', [0]);\r\n        soundButton.animations.add('off', [1]);\r\n\r\n        if (sound) {\r\n            soundButton.play('on');\r\n        } else {\r\n            soundButton.play('off');\r\n        }\r\n    },\r\n\r\n    start: function () {\r\n        socket.emit('avalable_player');\r\n\r\n        socket.on('game_id', function (data) {\r\n            console.log('game id: ' + data.gameId);\r\n            gameId = data.gameId;\r\n            if (data.gameOn) {\r\n                this.game.stateTransition.to('Game', true, false);\r\n            }\r\n        }.bind(this));\r\n\r\n        button.destroy();\r\n        if (logoutButton) logoutButton.destroy();\r\n        langButton.text = '';\r\n        loginButton.text = '';\r\n        if (this.userHi) this.userHi.text = '';\r\n        if (this.userRatio) this.userRatio.text = '';\r\n        var waitText = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WAITING_MENU, {\r\n            fill: '#000000',\r\n            font: 'bold 32px Almendra'\r\n        });\r\n        waitText.anchor.setTo(0.5);\r\n        socket.on('game_on', function () {\r\n            this.game.stateTransition.to('Game', true, false);\r\n        }.bind(this));\r\n\r\n        ambiance.stop();\r\n        if (sound)\r\n            start.play();\r\n    }\r\n};\r\n"
}, function (n, r) {
    n.exports = "paper = {};\r\npaper.Preload = function () {\r\n    this.loadtext;\r\n};\r\nWebFontConfig = {\r\n    google: {\r\n        families: ['Almendra']\r\n    }\r\n};\r\n\r\npaper.Preload.prototype = {\r\n\r\n    create: function () {\r\n        this.game.load.script('webfont', './webfont.js');\r\n        //scaling options\r\n        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\r\n        this.scale.pageAlignHorizontally = true;\r\n        this.scale.pageAlignVertically = true;\r\n        this.scale.setScreenSize;\r\n        this.game.physics.startSystem(Phaser.Physics.ARCADE);\r\n\r\n        //Transistion plugin\r\n        this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);\r\n        this.game.stateTransition.configure({\r\n            duration: Phaser.Timer.SECOND * 0.8,\r\n            ease: Phaser.Easing.Exponential.InOut,\r\n            properties: {\r\n                alpha: 0,\r\n                scale: {\r\n                    x: 1.4,\r\n                    y: 1.4\r\n                }\r\n            }\r\n        });\r\n\r\n        this.loadText = this.add.text(paper.game.world.centerX / 2, paper.game.world.centerY, 'Chargement...', {fill: '#ffffff'});\r\n        this.load.onFileComplete.add(this.fileComplete, this);\r\n        this.load.onLoadComplete.add(this.loadComplete, this);\r\n\r\n        this.startLoad();\r\n    },\r\n\r\n    startLoad: function () {\r\n\r\n        this.load.spritesheet('warrior', 'assets/warrior.png', 32, 32, 40);\r\n        this.load.spritesheet('blueWarrior', 'assets/blueWarriors.png', 32, 32, 40);\r\n        this.load.spritesheet('flags', 'assets/flags.png', 16, 16);\r\n        this.load.spritesheet('skeleton', 'assets/skeleton.png', 32, 32);\r\n        this.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);\r\n        this.load.spritesheet('sound', 'assets/sound.png', 32, 32);\r\n        this.load.image('walle', 'assets/wall2.png');\r\n        this.load.image('tile', 'assets/empty.png');\r\n        this.load.image('tower', 'assets/tower.png');\r\n        this.load.image('arrow', 'assets/arrow.png');\r\n        this.load.image('background', 'assets/bg.png');\r\n        this.load.image('paper', 'assets/paper.png');\r\n        this.load.image('start', 'assets/start.png');\r\n        this.load.image('ready', 'assets/contour.png');\r\n        this.load.image('undo', 'assets/undo.png');\r\n        this.load.image('grid', 'assets/grid.png');\r\n        this.load.image('logout', 'assets/logout.png');\r\n        this.load.audio('ambiance', 'assets/ambiance.mp3');\r\n        this.load.audio('start', 'assets/start.mp3');\r\n        this.load.audio('canon', 'assets/canon.mp3');\r\n        this.load.audio('explosion', 'assets/explosion.mp3');\r\n        this.load.audio('sword1', 'assets/sword1.mp3');\r\n        this.load.audio('sword2', 'assets/sword2.mp3');\r\n        this.load.audio('pare', 'assets/pare.mp3');\r\n\r\n\r\n        this.load.start();\r\n    },\r\n\r\n    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {\r\n        this.loadText.setText(\"Chargement \" + progress + \"%\");\r\n    },\r\n\r\n    loadComplete: function () {\r\n        this.state.start('Menu');\r\n    }\r\n};\r\n"
}, function (n, r, t) {
    t(6), t(17), t(1), t(16), t(15), t(13), t(14), t(10), t(11), t(12), t(2), t(3), t(4), t(5), t(8), t(9), n.exports = t(7)
}]);
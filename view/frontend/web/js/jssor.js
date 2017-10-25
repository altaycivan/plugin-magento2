(function(j, h, c, g, d, k, f) { /*! Jssor */
    new(function() {});
    var e = j.$Jease$ = {
        $Swing: function(a) {
            return -c.cos(a * c.PI) / 2 + .5
        },
        $Linear: function(a) {
            return a
        },
        $InQuad: function(a) {
            return a * a
        },
        $OutQuad: function(a) {
            return -a * (a - 2)
        },
        $InOutQuad: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        },
        $InCubic: function(a) {
            return a * a * a
        },
        $OutCubic: function(a) {
            return (a -= 1) * a * a + 1
        },
        $InOutCubic: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        },
        $InQuart: function(a) {
            return a * a * a * a
        },
        $OutQuart: function(a) {
            return -((a -= 1) * a * a * a - 1)
        },
        $InOutQuart: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        },
        $InQuint: function(a) {
            return a * a * a * a * a
        },
        $OutQuint: function(a) {
            return (a -= 1) * a * a * a * a + 1
        },
        $InOutQuint: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        },
        $InSine: function(a) {
            return 1 - c.cos(c.PI / 2 * a)
        },
        $OutSine: function(a) {
            return c.sin(c.PI / 2 * a)
        },
        $InOutSine: function(a) {
            return -1 / 2 * (c.cos(c.PI * a) - 1)
        },
        $InExpo: function(a) {
            return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
        },
        $OutExpo: function(a) {
            return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
        },
        $InOutExpo: function(a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
        },
        $InCirc: function(a) {
            return -(c.sqrt(1 - a * a) - 1)
        },
        $OutCirc: function(a) {
            return c.sqrt(1 - (a -= 1) * a)
        },
        $InOutCirc: function(a) {
            return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
        },
        $InElastic: function(a) {
            if (!a || a == 1) return a;
            var b = .3,
                d = .075;
            return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
        },
        $OutElastic: function(a) {
            if (!a || a == 1) return a;
            var b = .3,
                d = .075;
            return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
        },
        $InOutElastic: function(a) {
            if (!a || a == 1) return a;
            var b = .45,
                d = .1125;
            return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
        },
        $InBack: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        $OutBack: function(a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        },
        $InOutBack: function(a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        },
        $InBounce: function(a) {
            return 1 - e.$OutBounce(1 - a)
        },
        $OutBounce: function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        },
        $InOutBounce: function(a) {
            return a < 1 / 2 ? e.$InBounce(a * 2) * .5 : e.$OutBounce(a * 2 - 1) * .5 + .5
        },
        $GoBack: function(a) {
            return 1 - c.abs(2 - 1)
        },
        $InWave: function(a) {
            return 1 - c.cos(a * c.PI * 2)
        },
        $OutWave: function(a) {
            return c.sin(a * c.PI * 2)
        },
        $OutJump: function(a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        },
        $InJump: function(a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        },
        $Early: c.ceil,
        $Late: c.floor
    };
    var b = j.$Jssor$ = new function() {
        var i = this,
            zb = /\S+/g,
            M = 1,
            jb = 2,
            mb = 3,
            lb = 4,
            pb = 5,
            N, t = 0,
            l = 0,
            u = 0,
            B = 0,
            C = 0,
            F = navigator,
            ub = F.appName,
            o = F.userAgent,
            A = h.documentElement,
            q = parseFloat;

        function Ib() {
            if (!N) {
                N = {
                    tg: "ontouchstart" in j || "createTouch" in h
                };
                var a;
                if (F.pointerEnabled || (a = F.msPointerEnabled)) N.Vd = a ? "msTouchAction" : "touchAction"
            }
            return N
        }

        function w(g) {
            if (!t) {
                t = -1;
                if (ub == "Microsoft Internet Explorer" && !!j.attachEvent && !!j.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    t = M;
                    u = q(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on B=@_jscript_version@*/ ;
                    l = h.documentMode || u
                } else if (ub == "Netscape" && !!j.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        f = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        t = jb;
                        l = q(o.substring(d + 8))
                    } else if (b >= 0) {
                        var i = o.substring(0, b).lastIndexOf("/");
                        t = f >= 0 ? lb : mb;
                        l = q(o.substring(i + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            t = M;
                            l = u = q(a[1])
                        }
                    }
                    if (c >= 0) C = q(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        t = pb;
                        l = q(a[2])
                    }
                }
            }
            return g == t
        }

        function r() {
            return w(M)
        }

        function ib() {
            return r() && (l < 6 || h.compatMode == "BackCompat")
        }

        function Ab() {
            return w(jb)
        }

        function kb() {
            return w(mb)
        }

        function Db() {
            return w(lb)
        }

        function ob() {
            return w(pb)
        }

        function eb() {
            return kb() && C > 534 && C < 535
        }

        function I() {
            w();
            return C > 537 || l > 42 || t == M && l >= 11
        }

        function gb() {
            return r() && l < 9
        }

        function fb(a) {
            var b, c;
            return function(g) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) {
                        var b = a;
                        if (d) b = h + e;
                        if (g.style[b] != f) return c = b
                    })
                }
                return c
            }
        }

        function db(b) {
            var a;
            return function(c) {
                a = a || fb(b)(c) || b;
                return a
            }
        }
        var O = db("transform");

        function tb(a) {
            return {}.toString.call(a)
        }
        var qb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            qb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (tb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function H(a) {
            return a == g ? String(a) : qb[tb(a)] || "object"
        }

        function rb(a) {
            for (var b in a) return d
        }

        function D(a) {
            try {
                return H(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function p(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function xb(b, a) {
            setTimeout(b, a || 0)
        }

        function E(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a && (c += (!a.indexOf(" ") ? "" : " ") + a);
            return c
        }

        function T(b, a) {
            if (l < 9) b.style.filter = a
        }

        function Hb(a, b) {
            if (a === f) a = b;
            return a
        }
        i.$Device = Ib;
        i.$IsBrowserIE = r;
        i.$IsBrowserIeQuirks = ib;
        i.$IsBrowserFireFox = Ab;
        i.$IsBrowserSafari = kb;
        i.$IsBrowserChrome = Db;
        i.$IsBrowserOpera = ob;
        i.Kf = I;
        fb("transform");
        i.$BrowserVersion = function() {
            return l
        };
        i.$BrowserEngineVersion = function() {
            return u || l
        };
        i.$WebKitVersion = function() {
            w();
            return C
        };
        i.$Delay = xb;
        i.If = function(a, b) {
            b.call(a);
            return G({}, a)
        };

        function Z(a) {
            a.constructor === Z.caller && a.Ub && a.Ub.apply(a, Z.caller.arguments)
        }
        i.Ub = Z;
        i.$GetElement = function(a) {
            if (i.vf(a)) a = h.getElementById(a);
            return a
        };

        function v(a) {
            return a || j.event
        }
        i.$EvtSrc = function(b) {
            b = v(b);
            var a = b.target || b.srcElement || h;
            if (a.nodeType == 3) a = i.Mc(a);
            return a
        };
        i.Nd = function(a) {
            a = v(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };
        i.$WindowSize = function() {
            var a = h.body;
            return {
                x: a.clientWidth || A.clientWidth,
                y: a.clientHeight || A.clientHeight
            }
        };

        function x(c, d, a) {
            if (a !== f) c.style[d] = a == f ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && j.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, g);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function bb(b, c, a, d) {
            if (a === f) {
                a = q(x(b, c));
                isNaN(a) && (a = g);
                return a
            }
            if (a == g) a = "";
            else d && (a += "px");
            x(b, c, a)
        }

        function m(c, a) {
            var d = a ? bb : x,
                b;
            if (a & 4) b = db(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Cb(b) {
            if (r() && u < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? q(a[1]) / 100 : 1
            } else return q(b.style.opacity || "1")
        }

        function Eb(b, a, f) {
            if (r() && u < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = E(h, [i], d);
                T(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var P = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!I()) P = G(P, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function Q(d, a) {
            var c = "";
            if (a) {
                if (r() && l && l < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                b.$Each(a, function(d, b) {
                    var a = P[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (R[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (I()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != f) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == f) a.$ScaleX = 1;
                    if (a.$ScaleY == f) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            d.style[O(d)] = c
        }
        i.tf = m("transformOrigin", 4);
        i.Af = m("backfaceVisibility", 4);
        i.Bf = m("transformStyle", 4);
        i.zf = m("perspective", 6);
        i.yf = m("perspectiveOrigin", 4);
        i.Mf = function(b, a) {
            if (r() && u < 9 || u < 10 && ib()) b.style.zoom = a == 1 ? "" : a;
            else {
                var c = O(b),
                    f = a == 1 ? "" : "scale(" + a + ")",
                    e = b.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = E(e, [g], f);
                b.style[c] = d
            }
        };
        i.$AddEvent = function(a, c, d, b) {
            a = i.$GetElement(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        i.V = function(a, c, d, b) {
            a = i.$GetElement(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        i.$FireEvent = function(c, b) {
            var a;
            if (h.createEvent) {
                a = h.createEvent("HTMLEvents");
                a.initEvent(b, k, k);
                c.dispatchEvent(a)
            } else {
                var d = "on" + b;
                a = h.createEventObject();
                c.fireEvent(d, a)
            }
        };
        i.$CancelEvent = function(a) {
            a = v(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = k
        };
        i.$StopEvent = function(a) {
            a = v(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        i.$CreateCallback = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        i.$InnerText = function(a, b) {
            if (b == f) return a.textContent || a.innerText;
            var c = h.createTextNode(b);
            i.Ic(a);
            a.appendChild(c)
        };
        i.$InnerHtml = function(a, b) {
            if (b == f) return a.innerHTML;
            a.innerHTML = b
        };
        i.$ClearInnerHtml = function(a) {
            a.innerHTML = ""
        };
        i.$Children = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function sb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (X(a, b) == c) return a;
                    if (!e) {
                        var d = sb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        i.$FindChild = sb;

        function W(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    X(a, b) == d && c.push(a);
                    if (!f) {
                        var e = W(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function nb(a, c, d) {
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = nb(a, c, d);
                        if (b) return b
                    }
                }
        }
        i.bg = nb;
        i.Pf = function(b, a) {
            return b.getElementsByTagName(a)
        };
        i.Nb = function(a, f, d) {
            d = d || "u";
            var e;
            do {
                if (a.nodeType == 1) {
                    var c = b.$AttributeEx(a, d);
                    if (c && c == Hb(f, c)) {
                        e = a;
                        break
                    }
                }
                a = b.Mc(a)
            } while (a && a != h.body);
            return e
        };

        function G() {
            var e = arguments,
                d, c, b, a, h = 1 & e[0],
                g = 1 + h;
            d = e[g - 1] || {};
            for (; g < e.length; g++)
                if (c = e[g])
                    for (b in c) {
                        a = c[b];
                        if (a !== f) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (D(i) || D(a)) ? G(h, {}, i, a) : a
                        }
                    }
            return d
        }
        i.s = G;

        function ab(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (D(a) && D(b)) {
                        a = ab(a, b);
                        e = !rb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        i.Xd = function(a) {
            return H(a) == "function"
        };
        i.vf = function(a) {
            return H(a) == "string"
        };
        i.Qb = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        i.$Each = n;
        i.Zd = D;

        function U(a) {
            return h.createElement(a)
        }
        i.$CreateElement = U;
        i.$CreateDiv = function() {
            return U("DIV")
        };
        i.Sf = function() {
            return U("SPAN")
        };
        i.ae = function() {};

        function y(b, c, a) {
            if (a == f) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function X(a, b) {
            return y(a, b) || y(a, "data-" + b)
        }
        i.$Attribute = y;
        i.$AttributeEx = X;
        i.mc = function(d, b, c) {
            var a = i.Xc(y(d, b));
            if (isNaN(a)) a = c;
            return a
        };

        function z(b, a) {
            return y(b, "class", a) || ""
        }

        function wb(b) {
            var a = {};
            n(b, function(b) {
                if (b != f) a[b] = b
            });
            return a
        }

        function yb(b, a) {
            return b.match(a || zb)
        }

        function S(b, a) {
            return wb(yb(b || "", a))
        }
        i.Tf = wb;
        i.Uf = yb;

        function cb(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function K(a, c, b) {
            z(a, cb(" ", G(ab(S(z(a)), S(c)), S(b))))
        }
        i.Mc = function(a) {
            return a.parentNode
        };
        i.W = function(a) {
            i.vb(a, "none")
        };
        i.C = function(a, b) {
            i.vb(a, b ? "none" : "")
        };
        i.Of = function(b, a) {
            b.removeAttribute(a)
        };
        i.Qf = function() {
            return r() && l < 10
        };
        i.cg = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.$Top || a.B || 0) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left || a.z || 0) + "px)";
            else if (a !== f) {
                var h = d.style.cssText,
                    g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = E(h, g, "");
                b.$CssCssText(d, e)
            }
        };
        i.R = function() {
            return +new Date
        };
        i.$AppendChild = function(b, a) {
            b.appendChild(a)
        };
        i.Cb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        i.Sb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        i.xf = function(a, b) {
            n(a, function(a) {
                i.Sb(a, b)
            })
        };
        i.Ic = function(a) {
            i.xf(i.$Children(a, d), a)
        };
        i.wc = function(a, b) {
            var c = i.Mc(a);
            b & 1 && i.H(a, (i.$CssWidth(c) - i.$CssWidth(a)) / 2);
            b & 2 && i.G(a, (i.$CssHeight(c) - i.$CssHeight(a)) / 2)
        };
        var V = {
            $Top: g,
            $Right: g,
            $Bottom: g,
            $Left: g,
            u: g,
            v: g
        };
        i.wf = function(a) {
            var b = i.$CreateDiv();
            s(b, {
                Lc: "block",
                ob: i.I(a),
                $Top: 0,
                $Left: 0,
                u: 0,
                v: 0
            });
            var d = i.Fd(a, V);
            i.Cb(b, a);
            i.$AppendChild(b, a);
            var e = i.Fd(a, V),
                c = {};
            n(d, function(b, a) {
                if (b == e[a]) c[a] = b
            });
            s(b, V);
            s(b, c);
            s(a, {
                $Top: 0,
                $Left: 0
            });
            return c
        };
        i.Qc = function(b, a) {
            return parseInt(b, a || 10)
        };
        i.Xc = q;

        function Y(d, c, b) {
            var a = d.cloneNode(!c);
            !b && i.Of(a, "id");
            return a
        }
        i.$CloneNode = Y;
        i.Ob = function(e, f) {
            var a = new Image;

            function b(e, d) {
                i.V(a, "load", b);
                i.V(a, "abort", c);
                i.V(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (ob() && l < 11.6 || !e) b(!e);
            else {
                i.$AddEvent(a, "load", b);
                i.$AddEvent(a, "abort", c);
                i.$AddEvent(a, "error", c);
                a.src = e
            }
        };
        i.Jf = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                i.Ob(a.src, b)
            });
            b()
        };
        i.yd = function(a, g, i, h) {
            if (h) a = Y(a);
            var c = W(a, g);
            if (!c.length) c = b.Pf(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = Y(i);
                z(e, z(d));
                b.$CssCssText(e, d.style.cssText);
                b.Cb(e, d);
                b.Sb(d)
            }
            return a
        };

        function Fb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                d = [],
                q, k = 0,
                g = 0,
                e = 0;

            function j() {
                K(a, q, (d[e || g & 2 || g] || "") + " " + (d[k] || ""));
                b.$Css(a, "pointer-events", e ? "none" : "")
            }

            function c() {
                k = 0;
                j();
                i.V(h, "mouseup", c);
                i.V(h, "touchend", c);
                i.V(h, "touchcancel", c)
            }

            function o(a) {
                if (e) i.$CancelEvent(a);
                else {
                    k = 4;
                    j();
                    i.$AddEvent(h, "mouseup", c);
                    i.$AddEvent(h, "touchend", c);
                    i.$AddEvent(h, "touchcancel", c)
                }
            }
            l.Ad = function(a) {
                if (a === f) return g;
                g = a & 2 || a & 1;
                j()
            };
            l.$Enable = function(a) {
                if (a === f) return !e;
                e = a ? 0 : 3;
                j()
            };
            l.$Elmt = a = i.$GetElement(a);
            y(a, "data-jssor-button", "1");
            var m = b.Uf(z(a));
            if (m) p = m.shift();
            n(r, function(a) {
                d.push(p + a)
            });
            q = cb(" ", d);
            d.unshift("");
            i.$AddEvent(a, "mousedown", o);
            i.$AddEvent(a, "touchstart", o)
        }
        i.Wb = function(a) {
            return new Fb(a)
        };
        i.$Css = x;
        i.Fb = m("overflow");
        i.G = m("top", 2);
        i.Ag = m("right", 2);
        i.Bg = m("bottom", 2);
        i.H = m("left", 2);
        i.$CssWidth = m("width", 2);
        i.$CssHeight = m("height", 2);
        i.vg = m("marginLeft", 2);
        i.ug = m("marginTop", 2);
        i.I = m("position");
        i.vb = m("display");
        i.A = m("zIndex", 1);
        i.Tc = function(b, a, c) {
            if (a != f) Eb(b, a, c);
            else return Cb(b)
        };
        i.$CssCssText = function(a, b) {
            if (b != f) a.style.cssText = b;
            else return a.style.cssText
        };
        i.wg = function(b, a) {
            if (a === f) {
                a = x(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            x(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var L;
        i.xg = L = {
            $Opacity: i.Tc,
            $Top: i.G,
            $Right: i.Ag,
            $Bottom: i.Bg,
            $Left: i.H,
            u: i.$CssWidth,
            v: i.$CssHeight,
            ob: i.I,
            Lc: i.vb,
            $ZIndex: i.A
        };
        i.Fd = function(c, b) {
            var a = {};
            n(b, function(d, b) {
                if (L[b]) a[b] = L[b](c)
            });
            return a
        };

        function s(h, l) {
            var e = gb(),
                b = I(),
                d = eb(),
                j = O(h);

            function k(b, d, a) {
                var e = b.qb(p(-d / 2, -a / 2)),
                    f = b.qb(p(d / 2, -a / 2)),
                    g = b.qb(p(d / 2, a / 2)),
                    h = b.qb(p(-d / 2, a / 2));
                b.qb(p(300, 300));
                return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.$TranslateZ || 0,
                    p = (a.$RotateX || 0) % 360,
                    q = (a.$RotateY || 0) % 360,
                    u = (a.$Rotate || 0) % 360,
                    l = a.$ScaleX,
                    m = a.$ScaleY,
                    g = a.zh;
                if (l == f) l = 1;
                if (m == f) m = 1;
                if (g == f) g = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    g = 0
                }
                var c = new Bb(a.$TranslateX, a.$TranslateY, n);
                c.$RotateX(p);
                c.$RotateY(q);
                c.se(u);
                c.ig(a.$SkewX, a.$SkewY);
                c.$Scale(l, m, g);
                if (b) {
                    c.$Move(a.z, a.B);
                    d.style[j] = c.lg()
                } else if (!B || B < 9) {
                    var o = "",
                        h = {
                            x: 0,
                            y: 0
                        };
                    if (a.$OriginalWidth) h = k(c, a.$OriginalWidth, a.$OriginalHeight);
                    i.ug(d, h.y);
                    i.vg(d, h.x);
                    o = c.pg();
                    var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = E(s, [t], o);
                    T(d, r)
                }
            }
            s = function(e, c) {
                c = c || {};
                var j = c.z,
                    k = c.B,
                    h;
                n(L, function(a, b) {
                    h = c[b];
                    h !== f && a(e, h)
                });
                i.cg(e, c.$Clip);
                if (!b) {
                    j != f && i.H(e, (c.Yc || 0) + j);
                    k != f && i.G(e, (c.Uc || 0) + k)
                }
                if (c.rg)
                    if (d) xb(i.$CreateCallback(g, Q, e, c));
                    else a(e, c)
            };
            i.kc = Q;
            if (d) i.kc = s;
            if (e) i.kc = a;
            else if (!b) a = Q;
            i.K = s;
            s(h, l)
        }
        i.kc = s;
        i.K = s;

        function Bb(j, k, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1],
                i = c.sin,
                h = c.cos,
                l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return m.apply(g, (a || b).concat(c))
            }
            d.$Scale = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Move = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([1, 0, 0, 0, 0, d, g, 0, 0, -g, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, 0, -g, 0, 0, 1, 0, 0, g, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.se = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, g, 0, 0, -g, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.ig = function(a, c) {
                if (a || c) {
                    j = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.qb = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.lg = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.pg = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new(function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.bd(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.bd(b, 0, c)
            };
            a.bd = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.qb = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return p(a[0][0], a[1][0])
            }
        });
        var R = {
            Yc: 0,
            Uc: 0,
            z: 0,
            B: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        i.Oc = function(c, d) {
            var a = c || {};
            if (c)
                if (b.Xd(c)) a = {
                    ib: a
                };
                else if (b.Xd(c.$Clip)) a.$Clip = {
                ib: c.$Clip
            };
            a.ib = a.ib || d;
            if (a.$Clip) a.$Clip.ib = a.$Clip.ib || d;
            return a
        };

        function vb(c, a) {
            var b = {};
            n(c, function(c, d) {
                var e = c;
                if (a[d] != f)
                    if (i.Qb(c)) e = c + a[d];
                    else e = vb(c, a[d]);
                b[d] = e
            });
            return b
        }
        i.rf = vb;
        i.zd = function(n, j, s, t, B, C, o) {
            var a = j;
            if (n) {
                a = {};
                for (var i in j) {
                    var D = C[i] || 1,
                        z = B[i] || [0, 1],
                        h = (s - z[0]) / z[1];
                    h = c.min(c.max(h, 0), 1);
                    h = h * D;
                    var x = c.floor(h);
                    if (h != x) h -= x;
                    var k = t.ib || e.$Linear,
                        m, E = n[i],
                        q = j[i];
                    if (b.Qb(q)) {
                        k = t[i] || k;
                        var A = k(h);
                        m = E + q * A
                    } else {
                        m = b.s({
                            ac: {}
                        }, n[i]);
                        var y = t[i] || {};
                        b.$Each(q.ac || q, function(d, a) {
                            k = y[a] || y.ib || k;
                            var c = k(h),
                                b = d * c;
                            m.ac[a] = b;
                            m[a] += b
                        })
                    }
                    a[i] = m
                }
                var w = b.$Each(j, function(b, a) {
                    return R[a] != f
                });
                w && b.$Each(R, function(c, b) {
                    if (a[b] == f && n[b] !== f) a[b] = n[b]
                });
                if (w) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = o.$OriginalWidth;
                    a.$OriginalHeight = o.$OriginalHeight;
                    if (r() && l >= 11 && (j.z || j.B) && s != 0 && s != 1) a.$Rotate = a.$Rotate || 1e-8;
                    a.rg = d
                }
            }
            if (j.$Clip && o.$Move) {
                var p = a.$Clip.ac,
                    v = (p.$Top || 0) + (p.$Bottom || 0),
                    u = (p.$Left || 0) + (p.$Right || 0);
                a.$Left = (a.$Left || 0) + u;
                a.$Top = (a.$Top || 0) + v;
                a.$Clip.$Left -= u;
                a.$Clip.$Right -= u;
                a.$Clip.$Top -= v;
                a.$Clip.$Bottom -= v
            }
            if (a.$Clip && b.Qf() && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.B && !a.$Clip.z && a.$Clip.$Right == o.$OriginalWidth && a.$Clip.$Bottom == o.$OriginalHeight) a.$Clip = g;
            return a
        }
    };

    function o() {
        var a = this,
            d = [];

        function h(a, b) {
            d.push({
                Sc: a,
                Rc: b
            })
        }

        function g(a, c) {
            b.$Each(d, function(b, e) {
                b.Sc == a && b.Rc === c && d.splice(e, 1)
            })
        }
        a.$On = a.addEventListener = h;
        a.$Off = a.removeEventListener = g;
        a.j = function(a) {
            var c = [].slice.call(arguments, 1);
            b.$Each(d, function(b) {
                b.Sc == a && b.Rc.apply(j, c)
            })
        }
    }
    var l = function(A, D, g, L, O, J) {
        A = A || 0;
        var a = this,
            p, m, n, t, B = 0,
            H, I, G, C, z = 0,
            h = 0,
            l = 0,
            y, i, e, f, o, x, v = [],
            w;

        function P(a) {
            e += a;
            f += a;
            i += a;
            h += a;
            l += a;
            z += a
        }

        function s(p) {
            var j = p;
            if (o)
                if (!x && (j >= f || j < e) || x && j >= e) j = ((j - e) % o + o) % o + e;
            if (!y || t || h != j) {
                var k = c.min(j, f);
                k = c.max(k, e);
                if (!y || t || k != l) {
                    if (J) {
                        var m = (k - i) / (D || 1);
                        if (g.$Reverse) m = 1 - m;
                        var n = b.zd(O, J, m, H, G, I, g);
                        if (w) b.$Each(n, function(b, a) {
                            w[a] && w[a](L, b)
                        });
                        else b.K(L, n)
                    }
                    a.Nc(l - i, k - i);
                    var r = l,
                        q = l = k;
                    b.$Each(v, function(b, c) {
                        var a = !y && x || j <= h ? v[v.length - c - 1] : b;
                        a.F(l - z)
                    });
                    h = j;
                    y = d;
                    a.fc(r, q)
                }
            }
        }

        function E(a, b, d) {
            b && a.$Shift(f);
            if (!d) {
                e = c.min(e, a.gc() + z);
                f = c.max(f, a.pb() + z)
            }
            v.push(a)
        }
        var u = j.requestAnimationFrame || j.webkitRequestAnimationFrame || j.mozRequestAnimationFrame || j.msRequestAnimationFrame;
        if (b.$IsBrowserSafari() && b.$BrowserVersion() < 7 || !u) u = function(a) {
            b.$Delay(a, g.$Interval)
        };

        function K() {
            if (p) {
                var d = b.R(),
                    e = c.min(d - B, g.nd),
                    a = h + e * n;
                B = d;
                if (a * n >= m * n) a = m;
                s(a);
                if (!t && a * n >= m * n) M(C);
                else u(K)
            }
        }

        function r(g, i, j) {
            if (!p) {
                p = d;
                t = j;
                C = i;
                g = c.max(g, e);
                g = c.min(g, f);
                m = g;
                n = m < h ? -1 : 1;
                a.md();
                B = b.R();
                u(K)
            }
        }

        function M(b) {
            if (p) {
                t = p = C = k;
                a.ud();
                b && b()
            }
        }
        a.$Play = function(a, b, c) {
            r(a ? h + a : f, b, c)
        };
        a.wd = r;
        a.xb = M;
        a.he = function(a) {
            r(a)
        };
        a.Y = function() {
            return h
        };
        a.qd = function() {
            return m
        };
        a.X = function() {
            return l
        };
        a.F = s;
        a.de = function() {
            s(f, d)
        };
        a.$Move = function(a) {
            s(h + a)
        };
        a.$IsPlaying = function() {
            return p
        };
        a.oe = function(a) {
            o = a
        };
        a.$Shift = P;
        a.P = function(a, b) {
            E(a, 0, b)
        };
        a.vc = function(a) {
            E(a, 1)
        };
        a.ld = function(a) {
            f += a
        };
        a.gc = function() {
            return e
        };
        a.pb = function() {
            return f
        };
        a.fc = a.md = a.ud = a.Nc = b.ae;
        a.rc = b.R();
        g = b.s({
            $Interval: 16,
            nd: 50
        }, g);
        o = g.yc;
        x = g.af;
        w = g.Ze;
        e = i = A;
        f = A + D;
        I = g.$Round || {};
        G = g.$During || {};
        H = b.Oc(g.$Easing)
    };
    var m = {
            Ab: "data-scale",
            Gc: "data-scale-ratio",
            yb: "data-autocenter"
        },
        n = new function() {
            var a = this;
            a.U = function(c, a, e, d) {
                (d || !b.$Attribute(c, a)) && b.$Attribute(c, a, e)
            };
            a.ic = function(a) {
                var c = b.mc(a, m.yb);
                b.wc(a, c)
            }
        },
        q = j.$JssorSlideshowFormations$ = new function() {
            var h = this,
                b = 0,
                a = 1,
                f = 2,
                e = 3,
                s = 1,
                r = 2,
                t = 4,
                q = 8,
                w = 256,
                x = 512,
                v = 1024,
                u = 2048,
                j = u + s,
                i = u + r,
                o = x + s,
                m = x + r,
                n = w + t,
                k = w + q,
                l = v + t,
                p = v + q;

            function y(a) {
                return (a & r) == r
            }

            function z(a) {
                return (a & t) == t
            }

            function g(b, a, c) {
                c.push(a);
                b[a] = b[a] || [];
                b[a].push(c)
            }
            h.$FormationStraight = function(f) {
                for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.bc, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                    for (a = 0; a < d; a++) {
                        switch (s) {
                            case j:
                                c = h - (a * e + (q - b));
                                break;
                            case l:
                                c = h - (b * d + (p - a));
                                break;
                            case o:
                                c = h - (a * e + b);
                            case n:
                                c = h - (b * d + a);
                                break;
                            case i:
                                c = a * e + b;
                                break;
                            case k:
                                c = b * d + (p - a);
                                break;
                            case m:
                                c = a * e + (q - b);
                                break;
                            default:
                                c = b * d + a
                        }
                        g(r, c, [b, a])
                    }
                return r
            };
            h.$FormationSwirl = function(q) {
                var x = q.$Cols,
                    y = q.$Rows,
                    B = q.$Assembly,
                    w = q.bc,
                    A = [],
                    z = [],
                    u = 0,
                    c = 0,
                    h = 0,
                    r = x - 1,
                    s = y - 1,
                    t, p, v = 0;
                switch (B) {
                    case j:
                        c = r;
                        h = 0;
                        p = [f, a, e, b];
                        break;
                    case l:
                        c = 0;
                        h = s;
                        p = [b, e, a, f];
                        break;
                    case o:
                        c = r;
                        h = s;
                        p = [e, a, f, b];
                        break;
                    case n:
                        c = r;
                        h = s;
                        p = [a, e, b, f];
                        break;
                    case i:
                        c = 0;
                        h = 0;
                        p = [f, b, e, a];
                        break;
                    case k:
                        c = r;
                        h = 0;
                        p = [a, f, b, e];
                        break;
                    case m:
                        c = 0;
                        h = s;
                        p = [e, b, f, a];
                        break;
                    default:
                        c = 0;
                        h = 0;
                        p = [b, f, a, e]
                }
                u = 0;
                while (u < w) {
                    t = h + "," + c;
                    if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                        z[t] = d;
                        g(A, u++, [h, c])
                    } else switch (p[v++ % p.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            h--;
                            break;
                        case a:
                            c++;
                            break;
                        case e:
                            h++
                    }
                    switch (p[v % p.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            h++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            h--
                    }
                }
                return A
            };
            h.$FormationZigZag = function(p) {
                var w = p.$Cols,
                    x = p.$Rows,
                    z = p.$Assembly,
                    v = p.bc,
                    t = [],
                    u = 0,
                    c = 0,
                    d = 0,
                    q = w - 1,
                    r = x - 1,
                    y, h, s = 0;
                switch (z) {
                    case j:
                        c = q;
                        d = 0;
                        h = [f, a, e, a];
                        break;
                    case l:
                        c = 0;
                        d = r;
                        h = [b, e, a, e];
                        break;
                    case o:
                        c = q;
                        d = r;
                        h = [e, a, f, a];
                        break;
                    case n:
                        c = q;
                        d = r;
                        h = [a, e, b, e];
                        break;
                    case i:
                        c = 0;
                        d = 0;
                        h = [f, b, e, b];
                        break;
                    case k:
                        c = q;
                        d = 0;
                        h = [a, f, b, f];
                        break;
                    case m:
                        c = 0;
                        d = r;
                        h = [e, b, f, b];
                        break;
                    default:
                        c = 0;
                        d = 0;
                        h = [b, f, a, f]
                }
                u = 0;
                while (u < v) {
                    y = d + "," + c;
                    if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
                        g(t, u++, [d, c]);
                        switch (h[s % h.length]) {
                            case b:
                                c++;
                                break;
                            case f:
                                d++;
                                break;
                            case a:
                                c--;
                                break;
                            case e:
                                d--
                        }
                    } else {
                        switch (h[s++ % h.length]) {
                            case b:
                                c--;
                                break;
                            case f:
                                d--;
                                break;
                            case a:
                                c++;
                                break;
                            case e:
                                d++
                        }
                        switch (h[s++ % h.length]) {
                            case b:
                                c++;
                                break;
                            case f:
                                d++;
                                break;
                            case a:
                                c--;
                                break;
                            case e:
                                d--
                        }
                    }
                }
                return t
            };
            h.$FormationStraightStairs = function(q) {
                var u = q.$Cols,
                    v = q.$Rows,
                    e = q.$Assembly,
                    t = q.bc,
                    r = [],
                    s = 0,
                    c = 0,
                    d = 0,
                    f = u - 1,
                    h = v - 1,
                    x = t - 1;
                switch (e) {
                    case j:
                    case m:
                    case o:
                    case i:
                        var a = 0,
                            b = 0;
                        break;
                    case k:
                    case l:
                    case n:
                    case p:
                        var a = f,
                            b = 0;
                        break;
                    default:
                        e = p;
                        var a = f,
                            b = 0
                }
                c = a;
                d = b;
                while (s < t) {
                    if (z(e) || y(e)) g(r, x - s++, [d, c]);
                    else g(r, s++, [d, c]);
                    switch (e) {
                        case j:
                        case m:
                            c--;
                            d++;
                            break;
                        case o:
                        case i:
                            c++;
                            d--;
                            break;
                        case k:
                        case l:
                            c--;
                            d--;
                            break;
                        case p:
                        case n:
                        default:
                            c++;
                            d++
                    }
                    if (c < 0 || d < 0 || c > f || d > h) {
                        switch (e) {
                            case j:
                            case m:
                                a++;
                                break;
                            case k:
                            case l:
                            case o:
                            case i:
                                b++;
                                break;
                            case p:
                            case n:
                            default:
                                a--
                        }
                        if (a < 0 || b < 0 || a > f || b > h) {
                            switch (e) {
                                case j:
                                case m:
                                    a = f;
                                    b++;
                                    break;
                                case o:
                                case i:
                                    b = h;
                                    a++;
                                    break;
                                case k:
                                case l:
                                    b = h;
                                    a--;
                                    break;
                                case p:
                                case n:
                                default:
                                    a = 0;
                                    b++
                            }
                            if (b > h) b = h;
                            else if (b < 0) b = 0;
                            else if (a > f) a = f;
                            else if (a < 0) a = 0
                        }
                        d = b;
                        c = a
                    }
                }
                return r
            };
            h.$FormationSquare = function(i) {
                var a = i.$Cols || 1,
                    b = i.$Rows || 1,
                    j = [],
                    d, e, f, h, k;
                f = a < b ? (b - a) / 2 : 0;
                h = a > b ? (a - b) / 2 : 0;
                k = c.round(c.max(a / 2, b / 2)) + 1;
                for (d = 0; d < a; d++)
                    for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
                return j
            };
            h.$FormationRectangle = function(f) {
                var d = f.$Cols || 1,
                    e = f.$Rows || 1,
                    h = [],
                    a, b, i;
                i = c.round(c.min(d / 2, e / 2)) + 1;
                for (a = 0; a < d; a++)
                    for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]);
                return h
            };
            h.$FormationRandom = function(d) {
                for (var e = [], a, b = 0; b < d.$Rows; b++)
                    for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
                return e
            };
            h.$FormationCircle = function(d) {
                for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                    for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]);
                return h
            };
            h.$FormationCross = function(d) {
                for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                    for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]);
                return h
            };
            h.$FormationRectangleCross = function(f) {
                for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                    for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]);
                return j
            }
        };
    j.$JssorSlideshowRunner$ = function(m, s, p, u, z, A) {
        var a = this,
            v, h, f, y = 0,
            x = u.$TransitionsOrder,
            r, i = 8;

        function t(a) {
            if (a.$Top) a.B = a.$Top;
            if (a.$Left) a.z = a.$Left;
            b.$Each(a, function(a) {
                b.Zd(a) && t(a)
            })
        }

        function j(h, f, g) {
            var a = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: k,
                $SlideOut: k,
                $Reverse: k,
                $Formation: q.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: e.$Linear,
                $Round: {},
                oc: [],
                $During: {}
            };
            b.s(a, h);
            if (a.$Rows == 0) a.$Rows = c.round(a.$Cols * g);
            t(a);
            a.bc = a.$Cols * a.$Rows;
            a.$Easing = b.Oc(a.$Easing, e.$Linear);
            a.me = c.ceil(a.$Duration / a.$Interval);
            a.ie = function(c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.oc[f]) {
                    a.oc[f] = {
                        u: c,
                        v: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.oc[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.oc[f]
            };
            if (a.$Brother) {
                a.$Brother = j(a.$Brother, f, g);
                a.$SlideOut = d
            }
            return a
        }

        function n(z, i, a, v, n, l) {
            var y = this,
                t, u = {},
                h = {},
                m = [],
                f, e, r, p = a.$ChessMode.$Column || 0,
                q = a.$ChessMode.$Row || 0,
                g = a.ie(n, l),
                o = B(a),
                C = o.length - 1,
                s = a.$Duration + a.$Delay * C,
                w = v + s,
                j = a.$SlideOut,
                x;
            w += 50;

            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            y.ed = w;
            y.lc = function(d) {
                d -= v;
                var e = d < s;
                if (e || x) {
                    x = e;
                    if (!j) d = s - d;
                    var f = c.ceil(d / a.$Interval);
                    b.$Each(h, function(a, e) {
                        var d = c.max(f, a.ce);
                        d = c.min(d, a.length - 1);
                        if (a.fd != d) {
                            if (!a.fd && !j) b.C(m[e]);
                            else d == a.ee && j && b.W(m[e]);
                            a.fd = d;
                            b.K(m[e], a[d])
                        }
                    })
                }
            };
            i = b.$CloneNode(i);
            A(i, 0, 0);
            b.$Each(o, function(i, m) {
                b.$Each(i, function(G) {
                    var I = G[0],
                        H = G[1],
                        v = I + "," + H,
                        o = k,
                        s = k,
                        x = k;
                    if (p && H % 2) {
                        if (p & 3) o = !o;
                        if (p & 12) s = !s;
                        if (p & 16) x = !x
                    }
                    if (q && I % 2) {
                        if (q & 3) o = !o;
                        if (q & 12) s = !s;
                        if (q & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = s ? a.$Bottom : a.$Top,
                        z = s ? a.$Top : a.$Bottom,
                        B = o ? a.$Right : a.$Left,
                        A = o ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    r = {};
                    e = {
                        B: 0,
                        z: 0,
                        $Opacity: 1,
                        u: n,
                        v: l
                    };
                    f = b.s({}, e);
                    t = b.s({}, g[v]);
                    if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var K = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var J = d;
                        if (J) {
                            e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (K) {
                        var i = t.ac = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                i.$Top = g.v / 2 * w;
                                i.$Bottom = -i.$Top
                            } else if (C) i.$Bottom = -g.v * w;
                            else if (z) i.$Top = g.v * w;
                            if (B && A) {
                                i.$Left = g.u / 2 * w;
                                i.$Right = -i.$Left
                            } else if (B) i.$Right = -g.u * w;
                            else if (A) i.$Left = g.u * w
                        }
                        r.$Clip = t;
                        f.$Clip = g[v]
                    }
                    var L = o ? 1 : -1,
                        M = s ? 1 : -1;
                    if (a.x) e.z += n * a.x * L;
                    if (a.y) e.B += l * a.y * M;
                    b.$Each(e, function(a, c) {
                        if (b.Qb(a))
                            if (a != f[c]) r[c] = a - f[c]
                    });
                    u[v] = j ? f : e;
                    var D = a.me,
                        y = c.round(m * a.$Delay / a.$Interval);
                    h[v] = new Array(y);
                    h[v].ce = y;
                    h[v].ee = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.zd(f, r, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        h[v].push(E)
                    }
                })
            });
            o.reverse();
            b.$Each(o, function(a) {
                b.$Each(a, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = i;
                    if (e || f) a = b.$CloneNode(i);
                    b.K(a, u[d]);
                    b.Fb(a, "hidden");
                    b.I(a, "absolute");
                    z.Ge(a);
                    m[d] = a;
                    b.C(a, !j)
                })
            })
        }

        function w() {
            var a = this,
                b = 0;
            l.call(a, 0, v);
            a.fc = function(c, a) {
                if (a - b > i) {
                    b = a;
                    f && f.lc(a);
                    h && h.lc(a)
                }
            };
            a.Fc = r
        }
        a.Fe = function() {
            var a = 0,
                b = u.$Transitions,
                d = b.length;
            if (x) a = y++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].zb = a);
            return b[a]
        };
        a.Ue = function(x, y, k, l, b, t) {
            a.ub();
            r = b;
            b = j(b, i, t);
            var g = l.Vc,
                e = k.Vc;
            g["no-image"] = !l.cc;
            e["no-image"] = !k.cc;
            var o = g,
                q = e,
                w = b,
                d = b.$Brother || j({}, i, t);
            if (!b.$SlideOut) {
                o = e;
                q = g
            }
            var u = d.$Shift || 0;
            h = new n(m, q, d, c.max(u - d.$Interval, 0), s, p);
            f = new n(m, o, w, c.max(d.$Interval - u, 0), s, p);
            h.lc(0);
            f.lc(0);
            v = c.max(h.ed, f.ed);
            a.zb = x
        };
        a.ub = function() {
            m.ub();
            h = g;
            f = g
        };
        a.Xe = function() {
            var a = g;
            if (f) a = new w;
            return a
        };
        if (z && b.$WebKitVersion() < 537) i = 16;
        o.call(a);
        l.call(a, -1e7, 1e7)
    };
    var p = {
        dc: 1
    };
    j.$JssorBulletNavigator$ = function(a, E) {
        var f = this;
        o.call(f);
        a = b.$GetElement(a);
        var u, C, B, t, l = 0,
            e, q, j, y, z, i, h, s, r, D = [],
            A = [];

        function x(a) {
            a != -1 && A[a].Ad(a == l)
        }

        function v(a) {
            f.j(p.dc, a * q)
        }
        f.$Elmt = a;
        f.uc = function(a) {
            if (a != t) {
                var d = l,
                    b = c.floor(a / q);
                l = b;
                t = a;
                x(d);
                x(b)
            }
        };
        f.Hc = function(c) {
            b.C(a, c)
        };
        var w;
        f.Ec = function(x) {
            if (!w) {
                u = c.ceil(x / q);
                l = 0;
                var n = s + y,
                    o = r + z,
                    m = c.ceil(u / j) - 1;
                C = s + n * (!i ? m : j - 1);
                B = r + o * (i ? m : j - 1);
                b.$CssWidth(a, C);
                b.$CssHeight(a, B);
                for (var f = 0; f < u; f++) {
                    var t = b.Sf();
                    b.$InnerText(t, f + 1);
                    var k = b.yd(h, "numbertemplate", t, d);
                    b.I(k, "absolute");
                    var p = f % (m + 1);
                    b.H(k, !i ? n * p : f % j * n);
                    b.G(k, i ? o * p : c.floor(f / (m + 1)) * o);
                    b.$AppendChild(a, k);
                    D[f] = k;
                    e.$ActionMode & 1 && b.$AddEvent(k, "click", b.$CreateCallback(g, v, f));
                    e.$ActionMode & 2 && b.$AddEvent(k, "mouseenter", b.$CreateCallback(g, v, f));
                    A[f] = b.Wb(k)
                }
                w = d
            }
        };
        f.hc = e = b.s({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, E);
        h = b.$FindChild(a, "prototype");
        s = b.$CssWidth(h);
        r = b.$CssHeight(h);
        b.Sb(h, a);
        q = e.$Steps || 1;
        j = e.$Rows || 1;
        y = e.$SpacingX;
        z = e.$SpacingY;
        i = e.$Orientation - 1;
        e.$Scale == k && n.U(a, m.Ab, 1);
        e.$AutoCenter && n.U(a, m.yb, e.$AutoCenter);
        n.ic(a)
    };
    j.$JssorArrowNavigator$ = function(a, e, i, A, z, x) {
        var c = this;
        o.call(c);
        var j, h, f, l;
        b.$CssWidth(a);
        b.$CssHeight(a);
        var s, r;

        function q(a) {
            c.j(p.dc, a, d)
        }

        function v(c) {
            b.C(a, c);
            b.C(e, c)
        }

        function u() {
            s.$Enable(i.$Loop || !j.Ce(h));
            r.$Enable(i.$Loop || !j.Be(h))
        }
        c.uc = function(c, a, b) {
            h = a;
            !b && u()
        };
        c.Hc = v;
        var t;
        c.Ec = function(c) {
            h = 0;
            if (!t) {
                b.$AddEvent(a, "click", b.$CreateCallback(g, q, -l));
                b.$AddEvent(e, "click", b.$CreateCallback(g, q, l));
                s = b.Wb(a);
                r = b.Wb(e);
                t = d
            }
        };
        c.hc = f = b.s({
            $Steps: 1
        }, i);
        l = f.$Steps;
        j = x;
        if (f.$Scale == k) {
            n.U(a, m.Ab, 1);
            n.U(e, m.Ab, 1)
        }
        if (f.$AutoCenter) {
            n.U(a, m.yb, f.$AutoCenter);
            n.U(e, m.yb, f.$AutoCenter)
        }
        n.ic(a);
        n.ic(e)
    };
    j.$JssorThumbnailNavigator$ = function(f, E) {
        var r = this,
            x, A, u, a, y = [],
            B, z, e, l, q, t, s, j, v, h, w;
        o.call(r);
        f = b.$GetElement(f);

        function D(m, f) {
            var h = this,
                c, l, j;

            function n() {
                l.Ad(u == f)
            }

            function i(g) {
                if (g || !v.He()) {
                    var c = e - f % e,
                        a = v.Bd((f + c) / e - 1),
                        b = a * e + e - c;
                    if (a < 0) b += x % e;
                    if (a >= A) b -= x % e;
                    r.j(p.dc, b, k, d)
                }
            }
            h.zb = f;
            h.Ed = n;
            j = m.ue || m.cc || b.$CreateDiv();
            h.jc = c = b.yd(w, "thumbnailtemplate", j, d);
            l = b.Wb(c);
            a.$ActionMode & 1 && b.$AddEvent(c, "click", b.$CreateCallback(g, i, 0));
            a.$ActionMode & 2 && b.$AddEvent(c, "mouseenter", b.$CreateCallback(g, i, 1))
        }
        r.uc = function(a, f, d) {
            if (a != u) {
                var b = u;
                u = a;
                b != -1 && y[b].Ed();
                y[a].Ed()
            }!d && v.$PlayTo(v.Bd(c.floor(a / e)))
        };
        r.Hc = function(a) {
            b.C(f, a)
        };
        var C;
        r.Ec = function(G, H) {
            if (!C) {
                x = G;
                A = c.ceil(x / e);
                u = -1;
                var g = a.$Orientation & 1;
                j = j || c.ceil((B + l) / (t + l) * g + (z + q) / (s + q) * (1 - g));
                j = c.min(j, A);
                var w = t + (t + l) * (e - 1) * (1 - g),
                    p = s + (s + q) * (e - 1) * g,
                    n = w + (w + l) * (j - 1) * g,
                    m = p + (p + q) * (j - 1) * (1 - g);
                n = c.min(B, n);
                m = c.min(z, m);
                var F = (n - t - l) / 2 * g + (m - s - q) / 2 * (1 - g);
                b.I(h, "absolute");
                b.Fb(h, "hidden");
                b.$CssWidth(h, n);
                b.$CssHeight(h, m);
                b.wc(h, 3);
                var o = [];
                b.$Each(H, function(k, f) {
                    var i = new D(k, f),
                        d = i.jc,
                        a = c.floor(f / e),
                        j = f % e;
                    b.H(d, (t + l) * j * (1 - g));
                    b.G(d, (s + q) * j * g);
                    if (!o[a]) {
                        o[a] = b.$CreateDiv();
                        b.$AppendChild(h, o[a])
                    }
                    b.$AppendChild(o[a], d);
                    y.push(i)
                });
                var E = b.s({
                    $AutoPlay: 0,
                    $NaviQuitDrag: k,
                    $SlideWidth: w,
                    $SlideHeight: p,
                    $SlideSpacing: l * g + q * (1 - g),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $Cols: j,
                    $Align: F,
                    $PlayOrientation: a.$Orientation,
                    $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
                }, a);
                v = new i(f, E);
                r.Vf = v.Vf;
                C = d
            }
        };
        r.hc = a = b.s({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, E);
        B = b.$CssWidth(f);
        z = b.$CssHeight(f);
        h = b.$FindChild(f, "slides", d);
        w = b.$FindChild(h, "prototype");
        t = b.$CssWidth(w);
        s = b.$CssHeight(w);
        b.Sb(w, h);
        e = a.$Rows || 1;
        l = a.$SpacingX;
        q = a.$SpacingY;
        j = a.$Cols;
        a.$Scale == k && n.U(f, m.Ab, 1);
        a.$AutoCenter &= a.$Orientation;
        a.$AutoCenter && n.U(f, m.yb, a.$AutoCenter);
        n.ic(f)
    };

    function r(e, d, c) {
        var a = this;
        l.call(a, 0, c);
        a.id = b.ae;
        a.gd = 0;
        a.dd = c
    }
    j.$JssorCaptionSlideo$ = function(v, j, u, E) {
        var a = this,
            w, o = {},
            p = j.$Transitions,
            s = j.$Controls,
            m = new l(0, 0),
            q = [],
            h = [],
            D = E,
            f = D ? 1e8 : 0;
        l.call(a, 0, 0);

        function r(d, c) {
            var a = {};
            b.$Each(d, function(d, f) {
                var e = o[f];
                if (e) {
                    if (b.Zd(d)) d = r(d, c || f == "e");
                    else if (c)
                        if (b.Qb(d)) d = w[d];
                    a[e] = d
                }
            });
            return a
        }

        function t(d, e) {
            var a = [],
                c = b.$Children(d);
            b.$Each(c, function(c) {
                var h = b.$AttributeEx(c, "u") == "caption";
                if (h) {
                    var d = b.$AttributeEx(c, "t"),
                        g = p[b.Qc(d)] || p[d],
                        f = {
                            $Elmt: c,
                            Fc: g
                        };
                    a.push(f)
                }
                a = a.concat(t(c, e + 1))
            });
            return a
        }

        function n(c, e) {
            var a = q[c];
            if (a == g) {
                a = q[c] = {
                    bb: c,
                    Ac: [],
                    Yd: []
                };
                var d = 0;
                !b.$Each(h, function(a, b) {
                    d = b;
                    return a.bb > c
                }) && d++;
                h.splice(d, 0, a)
            }
            return a
        }

        function z(t, u, h) {
            var a, e;
            if (s) {
                var o = b.$AttributeEx(t, "c");
                if (o) {
                    var m = s[b.Qc(o)];
                    if (m) {
                        a = n(m.r, 0);
                        a.Rf = m.e || 0
                    }
                }
            }
            b.$Each(u, function(i) {
                var g = b.s(d, {}, r(i)),
                    j = b.Oc(g.$Easing);
                delete g.$Easing;
                if (g.$Left) {
                    g.z = g.$Left;
                    j.z = j.$Left;
                    delete g.$Left
                }
                if (g.$Top) {
                    g.B = g.$Top;
                    j.B = j.$Top;
                    delete g.$Top
                }
                var o = {
                        $Easing: j,
                        $OriginalWidth: h.u,
                        $OriginalHeight: h.v
                    },
                    k = new l(i.b, i.d, o, t, h, g);
                f = c.max(f, i.b + i.d);
                if (a) {
                    if (!e) e = new l(i.b, 0);
                    e.P(k)
                } else {
                    var m = n(i.b, i.b + i.d);
                    m.Ac.push(k)
                }
                h = b.rf(h, g)
            });
            if (a && e) {
                e.de();
                var i = e,
                    k, j = e.gc(),
                    p = e.pb(),
                    q = c.max(p, a.Rf);
                if (a.bb < p) {
                    if (a.bb > j) {
                        i = new l(j, a.bb - j);
                        i.P(e, d)
                    } else i = g;
                    k = new l(a.bb, q - j, {
                        yc: q - a.bb,
                        af: d
                    });
                    k.P(e, d)
                }
                i && a.Ac.push(i);
                k && a.Yd.push(k)
            }
            return h
        }

        function y(a) {
            b.$Each(a, function(f) {
                var a = f.$Elmt,
                    e = b.$CssWidth(a),
                    d = b.$CssHeight(a),
                    c = {
                        $Left: b.H(a),
                        $Top: b.G(a),
                        z: 0,
                        B: 0,
                        $Opacity: 1,
                        $ZIndex: b.A(a) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        u: e,
                        v: d,
                        $Clip: {
                            $Top: 0,
                            $Right: e,
                            $Bottom: d,
                            $Left: 0
                        }
                    };
                c.Yc = c.$Left;
                c.Uc = c.$Top;
                z(a, f.Fc, c)
            })
        }

        function B(f, e, g) {
            var c = f.b - e;
            if (c) {
                var b = new l(e, c);
                b.P(m, d);
                b.$Shift(g);
                a.P(b)
            }
            a.ld(f.d);
            return c
        }

        function A(e) {
            var c = m.gc(),
                d = 0;
            b.$Each(e, function(e, f) {
                e = b.s({
                    d: u
                }, e);
                B(e, c, d);
                c = e.b;
                d += e.d;
                if (!f || e.t == 2) {
                    a.gd = c;
                    a.dd = c + e.d
                }
            })
        }

        function i(k, d, e) {
            var g = d.length;
            if (g > 4)
                for (var m = c.ceil(g / 4), a = 0; a < m; a++) {
                    var h = d.slice(a * 4, c.min(a * 4 + 4, g)),
                        j = new l(h[0].bb, 0);
                    i(j, h, e);
                    k.P(j)
                } else b.$Each(d, function(a) {
                    b.$Each(e ? a.Yd : a.Ac, function(a) {
                        e && a.ld(f - a.pb());
                        k.P(a)
                    })
                })
        }
        a.id = function() {
            a.F(-1, d)
        };
        w = [e.$Linear, e.$Swing, e.$InQuad, e.$OutQuad, e.$InOutQuad, e.$InCubic, e.$OutCubic, e.$InOutCubic, e.$InQuart, e.$OutQuart, e.$InOutQuart, e.$InQuint, e.$OutQuint, e.$InOutQuint, e.$InSine, e.$OutSine, e.$InOutSine, e.$InExpo, e.$OutExpo, e.$InOutExpo, e.$InCirc, e.$OutCirc, e.$InOutCirc, e.$InElastic, e.$OutElastic, e.$InOutElastic, e.$InBack, e.$OutBack, e.$InOutBack, e.$InBounce, e.$OutBounce, e.$InOutBounce, e.$Early, e.$Late];
        var C = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        b.$Each(C, function(b, a) {
            o[b] = a
        });
        y(t(v, 1));
        i(m, h);
        var x = j.$Breaks || [],
            k = [].concat(x[b.Qc(b.$AttributeEx(v, "b"))] || []);
        k.push({
            b: f,
            d: k.length ? 0 : u
        });
        A(k);
        f = c.max(f, a.pb());
        i(a, h, d);
        a.F(-1)
    };
    var i = j.$JssorSlider$ = function() {
        var a = this;
        b.If(a, o);
        var Fb = "data-jssor-slider",
            Vb = "data-jssor-thumb",
            v, n, S, kb, bb, pb, ab, Q, K, J, Pb, kc, oc = 1,
            jc = 1,
            Xb = 1,
            ac = {},
            y, X, Db, Rb, Ob, ob, rb, qb, jb, s = -1,
            Ib, q, N, L, wb, yb, zb, gb, G, U, Y, x, V, xb, eb = [],
            fc, hc, bc, pc, Kc, u, lb, H, dc, vb, Gb, ec, cb, O = 0,
            I = Number.MAX_VALUE,
            E = Number.MIN_VALUE,
            gc, C, mb, R, M = 1,
            Z, A, db, Jb = 0,
            Kb = 0,
            P, sb, tb, nb, w, hb, z, Lb, fb = [],
            Sb = b.$Device(),
            ub = Sb.tg,
            B = [],
            D, T, F, Eb, Ub, W;

        function wc(e, k, o) {
            var l = this,
                h = {
                    $Top: 2,
                    $Right: 1,
                    $Bottom: 2,
                    $Left: 1
                },
                n = {
                    $Top: "top",
                    $Right: "right",
                    $Bottom: "bottom",
                    $Left: "left"
                },
                g, a, f, i, j = {};
            l.$Elmt = e;
            l.$ScaleSize = function(q, p, t) {
                var l, s = q,
                    r = p;
                if (!f) {
                    f = b.wf(e);
                    g = e.parentNode;
                    i = {
                        $Scale: b.mc(e, m.Ab, 1),
                        $AutoCenter: b.mc(e, m.yb)
                    };
                    b.$Each(n, function(c, a) {
                        j[a] = b.mc(e, "data-scale-" + c, 1)
                    });
                    a = e;
                    if (k) {
                        a = b.$CloneNode(g, d);
                        b.K(a, {
                            $Top: 0,
                            $Left: 0
                        });
                        b.$AppendChild(a, e);
                        b.$AppendChild(g, a)
                    }
                }
                if (o) {
                    l = c.max(q, p);
                    if (k)
                        if (t > 0 && t < 1) {
                            var v = c.min(q, p);
                            l = c.min(l / v, 1 / (1 - t)) * v
                        }
                } else s = r = l = c.pow(K < J ? p : q, i.$Scale);
                b.Mf(a, l);
                b.$Attribute(a, m.Gc, l);
                b.$CssWidth(g, f.u * s);
                b.$CssHeight(g, f.v * r);
                var u = b.$IsBrowserIE() && b.$BrowserEngineVersion() < 9 || b.$BrowserEngineVersion() < 10 && b.$IsBrowserIeQuirks() ? l : 1,
                    w = (s - u) * f.u / 2,
                    x = (r - u) * f.v / 2;
                b.H(a, w);
                b.G(a, x);
                b.$Each(f, function(d, a) {
                    if (h[a] && d) {
                        var e = (h[a] & 1) * c.pow(q, j[a]) * d + (h[a] & 2) * c.pow(p, j[a]) * d / 2;
                        b.xg[a](g, e)
                    }
                });
                b.wc(g, i.$AutoCenter)
            }
        }

        function Jc() {
            var b = this;
            l.call(b, -1e8, 2e8);
            b.dg = function() {
                var a = b.X();
                a = t(a);
                var d = c.round(a),
                    g = d,
                    f = a - c.floor(a),
                    e = Wb(a);
                return {
                    zb: g,
                    fg: d,
                    ob: f,
                    Lc: a,
                    eg: e
                }
            };
            b.fc = function(e, b) {
                var g = t(b);
                if (c.abs(b - e) > 1e-5) {
                    var f = c.floor(b);
                    if (f != b && b > e && (C & 1 || b > O)) f++;
                    ic(f, g, d)
                }
                a.j(i.$EVT_POSITION_CHANGE, g, t(e), b, e)
            }
        }

        function Ic() {
            var a = this;
            l.call(a, 0, 0, {
                yc: q
            });
            b.$Each(B, function(b) {
                C & 1 && b.oe(q);
                a.vc(b);
                b.$Shift(cb / gb)
            })
        }

        function Hc() {
            var a = this,
                b = Lb.$Elmt;
            l.call(a, -1, 2, {
                $Easing: e.$Linear,
                Ze: {
                    ob: nc
                },
                yc: q
            }, b, {
                ob: 1
            }, {
                ob: -2
            });
            a.jc = b
        }

        function zc(o, m) {
            var b = this,
                e, f, h, j, c;
            l.call(b, -1e8, 2e8, {
                nd: 100
            });
            b.md = function() {
                Z = d;
                db = g;
                a.j(i.$EVT_SWIPE_START, t(w.Y()), w.Y())
            };
            b.ud = function() {
                Z = k;
                j = k;
                var b = w.dg();
                a.j(i.$EVT_SWIPE_END, t(w.Y()), w.Y());
                if (!A) {
                    Lc(b.fg, s);
                    (!b.ob || b.eg) && ic(s, b.Lc)
                }
            };
            b.fc = function(g, d) {
                var a;
                if (j) a = c;
                else {
                    a = f;
                    if (h) {
                        var b = d / h;
                        a = n.$SlideEasing(b) * (f - e) + e
                    }
                }
                w.F(a)
            };
            b.Xb = function(a, d, c, g) {
                e = a;
                f = d;
                h = c;
                w.F(a);
                b.F(0);
                b.wd(c, g)
            };
            b.sf = function(a) {
                j = d;
                c = a;
                b.$Play(a, g, d)
            };
            b.uf = function(a) {
                c = a
            };
            w = new Jc;
            w.P(o);
            w.P(m)
        }

        function Ac() {
            var c = this,
                a = lc();
            b.A(a, 0);
            b.$Css(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.Ge = function(c) {
                b.$AppendChild(a, c);
                b.C(a)
            };
            c.ub = function() {
                b.W(a);
                b.Ic(a)
            }
        }

        function Gc(m, f) {
            var e = this,
                r, J, x, j, y = [],
                w, A, S, H, P, E, I, h, v, p;
            l.call(e, -G, G + 1, {});

            function C(a) {
                r && r.id();
                Q(m, a, 0);
                E = d;
                r = new bb.$Class(m, bb, b.Xc(b.$AttributeEx(m, "idle")) || dc, !u);
                r.F(0)
            }

            function U() {
                r.rc < bb.rc && C()
            }

            function M(p, r, o) {
                if (!H) {
                    H = d;
                    if (j && o) {
                        var g = o.width,
                            c = o.height,
                            m = g,
                            l = c;
                        if (g && c && n.$FillMode) {
                            if (n.$FillMode & 3 && (!(n.$FillMode & 4) || g > N || c > L)) {
                                var h = k,
                                    q = N / L * c / g;
                                if (n.$FillMode & 1) h = q > 1;
                                else if (n.$FillMode & 2) h = q < 1;
                                m = h ? g * L / c : N;
                                l = h ? L : c * N / g
                            }
                            b.$CssWidth(j, m);
                            b.$CssHeight(j, l);
                            b.G(j, (L - l) / 2);
                            b.H(j, (N - m) / 2)
                        }
                        b.I(j, "absolute");
                        a.j(i.$EVT_LOAD_END, f)
                    }
                }
                b.W(r);
                p && p(e)
            }

            function T(g, b, c, d) {
                if (d == db && s == f && u)
                    if (!Kc) {
                        var a = t(g);
                        D.Ue(a, f, b, e, c, L / N);
                        b.Df();
                        hb.$Shift(a - hb.gc() - 1);
                        hb.F(a);
                        z.Xb(a, a, 0)
                    }
            }

            function W(b) {
                if (b == db && s == f) {
                    if (!h) {
                        var a = g;
                        if (D)
                            if (D.zb == f) a = D.Xe();
                            else D.ub();
                        U();
                        h = new Fc(m, f, a, r);
                        h.Jd(p)
                    }!h.$IsPlaying() && h.Pc()
                }
            }

            function F(a, d, k) {
                if (a == f) {
                    if (a != d) B[d] && B[d].Wd();
                    else !k && h && h.Cg();
                    p && p.$Enable();
                    var l = db = b.R();
                    e.Ob(b.$CreateCallback(g, W, l))
                } else {
                    var j = c.min(f, a),
                        i = c.max(f, a),
                        o = c.min(i - j, j + q - i),
                        m = G + n.$LazyLoading - 1;
                    (!P || o <= m) && e.Ob()
                }
            }

            function Y() {
                if (s == f && h) {
                    h.xb();
                    p && p.$Quit();
                    p && p.$Disable();
                    h.Pd()
                }
            }

            function Z() {
                s == f && h && h.xb()
            }

            function V(b) {
                !R && a.j(i.$EVT_CLICK, f, b)
            }

            function O() {
                p = v.pInstance;
                h && h.Jd(p)
            }
            e.Ob = function(e, c) {
                c = c || x;
                if (y.length && !H) {
                    b.C(c);
                    if (!S) {
                        S = d;
                        a.j(i.$EVT_LOAD_START, f);
                        b.$Each(y, function(a) {
                            if (!b.$Attribute(a, "src")) {
                                a.src = b.$AttributeEx(a, "src2") || "";
                                b.vb(a, a["display-origin"])
                            }
                        })
                    }
                    b.Jf(y, j, b.$CreateCallback(g, M, e, c))
                } else M(e, c)
            };
            e.hg = function() {
                if (q == 1) {
                    e.Wd();
                    F(f, f)
                } else if (D) {
                    var a = D.Fe(q);
                    if (a) {
                        var h = db = b.R(),
                            c = f + lb,
                            d = B[t(c)];
                        return d.Ob(b.$CreateCallback(g, T, c, d, a, h), x)
                    }
                } else Nb(lb)
            };
            e.Jc = function() {
                F(f, f, d)
            };
            e.Wd = function() {
                p && p.$Quit();
                p && p.$Disable();
                e.Sd();
                h && h.gg();
                h = g;
                C()
            };
            e.Df = function() {
                b.W(m)
            };
            e.Sd = function() {
                b.C(m)
            };
            e.zg = function() {
                p && p.$Enable()
            };

            function Q(a, f, c, h) {
                if (b.$Attribute(a, Fb)) return;
                if (!E) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.$Attribute(a, "src")) {
                            P = d;
                            a["display-origin"] = b.vb(a);
                            b.W(a)
                        }
                    }
                    var e = b.wg(a);
                    if (e) {
                        var g = new Image;
                        b.$AttributeEx(g, "src2", e);
                        y.push(g)
                    }
                    c && b.A(a, (b.A(a) || 0) + 1)
                }
                var i = b.$Children(a);
                b.$Each(i, function(a) {
                    var e = a.tagName,
                        g = b.$AttributeEx(a, "u");
                    if (g == "player" && !v) {
                        v = a;
                        if (v.pInstance) O();
                        else b.$AddEvent(v, "dataavailable", O)
                    }
                    if (g == "caption") {
                        if (f) {
                            b.tf(a, b.$AttributeEx(a, "to"));
                            b.Af(a, b.$AttributeEx(a, "bf"));
                            I && b.$AttributeEx(a, "3d") && b.Bf(a, "preserve-3d")
                        }
                    } else if (!E && !c && !j) {
                        if (e == "A") {
                            if (b.$AttributeEx(a, "u") == "image") j = b.bg(a, "IMG");
                            else j = b.$FindChild(a, "image", d);
                            if (j) {
                                w = a;
                                b.vb(w, "block");
                                b.K(w, jb);
                                A = b.$CloneNode(w, d);
                                b.I(w, "relative");
                                b.Tc(A, 0);
                                b.$Css(A, "backgroundColor", "#000")
                            }
                        } else if (e == "IMG" && b.$AttributeEx(a, "u") == "image") j = a;
                        if (j) {
                            j.border = 0;
                            b.K(j, jb)
                        }
                    }
                    Q(a, f, c + 1, h)
                })
            }
            e.Nc = function(c, b) {
                var a = G - b;
                nc(J, a)
            };
            e.zb = f;
            o.call(e);
            I = b.$AttributeEx(m, "p");
            b.zf(m, I);
            b.yf(m, b.$AttributeEx(m, "po"));
            var K = b.$FindChild(m, "thumb", d);
            if (K) {
                e.ue = b.$CloneNode(K);
                b.W(K)
            }
            b.C(m);
            x = b.$CloneNode(X);
            b.A(x, 1e3);
            b.$AddEvent(m, "click", V);
            C(d);
            e.cc = j;
            e.Rd = A;
            e.Vc = m;
            e.jc = J = m;
            b.$AppendChild(J, x);
            a.$On(203, F);
            a.$On(28, Z);
            a.$On(24, Y)
        }

        function Fc(z, g, p, q) {
            var c = this,
                n = 0,
                v = 0,
                h, j, f, e, m, t, r, o = B[g];
            l.call(c, 0, 0);

            function w() {
                b.Ic(T);
                pc && m && o.Rd && b.$AppendChild(T, o.Rd);
                b.C(T, !m && o.cc)
            }

            function x() {
                c.Pc()
            }

            function y(a) {
                r = a;
                c.xb();
                c.Pc()
            }
            c.Pc = function() {
                var b = c.X();
                if (!A && !Z && !r && s == g) {
                    if (!b) {
                        if (h && !m) {
                            m = d;
                            c.Pd(d);
                            a.j(i.$EVT_SLIDESHOW_START, g, n, v, h, e)
                        }
                        w()
                    }
                    var k, p = i.$EVT_STATE_CHANGE;
                    if (b != e)
                        if (b == f) k = e;
                        else if (b == j) k = f;
                    else if (!b) k = j;
                    else k = c.qd();
                    a.j(p, g, b, n, j, f, e);
                    var l = u && (!H || M);
                    if (b == e)(f != e && !(H & 12) || l) && o.hg();
                    else(l || b != f) && c.wd(k, x)
                }
            };
            c.Cg = function() {
                f == e && f == c.X() && c.F(j)
            };
            c.gg = function() {
                D && D.zb == g && D.ub();
                var b = c.X();
                b < e && a.j(i.$EVT_STATE_CHANGE, g, -b - 1, n, j, f, e)
            };
            c.Pd = function(a) {
                p && b.Fb(Y, a && p.Fc.$Outside ? "" : "hidden")
            };
            c.Nc = function(c, b) {
                if (m && b >= h) {
                    m = k;
                    w();
                    o.Sd();
                    D.ub();
                    a.j(i.$EVT_SLIDESHOW_END, g, n, v, h, e)
                }
                a.j(i.$EVT_PROGRESS_CHANGE, g, b, n, j, f, e)
            };
            c.Jd = function(a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.pf, y)
                }
            };
            p && c.vc(p);
            h = c.pb();
            c.vc(q);
            j = h + q.gd;
            e = c.pb();
            f = u ? h + q.dd : e
        }

        function Hb(a, c, d) {
            b.H(a, c);
            b.G(a, d)
        }

        function nc(c, b) {
            var a = x > 0 ? x : S,
                d = yb * b * (a & 1),
                e = zb * b * (a >> 1 & 1);
            Hb(c, d, e)
        }

        function Cb(a) {
            if (!(C & 1)) a = c.min(I, c.max(a, E));
            return a
        }

        function Wb(a) {
            return !(C & 1) && (a - E < .0001 || I - a < .0001)
        }

        function cc() {
            Eb = Z;
            Ub = z.qd();
            F = w.Y()
        }

        function rc() {
            cc();
            if (A || !M && H & 12) {
                z.xb();
                a.j(i.re)
            }
        }

        function qc(g) {
            if (!A && (M || !(H & 12)) && !z.$IsPlaying()) {
                var b = w.Y(),
                    a = F,
                    f = 0;
                if (g && c.abs(P) >= n.$MinDragOffsetToSlide) {
                    a = b;
                    f = tb
                }
                if (Wb(b)) {
                    if (!g || R) a = c.round(a)
                } else a = c.ceil(a);
                a = Cb(a + f);
                if (!(C & 1)) {
                    if (I - a < .5) a = I;
                    if (a - E < .5) a = E
                }
                var d = c.abs(a - b);
                if (d < 1 && n.$SlideEasing != e.$Linear) d = 1 - c.pow(1 - d, 5);
                if (!R && Eb) z.he(Ub);
                else if (b == a) {
                    Ib.zg();
                    Ib.Jc()
                } else z.Xb(b, a, d * vb)
            }
        }

        function Tb(a) {
            !b.Nb(b.$EvtSrc(a), "nodrag") && b.$CancelEvent(a)
        }

        function Dc(a) {
            mc(a, 1)
        }

        function mc(c, j) {
            var e = b.$EvtSrc(c);
            xb = k;
            var l = b.Nb(e, "1", Vb);
            if ((!l || l === v) && !V && (!j || c.touches.length == 1)) {
                xb = b.Nb(e, "nodrag") || !mb || !Ec();
                var n = b.Nb(e, f, m.Gc);
                if (n) Xb = b.$Attribute(n, m.Gc);
                if (j) {
                    var p = c.touches[0];
                    Jb = p.clientX;
                    Kb = p.clientY
                } else {
                    var o = b.Nd(c);
                    Jb = o.x;
                    Kb = o.y
                }
                A = d;
                db = g;
                b.$AddEvent(h, j ? "touchmove" : "mousemove", Qb);
                b.R();
                R = 0;
                rc();
                if (!Eb) x = 0;
                P = 0;
                sb = 0;
                tb = 0;
                a.j(i.$EVT_DRAG_START, t(F), F, c)
            }
        }

        function Qb(g) {
            if (A) {
                var a;
                if (g.type != "mousemove")
                    if (g.touches.length == 1) {
                        var o = g.touches[0];
                        a = {
                            x: o.clientX,
                            y: o.clientY
                        }
                    } else ib();
                else a = b.Nd(g);
                if (a) {
                    var e = a.x - Jb,
                        f = a.y - Kb;
                    if (x || c.abs(e) > 1.5 || c.abs(f) > 1.5) {
                        if (c.floor(F) != F) x = x || S & V;
                        if ((e || f) && !x) {
                            if (V == 3)
                                if (c.abs(f) > c.abs(e)) x = 2;
                                else x = 1;
                            else x = V;
                            if (ub && x == 1 && c.abs(f) > c.abs(e) * 2.4) xb = d
                        }
                        var n = f,
                            i = zb;
                        if (x == 1) {
                            n = e;
                            i = yb
                        }
                        if (P - sb < -1.5) tb = 0;
                        else if (P - sb > 1.5) tb = -1;
                        sb = P;
                        P = n;
                        W = F - P / i / Xb;
                        if (!(C & 1)) {
                            var l = 0,
                                j = [-F + O, 0, F - q + U - O];
                            b.$Each(j, function(b, d) {
                                if (b > 0) {
                                    var a = c.pow(b, 1 / 1.6);
                                    a = c.tan(a * c.PI / 2);
                                    l = (a - b) * (d - 1)
                                }
                            });
                            var h = l + W,
                                m = k;
                            j = [-h + O, 0, h - q + U - O];
                            b.$Each(j, function(a, b) {
                                if (a > 0) {
                                    a = c.min(a, i);
                                    a = c.atan(a) * 2 / c.PI;
                                    a = c.pow(a, 1.6);
                                    W = a * (b - 1) + O;
                                    if (b) W += q - U;
                                    m = d
                                }
                            });
                            if (!m) W = h
                        }
                        if (P && x && !xb) {
                            b.$CancelEvent(g);
                            if (!Z) z.sf(W);
                            else z.uf(W)
                        }
                    }
                }
            }
        }

        function ib() {
            Bc();
            if (A) {
                R = P;
                b.R();
                b.V(h, "mousemove", Qb);
                b.V(h, "touchmove", Qb);
                R && u & 8 && (u = 0);
                z.xb();
                A = k;
                var c = w.Y();
                a.j(i.$EVT_DRAG_END, t(c), c, t(F), F);
                H & 12 && cc();
                qc(d)
            }
        }

        function vc(c) {
            var a = b.$EvtSrc(c),
                d = b.Nb(a, "1", Fb);
            if (v === d)
                if (R) {
                    b.$StopEvent(c);
                    while (a && v !== a) {
                        (a.tagName == "A" || b.$Attribute(a, "data-jssor-button")) && b.$CancelEvent(c);
                        a = a.parentNode
                    }
                } else u & 4 && (u = 0)
        }

        function Mc(d) {
            if (d != s) {
                var b = nb.X(),
                    a = Cb(d),
                    e = c.round(t(a));
                if (b - a < .5) a = b;
                B[s];
                s = e;
                Ib = B[s];
                w.F(a)
            }
        }

        function Lc(b, c) {
            x = 0;
            Mc(b);
            if (u & 2 && (lb > 0 && s == q - 1 || lb < 0 && !s)) u = 0;
            a.j(i.$EVT_PARK, s, c)
        }

        function ic(a, d, e) {
            if (!(C & 1)) {
                a = c.max(0, a);
                a = c.min(a, q - U + O);
                a = c.round(a)
            }
            a = t(a);
            b.$Each(eb, function(b) {
                b.uc(a, d, e)
            })
        }

        function Ec() {
            var b = i.Qd || 0,
                a = mb;
            i.Qd |= a;
            return V = a & ~b
        }

        function Bc() {
            if (V) {
                i.Qd &= ~mb;
                V = 0
            }
        }

        function lc() {
            var a = b.$CreateDiv();
            b.K(a, jb);
            b.I(a, "absolute");
            return a
        }

        function t(b, a) {
            a = a || q || 1;
            return (b % a + a) % a
        }

        function Bb(c, a, b) {
            u & 8 && (u = 0);
            Ab(c, vb, a, b)
        }

        function Mb() {
            b.$Each(eb, function(a) {
                a.Hc(a.hc.$ChanceToShow <= M)
            })
        }

        function tc() {
            if (!M) {
                M = 1;
                Mb();
                if (!A) {
                    H & 12 && qc();
                    H & 3 && B[s] && B[s].Jc()
                }
            }
            a.j(i.$EVT_MOUSE_LEAVE)
        }

        function sc() {
            if (M) {
                M = 0;
                Mb();
                A || !(H & 12) || rc()
            }
            a.j(i.$EVT_MOUSE_ENTER)
        }

        function uc() {
            b.$Each(fb, function(a) {
                b.K(a, jb);
                b.I(a, "absolute");
                b.Fb(a, "hidden");
                b.W(a)
            });
            b.K(X, jb)
        }

        function Nb(b, a) {
            Ab(b, a, d)
        }

        function Ab(l, g, m, o) {
            if (!A && (M || !(H & 12)) || n.$NaviQuitDrag) {
                Z = d;
                A = k;
                z.xb();
                if (g == f) g = vb;
                var b = t(nb.X()),
                    e = l;
                if (m) {
                    e = b + l;
                    e = c.round(e)
                }
                var a = e;
                if (!(C & 1)) {
                    if (o) a = t(a);
                    else if (C & 2 && (a < 0 && c.abs(b - E) < .0001 || a > q - U && c.abs(b - I) < .0001)) a = a < 0 ? I : E;
                    a = Cb(a);
                    if (I - a < .5) a = I;
                    if (a - E < .5) a = E
                }
                var j = (a - b) % q;
                a = b + j;
                var h = b == a ? 0 : g * c.abs(j),
                    i = 1;
                if (G > 1) i = (S & 1 ? rb : qb) / gb;
                h = c.min(h, g * i * 1.5);
                z.Xb(b, a, h || 1)
            }
        }
        a.$SlidesCount = function() {
            return fb.length
        };
        a.$CurrentIndex = function() {
            return s
        };
        a.$AutoPlay = function(a) {
            if (a == f) return u;
            if (a != u) {
                u = a;
                u && B[s] && B[s].Jc()
            }
        };
        a.$IsDragging = function() {
            return A
        };
        a.$IsSliding = function() {
            return Z
        };
        a.$IsMouseOver = function() {
            return !M
        };
        a.He = function() {
            return R
        };
        a.$OriginalWidth = function() {
            return K
        };
        a.$OriginalHeight = function() {
            return J
        };
        a.$ScaleHeight = function(b) {
            if (b == f) return kc || J;
            a.$ScaleSize(b / J * K, b)
        };
        a.$ScaleWidth = function(b) {
            if (b == f) return Pb || K;
            a.$ScaleSize(b, b / K * J)
        };
        a.$ScaleSize = function(c, a, d) {
            b.$CssWidth(v, c);
            b.$CssHeight(v, a);
            oc = c / K;
            jc = a / J;
            b.$Each(ac, function(a) {
                a.$ScaleSize(oc, jc, d)
            });
            if (!Pb) {
                b.Cb(Y, y);
                b.G(Y, 0);
                b.H(Y, 0)
            }
            Pb = c;
            kc = a
        };
        a.Ce = function(a) {
            return c.abs(a - E) < .0001
        };
        a.Be = function(a) {
            return c.abs(a - I) < .0001
        };
        a.$PlayTo = Ab;
        a.$GoTo = function(a) {
            z.Xb(a, a, 0)
        };
        a.$Next = function() {
            Nb(1)
        };
        a.$Prev = function() {
            Nb(-1)
        };
        a.$Pause = function() {
            u = 0
        };
        a.$Play = function() {
            a.$AutoPlay(u || 1)
        };
        a.$SetSlideshowTransitions = function(a) {
            n.$SlideshowOptions.$Transitions = a
        };
        a.$SetCaptionTransitions = function(a) {
            bb.$Transitions = a;
            bb.rc = b.R()
        };
        a.Bd = function(a) {
            a = t(a);
            if (C & 1) {
                var d = cb / gb,
                    b = t(nb.X()),
                    e = t(a - b + d),
                    f = t(c.abs(a - b));
                if (e >= G) {
                    if (f > q / 2)
                        if (a > b) a -= q;
                        else a += q
                } else if (a > b && e < d) a -= q;
                else if (a < b && e > d) a += q
            }
            return a
        };
        a.Ub = function(x, l) {
            a.$Elmt = v = b.$GetElement(x);
            K = b.$CssWidth(v);
            J = b.$CssHeight(v);
            n = b.s({
                $FillMode: 0,
                $LazyLoading: 1,
                $ArrowKeyNavigation: 1,
                $StartIndex: 0,
                $AutoPlay: 0,
                $Loop: 1,
                $HWA: d,
                $NaviQuitDrag: d,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3e3,
                $PauseOnHover: 1,
                $SlideDuration: 500,
                $SlideEasing: e.$OutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $Cols: 1,
                $Align: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, l);
            n.$HWA = n.$HWA && b.Kf();
            if (n.$Idle != f) n.$AutoPlayInterval = n.$Idle;
            if (n.$ParkingPosition != f) n.$Align = n.$ParkingPosition;
            S = n.$PlayOrientation & 3;
            kb = n.$SlideshowOptions;
            bb = b.s({
                $Class: r
            }, n.$CaptionSliderOptions);
            pb = n.$BulletNavigatorOptions;
            ab = n.$ArrowNavigatorOptions;
            Q = n.$ThumbnailNavigatorOptions;
            !n.$UISearchMode;
            var m = b.$Children(v);
            b.$Each(m, function(a, d) {
                var c = b.$AttributeEx(a, "u");
                if (c == "loading") X = a;
                else {
                    if (c == "slides") y = a;
                    if (c == "navigator") Db = a;
                    if (c == "arrowleft") Rb = a;
                    if (c == "arrowright") Ob = a;
                    if (c == "thumbnavigator") ob = a;
                    if (a.tagName != "STYLE" && a.tagName != "SCRIPT") ac[c || d] = new wc(a, c == "slides", b.Tf(["slides", "thumbnavigator"])[c])
                }
            });
            X = X || b.$CreateDiv(h);
            rb = b.$CssWidth(y);
            qb = b.$CssHeight(y);
            N = n.$SlideWidth || rb;
            L = n.$SlideHeight || qb;
            jb = {
                u: N,
                v: L,
                $Top: 0,
                $Left: 0
            };
            wb = n.$SlideSpacing;
            yb = N + wb;
            zb = L + wb;
            gb = S & 1 ? yb : zb;
            lb = n.$AutoPlaySteps;
            H = n.$PauseOnHover;
            dc = n.$AutoPlayInterval;
            vb = n.$SlideDuration;
            Lb = new Ac;
            if (n.$HWA && (!b.$IsBrowserFireFox() || ub)) Hb = function(a, c, d) {
                b.kc(a, {
                    $TranslateX: c,
                    $TranslateY: d
                })
            };
            u = n.$AutoPlay & 63;
            a.hc = l;
            b.$Attribute(v, Fb, "1");
            b.A(y, b.A(y) || 0);
            b.I(y, "absolute");
            Y = b.$CloneNode(y, d);
            b.Cb(Y, y);
            hb = new Hc;
            b.$AppendChild(Y, hb.jc);
            b.Fb(y, "hidden");
            H &= ub ? 10 : 5;
            var o = b.$Children(y);
            b.$Each(o, function(a) {
                a.tagName == "DIV" && !b.$AttributeEx(a, "u") && fb.push(a);
                b.A(a, (b.A(a) || 0) + 1)
            });
            T = lc();
            b.$Css(T, "backgroundColor", "#000");
            b.Tc(T, 0);
            b.A(T, 0);
            b.Cb(T, y.firstChild, y);
            q = fb.length;
            G = c.min(n.$Cols, q);
            U = ((S & 1) * rb + (S & 2) * qb / 2 + wb) / gb;
            gc = G < q;
            C = gc ? n.$Loop : 0;
            if (q) {
                uc();
                cb = G >= q ? 0 : n.$Align;
                if (kb) {
                    pc = kb.$ShowLink;
                    Gb = kb.$Class;
                    ec = !cb && G == 1 && q > 1 && Gb && (!b.$IsBrowserIE() || b.$BrowserVersion() >= 9)
                }
                if (!(C & 1)) {
                    O = cb / gb;
                    E = O;
                    I = E + q - U
                }
                mb = (G > 1 || cb ? S : -1) & n.$DragOrientation;
                Sb.Vd && b.$Css(y, Sb.Vd, ([g, "pan-y", "pan-x", "none"])[mb] || "");
                if (ec) D = new Gb(Lb, N, L, kb, ub, Hb);
                for (var i = 0; i < fb.length; i++) {
                    var s = fb[i],
                        w = new Gc(s, i);
                    B.push(w)
                }
                b.W(X);
                nb = new Ic;
                z = new zc(nb, hb);
                b.$AddEvent(v, "click", vc, d);
                b.$AddEvent(v, "mouseleave", tc);
                b.$AddEvent(v, "mouseenter", sc);
                b.$AddEvent(v, "mousedown", mc);
                b.$AddEvent(v, "touchstart", Dc);
                b.$AddEvent(v, "dragstart", Tb);
                b.$AddEvent(v, "selectstart", Tb);
                b.$AddEvent(j, "mouseup", ib);
                b.$AddEvent(h, "mouseup", ib);
                b.$AddEvent(h, "touchend", ib);
                b.$AddEvent(h, "touchcancel", ib);
                b.$AddEvent(j, "blur", ib);
                if (Db && pb) {
                    fc = new pb.$Class(Db, pb, K, J);
                    eb.push(fc)
                }
                if (ab && Rb && Ob) {
                    ab.$Loop = C;
                    hc = new ab.$Class(Rb, Ob, ab, K, J, a);
                    eb.push(hc)
                }
                if (ob && Q) {
                    Q.$StartIndex = n.$StartIndex;
                    Q.$ArrowKeyNavigation = Q.$ArrowKeyNavigation || 0;
                    bc = new Q.$Class(ob, Q);
                    !Q.$NoDrag && b.$Attribute(ob, Vb, "1");
                    eb.push(bc)
                }
                b.$Each(eb, function(a) {
                    a.Ec(q, B, X);
                    a.$On(p.dc, Bb)
                });
                b.$Css(v, "visibility", "visible");
                a.$ScaleSize(K, J);
                Mb();
                n.$ArrowKeyNavigation && b.$AddEvent(h, "keydown", function(a) {
                    if (a.keyCode == 37) Bb(-n.$ArrowKeyNavigation, d);
                    else a.keyCode == 39 && Bb(n.$ArrowKeyNavigation, d)
                });
                var k = n.$StartIndex;
                k = t(k);
                Ab(k, 0)
            }
        };
        b.Ub(a)
    };
    i.$EVT_CLICK = 21;
    i.$EVT_DRAG_START = 22;
    i.$EVT_DRAG_END = 23;
    i.$EVT_SWIPE_START = 24;
    i.$EVT_SWIPE_END = 25;
    i.$EVT_LOAD_START = 26;
    i.$EVT_LOAD_END = 27;
    i.re = 28;
    i.$EVT_MOUSE_ENTER = 31;
    i.$EVT_MOUSE_LEAVE = 32;
    i.$EVT_POSITION_CHANGE = 202;
    i.$EVT_PARK = 203;
    i.$EVT_SLIDESHOW_START = 206;
    i.$EVT_SLIDESHOW_END = 207;
    i.$EVT_PROGRESS_CHANGE = 208;
    i.$EVT_STATE_CHANGE = 209
})(window, document, Math, null, true, false)

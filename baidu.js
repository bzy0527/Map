window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20181127"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20181127"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20181127"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20181127"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20181127"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20181127"
        },
        "panoClick": {
            "version": "1033",
            "updateDate": "20181116"
        },
        "panoUdt": {
            "version": "20181116",
            "updateDate": "20181116"
        },
        "panoSwfAPI": {
            "version": "20150123",
            "updateDate": "20150123"
        },
        "panoSwfPlace": {
            "version": "20141112",
            "updateDate": "20141112"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20181127"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20181127"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20181127"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20181127"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20181127"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "oXec3eMiIws1586v9MuGfr7GuTTVtmPB";
(function() {
    function ba(a) {
        throw a;
    }
    var j = void 0,
        o = !0,
        p = null,
        q = !1;

    function s() {
        return function() {}
    }

    function ca(a) {
        return function(b) {
            this[a] = b
        }
    }

    function u(a) {
        return function() {
            return this[a]
        }
    }

    function da(a) {
        return function() {
            return a
        }
    }
    var ea, fa = [];

    function ga(a) {
        return function() {
            return fa[a].apply(this, arguments)
        }
    }

    function ha(a, b) {
        return fa[a] = b
    }
    var ia, x = ia = x || {
        version: "1.3.4"
    };
    x.ba = "$BAIDU$";
    window[x.ba] = window[x.ba] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    x.K = x.K || {};
    x.K.$ = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
    };
    x.$ = x.Dc = x.K.$;
    x.K.U = function(a) {
        a = x.K.$(a);
        if (a === p) return a;
        a.style.display = "none";
        return a
    };
    x.U = x.K.U;
    x.lang = x.lang || {};
    x.lang.sg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    x.sg = x.lang.sg;
    x.K.Pj = function(a) {
        return x.lang.sg(a) ? document.getElementById(a) : a
    };
    x.Pj = x.K.Pj;
    x.K.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName) c = a.getElementsByClassName(b);
        else {
            var d = a;
            d == p && (d = document);
            c = [];
            var d = d.getElementsByTagName("*"),
                e = d.length,
                f = RegExp("(^|\\s)" + b + "(\\s|$)"),
                g, i;
            for (i = g = 0; g < e; g++) f.test(d[g].className) && (c[i] = d[g], i++)
        }
        return c
    };
    x.getElementsByClassName = x.K.getElementsByClassName;
    x.K.contains = function(a, b) {
        var c = x.K.Pj,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    x.da = x.da || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.da.la = x.la = document.documentMode || +RegExp.$1);
    var ja = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > x.da.la ? (ja["for"] = "htmlFor", ja["class"] = "className") : (ja.htmlFor = "for", ja.className = "class");
    x.K.CG = ja;
    x.K.oF = function(a, b, c) {
        a = x.K.$(a);
        if (a === p) return a;
        if ("style" == b) a.style.cssText = c;
        else {
            b = x.K.CG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    x.oF = x.K.oF;
    x.K.pF = function(a, b) {
        a = x.K.$(a);
        if (a === p) return a;
        for (var c in b) x.K.oF(a, c, b[c]);
        return a
    };
    x.pF = x.K.pF;
    x.Tk = x.Tk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\　]+)|([\　\\xa0\\s\\t]+$)", "g");
        x.Tk.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    })();
    x.trim = x.Tk.trim;
    x.Tk.To = function(a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" : g
            })
        }
        return a
    };
    x.To = x.Tk.To;
    x.K.Tb = function(a, b) {
        a = x.K.$(a);
        if (a === p) return a;
        for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
            g = 0;
            for (e = c.length; g < e; ++g)
                if (c[g] == d[i]) {
                    c.splice(g, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    };
    x.Tb = x.K.Tb;
    x.K.Lx = function(a, b, c) {
        a = x.K.$(a);
        if (a === p) return a;
        var d;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" : "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    };
    x.Lx = x.K.Lx;
    x.K.show = function(a) {
        a = x.K.$(a);
        if (a === p) return a;
        a.style.display = "";
        return a
    };
    x.show = x.K.show;
    x.K.GD = function(a) {
        a = x.K.$(a);
        return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    x.K.Ua = function(a, b) {
        a = x.K.$(a);
        if (a === p) return a;
        for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    };
    x.Ua = x.K.Ua;
    x.K.FB = x.K.FB || {};
    x.K.Nl = x.K.Nl || [];
    x.K.Nl.filter = function(a, b, c) {
        for (var d = 0, e = x.K.Nl, f; f = e[d]; d++)
            if (f = f[c]) b = f(a, b);
        return b
    };
    x.Tk.uO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    };
    x.K.H_ = function(a) {
        x.K.ct(a, "expand") ? x.K.Tb(a, "expand") : x.K.Ua(a, "expand")
    };
    x.K.ct = function(a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return q;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        x.forEach(this, function(a) {
            for (var a = a.className, e = 0; e < b.length; e++)
                if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                    c = q;
                    return
                }
            c !== q && (c = o)
        });
        return c
    };
    x.K.sj = function(a, b) {
        var c = x.K,
            a = c.$(a);
        if (a === p) return a;
        var b = x.Tk.uO(b),
            d = a.style[b];
        if (!d) var e = c.FB[b],
            d = a.currentStyle || (x.da.la ? a.style : getComputedStyle(a, p)),
            d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Nl) d = e.filter(b, d, "get");
        return d
    };
    x.sj = x.K.sj;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1);
    x.da.nM = /webkit/i.test(navigator.userAgent);
    x.da.oY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.da.sE = "CSS1Compat" == document.compatMode;
    x.K.ha = function(a) {
        a = x.K.$(a);
        if (a === p) return a;
        var b = x.K.GD(a),
            c = x.da,
            d = x.K.sj;
        c.oY > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
                left: 0,
                top: 0
            },
            f;
        if (a == (c.la && !c.sE ? b.body : b.documentElement)) return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.la && !c.sE) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.nM > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while (f && f != a);
            if (c.opera > 0 || c.nM > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body;) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Se = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.da.y1 = o);
    var ka = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) && !/chrome/i.test(ka) && (x.da.iF = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Gw = +RegExp.$1);
    x.kc = x.kc || {};
    x.kc.Gb = function(a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)
            for (d = 0; d < e; d++) {
                c = a[d];
                c = b.call(a, c, d);
                if (c === q) break
            }
        return a
    };
    x.Gb = x.kc.Gb;
    x.lang.ba = function() {
        return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
    };
    window[x.ba]._counter = window[x.ba]._counter || 1;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.nt = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    x.lang.Ca = function(a) {
        this.ba = a || x.lang.ba();
        window[x.ba]._instances[this.ba] = this
    };
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Ca.prototype.gi = ga(0);
    x.lang.Ca.prototype.toString = function() {
        return "[object " + (this.zQ || "Object") + "]"
    };
    x.lang.$y = function(a, b) {
        this.type = a;
        this.returnValue = o;
        this.target = b || p;
        this.currentTarget = p
    };
    x.lang.Ca.prototype.addEventListener = function(a, b, c) {
        if (x.lang.nt(b)) {
            !b.dl && (b.dl = {});
            !this.Gi && (this.Gi = {});
            var d = this.Gi,
                e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && ba("nonstandard key:" + c);
                e = b.Dx = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            typeof b.dl[a] != "object" && (b.dl[a] = {});
            e = e || x.lang.ba();
            b.dl[a].Dx = e;
            d[a][e] = b
        }
    };
    x.lang.Ca.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (x.lang.nt(b)) {
            if (!b.dl || !b.dl[a]) return;
            b = b.dl[a].Dx
        } else if (!x.lang.sg(b)) return;
        !this.Gi && (this.Gi = {});
        var c = this.Gi;
        c[a] && c[a][b] && delete c[a][b]
    };
    x.lang.Ca.prototype.dispatchEvent = function(a, b) {
        x.lang.sg(a) && (a = new x.lang.$y(a));
        !this.Gi && (this.Gi = {});
        var b = b || {},
            c;
        for (c in b) a[c] = b[c];
        var d = this.Gi,
            e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        x.lang.nt(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")
            for (c in d[e]) d[e][c].apply(this, arguments);
        return a.returnValue
    };
    x.lang.ua = function(a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f) e[d] = f[d];
        a.prototype.constructor = a;
        a.y_ = b.prototype;
        if ("string" == typeof c) e.zQ = c
    };
    x.ua = x.lang.ua;
    x.lang.Kc = function(a) {
        return window[x.ba]._instances[a] || p
    };
    x.platform = x.platform || {};
    x.platform.gM = /macintosh/i.test(navigator.userAgent);
    x.platform.l3 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.oM = /windows/i.test(navigator.userAgent);
    x.platform.wY = /x11/i.test(navigator.userAgent);
    x.platform.Jm = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (x.platform.QJ = x.QJ = RegExp.$1);
    x.platform.qY = /ipad/i.test(navigator.userAgent);
    x.platform.oE = /iphone/i.test(navigator.userAgent);

    function la(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    x.lang.Vw = function(a) {
        var b = window[x.ba];
        b.KS && delete b.KS[a]
    };
    x.event = {};
    x.M = x.event.M = function(a, b, c) {
        if (!(a = x.$(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    x.bd = x.event.bd = function(a, b, c) {
        if (!(a = x.$(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    x.K.ct = function(a, b) {
        if (!a || !a.className || typeof a.className != "string") return q;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (d) {
            return q
        }
        return c > -1
    };
    x.VK = function() {
        function a(a) {
            document.addEventListener && (this.element = a, this.YK = this.zk ? "touchstart" : "mousedown", this.oD = this.zk ? "touchmove" : "mousemove", this.nD = this.zk ? "touchend" : "mouseup", this.oh = q, this.hu = this.gu = 0, this.element.addEventListener(this.YK, this, q), ia.M(this.element, "mousedown", s()), this.handleEvent(p))
        }
        a.prototype = {
            zk: "ontouchstart" in window || "createTouch" in document,
            start: function(a) {
                ma(a);
                this.oh = q;
                this.gu = this.zk ? a.touches[0].clientX : a.clientX;
                this.hu = this.zk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.oD, this, q);
                this.element.addEventListener(this.nD, this, q)
            },
            move: function(a) {
                na(a);
                var c = this.zk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.zk ? a.touches[0].clientX : a.clientX) - this.gu) || 10 < Math.abs(c - this.hu)) this.oh = o
            },
            end: function(a) {
                na(a);
                this.oh || (a = document.createEvent("Event"), a.initEvent("tap", q, o), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.oD, this, q);
                this.element.removeEventListener(this.nD, this, q)
            },
            handleEvent: function(a) {
                if (a) switch (a.type) {
                    case this.YK:
                        this.start(a);
                        break;
                    case this.oD:
                        this.move(a);
                        break;
                    case this.nD:
                        this.end(a)
                }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var z = window.BMap || {};
    z.version = "2.0";
    z.JU = 0.34 > Math.random();
    0 <= z.version.indexOf("#") && (z.version = "2.0");
    z.Fr = [];
    z.We = function(a) {
        this.Fr.push(a)
    };
    z.vr = [];
    z.Um = function(a) {
        this.vr.push(a)
    };
    z.XU = z.apiLoad || function() {
        z.version && z.version >= 1.5 && oa(z.wc + "?qt=verify&ak=" + pa, function(a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.La().innerHTML = "";
                    map.Gi = {}
                }
                z = p;
                var b = "百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度LBS开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
                switch (a.error) {
                    case 101:
                        b = "开发者禁用了该ak的jsapi服务权限。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
                        break;
                    case 102:
                        b = "开发者Referer不正确。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。"
                }
                alert(b)
            }
        })
    };
    var pa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var qa = window.BMap_loadScriptTime,
        ra = (new Date).getTime(),
        sa = p,
        ta = o,
        ua = 5042,
        va = 5002,
        wa = 5003,
        xa = "load_mapclick",
        ya = 5038,
        za = 5041,
        Ba = 5047,
        Ca = 5036,
        Da = 5039,
        Ea = 5037,
        Fa = 5040,
        Ga = 5011,
        Ha = 7E3;
    var Ia = 0;

    function Ka(a, b) {
        if (a = x.$(a)) {
            var c = this;
            x.lang.Ca.call(c);
            b = b || {};
            c.D = {
                rk: b.fixedZoomCenter || q,
                kC: 200,
                Hb: o,
                bx: q,
                gD: o,
                Qo: o,
                Ro: b.enableWheelZoom || q,
                TK: o,
                iD: o,
                om: o,
                Is: o,
                pm: o,
                Oo: b.enable3DBuilding || q,
                Gc: 25,
                q0: 240,
                LU: 450,
                Yb: F.Yb,
                Fd: F.Fd,
                Ox: !!b.Ox,
                gc: Math.round(b.minZoom) || 1,
                $b: Math.round(b.maxZoom) || 19,
                Jb: b.mapType || La,
                c4: q,
                OK: b.drawer || Ia,
                ax: o,
                Zw: 500,
                xW: b.enableHighResolution !== q,
                lj: b.enableMapClick !== q,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                TF: 99,
                xe: b.mapStyle || p,
                EY: b.logoControl === q ? q : o,
                dV: [],
                Aw: b.beforeClickIcon || p
            };
            c.D.xe && (this.fY(c.D.xe.controls), this.aM(c.D.xe.geotableId));
            c.D.xe && c.D.xe.styleId && c.V2(c.D.xe.styleId);
            c.D.gm = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.D.Is = b.enableAutoResize);
            b.enableStreetEntrance === q && (c.D.pm = b.enableStreetEntrance);
            b.enableDeepZoom === q && (c.D.TK = b.enableDeepZoom);
            var d = c.D.dV;
            if (G())
                for (var e = 0, f = d.length; e < f; e++)
                    if (x.da[d[e]]) {
                        c.D.devicePixelRatio = 1;
                        break
                    }
            d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e) c.D.TF = 99;
            c.Va = a;
            c.yB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.va());
            b.size && this.Ae(b.size);
            d = c.Bb();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.ye = c.platform.firstChild;
            c.ye.style.width = c.width + "px";
            c.ye.style.height = c.height + "px";
            c.Wd = {};
            c.Oe = new H(0, 0);
            c.mc = new H(0, 0);
            c.Oa = 3;
            c.Lc = 0;
            c.CC = p;
            c.BC = p;
            c.Xb = "";
            c.Hw = "";
            c.Oh = {};
            c.Oh.custom = {};
            c.Ta = 0;
            b.useWebGL === q && Ma(q);
            c.P = new Na(a, {
                Of: "api",
                PS: o
            });
            c.P.U();
            c.P.tF(c);
            b = b || {};
            d = c.Jb = c.D.Jb;
            c.ie = d.dp();
            d === Pa && Qa(va);
            d === Sa && Qa(wa);
            d = c.D;
            d.MO = Math.round(b.minZoom);
            d.LO = Math.round(b.maxZoom);
            c.Vu();
            c.R = {
                Hc: q,
                lc: 0,
                sp: 0,
                sM: 0,
                p3: 0,
                cC: q,
                aF: -1,
                Qe: []
            };
            c.platform.style.cursor = c.D.Yb;
            for (e = 0; e < z.Fr.length; e++) z.Fr[e](c);
            c.R.aF = e;
            c.ca();
            I.load("map", function() {
                c.yb()
            });
            c.D.lj && (setTimeout(function() {
                Qa(xa)
            }, 1E3), I.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.ba] = new Ta(c)
            }, o));
            Ua() && I.load("oppc", function() {
                c.tz()
            });
            G() && I.load("opmb", function() {
                c.tz()
            });
            a = p;
            c.MB = []
        }
    }
    x.lang.ua(Ka, x.lang.Ca, "Map");
    x.extend(Ka.prototype, {
        va: function() {
            var a = K("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = K("div", {
                    "class": "BMap_mask"
                }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        yB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Va(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ca: function() {
            var a = this;
            a.to = function() {
                var b = a.Bb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new L(a.width, a.height),
                        d = new M("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.hk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.ye.style.width = (a.width = b.width) + "px";
                    a.ye.style.height = (a.height = b.height) + "px";
                    c = new M("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.D.Is && (a.R.Zl = setInterval(a.to, 80))
        },
        hk: function(a, b, c, d) {
            var e = this.oa().yc(this.fa()),
                f = this.ie,
                g = o;
            c && H.fM(c) && (this.Oe = new H(c.lng, c.lat), g = q);
            if (c = c && d ? f.Ck(c, this.Xb) : this.mc)
                if (this.mc = new H(c.lng + a * e, c.lat - b * e), (a = f.nh(this.mc, this.Xb)) && g) this.Oe = a
        },
        Cg: function(a, b) {
            if (Wa(a) && (this.Vu(), this.dispatchEvent(new M("onzoomstart")), a = this.Wn(a).zoom, a !== this.Oa)) {
                this.Lc = this.Oa;
                this.Oa = a;
                var c;
                b ? c = b : this.gh() && (c = this.gh().ha());
                c && (c = this.bc(c, this.Lc), this.hk(this.width / 2 - c.x, this.height / 2 - c.y, this.wb(c, this.Lc), o));
                this.dispatchEvent(new M("onzoomstartcode"))
            }
        },
        Nc: function(a) {
            this.Cg(a)
        },
        XF: function(a) {
            this.Cg(this.Oa + 1, a)
        },
        YF: function(a) {
            this.Cg(this.Oa - 1, a)
        },
        ui: function(a) {
            a instanceof H && (this.mc = this.ie.Ck(a, this.Xb), this.Oe = H.fM(a) ? new H(a.lng, a.lat) : this.ie.nh(this.mc, this.Xb))
        },
        wg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.hk(-a, -b)
        },
        qw: function(a) {
            a && Xa(a.Ge) && (a.Ge(this), this.dispatchEvent(new M("onaddcontrol", a)))
        },
        CN: function(a) {
            a && Xa(a.remove) && (a.remove(), this.dispatchEvent(new M("onremovecontrol", a)))
        },
        wo: function(a) {
            a && Xa(a.ra) && (a.ra(this), this.dispatchEvent(new M("onaddcontextmenu", a)))
        },
        Ep: function(a) {
            a && Xa(a.remove) && (this.dispatchEvent(new M("onremovecontextmenu", a)), a.remove())
        },
        Ka: function(a) {
            a && Xa(a.Ge) && (a.Ge(this), this.dispatchEvent(new M("onaddoverlay", a)))
        },
        Ub: function(a) {
            a && Xa(a.remove) && (a.remove(), this.dispatchEvent(new M("onremoveoverlay", a)))
        },
        jK: function() {
            this.dispatchEvent(new M("onclearoverlays"))
        },
        Vg: function(a) {
            a && this.dispatchEvent(new M("onaddtilelayer", a))
        },
        wh: function(a) {
            a && this.dispatchEvent(new M("onremovetilelayer", a))
        },
        zg: function(a) {
            if (this.Jb !== a) {
                var b = new M("onsetmaptype");
                b.T3 = this.Jb;
                this.Jb = this.D.Jb = a;
                this.ie = this.Jb.dp();
                this.hk(0, 0, this.Ha(), o);
                this.Vu();
                var c = this.Wn(this.fa()).zoom;
                this.Cg(c);
                this.dispatchEvent(b);
                b = new M("onmaptypechange");
                b.Oa = c;
                b.Jb = a;
                this.dispatchEvent(b);
                (a === Ya || a === Sa) && Qa(wa)
            }
        },
        Vf: function(a) {
            var b = this;
            if (a instanceof H) b.ui(a, {
                noAnimation: o
            });
            else if (Za(a))
                if (b.Jb === Pa) {
                    var c = F.gC[a];
                    c && (pt = c.m, b.Vf(pt))
                } else {
                    var d = this.JH();
                    d.wF(function(c) {
                        0 === d.zm() && 2 === d.Fa.result.type && (b.Vf(c.xk(0).point), Pa.tk(a) && b.qF(a))
                    });
                    d.search(a, {
                        log: "center"
                    })
                }
        },
        Dd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            z.Dn("cus.fire", "time", {
                z_loadscripttime: ra - qa
            });
            var c = this;
            if (Za(a))
                if (c.Jb === Pa) {
                    var d = F.gC[a];
                    d && (pt = d.m, c.Dd(pt, b))
                } else {
                    var e = c.JH();
                    e.wF(function(d) {
                        if (0 === e.zm() && (2 === e.Fa.result.type || 11 === e.Fa.result.type)) {
                            var d = d.xk(0).point,
                                f = b || O.gx(e.Fa.content.level, c);
                            c.Dd(d, f);
                            Pa.tk(a) && c.qF(a)
                        }
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
            else if (a instanceof H && b) {
                b = c.Wn(b).zoom;
                c.Lc = c.Oa || b;
                c.Oa = b;
                d = c.Oe;
                c.Oe = new H(a.lng, a.lat);
                c.mc = c.ie.Ck(c.Oe, c.Xb);
                c.CC = c.CC || c.Oa;
                c.BC = c.BC || c.Oe;
                var f = new M("onload"),
                    g = new M("onloadcode");
                f.point = new H(a.lng, a.lat);
                f.pixel = c.bc(c.Oe, c.Oa);
                f.zoom = b;
                c.loaded || (c.loaded = o, c.dispatchEvent(f), sa || (sa = $a()));
                c.dispatchEvent(g);
                f = new M("onmoveend");
                f.lH = "centerAndZoom";
                d.nb(c.Oe) || c.dispatchEvent(f);
                c.dispatchEvent(new M("onmoveend"));
                c.Lc !== c.Oa && (d = new M("onzoomend"), d.lH = "centerAndZoom", c.dispatchEvent(d));
                c.D.Oo && c.Oo()
            }
        },
        JH: function() {
            this.R.CM || (this.R.CM = new ab(1));
            return this.R.CM
        },
        reset: function() {
            this.Dd(this.BC, this.CC, o)
        },
        enableDragging: function() {
            this.D.Hb = o
        },
        disableDragging: function() {
            this.D.Hb = q
        },
        enableInertialDragging: function() {
            this.D.ax = o
        },
        disableInertialDragging: function() {
            this.D.ax = q
        },
        enableScrollWheelZoom: function() {
            this.D.Ro = o
        },
        disableScrollWheelZoom: function() {
            this.D.Ro = q
        },
        enableContinuousZoom: function() {
            this.D.Qo = o
        },
        disableContinuousZoom: function() {
            this.D.Qo = q
        },
        enableDoubleClickZoom: function() {
            this.D.gD = o
        },
        disableDoubleClickZoom: function() {
            this.D.gD = q
        },
        enableKeyboard: function() {
            this.D.bx = o
        },
        disableKeyboard: function() {
            this.D.bx = q
        },
        enablePinchToZoom: function() {
            this.D.om = o
        },
        disablePinchToZoom: function() {
            this.D.om = q
        },
        enableAutoResize: function() {
            this.D.Is = o;
            this.to();
            this.R.Zl || (this.R.Zl = setInterval(this.to, 80))
        },
        disableAutoResize: function() {
            this.D.Is = q;
            this.R.Zl && (clearInterval(this.R.Zl), this.R.Zl = p)
        },
        Oo: function() {
            this.D.Oo = o;
            this.Ln || (this.Ln = new bb({
                bL: o
            }), this.Vg(this.Ln))
        },
        hW: function() {
            this.D.Oo = q;
            this.Ln && (this.wh(this.Ln), this.Ln = p, delete this.Ln)
        },
        Bb: function() {
            return this.rs && this.rs instanceof L ? new L(this.rs.width, this.rs.height) : new L(this.Va.clientWidth, this.Va.clientHeight)
        },
        Ae: function(a) {
            a && a instanceof L ? (this.rs = a, this.Va.style.width = a.width + "px", this.Va.style.height = a.height + "px") : this.rs = p
        },
        Ha: u("Oe"),
        fa: u("Oa"),
        yV: function() {
            this.to()
        },
        Wn: function(a) {
            var b = this.D.gc,
                c = this.D.$b,
                d = q,
                a = Math.round(a);
            a < b && (d = o, a = b);
            a > c && (d = o, a = c);
            return {
                zoom: a,
                pD: d
            }
        },
        La: u("Va"),
        bc: function(a, b) {
            b = b || this.fa();
            return this.ie.bc(a, b, this.mc, this.Bb(), this.Xb)
        },
        wb: function(a, b) {
            b = b || this.fa();
            return this.ie.wb(a, b, this.mc, this.Bb(), this.Xb)
        },
        Ve: function(a, b) {
            if (a) {
                var c = this.bc(new H(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        qN: function(a, b) {
            if (a) {
                var c = new R(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.wb(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Xb;
            this.Jb === Pa && c && cb.pK(a, this, b)
        },
        N3: function(a, b) {
            var c = map.Xb;
            this.Jb === Pa && c && cb.oK(a, this, b)
        },
        O3: function(a, b) {
            var c = this,
                d = map.Xb;
            c.Jb === Pa && d && cb.pK(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        L3: function(a, b) {
            var c = map.Xb;
            this.Jb === Pa && c && (a.x += this.offsetX, a.y += this.offsetY, cb.oK(a, this, b))
        },
        Hd: function(a) {
            if (!this.Nx()) return new db;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || p,
                b = this.wb({
                    x: a[3],
                    y: this.height - a[2]
                }, c),
                a = this.wb({
                    x: this.width - a[1],
                    y: a[0]
                }, c);
            return new db(b, a)
        },
        Nx: function() {
            return !!this.loaded
        },
        RR: function(a, b) {
            for (var c = this.oa(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.Zo(), i = c = c.vm(); i >= g; i--) {
                var k = this.oa().yc(i);
                if (a.LF().lng / k < this.width - f && a.LF().lat / k < this.height - d) break
            }
            i += e;
            i < g && (i = g);
            i > c && (i = c);
            return i
        },
        bt: function(a, b) {
            var c = {
                center: this.Ha(),
                zoom: this.fa()
            };
            if (!a || !a instanceof db && 0 === a.length || a instanceof db && a.xj()) return c;
            var d = [];
            a instanceof db ? (d.push(a.nf()), d.push(a.ve())) : d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++) e.push(this.ie.Ck(d[f], this.Xb));
            d = new db;
            for (f = e.length - 1; 0 <= f; f--) d.extend(e[f]);
            if (d.xj()) return c;
            c = d.Ha();
            e = this.RR(d, b);
            b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.oa().yc(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
            c = this.ie.nh(c, this.Xb);
            return {
                center: c,
                zoom: e
            }
        },
        zh: function(a, b) {
            var c;
            c = a && a.center ? a : this.bt(a, b);
            var b = b || {},
                d = b.delay || 200;
            if (c.zoom === this.Oa && b.enableAnimation !== q) {
                var e = this;
                setTimeout(function() {
                    e.ui(c.center, {
                        duration: 210
                    })
                }, d)
            } else this.Dd(c.center, c.zoom)
        },
        Qf: u("Wd"),
        gh: function() {
            return this.R.ob && this.R.ob.Wa() ? this.R.ob : p
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.nb(b)) return 0;
                var c = 0,
                    c = S.Xo(a, b);
                if (c === p || c === j) c = 0;
                return c
            }
        },
        wx: function() {
            var a = [],
                b = this.wa,
                c = this.De;
            if (b)
                for (var d in b) b[d] instanceof eb && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++) a.push(c[d])
            }
            return a
        },
        oa: u("Jb"),
        tz: function() {
            for (var a = this.R.aF; a < z.Fr.length; a++) z.Fr[a](this);
            this.R.aF = a
        },
        qF: function(a) {
            this.Xb = Pa.tk(a);
            this.Hw = Pa.nL(this.Xb);
            this.Jb === Pa && this.ie instanceof fb && (this.ie.ej = this.Xb)
        },
        setDefaultCursor: function(a) {
            this.D.Yb = a;
            this.platform && (this.platform.style.cursor = this.D.Yb)
        },
        getDefaultCursor: function() {
            return this.D.Yb
        },
        setDraggingCursor: function(a) {
            this.D.Fd = a
        },
        getDraggingCursor: function() {
            return this.D.Fd
        },
        Ix: function() {
            return this.D.xW && 1.5 <= this.D.devicePixelRatio
        },
        sw: function(a, b) {
            b ? this.Oh[b] || (this.Oh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof gb && (this.Oh[b][a.ba] = a, a.ra(this));
            var c = this;
            I.load("hotspot", function() {
                c.tz()
            }, o)
        },
        qZ: function(a, b) {
            b || (b = "custom");
            this.Oh[b][a.ba] && delete this.Oh[b][a.ba]
        },
        em: function(a) {
            a || (a = "custom");
            this.Oh[a] = {}
        },
        Vu: function() {
            var a = this.Jb.Zo(),
                b = this.Jb.vm(),
                c = this.D;
            c.gc = c.MO || a;
            c.$b = c.LO || b;
            c.gc < a && (c.gc = a);
            c.$b > b && (c.$b = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.D.$b && (a = this.D.$b);
            this.D.MO = a;
            this.sJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.D.gc && (a = this.D.gc);
            this.D.LO = a;
            this.sJ()
        },
        sJ: function() {
            this.Vu();
            var a = this.D;
            this.Oa < a.gc ? this.Nc(a.gc) : this.Oa > a.$b && this.Nc(a.$b);
            var b = new M("onzoomspanchange");
            b.gc = a.gc;
            b.$b = a.$b;
            this.dispatchEvent(b)
        },
        X2: u("MB"),
        getKey: function() {
            return pa
        },
        Tt: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close();
            b.D.lj = q;
            z.Dn("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.v_(a.styleJson));
                G() && x.da.iF ? setTimeout(function() {
                    b.D.xe = a;
                    b.dispatchEvent(new M("onsetcustomstyles", a))
                }, 50) : (this.D.xe = a, this.dispatchEvent(new M("onsetcustomstyles", a)), this.aM(b.D.xe.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = o);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                Qa(5050, c);
                a.style && (c = b.D.gm[a.style] ? b.D.gm[a.style].backColor : b.D.gm.normal.backColor) && (this.La().style.backgroundColor = c)
            }
        },
        fY: function(a) {
            this.controls || (this.controls = {
                navigationControl: new hb,
                scaleControl: new ib,
                overviewMapControl: new jb,
                mapTypeControl: new kb
            });
            var b = this,
                c;
            for (c in this.controls) b.CN(b.controls[c]);
            a = a || [];
            x.kc.Gb(a, function(a) {
                b.qw(b.controls[a])
            })
        },
        aM: function(a) {
            a ? this.os && this.os.zf === a || (this.wh(this.os), this.os = new lb({
                geotableId: a
            }), this.Vg(this.os)) : this.wh(this.os)
        },
        Wb: function() {
            var a = this.fa() >= this.D.TF && this.oa() === La && 18 >= this.fa(),
                b = q;
            try {
                document.createElement("canvas").getContext("2d"), b = o
            } catch (c) {
                b = q
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.Xg,
                code: this.bs
            }
        },
        wm: function() {
            this.P.ao();
            return this.P
        },
        setPanorama: function(a) {
            this.P = a;
            this.P.tF(this)
        },
        v_: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                x.extend(f, g);
                var g = [],
                    i;
                for (i in b)
                    if (f[i])
                        if ("elementType" === i) g.push(b[i] + ":" + c[f[i]]);
                        else {
                            switch (f[i]) {
                                case "poilabel":
                                    f[i] = "poi";
                                    break;
                                case "districtlabel":
                                    f[i] = "label"
                            }
                            g.push(b[i] + ":" + f[i])
                        }
                2 < g.length && d.push(g.join("|"))
            }
            return d.join(",")
        },
        QZ: function(a) {
            this.D.SK = a
        }
    });

    function Qa(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                d;
            for (d in b) c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function(a) {
                    a && (mb = o, setTimeout(function() {
                        nb.src = z.wc + "images/blank.gif?" + a.src
                    }, 50))
                },
                f = function() {
                    var a = ob.shift();
                    a && e(a)
                };
            d = (1E8 * Math.random()).toFixed(0);
            mb ? ob.push({
                src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            }) : e({
                src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            });
            pb || (x.M(nb, "load", function() {
                mb = q;
                f()
            }), x.M(nb, "error", function() {
                mb = q;
                f()
            }), pb = o)
        }
    }
    var mb, pb, ob = [],
        nb = new Image;
    Qa(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    z.VL = {
        TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["gss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    z.$X = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "pcsv0.map.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    z.Y_ = {
        "0": {
            proto: "http://",
            domain: z.$X
        },
        1: {
            proto: "https://",
            domain: z.VL
        },
        2: {
            proto: "https://",
            domain: z.VL
        }
    };
    z.Qy = window.HOST_TYPE || "0";
    z.url = z.Y_[z.Qy];
    z.wp = z.url.proto + z.url.domain.baidumap + "/";
    z.wc = z.url.proto + ("2" == z.Qy ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
    z.ma = z.url.proto + ("2" == z.Qy ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
    z.cj = z.url.proto + z.url.domain.main_domain_cdn.webmap[0] + "/";
    z.rg = function(a, b) {
        var c, d, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = z.wc + b;
                break;
            case "main_domain_cdn":
                c = z.ma + b;
                break;
            default:
                d = z.url.domain[a], "[object Array]" == Object.prototype.toString.call(d) ? (c = [], x.kc.Gb(d, function(a, d) {
                    c[d] = z.url.proto + a + "/" + b
                })) : c = z.url.proto + z.url.domain[a] + "/" + b
        }
        return c
    };

    function qb(a) {
        var b = {
            duration: 1E3,
            Gc: 30,
            Ko: 0,
            jc: rb.AM,
            Et: s()
        };
        this.Yf = [];
        if (a)
            for (var c in a) b[c] = a[c];
        this.k = b;
        if (Wa(b.Ko)) {
            var d = this;
            setTimeout(function() {
                d.start()
            }, b.Ko)
        } else b.Ko != sb && this.start()
    }
    var sb = "INFINITE";
    qb.prototype.start = function() {
        this.Nu = $a();
        this.Yz = this.Nu + this.k.duration;
        tb(this)
    };
    qb.prototype.add = function(a) {
        this.Yf.push(a)
    };

    function tb(a) {
        var b = $a();
        b >= a.Yz ? (Xa(a.k.va) && a.k.va(a.k.jc(1)), Xa(a.k.finish) && a.k.finish(), 0 < a.Yf.length && (b = a.Yf[0], b.Yf = [].concat(a.Yf.slice(1)), b.start())) : (a.xy = a.k.jc((b - a.Nu) / a.k.duration), Xa(a.k.va) && a.k.va(a.xy), a.FF || (a.Wr = setTimeout(function() {
            tb(a)
        }, 1E3 / a.k.Gc)))
    }
    qb.prototype.stop = function(a) {
        this.FF = o;
        for (var b = 0; b < this.Yf.length; b++) this.Yf[b].stop(), this.Yf[b] = p;
        this.Yf.length = 0;
        this.Wr && (clearTimeout(this.Wr), this.Wr = p);
        this.k.Et(this.xy);
        a && (this.Yz = this.Nu, tb(this))
    };
    qb.prototype.cancel = ga(1);
    var rb = {
        AM: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        bD: function(a) {
            return a * a
        },
        aD: function(a) {
            return Math.pow(a, 3)
        },
        Gs: function(a) {
            return -(a * (a - 2))
        },
        QK: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        PK: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        Z1: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        a2: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    rb["ease-in"] = rb.bD;
    rb["ease-out"] = rb.Gs;
    var F = {
        aG: 34,
        bG: 21,
        cG: new L(21, 32),
        cP: new L(10, 32),
        bP: new L(24, 36),
        aP: new L(12, 36),
        ZF: new L(13, 1),
        qa: z.ma + "images/",
        g3: "http://api0.map.bdimg.com/images/",
        $F: z.ma + "images/markers_new.png",
        ZO: 24,
        $O: 73,
        gC: {
            "北京": {
                my: "bj",
                m: new H(116.403874, 39.914889)
            },
            "上海": {
                my: "sh",
                m: new H(121.487899, 31.249162)
            },
            "深圳": {
                my: "sz",
                m: new H(114.025974, 22.546054)
            },
            "广州": {
                my: "gz",
                m: new H(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    x.da.Se ? (x.extend(F, {
        EK: "url(" + F.qa + "ruler.cur),crosshair",
        Yb: "-moz-grab",
        Fd: "-moz-grabbing"
    }), x.platform.oM && (F.fontFamily = "arial,simsun,sans-serif")) : x.da.Gw || x.da.iF ? x.extend(F, {
        EK: "url(" + F.qa + "ruler.cur) 2 6,crosshair",
        Yb: "url(" + F.qa + "openhand.cur) 8 8,default",
        Fd: "url(" + F.qa + "closedhand.cur) 8 8,move"
    }) : x.extend(F, {
        EK: "url(" + F.qa + "ruler.cur),crosshair",
        Yb: "url(" + F.qa + "openhand.cur),default",
        Fd: "url(" + F.qa + "closedhand.cur),move"
    });

    function ub(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function vb(a) {
        0 < x.da.la ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function wb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }

    function xb(a, b) {
        x.K.Lx(a, "beforeEnd", b);
        return a.lastChild
    }

    function yb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
    }

    function ma(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
    }

    function zb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = q;
        return q
    }

    function na(a) {
        ma(a);
        return zb(a)
    }

    function Ab() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function Bb(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Cb(a, b) {
        var c = [],
            b = b || function(a) {
                return a
            },
            d;
        for (d in a) c.push(d + "=" + b(a[d]));
        return c.join("&")
    }

    function K(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return x.K.pF(d, b || {})
    }

    function Va(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, p)
    }

    function Xa(a) {
        return "function" === typeof a
    }

    function Wa(a) {
        return "number" === typeof a
    }

    function Za(a) {
        return "string" == typeof a
    }

    function Db(a) {
        return "undefined" != typeof a
    }

    function Eb(a) {
        return "object" == typeof a
    }
    var Gb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Hb(a) {
        var b = "",
            c, d, e = "",
            f, g = "",
            i = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Gb.indexOf(a.charAt(i++)), d = Gb.indexOf(a.charAt(i++)), f = Gb.indexOf(a.charAt(i++)), g = Gb.indexOf(a.charAt(i++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); while (i < a.length);
        return b
    }
    var M = x.lang.$y;

    function G() {
        return !(!x.platform.oE && !x.platform.qY && !x.platform.Jm)
    }

    function Ua() {
        return !(!x.platform.oM && !x.platform.gM && !x.platform.wY)
    }

    function $a() {
        return (new Date).getTime()
    }

    function Ib() {
        var a = document.body.appendChild(K("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return q;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : o;
        a.parentNode.removeChild(a);
        return b
    }

    function Jb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Kb() {
        return !!K("canvas").getContext
    }

    function Nb(a) {
        return a * Math.PI / 180
    }
    z.DY = function() {
        var a = o,
            b = o,
            c = o,
            d = o,
            e = 0,
            f = 0,
            g = 0,
            i = 0;
        return {
            KQ: function() {
                e += 1;
                a && (a = q, setTimeout(function() {
                    Qa(5054, {
                        pic: e
                    });
                    a = o;
                    e = 0
                }, 1E4))
            },
            K0: function() {
                f += 1;
                b && (b = q, setTimeout(function() {
                    Qa(5055, {
                        move: f
                    });
                    b = o;
                    f = 0
                }, 1E4))
            },
            M0: function() {
                g += 1;
                c && (c = q, setTimeout(function() {
                    Qa(5056, {
                        zoom: g
                    });
                    c = o;
                    g = 0
                }, 1E4))
            },
            L0: function(a) {
                i += a;
                d && (d = q, setTimeout(function() {
                    Qa(5057, {
                        tile: i
                    });
                    d = o;
                    i = 0
                }, 5E3))
            }
        }
    }();
    z.iq = {
        oG: "#83a1ff",
        kq: "#808080"
    };

    function Ob(a, b, c) {
        b.Om || (b.Om = [], b.handle = {});
        b.Om.push({
            filter: c,
            qm: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b;) {
                Pb(b.Om, function(b, g) {
                    RegExp(g.filter).test(c.getAttribute("filter")) && g.qm.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, q), b.handle.click = o)
    }

    function Pb(a, b) {
        for (var c = 0, d = a.length; c < d; c++) b(c, a[c])
    }
    void
        function(a, b, c) {
            void
                function(a, b, c) {
                    function g(a) {
                        if (!a.Jo) {
                            for (var c = o, d = [], f = a.uZ, i = 0; f && i < f.length; i++) {
                                var k = f[i],
                                    l = Z[k] = Z[k] || {};
                                if (l.Jo || l == a) d.push(l.Kc);
                                else {
                                    c = q;
                                    if (!l.aW && (k = (Ja.get("alias") || {})[k] || k + ".js", !J[k])) {
                                        J[k] = o;
                                        var m = b.createElement("script"),
                                            n = b.getElementsByTagName("script")[0];
                                        m.async = o;
                                        m.src = k;
                                        n.parentNode.insertBefore(m, n)
                                    }
                                    l.Ry = l.Ry || {};
                                    l.Ry[a.name] = a
                                }
                            }
                            if (c) {
                                a.Jo = o;
                                a.wK && (a.Kc = a.wK.apply(a, d));
                                for (var t in a.Ry) g(a.Ry[t])
                            }
                        }
                    }

                    function i(a) {
                        return (a || new Date) - E
                    }

                    function k(a, b, c) {
                        if (a) {
                            "string" == typeof a && (c = b, b = a, a = P);
                            try {
                                a == P ? (N[b] = N[b] || [], N[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c)
                            } catch (d) {}
                        }
                    }

                    function l(a, b, c) {
                        if (a) {
                            "string" == typeof a && (c = b, b = a, a = P);
                            try {
                                if (a == P) {
                                    var d = N[b];
                                    if (d)
                                        for (var e = d.length; e--;) d[e] === c && d.splice(e, 1)
                                } else a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c)
                            } catch (f) {}
                        }
                    }

                    function m(a) {
                        var b = N[a],
                            c = 0;
                        if (b) {
                            for (var d = [], e = arguments, f = 1; f < e.length; f++) d.push(e[f]);
                            for (f = b.length; f--;) b[f].apply(this, d) && c++;
                            return c
                        }
                    }

                    function n(a, b) {
                        if (a && b) {
                            var c = new Image(1, 1),
                                d = [],
                                e = "img_" + +new Date,
                                f;
                            for (f in b) b[f] && d.push(f + "=" + encodeURIComponent(b[f]));
                            P[e] = c;
                            c.onload = c.onerror = function() {
                                P[e] = c = c.onload = c.onerror = p;
                                delete P[e]
                            };
                            c.src = a + "?" + d.join("&")
                        }
                    }

                    function t() {
                        var a = arguments,
                            b = a[0];
                        if (this.vK || /^(on|un|set|get|create)$/.test(b)) {
                            for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++) c.push(a[d]);
                            "function" == typeof b && b.apply(this, c)
                        } else this.VJ.push(a)
                    }

                    function v(a, b) {
                        var c = {},
                            d;
                        for (d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
                        for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                        return c
                    }

                    function w(a) {
                        this.name = a;
                        this.Ls = {
                            protocolParameter: {
                                postUrl: p,
                                protocolParameter: p
                            }
                        };
                        this.VJ = [];
                        this.alog = P
                    }

                    function y(a) {
                        a = a || "default";
                        if ("*" == a) {
                            var a = [],
                                b;
                            for (b in Q) a.push(Q[b]);
                            return a
                        }(b = Q[a]) || (b = Q[a] = new w(a));
                        return b
                    }
                    var B = c.alog;
                    if (!B || !B.Jo) {
                        var A = b.all && a.attachEvent,
                            E = B && B.xE || +new Date,
                            C = a.s3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                            D = 0,
                            J = {},
                            P = function(a) {
                                var b = arguments,
                                    c, d, e, f;
                                if ("define" == a || "require" == a) {
                                    for (d = 1; d < b.length; d++) switch (typeof b[d]) {
                                        case "string":
                                            c = b[d];
                                            break;
                                        case "object":
                                            e = b[d];
                                            break;
                                        case "function":
                                            f = b[d]
                                    }
                                    "require" == a && (c && !e && (e = [c]), c = p);
                                    c = !c ? "#" + D++ : c;
                                    d = Z[c] = Z[c] || {};
                                    d.Jo || (d.name = c, d.uZ = e, d.wK = f, "define" == a && (d.aW = o), g(d))
                                } else "function" == typeof a ? a(P) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, d) {
                                    b[0] = d;
                                    t.apply(P.OF(c), b)
                                })
                            },
                            N = {},
                            Q = {},
                            Z = {
                                t1: {
                                    name: "alog",
                                    Jo: o,
                                    Kc: P
                                }
                            };
                        w.prototype.start = w.prototype.create = function(a) {
                            if (!this.vK) {
                                "object" == typeof a && this.set(a);
                                this.vK = new Date;
                                for (this.Ms("create", this); a = this.VJ.shift();) t.apply(this, a)
                            }
                        };
                        w.prototype.send = function(a, b) {
                            var c = v({
                                ts: i().toString(36),
                                t: a,
                                sid: C
                            }, this.Ls);
                            if ("object" == typeof b) c = v(c, b);
                            else {
                                var d = arguments;
                                switch (a) {
                                    case "pageview":
                                        d[1] && (c.page = d[1]);
                                        d[2] && (c.title = d[2]);
                                        break;
                                    case "event":
                                        d[1] && (c.eventCategory = d[1]);
                                        d[2] && (c.eventAction = d[2]);
                                        d[3] && (c.eventLabel = d[3]);
                                        d[4] && (c.eventValue = d[4]);
                                        break;
                                    case "timing":
                                        d[1] && (c.timingCategory = d[1]);
                                        d[2] && (c.timingVar = d[2]);
                                        d[3] && (c.timingValue = d[3]);
                                        d[4] && (c.timingLabel = d[4]);
                                        break;
                                    case "exception":
                                        d[1] && (c.exDescription = d[1]);
                                        d[2] && (c.exFatal = d[2]);
                                        break;
                                    default:
                                        return
                                }
                            }
                            this.Ms("send", c);
                            var e;
                            if (d = this.Ls.protocolParameter) {
                                var f = {};
                                for (e in c) d[e] !== p && (f[d[e] || e] = c[e]);
                                e = f
                            } else e = c;
                            n(this.Ls.postUrl, e)
                        };
                        w.prototype.set = function(a, b) {
                            if ("string" == typeof a) "protocolParameter" == a && (b = v({
                                postUrl: p,
                                protocolParameter: p
                            }, b)), this.Ls[a] = b;
                            else if ("object" == typeof a)
                                for (var c in a) this.set(c, a[c])
                        };
                        w.prototype.get = function(a, b) {
                            var c = this.Ls[a];
                            "function" == typeof b && b(c);
                            return c
                        };
                        w.prototype.Ms = function(a, b) {
                            return P.Ms(this.name + "." + a, b)
                        };
                        w.prototype.M = function(a, b) {
                            P.M(this.name + "." + a, b)
                        };
                        w.prototype.bd = function(a, b) {
                            P.bd(this.name + "." + a, b)
                        };
                        P.name = "alog";
                        P.eO = C;
                        P.Jo = o;
                        P.timestamp = i;
                        P.bd = l;
                        P.M = k;
                        P.Ms = m;
                        P.OF = y;
                        P("init");
                        var aa = w.prototype;
                        T(aa, {
                            start: aa.start,
                            create: aa.create,
                            send: aa.send,
                            set: aa.set,
                            get: aa.get,
                            on: aa.M,
                            un: aa.bd,
                            fire: aa.Ms
                        });
                        var Ja = y();
                        Ja.set("protocolParameter", {
                            s1: p
                        });
                        if (B) {
                            aa = [].concat(B.ub || [], B.Ym || []);
                            B.ub = B.Ym = p;
                            for (var Oa in P) P.hasOwnProperty(Oa) && (B[Oa] = P[Oa]);
                            P.ub = P.Ym = {
                                push: function(a) {
                                    P.apply(P, a)
                                }
                            };
                            for (B = 0; B < aa.length; B++) P.apply(P, aa[B])
                        }
                        c.alog = P;
                        A && k(b, "mouseup", function(a) {
                            a = a.target || a.srcElement;
                            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                        });
                        var Ra = q;
                        a.onerror = function(a, b, d, e) {
                            var g = o;
                            !b && /^script error/i.test(a) && (Ra ? g = q : Ra = o);
                            g && c.alog("exception.send", "exception", {
                                Bt: a,
                                wE: b,
                                xt: d,
                                ds: e
                            });
                            return q
                        };
                        c.alog("exception.on", "catch", function(a) {
                            c.alog("exception.send", "exception", {
                                Bt: a.Bt,
                                wE: a.path,
                                xt: a.xt,
                                method: a.method,
                                dL: "catch"
                            })
                        })
                    }
                }(a, b, c);
            void
                function(a, b, c) {
                    var g = "18_1";
                    G() && (g = "18_2");
                    var i = "http://static.tieba.baidu.com";
                    "https:" === a.location.protocol && (i = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
                    var k = Math.random,
                        i = i + "/tb/pms/img/st.gif",
                        l = {
                            xh: "0.1"
                        },
                        m = {
                            xh: "0.1"
                        },
                        n = {
                            xh: "0.1"
                        },
                        t = {
                            xh: "0"
                        };
                    if (l && l.xh && k() < l.xh) {
                        var v = c.alog.OF("monkey"),
                            w, l = a.screen,
                            y = b.referrer;
                        v.set("ver", 5);
                        v.set("pid", 241);
                        l && v.set("px", l.width + "*" + l.height);
                        v.set("ref", y);
                        c.alog("monkey.on", "create", function() {
                            w = c.alog.timestamp;
                            v.set("protocolParameter", {
                                reports: p
                            })
                        });
                        c.alog("monkey.on", "send", function(a) {
                            "pageview" == a.t && (a.cmd = "open");
                            a.now && (a.ts = w(a.now).toString(36), a.now = "")
                        });
                        c.alog("monkey.create", {
                            page: g,
                            pid: "241",
                            p: "18",
                            dv: 6,
                            postUrl: i,
                            reports: {
                                refer: 1
                            }
                        });
                        c.alog("monkey.send", "pageview", {
                            now: +new Date
                        })
                    }
                    if (m && m.xh && k() < m.xh) {
                        var B = q;
                        a.onerror = function(a, b, d, e) {
                            var g = o;
                            !b && /^script error/i.test(a) && (B ? g = q : B = o);
                            g && c.alog("exception.send", "exception", {
                                Bt: a,
                                wE: b,
                                xt: d,
                                ds: e
                            });
                            return q
                        };
                        c.alog("exception.on", "catch", function(a) {
                            c.alog("exception.send", "exception", {
                                Bt: a.Bt,
                                wE: a.path,
                                xt: a.xt,
                                method: a.method,
                                dL: "catch"
                            })
                        });
                        c.alog("exception.create", {
                            postUrl: i,
                            dv: 7,
                            page: g,
                            pid: "170",
                            p: "18"
                        })
                    }
                    n && (n.xh && k() < n.xh) && (c.alog("cus.on", "time", function(a) {
                        var b = {},
                            d = q,
                            e;
                        if ("[object Object]" === a.toString()) {
                            for (var g in a) "page" == g ? b.page = a[g] : (e = parseInt(a[g]), 0 < e && /^z_/.test(g) && (d = o, b[g] = e));
                            d && c.alog("cus.send", "time", b)
                        }
                    }), c.alog("cus.on", "count", function(a) {
                        var b = {},
                            d = q;
                        "string" === typeof a && (a = [a]);
                        if (a instanceof Array)
                            for (var e = 0; e < a.length; e++) /^z_/.test(a[e]) ? (d = o, b[a[e]] = 1) : /^page:/.test(a[e]) && (b.page = a[e].substring(5));
                        d && c.alog("cus.send", "count", b)
                    }), c.alog("cus.create", {
                        dv: 3,
                        postUrl: i,
                        page: g,
                        p: "18"
                    }));
                    if (t && t.xh && k() < t.xh) {
                        var A = ["Moz", "O", "ms", "Webkit"],
                            E = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            C = function() {
                                return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                            },
                            D = C("dpFeatureTest").style,
                            J = function(a) {
                                return P(a, j, j)
                            },
                            P = function(a, b, c) {
                                var d = a.charAt(0).toUpperCase() + a.slice(1),
                                    e = (a + " " + A.join(d + " ") + d).split(" ");
                                if (typeof b === "string" || typeof b === "undefined") return N(e, b);
                                e = (a + " " + A.join(d + " ") + d).split(" ");
                                a: {
                                    var a = e,
                                        f;
                                    for (f in a)
                                        if (a[f] in b) {
                                            if (c === q) {
                                                b = a[f];
                                                break a
                                            }
                                            f = b[a[f]];
                                            b = typeof f === "function" ? fnBind(f, c || b) : f;
                                            break a
                                        }
                                    b = q
                                }
                                return b
                            },
                            N = function(a, b) {
                                var c, d, e;
                                d = a.length;
                                for (c = 0; c < d; c++) {
                                    e = a[c];
                                    ~("" + e).indexOf("-") && (e = Q(e));
                                    if (D[e] !== j) return b == "pfx" ? e : o
                                }
                                return q
                            },
                            Q = function(a) {
                                return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                                    return b + c.toUpperCase()
                                }).replace(/^-/, "")
                            },
                            Z = function(a, b, c) {
                                if (a.indexOf("@") === 0) return atRule(a);
                                a.indexOf("-") != -1 && (a = Q(a));
                                return !b ? P(a, "pfx") : P(a, b, c)
                            },
                            aa = function() {
                                var a = C("canvas");
                                return !(!a.getContext || !a.getContext("2d"))
                            },
                            Ja = function() {
                                var a = C("div");
                                return "draggable" in a || "ondragstart" in a && "ondrop" in a
                            },
                            Oa = function() {
                                try {
                                    localStorage.setItem("localStorage", "localStorage");
                                    localStorage.removeItem("localStorage");
                                    return o
                                } catch (a) {
                                    return q
                                }
                            },
                            Ra = function() {
                                return "content" in b.createElement("template")
                            },
                            Aa = function() {
                                return "createShadowRoot" in b.createElement("a")
                            },
                            mc = function() {
                                return "registerElement" in b
                            },
                            qe = function() {
                                return "import" in b.createElement("link")
                            },
                            mf = function() {
                                return "getItems" in b
                            },
                            fd = function() {
                                return "EventSource" in window
                            },
                            Lb = function(a, b) {
                                var c = new Image;
                                c.onload = function() {
                                    b(a, c.width > 0 && c.height > 0)
                                };
                                c.onerror = function() {
                                    b(a, q)
                                };
                                c.src = "data:image/webp;base64," + {
                                    v3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                                    u3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                                    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                                    jk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                                }[a]
                            },
                            nc = function(a, b) {
                                return Mb.ii["WebP-" + a] = b
                            },
                            re = function() {
                                return "openDatabase" in a
                            },
                            se = function() {
                                return "performance" in a && "timing" in a.performance
                            },
                            Nc = function() {
                                return "performance" in a && "mark" in a.performance
                            },
                            gd = function() {
                                return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                            },
                            te = function() {
                                return "Promise" in a && "cast" in a.lq && "resolve" in a.lq && "reject" in a.lq && "all" in a.lq && "race" in a.lq && function() {
                                    var b;
                                    new a.lq(function(a) {
                                        b = a
                                    });
                                    return typeof b === "function"
                                }()
                            },
                            hd = function() {
                                var b = !!a.x0,
                                    c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                                return !!a.A0 && b && c
                            },
                            nf = function() {
                                return "geolocation" in navigator
                            },
                            ue = function() {
                                var b = C("canvas"),
                                    c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                                return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                            },
                            gi = function() {
                                return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").L1
                            },
                            hi = function() {
                                return !!a.H0
                            },
                            ii = function() {
                                return "WebSocket" in a && a.E0.u0 === 2
                            },
                            ji = function() {
                                return !!b.createElement("video").canPlayType
                            },
                            ki = function() {
                                return !!b.createElement("audio").canPlayType
                            },
                            li = function() {
                                return !!(a.history && "pushState" in a.history)
                            },
                            mi = function() {
                                return !(!a.v0 || !a.w0)
                            },
                            ni = function() {
                                return "postMessage" in window
                            },
                            oi = function() {
                                return !!a.webkitNotifications || "Notification" in a && "permission" in a.vP && "requestPermission" in a.vP
                            },
                            pi = function() {
                                for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, e = 0; e < b.length && !c; ++e) c = a[b[e] + "RequestAnimationFrame"];
                                return !!c
                            },
                            qi = function() {
                                return "JSON" in a && "parse" in JSON && "stringify" in JSON
                            },
                            ri = function() {
                                return !(!Z("exitFullscreen", b, q) && !Z("cancelFullScreen", b, q))
                            },
                            si = function() {
                                return !!Z("Intl", a)
                            },
                            ti = function() {
                                return J("flexBasis")
                            },
                            ui = function() {
                                return !!J("perspective")
                            },
                            vi = function() {
                                return J("shapeOutside")
                            },
                            wi = function() {
                                var a = C("div");
                                a.style.cssText = E.join("filter:blur(2px); ");
                                return !!a.style.length && (b.documentMode === j || b.documentMode > 9)
                            },
                            xi = function() {
                                return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                            },
                            yi = function() {
                                return C("progress").max !== j
                            },
                            zi = function() {
                                return C("meter").max !== j
                            },
                            Ai = function() {
                                return "sendBeacon" in navigator
                            },
                            Bi = function() {
                                return J("borderRadius")
                            },
                            Ci = function() {
                                return J("boxShadow")
                            },
                            Di = function() {
                                var a = C("div").style;
                                a.cssText = E.join("opacity:.55;");
                                return /^0.55$/.test(a.opacity)
                            },
                            Ei = function() {
                                return N(["textShadow"], j)
                            },
                            Fi = function() {
                                return J("animationName")
                            },
                            Gi = function() {
                                return J("transition")
                            },
                            Hi = function() {
                                return navigator.userAgent.indexOf("Android 2.") === -1 && J("transform")
                            },
                            Mb = {
                                ii: {},
                                pa: function(a, b, c) {
                                    this.ii[a] = b.apply(this, [].slice.call(arguments, 2))
                                },
                                Cd: function(a, b) {
                                    a.apply(this, [].slice.call(arguments, 1))
                                },
                                BZ: function() {
                                    this.pa("bdrs", Bi);
                                    this.pa("bxsd", Ci);
                                    this.pa("opat", Di);
                                    this.pa("txsd", Ei);
                                    this.pa("anim", Fi);
                                    this.pa("trsi", Gi);
                                    this.pa("trfm", Hi);
                                    this.pa("flex", ti);
                                    this.pa("3dtr", ui);
                                    this.pa("shpe", vi);
                                    this.pa("fltr", wi);
                                    this.pa("cavs", aa);
                                    this.pa("dgdp", Ja);
                                    this.pa("locs", Oa);
                                    this.pa("wctem", Ra);
                                    this.pa("wcsdd", Aa);
                                    this.pa("wccse", mc);
                                    this.pa("wchti", qe);
                                    this.Cd(Lb, "lossy", nc);
                                    this.Cd(Lb, "lossless", nc);
                                    this.Cd(Lb, "alpha", nc);
                                    this.Cd(Lb, "animation", nc);
                                    this.pa("wsql", re);
                                    this.pa("natm", se);
                                    this.pa("ustm", Nc);
                                    this.pa("arra", gd);
                                    this.pa("prms", te);
                                    this.pa("xhr2", hd);
                                    this.pa("wbgl", ue);
                                    this.pa("geol", nf);
                                    this.pa("svg", gi);
                                    this.pa("work", hi);
                                    this.pa("wbsk", ii);
                                    this.pa("vido", ji);
                                    this.pa("audo", ki);
                                    this.pa("hsty", li);
                                    this.pa("file", mi);
                                    this.pa("psmg", ni);
                                    this.pa("wknf", oi);
                                    this.pa("rqaf", pi);
                                    this.pa("json", qi);
                                    this.pa("flsc", ri);
                                    this.pa("i18n", si);
                                    this.pa("cors", xi);
                                    this.pa("prog", yi);
                                    this.pa("metr", zi);
                                    this.pa("becn", Ai);
                                    this.pa("mcrd", mf);
                                    this.pa("esrc", fd)
                                }
                            },
                            v = c.alog.OF("feature");
                        v.M("commit", function() {
                            Mb.BZ();
                            var a = setInterval(function() {
                                if ("WebP-lossy" in Mb.ii && "WebP-lossless" in Mb.ii && "WebP-alpha" in Mb.ii && "WebP-animation" in Mb.ii) {
                                    for (var b in Mb.ii) Mb.ii[b] = Mb.ii[b] ? "y" : "n";
                                    v.send("feature", Mb.ii);
                                    clearInterval(a)
                                }
                            }, 500)
                        });
                        c.alog("feature.create", {
                            W1: 4,
                            P3: i,
                            page: g,
                            ub: "18"
                        });
                        c.alog("feature.fire", "commit")
                    }
                }(a, b, c)
        }(window, document, z);
    z.Dn = z.alog || s();
    z.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && z.alog("cus.fire", "count", "z_httpscount");

    function Qb(a) {
        var b = window.TILE_VERSION,
            c = "20170927";
        b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    };

    function oa(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete z._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var d = K("script", {
            type: "text/javascript"
        });
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = p
        }, 1)
    };
    var Rb = {
        map: "iak2l5",
        common: "vndjet",
        style: "hfbhis",
        tile: "pp5s2s",
        vectordrawlib: "0nwze3",
        newvectordrawlib: "0dw0aq",
        groundoverlay: "4tamms",
        pointcollection: "ktensf",
        marker: "jkmdsc",
        symbol: "kpbhgq",
        canvablepath: "leoodz",
        vmlcontext: "vsxc11",
        markeranimation: "lwkx4d",
        poly: "ukhgc4",
        draw: "ggks5n",
        drawbysvg: "vfyzwa",
        drawbyvml: "cihabl",
        drawbycanvas: "x0opfd",
        infowindow: "omcokh",
        oppc: "ohjjl3",
        opmb: "zak4zl",
        menu: "z5gzeq",
        control: "ff1mc0",
        navictrl: "wxtn3y",
        geoctrl: "ueq5fn",
        copyrightctrl: "diosm4",
        citylistcontrol: "gxia13",
        scommon: "ygyjhk",
        local: "orgsua",
        route: "sxpebr",
        othersearch: "xfqiat",
        mapclick: "xvhozk",
        buslinesearch: "wltsgk",
        hotspot: "43haqa",
        autocomplete: "zfaiph",
        coordtrans: "b1gup0",
        coordtransutils: "ybedzx",
        convertor: "xcp5se",
        clayer: "zd5r3a",
        pservice: "tcjn0r",
        pcommon: "pkqaj4",
        panorama: "jisiff",
        panoramaflash: "5rreij",
        vector: "1pngh3"
    };
    x.Ly = function() {
        function a(a) {
            return d && !!c[b + a + "_" + Rb[a]]
        }
        var b = "BMap_",
            c = window.localStorage,
            d = "localStorage" in window && c !== p && c !== j;
        return {
            sY: d,
            set: function(a, f) {
                if (d) {
                    for (var g = b + a + "_", i = c.length, k; i--;) k = c.key(i), -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Rb[a], f)
                    } catch (l) {
                        c.clear()
                    }
                }
            },
            get: function(e) {
                return d && a(e) ? c.getItem(b + e + "_" + Rb[e]) : q
            },
            fK: a
        }
    }();

    function I() {}
    x.object.extend(I, {
        Fj: {
            pG: -1,
            JP: 0,
            cq: 1
        },
        rL: function() {
            var a = "canvablepath",
                b = z.JU ? "newvectordrawlib" : "vectordrawlib";
            if (!G() || !Kb()) Jb() || (Ib() ? a = "vmlcontext" : Kb());
            return {
                tile: [b, "style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        S3: {},
        iG: {
            $P: z.ma + "getmodules?v=2.0&t=20140707",
            AU: 5E3
        },
        DC: q,
        Pd: {
            ul: {},
            Fn: [],
            Tv: []
        },
        load: function(a, b, c) {
            var d = this.ib(a);
            if (d.Bd == this.Fj.cq) c && b();
            else {
                if (d.Bd == this.Fj.pG) {
                    this.lK(a);
                    this.zN(a);
                    var e = this;
                    e.DC == q && (e.DC = o, setTimeout(function() {
                        for (var a = [], b = 0, c = e.Pd.Fn.length; b < c; b++) {
                            var d = e.Pd.Fn[b],
                                l = "";
                            ia.Ly.fK(d) ? l = ia.Ly.get(d) : (l = "", a.push(d + "_" + Rb[d]));
                            e.Pd.Tv.push({
                                TM: d,
                                KE: l
                            })
                        }
                        e.DC = q;
                        e.Pd.Fn.length = 0;
                        0 == a.length ? e.XK() : oa(e.iG.$P + "&mod=" + a.join(","))
                    }, 1));
                    d.Bd = this.Fj.JP
                }
                d.Ru.push(b)
            }
        },
        lK: function(a) {
            if (a && this.rL()[a])
                for (var a = this.rL()[a], b = 0; b < a.length; b++) this.lK(a[b]), this.Pd.ul[a[b]] || this.zN(a[b])
        },
        zN: function(a) {
            for (var b = 0; b < this.Pd.Fn.length; b++)
                if (this.Pd.Fn[b] == a) return;
            this.Pd.Fn.push(a)
        },
        AZ: function(a, b) {
            var c = this.ib(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.Bd = this.Fj.cq;
            for (var e = 0, f = c.Ru.length; e < f; e++) c.Ru[e]();
            c.Ru.length = 0
        },
        fK: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Pd.ul[a].Bd != c.Fj.cq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, c.iG.AU)
        },
        ib: function(a) {
            this.Pd.ul[a] || (this.Pd.ul[a] = {}, this.Pd.ul[a].Bd = this.Fj.pG, this.Pd.ul[a].Ru = []);
            return this.Pd.ul[a]
        },
        remove: function(a) {
            delete this.ib(a)
        },
        vV: function(a, b) {
            for (var c = this.Pd.Tv, d = o, e = 0, f = c.length; e < f; e++) "" == c[e].KE && (c[e].TM == a ? c[e].KE = b : d = q);
            d && this.XK()
        },
        XK: function() {
            for (var a = this.Pd.Tv, b = 0, c = a.length; b < c; b++) this.AZ(a[b].TM, a[b].KE);
            this.Pd.Tv.length = 0
        }
    });

    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    R.prototype.nb = function(a) {
        return a && a.x == this.x && a.y == this.y
    };

    function L(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    L.prototype.nb = function(a) {
        return a && this.width == a.width && this.height == a.height
    };

    function gb(a, b) {
        a && (this.Mb = a, this.ba = "spot" + gb.ba++, b = b || {}, this.Sg = b.text || "", this.zv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.uJ = b.userData || p, this.Qh = b.minZoom || p, this.Ef = b.maxZoom || p)
    }
    gb.ba = 0;
    x.extend(gb.prototype, {
        ra: function(a) {
            this.Qh == p && (this.Qh = a.D.gc);
            this.Ef == p && (this.Ef = a.D.$b)
        },
        ta: function(a) {
            a instanceof H && (this.Mb = a)
        },
        ha: u("Mb"),
        Xt: ca("Sg"),
        WD: u("Sg"),
        setUserData: ca("uJ"),
        getUserData: u("uJ")
    });

    function Sb() {
        this.C = p;
        this.Nb = "control";
        this.Qa = this.ZJ = o
    }
    x.lang.ua(Sb, x.lang.Ca, "Control");
    x.extend(Sb.prototype, {
        initialize: function(a) {
            this.C = a;
            if (this.B) return a.Va.appendChild(this.B), this.B
        },
        Ge: function(a) {
            !this.B && (this.initialize && Xa(this.initialize)) && (this.B = this.initialize(a));
            this.k = this.k || {
                yg: q
            };
            this.yB();
            this.Nr();
            this.B && (this.B.mr = this)
        },
        yB: function() {
            var a = this.B;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.xz || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.yg || x.K.Ua(a, "BMap_noprint");
                G() || x.M(a, "contextmenu", na)
            }
        },
        remove: function() {
            this.C = p;
            this.B && (this.B.parentNode && this.B.parentNode.removeChild(this.B), this.B = this.B.mr = p)
        },
        Aa: function() {
            this.B = xb(this.C.Va, "<div unselectable='on'></div>");
            this.Qa == q && x.K.U(this.B);
            return this.B
        },
        Nr: function() {
            this.qc(this.k.anchor)
        },
        qc: function(a) {
            if (this.u1 || !Wa(a) || isNaN(a) || a < Tb || 3 < a) a = this.defaultAnchor;
            this.k = this.k || {
                yg: q
            };
            this.k.za = this.k.za || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.B) {
                var c = this.B,
                    d = this.k.za.width,
                    e = this.k.za.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Tb:
                        c.style.top = e + "px";
                        c.style.left = d + "px";
                        break;
                    case Ub:
                        c.style.top = e + "px";
                        c.style.right = d + "px";
                        break;
                    case Vb:
                        c.style.bottom = e + "px";
                        c.style.left = d + "px";
                        break;
                    case 3:
                        c.style.bottom = e + "px", c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                x.K.Tb(this.B, "anchor" + c[b]);
                x.K.Ua(this.B, "anchor" + c[a])
            }
        },
        yD: function() {
            return this.k.anchor
        },
        getContainer: u("B"),
        Xe: function(a) {
            a instanceof L && (this.k = this.k || {
                yg: q
            }, this.k.za = new L(a.width, a.height), this.B && this.qc(this.k.anchor))
        },
        Pf: function() {
            return this.k.za
        },
        Id: u("B"),
        show: function() {
            this.Qa != o && (this.Qa = o, this.B && x.K.show(this.B))
        },
        U: function() {
            this.Qa != q && (this.Qa = q, this.B && x.K.U(this.B))
        },
        isPrintable: function() {
            return !!this.k.yg
        },
        jh: function() {
            return !this.B && !this.C ? q : !!this.Qa
        }
    });
    var Tb = 0,
        Ub = 1,
        Vb = 2;

    function hb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            yg: q,
            BF: a.showZoomInfo || o,
            anchor: a.anchor,
            za: a.offset,
            type: a.type,
            wW: a.enableGeolocation || q
        };
        this.defaultAnchor = G() ? 3 : Tb;
        this.defaultOffset = new L(10, 10);
        this.qc(a.anchor);
        this.jn(a.type);
        this.Ce()
    }
    x.lang.ua(hb, Sb, "NavigationControl");
    x.extend(hb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        jn: function(a) {
            this.k.type = Wa(a) && 0 <= a && 3 >= a ? a : 0
        },
        hp: function() {
            return this.k.type
        },
        Ce: function() {
            var a = this;
            I.load("navictrl", function() {
                a.wf()
            })
        }
    });

    function Wb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            anchor: a.anchor || Vb,
            za: a.offset || new L(10, 30),
            l_: a.showAddressBar !== q,
            c2: a.enableAutoLocation || q,
            HM: a.locationIcon || p
        };
        var b = this;
        this.xz = 1200;
        b.$_ = [];
        this.oe = [];
        I.load("geoctrl", function() {
            (function d() {
                if (0 !== b.oe.length) {
                    var a = b.oe.shift();
                    b[a.method].apply(b, a.arguments);
                    d()
                }
            })();
            b.ZP()
        });
        Qa(Ha)
    }
    x.lang.ua(Wb, Sb, "GeolocationControl");
    x.extend(Wb.prototype, {
        location: function() {
            this.oe.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: da(p)
    });

    function Xb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            yg: q,
            anchor: a.anchor,
            za: a.offset
        };
        this.dc = [];
        this.defaultAnchor = Vb;
        this.defaultOffset = new L(5, 2);
        this.qc(a.anchor);
        this.ZJ = q;
        this.Ce()
    }
    x.lang.ua(Xb, Sb, "CopyrightControl");
    x.object.extend(Xb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        rw: function(a) {
            if (a && Wa(a.id) && !isNaN(a.id)) {
                var b = {
                        bounds: p,
                        content: ""
                    },
                    c;
                for (c in a) b[c] = a[c];
                if (a = this.sm(a.id))
                    for (var d in b) a[d] = b[d];
                else this.dc.push(b)
            }
        },
        sm: function(a) {
            for (var b = 0, c = this.dc.length; b < c; b++)
                if (this.dc[b].id == a) return this.dc[b]
        },
        FD: u("dc"),
        bF: function(a) {
            for (var b = 0, c = this.dc.length; b < c; b++) this.dc[b].id == a && (r = this.dc.splice(b, 1), b--, c = this.dc.length)
        },
        Ce: function() {
            var a = this;
            I.load("copyrightctrl", function() {
                a.wf()
            })
        }
    });

    function jb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            yg: q,
            size: a.size || new L(150, 150),
            padding: 5,
            Wa: a.isOpen === o ? o : q,
            o0: 4,
            za: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new L(0, 0);
        this.Bq = this.Cq = 13;
        this.qc(a.anchor);
        this.Ae(this.k.size);
        this.Ce()
    }
    x.lang.ua(jb, Sb, "OverviewMapControl");
    x.extend(jb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        qc: function(a) {
            Sb.prototype.qc.call(this, a)
        },
        qe: function() {
            this.qe.ko = o;
            this.k.Wa = !this.k.Wa;
            this.B || (this.qe.ko = q)
        },
        Ae: function(a) {
            a instanceof L || (a = new L(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.k.size = a
        },
        Bb: function() {
            return this.k.size
        },
        Wa: function() {
            return this.k.Wa
        },
        Ce: function() {
            var a = this;
            I.load("control", function() {
                a.wf()
            })
        }
    });

    function Yb(a) {
        Sb.call(this);
        a = a || {};
        this.defaultAnchor = Tb;
        this.sV = a.canCheckSize === q ? q : o;
        this.ej = "";
        this.defaultOffset = new L(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.k = {
            yg: q,
            za: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && Xa(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && Xa(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && Xa(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.qc(a.anchor);
        this.Ce()
    }
    x.lang.ua(Yb, Sb, "CityListControl");
    x.object.extend(Yb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Ce: function() {
            var a = this;
            I.load("citylistcontrol", function() {
                a.wf()
            }, o)
        }
    });

    function ib(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            yg: q,
            color: "black",
            cd: "metric",
            za: a.offset
        };
        this.defaultAnchor = Vb;
        this.defaultOffset = new L(81, 18);
        this.qc(a.anchor);
        this.Zh = {
            metric: {
                name: "metric",
                nK: 1,
                $L: 1E3,
                FO: "米",
                GO: "公里"
            },
            us: {
                name: "us",
                nK: 3.2808,
                $L: 5280,
                FO: "英尺",
                GO: "英里"
            }
        };
        this.Zh[this.k.cd] || (this.k.cd = "metric");
        this.TI = p;
        this.sI = {};
        this.Ce()
    }
    x.lang.ua(ib, Sb, "ScaleControl");
    x.object.extend(ib.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Lk: function(a) {
            this.k.color = a + ""
        },
        t2: function() {
            return this.k.color
        },
        yF: function(a) {
            this.k.cd = this.Zh[a] && this.Zh[a].name || this.k.cd
        },
        PX: function() {
            return this.k.cd
        },
        Ce: function() {
            var a = this;
            I.load("control", function() {
                a.wf()
            })
        }
    });
    var Zb = 0;

    function kb(a) {
        Sb.call(this);
        a = a || {};
        this.defaultAnchor = Ub;
        this.defaultOffset = new L(10, 10);
        this.k = {
            yg: q,
            mh: [La, Ya, Sa, Pa],
            $V: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Zb,
            za: a.offset || this.defaultOffset,
            AW: o
        };
        this.qc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.mh = a.mapTypes.slice(0));
        this.Ce()
    }
    x.lang.ua(kb, Sb, "MapTypeControl");
    x.object.extend(kb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        My: function(a) {
            this.C.Zn = a
        },
        Ce: function() {
            var a = this;
            I.load("control", function() {
                a.wf()
            }, o)
        }
    });

    function $b(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            yg: q,
            za: a.offset,
            anchor: a.anchor
        };
        this.Qi = q;
        this.Xv = p;
        this.BI = new ac({
            Of: "api"
        });
        this.CI = new bc(p, {
            Of: "api"
        });
        this.defaultAnchor = Ub;
        this.defaultOffset = new L(10, 10);
        this.qc(a.anchor);
        this.Ce();
        Qa(ua)
    }
    x.lang.ua($b, Sb, "PanoramaControl");
    x.extend($b.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Ce: function() {
            var a = this;
            I.load("control", function() {
                a.wf()
            })
        }
    });

    function cc(a) {
        x.lang.Ca.call(this);
        this.k = {
            Va: p,
            cursor: "default"
        };
        this.k = x.extend(this.k, a);
        this.Nb = "contextmenu";
        this.C = p;
        this.ya = [];
        this.Hf = [];
        this.Ee = [];
        this.Tw = this.ks = p;
        this.Ph = q;
        var b = this;
        I.load("menu", function() {
            b.yb()
        })
    }
    x.lang.ua(cc, x.lang.Ca, "ContextMenu");
    x.object.extend(cc.prototype, {
        ra: function(a, b) {
            this.C = a;
            this.zl = b || p
        },
        remove: function() {
            this.C = this.zl = p
        },
        tw: function(a) {
            if (a && !("menuitem" != a.Nb || "" == a.Sg || 0 >= a.Zi)) {
                for (var b = 0, c = this.ya.length; b < c; b++)
                    if (this.ya[b] === a) return;
                this.ya.push(a);
                this.Hf.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Nb) {
                for (var b = 0, c = this.ya.length; b < c; b++) this.ya[b] === a && (this.ya[b].remove(), this.ya.splice(b, 1), c--);
                b = 0;
                for (c = this.Hf.length; b < c; b++) this.Hf[b] === a && (this.Hf[b].remove(), this.Hf.splice(b, 1), c--)
            }
        },
        SB: function() {
            this.ya.push({
                Nb: "divider",
                Nj: this.Ee.length
            });
            this.Ee.push({
                K: p
            })
        },
        dF: function(a) {
            if (this.Ee[a]) {
                for (var b = 0, c = this.ya.length; b < c; b++) this.ya[b] && ("divider" == this.ya[b].Nb && this.ya[b].Nj == a) && (this.ya.splice(b, 1), c--), this.ya[b] && ("divider" == this.ya[b].Nb && this.ya[b].Nj > a) && this.ya[b].Nj--;
                this.Ee.splice(a, 1)
            }
        },
        Id: u("B"),
        show: function() {
            this.Ph != o && (this.Ph = o)
        },
        U: function() {
            this.Ph != q && (this.Ph = q)
        },
        RZ: function(a) {
            a && (this.k.cursor = a)
        },
        getItem: function(a) {
            return this.Hf[a]
        }
    });
    var dc = F.qa + "menu_zoom_in.png",
        ec = F.qa + "menu_zoom_out.png";

    function fc(a, b, c) {
        if (a && Xa(b)) {
            x.lang.Ca.call(this);
            this.k = {
                width: 100,
                id: "",
                Gm: ""
            };
            c = c || {};
            this.k.width = 1 * c.width ? c.width : 100;
            this.k.id = c.id ? c.id : "";
            this.k.Gm = c.iconUrl ? c.iconUrl : "";
            this.Sg = a + "";
            this.Az = b;
            this.C = p;
            this.Nb = "menuitem";
            this.Ur = this.ov = this.B = this.Hh = p;
            this.Lh = o;
            var d = this;
            I.load("menu", function() {
                d.yb()
            })
        }
    }
    x.lang.ua(fc, x.lang.Ca, "MenuItem");
    x.object.extend(fc.prototype, {
        ra: function(a, b) {
            this.C = a;
            this.Hh = b
        },
        remove: function() {
            this.C = this.Hh = p
        },
        Xt: function(a) {
            a && (this.Sg = a + "")
        },
        Vb: function(a) {
            a && (this.k.Gm = a)
        },
        Id: u("B"),
        enable: function() {
            this.Lh = o
        },
        disable: function() {
            this.Lh = q
        }
    });

    function db(a, b) {
        a && !b && (b = a);
        this.He = this.Vd = this.Le = this.Xd = this.Ol = this.xl = p;
        a && (this.Ol = new H(a.lng, a.lat), this.xl = new H(b.lng, b.lat), this.Le = a.lng, this.Xd = a.lat, this.He = b.lng, this.Vd = b.lat)
    }
    x.object.extend(db.prototype, {
        xj: function() {
            return !this.Ol || !this.xl
        },
        nb: function(a) {
            return !(a instanceof db) || this.xj() ? q : this.ve().nb(a.ve()) && this.nf().nb(a.nf())
        },
        ve: u("Ol"),
        nf: u("xl"),
        JV: function(a) {
            return !(a instanceof db) || this.xj() || a.xj() ? q : a.Le > this.Le && a.He < this.He && a.Xd > this.Xd && a.Vd < this.Vd
        },
        Ha: function() {
            return this.xj() ? p : new H((this.Le + this.He) / 2, (this.Xd + this.Vd) / 2)
        },
        kt: function(a) {
            if (!(a instanceof db) || Math.max(a.Le, a.He) < Math.min(this.Le, this.He) || Math.min(a.Le, a.He) > Math.max(this.Le, this.He) || Math.max(a.Xd, a.Vd) < Math.min(this.Xd, this.Vd) || Math.min(a.Xd, a.Vd) > Math.max(this.Xd, this.Vd)) return p;
            var b = Math.max(this.Le, a.Le),
                c = Math.min(this.He, a.He),
                d = Math.max(this.Xd, a.Xd),
                a = Math.min(this.Vd, a.Vd);
            return new db(new H(b, d), new H(c, a))
        },
        fs: function(a) {
            return !(a instanceof H) || this.xj() ? q : a.lng >= this.Le && a.lng <= this.He && a.lat >= this.Xd && a.lat <= this.Vd
        },
        extend: function(a) {
            if (a instanceof H) {
                var b = a.lng,
                    a = a.lat;
                this.Ol || (this.Ol = new H(0, 0));
                this.xl || (this.xl = new H(0, 0));
                if (!this.Le || this.Le > b) this.Ol.lng = this.Le = b;
                if (!this.He || this.He < b) this.xl.lng = this.He = b;
                if (!this.Xd || this.Xd > a) this.Ol.lat = this.Xd = a;
                if (!this.Vd || this.Vd < a) this.xl.lat = this.Vd = a
            }
        },
        LF: function() {
            return this.xj() ? new H(0, 0) : new H(Math.abs(this.He - this.Le), Math.abs(this.Vd - this.Xd))
        }
    });

    function H(a, b) {
        isNaN(a) && (a = Hb(a), a = isNaN(a) ? 0 : a);
        Za(a) && (a = parseFloat(a));
        isNaN(b) && (b = Hb(b), b = isNaN(b) ? 0 : b);
        Za(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    H.fM = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    H.prototype.nb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function gc() {}
    gc.prototype.kh = function() {
        ba("lngLatToPoint方法未实现")
    };
    gc.prototype.zj = function() {
        ba("pointToLngLat方法未实现")
    };

    function hc() {};
    var cb = {
        pK: function(a, b, c) {
            I.load("coordtransutils", function() {
                cb.bV(a, b, c)
            }, o)
        },
        oK: function(a, b, c) {
            I.load("coordtransutils", function() {
                cb.aV(a, b, c)
            }, o)
        }
    };

    function ic() {
        this.Pa = [];
        var a = this;
        I.load("convertor", function() {
            a.XP()
        })
    }
    x.ua(ic, x.lang.Ca, "Convertor");
    x.extend(ic.prototype, {
        translate: function(a, b, c, d) {
            this.Pa.push({
                method: "translate",
                arguments: [a, b, c, d]
            })
        }
    });
    T(ic.prototype, {
        translate: ic.prototype.translate
    });

    function S() {}
    S.prototype = new gc;
    x.extend(S, {
        mP: 6370996.81,
        tG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Eu: [75, 60, 45, 30, 15, 0],
        sP: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        qG: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        y2: function(a, b) {
            if (!a || !b) return 0;
            var c, d, a = this.Ab(a);
            if (!a) return 0;
            c = this.Uk(a.lng);
            d = this.Uk(a.lat);
            b = this.Ab(b);
            return !b ? 0 : this.Te(c, this.Uk(b.lng), d, this.Uk(b.lat))
        },
        Xo: function(a, b) {
            if (!a || !b) return 0;
            a.lng = this.OD(a.lng, -180, 180);
            a.lat = this.SD(a.lat, -74, 74);
            b.lng = this.OD(b.lng, -180, 180);
            b.lat = this.SD(b.lat, -74, 74);
            return this.Te(this.Uk(a.lng), this.Uk(b.lng), this.Uk(a.lat), this.Uk(b.lat))
        },
        Ab: function(a) {
            if (a === p || a === j) return new H(0, 0);
            var b, c;
            b = new H(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.tG.length; d++)
                if (b.lat >= this.tG[d]) {
                    c = this.sP[d];
                    break
                }
            a = this.qK(a, c);
            return a = new H(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        zb: function(a) {
            if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new H(0, 0);
            var b, c;
            a.lng = this.OD(a.lng, -180, 180);
            a.lat = this.SD(a.lat, -74, 74);
            b = new H(a.lng, a.lat);
            for (var d = 0; d < this.Eu.length; d++)
                if (b.lat >= this.Eu[d]) {
                    c = this.qG[d];
                    break
                }
            if (!c)
                for (d = 0; d < this.Eu.length; d++)
                    if (b.lat <= -this.Eu[d]) {
                        c = this.qG[d];
                        break
                    }
            a = this.qK(a, c);
            return a = new H(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        qK: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    d = Math.abs(a.lat) / b[9],
                    d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                    c = c * (0 > a.lng ? -1 : 1),
                    d = d * (0 > a.lat ? -1 : 1);
                return new H(c, d)
            }
        },
        Te: function(a, b, c, d) {
            return this.mP * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        Uk: function(a) {
            return Math.PI * a / 180
        },
        x4: function(a) {
            return 180 * a / Math.PI
        },
        SD: function(a, b, c) {
            b != p && (a = Math.max(a, b));
            c != p && (a = Math.min(a, c));
            return a
        },
        OD: function(a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    x.extend(S.prototype, {
        Ck: function(a) {
            return S.zb(a)
        },
        kh: function(a) {
            a = S.zb(a);
            return new R(a.lng, a.lat)
        },
        nh: function(a) {
            return S.Ab(a)
        },
        zj: function(a) {
            a = new H(a.x, a.y);
            return S.Ab(a)
        },
        bc: function(a, b, c, d, e) {
            if (a) return a = this.Ck(a, e), b = this.yc(b), new R(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
        },
        wb: function(a, b, c, d, e) {
            if (a) return b = this.yc(b), this.nh(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
        },
        yc: function(a) {
            return Math.pow(2, 18 - a)
        }
    });

    function fb() {
        this.ej = "bj"
    }
    fb.prototype = new S;
    x.extend(fb.prototype, {
        Ck: function(a, b) {
            return this.HQ(b, S.zb(a))
        },
        nh: function(a, b) {
            return S.Ab(this.IQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this,
                d = S.zb(a);
            I.load("coordtrans", function() {
                var a = hc.QD(c.ej || "bj", d),
                    a = new R(a.x, a.y);
                b && b(a)
            }, o)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this,
                d = new H(a.x, a.y);
            I.load("coordtrans", function() {
                var a = hc.PD(c.ej || "bj", d),
                    a = new H(a.lng, a.lat),
                    a = S.Ab(a);
                b && b(a)
            }, o)
        },
        HQ: function(a, b) {
            if (I.ib("coordtrans").Bd == I.Fj.cq) {
                var c = hc.QD(a || "bj", b);
                return new H(c.x, c.y)
            }
            I.load("coordtrans", s());
            return new H(0, 0)
        },
        IQ: function(a, b) {
            if (I.ib("coordtrans").Bd == I.Fj.cq) {
                var c = hc.PD(a || "bj", b);
                return new H(c.lng, c.lat)
            }
            I.load("coordtrans", s());
            return new H(0, 0)
        },
        yc: function(a) {
            return Math.pow(2, 20 - a)
        }
    });

    function jc() {
        this.Nb = "overlay"
    }
    x.lang.ua(jc, x.lang.Ca, "Overlay");
    jc.Dm = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    x.extend(jc.prototype, {
        Ge: function(a) {
            if (!this.V && Xa(this.initialize) && (this.V = this.initialize(a))) this.V.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            ba("initialize方法未实现")
        },
        draw: function() {
            ba("draw方法未实现")
        },
        remove: function() {
            this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
            this.V = p;
            this.dispatchEvent(new M("onremove"))
        },
        U: function() {
            this.V && x.K.U(this.V)
        },
        show: function() {
            this.V && x.K.show(this.V)
        },
        jh: function() {
            return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? q : o
        }
    });
    z.We(function(a) {
        function b(a, b) {
            var c = K("div"),
                g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.R;
        c.od = a.od = b(a.platform, 200);
        a.Wd.sD = b(c.od, 800);
        a.Wd.GE = b(c.od, 700);
        a.Wd.eL = b(c.od, 600);
        a.Wd.yE = b(c.od, 500);
        a.Wd.LM = b(c.od, 400);
        a.Wd.MM = b(c.od, 300);
        a.Wd.SO = b(c.od, 201);
        a.Wd.yt = b(c.od, 200)
    });

    function eb() {
        x.lang.Ca.call(this);
        jc.call(this);
        this.map = p;
        this.Qa = o;
        this.Cb = p;
        this.gH = 0
    }
    x.lang.ua(eb, jc, "OverlayInternal");
    x.extend(eb.prototype, {
        initialize: function(a) {
            this.map = a;
            x.lang.Ca.call(this, this.ba);
            return p
        },
        qx: u("map"),
        draw: s(),
        Hj: s(),
        remove: function() {
            this.map = p;
            x.lang.Vw(this.ba);
            jc.prototype.remove.call(this)
        },
        U: function() {
            this.Qa !== q && (this.Qa = q)
        },
        show: function() {
            this.Qa !== o && (this.Qa = o)
        },
        jh: function() {
            return !this.V ? q : !!this.Qa
        },
        La: u("V"),
        RN: function(a) {
            var a = a || {},
                b;
            for (b in a) this.z[b] = a[b]
        },
        Yt: ca("zIndex"),
        mj: function() {
            this.z.mj = o
        },
        jW: function() {
            this.z.mj = q
        },
        wo: ca("gg"),
        Ep: function() {
            this.gg = p
        }
    });

    function kc() {
        this.map = p;
        this.wa = {};
        this.De = []
    }
    z.We(function(a) {
        var b = new kc;
        b.map = a;
        a.wa = b.wa;
        a.De = b.De;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        x.da.la && 8 > x.da.la || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof eb) b.wa[a.ba] || (b.wa[a.ba] = a);
            else {
                for (var d = q, e = 0, f = b.De.length; e < f; e++)
                    if (b.De[e] === a) {
                        d = o;
                        break
                    }
                d || b.De.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof eb) delete b.wa[a.ba];
            else
                for (var d = 0, e = b.De.length; d < e; d++)
                    if (b.De[d] === a) {
                        b.De.splice(d, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Wc();
            for (var a in b.wa) b.wa[a].z.mj && (b.wa[a].remove(), delete b.wa[a]);
            a = 0;
            for (var d = b.De.length; a < d; a++) b.De[a].enableMassClear !== q && (b.De[a].remove(), b.De[a] = p, b.De.splice(a, 1), a--, d--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.Cb;
            a && (x.K.U(a.zc), x.K.U(a.cc))
        });
        a.addEventListener("movestart", function() {
            this.gh() && this.gh().ZI()
        });
        a.addEventListener("moveend", function() {
            this.gh() && this.gh().OI()
        })
    });
    kc.prototype.draw = function(a) {
        if (z.hq) {
            var b = z.hq.Ss(this.map);
            "canvas" === b.Nb && b.canvas && b.CQ(b.canvas.getContext("2d"))
        }
        for (var c in this.wa) this.wa[c].draw(a);
        x.kc.Gb(this.De, function(a) {
            a.draw()
        });
        this.map.R.ob && this.map.R.ob.ta();
        z.hq && b.vF()
    };

    function lc(a) {
        eb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            nc: a.strokeWeight || 5,
            rd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            mj: a.enableMassClear === q ? q : o,
            wk: p,
            xm: p,
            lf: a.enableEditing === o ? o : q,
            UM: 5,
            Z_: q,
            hf: a.enableClicking === q ? q : o,
            ni: a.icons && 0 < a.icons.length ? a.icons : p
        };
        0 >= this.z.nc && (this.z.nc = 5);
        if (0 > this.z.rd || 1 < this.z.rd) this.z.rd = 0.65;
        if (0 > this.z.pg || 1 < this.z.pg) this.z.pg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = p;
        this.Ou = new db(0, 0);
        this.ff = [];
        this.oc = [];
        this.Ra = {}
    }
    x.lang.ua(lc, eb, "Graph");
    lc.lx = function(a) {
        var b = [];
        if (!a) return b;
        Za(a) && x.kc.Gb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new H(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    lc.QE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(lc.prototype, {
        initialize: function(a) {
            this.map = a;
            return p
        },
        draw: s(),
        Mr: function(a) {
            this.ff.length = 0;
            this.ia = lc.lx(a).slice(0);
            this.Eh()
        },
        ke: function(a) {
            this.Mr(a)
        },
        Eh: function() {
            if (this.ia) {
                var a = this;
                a.Ou = new db;
                x.kc.Gb(this.ia, function(b) {
                    a.Ou.extend(b)
                })
            }
        },
        te: u("ia"),
        hn: function(a, b) {
            b && this.ia[a] && (this.ff.length = 0, this.ia[a] = new H(b.lng, b.lat), this.Eh())
        },
        setStrokeColor: function(a) {
            this.z.strokeColor = a
        },
        GX: function() {
            return this.z.strokeColor
        },
        Tp: function(a) {
            0 < a && (this.z.nc = a)
        },
        FL: function() {
            return this.z.nc
        },
        Rp: function(a) {
            a == j || (1 < a || 0 > a) || (this.z.rd = a)
        },
        HX: function() {
            return this.z.rd
        },
        Rt: function(a) {
            1 < a || 0 > a || (this.z.pg = a)
        },
        dX: function() {
            return this.z.pg
        },
        Sp: function(a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        },
        EL: function() {
            return this.z.strokeStyle
        },
        setFillColor: function(a) {
            this.z.fillColor = a || ""
        },
        cX: function() {
            return this.z.fillColor
        },
        Hd: u("Ou"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.lv);
            eb.prototype.remove.call(this);
            this.ff.length = 0
        },
        lf: function() {
            if (!(2 > this.ia.length)) {
                this.z.lf = o;
                var a = this;
                I.load("poly", function() {
                    a.Ul()
                }, o)
            }
        },
        iW: function() {
            this.z.lf = q;
            var a = this;
            I.load("poly", function() {
                a.mk()
            }, o)
        },
        $W: function() {
            return this.z.lf
        }
    });

    function oc(a) {
        eb.call(this);
        this.V = this.map = p;
        this.z = {
            width: 0,
            height: 0,
            za: new L(0, 0),
            opacity: 1,
            background: "transparent",
            Tx: 1,
            yM: "#000",
            BY: "solid",
            point: p
        };
        this.RN(a);
        this.point = this.z.point
    }
    x.lang.ua(oc, eb, "Division");
    x.extend(oc.prototype, {
        Hj: function() {
            var a = this.z,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Tx + "px " + a.BY + " " + a.yM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.V = xb(this.map.Qf().GE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Hj();
            this.V && x.M(this.V, G() ? "touchstart" : "mousedown", function(a) {
                ma(a)
            });
            return this.V
        },
        draw: function() {
            var a = this.map.Ve(this.z.point);
            this.z.za = new L(-Math.round(this.z.width / 2) - Math.round(this.z.Tx), -Math.round(this.z.height / 2) - Math.round(this.z.Tx));
            this.V.style.left = a.x + this.z.za.width + "px";
            this.V.style.top = a.y + this.z.za.height + "px"
        },
        ha: function() {
            return this.z.point
        },
        Y0: function() {
            return this.map.bc(this.ha())
        },
        ta: function(a) {
            this.z.point = a;
            this.draw()
        },
        SZ: function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.V && (this.V.style.width = this.z.width + "px", this.V.style.height = this.z.height + "px", this.draw())
        }
    });

    function pc(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new L(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new L(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }
    x.extend(pc.prototype, {
        SN: function(a) {
            a && (this.imageUrl = a)
        },
        h_: function(a) {
            a && (this.printImageUrl = a)
        },
        Ae: function(a) {
            a && (this.size = new L(a.width, a.height))
        },
        qc: function(a) {
            a && (this.anchor = new L(a.width, a.height))
        },
        St: function(a) {
            a && (this.imageOffset = new L(a.width, a.height))
        },
        YZ: function(a) {
            a && (this.infoWindowAnchor = new L(a.width, a.height))
        },
        VZ: function(a) {
            a && (this.imageSize = new L(a.width, a.height))
        },
        toString: da("Icon")
    });

    function qc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new L(0, 0),
                fillColor: b.fillColor || "#000",
                pg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                rd: b.strokeOpacity || 1,
                nc: b.strokeWeight
            };
            this.Nb = "number" === typeof a ? a : "UserDefined";
            this.Hi = this.style.anchor;
            this.sr = new L(0, 0);
            this.anchor = p;
            this.lB = a;
            var c = this;
            I.load("symbol", function() {
                c.Kn()
            }, o)
        }
    }
    x.extend(qc.prototype, {
        setPath: ca("lB"),
        setAnchor: function(a) {
            this.Hi = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.nc = a
        },
        setStrokeColor: function(a) {
            a = x.es.rC(a, this.style.rd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.rd = a
        },
        setFillOpacity: function(a) {
            this.style.pg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });

    function rc(a, b, c, d) {
        a && (this.Ev = {}, this.cL = d ? !!d : q, this.Uc = [], this.z_ = a instanceof qc ? a : p, this.HI = b === j ? o : !!(b.indexOf("%") + 1), this.Zj = isNaN(parseFloat(b)) ? 1 : this.HI ? parseFloat(b) / 100 : parseFloat(b), this.II = !!(c.indexOf("%") + 1), this.repeat = c != j ? this.II ? parseFloat(c) / 100 : parseFloat(c) : 0)
    };

    function sc(a, b) {
        x.lang.Ca.call(this);
        this.content = a;
        this.map = p;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            za: b.offset || new L(0, 0),
            title: b.title || "",
            HE: b.maxContent || "",
            $g: b.enableMaximize || q,
            Hs: b.enableAutoPan === q ? q : o,
            eD: b.enableCloseOnClick === q ? q : o,
            margin: b.margin || [10, 10, 40, 10],
            mC: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            aY: q,
            WY: b.onClosing || da(o),
            UK: q,
            jD: b.enableParano === o ? o : q,
            message: b.message,
            lD: b.enableSearchTool === o ? o : q,
            Ex: b.headerContent || "",
            fD: b.enableContentScroll || q
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)) this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)) this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)) this.z.maxWidth = 730;
        this.de = q;
        this.Di = F.qa;
        this.bb = p;
        var c = this;
        I.load("infowindow", function() {
            c.yb()
        })
    }
    x.lang.ua(sc, x.lang.Ca, "InfoWindow");
    x.extend(sc.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a)
        },
        VN: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a)
        },
        Cc: function(a) {
            this.z.title = a
        },
        getTitle: function() {
            return this.z.title
        },
        ad: ca("content"),
        uk: u("content"),
        Ut: function(a) {
            this.z.HE = a + ""
        },
        je: s(),
        Hs: function() {
            this.z.Hs = o
        },
        disableAutoPan: function() {
            this.z.Hs = q
        },
        enableCloseOnClick: function() {
            this.z.eD = o
        },
        disableCloseOnClick: function() {
            this.z.eD = q
        },
        $g: function() {
            this.z.$g = o
        },
        Yw: function() {
            this.z.$g = q
        },
        show: function() {
            this.Qa = o
        },
        U: function() {
            this.Qa = q
        },
        close: function() {
            this.U()
        },
        Xx: function() {
            this.de = o
        },
        restore: function() {
            this.de = q
        },
        jh: function() {
            return this.Wa()
        },
        Wa: da(q),
        ha: function() {
            if (this.bb && this.bb.ha) return this.bb.ha()
        },
        Pf: function() {
            return this.z.za
        }
    });
    Ka.prototype.Ob = function(a, b) {
        if (a instanceof sc && b instanceof H) {
            var c = this.R;
            c.Nm ? c.Nm.ta(b) : (c.Nm = new U(b, {
                icon: new pc(F.qa + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new L(0, 0),
                clickable: q
            }), c.Nm.FR = 1);
            this.Ka(c.Nm);
            c.Nm.Ob(a)
        }
    };
    Ka.prototype.Wc = function() {
        var a = this.R.ob || this.R.ol;
        a && a.bb && a.bb.Wc()
    };
    eb.prototype.Ob = function(a) {
        this.map && (this.map.Wc(), a.Qa = o, this.map.R.ol = a, a.bb = this, x.lang.Ca.call(a, a.ba))
    };
    eb.prototype.Wc = function() {
        this.map && this.map.R.ol && (this.map.R.ol.Qa = q, x.lang.Vw(this.map.R.ol.ba), this.map.R.ol = p)
    };

    function tc(a, b) {
        eb.call(this);
        this.content = a;
        this.V = this.map = p;
        b = b || {};
        this.z = {
            width: 0,
            za: b.offset || new L(0, 0),
            Wp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + F.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || p,
            mj: b.enableMassClear === q ? q : o,
            hf: o
        };
        0 > this.z.width && (this.z.width = 0);
        Db(b.enableClicking) && (this.z.hf = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        I.load("marker", function() {
            c.yb()
        })
    }
    x.lang.ua(tc, eb, "Label");
    x.extend(tc.prototype, {
        ha: function() {
            return this.tv ? this.tv.ha() : this.point
        },
        ta: function(a) {
            a instanceof H && !this.sx() && (this.point = this.z.position = new H(a.lng, a.lat))
        },
        ad: ca("content"),
        uF: function(a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        },
        Xe: function(a) {
            a instanceof L && (this.z.za = new L(a.width, a.height))
        },
        Pf: function() {
            return this.z.za
        },
        Ld: function(a) {
            a = a || {};
            this.z.Wp = x.extend(this.z.Wp, a)
        },
        xi: function(a) {
            return this.Ld(a)
        },
        Cc: function(a) {
            this.z.title = a || ""
        },
        getTitle: function() {
            return this.z.title
        },
        UN: function(a) {
            this.point = (this.tv = a) ? this.z.position = a.ha() : this.z.position = p
        },
        sx: function() {
            return this.tv || p
        },
        uk: u("content")
    });

    function uc(a, b) {
        if (0 !== arguments.length) {
            eb.apply(this, arguments);
            b = b || {};
            this.z = {
                $a: a,
                opacity: b.opacity || 1,
                mp: b.imageURL || "",
                xs: b.displayOnMinLevel || 1,
                mj: b.enableMassClear === q ? q : o,
                ws: b.displayOnMaxLevel || 19,
                t_: b.stretch || q
            };
            0 === b.opacity && (this.z.opacity = 0);
            var c = this;
            I.load("groundoverlay", function() {
                c.yb()
            })
        }
    }
    x.lang.ua(uc, eb, "GroundOverlay");
    x.extend(uc.prototype, {
        setBounds: function(a) {
            this.z.$a = a
        },
        getBounds: function() {
            return this.z.$a
        },
        setOpacity: function(a) {
            this.z.opacity = a
        },
        getOpacity: function() {
            return this.z.opacity
        },
        setImageURL: function(a) {
            this.z.mp = a
        },
        getImageURL: function() {
            return this.z.mp
        },
        setDisplayOnMinLevel: function(a) {
            this.z.xs = a
        },
        getDisplayOnMinLevel: function() {
            return this.z.xs
        },
        setDisplayOnMaxLevel: function(a) {
            this.z.ws = a
        },
        getDisplayOnMaxLevel: function() {
            return this.z.ws
        }
    });
    var vc = 3,
        wc = 4;

    function xc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function yc(a, b) {
        var c = this;
        xc() && (a === j && ba(Error("没有传入points数据")), "[object Array]" !== Object.prototype.toString.call(a) && ba(Error("points数据不是数组")), b = b || {}, eb.apply(c, arguments), c.ea = {
            ia: a
        }, c.z = {
            shape: b.shape || vc,
            size: b.size || wc,
            color: b.color || "#fa937e",
            mj: o
        }, this.iB = [], this.oe = [], I.load("pointcollection", function() {
            for (var a = 0, b; b = c.iB[a]; a++) c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.oe[a]; a++) c[b.method].apply(c, b.arguments)
        }))
    }
    x.lang.ua(yc, eb, "PointCollection");
    x.extend(yc.prototype, {
        initialize: function(a) {
            this.iB && this.iB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.oe && this.oe.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.oe && this.oe.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.oe && this.oe.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.oe && this.oe.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var zc = new pc(F.qa + "marker_red_sprite.png", new L(19, 25), {
            anchor: new L(10, 25),
            infoWindowAnchor: new L(10, 0)
        }),
        Ac = new pc(F.qa + "marker_red_sprite.png", new L(20, 11), {
            anchor: new L(6, 11),
            imageOffset: new L(-19, -13)
        });

    function U(a, b) {
        eb.call(this);
        b = b || {};
        this.point = a;
        this.xq = this.map = p;
        this.z = {
            za: b.offset || new L(0, 0),
            uj: b.icon || zc,
            Ok: Ac,
            title: b.title || "",
            label: p,
            YJ: b.baseZIndex || 0,
            hf: o,
            R4: q,
            tE: q,
            mj: b.enableMassClear === q ? q : o,
            Hb: q,
            BN: b.raiseOnDrag === o ? o : q,
            IN: q,
            Fd: b.draggingCursor || F.Fd,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.Ok = p);
        b.enableDragging && (this.z.Hb = b.enableDragging);
        Db(b.enableClicking) && (this.z.hf = b.enableClicking);
        var c = this;
        I.load("marker", function() {
            c.yb()
        })
    }
    U.Ju = jc.Dm(-90) + 1E6;
    U.mG = U.Ju + 1E6;
    x.lang.ua(U, eb, "Marker");
    x.extend(U.prototype, {
        Vb: function(a) {
            if (a instanceof pc || a instanceof qc) this.z.uj = a
        },
        Yo: function() {
            return this.z.uj
        },
        Cy: function(a) {
            a instanceof pc && (this.z.Ok = a)
        },
        getShadow: function() {
            return this.z.Ok
        },
        fn: function(a) {
            this.z.label = a || p
        },
        MD: function() {
            return this.z.label
        },
        Hb: function() {
            this.z.Hb = o
        },
        KC: function() {
            this.z.Hb = q
        },
        ha: u("point"),
        ta: function(a) {
            a instanceof H && (this.point = new H(a.lng, a.lat))
        },
        yi: function(a, b) {
            this.z.tE = !!a;
            a && (this.IG = b || 0)
        },
        Cc: function(a) {
            this.z.title = a + ""
        },
        getTitle: function() {
            return this.z.title
        },
        Xe: function(a) {
            a instanceof L && (this.z.za = a)
        },
        Pf: function() {
            return this.z.za
        },
        dn: ca("xq"),
        Qp: function(a) {
            this.z.rotation = a
        },
        CL: function() {
            return this.z.rotation
        }
    });

    function Bc(a, b) {
        lc.call(this, b);
        b = b || {};
        this.z.pg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.ke(a);
        var c = this;
        I.load("poly", function() {
            c.yb()
        })
    }
    x.lang.ua(Bc, lc, "Polygon");
    x.extend(Bc.prototype, {
        ke: function(a, b) {
            this.so = lc.lx(a).slice(0);
            var c = lc.lx(a).slice(0);
            1 < c.length && c.push(new H(c[0].lng, c[0].lat));
            lc.prototype.ke.call(this, c, b)
        },
        hn: function(a, b) {
            this.so[a] && (this.so[a] = new H(b.lng, b.lat), this.ia[a] = new H(b.lng, b.lat), 0 == a && !this.ia[0].nb(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new H(b.lng, b.lat)), this.Eh())
        },
        te: function() {
            var a = this.so;
            0 == a.length && (a = this.ia);
            return a
        }
    });

    function Cc(a, b) {
        lc.call(this, b);
        this.Mr(a);
        var c = this;
        I.load("poly", function() {
            c.yb()
        })
    }
    x.lang.ua(Cc, lc, "Polyline");

    function Dc(a, b, c) {
        this.point = a;
        this.xa = Math.abs(b);
        Bc.call(this, [], c)
    }
    Dc.QE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.ua(Dc, Bc, "Circle");
    x.extend(Dc.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ia = this.hv(this.point, this.xa);
            this.Eh();
            return p
        },
        Ha: u("point"),
        Vf: function(a) {
            a && (this.point = a)
        },
        AL: u("xa"),
        uf: function(a) {
            this.xa = Math.abs(a)
        },
        hv: function(a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var i = Math.PI / 180 * g,
                    k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)),
                    i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(i)
            }
            d = c[0];
            c.push(new H(d.lng, d.lat));
            return c
        }
    });
    var Ec = {};

    function Fc(a) {
        this.map = a;
        this.Mm = [];
        this.Wf = [];
        this.Bg = [];
        this.oV = 300;
        this.$E = 0;
        this.ug = {};
        this.dj = {};
        this.ph = 0;
        this.nE = o;
        this.yK = {};
        this.bo = this.Nn(1);
        this.ld = this.Nn(2);
        this.yl = this.Nn(3);
        a.platform.appendChild(this.bo);
        a.platform.appendChild(this.ld);
        a.platform.appendChild(this.yl);
        var b = 256 * Math.pow(2, 15),
            c = 3 * b,
            a = S.zb(new H(180, 0)).lng,
            c = c - a,
            b = -3 * b,
            d = S.zb(new H(-180, 0)).lng;
        this.kI = a;
        this.lI = d;
        this.PA = c + (d - b);
        this.mI = a - d
    }
    z.We(function(a) {
        var b = new Fc(a);
        b.ra();
        a.eb = b
    });
    x.extend(Fc.prototype, {
        ra: function() {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function() {
                a.Ux()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Vg(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.wh(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.zg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Jc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.Tt(b.target);
                a.Tf(o)
            })
        },
        Ux: function() {
            var a = this;
            if (x.da.la) try {
                document.execCommand("BackgroundImageCache", q, o)
            } catch (b) {}
            this.loaded || a.Kx();
            a.Tf();
            this.loaded || (this.loaded = o, I.load("tile", function() {
                a.YP()
            }))
        },
        Kx: function() {
            for (var a = this.map.oa().nr, b = 0; b < a.length; b++) {
                var c = new Gc;
                x.extend(c, a[b]);
                this.Mm.push(c);
                c.ra(this.map, this.bo)
            }
            this.Tt()
        },
        Nn: function(a) {
            var b = K("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        xf: function() {
            this.ph--;
            var a = this;
            this.nE && (this.map.dispatchEvent(new M("onfirsttileloaded")), this.nE = q);
            0 == this.ph && (this.Li && (clearTimeout(this.Li), this.Li = p), this.Li = setTimeout(function() {
                if (a.ph == 0) {
                    a.map.dispatchEvent(new M("ontilesloaded"));
                    a.nE = o
                }
                a.Li = p
            }, 80))
        },
        XD: function(a, b) {
            return "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Hx: function(a) {
            var b = a.Ib;
            b && wb(b) && b.parentNode.removeChild(b);
            delete this.ug[a.name];
            a.loaded || (Hc(a), a.Ib = p, a.Pm = p)
        },
        Cm: function(a, b, c) {
            var d = this.map,
                e = d.oa(),
                f = d.Oa,
                g = d.mc,
                i = e.yc(f),
                k = this.pL(),
                l = k[0],
                m = k[1],
                n = k[2],
                t = k[3],
                v = k[4],
                c = "undefined" != typeof c ? c : 0,
                e = e.k.Qb,
                k = d.ba.replace(/^TANGRAM_/, "");
            for (this.Qc ? this.Qc.length = 0 : this.Qc = []; l < n; l++)
                for (var w = m; w < t; w++) {
                    var y = l,
                        B = w;
                    this.Qc.push([y, B]);
                    y = k + "_" + b + "_" + y + "_" + B + "_" + f;
                    this.yK[y] = y
                }
            this.Qc.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([v[0] - 1, v[1] - 1]));
            g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.Me ? this.Me.length = 0 : this.Me = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++) w = a.childNodes[l], w.jr = q, this.Me.push(w);
            if (l = this.Sm)
                for (var A in l) delete l[A];
            else this.Sm = {};
            this.Ne ? this.Ne.length = 0 : this.Ne = [];
            l = 0;
            for (d = this.Qc.length; l < d; l++) {
                A = this.Qc[l][0];
                i = this.Qc[l][1];
                w = 0;
                for (m = this.Me.length; w < m; w++)
                    if (n = this.Me[w], n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
                        n.jr = o;
                        this.Sm[n.id] = n;
                        break
                    }
            }
            l = 0;
            for (d = this.Me.length; l < d; l++) n = this.Me[l], n.jr || this.Ne.push(n);
            this.nn = [];
            w = (e + c) * this.map.D.devicePixelRatio;
            l = 0;
            for (d = this.Qc.length; l < d; l++) A = this.Qc[l][0], i = this.Qc[l][1], t = A * e + g[0] - c / 2, v = (-1 - i) * e + g[1] - c / 2, y = k + "_" + b + "_" + A + "_" + i + "_" + f, m = this.Sm[y], n = p, m ? (n = m.style, n.left = t + "px", n.top = v + "px", m.$e || this.nn.push([A, i, m])) : (0 < this.Ne.length ? (m = this.Ne.shift(), m.getContext("2d").clearRect(-c / 2, -c / 2, w, w), n = m.style) : (m = document.createElement("canvas"), n = m.style, n.position = "absolute", n.width = e + c + "px", n.height = e + c + "px", this.Px() && (n.WebkitTransform = "scale(1.001)"), m.setAttribute("width", w), m.setAttribute("height", w), a.appendChild(m)), m.id = y, n.left = t + "px", n.top = v + "px", -1 < y.indexOf("bg") && (t = "#F3F1EC", this.map.D.Bo && (t = this.map.D.Bo), n.background = t ? t : ""), this.nn.push([A, i, m])), m.style.visibility = "";
            l = 0;
            for (d = this.Ne.length; l < d; l++) this.Ne[l].style.visibility = "hidden";
            return this.nn
        },
        Px: function() {
            return /M040/i.test(navigator.userAgent)
        },
        pL: function() {
            var a = this.map,
                b = a.oa(),
                c = b.bE(a.Oa),
                d = a.mc,
                e = Math.ceil(d.lng / c),
                f = Math.ceil(d.lat / c),
                b = b.k.Qb,
                c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        o_: function(a, b, c, d) {
            var e = this;
            e.F1 = b;
            var f = this.map.oa(),
                g = e.XD(a, c),
                i = f.k.Qb,
                b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]],
                k = this.ug[g];
            if (this.map.oa() !== Ya && this.map.oa() !== Sa) {
                var l = this.Bw(a[0], a[2]).offsetX;
                b[0] += l;
                b.b1 = l
            }
            k && k.Ib ? (ub(k.Ib, b), d && (d = new R(a[0], a[1]), f = this.map.D.xe ? this.map.D.xe.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Ic(k, d)), k.loaded ? this.xf() : Jc(k, function() {
                e.xf()
            })) : (k = this.dj[g]) && k.Ib ? (c.Rb.insertBefore(k.Ib, c.Rb.lastChild), this.ug[g] = k, ub(k.Ib, b), d && (d = new R(a[0], a[1]), f = this.map.D.xe ? this.map.D.xe.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Ic(k, d)), k.loaded ? this.xf() : Jc(k, function() {
                e.xf()
            })) : (k = i * Math.pow(2, f.vm() - a[2]), new H(a[0] * k, a[1] * k), d = new R(a[0], a[1]), f = this.map.D.xe ? this.map.D.xe.style : "normal", d = c.getTilesUrl(d, a[2], f), k = new Kc(this, d, b, a, c), Jc(k, function() {
                e.xf()
            }), k.ao(), this.ug[g] = k)
        },
        xf: function() {
            this.ph--;
            var a = this;
            0 == this.ph && (this.Li && (clearTimeout(this.Li), this.Li = p), this.Li = setTimeout(function() {
                if (a.ph == 0) {
                    a.map.dispatchEvent(new M("ontilesloaded"));
                    if (ta) {
                        if (qa && ra && sa) {
                            var b = $a(),
                                c = a.map.Bb();
                            setTimeout(function() {
                                Qa(5030, {
                                    load_script_time: ra - qa,
                                    load_tiles_time: b - sa,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            z.Dn("cus.fire", "time", {
                                z_imgfirstloaded: b - sa
                            })
                        }
                        ta = q
                    }
                }
                a.Li = p
            }, 80))
        },
        XD: function(a, b) {
            return this.map.oa() === Pa ? "TILE-" + b.ba + "-" + this.map.Hw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Hx: function(a) {
            var b = a.Ib;
            b && (Lc(b), wb(b) && b.parentNode.removeChild(b));
            delete this.ug[a.name];
            a.loaded || (Lc(b), Hc(a), a.Ib = p, a.Pm = p)
        },
        Bw: function(a, b) {
            for (var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2; a > e;) a -= d, c -= this.PA;
            for (; a < f;) a += d, c += this.PA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                ds: a
            }
        },
        qV: function(a) {
            for (var b = a.lng; b > this.kI;) b -= this.mI;
            for (; b < this.lI;) b += this.mI;
            a.lng = b;
            return a
        },
        rV: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), d = Math.floor(this.kI / c), e = Math.floor(this.lI / c), c = Math.floor(this.PA / c), f = [], g = 0; g < a.length; g++) {
                var i = a[g],
                    k = i[0],
                    i = i[1];
                if (k >= d) {
                    var k = k + c,
                        l = "id_" + k + "_" + i + "_" + b;
                    a[l] || (a[l] = o, f.push([k, i]))
                } else k <= e && (k -= c, l = "id_" + k + "_" + i + "_" + b, a[l] || (a[l] = o, f.push([k, i])))
            }
            for (g = 0; g < f.length; g++) a.push(f[g]);
            return a
        },
        Tf: function(a) {
            var b = this;
            if (b.map.oa() == Pa) I.load("coordtrans", function() {
                b.map.Xb || (b.map.Xb = Pa.tk(b.map.Xg), b.map.Hw = Pa.nL(b.map.Xb));
                b.oI()
            }, o);
            else {
                if (a && a)
                    for (var c in this.dj) delete this.dj[c];
                b.oI(a)
            }
        },
        oI: function(a) {
            var b = this.Mm.concat(this.Wf),
                c = b.length,
                d = this.map,
                e = d.oa(),
                f = d.mc;
            this.map.oa() !== Ya && this.map.oa() !== Sa && (f = this.qV(f));
            for (var g = 0; g < c; g++) {
                var i = b[g];
                if (i.gc && d.Oa < i.gc) break;
                if (i.zw) {
                    var k = this.Rb = i.Rb;
                    if (a) {
                        var l = k;
                        if (l && l.childNodes)
                            for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--) m = l.childNodes[n], l.removeChild(m), m = p
                    }
                    if (this.map.Wb()) {
                        this.ld.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new M("vectorchanged"), {
                            isvector: o
                        });
                        continue
                    } else k.style.display = "block", this.ld.style.display = "none", this.map.dispatchEvent(new M("vectorchanged"), {
                        isvector: q
                    })
                }
                if (!i.bI && !(i.qp && !this.map.Wb() || i.mM && this.map.Wb())) {
                    d = this.map;
                    e = d.oa();
                    k = e.dp();
                    m = d.Oa;
                    f = d.mc;
                    e == Pa && f.nb(new H(0, 0)) && (f = d.mc = k.Ck(d.Oe, d.Xb));
                    var t = e.yc(m),
                        k = e.bE(m),
                        l = Math.ceil(f.lng / k),
                        v = Math.ceil(f.lat / k),
                        w = e.k.Qb,
                        k = [l, v, (f.lng - l * k) / k * w, (f.lat - v * k) / k * w],
                        n = k[0] - Math.ceil((d.width / 2 - k[2]) / w),
                        l = k[1] - Math.ceil((d.height / 2 - k[3]) / w),
                        v = k[0] + Math.ceil((d.width / 2 + k[2]) / w),
                        y = 0;
                    e === Pa && 15 == d.fa() && (y = 1);
                    e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y;
                    this.TJ = new H(f.lng, f.lat);
                    var B = this.ug,
                        w = -this.TJ.lng / t,
                        y = this.TJ.lat / t,
                        t = [Math.ceil(w), Math.ceil(y)],
                        f = d.fa(),
                        A;
                    for (A in B) {
                        var E = B[A],
                            C = E.info;
                        (C[2] != f || C[2] == f && (n > C[0] || v <= C[0] || l > C[1] || e <= C[1])) && this.Hx(E)
                    }
                    B = -d.offsetX + d.width / 2;
                    E = -d.offsetY + d.height / 2;
                    i.Rb && (i.Rb.style.left = Math.ceil(w + B) - t[0] + "px", i.Rb.style.top = Math.ceil(y + E) - t[1] + "px", i.Rb.style.WebkitTransform = "translate3d(0,0,0)");
                    w = [];
                    for (d.MB = []; n < v; n++)
                        for (y = l; y < e; y++) w.push([n, y]), d.MB.push({
                            x: n,
                            y: y
                        });
                    this.map.oa() !== Ya && this.map.oa() !== Sa && (w = this.rV(w, m));
                    w.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([k[0] - 1, k[1] - 1]));
                    m = w.length;
                    this.ph += m;
                    for (n = 0; n < m; n++) this.o_([w[n][0], w[n][1], f], t, i, a)
                }
            }
        },
        Vg: function(a) {
            var b = this,
                c = a.target,
                a = b.map.Wb();
            if (c instanceof bb) a && !c.Im && (c.ra(this.map, this.ld), c.Im = o);
            else if (c.Ch && this.map.Vg(c.Ch), c.qp) {
                for (a = 0; a < b.Bg.length; a++)
                    if (b.Bg[a] == c) return;
                I.load("vector", function() {
                    c.ra(b.map, b.ld);
                    b.Bg.push(c)
                }, o)
            } else {
                for (a = 0; a < b.Wf.length; a++)
                    if (b.Wf[a] == c) return;
                c.ra(this.map, this.yl);
                b.Wf.push(c)
            }
        },
        wh: function(a) {
            var a = a.target,
                b = this.map.Wb();
            if (a instanceof bb) b && a.Im && (a.remove(), a.Im = q);
            else {
                a.Ch && this.map.wh(a.Ch);
                if (a.qp)
                    for (var b = 0, c = this.Bg.length; b < c; b++) a == this.Bg[b] && this.Bg.splice(b, 1);
                else {
                    b = 0;
                    for (c = this.Wf.length; b < c; b++) a == this.Wf[b] && this.Wf.splice(b, 1)
                }
                a.remove()
            }
        },
        zg: function() {
            for (var a = this.Mm, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.Rb;
            this.Mm = [];
            this.dj = this.ug = {};
            this.Kx();
            this.Tf()
        },
        Jc: function() {
            var a = this;
            a.td && x.K.U(a.td);
            setTimeout(function() {
                a.Tf();
                a.map.dispatchEvent(new M("onzoomend"))
            }, 10)
        },
        H4: s(),
        Tt: function(a) {
            var b = this.map.oa();
            if (!this.map.Wb() && (a ? this.map.D.w_ = a : a = this.map.D.w_, a))
                for (var c = p, c = "2" == z.Qy ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.Mm[d]; d++)
                    if (e.j_ == o) {
                        b.k.$b = 18;
                        e.getTilesUrl = function(b, d) {
                            var e = b.x,
                                e = this.map.eb.Bw(e, d).ds,
                                k = b.y,
                                l = Qb("normal"),
                                m = 1;
                            this.map.Ix() && (m = 2);
                            l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=" + l + "&scale=" + m + "&ak=" + pa;
                            l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                            return c[Math.abs(e + k) % c.length] + l
                        };
                        break
                    }
        }
    });

    function Kc(a, b, c, d, e) {
        this.Pm = a;
        this.position = c;
        this.Tu = [];
        this.name = a.XD(d, e);
        this.info = d;
        this.rJ = e.vt();
        d = K("img");
        vb(d);
        d.gL = q;
        var f = d.style,
            a = a.map.oa();
        f.position = "absolute";
        f.border = "none";
        f.width = a.k.Qb + "px";
        f.height = a.k.Qb + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.Ib = d;
        this.src = b;
        Mc && (this.Ib.style.opacity = 0);
        var g = this;
        this.Ib.onload = function() {
            z.DY.KQ();
            g.loaded = o;
            if (g.Pm) {
                var a = g.Pm,
                    b = a.dj;
                if (!b[g.name]) {
                    a.$E++;
                    b[g.name] = g
                }
                if (g.Ib && !wb(g.Ib) && e.Rb) {
                    e.Rb.appendChild(g.Ib);
                    if (x.da.la <= 6 && x.da.la > 0 && g.rJ) g.Ib.style.cssText = g.Ib.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                }
                var c = a.$E - a.oV,
                    d;
                for (d in b) {
                    if (c <= 0) break;
                    if (!a.ug[d]) {
                        b[d].Pm = p;
                        var f = b[d].Ib;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            Lc(f)
                        }
                        f = p;
                        b[d].Ib = p;
                        delete b[d];
                        a.$E--;
                        c--
                    }
                }
                Mc && new qb({
                    Gc: 20,
                    duration: 200,
                    va: function(a) {
                        if (g.Ib && g.Ib.style) g.Ib.style.opacity = a * 1
                    },
                    finish: function() {
                        g.Ib && g.Ib.style && delete g.Ib.style.opacity
                    }
                });
                Hc(g)
            }
        };
        this.Ib.onerror = function() {
            Hc(g);
            if (g.Pm) {
                var a = g.Pm.map.oa();
                if (a.k.mD) {
                    g.error = o;
                    g.Ib.src = a.k.mD;
                    g.Ib && !wb(g.Ib) && e.Rb.appendChild(g.Ib)
                }
            }
        };
        d = p
    }

    function Jc(a, b) {
        a.Tu.push(b)
    }
    Kc.prototype.ao = function() {
        this.Ib.src = 0 < x.da.la && 6 >= x.da.la && this.rJ ? F.qa + "blank.gif" : "" !== this.src && this.Ib.src == this.src ? this.src + "&t = " + Date.now() : this.src
    };

    function Hc(a) {
        for (var b = 0; b < a.Tu.length; b++) a.Tu[b]();
        a.Tu.length = 0
    }

    function Lc(a) {
        if (a) {
            a.onload = a.onerror = p;
            var b = a.attributes,
                c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1) e = b[c].name, Xa(a[e]) && (a[e] = p)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1) Lc(a.children[c])
            }
        }
    }

    function Ic(a, b) {
        a.src = b;
        a.ao()
    }
    var Mc = !x.da.la || 8 < x.da.la;

    function Gc(a) {
        this.qh = a || {};
        this.LV = this.qh.copyright || p;
        this.V_ = this.qh.transparentPng || q;
        this.zw = this.qh.baseLayer || q;
        this.zIndex = this.qh.zIndex || 0;
        this.ba = Gc.yS++
    }
    Gc.yS = 0;
    x.lang.ua(Gc, x.lang.Ca, "TileLayer");
    x.extend(Gc.prototype, {
        ra: function(a, b) {
            this.zw && (this.zIndex = -100);
            this.map = a;
            if (!this.Rb) {
                var c = K("div"),
                    d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Rb = c
            }
        },
        remove: function() {
            this.Rb && this.Rb.parentNode && (this.Rb.innerHTML = "", this.Rb.parentNode.removeChild(this.Rb));
            delete this.Rb
        },
        vt: u("V_"),
        getTilesUrl: function(a, b) {
            if (this.map.oa() !== Ya && this.map.oa() !== Sa) var c = this.map.eb.Bw(a.x, b).ds;
            var d = "";
            this.qh.tileUrlTemplate && (d = this.qh.tileUrlTemplate.replace(/\{X\}/, c), d = d.replace(/\{Y\}/, a.y), d = d.replace(/\{Z\}/, b));
            return d
        },
        sm: u("LV"),
        oa: function() {
            return this.Jb || La
        }
    });

    function Oc(a, b) {
        Eb(a) ? b = a || {} : (b = b || {}, b.databoxId = a);
        this.k = {
            zK: b.databoxId,
            bh: b.geotableId,
            Ym: b.q || "",
            ju: b.tags || "",
            filter: b.filter || "",
            Jy: b.sortby || "",
            u_: b.styleId || "",
            Vl: b.ak || pa,
            ww: b.age || 36E5,
            zIndex: 11,
            zY: "VectorCloudLayer",
            Bk: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            WU: "LBS云麻点层"
        };
        this.qp = o;
        Gc.call(this, this.k);
        this.dW = z.wc + "geosearch/detail/";
        this.eW = z.wc + "geosearch/v2/detail/";
        this.kp = {}
    }
    x.ua(Oc, Gc, "VectorCloudLayer");

    function Pc(a) {
        a = a || {};
        this.k = x.extend(a, {
            zIndex: 1,
            zY: "VectorTrafficLayer",
            WU: "矢量路况层"
        });
        this.qp = o;
        Gc.call(this, this.k);
        this.R_ = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.Fb = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1: [2, 1354709503, 3, 2, 0, [], 0, 0],
            10: [2, -231722753, 2, 2, 0, [], 0, 0],
            11: [2, -231722753, 3, 2, 0, [], 0, 0],
            12: [2, -231722753, 4, 2, 0, [], 0, 0],
            13: [2, -231722753, 5, 2, 0, [], 0, 0],
            14: [2, -231722753, 6, 2, 0, [], 0, 0],
            15: [2, -1, 4, 0, 0, [], 0, 0],
            16: [2, -1, 5.5, 0, 0, [], 0, 0],
            17: [2, -1, 7, 0, 0, [], 0, 0],
            18: [2, -1, 8.5, 0, 0, [], 0, 0],
            19: [2, -1, 10, 0, 0, [], 0, 0],
            2: [2, 1354709503, 4, 2, 0, [], 0, 0],
            3: [2, 1354709503, 5, 2, 0, [], 0, 0],
            4: [2, 1354709503, 6, 2, 0, [], 0, 0],
            5: [2, -6350337, 2, 2, 0, [], 0, 0],
            6: [2, -6350337, 3, 2, 0, [], 0, 0],
            7: [2, -6350337, 4, 2, 0, [], 0, 0],
            8: [2, -6350337, 5, 2, 0, [], 0, 0],
            9: [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }
    x.ua(Pc, Gc, "VectorTrafficLayer");

    function bb(a) {
        this.pV = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?"];
        this.k = {
            bL: q
        };
        for (var b in a) this.k[b] = a[b];
        this.Yh = this.Ih = this.Xa = this.B = this.C = p;
        this.rM = 0;
        var c = this;
        I.load("vector", function() {
            c.Ce()
        })
    }
    x.extend(bb.prototype, {
        ra: function(a, b) {
            this.C = a;
            this.B = b
        },
        remove: function() {
            this.B = this.C = p
        }
    });

    function Qc(a) {
        Gc.call(this, a);
        this.k = a || {};
        this.mM = o;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday) this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour) this.k.predictDate.hour = 0
        }
        this.zU = z.url.proto + z.url.domain.traffic + "/traffic/"
    }
    Qc.prototype = new Gc;
    Qc.prototype.ra = function(a, b) {
        Gc.prototype.ra.call(this, a, b);
        this.C = a
    };
    Qc.prototype.vt = da(o);
    Qc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
        var c = this.zU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
            d = 1;
        this.C.Ix() && (d = 2);
        return (c + "&scaler=" + d).replace(/-(\d+)/gi, "M$1")
    };
    var Rc = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Sc = z.url.proto + z.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Tc = 100;

    function lb(a, b) {
        Gc.call(this);
        var c = this;
        this.mM = o;
        var d = q;
        try {
            document.createElement("canvas").getContext("2d"), d = o
        } catch (e) {
            d = q
        }
        d && (this.Ch = new Oc(a, b), this.Ch.IF = this);
        Eb(a) ? b = a || {} : (c.Qn = a, b = b || {});
        b.geotableId && (c.zf = b.geotableId);
        b.databoxId && (c.Qn = b.databoxId);
        d = z.wc + "geosearch";
        c.pc = {
            wN: b.pointDensity || Tc,
            YX: d + "/detail/",
            ZX: d + "/v2/detail/",
            ww: b.age || 36E5,
            Ym: b.q || "",
            E_: "png",
            e3: [5, 5, 5, 5],
            yY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            Vl: b.ak || pa,
            ju: b.tags || "",
            filter: b.filter || "",
            Jy: b.sortby || "",
            Bk: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            RF: o
        };
        I.load("clayer", function() {
            c.Qd()
        })
    }
    lb.prototype = new Gc;
    lb.prototype.ra = function(a, b) {
        Gc.prototype.ra.call(this, a, b);
        this.C = a
    };
    lb.prototype.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = this.pc,
            c = Rc[Math.abs(c + d) % Rc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.Ym + "&tags=" + e.ju + "&filter=" + e.filter + "&sortby=" + e.Jy + "&ak=" + this.pc.Vl + "&age=" + e.ww + "&page_size=" + e.wN + "&format=" + e.E_;
        e.RF || (e = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + e);
        this.zf ? c += "&geotable_id=" + this.zf : this.Qn && (c += "&databox_id=" + this.Qn);
        return c
    };
    lb.prototype.enableUseCache = function() {
        this.pc.RF = o
    };
    lb.prototype.disableUseCache = function() {
        this.pc.RF = q
    };
    lb.XT = /^point\(|\)$/ig;
    lb.YT = /\s+/;
    lb.$T = /^[\s﻿\xA0]+|[\s﻿\xA0]+$/g;

    function Uc(a, b, c) {
        this.ef = a;
        this.nr = b instanceof Gc ? [b] : b.slice(0);
        c = c || {};
        this.k = {
            F_: c.tips || "",
            zE: "",
            gc: c.minZoom || 3,
            $b: c.maxZoom || 18,
            d3: c.minZoom || 3,
            c3: c.maxZoom || 18,
            Qb: 256,
            GF: c.textColor || "black",
            mD: c.errorImageUrl || "",
            $a: new db(new H(-21364736, -16023552), new H(23855104, 19431424)),
            ie: c.projection || new S
        };
        1 <= this.nr.length && (this.nr[0].zw = o);
        x.extend(this.k, c)
    }
    x.extend(Uc.prototype, {
        getName: u("ef"),
        at: function() {
            return this.k.F_
        },
        I2: function() {
            return this.k.zE
        },
        LX: function() {
            return this.nr[0]
        },
        W2: u("nr"),
        MX: function() {
            return this.k.Qb
        },
        Zo: function() {
            return this.k.gc
        },
        vm: function() {
            return this.k.$b
        },
        setMaxZoom: function(a) {
            this.k.$b = a
        },
        Bm: function() {
            return this.k.GF
        },
        dp: function() {
            return this.k.ie
        },
        z2: function() {
            return this.k.mD
        },
        MX: function() {
            return this.k.Qb
        },
        yc: function(a) {
            return Math.pow(2, 18 - a)
        },
        bE: function(a) {
            return this.yc(a) * this.k.Qb
        }
    });
    var Vc = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"],
        Wc = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/tile/"],
        Xc = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        Yc = new Gc;
    Yc.j_ = o;
    Yc.getTilesUrl = function(a, b, c) {
        var d = a.x,
            a = a.y,
            e = Qb("normal"),
            f = 1,
            c = Xc[c];
        this.map.Ix() && (f = 2);
        d = this.map.eb.Bw(d, b).ds;
        return (Wc[Math.abs(d + a) % Wc.length] + "?qt=vtile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + f + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var La = new Uc("地图", Yc, {
            tips: "显示普通地图",
            maxZoom: 19
        }),
        Zc = new Gc;
    Zc.rO = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Zc.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = 256 * Math.pow(2, 20 - b),
            d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.rO[Math.abs(c + d) % this.rO.length] + this.map.Xb + "/" + this.map.Hw + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    };
    var Pa = new Uc("三维", Zc, {
        tips: "显示三维地图",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new fb
    });
    Pa.yc = function(a) {
        return Math.pow(2, 20 - a)
    };
    Pa.tk = function(a) {
        if (!a) return "";
        var b = F.gC,
            c;
        for (c in b)
            if (-1 < a.search(c)) return b[c].my;
        return ""
    };
    Pa.nL = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    };
    var $c = new Gc({
        zw: o
    });
    $c.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y;
        return (Vc[Math.abs(c + d) % Vc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Qb("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var Ya = new Uc("卫星", $c, {
            tips: "显示卫星影像",
            minZoom: 1,
            maxZoom: 19,
            textColor: "white"
        }),
        ad = new Gc({
            transparentPng: o
        });
    ad.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = Qb("satelliteStreet");
        return (Wc[Math.abs(c + d) % Wc.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Sa = new Uc("混合", [$c, ad], {
        tips: "显示带有街道的卫星影像",
        labelText: "路网",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var bd = 1,
        V = {};
    window.r0 = V;

    function W(a, b) {
        x.lang.Ca.call(this);
        this.yd = {};
        this.gn(a);
        b = b || {};
        b.ka = b.renderOptions || {};
        this.k = {
            ka: {
                Ia: b.ka.panel || p,
                map: b.ka.map || p,
                Wg: b.ka.autoViewport || o,
                Ot: b.ka.selectFirstResult,
                ft: b.ka.highlightMode,
                Hb: b.ka.enableDragging || q
            },
            fy: b.onSearchComplete || s(),
            iN: b.onMarkersSet || s(),
            hN: b.onInfoHtmlSet || s(),
            kN: b.onResultsHtmlSet || s(),
            gN: b.onGetBusListComplete || s(),
            fN: b.onGetBusLineComplete || s(),
            dN: b.onBusListHtmlSet || s(),
            cN: b.onBusLineHtmlSet || s(),
            NE: b.onPolylinesSet || s(),
            Fp: b.reqFrom || ""
        };
        this.k.ka.Wg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
        this.k.ka.Ia = x.Dc(this.k.ka.Ia)
    }
    x.ua(W, x.lang.Ca);
    x.extend(W.prototype, {
        getResults: function() {
            return this.Fc ? this.Ii : this.ja
        },
        enableAutoViewport: function() {
            this.k.ka.Wg = o
        },
        disableAutoViewport: function() {
            this.k.ka.Wg = q
        },
        gn: function(a) {
            a && (this.yd.src = a)
        },
        wF: function(a) {
            this.k.fy = a || s()
        },
        setMarkersSetCallback: function(a) {
            this.k.iN = a || s()
        },
        setPolylinesSetCallback: function(a) {
            this.k.NE = a || s()
        },
        setInfoHtmlSetCallback: function(a) {
            this.k.hN = a || s()
        },
        setResultsHtmlSetCallback: function(a) {
            this.k.kN = a || s()
        },
        zm: u("Bd")
    });
    var cd = {
        vG: z.wc,
        cb: function(a, b, c, d, e) {
            this.nZ(b);
            var f = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + f] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("该AK因为恶意行为已经被管理员封禁！") : (c = c || {}, a && a(b, c), delete z._rd["_cbk" + f])
            };
            d = d || "";
            b = c && c.JO ? Cb(b, encodeURI) : Cb(b, encodeURIComponent);
            this.vG = c && c.Js ? c.HN ? c.HN : z.wp : z.wc;
            d = this.vG + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            d = d + ("&callback=BMap._rd._cbk" + f) + ("&ak=" + pa);
            oa(d)
        },
        nZ: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag";
                        break;
                    case "s":
                        b = "z_qt|s";
                        break;
                    case "ext":
                        b = "z_qt|ext";
                        break;
                    case "gc":
                        b = "z_qt|gc";
                        break;
                    case "rgc":
                        b = "z_qt|rgc";
                        break;
                    case "bl":
                        b = "z_qt|bl";
                        break;
                    case "bsl":
                        b = "z_qt|bsl";
                        break;
                    case "con":
                        b = "z_qt|con";
                        break;
                    case "bd":
                        b = "z_qt|bd";
                        break;
                    case "nb":
                        b = "z_qt|nb";
                        break;
                    case "bda":
                        b = "z_qt|bda";
                        break;
                    case "sa":
                        b = "z_qt|sa";
                        break;
                    case "nba":
                        b = "z_qt|nba";
                        break;
                    case "dec":
                        b = "z_qt|dec"
                }
                "" !== b && z.alog("cus.fire", "count", b)
            }
        }
    };
    window.D0 = cd;
    z._rd = {};
    var O = {};
    window.C0 = O;
    O.DN = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    };
    O.dZ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    O.eZ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var dd = 2,
        ed = 3,
        id = 0,
        jd = "bt",
        kd = "nav",
        ld = "walk",
        md = "bl",
        nd = "bsl",
        od = 14,
        pd = 15,
        qd = 18,
        rd = 20,
        sd = 31;
    z.I = window.Instance = x.lang.Kc;

    function td(a, b, c) {
        x.lang.Ca.call(this);
        if (a) {
            this.Va = "object" == typeof a ? a : x.Dc(a);
            this.page = 1;
            this.Jd = 100;
            this.UJ = "pg";
            this.Uf = 4;
            this.bK = b;
            this.update = o;
            a = {
                page: 1,
                Ye: 100,
                Jd: 100,
                Uf: 4,
                UJ: "pg",
                update: o
            };
            c || (c = a);
            for (var d in c) "undefined" != typeof c[d] && (this[d] = c[d]);
            this.va()
        }
    }
    x.extend(td.prototype, {
        va: function() {
            this.ra()
        },
        ra: function() {
            this.xV();
            this.Va.innerHTML = this.TV()
        },
        xV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Jd)) && (this.Jd = 1);
            1 > this.page && (this.page = 1);
            1 > this.Jd && (this.Jd = 1);
            this.page > this.Jd && (this.page = this.Jd);
            this.page = parseInt(this.page);
            this.Jd = parseInt(this.Jd)
        },
        N2: function() {
            location.search.match(RegExp("[?&]?" + this.UJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        TV: function() {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Uf) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">首页</a></span>'.replace("{temp1}", "BMap.I('" + this.ba + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">上一页</a></span>'.replace("{temp2}", "BMap.I('" + this.ba + "').toPage(" + b + ");"))
            }
            if (this.page < this.Uf) d = 0 == this.page % this.Uf ? this.page - this.Uf - 1 : this.page - this.page % this.Uf + 1, b = d + this.Uf - 1;
            else {
                d = Math.floor(this.Uf / 2);
                var e = this.Uf % 2 - 1,
                    b = this.Jd > this.page + d ? this.page + d : this.Jd;
                d = this.page - d - e
            }
            this.page > this.Jd - this.Uf && this.page >= this.Uf && (d = this.Jd - this.Uf + 1, b = this.Jd);
            for (e = d; e <= b; e++) 0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Jd && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>", a.push(d.replace("{temp3}", "BMap.I('" + this.ba + "').toPage(" + e + ");"))));
            c > this.Jd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">下一页</a></span>'.replace("{temp4}", "BMap.I('" + this.ba + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.bK && (this.bK(a), this.page = a);
            this.update && this.va()
        }
    });

    function ab(a, b) {
        W.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Pp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.LC() : this.hD();
        this.wa = [];
        this.vf = [];
        this.kb = -1;
        this.Pa = [];
        var c = this;
        I.load("local", function() {
            c.Dz()
        }, o)
    }
    x.ua(ab, W, "LocalSearch");
    ab.fq = 10;
    ab.z0 = 1;
    ab.Cn = 100;
    ab.lG = 2E3;
    ab.sG = 1E5;
    x.extend(ab.prototype, {
        search: function(a, b) {
            this.Pa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        bn: function(a, b, c) {
            this.Pa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Lp: function(a, b, c, d) {
            this.Pa.push({
                method: "searchNearby",
                arguments: [a, b, c, d]
            })
        },
        Pe: function() {
            delete this.Fa;
            delete this.Bd;
            delete this.ja;
            delete this.ga;
            this.kb = -1;
            this.sb();
            this.k.ka.Ia && (this.k.ka.Ia.innerHTML = "")
        },
        Em: s(),
        hD: function() {
            this.k.ka.Ot = o
        },
        LC: function() {
            this.k.ka.Ot = q
        },
        Pp: function(a) {
            this.k.Gk = "number" == typeof a && !isNaN(a) ? 1 > a ? ab.fq : a > ab.Cn ? ab.fq : a : ab.fq
        },
        of: function() {
            return this.k.Gk
        },
        toString: da("LocalSearch")
    });
    var ud = ab.prototype;
    T(ud, {
        clearResults: ud.Pe,
        setPageCapacity: ud.Pp,
        getPageCapacity: ud.of,
        gotoPage: ud.Em,
        searchNearby: ud.Lp,
        searchInBounds: ud.bn,
        search: ud.search,
        enableFirstResultSelection: ud.hD,
        disableFirstResultSelection: ud.LC
    });

    function vd(a, b) {
        W.call(this, a, b)
    }
    x.ua(vd, W, "BaseRoute");
    x.extend(vd.prototype, {
        Pe: s()
    });

    function wd(a, b) {
        W.call(this, a, b);
        b = b || {};
        this.Wt(b.policy);
        this.Pp(b.pageCapacity);
        this.ud = jd;
        this.Fu = od;
        this.Gu = bd;
        this.wa = [];
        this.kb = -1;
        this.k.ed = b.enableTraffic || q;
        this.Pa = [];
        var c = this;
        I.load("route", function() {
            c.Qd()
        })
    }
    wd.Cn = 100;
    wd.oP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    x.ua(wd, vd, "TransitRoute");
    x.extend(wd.prototype, {
        Wt: function(a) {
            this.k.$c = 0 <= a && 4 >= a ? a : 0
        },
        DA: function(a, b) {
            this.Pa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Pa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Pp: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                this.k.Gk = wd.Cn;
                return
            }
            this.k.Gk = "number" !== typeof a ? wd.Cn : 1 <= a && a <= wd.Cn ? Math.round(a) : wd.Cn
        },
        toString: da("TransitRoute"),
        lU: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var xd = wd.prototype;
    T(xd, {
        _internalSearch: xd.DA
    });

    function yd(a, b) {
        W.call(this, a, b);
        this.wa = [];
        this.kb = -1;
        this.Pa = [];
        var c = this,
            d = this.k.ka;
        1 !== d.ft && 2 !== d.ft && (d.ft = 1);
        this.Xz = this.k.ka.Hb ? o : q;
        I.load("route", function() {
            c.Qd()
        });
        this.kE && this.kE()
    }
    yd.CP = " 环岛 无属性道路 主路 高速连接路 交叉点内路段 连接道路 停车场内部道路 服务区内部道路 桥 步行街 辅路 匝道 全封闭道路 未定义交通区域 POI连接路 隧道 步行道 公交专用道 提前右转道".split(" ");
    x.ua(yd, vd, "DWRoute");
    x.extend(yd.prototype, {
        search: function(a, b, c) {
            this.Pa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });

    function zd(a, b) {
        yd.call(this, a, b);
        b = b || {};
        this.k.ed = b.enableTraffic || q;
        this.Wt(b.policy);
        this.ud = kd;
        this.Fu = rd;
        this.Gu = ed
    }
    x.ua(zd, yd, "DrivingRoute");
    zd.prototype.Wt = function(a) {
        this.k.$c = 0 <= a && 2 >= a ? a : 0
    };

    function Ad(a, b) {
        yd.call(this, a, b);
        this.ud = ld;
        this.Fu = sd;
        this.Gu = dd;
        this.Xz = q
    }
    x.ua(Ad, yd, "WalkingRoute");

    function Bd(a, b) {
        x.lang.Ca.call(this);
        this.Sf = [];
        this.Vm = [];
        this.k = b;
        this.fc = a;
        this.map = this.k.ka.map || p;
        this.wy = this.k.wy;
        this.Cb = p;
        this.fj = 0;
        this.Ky = "";
        this.ce = 1;
        this.dx = "";
        this.Gp = [0, 0, 0, 0, 0, 0, 0];
        this.CE = [];
        this.js = [1, 1, 1, 1, 1, 1, 1];
        this.zO = [1, 1, 1, 1, 1, 1, 1];
        this.Mt = [0, 0, 0, 0, 0, 0, 0];
        this.Hp = [0, 0, 0, 0, 0, 0, 0];
        this.Na = [{
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }, {
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }, {
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }, {
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }, {
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }, {
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }, {
            o: "",
            Cd: 0,
            tn: 0,
            x: 0,
            y: 0,
            pa: -1
        }];
        this.fi = -1;
        this.lu = [];
        this.mu = [];
        I.load("route", s())
    }
    x.lang.ua(Bd, x.lang.Ca, "RouteAddr");
    var Cd = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(Cd);
    var Dd = /android/i.test(Cd);

    function Ed(a) {
        this.qh = a || {}
    }
    x.extend(Ed.prototype, {
        NN: function(a, b, c) {
            var d = this;
            I.load("route", function() {
                d.Qd(a, b, c)
            })
        }
    });

    function Fd(a) {
        this.k = {};
        x.extend(this.k, a);
        this.Pa = [];
        var b = this;
        I.load("othersearch", function() {
            b.Qd()
        })
    }
    x.ua(Fd, x.lang.Ca, "Geocoder");
    x.extend(Fd.prototype, {
        ym: function(a, b, c) {
            this.Pa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        um: function(a, b, c) {
            this.Pa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var Gd = Fd.prototype;
    T(Gd, {
        getPoint: Gd.ym,
        getLocation: Gd.um
    });

    function Geolocation(a) {
        a = a || {};
        this.D = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            bl: q
        };
        this.oe = [];
        var b = this;
        I.load("othersearch", function() {
            for (var a = 0, d; d = b.oe[a]; a++) b[d.method].apply(b, d.arguments)
        })
    }
    x.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.oe.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: da(2),
        enableSDKLocation: function() {
            G() && (this.D.bl = o)
        },
        disableSDKLocation: function() {
            this.D.bl = q
        }
    });

    function Hd(a) {
        a = a || {};
        a.ka = a.renderOptions || {};
        this.k = {
            ka: {
                map: a.ka.map || p
            }
        };
        this.Pa = [];
        var b = this;
        I.load("othersearch", function() {
            b.Qd()
        })
    }
    x.ua(Hd, x.lang.Ca, "LocalCity");
    x.extend(Hd.prototype, {
        get: function(a) {
            this.Pa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });

    function Id() {
        this.Pa = [];
        var a = this;
        I.load("othersearch", function() {
            a.Qd()
        })
    }
    x.ua(Id, x.lang.Ca, "Boundary");
    x.extend(Id.prototype, {
        get: function(a, b) {
            this.Pa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });

    function Jd(a, b) {
        W.call(this, a, b);
        this.zP = md;
        this.BP = pd;
        this.yP = nd;
        this.AP = qd;
        this.Pa = [];
        var c = this;
        I.load("buslinesearch", function() {
            c.Qd()
        })
    }
    Jd.pv = F.qa + "iw_plus.gif";
    Jd.ES = F.qa + "iw_minus.gif";
    Jd.vU = F.qa + "stop_icon.png";
    x.ua(Jd, W);
    x.extend(Jd.prototype, {
        getBusList: function(a) {
            this.Pa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Pa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.k.gN = a || s()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.k.fN = a || s()
        },
        setBusListHtmlSetCallback: function(a) {
            this.k.dN = a || s()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.k.cN = a || s()
        },
        setPolylinesSetCallback: function(a) {
            this.k.NE = a || s()
        }
    });

    function Kd(a) {
        W.call(this, a);
        a = a || {};
        this.pc = {
            input: a.input || p,
            XB: a.baseDom || p,
            types: a.types || [],
            fy: a.onSearchComplete || s()
        };
        this.yd.src = a.location || "全国";
        this.$i = "";
        this.lg = p;
        this.YH = "";
        this.Pi();
        Qa(Ga);
        var b = this;
        I.load("autocomplete", function() {
            b.Qd()
        })
    }
    x.ua(Kd, W, "Autocomplete");
    x.extend(Kd.prototype, {
        Pi: s(),
        show: s(),
        U: s(),
        xF: function(a) {
            this.pc.types = a
        },
        gn: function(a) {
            this.yd.src = a
        },
        search: ca("$i"),
        zy: ca("YH")
    });
    var Ta;

    function Na(a, b) {
        function c() {
            e.k.visible ? ("inter" === e.Je && e.k.haveBreakId && e.k.indoorExitControl === o ? x.K.show(e.wA) : x.K.U(e.wA), this.k.closeControl && this.yf && this.C && this.C.La() === this.B ? x.K.show(e.yf) : x.K.U(e.yf), this.k.forceCloseControl && x.K.show(e.yf)) : (x.K.U(e.yf), x.K.U(e.wA))
        }
        this.B = "string" == typeof a ? x.$(a) : a;
        this.ba = Ld++;
        this.k = {
            enableScrollWheelZoom: o,
            panoramaRenderer: "flash",
            swfSrc: z.rg("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: o,
            indoorExitControl: o,
            indoorFloorControl: q,
            linksControl: o,
            clickOnRoad: o,
            navigationControl: o,
            closeControl: o,
            indoorSceneSwitchControl: o,
            albumsControl: q,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: q,
            haveBreakId: q
        };
        var b = b || {},
            d;
        for (d in b) this.k[d] = b[d];
        b.closeControl === o && (this.k.forceCloseControl = o);
        b.useWebGL === q && Ma(q);
        this.Da = {
            heading: 0,
            pitch: 0
        };
        this.$n = [];
        this.Mb = this.Ya = p;
        this.ck = this.cr();
        this.wa = [];
        this.Jc = 1;
        this.Je = this.bT = this.gl = "";
        this.Ie = {};
        this.Lf = p;
        this.Og = [];
        this.yr = [];
        "cvsRender" == this.ck || Ma() ? (this.Vj = 90, this.Xj = -90) : "cssRender" == this.ck && (this.Vj = 45, this.Xj = -45);
        this.Cr = q;
        var e = this;
        this.ao = function() {
            this.ck === "flashRender" ? I.load("panoramaflash", function() {
                e.Pi()
            }, o) : I.load("panorama", function() {
                e.yb()
            }, o);
            b.Of == "api" ? Qa(Ca) : Qa(Da);
            this.ao = s()
        };
        this.k.PS !== o && (this.ao(), z.Dn("cus.fire", "count", "z_loadpanoramacount"));
        this.FT(this.B);
        this.addEventListener("id_changed", function() {
            Qa(Ba, {
                from: b.Of
            })
        });
        this.TP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Md = 4,
        Nd = 1,
        Ld = 0;
    x.lang.ua(Na, x.lang.Ca, "Panorama");
    x.extend(Na.prototype, {
        TP: function() {
            var a = this,
                b = this.yf = K("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "退出全景";
            b.onclick = function() {
                a.U()
            };
            this.B.appendChild(b);
            var c = this.wA = K("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">出口</span>';
            c.title = "退出室内景";
            c.onclick = function() {
                a.So()
            };
            this.B.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
        },
        So: s(),
        FT: function(a) {
            var b, c;
            b = a.style;
            c = Va(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Va(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        lX: u("$n"),
        Zb: u("Ya"),
        NX: u("Yv"),
        bO: u("Yv"),
        ha: u("Mb"),
        Ea: u("Da"),
        fa: u("Jc"),
        eh: u("gl"),
        P2: function() {
            return this.g1 || []
        },
        K2: u("bT"),
        $s: u("Je"),
        By: function(a) {
            a !== this.Je && (this.Je = a, this.dispatchEvent(new M("onscene_type_changed")))
        },
        rc: function(a, b, c) {
            "object" === typeof b && (c = b, b = j);
            a != this.Ya && (this.rl = this.Ya, this.sl = this.Mb, this.Ya = a, this.Je = b || "street", this.Mb = p, c && c.pov && this.Mc(c.pov))
        },
        ta: function(a) {
            a.nb(this.Mb) || (this.rl = this.Ya, this.sl = this.Mb, this.Mb = a, this.Ya = p)
        },
        Mc: function(a) {
            a && (this.Da = a, a = this.Da.pitch, a > this.Vj ? a = this.Vj : a < this.Xj && (a = this.Xj), this.Cr = o, this.Da.pitch = a)
        },
        e_: function(a, b) {
            this.Xj = 0 <= a ? 0 : a;
            this.Vj = 0 >= b ? 0 : b
        },
        Nc: function(a) {
            a != this.Jc && (a > Md && (a = Md), a < Nd && (a = Nd), a != this.Jc && (this.Jc = a), "cssRender" === this.ck && this.Mc(this.Da))
        },
        wB: function() {
            if (this.C)
                for (var a = this.C.wx(), b = 0; b < a.length; b++)(a[b] instanceof U || a[b] instanceof tc) && a[b].point && this.wa.push(a[b])
        },
        tF: ca("C"),
        Vt: function(a) {
            this.Lf = a || "none"
        },
        Mk: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b]) this.k[b][c] = a[b][c];
                else this.k[b] = a[b];
                a.closeControl === o && (this.k.forceCloseControl = o);
                a.closeControl === q && (this.k.forceCloseControl = q);
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new M("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new M("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new M("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new M("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new M("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new M("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new M("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new M("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new M("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new M("onindoorfloor_options_changed"))
                }
            }
        },
        Ak: function() {
            this.Al.style.visibility = "hidden"
        },
        Fy: function() {
            this.Al.style.visibility = "visible"
        },
        zW: function() {
            this.k.enableScrollWheelZoom = o
        },
        kW: function() {
            this.k.enableScrollWheelZoom = q
        },
        show: function() {
            this.k.visible = o
        },
        U: function() {
            this.k.visible = q
        },
        cr: function() {
            return Ua() && !G() && "javascript" !== this.k.panoramaRenderer ? "flashRender" : !G() && Kb() ? "cvsRender" : "cssRender"
        },
        Ka: function(a) {
            this.Ie[a.hd] = a
        },
        Ub: function(a) {
            delete this.Ie[a]
        },
        $D: function() {
            return this.k.visible
        },
        dh: function() {
            return new L(this.B.clientWidth, this.B.clientHeight)
        },
        La: u("B"),
        jL: function() {
            var a = z.rg("baidumap", "?"),
                b = this.Zb();
            if (b) {
                var b = {
                        panotype: this.$s(),
                        heading: this.Ea().heading,
                        pitch: this.Ea().pitch,
                        pid: b,
                        panoid: b,
                        from: "api"
                    },
                    c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Fx: function() {
            this.Mk({
                copyrightControlOptions: {
                    logoVisible: q
                }
            })
        },
        AF: function() {
            this.Mk({
                copyrightControlOptions: {
                    logoVisible: o
                }
            })
        },
        RB: function(a) {
            function b(a, b) {
                return function() {
                    a.yr.push({
                        QM: b,
                        PM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++) d = c[e], this[d] = b(this, d);
            this.Og.push(a)
        },
        cF: function(a) {
            for (var b = this.Og.length; b--;) this.Og[b] === a && this.Og.splice(b, 1)
        },
        sF: s()
    });
    var Od = Na.prototype;
    T(Od, {
        setId: Od.rc,
        setPosition: Od.ta,
        setPov: Od.Mc,
        setZoom: Od.Nc,
        setOptions: Od.Mk,
        getId: Od.Zb,
        getPosition: Od.ha,
        getPov: Od.Ea,
        getZoom: Od.fa,
        getLinks: Od.lX,
        getBaiduMapUrl: Od.jL,
        hideMapLogo: Od.Fx,
        showMapLogo: Od.AF,
        enableDoubleClickZoom: Od.e2,
        disableDoubleClickZoom: Od.S1,
        enableScrollWheelZoom: Od.zW,
        disableScrollWheelZoom: Od.kW,
        show: Od.show,
        hide: Od.U,
        addPlugin: Od.RB,
        removePlugin: Od.cF,
        getVisible: Od.$D,
        addOverlay: Od.Ka,
        removeOverlay: Od.Ub,
        getSceneType: Od.$s,
        setPanoramaPOIType: Od.Vt,
        exitInter: Od.So,
        setInteractiveState: Od.sF
    });
    T(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });

    function Pd() {
        x.lang.Ca.call(this);
        this.hd = "PanoramaOverlay_" + this.ba;
        this.P = p;
        this.Qa = o
    }
    x.lang.ua(Pd, x.lang.Ca, "PanoramaOverlayBase");
    x.extend(Pd.prototype, {
        L2: u("hd"),
        ra: function() {
            ba("initialize方法未实现")
        },
        remove: function() {
            ba("remove方法未实现")
        },
        Kf: function() {
            ba("_setOverlayProperty方法未实现")
        }
    });

    function Qd(a, b) {
        Pd.call(this);
        var c = {
                position: p,
                altitude: 2,
                displayDistance: o
            },
            b = b || {},
            d;
        for (d in b) c[d] = b[d];
        this.Mb = c.position;
        this.Lj = a;
        this.wq = c.altitude;
        this.eR = c.displayDistance;
        this.GF = c.color;
        this.TL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.WJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.$J = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.fE = c.imageUrl;
        this.size = c.size;
        this.we = c.image;
        this.width = c.width;
        this.height = c.height;
        this.bY = c.imageData;
        this.borderWidth = c.borderWidth
    }
    x.lang.ua(Qd, Pd, "PanoramaLabel");
    x.extend(Qd.prototype, {
        q2: u("borderWidth"),
        getImageData: u("bY"),
        Bm: u("GF"),
        E2: u("TL"),
        m2: u("backgroundColor"),
        n2: u("WJ"),
        o2: u("borderColor"),
        p2: u("$J"),
        B2: u("fontSize"),
        M2: u("padding"),
        F2: u("fE"),
        Bb: u("size"),
        mx: u("we"),
        ta: function(a) {
            this.Mb = a;
            this.Kf("position", a)
        },
        ha: u("Mb"),
        ad: function(a) {
            this.Lj = a;
            this.Kf("content", a)
        },
        uk: u("Lj"),
        nF: function(a) {
            this.wq = a;
            this.Kf("altitude", a)
        },
        Vo: u("wq"),
        Ea: function() {
            var a = this.ha(),
                b = p,
                c = p;
            this.P && (c = this.P.ha());
            if (a && c)
                if (a.nb(c)) b = this.P.Ea();
                else {
                    b = {};
                    b.heading = Rd(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b,
                        c = this.Vo(),
                        d = this.Vn();
                    a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
                }
            return b
        },
        Vn: function() {
            var a = 0,
                b, c;
            this.P && (b = this.P.ha(), (c = this.ha()) && !c.nb(b) && (a = S.Xo(b, c)));
            return a
        },
        U: function() {
            ba("hide方法未实现")
        },
        show: function() {
            ba("show方法未实现")
        },
        Kf: s()
    });
    var Sd = Qd.prototype;
    T(Sd, {
        setPosition: Sd.ta,
        getPosition: Sd.ha,
        setContent: Sd.ad,
        getContent: Sd.uk,
        setAltitude: Sd.nF,
        getAltitude: Sd.Vo,
        getPov: Sd.Ea,
        show: Sd.show,
        hide: Sd.U
    });

    function Td(a, b) {
        Pd.call(this);
        var c = {
                icon: "",
                title: "",
                panoInfo: p,
                altitude: 2
            },
            b = b || {},
            d;
        for (d in b) c[d] = b[d];
        this.Mb = a;
        this.TH = c.icon;
        this.pJ = c.title;
        this.wq = c.altitude;
        this.sT = c.panoInfo;
        this.Da = {
            heading: 0,
            pitch: 0
        }
    }
    x.lang.ua(Td, Pd, "PanoramaMarker");
    x.extend(Td.prototype, {
        ta: function(a) {
            this.Mb = a;
            this.Kf("position", a)
        },
        ha: u("Mb"),
        Cc: function(a) {
            this.pJ = a;
            this.Kf("title", a)
        },
        fp: u("pJ"),
        Vb: function(a) {
            this.TH = icon;
            this.Kf("icon", a)
        },
        Yo: u("TH"),
        nF: function(a) {
            this.wq = a;
            this.Kf("altitude", a)
        },
        Vo: u("wq"),
        RD: u("sT"),
        Ea: function() {
            var a = p;
            if (this.P) {
                var a = this.P.ha(),
                    b = this.ha(),
                    a = Rd(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.Da;
            return a
        },
        Kf: s()
    });
    var Ud = Td.prototype;
    T(Ud, {
        setPosition: Ud.ta,
        getPosition: Ud.ha,
        setTitle: Ud.Cc,
        getTitle: Ud.fp,
        setAltitude: Ud.nF,
        getAltitude: Ud.Vo,
        getPanoInfo: Ud.RD,
        getIcon: Ud.Yo,
        setIcon: Ud.Vb,
        getPov: Ud.Ea
    });

    function Rd(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
                d = 0;
            0 < a && 0 > b && (d = 90);
            0 > a && 0 > b && (d = 180);
            0 > a && 0 < b && (d = 270);
            c = (c + 90) + d
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Ma(a) {
        if ("boolean" === typeof Vd) return Vd;
        if (a === q || !window.WebGLRenderingContext) return Vd = q;
        if (x.platform.Jm) {
            a = 0;
            try {
                a = navigator.userAgent.split("Android ")[1].charAt(0)
            } catch (b) {}
            if (5 > a) return Vd = q
        }
        var a = document.createElement("canvas"),
            c = p;
        try {
            c = a.getContext("webgl")
        } catch (d) {
            Vd = q
        }
        return Vd = c === p ? q : o
    }
    var Vd;

    function Wd() {
        if ("boolean" === typeof Xd) return Xd;
        Xd = o;
        if (x.platform.oE) return o;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? o : Xd = q
    }
    var Xd;

    function bc(a, b) {
        this.P = a || p;
        var c = this;
        c.P && c.ca();
        I.load("pservice", function() {
            c.xQ()
        });
        "api" == (b || {}).Of ? Qa(Ea) : Qa(Fa);
        this.vd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    z.Um(function(a) {
        "flashRender" !== a.cr() && new bc(a, {
            Of: "api"
        })
    });
    x.extend(bc.prototype, {
        ca: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Yv) {
                        b.bO(a.id);
                        b.ea = a;
                        Wd() || b.dispatchEvent(new M("onthumbnail_complete"));
                        b.Ya != p && (b.sl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                                case "position":
                                    b.Mb = a[c];
                                    break;
                                case "id":
                                    b.Ya = a[c];
                                    break;
                                case "links":
                                    b.$n = a[c];
                                    break;
                                case "zoom":
                                    b.Jc = a[c]
                            }
                        if (b.sl) {
                            var f = b.sl,
                                g = b._position;
                            c = f.lat;
                            var i = g.lat,
                                k = Nb(i - c),
                                f = Nb(g.lng - f.lng);
                            c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Nb(c)) * Math.cos(Nb(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                            b.hH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new M("ondataload");
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new M("onposition_changed"));
                        b.dispatchEvent(new M("onlinks_changed"));
                        b.dispatchEvent(new M("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.cm && b.k.closeControl ? x.K.show(b.AR) : x.K.U(b.AR)
                    }
                } else b.Ya = b.rl, b.Mb = b.sl, b.dispatchEvent(new M("onnoresult"))
            }
            var b = this.P,
                c = this;
            b.addEventListener("id_changed", function() {
                c.bp(b.Zb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.Pg(bc.cl + "qt=idata&iid=" + b.sA + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            e = {};
                        e.cm = b.BreakID;
                        for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
                            if (b.Floors[i].Floor == f) {
                                g = b.Floors[i];
                                break
                            }
                        e.id = g.StartID || g.Points[0].PID;
                        c.bp(e.id, a, e)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.pj(b.ha(), a)
            })
        },
        bp: function(a, b) {
            this.vd.getPanoramaById.push(arguments)
        },
        pj: function(a, b, c) {
            this.vd.getPanoramaByLocation.push(arguments)
        },
        aE: function(a, b, c, d) {
            this.vd.getVisiblePOIs.push(arguments)
        },
        zx: function(a, b) {
            this.vd.getRecommendPanosById.push(arguments)
        },
        yx: function(a) {
            this.vd.getPanoramaVersions.push(arguments)
        },
        eC: function(a, b) {
            this.vd.checkPanoSupportByCityCode.push(arguments)
        },
        xx: function(a, b) {
            this.vd.getPanoramaByPOIId.push(arguments)
        },
        oL: function(a) {
            this.vd.getCopyrightProviders.push(arguments)
        }
    });
    var Yd = bc.prototype;
    T(Yd, {
        getPanoramaById: Yd.bp,
        getPanoramaByLocation: Yd.pj,
        getPanoramaByPOIId: Yd.xx
    });

    function ac(a) {
        Gc.call(this);
        "api" == (a || {}).Of ? Qa(ya) : Qa(za)
    }
    ac.zG = z.rg("pano", "tile/");
    ac.prototype = new Gc;
    ac.prototype.getTilesUrl = function(a, b) {
        var c = ac.zG[(a.x + a.y)¬.zG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        x.da.la && 6 >= x.da.la && (c += "&color_dep=32");
        return c
    };
    ac.prototype.vt = da(o);
    Zd.Ud = new S;

    function Zd() {}
    x.extend(Zd, {
        lW: function(a, b, c) {
            c = x.lang.Kc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Zd.Ud.zj(new R(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new M("on" + a), b)
        }
    });
    var $d = Zd;
    T($d, {
        dispatchFlashEvent: $d.lW
    });
    var ae = {
        qP: 50
    };
    ae.Hu = z.rg("pano")[0];
    ae.Du = {
        width: 220,
        height: 60
    };
    x.extend(ae, {
        np: function(a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance) d();
            else {
                this.ho === j && (this.ho = new bc(p, {
                    Of: "api"
                }));
                var e = this;
                this.ho.eC(b, function(b) {
                    b ? e.ho.pj(c.lngLat, ae.qP, function(b) {
                        if (b && b.id) {
                            var f = b.id,
                                k = b.rh,
                                b = b.th,
                                l = bc.Ud.kh(c.lngLat),
                                m = e.fS(l, {
                                    x: k,
                                    y: b
                                }),
                                k = e.yL(f, m, 0, ae.Du.width, ae.Du.height);
                            a.content = e.gS(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ia.M(x.Dc("infoWndPano"), "click", function() {
                                    c.panoInstance.rc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.Mc({
                                        heading: m,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        d()
                    }) : d()
                })
            }
        },
        gS: function(a, b, c, d) {
            var c = c || "",
                e;
            !d || !a.split(d)[0] ? (d = a, a = "") : (d = a.split(d)[0], e = d.lastIndexOf("<"), d = a.substring(0, e), a = a.substring(e));
            e = [];
            var f = ae.Du.width,
                g = ae.Du.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "外景' title='" + c + "外景' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >进入全景&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("")
        },
        fS: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        yL: function(a, b, c, d, e) {
            var f = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: d,
                height: e
            };
            return (ae.Hu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return f[b]
            })
        }
    });
    var be = document,
        ce = Math,
        de = be.createElement("div").style,
        ee;
    a: {
        for (var fe = ["t", "webkitT", "MozT", "msT", "OT"], ge, he = 0, ie = fe.length; he < ie; he++)
            if (ge = fe[he] + "ransform", ge in de) {
                ee = fe[he].substr(0, fe[he].length - 1);
                break a
            }
        ee = q
    }
    var je = ee ? "-" + ee.toLowerCase() + "-" : "",
        le = ke("transform"),
        ne = ke("transitionProperty"),
        oe = ke("transitionDuration"),
        pe = ke("transformOrigin"),
        ve = ke("transitionTimingFunction"),
        we = ke("transitionDelay"),
        Dd = /android/gi.test(navigator.appVersion),
        xe = /iphone|ipad/gi.test(navigator.appVersion),
        ye = /hp-tablet/gi.test(navigator.appVersion),
        ze = ke("perspective") in de,
        Ae = "ontouchstart" in window && !ye,
        Be = ee !== q,
        Ce = ke("transition") in de,
        De = "onorientationchange" in window ? "orientationchange" : "resize",
        Ee = Ae ? "touchstart" : "mousedown",
        Fe = Ae ? "touchmove" : "mousemove",
        Ge = Ae ? "touchend" : "mouseup",
        He = Ae ? "touchcancel" : "mouseup",
        Ie = ee === q ? q : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        }[ee],
        Je = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            return setTimeout(a, 1)
        },
        Ke = window.cancelRequestAnimationFrame || window.O4 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
        Le = ze ? " translateZ(0)" : "";

    function Me(a, b) {
        var c = this,
            d;
        c.xn = "object" == typeof a ? a : be.getElementById(a);
        c.xn.style.overflow = "hidden";
        c.Pb = c.xn.children[0];
        c.options = {
            jp: o,
            vn: o,
            x: 0,
            y: 0,
            Do: o,
            lV: q,
            Yx: o,
            DE: o,
            Vk: o,
            Ai: q,
            I_: 0,
            Fw: q,
            Cx: o,
            mi: o,
            Bi: o,
            rD: Dd,
            Gx: xe,
            GW: xe && ze,
            kF: "",
            zoom: q,
            Xk: 1,
            aq: 4,
            nW: 2,
            WO: "scroll",
            du: q,
            Iy: 1,
            jN: p,
            bN: function(a) {
                a.preventDefault()
            },
            mN: p,
            aN: p,
            lN: p,
            $M: p,
            ey: p,
            nN: p,
            eN: p,
            Ap: p,
            oN: p,
            zp: p
        };
        for (d in b) c.options[d] = b[d];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Vk = Be && c.options.Vk;
        c.options.mi = c.options.jp && c.options.mi;
        c.options.Bi = c.options.vn && c.options.Bi;
        c.options.zoom = c.options.Vk && c.options.zoom;
        c.options.Ai = Ce && c.options.Ai;
        c.options.zoom && Dd && (Le = "");
        c.Pb.style[ne] = c.options.Vk ? je + "transform" : "top left";
        c.Pb.style[oe] = "0";
        c.Pb.style[pe] = "0 0";
        c.options.Ai && (c.Pb.style[ve] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Vk ? c.Pb.style[le] = "translate(" + c.x + "px," + c.y + "px)" + Le : c.Pb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Ai && (c.options.rD = o);
        c.refresh();
        c.ca(De, window);
        c.ca(Ee);
        !Ae && "none" != c.options.WO && (c.ca("DOMMouseScroll"), c.ca("mousewheel"));
        c.options.Fw && (c.wV = setInterval(function() {
            c.uQ()
        }, 500));
        this.options.Cx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var d = Node.prototype.removeEventListener;
            a === "click" ? d.call(document.body, a, b.RL || b, c) : d.call(document.body, a, b, c)
        }, document.body.addEventListener = function(a, b, c) {
            var d = Node.prototype.addEventListener;
            a === "click" ? d.call(document.body, a, b.RL || (b.RL = function(a) {
                a.mZ || b(a)
            }), c) : d.call(document.body, a, b, c)
        }), c.ca("click", document.body, o))
    }
    Me.prototype = {
        enabled: o,
        x: 0,
        y: 0,
        Aj: [],
        scale: 1,
        yC: 0,
        zC: 0,
        Ue: [],
        sf: [],
        WB: p,
        Sy: 0,
        handleEvent: function(a) {
            switch (a.type) {
                case Ee:
                    if (!Ae && 0 !== a.button) break;
                    this.Rv(a);
                    break;
                case Fe:
                    this.dT(a);
                    break;
                case Ge:
                case He:
                    this.cv(a);
                    break;
                case De:
                    this.pB();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.HU(a);
                    break;
                case Ie:
                    this.DU(a);
                    break;
                case "click":
                    this.FQ(a)
            }
        },
        uQ: function() {
            !this.oh && (!this.Yk && !(this.Yl || this.yy == this.Pb.offsetWidth * this.scale && this.Kp == this.Pb.offsetHeight * this.scale)) && this.refresh()
        },
        Iv: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = be.createElement("div"), this.options.kF ? b.className = this.options.kF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Bi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.mi ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + je + "transition-property:opacity;" + je + "transition-duration:" + (this.options.GW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Gx ? "0" : "1"), this.xn.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = be.createElement("div"), this.options.kF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + je + "background-clip:padding-box;" + je + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + je + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + je + "transition-property:" + je + "transform;" + je + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + je + "transition-duration:0;" + je + "transform: translate(0,0)" + Le, this.options.Ai && (b.style.cssText += ";" + je + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.OL = this.PL.clientWidth, this.VX = ce.max(ce.round(this.OL * this.OL / this.yy), 8), this.UX.style.width = this.VX + "px") : (this.NO = this.OO.clientHeight, this.c0 = ce.max(ce.round(this.NO * this.NO / this.Kp), 8), this.b0.style.height = this.c0 + "px"), this.qB(a, o)) : this[a + "ScrollbarWrapper"] && (Be && (this[a + "ScrollbarIndicator"].style[le] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = p, this[a + "ScrollbarIndicator"] = p)
        },
        pB: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, Dd ? 200 : 0)
        },
        Br: function(a, b) {
            this.Yk || (a = this.jp ? a : 0, b = this.vn ? b : 0, this.options.Vk ? this.Pb.style[le] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Le : (a = ce.round(a), b = ce.round(b), this.Pb.style.left = a + "px", this.Pb.style.top = b + "px"), this.x = a, this.y = b, this.qB("h"), this.qB("v"))
        },
        qB: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.rD || (c = this[a + "ScrollbarIndicatorSize"] + ce.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.rD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - ce.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[we] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Gx ? "0" : "1", this[a + "ScrollbarIndicator"].style[le] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Le)
        },
        FQ: function(a) {
            if (a.BR === o) return this.OB = a.target, this.fx = Date.now(), o;
            if (this.OB && this.fx) {
                if (600 < Date.now() - this.fx) return this.fx = this.OB = p, o
            } else {
                for (var b = a.target; b != this.Pb && b != document.body;) b = b.parentNode;
                if (b == document.body) return o
            }
            for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.mZ = o, a.stopPropagation(), a.preventDefault(), this.fx = this.OB = p, q
        },
        Rv: function(a) {
            var b = Ae ? a.touches[0] : a,
                c, d;
            if (this.enabled) {
                this.options.bN && this.options.bN.call(this, a);
                (this.options.Ai || this.options.zoom) && this.qJ(0);
                this.Yk = this.Yl = this.oh = q;
                this.IC = this.HC = this.kw = this.jw = this.OC = this.NC = 0;
                this.options.zoom && (Ae && 1 < a.touches.length) && (d = ce.abs(a.touches[0].pageX - a.touches[1].pageX), c = ce.abs(a.touches[0].pageY - a.touches[1].pageY), this.K_ = ce.sqrt(d * d + c * c), this.gy = ce.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.VF) / 2 - this.x, this.hy = ce.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.WF) / 2 - this.y, this.options.Ap && this.options.Ap.call(this, a));
                if (this.options.Yx && (this.options.Vk ? (c = getComputedStyle(this.Pb, p)[le].replace(/[^0-9\-.,]/g, "").split(","), d = +(c[12] || c[4]), c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Pb, p).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Pb, p).top.replace(/[^0-9-]/g, "")), d != this.x || c != this.y)) this.options.Ai ? this.Yd(Ie) : Ke(this.WB), this.Aj = [], this.Br(d, c), this.options.ey && this.options.ey.call(this);
                this.lw = this.x;
                this.mw = this.y;
                this.gu = this.x;
                this.hu = this.y;
                this.rh = b.pageX;
                this.th = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.mN && this.options.mN.call(this, a);
                this.ca(Fe, window);
                this.ca(Ge, window);
                this.ca(He, window)
            }
        },
        dT: function(a) {
            var b = Ae ? a.touches[0] : a,
                c = b.pageX - this.rh,
                d = b.pageY - this.th,
                e = this.x + c,
                f = this.y + d,
                g = a.timeStamp || Date.now();
            this.options.aN && this.options.aN.call(this, a);
            if (this.options.zoom && Ae && 1 < a.touches.length) e = ce.abs(a.touches[0].pageX - a.touches[1].pageX), f = ce.abs(a.touches[0].pageY - a.touches[1].pageY), this.J_ = ce.sqrt(e * e + f * f), this.Yk = o, b = 1 / this.K_ * this.J_ * this.scale, b < this.options.Xk ? b = 0.5 * this.options.Xk * Math.pow(2, b / this.options.Xk) : b > this.options.aq && (b = 2 * this.options.aq * Math.pow(0.5, this.options.aq / b)), this.up = b / this.scale, e = this.gy - this.gy * this.up + this.x, f = this.hy - this.hy * this.up + this.y, this.Pb.style[le] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + Le, this.options.oN && this.options.oN.call(this, a);
            else {
                this.rh = b.pageX;
                this.th = b.pageY;
                if (0 < e || e < this.he) e = this.options.Do ? this.x + c / 2 : 0 <= e || 0 <= this.he ? 0 : this.he;
                if (f > this.qf || f < this.nd) f = this.options.Do ? this.y + d / 2 : f >= this.qf || 0 <= this.nd ? this.qf : this.nd;
                this.NC += c;
                this.OC += d;
                this.jw = ce.abs(this.NC);
                this.kw = ce.abs(this.OC);
                6 > this.jw && 6 > this.kw || (this.options.DE && (this.jw > this.kw + 5 ? (f = this.y, d = 0) : this.kw > this.jw + 5 && (e = this.x, c = 0)), this.oh = o, this.Br(e, f), this.HC = 0 < c ? -1 : 0 > c ? 1 : 0, this.IC = 0 < d ? -1 : 0 > d ? 1 : 0, 300 < g - this.startTime && (this.startTime = g, this.gu = this.x, this.hu = this.y), this.options.lN && this.options.lN.call(this, a))
            }
        },
        cv: function(a) {
            if (!(Ae && 0 !== a.touches.length)) {
                var b = this,
                    c = Ae ? a.changedTouches[0] : a,
                    d, e, f = {
                        Ba: 0,
                        time: 0
                    },
                    g = {
                        Ba: 0,
                        time: 0
                    },
                    i = (a.timeStamp || Date.now()) - b.startTime;
                d = b.x;
                e = b.y;
                b.Yd(Fe, window);
                b.Yd(Ge, window);
                b.Yd(He, window);
                b.options.$M && b.options.$M.call(b, a);
                if (b.Yk) d = b.scale * b.up, d = Math.max(b.options.Xk, d), d = Math.min(b.options.aq, d), b.up = d / b.scale, b.scale = d, b.x = b.gy - b.gy * b.up + b.x, b.y = b.hy - b.hy * b.up + b.y, b.Pb.style[oe] = "200ms", b.Pb.style[le] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Le, b.Yk = q, b.refresh(), b.options.zp && b.options.zp.call(b, a);
                else {
                    if (b.oh) {
                        if (300 > i && b.options.Yx) {
                            f = d ? b.nI(d - b.gu, i, -b.x, b.yy - b.vu + b.x, b.options.Do ? b.vu : 0) : f;
                            g = e ? b.nI(e - b.hu, i, -b.y, 0 > b.nd ? b.Kp - b.yn + b.y - b.qf : 0, b.options.Do ? b.yn : 0) : g;
                            d = b.x + f.Ba;
                            e = b.y + g.Ba;
                            if (0 < b.x && 0 < d || b.x < b.he && d < b.he) f = {
                                Ba: 0,
                                time: 0
                            };
                            if (b.y > b.qf && e > b.qf || b.y < b.nd && e < b.nd) g = {
                                Ba: 0,
                                time: 0
                            }
                        }
                        f.Ba || g.Ba ? (c = ce.max(ce.max(f.time, g.time), 10), b.options.du && (f = d - b.lw, g = e - b.mw, ce.abs(f) < b.options.Iy && ce.abs(g) < b.options.Iy ? b.scrollTo(b.lw, b.mw, 200) : (f = b.hJ(d, e), d = f.x, e = f.y, c = ce.max(f.time, c))), b.scrollTo(ce.round(d), ce.round(e), c)) : b.options.du ? (f = d - b.lw, g = e - b.mw, ce.abs(f) < b.options.Iy && ce.abs(g) < b.options.Iy ? b.scrollTo(b.lw, b.mw, 200) : (f = b.hJ(b.x, b.y), (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.jo(200)
                    } else {
                        if (Ae)
                            if (b.GK && b.options.zoom) clearTimeout(b.GK), b.GK = p, b.options.Ap && b.options.Ap.call(b, a), b.zoom(b.rh, b.th, 1 == b.scale ? b.options.nW : 1), b.options.zp && setTimeout(function() {
                                b.options.zp.call(b, a)
                            }, 200);
                            else if (this.options.Cx) {
                                for (d = c.target; 1 != d.nodeType;) d = d.parentNode;
                                e = d.tagName.toLowerCase();
                                "select" != e && "input" != e && "textarea" != e ? (e = be.createEvent("MouseEvents"), e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p), e.BR = o, d.dispatchEvent(e)) : d.focus()
                            }
                        b.jo(400)
                    }
                    b.options.nN && b.options.nN.call(b, a)
                }
            }
        },
        jo: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.he ? this.he : this.x,
                c = this.y >= this.qf || 0 < this.nd ? this.qf : this.y < this.nd ? this.nd : this.y;
            if (b == this.x && c == this.y) {
                if (this.oh && (this.oh = q, this.options.ey && this.options.ey.call(this)), this.mi && this.options.Gx && ("webkit" == ee && (this.PL.style[we] = "300ms"), this.PL.style.opacity = "0"), this.Bi && this.options.Gx) "webkit" == ee && (this.OO.style[we] = "300ms"), this.OO.style.opacity = "0"
            } else this.scrollTo(b, c, a || 0)
        },
        HU: function(a) {
            var b = this,
                c, d;
            if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) c = d = a.wheelDelta / 12;
            else if ("detail" in a) c = d = 3 * -a.detail;
            else return;
            if ("zoom" == b.options.WO) {
                if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), d < b.options.Xk && (d = b.options.Xk), d > b.options.aq && (d = b.options.aq), d != b.scale) !b.Sy && b.options.Ap && b.options.Ap.call(b, a), b.Sy++, b.zoom(a.pageX, a.pageY, d, 400), setTimeout(function() {
                    b.Sy--;
                    !b.Sy && b.options.zp && b.options.zp.call(b, a)
                }, 400)
            } else c = b.x + c, d = b.y + d, 0 < c ? c = 0 : c < b.he && (c = b.he), d > b.qf ? d = b.qf : d < b.nd && (d = b.nd), 0 > b.nd && b.scrollTo(c, d, 0)
        },
        DU: function(a) {
            a.target == this.Pb && (this.Yd(Ie), this.CB())
        },
        CB: function() {
            var a = this,
                b = a.x,
                c = a.y,
                d = Date.now(),
                e, f, g;
            a.Yl || (a.Aj.length ? (e = a.Aj.shift(), e.x == b && e.y == c && (e.time = 0), a.Yl = o, a.oh = o, a.options.Ai) ? (a.qJ(e.time), a.Br(e.x, e.y), a.Yl = q, e.time ? a.ca(Ie) : a.jo(0)) : (g = function() {
                var i = Date.now(),
                    k;
                if (i >= d + e.time) {
                    a.Br(e.x, e.y);
                    a.Yl = q;
                    a.options.VY && a.options.VY.call(a);
                    a.CB()
                } else {
                    i = (i - d) / e.time - 1;
                    f = ce.sqrt(1 - i * i);
                    i = (e.x - b) * f + b;
                    k = (e.y - c) * f + c;
                    a.Br(i, k);
                    if (a.Yl) a.WB = Je(g)
                }
            }, g()) : a.jo(400))
        },
        qJ: function(a) {
            a += "ms";
            this.Pb.style[oe] = a;
            this.mi && (this.UX.style[oe] = a);
            this.Bi && (this.b0.style[oe] = a)
        },
        nI: function(a, b, c, d, e) {
            var b = ce.abs(a) / b,
                f = b * b / 0.0012;
            0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))), b = b * c / f, f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))), b = b * d / f, f = d);
            return {
                Ba: f * (0 > a ? -1 : 1),
                time: ce.round(b / 6.0E-4)
            }
        },
        Zj: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
            a != this.xn && (b *= this.scale, c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        hJ: function(a, b) {
            var c, d, e;
            e = this.Ue.length - 1;
            c = 0;
            for (d = this.Ue.length; c < d; c++)
                if (a >= this.Ue[c]) {
                    e = c;
                    break
                }
            e == this.yC && (0 < e && 0 > this.HC) && e--;
            a = this.Ue[e];
            d = (d = ce.abs(a - this.Ue[this.yC])) ? 500 * (ce.abs(this.x - a) / d) : 0;
            this.yC = e;
            e = this.sf.length - 1;
            for (c = 0; c < e; c++)
                if (b >= this.sf[c]) {
                    e = c;
                    break
                }
            e == this.zC && (0 < e && 0 > this.IC) && e--;
            b = this.sf[e];
            c = (c = ce.abs(b - this.sf[this.zC])) ? 500 * (ce.abs(this.y - b) / c) : 0;
            this.zC = e;
            e = ce.round(ce.max(d, c)) || 200;
            return {
                x: a,
                y: b,
                time: e
            }
        },
        ca: function(a, b, c) {
            (b || this.Pb).addEventListener(a, this, !!c)
        },
        Yd: function(a, b, c) {
            (b || this.Pb).removeEventListener(a, this, !!c)
        },
        EC: ga(2),
        refresh: function() {
            var a, b, c, d = 0;
            b = 0;
            this.scale < this.options.Xk && (this.scale = this.options.Xk);
            this.vu = this.xn.clientWidth || 1;
            this.yn = this.xn.clientHeight || 1;
            this.qf = -this.options.I_ || 0;
            this.yy = ce.round(this.Pb.offsetWidth * this.scale);
            this.Kp = ce.round((this.Pb.offsetHeight + this.qf) * this.scale);
            this.he = this.vu - this.yy;
            this.nd = this.yn - this.Kp + this.qf;
            this.IC = this.HC = 0;
            this.options.jN && this.options.jN.call(this);
            this.jp = this.options.jp && 0 > this.he;
            this.vn = this.options.vn && (!this.options.lV && !this.jp || this.Kp > this.yn);
            this.mi = this.jp && this.options.mi;
            this.Bi = this.vn && this.options.Bi && this.Kp > this.yn;
            a = this.Zj(this.xn);
            this.VF = -a.left;
            this.WF = -a.top;
            if ("string" == typeof this.options.du) {
                this.Ue = [];
                this.sf = [];
                c = this.Pb.querySelectorAll(this.options.du);
                a = 0;
                for (b = c.length; a < b; a++) d = this.Zj(c[a]), d.left += this.VF, d.top += this.WF, this.Ue[a] = d.left < this.he ? this.he : d.left * this.scale, this.sf[a] = d.top < this.nd ? this.nd : d.top * this.scale
            } else if (this.options.du) {
                for (this.Ue = []; d >= this.he;) this.Ue[b] = d, d -= this.vu, b++;
                this.he % this.vu && (this.Ue[this.Ue.length] = this.he - this.Ue[this.Ue.length - 1] + this.Ue[this.Ue.length - 1]);
                b = d = 0;
                for (this.sf = []; d >= this.nd;) this.sf[b] = d, d -= this.yn, b++;
                this.nd % this.yn && (this.sf[this.sf.length] = this.nd - this.sf[this.sf.length - 1] + this.sf[this.sf.length - 1])
            }
            this.Iv("h");
            this.Iv("v");
            this.Yk || (this.Pb.style[oe] = "0", this.jo(400))
        },
        scrollTo: function(a, b, c, d) {
            var e = a;
            this.stop();
            e.length || (e = [{
                x: a,
                y: b,
                time: c,
                oZ: d
            }]);
            a = 0;
            for (b = e.length; a < b; a++) e[a].oZ && (e[a].x = this.x - e[a].x, e[a].y = this.y - e[a].y), this.Aj.push({
                x: e[a].x,
                y: e[a].y,
                time: e[a].time || 0
            });
            this.CB()
        },
        disable: function() {
            this.stop();
            this.jo(0);
            this.enabled = q;
            this.Yd(Fe, window);
            this.Yd(Ge, window);
            this.Yd(He, window)
        },
        enable: function() {
            this.enabled = o
        },
        stop: function() {
            this.options.Ai ? this.Yd(Ie) : Ke(this.WB);
            this.Aj = [];
            this.Yl = this.oh = q
        },
        zoom: function(a, b, c, d) {
            var e = c / this.scale;
            this.options.Vk && (this.Yk = o, d = d === j ? 200 : d, a = a - this.VF - this.x, b = b - this.WF - this.y, this.x = a - a * e + this.x, this.y = b - b * e + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.he ? this.he : this.x, this.y = this.y > this.qf ? this.qf : this.y < this.nd ? this.nd : this.y, this.Pb.style[oe] = d + "ms", this.Pb.style[le] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Le, this.Yk = q)
        }
    };

    function ke(a) {
        if ("" === ee) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return ee + a
    }
    de = p;

    function Ne(a) {
        this.k = {
            anchor: Vb,
            offset: new L(0, 0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {},
            b;
        for (b in a) this.k[b] = a[b];
        this.Kl = new bc(p, {
            Of: "api"
        });
        this.$j = [];
        this.P = p;
        this.dg = {
            height: this.k.imageHeight,
            width: this.k.imageHeight * Oe
        };
        this.Oc = this.rB = this.cm = this.Xc = p
    }
    var Pe = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        Qe = "其他 正门 房型 设施 正门 餐饮设施 其他设施 正门 设施 观影厅 其他设施".split(" ");
    z.Um(function(a) {
        var b = p;
        a.addEventListener("position_changed", function() {
            a.k.visible && a.k.albumsControl === o && (b ? b.qy(a.Zb()) : (b = new Ne(a.k.albumsControlOptions), b.ra(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.k.albumsControl === o ? (b ? b.qy(a.Zb()) : (b = new Ne(a.k.albumsControlOptions), b.ra(a)), b.show()) : b.U()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.Mk(a.k.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.$D() ? a.k.albumsControl === o && (b.B.style.visibility = "visible") : b.B.style.visibility = "hidden")
        })
    });
    var Oe = 1.8;
    G() && (Oe = 1);
    x.extend(Ne.prototype, {
        Mk: function(a) {
            for (var b in a) this.k[b] = a[b];
            a = this.k.imageHeight + "px";
            this.qc(this.k.anchor);
            this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            this.B.style.height = a;
            this.fk.style.height = a;
            this.Wh.style.height = a;
            this.dg = {
                height: this.k.imageHeight,
                width: this.k.imageHeight * Oe
            };
            this.ek.style.height = this.dg.height - 6 + "px";
            this.ek.style.width = this.dg.width - 6 + "px";
            this.qy(this.P.Zb(), o)
        },
        ra: function(a) {
            this.P = a;
            this.hs();
            this.dQ();
            this.iY();
            this.qy(a.Zb())
        },
        hs: function() {
            var a = this.k.imageHeight + "px";
            this.B = K("div");
            var b = this.B.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.fk = K("div");
            b = this.fk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Wh = K("div");
            b = this.Wh.style;
            b.height = a;
            this.fk.appendChild(this.Wh);
            this.B.appendChild(this.fk);
            this.P.B.appendChild(this.B);
            this.ek = K("div", {
                "class": "pano_photo_item_seleted"
            });
            this.ek.style.height = this.dg.height - 6 + "px";
            this.ek.style.width = this.dg.width - 6 + "px";
            this.qc(this.k.anchor)
        },
        EH: function(a) {
            for (var b = this.$j, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a) return c;
            return -1
        },
        qy: function(a, b) {
            if (b || !this.$j[this.Xc] || !(this.$j[this.Xc].panoId == a && 3 !== this.$j[this.Xc].recoType)) {
                var c = this,
                    d = this.EH(a);
                !b && -1 !== d && this.$j[d] && 3 !== this.$j[d].recoType ? this.Op(d) : this.AX(function(a) {
                    for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++) d = a[m].catlog, i = a[m].floor, j !== d && ("" === d && j !== i ? (k = o, b[i] || (b[i] = []), b[i].push(a[m])) : (b[Pe[d]] || (b[Pe[d]] = []), b[Pe[d]].push(a[m])));
                    for (var t in b) k ? l.push({
                        data: t + "F",
                        index: t
                    }) : l.push({
                        data: Qe[t],
                        index: t
                    });
                    c.VG = b;
                    c.Ni = l;
                    c.Gl(a);
                    0 == a.length ? c.U() : c.show()
                })
            }
        },
        UV: function() {
            if (!this.Ki) {
                var a = this.oX(this.Ni),
                    b = K("div");
                b.style.cssText = ["width:" + 134 * this.Ni.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = K("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new Me(a, {
                    Do: q,
                    Yx: o,
                    mi: q,
                    Bi: q,
                    vn: q,
                    DE: o,
                    Fw: o,
                    Cx: o
                });
                this.B.appendChild(a);
                for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++) b = d[e], x.M(b, "click", function() {
                    if (this.getAttribute("dataindex")) {
                        c.Gl(c.VG[this.getAttribute("dataindex")]);
                        for (var a = 0, b = d.length; a < b; a++) d[a].style.color = "#FFFFFF";
                        this.style.color = "#3383FF"
                    }
                });
                this.Ki = a
            }
        },
        RV: function() {
            if (this.Ki) a = this.mL(this.Ni), this.tQ.innerHTML = a;
            else {
                var a = this.mL(this.Ni),
                    b = K("ul"),
                    c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                x.M(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.Gl(c.VG[a]);
                        for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++) d[e].childNodes[0].getAttribute("dataindex") === a ? x.K.Ua(d[e], "pano_catlogLiActive") : x.K.Tb(d[e], "pano_catlogLiActive")
                    }
                });
                var a = K("div"),
                    d = K("a"),
                    e = K("span"),
                    f = K("a"),
                    g = K("span"),
                    i = ["background:url(" + F.qa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                e.style.cssText = i + "background-position:-18px 0;";
                d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.cssText = i + "background-position:0 0;";
                f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                f.style.top = this.k.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                d.appendChild(e);
                f.appendChild(g);
                x.M(d, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (e.style.backgroundPosition = "-27px 0");
                    new qb({
                        Gc: 60,
                        jc: rb.Gs,
                        duration: 300,
                        va: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                x.M(d, "mouseout", function() {
                    e.style.backgroundPosition = "-18px 0"
                });
                x.M(f, "mouseover", function() {
                    var a = parseInt(b.style.top, 10),
                        d = c.k.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < d)) {
                        var e = d - parseInt(b.offsetHeight, 10) + 7;
                        e !== a && (g.style.backgroundPosition = "-9px 0");
                        new qb({
                            Gc: 60,
                            jc: rb.Gs,
                            duration: 300,
                            va: function(c) {
                                b.style.top = a + (e - a) * c + "px"
                            }
                        })
                    }
                });
                x.M(f, "mouseout", function() {
                    g.style.backgroundPosition = "0 0"
                });
                a.appendChild(d);
                a.appendChild(f);
                d = K("div");
                d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                d.appendChild(b);
                d.appendChild(a);
                this.Ki = d;
                this.tQ = b;
                this.B.appendChild(d)
            }
        },
        SV: function() {
            if (this.Ni && !(0 >= this.Ni.length)) {
                var a = K("div");
                a.innerHTML = this.Zz;
                a.style.cssText = "position:absolute;background:#252525";
                this.B.appendChild(a);
                this.Ks = a;
                this.Oc.eg.style.left = this.dg.width + 8 + "px";
                this.Ki && (this.Ki.style.left = parseInt(this.Ki.style.left, 10) + this.dg.width + 8 + "px");
                var b = this;
                x.M(a, "click", function() {
                    b.P.rc(b.DW)
                })
            }
        },
        Gl: function(a) {
            this.$j = a;
            this.k.showCatalog && (0 < this.Ni.length ? (Ua() ? this.RV() : this.UV(), this.Oc.offsetLeft = 60) : (this.Ks && (this.B.removeChild(this.Ks), this.Ks = p, this.Oc.eg.style.left = "0px"), this.Ki && (this.B.removeChild(this.Ki), this.Ki = p), this.Oc.offsetLeft = 0));
            var b = this.iX(a);
            Ua() && (this.Ni && 0 < this.Ni.length && this.k.showExit && this.Zz) && (this.Oc.offsetLeft += this.dg.width + 8, this.Ks ? this.Ks.innerHTML = this.Zz : this.SV());
            this.Wh.innerHTML = b;
            this.Wh.style.width = (this.dg.width + 8) * a.length + 8 + "px";
            a = this.B.offsetWidth;
            b = this.Wh.offsetWidth;
            this.Oc.Rs && (b += this.Oc.Rs());
            b < a - 2 * this.Oc.Ei - this.Oc.offsetLeft ? this.B.style.width = b + this.Oc.offsetLeft + "px" : (this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px", b < this.B.offsetWidth - 2 * this.Oc.Ei - this.Oc.offsetLeft && (this.B.style.width = b + this.Oc.offsetLeft + "px"));
            this.Oc.refresh();
            this.rB = this.Wh.children;
            this.Wh.appendChild(this.ek);
            this.ek.style.left = "-100000px";
            a = this.EH(this.P.Zb(), this.k1); - 1 !== a && this.Op(a)
        },
        oX: function(a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>", b += c;
            return b
        },
        mL: function(a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>", b += c;
            return b
        },
        iX: function(a) {
            for (var b, c, d, e, f = [], g = this.dg.height, i = this.dg.width, k = 0; k < a.length; k++) b = a[k], recoType = b.recoType, d = b.panoId, e = b.name, c = b.heading, b = b.pitch, c = ae.yL(d, c, b, 198, 108), b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>", 3 === recoType ? Ua() ? (this.Zz = b, this.DW = d, a.splice(k, 1), k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + F.qa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>', f.push(b)) : f.push(b);
            return f.join("")
        },
        AX: function(a) {
            var b = this,
                c = this.P.Zb();
            c && this.Kl.zx(c, function(d) {
                b.P.Zb() === c && a(d)
            })
        },
        qc: function(a) {
            if (!Wa(a) || isNaN(a) || a < Tb || 3 < a) a = this.defaultAnchor;
            var b = this.B,
                c = this.k.offset.width,
                d = this.k.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Tb:
                    b.style.top = d + "px";
                    b.style.left = c + "px";
                    break;
                case Ub:
                    b.style.top = d + "px";
                    b.style.right = c + "px";
                    break;
                case Vb:
                    b.style.bottom = d + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = d + "px", b.style.right = c + "px"
            }
        },
        dQ: function() {
            this.bQ()
        },
        bQ: function() {
            var a = this;
            x.M(this.B, "touchstart", function(a) {
                a.stopPropagation()
            });
            x.M(this.fk, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Xc) a.Op(b), a.P.rc(a.$j[b].panoId)
            });
            x.M(this.Wh, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== p && a.mK(b, o)
            });
            this.P.addEventListener("size_changed", function() {
                isNaN(Number(a.k.maxWidth)) && a.Mk({
                    maxWidth: a.k.maxWidth
                })
            })
        },
        Op: function(a) {
            this.ek.style.left = this.rB[a].offsetLeft + 8 + "px";
            this.ek.setAttribute("data-index", this.rB[a].getAttribute("data-index"));
            this.Xc = a;
            this.mK(a)
        },
        mK: function(a, b) {
            var c = this.dg.width + 8,
                d = 0;
            this.Oc.Rs && (d = this.Oc.Rs() / 2);
            var e = this.fk.offsetWidth - 2 * d,
                f = this.Wh.offsetLeft || this.Oc.x,
                f = f - d,
                g = -a * c;
            g > f && this.Oc.scrollTo(g + d);
            c = g - c;
            f -= e;
            c < f && (!b || b && 8 < g - f) && this.Oc.scrollTo(c + e + d)
        },
        iY: function() {
            this.Oc = G() ? new Me(this.fk, {
                Do: q,
                Yx: o,
                mi: q,
                Bi: q,
                vn: q,
                DE: o,
                Fw: o,
                Cx: o
            }) : new Re(this.fk)
        },
        U: function() {
            this.B.style.visibility = "hidden"
        },
        show: function() {
            this.B.style.visibility = "visible"
        }
    });

    function Re(a) {
        this.B = a;
        this.Rg = a.children[0];
        this.Pr = p;
        this.Ei = 20;
        this.offsetLeft = 0;
        this.ra()
    }
    Re.prototype = {
        ra: function() {
            this.Rg.style.position = "relative";
            this.refresh();
            this.hs();
            this.am()
        },
        refresh: function() {
            this.eo = this.B.offsetWidth - this.Rs();
            this.RA = -(this.Rg.offsetWidth - this.eo - this.Ei);
            this.uv = this.Ei + this.offsetLeft;
            this.Rg.style.left = this.uv + "px";
            this.Rg.children[0] && (this.Pr = this.Rg.children[0].offsetWidth);
            this.eg && (this.eg.children[0].style.marginTop = this.Hr.children[0].style.marginTop = this.eg.offsetHeight / 2 - this.eg.children[0].offsetHeight / 2 + "px")
        },
        Rs: function() {
            return 2 * this.Ei
        },
        hs: function() {
            this.Jv = K("div");
            this.Jv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="上一页"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="下一页"><span class="pano_arrow_r"></span></a>';
            this.eg = this.Jv.children[0];
            this.Hr = this.Jv.children[1];
            this.B.appendChild(this.Jv);
            this.eg.children[0].style.marginTop = this.Hr.children[0].style.marginTop = this.eg.offsetHeight / 2 - this.eg.children[0].offsetHeight / 2 + "px"
        },
        am: function() {
            var a = this;
            x.M(this.eg, "click", function() {
                a.scrollTo(a.Rg.offsetLeft + a.eo)
            });
            x.M(this.Hr, "click", function() {
                a.scrollTo(a.Rg.offsetLeft - a.eo)
            })
        },
        EU: function() {
            x.K.Tb(this.eg, "pano_arrow_disable");
            x.K.Tb(this.Hr, "pano_arrow_disable");
            var a = this.Rg.offsetLeft;
            a >= this.uv && x.K.Ua(this.eg, "pano_arrow_disable");
            a - this.eo <= this.RA && x.K.Ua(this.Hr, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Rg.offsetLeft ? Math.ceil((a - this.Ei - this.eo) / this.Pr) * this.Pr + this.eo + this.Ei - 8 : Math.ceil((a - this.Ei) / this.Pr) * this.Pr + this.Ei;
            a < this.RA ? a = this.RA : a > this.uv && (a = this.uv);
            var b = this.Rg.offsetLeft,
                c = this;
            new qb({
                Gc: 60,
                jc: rb.Gs,
                duration: 300,
                va: function(d) {
                    c.Rg.style.left = b + (a - b) * d + "px"
                },
                finish: function() {
                    c.EU()
                }
            })
        }
    };
    z.Map = Ka;
    z.Hotspot = gb;
    z.MapType = Uc;
    z.Point = H;
    z.Pixel = R;
    z.Size = L;
    z.Bounds = db;
    z.TileLayer = Gc;
    z.Projection = gc;
    z.MercatorProjection = S;
    z.PerspectiveProjection = fb;
    z.Copyright = function(a, b, c) {
        this.id = a;
        this.$a = b;
        this.content = c
    };
    z.Overlay = jc;
    z.Label = tc;
    z.GroundOverlay = uc;
    z.PointCollection = yc;
    z.Marker = U;
    z.Icon = pc;
    z.IconSequence = rc;
    z.Symbol = qc;
    z.Polyline = Cc;
    z.Polygon = Bc;
    z.InfoWindow = sc;
    z.Circle = Dc;
    z.Control = Sb;
    z.NavigationControl = hb;
    z.GeolocationControl = Wb;
    z.OverviewMapControl = jb;
    z.CopyrightControl = Xb;
    z.ScaleControl = ib;
    z.MapTypeControl = kb;
    z.CityListControl = Yb;
    z.PanoramaControl = $b;
    z.TrafficLayer = Qc;
    z.CustomLayer = lb;
    z.ContextMenu = cc;
    z.MenuItem = fc;
    z.LocalSearch = ab;
    z.TransitRoute = wd;
    z.DrivingRoute = zd;
    z.WalkingRoute = Ad;
    z.Autocomplete = Kd;
    z.RouteSearch = Ed;
    z.Geocoder = Fd;
    z.LocalCity = Hd;
    z.Geolocation = Geolocation;
    z.Convertor = ic;
    z.BusLineSearch = Jd;
    z.Boundary = Id;
    z.VectorCloudLayer = Oc;
    z.VectorTrafficLayer = Pc;
    z.Panorama = Na;
    z.PanoramaLabel = Qd;
    z.PanoramaService = bc;
    z.PanoramaCoverageLayer = ac;
    z.PanoramaFlashInterface = Zd;

    function T(a, b) {
        for (var c in b) a[c] = b[c]
    }
    T(window, {
        BMap: z,
        _jsload2: function(a, b) {
            ia.Ly.sY && ia.Ly.set(a, b);
            I.vV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Se = Ka.prototype;
    T(Se, {
        getBounds: Se.Hd,
        getCenter: Se.Ha,
        getMapType: Se.oa,
        getSize: Se.Bb,
        setSize: Se.Ae,
        getViewport: Se.bt,
        getZoom: Se.fa,
        centerAndZoom: Se.Dd,
        panTo: Se.ui,
        panBy: Se.wg,
        setCenter: Se.Vf,
        setCurrentCity: Se.qF,
        setMapType: Se.zg,
        setViewport: Se.zh,
        setZoom: Se.Nc,
        highResolutionEnabled: Se.Ix,
        zoomTo: Se.Cg,
        zoomIn: Se.XF,
        zoomOut: Se.YF,
        addHotspot: Se.sw,
        removeHotspot: Se.qZ,
        clearHotspots: Se.em,
        checkResize: Se.yV,
        addControl: Se.qw,
        removeControl: Se.CN,
        getContainer: Se.La,
        addContextMenu: Se.wo,
        removeContextMenu: Se.Ep,
        addOverlay: Se.Ka,
        removeOverlay: Se.Ub,
        clearOverlays: Se.jK,
        openInfoWindow: Se.Ob,
        closeInfoWindow: Se.Wc,
        pointToOverlayPixel: Se.Ve,
        overlayPixelToPoint: Se.qN,
        getInfoWindow: Se.gh,
        getOverlays: Se.wx,
        getPanes: function() {
            return {
                floatPane: this.Wd.sD,
                markerMouseTarget: this.Wd.GE,
                floatShadow: this.Wd.eL,
                labelPane: this.Wd.yE,
                markerPane: this.Wd.LM,
                markerShadow: this.Wd.MM,
                mapPane: this.Wd.yt,
                vertexPane: this.Wd.SO
            }
        },
        addTileLayer: Se.Vg,
        removeTileLayer: Se.wh,
        pixelToPoint: Se.wb,
        pointToPixel: Se.bc,
        setFeatureStyle: Se.Np,
        selectBaseElement: Se.g4,
        setMapStyle: Se.Tt,
        enable3DBuilding: Se.Oo,
        disable3DBuilding: Se.hW,
        getPanorama: Se.wm,
        setBrowserContextmenu: Se.QZ
    });
    var Te = Uc.prototype;
    T(Te, {
        getTileLayer: Te.LX,
        getMinZoom: Te.Zo,
        getMaxZoom: Te.vm,
        getProjection: Te.dp,
        getTextColor: Te.Bm,
        getTips: Te.at
    });
    T(window, {
        BMAP_NORMAL_MAP: La,
        BMAP_PERSPECTIVE_MAP: Pa,
        BMAP_SATELLITE_MAP: Ya,
        BMAP_HYBRID_MAP: Sa
    });
    var Ue = S.prototype;
    T(Ue, {
        lngLatToPoint: Ue.kh,
        pointToLngLat: Ue.zj
    });
    var Ve = fb.prototype;
    T(Ve, {
        lngLatToPoint: Ve.kh,
        pointToLngLat: Ve.zj
    });
    var We = db.prototype;
    T(We, {
        equals: We.nb,
        containsPoint: We.fs,
        containsBounds: We.JV,
        intersects: We.kt,
        extend: We.extend,
        getCenter: We.Ha,
        isEmpty: We.xj,
        getSouthWest: We.ve,
        getNorthEast: We.nf,
        toSpan: We.LF
    });
    var Xe = jc.prototype;
    T(Xe, {
        isVisible: Xe.jh,
        show: Xe.show,
        hide: Xe.U
    });
    jc.getZIndex = jc.Dm;
    var Ye = eb.prototype;
    T(Ye, {
        openInfoWindow: Ye.Ob,
        closeInfoWindow: Ye.Wc,
        enableMassClear: Ye.mj,
        disableMassClear: Ye.jW,
        show: Ye.show,
        hide: Ye.U,
        getMap: Ye.qx,
        addContextMenu: Ye.wo,
        removeContextMenu: Ye.Ep
    });
    var Ze = U.prototype;
    T(Ze, {
        setIcon: Ze.Vb,
        getIcon: Ze.Yo,
        setPosition: Ze.ta,
        getPosition: Ze.ha,
        setOffset: Ze.Xe,
        getOffset: Ze.Pf,
        getLabel: Ze.MD,
        setLabel: Ze.fn,
        setTitle: Ze.Cc,
        setTop: Ze.yi,
        enableDragging: Ze.Hb,
        disableDragging: Ze.KC,
        setZIndex: Ze.Yt,
        getMap: Ze.qx,
        setAnimation: Ze.dn,
        setShadow: Ze.Cy,
        hide: Ze.U,
        setRotation: Ze.Qp,
        getRotation: Ze.CL
    });
    T(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var $e = tc.prototype;
    T($e, {
        setStyle: $e.Ld,
        setStyles: $e.xi,
        setContent: $e.ad,
        setPosition: $e.ta,
        getPosition: $e.ha,
        setOffset: $e.Xe,
        getOffset: $e.Pf,
        setTitle: $e.Cc,
        setZIndex: $e.Yt,
        getMap: $e.qx,
        getContent: $e.uk
    });
    var af = pc.prototype;
    T(af, {
        setImageUrl: af.SN,
        setSize: af.Ae,
        setAnchor: af.qc,
        setImageOffset: af.St,
        setImageSize: af.VZ,
        setInfoWindowAnchor: af.YZ,
        setPrintImageUrl: af.h_
    });
    var bf = sc.prototype;
    T(bf, {
        redraw: bf.je,
        setTitle: bf.Cc,
        setContent: bf.ad,
        getContent: bf.uk,
        getPosition: bf.ha,
        enableMaximize: bf.$g,
        disableMaximize: bf.Yw,
        isOpen: bf.Wa,
        setMaxContent: bf.Ut,
        maximize: bf.Xx,
        enableAutoPan: bf.Hs
    });
    var cf = lc.prototype;
    T(cf, {
        getPath: cf.te,
        setPath: cf.ke,
        setPositionAt: cf.hn,
        getStrokeColor: cf.GX,
        setStrokeWeight: cf.Tp,
        getStrokeWeight: cf.FL,
        setStrokeOpacity: cf.Rp,
        getStrokeOpacity: cf.HX,
        setFillOpacity: cf.Rt,
        getFillOpacity: cf.dX,
        setStrokeStyle: cf.Sp,
        getStrokeStyle: cf.EL,
        getFillColor: cf.cX,
        getBounds: cf.Hd,
        enableEditing: cf.lf,
        disableEditing: cf.iW,
        getEditing: cf.$W
    });
    var df = Dc.prototype;
    T(df, {
        setCenter: df.Vf,
        getCenter: df.Ha,
        getRadius: df.AL,
        setRadius: df.uf
    });
    var ef = Bc.prototype;
    T(ef, {
        getPath: ef.te,
        setPath: ef.ke,
        setPositionAt: ef.hn
    });
    var ff = gb.prototype;
    T(ff, {
        getPosition: ff.ha,
        setPosition: ff.ta,
        getText: ff.WD,
        setText: ff.Xt
    });
    H.prototype.equals = H.prototype.nb;
    R.prototype.equals = R.prototype.nb;
    L.prototype.equals = L.prototype.nb;
    T(window, {
        BMAP_ANCHOR_TOP_LEFT: Tb,
        BMAP_ANCHOR_TOP_RIGHT: Ub,
        BMAP_ANCHOR_BOTTOM_LEFT: Vb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var gf = Sb.prototype;
    T(gf, {
        setAnchor: gf.qc,
        getAnchor: gf.yD,
        setOffset: gf.Xe,
        getOffset: gf.Pf,
        show: gf.show,
        hide: gf.U,
        isVisible: gf.jh,
        toString: gf.toString
    });
    var hf = hb.prototype;
    T(hf, {
        getType: hf.hp,
        setType: hf.jn
    });
    T(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var jf = jb.prototype;
    T(jf, {
        changeView: jf.qe,
        setSize: jf.Ae,
        getSize: jf.Bb
    });
    var kf = ib.prototype;
    T(kf, {
        getUnit: kf.PX,
        setUnit: kf.yF
    });
    T(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var lf = Xb.prototype;
    T(lf, {
        addCopyright: lf.rw,
        removeCopyright: lf.bF,
        getCopyright: lf.sm,
        getCopyrightCollection: lf.FD
    });
    T(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Zb,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var of = Gc.prototype;
    T( of , {
        getMapType: of .oa,
        getCopyright: of .sm,
        isTransparentPng: of .vt
    });
    var pf = cc.prototype;
    T(pf, {
        addItem: pf.tw,
        addSeparator: pf.SB,
        removeSeparator: pf.dF
    });
    var qf = fc.prototype;
    T(qf, {
        setText: qf.Xt
    });
    var rf = W.prototype;
    T(rf, {
        getStatus: rf.zm,
        setSearchCompleteCallback: rf.wF,
        getPageCapacity: rf.of,
        setPageCapacity: rf.Pp,
        setLocation: rf.gn,
        disableFirstResultSelection: rf.LC,
        enableFirstResultSelection: rf.hD,
        gotoPage: rf.Em,
        searchNearby: rf.Lp,
        searchInBounds: rf.bn,
        search: rf.search
    });
    T(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    T(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    T(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var sf = vd.prototype;
    T(sf, {
        clearResults: sf.Pe
    });
    xd = wd.prototype;
    T(xd, {
        setPolicy: xd.Wt,
        toString: xd.toString,
        setPageCapacity: xd.Pp
    });
    T(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    T(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var tf = Ed.prototype;
    T(tf, {
        routeCall: tf.NN
    });
    T(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    T(window, {
        BMAP_ROUTE_TYPE_DRIVING: ed,
        BMAP_ROUTE_TYPE_WALKING: dd
    });
    T(window, {
        BMAP_ROUTE_STATUS_NORMAL: id,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var uf = zd.prototype;
    T(uf, {
        setPolicy: uf.Wt
    });
    var vf = Kd.prototype;
    T(vf, {
        show: vf.show,
        hide: vf.U,
        setTypes: vf.xF,
        setLocation: vf.gn,
        search: vf.search,
        setInputValue: vf.zy
    });
    T(lb.prototype, {});
    var wf = Id.prototype;
    T(wf, {
        get: wf.get
    });
    T(ac.prototype, {});
    T(bb.prototype, {});
    T(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Tc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    T(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: vc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    T(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: wc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    T(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    T(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: dc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: ec
    });
    T(window, {
        BMAP_SYS_DRAWER: Ia,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    z.XU();
})()
window.Modernizr = function (a, b, c) { function d(a) { q.cssText = a } function f(a, b) { return typeof a === b } function g(a, b) { return !!~("" + a).indexOf(b) } function h(a, b) { for (var d in a) { var e = a[d]; if (!g(e, "-") && q[e] !== c) return "pfx" != b || e } return !1 } function i(a, b, d) { for (var e in a) { var g = b[a[e]]; if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g } return !1 } function j(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + v.join(d + " ") + d).split(" "); return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + w.join(d + " ") + d).split(" "), i(e, b, c)) } var r, C, F, k = "2.6.2", l = {}, m = !0, n = b.documentElement, o = "modernizr", p = b.createElement(o), q = p.style, t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), u = "Webkit Moz O ms", v = u.split(" "), w = u.toLowerCase().split(" "), x = {}, A = [], B = A.slice, D = function (a, c, d, e) { var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body"); if (parseInt(d, 10)) for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), j.appendChild(h); return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""), j.id = o, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i), !!g }, E = {}.hasOwnProperty; F = f(E, "undefined") || f(E.call, "undefined") ? function (a, b) { return b in a && f(a.constructor.prototype[b], "undefined") } : function (a, b) { return E.call(a, b) }, Function.prototype.bind || (Function.prototype.bind = function (a) { var b = this; if ("function" != typeof b) throw new TypeError; var c = B.call(arguments, 1), d = function () { if (this instanceof d) { var e = function () { }; e.prototype = b.prototype; var f = new e, g = b.apply(f, c.concat(B.call(arguments))); return Object(g) === g ? g : f } return b.apply(a, c.concat(B.call(arguments))) }; return d }), x.csstransforms = function () { return !!j("transform") }, x.csstransforms3d = function () { var a = !!j("perspective"); return a && "webkitPerspective" in n.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) { a = 9 === b.offsetLeft && 3 === b.offsetHeight }), a }, x.csstransitions = function () { return j("transition") }; for (var G in x) F(x, G) && (C = G.toLowerCase(), l[C] = x[G](), A.push((l[C] ? "" : "no-") + C)); return l.addTest = function (a, b) { if ("object" == typeof a) for (var d in a) F(a, d) && l.addTest(d, a[d]); else { if (a = a.toLowerCase(), l[a] !== c) return l; b = "function" == typeof b ? b() : b, "undefined" != typeof m && m && (n.className += " " + (b ? "" : "no-") + a), l[a] = b } return l }, d(""), p = r = null, l._version = k, l._prefixes = t, l._domPrefixes = w, l._cssomPrefixes = v, l.testProp = function (a) { return h([a]) }, l.testAllProps = j, l.testStyles = D, l.prefixed = function (a, b, c) { return b ? j(a, b, c) : j(a, "pfx") }, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""), l }(this, this.document), function (a, b) { var d, c = a.jQuery || a.Cowboy || (a.Cowboy = {}); c.throttle = d = function (a, d, e, f) { function i() { function k() { h = +new Date, e.apply(c, j) } function l() { g = b } var c = this, i = +new Date - h, j = arguments; f && !g && k(), g && clearTimeout(g), f === b && i > a ? k() : d !== !0 && (g = setTimeout(f ? l : k, f === b ? a - i : a)) } var g, h = 0; return "boolean" != typeof d && (f = e, e = d, d = b), c.guid && (i.guid = e.guid = e.guid || c.guid++), i }, c.debounce = function (a, c, e) { return e === b ? d(a, c, !1) : d(a, e, c !== !1) } }(this), function (a, b, c) { "use strict"; function e(a) { return a ? a.replace(/([A-Z])/g, function (a, b) { return "-" + b.toLowerCase() }).replace(/^ms-/, "-ms-") : "" } var d = 0, f = b.prefixed("transition"), g = b.prefixed("transitionDelay"), h = b.prefixed("transitionDuration"), i = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[f], j = b.prefixed("transform"), k = e(j), l = b.csstransforms && b.csstransitions, m = b.csstransforms3d, n = "shuffle", o = "all", p = "groups", q = function (b, c) { c = c || {}, a.extend(this, q.options, c, q.settings), this.$el = a(b), this.$window = a(window), this.unique = "shuffle_" + d++, this._fire(q.EventType.LOADING), this._init(), setTimeout(a.proxy(this._fire, this, q.EventType.DONE), 16) }; q.EventType = { LOADING: "loading", DONE: "done", SHRINK: "shrink", SHRUNK: "shrunk", FILTER: "filter", FILTERED: "filtered", SORTED: "sorted", LAYOUT: "layout", REMOVED: "removed" }, q.prototype = { _init: function () { var c, d, b = this, e = a.proxy(b._onResize, b), g = b.throttle ? b.throttle(b.throttleTime, e) : e, h = b.initialSort ? b.initialSort : null; b._setVars(), b._resetCols(), b._addClasses(), b._initItems(), b.$window.on("resize." + n + "." + b.unique, g), c = b.$el.css(["paddingLeft", "paddingRight", "position"]), d = b._getOuterWidth(b.$el[0]), "static" === c.position && (b.$el[0].style.position = "relative"), b.offset = { left: parseInt(c.paddingLeft, 10) || 0, top: parseInt(c.paddingTop, 10) || 0 }, b._setColumns(parseInt(d, 10)), b.shuffle(b.group, h), b.supported && setTimeout(function () { b._setTransitions(), b.$el[0].style[f] = "height " + b.speed + "ms " + b.easing }, 0) }, _addClasses: function () { this.$el.addClass(n), this.$items.addClass("shuffle-item filtered") }, _setVars: function () { var b = this, c = b.columnWidth; b.$items = b._getItems(), b.isFluid = c && a.isFunction(b.columnWidth), 0 === c && null !== b.sizer && (c = b.sizer), "string" == typeof c ? b.$sizer = b.$el.find(c) : c && c.nodeType && 1 === c.nodeType ? b.$sizer = a(c) : c && c.jquery && (b.$sizer = c), b.$sizer && b.$sizer.length && (b.useSizer = !0, b.sizer = b.$sizer[0]) }, _filter: function (b, d) { var e = this, f = d !== c, g = f ? d : e.$items, h = a(); return b = b || e.lastFilter, e._fire(q.EventType.FILTER), a.isFunction(b) ? g.each(function () { var c = a(this); b.call(c[0], c, e) && (h = h.add(c)) }) : (e.group = b, b === o ? h = g : g.each(function () { var c = a(this), d = c.data(p), f = e.delimeter && !a.isArray(d) ? d.split(e.delimeter) : d; a.inArray(b, f) > -1 && (h = h.add(c)) })), e._toggleFilterClasses(g, h), g = null, d = null, h }, _toggleFilterClasses: function (b, c) { var d = "concealed", e = "filtered"; b.filter(c).each(function () { var b = a(this); b.hasClass(d) && b.removeClass(d), b.hasClass(e) || b.addClass(e) }), b.not(c).each(function () { var b = a(this); b.hasClass(d) || b.addClass(d), b.hasClass(e) && b.removeClass(e) }) }, _initItems: function (a) { return a = a || this.$items, a.css(this.itemCss) }, _updateItemCount: function () { return this.visibleItems = this.$items.filter(".filtered").length, this }, _setTransition: function (a) { var b = this; return a.style[f] = k + " " + b.speed + "ms " + b.easing + ", opacity " + b.speed + "ms " + b.easing, a }, _setTransitions: function (a) { var b = this; return a = a || b.$items, a.each(function () { b._setTransition(this) }), b }, _setSequentialDelay: function (b) { var c = this; c.supported && a.each(b, function (b) { this.style[g] = "0ms," + (b + 1) * c.sequentialFadeDelay + "ms", a(this).one(i, function () { this.style[g] = "0ms" }) }) }, _getItems: function () { return this.$el.children(this.itemSelector) }, _getPreciseDimension: function (b, c) { var d; return d = window.getComputedStyle ? window.getComputedStyle(b, null)[c] : a(b).css(c), parseFloat(d) }, _getOuterWidth: function (a, b) { var c = a.offsetWidth; if (b) { var d = Math.round(parseFloat(a.style.marginLeft)) || 0, e = Math.round(parseFloat(a.style.marginRight)) || 0; c += d + e } return c }, _getColumnSize: function (a, b) { var c; return c = this.isFluid ? this.columnWidth(b) : this.useSizer ? this._getPreciseDimension(this.sizer, "width") : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? this._getOuterWidth(this.$items[0], !0) : b, 0 === c && (c = b), c + a }, _getGutterSize: function (b) { var c; return c = a.isFunction(this.gutterWidth) ? this.gutterWidth(b) : this.useSizer ? this._getPreciseDimension(this.sizer, "marginLeft") : this.gutterWidth }, _setColumns: function (a) { var b = a || this._getOuterWidth(this.$el[0]), c = this._getGutterSize(b), d = this._getColumnSize(c, b), e = (b + c) / d; Math.abs(Math.round(e) - e) < .03 && (e = Math.round(e)), this.cols = Math.max(Math.floor(e), 1), this.containerWidth = b, this.colWidth = d }, _setContainerSize: function () { this.$el.css("height", Math.max.apply(Math, this.colYs)) }, _fire: function (a, b) { this.$el.trigger(a + "." + n, b && b.length ? b : [this]) }, _layout: function (b, c, d, e) { var f = this; c = c || f.filterEnd, f.layoutTransitionEnded = !1, a.each(b, function (b, g) { var h = a(g), i = f._getOuterWidth(g, !0), j = i / f.colWidth; Math.abs(Math.round(j) - j) < .03 && (j = Math.round(j)); var k = Math.min(Math.ceil(j), f.cols); if (1 === k) f._placeItem(h, f.colYs, c, d, e); else { var n, o, l = f.cols + 1 - k, m = []; for (o = 0; o < l; o++) n = f.colYs.slice(o, o + k), m[o] = Math.max.apply(Math, n); f._placeItem(h, m, c, d, e) } }), f._processStyleQueue(), f._setContainerSize() }, _resetCols: function () { var a = this.cols; for (this.colYs = []; a--;) this.colYs.push(0) }, _reLayout: function (a, b) { var c = this; a = a || c.filterEnd, c._resetCols(), c.keepSorted && c.lastSort ? c.sort(c.lastSort, !0, b) : c._layout(c.$items.filter(".filtered").get(), c.filterEnd, b) }, _placeItem: function (a, b, c, d, e) { for (var f = this, g = Math.min.apply(Math, b), h = 0, i = 0, j = b.length; i < j; i++) if (b[i] >= g - f.buffer && b[i] <= g + f.buffer) { h = i; break } var k = f.colWidth * h, l = g; k = Math.round(k + f.offset.left), l = Math.round(l + f.offset.top), a.data({ x: k, y: l }); var m = g + a.outerHeight(!0), n = f.cols + 1 - j; for (i = 0; i < n; i++) f.colYs[h + i] = m; var o = { from: "layout", $this: a, x: k, y: l, scale: 1 }; d ? o.skipTransition = !0 : (o.opacity = 1, o.callback = c), e && (o.opacity = 0), f.styleQueue.push(o) }, _shrink: function (b, c) { var d = this, e = b || d.$items.filter(".concealed"), f = {}, g = c || d.shrinkEnd; e.length && (d._fire(q.EventType.SHRINK), d.shrinkTransitionEnded = !1, e.each(function () { var b = a(this), c = b.data(); f = { from: "shrink", $this: b, x: c.x, y: c.y, scale: .001, opacity: 0, callback: g }, d.styleQueue.push(f) })) }, _onResize: function () { if (this.enabled && !this.destroyed) { var a = this._getOuterWidth(this.$el[0]); a !== this.containerWidth && this.resized() } }, transition: function (b) { var e, d = this, f = function () { d.layoutTransitionEnded || "layout" !== b.from ? d.shrinkTransitionEnded || "shrink" !== b.from || (b.callback.call(d), d.shrinkTransitionEnded = !0) : (d._fire(q.EventType.LAYOUT), b.callback.call(d), d.layoutTransitionEnded = !0) }; if (b.callback = b.callback || a.noop, d.supported) b.scale === c && (b.scale = 1), e = m ? "translate3d(" + b.x + "px, " + b.y + "px, 0) scale3d(" + b.scale + ", " + b.scale + ", 1)" : "translate(" + b.x + "px, " + b.y + "px) scale(" + b.scale + ", " + b.scale + ")", b.x !== c && b.$this.css(j, e), b.opacity !== c && b.$this.css("opacity", b.opacity), b.$this.one(i, f); else { var g = { left: b.x, top: b.y, opacity: b.opacity }; b.$this.stop(!0).animate(g, d.speed, "swing", f) } }, _processStyleQueue: function () { var b = this, c = b.styleQueue; a.each(c, function (a, c) { c.skipTransition ? b._skipTransition(c.$this[0], function () { b.transition(c) }) : b.transition(c) }), b.styleQueue.length = 0 }, shrinkEnd: function () { this._fire(q.EventType.SHRUNK) }, filterEnd: function () { this._fire(q.EventType.FILTERED) }, sortEnd: function () { this._fire(q.EventType.SORTED) }, _skipTransition: function (b, c, d) { var e, f = b.style[h]; b.style[h] = "0ms", a.isFunction(c) ? c() : b.style[c] = d, e = b.offsetWidth, b.style[h] = f }, _addItems: function (a, b, d) { var f, g, e = this; e.supported || (b = !1), a.addClass("shuffle-item"), e._initItems(a), e._setTransitions(a), e.$items = e._getItems(), a.css("opacity", 0), f = e._filter(c, a), g = f.get(), e._updateItemCount(), b ? (e._layout(g, null, !0, !0), d && e._setSequentialDelay(f), e._revealAppended(f)) : e._layout(g) }, _revealAppended: function (b) { var c = this; setTimeout(function () { b.each(function (b, d) { c.transition({ from: "reveal", $this: a(d), opacity: 1 }) }) }, c.revealAppendedDelay) }, shuffle: function (a, b) { var c = this; c.enabled && (a || (a = o), c._filter(a), c.lastFilter = a, c._updateItemCount(), c._resetCols(), c._shrink(), b && (c.lastSort = b), c._reLayout()) }, sort: function (a, b, c) { var d = this, e = d.$items.filter(".filtered").sorted(a); b || d._resetCols(), d._layout(e, function () { b && d.filterEnd(), d.sortEnd() }, c), d.lastSort = a }, resized: function (a) { this.enabled && (a || this._setColumns(), this._reLayout()) }, layout: function () { this.update(!0) }, update: function (a) { this.resized(a) }, appended: function (a, b, c) { b = b !== !1, c = c !== !1, this._addItems(a, b, c) }, disable: function () { this.enabled = !1 }, enable: function (a) { this.enabled = !0, a !== !1 && this.update() }, remove: function (a) { if (a.length && a.jquery) { var b = this; return b._shrink(a, function () { var b = this; a.remove(), setTimeout(function () { b.$items = b._getItems(), b.layout(), b._updateItemCount(), b._fire(q.EventType.REMOVED, [a, b]), a = null }, 0) }), b._processStyleQueue(), b } }, destroy: function () { var a = this; a.$window.off("." + a.unique), a.$el.removeClass(n).removeAttr("style").removeData(n), a.$items.removeAttr("style").removeClass("concealed filtered shuffle-item"), a.$window = null, a.$items = null, a.$el = null, a.$sizer = null, a.sizer = null, a.destroyed = !0 } }, q.options = { group: o, speed: 250, easing: "ease-out", itemSelector: "", sizer: null, gutterWidth: 0, columnWidth: 0, delimeter: null, buffer: 0, initialSort: null, throttle: a.throttle || null, throttleTime: 300, sequentialFadeDelay: 150, supported: l }, q.settings = { $sizer: null, useSizer: !1, itemCss: { position: "absolute", top: 0, left: 0 }, offset: { top: 0, left: 0 }, revealAppendedDelay: 300, keepSorted: !0, enabled: !0, destroyed: !1, styleQueue: [] }, a.fn.shuffle = function (b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function () { var d = a(this), e = d.data(n); e || (e = new q(d, b), d.data(n, e)), "string" == typeof b && e[b] && e[b].apply(e, c) }) }, a.fn.sorted = function (b) { var d = a.extend({}, a.fn.sorted.defaults, b), e = this.get(), f = !1; return e.length ? d.randomize ? a.fn.sorted.randomize(e) : (d.by !== a.noop && null !== d.by && d.by !== c && e.sort(function (b, e) { if (f) return 0; var g = d.by(a(b)), h = d.by(a(e)); return g === c && h === c ? (f = !0, 0) : "sortFirst" === g || "sortLast" === h ? -1 : "sortLast" === g || "sortFirst" === h ? 1 : g < h ? -1 : g > h ? 1 : 0 }), f ? this.get() : (d.reverse && e.reverse(), e)) : [] }, a.fn.sorted.defaults = { reverse: !1, by: null, randomize: !1 }, a.fn.sorted.randomize = function (a) { var c, d, b = a.length; if (!b) return a; for (; --b;) d = Math.floor(Math.random() * (b + 1)), c = a[d], a[d] = a[b], a[b] = c; return a } }(jQuery, Modernizr);
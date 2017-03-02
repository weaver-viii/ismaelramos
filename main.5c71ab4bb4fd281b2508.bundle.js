webpackJsonp([0, 4], {
  154: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(345);
    n.d(t, "a", function () {
      return s
    });
    var a = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, r = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, s = function () {
      function e() {
        this.refreshCounter$ = new o._20, this.counter = i.a.numberOfEggs
      }

      return e.prototype.getCounter = function () {
        return this.counter
      }, e.prototype.decreaseCounter = function () {
        this.counter > 0 && (this.counter--, this.refreshCounter$.emit(this.counter), 0 === this.counter && (this.counter = i.a.numberOfEggs))
      }, e = a([n.i(o.R)(), r("design:paramtypes", [])], e)
    }()
  }, 342: function (e, t, n) {
    "use strict";
    function o(e) {
      return new i.a(e, "assets/i18n", ".json")
    }

    var i = n(112);
    t.a = o
  }, 343: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(154);
    n.d(t, "a", function () {
      return s
    });
    var a = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, r = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, s = function () {
      function e(e) {
        var t = this;
        this.easterEggService = e, this.greetings = ["Hello!", "Salut!", "Hallo!", "Hola!", "Konnichiwa!", "Hi!", "Hey!"], this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
        var n = ["electronicMusic", "goToCinema", "myGirlfriend", "goCiclying", "goingToTheMountain", "playingSquash", "swimming", "diving", "coding", "playVideogames", "driving", "sleeping"];
        this.randomLike = n[Math.floor(Math.random() * n.length)], setInterval(function () {
          t.randomLike = n[Math.floor(Math.random() * n.length)]
        }, 3e3), this.labs = [{
          id: "001",
          name: "Web Peluqueria Pilar Silvan",
          link: "https://www.peluqueriapilarsilvan.com"
        }, {
          id: "002",
          name: "Packing up",
          link: "https://play.google.com/store/apps/details?id=packingup.core.activities&hl=es"
        }, {id: "003", name: "SECD", link: "https://sourceforge.net/projects/secd/"}, {
          id: "004",
          name: "Gijón Squash Club app",
          link: "https://play.google.com/store/apps/details?id=gijonsquashclub.liga"
        }]
      }

      return e.prototype.ngAfterViewInit = function () {
        $("#greeting").textillate({in: {delay: 200, effect: "slideInLeft"}})
      }, e.prototype.clickGreeting = function () {
        $("#greeting span").textillate({in: {effect: "hinge"}}), this.easterEggService.decreaseCounter()
      }, e.prototype.clickSmile = function () {
        var e = this;
        $("#smile span").textillate({
          in: {
            effect: "flash", callback: function () {
              $("#smile span").hide(), e.easterEggService.decreaseCounter()
            }
          }
        })
      }, e = a([n.i(o.G)({
        selector: "ir-home-page",
        template: n(701),
        styles: [n(691)]
      }), r("design:paramtypes", ["function" == typeof(t = "undefined" != typeof i.a && i.a) && t || Object])], e);
      var t
    }()
  }, 344: function (e, t, n) {
    "use strict";
    var o = n(0);
    n.d(t, "a", function () {
      return r
    });
    var i = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, a = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, r = function () {
      function e() {
        this.audio = new Audio("assets/audio/applescal.mp3"), this.audio.play()
      }

      return e.prototype.ngOnDestroy = function () {
        this.audio.pause()
      }, e = i([n.i(o.G)({
        selector: "ir-zoomquilt-page",
        template: n(702),
        styles: [n(692)]
      }), a("design:paramtypes", [])], e)
    }()
  }, 345: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o
    });
    var o = {production: !0, numberOfEggs: 3}
  }, 403: function (e, t) {
    function n(e) {
      throw new Error("Cannot find module '" + e + "'.")
    }

    n.keys = function () {
      return []
    }, n.resolve = n, e.exports = n, n.id = 403
  }, 404: function (e, t, n) {
    "use strict";
    var o = n(536), i = (n.n(o), n(496)), a = n(0), r = n(345), s = n(528);
    r.a.production && n.i(a._41)(), n.i(i.a)().bootstrapModule(s.a)
  }, 526: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(222), a = n(343), r = n(344);
    n.d(t, "a", function () {
      return l
    });
    var s = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, c = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, f = [{path: "", redirectTo: "/", pathMatch: "full"}, {
      path: "",
      pathMatch: "full",
      component: a.a
    }, {path: "zoomquilt", pathMatch: "full", component: r.a}], l = function () {
      function e() {
      }

      return e = s([n.i(o.I)({imports: [i.a.forRoot(f)], exports: [i.a]}), c("design:paramtypes", [])], e)
    }()
  }, 527: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(112);
    n.d(t, "a", function () {
      return s
    });
    var a = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, r = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, s = function () {
      function e(e) {
        this.translateService = e, this.translateService.setDefaultLang("en"), this.translateService.use(this.translateService.getBrowserLang())
      }

      return e = a([n.i(o.G)({
        selector: "ir-app",
        template: n(698)
      }), r("design:paramtypes", ["function" == typeof(t = "undefined" != typeof i.b && i.b) && t || Object])], e);
      var t
    }()
  }, 528: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(151), a = n(313), r = n(211), s = n(112), c = n(342), f = n(529), l = n(526), p = n(535), u = n(530), h = n(527), d = n(343), g = n(344);
    n.d(t, "a", function () {
      return b
    });
    var m = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, v = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, b = function () {
      function e() {
      }

      return e = m([n.i(o.I)({
        imports: [i.b, a.a, r.b, s.c.forRoot({
          provide: s.d,
          useFactory: c.a,
          deps: [r.a]
        }), l.a, u.a, p.a], declarations: [h.a, d.a, g.a], providers: [{provide: f.a, useValue: f.b}], bootstrap: [h.a]
      }), v("design:paramtypes", [])], e)
    }()
  }, 529: function (e, t, n) {
    "use strict";
    var o = n(0);
    n.d(t, "a", function () {
      return i
    }), n.d(t, "b", function () {
      return a
    });
    var i = new o.w("app.config"), a = {}
  }, 530: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(84), a = n(313), r = n(211), s = n(222), c = n(112), f = n(342), l = n(533), p = n(532), u = n(534), h = n(531), d = n(154);
    n.d(t, "a", function () {
      return b
    });
    var g = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, m = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, v = this && this.__param || function (e, t) {
        return function (n, o) {
          t(n, o, e)
        }
      }, b = function () {
      function e(e) {
        n.i(l.a)(e, "CoreModule")
      }

      return e = g([n.i(o.I)({
        imports: [i.b, a.a, s.a, c.c.forRoot({provide: c.d, useFactory: f.a, deps: [r.a]})],
        exports: [u.a, h.a],
        declarations: [u.a, h.a],
        providers: [p.a, d.a]
      }), v(0, n.i(o.x)()), v(0, n.i(o.U)()), m("design:paramtypes", [e])], e)
    }()
  }, 531: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(154);
    n.d(t, "a", function () {
      return s
    });
    var a = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, r = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, s = function () {
      function e(e) {
        this.easterEggService = e
      }

      return e.prototype.ngAfterViewInit = function () {
        $("#footer-email a").textillate({in: {effect: "bounceInLeft"}}), $("#footer-social-links span").textillate({
          initialDelay: 250,
          in: {effect: "bounceInRight"}
        })
      }, e.prototype.hideEmail = function () {
        var e = "footer > div";
        $(e).css("display", "inline-table"), $(e).css("float", "right"), $("#footer-email").hide(), this.easterEggService.decreaseCounter()
      }, e = a([n.i(o.G)({
        selector: "ir-footer",
        template: n(699),
        styles: [n(689)]
      }), r("design:paramtypes", ["function" == typeof(t = "undefined" != typeof i.a && i.a) && t || Object])], e);
      var t
    }()
  }, 532: function (e, t, n) {
    "use strict";
    var o = n(0);
    n.d(t, "a", function () {
      return r
    });
    var i = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, a = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, r = function () {
      function e() {
      }

      return e.log = function (e) {
        console.log(e)
      }, e.error = function (e, t) {
        console.error(e, t)
      }, e = i([n.i(o.R)(), a("design:paramtypes", [])], e)
    }()
  }, 533: function (e, t, n) {
    "use strict";
    function o(e, t) {
      if (e)throw new Error(t + " has already been loaded. Import Core modules in the AppModule only.")
    }

    t.a = o
  }, 534: function (e, t, n) {
    "use strict";
    var o = n(0), i = n(112), a = n(154), r = n(222);
    n.d(t, "a", function () {
      return f
    });
    var s = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, c = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, f = function () {
      function e(e, t, n) {
        var o = this;
        this.easterEggService = e, this.router = t, this.translateService = n, this.eggsCounter = this.easterEggService.getCounter(), this.easterEggService.refreshCounter$.subscribe(function (e) {
          return o.refreshCounter(e)
        })
      }

      return e.prototype.ngAfterViewInit = function () {
        setInterval(function () {
          $("#eggs").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
        }, 1e4), $("#logo").textillate({
          initialDelay: 250,
          in: {effect: "bounceInLeft"}
        }), $("#languages span").textillate({initialDelay: 500, in: {effect: "bounceInRight"}})
      }, e.prototype.refreshCounter = function (e) {
        var t = this;
        if (this.eggsCounter = e, 0 === this.eggsCounter) {
          var n = new Audio("assets/audio/snake.mp3");
          n.play(), $("#info-content").hide(), $("#about *, #labs *, #path *").textillate({in: {effect: "fadeOut"}}), setTimeout(function () {
            t.router.navigate(["/zoomquilt"])
          }, 8e3)
        }
      }, e.prototype.changeLanguage = function (e) {
        this.translateService.use(e)
      }, e = s([n.i(o.G)({
        selector: "ir-nav",
        template: n(700),
        styles: [n(690)]
      }), c("design:paramtypes", ["function" == typeof(t = "undefined" != typeof a.a && a.a) && t || Object, "function" == typeof(f = "undefined" != typeof r.b && r.b) && f || Object, "function" == typeof(l = "undefined" != typeof i.b && i.b) && l || Object])], e);
      var t, f, l
    }()
  }, 535: function (e, t, n) {
    "use strict";
    var o = n(0);
    n.d(t, "a", function () {
      return r
    });
    var i = this && this.__decorate || function (e, t, n, o) {
        var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
        return a > 3 && r && Object.defineProperty(t, n, r), r
      }, a = this && this.__metadata || function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)return Reflect.metadata(e, t)
      }, r = function () {
      function e() {
      }

      return e = i([n.i(o.I)({declarations: [], exports: []}), a("design:paramtypes", [])], e)
    }()
  }, 536: function (e, t, n) {
    "use strict";
    var o = n(550), i = (n.n(o), n(543)), a = (n.n(i), n(539)), r = (n.n(a), n(545)), s = (n.n(r), n(544)), c = (n.n(s), n(542)), f = (n.n(c), n(541)), l = (n.n(f), n(549)), p = (n.n(l), n(538)), u = (n.n(p), n(537)), h = (n.n(u), n(547)), d = (n.n(h), n(540)), g = (n.n(d), n(548)), m = (n.n(g), n(546)), v = (n.n(m), n(551)), b = (n.n(v), n(744)), y = (n.n(b), n(387)), w = (n.n(y), n(707)), R = (n.n(w), n(708)), k = (n.n(R), n(709)), j = (n.n(k), n(710)), _ = (n.n(j), n(711)), x = (n.n(_), n(712)), O = (n.n(x), n(388)), S = (n.n(O), n(715)), P = (n.n(S), n(718));
    n.n(P)
  }, 689: function (e, t) {
    e.exports = ":host(ir-footer){width:100%}:host(ir-footer) footer{background:#16191b;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;bottom:0;width:100%;font-size:1em}:host(ir-footer) footer>div{margin:1em}:host(ir-footer) #footer-email,:host(ir-footer) #footer-email a:not(span){font-size:0.9em;color:#e2e6e8;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;opacity:.66}:host(ir-footer) #footer-email a:hover,:host(ir-footer) #footer-email a:not(span) a:hover{opacity:1}:host(ir-footer) #footer-social-links a{font-size:0.9em;color:#e2e6e8;text-decoration:none;margin-left:2em;opacity:.66;cursor:pointer}:host(ir-footer) #footer-social-links a:hover{opacity:1}:host(ir-footer) #footer-social-links{float:right}@media (max-width: 860px){:host(ir-footer) footer{border-top:1px solid grey}:host(ir-footer) footer>div{margin:0;text-align:center}:host(ir-footer) footer #footer-social-links{float:none}:host(ir-footer) footer #footer-social-links a{margin:1em}}\n"
  }, 690: function (e, t) {
    e.exports = ":host(ir-nav) nav{margin:1em;line-height:1.4em;text-align:center}:host(ir-nav) #logo{float:left;font-size:1.4em;color:#e2e6e8;font-weight:bold;text-decoration:none;cursor:pointer}:host(ir-nav) #eggs{font-size:0.5em;opacity:0.2}:host(ir-nav) #languages{float:right;font-size:0.9em;color:#e2e6e8}:host(ir-nav) #languages span{opacity:.66}:host(ir-nav) #languages span:first-child{margin-right:0.2em}:host(ir-nav) #languages span:hover{opacity:1;cursor:pointer}\n"
  }, 691: function (e, t) {
    e.exports = ':host(ir-home-page) .left{width:70px;float:left;font-size:0.7em !important;text-align:right;line-height:1.9em}:host(ir-home-page) .right{margin-left:90px}:host(ir-home-page) .clear{clear:both}:host(ir-home-page) #welcome{overflow:hidden}:host(ir-home-page) #greeting{display:inline-block;font-size:1.4em;font-weight:400;margin:0 0 0.5em 0}:host(ir-home-page) #about,:host(ir-home-page) #labs,:host(ir-home-page) #path{font-weight:200;font-size:0.9em;width:90%;text-align:justify;line-height:1.5em}:host(ir-home-page) #path-content{margin-top:1em}:host(ir-home-page) #smile{width:100%;text-align:center}:host(ir-home-page) #smile span{-webkit-transform:rotate(90deg);transform:rotate(90deg);display:inline-block}:host(ir-home-page) #wrapper{overflow-x:hidden !important;width:70%;margin:0 auto;overflow-y:auto;position:absolute;bottom:60px;right:0;left:0;top:60px}:host(ir-home-page) #labs-content ul{list-style:none;padding:0;font-size:0.9em;line-height:1.5em}:host(ir-home-page) #labs-content ul li{margin-bottom:0.8em}:host(ir-home-page) #labs-content ul li a{position:relative;color:#e2e6e8;text-decoration:none}:host(ir-home-page) #labs-content ul li a:hover{color:#e2e6e8}:host(ir-home-page) #labs-content ul li a:before{content:"";position:absolute;width:100%;height:1px;bottom:0;left:0;background-color:white;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}:host(ir-home-page) #labs-content ul li a:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}:host(ir-home-page) #labs-content ul li .number{color:#e2e6e8;opacity:.33}:host(ir-home-page) #info-title,:host(ir-home-page) #info-content,:host(ir-home-page) #labs-title,:host(ir-home-page) #labs-content,:host(ir-home-page) #path-title,:host(ir-home-page) #path-content{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:fadeAndScale;animation-name:fadeAndScale;-webkit-animation-timing-function:cubic-bezier(0.71, 0.55, 0.62, 1.57);animation-timing-function:cubic-bezier(0.71, 0.55, 0.62, 1.57)}@media (max-width: 500px){:host(ir-home-page) #wrapper{width:100%}:host(ir-home-page) #wrapper #about,:host(ir-home-page) #wrapper #labs,:host(ir-home-page) #wrapper #path{text-align:left}}@media (max-width: 450px){:host(ir-home-page) #about,:host(ir-home-page) #labs,:host(ir-home-page) #path{font-weight:300;font-size:0.8em;line-height:1em}:host(ir-home-page) #labs-content{margin-bottom:3em}}@-webkit-keyframes fadeAndScale{from{opacity:0;-webkit-transform:scale(0.9, 0.9);transform:scale(0.9, 0.9)}to{opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes fadeAndScale{from{opacity:0;-webkit-transform:scale(0.9, 0.9);transform:scale(0.9, 0.9)}to{opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1)}}\n'
  }, 692: function (e, t) {
    e.exports = ":host(ir-zoomquilt-page) #zoomquilt{width:100%;min-height:100%;border:none;position:absolute;top:0;z-index:9999}\n"
  }, 698: function (e, t) {
    e.exports = "<router-outlet></router-outlet>\n"
  }, 699: function (e, t) {
    e.exports = '<footer>\n    <div>\n        <span id="footer-email" (mouseover)="hideEmail()">\n            Email: <a href="mailto:ramos.silvan.ismael@gmail.com">ramos.silvan.ismael@gmail.com</a>\n        </span>\n        <div id="footer-social-links">\n            <a href="https://github.com/Ismaestro" target="_blank">Git<span class="colored">hub</span></a>\n            <a href="http://stackoverflow.com/users/1919749/ismaestro" target="_blank">\n                Stackoverflow\n            </a>\n            <a href="https://www.linkedin.com/in/ramossilvanismael/" target="_blank">\n                Linked<span class="colored">in</span>\n            </a>\n        </div>\n    </div>\n</footer>'
  }, 700: function (e, t) {
    e.exports = '<header>\n    <nav>\n        <a id="logo" routerLinkActive="active" routerLink="/">Ir</a>\n        <span id="eggs">eggs: {{eggsCounter}}</span>\n        <div id="languages">\n            <span (click)="changeLanguage(\'en\')">en</span>\n            <span (click)="changeLanguage(\'es\')">es</span>\n        </div>\n    </nav>\n</header>\n'
  }, 701: function (e, t) {
    e.exports = '<ir-nav></ir-nav>\n<div id="wrapper">\n    <section id="welcome">\n        <div>\n            <div class="left">\n            </div>\n            <div class="right">\n                <h1 id="greeting" [innerHtml]="greeting" (click)=\'clickGreeting()\'></h1>\n            </div>\n            <div class="clear"></div>\n        </div>\n    </section>\n    <section id="about">\n        <div id="info-title" class="left">\n            INFO.\n        </div>\n        <div id="info-content" class="right">\n            {{\'infoContent\' | translate}}\n            <br>\n            <p>{{\'iLike\' | translate}}, {{randomLike | translate}}</p>\n            <br>\n            <div id="smile">\n                <span (click)="clickSmile()">\n                    :)\n                </span>\n            </div>\n        </div>\n        <div class="clear"></div>\n    </section>\n    <section id="path">\n        <div id="path-title" class="left">\n            PATH.\n        </div>\n        <div id="path-content" class="right">\n            <span>C++</span> · <span>Java 7</span> · <span>HTML5/CSS3</span> ·\n            <span>PHP/MySQL</span> · <span>Javascript ES6</span> · <span>NodeJS/MongoDB</span> ·\n            <span>Typescript</span> · <span>{{\'toBeContinued\' | translate}}!</span>\n        </div>\n        <div class="clear"></div>\n    </section>\n    <section id="labs">\n        <div id="labs-title" class="left">\n            LABS.\n        </div>\n        <div id="labs-content" class="right">\n            <ul>\n                <li *ngFor="let lab of labs">\n                    <span class="number">{{lab.id}}</span> <a href="{{lab.link}}" target="_blank">{{lab.name}}</a>\n                </li>\n            </ul>\n        </div>\n        <div class="clear"></div>\n    </section>\n</div>\n<ir-footer></ir-footer>'
  }, 702: function (e, t) {
    e.exports = '<iframe id="zoomquilt" src="http://zoomquilt.org/"></iframe>'
  }, 745: function (e, t, n) {
    e.exports = n(404)
  }
}, [745]);
//# sourceMappingURL=main.5c71ab4bb4fd281b2508.bundle.map
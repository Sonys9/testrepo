"use strict";
(self.webpackChunkstackoverflow = self.webpackChunkstackoverflow || []).push([[5906], {
    15906: (e, t, n) => {
        n.d(t, {
            Vj: () => c,
            V: () => j,
            aA: () => p,
            Cd: () => C,
            K5: () => _.Z
        });
        var o = n(52932);
        n(77460);
        function s(e) {
            (0,
            o.qOq)(e, "svelte-209kup", 'h1.svelte-209kup{font-size:13px;font-weight:400;overflow:hidden;text-align:center;color:var(--black-400)}h1.svelte-209kup:before,h1.svelte-209kup:after{content:"";display:inline-block;width:50%;margin:0 0.5em 0 -55%;vertical-align:middle;border-bottom:1px solid;border-color:var(--black-225)}h1.svelte-209kup:after{margin:0 -55% 0 0.5em}')
        }
        function a(e) {
            let t, n;
            return {
                c() {
                    t = (0,
                    o.bGB)("h1"),
                    n = (0,
                    o.fLW)(e[0]),
                    (0,
                    o.Ljt)(t, "class", "svelte-209kup")
                },
                m(e, s) {
                    (0,
                    o.$Tr)(e, t, s),
                    (0,
                    o.R3I)(t, n)
                },
                p(e, t) {
                    1 & t && (0,
                    o.rTO)(n, e[0])
                },
                d(e) {
                    e && (0,
                    o.ogt)(t)
                }
            }
        }
        function r(e) {
            let t, n = e[0] && a(e);
            return {
                c() {
                    n && n.c(),
                    t = (0,
                    o.cSb)()
                },
                m(e, s) {
                    n && n.m(e, s),
                    (0,
                    o.$Tr)(e, t, s)
                },
                p(e, [o]) {
                    e[0] ? n ? n.p(e, o) : (n = a(e),
                    n.c(),
                    n.m(t.parentNode, t)) : n && (n.d(1),
                    n = null)
                },
                i: o.ZTd,
                o: o.ZTd,
                d(e) {
                    e && (0,
                    o.ogt)(t),
                    n && n.d(e)
                }
            }
        }
        function l(e, t, n) {
            let {text: o} = t;
            return e.$$set = e => {
                "text"in e && n(0, o = e.text)
            }
            ,
            [o]
        }
        class i extends o.f_C {
            constructor(e) {
                super(),
                (0,
                o.S1n)(this, e, l, r, o.N8, {
                    text: 0
                }, s)
            }
        }
        const c = i;
        var d = n(60355)
          , u = n(17843);
        StackExchange = window.StackExchange = window.StackExchange || {},
        StackOverflow = window.StackOverflow = window.StackOverflow || {};
        const p = {
            Google: {
                name: "Google",
                oauthServer: "https://accounts.google.com/o/oauth2/auth",
                icon: u.vYD,
                nativeStyling: !0,
                branding: "google"
            },
            GitHub: {
                name: "GitHub",
                oauthServer: "https://github.com/login/oauth/authorize",
                icon: u.Mrn,
                nativeStyling: !0,
                branding: "google"
            },
            Facebook: {
                name: "Facebook",
                oauthServer: "https://www.facebook.com/v2.0/dialog/oauth",
                icon: u.zJ_,
                nativeStyling: !1,
                branding: "facebook"
            }
        };
        function m(e, t, n) {
            const o = e.slice();
            return o[9] = t[n].name,
            o[10] = t[n].nativeStyling,
            o[11] = t[n].icon,
            o[12] = t[n].branding,
            o
        }
        function h(e) {
            let t, n, s, a, r;
            return {
                c() {
                    t = (0,
                    o.bGB)("input"),
                    s = (0,
                    o.DhX)(),
                    a = (0,
                    o.bGB)("input"),
                    (0,
                    o.Ljt)(t, "type", "hidden"),
                    (0,
                    o.Ljt)(t, "name", "vote"),
                    t.value = n = e[3].vote,
                    (0,
                    o.Ljt)(a, "type", "hidden"),
                    (0,
                    o.Ljt)(a, "name", "votehash"),
                    a.value = r = e[3].voteHash
                },
                m(e, n) {
                    (0,
                    o.$Tr)(e, t, n),
                    (0,
                    o.$Tr)(e, s, n),
                    (0,
                    o.$Tr)(e, a, n)
                },
                p(e, o) {
                    8 & o && n !== (n = e[3].vote) && (t.value = n),
                    8 & o && r !== (r = e[3].voteHash) && (a.value = r)
                },
                d(e) {
                    e && ((0,
                    o.ogt)(t),
                    (0,
                    o.ogt)(s),
                    (0,
                    o.ogt)(a))
                }
            }
        }
        function g(e) {
            let t, n, s, a, r;
            return {
                c() {
                    t = (0,
                    o.bGB)("input"),
                    s = (0,
                    o.DhX)(),
                    a = (0,
                    o.bGB)("input"),
                    (0,
                    o.Ljt)(t, "type", "hidden"),
                    (0,
                    o.Ljt)(t, "name", "tagAction"),
                    t.value = n = e[3].tagAction,
                    (0,
                    o.Ljt)(a, "type", "hidden"),
                    (0,
                    o.Ljt)(a, "name", "tagNames"),
                    a.value = r = e[3].tagNames
                },
                m(e, n) {
                    (0,
                    o.$Tr)(e, t, n),
                    (0,
                    o.$Tr)(e, s, n),
                    (0,
                    o.$Tr)(e, a, n)
                },
                p(e, o) {
                    8 & o && n !== (n = e[3].tagAction) && (t.value = n),
                    8 & o && r !== (r = e[3].tagNames) && (a.value = r)
                },
                d(e) {
                    e && ((0,
                    o.ogt)(t),
                    (0,
                    o.ogt)(s),
                    (0,
                    o.ogt)(a))
                }
            }
        }
        function f(e) {
            let t, n;
            return {
                c() {
                    t = (0,
                    o.bGB)("input"),
                    (0,
                    o.Ljt)(t, "type", "hidden"),
                    (0,
                    o.Ljt)(t, "name", "anonTheme"),
                    t.value = n = e[3].theme
                },
                m(e, n) {
                    (0,
                    o.$Tr)(e, t, n)
                },
                p(e, o) {
                    8 & o && n !== (n = e[3].theme) && (t.value = n)
                },
                d(e) {
                    e && (0,
                    o.ogt)(t)
                }
            }
        }
        function v(e) {
            let t, n, s, a, r, l, i = __tr(["Sign up with $name$"], {
                name: e[9]
            }, "en", []) + "";
            return n = new d.JO({
                props: {
                    class: e[10] ? "native" : "",
                    src: e[11]
                }
            }),
            {
                c() {
                    t = (0,
                    o.bGB)("div"),
                    (0,
                    o.YCL)(n.$$.fragment),
                    s = (0,
                    o.DhX)(),
                    a = (0,
                    o.fLW)(i),
                    r = (0,
                    o.DhX)(),
                    (0,
                    o.Ljt)(t, "class", "d-flex ai-center jc-center gx8")
                },
                m(e, i) {
                    (0,
                    o.$Tr)(e, t, i),
                    (0,
                    o.yef)(n, t, null),
                    (0,
                    o.R3I)(t, s),
                    (0,
                    o.R3I)(t, a),
                    (0,
                    o.$Tr)(e, r, i),
                    l = !0
                },
                p(e, t) {
                    const s = {};
                    4 & t && (s.class = e[10] ? "native" : ""),
                    4 & t && (s.src = e[11]),
                    n.$set(s),
                    (!l || 4 & t) && i !== (i = __tr(["Sign up with $name$"], {
                        name: e[9]
                    }, "en", []) + "") && (0,
                    o.rTO)(a, i)
                },
                i(e) {
                    l || ((0,
                    o.Ui)(n.$$.fragment, e),
                    l = !0)
                },
                o(e) {
                    (0,
                    o.etI)(n.$$.fragment, e),
                    l = !1
                },
                d(e) {
                    e && ((0,
                    o.ogt)(t),
                    (0,
                    o.ogt)(r)),
                    (0,
                    o.vpE)(n)
                }
            }
        }
        function L(e) {
            let t, n;
            return t = new d.zx({
                props: {
                    class: "w100",
                    type: "submit",
                    branding: e[12],
                    "data-testid": `signup-${e[9].toLowerCase()}`,
                    "data-provider": e[9],
                    $$slots: {
                        default: [v]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            {
                c() {
                    (0,
                    o.YCL)(t.$$.fragment)
                },
                m(e, s) {
                    (0,
                    o.yef)(t, e, s),
                    n = !0
                },
                p(e, n) {
                    const o = {};
                    4 & n && (o.branding = e[12]),
                    4 & n && (o["data-testid"] = `signup-${e[9].toLowerCase()}`),
                    4 & n && (o["data-provider"] = e[9]),
                    32772 & n && (o.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    t.$set(o)
                },
                i(e) {
                    n || ((0,
                    o.Ui)(t.$$.fragment, e),
                    n = !0)
                },
                o(e) {
                    (0,
                    o.etI)(t.$$.fragment, e),
                    n = !1
                },
                d(e) {
                    (0,
                    o.vpE)(t, e)
                }
            }
        }
        function $(e) {
            let t, n, s, a, r, l, i, c, d, u, p, v, $, b, w, j, I, x, y, R, k = e[3]?.vote && e[3]?.voteHash && h(e), G = e[3]?.tagNames && e[3]?.tagAction && g(e), S = e[3]?.theme && f(e), B = (0,
            o.NXn)(e[2]), T = [];
            for (let t = 0; t < B.length; t += 1)
                T[t] = L(m(e, B, t));
            const X = e => (0,
            o.etI)(T[e], 1, 1, ( () => {
                T[e] = null
            }
            ));
            return {
                c() {
                    t = (0,
                    o.bGB)("form"),
                    n = (0,
                    o.bGB)("input"),
                    s = (0,
                    o.DhX)(),
                    a = (0,
                    o.bGB)("input"),
                    r = (0,
                    o.DhX)(),
                    l = (0,
                    o.bGB)("input"),
                    c = (0,
                    o.DhX)(),
                    k && k.c(),
                    d = (0,
                    o.DhX)(),
                    G && G.c(),
                    u = (0,
                    o.DhX)(),
                    S && S.c(),
                    p = (0,
                    o.DhX)(),
                    v = (0,
                    o.bGB)("input"),
                    $ = (0,
                    o.DhX)(),
                    b = (0,
                    o.bGB)("input"),
                    w = (0,
                    o.DhX)(),
                    j = (0,
                    o.bGB)("div");
                    for (let e = 0; e < T.length; e += 1)
                        T[e].c();
                    (0,
                    o.Ljt)(n, "type", "hidden"),
                    (0,
                    o.Ljt)(n, "name", "fkey"),
                    n.value = e[0],
                    (0,
                    o.Ljt)(a, "type", "hidden"),
                    (0,
                    o.Ljt)(a, "name", "legalLinksShown"),
                    a.value = "1",
                    (0,
                    o.Ljt)(l, "type", "hidden"),
                    (0,
                    o.Ljt)(l, "name", "ssrc"),
                    l.value = i = e[3]?.location,
                    (0,
                    o.Ljt)(v, "type", "hidden"),
                    (0,
                    o.Ljt)(v, "name", "oauth_version"),
                    v.value = "2.0",
                    (0,
                    o.Ljt)(b, "type", "hidden"),
                    (0,
                    o.Ljt)(b, "name", "oauth_server"),
                    (0,
                    o.Ljt)(j, "class", "d-flex fd-column gy12"),
                    (0,
                    o.Ljt)(t, "class", "flex--item"),
                    (0,
                    o.Ljt)(t, "action", I = `/users/signup?ssrc=${e[3]?.location}&returnurl=${encodeURIComponent(e[1])}`),
                    (0,
                    o.Ljt)(t, "method", "POST"),
                    (0,
                    o.Ljt)(t, "target", e[5])
                },
                m(i, m) {
                    (0,
                    o.$Tr)(i, t, m),
                    (0,
                    o.R3I)(t, n),
                    (0,
                    o.R3I)(t, s),
                    (0,
                    o.R3I)(t, a),
                    (0,
                    o.R3I)(t, r),
                    (0,
                    o.R3I)(t, l),
                    (0,
                    o.R3I)(t, c),
                    k && k.m(t, null),
                    (0,
                    o.R3I)(t, d),
                    G && G.m(t, null),
                    (0,
                    o.R3I)(t, u),
                    S && S.m(t, null),
                    (0,
                    o.R3I)(t, p),
                    (0,
                    o.R3I)(t, v),
                    (0,
                    o.R3I)(t, $),
                    (0,
                    o.R3I)(t, b),
                    (0,
                    o.R3I)(t, w),
                    (0,
                    o.R3I)(t, j);
                    for (let e = 0; e < T.length; e += 1)
                        T[e] && T[e].m(j, null);
                    e[8](t),
                    x = !0,
                    y || (R = (0,
                    o.oLt)(t, "submit", e[7]),
                    y = !0)
                },
                p(e, [s]) {
                    if ((!x || 1 & s) && (n.value = e[0]),
                    (!x || 8 & s && i !== (i = e[3]?.location)) && (l.value = i),
                    e[3]?.vote && e[3]?.voteHash ? k ? k.p(e, s) : (k = h(e),
                    k.c(),
                    k.m(t, d)) : k && (k.d(1),
                    k = null),
                    e[3]?.tagNames && e[3]?.tagAction ? G ? G.p(e, s) : (G = g(e),
                    G.c(),
                    G.m(t, u)) : G && (G.d(1),
                    G = null),
                    e[3]?.theme ? S ? S.p(e, s) : (S = f(e),
                    S.c(),
                    S.m(t, p)) : S && (S.d(1),
                    S = null),
                    4 & s) {
                        let t;
                        for (B = (0,
                        o.NXn)(e[2]),
                        t = 0; t < B.length; t += 1) {
                            const n = m(e, B, t);
                            T[t] ? (T[t].p(n, s),
                            (0,
                            o.Ui)(T[t], 1)) : (T[t] = L(n),
                            T[t].c(),
                            (0,
                            o.Ui)(T[t], 1),
                            T[t].m(j, null))
                        }
                        for ((0,
                        o.dvw)(),
                        t = B.length; t < T.length; t += 1)
                            X(t);
                        (0,
                        o.gbL)()
                    }
                    (!x || 10 & s && I !== (I = `/users/signup?ssrc=${e[3]?.location}&returnurl=${encodeURIComponent(e[1])}`)) && (0,
                    o.Ljt)(t, "action", I)
                },
                i(e) {
                    if (!x) {
                        for (let e = 0; e < B.length; e += 1)
                            (0,
                            o.Ui)(T[e]);
                        x = !0
                    }
                },
                o(e) {
                    T = T.filter(Boolean);
                    for (let e = 0; e < T.length; e += 1)
                        (0,
                        o.etI)(T[e]);
                    x = !1
                },
                d(n) {
                    n && (0,
                    o.ogt)(t),
                    k && k.d(),
                    G && G.d(),
                    S && S.d(),
                    (0,
                    o.RMB)(T, n),
                    e[8](null),
                    y = !1,
                    R()
                }
            }
        }
        function b(e, t, n) {
            let s, {fkey: a=""} = t, {returnUrl: r} = t, {providers: l=[]} = t, {oauthInPopup: i} = t, {signupFormProps: c} = t, d = i ? "oauth-frame" : "_self";
            return e.$$set = e => {
                "fkey"in e && n(0, a = e.fkey),
                "returnUrl"in e && n(1, r = e.returnUrl),
                "providers"in e && n(2, l = e.providers),
                "oauthInPopup"in e && n(6, i = e.oauthInPopup),
                "signupFormProps"in e && n(3, c = e.signupFormProps)
            }
            ,
            [a, r, l, c, s, d, i, function(t) {
                o.cKT.call(this, e, t)
            }
            , function(e) {
                o.VnY[e ? "unshift" : "push"](( () => {
                    s = e,
                    n(4, s)
                }
                ))
            }
            ]
        }
        class w extends o.f_C {
            constructor(e) {
                super(),
                (0,
                o.S1n)(this, e, b, $, o.N8, {
                    fkey: 0,
                    returnUrl: 1,
                    providers: 2,
                    oauthInPopup: 6,
                    signupFormProps: 3
                })
            }
        }
        const j = w;
        var I = n(74982)
          , x = n(31315);
        StackExchange = window.StackExchange = window.StackExchange || {},
        StackOverflow = window.StackOverflow = window.StackOverflow || {};
        const y = e => ({email: t, password: n}) => {
            const o = {};
            if (!e())
                return {};
            if (t && "" !== t ? t.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || (o.email = `${t} is not a valid email address.`) : o.email = "Email cannot be empty.",
            n && "" !== n)
                if (n.length < 8)
                    o.password = "Password must be at least 8 characters long.";
                else {
                    const e = /\d/.test(n)
                      , t = /[a-zA-Z]/.test(n);
                    e && t || (o.password = "Password must contain at least 1 letter and 1 number.")
                }
            else
                o.password = "Password cannot be empty.";
            return o
        }
        ;
        function R(e) {
            (0,
            o.qOq)(e, "svelte-1rlgrxv", ".show-hide-password.svelte-1rlgrxv{position:absolute;top:8px;right:8px;border:none;background:none;padding:0;cursor:pointer}")
        }
        function k(e) {
            let t, n, s = e[7].email + "";
            return {
                c() {
                    t = (0,
                    o.bGB)("p"),
                    n = (0,
                    o.fLW)(s),
                    (0,
                    o.Ljt)(t, "class", "flex--item s-input-message"),
                    (0,
                    o.Ljt)(t, "aria-live", "assertive")
                },
                m(e, s) {
                    (0,
                    o.$Tr)(e, t, s),
                    (0,
                    o.R3I)(t, n)
                },
                p(e, t) {
                    128 & t && s !== (s = e[7].email + "") && (0,
                    o.rTO)(n, s)
                },
                d(e) {
                    e && (0,
                    o.ogt)(t)
                }
            }
        }
        function G(e) {
            let t, n, s = e[7].password + "";
            return {
                c() {
                    t = (0,
                    o.bGB)("p"),
                    n = (0,
                    o.fLW)(s),
                    (0,
                    o.Ljt)(t, "class", "flex--item s-input-message"),
                    (0,
                    o.Ljt)(t, "aria-live", "assertive")
                },
                m(e, s) {
                    (0,
                    o.$Tr)(e, t, s),
                    (0,
                    o.R3I)(t, n)
                },
                p(e, t) {
                    128 & t && s !== (s = e[7].password + "") && (0,
                    o.rTO)(n, s)
                },
                d(e) {
                    e && (0,
                    o.ogt)(t)
                }
            }
        }
        function S(e) {
            let t, n;
            return t = new _.Z({}),
            {
                c() {
                    (0,
                    o.YCL)(t.$$.fragment)
                },
                m(e, s) {
                    (0,
                    o.yef)(t, e, s),
                    n = !0
                },
                i(e) {
                    n || ((0,
                    o.Ui)(t.$$.fragment, e),
                    n = !0)
                },
                o(e) {
                    (0,
                    o.etI)(t.$$.fragment, e),
                    n = !1
                },
                d(e) {
                    (0,
                    o.vpE)(t, e)
                }
            }
        }
        function B(e) {
            let t, n = __tr(["Sign up"], undefined, "en", []) + "";
            return {
                c() {
                    t = (0,
                    o.fLW)(n)
                },
                m(e, n) {
                    (0,
                    o.$Tr)(e, t, n)
                },
                p: o.ZTd,
                d(e) {
                    e && (0,
                    o.ogt)(t)
                }
            }
        }
        function T(e) {
            let t, n, s, a, r, l, i, c, p, m, h, g, f, v, L, $, b, w, j, I, x, y, R, T, X, D, C, _, U, O, P, E, H, N, A, F, z, Y, W, Z, q, J, V, M, K, Q, ee, te, ne, oe, se, ae = e[7].email && k(e);
            N = new d.JO({
                props: {
                    src: e[6] ? u.Jib : u.tCy
                }
            });
            let re = e[7].password && G(e)
              , le = e[3] && S();
            return Z = new d.zx({
                props: {
                    class: `flex--item${e[3] ? "" : " mt12"}${e[4] ? " is-loading" : ""}`,
                    id: "signup-modal-submit-button",
                    name: "submit-button",
                    type: "submit",
                    weight: "filled",
                    $$slots: {
                        default: [B]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            Z.$on("click", e[13]),
            {
                c() {
                    t = (0,
                    o.bGB)("form"),
                    n = (0,
                    o.bGB)("input"),
                    s = (0,
                    o.DhX)(),
                    a = (0,
                    o.bGB)("input"),
                    r = (0,
                    o.DhX)(),
                    l = (0,
                    o.bGB)("input"),
                    i = (0,
                    o.DhX)(),
                    c = (0,
                    o.bGB)("input"),
                    p = (0,
                    o.DhX)(),
                    m = (0,
                    o.bGB)("input"),
                    h = (0,
                    o.DhX)(),
                    g = (0,
                    o.bGB)("input"),
                    f = (0,
                    o.DhX)(),
                    v = (0,
                    o.bGB)("input"),
                    L = (0,
                    o.DhX)(),
                    $ = (0,
                    o.bGB)("input"),
                    b = (0,
                    o.DhX)(),
                    w = (0,
                    o.bGB)("div"),
                    j = (0,
                    o.bGB)("label"),
                    j.textContent = `${__tr(["Email"], undefined, "en", [])}`,
                    I = (0,
                    o.DhX)(),
                    x = (0,
                    o.bGB)("div"),
                    x.innerHTML = '<input class="s-input" id="signup-modal-email" size="30" maxlength="100" name="email" autocomplete="off"/>',
                    y = (0,
                    o.DhX)(),
                    ae && ae.c(),
                    T = (0,
                    o.DhX)(),
                    X = (0,
                    o.bGB)("div"),
                    D = (0,
                    o.bGB)("label"),
                    D.textContent = `${__tr(["Password"], undefined, "en", [])}`,
                    C = (0,
                    o.DhX)(),
                    _ = (0,
                    o.bGB)("div"),
                    U = (0,
                    o.bGB)("input"),
                    E = (0,
                    o.DhX)(),
                    H = (0,
                    o.bGB)("button"),
                    (0,
                    o.YCL)(N.$$.fragment),
                    A = (0,
                    o.DhX)(),
                    re && re.c(),
                    z = (0,
                    o.DhX)(),
                    le && le.c(),
                    Y = (0,
                    o.DhX)(),
                    W = (0,
                    o.bGB)("div"),
                    (0,
                    o.YCL)(Z.$$.fragment),
                    q = (0,
                    o.DhX)(),
                    J = (0,
                    o.bGB)("p"),
                    V = (0,
                    o.fLW)(e[5]),
                    (0,
                    o.Ljt)(n, "type", "hidden"),
                    (0,
                    o.Ljt)(n, "name", "fkey"),
                    n.value = e[0],
                    (0,
                    o.Ljt)(a, "type", "hidden"),
                    (0,
                    o.Ljt)(a, "name", "legalLinksShown"),
                    a.value = "1",
                    (0,
                    o.Ljt)(l, "type", "hidden"),
                    (0,
                    o.Ljt)(l, "name", "ssrc"),
                    (0,
                    o.Ljt)(c, "type", "hidden"),
                    (0,
                    o.Ljt)(c, "name", "vote"),
                    (0,
                    o.Ljt)(m, "type", "hidden"),
                    (0,
                    o.Ljt)(m, "name", "votehash"),
                    (0,
                    o.Ljt)(g, "type", "hidden"),
                    (0,
                    o.Ljt)(g, "name", "tagAction"),
                    (0,
                    o.Ljt)(v, "type", "hidden"),
                    (0,
                    o.Ljt)(v, "name", "tagNames"),
                    (0,
                    o.Ljt)($, "type", "hidden"),
                    (0,
                    o.Ljt)($, "name", "anonTheme"),
                    (0,
                    o.Ljt)(j, "class", "flex--item s-label"),
                    (0,
                    o.Ljt)(j, "for", "signup-modal-email"),
                    (0,
                    o.Ljt)(x, "class", "d-flex ps-relative"),
                    (0,
                    o.Ljt)(w, "class", R = (0,
                    o.H1I)("flex--item d-flex fd-column gs4 gsy " + (e[7].email ? "has-error" : "")) + " svelte-1rlgrxv"),
                    (0,
                    o.Ljt)(D, "class", "flex--item s-label"),
                    (0,
                    o.Ljt)(D, "for", "signup-modal-password"),
                    (0,
                    o.Ljt)(U, "id", "signup-modal-password"),
                    (0,
                    o.Ljt)(U, "class", "flex--item s-input"),
                    (0,
                    o.Ljt)(U, "type", O = e[6] ? "password" : "text"),
                    (0,
                    o.Ljt)(U, "autocomplete", "new-password"),
                    (0,
                    o.Ljt)(U, "name", "password"),
                    (0,
                    o.Ljt)(U, "placeholder", P = __tr(["8+ characters (at least 1 letter & 1 number)"], undefined, "en", [])),
                    (0,
                    o.Ljt)(H, "type", "button"),
                    (0,
                    o.Ljt)(H, "class", "show-hide-password svelte-1rlgrxv"),
                    (0,
                    o.Ljt)(_, "class", "d-flex ps-relative"),
                    (0,
                    o.Ljt)(X, "class", F = (0,
                    o.H1I)("flex--item d-flex fd-column gs4 gsy " + (e[7].password ? "has-error" : "")) + " svelte-1rlgrxv"),
                    (0,
                    o.Ljt)(J, "class", M = (0,
                    o.H1I)("flex--item s-input-message " + (e[5] ? "" : "d-none")) + " svelte-1rlgrxv"),
                    (0,
                    o.Ljt)(J, "aria-hidden", K = e[5] ? "false" : "true"),
                    (0,
                    o.Ljt)(J, "aria-live", "assertive"),
                    (0,
                    o.Ljt)(W, "class", Q = (0,
                    o.H1I)("flex--item d-flex gs4 gsy fd-column" + (e[5] ? " has-error" : "")) + " svelte-1rlgrxv"),
                    (0,
                    o.Ljt)(t, "id", "signup-modal-signup-form"),
                    (0,
                    o.Ljt)(t, "class", "mt32 d-flex fd-column gy16"),
                    (0,
                    o.Ljt)(t, "action", ee = `/users/signup?ssrc=${e[2]?.location}&returnurl=${encodeURIComponent(e[1])}`),
                    (0,
                    o.Ljt)(t, "method", "POST")
                },
                m(d, u) {
                    (0,
                    o.$Tr)(d, t, u),
                    (0,
                    o.R3I)(t, n),
                    (0,
                    o.R3I)(t, s),
                    (0,
                    o.R3I)(t, a),
                    (0,
                    o.R3I)(t, r),
                    (0,
                    o.R3I)(t, l),
                    (0,
                    o.R3I)(t, i),
                    (0,
                    o.R3I)(t, c),
                    (0,
                    o.R3I)(t, p),
                    (0,
                    o.R3I)(t, m),
                    (0,
                    o.R3I)(t, h),
                    (0,
                    o.R3I)(t, g),
                    (0,
                    o.R3I)(t, f),
                    (0,
                    o.R3I)(t, v),
                    (0,
                    o.R3I)(t, L),
                    (0,
                    o.R3I)(t, $),
                    (0,
                    o.R3I)(t, b),
                    (0,
                    o.R3I)(t, w),
                    (0,
                    o.R3I)(w, j),
                    (0,
                    o.R3I)(w, I),
                    (0,
                    o.R3I)(w, x),
                    (0,
                    o.R3I)(w, y),
                    ae && ae.m(w, null),
                    (0,
                    o.R3I)(t, T),
                    (0,
                    o.R3I)(t, X),
                    (0,
                    o.R3I)(X, D),
                    (0,
                    o.R3I)(X, C),
                    (0,
                    o.R3I)(X, _),
                    (0,
                    o.R3I)(_, U),
                    (0,
                    o.R3I)(_, E),
                    (0,
                    o.R3I)(_, H),
                    (0,
                    o.yef)(N, H, null),
                    (0,
                    o.R3I)(X, A),
                    re && re.m(X, null),
                    (0,
                    o.R3I)(t, z),
                    le && le.m(t, null),
                    (0,
                    o.R3I)(t, Y),
                    (0,
                    o.R3I)(t, W),
                    (0,
                    o.yef)(Z, W, null),
                    (0,
                    o.R3I)(W, q),
                    (0,
                    o.R3I)(W, J),
                    (0,
                    o.R3I)(J, V),
                    ne = !0,
                    oe || (se = [(0,
                    o.oLt)(H, "click", e[11]), (0,
                    o.TVh)(te = e[9].call(null, t))],
                    oe = !0)
                },
                p(e, [s]) {
                    (!ne || 1 & s) && (n.value = e[0]),
                    e[7].email ? ae ? ae.p(e, s) : (ae = k(e),
                    ae.c(),
                    ae.m(w, null)) : ae && (ae.d(1),
                    ae = null),
                    (!ne || 128 & s && R !== (R = (0,
                    o.H1I)("flex--item d-flex fd-column gs4 gsy " + (e[7].email ? "has-error" : "")) + " svelte-1rlgrxv")) && (0,
                    o.Ljt)(w, "class", R),
                    (!ne || 64 & s && O !== (O = e[6] ? "password" : "text")) && (0,
                    o.Ljt)(U, "type", O);
                    const a = {};
                    64 & s && (a.src = e[6] ? u.Jib : u.tCy),
                    N.$set(a),
                    e[7].password ? re ? re.p(e, s) : (re = G(e),
                    re.c(),
                    re.m(X, null)) : re && (re.d(1),
                    re = null),
                    (!ne || 128 & s && F !== (F = (0,
                    o.H1I)("flex--item d-flex fd-column gs4 gsy " + (e[7].password ? "has-error" : "")) + " svelte-1rlgrxv")) && (0,
                    o.Ljt)(X, "class", F),
                    e[3] ? le ? 8 & s && (0,
                    o.Ui)(le, 1) : (le = S(),
                    le.c(),
                    (0,
                    o.Ui)(le, 1),
                    le.m(t, Y)) : le && ((0,
                    o.dvw)(),
                    (0,
                    o.etI)(le, 1, 1, ( () => {
                        le = null
                    }
                    )),
                    (0,
                    o.gbL)());
                    const r = {};
                    24 & s && (r.class = `flex--item${e[3] ? "" : " mt12"}${e[4] ? " is-loading" : ""}`),
                    131072 & s && (r.$$scope = {
                        dirty: s,
                        ctx: e
                    }),
                    Z.$set(r),
                    (!ne || 32 & s) && (0,
                    o.rTO)(V, e[5]),
                    (!ne || 32 & s && M !== (M = (0,
                    o.H1I)("flex--item s-input-message " + (e[5] ? "" : "d-none")) + " svelte-1rlgrxv")) && (0,
                    o.Ljt)(J, "class", M),
                    (!ne || 32 & s && K !== (K = e[5] ? "false" : "true")) && (0,
                    o.Ljt)(J, "aria-hidden", K),
                    (!ne || 32 & s && Q !== (Q = (0,
                    o.H1I)("flex--item d-flex gs4 gsy fd-column" + (e[5] ? " has-error" : "")) + " svelte-1rlgrxv")) && (0,
                    o.Ljt)(W, "class", Q),
                    (!ne || 6 & s && ee !== (ee = `/users/signup?ssrc=${e[2]?.location}&returnurl=${encodeURIComponent(e[1])}`)) && (0,
                    o.Ljt)(t, "action", ee)
                },
                i(e) {
                    ne || ((0,
                    o.Ui)(N.$$.fragment, e),
                    (0,
                    o.Ui)(le),
                    (0,
                    o.Ui)(Z.$$.fragment, e),
                    ne = !0)
                },
                o(e) {
                    (0,
                    o.etI)(N.$$.fragment, e),
                    (0,
                    o.etI)(le),
                    (0,
                    o.etI)(Z.$$.fragment, e),
                    ne = !1
                },
                d(e) {
                    e && (0,
                    o.ogt)(t),
                    ae && ae.d(),
                    (0,
                    o.vpE)(N),
                    re && re.d(),
                    le && le.d(),
                    (0,
                    o.vpE)(Z),
                    oe = !1,
                    (0,
                    o.j7q)(se)
                }
            }
        }
        function X(e, t, n) {
            let s, {visible: a} = t, {fkey: r=""} = t, {returnUrl: l} = t, {signupFormProps: i} = t, {showTermsAndConditions: c=!1} = t;
            const d = (0,
            I.x)();
            let u = !1
              , p = "";
            const {form: m, errors: h, reset: g, setFields: f} = (0,
            x.N)({
                debounced: {
                    timeout: 1e3,
                    validate: y(( () => a))
                },
                onSubmit: (e, {form: t}) => {
                    t && (n(4, u = !0),
                    t.submit())
                }
                ,
                onSuccess: () => {
                    n(4, u = !1),
                    n(12, a = !1)
                }
                ,
                onError: () => {
                    n(4, u = !1),
                    n(5, p = "Something went wrong. Please try again.")
                }
            });
            (0,
            o.FIv)(e, h, (e => n(7, s = e)));
            let v = !0;
            return e.$$set = e => {
                "visible"in e && n(12, a = e.visible),
                "fkey"in e && n(0, r = e.fkey),
                "returnUrl"in e && n(1, l = e.returnUrl),
                "signupFormProps"in e && n(2, i = e.signupFormProps),
                "showTermsAndConditions"in e && n(3, c = e.showTermsAndConditions)
            }
            ,
            e.$$.update = () => {
                if (4096 & e.$$.dirty && !1 === a && (g(),
                n(5, p = "")),
                4 & e.$$.dirty && i) {
                    const {location: e, vote: t, voteHash: n, tagAction: o, tagNames: s, theme: a} = i;
                    f((r => ({
                        ...r,
                        ssrc: e,
                        vote: t,
                        voteHash: n,
                        tagAction: o,
                        tagNames: s,
                        anonTheme: a
                    })))
                }
            }
            ,
            [r, l, i, c, u, p, v, s, d, m, h, () => {
                n(6, v = !v)
            }
            , a, () => d("submitButtonClick")]
        }
        class D extends o.f_C {
            constructor(e) {
                super(),
                (0,
                o.S1n)(this, e, X, T, o.N8, {
                    visible: 12,
                    fkey: 0,
                    returnUrl: 1,
                    signupFormProps: 2,
                    showTermsAndConditions: 3
                }, R)
            }
        }
        const C = D;
        var _ = n(86234);
        StackExchange = window.StackExchange = window.StackExchange || {},
        StackOverflow = window.StackOverflow = window.StackOverflow || {}
    }
}]);

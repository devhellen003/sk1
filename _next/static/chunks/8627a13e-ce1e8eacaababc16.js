"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [943], {
        9564: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                J5: function() {
                    return Player
                },
                ZX: function() {
                    return Controls
                }
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265),
                extendStatics = function(te, ti) {
                    return (extendStatics = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(te, ti) {
                        te.__proto__ = ti
                    } || function(te, ti) {
                        for (var ts in ti) Object.prototype.hasOwnProperty.call(ti, ts) && (te[ts] = ti[ts])
                    })(te, ti)
                };

            function __extends(te, ti) {
                if ("function" != typeof ti && null !== ti) throw TypeError("Class extends value " + String(ti) + " is not a constructor or null");

                function ts() {
                    this.constructor = te
                }
                extendStatics(te, ti), te.prototype = null === ti ? Object.create(ti) : (ts.prototype = ti.prototype, new ts)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(te) {
                    for (var ti, ts = 1, tr = arguments.length; ts < tr; ts++)
                        for (var tn in ti = arguments[ts]) Object.prototype.hasOwnProperty.call(ti, tn) && (te[tn] = ti[tn]);
                    return te
                }).apply(this, arguments)
            };

            function __rest(te, ti) {
                var ts = {};
                for (var tr in te) Object.prototype.hasOwnProperty.call(te, tr) && 0 > ti.indexOf(tr) && (ts[tr] = te[tr]);
                if (null != te && "function" == typeof Object.getOwnPropertySymbols) {
                    var tn = 0;
                    for (tr = Object.getOwnPropertySymbols(te); tn < tr.length; tn++) 0 > ti.indexOf(tr[tn]) && Object.prototype.propertyIsEnumerable.call(te, tr[tn]) && (ts[tr[tn]] = te[tr[tn]])
                }
                return ts
            }

            function __decorate(te, ti, ts, tr) {
                var tn, ta = arguments.length,
                    to = ta < 3 ? ti : null === tr ? tr = Object.getOwnPropertyDescriptor(ti, ts) : tr;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) to = Reflect.decorate(te, ti, ts, tr);
                else
                    for (var th = te.length - 1; th >= 0; th--)(tn = te[th]) && (to = (ta < 3 ? tn(to) : ta > 3 ? tn(ti, ts, to) : tn(ti, ts)) || to);
                return ta > 3 && to && Object.defineProperty(ti, ts, to), to
            }

            function __param(te, ti) {
                return function(ts, tr) {
                    ti(ts, tr, te)
                }
            }

            function __metadata(te, ti) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(te, ti)
            }

            function __awaiter(te, ti, ts, tr) {
                return new(ts || (ts = Promise))(function(tn, ta) {
                    function to(te) {
                        try {
                            tl(tr.next(te))
                        } catch (te) {
                            ta(te)
                        }
                    }

                    function th(te) {
                        try {
                            tl(tr.throw(te))
                        } catch (te) {
                            ta(te)
                        }
                    }

                    function tl(te) {
                        var ti;
                        te.done ? tn(te.value) : ((ti = te.value) instanceof ts ? ti : new ts(function(te) {
                            te(ti)
                        })).then(to, th)
                    }
                    tl((tr = tr.apply(te, ti || [])).next())
                })
            }

            function __generator(te, ti) {
                var ts, tr, tn, ta, to = {
                    label: 0,
                    sent: function() {
                        if (1 & tn[0]) throw tn[1];
                        return tn[1]
                    },
                    trys: [],
                    ops: []
                };
                return ta = {
                    next: th(0),
                    throw: th(1),
                    return: th(2)
                }, "function" == typeof Symbol && (ta[Symbol.iterator] = function() {
                    return this
                }), ta;

                function th(ta) {
                    return function(th) {
                        return function(ta) {
                            if (ts) throw TypeError("Generator is already executing.");
                            for (; to;) try {
                                if (ts = 1, tr && (tn = 2 & ta[0] ? tr.return : ta[0] ? tr.throw || ((tn = tr.return) && tn.call(tr), 0) : tr.next) && !(tn = tn.call(tr, ta[1])).done) return tn;
                                switch (tr = 0, tn && (ta = [2 & ta[0], tn.value]), ta[0]) {
                                    case 0:
                                    case 1:
                                        tn = ta;
                                        break;
                                    case 4:
                                        return to.label++, {
                                            value: ta[1],
                                            done: !1
                                        };
                                    case 5:
                                        to.label++, tr = ta[1], ta = [0];
                                        continue;
                                    case 7:
                                        ta = to.ops.pop(), to.trys.pop();
                                        continue;
                                    default:
                                        if (!(tn = (tn = to.trys).length > 0 && tn[tn.length - 1]) && (6 === ta[0] || 2 === ta[0])) {
                                            to = 0;
                                            continue
                                        }
                                        if (3 === ta[0] && (!tn || ta[1] > tn[0] && ta[1] < tn[3])) {
                                            to.label = ta[1];
                                            break
                                        }
                                        if (6 === ta[0] && to.label < tn[1]) {
                                            to.label = tn[1], tn = ta;
                                            break
                                        }
                                        if (tn && to.label < tn[2]) {
                                            to.label = tn[2], to.ops.push(ta);
                                            break
                                        }
                                        tn[2] && to.ops.pop(), to.trys.pop();
                                        continue
                                }
                                ta = ti.call(te, to)
                            } catch (te) {
                                ta = [6, te], tr = 0
                            } finally {
                                ts = tn = 0
                            }
                            if (5 & ta[0]) throw ta[1];
                            return {
                                value: ta[0] ? ta[1] : void 0,
                                done: !0
                            }
                        }([ta, th])
                    }
                }
            }
            var __createBinding = Object.create ? function(te, ti, ts, tr) {
                void 0 === tr && (tr = ts), Object.defineProperty(te, tr, {
                    enumerable: !0,
                    get: function() {
                        return ti[ts]
                    }
                })
            } : function(te, ti, ts, tr) {
                void 0 === tr && (tr = ts), te[tr] = ti[ts]
            };

            function __exportStar(te, ti) {
                for (var ts in te) "default" === ts || Object.prototype.hasOwnProperty.call(ti, ts) || __createBinding(ti, te, ts)
            }

            function __values(te) {
                var ti = "function" == typeof Symbol && Symbol.iterator,
                    ts = ti && te[ti],
                    tr = 0;
                if (ts) return ts.call(te);
                if (te && "number" == typeof te.length) return {
                    next: function() {
                        return te && tr >= te.length && (te = void 0), {
                            value: te && te[tr++],
                            done: !te
                        }
                    }
                };
                throw TypeError(ti ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(te, ti) {
                var ts = "function" == typeof Symbol && te[Symbol.iterator];
                if (!ts) return te;
                var tr, tn, ta = ts.call(te),
                    to = [];
                try {
                    for (;
                        (void 0 === ti || ti-- > 0) && !(tr = ta.next()).done;) to.push(tr.value)
                } catch (te) {
                    tn = {
                        error: te
                    }
                } finally {
                    try {
                        tr && !tr.done && (ts = ta.return) && ts.call(ta)
                    } finally {
                        if (tn) throw tn.error
                    }
                }
                return to
            }

            function __spread() {
                for (var te = [], ti = 0; ti < arguments.length; ti++) te = te.concat(__read(arguments[ti]));
                return te
            }

            function __spreadArrays() {
                for (var te = 0, ti = 0, ts = arguments.length; ti < ts; ti++) te += arguments[ti].length;
                var tr = Array(te),
                    tn = 0;
                for (ti = 0; ti < ts; ti++)
                    for (var ta = arguments[ti], to = 0, th = ta.length; to < th; to++, tn++) tr[tn] = ta[to];
                return tr
            }

            function __spreadArray(te, ti, ts) {
                if (ts || 2 == arguments.length)
                    for (var tr, tn = 0, ta = ti.length; tn < ta; tn++) !tr && tn in ti || (tr || (tr = Array.prototype.slice.call(ti, 0, tn)), tr[tn] = ti[tn]);
                return te.concat(tr || Array.prototype.slice.call(ti))
            }

            function __await(te) {
                return this instanceof __await ? (this.v = te, this) : new __await(te)
            }

            function __asyncGenerator(te, ti, ts) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var tr, tn = ts.apply(te, ti || []),
                    ta = [];
                return tr = {}, to("next"), to("throw"), to("return"), tr[Symbol.asyncIterator] = function() {
                    return this
                }, tr;

                function to(te) {
                    tn[te] && (tr[te] = function(ti) {
                        return new Promise(function(ts, tr) {
                            ta.push([te, ti, ts, tr]) > 1 || th(te, ti)
                        })
                    })
                }

                function th(te, ti) {
                    var ts;
                    try {
                        (ts = tn[te](ti)).value instanceof __await ? Promise.resolve(ts.value.v).then(tl, tp) : tf(ta[0][2], ts)
                    } catch (te) {
                        tf(ta[0][3], te)
                    }
                }

                function tl(te) {
                    th("next", te)
                }

                function tp(te) {
                    th("throw", te)
                }

                function tf(te, ti) {
                    te(ti), ta.shift(), ta.length && th(ta[0][0], ta[0][1])
                }
            }

            function __asyncDelegator(te) {
                var ti, ts;
                return ti = {}, tr("next"), tr("throw", function(te) {
                    throw te
                }), tr("return"), ti[Symbol.iterator] = function() {
                    return this
                }, ti;

                function tr(tr, tn) {
                    ti[tr] = te[tr] ? function(ti) {
                        return (ts = !ts) ? {
                            value: __await(te[tr](ti)),
                            done: "return" === tr
                        } : tn ? tn(ti) : ti
                    } : tn
                }
            }

            function __asyncValues(te) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var ti, ts = te[Symbol.asyncIterator];
                return ts ? ts.call(te) : (te = __values(te), ti = {}, tr("next"), tr("throw"), tr("return"), ti[Symbol.asyncIterator] = function() {
                    return this
                }, ti);

                function tr(ts) {
                    ti[ts] = te[ts] && function(ti) {
                        return new Promise(function(tr, tn) {
                            ! function(te, ti, ts, tr) {
                                Promise.resolve(tr).then(function(ti) {
                                    te({
                                        value: ti,
                                        done: ts
                                    })
                                }, ti)
                            }(tr, tn, (ti = te[ts](ti)).done, ti.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(te, ti) {
                return Object.defineProperty ? Object.defineProperty(te, "raw", {
                    value: ti
                }) : te.raw = ti, te
            }
            var __setModuleDefault = Object.create ? function(te, ti) {
                Object.defineProperty(te, "default", {
                    enumerable: !0,
                    value: ti
                })
            } : function(te, ti) {
                te.default = ti
            };

            function __importStar(te) {
                if (te && te.__esModule) return te;
                var ti = {};
                if (null != te)
                    for (var ts in te) "default" !== ts && Object.prototype.hasOwnProperty.call(te, ts) && __createBinding(ti, te, ts);
                return __setModuleDefault(ti, te), ti
            }

            function __importDefault(te) {
                return te && te.__esModule ? te : {
                    default: te
                }
            }

            function __classPrivateFieldGet(te, ti, ts, tr) {
                if ("a" === ts && !tr) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof ti ? te !== ti || !tr : !ti.has(te)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === ts ? tr : "a" === ts ? tr.call(te) : tr ? tr.value : ti.get(te)
            }

            function __classPrivateFieldSet(te, ti, ts, tr, tn) {
                if ("m" === tr) throw TypeError("Private method is not writable");
                if ("a" === tr && !tn) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof ti ? te !== ti || !tn : !ti.has(te)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === tr ? tn.call(te, ts) : tn ? tn.value = ts : ti.set(te, ts), ts
            }
            var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {};

            function unwrapExports(te) {
                return te && te.__esModule && Object.prototype.hasOwnProperty.call(te, "default") ? te.default : te
            }

            function createCommonjsModule(te, ti) {
                return te(ti = {
                    exports: {}
                }, ti.exports), ti.exports
            }

            function getCjsExportFromNamespace(te) {
                return te && te.default || te
            }

            function commonjsRequire() {
                throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }
            var PlayerState, PlayerEvent, lottie = createCommonjsModule(function(module, exports) {
                    "undefined" != typeof navigator && function(te, ti) {
                        module.exports = ti()
                    }(0, function() {
                        var svgNS = "http://www.w3.org/2000/svg",
                            locationHref = "",
                            _useWebWorker = !1,
                            initialDefaultFrame = -999999,
                            setWebWorker = function(te) {
                                _useWebWorker = !!te
                            },
                            getWebWorker = function() {
                                return _useWebWorker
                            },
                            setLocationHref = function(te) {
                                locationHref = te
                            },
                            getLocationHref = function() {
                                return locationHref
                            };

                        function createTag(te) {
                            return document.createElement(te)
                        }

                        function extendPrototype(te, ti) {
                            var ts, tr, tn = te.length;
                            for (ts = 0; ts < tn; ts += 1)
                                for (var ta in tr = te[ts].prototype) Object.prototype.hasOwnProperty.call(tr, ta) && (ti.prototype[ta] = tr[ta])
                        }

                        function getDescriptor(te, ti) {
                            return Object.getOwnPropertyDescriptor(te, ti)
                        }

                        function createProxyFunction(te) {
                            function ti() {}
                            return ti.prototype = te, ti
                        }
                        var audioControllerFactory = function() {
                                function te(te) {
                                    this.audios = [], this.audioFactory = te, this._volume = 1, this._isMuted = !1
                                }
                                return te.prototype = {
                                        addAudio: function(te) {
                                            this.audios.push(te)
                                        },
                                        pause: function() {
                                            var te, ti = this.audios.length;
                                            for (te = 0; te < ti; te += 1) this.audios[te].pause()
                                        },
                                        resume: function() {
                                            var te, ti = this.audios.length;
                                            for (te = 0; te < ti; te += 1) this.audios[te].resume()
                                        },
                                        setRate: function(te) {
                                            var ti, ts = this.audios.length;
                                            for (ti = 0; ti < ts; ti += 1) this.audios[ti].setRate(te)
                                        },
                                        createAudio: function(te) {
                                            return this.audioFactory ? this.audioFactory(te) : window.Howl ? new window.Howl({
                                                src: [te]
                                            }) : {
                                                isPlaying: !1,
                                                play: function() {
                                                    this.isPlaying = !0
                                                },
                                                seek: function() {
                                                    this.isPlaying = !1
                                                },
                                                playing: function() {},
                                                rate: function() {},
                                                setVolume: function() {}
                                            }
                                        },
                                        setAudioFactory: function(te) {
                                            this.audioFactory = te
                                        },
                                        setVolume: function(te) {
                                            this._volume = te, this._updateVolume()
                                        },
                                        mute: function() {
                                            this._isMuted = !0, this._updateVolume()
                                        },
                                        unmute: function() {
                                            this._isMuted = !1, this._updateVolume()
                                        },
                                        getVolume: function() {
                                            return this._volume
                                        },
                                        _updateVolume: function() {
                                            var te, ti = this.audios.length;
                                            for (te = 0; te < ti; te += 1) this.audios[te].volume(this._volume * (this._isMuted ? 0 : 1))
                                        }
                                    },
                                    function() {
                                        return new te
                                    }
                            }(),
                            createTypedArray = function() {
                                function te(te, ti) {
                                    var ts, tr = 0,
                                        tn = [];
                                    switch (te) {
                                        case "int16":
                                        case "uint8c":
                                            ts = 1;
                                            break;
                                        default:
                                            ts = 1.1
                                    }
                                    for (tr = 0; tr < ti; tr += 1) tn.push(ts);
                                    return tn
                                }
                                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(ti, ts) {
                                    return "float32" === ti ? new Float32Array(ts) : "int16" === ti ? new Int16Array(ts) : "uint8c" === ti ? new Uint8ClampedArray(ts) : te(ti, ts)
                                } : te
                            }();

                        function createSizedArray(te) {
                            return Array.apply(null, {
                                length: te
                            })
                        }

                        function _typeof$6(te) {
                            return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }
                        var subframeEnabled = !0,
                            expressionsPlugin = null,
                            expressionsInterfaces = null,
                            idPrefix$1 = "",
                            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                            _shouldRoundValues = !1,
                            bmPow = Math.pow,
                            bmSqrt = Math.sqrt,
                            bmFloor = Math.floor,
                            bmMax = Math.max,
                            bmMin = Math.min,
                            BMMath = {};

                        function ProjectInterface$1() {
                            return {}
                        }! function() {
                            var te, ti = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                                ts = ti.length;
                            for (te = 0; te < ts; te += 1) BMMath[ti[te]] = Math[ti[te]]
                        }(), BMMath.random = Math.random, BMMath.abs = function(te) {
                            if ("object" === _typeof$6(te) && te.length) {
                                var ti, ts = createSizedArray(te.length),
                                    tr = te.length;
                                for (ti = 0; ti < tr; ti += 1) ts[ti] = Math.abs(te[ti]);
                                return ts
                            }
                            return Math.abs(te)
                        };
                        var defaultCurveSegments = 150,
                            degToRads = Math.PI / 180,
                            roundCorner = .5519;

                        function roundValues(te) {
                            _shouldRoundValues = !!te
                        }

                        function bmRnd(te) {
                            return _shouldRoundValues ? Math.round(te) : te
                        }

                        function styleDiv(te) {
                            te.style.position = "absolute", te.style.top = 0, te.style.left = 0, te.style.display = "block", te.style.transformOrigin = "0 0", te.style.webkitTransformOrigin = "0 0", te.style.backfaceVisibility = "visible", te.style.webkitBackfaceVisibility = "visible", te.style.transformStyle = "preserve-3d", te.style.webkitTransformStyle = "preserve-3d", te.style.mozTransformStyle = "preserve-3d"
                        }

                        function BMEnterFrameEvent(te, ti, ts, tr) {
                            this.type = te, this.currentTime = ti, this.totalTime = ts, this.direction = tr < 0 ? -1 : 1
                        }

                        function BMCompleteEvent(te, ti) {
                            this.type = te, this.direction = ti < 0 ? -1 : 1
                        }

                        function BMCompleteLoopEvent(te, ti, ts, tr) {
                            this.type = te, this.currentLoop = ts, this.totalLoops = ti, this.direction = tr < 0 ? -1 : 1
                        }

                        function BMSegmentStartEvent(te, ti, ts) {
                            this.type = te, this.firstFrame = ti, this.totalFrames = ts
                        }

                        function BMDestroyEvent(te, ti) {
                            this.type = te, this.target = ti
                        }

                        function BMRenderFrameErrorEvent(te, ti) {
                            this.type = "renderFrameError", this.nativeError = te, this.currentTime = ti
                        }

                        function BMConfigErrorEvent(te) {
                            this.type = "configError", this.nativeError = te
                        }

                        function BMAnimationConfigErrorEvent(te, ti) {
                            this.type = te, this.nativeError = ti
                        }
                        var _count, createElementID = (_count = 0, function() {
                            return idPrefix$1 + "__lottie_element_" + (_count += 1)
                        });

                        function HSVtoRGB(te, ti, ts) {
                            var tr, tn, ta, to, th, tl, tp, tf;
                            switch (tl = ts * (1 - ti), tp = ts * (1 - (th = 6 * te - (to = Math.floor(6 * te))) * ti), tf = ts * (1 - (1 - th) * ti), to % 6) {
                                case 0:
                                    tr = ts, tn = tf, ta = tl;
                                    break;
                                case 1:
                                    tr = tp, tn = ts, ta = tl;
                                    break;
                                case 2:
                                    tr = tl, tn = ts, ta = tf;
                                    break;
                                case 3:
                                    tr = tl, tn = tp, ta = ts;
                                    break;
                                case 4:
                                    tr = tf, tn = tl, ta = ts;
                                    break;
                                case 5:
                                    tr = ts, tn = tl, ta = tp
                            }
                            return [tr, tn, ta]
                        }

                        function RGBtoHSV(te, ti, ts) {
                            var tr, tn = Math.max(te, ti, ts),
                                ta = Math.min(te, ti, ts),
                                to = tn - ta,
                                th = 0 === tn ? 0 : to / tn,
                                tl = tn / 255;
                            switch (tn) {
                                case ta:
                                    tr = 0;
                                    break;
                                case te:
                                    tr = (ti - ts + to * (ti < ts ? 6 : 0)) / (6 * to);
                                    break;
                                case ti:
                                    tr = (ts - te + 2 * to) / (6 * to);
                                    break;
                                case ts:
                                    tr = (te - ti + 4 * to) / (6 * to)
                            }
                            return [tr, th, tl]
                        }

                        function addSaturationToRGB(te, ti) {
                            var ts = RGBtoHSV(255 * te[0], 255 * te[1], 255 * te[2]);
                            return ts[1] += ti, ts[1] > 1 ? ts[1] = 1 : ts[1] <= 0 && (ts[1] = 0), HSVtoRGB(ts[0], ts[1], ts[2])
                        }

                        function addBrightnessToRGB(te, ti) {
                            var ts = RGBtoHSV(255 * te[0], 255 * te[1], 255 * te[2]);
                            return ts[2] += ti, ts[2] > 1 ? ts[2] = 1 : ts[2] < 0 && (ts[2] = 0), HSVtoRGB(ts[0], ts[1], ts[2])
                        }

                        function addHueToRGB(te, ti) {
                            var ts = RGBtoHSV(255 * te[0], 255 * te[1], 255 * te[2]);
                            return ts[0] += ti / 360, ts[0] > 1 ? ts[0] -= 1 : ts[0] < 0 && (ts[0] += 1), HSVtoRGB(ts[0], ts[1], ts[2])
                        }
                        var rgbToHex = function() {
                                var te, ti, ts = [];
                                for (te = 0; te < 256; te += 1) ti = te.toString(16), ts[te] = 1 === ti.length ? "0" + ti : ti;
                                return function(te, ti, tr) {
                                    return te < 0 && (te = 0), ti < 0 && (ti = 0), tr < 0 && (tr = 0), "#" + ts[te] + ts[ti] + ts[tr]
                                }
                            }(),
                            setSubframeEnabled = function(te) {
                                subframeEnabled = !!te
                            },
                            getSubframeEnabled = function() {
                                return subframeEnabled
                            },
                            setExpressionsPlugin = function(te) {
                                expressionsPlugin = te
                            },
                            getExpressionsPlugin = function() {
                                return expressionsPlugin
                            },
                            setExpressionInterfaces = function(te) {
                                expressionsInterfaces = te
                            },
                            getExpressionInterfaces = function() {
                                return expressionsInterfaces
                            },
                            setDefaultCurveSegments = function(te) {
                                defaultCurveSegments = te
                            },
                            getDefaultCurveSegments = function() {
                                return defaultCurveSegments
                            },
                            setIdPrefix = function(te) {
                                idPrefix$1 = te
                            },
                            getIdPrefix = function() {
                                return idPrefix$1
                            };

                        function createNS(te) {
                            return document.createElementNS(svgNS, te)
                        }

                        function _typeof$5(te) {
                            return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }
                        var dataManager = function() {
                                var te, ti, ts = 1,
                                    tr = [],
                                    tn = {
                                        onmessage: function() {},
                                        postMessage: function(ti) {
                                            te({
                                                data: ti
                                            })
                                        }
                                    },
                                    ta = {
                                        postMessage: function(te) {
                                            tn.onmessage({
                                                data: te
                                            })
                                        }
                                    };

                                function to() {
                                    ti || ((ti = function(ti) {
                                        if (window.Worker && window.Blob && getWebWorker()) {
                                            var ts = new Blob(["var _workerSelf = self; self.onmessage = ", ti.toString()], {
                                                    type: "text/javascript"
                                                }),
                                                tr = URL.createObjectURL(ts);
                                            return new Worker(tr)
                                        }
                                        return te = ti, tn
                                    }(function(te) {
                                        if (ta.dataManager || (ta.dataManager = function() {
                                                function te(tn, ta) {
                                                    var to, th, tl, tp, tf, tu, tm = tn.length;
                                                    for (th = 0; th < tm; th += 1)
                                                        if ("ks" in (to = tn[th]) && !to.completed) {
                                                            if (to.completed = !0, to.hasMask) {
                                                                var td = to.masksProperties;
                                                                for (tp = td.length, tl = 0; tl < tp; tl += 1)
                                                                    if (td[tl].pt.k.i) tr(td[tl].pt.k);
                                                                    else
                                                                        for (tu = td[tl].pt.k.length, tf = 0; tf < tu; tf += 1) td[tl].pt.k[tf].s && tr(td[tl].pt.k[tf].s[0]), td[tl].pt.k[tf].e && tr(td[tl].pt.k[tf].e[0])
                                                            }
                                                            0 === to.ty ? (to.layers = ti(to.refId, ta), te(to.layers, ta)) : 4 === to.ty ? ts(to.shapes) : 5 === to.ty && tc(to)
                                                        }
                                                }

                                                function ti(te, ti) {
                                                    var ts = function(te, ti) {
                                                        for (var ts = 0, tr = ti.length; ts < tr;) {
                                                            if (ti[ts].id === te) return ti[ts];
                                                            ts += 1
                                                        }
                                                        return null
                                                    }(te, ti);
                                                    return ts ? ts.layers.__used ? JSON.parse(JSON.stringify(ts.layers)) : (ts.layers.__used = !0, ts.layers) : null
                                                }

                                                function ts(te) {
                                                    var ti, tn, ta;
                                                    for (ti = te.length - 1; ti >= 0; ti -= 1)
                                                        if ("sh" === te[ti].ty) {
                                                            if (te[ti].ks.k.i) tr(te[ti].ks.k);
                                                            else
                                                                for (ta = te[ti].ks.k.length, tn = 0; tn < ta; tn += 1) te[ti].ks.k[tn].s && tr(te[ti].ks.k[tn].s[0]), te[ti].ks.k[tn].e && tr(te[ti].ks.k[tn].e[0])
                                                        } else "gr" === te[ti].ty && ts(te[ti].it)
                                                }

                                                function tr(te) {
                                                    var ti, ts = te.i.length;
                                                    for (ti = 0; ti < ts; ti += 1) te.i[ti][0] += te.v[ti][0], te.i[ti][1] += te.v[ti][1], te.o[ti][0] += te.v[ti][0], te.o[ti][1] += te.v[ti][1]
                                                }

                                                function tn(te, ti) {
                                                    var ts = ti ? ti.split(".") : [100, 100, 100];
                                                    return te[0] > ts[0] || !(ts[0] > te[0]) && (te[1] > ts[1] || !(ts[1] > te[1]) && (te[2] > ts[2] || !(ts[2] > te[2]) && null))
                                                }
                                                var ta, to = function() {
                                                        var te = [4, 4, 14];

                                                        function ti(te) {
                                                            var ti, ts, tr, tn = te.length;
                                                            for (ti = 0; ti < tn; ti += 1) 5 === te[ti].ty && (ts = te[ti], tr = void 0, tr = ts.t.d, ts.t.d = {
                                                                k: [{
                                                                    s: tr,
                                                                    t: 0
                                                                }]
                                                            })
                                                        }
                                                        return function(ts) {
                                                            if (tn(te, ts.v) && (ti(ts.layers), ts.assets)) {
                                                                var tr, ta = ts.assets.length;
                                                                for (tr = 0; tr < ta; tr += 1) ts.assets[tr].layers && ti(ts.assets[tr].layers)
                                                            }
                                                        }
                                                    }(),
                                                    th = (ta = [4, 7, 99], function(te) {
                                                        if (te.chars && !tn(ta, te.v)) {
                                                            var ti, tr = te.chars.length;
                                                            for (ti = 0; ti < tr; ti += 1) {
                                                                var to = te.chars[ti];
                                                                to.data && to.data.shapes && (ts(to.data.shapes), to.data.ip = 0, to.data.op = 99999, to.data.st = 0, to.data.sr = 1, to.data.ks = {
                                                                    p: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    s: {
                                                                        k: [100, 100],
                                                                        a: 0
                                                                    },
                                                                    a: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    r: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    o: {
                                                                        k: 100,
                                                                        a: 0
                                                                    }
                                                                }, te.chars[ti].t || (to.data.shapes.push({
                                                                    ty: "no"
                                                                }), to.data.shapes[0].it.push({
                                                                    p: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    s: {
                                                                        k: [100, 100],
                                                                        a: 0
                                                                    },
                                                                    a: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    r: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    o: {
                                                                        k: 100,
                                                                        a: 0
                                                                    },
                                                                    sk: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    sa: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    ty: "tr"
                                                                })))
                                                            }
                                                        }
                                                    }),
                                                    tl = function() {
                                                        var te = [5, 7, 15];

                                                        function ti(te) {
                                                            var ti, ts, tr, tn = te.length;
                                                            for (ti = 0; ti < tn; ti += 1) 5 === te[ti].ty && (ts = te[ti], tr = void 0, "number" == typeof(tr = ts.t.p).a && (tr.a = {
                                                                a: 0,
                                                                k: tr.a
                                                            }), "number" == typeof tr.p && (tr.p = {
                                                                a: 0,
                                                                k: tr.p
                                                            }), "number" == typeof tr.r && (tr.r = {
                                                                a: 0,
                                                                k: tr.r
                                                            }))
                                                        }
                                                        return function(ts) {
                                                            if (tn(te, ts.v) && (ti(ts.layers), ts.assets)) {
                                                                var tr, ta = ts.assets.length;
                                                                for (tr = 0; tr < ta; tr += 1) ts.assets[tr].layers && ti(ts.assets[tr].layers)
                                                            }
                                                        }
                                                    }(),
                                                    tp = function() {
                                                        var te = [4, 1, 9];

                                                        function ti(te) {
                                                            var ts, tr, tn, ta = te.length;
                                                            for (ts = 0; ts < ta; ts += 1)
                                                                if ("gr" === te[ts].ty) ti(te[ts].it);
                                                                else if ("fl" === te[ts].ty || "st" === te[ts].ty) {
                                                                if (te[ts].c.k && te[ts].c.k[0].i)
                                                                    for (tn = te[ts].c.k.length, tr = 0; tr < tn; tr += 1) te[ts].c.k[tr].s && (te[ts].c.k[tr].s[0] /= 255, te[ts].c.k[tr].s[1] /= 255, te[ts].c.k[tr].s[2] /= 255, te[ts].c.k[tr].s[3] /= 255), te[ts].c.k[tr].e && (te[ts].c.k[tr].e[0] /= 255, te[ts].c.k[tr].e[1] /= 255, te[ts].c.k[tr].e[2] /= 255, te[ts].c.k[tr].e[3] /= 255);
                                                                else te[ts].c.k[0] /= 255, te[ts].c.k[1] /= 255, te[ts].c.k[2] /= 255, te[ts].c.k[3] /= 255
                                                            }
                                                        }

                                                        function ts(te) {
                                                            var ts, tr = te.length;
                                                            for (ts = 0; ts < tr; ts += 1) 4 === te[ts].ty && ti(te[ts].shapes)
                                                        }
                                                        return function(ti) {
                                                            if (tn(te, ti.v) && (ts(ti.layers), ti.assets)) {
                                                                var tr, ta = ti.assets.length;
                                                                for (tr = 0; tr < ta; tr += 1) ti.assets[tr].layers && ts(ti.assets[tr].layers)
                                                            }
                                                        }
                                                    }(),
                                                    tf = function() {
                                                        var te = [4, 4, 18];

                                                        function ti(te) {
                                                            var ts, tr, tn;
                                                            for (ts = te.length - 1; ts >= 0; ts -= 1)
                                                                if ("sh" === te[ts].ty) {
                                                                    if (te[ts].ks.k.i) te[ts].ks.k.c = te[ts].closed;
                                                                    else
                                                                        for (tn = te[ts].ks.k.length, tr = 0; tr < tn; tr += 1) te[ts].ks.k[tr].s && (te[ts].ks.k[tr].s[0].c = te[ts].closed), te[ts].ks.k[tr].e && (te[ts].ks.k[tr].e[0].c = te[ts].closed)
                                                                } else "gr" === te[ts].ty && ti(te[ts].it)
                                                        }

                                                        function ts(te) {
                                                            var ts, tr, tn, ta, to, th, tl = te.length;
                                                            for (tr = 0; tr < tl; tr += 1) {
                                                                if ((ts = te[tr]).hasMask) {
                                                                    var tp = ts.masksProperties;
                                                                    for (ta = tp.length, tn = 0; tn < ta; tn += 1)
                                                                        if (tp[tn].pt.k.i) tp[tn].pt.k.c = tp[tn].cl;
                                                                        else
                                                                            for (th = tp[tn].pt.k.length, to = 0; to < th; to += 1) tp[tn].pt.k[to].s && (tp[tn].pt.k[to].s[0].c = tp[tn].cl), tp[tn].pt.k[to].e && (tp[tn].pt.k[to].e[0].c = tp[tn].cl)
                                                                }
                                                                4 === ts.ty && ti(ts.shapes)
                                                            }
                                                        }
                                                        return function(ti) {
                                                            if (tn(te, ti.v) && (ts(ti.layers), ti.assets)) {
                                                                var tr, ta = ti.assets.length;
                                                                for (tr = 0; tr < ta; tr += 1) ti.assets[tr].layers && ts(ti.assets[tr].layers)
                                                            }
                                                        }
                                                    }();

                                                function tc(te) {
                                                    0 === te.t.a.length && te.t.p
                                                }
                                                var tu = {
                                                    completeData: function(ts) {
                                                        ts.__complete || (tp(ts), to(ts), th(ts), tl(ts), tf(ts), te(ts.layers, ts.assets), function(ts, tr) {
                                                            if (ts) {
                                                                var tn = 0,
                                                                    ta = ts.length;
                                                                for (tn = 0; tn < ta; tn += 1) 1 === ts[tn].t && (ts[tn].data.layers = ti(ts[tn].data.refId, tr), te(ts[tn].data.layers, tr))
                                                            }
                                                        }(ts.chars, ts.assets), ts.__complete = !0)
                                                    }
                                                };
                                                return tu.checkColors = tp, tu.checkChars = th, tu.checkPathProperties = tl, tu.checkShapes = tf, tu.completeLayers = te, tu
                                            }()), ta.assetLoader || (ta.assetLoader = function() {
                                                function te(te) {
                                                    var ti = te.getResponseHeader("content-type");
                                                    return ti && "json" === te.responseType && -1 !== ti.indexOf("json") || te.response && "object" === _typeof$5(te.response) ? te.response : te.response && "string" == typeof te.response ? JSON.parse(te.response) : te.responseText ? JSON.parse(te.responseText) : null
                                                }
                                                return {
                                                    load: function(ti, ts, tr, tn) {
                                                        var ta, to = new XMLHttpRequest;
                                                        try {
                                                            to.responseType = "json"
                                                        } catch (te) {}
                                                        to.onreadystatechange = function() {
                                                            if (4 === to.readyState) {
                                                                if (200 === to.status) tr(ta = te(to));
                                                                else try {
                                                                    ta = te(to), tr(ta)
                                                                } catch (te) {
                                                                    tn && tn(te)
                                                                }
                                                            }
                                                        };
                                                        try {
                                                            to.open("GET", ti, !0)
                                                        } catch (te) {
                                                            to.open("GET", ts + "/" + ti, !0)
                                                        }
                                                        to.send()
                                                    }
                                                }
                                            }()), "loadAnimation" === te.data.type) ta.assetLoader.load(te.data.path, te.data.fullPath, function(ti) {
                                            ta.dataManager.completeData(ti), ta.postMessage({
                                                id: te.data.id,
                                                payload: ti,
                                                status: "success"
                                            })
                                        }, function() {
                                            ta.postMessage({
                                                id: te.data.id,
                                                status: "error"
                                            })
                                        });
                                        else if ("complete" === te.data.type) {
                                            var ti = te.data.animation;
                                            ta.dataManager.completeData(ti), ta.postMessage({
                                                id: te.data.id,
                                                payload: ti,
                                                status: "success"
                                            })
                                        } else "loadData" === te.data.type && ta.assetLoader.load(te.data.path, te.data.fullPath, function(ti) {
                                            ta.postMessage({
                                                id: te.data.id,
                                                payload: ti,
                                                status: "success"
                                            })
                                        }, function() {
                                            ta.postMessage({
                                                id: te.data.id,
                                                status: "error"
                                            })
                                        })
                                    })).onmessage = function(te) {
                                        var ti = te.data,
                                            ts = ti.id,
                                            tn = tr[ts];
                                        tr[ts] = null, "success" === ti.status ? tn.onComplete(ti.payload) : tn.onError && tn.onError()
                                    })
                                }

                                function th(te, ti) {
                                    var tn = "processId_" + (ts += 1);
                                    return tr[tn] = {
                                        onComplete: te,
                                        onError: ti
                                    }, tn
                                }
                                return {
                                    loadAnimation: function(te, ts, tr) {
                                        to();
                                        var tn = th(ts, tr);
                                        ti.postMessage({
                                            type: "loadAnimation",
                                            path: te,
                                            fullPath: window.location.origin + window.location.pathname,
                                            id: tn
                                        })
                                    },
                                    loadData: function(te, ts, tr) {
                                        to();
                                        var tn = th(ts, tr);
                                        ti.postMessage({
                                            type: "loadData",
                                            path: te,
                                            fullPath: window.location.origin + window.location.pathname,
                                            id: tn
                                        })
                                    },
                                    completeAnimation: function(te, ts, tr) {
                                        to();
                                        var tn = th(ts, tr);
                                        ti.postMessage({
                                            type: "complete",
                                            animation: te,
                                            id: tn
                                        })
                                    }
                                }
                            }(),
                            ImagePreloader = function() {
                                var te = function() {
                                    var te = createTag("canvas");
                                    te.width = 1, te.height = 1;
                                    var ti = te.getContext("2d");
                                    return ti.fillStyle = "rgba(0,0,0,0)", ti.fillRect(0, 0, 1, 1), te
                                }();

                                function ti() {
                                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                                }

                                function ts() {
                                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                                }

                                function tr(te, ti, ts) {
                                    var tr = "";
                                    if (te.e) tr = te.p;
                                    else if (ti) {
                                        var tn = te.p; - 1 !== tn.indexOf("images/") && (tn = tn.split("/")[1]), tr = ti + tn
                                    } else tr = ts + (te.u ? te.u : "") + te.p;
                                    return tr
                                }

                                function tn(te) {
                                    var ti = 0,
                                        ts = setInterval((function() {
                                            (te.getBBox().width || ti > 500) && (this._imageLoaded(), clearInterval(ts)), ti += 1
                                        }).bind(this), 50)
                                }

                                function ta(te) {
                                    var ti = {
                                            assetData: te
                                        },
                                        ts = tr(te, this.assetsPath, this.path);
                                    return dataManager.loadData(ts, (function(te) {
                                        ti.img = te, this._footageLoaded()
                                    }).bind(this), (function() {
                                        ti.img = {}, this._footageLoaded()
                                    }).bind(this)), ti
                                }

                                function to() {
                                    this._imageLoaded = ti.bind(this), this._footageLoaded = ts.bind(this), this.testImageLoaded = tn.bind(this), this.createFootageData = ta.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                                }
                                return to.prototype = {
                                    loadAssets: function(te, ti) {
                                        this.imagesLoadedCb = ti;
                                        var ts, tr = te.length;
                                        for (ts = 0; ts < tr; ts += 1) te[ts].layers || (te[ts].t && "seq" !== te[ts].t ? 3 === te[ts].t && (this.totalFootages += 1, this.images.push(this.createFootageData(te[ts]))) : (this.totalImages += 1, this.images.push(this._createImageData(te[ts]))))
                                    },
                                    setAssetsPath: function(te) {
                                        this.assetsPath = te || ""
                                    },
                                    setPath: function(te) {
                                        this.path = te || ""
                                    },
                                    loadedImages: function() {
                                        return this.totalImages === this.loadedAssets
                                    },
                                    loadedFootages: function() {
                                        return this.totalFootages === this.loadedFootagesCount
                                    },
                                    destroy: function() {
                                        this.imagesLoadedCb = null, this.images.length = 0
                                    },
                                    getAsset: function(te) {
                                        for (var ti = 0, ts = this.images.length; ti < ts;) {
                                            if (this.images[ti].assetData === te) return this.images[ti].img;
                                            ti += 1
                                        }
                                        return null
                                    },
                                    createImgData: function(ti) {
                                        var ts = tr(ti, this.assetsPath, this.path),
                                            tn = createTag("img");
                                        tn.crossOrigin = "anonymous", tn.addEventListener("load", this._imageLoaded, !1), tn.addEventListener("error", (function() {
                                            ta.img = te, this._imageLoaded()
                                        }).bind(this), !1), tn.src = ts;
                                        var ta = {
                                            img: tn,
                                            assetData: ti
                                        };
                                        return ta
                                    },
                                    createImageData: function(ti) {
                                        var ts = tr(ti, this.assetsPath, this.path),
                                            tn = createNS("image");
                                        isSafari ? this.testImageLoaded(tn) : tn.addEventListener("load", this._imageLoaded, !1), tn.addEventListener("error", (function() {
                                            ta.img = te, this._imageLoaded()
                                        }).bind(this), !1), tn.setAttributeNS("http://www.w3.org/1999/xlink", "href", ts), this._elementHelper.append ? this._elementHelper.append(tn) : this._elementHelper.appendChild(tn);
                                        var ta = {
                                            img: tn,
                                            assetData: ti
                                        };
                                        return ta
                                    },
                                    imageLoaded: ti,
                                    footageLoaded: ts,
                                    setCacheType: function(te, ti) {
                                        "svg" === te ? (this._elementHelper = ti, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                                    }
                                }, to
                            }();

                        function BaseEvent() {}
                        BaseEvent.prototype = {
                            triggerEvent: function(te, ti) {
                                if (this._cbs[te])
                                    for (var ts = this._cbs[te], tr = 0; tr < ts.length; tr += 1) ts[tr](ti)
                            },
                            addEventListener: function(te, ti) {
                                return this._cbs[te] || (this._cbs[te] = []), this._cbs[te].push(ti), (function() {
                                    this.removeEventListener(te, ti)
                                }).bind(this)
                            },
                            removeEventListener: function(te, ti) {
                                if (ti) {
                                    if (this._cbs[te]) {
                                        for (var ts = 0, tr = this._cbs[te].length; ts < tr;) this._cbs[te][ts] === ti && (this._cbs[te].splice(ts, 1), ts -= 1, tr -= 1), ts += 1;
                                        this._cbs[te].length || (this._cbs[te] = null)
                                    }
                                } else this._cbs[te] = null
                            }
                        };
                        var markerParser = function() {
                                function te(te) {
                                    for (var ti, ts = te.split("\r\n"), tr = {}, tn = 0, ta = 0; ta < ts.length; ta += 1) 2 === (ti = ts[ta].split(":")).length && (tr[ti[0]] = ti[1].trim(), tn += 1);
                                    if (0 === tn) throw Error();
                                    return tr
                                }
                                return function(ti) {
                                    for (var ts = [], tr = 0; tr < ti.length; tr += 1) {
                                        var tn = ti[tr],
                                            ta = {
                                                time: tn.tm,
                                                duration: tn.dr
                                            };
                                        try {
                                            ta.payload = JSON.parse(ti[tr].cm)
                                        } catch (ts) {
                                            try {
                                                ta.payload = te(ti[tr].cm)
                                            } catch (te) {
                                                ta.payload = {
                                                    name: ti[tr].cm
                                                }
                                            }
                                        }
                                        ts.push(ta)
                                    }
                                    return ts
                                }
                            }(),
                            ProjectInterface = function() {
                                function te(te) {
                                    this.compositions.push(te)
                                }
                                return function() {
                                    function ti(te) {
                                        for (var ti = 0, ts = this.compositions.length; ti < ts;) {
                                            if (this.compositions[ti].data && this.compositions[ti].data.nm === te) return this.compositions[ti].prepareFrame && this.compositions[ti].data.xt && this.compositions[ti].prepareFrame(this.currentFrame), this.compositions[ti].compInterface;
                                            ti += 1
                                        }
                                        return null
                                    }
                                    return ti.compositions = [], ti.currentFrame = 0, ti.registerComposition = te, ti
                                }
                            }(),
                            renderers = {},
                            registerRenderer = function(te, ti) {
                                renderers[te] = ti
                            };

                        function getRenderer(te) {
                            return renderers[te]
                        }

                        function _typeof$4(te) {
                            return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }
                        var AnimationItem = function() {
                            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
                        };
                        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(te) {
                            (te.wrapper || te.container) && (this.wrapper = te.wrapper || te.container);
                            var ti = "svg";
                            te.animType ? ti = te.animType : te.renderer && (ti = te.renderer);
                            var ts = getRenderer(ti);
                            this.renderer = new ts(this, te.rendererSettings), this.imagePreloader.setCacheType(ti, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = ti, "" === te.loop || null === te.loop || void 0 === te.loop || !0 === te.loop ? this.loop = !0 : !1 === te.loop ? this.loop = !1 : this.loop = parseInt(te.loop, 10), this.autoplay = !("autoplay" in te) || te.autoplay, this.name = te.name ? te.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(te, "autoloadSegments") || te.autoloadSegments, this.assetsPath = te.assetsPath, this.initialSegment = te.initialSegment, te.audioFactory && this.audioController.setAudioFactory(te.audioFactory), te.animationData ? this.setupAnimation(te.animationData) : te.path && (-1 !== te.path.lastIndexOf("\\") ? this.path = te.path.substr(0, te.path.lastIndexOf("\\") + 1) : this.path = te.path.substr(0, te.path.lastIndexOf("/") + 1), this.fileName = te.path.substr(te.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(te.path, this.configAnimation, this.onSetupError))
                        }, AnimationItem.prototype.onSetupError = function() {
                            this.trigger("data_failed")
                        }, AnimationItem.prototype.setupAnimation = function(te) {
                            dataManager.completeAnimation(te, this.configAnimation)
                        }, AnimationItem.prototype.setData = function(te, ti) {
                            ti && "object" !== _typeof$4(ti) && (ti = JSON.parse(ti));
                            var ts = {
                                    wrapper: te,
                                    animationData: ti
                                },
                                tr = te.attributes;
                            ts.path = tr.getNamedItem("data-animation-path") ? tr.getNamedItem("data-animation-path").value : tr.getNamedItem("data-bm-path") ? tr.getNamedItem("data-bm-path").value : tr.getNamedItem("bm-path") ? tr.getNamedItem("bm-path").value : "", ts.animType = tr.getNamedItem("data-anim-type") ? tr.getNamedItem("data-anim-type").value : tr.getNamedItem("data-bm-type") ? tr.getNamedItem("data-bm-type").value : tr.getNamedItem("bm-type") ? tr.getNamedItem("bm-type").value : tr.getNamedItem("data-bm-renderer") ? tr.getNamedItem("data-bm-renderer").value : tr.getNamedItem("bm-renderer") ? tr.getNamedItem("bm-renderer").value : "canvas";
                            var tn = tr.getNamedItem("data-anim-loop") ? tr.getNamedItem("data-anim-loop").value : tr.getNamedItem("data-bm-loop") ? tr.getNamedItem("data-bm-loop").value : tr.getNamedItem("bm-loop") ? tr.getNamedItem("bm-loop").value : "";
                            "false" === tn ? ts.loop = !1 : "true" === tn ? ts.loop = !0 : "" !== tn && (ts.loop = parseInt(tn, 10));
                            var ta = tr.getNamedItem("data-anim-autoplay") ? tr.getNamedItem("data-anim-autoplay").value : tr.getNamedItem("data-bm-autoplay") ? tr.getNamedItem("data-bm-autoplay").value : !tr.getNamedItem("bm-autoplay") || tr.getNamedItem("bm-autoplay").value;
                            ts.autoplay = "false" !== ta, ts.name = tr.getNamedItem("data-name") ? tr.getNamedItem("data-name").value : tr.getNamedItem("data-bm-name") ? tr.getNamedItem("data-bm-name").value : tr.getNamedItem("bm-name") ? tr.getNamedItem("bm-name").value : "", "false" === (tr.getNamedItem("data-anim-prerender") ? tr.getNamedItem("data-anim-prerender").value : tr.getNamedItem("data-bm-prerender") ? tr.getNamedItem("data-bm-prerender").value : tr.getNamedItem("bm-prerender") ? tr.getNamedItem("bm-prerender").value : "") && (ts.prerender = !1), this.setParams(ts)
                        }, AnimationItem.prototype.includeLayers = function(te) {
                            te.op > this.animationData.op && (this.animationData.op = te.op, this.totalFrames = Math.floor(te.op - this.animationData.ip));
                            var ti, ts, tr = this.animationData.layers,
                                tn = tr.length,
                                ta = te.layers,
                                to = ta.length;
                            for (ts = 0; ts < to; ts += 1)
                                for (ti = 0; ti < tn;) {
                                    if (tr[ti].id === ta[ts].id) {
                                        tr[ti] = ta[ts];
                                        break
                                    }
                                    ti += 1
                                }
                            if ((te.chars || te.fonts) && (this.renderer.globalData.fontManager.addChars(te.chars), this.renderer.globalData.fontManager.addFonts(te.fonts, this.renderer.globalData.defs)), te.assets)
                                for (tn = te.assets.length, ti = 0; ti < tn; ti += 1) this.animationData.assets.push(te.assets[ti]);
                            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                        }, AnimationItem.prototype.onSegmentComplete = function(te) {
                            this.animationData = te;
                            var ti = getExpressionsPlugin();
                            ti && ti.initExpressions(this), this.loadNextSegment()
                        }, AnimationItem.prototype.loadNextSegment = function() {
                            var te = this.animationData.segments;
                            if (!te || 0 === te.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                            var ti = te.shift();
                            this.timeCompleted = ti.time * this.frameRate;
                            var ts = this.path + this.fileName + "_" + this.segmentPos + ".json";
                            this.segmentPos += 1, dataManager.loadData(ts, this.includeLayers.bind(this), (function() {
                                this.trigger("data_failed")
                            }).bind(this))
                        }, AnimationItem.prototype.loadSegments = function() {
                            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                        }, AnimationItem.prototype.imagesLoaded = function() {
                            this.trigger("loaded_images"), this.checkLoaded()
                        }, AnimationItem.prototype.preloadImages = function() {
                            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                        }, AnimationItem.prototype.configAnimation = function(te) {
                            if (this.renderer) try {
                                this.animationData = te, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(te), te.assets || (te.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(te.assets), this.markers = markerParser(te.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                            } catch (te) {
                                this.triggerConfigError(te)
                            }
                        }, AnimationItem.prototype.waitForFontsLoaded = function() {
                            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                        }, AnimationItem.prototype.checkLoaded = function() {
                            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                                this.isLoaded = !0;
                                var te = getExpressionsPlugin();
                                te && te.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                                    this.trigger("DOMLoaded")
                                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                            }
                        }, AnimationItem.prototype.resize = function(te, ti) {
                            var ts = "number" == typeof te ? te : void 0,
                                tr = "number" == typeof ti ? ti : void 0;
                            this.renderer.updateContainerSize(ts, tr)
                        }, AnimationItem.prototype.setSubframe = function(te) {
                            this.isSubframeEnabled = !!te
                        }, AnimationItem.prototype.gotoFrame = function() {
                            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                        }, AnimationItem.prototype.renderFrame = function() {
                            if (!1 !== this.isLoaded && this.renderer) try {
                                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                            } catch (te) {
                                this.triggerRenderFrameError(te)
                            }
                        }, AnimationItem.prototype.play = function(te) {
                            te && this.name !== te || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                        }, AnimationItem.prototype.pause = function(te) {
                            te && this.name !== te || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                        }, AnimationItem.prototype.togglePause = function(te) {
                            te && this.name !== te || (!0 === this.isPaused ? this.play() : this.pause())
                        }, AnimationItem.prototype.stop = function(te) {
                            te && this.name !== te || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                        }, AnimationItem.prototype.getMarkerData = function(te) {
                            for (var ti, ts = 0; ts < this.markers.length; ts += 1)
                                if ((ti = this.markers[ts]).payload && ti.payload.name === te) return ti;
                            return null
                        }, AnimationItem.prototype.goToAndStop = function(te, ti, ts) {
                            if (!ts || this.name === ts) {
                                if (isNaN(Number(te))) {
                                    var tr = this.getMarkerData(te);
                                    tr && this.goToAndStop(tr.time, !0)
                                } else ti ? this.setCurrentRawFrameValue(te) : this.setCurrentRawFrameValue(te * this.frameModifier);
                                this.pause()
                            }
                        }, AnimationItem.prototype.goToAndPlay = function(te, ti, ts) {
                            if (!ts || this.name === ts) {
                                var tr = Number(te);
                                if (isNaN(tr)) {
                                    var tn = this.getMarkerData(te);
                                    tn && (tn.duration ? this.playSegments([tn.time, tn.time + tn.duration], !0) : this.goToAndStop(tn.time, !0))
                                } else this.goToAndStop(tr, ti, ts);
                                this.play()
                            }
                        }, AnimationItem.prototype.advanceTime = function(te) {
                            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                                var ti = this.currentRawFrame + te * this.frameModifier,
                                    ts = !1;
                                ti >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? ti >= this.totalFrames ? (this.playCount += 1, this.checkSegments(ti % this.totalFrames) || (this.setCurrentRawFrameValue(ti % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(ti) : this.checkSegments(ti > this.totalFrames ? ti % this.totalFrames : 0) || (ts = !0, ti = this.totalFrames - 1) : ti < 0 ? this.checkSegments(ti % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (ts = !0, ti = 0) : (this.setCurrentRawFrameValue(this.totalFrames + ti % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(ti), ts && (this.setCurrentRawFrameValue(ti), this.pause(), this.trigger("complete"))
                            }
                        }, AnimationItem.prototype.adjustSegment = function(te, ti) {
                            this.playCount = 0, te[1] < te[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = te[0] - te[1], this.timeCompleted = this.totalFrames, this.firstFrame = te[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - ti)) : te[1] > te[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = te[1] - te[0], this.timeCompleted = this.totalFrames, this.firstFrame = te[0], this.setCurrentRawFrameValue(.001 + ti)), this.trigger("segmentStart")
                        }, AnimationItem.prototype.setSegment = function(te, ti) {
                            var ts = -1;
                            this.isPaused && (this.currentRawFrame + this.firstFrame < te ? ts = te : this.currentRawFrame + this.firstFrame > ti && (ts = ti - te)), this.firstFrame = te, this.totalFrames = ti - te, this.timeCompleted = this.totalFrames, -1 !== ts && this.goToAndStop(ts, !0)
                        }, AnimationItem.prototype.playSegments = function(te, ti) {
                            if (ti && (this.segments.length = 0), "object" === _typeof$4(te[0])) {
                                var ts, tr = te.length;
                                for (ts = 0; ts < tr; ts += 1) this.segments.push(te[ts])
                            } else this.segments.push(te);
                            this.segments.length && ti && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                        }, AnimationItem.prototype.resetSegments = function(te) {
                            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), te && this.checkSegments(0)
                        }, AnimationItem.prototype.checkSegments = function(te) {
                            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), te), !0)
                        }, AnimationItem.prototype.destroy = function(te) {
                            te && this.name !== te || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                        }, AnimationItem.prototype.setCurrentRawFrameValue = function(te) {
                            this.currentRawFrame = te, this.gotoFrame()
                        }, AnimationItem.prototype.setSpeed = function(te) {
                            this.playSpeed = te, this.updaFrameModifier()
                        }, AnimationItem.prototype.setDirection = function(te) {
                            this.playDirection = te < 0 ? -1 : 1, this.updaFrameModifier()
                        }, AnimationItem.prototype.setLoop = function(te) {
                            this.loop = te
                        }, AnimationItem.prototype.setVolume = function(te, ti) {
                            ti && this.name !== ti || this.audioController.setVolume(te)
                        }, AnimationItem.prototype.getVolume = function() {
                            return this.audioController.getVolume()
                        }, AnimationItem.prototype.mute = function(te) {
                            te && this.name !== te || this.audioController.mute()
                        }, AnimationItem.prototype.unmute = function(te) {
                            te && this.name !== te || this.audioController.unmute()
                        }, AnimationItem.prototype.updaFrameModifier = function() {
                            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                        }, AnimationItem.prototype.getPath = function() {
                            return this.path
                        }, AnimationItem.prototype.getAssetsPath = function(te) {
                            var ti = "";
                            if (te.e) ti = te.p;
                            else if (this.assetsPath) {
                                var ts = te.p; - 1 !== ts.indexOf("images/") && (ts = ts.split("/")[1]), ti = this.assetsPath + ts
                            } else ti = this.path + (te.u ? te.u : "") + te.p;
                            return ti
                        }, AnimationItem.prototype.getAssetData = function(te) {
                            for (var ti = 0, ts = this.assets.length; ti < ts;) {
                                if (te === this.assets[ti].id) return this.assets[ti];
                                ti += 1
                            }
                            return null
                        }, AnimationItem.prototype.hide = function() {
                            this.renderer.hide()
                        }, AnimationItem.prototype.show = function() {
                            this.renderer.show()
                        }, AnimationItem.prototype.getDuration = function(te) {
                            return te ? this.totalFrames : this.totalFrames / this.frameRate
                        }, AnimationItem.prototype.updateDocumentData = function(te, ti, ts) {
                            try {
                                this.renderer.getElementByPath(te).updateDocumentData(ti, ts)
                            } catch (te) {}
                        }, AnimationItem.prototype.trigger = function(te) {
                            if (this._cbs && this._cbs[te]) switch (te) {
                                case "enterFrame":
                                    this.triggerEvent(te, new BMEnterFrameEvent(te, this.currentFrame, this.totalFrames, this.frameModifier));
                                    break;
                                case "drawnFrame":
                                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(te, this.drawnFrameEvent);
                                    break;
                                case "loopComplete":
                                    this.triggerEvent(te, new BMCompleteLoopEvent(te, this.loop, this.playCount, this.frameMult));
                                    break;
                                case "complete":
                                    this.triggerEvent(te, new BMCompleteEvent(te, this.frameMult));
                                    break;
                                case "segmentStart":
                                    this.triggerEvent(te, new BMSegmentStartEvent(te, this.firstFrame, this.totalFrames));
                                    break;
                                case "destroy":
                                    this.triggerEvent(te, new BMDestroyEvent(te, this));
                                    break;
                                default:
                                    this.triggerEvent(te)
                            }
                            "enterFrame" === te && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(te, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === te && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(te, this.loop, this.playCount, this.frameMult)), "complete" === te && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(te, this.frameMult)), "segmentStart" === te && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(te, this.firstFrame, this.totalFrames)), "destroy" === te && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(te, this))
                        }, AnimationItem.prototype.triggerRenderFrameError = function(te) {
                            var ti = new BMRenderFrameErrorEvent(te, this.currentFrame);
                            this.triggerEvent("error", ti), this.onError && this.onError.call(this, ti)
                        }, AnimationItem.prototype.triggerConfigError = function(te) {
                            var ti = new BMConfigErrorEvent(te, this.currentFrame);
                            this.triggerEvent("error", ti), this.onError && this.onError.call(this, ti)
                        };
                        var animationManager = function() {
                                var te = {},
                                    ti = [],
                                    ts = 0,
                                    tr = 0,
                                    tn = 0,
                                    ta = !0,
                                    to = !1;

                                function th(te) {
                                    for (var ts = 0, tn = te.target; ts < tr;) ti[ts].animation === tn && (ti.splice(ts, 1), ts -= 1, tr -= 1, tn.isPaused || tf()), ts += 1
                                }

                                function tl(te, ts) {
                                    if (!te) return null;
                                    for (var tn = 0; tn < tr;) {
                                        if (ti[tn].elem === te && null !== ti[tn].elem) return ti[tn].animation;
                                        tn += 1
                                    }
                                    var ta = new AnimationItem;
                                    return tc(ta, te), ta.setData(te, ts), ta
                                }

                                function tp() {
                                    tn += 1, td()
                                }

                                function tf() {
                                    tn -= 1
                                }

                                function tc(te, ts) {
                                    te.addEventListener("destroy", th), te.addEventListener("_active", tp), te.addEventListener("_idle", tf), ti.push({
                                        elem: ts,
                                        animation: te
                                    }), tr += 1
                                }

                                function tu(te) {
                                    var th, tl = te - ts;
                                    for (th = 0; th < tr; th += 1) ti[th].animation.advanceTime(tl);
                                    ts = te, tn && !to ? window.requestAnimationFrame(tu) : ta = !0
                                }

                                function tm(te) {
                                    ts = te, window.requestAnimationFrame(tu)
                                }

                                function td() {
                                    !to && tn && ta && (window.requestAnimationFrame(tm), ta = !1)
                                }
                                return te.registerAnimation = tl, te.loadAnimation = function(te) {
                                    var ti = new AnimationItem;
                                    return tc(ti, null), ti.setParams(te), ti
                                }, te.setSpeed = function(te, ts) {
                                    var tn;
                                    for (tn = 0; tn < tr; tn += 1) ti[tn].animation.setSpeed(te, ts)
                                }, te.setDirection = function(te, ts) {
                                    var tn;
                                    for (tn = 0; tn < tr; tn += 1) ti[tn].animation.setDirection(te, ts)
                                }, te.play = function(te) {
                                    var ts;
                                    for (ts = 0; ts < tr; ts += 1) ti[ts].animation.play(te)
                                }, te.pause = function(te) {
                                    var ts;
                                    for (ts = 0; ts < tr; ts += 1) ti[ts].animation.pause(te)
                                }, te.stop = function(te) {
                                    var ts;
                                    for (ts = 0; ts < tr; ts += 1) ti[ts].animation.stop(te)
                                }, te.togglePause = function(te) {
                                    var ts;
                                    for (ts = 0; ts < tr; ts += 1) ti[ts].animation.togglePause(te)
                                }, te.searchAnimations = function(te, ti, ts) {
                                    var tr, tn = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                        ta = tn.length;
                                    for (tr = 0; tr < ta; tr += 1) ts && tn[tr].setAttribute("data-bm-type", ts), tl(tn[tr], te);
                                    if (ti && 0 === ta) {
                                        ts || (ts = "svg");
                                        var to = document.getElementsByTagName("body")[0];
                                        to.innerText = "";
                                        var th = createTag("div");
                                        th.style.width = "100%", th.style.height = "100%", th.setAttribute("data-bm-type", ts), to.appendChild(th), tl(th, te)
                                    }
                                }, te.resize = function() {
                                    var te;
                                    for (te = 0; te < tr; te += 1) ti[te].animation.resize()
                                }, te.goToAndStop = function(te, ts, tn) {
                                    var ta;
                                    for (ta = 0; ta < tr; ta += 1) ti[ta].animation.goToAndStop(te, ts, tn)
                                }, te.destroy = function(te) {
                                    var ts;
                                    for (ts = tr - 1; ts >= 0; ts -= 1) ti[ts].animation.destroy(te)
                                }, te.freeze = function() {
                                    to = !0
                                }, te.unfreeze = function() {
                                    to = !1, td()
                                }, te.setVolume = function(te, ts) {
                                    var tn;
                                    for (tn = 0; tn < tr; tn += 1) ti[tn].animation.setVolume(te, ts)
                                }, te.mute = function(te) {
                                    var ts;
                                    for (ts = 0; ts < tr; ts += 1) ti[ts].animation.mute(te)
                                }, te.unmute = function(te) {
                                    var ts;
                                    for (ts = 0; ts < tr; ts += 1) ti[ts].animation.unmute(te)
                                }, te.getRegisteredAnimations = function() {
                                    var te, ts = ti.length,
                                        tr = [];
                                    for (te = 0; te < ts; te += 1) tr.push(ti[te].animation);
                                    return tr
                                }, te
                            }(),
                            BezierFactory = function() {
                                var te = {
                                        getBezierEasing: function(te, ts, tr, tn, ta) {
                                            var to = ta || ("bez_" + te + "_" + ts + "_" + tr + "_" + tn).replace(/\./g, "p");
                                            if (ti[to]) return ti[to];
                                            var th = new tl([te, ts, tr, tn]);
                                            return ti[to] = th, th
                                        }
                                    },
                                    ti = {},
                                    ts = "function" == typeof Float32Array;

                                function tr(te, ti) {
                                    return 1 - 3 * ti + 3 * te
                                }

                                function tn(te, ti) {
                                    return 3 * ti - 6 * te
                                }

                                function ta(te) {
                                    return 3 * te
                                }

                                function to(te, ti, ts) {
                                    return ((tr(ti, ts) * te + tn(ti, ts)) * te + ta(ti)) * te
                                }

                                function th(te, ti, ts) {
                                    return 3 * tr(ti, ts) * te * te + 2 * tn(ti, ts) * te + ta(ti)
                                }

                                function tl(te) {
                                    this._p = te, this._mSampleValues = ts ? new Float32Array(11) : Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                                }
                                return tl.prototype = {
                                    get: function(te) {
                                        var ti = this._p[0],
                                            ts = this._p[1],
                                            tr = this._p[2],
                                            tn = this._p[3];
                                        return this._precomputed || this._precompute(), ti === ts && tr === tn ? te : 0 === te ? 0 : 1 === te ? 1 : to(this._getTForX(te), ts, tn)
                                    },
                                    _precompute: function() {
                                        var te = this._p[0],
                                            ti = this._p[1],
                                            ts = this._p[2],
                                            tr = this._p[3];
                                        this._precomputed = !0, te === ti && ts === tr || this._calcSampleValues()
                                    },
                                    _calcSampleValues: function() {
                                        for (var te = this._p[0], ti = this._p[2], ts = 0; ts < 11; ++ts) this._mSampleValues[ts] = to(.1 * ts, te, ti)
                                    },
                                    _getTForX: function(te) {
                                        for (var ti = this._p[0], ts = this._p[2], tr = this._mSampleValues, tn = 0, ta = 1; 10 !== ta && tr[ta] <= te; ++ta) tn += .1;
                                        var tl = tn + .1 * ((te - tr[--ta]) / (tr[ta + 1] - tr[ta])),
                                            tp = th(tl, ti, ts);
                                        return tp >= .001 ? function(te, ti, ts, tr) {
                                            for (var tn = 0; tn < 4; ++tn) {
                                                var ta = th(ti, ts, tr);
                                                if (0 === ta) break;
                                                ti -= (to(ti, ts, tr) - te) / ta
                                            }
                                            return ti
                                        }(te, tl, ti, ts) : 0 === tp ? tl : function(te, ti, ts, tr, tn) {
                                            var ta, th, tl = 0;
                                            do(ta = to(th = ti + (ts - ti) / 2, tr, tn) - te) > 0 ? ts = th : ti = th; while (Math.abs(ta) > 1e-7 && ++tl < 10);
                                            return th
                                        }(te, tn, tn + .1, ti, ts)
                                    }
                                }, te
                            }(),
                            pooling = {
                                double: function(te) {
                                    return te.concat(createSizedArray(te.length))
                                }
                            },
                            poolFactory = function(te, ti, ts) {
                                var tr = 0,
                                    tn = te,
                                    ta = createSizedArray(tn);
                                return {
                                    newElement: function() {
                                        return tr ? ta[tr -= 1] : ti()
                                    },
                                    release: function(te) {
                                        tr === tn && (ta = pooling.double(ta), tn *= 2), ts && ts(te), ta[tr] = te, tr += 1
                                    }
                                }
                            },
                            bezierLengthPool = poolFactory(8, function() {
                                return {
                                    addedLength: 0,
                                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                                }
                            }),
                            segmentsLengthPool = poolFactory(8, function() {
                                return {
                                    lengths: [],
                                    totalLength: 0
                                }
                            }, function(te) {
                                var ti, ts = te.lengths.length;
                                for (ti = 0; ti < ts; ti += 1) bezierLengthPool.release(te.lengths[ti]);
                                te.lengths.length = 0
                            });

                        function bezFunction() {
                            var te = Math;

                            function ti(te, ti, ts, tr, tn, ta) {
                                var to = te * tr + ti * tn + ts * ta - tn * tr - ta * te - ts * ti;
                                return to > -.001 && to < .001
                            }
                            var ts = function(te, ti, ts, tr) {
                                var tn, ta, to, th, tl, tp, tf = getDefaultCurveSegments(),
                                    tc = 0,
                                    tu = [],
                                    tm = [],
                                    td = bezierLengthPool.newElement();
                                for (to = ts.length, tn = 0; tn < tf; tn += 1) {
                                    for (tl = tn / (tf - 1), tp = 0, ta = 0; ta < to; ta += 1) th = bmPow(1 - tl, 3) * te[ta] + 3 * bmPow(1 - tl, 2) * tl * ts[ta] + 3 * (1 - tl) * bmPow(tl, 2) * tr[ta] + bmPow(tl, 3) * ti[ta], tu[ta] = th, null !== tm[ta] && (tp += bmPow(tu[ta] - tm[ta], 2)), tm[ta] = tu[ta];
                                    tp && (tc += tp = bmSqrt(tp)), td.percents[tn] = tl, td.lengths[tn] = tc
                                }
                                return td.addedLength = tc, td
                            };

                            function tr(te) {
                                this.segmentLength = 0, this.points = Array(te)
                            }

                            function tn(te, ti) {
                                this.partialLength = te, this.point = ti
                            }
                            var ta, to = (ta = {}, function(te, ts, to, th) {
                                var tl = (te[0] + "_" + te[1] + "_" + ts[0] + "_" + ts[1] + "_" + to[0] + "_" + to[1] + "_" + th[0] + "_" + th[1]).replace(/\./g, "p");
                                if (!ta[tl]) {
                                    var tp, tf, tc, tu, tm, td, tg, ty = getDefaultCurveSegments(),
                                        tv = 0,
                                        tb = null;
                                    2 === te.length && (te[0] !== ts[0] || te[1] !== ts[1]) && ti(te[0], te[1], ts[0], ts[1], te[0] + to[0], te[1] + to[1]) && ti(te[0], te[1], ts[0], ts[1], ts[0] + th[0], ts[1] + th[1]) && (ty = 2);
                                    var tx = new tr(ty);
                                    for (tc = to.length, tp = 0; tp < ty; tp += 1) {
                                        for (tg = createSizedArray(tc), tm = tp / (ty - 1), td = 0, tf = 0; tf < tc; tf += 1) tu = bmPow(1 - tm, 3) * te[tf] + 3 * bmPow(1 - tm, 2) * tm * (te[tf] + to[tf]) + 3 * (1 - tm) * bmPow(tm, 2) * (ts[tf] + th[tf]) + bmPow(tm, 3) * ts[tf], tg[tf] = tu, null !== tb && (td += bmPow(tg[tf] - tb[tf], 2));
                                        tv += td = bmSqrt(td), tx.points[tp] = new tn(td, tg), tb = tg
                                    }
                                    tx.segmentLength = tv, ta[tl] = tx
                                }
                                return ta[tl]
                            });

                            function th(te, ti) {
                                var ts = ti.percents,
                                    tr = ti.lengths,
                                    tn = ts.length,
                                    ta = bmFloor((tn - 1) * te),
                                    to = te * ti.addedLength,
                                    th = 0;
                                if (ta === tn - 1 || 0 === ta || to === tr[ta]) return ts[ta];
                                for (var tl = tr[ta] > to ? -1 : 1, tp = !0; tp;)
                                    if (tr[ta] <= to && tr[ta + 1] > to ? (th = (to - tr[ta]) / (tr[ta + 1] - tr[ta]), tp = !1) : ta += tl, ta < 0 || ta >= tn - 1) {
                                        if (ta === tn - 1) return ts[ta];
                                        tp = !1
                                    }
                                return ts[ta] + (ts[ta + 1] - ts[ta]) * th
                            }
                            var tl = createTypedArray("float32", 8);
                            return {
                                getSegmentsLength: function(te) {
                                    var ti, tr = segmentsLengthPool.newElement(),
                                        tn = te.c,
                                        ta = te.v,
                                        to = te.o,
                                        th = te.i,
                                        tl = te._length,
                                        tp = tr.lengths,
                                        tf = 0;
                                    for (ti = 0; ti < tl - 1; ti += 1) tp[ti] = ts(ta[ti], ta[ti + 1], to[ti], th[ti + 1]), tf += tp[ti].addedLength;
                                    return tn && tl && (tp[ti] = ts(ta[ti], ta[0], to[ti], th[0]), tf += tp[ti].addedLength), tr.totalLength = tf, tr
                                },
                                getNewSegment: function(ti, ts, tr, tn, ta, to, tp) {
                                    ta < 0 ? ta = 0 : ta > 1 && (ta = 1);
                                    var tf, tc = th(ta, tp),
                                        tu = th(to = to > 1 ? 1 : to, tp),
                                        tm = ti.length,
                                        td = 1 - tc,
                                        tg = 1 - tu,
                                        ty = td * td * td,
                                        tv = tc * td * td * 3,
                                        tb = tc * tc * td * 3,
                                        tx = tc * tc * tc,
                                        tk = td * td * tg,
                                        t_ = tc * td * tg + td * tc * tg + td * td * tu,
                                        tw = tc * tc * tg + td * tc * tu + tc * td * tu,
                                        tC = tc * tc * tu,
                                        tP = td * tg * tg,
                                        tA = tc * tg * tg + td * tu * tg + td * tg * tu,
                                        tE = tc * tu * tg + td * tu * tu + tc * tg * tu,
                                        tS = tc * tu * tu,
                                        tD = tg * tg * tg,
                                        tT = tu * tg * tg + tg * tu * tg + tg * tg * tu,
                                        tM = tu * tu * tg + tg * tu * tu + tu * tg * tu,
                                        tF = tu * tu * tu;
                                    for (tf = 0; tf < tm; tf += 1) tl[4 * tf] = te.round(1e3 * (ty * ti[tf] + tv * tr[tf] + tb * tn[tf] + tx * ts[tf])) / 1e3, tl[4 * tf + 1] = te.round(1e3 * (tk * ti[tf] + t_ * tr[tf] + tw * tn[tf] + tC * ts[tf])) / 1e3, tl[4 * tf + 2] = te.round(1e3 * (tP * ti[tf] + tA * tr[tf] + tE * tn[tf] + tS * ts[tf])) / 1e3, tl[4 * tf + 3] = te.round(1e3 * (tD * ti[tf] + tT * tr[tf] + tM * tn[tf] + tF * ts[tf])) / 1e3;
                                    return tl
                                },
                                getPointInSegment: function(ti, ts, tr, tn, ta, to) {
                                    var tl = th(ta, to),
                                        tp = 1 - tl;
                                    return [te.round(1e3 * (tp * tp * tp * ti[0] + (tl * tp * tp + tp * tl * tp + tp * tp * tl) * tr[0] + (tl * tl * tp + tp * tl * tl + tl * tp * tl) * tn[0] + tl * tl * tl * ts[0])) / 1e3, te.round(1e3 * (tp * tp * tp * ti[1] + (tl * tp * tp + tp * tl * tp + tp * tp * tl) * tr[1] + (tl * tl * tp + tp * tl * tl + tl * tp * tl) * tn[1] + tl * tl * tl * ts[1])) / 1e3]
                                },
                                buildBezierData: to,
                                pointOnLine2D: ti,
                                pointOnLine3D: function(ts, tr, tn, ta, to, th, tl, tp, tf) {
                                    if (0 === tn && 0 === th && 0 === tf) return ti(ts, tr, ta, to, tl, tp);
                                    var tc, tu = te.sqrt(te.pow(ta - ts, 2) + te.pow(to - tr, 2) + te.pow(th - tn, 2)),
                                        tm = te.sqrt(te.pow(tl - ts, 2) + te.pow(tp - tr, 2) + te.pow(tf - tn, 2)),
                                        td = te.sqrt(te.pow(tl - ta, 2) + te.pow(tp - to, 2) + te.pow(tf - th, 2));
                                    return (tc = tu > tm ? tu > td ? tu - tm - td : td - tm - tu : td > tm ? td - tm - tu : tm - tu - td) > -.0001 && tc < 1e-4
                                }
                            }
                        }
                        var bez = bezFunction(),
                            PropertyFactory = function() {
                                var te = initialDefaultFrame,
                                    ti = Math.abs;

                                function ts(te, ti) {
                                    var ts, tn, ta, to, th, tl, tp = this.offsetTime;
                                    "multidimensional" === this.propType && (tl = createTypedArray("float32", this.pv.length));
                                    for (var tf, tc, tu, tm, td, tg, ty, tv, tb, tx = ti.lastIndex, tk = tx, t_ = this.keyframes.length - 1, tw = !0; tw;) {
                                        if (tf = this.keyframes[tk], tc = this.keyframes[tk + 1], tk === t_ - 1 && te >= tc.t - tp) {
                                            tf.h && (tf = tc), tx = 0;
                                            break
                                        }
                                        if (tc.t - tp > te) {
                                            tx = tk;
                                            break
                                        }
                                        tk < t_ - 1 ? tk += 1 : (tx = 0, tw = !1)
                                    }
                                    tu = this.keyframesMetadata[tk] || {};
                                    var tC, tP = tc.t - tp,
                                        tA = tf.t - tp;
                                    if (tf.to) {
                                        tu.bezierData || (tu.bezierData = bez.buildBezierData(tf.s, tc.s || tf.e, tf.to, tf.ti));
                                        var tE = tu.bezierData;
                                        if (te >= tP || te < tA) {
                                            var tS = te >= tP ? tE.points.length - 1 : 0;
                                            for (td = tE.points[tS].point.length, tm = 0; tm < td; tm += 1) tl[tm] = tE.points[tS].point[tm]
                                        } else {
                                            tu.__fnct ? tb = tu.__fnct : (tb = BezierFactory.getBezierEasing(tf.o.x, tf.o.y, tf.i.x, tf.i.y, tf.n).get, tu.__fnct = tb), tg = tb((te - tA) / (tP - tA));
                                            var tD, tT = tE.segmentLength * tg,
                                                tM = ti.lastFrame < te && ti._lastKeyframeIndex === tk ? ti._lastAddedLength : 0;
                                            for (tv = ti.lastFrame < te && ti._lastKeyframeIndex === tk ? ti._lastPoint : 0, tw = !0, ty = tE.points.length; tw;) {
                                                if (tM += tE.points[tv].partialLength, 0 === tT || 0 === tg || tv === tE.points.length - 1) {
                                                    for (td = tE.points[tv].point.length, tm = 0; tm < td; tm += 1) tl[tm] = tE.points[tv].point[tm];
                                                    break
                                                }
                                                if (tT >= tM && tT < tM + tE.points[tv + 1].partialLength) {
                                                    for (tD = (tT - tM) / tE.points[tv + 1].partialLength, td = tE.points[tv].point.length, tm = 0; tm < td; tm += 1) tl[tm] = tE.points[tv].point[tm] + (tE.points[tv + 1].point[tm] - tE.points[tv].point[tm]) * tD;
                                                    break
                                                }
                                                tv < ty - 1 ? tv += 1 : tw = !1
                                            }
                                            ti._lastPoint = tv, ti._lastAddedLength = tM - tE.points[tv].partialLength, ti._lastKeyframeIndex = tk
                                        }
                                    } else if (t_ = tf.s.length, tC = tc.s || tf.e, this.sh && 1 !== tf.h) te >= tP ? (tl[0] = tC[0], tl[1] = tC[1], tl[2] = tC[2]) : te <= tA ? (tl[0] = tf.s[0], tl[1] = tf.s[1], tl[2] = tf.s[2]) : function(te, ti) {
                                        var ts = ti[0],
                                            tr = ti[1],
                                            tn = ti[2],
                                            ta = ti[3],
                                            to = Math.atan2(2 * tr * ta - 2 * ts * tn, 1 - 2 * tr * tr - 2 * tn * tn),
                                            th = Math.asin(2 * ts * tr + 2 * tn * ta),
                                            tl = Math.atan2(2 * ts * ta - 2 * tr * tn, 1 - 2 * ts * ts - 2 * tn * tn);
                                        te[0] = to / degToRads, te[1] = th / degToRads, te[2] = tl / degToRads
                                    }(tl, function(te, ti, ts) {
                                        var tr, tn, ta, to, th, tl = [],
                                            tp = te[0],
                                            tf = te[1],
                                            tc = te[2],
                                            tu = te[3],
                                            tm = ti[0],
                                            td = ti[1],
                                            tg = ti[2],
                                            ty = ti[3];
                                        return (tn = tp * tm + tf * td + tc * tg + tu * ty) < 0 && (tn = -tn, tm = -tm, td = -td, tg = -tg, ty = -ty), 1 - tn > 1e-6 ? (ta = Math.sin(tr = Math.acos(tn)), to = Math.sin((1 - ts) * tr) / ta, th = Math.sin(ts * tr) / ta) : (to = 1 - ts, th = ts), tl[0] = to * tp + th * tm, tl[1] = to * tf + th * td, tl[2] = to * tc + th * tg, tl[3] = to * tu + th * ty, tl
                                    }(tr(tf.s), tr(tC), (te - tA) / (tP - tA)));
                                    else
                                        for (tk = 0; tk < t_; tk += 1) 1 !== tf.h && (te >= tP ? tg = 1 : te < tA ? tg = 0 : (tf.o.x.constructor === Array ? (tu.__fnct || (tu.__fnct = []), tu.__fnct[tk] ? tb = tu.__fnct[tk] : (ts = void 0 === tf.o.x[tk] ? tf.o.x[0] : tf.o.x[tk], tn = void 0 === tf.o.y[tk] ? tf.o.y[0] : tf.o.y[tk], ta = void 0 === tf.i.x[tk] ? tf.i.x[0] : tf.i.x[tk], to = void 0 === tf.i.y[tk] ? tf.i.y[0] : tf.i.y[tk], tb = BezierFactory.getBezierEasing(ts, tn, ta, to).get, tu.__fnct[tk] = tb)) : tu.__fnct ? tb = tu.__fnct : (ts = tf.o.x, tn = tf.o.y, ta = tf.i.x, to = tf.i.y, tb = BezierFactory.getBezierEasing(ts, tn, ta, to).get, tf.keyframeMetadata = tb), tg = tb((te - tA) / (tP - tA)))), tC = tc.s || tf.e, th = 1 === tf.h ? tf.s[tk] : tf.s[tk] + (tC[tk] - tf.s[tk]) * tg, "multidimensional" === this.propType ? tl[tk] = th : tl = th;
                                    return ti.lastIndex = tx, tl
                                }

                                function tr(te) {
                                    var ti = te[0] * degToRads,
                                        ts = te[1] * degToRads,
                                        tr = te[2] * degToRads,
                                        tn = Math.cos(ti / 2),
                                        ta = Math.cos(ts / 2),
                                        to = Math.cos(tr / 2),
                                        th = Math.sin(ti / 2),
                                        tl = Math.sin(ts / 2),
                                        tp = Math.sin(tr / 2);
                                    return [th * tl * to + tn * ta * tp, th * ta * to + tn * tl * tp, tn * tl * to - th * ta * tp, tn * ta * to - th * tl * tp]
                                }

                                function tn() {
                                    var ti = this.comp.renderedFrame - this.offsetTime,
                                        ts = this.keyframes[0].t - this.offsetTime,
                                        tr = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                    if (!(ti === this._caching.lastFrame || this._caching.lastFrame !== te && (this._caching.lastFrame >= tr && ti >= tr || this._caching.lastFrame < ts && ti < ts))) {
                                        this._caching.lastFrame >= ti && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                        var tn = this.interpolateValue(ti, this._caching);
                                        this.pv = tn
                                    }
                                    return this._caching.lastFrame = ti, this.pv
                                }

                                function ta(te) {
                                    var ts;
                                    if ("unidimensional" === this.propType) ts = te * this.mult, ti(this.v - ts) > 1e-5 && (this.v = ts, this._mdf = !0);
                                    else
                                        for (var tr = 0, tn = this.v.length; tr < tn;) ts = te[tr] * this.mult, ti(this.v[tr] - ts) > 1e-5 && (this.v[tr] = ts, this._mdf = !0), tr += 1
                                }

                                function to() {
                                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                                        if (this.lock) this.setVValue(this.pv);
                                        else {
                                            this.lock = !0, this._mdf = this._isFirstFrame;
                                            var te, ti = this.effectsSequence.length,
                                                ts = this.kf ? this.pv : this.data.k;
                                            for (te = 0; te < ti; te += 1) ts = this.effectsSequence[te](ts);
                                            this.setVValue(ts), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                        }
                                    }
                                }

                                function th(te) {
                                    this.effectsSequence.push(te), this.container.addDynamicProperty(this)
                                }

                                function tl(te, ti, ts, tr) {
                                    this.propType = "unidimensional", this.mult = ts || 1, this.data = ti, this.v = ts ? ti.k * ts : ti.k, this.pv = ti.k, this._mdf = !1, this.elem = te, this.container = tr, this.comp = te.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = to, this.setVValue = ta, this.addEffect = th
                                }

                                function tp(te, ti, ts, tr) {
                                    this.propType = "multidimensional", this.mult = ts || 1, this.data = ti, this._mdf = !1, this.elem = te, this.container = tr, this.comp = te.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                    var tn, tl = ti.k.length;
                                    for (this.v = createTypedArray("float32", tl), this.pv = createTypedArray("float32", tl), this.vel = createTypedArray("float32", tl), tn = 0; tn < tl; tn += 1) this.v[tn] = ti.k[tn] * this.mult, this.pv[tn] = ti.k[tn];
                                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = to, this.setVValue = ta, this.addEffect = th
                                }

                                function tf(ti, tr, tl, tp) {
                                    this.propType = "unidimensional", this.keyframes = tr.k, this.keyframesMetadata = [], this.offsetTime = ti.data.st, this.frameId = -1, this._caching = {
                                        lastFrame: te,
                                        lastIndex: 0,
                                        value: 0,
                                        _lastKeyframeIndex: -1
                                    }, this.k = !0, this.kf = !0, this.data = tr, this.mult = tl || 1, this.elem = ti, this.container = tp, this.comp = ti.comp, this.v = te, this.pv = te, this._isFirstFrame = !0, this.getValue = to, this.setVValue = ta, this.interpolateValue = ts, this.effectsSequence = [tn.bind(this)], this.addEffect = th
                                }

                                function tc(ti, tr, tl, tp) {
                                    this.propType = "multidimensional";
                                    var tf, tc, tu, tm, td, tg = tr.k.length;
                                    for (tf = 0; tf < tg - 1; tf += 1) tr.k[tf].to && tr.k[tf].s && tr.k[tf + 1] && tr.k[tf + 1].s && (tc = tr.k[tf].s, tu = tr.k[tf + 1].s, tm = tr.k[tf].to, td = tr.k[tf].ti, (2 === tc.length && (tc[0] !== tu[0] || tc[1] !== tu[1]) && bez.pointOnLine2D(tc[0], tc[1], tu[0], tu[1], tc[0] + tm[0], tc[1] + tm[1]) && bez.pointOnLine2D(tc[0], tc[1], tu[0], tu[1], tu[0] + td[0], tu[1] + td[1]) || 3 === tc.length && (tc[0] !== tu[0] || tc[1] !== tu[1] || tc[2] !== tu[2]) && bez.pointOnLine3D(tc[0], tc[1], tc[2], tu[0], tu[1], tu[2], tc[0] + tm[0], tc[1] + tm[1], tc[2] + tm[2]) && bez.pointOnLine3D(tc[0], tc[1], tc[2], tu[0], tu[1], tu[2], tu[0] + td[0], tu[1] + td[1], tu[2] + td[2])) && (tr.k[tf].to = null, tr.k[tf].ti = null), tc[0] === tu[0] && tc[1] === tu[1] && 0 === tm[0] && 0 === tm[1] && 0 === td[0] && 0 === td[1] && (2 === tc.length || tc[2] === tu[2] && 0 === tm[2] && 0 === td[2]) && (tr.k[tf].to = null, tr.k[tf].ti = null));
                                    this.effectsSequence = [tn.bind(this)], this.data = tr, this.keyframes = tr.k, this.keyframesMetadata = [], this.offsetTime = ti.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = tl || 1, this.elem = ti, this.container = tp, this.comp = ti.comp, this.getValue = to, this.setVValue = ta, this.interpolateValue = ts, this.frameId = -1;
                                    var ty = tr.k[0].s.length;
                                    for (this.v = createTypedArray("float32", ty), this.pv = createTypedArray("float32", ty), tf = 0; tf < ty; tf += 1) this.v[tf] = te, this.pv[tf] = te;
                                    this._caching = {
                                        lastFrame: te,
                                        lastIndex: 0,
                                        value: createTypedArray("float32", ty)
                                    }, this.addEffect = th
                                }
                                return {
                                    getProp: function(te, ti, ts, tr, tn) {
                                        var ta;
                                        if (ti.k.length) {
                                            if ("number" == typeof ti.k[0]) ta = new tp(te, ti, tr, tn);
                                            else switch (ts) {
                                                case 0:
                                                    ta = new tf(te, ti, tr, tn);
                                                    break;
                                                case 1:
                                                    ta = new tc(te, ti, tr, tn)
                                            }
                                        } else ta = new tl(te, ti, tr, tn);
                                        return ta.effectsSequence.length && tn.addDynamicProperty(ta), ta
                                    }
                                }
                            }();

                        function DynamicPropertyContainer() {}
                        DynamicPropertyContainer.prototype = {
                            addDynamicProperty: function(te) {
                                -1 === this.dynamicProperties.indexOf(te) && (this.dynamicProperties.push(te), this.container.addDynamicProperty(this), this._isAnimated = !0)
                            },
                            iterateDynamicProperties: function() {
                                this._mdf = !1;
                                var te, ti = this.dynamicProperties.length;
                                for (te = 0; te < ti; te += 1) this.dynamicProperties[te].getValue(), this.dynamicProperties[te]._mdf && (this._mdf = !0)
                            },
                            initDynamicPropertyContainer: function(te) {
                                this.container = te, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                            }
                        };
                        var pointPool = poolFactory(8, function() {
                            return createTypedArray("float32", 2)
                        });

                        function ShapePath() {
                            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                        }
                        ShapePath.prototype.setPathData = function(te, ti) {
                            this.c = te, this.setLength(ti);
                            for (var ts = 0; ts < ti;) this.v[ts] = pointPool.newElement(), this.o[ts] = pointPool.newElement(), this.i[ts] = pointPool.newElement(), ts += 1
                        }, ShapePath.prototype.setLength = function(te) {
                            for (; this._maxLength < te;) this.doubleArrayLength();
                            this._length = te
                        }, ShapePath.prototype.doubleArrayLength = function() {
                            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                        }, ShapePath.prototype.setXYAt = function(te, ti, ts, tr, tn) {
                            var ta;
                            switch (this._length = Math.max(this._length, tr + 1), this._length >= this._maxLength && this.doubleArrayLength(), ts) {
                                case "v":
                                    ta = this.v;
                                    break;
                                case "i":
                                    ta = this.i;
                                    break;
                                case "o":
                                    ta = this.o;
                                    break;
                                default:
                                    ta = []
                            }
                            ta[tr] && (!ta[tr] || tn) || (ta[tr] = pointPool.newElement()), ta[tr][0] = te, ta[tr][1] = ti
                        }, ShapePath.prototype.setTripleAt = function(te, ti, ts, tr, tn, ta, to, th) {
                            this.setXYAt(te, ti, "v", to, th), this.setXYAt(ts, tr, "o", to, th), this.setXYAt(tn, ta, "i", to, th)
                        }, ShapePath.prototype.reverse = function() {
                            var te = new ShapePath;
                            te.setPathData(this.c, this._length);
                            var ti = this.v,
                                ts = this.o,
                                tr = this.i,
                                tn = 0;
                            this.c && (te.setTripleAt(ti[0][0], ti[0][1], tr[0][0], tr[0][1], ts[0][0], ts[0][1], 0, !1), tn = 1);
                            var ta, to = this._length - 1,
                                th = this._length;
                            for (ta = tn; ta < th; ta += 1) te.setTripleAt(ti[to][0], ti[to][1], tr[to][0], tr[to][1], ts[to][0], ts[to][1], ta, !1), to -= 1;
                            return te
                        }, ShapePath.prototype.length = function() {
                            return this._length
                        };
                        var factory, shapePool = (factory = poolFactory(4, function() {
                            return new ShapePath
                        }, function(te) {
                            var ti, ts = te._length;
                            for (ti = 0; ti < ts; ti += 1) pointPool.release(te.v[ti]), pointPool.release(te.i[ti]), pointPool.release(te.o[ti]), te.v[ti] = null, te.i[ti] = null, te.o[ti] = null;
                            te._length = 0, te.c = !1
                        }), factory.clone = function(te) {
                            var ti, ts = factory.newElement(),
                                tr = void 0 === te._length ? te.v.length : te._length;
                            for (ts.setLength(tr), ts.c = te.c, ti = 0; ti < tr; ti += 1) ts.setTripleAt(te.v[ti][0], te.v[ti][1], te.o[ti][0], te.o[ti][1], te.i[ti][0], te.i[ti][1], ti);
                            return ts
                        }, factory);

                        function ShapeCollection() {
                            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                        }
                        ShapeCollection.prototype.addShape = function(te) {
                            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = te, this._length += 1
                        }, ShapeCollection.prototype.releaseShapes = function() {
                            var te;
                            for (te = 0; te < this._length; te += 1) shapePool.release(this.shapes[te]);
                            this._length = 0
                        };
                        var ob, _length, _maxLength, pool, shapeCollectionPool = (ob = {
                                newShapeCollection: function() {
                                    return _length ? pool[_length -= 1] : new ShapeCollection
                                },
                                release: function(te) {
                                    var ti, ts = te._length;
                                    for (ti = 0; ti < ts; ti += 1) shapePool.release(te.shapes[ti]);
                                    te._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = te, _length += 1
                                }
                            }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
                            ShapePropertyFactory = function() {
                                function te(te, ti, ts) {
                                    var tr, tn, ta, to, th, tl, tp, tf, tc, tu = ts.lastIndex,
                                        tm = this.keyframes;
                                    if (te < tm[0].t - this.offsetTime) tr = tm[0].s[0], ta = !0, tu = 0;
                                    else if (te >= tm[tm.length - 1].t - this.offsetTime) tr = tm[tm.length - 1].s ? tm[tm.length - 1].s[0] : tm[tm.length - 2].e[0], ta = !0;
                                    else {
                                        for (var td, tg, ty, tv, tb = tu, tx = tm.length - 1, tk = !0; tk && (tg = tm[tb], !((ty = tm[tb + 1]).t - this.offsetTime > te));) tb < tx - 1 ? tb += 1 : tk = !1;
                                        tv = this.keyframesMetadata[tb] || {}, tu = tb, (ta = 1 === tg.h) || (te >= ty.t - this.offsetTime ? tf = 1 : te < tg.t - this.offsetTime ? tf = 0 : (tv.__fnct ? td = tv.__fnct : (td = BezierFactory.getBezierEasing(tg.o.x, tg.o.y, tg.i.x, tg.i.y).get, tv.__fnct = td), tf = td((te - (tg.t - this.offsetTime)) / (ty.t - this.offsetTime - (tg.t - this.offsetTime)))), tn = ty.s ? ty.s[0] : tg.e[0]), tr = tg.s[0]
                                    }
                                    for (tl = ti._length, tp = tr.i[0].length, ts.lastIndex = tu, to = 0; to < tl; to += 1)
                                        for (th = 0; th < tp; th += 1) tc = ta ? tr.i[to][th] : tr.i[to][th] + (tn.i[to][th] - tr.i[to][th]) * tf, ti.i[to][th] = tc, tc = ta ? tr.o[to][th] : tr.o[to][th] + (tn.o[to][th] - tr.o[to][th]) * tf, ti.o[to][th] = tc, tc = ta ? tr.v[to][th] : tr.v[to][th] + (tn.v[to][th] - tr.v[to][th]) * tf, ti.v[to][th] = tc
                                }

                                function ti() {
                                    var te = this.comp.renderedFrame - this.offsetTime,
                                        ti = this.keyframes[0].t - this.offsetTime,
                                        ts = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                        tr = this._caching.lastFrame;
                                    return -999999 !== tr && (tr < ti && te < ti || tr > ts && te > ts) || (this._caching.lastIndex = tr < te ? this._caching.lastIndex : 0, this.interpolateShape(te, this.pv, this._caching)), this._caching.lastFrame = te, this.pv
                                }

                                function ts() {
                                    this.paths = this.localShapeCollection
                                }

                                function tr(te) {
                                    (function(te, ti) {
                                        if (te._length !== ti._length || te.c !== ti.c) return !1;
                                        var ts, tr = te._length;
                                        for (ts = 0; ts < tr; ts += 1)
                                            if (te.v[ts][0] !== ti.v[ts][0] || te.v[ts][1] !== ti.v[ts][1] || te.o[ts][0] !== ti.o[ts][0] || te.o[ts][1] !== ti.o[ts][1] || te.i[ts][0] !== ti.i[ts][0] || te.i[ts][1] !== ti.i[ts][1]) return !1;
                                        return !0
                                    })(this.v, te) || (this.v = shapePool.clone(te), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                                }

                                function tn() {
                                    if (this.elem.globalData.frameId !== this.frameId) {
                                        if (this.effectsSequence.length) {
                                            if (this.lock) this.setVValue(this.pv);
                                            else {
                                                this.lock = !0, this._mdf = !1, te = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                                var te, ti, ts = this.effectsSequence.length;
                                                for (ti = 0; ti < ts; ti += 1) te = this.effectsSequence[ti](te);
                                                this.setVValue(te), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                            }
                                        } else this._mdf = !1
                                    }
                                }

                                function ta(te, ti, tr) {
                                    this.propType = "shape", this.comp = te.comp, this.container = te, this.elem = te, this.data = ti, this.k = !1, this.kf = !1, this._mdf = !1;
                                    var tn = 3 === tr ? ti.pt.k : ti.ks.k;
                                    this.v = shapePool.clone(tn), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = ts, this.effectsSequence = []
                                }

                                function to(te) {
                                    this.effectsSequence.push(te), this.container.addDynamicProperty(this)
                                }

                                function th(te, tr, tn) {
                                    this.propType = "shape", this.comp = te.comp, this.elem = te, this.container = te, this.offsetTime = te.data.st, this.keyframes = 3 === tn ? tr.pt.k : tr.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                    var ta = this.keyframes[0].s[0].i.length;
                                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, ta), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = ts, this._caching = {
                                        lastFrame: -999999,
                                        lastIndex: 0
                                    }, this.effectsSequence = [ti.bind(this)]
                                }
                                ta.prototype.interpolateShape = te, ta.prototype.getValue = tn, ta.prototype.setVValue = tr, ta.prototype.addEffect = to, th.prototype.getValue = tn, th.prototype.interpolateShape = te, th.prototype.setVValue = tr, th.prototype.addEffect = to;
                                var tl = function() {
                                        var te = roundCorner;

                                        function ti(te, ti) {
                                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = ti.d, this.elem = te, this.comp = te.comp, this.frameId = -1, this.initDynamicPropertyContainer(te), this.p = PropertyFactory.getProp(te, ti.p, 1, 0, this), this.s = PropertyFactory.getProp(te, ti.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                        }
                                        return ti.prototype = {
                                            reset: ts,
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                            },
                                            convertEllToPath: function() {
                                                var ti = this.p.v[0],
                                                    ts = this.p.v[1],
                                                    tr = this.s.v[0] / 2,
                                                    tn = this.s.v[1] / 2,
                                                    ta = 3 !== this.d,
                                                    to = this.v;
                                                to.v[0][0] = ti, to.v[0][1] = ts - tn, to.v[1][0] = ta ? ti + tr : ti - tr, to.v[1][1] = ts, to.v[2][0] = ti, to.v[2][1] = ts + tn, to.v[3][0] = ta ? ti - tr : ti + tr, to.v[3][1] = ts, to.i[0][0] = ta ? ti - tr * te : ti + tr * te, to.i[0][1] = ts - tn, to.i[1][0] = ta ? ti + tr : ti - tr, to.i[1][1] = ts - tn * te, to.i[2][0] = ta ? ti + tr * te : ti - tr * te, to.i[2][1] = ts + tn, to.i[3][0] = ta ? ti - tr : ti + tr, to.i[3][1] = ts + tn * te, to.o[0][0] = ta ? ti + tr * te : ti - tr * te, to.o[0][1] = ts - tn, to.o[1][0] = ta ? ti + tr : ti - tr, to.o[1][1] = ts + tn * te, to.o[2][0] = ta ? ti - tr * te : ti + tr * te, to.o[2][1] = ts + tn, to.o[3][0] = ta ? ti - tr : ti + tr, to.o[3][1] = ts - tn * te
                                            }
                                        }, extendPrototype([DynamicPropertyContainer], ti), ti
                                    }(),
                                    tp = function() {
                                        function te(te, ti) {
                                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = te, this.comp = te.comp, this.data = ti, this.frameId = -1, this.d = ti.d, this.initDynamicPropertyContainer(te), 1 === ti.sy ? (this.ir = PropertyFactory.getProp(te, ti.ir, 0, 0, this), this.is = PropertyFactory.getProp(te, ti.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(te, ti.pt, 0, 0, this), this.p = PropertyFactory.getProp(te, ti.p, 1, 0, this), this.r = PropertyFactory.getProp(te, ti.r, 0, degToRads, this), this.or = PropertyFactory.getProp(te, ti.or, 0, 0, this), this.os = PropertyFactory.getProp(te, ti.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                        }
                                        return te.prototype = {
                                            reset: ts,
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                            },
                                            convertStarToPath: function() {
                                                var te, ti, ts, tr, tn = 2 * Math.floor(this.pt.v),
                                                    ta = 2 * Math.PI / tn,
                                                    to = !0,
                                                    th = this.or.v,
                                                    tl = this.ir.v,
                                                    tp = this.os.v,
                                                    tf = this.is.v,
                                                    tc = 2 * Math.PI * th / (2 * tn),
                                                    tu = 2 * Math.PI * tl / (2 * tn),
                                                    tm = -Math.PI / 2;
                                                tm += this.r.v;
                                                var td = 3 === this.data.d ? -1 : 1;
                                                for (this.v._length = 0, te = 0; te < tn; te += 1) {
                                                    ts = to ? tp : tf, tr = to ? tc : tu;
                                                    var tg = (ti = to ? th : tl) * Math.cos(tm),
                                                        ty = ti * Math.sin(tm),
                                                        tv = 0 === tg && 0 === ty ? 0 : ty / Math.sqrt(tg * tg + ty * ty),
                                                        tb = 0 === tg && 0 === ty ? 0 : -tg / Math.sqrt(tg * tg + ty * ty);
                                                    tg += +this.p.v[0], ty += +this.p.v[1], this.v.setTripleAt(tg, ty, tg - tv * tr * ts * td, ty - tb * tr * ts * td, tg + tv * tr * ts * td, ty + tb * tr * ts * td, te, !0), to = !to, tm += ta * td
                                                }
                                            },
                                            convertPolygonToPath: function() {
                                                var te, ti = Math.floor(this.pt.v),
                                                    ts = 2 * Math.PI / ti,
                                                    tr = this.or.v,
                                                    tn = this.os.v,
                                                    ta = 2 * Math.PI * tr / (4 * ti),
                                                    to = -(.5 * Math.PI),
                                                    th = 3 === this.data.d ? -1 : 1;
                                                for (to += this.r.v, this.v._length = 0, te = 0; te < ti; te += 1) {
                                                    var tl = tr * Math.cos(to),
                                                        tp = tr * Math.sin(to),
                                                        tf = 0 === tl && 0 === tp ? 0 : tp / Math.sqrt(tl * tl + tp * tp),
                                                        tc = 0 === tl && 0 === tp ? 0 : -tl / Math.sqrt(tl * tl + tp * tp);
                                                    tl += +this.p.v[0], tp += +this.p.v[1], this.v.setTripleAt(tl, tp, tl - tf * ta * tn * th, tp - tc * ta * tn * th, tl + tf * ta * tn * th, tp + tc * ta * tn * th, te, !0), to += ts * th
                                                }
                                                this.paths.length = 0, this.paths[0] = this.v
                                            }
                                        }, extendPrototype([DynamicPropertyContainer], te), te
                                    }(),
                                    tf = function() {
                                        function te(te, ti) {
                                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = te, this.comp = te.comp, this.frameId = -1, this.d = ti.d, this.initDynamicPropertyContainer(te), this.p = PropertyFactory.getProp(te, ti.p, 1, 0, this), this.s = PropertyFactory.getProp(te, ti.s, 1, 0, this), this.r = PropertyFactory.getProp(te, ti.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                        }
                                        return te.prototype = {
                                            convertRectToPath: function() {
                                                var te = this.p.v[0],
                                                    ti = this.p.v[1],
                                                    ts = this.s.v[0] / 2,
                                                    tr = this.s.v[1] / 2,
                                                    tn = bmMin(ts, tr, this.r.v),
                                                    ta = tn * (1 - roundCorner);
                                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(te + ts, ti - tr + tn, te + ts, ti - tr + tn, te + ts, ti - tr + ta, 0, !0), this.v.setTripleAt(te + ts, ti + tr - tn, te + ts, ti + tr - ta, te + ts, ti + tr - tn, 1, !0), 0 !== tn ? (this.v.setTripleAt(te + ts - tn, ti + tr, te + ts - tn, ti + tr, te + ts - ta, ti + tr, 2, !0), this.v.setTripleAt(te - ts + tn, ti + tr, te - ts + ta, ti + tr, te - ts + tn, ti + tr, 3, !0), this.v.setTripleAt(te - ts, ti + tr - tn, te - ts, ti + tr - tn, te - ts, ti + tr - ta, 4, !0), this.v.setTripleAt(te - ts, ti - tr + tn, te - ts, ti - tr + ta, te - ts, ti - tr + tn, 5, !0), this.v.setTripleAt(te - ts + tn, ti - tr, te - ts + tn, ti - tr, te - ts + ta, ti - tr, 6, !0), this.v.setTripleAt(te + ts - tn, ti - tr, te + ts - ta, ti - tr, te + ts - tn, ti - tr, 7, !0)) : (this.v.setTripleAt(te - ts, ti + tr, te - ts + ta, ti + tr, te - ts, ti + tr, 2), this.v.setTripleAt(te - ts, ti - tr, te - ts, ti - tr + ta, te - ts, ti - tr, 3))) : (this.v.setTripleAt(te + ts, ti - tr + tn, te + ts, ti - tr + ta, te + ts, ti - tr + tn, 0, !0), 0 !== tn ? (this.v.setTripleAt(te + ts - tn, ti - tr, te + ts - tn, ti - tr, te + ts - ta, ti - tr, 1, !0), this.v.setTripleAt(te - ts + tn, ti - tr, te - ts + ta, ti - tr, te - ts + tn, ti - tr, 2, !0), this.v.setTripleAt(te - ts, ti - tr + tn, te - ts, ti - tr + tn, te - ts, ti - tr + ta, 3, !0), this.v.setTripleAt(te - ts, ti + tr - tn, te - ts, ti + tr - ta, te - ts, ti + tr - tn, 4, !0), this.v.setTripleAt(te - ts + tn, ti + tr, te - ts + tn, ti + tr, te - ts + ta, ti + tr, 5, !0), this.v.setTripleAt(te + ts - tn, ti + tr, te + ts - ta, ti + tr, te + ts - tn, ti + tr, 6, !0), this.v.setTripleAt(te + ts, ti + tr - tn, te + ts, ti + tr - tn, te + ts, ti + tr - ta, 7, !0)) : (this.v.setTripleAt(te - ts, ti - tr, te - ts + ta, ti - tr, te - ts, ti - tr, 1, !0), this.v.setTripleAt(te - ts, ti + tr, te - ts, ti + tr - ta, te - ts, ti + tr, 2, !0), this.v.setTripleAt(te + ts, ti + tr, te + ts - ta, ti + tr, te + ts, ti + tr, 3, !0)))
                                            },
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                            },
                                            reset: ts
                                        }, extendPrototype([DynamicPropertyContainer], te), te
                                    }();
                                return {
                                    getShapeProp: function(te, ti, ts) {
                                        var tr;
                                        return 3 === ts || 4 === ts ? tr = (3 === ts ? ti.pt : ti.ks).k.length ? new th(te, ti, ts) : new ta(te, ti, ts) : 5 === ts ? tr = new tf(te, ti) : 6 === ts ? tr = new tl(te, ti) : 7 === ts && (tr = new tp(te, ti)), tr.k && te.addDynamicProperty(tr), tr
                                    },
                                    getConstructorFunction: function() {
                                        return ta
                                    },
                                    getKeyframedConstructorFunction: function() {
                                        return th
                                    }
                                }
                            }(),
                            Matrix = function() {
                                var te = Math.cos,
                                    ti = Math.sin,
                                    ts = Math.tan,
                                    tr = Math.round;

                                function tn() {
                                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                                }

                                function ta(ts) {
                                    if (0 === ts) return this;
                                    var tr = te(ts),
                                        tn = ti(ts);
                                    return this._t(tr, -tn, 0, 0, tn, tr, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function to(ts) {
                                    if (0 === ts) return this;
                                    var tr = te(ts),
                                        tn = ti(ts);
                                    return this._t(1, 0, 0, 0, 0, tr, -tn, 0, 0, tn, tr, 0, 0, 0, 0, 1)
                                }

                                function th(ts) {
                                    if (0 === ts) return this;
                                    var tr = te(ts),
                                        tn = ti(ts);
                                    return this._t(tr, 0, tn, 0, 0, 1, 0, 0, -tn, 0, tr, 0, 0, 0, 0, 1)
                                }

                                function tl(ts) {
                                    if (0 === ts) return this;
                                    var tr = te(ts),
                                        tn = ti(ts);
                                    return this._t(tr, -tn, 0, 0, tn, tr, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function tp(te, ti) {
                                    return this._t(1, ti, te, 1, 0, 0)
                                }

                                function tf(te, ti) {
                                    return this.shear(ts(te), ts(ti))
                                }

                                function tc(tr, tn) {
                                    var ta = te(tn),
                                        to = ti(tn);
                                    return this._t(ta, to, 0, 0, -to, ta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, ts(tr), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(ta, -to, 0, 0, to, ta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function tu(te, ti, ts) {
                                    return ts || 0 === ts || (ts = 1), 1 === te && 1 === ti && 1 === ts ? this : this._t(te, 0, 0, 0, 0, ti, 0, 0, 0, 0, ts, 0, 0, 0, 0, 1)
                                }

                                function tm(te, ti, ts, tr, tn, ta, to, th, tl, tp, tf, tc, tu, tm, td, tg) {
                                    return this.props[0] = te, this.props[1] = ti, this.props[2] = ts, this.props[3] = tr, this.props[4] = tn, this.props[5] = ta, this.props[6] = to, this.props[7] = th, this.props[8] = tl, this.props[9] = tp, this.props[10] = tf, this.props[11] = tc, this.props[12] = tu, this.props[13] = tm, this.props[14] = td, this.props[15] = tg, this
                                }

                                function td(te, ti, ts) {
                                    return ts = ts || 0, 0 !== te || 0 !== ti || 0 !== ts ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, te, ti, ts, 1) : this
                                }

                                function tg(te, ti, ts, tr, tn, ta, to, th, tl, tp, tf, tc, tu, tm, td, tg) {
                                    var ty = this.props;
                                    if (1 === te && 0 === ti && 0 === ts && 0 === tr && 0 === tn && 1 === ta && 0 === to && 0 === th && 0 === tl && 0 === tp && 1 === tf && 0 === tc) return ty[12] = ty[12] * te + ty[15] * tu, ty[13] = ty[13] * ta + ty[15] * tm, ty[14] = ty[14] * tf + ty[15] * td, ty[15] *= tg, this._identityCalculated = !1, this;
                                    var tv = ty[0],
                                        tb = ty[1],
                                        tx = ty[2],
                                        tk = ty[3],
                                        t_ = ty[4],
                                        tw = ty[5],
                                        tC = ty[6],
                                        tP = ty[7],
                                        tA = ty[8],
                                        tE = ty[9],
                                        tS = ty[10],
                                        tD = ty[11],
                                        tT = ty[12],
                                        tM = ty[13],
                                        tF = ty[14],
                                        tI = ty[15];
                                    return ty[0] = tv * te + tb * tn + tx * tl + tk * tu, ty[1] = tv * ti + tb * ta + tx * tp + tk * tm, ty[2] = tv * ts + tb * to + tx * tf + tk * td, ty[3] = tv * tr + tb * th + tx * tc + tk * tg, ty[4] = t_ * te + tw * tn + tC * tl + tP * tu, ty[5] = t_ * ti + tw * ta + tC * tp + tP * tm, ty[6] = t_ * ts + tw * to + tC * tf + tP * td, ty[7] = t_ * tr + tw * th + tC * tc + tP * tg, ty[8] = tA * te + tE * tn + tS * tl + tD * tu, ty[9] = tA * ti + tE * ta + tS * tp + tD * tm, ty[10] = tA * ts + tE * to + tS * tf + tD * td, ty[11] = tA * tr + tE * th + tS * tc + tD * tg, ty[12] = tT * te + tM * tn + tF * tl + tI * tu, ty[13] = tT * ti + tM * ta + tF * tp + tI * tm, ty[14] = tT * ts + tM * to + tF * tf + tI * td, ty[15] = tT * tr + tM * th + tF * tc + tI * tg, this._identityCalculated = !1, this
                                }

                                function ty() {
                                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                                }

                                function tv(te) {
                                    for (var ti = 0; ti < 16;) {
                                        if (te.props[ti] !== this.props[ti]) return !1;
                                        ti += 1
                                    }
                                    return !0
                                }

                                function tb(te) {
                                    var ti;
                                    for (ti = 0; ti < 16; ti += 1) te.props[ti] = this.props[ti];
                                    return te
                                }

                                function tx(te) {
                                    var ti;
                                    for (ti = 0; ti < 16; ti += 1) this.props[ti] = te[ti]
                                }

                                function tk(te, ti, ts) {
                                    return {
                                        x: te * this.props[0] + ti * this.props[4] + ts * this.props[8] + this.props[12],
                                        y: te * this.props[1] + ti * this.props[5] + ts * this.props[9] + this.props[13],
                                        z: te * this.props[2] + ti * this.props[6] + ts * this.props[10] + this.props[14]
                                    }
                                }

                                function t_(te, ti, ts) {
                                    return te * this.props[0] + ti * this.props[4] + ts * this.props[8] + this.props[12]
                                }

                                function tw(te, ti, ts) {
                                    return te * this.props[1] + ti * this.props[5] + ts * this.props[9] + this.props[13]
                                }

                                function tC(te, ti, ts) {
                                    return te * this.props[2] + ti * this.props[6] + ts * this.props[10] + this.props[14]
                                }

                                function tP() {
                                    var te = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                        ti = this.props[5] / te,
                                        ts = -this.props[1] / te,
                                        tr = -this.props[4] / te,
                                        tn = this.props[0] / te,
                                        ta = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / te,
                                        to = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / te,
                                        th = new Matrix;
                                    return th.props[0] = ti, th.props[1] = ts, th.props[4] = tr, th.props[5] = tn, th.props[12] = ta, th.props[13] = to, th
                                }

                                function tA(te) {
                                    return this.getInverseMatrix().applyToPointArray(te[0], te[1], te[2] || 0)
                                }

                                function tE(te) {
                                    var ti, ts = te.length,
                                        tr = [];
                                    for (ti = 0; ti < ts; ti += 1) tr[ti] = tA(te[ti]);
                                    return tr
                                }

                                function tS(te, ti, ts) {
                                    var tr = createTypedArray("float32", 6);
                                    if (this.isIdentity()) tr[0] = te[0], tr[1] = te[1], tr[2] = ti[0], tr[3] = ti[1], tr[4] = ts[0], tr[5] = ts[1];
                                    else {
                                        var tn = this.props[0],
                                            ta = this.props[1],
                                            to = this.props[4],
                                            th = this.props[5],
                                            tl = this.props[12],
                                            tp = this.props[13];
                                        tr[0] = te[0] * tn + te[1] * to + tl, tr[1] = te[0] * ta + te[1] * th + tp, tr[2] = ti[0] * tn + ti[1] * to + tl, tr[3] = ti[0] * ta + ti[1] * th + tp, tr[4] = ts[0] * tn + ts[1] * to + tl, tr[5] = ts[0] * ta + ts[1] * th + tp
                                    }
                                    return tr
                                }

                                function tD(te, ti, ts) {
                                    return this.isIdentity() ? [te, ti, ts] : [te * this.props[0] + ti * this.props[4] + ts * this.props[8] + this.props[12], te * this.props[1] + ti * this.props[5] + ts * this.props[9] + this.props[13], te * this.props[2] + ti * this.props[6] + ts * this.props[10] + this.props[14]]
                                }

                                function tT(te, ti) {
                                    if (this.isIdentity()) return te + "," + ti;
                                    var ts = this.props;
                                    return Math.round(100 * (te * ts[0] + ti * ts[4] + ts[12])) / 100 + "," + Math.round(100 * (te * ts[1] + ti * ts[5] + ts[13])) / 100
                                }

                                function tM() {
                                    for (var te = 0, ti = this.props, ts = "matrix3d("; te < 16;) ts += tr(1e4 * ti[te]) / 1e4 + (15 === te ? ")" : ","), te += 1;
                                    return ts
                                }

                                function tF(te) {
                                    return te < 1e-6 && te > 0 || te > -.000001 && te < 0 ? tr(1e4 * te) / 1e4 : te
                                }

                                function tI() {
                                    var te = this.props;
                                    return "matrix(" + tF(te[0]) + "," + tF(te[1]) + "," + tF(te[4]) + "," + tF(te[5]) + "," + tF(te[12]) + "," + tF(te[13]) + ")"
                                }
                                return function() {
                                    this.reset = tn, this.rotate = ta, this.rotateX = to, this.rotateY = th, this.rotateZ = tl, this.skew = tf, this.skewFromAxis = tc, this.shear = tp, this.scale = tu, this.setTransform = tm, this.translate = td, this.transform = tg, this.applyToPoint = tk, this.applyToX = t_, this.applyToY = tw, this.applyToZ = tC, this.applyToPointArray = tD, this.applyToTriplePoints = tS, this.applyToPointStringified = tT, this.toCSS = tM, this.to2dCSS = tI, this.clone = tb, this.cloneFromProps = tx, this.equals = tv, this.inversePoints = tE, this.inversePoint = tA, this.getInverseMatrix = tP, this._t = this.transform, this.isIdentity = ty, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                                }
                            }();

                        function _typeof$3(te) {
                            return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }
                        var lottie = {},
                            standalone = "__[STANDALONE]__",
                            animationData = "__[ANIMATIONDATA]__",
                            renderer = "";

                        function setLocation(te) {
                            setLocationHref(te)
                        }

                        function searchAnimations() {
                            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                        }

                        function setSubframeRendering(te) {
                            setSubframeEnabled(te)
                        }

                        function setPrefix(te) {
                            setIdPrefix(te)
                        }

                        function loadAnimation(te) {
                            return !0 === standalone && (te.animationData = JSON.parse(animationData)), animationManager.loadAnimation(te)
                        }

                        function setQuality(te) {
                            if ("string" == typeof te) switch (te) {
                                case "high":
                                    setDefaultCurveSegments(200);
                                    break;
                                default:
                                case "medium":
                                    setDefaultCurveSegments(50);
                                    break;
                                case "low":
                                    setDefaultCurveSegments(10)
                            } else !isNaN(te) && te > 1 && setDefaultCurveSegments(te);
                            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                        }

                        function inBrowser() {
                            return "undefined" != typeof navigator
                        }

                        function installPlugin(te, ti) {
                            "expressions" === te && setExpressionsPlugin(ti)
                        }

                        function getFactory(te) {
                            switch (te) {
                                case "propertyFactory":
                                    return PropertyFactory;
                                case "shapePropertyFactory":
                                    return ShapePropertyFactory;
                                case "matrix":
                                    return Matrix;
                                default:
                                    return null
                            }
                        }

                        function checkReady() {
                            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                        }

                        function getQueryVariable(te) {
                            for (var ti = queryString.split("&"), ts = 0; ts < ti.length; ts += 1) {
                                var tr = ti[ts].split("=");
                                if (decodeURIComponent(tr[0]) == te) return decodeURIComponent(tr[1])
                            }
                            return null
                        }
                        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
                        var queryString = "";
                        if (standalone) {
                            var scripts = document.getElementsByTagName("script"),
                                index = scripts.length - 1,
                                myScript = scripts[index] || {
                                    src: ""
                                };
                            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                        }
                        var readyStateCheckInterval = setInterval(checkReady, 100);
                        try {
                            "object" !== _typeof$3(exports) && (window.bodymovin = lottie)
                        } catch (t) {}
                        var ShapeModifiers = function() {
                            var te = {},
                                ti = {};
                            return te.registerModifier = function(te, ts) {
                                ti[te] || (ti[te] = ts)
                            }, te.getModifier = function(te, ts, tr) {
                                return new ti[te](ts, tr)
                            }, te
                        }();

                        function ShapeModifier() {}

                        function TrimModifier() {}

                        function PuckerAndBloatModifier() {}
                        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(te) {
                            if (!this.closed) {
                                te.sh.container.addDynamicProperty(te.sh);
                                var ti = {
                                    shape: te.sh,
                                    data: te,
                                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                                };
                                this.shapes.push(ti), this.addShapeToModifier(ti), this._isAnimated && te.setAsAnimated()
                            }
                        }, ShapeModifier.prototype.init = function(te, ti) {
                            this.shapes = [], this.elem = te, this.initDynamicPropertyContainer(te), this.initModifierProperties(te, ti), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, ShapeModifier.prototype.processKeys = function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(te, ti) {
                            this.s = PropertyFactory.getProp(te, ti.s, 0, .01, this), this.e = PropertyFactory.getProp(te, ti.e, 0, .01, this), this.o = PropertyFactory.getProp(te, ti.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = ti.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                        }, TrimModifier.prototype.addShapeToModifier = function(te) {
                            te.pathsData = []
                        }, TrimModifier.prototype.calculateShapeEdges = function(te, ti, ts, tr, tn) {
                            var ta = [];
                            ti <= 1 ? ta.push({
                                s: te,
                                e: ti
                            }) : te >= 1 ? ta.push({
                                s: te - 1,
                                e: ti - 1
                            }) : (ta.push({
                                s: te,
                                e: 1
                            }), ta.push({
                                s: 0,
                                e: ti - 1
                            }));
                            var to, th, tl = [],
                                tp = ta.length;
                            for (to = 0; to < tp; to += 1)(th = ta[to]).e * tn < tr || th.s * tn > tr + ts || tl.push([th.s * tn <= tr ? 0 : (th.s * tn - tr) / ts, th.e * tn >= tr + ts ? 1 : (th.e * tn - tr) / ts]);
                            return tl.length || tl.push([0, 0]), tl
                        }, TrimModifier.prototype.releasePathsData = function(te) {
                            var ti, ts = te.length;
                            for (ti = 0; ti < ts; ti += 1) segmentsLengthPool.release(te[ti]);
                            return te.length = 0, te
                        }, TrimModifier.prototype.processShapes = function(te) {
                            if (this._mdf || te) {
                                var ti = this.o.v % 360 / 360;
                                if (ti < 0 && (ti += 1), (tr = this.s.v > 1 ? 1 + ti : this.s.v < 0 ? 0 + ti : this.s.v + ti) > (tn = this.e.v > 1 ? 1 + ti : this.e.v < 0 ? 0 + ti : this.e.v + ti)) {
                                    var ts = tr;
                                    tr = tn, tn = ts
                                }
                                tr = 1e-4 * Math.round(1e4 * tr), tn = 1e-4 * Math.round(1e4 * tn), this.sValue = tr, this.eValue = tn
                            } else tr = this.sValue, tn = this.eValue;
                            var tr, tn, ta, to, th, tl, tp, tf, tc, tu = this.shapes.length,
                                tm = 0;
                            if (tn === tr)
                                for (to = 0; to < tu; to += 1) this.shapes[to].localShapeCollection.releaseShapes(), this.shapes[to].shape._mdf = !0, this.shapes[to].shape.paths = this.shapes[to].localShapeCollection, this._mdf && (this.shapes[to].pathsData.length = 0);
                            else if (1 === tn && 0 === tr || 0 === tn && 1 === tr) {
                                if (this._mdf)
                                    for (to = 0; to < tu; to += 1) this.shapes[to].pathsData.length = 0, this.shapes[to].shape._mdf = !0
                            } else {
                                var td, tg, ty = [];
                                for (to = 0; to < tu; to += 1)
                                    if ((td = this.shapes[to]).shape._mdf || this._mdf || te || 2 === this.m) {
                                        if (tl = (ta = td.shape.paths)._length, tc = 0, !td.shape._mdf && td.pathsData.length) tc = td.totalShapeLength;
                                        else {
                                            for (tp = this.releasePathsData(td.pathsData), th = 0; th < tl; th += 1) tf = bez.getSegmentsLength(ta.shapes[th]), tp.push(tf), tc += tf.totalLength;
                                            td.totalShapeLength = tc, td.pathsData = tp
                                        }
                                        tm += tc, td.shape._mdf = !0
                                    } else td.shape.paths = td.localShapeCollection;
                                var tv, tb = tr,
                                    tx = tn,
                                    tk = 0;
                                for (to = tu - 1; to >= 0; to -= 1)
                                    if ((td = this.shapes[to]).shape._mdf) {
                                        for ((tg = td.localShapeCollection).releaseShapes(), 2 === this.m && tu > 1 ? (tv = this.calculateShapeEdges(tr, tn, td.totalShapeLength, tk, tm), tk += td.totalShapeLength) : tv = [
                                                [tb, tx]
                                            ], tl = tv.length, th = 0; th < tl; th += 1) {
                                            tb = tv[th][0], tx = tv[th][1], ty.length = 0, tx <= 1 ? ty.push({
                                                s: td.totalShapeLength * tb,
                                                e: td.totalShapeLength * tx
                                            }) : tb >= 1 ? ty.push({
                                                s: td.totalShapeLength * (tb - 1),
                                                e: td.totalShapeLength * (tx - 1)
                                            }) : (ty.push({
                                                s: td.totalShapeLength * tb,
                                                e: td.totalShapeLength
                                            }), ty.push({
                                                s: 0,
                                                e: td.totalShapeLength * (tx - 1)
                                            }));
                                            var t_ = this.addShapes(td, ty[0]);
                                            if (ty[0].s !== ty[0].e) {
                                                if (ty.length > 1) {
                                                    if (td.shape.paths.shapes[td.shape.paths._length - 1].c) {
                                                        var tw = t_.pop();
                                                        this.addPaths(t_, tg), t_ = this.addShapes(td, ty[1], tw)
                                                    } else this.addPaths(t_, tg), t_ = this.addShapes(td, ty[1])
                                                }
                                                this.addPaths(t_, tg)
                                            }
                                        }
                                        td.shape.paths = tg
                                    }
                            }
                        }, TrimModifier.prototype.addPaths = function(te, ti) {
                            var ts, tr = te.length;
                            for (ts = 0; ts < tr; ts += 1) ti.addShape(te[ts])
                        }, TrimModifier.prototype.addSegment = function(te, ti, ts, tr, tn, ta, to) {
                            tn.setXYAt(ti[0], ti[1], "o", ta), tn.setXYAt(ts[0], ts[1], "i", ta + 1), to && tn.setXYAt(te[0], te[1], "v", ta), tn.setXYAt(tr[0], tr[1], "v", ta + 1)
                        }, TrimModifier.prototype.addSegmentFromArray = function(te, ti, ts, tr) {
                            ti.setXYAt(te[1], te[5], "o", ts), ti.setXYAt(te[2], te[6], "i", ts + 1), tr && ti.setXYAt(te[0], te[4], "v", ts), ti.setXYAt(te[3], te[7], "v", ts + 1)
                        }, TrimModifier.prototype.addShapes = function(te, ti, ts) {
                            var tr, tn, ta, to, th, tl, tp, tf, tc = te.pathsData,
                                tu = te.shape.paths.shapes,
                                tm = te.shape.paths._length,
                                td = 0,
                                tg = [],
                                ty = !0;
                            for (ts ? (th = ts._length, tf = ts._length) : (ts = shapePool.newElement(), th = 0, tf = 0), tg.push(ts), tr = 0; tr < tm; tr += 1) {
                                for (tl = tc[tr].lengths, ts.c = tu[tr].c, ta = tu[tr].c ? tl.length : tl.length + 1, tn = 1; tn < ta; tn += 1)
                                    if (td + (to = tl[tn - 1]).addedLength < ti.s) td += to.addedLength, ts.c = !1;
                                    else {
                                        if (td > ti.e) {
                                            ts.c = !1;
                                            break
                                        }
                                        ti.s <= td && ti.e >= td + to.addedLength ? (this.addSegment(tu[tr].v[tn - 1], tu[tr].o[tn - 1], tu[tr].i[tn], tu[tr].v[tn], ts, th, ty), ty = !1) : (tp = bez.getNewSegment(tu[tr].v[tn - 1], tu[tr].v[tn], tu[tr].o[tn - 1], tu[tr].i[tn], (ti.s - td) / to.addedLength, (ti.e - td) / to.addedLength, tl[tn - 1]), this.addSegmentFromArray(tp, ts, th, ty), ty = !1, ts.c = !1), td += to.addedLength, th += 1
                                    }
                                if (tu[tr].c && tl.length) {
                                    if (to = tl[tn - 1], td <= ti.e) {
                                        var tv = tl[tn - 1].addedLength;
                                        ti.s <= td && ti.e >= td + tv ? (this.addSegment(tu[tr].v[tn - 1], tu[tr].o[tn - 1], tu[tr].i[0], tu[tr].v[0], ts, th, ty), ty = !1) : (tp = bez.getNewSegment(tu[tr].v[tn - 1], tu[tr].v[0], tu[tr].o[tn - 1], tu[tr].i[0], (ti.s - td) / tv, (ti.e - td) / tv, tl[tn - 1]), this.addSegmentFromArray(tp, ts, th, ty), ty = !1, ts.c = !1)
                                    } else ts.c = !1;
                                    td += to.addedLength, th += 1
                                }
                                if (ts._length && (ts.setXYAt(ts.v[tf][0], ts.v[tf][1], "i", tf), ts.setXYAt(ts.v[ts._length - 1][0], ts.v[ts._length - 1][1], "o", ts._length - 1)), td > ti.e) break;
                                tr < tm - 1 && (ts = shapePool.newElement(), ty = !0, tg.push(ts), th = 0)
                            }
                            return tg
                        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(te, ti) {
                            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(te, ti.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                        }, PuckerAndBloatModifier.prototype.processPath = function(te, ti) {
                            var ts = ti / 100,
                                tr = [0, 0],
                                tn = te._length,
                                ta = 0;
                            for (ta = 0; ta < tn; ta += 1) tr[0] += te.v[ta][0], tr[1] += te.v[ta][1];
                            tr[0] /= tn, tr[1] /= tn;
                            var to, th, tl, tp, tf, tc, tu = shapePool.newElement();
                            for (tu.c = te.c, ta = 0; ta < tn; ta += 1) to = te.v[ta][0] + (tr[0] - te.v[ta][0]) * ts, th = te.v[ta][1] + (tr[1] - te.v[ta][1]) * ts, tl = te.o[ta][0] + -((tr[0] - te.o[ta][0]) * ts), tp = te.o[ta][1] + -((tr[1] - te.o[ta][1]) * ts), tf = te.i[ta][0] + -((tr[0] - te.i[ta][0]) * ts), tc = te.i[ta][1] + -((tr[1] - te.i[ta][1]) * ts), tu.setTripleAt(to, th, tl, tp, tf, tc, ta);
                            return tu
                        }, PuckerAndBloatModifier.prototype.processShapes = function(te) {
                            var ti, ts, tr, tn, ta, to, th = this.shapes.length,
                                tl = this.amount.v;
                            if (0 !== tl)
                                for (ts = 0; ts < th; ts += 1) {
                                    if (to = (ta = this.shapes[ts]).localShapeCollection, ta.shape._mdf || this._mdf || te)
                                        for (to.releaseShapes(), ta.shape._mdf = !0, ti = ta.shape.paths.shapes, tn = ta.shape.paths._length, tr = 0; tr < tn; tr += 1) to.addShape(this.processPath(ti[tr], tl));
                                    ta.shape.paths = ta.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        };
                        var TransformPropertyFactory = function() {
                            var te = [0, 0];

                            function ti(te, ti, ts) {
                                if (this.elem = te, this.frameId = -1, this.propType = "transform", this.data = ti, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(ts || te), ti.p && ti.p.s ? (this.px = PropertyFactory.getProp(te, ti.p.x, 0, 0, this), this.py = PropertyFactory.getProp(te, ti.p.y, 0, 0, this), ti.p.z && (this.pz = PropertyFactory.getProp(te, ti.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(te, ti.p || {
                                        k: [0, 0, 0]
                                    }, 1, 0, this), ti.rx) {
                                    if (this.rx = PropertyFactory.getProp(te, ti.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(te, ti.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(te, ti.rz, 0, degToRads, this), ti.or.k[0].ti) {
                                        var tr, tn = ti.or.k.length;
                                        for (tr = 0; tr < tn; tr += 1) ti.or.k[tr].to = null, ti.or.k[tr].ti = null
                                    }
                                    this.or = PropertyFactory.getProp(te, ti.or, 1, degToRads, this), this.or.sh = !0
                                } else this.r = PropertyFactory.getProp(te, ti.r || {
                                    k: 0
                                }, 0, degToRads, this);
                                ti.sk && (this.sk = PropertyFactory.getProp(te, ti.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(te, ti.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(te, ti.a || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), this.s = PropertyFactory.getProp(te, ti.s || {
                                    k: [100, 100, 100]
                                }, 1, .01, this), ti.o ? this.o = PropertyFactory.getProp(te, ti.o, 0, .01, te) : this.o = {
                                    _mdf: !1,
                                    v: 1
                                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                            }
                            return ti.prototype = {
                                applyToMatrix: function(te) {
                                    var ti = this._mdf;
                                    this.iterateDynamicProperties(), this._mdf = this._mdf || ti, this.a && te.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && te.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && te.skewFromAxis(-this.sk.v, this.sa.v), this.r ? te.rotate(-this.r.v) : te.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? te.translate(this.px.v, this.py.v, -this.pz.v) : te.translate(this.px.v, this.py.v, 0) : te.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                },
                                getValue: function(ti) {
                                    if (this.elem.globalData.frameId !== this.frameId) {
                                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || ti) {
                                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                                if (ts = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (tr = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / ts, 0), tn = this.p.getValueAtTime(this.p.keyframes[0].t / ts, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (tr = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / ts, 0), tn = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / ts, 0)) : (tr = this.p.pv, tn = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / ts, this.p.offsetTime));
                                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                    tr = [], tn = [];
                                                    var ts, tr, tn, ta = this.px,
                                                        to = this.py;
                                                    ta._caching.lastFrame + ta.offsetTime <= ta.keyframes[0].t ? (tr[0] = ta.getValueAtTime((ta.keyframes[0].t + .01) / ts, 0), tr[1] = to.getValueAtTime((to.keyframes[0].t + .01) / ts, 0), tn[0] = ta.getValueAtTime(ta.keyframes[0].t / ts, 0), tn[1] = to.getValueAtTime(to.keyframes[0].t / ts, 0)) : ta._caching.lastFrame + ta.offsetTime >= ta.keyframes[ta.keyframes.length - 1].t ? (tr[0] = ta.getValueAtTime(ta.keyframes[ta.keyframes.length - 1].t / ts, 0), tr[1] = to.getValueAtTime(to.keyframes[to.keyframes.length - 1].t / ts, 0), tn[0] = ta.getValueAtTime((ta.keyframes[ta.keyframes.length - 1].t - .01) / ts, 0), tn[1] = to.getValueAtTime((to.keyframes[to.keyframes.length - 1].t - .01) / ts, 0)) : (tr = [ta.pv, to.pv], tn[0] = ta.getValueAtTime((ta._caching.lastFrame + ta.offsetTime - .01) / ts, ta.offsetTime), tn[1] = to.getValueAtTime((to._caching.lastFrame + to.offsetTime - .01) / ts, to.offsetTime))
                                                } else tr = tn = te;
                                                this.v.rotate(-Math.atan2(tr[1] - tn[1], tr[0] - tn[0]))
                                            }
                                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                        }
                                        this.frameId = this.elem.globalData.frameId
                                    }
                                },
                                precalculateMatrix: function() {
                                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                        }
                                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                    }
                                },
                                autoOrient: function() {}
                            }, extendPrototype([DynamicPropertyContainer], ti), ti.prototype.addDynamicProperty = function(te) {
                                this._addDynamicProperty(te), this.elem.addDynamicProperty(te), this._isDirty = !0
                            }, ti.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                                getTransformProperty: function(te, ts, tr) {
                                    return new ti(te, ts, tr)
                                }
                            }
                        }();

                        function RepeaterModifier() {}

                        function RoundCornersModifier() {}

                        function floatEqual(te, ti) {
                            return 1e5 * Math.abs(te - ti) <= Math.min(Math.abs(te), Math.abs(ti))
                        }

                        function floatZero(te) {
                            return 1e-5 >= Math.abs(te)
                        }

                        function lerp(te, ti, ts) {
                            return te * (1 - ts) + ti * ts
                        }

                        function lerpPoint(te, ti, ts) {
                            return [lerp(te[0], ti[0], ts), lerp(te[1], ti[1], ts)]
                        }

                        function quadRoots(te, ti, ts) {
                            if (0 === te) return [];
                            var tr = ti * ti - 4 * te * ts;
                            if (tr < 0) return [];
                            var tn = -ti / (2 * te);
                            if (0 === tr) return [tn];
                            var ta = Math.sqrt(tr) / (2 * te);
                            return [tn - ta, tn + ta]
                        }

                        function polynomialCoefficients(te, ti, ts, tr) {
                            return [3 * ti - te - 3 * ts + tr, 3 * te - 6 * ti + 3 * ts, -3 * te + 3 * ti, te]
                        }

                        function singlePoint(te) {
                            return new PolynomialBezier(te, te, te, te, !1)
                        }

                        function PolynomialBezier(te, ti, ts, tr, tn) {
                            tn && pointEqual(te, ti) && (ti = lerpPoint(te, tr, 1 / 3)), tn && pointEqual(ts, tr) && (ts = lerpPoint(te, tr, 2 / 3));
                            var ta = polynomialCoefficients(te[0], ti[0], ts[0], tr[0]),
                                to = polynomialCoefficients(te[1], ti[1], ts[1], tr[1]);
                            this.a = [ta[0], to[0]], this.b = [ta[1], to[1]], this.c = [ta[2], to[2]], this.d = [ta[3], to[3]], this.points = [te, ti, ts, tr]
                        }

                        function extrema(te, ti) {
                            var ts = te.points[0][ti],
                                tr = te.points[te.points.length - 1][ti];
                            if (ts > tr) {
                                var tn = tr;
                                tr = ts, ts = tn
                            }
                            for (var ta = quadRoots(3 * te.a[ti], 2 * te.b[ti], te.c[ti]), to = 0; to < ta.length; to += 1)
                                if (ta[to] > 0 && ta[to] < 1) {
                                    var th = te.point(ta[to])[ti];
                                    th < ts ? ts = th : th > tr && (tr = th)
                                }
                            return {
                                min: ts,
                                max: tr
                            }
                        }

                        function intersectData(te, ti, ts) {
                            var tr = te.boundingBox();
                            return {
                                cx: tr.cx,
                                cy: tr.cy,
                                width: tr.width,
                                height: tr.height,
                                bez: te,
                                t: (ti + ts) / 2,
                                t1: ti,
                                t2: ts
                            }
                        }

                        function splitData(te) {
                            var ti = te.bez.split(.5);
                            return [intersectData(ti[0], te.t1, te.t), intersectData(ti[1], te.t, te.t2)]
                        }

                        function boxIntersect(te, ti) {
                            return 2 * Math.abs(te.cx - ti.cx) < te.width + ti.width && 2 * Math.abs(te.cy - ti.cy) < te.height + ti.height
                        }

                        function intersectsImpl(te, ti, ts, tr, tn, ta) {
                            if (boxIntersect(te, ti)) {
                                if (ts >= ta || te.width <= tr && te.height <= tr && ti.width <= tr && ti.height <= tr) tn.push([te.t, ti.t]);
                                else {
                                    var to = splitData(te),
                                        th = splitData(ti);
                                    intersectsImpl(to[0], th[0], ts + 1, tr, tn, ta), intersectsImpl(to[0], th[1], ts + 1, tr, tn, ta), intersectsImpl(to[1], th[0], ts + 1, tr, tn, ta), intersectsImpl(to[1], th[1], ts + 1, tr, tn, ta)
                                }
                            }
                        }

                        function crossProduct(te, ti) {
                            return [te[1] * ti[2] - te[2] * ti[1], te[2] * ti[0] - te[0] * ti[2], te[0] * ti[1] - te[1] * ti[0]]
                        }

                        function lineIntersection(te, ti, ts, tr) {
                            var tn = [te[0], te[1], 1],
                                ta = [ti[0], ti[1], 1],
                                to = [ts[0], ts[1], 1],
                                th = [tr[0], tr[1], 1],
                                tl = crossProduct(crossProduct(tn, ta), crossProduct(to, th));
                            return floatZero(tl[2]) ? null : [tl[0] / tl[2], tl[1] / tl[2]]
                        }

                        function polarOffset(te, ti, ts) {
                            return [te[0] + Math.cos(ti) * ts, te[1] - Math.sin(ti) * ts]
                        }

                        function pointDistance(te, ti) {
                            return Math.hypot(te[0] - ti[0], te[1] - ti[1])
                        }

                        function pointEqual(te, ti) {
                            return floatEqual(te[0], ti[0]) && floatEqual(te[1], ti[1])
                        }

                        function ZigZagModifier() {}

                        function setPoint(te, ti, ts, tr, tn, ta, to) {
                            var th = ts - Math.PI / 2,
                                tl = ts + Math.PI / 2,
                                tp = ti[0] + Math.cos(ts) * tr * tn,
                                tf = ti[1] - Math.sin(ts) * tr * tn;
                            te.setTripleAt(tp, tf, tp + Math.cos(th) * ta, tf - Math.sin(th) * ta, tp + Math.cos(tl) * to, tf - Math.sin(tl) * to, te.length())
                        }

                        function getPerpendicularVector(te, ti) {
                            var ts = [ti[0] - te[0], ti[1] - te[1]],
                                tr = -(.5 * Math.PI);
                            return [Math.cos(tr) * ts[0] - Math.sin(tr) * ts[1], Math.sin(tr) * ts[0] + Math.cos(tr) * ts[1]]
                        }

                        function getProjectingAngle(te, ti) {
                            var ts = 0 === ti ? te.length() - 1 : ti - 1,
                                tr = (ti + 1) % te.length(),
                                tn = getPerpendicularVector(te.v[ts], te.v[tr]);
                            return Math.atan2(0, 1) - Math.atan2(tn[1], tn[0])
                        }

                        function zigZagCorner(te, ti, ts, tr, tn, ta, to) {
                            var th = getProjectingAngle(ti, ts),
                                tl = ti.v[ts % ti._length],
                                tp = ti.v[0 === ts ? ti._length - 1 : ts - 1],
                                tf = ti.v[(ts + 1) % ti._length],
                                tc = 2 === ta ? Math.sqrt(Math.pow(tl[0] - tp[0], 2) + Math.pow(tl[1] - tp[1], 2)) : 0,
                                tu = 2 === ta ? Math.sqrt(Math.pow(tl[0] - tf[0], 2) + Math.pow(tl[1] - tf[1], 2)) : 0;
                            setPoint(te, ti.v[ts % ti._length], th, to, tr, tu / (2 * (tn + 1)), tc / (2 * (tn + 1)), ta)
                        }

                        function zigZagSegment(te, ti, ts, tr, tn, ta) {
                            for (var to = 0; to < tr; to += 1) {
                                var th = (to + 1) / (tr + 1),
                                    tl = 2 === tn ? Math.sqrt(Math.pow(ti.points[3][0] - ti.points[0][0], 2) + Math.pow(ti.points[3][1] - ti.points[0][1], 2)) : 0,
                                    tp = ti.normalAngle(th);
                                setPoint(te, ti.point(th), tp, ta, ts, tl / (2 * (tr + 1)), tl / (2 * (tr + 1)), tn), ta = -ta
                            }
                            return ta
                        }

                        function linearOffset(te, ti, ts) {
                            var tr = Math.atan2(ti[0] - te[0], ti[1] - te[1]);
                            return [polarOffset(te, tr, ts), polarOffset(ti, tr, ts)]
                        }

                        function offsetSegment(te, ti) {
                            ts = (tl = linearOffset(te.points[0], te.points[1], ti))[0], tr = tl[1], tn = (tl = linearOffset(te.points[1], te.points[2], ti))[0], ta = tl[1], to = (tl = linearOffset(te.points[2], te.points[3], ti))[0], th = tl[1];
                            var ts, tr, tn, ta, to, th, tl, tp = lineIntersection(ts, tr, tn, ta);
                            null === tp && (tp = tr);
                            var tf = lineIntersection(to, th, tn, ta);
                            return null === tf && (tf = to), new PolynomialBezier(ts, tp, tf, th)
                        }

                        function joinLines(te, ti, ts, tr, tn) {
                            var ta = ti.points[3],
                                to = ts.points[0];
                            if (3 === tr || pointEqual(ta, to)) return ta;
                            if (2 === tr) {
                                var th = -ti.tangentAngle(1),
                                    tl = -ts.tangentAngle(0) + Math.PI,
                                    tp = lineIntersection(ta, polarOffset(ta, th + Math.PI / 2, 100), to, polarOffset(to, th + Math.PI / 2, 100)),
                                    tf = tp ? pointDistance(tp, ta) : pointDistance(ta, to) / 2,
                                    tc = polarOffset(ta, th, 2 * tf * roundCorner);
                                return te.setXYAt(tc[0], tc[1], "o", te.length() - 1), tc = polarOffset(to, tl, 2 * tf * roundCorner), te.setTripleAt(to[0], to[1], to[0], to[1], tc[0], tc[1], te.length()), to
                            }
                            var tu = lineIntersection(pointEqual(ta, ti.points[2]) ? ti.points[0] : ti.points[2], ta, to, pointEqual(to, ts.points[1]) ? ts.points[3] : ts.points[1]);
                            return tu && pointDistance(tu, ta) < tn ? (te.setTripleAt(tu[0], tu[1], tu[0], tu[1], tu[0], tu[1], te.length()), tu) : ta
                        }

                        function getIntersection(te, ti) {
                            var ts = te.intersections(ti);
                            return ts.length && floatEqual(ts[0][0], 1) && ts.shift(), ts.length ? ts[0] : null
                        }

                        function pruneSegmentIntersection(te, ti) {
                            var ts = te.slice(),
                                tr = ti.slice(),
                                tn = getIntersection(te[te.length - 1], ti[0]);
                            return tn && (ts[te.length - 1] = te[te.length - 1].split(tn[0])[0], tr[0] = ti[0].split(tn[1])[1]), te.length > 1 && ti.length > 1 && (tn = getIntersection(te[0], ti[ti.length - 1])) ? [
                                [te[0].split(tn[0])[0]],
                                [ti[ti.length - 1].split(tn[1])[1]]
                            ] : [ts, tr]
                        }

                        function pruneIntersections(te) {
                            for (var ti, ts = 1; ts < te.length; ts += 1) ti = pruneSegmentIntersection(te[ts - 1], te[ts]), te[ts - 1] = ti[0], te[ts] = ti[1];
                            return te.length > 1 && (ti = pruneSegmentIntersection(te[te.length - 1], te[0]), te[te.length - 1] = ti[0], te[0] = ti[1]), te
                        }

                        function offsetSegmentSplit(te, ti) {
                            var ts, tr, tn, ta, to = te.inflectionPoints();
                            if (0 === to.length) return [offsetSegment(te, ti)];
                            if (1 === to.length || floatEqual(to[1], 1)) return ts = (tn = te.split(to[0]))[0], tr = tn[1], [offsetSegment(ts, ti), offsetSegment(tr, ti)];
                            ts = (tn = te.split(to[0]))[0];
                            var th = (to[1] - to[0]) / (1 - to[0]);
                            return ta = (tn = tn[1].split(th))[0], tr = tn[1], [offsetSegment(ts, ti), offsetSegment(ta, ti), offsetSegment(tr, ti)]
                        }

                        function OffsetPathModifier() {}

                        function getFontProperties(te) {
                            for (var ti = te.fStyle ? te.fStyle.split(" ") : [], ts = "normal", tr = "normal", tn = ti.length, ta = 0; ta < tn; ta += 1) switch (ti[ta].toLowerCase()) {
                                case "italic":
                                    tr = "italic";
                                    break;
                                case "bold":
                                    ts = "700";
                                    break;
                                case "black":
                                    ts = "900";
                                    break;
                                case "medium":
                                    ts = "500";
                                    break;
                                case "regular":
                                case "normal":
                                    ts = "400";
                                    break;
                                case "light":
                                case "thin":
                                    ts = "200"
                            }
                            return {
                                style: tr,
                                weight: te.fWeight || ts
                            }
                        }
                        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(te, ti) {
                            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(te, ti.c, 0, null, this), this.o = PropertyFactory.getProp(te, ti.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(te, ti.tr, this), this.so = PropertyFactory.getProp(te, ti.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(te, ti.tr.eo, 0, .01, this), this.data = ti, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                        }, RepeaterModifier.prototype.applyTransforms = function(te, ti, ts, tr, tn, ta) {
                            var to = ta ? -1 : 1,
                                th = tr.s.v[0] + (1 - tr.s.v[0]) * (1 - tn),
                                tl = tr.s.v[1] + (1 - tr.s.v[1]) * (1 - tn);
                            te.translate(tr.p.v[0] * to * tn, tr.p.v[1] * to * tn, tr.p.v[2]), ti.translate(-tr.a.v[0], -tr.a.v[1], tr.a.v[2]), ti.rotate(-tr.r.v * to * tn), ti.translate(tr.a.v[0], tr.a.v[1], tr.a.v[2]), ts.translate(-tr.a.v[0], -tr.a.v[1], tr.a.v[2]), ts.scale(ta ? 1 / th : th, ta ? 1 / tl : tl), ts.translate(tr.a.v[0], tr.a.v[1], tr.a.v[2])
                        }, RepeaterModifier.prototype.init = function(te, ti, ts, tr) {
                            for (this.elem = te, this.arr = ti, this.pos = ts, this.elemsData = tr, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(te), this.initModifierProperties(te, ti[ts]); ts > 0;) ts -= 1, this._elements.unshift(ti[ts]);
                            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, RepeaterModifier.prototype.resetElements = function(te) {
                            var ti, ts = te.length;
                            for (ti = 0; ti < ts; ti += 1) te[ti]._processed = !1, "gr" === te[ti].ty && this.resetElements(te[ti].it)
                        }, RepeaterModifier.prototype.cloneElements = function(te) {
                            var ti = JSON.parse(JSON.stringify(te));
                            return this.resetElements(ti), ti
                        }, RepeaterModifier.prototype.changeGroupRender = function(te, ti) {
                            var ts, tr = te.length;
                            for (ts = 0; ts < tr; ts += 1) te[ts]._render = ti, "gr" === te[ts].ty && this.changeGroupRender(te[ts].it, ti)
                        }, RepeaterModifier.prototype.processShapes = function(te) {
                            var ti, ts, tr, tn, ta, to = !1;
                            if (this._mdf || te) {
                                var th, tl = Math.ceil(this.c.v);
                                if (this._groups.length < tl) {
                                    for (; this._groups.length < tl;) {
                                        var tp = {
                                            it: this.cloneElements(this._elements),
                                            ty: "gr"
                                        };
                                        tp.it.push({
                                            a: {
                                                a: 0,
                                                ix: 1,
                                                k: [0, 0]
                                            },
                                            nm: "Transform",
                                            o: {
                                                a: 0,
                                                ix: 7,
                                                k: 100
                                            },
                                            p: {
                                                a: 0,
                                                ix: 2,
                                                k: [0, 0]
                                            },
                                            r: {
                                                a: 1,
                                                ix: 6,
                                                k: [{
                                                    s: 0,
                                                    e: 0,
                                                    t: 0
                                                }, {
                                                    s: 0,
                                                    e: 0,
                                                    t: 1
                                                }]
                                            },
                                            s: {
                                                a: 0,
                                                ix: 3,
                                                k: [100, 100]
                                            },
                                            sa: {
                                                a: 0,
                                                ix: 5,
                                                k: 0
                                            },
                                            sk: {
                                                a: 0,
                                                ix: 4,
                                                k: 0
                                            },
                                            ty: "tr"
                                        }), this.arr.splice(0, 0, tp), this._groups.splice(0, 0, tp), this._currentCopies += 1
                                    }
                                    this.elem.reloadShapes(), to = !0
                                }
                                for (ta = 0, tr = 0; tr <= this._groups.length - 1; tr += 1) {
                                    if (th = ta < tl, this._groups[tr]._render = th, this.changeGroupRender(this._groups[tr].it, th), !th) {
                                        var tf = this.elemsData[tr].it,
                                            tc = tf[tf.length - 1];
                                        0 !== tc.transform.op.v ? (tc.transform.op._mdf = !0, tc.transform.op.v = 0) : tc.transform.op._mdf = !1
                                    }
                                    ta += 1
                                }
                                this._currentCopies = tl;
                                var tu = this.o.v,
                                    tm = tu % 1,
                                    td = tu > 0 ? Math.floor(tu) : Math.ceil(tu),
                                    tg = this.pMatrix.props,
                                    ty = this.rMatrix.props,
                                    tv = this.sMatrix.props;
                                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                                var tb, tx, tk = 0;
                                if (tu > 0) {
                                    for (; tk < td;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), tk += 1;
                                    tm && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, tm, !1), tk += tm)
                                } else if (tu < 0) {
                                    for (; tk > td;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), tk -= 1;
                                    tm && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -tm, !0), tk -= tm)
                                }
                                for (tr = 1 === this.data.m ? 0 : this._currentCopies - 1, tn = 1 === this.data.m ? 1 : -1, ta = this._currentCopies; ta;) {
                                    if (tx = (ts = (ti = this.elemsData[tr].it)[ti.length - 1].transform.mProps.v.props).length, ti[ti.length - 1].transform.mProps._mdf = !0, ti[ti.length - 1].transform.op._mdf = !0, ti[ti.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (tr / (this._currentCopies - 1)), 0 !== tk) {
                                        for ((0 !== tr && 1 === tn || tr !== this._currentCopies - 1 && -1 === tn) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(ty[0], ty[1], ty[2], ty[3], ty[4], ty[5], ty[6], ty[7], ty[8], ty[9], ty[10], ty[11], ty[12], ty[13], ty[14], ty[15]), this.matrix.transform(tv[0], tv[1], tv[2], tv[3], tv[4], tv[5], tv[6], tv[7], tv[8], tv[9], tv[10], tv[11], tv[12], tv[13], tv[14], tv[15]), this.matrix.transform(tg[0], tg[1], tg[2], tg[3], tg[4], tg[5], tg[6], tg[7], tg[8], tg[9], tg[10], tg[11], tg[12], tg[13], tg[14], tg[15]), tb = 0; tb < tx; tb += 1) ts[tb] = this.matrix.props[tb];
                                        this.matrix.reset()
                                    } else
                                        for (this.matrix.reset(), tb = 0; tb < tx; tb += 1) ts[tb] = this.matrix.props[tb];
                                    tk += 1, ta -= 1, tr += tn
                                }
                            } else
                                for (ta = this._currentCopies, tr = 0, tn = 1; ta;) ts = (ti = this.elemsData[tr].it)[ti.length - 1].transform.mProps.v.props, ti[ti.length - 1].transform.mProps._mdf = !1, ti[ti.length - 1].transform.op._mdf = !1, ta -= 1, tr += tn;
                            return to
                        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(te, ti) {
                            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(te, ti.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                        }, RoundCornersModifier.prototype.processPath = function(te, ti) {
                            var ts, tr = shapePool.newElement();
                            tr.c = te.c;
                            var tn, ta, to, th, tl, tp, tf, tc, tu, tm, td, tg, ty = te._length,
                                tv = 0;
                            for (ts = 0; ts < ty; ts += 1) tn = te.v[ts], to = te.o[ts], ta = te.i[ts], tn[0] === to[0] && tn[1] === to[1] && tn[0] === ta[0] && tn[1] === ta[1] ? 0 !== ts && ts !== ty - 1 || te.c ? (th = 0 === ts ? te.v[ty - 1] : te.v[ts - 1], tp = (tl = Math.sqrt(Math.pow(tn[0] - th[0], 2) + Math.pow(tn[1] - th[1], 2))) ? Math.min(tl / 2, ti) / tl : 0, tf = td = tn[0] + (th[0] - tn[0]) * tp, tc = tg = tn[1] - (tn[1] - th[1]) * tp, tu = tf - (tf - tn[0]) * roundCorner, tm = tc - (tc - tn[1]) * roundCorner, tr.setTripleAt(tf, tc, tu, tm, td, tg, tv), tv += 1, th = ts === ty - 1 ? te.v[0] : te.v[ts + 1], tp = (tl = Math.sqrt(Math.pow(tn[0] - th[0], 2) + Math.pow(tn[1] - th[1], 2))) ? Math.min(tl / 2, ti) / tl : 0, tf = tu = tn[0] + (th[0] - tn[0]) * tp, tc = tm = tn[1] + (th[1] - tn[1]) * tp, td = tf - (tf - tn[0]) * roundCorner, tg = tc - (tc - tn[1]) * roundCorner, tr.setTripleAt(tf, tc, tu, tm, td, tg, tv)) : tr.setTripleAt(tn[0], tn[1], to[0], to[1], ta[0], ta[1], tv) : tr.setTripleAt(te.v[ts][0], te.v[ts][1], te.o[ts][0], te.o[ts][1], te.i[ts][0], te.i[ts][1], tv), tv += 1;
                            return tr
                        }, RoundCornersModifier.prototype.processShapes = function(te) {
                            var ti, ts, tr, tn, ta, to, th = this.shapes.length,
                                tl = this.rd.v;
                            if (0 !== tl)
                                for (ts = 0; ts < th; ts += 1) {
                                    if (to = (ta = this.shapes[ts]).localShapeCollection, ta.shape._mdf || this._mdf || te)
                                        for (to.releaseShapes(), ta.shape._mdf = !0, ti = ta.shape.paths.shapes, tn = ta.shape.paths._length, tr = 0; tr < tn; tr += 1) to.addShape(this.processPath(ti[tr], tl));
                                    ta.shape.paths = ta.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        }, PolynomialBezier.prototype.point = function(te) {
                            return [((this.a[0] * te + this.b[0]) * te + this.c[0]) * te + this.d[0], ((this.a[1] * te + this.b[1]) * te + this.c[1]) * te + this.d[1]]
                        }, PolynomialBezier.prototype.derivative = function(te) {
                            return [(3 * te * this.a[0] + 2 * this.b[0]) * te + this.c[0], (3 * te * this.a[1] + 2 * this.b[1]) * te + this.c[1]]
                        }, PolynomialBezier.prototype.tangentAngle = function(te) {
                            var ti = this.derivative(te);
                            return Math.atan2(ti[1], ti[0])
                        }, PolynomialBezier.prototype.normalAngle = function(te) {
                            var ti = this.derivative(te);
                            return Math.atan2(ti[0], ti[1])
                        }, PolynomialBezier.prototype.inflectionPoints = function() {
                            var te = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                            if (floatZero(te)) return [];
                            var ti = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / te,
                                ts = ti * ti - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / te;
                            if (ts < 0) return [];
                            var tr = Math.sqrt(ts);
                            return floatZero(tr) ? tr > 0 && tr < 1 ? [ti] : [] : [ti - tr, ti + tr].filter(function(te) {
                                return te > 0 && te < 1
                            })
                        }, PolynomialBezier.prototype.split = function(te) {
                            if (te <= 0) return [singlePoint(this.points[0]), this];
                            if (te >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                            var ti = lerpPoint(this.points[0], this.points[1], te),
                                ts = lerpPoint(this.points[1], this.points[2], te),
                                tr = lerpPoint(this.points[2], this.points[3], te),
                                tn = lerpPoint(ti, ts, te),
                                ta = lerpPoint(ts, tr, te),
                                to = lerpPoint(tn, ta, te);
                            return [new PolynomialBezier(this.points[0], ti, tn, to, !0), new PolynomialBezier(to, ta, tr, this.points[3], !0)]
                        }, PolynomialBezier.prototype.bounds = function() {
                            return {
                                x: extrema(this, 0),
                                y: extrema(this, 1)
                            }
                        }, PolynomialBezier.prototype.boundingBox = function() {
                            var te = this.bounds();
                            return {
                                left: te.x.min,
                                right: te.x.max,
                                top: te.y.min,
                                bottom: te.y.max,
                                width: te.x.max - te.x.min,
                                height: te.y.max - te.y.min,
                                cx: (te.x.max + te.x.min) / 2,
                                cy: (te.y.max + te.y.min) / 2
                            }
                        }, PolynomialBezier.prototype.intersections = function(te, ti, ts) {
                            void 0 === ti && (ti = 2), void 0 === ts && (ts = 7);
                            var tr = [];
                            return intersectsImpl(intersectData(this, 0, 1), intersectData(te, 0, 1), 0, ti, tr, ts), tr
                        }, PolynomialBezier.shapeSegment = function(te, ti) {
                            var ts = (ti + 1) % te.length();
                            return new PolynomialBezier(te.v[ti], te.o[ti], te.i[ts], te.v[ts], !0)
                        }, PolynomialBezier.shapeSegmentInverted = function(te, ti) {
                            var ts = (ti + 1) % te.length();
                            return new PolynomialBezier(te.v[ts], te.i[ts], te.o[ti], te.v[ti], !0)
                        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(te, ti) {
                            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(te, ti.s, 0, null, this), this.frequency = PropertyFactory.getProp(te, ti.r, 0, null, this), this.pointsType = PropertyFactory.getProp(te, ti.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                        }, ZigZagModifier.prototype.processPath = function(te, ti, ts, tr) {
                            var tn = te._length,
                                ta = shapePool.newElement();
                            if (ta.c = te.c, te.c || (tn -= 1), 0 === tn) return ta;
                            var to = -1,
                                th = PolynomialBezier.shapeSegment(te, 0);
                            zigZagCorner(ta, te, 0, ti, ts, tr, to);
                            for (var tl = 0; tl < tn; tl += 1) to = zigZagSegment(ta, th, ti, ts, tr, -to), th = tl !== tn - 1 || te.c ? PolynomialBezier.shapeSegment(te, (tl + 1) % tn) : null, zigZagCorner(ta, te, tl + 1, ti, ts, tr, to);
                            return ta
                        }, ZigZagModifier.prototype.processShapes = function(te) {
                            var ti, ts, tr, tn, ta, to, th = this.shapes.length,
                                tl = this.amplitude.v,
                                tp = Math.max(0, Math.round(this.frequency.v)),
                                tf = this.pointsType.v;
                            if (0 !== tl)
                                for (ts = 0; ts < th; ts += 1) {
                                    if (to = (ta = this.shapes[ts]).localShapeCollection, ta.shape._mdf || this._mdf || te)
                                        for (to.releaseShapes(), ta.shape._mdf = !0, ti = ta.shape.paths.shapes, tn = ta.shape.paths._length, tr = 0; tr < tn; tr += 1) to.addShape(this.processPath(ti[tr], tl, tp, tf));
                                    ta.shape.paths = ta.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(te, ti) {
                            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(te, ti.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(te, ti.ml, 0, null, this), this.lineJoin = ti.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                        }, OffsetPathModifier.prototype.processPath = function(te, ti, ts, tr) {
                            var tn = shapePool.newElement();
                            tn.c = te.c;
                            var ta, to, th, tl = te.length();
                            te.c || (tl -= 1);
                            var tp = [];
                            for (ta = 0; ta < tl; ta += 1) th = PolynomialBezier.shapeSegment(te, ta), tp.push(offsetSegmentSplit(th, ti));
                            if (!te.c)
                                for (ta = tl - 1; ta >= 0; ta -= 1) th = PolynomialBezier.shapeSegmentInverted(te, ta), tp.push(offsetSegmentSplit(th, ti));
                            tp = pruneIntersections(tp);
                            var tf = null,
                                tc = null;
                            for (ta = 0; ta < tp.length; ta += 1) {
                                var tu = tp[ta];
                                for (tc && (tf = joinLines(tn, tc, tu[0], ts, tr)), tc = tu[tu.length - 1], to = 0; to < tu.length; to += 1) th = tu[to], tf && pointEqual(th.points[0], tf) ? tn.setXYAt(th.points[1][0], th.points[1][1], "o", tn.length() - 1) : tn.setTripleAt(th.points[0][0], th.points[0][1], th.points[1][0], th.points[1][1], th.points[0][0], th.points[0][1], tn.length()), tn.setTripleAt(th.points[3][0], th.points[3][1], th.points[3][0], th.points[3][1], th.points[2][0], th.points[2][1], tn.length()), tf = th.points[3]
                            }
                            return tp.length && joinLines(tn, tc, tp[0][0], ts, tr), tn
                        }, OffsetPathModifier.prototype.processShapes = function(te) {
                            var ti, ts, tr, tn, ta, to, th = this.shapes.length,
                                tl = this.amount.v,
                                tp = this.miterLimit.v,
                                tf = this.lineJoin;
                            if (0 !== tl)
                                for (ts = 0; ts < th; ts += 1) {
                                    if (to = (ta = this.shapes[ts]).localShapeCollection, ta.shape._mdf || this._mdf || te)
                                        for (to.releaseShapes(), ta.shape._mdf = !0, ti = ta.shape.paths.shapes, tn = ta.shape.paths._length, tr = 0; tr < tn; tr += 1) to.addShape(this.processPath(ti[tr], tl, tf, tp));
                                    ta.shape.paths = ta.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        };
                        var FontManager = function() {
                            var te = {
                                    w: 0,
                                    size: 0,
                                    shapes: [],
                                    data: {
                                        shapes: []
                                    }
                                },
                                ti = [];
                            ti = ti.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                            var ts = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                                tr = [65039, 8205];

                            function tn(te, ti) {
                                var ts = createTag("span");
                                ts.setAttribute("aria-hidden", !0), ts.style.fontFamily = ti;
                                var tr = createTag("span");
                                tr.innerText = "giItT1WQy@!-/#", ts.style.position = "absolute", ts.style.left = "-10000px", ts.style.top = "-10000px", ts.style.fontSize = "300px", ts.style.fontVariant = "normal", ts.style.fontStyle = "normal", ts.style.fontWeight = "normal", ts.style.letterSpacing = "0", ts.appendChild(tr), document.body.appendChild(ts);
                                var tn = tr.offsetWidth;
                                return tr.style.fontFamily = function(te) {
                                    var ti, ts = te.split(","),
                                        tr = ts.length,
                                        tn = [];
                                    for (ti = 0; ti < tr; ti += 1) "sans-serif" !== ts[ti] && "monospace" !== ts[ti] && tn.push(ts[ti]);
                                    return tn.join(",")
                                }(te) + ", " + ti, {
                                    node: tr,
                                    w: tn,
                                    parent: ts
                                }
                            }

                            function ta(te, ti) {
                                var ts, tr = document.body && ti ? "svg" : "canvas",
                                    tn = getFontProperties(te);
                                if ("svg" === tr) {
                                    var ta = createNS("text");
                                    ta.style.fontSize = "100px", ta.setAttribute("font-family", te.fFamily), ta.setAttribute("font-style", tn.style), ta.setAttribute("font-weight", tn.weight), ta.textContent = "1", te.fClass ? (ta.style.fontFamily = "inherit", ta.setAttribute("class", te.fClass)) : ta.style.fontFamily = te.fFamily, ti.appendChild(ta), ts = ta
                                } else {
                                    var to = new OffscreenCanvas(500, 500).getContext("2d");
                                    to.font = tn.style + " " + tn.weight + " 100px " + te.fFamily, ts = to
                                }
                                return {
                                    measureText: function(te) {
                                        return "svg" === tr ? (ts.textContent = te, ts.getComputedTextLength()) : ts.measureText(te).width
                                    }
                                }
                            }
                            var to = function() {
                                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                            };
                            return to.isModifier = function(te, ti) {
                                var tr = te.toString(16) + ti.toString(16);
                                return -1 !== ts.indexOf(tr)
                            }, to.isZeroWidthJoiner = function(te, ti) {
                                return ti ? te === tr[0] && ti === tr[1] : te === tr[1]
                            }, to.isCombinedCharacter = function(te) {
                                return -1 !== ti.indexOf(te)
                            }, to.prototype = {
                                addChars: function(te) {
                                    if (te) {
                                        this.chars || (this.chars = []);
                                        var ti, ts, tr, tn = te.length,
                                            ta = this.chars.length;
                                        for (ti = 0; ti < tn; ti += 1) {
                                            for (ts = 0, tr = !1; ts < ta;) this.chars[ts].style === te[ti].style && this.chars[ts].fFamily === te[ti].fFamily && this.chars[ts].ch === te[ti].ch && (tr = !0), ts += 1;
                                            tr || (this.chars.push(te[ti]), ta += 1)
                                        }
                                    }
                                },
                                addFonts: function(te, ti) {
                                    if (te) {
                                        if (this.chars) return this.isLoaded = !0, void(this.fonts = te.list);
                                        if (!document.body) return this.isLoaded = !0, te.list.forEach(function(te) {
                                            te.helper = ta(te), te.cache = {}
                                        }), void(this.fonts = te.list);
                                        var ts, tr = te.list,
                                            to = tr.length,
                                            th = to;
                                        for (ts = 0; ts < to; ts += 1) {
                                            var tl, tp, tf = !0;
                                            if (tr[ts].loaded = !1, tr[ts].monoCase = tn(tr[ts].fFamily, "monospace"), tr[ts].sansCase = tn(tr[ts].fFamily, "sans-serif"), tr[ts].fPath) {
                                                if ("p" === tr[ts].fOrigin || 3 === tr[ts].origin) {
                                                    if ((tl = document.querySelectorAll('style[f-forigin="p"][f-family="' + tr[ts].fFamily + '"], style[f-origin="3"][f-family="' + tr[ts].fFamily + '"]')).length > 0 && (tf = !1), tf) {
                                                        var tc = createTag("style");
                                                        tc.setAttribute("f-forigin", tr[ts].fOrigin), tc.setAttribute("f-origin", tr[ts].origin), tc.setAttribute("f-family", tr[ts].fFamily), tc.type = "text/css", tc.innerText = "@font-face {font-family: " + tr[ts].fFamily + "; font-style: normal; src: url('" + tr[ts].fPath + "');}", ti.appendChild(tc)
                                                    }
                                                } else if ("g" === tr[ts].fOrigin || 1 === tr[ts].origin) {
                                                    for (tl = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), tp = 0; tp < tl.length; tp += 1) - 1 !== tl[tp].href.indexOf(tr[ts].fPath) && (tf = !1);
                                                    if (tf) {
                                                        var tu = createTag("link");
                                                        tu.setAttribute("f-forigin", tr[ts].fOrigin), tu.setAttribute("f-origin", tr[ts].origin), tu.type = "text/css", tu.rel = "stylesheet", tu.href = tr[ts].fPath, document.body.appendChild(tu)
                                                    }
                                                } else if ("t" === tr[ts].fOrigin || 2 === tr[ts].origin) {
                                                    for (tl = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), tp = 0; tp < tl.length; tp += 1) tr[ts].fPath === tl[tp].src && (tf = !1);
                                                    if (tf) {
                                                        var tm = createTag("link");
                                                        tm.setAttribute("f-forigin", tr[ts].fOrigin), tm.setAttribute("f-origin", tr[ts].origin), tm.setAttribute("rel", "stylesheet"), tm.setAttribute("href", tr[ts].fPath), ti.appendChild(tm)
                                                    }
                                                }
                                            } else tr[ts].loaded = !0, th -= 1;
                                            tr[ts].helper = ta(tr[ts], ti), tr[ts].cache = {}, this.fonts.push(tr[ts])
                                        }
                                        0 === th ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                    } else this.isLoaded = !0
                                },
                                getCharData: function(ti, ts, tr) {
                                    for (var tn = 0, ta = this.chars.length; tn < ta;) {
                                        if (this.chars[tn].ch === ti && this.chars[tn].style === ts && this.chars[tn].fFamily === tr) return this.chars[tn];
                                        tn += 1
                                    }
                                    return ("string" == typeof ti && 13 !== ti.charCodeAt(0) || !ti) && console && console.warn && !this._warned && (this._warned = !0), te
                                },
                                getFontByName: function(te) {
                                    for (var ti = 0, ts = this.fonts.length; ti < ts;) {
                                        if (this.fonts[ti].fName === te) return this.fonts[ti];
                                        ti += 1
                                    }
                                    return this.fonts[0]
                                },
                                measureText: function(te, ti, ts) {
                                    var tr = this.getFontByName(ti),
                                        tn = te.charCodeAt(0);
                                    if (!tr.cache[tn + 1]) {
                                        var ta = tr.helper;
                                        if (" " === te) {
                                            var to = ta.measureText("|" + te + "|"),
                                                th = ta.measureText("||");
                                            tr.cache[tn + 1] = (to - th) / 100
                                        } else tr.cache[tn + 1] = ta.measureText(te) / 100
                                    }
                                    return tr.cache[tn + 1] * ts
                                },
                                checkLoadedFonts: function() {
                                    var te, ti, ts, tr = this.fonts.length,
                                        tn = tr;
                                    for (te = 0; te < tr; te += 1) this.fonts[te].loaded ? tn -= 1 : "n" === this.fonts[te].fOrigin || 0 === this.fonts[te].origin ? this.fonts[te].loaded = !0 : (ti = this.fonts[te].monoCase.node, ts = this.fonts[te].monoCase.w, ti.offsetWidth !== ts ? (tn -= 1, this.fonts[te].loaded = !0) : (ti = this.fonts[te].sansCase.node, ts = this.fonts[te].sansCase.w, ti.offsetWidth !== ts && (tn -= 1, this.fonts[te].loaded = !0)), this.fonts[te].loaded && (this.fonts[te].sansCase.parent.parentNode.removeChild(this.fonts[te].sansCase.parent), this.fonts[te].monoCase.parent.parentNode.removeChild(this.fonts[te].monoCase.parent)));
                                    0 !== tn && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                                },
                                setIsLoaded: function() {
                                    this.isLoaded = !0
                                }
                            }, to
                        }();

                        function RenderableElement() {}
                        RenderableElement.prototype = {
                            initRenderable: function() {
                                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                            },
                            addRenderableComponent: function(te) {
                                -1 === this.renderableComponents.indexOf(te) && this.renderableComponents.push(te)
                            },
                            removeRenderableComponent: function(te) {
                                -1 !== this.renderableComponents.indexOf(te) && this.renderableComponents.splice(this.renderableComponents.indexOf(te), 1)
                            },
                            prepareRenderableFrame: function(te) {
                                this.checkLayerLimits(te)
                            },
                            checkTransparency: function() {
                                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                            },
                            checkLayerLimits: function(te) {
                                this.data.ip - this.data.st <= te && this.data.op - this.data.st > te ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                            },
                            renderRenderable: function() {
                                var te, ti = this.renderableComponents.length;
                                for (te = 0; te < ti; te += 1) this.renderableComponents[te].renderFrame(this._isFirstFrame)
                            },
                            sourceRectAtTime: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    width: 100,
                                    height: 100
                                }
                            },
                            getLayerSize: function() {
                                return 5 === this.data.ty ? {
                                    w: this.data.textData.width,
                                    h: this.data.textData.height
                                } : {
                                    w: this.data.width,
                                    h: this.data.height
                                }
                            }
                        };
                        var blendModeEnums, getBlendMode = (blendModeEnums = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        }, function(te) {
                            return blendModeEnums[te] || ""
                        });

                        function SliderEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 0, 0, ts)
                        }

                        function AngleEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 0, 0, ts)
                        }

                        function ColorEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 1, 0, ts)
                        }

                        function PointEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 1, 0, ts)
                        }

                        function LayerIndexEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 0, 0, ts)
                        }

                        function MaskIndexEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 0, 0, ts)
                        }

                        function CheckboxEffect(te, ti, ts) {
                            this.p = PropertyFactory.getProp(ti, te.v, 0, 0, ts)
                        }

                        function NoValueEffect() {
                            this.p = {}
                        }

                        function EffectsManager(te, ti) {
                            var ts, tr = te.ef || [];
                            this.effectElements = [];
                            var tn, ta = tr.length;
                            for (ts = 0; ts < ta; ts += 1) tn = new GroupEffect(tr[ts], ti), this.effectElements.push(tn)
                        }

                        function GroupEffect(te, ti) {
                            this.init(te, ti)
                        }

                        function BaseElement() {}

                        function FrameElement() {}

                        function FootageElement(te, ti, ts) {
                            this.initFrame(), this.initRenderable(), this.assetData = ti.getAssetData(te.refId), this.footageData = ti.imageLoader.getAsset(this.assetData), this.initBaseData(te, ti, ts)
                        }

                        function AudioElement(te, ti, ts) {
                            this.initFrame(), this.initRenderable(), this.assetData = ti.getAssetData(te.refId), this.initBaseData(te, ti, ts), this._isPlaying = !1, this._canPlay = !1;
                            var tr = this.globalData.getAssetsPath(this.assetData);
                            this.audio = this.globalData.audioController.createAudio(tr), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ti.frameRate, this) : {
                                _placeholder: !0
                            }, this.lv = PropertyFactory.getProp(this, te.au && te.au.lv ? te.au.lv : {
                                k: [100]
                            }, 1, .01, this)
                        }

                        function BaseRenderer() {}

                        function TransformElement() {}

                        function MaskElement(te, ti, ts) {
                            this.data = te, this.element = ti, this.globalData = ts, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                            var tr, tn, ta, to = this.globalData.defs,
                                th = this.masksProperties ? this.masksProperties.length : 0;
                            this.viewData = createSizedArray(th), this.solidPath = "";
                            var tl, tp, tf, tc, tu, tm, td = this.masksProperties,
                                tg = 0,
                                ty = [],
                                tv = createElementID(),
                                tb = "clipPath",
                                tx = "clip-path";
                            for (tn = 0; tn < th; tn += 1)
                                if (("a" !== td[tn].mode && "n" !== td[tn].mode || td[tn].inv || 100 !== td[tn].o.k || td[tn].o.x) && (tb = "mask", tx = "mask"), "s" !== td[tn].mode && "i" !== td[tn].mode || 0 !== tg ? tf = null : ((tf = createNS("rect")).setAttribute("fill", "#ffffff"), tf.setAttribute("width", this.element.comp.data.w || 0), tf.setAttribute("height", this.element.comp.data.h || 0), ty.push(tf)), ta = createNS("path"), "n" === td[tn].mode) this.viewData[tn] = {
                                    op: PropertyFactory.getProp(this.element, td[tn].o, 0, .01, this.element),
                                    prop: ShapePropertyFactory.getShapeProp(this.element, td[tn], 3),
                                    elem: ta,
                                    lastPath: ""
                                }, to.appendChild(ta);
                                else {
                                    if (tg += 1, ta.setAttribute("fill", "s" === td[tn].mode ? "#000000" : "#ffffff"), ta.setAttribute("clip-rule", "nonzero"), 0 !== td[tn].x.k ? (tb = "mask", tx = "mask", tm = PropertyFactory.getProp(this.element, td[tn].x, 0, null, this.element), tr = createElementID(), (tc = createNS("filter")).setAttribute("id", tr), (tu = createNS("feMorphology")).setAttribute("operator", "erode"), tu.setAttribute("in", "SourceGraphic"), tu.setAttribute("radius", "0"), tc.appendChild(tu), to.appendChild(tc), ta.setAttribute("stroke", "s" === td[tn].mode ? "#000000" : "#ffffff")) : (tu = null, tm = null), this.storedData[tn] = {
                                            elem: ta,
                                            x: tm,
                                            expan: tu,
                                            lastPath: "",
                                            lastOperator: "",
                                            filterId: tr,
                                            lastRadius: 0
                                        }, "i" === td[tn].mode) {
                                        tp = ty.length;
                                        var tk = createNS("g");
                                        for (tl = 0; tl < tp; tl += 1) tk.appendChild(ty[tl]);
                                        var t_ = createNS("mask");
                                        t_.setAttribute("mask-type", "alpha"), t_.setAttribute("id", tv + "_" + tg), t_.appendChild(ta), to.appendChild(t_), tk.setAttribute("mask", "url(" + getLocationHref() + "#" + tv + "_" + tg + ")"), ty.length = 0, ty.push(tk)
                                    } else ty.push(ta);
                                    td[tn].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[tn] = {
                                        elem: ta,
                                        lastPath: "",
                                        op: PropertyFactory.getProp(this.element, td[tn].o, 0, .01, this.element),
                                        prop: ShapePropertyFactory.getShapeProp(this.element, td[tn], 3),
                                        invRect: tf
                                    }, this.viewData[tn].prop.k || this.drawPath(td[tn], this.viewData[tn].prop.v, this.viewData[tn])
                                }
                            for (this.maskElement = createNS(tb), th = ty.length, tn = 0; tn < th; tn += 1) this.maskElement.appendChild(ty[tn]);
                            tg > 0 && (this.maskElement.setAttribute("id", tv), this.element.maskedElement.setAttribute(tx, "url(" + getLocationHref() + "#" + tv + ")"), to.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                        }
                        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(te, ti) {
                            this.data = te, this.effectElements = [], this.initDynamicPropertyContainer(ti);
                            var ts, tr, tn = this.data.ef.length,
                                ta = this.data.ef;
                            for (ts = 0; ts < tn; ts += 1) {
                                switch (tr = null, ta[ts].ty) {
                                    case 0:
                                        tr = new SliderEffect(ta[ts], ti, this);
                                        break;
                                    case 1:
                                        tr = new AngleEffect(ta[ts], ti, this);
                                        break;
                                    case 2:
                                        tr = new ColorEffect(ta[ts], ti, this);
                                        break;
                                    case 3:
                                        tr = new PointEffect(ta[ts], ti, this);
                                        break;
                                    case 4:
                                    case 7:
                                        tr = new CheckboxEffect(ta[ts], ti, this);
                                        break;
                                    case 10:
                                        tr = new LayerIndexEffect(ta[ts], ti, this);
                                        break;
                                    case 11:
                                        tr = new MaskIndexEffect(ta[ts], ti, this);
                                        break;
                                    case 5:
                                        tr = new EffectsManager(ta[ts], ti, this);
                                        break;
                                    default:
                                        tr = new NoValueEffect(ta[ts], ti, this)
                                }
                                tr && this.effectElements.push(tr)
                            }
                        }, BaseElement.prototype = {
                            checkMasks: function() {
                                if (!this.data.hasMask) return !1;
                                for (var te = 0, ti = this.data.masksProperties.length; te < ti;) {
                                    if ("n" !== this.data.masksProperties[te].mode && !1 !== this.data.masksProperties[te].cl) return !0;
                                    te += 1
                                }
                                return !1
                            },
                            initExpressions: function() {
                                var te = getExpressionInterfaces();
                                if (te) {
                                    var ti = te("layer"),
                                        ts = te("effects"),
                                        tr = te("shape"),
                                        tn = te("text"),
                                        ta = te("comp");
                                    this.layerInterface = ti(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                    var to = ts.createEffectsInterface(this, this.layerInterface);
                                    this.layerInterface.registerEffectsInterface(to), 0 === this.data.ty || this.data.xt ? this.compInterface = ta(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = tr(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = tn(this), this.layerInterface.text = this.layerInterface.textInterface)
                                }
                            },
                            setBlendMode: function() {
                                var te = getBlendMode(this.data.bm);
                                (this.baseElement || this.layerElement).style["mix-blend-mode"] = te
                            },
                            initBaseData: function(te, ti, ts) {
                                this.globalData = ti, this.comp = ts, this.data = te, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                            },
                            getType: function() {
                                return this.type
                            },
                            sourceRectAtTime: function() {}
                        }, FrameElement.prototype = {
                            initFrame: function() {
                                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                            },
                            prepareProperties: function(te, ti) {
                                var ts, tr = this.dynamicProperties.length;
                                for (ts = 0; ts < tr; ts += 1)(ti || this._isParent && "transform" === this.dynamicProperties[ts].propType) && (this.dynamicProperties[ts].getValue(), this.dynamicProperties[ts]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                            },
                            addDynamicProperty: function(te) {
                                -1 === this.dynamicProperties.indexOf(te) && this.dynamicProperties.push(te)
                            }
                        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                            return null
                        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                            var te = getExpressionInterfaces();
                            if (te) {
                                var ti = te("footage");
                                this.layerInterface = ti(this)
                            }
                        }, FootageElement.prototype.getFootageData = function() {
                            return this.footageData
                        }, AudioElement.prototype.prepareFrame = function(te) {
                            if (this.prepareRenderableFrame(te, !0), this.prepareProperties(te, !0), this.tm._placeholder) this._currentTime = te / this.data.sr;
                            else {
                                var ti = this.tm.v;
                                this._currentTime = ti
                            }
                            this._volume = this.lv.v[0];
                            var ts = this._volume * this._volumeMultiplier;
                            this._previousVolume !== ts && (this._previousVolume = ts, this.audio.volume(ts))
                        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                            this.audio.pause(), this._isPlaying = !1
                        }, AudioElement.prototype.pause = function() {
                            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                        }, AudioElement.prototype.resume = function() {
                            this._canPlay = !0
                        }, AudioElement.prototype.setRate = function(te) {
                            this.audio.rate(te)
                        }, AudioElement.prototype.volume = function(te) {
                            this._volumeMultiplier = te, this._previousVolume = te * this._volume, this.audio.volume(this._previousVolume)
                        }, AudioElement.prototype.getBaseElement = function() {
                            return null
                        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(te) {
                            var ti, ts, tr = this.layers.length;
                            for (this.completeLayers = !0, ti = tr - 1; ti >= 0; ti -= 1) this.elements[ti] || (ts = this.layers[ti]).ip - ts.st <= te - this.layers[ti].st && ts.op - ts.st > te - this.layers[ti].st && this.buildItem(ti), this.completeLayers = !!this.elements[ti] && this.completeLayers;
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.createItem = function(te) {
                            switch (te.ty) {
                                case 2:
                                    return this.createImage(te);
                                case 0:
                                    return this.createComp(te);
                                case 1:
                                    return this.createSolid(te);
                                case 3:
                                default:
                                    return this.createNull(te);
                                case 4:
                                    return this.createShape(te);
                                case 5:
                                    return this.createText(te);
                                case 6:
                                    return this.createAudio(te);
                                case 13:
                                    return this.createCamera(te);
                                case 15:
                                    return this.createFootage(te)
                            }
                        }, BaseRenderer.prototype.createCamera = function() {
                            throw Error("You're using a 3d camera. Try the html renderer.")
                        }, BaseRenderer.prototype.createAudio = function(te) {
                            return new AudioElement(te, this.globalData, this)
                        }, BaseRenderer.prototype.createFootage = function(te) {
                            return new FootageElement(te, this.globalData, this)
                        }, BaseRenderer.prototype.buildAllItems = function() {
                            var te, ti = this.layers.length;
                            for (te = 0; te < ti; te += 1) this.buildItem(te);
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.includeLayers = function(te) {
                            this.completeLayers = !1;
                            var ti, ts, tr = te.length,
                                tn = this.layers.length;
                            for (ti = 0; ti < tr; ti += 1)
                                for (ts = 0; ts < tn;) {
                                    if (this.layers[ts].id === te[ti].id) {
                                        this.layers[ts] = te[ti];
                                        break
                                    }
                                    ts += 1
                                }
                        }, BaseRenderer.prototype.setProjectInterface = function(te) {
                            this.globalData.projectInterface = te
                        }, BaseRenderer.prototype.initItems = function() {
                            this.globalData.progressiveLoad || this.buildAllItems()
                        }, BaseRenderer.prototype.buildElementParenting = function(te, ti, ts) {
                            for (var tr = this.elements, tn = this.layers, ta = 0, to = tn.length; ta < to;) tn[ta].ind == ti && (tr[ta] && !0 !== tr[ta] ? (ts.push(tr[ta]), tr[ta].setAsParent(), void 0 !== tn[ta].parent ? this.buildElementParenting(te, tn[ta].parent, ts) : te.setHierarchy(ts)) : (this.buildItem(ta), this.addPendingElement(te))), ta += 1
                        }, BaseRenderer.prototype.addPendingElement = function(te) {
                            this.pendingElements.push(te)
                        }, BaseRenderer.prototype.searchExtraCompositions = function(te) {
                            var ti, ts = te.length;
                            for (ti = 0; ti < ts; ti += 1)
                                if (te[ti].xt) {
                                    var tr = this.createComp(te[ti]);
                                    tr.initExpressions(), this.globalData.projectInterface.registerComposition(tr)
                                }
                        }, BaseRenderer.prototype.getElementById = function(te) {
                            var ti, ts = this.elements.length;
                            for (ti = 0; ti < ts; ti += 1)
                                if (this.elements[ti].data.ind === te) return this.elements[ti];
                            return null
                        }, BaseRenderer.prototype.getElementByPath = function(te) {
                            var ti, ts = te.shift();
                            if ("number" == typeof ts) ti = this.elements[ts];
                            else {
                                var tr, tn = this.elements.length;
                                for (tr = 0; tr < tn; tr += 1)
                                    if (this.elements[tr].data.nm === ts) {
                                        ti = this.elements[tr];
                                        break
                                    }
                            }
                            return 0 === te.length ? ti : ti.getElementByPath(te)
                        }, BaseRenderer.prototype.setupGlobalData = function(te, ti) {
                            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(te.chars), this.globalData.fontManager.addFonts(te.fonts, ti), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = te.fr, this.globalData.nm = te.nm, this.globalData.compSize = {
                                w: te.w,
                                h: te.h
                            }
                        }, TransformElement.prototype = {
                            initTransform: function() {
                                this.finalTransform = {
                                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                        o: 0
                                    },
                                    _matMdf: !1,
                                    _opMdf: !1,
                                    mat: new Matrix
                                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                            },
                            renderTransform: function() {
                                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                    var te, ti = this.finalTransform.mat,
                                        ts = 0,
                                        tr = this.hierarchy.length;
                                    if (!this.finalTransform._matMdf)
                                        for (; ts < tr;) {
                                            if (this.hierarchy[ts].finalTransform.mProp._mdf) {
                                                this.finalTransform._matMdf = !0;
                                                break
                                            }
                                            ts += 1
                                        }
                                    if (this.finalTransform._matMdf)
                                        for (te = this.finalTransform.mProp.v.props, ti.cloneFromProps(te), ts = 0; ts < tr; ts += 1) te = this.hierarchy[ts].finalTransform.mProp.v.props, ti.transform(te[0], te[1], te[2], te[3], te[4], te[5], te[6], te[7], te[8], te[9], te[10], te[11], te[12], te[13], te[14], te[15])
                                }
                            },
                            globalToLocal: function(te) {
                                var ti = [];
                                ti.push(this.finalTransform);
                                for (var ts, tr = !0, tn = this.comp; tr;) tn.finalTransform ? (tn.data.hasMask && ti.splice(0, 0, tn.finalTransform), tn = tn.comp) : tr = !1;
                                var ta, to = ti.length;
                                for (ts = 0; ts < to; ts += 1) ta = ti[ts].mat.applyToPointArray(0, 0, 0), te = [te[0] - ta[0], te[1] - ta[1], 0];
                                return te
                            },
                            mHelper: new Matrix
                        }, MaskElement.prototype.getMaskProperty = function(te) {
                            return this.viewData[te].prop
                        }, MaskElement.prototype.renderFrame = function(te) {
                            var ti, ts = this.element.finalTransform.mat,
                                tr = this.masksProperties.length;
                            for (ti = 0; ti < tr; ti += 1)
                                if ((this.viewData[ti].prop._mdf || te) && this.drawPath(this.masksProperties[ti], this.viewData[ti].prop.v, this.viewData[ti]), (this.viewData[ti].op._mdf || te) && this.viewData[ti].elem.setAttribute("fill-opacity", this.viewData[ti].op.v), "n" !== this.masksProperties[ti].mode && (this.viewData[ti].invRect && (this.element.finalTransform.mProp._mdf || te) && this.viewData[ti].invRect.setAttribute("transform", ts.getInverseMatrix().to2dCSS()), this.storedData[ti].x && (this.storedData[ti].x._mdf || te))) {
                                    var tn = this.storedData[ti].expan;
                                    this.storedData[ti].x.v < 0 ? ("erode" !== this.storedData[ti].lastOperator && (this.storedData[ti].lastOperator = "erode", this.storedData[ti].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[ti].filterId + ")")), tn.setAttribute("radius", -this.storedData[ti].x.v)) : ("dilate" !== this.storedData[ti].lastOperator && (this.storedData[ti].lastOperator = "dilate", this.storedData[ti].elem.setAttribute("filter", null)), this.storedData[ti].elem.setAttribute("stroke-width", 2 * this.storedData[ti].x.v))
                                }
                        }, MaskElement.prototype.getMaskelement = function() {
                            return this.maskElement
                        }, MaskElement.prototype.createLayerSolidPath = function() {
                            return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + " v-") + this.globalData.compSize.h + " "
                        }, MaskElement.prototype.drawPath = function(te, ti, ts) {
                            var tr, tn, ta = " M" + ti.v[0][0] + "," + ti.v[0][1];
                            for (tn = ti._length, tr = 1; tr < tn; tr += 1) ta += " C" + ti.o[tr - 1][0] + "," + ti.o[tr - 1][1] + " " + ti.i[tr][0] + "," + ti.i[tr][1] + " " + ti.v[tr][0] + "," + ti.v[tr][1];
                            if (ti.c && tn > 1 && (ta += " C" + ti.o[tr - 1][0] + "," + ti.o[tr - 1][1] + " " + ti.i[0][0] + "," + ti.i[0][1] + " " + ti.v[0][0] + "," + ti.v[0][1]), ts.lastPath !== ta) {
                                var to = "";
                                ts.elem && (ti.c && (to = te.inv ? this.solidPath + ta : ta), ts.elem.setAttribute("d", to)), ts.lastPath = ta
                            }
                        }, MaskElement.prototype.destroy = function() {
                            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                        };
                        var filtersFactory = function() {
                                var te = {};
                                return te.createFilter = function(te, ti) {
                                    var ts = createNS("filter");
                                    return ts.setAttribute("id", te), !0 !== ti && (ts.setAttribute("filterUnits", "objectBoundingBox"), ts.setAttribute("x", "0%"), ts.setAttribute("y", "0%"), ts.setAttribute("width", "100%"), ts.setAttribute("height", "100%")), ts
                                }, te.createAlphaToLuminanceFilter = function() {
                                    var te = createNS("feColorMatrix");
                                    return te.setAttribute("type", "matrix"), te.setAttribute("color-interpolation-filters", "sRGB"), te.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), te
                                }, te
                            }(),
                            featureSupport = function() {
                                var te = {
                                    maskType: !0,
                                    svgLumaHidden: !0,
                                    offscreenCanvas: "undefined" != typeof OffscreenCanvas
                                };
                                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (te.maskType = !1), /firefox/i.test(navigator.userAgent) && (te.svgLumaHidden = !1), te
                            }(),
                            registeredEffects = {},
                            idPrefix = "filter_result_";

                        function SVGEffects(te) {
                            var ti, ts, tr = "SourceGraphic",
                                tn = te.data.ef ? te.data.ef.length : 0,
                                ta = createElementID(),
                                to = filtersFactory.createFilter(ta, !0),
                                th = 0;
                            for (this.filters = [], ti = 0; ti < tn; ti += 1) {
                                ts = null;
                                var tl = te.data.ef[ti].ty;
                                registeredEffects[tl] && (ts = new registeredEffects[tl].effect(to, te.effectsManager.effectElements[ti], te, idPrefix + th, tr), tr = idPrefix + th, registeredEffects[tl].countsAsEffect && (th += 1)), ts && this.filters.push(ts)
                            }
                            th && (te.globalData.defs.appendChild(to), te.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + ta + ")")), this.filters.length && te.addRenderableComponent(this)
                        }

                        function registerEffect(te, ti, ts) {
                            registeredEffects[te] = {
                                effect: ti,
                                countsAsEffect: ts
                            }
                        }

                        function SVGBaseElement() {}

                        function HierarchyElement() {}

                        function RenderableDOMElement() {}

                        function IImageElement(te, ti, ts) {
                            this.assetData = ti.getAssetData(te.refId), this.initElement(te, ti, ts), this.sourceRect = {
                                top: 0,
                                left: 0,
                                width: this.assetData.w,
                                height: this.assetData.h
                            }
                        }

                        function ProcessedElement(te, ti) {
                            this.elem = te, this.pos = ti
                        }

                        function IShapeElement() {}
                        SVGEffects.prototype.renderFrame = function(te) {
                            var ti, ts = this.filters.length;
                            for (ti = 0; ti < ts; ti += 1) this.filters[ti].renderFrame(te)
                        }, SVGBaseElement.prototype = {
                            initRendererElement: function() {
                                this.layerElement = createNS("g")
                            },
                            createContainerElements: function() {
                                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                                var te = null;
                                if (this.data.td) {
                                    this.matteMasks = {};
                                    var ti = createNS("g");
                                    ti.setAttribute("id", this.layerId), ti.appendChild(this.layerElement), te = ti, this.globalData.defs.appendChild(ti)
                                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), te = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                    var ts = createNS("clipPath"),
                                        tr = createNS("path");
                                    tr.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                    var tn = createElementID();
                                    if (ts.setAttribute("id", tn), ts.appendChild(tr), this.globalData.defs.appendChild(ts), this.checkMasks()) {
                                        var ta = createNS("g");
                                        ta.setAttribute("clip-path", "url(" + getLocationHref() + "#" + tn + ")"), ta.appendChild(this.layerElement), this.transformedElement = ta, te ? te.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + tn + ")")
                                }
                                0 !== this.data.bm && this.setBlendMode()
                            },
                            renderElement: function() {
                                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                            },
                            destroyBaseElement: function() {
                                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                            },
                            getBaseElement: function() {
                                return this.data.hd ? null : this.baseElement
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                            },
                            getMatte: function(te) {
                                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[te]) {
                                    var ti, ts, tr, tn, ta = this.layerId + "_" + te;
                                    if (1 === te || 3 === te) {
                                        var to = createNS("mask");
                                        to.setAttribute("id", ta), to.setAttribute("mask-type", 3 === te ? "luminance" : "alpha"), (tr = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), to.appendChild(tr), this.globalData.defs.appendChild(to), featureSupport.maskType || 1 !== te || (to.setAttribute("mask-type", "luminance"), ti = createElementID(), ts = filtersFactory.createFilter(ti), this.globalData.defs.appendChild(ts), ts.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (tn = createNS("g")).appendChild(tr), to.appendChild(tn), tn.setAttribute("filter", "url(" + getLocationHref() + "#" + ti + ")"))
                                    } else if (2 === te) {
                                        var th = createNS("mask");
                                        th.setAttribute("id", ta), th.setAttribute("mask-type", "alpha");
                                        var tl = createNS("g");
                                        th.appendChild(tl), ti = createElementID(), ts = filtersFactory.createFilter(ti);
                                        var tp = createNS("feComponentTransfer");
                                        tp.setAttribute("in", "SourceGraphic"), ts.appendChild(tp);
                                        var tf = createNS("feFuncA");
                                        tf.setAttribute("type", "table"), tf.setAttribute("tableValues", "1.0 0.0"), tp.appendChild(tf), this.globalData.defs.appendChild(ts);
                                        var tc = createNS("rect");
                                        tc.setAttribute("width", this.comp.data.w), tc.setAttribute("height", this.comp.data.h), tc.setAttribute("x", "0"), tc.setAttribute("y", "0"), tc.setAttribute("fill", "#ffffff"), tc.setAttribute("opacity", "0"), tl.setAttribute("filter", "url(" + getLocationHref() + "#" + ti + ")"), tl.appendChild(tc), (tr = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), tl.appendChild(tr), featureSupport.maskType || (th.setAttribute("mask-type", "luminance"), ts.appendChild(filtersFactory.createAlphaToLuminanceFilter()), tn = createNS("g"), tl.appendChild(tc), tn.appendChild(this.layerElement), tl.appendChild(tn)), this.globalData.defs.appendChild(th)
                                    }
                                    this.matteMasks[te] = ta
                                }
                                return this.matteMasks[te]
                            },
                            setMatte: function(te) {
                                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + te + ")")
                            }
                        }, HierarchyElement.prototype = {
                            initHierarchy: function() {
                                this.hierarchy = [], this._isParent = !1, this.checkParenting()
                            },
                            setHierarchy: function(te) {
                                this.hierarchy = te
                            },
                            setAsParent: function() {
                                this._isParent = !0
                            },
                            checkParenting: function() {
                                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                            }
                        }, extendPrototype([RenderableElement, createProxyFunction({
                            initElement: function(te, ti, ts) {
                                this.initFrame(), this.initBaseData(te, ti, ts), this.initTransform(te, ti, ts), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            },
                            hide: function() {
                                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                            },
                            show: function() {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(te) {
                                this._mdf = !1, this.prepareRenderableFrame(te), this.prepareProperties(te, this.isInRange), this.checkTransparency()
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                            var te = this.globalData.getAssetsPath(this.assetData);
                            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", te), this.layerElement.appendChild(this.innerElem)
                        }, IImageElement.prototype.sourceRectAtTime = function() {
                            return this.sourceRect
                        }, IShapeElement.prototype = {
                            addShapeToModifiers: function(te) {
                                var ti, ts = this.shapeModifiers.length;
                                for (ti = 0; ti < ts; ti += 1) this.shapeModifiers[ti].addShape(te)
                            },
                            isShapeInAnimatedModifiers: function(te) {
                                for (var ti = this.shapeModifiers.length; 0 < ti;)
                                    if (this.shapeModifiers[0].isAnimatedWithShape(te)) return !0;
                                return !1
                            },
                            renderModifiers: function() {
                                if (this.shapeModifiers.length) {
                                    var te, ti = this.shapes.length;
                                    for (te = 0; te < ti; te += 1) this.shapes[te].sh.reset();
                                    for (te = (ti = this.shapeModifiers.length) - 1; te >= 0 && !this.shapeModifiers[te].processShapes(this._isFirstFrame); te -= 1);
                                }
                            },
                            searchProcessedElement: function(te) {
                                for (var ti = this.processedElements, ts = 0, tr = ti.length; ts < tr;) {
                                    if (ti[ts].elem === te) return ti[ts].pos;
                                    ts += 1
                                }
                                return 0
                            },
                            addProcessedElement: function(te, ti) {
                                for (var ts = this.processedElements, tr = ts.length; tr;)
                                    if (ts[tr -= 1].elem === te) return void(ts[tr].pos = ti);
                                ts.push(new ProcessedElement(te, ti))
                            },
                            prepareFrame: function(te) {
                                this.prepareRenderableFrame(te), this.prepareProperties(te, this.isInRange)
                            }
                        };
                        var lineCapEnum = {
                                1: "butt",
                                2: "round",
                                3: "square"
                            },
                            lineJoinEnum = {
                                1: "miter",
                                2: "round",
                                3: "bevel"
                            };

                        function SVGShapeData(te, ti, ts) {
                            this.caches = [], this.styles = [], this.transformers = te, this.lStr = "", this.sh = ts, this.lvl = ti, this._isAnimated = !!ts.k;
                            for (var tr = 0, tn = te.length; tr < tn;) {
                                if (te[tr].mProps.dynamicProperties.length) {
                                    this._isAnimated = !0;
                                    break
                                }
                                tr += 1
                            }
                        }

                        function SVGStyleData(te, ti) {
                            this.data = te, this.type = te.ty, this.d = "", this.lvl = ti, this._mdf = !1, this.closed = !0 === te.hd, this.pElem = createNS("path"), this.msElem = null
                        }

                        function DashProperty(te, ti, ts, tr) {
                            this.elem = te, this.frameId = -1, this.dataProps = createSizedArray(ti.length), this.renderer = ts, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", ti.length ? ti.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(tr);
                            var tn, ta, to = ti.length || 0;
                            for (tn = 0; tn < to; tn += 1) ta = PropertyFactory.getProp(te, ti[tn].v, 0, 0, this), this.k = ta.k || this.k, this.dataProps[tn] = {
                                n: ti[tn].n,
                                p: ta
                            };
                            this.k || this.getValue(!0), this._isAnimated = this.k
                        }

                        function SVGStrokeStyleData(te, ti, ts) {
                            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(te, ti.o, 0, .01, this), this.w = PropertyFactory.getProp(te, ti.w, 0, null, this), this.d = new DashProperty(te, ti.d || {}, "svg", this), this.c = PropertyFactory.getProp(te, ti.c, 1, 255, this), this.style = ts, this._isAnimated = !!this._isAnimated
                        }

                        function SVGFillStyleData(te, ti, ts) {
                            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(te, ti.o, 0, .01, this), this.c = PropertyFactory.getProp(te, ti.c, 1, 255, this), this.style = ts
                        }

                        function SVGNoStyleData(te, ti, ts) {
                            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.style = ts
                        }

                        function GradientProperty(te, ti, ts) {
                            this.data = ti, this.c = createTypedArray("uint8c", 4 * ti.p);
                            var tr = ti.k.k[0].s ? ti.k.k[0].s.length - 4 * ti.p : ti.k.k.length - 4 * ti.p;
                            this.o = createTypedArray("float32", tr), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = tr, this.initDynamicPropertyContainer(ts), this.prop = PropertyFactory.getProp(te, ti.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                        }

                        function SVGGradientFillStyleData(te, ti, ts) {
                            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.initGradientData(te, ti, ts)
                        }

                        function SVGGradientStrokeStyleData(te, ti, ts) {
                            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(te, ti.w, 0, null, this), this.d = new DashProperty(te, ti.d || {}, "svg", this), this.initGradientData(te, ti, ts), this._isAnimated = !!this._isAnimated
                        }

                        function ShapeGroupData() {
                            this.it = [], this.prevViewData = [], this.gr = createNS("g")
                        }

                        function SVGTransformData(te, ti, ts) {
                            this.transform = {
                                mProps: te,
                                op: ti,
                                container: ts
                            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                        }
                        SVGShapeData.prototype.setAsAnimated = function() {
                            this._isAnimated = !0
                        }, SVGStyleData.prototype.reset = function() {
                            this.d = "", this._mdf = !1
                        }, DashProperty.prototype.getValue = function(te) {
                            if ((this.elem.globalData.frameId !== this.frameId || te) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || te, this._mdf)) {
                                var ti = 0,
                                    ts = this.dataProps.length;
                                for ("svg" === this.renderer && (this.dashStr = ""), ti = 0; ti < ts; ti += 1) "o" !== this.dataProps[ti].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[ti].p.v : this.dashArray[ti] = this.dataProps[ti].p.v : this.dashoffset[0] = this.dataProps[ti].p.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(te, ti) {
                            for (var ts = 0, tr = this.o.length / 2; ts < tr;) {
                                if (Math.abs(te[4 * ts] - te[4 * ti + 2 * ts]) > .01) return !1;
                                ts += 1
                            }
                            return !0
                        }, GradientProperty.prototype.checkCollapsable = function() {
                            if (this.o.length / 2 != this.c.length / 4) return !1;
                            if (this.data.k.k[0].s)
                                for (var te = 0, ti = this.data.k.k.length; te < ti;) {
                                    if (!this.comparePoints(this.data.k.k[te].s, this.data.p)) return !1;
                                    te += 1
                                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                            return !0
                        }, GradientProperty.prototype.getValue = function(te) {
                            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || te) {
                                var ti, ts, tr, tn = 4 * this.data.p;
                                for (ti = 0; ti < tn; ti += 1) ts = ti % 4 == 0 ? 100 : 255, tr = Math.round(this.prop.v[ti] * ts), this.c[ti] !== tr && (this.c[ti] = tr, this._cmdf = !te);
                                if (this.o.length)
                                    for (tn = this.prop.v.length, ti = 4 * this.data.p; ti < tn; ti += 1) ts = ti % 2 == 0 ? 100 : 1, tr = ti % 2 == 0 ? Math.round(100 * this.prop.v[ti]) : this.prop.v[ti], this.o[ti - 4 * this.data.p] !== tr && (this.o[ti - 4 * this.data.p] = tr, this._omdf = !te);
                                this._mdf = !te
                            }
                        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(te, ti, ts) {
                            this.o = PropertyFactory.getProp(te, ti.o, 0, .01, this), this.s = PropertyFactory.getProp(te, ti.s, 1, null, this), this.e = PropertyFactory.getProp(te, ti.e, 1, null, this), this.h = PropertyFactory.getProp(te, ti.h || {
                                k: 0
                            }, 0, .01, this), this.a = PropertyFactory.getProp(te, ti.a || {
                                k: 0
                            }, 0, degToRads, this), this.g = new GradientProperty(te, ti.g, this), this.style = ts, this.stops = [], this.setGradientData(ts.pElem, ti), this.setGradientOpacity(ti, ts), this._isAnimated = !!this._isAnimated
                        }, SVGGradientFillStyleData.prototype.setGradientData = function(te, ti) {
                            var ts = createElementID(),
                                tr = createNS(1 === ti.t ? "linearGradient" : "radialGradient");
                            tr.setAttribute("id", ts), tr.setAttribute("spreadMethod", "pad"), tr.setAttribute("gradientUnits", "userSpaceOnUse");
                            var tn, ta, to, th = [];
                            for (to = 4 * ti.g.p, ta = 0; ta < to; ta += 4) tn = createNS("stop"), tr.appendChild(tn), th.push(tn);
                            te.setAttribute("gf" === ti.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + ts + ")"), this.gf = tr, this.cst = th
                        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(te, ti) {
                            if (this.g._hasOpacity && !this.g._collapsable) {
                                var ts, tr, tn, ta = createNS("mask"),
                                    to = createNS("path");
                                ta.appendChild(to);
                                var th = createElementID(),
                                    tl = createElementID();
                                ta.setAttribute("id", tl);
                                var tp = createNS(1 === te.t ? "linearGradient" : "radialGradient");
                                tp.setAttribute("id", th), tp.setAttribute("spreadMethod", "pad"), tp.setAttribute("gradientUnits", "userSpaceOnUse"), tn = te.g.k.k[0].s ? te.g.k.k[0].s.length : te.g.k.k.length;
                                var tf = this.stops;
                                for (tr = 4 * te.g.p; tr < tn; tr += 2)(ts = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), tp.appendChild(ts), tf.push(ts);
                                to.setAttribute("gf" === te.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + th + ")"), "gs" === te.ty && (to.setAttribute("stroke-linecap", lineCapEnum[te.lc || 2]), to.setAttribute("stroke-linejoin", lineJoinEnum[te.lj || 2]), 1 === te.lj && to.setAttribute("stroke-miterlimit", te.ml)), this.of = tp, this.ms = ta, this.ost = tf, this.maskId = tl, ti.msElem = to
                            }
                        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                        var buildShapeString = function(te, ti, ts, tr) {
                                if (0 === ti) return "";
                                var tn, ta = te.o,
                                    to = te.i,
                                    th = te.v,
                                    tl = " M" + tr.applyToPointStringified(th[0][0], th[0][1]);
                                for (tn = 1; tn < ti; tn += 1) tl += " C" + tr.applyToPointStringified(ta[tn - 1][0], ta[tn - 1][1]) + " " + tr.applyToPointStringified(to[tn][0], to[tn][1]) + " " + tr.applyToPointStringified(th[tn][0], th[tn][1]);
                                return ts && ti && (tl += " C" + tr.applyToPointStringified(ta[tn - 1][0], ta[tn - 1][1]) + " " + tr.applyToPointStringified(to[0][0], to[0][1]) + " " + tr.applyToPointStringified(th[0][0], th[0][1]) + "z"), tl
                            },
                            SVGElementsRenderer = function() {
                                var te = new Matrix,
                                    ti = new Matrix;

                                function ts(te, ti, ts) {
                                    (ts || ti.transform.op._mdf) && ti.transform.container.setAttribute("opacity", ti.transform.op.v), (ts || ti.transform.mProps._mdf) && ti.transform.container.setAttribute("transform", ti.transform.mProps.v.to2dCSS())
                                }

                                function tr() {}

                                function tn(ts, tr, tn) {
                                    var ta, to, th, tl, tp, tf, tc, tu, tm, td, tg, ty = tr.styles.length,
                                        tv = tr.lvl;
                                    for (tf = 0; tf < ty; tf += 1) {
                                        if (tl = tr.sh._mdf || tn, tr.styles[tf].lvl < tv) {
                                            for (tu = ti.reset(), td = tv - tr.styles[tf].lvl, tg = tr.transformers.length - 1; !tl && td > 0;) tl = tr.transformers[tg].mProps._mdf || tl, td -= 1, tg -= 1;
                                            if (tl)
                                                for (td = tv - tr.styles[tf].lvl, tg = tr.transformers.length - 1; td > 0;) tm = tr.transformers[tg].mProps.v.props, tu.transform(tm[0], tm[1], tm[2], tm[3], tm[4], tm[5], tm[6], tm[7], tm[8], tm[9], tm[10], tm[11], tm[12], tm[13], tm[14], tm[15]), td -= 1, tg -= 1
                                        } else tu = te;
                                        if (to = (tc = tr.sh.paths)._length, tl) {
                                            for (th = "", ta = 0; ta < to; ta += 1)(tp = tc.shapes[ta]) && tp._length && (th += buildShapeString(tp, tp._length, tp.c, tu));
                                            tr.caches[tf] = th
                                        } else th = tr.caches[tf];
                                        tr.styles[tf].d += !0 === ts.hd ? "" : th, tr.styles[tf]._mdf = tl || tr.styles[tf]._mdf
                                    }
                                }

                                function ta(te, ti, ts) {
                                    var tr = ti.style;
                                    (ti.c._mdf || ts) && tr.pElem.setAttribute("fill", "rgb(" + bmFloor(ti.c.v[0]) + "," + bmFloor(ti.c.v[1]) + "," + bmFloor(ti.c.v[2]) + ")"), (ti.o._mdf || ts) && tr.pElem.setAttribute("fill-opacity", ti.o.v)
                                }

                                function to(te, ti, ts) {
                                    th(te, ti, ts), tl(te, ti, ts)
                                }

                                function th(te, ti, ts) {
                                    var tr, tn, ta, to, th, tl = ti.gf,
                                        tp = ti.g._hasOpacity,
                                        tf = ti.s.v,
                                        tc = ti.e.v;
                                    if (ti.o._mdf || ts) {
                                        var tu = "gf" === te.ty ? "fill-opacity" : "stroke-opacity";
                                        ti.style.pElem.setAttribute(tu, ti.o.v)
                                    }
                                    if (ti.s._mdf || ts) {
                                        var tm = 1 === te.t ? "x1" : "cx",
                                            td = "x1" === tm ? "y1" : "cy";
                                        tl.setAttribute(tm, tf[0]), tl.setAttribute(td, tf[1]), tp && !ti.g._collapsable && (ti.of.setAttribute(tm, tf[0]), ti.of.setAttribute(td, tf[1]))
                                    }
                                    if (ti.g._cmdf || ts) {
                                        tr = ti.cst;
                                        var tg = ti.g.c;
                                        for (ta = tr.length, tn = 0; tn < ta; tn += 1)(to = tr[tn]).setAttribute("offset", tg[4 * tn] + "%"), to.setAttribute("stop-color", "rgb(" + tg[4 * tn + 1] + "," + tg[4 * tn + 2] + "," + tg[4 * tn + 3] + ")")
                                    }
                                    if (tp && (ti.g._omdf || ts)) {
                                        var ty = ti.g.o;
                                        for (ta = (tr = ti.g._collapsable ? ti.cst : ti.ost).length, tn = 0; tn < ta; tn += 1) to = tr[tn], ti.g._collapsable || to.setAttribute("offset", ty[2 * tn] + "%"), to.setAttribute("stop-opacity", ty[2 * tn + 1])
                                    }
                                    if (1 === te.t)(ti.e._mdf || ts) && (tl.setAttribute("x2", tc[0]), tl.setAttribute("y2", tc[1]), tp && !ti.g._collapsable && (ti.of.setAttribute("x2", tc[0]), ti.of.setAttribute("y2", tc[1])));
                                    else if ((ti.s._mdf || ti.e._mdf || ts) && (th = Math.sqrt(Math.pow(tf[0] - tc[0], 2) + Math.pow(tf[1] - tc[1], 2)), tl.setAttribute("r", th), tp && !ti.g._collapsable && ti.of.setAttribute("r", th)), ti.e._mdf || ti.h._mdf || ti.a._mdf || ts) {
                                        th || (th = Math.sqrt(Math.pow(tf[0] - tc[0], 2) + Math.pow(tf[1] - tc[1], 2)));
                                        var tv = Math.atan2(tc[1] - tf[1], tc[0] - tf[0]),
                                            tb = ti.h.v;
                                        tb >= 1 ? tb = .99 : tb <= -1 && (tb = -.99);
                                        var tx = th * tb,
                                            tk = Math.cos(tv + ti.a.v) * tx + tf[0],
                                            t_ = Math.sin(tv + ti.a.v) * tx + tf[1];
                                        tl.setAttribute("fx", tk), tl.setAttribute("fy", t_), tp && !ti.g._collapsable && (ti.of.setAttribute("fx", tk), ti.of.setAttribute("fy", t_))
                                    }
                                }

                                function tl(te, ti, ts) {
                                    var tr = ti.style,
                                        tn = ti.d;
                                    tn && (tn._mdf || ts) && tn.dashStr && (tr.pElem.setAttribute("stroke-dasharray", tn.dashStr), tr.pElem.setAttribute("stroke-dashoffset", tn.dashoffset[0])), ti.c && (ti.c._mdf || ts) && tr.pElem.setAttribute("stroke", "rgb(" + bmFloor(ti.c.v[0]) + "," + bmFloor(ti.c.v[1]) + "," + bmFloor(ti.c.v[2]) + ")"), (ti.o._mdf || ts) && tr.pElem.setAttribute("stroke-opacity", ti.o.v), (ti.w._mdf || ts) && (tr.pElem.setAttribute("stroke-width", ti.w.v), tr.msElem && tr.msElem.setAttribute("stroke-width", ti.w.v))
                                }
                                return {
                                    createRenderFunction: function(te) {
                                        switch (te.ty) {
                                            case "fl":
                                                return ta;
                                            case "gf":
                                                return th;
                                            case "gs":
                                                return to;
                                            case "st":
                                                return tl;
                                            case "sh":
                                            case "el":
                                            case "rc":
                                            case "sr":
                                                return tn;
                                            case "tr":
                                                return ts;
                                            case "no":
                                                return tr;
                                            default:
                                                return null
                                        }
                                    }
                                }
                            }();

                        function SVGShapeElement(te, ti, ts) {
                            this.shapes = [], this.shapesData = te.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(te, ti, ts), this.prevViewData = []
                        }

                        function LetterProps(te, ti, ts, tr, tn, ta) {
                            this.o = te, this.sw = ti, this.sc = ts, this.fc = tr, this.m = tn, this.p = ta, this._mdf = {
                                o: !0,
                                sw: !!ti,
                                sc: !!ts,
                                fc: !!tr,
                                m: !0,
                                p: !0
                            }
                        }

                        function TextProperty(te, ti) {
                            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = ti, this.elem = te, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                                ascent: 0,
                                boxWidth: this.defaultBoxWidth,
                                f: "",
                                fStyle: "",
                                fWeight: "",
                                fc: "",
                                j: "",
                                justifyOffset: "",
                                l: [],
                                lh: 0,
                                lineWidths: [],
                                ls: "",
                                of: "",
                                s: "",
                                sc: "",
                                sw: 0,
                                t: 0,
                                tr: 0,
                                sz: 0,
                                ps: null,
                                fillColorAnim: !1,
                                strokeColorAnim: !1,
                                strokeWidthAnim: !1,
                                yOffset: 0,
                                finalSize: 0,
                                finalText: [],
                                finalLineHeight: 0,
                                __complete: !1
                            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                        }
                        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                            var te, ti, ts, tr, tn = this.shapes.length,
                                ta = this.stylesList.length,
                                to = [],
                                th = !1;
                            for (ts = 0; ts < ta; ts += 1) {
                                for (tr = this.stylesList[ts], th = !1, to.length = 0, te = 0; te < tn; te += 1) - 1 !== (ti = this.shapes[te]).styles.indexOf(tr) && (to.push(ti), th = ti._isAnimated || th);
                                to.length > 1 && th && this.setShapesAsAnimated(to)
                            }
                        }, SVGShapeElement.prototype.setShapesAsAnimated = function(te) {
                            var ti, ts = te.length;
                            for (ti = 0; ti < ts; ti += 1) te[ti].setAsAnimated()
                        }, SVGShapeElement.prototype.createStyleElement = function(te, ti) {
                            var ts, tr = new SVGStyleData(te, ti),
                                tn = tr.pElem;
                            return "st" === te.ty ? ts = new SVGStrokeStyleData(this, te, tr) : "fl" === te.ty ? ts = new SVGFillStyleData(this, te, tr) : "gf" === te.ty || "gs" === te.ty ? (ts = new("gf" === te.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, te, tr), this.globalData.defs.appendChild(ts.gf), ts.maskId && (this.globalData.defs.appendChild(ts.ms), this.globalData.defs.appendChild(ts.of), tn.setAttribute("mask", "url(" + getLocationHref() + "#" + ts.maskId + ")"))) : "no" === te.ty && (ts = new SVGNoStyleData(this, te, tr)), "st" !== te.ty && "gs" !== te.ty || (tn.setAttribute("stroke-linecap", lineCapEnum[te.lc || 2]), tn.setAttribute("stroke-linejoin", lineJoinEnum[te.lj || 2]), tn.setAttribute("fill-opacity", "0"), 1 === te.lj && tn.setAttribute("stroke-miterlimit", te.ml)), 2 === te.r && tn.setAttribute("fill-rule", "evenodd"), te.ln && tn.setAttribute("id", te.ln), te.cl && tn.setAttribute("class", te.cl), te.bm && (tn.style["mix-blend-mode"] = getBlendMode(te.bm)), this.stylesList.push(tr), this.addToAnimatedContents(te, ts), ts
                        }, SVGShapeElement.prototype.createGroupElement = function(te) {
                            var ti = new ShapeGroupData;
                            return te.ln && ti.gr.setAttribute("id", te.ln), te.cl && ti.gr.setAttribute("class", te.cl), te.bm && (ti.gr.style["mix-blend-mode"] = getBlendMode(te.bm)), ti
                        }, SVGShapeElement.prototype.createTransformElement = function(te, ti) {
                            var ts = TransformPropertyFactory.getTransformProperty(this, te, this),
                                tr = new SVGTransformData(ts, ts.o, ti);
                            return this.addToAnimatedContents(te, tr), tr
                        }, SVGShapeElement.prototype.createShapeElement = function(te, ti, ts) {
                            var tr = 4;
                            "rc" === te.ty ? tr = 5 : "el" === te.ty ? tr = 6 : "sr" === te.ty && (tr = 7);
                            var tn = new SVGShapeData(ti, ts, ShapePropertyFactory.getShapeProp(this, te, tr, this));
                            return this.shapes.push(tn), this.addShapeToModifiers(tn), this.addToAnimatedContents(te, tn), tn
                        }, SVGShapeElement.prototype.addToAnimatedContents = function(te, ti) {
                            for (var ts = 0, tr = this.animatedContents.length; ts < tr;) {
                                if (this.animatedContents[ts].element === ti) return;
                                ts += 1
                            }
                            this.animatedContents.push({
                                fn: SVGElementsRenderer.createRenderFunction(te),
                                element: ti,
                                data: te
                            })
                        }, SVGShapeElement.prototype.setElementStyles = function(te) {
                            var ti, ts = te.styles,
                                tr = this.stylesList.length;
                            for (ti = 0; ti < tr; ti += 1) this.stylesList[ti].closed || ts.push(this.stylesList[ti])
                        }, SVGShapeElement.prototype.reloadShapes = function() {
                            this._isFirstFrame = !0;
                            var te, ti = this.itemsData.length;
                            for (te = 0; te < ti; te += 1) this.prevViewData[te] = this.itemsData[te];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), ti = this.dynamicProperties.length, te = 0; te < ti; te += 1) this.dynamicProperties[te].getValue();
                            this.renderModifiers()
                        }, SVGShapeElement.prototype.searchShapes = function(te, ti, ts, tr, tn, ta, to) {
                            var th, tl, tp, tf, tc, tu, tm = [].concat(ta),
                                td = te.length - 1,
                                tg = [],
                                ty = [];
                            for (th = td; th >= 0; th -= 1) {
                                if ((tu = this.searchProcessedElement(te[th])) ? ti[th] = ts[tu - 1] : te[th]._render = to, "fl" === te[th].ty || "st" === te[th].ty || "gf" === te[th].ty || "gs" === te[th].ty || "no" === te[th].ty) tu ? ti[th].style.closed = !1 : ti[th] = this.createStyleElement(te[th], tn), te[th]._render && ti[th].style.pElem.parentNode !== tr && tr.appendChild(ti[th].style.pElem), tg.push(ti[th].style);
                                else if ("gr" === te[th].ty) {
                                    if (tu)
                                        for (tp = ti[th].it.length, tl = 0; tl < tp; tl += 1) ti[th].prevViewData[tl] = ti[th].it[tl];
                                    else ti[th] = this.createGroupElement(te[th]);
                                    this.searchShapes(te[th].it, ti[th].it, ti[th].prevViewData, ti[th].gr, tn + 1, tm, to), te[th]._render && ti[th].gr.parentNode !== tr && tr.appendChild(ti[th].gr)
                                } else "tr" === te[th].ty ? (tu || (ti[th] = this.createTransformElement(te[th], tr)), tf = ti[th].transform, tm.push(tf)) : "sh" === te[th].ty || "rc" === te[th].ty || "el" === te[th].ty || "sr" === te[th].ty ? (tu || (ti[th] = this.createShapeElement(te[th], tm, tn)), this.setElementStyles(ti[th])) : "tm" === te[th].ty || "rd" === te[th].ty || "ms" === te[th].ty || "pb" === te[th].ty || "zz" === te[th].ty || "op" === te[th].ty ? (tu ? (tc = ti[th]).closed = !1 : ((tc = ShapeModifiers.getModifier(te[th].ty)).init(this, te[th]), ti[th] = tc, this.shapeModifiers.push(tc)), ty.push(tc)) : "rp" === te[th].ty && (tu ? (tc = ti[th]).closed = !0 : (tc = ShapeModifiers.getModifier(te[th].ty), ti[th] = tc, tc.init(this, te, th, ti), this.shapeModifiers.push(tc), to = !1), ty.push(tc));
                                this.addProcessedElement(te[th], th + 1)
                            }
                            for (td = tg.length, th = 0; th < td; th += 1) tg[th].closed = !0;
                            for (td = ty.length, th = 0; th < td; th += 1) ty[th].closed = !0
                        }, SVGShapeElement.prototype.renderInnerContent = function() {
                            this.renderModifiers();
                            var te, ti = this.stylesList.length;
                            for (te = 0; te < ti; te += 1) this.stylesList[te].reset();
                            for (this.renderShape(), te = 0; te < ti; te += 1)(this.stylesList[te]._mdf || this._isFirstFrame) && (this.stylesList[te].msElem && (this.stylesList[te].msElem.setAttribute("d", this.stylesList[te].d), this.stylesList[te].d = "M0 0" + this.stylesList[te].d), this.stylesList[te].pElem.setAttribute("d", this.stylesList[te].d || "M0 0"))
                        }, SVGShapeElement.prototype.renderShape = function() {
                            var te, ti, ts = this.animatedContents.length;
                            for (te = 0; te < ts; te += 1) ti = this.animatedContents[te], (this._isFirstFrame || ti.element._isAnimated) && !0 !== ti.data && ti.fn(ti.data, ti.element, this._isFirstFrame)
                        }, SVGShapeElement.prototype.destroy = function() {
                            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                        }, LetterProps.prototype.update = function(te, ti, ts, tr, tn, ta) {
                            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                            var to = !1;
                            return this.o !== te && (this.o = te, this._mdf.o = !0, to = !0), this.sw !== ti && (this.sw = ti, this._mdf.sw = !0, to = !0), this.sc !== ts && (this.sc = ts, this._mdf.sc = !0, to = !0), this.fc !== tr && (this.fc = tr, this._mdf.fc = !0, to = !0), this.m !== tn && (this.m = tn, this._mdf.m = !0, to = !0), ta.length && (this.p[0] !== ta[0] || this.p[1] !== ta[1] || this.p[4] !== ta[4] || this.p[5] !== ta[5] || this.p[12] !== ta[12] || this.p[13] !== ta[13]) && (this.p = ta, this._mdf.p = !0, to = !0), to
                        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(te, ti) {
                            for (var ts in ti) Object.prototype.hasOwnProperty.call(ti, ts) && (te[ts] = ti[ts]);
                            return te
                        }, TextProperty.prototype.setCurrentData = function(te) {
                            te.__complete || this.completeTextData(te), this.currentData = te, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                        }, TextProperty.prototype.searchProperty = function() {
                            return this.searchKeyframes()
                        }, TextProperty.prototype.searchKeyframes = function() {
                            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                        }, TextProperty.prototype.addEffect = function(te) {
                            this.effectsSequence.push(te), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.getValue = function(te) {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || te) {
                                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                                var ti = this.currentData,
                                    ts = this.keysIndex;
                                if (this.lock) this.setCurrentData(this.currentData);
                                else {
                                    this.lock = !0, this._mdf = !1;
                                    var tr, tn = this.effectsSequence.length,
                                        ta = te || this.data.d.k[this.keysIndex].s;
                                    for (tr = 0; tr < tn; tr += 1) ta = ts !== this.keysIndex ? this.effectsSequence[tr](ta, ta.t) : this.effectsSequence[tr](this.currentData, ta.t);
                                    ti !== ta && this.setCurrentData(ta), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }
                        }, TextProperty.prototype.getKeyframeValue = function() {
                            for (var te = this.data.d.k, ti = this.elem.comp.renderedFrame, ts = 0, tr = te.length; ts <= tr - 1 && !(ts === tr - 1 || te[ts + 1].t > ti);) ts += 1;
                            return this.keysIndex !== ts && (this.keysIndex = ts), this.data.d.k[this.keysIndex].s
                        }, TextProperty.prototype.buildFinalText = function(te) {
                            for (var ti, ts, tr = [], tn = 0, ta = te.length, to = !1; tn < ta;) ti = te.charCodeAt(tn), FontManager.isCombinedCharacter(ti) ? tr[tr.length - 1] += te.charAt(tn) : ti >= 55296 && ti <= 56319 ? (ts = te.charCodeAt(tn + 1)) >= 56320 && ts <= 57343 ? (to || FontManager.isModifier(ti, ts) ? (tr[tr.length - 1] += te.substr(tn, 2), to = !1) : tr.push(te.substr(tn, 2)), tn += 1) : tr.push(te.charAt(tn)) : ti > 56319 ? (ts = te.charCodeAt(tn + 1), FontManager.isZeroWidthJoiner(ti, ts) ? (to = !0, tr[tr.length - 1] += te.substr(tn, 2), tn += 1) : tr.push(te.charAt(tn))) : FontManager.isZeroWidthJoiner(ti) ? (tr[tr.length - 1] += te.charAt(tn), to = !0) : tr.push(te.charAt(tn)), tn += 1;
                            return tr
                        }, TextProperty.prototype.completeTextData = function(te) {
                            te.__complete = !0;
                            var ti, ts, tr, tn, ta, to, th, tl = this.elem.globalData.fontManager,
                                tp = this.data,
                                tf = [],
                                tc = 0,
                                tu = tp.m.g,
                                tm = 0,
                                td = 0,
                                tg = 0,
                                ty = [],
                                tv = 0,
                                tb = 0,
                                tx = tl.getFontByName(te.f),
                                tk = 0,
                                t_ = getFontProperties(tx);
                            te.fWeight = t_.weight, te.fStyle = t_.style, te.finalSize = te.s, te.finalText = this.buildFinalText(te.t), ts = te.finalText.length, te.finalLineHeight = te.lh;
                            var tw, tC = te.tr / 1e3 * te.finalSize;
                            if (te.sz)
                                for (var tP, tA, tE = !0, tS = te.sz[0], tD = te.sz[1]; tE;) {
                                    tP = 0, tv = 0, ts = (tA = this.buildFinalText(te.t)).length, tC = te.tr / 1e3 * te.finalSize;
                                    var tT = -1;
                                    for (ti = 0; ti < ts; ti += 1) tw = tA[ti].charCodeAt(0), tr = !1, " " === tA[ti] ? tT = ti : 13 !== tw && 3 !== tw || (tv = 0, tr = !0, tP += te.finalLineHeight || 1.2 * te.finalSize), tl.chars ? (th = tl.getCharData(tA[ti], tx.fStyle, tx.fFamily), tk = tr ? 0 : th.w * te.finalSize / 100) : tk = tl.measureText(tA[ti], te.f, te.finalSize), tv + tk > tS && " " !== tA[ti] ? (-1 === tT ? ts += 1 : ti = tT, tP += te.finalLineHeight || 1.2 * te.finalSize, tA.splice(ti, tT === ti ? 1 : 0, "\r"), tT = -1, tv = 0) : tv += tk + tC;
                                    tP += tx.ascent * te.finalSize / 100, this.canResize && te.finalSize > this.minimumFontSize && tD < tP ? (te.finalSize -= 1, te.finalLineHeight = te.finalSize * te.lh / te.s) : (te.finalText = tA, ts = te.finalText.length, tE = !1)
                                }
                            tv = -tC, tk = 0;
                            var tM, tF = 0;
                            for (ti = 0; ti < ts; ti += 1)
                                if (tr = !1, 13 === (tw = (tM = te.finalText[ti]).charCodeAt(0)) || 3 === tw ? (tF = 0, ty.push(tv), tb = tv > tb ? tv : tb, tv = -2 * tC, tn = "", tr = !0, tg += 1) : tn = tM, tl.chars ? (th = tl.getCharData(tM, tx.fStyle, tl.getFontByName(te.f).fFamily), tk = tr ? 0 : th.w * te.finalSize / 100) : tk = tl.measureText(tn, te.f, te.finalSize), " " === tM ? tF += tk + tC : (tv += tk + tC + tF, tF = 0), tf.push({
                                        l: tk,
                                        an: tk,
                                        add: tm,
                                        n: tr,
                                        anIndexes: [],
                                        val: tn,
                                        line: tg,
                                        animatorJustifyOffset: 0
                                    }), 2 == tu) {
                                    if (tm += tk, "" === tn || " " === tn || ti === ts - 1) {
                                        for ("" !== tn && " " !== tn || (tm -= tk); td <= ti;) tf[td].an = tm, tf[td].ind = tc, tf[td].extra = tk, td += 1;
                                        tc += 1, tm = 0
                                    }
                                } else if (3 == tu) {
                                if (tm += tk, "" === tn || ti === ts - 1) {
                                    for ("" === tn && (tm -= tk); td <= ti;) tf[td].an = tm, tf[td].ind = tc, tf[td].extra = tk, td += 1;
                                    tm = 0, tc += 1
                                }
                            } else tf[tc].ind = tc, tf[tc].extra = 0, tc += 1;
                            if (te.l = tf, tb = tv > tb ? tv : tb, ty.push(tv), te.sz) te.boxWidth = te.sz[0], te.justifyOffset = 0;
                            else switch (te.boxWidth = tb, te.j) {
                                case 1:
                                    te.justifyOffset = -te.boxWidth;
                                    break;
                                case 2:
                                    te.justifyOffset = -te.boxWidth / 2;
                                    break;
                                default:
                                    te.justifyOffset = 0
                            }
                            te.lineWidths = ty;
                            var tI, tL, tB, tz, tR = tp.a;
                            to = tR.length;
                            var tO = [];
                            for (ta = 0; ta < to; ta += 1) {
                                for ((tI = tR[ta]).a.sc && (te.strokeColorAnim = !0), tI.a.sw && (te.strokeWidthAnim = !0), (tI.a.fc || tI.a.fh || tI.a.fs || tI.a.fb) && (te.fillColorAnim = !0), tz = 0, tB = tI.s.b, ti = 0; ti < ts; ti += 1)(tL = tf[ti]).anIndexes[ta] = tz, (1 == tB && "" !== tL.val || 2 == tB && "" !== tL.val && " " !== tL.val || 3 == tB && (tL.n || " " == tL.val || ti == ts - 1) || 4 == tB && (tL.n || ti == ts - 1)) && (1 === tI.s.rn && tO.push(tz), tz += 1);
                                tp.a[ta].s.totalChars = tz;
                                var tV, tN = -1;
                                if (1 === tI.s.rn)
                                    for (ti = 0; ti < ts; ti += 1) tN != (tL = tf[ti]).anIndexes[ta] && (tN = tL.anIndexes[ta], tV = tO.splice(Math.floor(Math.random() * tO.length), 1)[0]), tL.anIndexes[ta] = tV
                            }
                            te.yOffset = te.finalLineHeight || 1.2 * te.finalSize, te.ls = te.ls || 0, te.ascent = tx.ascent * te.finalSize / 100
                        }, TextProperty.prototype.updateDocumentData = function(te, ti) {
                            ti = void 0 === ti ? this.keysIndex : ti;
                            var ts = this.copyData({}, this.data.d.k[ti].s);
                            ts = this.copyData(ts, te), this.data.d.k[ti].s = ts, this.recalculate(ti), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.recalculate = function(te) {
                            var ti = this.data.d.k[te].s;
                            ti.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(ti)
                        }, TextProperty.prototype.canResizeFont = function(te) {
                            this.canResize = te, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.setMinimumFontSize = function(te) {
                            this.minimumFontSize = Math.floor(te) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        };
                        var TextSelectorProp = function() {
                            var te = Math.max,
                                ti = Math.min,
                                ts = Math.floor;

                            function tr(te, ti) {
                                this._currentTextLength = -1, this.k = !1, this.data = ti, this.elem = te, this.comp = te.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(te), this.s = PropertyFactory.getProp(te, ti.s || {
                                    k: 0
                                }, 0, 0, this), this.e = "e" in ti ? PropertyFactory.getProp(te, ti.e, 0, 0, this) : {
                                    v: 100
                                }, this.o = PropertyFactory.getProp(te, ti.o || {
                                    k: 0
                                }, 0, 0, this), this.xe = PropertyFactory.getProp(te, ti.xe || {
                                    k: 0
                                }, 0, 0, this), this.ne = PropertyFactory.getProp(te, ti.ne || {
                                    k: 0
                                }, 0, 0, this), this.sm = PropertyFactory.getProp(te, ti.sm || {
                                    k: 100
                                }, 0, 0, this), this.a = PropertyFactory.getProp(te, ti.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                            }
                            return tr.prototype = {
                                getMult: function(tr) {
                                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                    var tn = 0,
                                        ta = 0,
                                        to = 1,
                                        th = 1;
                                    this.ne.v > 0 ? tn = this.ne.v / 100 : ta = -this.ne.v / 100, this.xe.v > 0 ? to = 1 - this.xe.v / 100 : th = 1 + this.xe.v / 100;
                                    var tl = BezierFactory.getBezierEasing(tn, ta, to, th).get,
                                        tp = 0,
                                        tf = this.finalS,
                                        tc = this.finalE,
                                        tu = this.data.sh;
                                    if (2 === tu) tp = tl(tp = tc === tf ? tr >= tc ? 1 : 0 : te(0, ti(.5 / (tc - tf) + (tr - tf) / (tc - tf), 1)));
                                    else if (3 === tu) tp = tl(tp = tc === tf ? tr >= tc ? 0 : 1 : 1 - te(0, ti(.5 / (tc - tf) + (tr - tf) / (tc - tf), 1)));
                                    else if (4 === tu) tc === tf ? tp = 0 : (tp = te(0, ti(.5 / (tc - tf) + (tr - tf) / (tc - tf), 1))) < .5 ? tp *= 2 : tp = 1 - 2 * (tp - .5), tp = tl(tp);
                                    else if (5 === tu) {
                                        if (tc === tf) tp = 0;
                                        else {
                                            var tm = tc - tf,
                                                td = -tm / 2 + (tr = ti(te(0, tr + .5 - tf), tc - tf)),
                                                tg = tm / 2;
                                            tp = Math.sqrt(1 - td * td / (tg * tg))
                                        }
                                        tp = tl(tp)
                                    } else 6 === tu ? tp = tl(tp = tc === tf ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (tr = ti(te(0, tr + .5 - tf), tc - tf)) / (tc - tf))) / 2) : (tr >= ts(tf) && (tp = te(0, ti(tr - tf < 0 ? ti(tc, 1) - (tf - tr) : tc - tr, 1))), tp = tl(tp));
                                    if (100 !== this.sm.v) {
                                        var ty = .01 * this.sm.v;
                                        0 === ty && (ty = 1e-8);
                                        var tv = .5 - .5 * ty;
                                        tp < tv ? tp = 0 : (tp = (tp - tv) / ty) > 1 && (tp = 1)
                                    }
                                    return tp * this.a.v
                                },
                                getValue: function(te) {
                                    this.iterateDynamicProperties(), this._mdf = te || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, te && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                    var ti = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                        ts = this.o.v / ti,
                                        tr = this.s.v / ti + ts,
                                        tn = this.e.v / ti + ts;
                                    if (tr > tn) {
                                        var ta = tr;
                                        tr = tn, tn = ta
                                    }
                                    this.finalS = tr, this.finalE = tn
                                }
                            }, extendPrototype([DynamicPropertyContainer], tr), {
                                getTextSelectorProp: function(te, ti, ts) {
                                    return new tr(te, ti, ts)
                                }
                            }
                        }();

                        function TextAnimatorDataProperty(te, ti, ts) {
                            var tr = {
                                    propType: !1
                                },
                                tn = PropertyFactory.getProp,
                                ta = ti.a;
                            this.a = {
                                r: ta.r ? tn(te, ta.r, 0, degToRads, ts) : tr,
                                rx: ta.rx ? tn(te, ta.rx, 0, degToRads, ts) : tr,
                                ry: ta.ry ? tn(te, ta.ry, 0, degToRads, ts) : tr,
                                sk: ta.sk ? tn(te, ta.sk, 0, degToRads, ts) : tr,
                                sa: ta.sa ? tn(te, ta.sa, 0, degToRads, ts) : tr,
                                s: ta.s ? tn(te, ta.s, 1, .01, ts) : tr,
                                a: ta.a ? tn(te, ta.a, 1, 0, ts) : tr,
                                o: ta.o ? tn(te, ta.o, 0, .01, ts) : tr,
                                p: ta.p ? tn(te, ta.p, 1, 0, ts) : tr,
                                sw: ta.sw ? tn(te, ta.sw, 0, 0, ts) : tr,
                                sc: ta.sc ? tn(te, ta.sc, 1, 0, ts) : tr,
                                fc: ta.fc ? tn(te, ta.fc, 1, 0, ts) : tr,
                                fh: ta.fh ? tn(te, ta.fh, 0, 0, ts) : tr,
                                fs: ta.fs ? tn(te, ta.fs, 0, .01, ts) : tr,
                                fb: ta.fb ? tn(te, ta.fb, 0, .01, ts) : tr,
                                t: ta.t ? tn(te, ta.t, 0, 0, ts) : tr
                            }, this.s = TextSelectorProp.getTextSelectorProp(te, ti.s, ts), this.s.t = ti.s.t
                        }

                        function TextAnimatorProperty(te, ti, ts) {
                            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = te, this._renderType = ti, this._elem = ts, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                                alignment: {}
                            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(ts)
                        }

                        function ITextElement() {}
                        TextAnimatorProperty.prototype.searchProperties = function() {
                            var te, ti, ts = this._textData.a.length,
                                tr = PropertyFactory.getProp;
                            for (te = 0; te < ts; te += 1) ti = this._textData.a[te], this._animatorsData[te] = new TextAnimatorDataProperty(this._elem, ti, this);
                            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                                a: tr(this._elem, this._textData.p.a, 0, 0, this),
                                f: tr(this._elem, this._textData.p.f, 0, 0, this),
                                l: tr(this._elem, this._textData.p.l, 0, 0, this),
                                r: tr(this._elem, this._textData.p.r, 0, 0, this),
                                p: tr(this._elem, this._textData.p.p, 0, 0, this),
                                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = tr(this._elem, this._textData.m.a, 1, 0, this)
                        }, TextAnimatorProperty.prototype.getMeasures = function(te, ti) {
                            if (this.lettersChangedFlag = ti, this._mdf || this._isFirstFrame || ti || this._hasMaskedPath && this._pathData.m._mdf) {
                                this._isFirstFrame = !1;
                                var ts, tr, tn, ta, to, th, tl, tp, tf, tc, tu, tm, td, tg, ty, tv, tb, tx, tk, t_ = this._moreOptions.alignment.v,
                                    tw = this._animatorsData,
                                    tC = this._textData,
                                    tP = this.mHelper,
                                    tA = this._renderType,
                                    tE = this.renderedLetters.length,
                                    tS = te.l;
                                if (this._hasMaskedPath) {
                                    if (tk = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                        var tD, tT = tk.v;
                                        for (this._pathData.r.v && (tT = tT.reverse()), to = {
                                                tLength: 0,
                                                segments: []
                                            }, ta = tT._length - 1, tv = 0, tn = 0; tn < ta; tn += 1) tD = bez.buildBezierData(tT.v[tn], tT.v[tn + 1], [tT.o[tn][0] - tT.v[tn][0], tT.o[tn][1] - tT.v[tn][1]], [tT.i[tn + 1][0] - tT.v[tn + 1][0], tT.i[tn + 1][1] - tT.v[tn + 1][1]]), to.tLength += tD.segmentLength, to.segments.push(tD), tv += tD.segmentLength;
                                        tn = ta, tk.v.c && (tD = bez.buildBezierData(tT.v[tn], tT.v[0], [tT.o[tn][0] - tT.v[tn][0], tT.o[tn][1] - tT.v[tn][1]], [tT.i[0][0] - tT.v[0][0], tT.i[0][1] - tT.v[0][1]]), to.tLength += tD.segmentLength, to.segments.push(tD), tv += tD.segmentLength), this._pathData.pi = to
                                    }
                                    if (to = this._pathData.pi, th = this._pathData.f.v, tu = 0, tc = 1, tp = 0, tf = !0, tg = to.segments, th < 0 && tk.v.c)
                                        for (to.tLength < Math.abs(th) && (th = -Math.abs(th) % to.tLength), tc = (td = tg[tu = tg.length - 1].points).length - 1; th < 0;) th += td[tc].partialLength, (tc -= 1) < 0 && (tc = (td = tg[tu -= 1].points).length - 1);
                                    tm = (td = tg[tu].points)[tc - 1], ty = (tl = td[tc]).partialLength
                                }
                                ta = tS.length, ts = 0, tr = 0;
                                var tM, tF, tI, tL, tB, tz = 1.2 * te.finalSize * .714,
                                    tR = !0;
                                tI = tw.length;
                                var tO, tV, tN, tj, tG, tq, tW, tH, tY, tX, tK, tJ, tU = -1,
                                    tZ = th,
                                    tQ = tu,
                                    t$ = tc,
                                    t0 = -1,
                                    t1 = "",
                                    t2 = this.defaultPropsArray;
                                if (2 === te.j || 1 === te.j) {
                                    var t3 = 0,
                                        t5 = 0,
                                        t4 = 2 === te.j ? -.5 : -1,
                                        t9 = 0,
                                        t6 = !0;
                                    for (tn = 0; tn < ta; tn += 1)
                                        if (tS[tn].n) {
                                            for (t3 && (t3 += t5); t9 < tn;) tS[t9].animatorJustifyOffset = t3, t9 += 1;
                                            t3 = 0, t6 = !0
                                        } else {
                                            for (tF = 0; tF < tI; tF += 1)(tM = tw[tF].a).t.propType && (t6 && 2 === te.j && (t5 += tM.t.v * t4), (tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars)).length ? t3 += tM.t.v * tB[0] * t4 : t3 += tM.t.v * tB * t4);
                                            t6 = !1
                                        }
                                    for (t3 && (t3 += t5); t9 < tn;) tS[t9].animatorJustifyOffset = t3, t9 += 1
                                }
                                for (tn = 0; tn < ta; tn += 1) {
                                    if (tP.reset(), tj = 1, tS[tn].n) ts = 0, tr += te.yOffset + (tR ? 1 : 0), th = tZ, tR = !1, this._hasMaskedPath && (tc = t$, tm = (td = tg[tu = tQ].points)[tc - 1], ty = (tl = td[tc]).partialLength, tp = 0), t1 = "", tK = "", tY = "", tJ = "", t2 = this.defaultPropsArray;
                                    else {
                                        if (this._hasMaskedPath) {
                                            if (t0 !== tS[tn].line) {
                                                switch (te.j) {
                                                    case 1:
                                                        th += tv - te.lineWidths[tS[tn].line];
                                                        break;
                                                    case 2:
                                                        th += (tv - te.lineWidths[tS[tn].line]) / 2
                                                }
                                                t0 = tS[tn].line
                                            }
                                            tU !== tS[tn].ind && (tS[tU] && (th += tS[tU].extra), th += tS[tn].an / 2, tU = tS[tn].ind), th += t_[0] * tS[tn].an * .005;
                                            var t7 = 0;
                                            for (tF = 0; tF < tI; tF += 1)(tM = tw[tF].a).p.propType && ((tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars)).length ? t7 += tM.p.v[0] * tB[0] : t7 += tM.p.v[0] * tB), tM.a.propType && ((tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars)).length ? t7 += tM.a.v[0] * tB[0] : t7 += tM.a.v[0] * tB);
                                            for (tf = !0, this._pathData.a.v && (th = .5 * tS[0].an + (tv - this._pathData.f.v - .5 * tS[0].an - .5 * tS[tS.length - 1].an) * tU / (ta - 1) + this._pathData.f.v); tf;) tp + ty >= th + t7 || !td ? (tb = (th + t7 - tp) / tl.partialLength, tV = tm.point[0] + (tl.point[0] - tm.point[0]) * tb, tN = tm.point[1] + (tl.point[1] - tm.point[1]) * tb, tP.translate(-t_[0] * tS[tn].an * .005, -t_[1] * tz * .01), tf = !1) : td && (tp += tl.partialLength, (tc += 1) >= td.length && (tc = 0, tg[tu += 1] ? td = tg[tu].points : tk.v.c ? (tc = 0, td = tg[tu = 0].points) : (tp -= tl.partialLength, td = null)), td && (tm = tl, ty = (tl = td[tc]).partialLength));
                                            tO = tS[tn].an / 2 - tS[tn].add, tP.translate(-tO, 0, 0)
                                        } else tO = tS[tn].an / 2 - tS[tn].add, tP.translate(-tO, 0, 0), tP.translate(-t_[0] * tS[tn].an * .005, -t_[1] * tz * .01, 0);
                                        for (tF = 0; tF < tI; tF += 1)(tM = tw[tF].a).t.propType && (tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars), 0 === ts && 0 === te.j || (this._hasMaskedPath ? tB.length ? th += tM.t.v * tB[0] : th += tM.t.v * tB : tB.length ? ts += tM.t.v * tB[0] : ts += tM.t.v * tB));
                                        for (te.strokeWidthAnim && (tq = te.sw || 0), te.strokeColorAnim && (tG = te.sc ? [te.sc[0], te.sc[1], te.sc[2]] : [0, 0, 0]), te.fillColorAnim && te.fc && (tW = [te.fc[0], te.fc[1], te.fc[2]]), tF = 0; tF < tI; tF += 1)(tM = tw[tF].a).a.propType && ((tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars)).length ? tP.translate(-tM.a.v[0] * tB[0], -tM.a.v[1] * tB[1], tM.a.v[2] * tB[2]) : tP.translate(-tM.a.v[0] * tB, -tM.a.v[1] * tB, tM.a.v[2] * tB));
                                        for (tF = 0; tF < tI; tF += 1)(tM = tw[tF].a).s.propType && ((tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars)).length ? tP.scale(1 + (tM.s.v[0] - 1) * tB[0], 1 + (tM.s.v[1] - 1) * tB[1], 1) : tP.scale(1 + (tM.s.v[0] - 1) * tB, 1 + (tM.s.v[1] - 1) * tB, 1));
                                        for (tF = 0; tF < tI; tF += 1) {
                                            if (tM = tw[tF].a, tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars), tM.sk.propType && (tB.length ? tP.skewFromAxis(-tM.sk.v * tB[0], tM.sa.v * tB[1]) : tP.skewFromAxis(-tM.sk.v * tB, tM.sa.v * tB)), tM.r.propType && (tB.length ? tP.rotateZ(-tM.r.v * tB[2]) : tP.rotateZ(-tM.r.v * tB)), tM.ry.propType && (tB.length ? tP.rotateY(tM.ry.v * tB[1]) : tP.rotateY(tM.ry.v * tB)), tM.rx.propType && (tB.length ? tP.rotateX(tM.rx.v * tB[0]) : tP.rotateX(tM.rx.v * tB)), tM.o.propType && (tB.length ? tj += (tM.o.v * tB[0] - tj) * tB[0] : tj += (tM.o.v * tB - tj) * tB), te.strokeWidthAnim && tM.sw.propType && (tB.length ? tq += tM.sw.v * tB[0] : tq += tM.sw.v * tB), te.strokeColorAnim && tM.sc.propType)
                                                for (tH = 0; tH < 3; tH += 1) tB.length ? tG[tH] += (tM.sc.v[tH] - tG[tH]) * tB[0] : tG[tH] += (tM.sc.v[tH] - tG[tH]) * tB;
                                            if (te.fillColorAnim && te.fc) {
                                                if (tM.fc.propType)
                                                    for (tH = 0; tH < 3; tH += 1) tB.length ? tW[tH] += (tM.fc.v[tH] - tW[tH]) * tB[0] : tW[tH] += (tM.fc.v[tH] - tW[tH]) * tB;
                                                tM.fh.propType && (tW = tB.length ? addHueToRGB(tW, tM.fh.v * tB[0]) : addHueToRGB(tW, tM.fh.v * tB)), tM.fs.propType && (tW = tB.length ? addSaturationToRGB(tW, tM.fs.v * tB[0]) : addSaturationToRGB(tW, tM.fs.v * tB)), tM.fb.propType && (tW = tB.length ? addBrightnessToRGB(tW, tM.fb.v * tB[0]) : addBrightnessToRGB(tW, tM.fb.v * tB))
                                            }
                                        }
                                        for (tF = 0; tF < tI; tF += 1)(tM = tw[tF].a).p.propType && (tB = tw[tF].s.getMult(tS[tn].anIndexes[tF], tC.a[tF].s.totalChars), this._hasMaskedPath ? tB.length ? tP.translate(0, tM.p.v[1] * tB[0], -tM.p.v[2] * tB[1]) : tP.translate(0, tM.p.v[1] * tB, -tM.p.v[2] * tB) : tB.length ? tP.translate(tM.p.v[0] * tB[0], tM.p.v[1] * tB[1], -tM.p.v[2] * tB[2]) : tP.translate(tM.p.v[0] * tB, tM.p.v[1] * tB, -tM.p.v[2] * tB));
                                        if (te.strokeWidthAnim && (tY = tq < 0 ? 0 : tq), te.strokeColorAnim && (tX = "rgb(" + Math.round(255 * tG[0]) + "," + Math.round(255 * tG[1]) + "," + Math.round(255 * tG[2]) + ")"), te.fillColorAnim && te.fc && (tK = "rgb(" + Math.round(255 * tW[0]) + "," + Math.round(255 * tW[1]) + "," + Math.round(255 * tW[2]) + ")"), this._hasMaskedPath) {
                                            if (tP.translate(0, -te.ls), tP.translate(0, t_[1] * tz * .01 + tr, 0), this._pathData.p.v) {
                                                var t8 = 180 * Math.atan(tx = (tl.point[1] - tm.point[1]) / (tl.point[0] - tm.point[0])) / Math.PI;
                                                tl.point[0] < tm.point[0] && (t8 += 180), tP.rotate(-t8 * Math.PI / 180)
                                            }
                                            tP.translate(tV, tN, 0), th -= t_[0] * tS[tn].an * .005, tS[tn + 1] && tU !== tS[tn + 1].ind && (th += tS[tn].an / 2 + .001 * te.tr * te.finalSize)
                                        } else {
                                            switch (tP.translate(ts, tr, 0), te.ps && tP.translate(te.ps[0], te.ps[1] + te.ascent, 0), te.j) {
                                                case 1:
                                                    tP.translate(tS[tn].animatorJustifyOffset + te.justifyOffset + (te.boxWidth - te.lineWidths[tS[tn].line]), 0, 0);
                                                    break;
                                                case 2:
                                                    tP.translate(tS[tn].animatorJustifyOffset + te.justifyOffset + (te.boxWidth - te.lineWidths[tS[tn].line]) / 2, 0, 0)
                                            }
                                            tP.translate(0, -te.ls), tP.translate(tO, 0, 0), tP.translate(t_[0] * tS[tn].an * .005, t_[1] * tz * .01, 0), ts += tS[tn].l + .001 * te.tr * te.finalSize
                                        }
                                        "html" === tA ? t1 = tP.toCSS() : "svg" === tA ? t1 = tP.to2dCSS() : t2 = [tP.props[0], tP.props[1], tP.props[2], tP.props[3], tP.props[4], tP.props[5], tP.props[6], tP.props[7], tP.props[8], tP.props[9], tP.props[10], tP.props[11], tP.props[12], tP.props[13], tP.props[14], tP.props[15]], tJ = tj
                                    }
                                    tE <= tn ? (tL = new LetterProps(tJ, tY, tX, tK, t1, t2), this.renderedLetters.push(tL), tE += 1, this.lettersChangedFlag = !0) : (tL = this.renderedLetters[tn], this.lettersChangedFlag = tL.update(tJ, tY, tX, tK, t1, t2) || this.lettersChangedFlag)
                                }
                            }
                        }, TextAnimatorProperty.prototype.getValue = function() {
                            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(te, ti, ts) {
                            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(te, ti, ts), this.textProperty = new TextProperty(this, te.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(te.t, this.renderType, this), this.initTransform(te, ti, ts), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                        }, ITextElement.prototype.prepareFrame = function(te) {
                            this._mdf = !1, this.prepareRenderableFrame(te), this.prepareProperties(te, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                        }, ITextElement.prototype.createPathShape = function(te, ti) {
                            var ts, tr, tn = ti.length,
                                ta = "";
                            for (ts = 0; ts < tn; ts += 1) "sh" === ti[ts].ty && (ta += buildShapeString(tr = ti[ts].ks.k, tr.i.length, !0, te));
                            return ta
                        }, ITextElement.prototype.updateDocumentData = function(te, ti) {
                            this.textProperty.updateDocumentData(te, ti)
                        }, ITextElement.prototype.canResizeFont = function(te) {
                            this.textProperty.canResizeFont(te)
                        }, ITextElement.prototype.setMinimumFontSize = function(te) {
                            this.textProperty.setMinimumFontSize(te)
                        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(te, ti, ts, tr, tn) {
                            switch (te.ps && ti.translate(te.ps[0], te.ps[1] + te.ascent, 0), ti.translate(0, -te.ls, 0), te.j) {
                                case 1:
                                    ti.translate(te.justifyOffset + (te.boxWidth - te.lineWidths[ts]), 0, 0);
                                    break;
                                case 2:
                                    ti.translate(te.justifyOffset + (te.boxWidth - te.lineWidths[ts]) / 2, 0, 0)
                            }
                            ti.translate(tr, tn, 0)
                        }, ITextElement.prototype.buildColor = function(te) {
                            return "rgb(" + Math.round(255 * te[0]) + "," + Math.round(255 * te[1]) + "," + Math.round(255 * te[2]) + ")"
                        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
                        var emptyShapeData = {
                            shapes: []
                        };

                        function SVGTextLottieElement(te, ti, ts) {
                            this.textSpans = [], this.renderType = "svg", this.initElement(te, ti, ts)
                        }

                        function ISolidElement(te, ti, ts) {
                            this.initElement(te, ti, ts)
                        }

                        function NullElement(te, ti, ts) {
                            this.initFrame(), this.initBaseData(te, ti, ts), this.initFrame(), this.initTransform(te, ti, ts), this.initHierarchy()
                        }

                        function SVGRendererBase() {}

                        function ICompElement() {}

                        function SVGCompElement(te, ti, ts) {
                            this.layers = te.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(te, ti, ts), this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ti.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function SVGRenderer(te, ti) {
                            this.animationItem = te, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                            var ts = "";
                            if (ti && ti.title) {
                                var tr = createNS("title"),
                                    tn = createElementID();
                                tr.setAttribute("id", tn), tr.textContent = ti.title, this.svgElement.appendChild(tr), ts += tn
                            }
                            if (ti && ti.description) {
                                var ta = createNS("desc"),
                                    to = createElementID();
                                ta.setAttribute("id", to), ta.textContent = ti.description, this.svgElement.appendChild(ta), ts += " " + to
                            }
                            ts && this.svgElement.setAttribute("aria-labelledby", ts);
                            var th = createNS("defs");
                            this.svgElement.appendChild(th);
                            var tl = createNS("g");
                            this.svgElement.appendChild(tl), this.layerElement = tl, this.renderConfig = {
                                preserveAspectRatio: ti && ti.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: ti && ti.imagePreserveAspectRatio || "xMidYMid slice",
                                contentVisibility: ti && ti.contentVisibility || "visible",
                                progressiveLoad: ti && ti.progressiveLoad || !1,
                                hideOnTransparent: !(ti && !1 === ti.hideOnTransparent),
                                viewBoxOnly: ti && ti.viewBoxOnly || !1,
                                viewBoxSize: ti && ti.viewBoxSize || !1,
                                className: ti && ti.className || "",
                                id: ti && ti.id || "",
                                focusable: ti && ti.focusable,
                                filterSize: {
                                    width: ti && ti.filterSize && ti.filterSize.width || "100%",
                                    height: ti && ti.filterSize && ti.filterSize.height || "100%",
                                    x: ti && ti.filterSize && ti.filterSize.x || "0%",
                                    y: ti && ti.filterSize && ti.filterSize.y || "0%"
                                },
                                width: ti && ti.width,
                                height: ti && ti.height,
                                runExpressions: !ti || void 0 === ti.runExpressions || ti.runExpressions
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                defs: th,
                                renderConfig: this.renderConfig
                            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                        }

                        function CVContextData() {
                            var te;
                            for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), te = 0; te < 15; te += 1) this.saved[te] = createTypedArray("float32", 16);
                            this._length = 15
                        }

                        function ShapeTransformManager() {
                            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                        }
                        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                        }, SVGTextLottieElement.prototype.buildTextContents = function(te) {
                            for (var ti = 0, ts = te.length, tr = [], tn = ""; ti < ts;) "\r" === te[ti] || "\x03" === te[ti] ? (tr.push(tn), tn = "") : tn += te[ti], ti += 1;
                            return tr.push(tn), tr
                        }, SVGTextLottieElement.prototype.buildShapeData = function(te, ti) {
                            if (te.shapes && te.shapes.length) {
                                var ts = te.shapes[0];
                                if (ts.it) {
                                    var tr = ts.it[ts.it.length - 1];
                                    tr.s && (tr.s.k[0] = ti, tr.s.k[1] = ti)
                                }
                            }
                            return te
                        }, SVGTextLottieElement.prototype.buildNewText = function() {
                            this.addDynamicProperty(this);
                            var te = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(te ? te.l.length : 0), te.fc ? this.layerElement.setAttribute("fill", this.buildColor(te.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), te.sc && (this.layerElement.setAttribute("stroke", this.buildColor(te.sc)), this.layerElement.setAttribute("stroke-width", te.sw)), this.layerElement.setAttribute("font-size", te.finalSize);
                            var ti = this.globalData.fontManager.getFontByName(te.f);
                            if (ti.fClass) this.layerElement.setAttribute("class", ti.fClass);
                            else {
                                this.layerElement.setAttribute("font-family", ti.fFamily);
                                var ts = te.fWeight,
                                    tr = te.fStyle;
                                this.layerElement.setAttribute("font-style", tr), this.layerElement.setAttribute("font-weight", ts)
                            }
                            this.layerElement.setAttribute("aria-label", te.t);
                            var tn, ta, to, th = te.l || [],
                                tl = !!this.globalData.fontManager.chars;
                            ta = th.length;
                            var tp = this.mHelper,
                                tf = this.data.singleShape,
                                tc = 0,
                                tu = 0,
                                tm = !0,
                                td = .001 * te.tr * te.finalSize;
                            if (!tf || tl || te.sz) {
                                var tg, ty = this.textSpans.length;
                                for (tn = 0; tn < ta; tn += 1) {
                                    if (this.textSpans[tn] || (this.textSpans[tn] = {
                                            span: null,
                                            childSpan: null,
                                            glyph: null
                                        }), !tl || !tf || 0 === tn) {
                                        if (to = ty > tn ? this.textSpans[tn].span : createNS(tl ? "g" : "text"), ty <= tn) {
                                            if (to.setAttribute("stroke-linecap", "butt"), to.setAttribute("stroke-linejoin", "round"), to.setAttribute("stroke-miterlimit", "4"), this.textSpans[tn].span = to, tl) {
                                                var tv, tb = createNS("g");
                                                to.appendChild(tb), this.textSpans[tn].childSpan = tb
                                            }
                                            this.textSpans[tn].span = to, this.layerElement.appendChild(to)
                                        }
                                        to.style.display = "inherit"
                                    }
                                    if (tp.reset(), tf && (th[tn].n && (tc = -td, tu += te.yOffset + (tm ? 1 : 0), tm = !1), this.applyTextPropertiesToMatrix(te, tp, th[tn].line, tc, tu), tc += (th[tn].l || 0) + td), tl) {
                                        if (1 === (tg = this.globalData.fontManager.getCharData(te.finalText[tn], ti.fStyle, this.globalData.fontManager.getFontByName(te.f).fFamily)).t) tv = new SVGCompElement(tg.data, this.globalData, this);
                                        else {
                                            var tx = emptyShapeData;
                                            tg.data && tg.data.shapes && (tx = this.buildShapeData(tg.data, te.finalSize)), tv = new SVGShapeElement(tx, this.globalData, this)
                                        }
                                        if (this.textSpans[tn].glyph) {
                                            var tk = this.textSpans[tn].glyph;
                                            this.textSpans[tn].childSpan.removeChild(tk.layerElement), tk.destroy()
                                        }
                                        this.textSpans[tn].glyph = tv, tv._debug = !0, tv.prepareFrame(0), tv.renderFrame(), this.textSpans[tn].childSpan.appendChild(tv.layerElement), 1 === tg.t && this.textSpans[tn].childSpan.setAttribute("transform", "scale(" + te.finalSize / 100 + "," + te.finalSize / 100 + ")")
                                    } else tf && to.setAttribute("transform", "translate(" + tp.props[12] + "," + tp.props[13] + ")"), to.textContent = th[tn].val, to.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                                }
                                tf && to && to.setAttribute("d", "")
                            } else {
                                var t_ = this.textContainer,
                                    tw = "start";
                                switch (te.j) {
                                    case 1:
                                        tw = "end";
                                        break;
                                    case 2:
                                        tw = "middle";
                                        break;
                                    default:
                                        tw = "start"
                                }
                                t_.setAttribute("text-anchor", tw), t_.setAttribute("letter-spacing", td);
                                var tC = this.buildTextContents(te.finalText);
                                for (ta = tC.length, tu = te.ps ? te.ps[1] + te.ascent : 0, tn = 0; tn < ta; tn += 1)(to = this.textSpans[tn].span || createNS("tspan")).textContent = tC[tn], to.setAttribute("x", 0), to.setAttribute("y", tu), to.style.display = "inherit", t_.appendChild(to), this.textSpans[tn] || (this.textSpans[tn] = {
                                    span: null,
                                    glyph: null
                                }), this.textSpans[tn].span = to, tu += te.finalLineHeight;
                                this.layerElement.appendChild(t_)
                            }
                            for (; tn < this.textSpans.length;) this.textSpans[tn].span.style.display = "none", tn += 1;
                            this._sizeChanged = !0
                        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                                this._sizeChanged = !1;
                                var te = this.layerElement.getBBox();
                                this.bbox = {
                                    top: te.y,
                                    left: te.x,
                                    width: te.width,
                                    height: te.height
                                }
                            }
                            return this.bbox
                        }, SVGTextLottieElement.prototype.getValue = function() {
                            var te, ti, ts = this.textSpans.length;
                            for (this.renderedFrame = this.comp.renderedFrame, te = 0; te < ts; te += 1)(ti = this.textSpans[te].glyph) && (ti.prepareFrame(this.comp.renderedFrame - this.data.st), ti._mdf && (this._mdf = !0))
                        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                            if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                                this._sizeChanged = !0;
                                var te, ti, ts, tr, tn, ta = this.textAnimator.renderedLetters,
                                    to = this.textProperty.currentData.l;
                                for (ti = to.length, te = 0; te < ti; te += 1) to[te].n || (ts = ta[te], tr = this.textSpans[te].span, (tn = this.textSpans[te].glyph) && tn.renderFrame(), ts._mdf.m && tr.setAttribute("transform", ts.m), ts._mdf.o && tr.setAttribute("opacity", ts.o), ts._mdf.sw && tr.setAttribute("stroke-width", ts.sw), ts._mdf.sc && tr.setAttribute("stroke", ts.sc), ts._mdf.fc && tr.setAttribute("fill", ts.fc))
                            }
                        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                            var te = createNS("rect");
                            te.setAttribute("width", this.data.sw), te.setAttribute("height", this.data.sh), te.setAttribute("fill", this.data.sc), this.layerElement.appendChild(te)
                        }, NullElement.prototype.prepareFrame = function(te) {
                            this.prepareProperties(te, !0)
                        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                            return null
                        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(te) {
                            return new NullElement(te, this.globalData, this)
                        }, SVGRendererBase.prototype.createShape = function(te) {
                            return new SVGShapeElement(te, this.globalData, this)
                        }, SVGRendererBase.prototype.createText = function(te) {
                            return new SVGTextLottieElement(te, this.globalData, this)
                        }, SVGRendererBase.prototype.createImage = function(te) {
                            return new IImageElement(te, this.globalData, this)
                        }, SVGRendererBase.prototype.createSolid = function(te) {
                            return new ISolidElement(te, this.globalData, this)
                        }, SVGRendererBase.prototype.configAnimation = function(te) {
                            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + te.w + " " + te.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", te.w), this.svgElement.setAttribute("height", te.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                            var ti = this.globalData.defs;
                            this.setupGlobalData(te, ti), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = te;
                            var ts = createNS("clipPath"),
                                tr = createNS("rect");
                            tr.setAttribute("width", te.w), tr.setAttribute("height", te.h), tr.setAttribute("x", 0), tr.setAttribute("y", 0);
                            var tn = createElementID();
                            ts.setAttribute("id", tn), ts.appendChild(tr), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + tn + ")"), ti.appendChild(ts), this.layers = te.layers, this.elements = createSizedArray(te.layers.length)
                        }, SVGRendererBase.prototype.destroy = function() {
                            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                            var te, ti = this.layers ? this.layers.length : 0;
                            for (te = 0; te < ti; te += 1) this.elements[te] && this.elements[te].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(te) {
                            var ti = 0,
                                ts = this.layers.length;
                            for (ti = 0; ti < ts; ti += 1)
                                if (this.layers[ti].ind === te) return ti;
                            return -1
                        }, SVGRendererBase.prototype.buildItem = function(te) {
                            var ti = this.elements;
                            if (!ti[te] && 99 !== this.layers[te].ty) {
                                ti[te] = !0;
                                var ts = this.createItem(this.layers[te]);
                                if (ti[te] = ts, getExpressionsPlugin() && (0 === this.layers[te].ty && this.globalData.projectInterface.registerComposition(ts), ts.initExpressions()), this.appendElementInPos(ts, te), this.layers[te].tt) {
                                    var tr = "tp" in this.layers[te] ? this.findIndexByInd(this.layers[te].tp) : te - 1;
                                    if (-1 === tr) return;
                                    if (this.elements[tr] && !0 !== this.elements[tr]) {
                                        var tn = ti[tr].getMatte(this.layers[te].tt);
                                        ts.setMatte(tn)
                                    } else this.buildItem(tr), this.addPendingElement(ts)
                                }
                            }
                        }, SVGRendererBase.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) {
                                var te = this.pendingElements.pop();
                                if (te.checkParenting(), te.data.tt)
                                    for (var ti = 0, ts = this.elements.length; ti < ts;) {
                                        if (this.elements[ti] === te) {
                                            var tr = "tp" in te.data ? this.findIndexByInd(te.data.tp) : ti - 1,
                                                tn = this.elements[tr].getMatte(this.layers[ti].tt);
                                            te.setMatte(tn);
                                            break
                                        }
                                        ti += 1
                                    }
                            }
                        }, SVGRendererBase.prototype.renderFrame = function(te) {
                            if (this.renderedFrame !== te && !this.destroyed) {
                                null === te ? te = this.renderedFrame : this.renderedFrame = te, this.globalData.frameNum = te, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = te, this.globalData._mdf = !1;
                                var ti, ts = this.layers.length;
                                for (this.completeLayers || this.checkLayers(te), ti = ts - 1; ti >= 0; ti -= 1)(this.completeLayers || this.elements[ti]) && this.elements[ti].prepareFrame(te - this.layers[ti].st);
                                if (this.globalData._mdf)
                                    for (ti = 0; ti < ts; ti += 1)(this.completeLayers || this.elements[ti]) && this.elements[ti].renderFrame()
                            }
                        }, SVGRendererBase.prototype.appendElementInPos = function(te, ti) {
                            var ts = te.getBaseElement();
                            if (ts) {
                                for (var tr, tn = 0; tn < ti;) this.elements[tn] && !0 !== this.elements[tn] && this.elements[tn].getBaseElement() && (tr = this.elements[tn].getBaseElement()), tn += 1;
                                tr ? this.layerElement.insertBefore(ts, tr) : this.layerElement.appendChild(ts)
                            }
                        }, SVGRendererBase.prototype.hide = function() {
                            this.layerElement.style.display = "none"
                        }, SVGRendererBase.prototype.show = function() {
                            this.layerElement.style.display = "block"
                        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(te, ti, ts) {
                            this.initFrame(), this.initBaseData(te, ti, ts), this.initTransform(te, ti, ts), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && ti.progressiveLoad || this.buildAllItems(), this.hide()
                        }, ICompElement.prototype.prepareFrame = function(te) {
                            if (this._mdf = !1, this.prepareRenderableFrame(te), this.prepareProperties(te, this.isInRange), this.isInRange || this.data.xt) {
                                if (this.tm._placeholder) this.renderedFrame = te / this.data.sr;
                                else {
                                    var ti = this.tm.v;
                                    ti === this.data.op && (ti = this.data.op - 1), this.renderedFrame = ti
                                }
                                var ts, tr = this.elements.length;
                                for (this.completeLayers || this.checkLayers(this.renderedFrame), ts = tr - 1; ts >= 0; ts -= 1)(this.completeLayers || this.elements[ts]) && (this.elements[ts].prepareFrame(this.renderedFrame - this.layers[ts].st), this.elements[ts]._mdf && (this._mdf = !0))
                            }
                        }, ICompElement.prototype.renderInnerContent = function() {
                            var te, ti = this.layers.length;
                            for (te = 0; te < ti; te += 1)(this.completeLayers || this.elements[te]) && this.elements[te].renderFrame()
                        }, ICompElement.prototype.setElements = function(te) {
                            this.elements = te
                        }, ICompElement.prototype.getElements = function() {
                            return this.elements
                        }, ICompElement.prototype.destroyElements = function() {
                            var te, ti = this.layers.length;
                            for (te = 0; te < ti; te += 1) this.elements[te] && this.elements[te].destroy()
                        }, ICompElement.prototype.destroy = function() {
                            this.destroyElements(), this.destroyBaseElement()
                        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(te) {
                            return new SVGCompElement(te, this.globalData, this)
                        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(te) {
                            return new SVGCompElement(te, this.globalData, this)
                        }, CVContextData.prototype.duplicate = function() {
                            var te = 2 * this._length,
                                ti = this.savedOp;
                            this.savedOp = createTypedArray("float32", te), this.savedOp.set(ti);
                            var ts = 0;
                            for (ts = this._length; ts < te; ts += 1) this.saved[ts] = createTypedArray("float32", 16);
                            this._length = te
                        }, CVContextData.prototype.reset = function() {
                            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                        }, CVContextData.prototype.popTransform = function() {
                            var te, ti = this.saved[this.cArrPos],
                                ts = this.cTr.props;
                            for (te = 0; te < 16; te += 1) ts[te] = ti[te];
                            return ti
                        }, CVContextData.prototype.popOpacity = function() {
                            var te = this.savedOp[this.cArrPos];
                            return this.cO = te, te
                        }, CVContextData.prototype.pop = function() {
                            return this.cArrPos -= 1, {
                                transform: this.popTransform(),
                                opacity: this.popOpacity()
                            }
                        }, CVContextData.prototype.push = function() {
                            var te, ti = this.cTr.props;
                            this._length <= this.cArrPos && this.duplicate();
                            var ts = this.saved[this.cArrPos];
                            for (te = 0; te < 16; te += 1) ts[te] = ti[te];
                            this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
                        }, CVContextData.prototype.getTransform = function() {
                            return this.cTr
                        }, CVContextData.prototype.getOpacity = function() {
                            return this.cO
                        }, CVContextData.prototype.setOpacity = function(te) {
                            this.cO = te
                        }, ShapeTransformManager.prototype = {
                            addTransformSequence: function(te) {
                                var ti, ts = te.length,
                                    tr = "_";
                                for (ti = 0; ti < ts; ti += 1) tr += te[ti].transform.key + "_";
                                var tn = this.sequences[tr];
                                return tn || (tn = {
                                    transforms: [].concat(te),
                                    finalTransform: new Matrix,
                                    _mdf: !1
                                }, this.sequences[tr] = tn, this.sequenceList.push(tn)), tn
                            },
                            processSequence: function(te, ti) {
                                for (var ts, tr = 0, tn = te.transforms.length, ta = ti; tr < tn && !ti;) {
                                    if (te.transforms[tr].transform.mProps._mdf) {
                                        ta = !0;
                                        break
                                    }
                                    tr += 1
                                }
                                if (ta)
                                    for (te.finalTransform.reset(), tr = tn - 1; tr >= 0; tr -= 1) ts = te.transforms[tr].transform.mProps.v.props, te.finalTransform.transform(ts[0], ts[1], ts[2], ts[3], ts[4], ts[5], ts[6], ts[7], ts[8], ts[9], ts[10], ts[11], ts[12], ts[13], ts[14], ts[15]);
                                te._mdf = ta
                            },
                            processSequences: function(te) {
                                var ti, ts = this.sequenceList.length;
                                for (ti = 0; ti < ts; ti += 1) this.processSequence(this.sequenceList[ti], te)
                            },
                            getNewKey: function() {
                                return this.transform_key_count += 1, "_" + this.transform_key_count
                            }
                        };
                        var lumaLoader = function() {
                            var te = "__lottie_element_luma_buffer",
                                ti = null,
                                ts = null,
                                tr = null;

                            function tn() {
                                var tn, ta, to;
                                ti || (tn = createNS("svg"), ta = createNS("filter"), to = createNS("feColorMatrix"), ta.setAttribute("id", te), to.setAttribute("type", "matrix"), to.setAttribute("color-interpolation-filters", "sRGB"), to.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), ta.appendChild(to), tn.appendChild(ta), tn.setAttribute("id", te + "_svg"), featureSupport.svgLumaHidden && (tn.style.display = "none"), tr = tn, document.body.appendChild(tr), (ts = (ti = createTag("canvas")).getContext("2d")).filter = "url(#" + te + ")", ts.fillStyle = "rgba(0,0,0,0)", ts.fillRect(0, 0, 1, 1))
                            }
                            return {
                                load: tn,
                                get: function(tr) {
                                    return ti || tn(), ti.width = tr.width, ti.height = tr.height, ts.filter = "url(#" + te + ")", ti
                                }
                            }
                        };

                        function createCanvas(te, ti) {
                            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(te, ti);
                            var ts = createTag("canvas");
                            return ts.width = te, ts.height = ti, ts
                        }
                        var assetLoader = {
                            loadLumaCanvas: lumaLoader.load,
                            getLumaCanvas: lumaLoader.get,
                            createCanvas: createCanvas
                        };

                        function CVEffects() {}

                        function CVMaskElement(te, ti) {
                            this.data = te, this.element = ti, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                            var ts, tr = this.masksProperties.length,
                                tn = !1;
                            for (ts = 0; ts < tr; ts += 1) "n" !== this.masksProperties[ts].mode && (tn = !0), this.viewData[ts] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[ts], 3);
                            this.hasMasks = tn, tn && this.element.addRenderableComponent(this)
                        }

                        function CVBaseElement() {}
                        CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
                            if (this.hasMasks) {
                                var te, ti, ts, tr, tn = this.element.finalTransform.mat,
                                    ta = this.element.canvasContext,
                                    to = this.masksProperties.length;
                                for (ta.beginPath(), te = 0; te < to; te += 1)
                                    if ("n" !== this.masksProperties[te].mode) {
                                        this.masksProperties[te].inv && (ta.moveTo(0, 0), ta.lineTo(this.element.globalData.compSize.w, 0), ta.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), ta.lineTo(0, this.element.globalData.compSize.h), ta.lineTo(0, 0)), tr = this.viewData[te].v, ti = tn.applyToPointArray(tr.v[0][0], tr.v[0][1], 0), ta.moveTo(ti[0], ti[1]);
                                        var th, tl = tr._length;
                                        for (th = 1; th < tl; th += 1) ts = tn.applyToTriplePoints(tr.o[th - 1], tr.i[th], tr.v[th]), ta.bezierCurveTo(ts[0], ts[1], ts[2], ts[3], ts[4], ts[5]);
                                        ts = tn.applyToTriplePoints(tr.o[th - 1], tr.i[0], tr.v[0]), ta.bezierCurveTo(ts[0], ts[1], ts[2], ts[3], ts[4], ts[5])
                                    }
                                this.element.globalData.renderer.save(!0), ta.clip()
                            }
                        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                            this.element = null
                        };
                        var operationsMap = {
                            1: "source-in",
                            2: "source-out",
                            3: "source-in",
                            4: "source-out"
                        };

                        function CVShapeData(te, ti, ts, tr) {
                            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                            var tn, ta = 4;
                            "rc" === ti.ty ? ta = 5 : "el" === ti.ty ? ta = 6 : "sr" === ti.ty && (ta = 7), this.sh = ShapePropertyFactory.getShapeProp(te, ti, ta, te);
                            var to, th = ts.length;
                            for (tn = 0; tn < th; tn += 1) ts[tn].closed || (to = {
                                transforms: tr.addTransformSequence(ts[tn].transforms),
                                trNodes: []
                            }, this.styledShapes.push(to), ts[tn].elements.push(to))
                        }

                        function CVShapeElement(te, ti, ts) {
                            this.shapes = [], this.shapesData = te.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(te, ti, ts)
                        }

                        function CVTextElement(te, ti, ts) {
                            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                                fill: "rgba(0,0,0,0)",
                                stroke: "rgba(0,0,0,0)",
                                sWidth: 0,
                                fValue: ""
                            }, this.initElement(te, ti, ts)
                        }

                        function CVImageElement(te, ti, ts) {
                            this.assetData = ti.getAssetData(te.refId), this.img = ti.imageLoader.getAsset(this.assetData), this.initElement(te, ti, ts)
                        }

                        function CVSolidElement(te, ti, ts) {
                            this.initElement(te, ti, ts)
                        }

                        function CanvasRendererBase(te, ti) {
                            this.animationItem = te, this.renderConfig = {
                                clearCanvas: !ti || void 0 === ti.clearCanvas || ti.clearCanvas,
                                context: ti && ti.context || null,
                                progressiveLoad: ti && ti.progressiveLoad || !1,
                                preserveAspectRatio: ti && ti.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: ti && ti.imagePreserveAspectRatio || "xMidYMid slice",
                                contentVisibility: ti && ti.contentVisibility || "visible",
                                className: ti && ti.className || "",
                                id: ti && ti.id || ""
                            }, this.renderConfig.dpr = ti && ti.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = ti && ti.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                                frameNum: -1,
                                _mdf: !1,
                                renderConfig: this.renderConfig,
                                currentGlobalAlpha: -1
                            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                        }

                        function CVCompElement(te, ti, ts) {
                            this.completeLayers = !1, this.layers = te.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(te, ti, ts), this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ti.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function CanvasRenderer(te, ti) {
                            this.animationItem = te, this.renderConfig = {
                                clearCanvas: !ti || void 0 === ti.clearCanvas || ti.clearCanvas,
                                context: ti && ti.context || null,
                                progressiveLoad: ti && ti.progressiveLoad || !1,
                                preserveAspectRatio: ti && ti.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: ti && ti.imagePreserveAspectRatio || "xMidYMid slice",
                                contentVisibility: ti && ti.contentVisibility || "visible",
                                className: ti && ti.className || "",
                                id: ti && ti.id || "",
                                runExpressions: !ti || void 0 === ti.runExpressions || ti.runExpressions
                            }, this.renderConfig.dpr = ti && ti.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = ti && ti.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                                frameNum: -1,
                                _mdf: !1,
                                renderConfig: this.renderConfig,
                                currentGlobalAlpha: -1
                            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                        }

                        function HBaseElement() {}

                        function HSolidElement(te, ti, ts) {
                            this.initElement(te, ti, ts)
                        }

                        function HShapeElement(te, ti, ts) {
                            this.shapes = [], this.shapesData = te.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(te, ti, ts), this.prevViewData = [], this.currentBBox = {
                                x: 999999,
                                y: -999999,
                                h: 0,
                                w: 0
                            }
                        }

                        function HTextElement(te, ti, ts) {
                            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                                x: 999999,
                                y: -999999,
                                h: 0,
                                w: 0
                            }, this.renderType = "svg", this.isMasked = !1, this.initElement(te, ti, ts)
                        }

                        function HCameraElement(te, ti, ts) {
                            this.initFrame(), this.initBaseData(te, ti, ts), this.initHierarchy();
                            var tr = PropertyFactory.getProp;
                            if (this.pe = tr(this, te.pe, 0, 0, this), te.ks.p.s ? (this.px = tr(this, te.ks.p.x, 1, 0, this), this.py = tr(this, te.ks.p.y, 1, 0, this), this.pz = tr(this, te.ks.p.z, 1, 0, this)) : this.p = tr(this, te.ks.p, 1, 0, this), te.ks.a && (this.a = tr(this, te.ks.a, 1, 0, this)), te.ks.or.k.length && te.ks.or.k[0].to) {
                                var tn, ta = te.ks.or.k.length;
                                for (tn = 0; tn < ta; tn += 1) te.ks.or.k[tn].to = null, te.ks.or.k[tn].ti = null
                            }
                            this.or = tr(this, te.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = tr(this, te.ks.rx, 0, degToRads, this), this.ry = tr(this, te.ks.ry, 0, degToRads, this), this.rz = tr(this, te.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                                mProp: this
                            }
                        }

                        function HImageElement(te, ti, ts) {
                            this.assetData = ti.getAssetData(te.refId), this.initElement(te, ti, ts)
                        }

                        function HybridRendererBase(te, ti) {
                            this.animationItem = te, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                                className: ti && ti.className || "",
                                imagePreserveAspectRatio: ti && ti.imagePreserveAspectRatio || "xMidYMid slice",
                                hideOnTransparent: !(ti && !1 === ti.hideOnTransparent),
                                filterSize: {
                                    width: ti && ti.filterSize && ti.filterSize.width || "400%",
                                    height: ti && ti.filterSize && ti.filterSize.height || "400%",
                                    x: ti && ti.filterSize && ti.filterSize.x || "-100%",
                                    y: ti && ti.filterSize && ti.filterSize.y || "-100%"
                                }
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                renderConfig: this.renderConfig
                            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                        }

                        function HCompElement(te, ti, ts) {
                            this.layers = te.layers, this.supports3d = !te.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(te, ti, ts), this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ti.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function HybridRenderer(te, ti) {
                            this.animationItem = te, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                                className: ti && ti.className || "",
                                imagePreserveAspectRatio: ti && ti.imagePreserveAspectRatio || "xMidYMid slice",
                                hideOnTransparent: !(ti && !1 === ti.hideOnTransparent),
                                filterSize: {
                                    width: ti && ti.filterSize && ti.filterSize.width || "400%",
                                    height: ti && ti.filterSize && ti.filterSize.height || "400%",
                                    x: ti && ti.filterSize && ti.filterSize.x || "-100%",
                                    y: ti && ti.filterSize && ti.filterSize.y || "-100%"
                                },
                                runExpressions: !ti || void 0 === ti.runExpressions || ti.runExpressions
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                renderConfig: this.renderConfig
                            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                        }
                        CVBaseElement.prototype = {
                            createElements: function() {},
                            initRendererElement: function() {},
                            createContainerElements: function() {
                                if (this.data.tt >= 1) {
                                    this.buffers = [];
                                    var te = this.globalData.canvasContext,
                                        ti = assetLoader.createCanvas(te.canvas.width, te.canvas.height);
                                    this.buffers.push(ti);
                                    var ts = assetLoader.createCanvas(te.canvas.width, te.canvas.height);
                                    this.buffers.push(ts), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                                }
                                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
                            },
                            createContent: function() {},
                            setBlendMode: function() {
                                var te = this.globalData;
                                if (te.blendMode !== this.data.bm) {
                                    te.blendMode = this.data.bm;
                                    var ti = getBlendMode(this.data.bm);
                                    te.canvasContext.globalCompositeOperation = ti
                                }
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new CVMaskElement(this.data, this)
                            },
                            hideElement: function() {
                                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                            },
                            showElement: function() {
                                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                            },
                            clearCanvas: function(te) {
                                te.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                            },
                            prepareLayer: function() {
                                if (this.data.tt >= 1) {
                                    var te = this.buffers[0].getContext("2d");
                                    this.clearCanvas(te), te.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                                }
                            },
                            exitLayer: function() {
                                if (this.data.tt >= 1) {
                                    var te = this.buffers[1],
                                        ti = te.getContext("2d");
                                    if (this.clearCanvas(ti), ti.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                        var ts = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                        ts.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(ts, 0, 0)
                                    }
                                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(te, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                                }
                            },
                            renderFrame: function(te) {
                                if (!this.hidden && !this.data.hd && (1 !== this.data.td || te)) {
                                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                                    var ti = 0 === this.data.ty;
                                    this.prepareLayer(), this.globalData.renderer.save(ti), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(ti), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                                }
                            },
                            destroy: function() {
                                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                            },
                            mHelper: new Matrix
                        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                            opacity: 1,
                            _opMdf: !1
                        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                        }, CVShapeElement.prototype.createStyleElement = function(te, ti) {
                            var ts = {
                                    data: te,
                                    type: te.ty,
                                    preTransforms: this.transformsManager.addTransformSequence(ti),
                                    transforms: [],
                                    elements: [],
                                    closed: !0 === te.hd
                                },
                                tr = {};
                            if ("fl" === te.ty || "st" === te.ty ? (tr.c = PropertyFactory.getProp(this, te.c, 1, 255, this), tr.c.k || (ts.co = "rgb(" + bmFloor(tr.c.v[0]) + "," + bmFloor(tr.c.v[1]) + "," + bmFloor(tr.c.v[2]) + ")")) : "gf" !== te.ty && "gs" !== te.ty || (tr.s = PropertyFactory.getProp(this, te.s, 1, null, this), tr.e = PropertyFactory.getProp(this, te.e, 1, null, this), tr.h = PropertyFactory.getProp(this, te.h || {
                                    k: 0
                                }, 0, .01, this), tr.a = PropertyFactory.getProp(this, te.a || {
                                    k: 0
                                }, 0, degToRads, this), tr.g = new GradientProperty(this, te.g, this)), tr.o = PropertyFactory.getProp(this, te.o, 0, .01, this), "st" === te.ty || "gs" === te.ty) {
                                if (ts.lc = lineCapEnum[te.lc || 2], ts.lj = lineJoinEnum[te.lj || 2], 1 == te.lj && (ts.ml = te.ml), tr.w = PropertyFactory.getProp(this, te.w, 0, null, this), tr.w.k || (ts.wi = tr.w.v), te.d) {
                                    var tn = new DashProperty(this, te.d, "canvas", this);
                                    tr.d = tn, tr.d.k || (ts.da = tr.d.dashArray, ts.do = tr.d.dashoffset[0])
                                }
                            } else ts.r = 2 === te.r ? "evenodd" : "nonzero";
                            return this.stylesList.push(ts), tr.style = ts, tr
                        }, CVShapeElement.prototype.createGroupElement = function() {
                            return {
                                it: [],
                                prevViewData: []
                            }
                        }, CVShapeElement.prototype.createTransformElement = function(te) {
                            return {
                                transform: {
                                    opacity: 1,
                                    _opMdf: !1,
                                    key: this.transformsManager.getNewKey(),
                                    op: PropertyFactory.getProp(this, te.o, 0, .01, this),
                                    mProps: TransformPropertyFactory.getTransformProperty(this, te, this)
                                }
                            }
                        }, CVShapeElement.prototype.createShapeElement = function(te) {
                            var ti = new CVShapeData(this, te, this.stylesList, this.transformsManager);
                            return this.shapes.push(ti), this.addShapeToModifiers(ti), ti
                        }, CVShapeElement.prototype.reloadShapes = function() {
                            this._isFirstFrame = !0;
                            var te, ti = this.itemsData.length;
                            for (te = 0; te < ti; te += 1) this.prevViewData[te] = this.itemsData[te];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), ti = this.dynamicProperties.length, te = 0; te < ti; te += 1) this.dynamicProperties[te].getValue();
                            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                        }, CVShapeElement.prototype.addTransformToStyleList = function(te) {
                            var ti, ts = this.stylesList.length;
                            for (ti = 0; ti < ts; ti += 1) this.stylesList[ti].closed || this.stylesList[ti].transforms.push(te)
                        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                            var te, ti = this.stylesList.length;
                            for (te = 0; te < ti; te += 1) this.stylesList[te].closed || this.stylesList[te].transforms.pop()
                        }, CVShapeElement.prototype.closeStyles = function(te) {
                            var ti, ts = te.length;
                            for (ti = 0; ti < ts; ti += 1) te[ti].closed = !0
                        }, CVShapeElement.prototype.searchShapes = function(te, ti, ts, tr, tn) {
                            var ta, to, th, tl, tp, tf, tc = te.length - 1,
                                tu = [],
                                tm = [],
                                td = [].concat(tn);
                            for (ta = tc; ta >= 0; ta -= 1) {
                                if ((tl = this.searchProcessedElement(te[ta])) ? ti[ta] = ts[tl - 1] : te[ta]._shouldRender = tr, "fl" === te[ta].ty || "st" === te[ta].ty || "gf" === te[ta].ty || "gs" === te[ta].ty) tl ? ti[ta].style.closed = !1 : ti[ta] = this.createStyleElement(te[ta], td), tu.push(ti[ta].style);
                                else if ("gr" === te[ta].ty) {
                                    if (tl)
                                        for (th = ti[ta].it.length, to = 0; to < th; to += 1) ti[ta].prevViewData[to] = ti[ta].it[to];
                                    else ti[ta] = this.createGroupElement(te[ta]);
                                    this.searchShapes(te[ta].it, ti[ta].it, ti[ta].prevViewData, tr, td)
                                } else "tr" === te[ta].ty ? (tl || (tf = this.createTransformElement(te[ta]), ti[ta] = tf), td.push(ti[ta]), this.addTransformToStyleList(ti[ta])) : "sh" === te[ta].ty || "rc" === te[ta].ty || "el" === te[ta].ty || "sr" === te[ta].ty ? tl || (ti[ta] = this.createShapeElement(te[ta])) : "tm" === te[ta].ty || "rd" === te[ta].ty || "pb" === te[ta].ty || "zz" === te[ta].ty || "op" === te[ta].ty ? (tl ? (tp = ti[ta]).closed = !1 : ((tp = ShapeModifiers.getModifier(te[ta].ty)).init(this, te[ta]), ti[ta] = tp, this.shapeModifiers.push(tp)), tm.push(tp)) : "rp" === te[ta].ty && (tl ? (tp = ti[ta]).closed = !0 : (tp = ShapeModifiers.getModifier(te[ta].ty), ti[ta] = tp, tp.init(this, te, ta, ti), this.shapeModifiers.push(tp), tr = !1), tm.push(tp));
                                this.addProcessedElement(te[ta], ta + 1)
                            }
                            for (this.removeTransformFromStyleList(), this.closeStyles(tu), tc = tm.length, ta = 0; ta < tc; ta += 1) tm[ta].closed = !0
                        }, CVShapeElement.prototype.renderInnerContent = function() {
                            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                        }, CVShapeElement.prototype.renderShapeTransform = function(te, ti) {
                            (te._opMdf || ti.op._mdf || this._isFirstFrame) && (ti.opacity = te.opacity, ti.opacity *= ti.op.v, ti._opMdf = !0)
                        }, CVShapeElement.prototype.drawLayer = function() {
                            var te, ti, ts, tr, tn, ta, to, th, tl, tp = this.stylesList.length,
                                tf = this.globalData.renderer,
                                tc = this.globalData.canvasContext;
                            for (te = 0; te < tp; te += 1)
                                if (("st" !== (th = (tl = this.stylesList[te]).type) && "gs" !== th || 0 !== tl.wi) && tl.data._shouldRender && 0 !== tl.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                                    for (tf.save(), ta = tl.elements, "st" === th || "gs" === th ? (tc.strokeStyle = "st" === th ? tl.co : tl.grd, tc.lineWidth = tl.wi, tc.lineCap = tl.lc, tc.lineJoin = tl.lj, tc.miterLimit = tl.ml || 0) : tc.fillStyle = "fl" === th ? tl.co : tl.grd, tf.ctxOpacity(tl.coOp), "st" !== th && "gs" !== th && tc.beginPath(), tf.ctxTransform(tl.preTransforms.finalTransform.props), ts = ta.length, ti = 0; ti < ts; ti += 1) {
                                        for ("st" !== th && "gs" !== th || (tc.beginPath(), tl.da && (tc.setLineDash(tl.da), tc.lineDashOffset = tl.do)), tn = (to = ta[ti].trNodes).length, tr = 0; tr < tn; tr += 1) "m" === to[tr].t ? tc.moveTo(to[tr].p[0], to[tr].p[1]) : "c" === to[tr].t ? tc.bezierCurveTo(to[tr].pts[0], to[tr].pts[1], to[tr].pts[2], to[tr].pts[3], to[tr].pts[4], to[tr].pts[5]) : tc.closePath();
                                        "st" !== th && "gs" !== th || (tc.stroke(), tl.da && tc.setLineDash(this.dashResetter))
                                    }
                                    "st" !== th && "gs" !== th && tc.fill(tl.r), tf.restore()
                                }
                        }, CVShapeElement.prototype.renderShape = function(te, ti, ts, tr) {
                            var tn, ta;
                            for (ta = te, tn = ti.length - 1; tn >= 0; tn -= 1) "tr" === ti[tn].ty ? (ta = ts[tn].transform, this.renderShapeTransform(te, ta)) : "sh" === ti[tn].ty || "el" === ti[tn].ty || "rc" === ti[tn].ty || "sr" === ti[tn].ty ? this.renderPath(ti[tn], ts[tn]) : "fl" === ti[tn].ty ? this.renderFill(ti[tn], ts[tn], ta) : "st" === ti[tn].ty ? this.renderStroke(ti[tn], ts[tn], ta) : "gf" === ti[tn].ty || "gs" === ti[tn].ty ? this.renderGradientFill(ti[tn], ts[tn], ta) : "gr" === ti[tn].ty ? this.renderShape(ta, ti[tn].it, ts[tn].it) : ti[tn].ty;
                            tr && this.drawLayer()
                        }, CVShapeElement.prototype.renderStyledShape = function(te, ti) {
                            if (this._isFirstFrame || ti._mdf || te.transforms._mdf) {
                                var ts, tr, tn, ta = te.trNodes,
                                    to = ti.paths,
                                    th = to._length;
                                ta.length = 0;
                                var tl = te.transforms.finalTransform;
                                for (tn = 0; tn < th; tn += 1) {
                                    var tp = to.shapes[tn];
                                    if (tp && tp.v) {
                                        for (tr = tp._length, ts = 1; ts < tr; ts += 1) 1 === ts && ta.push({
                                            t: "m",
                                            p: tl.applyToPointArray(tp.v[0][0], tp.v[0][1], 0)
                                        }), ta.push({
                                            t: "c",
                                            pts: tl.applyToTriplePoints(tp.o[ts - 1], tp.i[ts], tp.v[ts])
                                        });
                                        1 === tr && ta.push({
                                            t: "m",
                                            p: tl.applyToPointArray(tp.v[0][0], tp.v[0][1], 0)
                                        }), tp.c && tr && (ta.push({
                                            t: "c",
                                            pts: tl.applyToTriplePoints(tp.o[ts - 1], tp.i[0], tp.v[0])
                                        }), ta.push({
                                            t: "z"
                                        }))
                                    }
                                }
                                te.trNodes = ta
                            }
                        }, CVShapeElement.prototype.renderPath = function(te, ti) {
                            if (!0 !== te.hd && te._shouldRender) {
                                var ts, tr = ti.styledShapes.length;
                                for (ts = 0; ts < tr; ts += 1) this.renderStyledShape(ti.styledShapes[ts], ti.sh)
                            }
                        }, CVShapeElement.prototype.renderFill = function(te, ti, ts) {
                            var tr = ti.style;
                            (ti.c._mdf || this._isFirstFrame) && (tr.co = "rgb(" + bmFloor(ti.c.v[0]) + "," + bmFloor(ti.c.v[1]) + "," + bmFloor(ti.c.v[2]) + ")"), (ti.o._mdf || ts._opMdf || this._isFirstFrame) && (tr.coOp = ti.o.v * ts.opacity)
                        }, CVShapeElement.prototype.renderGradientFill = function(te, ti, ts) {
                            var tr, tn = ti.style;
                            if (!tn.grd || ti.g._mdf || ti.s._mdf || ti.e._mdf || 1 !== te.t && (ti.h._mdf || ti.a._mdf)) {
                                var ta, to = this.globalData.canvasContext,
                                    th = ti.s.v,
                                    tl = ti.e.v;
                                if (1 === te.t) tr = to.createLinearGradient(th[0], th[1], tl[0], tl[1]);
                                else {
                                    var tp = Math.sqrt(Math.pow(th[0] - tl[0], 2) + Math.pow(th[1] - tl[1], 2)),
                                        tf = Math.atan2(tl[1] - th[1], tl[0] - th[0]),
                                        tc = ti.h.v;
                                    tc >= 1 ? tc = .99 : tc <= -1 && (tc = -.99);
                                    var tu = tp * tc,
                                        tm = Math.cos(tf + ti.a.v) * tu + th[0],
                                        td = Math.sin(tf + ti.a.v) * tu + th[1];
                                    tr = to.createRadialGradient(tm, td, 0, th[0], th[1], tp)
                                }
                                var tg = te.g.p,
                                    ty = ti.g.c,
                                    tv = 1;
                                for (ta = 0; ta < tg; ta += 1) ti.g._hasOpacity && ti.g._collapsable && (tv = ti.g.o[2 * ta + 1]), tr.addColorStop(ty[4 * ta] / 100, "rgba(" + ty[4 * ta + 1] + "," + ty[4 * ta + 2] + "," + ty[4 * ta + 3] + "," + tv + ")");
                                tn.grd = tr
                            }
                            tn.coOp = ti.o.v * ts.opacity
                        }, CVShapeElement.prototype.renderStroke = function(te, ti, ts) {
                            var tr = ti.style,
                                tn = ti.d;
                            tn && (tn._mdf || this._isFirstFrame) && (tr.da = tn.dashArray, tr.do = tn.dashoffset[0]), (ti.c._mdf || this._isFirstFrame) && (tr.co = "rgb(" + bmFloor(ti.c.v[0]) + "," + bmFloor(ti.c.v[1]) + "," + bmFloor(ti.c.v[2]) + ")"), (ti.o._mdf || ts._opMdf || this._isFirstFrame) && (tr.coOp = ti.o.v * ts.opacity), (ti.w._mdf || this._isFirstFrame) && (tr.wi = ti.w.v)
                        }, CVShapeElement.prototype.destroy = function() {
                            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                            var te = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(te.l ? te.l.length : 0);
                            var ti = !1;
                            te.fc ? (ti = !0, this.values.fill = this.buildColor(te.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = ti;
                            var ts = !1;
                            te.sc && (ts = !0, this.values.stroke = this.buildColor(te.sc), this.values.sWidth = te.sw);
                            var tr, tn, ta, to, th, tl, tp, tf, tc, tu, tm, td, tg = this.globalData.fontManager.getFontByName(te.f),
                                ty = te.l,
                                tv = this.mHelper;
                            this.stroke = ts, this.values.fValue = te.finalSize + "px " + this.globalData.fontManager.getFontByName(te.f).fFamily, tn = te.finalText.length;
                            var tb = this.data.singleShape,
                                tx = .001 * te.tr * te.finalSize,
                                tk = 0,
                                t_ = 0,
                                tw = !0,
                                tC = 0;
                            for (tr = 0; tr < tn; tr += 1) {
                                to = (ta = this.globalData.fontManager.getCharData(te.finalText[tr], tg.fStyle, this.globalData.fontManager.getFontByName(te.f).fFamily)) && ta.data || {}, tv.reset(), tb && ty[tr].n && (tk = -tx, t_ += te.yOffset + (tw ? 1 : 0), tw = !1), tc = (tp = to.shapes ? to.shapes[0].it : []).length, tv.scale(te.finalSize / 100, te.finalSize / 100), tb && this.applyTextPropertiesToMatrix(te, tv, ty[tr].line, tk, t_), tm = createSizedArray(tc - 1);
                                var tP = 0;
                                for (tf = 0; tf < tc; tf += 1)
                                    if ("sh" === tp[tf].ty) {
                                        for (tl = tp[tf].ks.k.i.length, tu = tp[tf].ks.k, td = [], th = 1; th < tl; th += 1) 1 === th && td.push(tv.applyToX(tu.v[0][0], tu.v[0][1], 0), tv.applyToY(tu.v[0][0], tu.v[0][1], 0)), td.push(tv.applyToX(tu.o[th - 1][0], tu.o[th - 1][1], 0), tv.applyToY(tu.o[th - 1][0], tu.o[th - 1][1], 0), tv.applyToX(tu.i[th][0], tu.i[th][1], 0), tv.applyToY(tu.i[th][0], tu.i[th][1], 0), tv.applyToX(tu.v[th][0], tu.v[th][1], 0), tv.applyToY(tu.v[th][0], tu.v[th][1], 0));
                                        td.push(tv.applyToX(tu.o[th - 1][0], tu.o[th - 1][1], 0), tv.applyToY(tu.o[th - 1][0], tu.o[th - 1][1], 0), tv.applyToX(tu.i[0][0], tu.i[0][1], 0), tv.applyToY(tu.i[0][0], tu.i[0][1], 0), tv.applyToX(tu.v[0][0], tu.v[0][1], 0), tv.applyToY(tu.v[0][0], tu.v[0][1], 0)), tm[tP] = td, tP += 1
                                    }
                                tb && (tk += ty[tr].l + tx), this.textSpans[tC] ? this.textSpans[tC].elem = tm : this.textSpans[tC] = {
                                    elem: tm
                                }, tC += 1
                            }
                        }, CVTextElement.prototype.renderInnerContent = function() {
                            var te, ti, ts, tr, tn, ta, to = this.canvasContext;
                            to.font = this.values.fValue, to.lineCap = "butt", to.lineJoin = "miter", to.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                            var th, tl = this.textAnimator.renderedLetters,
                                tp = this.textProperty.currentData.l;
                            ti = tp.length;
                            var tf, tc, tu = null,
                                tm = null,
                                td = null;
                            for (te = 0; te < ti; te += 1)
                                if (!tp[te].n) {
                                    if ((th = tl[te]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(th.p), this.globalData.renderer.ctxOpacity(th.o)), this.fill) {
                                        for (th && th.fc ? tu !== th.fc && (tu = th.fc, to.fillStyle = th.fc) : tu !== this.values.fill && (tu = this.values.fill, to.fillStyle = this.values.fill), tr = (tf = this.textSpans[te].elem).length, this.globalData.canvasContext.beginPath(), ts = 0; ts < tr; ts += 1)
                                            for (ta = (tc = tf[ts]).length, this.globalData.canvasContext.moveTo(tc[0], tc[1]), tn = 2; tn < ta; tn += 6) this.globalData.canvasContext.bezierCurveTo(tc[tn], tc[tn + 1], tc[tn + 2], tc[tn + 3], tc[tn + 4], tc[tn + 5]);
                                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                                    }
                                    if (this.stroke) {
                                        for (th && th.sw ? td !== th.sw && (td = th.sw, to.lineWidth = th.sw) : td !== this.values.sWidth && (td = this.values.sWidth, to.lineWidth = this.values.sWidth), th && th.sc ? tm !== th.sc && (tm = th.sc, to.strokeStyle = th.sc) : tm !== this.values.stroke && (tm = this.values.stroke, to.strokeStyle = this.values.stroke), tr = (tf = this.textSpans[te].elem).length, this.globalData.canvasContext.beginPath(), ts = 0; ts < tr; ts += 1)
                                            for (ta = (tc = tf[ts]).length, this.globalData.canvasContext.moveTo(tc[0], tc[1]), tn = 2; tn < ta; tn += 6) this.globalData.canvasContext.bezierCurveTo(tc[tn], tc[tn + 1], tc[tn + 2], tc[tn + 3], tc[tn + 4], tc[tn + 5]);
                                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                                    }
                                    th && this.globalData.renderer.restore()
                                }
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                                var te = createTag("canvas");
                                te.width = this.assetData.w, te.height = this.assetData.h;
                                var ti, ts, tr = te.getContext("2d"),
                                    tn = this.img.width,
                                    ta = this.img.height,
                                    to = tn / ta,
                                    th = this.assetData.w / this.assetData.h,
                                    tl = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                                to > th && "xMidYMid slice" === tl || to < th && "xMidYMid slice" !== tl ? ti = (ts = ta) * th : ts = (ti = tn) / th, tr.drawImage(this.img, (tn - ti) / 2, (ta - ts) / 2, ti, ts, 0, 0, this.assetData.w, this.assetData.h), this.img = te
                            }
                        }, CVImageElement.prototype.renderInnerContent = function() {
                            this.canvasContext.drawImage(this.img, 0, 0)
                        }, CVImageElement.prototype.destroy = function() {
                            this.img = null
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                            var te = this.canvasContext;
                            te.fillStyle = this.data.sc, te.fillRect(0, 0, this.data.sw, this.data.sh)
                        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(te) {
                            return new CVShapeElement(te, this.globalData, this)
                        }, CanvasRendererBase.prototype.createText = function(te) {
                            return new CVTextElement(te, this.globalData, this)
                        }, CanvasRendererBase.prototype.createImage = function(te) {
                            return new CVImageElement(te, this.globalData, this)
                        }, CanvasRendererBase.prototype.createSolid = function(te) {
                            return new CVSolidElement(te, this.globalData, this)
                        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(te) {
                            if (1 !== te[0] || 0 !== te[1] || 0 !== te[4] || 1 !== te[5] || 0 !== te[12] || 0 !== te[13]) {
                                if (this.renderConfig.clearCanvas) {
                                    this.transformMat.cloneFromProps(te);
                                    var ti = this.contextData.getTransform(),
                                        ts = ti.props;
                                    this.transformMat.transform(ts[0], ts[1], ts[2], ts[3], ts[4], ts[5], ts[6], ts[7], ts[8], ts[9], ts[10], ts[11], ts[12], ts[13], ts[14], ts[15]), ti.cloneFromProps(this.transformMat.props);
                                    var tr = ti.props;
                                    this.canvasContext.setTransform(tr[0], tr[1], tr[4], tr[5], tr[12], tr[13])
                                } else this.canvasContext.transform(te[0], te[1], te[4], te[5], te[12], te[13])
                            }
                        }, CanvasRendererBase.prototype.ctxOpacity = function(te) {
                            var ti = this.contextData.getOpacity();
                            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= te < 0 ? 0 : te, void(this.globalData.currentGlobalAlpha = ti);
                            ti *= te < 0 ? 0 : te, this.contextData.setOpacity(ti), this.globalData.currentGlobalAlpha !== ti && (this.canvasContext.globalAlpha = ti, this.globalData.currentGlobalAlpha = ti)
                        }, CanvasRendererBase.prototype.reset = function() {
                            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                        }, CanvasRendererBase.prototype.save = function(te) {
                            this.renderConfig.clearCanvas ? (te && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
                        }, CanvasRendererBase.prototype.restore = function(te) {
                            if (this.renderConfig.clearCanvas) {
                                te && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                                var ti = this.contextData.pop(),
                                    ts = ti.transform,
                                    tr = ti.opacity;
                                this.canvasContext.setTransform(ts[0], ts[1], ts[4], ts[5], ts[12], ts[13]), this.globalData.currentGlobalAlpha !== tr && (this.canvasContext.globalAlpha = tr, this.globalData.currentGlobalAlpha = tr)
                            } else this.canvasContext.restore()
                        }, CanvasRendererBase.prototype.configAnimation = function(te) {
                            if (this.animationItem.wrapper) {
                                this.animationItem.container = createTag("canvas");
                                var ti = this.animationItem.container.style;
                                ti.width = "100%", ti.height = "100%";
                                var ts = "0px 0px 0px";
                                ti.transformOrigin = ts, ti.mozTransformOrigin = ts, ti.webkitTransformOrigin = ts, ti["-webkit-transform"] = ts, ti.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                            } else this.canvasContext = this.renderConfig.context;
                            this.data = te, this.layers = te.layers, this.transformCanvas = {
                                w: te.w,
                                h: te.h,
                                sx: 0,
                                sy: 0,
                                tx: 0,
                                ty: 0
                            }, this.setupGlobalData(te, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(te.layers.length), this.updateContainerSize()
                        }, CanvasRendererBase.prototype.updateContainerSize = function(te, ti) {
                            var ts, tr, tn, ta;
                            if (this.reset(), te ? (ts = te, tr = ti, this.canvasContext.canvas.width = ts, this.canvasContext.canvas.height = tr) : (this.animationItem.wrapper && this.animationItem.container ? (ts = this.animationItem.wrapper.offsetWidth, tr = this.animationItem.wrapper.offsetHeight) : (ts = this.canvasContext.canvas.width, tr = this.canvasContext.canvas.height), this.canvasContext.canvas.width = ts * this.renderConfig.dpr, this.canvasContext.canvas.height = tr * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                                var to = this.renderConfig.preserveAspectRatio.split(" "),
                                    th = to[1] || "meet",
                                    tl = to[0] || "xMidYMid",
                                    tp = tl.substr(0, 4),
                                    tf = tl.substr(4);
                                tn = ts / tr, (ta = this.transformCanvas.w / this.transformCanvas.h) > tn && "meet" === th || ta < tn && "slice" === th ? (this.transformCanvas.sx = ts / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = ts / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = tr / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = tr / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === tp && (ta < tn && "meet" === th || ta > tn && "slice" === th) ? (ts - this.transformCanvas.w * (tr / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === tp && (ta < tn && "meet" === th || ta > tn && "slice" === th) ? (ts - this.transformCanvas.w * (tr / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === tf && (ta > tn && "meet" === th || ta < tn && "slice" === th) ? (tr - this.transformCanvas.h * (ts / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === tf && (ta > tn && "meet" === th || ta < tn && "slice" === th) ? (tr - this.transformCanvas.h * (ts / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = ts / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = tr / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
                            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                        }, CanvasRendererBase.prototype.destroy = function() {
                            var te;
                            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), te = (this.layers ? this.layers.length : 0) - 1; te >= 0; te -= 1) this.elements[te] && this.elements[te].destroy();
                            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                        }, CanvasRendererBase.prototype.renderFrame = function(te, ti) {
                            if ((this.renderedFrame !== te || !0 !== this.renderConfig.clearCanvas || ti) && !this.destroyed && -1 !== te) {
                                this.renderedFrame = te, this.globalData.frameNum = te - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || ti, this.globalData.projectInterface.currentFrame = te;
                                var ts, tr = this.layers.length;
                                for (this.completeLayers || this.checkLayers(te), ts = 0; ts < tr; ts += 1)(this.completeLayers || this.elements[ts]) && this.elements[ts].prepareFrame(te - this.layers[ts].st);
                                if (this.globalData._mdf) {
                                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), ts = tr - 1; ts >= 0; ts -= 1)(this.completeLayers || this.elements[ts]) && this.elements[ts].renderFrame();
                                    !0 !== this.renderConfig.clearCanvas && this.restore()
                                }
                            }
                        }, CanvasRendererBase.prototype.buildItem = function(te) {
                            var ti = this.elements;
                            if (!ti[te] && 99 !== this.layers[te].ty) {
                                var ts = this.createItem(this.layers[te], this, this.globalData);
                                ti[te] = ts, ts.initExpressions()
                            }
                        }, CanvasRendererBase.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, CanvasRendererBase.prototype.hide = function() {
                            this.animationItem.container.style.display = "none"
                        }, CanvasRendererBase.prototype.show = function() {
                            this.animationItem.container.style.display = "block"
                        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                            var te, ti = this.canvasContext;
                            for (ti.beginPath(), ti.moveTo(0, 0), ti.lineTo(this.data.w, 0), ti.lineTo(this.data.w, this.data.h), ti.lineTo(0, this.data.h), ti.lineTo(0, 0), ti.clip(), te = this.layers.length - 1; te >= 0; te -= 1)(this.completeLayers || this.elements[te]) && this.elements[te].renderFrame()
                        }, CVCompElement.prototype.destroy = function() {
                            var te;
                            for (te = this.layers.length - 1; te >= 0; te -= 1) this.elements[te] && this.elements[te].destroy();
                            this.layers = null, this.elements = null
                        }, CVCompElement.prototype.createComp = function(te) {
                            return new CVCompElement(te, this.globalData, this)
                        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(te) {
                            return new CVCompElement(te, this.globalData, this)
                        }, HBaseElement.prototype = {
                            checkBlendMode: function() {},
                            initRendererElement: function() {
                                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                            },
                            createContainerElements: function() {
                                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                            },
                            renderElement: function() {
                                var te = this.transformedElement ? this.transformedElement.style : {};
                                if (this.finalTransform._matMdf) {
                                    var ti = this.finalTransform.mat.toCSS();
                                    te.transform = ti, te.webkitTransform = ti
                                }
                                this.finalTransform._opMdf && (te.opacity = this.finalTransform.mProp.o.v)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            destroy: function() {
                                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new MaskElement(this.data, this, this.globalData)
                            },
                            addEffects: function() {},
                            setMatte: function() {}
                        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                            var te;
                            this.data.hasMask ? ((te = createNS("rect")).setAttribute("width", this.data.sw), te.setAttribute("height", this.data.sh), te.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((te = createTag("div")).style.width = this.data.sw + "px", te.style.height = this.data.sh + "px", te.style.backgroundColor = this.data.sc), this.layerElement.appendChild(te)
                        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                            var te;
                            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), te = this.svgElement;
                            else {
                                te = createNS("svg");
                                var ti = this.comp.data ? this.comp.data : this.globalData.compSize;
                                te.setAttribute("width", ti.w), te.setAttribute("height", ti.h), te.appendChild(this.shapesContainer), this.layerElement.appendChild(te)
                            }
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = te
                        }, HShapeElement.prototype.getTransformedPoint = function(te, ti) {
                            var ts, tr = te.length;
                            for (ts = 0; ts < tr; ts += 1) ti = te[ts].mProps.v.applyToPointArray(ti[0], ti[1], 0);
                            return ti
                        }, HShapeElement.prototype.calculateShapeBoundingBox = function(te, ti) {
                            var ts, tr, tn, ta, to, th = te.sh.v,
                                tl = te.transformers,
                                tp = th._length;
                            if (!(tp <= 1)) {
                                for (ts = 0; ts < tp - 1; ts += 1) tr = this.getTransformedPoint(tl, th.v[ts]), tn = this.getTransformedPoint(tl, th.o[ts]), ta = this.getTransformedPoint(tl, th.i[ts + 1]), to = this.getTransformedPoint(tl, th.v[ts + 1]), this.checkBounds(tr, tn, ta, to, ti);
                                th.c && (tr = this.getTransformedPoint(tl, th.v[ts]), tn = this.getTransformedPoint(tl, th.o[ts]), ta = this.getTransformedPoint(tl, th.i[0]), to = this.getTransformedPoint(tl, th.v[0]), this.checkBounds(tr, tn, ta, to, ti))
                            }
                        }, HShapeElement.prototype.checkBounds = function(te, ti, ts, tr, tn) {
                            this.getBoundsOfCurve(te, ti, ts, tr);
                            var ta = this.shapeBoundingBox;
                            tn.x = bmMin(ta.left, tn.x), tn.xMax = bmMax(ta.right, tn.xMax), tn.y = bmMin(ta.top, tn.y), tn.yMax = bmMax(ta.bottom, tn.yMax)
                        }, HShapeElement.prototype.shapeBoundingBox = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, HShapeElement.prototype.tempBoundingBox = {
                            x: 0,
                            xMax: 0,
                            y: 0,
                            yMax: 0,
                            width: 0,
                            height: 0
                        }, HShapeElement.prototype.getBoundsOfCurve = function(te, ti, ts, tr) {
                            for (var tn, ta, to, th, tl, tp, tf, tc = [
                                    [te[0], tr[0]],
                                    [te[1], tr[1]]
                                ], tu = 0; tu < 2; ++tu) ta = 6 * te[tu] - 12 * ti[tu] + 6 * ts[tu], tn = -3 * te[tu] + 9 * ti[tu] - 9 * ts[tu] + 3 * tr[tu], to = 3 * ti[tu] - 3 * te[tu], ta |= 0, to |= 0, 0 == (tn |= 0) && 0 === ta || (0 === tn ? (th = -to / ta) > 0 && th < 1 && tc[tu].push(this.calculateF(th, te, ti, ts, tr, tu)) : (tl = ta * ta - 4 * to * tn) >= 0 && ((tp = (-ta + bmSqrt(tl)) / (2 * tn)) > 0 && tp < 1 && tc[tu].push(this.calculateF(tp, te, ti, ts, tr, tu)), (tf = (-ta - bmSqrt(tl)) / (2 * tn)) > 0 && tf < 1 && tc[tu].push(this.calculateF(tf, te, ti, ts, tr, tu))));
                            this.shapeBoundingBox.left = bmMin.apply(null, tc[0]), this.shapeBoundingBox.top = bmMin.apply(null, tc[1]), this.shapeBoundingBox.right = bmMax.apply(null, tc[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, tc[1])
                        }, HShapeElement.prototype.calculateF = function(te, ti, ts, tr, tn, ta) {
                            return bmPow(1 - te, 3) * ti[ta] + 3 * bmPow(1 - te, 2) * te * ts[ta] + 3 * (1 - te) * bmPow(te, 2) * tr[ta] + bmPow(te, 3) * tn[ta]
                        }, HShapeElement.prototype.calculateBoundingBox = function(te, ti) {
                            var ts, tr = te.length;
                            for (ts = 0; ts < tr; ts += 1) te[ts] && te[ts].sh ? this.calculateShapeBoundingBox(te[ts], ti) : te[ts] && te[ts].it ? this.calculateBoundingBox(te[ts].it, ti) : te[ts] && te[ts].style && te[ts].w && this.expandStrokeBoundingBox(te[ts].w, ti)
                        }, HShapeElement.prototype.expandStrokeBoundingBox = function(te, ti) {
                            var ts = 0;
                            if (te.keyframes) {
                                for (var tr = 0; tr < te.keyframes.length; tr += 1) {
                                    var tn = te.keyframes[tr].s;
                                    tn > ts && (ts = tn)
                                }
                                ts *= te.mult
                            } else ts = te.v * te.mult;
                            ti.x -= ts, ti.xMax += ts, ti.y -= ts, ti.yMax += ts
                        }, HShapeElement.prototype.currentBoxContains = function(te) {
                            return this.currentBBox.x <= te.x && this.currentBBox.y <= te.y && this.currentBBox.width + this.currentBBox.x >= te.x + te.width && this.currentBBox.height + this.currentBBox.y >= te.y + te.height
                        }, HShapeElement.prototype.renderInnerContent = function() {
                            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var te = this.tempBoundingBox,
                                    ti = 999999;
                                if (te.x = ti, te.xMax = -ti, te.y = ti, te.yMax = -ti, this.calculateBoundingBox(this.itemsData, te), te.width = te.xMax < te.x ? 0 : te.xMax - te.x, te.height = te.yMax < te.y ? 0 : te.yMax - te.y, !this.currentBoxContains(te)) {
                                    var ts = !1;
                                    if (this.currentBBox.w !== te.width && (this.currentBBox.w = te.width, this.shapeCont.setAttribute("width", te.width), ts = !0), this.currentBBox.h !== te.height && (this.currentBBox.h = te.height, this.shapeCont.setAttribute("height", te.height), ts = !0), ts || this.currentBBox.x !== te.x || this.currentBBox.y !== te.y) {
                                        this.currentBBox.w = te.width, this.currentBBox.h = te.height, this.currentBBox.x = te.x, this.currentBBox.y = te.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                        var tr = this.shapeCont.style,
                                            tn = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                        tr.transform = tn, tr.webkitTransform = tn
                                    }
                                }
                            }
                        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                            if (this.isMasked = this.checkMasks(), this.isMasked) {
                                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                                var te = createNS("g");
                                this.maskedElement.appendChild(te), this.innerElem = te
                            } else this.renderType = "html", this.innerElem = this.layerElement;
                            this.checkParenting()
                        }, HTextElement.prototype.buildNewText = function() {
                            var te = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(te.l ? te.l.length : 0);
                            var ti = this.innerElem.style,
                                ts = te.fc ? this.buildColor(te.fc) : "rgba(0,0,0,0)";
                            ti.fill = ts, ti.color = ts, te.sc && (ti.stroke = this.buildColor(te.sc), ti.strokeWidth = te.sw + "px");
                            var tr, tn, ta = this.globalData.fontManager.getFontByName(te.f);
                            if (!this.globalData.fontManager.chars) {
                                if (ti.fontSize = te.finalSize + "px", ti.lineHeight = te.finalSize + "px", ta.fClass) this.innerElem.className = ta.fClass;
                                else {
                                    ti.fontFamily = ta.fFamily;
                                    var to = te.fWeight,
                                        th = te.fStyle;
                                    ti.fontStyle = th, ti.fontWeight = to
                                }
                            }
                            var tl, tp, tf, tc = te.l;
                            tn = tc.length;
                            var tu, tm = this.mHelper,
                                td = "",
                                tg = 0;
                            for (tr = 0; tr < tn; tr += 1) {
                                if (this.globalData.fontManager.chars ? (this.textPaths[tg] ? tl = this.textPaths[tg] : ((tl = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), tl.setAttribute("stroke-linejoin", lineJoinEnum[2]), tl.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[tg] ? tf = (tp = this.textSpans[tg]).children[0] : ((tp = createTag("div")).style.lineHeight = 0, (tf = createNS("svg")).appendChild(tl), styleDiv(tp)))) : this.isMasked ? tl = this.textPaths[tg] ? this.textPaths[tg] : createNS("text") : this.textSpans[tg] ? (tp = this.textSpans[tg], tl = this.textPaths[tg]) : (styleDiv(tp = createTag("span")), styleDiv(tl = createTag("span")), tp.appendChild(tl)), this.globalData.fontManager.chars) {
                                    var ty, tv = this.globalData.fontManager.getCharData(te.finalText[tr], ta.fStyle, this.globalData.fontManager.getFontByName(te.f).fFamily);
                                    if (ty = tv ? tv.data : null, tm.reset(), ty && ty.shapes && ty.shapes.length && (tu = ty.shapes[0].it, tm.scale(te.finalSize / 100, te.finalSize / 100), td = this.createPathShape(tm, tu), tl.setAttribute("d", td)), this.isMasked) this.innerElem.appendChild(tl);
                                    else {
                                        if (this.innerElem.appendChild(tp), ty && ty.shapes) {
                                            document.body.appendChild(tf);
                                            var tb = tf.getBBox();
                                            tf.setAttribute("width", tb.width + 2), tf.setAttribute("height", tb.height + 2), tf.setAttribute("viewBox", tb.x - 1 + " " + (tb.y - 1) + " " + (tb.width + 2) + " " + (tb.height + 2));
                                            var tx = tf.style,
                                                tk = "translate(" + (tb.x - 1) + "px," + (tb.y - 1) + "px)";
                                            tx.transform = tk, tx.webkitTransform = tk, tc[tr].yOffset = tb.y - 1
                                        } else tf.setAttribute("width", 1), tf.setAttribute("height", 1);
                                        tp.appendChild(tf)
                                    }
                                } else if (tl.textContent = tc[tr].val, tl.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(tl);
                                else {
                                    this.innerElem.appendChild(tp);
                                    var t_ = tl.style,
                                        tw = "translate3d(0," + -te.finalSize / 1.2 + "px,0)";
                                    t_.transform = tw, t_.webkitTransform = tw
                                }
                                this.isMasked ? this.textSpans[tg] = tl : this.textSpans[tg] = tp, this.textSpans[tg].style.display = "block", this.textPaths[tg] = tl, tg += 1
                            }
                            for (; tg < this.textSpans.length;) this.textSpans[tg].style.display = "none", tg += 1
                        }, HTextElement.prototype.renderInnerContent = function() {
                            var te;
                            if (this.data.singleShape) {
                                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                                if (this.isMasked && this.finalTransform._matMdf) {
                                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), te = this.svgElement.style;
                                    var ti = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                                    te.transform = ti, te.webkitTransform = ti
                                }
                            }
                            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                                var ts, tr, tn, ta, to, th = 0,
                                    tl = this.textAnimator.renderedLetters,
                                    tp = this.textProperty.currentData.l;
                                for (tr = tp.length, ts = 0; ts < tr; ts += 1) tp[ts].n ? th += 1 : (ta = this.textSpans[ts], to = this.textPaths[ts], tn = tl[th], th += 1, tn._mdf.m && (this.isMasked ? ta.setAttribute("transform", tn.m) : (ta.style.webkitTransform = tn.m, ta.style.transform = tn.m)), ta.style.opacity = tn.o, tn.sw && tn._mdf.sw && to.setAttribute("stroke-width", tn.sw), tn.sc && tn._mdf.sc && to.setAttribute("stroke", tn.sc), tn.fc && tn._mdf.fc && (to.setAttribute("fill", tn.fc), to.style.color = tn.fc));
                                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                    var tf = this.innerElem.getBBox();
                                    if (this.currentBBox.w !== tf.width && (this.currentBBox.w = tf.width, this.svgElement.setAttribute("width", tf.width)), this.currentBBox.h !== tf.height && (this.currentBBox.h = tf.height, this.svgElement.setAttribute("height", tf.height)), this.currentBBox.w !== tf.width + 2 || this.currentBBox.h !== tf.height + 2 || this.currentBBox.x !== tf.x - 1 || this.currentBBox.y !== tf.y - 1) {
                                        this.currentBBox.w = tf.width + 2, this.currentBBox.h = tf.height + 2, this.currentBBox.x = tf.x - 1, this.currentBBox.y = tf.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), te = this.svgElement.style;
                                        var tc = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                        te.transform = tc, te.webkitTransform = tc
                                    }
                                }
                            }
                        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                            var te, ti, ts, tr, tn = this.comp.threeDElements.length;
                            for (te = 0; te < tn; te += 1)
                                if ("3d" === (ti = this.comp.threeDElements[te]).type) {
                                    ts = ti.perspectiveElem.style, tr = ti.container.style;
                                    var ta = this.pe.v + "px",
                                        to = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                    ts.perspective = ta, ts.webkitPerspective = ta, tr.transformOrigin = "0px 0px 0px", tr.mozTransformOrigin = "0px 0px 0px", tr.webkitTransformOrigin = "0px 0px 0px", ts.transform = to, ts.webkitTransform = to
                                }
                        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                            var te, ti, ts = this._isFirstFrame;
                            if (this.hierarchy)
                                for (ti = this.hierarchy.length, te = 0; te < ti; te += 1) ts = this.hierarchy[te].finalTransform.mProp._mdf || ts;
                            if (ts || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                                if (this.mat.reset(), this.hierarchy)
                                    for (te = ti = this.hierarchy.length - 1; te >= 0; te -= 1) {
                                        var tr, tn, ta, to = this.hierarchy[te].finalTransform.mProp;
                                        this.mat.translate(-to.p.v[0], -to.p.v[1], to.p.v[2]), this.mat.rotateX(-to.or.v[0]).rotateY(-to.or.v[1]).rotateZ(to.or.v[2]), this.mat.rotateX(-to.rx.v).rotateY(-to.ry.v).rotateZ(to.rz.v), this.mat.scale(1 / to.s.v[0], 1 / to.s.v[1], 1 / to.s.v[2]), this.mat.translate(to.a.v[0], to.a.v[1], to.a.v[2])
                                    }
                                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                    var th, tl = Math.sqrt(Math.pow((th = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(th[1], 2) + Math.pow(th[2], 2)),
                                        tp = [th[0] / tl, th[1] / tl, th[2] / tl],
                                        tf = Math.sqrt(tp[2] * tp[2] + tp[0] * tp[0]),
                                        tc = Math.atan2(tp[1], tf),
                                        tu = Math.atan2(tp[0], -tp[2]);
                                    this.mat.rotateY(tu).rotateX(-tc)
                                }
                                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                                var tm = !this._prevMat.equals(this.mat);
                                if ((tm || this.pe._mdf) && this.comp.threeDElements) {
                                    for (ti = this.comp.threeDElements.length, te = 0; te < ti; te += 1)
                                        if ("3d" === (tr = this.comp.threeDElements[te]).type) {
                                            if (tm) {
                                                var td = this.mat.toCSS();
                                                (ta = tr.container.style).transform = td, ta.webkitTransform = td
                                            }
                                            this.pe._mdf && ((tn = tr.perspectiveElem.style).perspective = this.pe.v + "px", tn.webkitPerspective = this.pe.v + "px")
                                        }
                                    this.mat.clone(this._prevMat)
                                }
                            }
                            this._isFirstFrame = !1
                        }, HCameraElement.prototype.prepareFrame = function(te) {
                            this.prepareProperties(te, !0)
                        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                            return null
                        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                            var te = this.globalData.getAssetsPath(this.assetData),
                                ti = new Image;
                            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", te), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(ti), ti.crossOrigin = "anonymous", ti.src = te, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, HybridRendererBase.prototype.appendElementInPos = function(te, ti) {
                            var ts = te.getBaseElement();
                            if (ts) {
                                var tr = this.layers[ti];
                                if (tr.ddd && this.supports3d) this.addTo3dContainer(ts, ti);
                                else if (this.threeDElements) this.addTo3dContainer(ts, ti);
                                else {
                                    for (var tn, ta, to = 0; to < ti;) this.elements[to] && !0 !== this.elements[to] && this.elements[to].getBaseElement && (ta = this.elements[to], tn = (this.layers[to].ddd ? this.getThreeDContainerByPos(to) : ta.getBaseElement()) || tn), to += 1;
                                    tn ? tr.ddd && this.supports3d || this.layerElement.insertBefore(ts, tn) : tr.ddd && this.supports3d || this.layerElement.appendChild(ts)
                                }
                            }
                        }, HybridRendererBase.prototype.createShape = function(te) {
                            return this.supports3d ? new HShapeElement(te, this.globalData, this) : new SVGShapeElement(te, this.globalData, this)
                        }, HybridRendererBase.prototype.createText = function(te) {
                            return this.supports3d ? new HTextElement(te, this.globalData, this) : new SVGTextLottieElement(te, this.globalData, this)
                        }, HybridRendererBase.prototype.createCamera = function(te) {
                            return this.camera = new HCameraElement(te, this.globalData, this), this.camera
                        }, HybridRendererBase.prototype.createImage = function(te) {
                            return this.supports3d ? new HImageElement(te, this.globalData, this) : new IImageElement(te, this.globalData, this)
                        }, HybridRendererBase.prototype.createSolid = function(te) {
                            return this.supports3d ? new HSolidElement(te, this.globalData, this) : new ISolidElement(te, this.globalData, this)
                        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(te) {
                            for (var ti = 0, ts = this.threeDElements.length; ti < ts;) {
                                if (this.threeDElements[ti].startPos <= te && this.threeDElements[ti].endPos >= te) return this.threeDElements[ti].perspectiveElem;
                                ti += 1
                            }
                            return null
                        }, HybridRendererBase.prototype.createThreeDContainer = function(te, ti) {
                            var ts, tr, tn = createTag("div");
                            styleDiv(tn);
                            var ta = createTag("div");
                            if (styleDiv(ta), "3d" === ti) {
                                (ts = tn.style).width = this.globalData.compSize.w + "px", ts.height = this.globalData.compSize.h + "px", ts.webkitTransformOrigin = "50% 50%", ts.mozTransformOrigin = "50% 50%", ts.transformOrigin = "50% 50%";
                                var to = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                (tr = ta.style).transform = to, tr.webkitTransform = to
                            }
                            tn.appendChild(ta);
                            var th = {
                                container: ta,
                                perspectiveElem: tn,
                                startPos: te,
                                endPos: te,
                                type: ti
                            };
                            return this.threeDElements.push(th), th
                        }, HybridRendererBase.prototype.build3dContainers = function() {
                            var te, ti, ts = this.layers.length,
                                tr = "";
                            for (te = 0; te < ts; te += 1) this.layers[te].ddd && 3 !== this.layers[te].ty ? "3d" !== tr && (tr = "3d", ti = this.createThreeDContainer(te, "3d")) : "2d" !== tr && (tr = "2d", ti = this.createThreeDContainer(te, "2d")), ti.endPos = Math.max(ti.endPos, te);
                            for (te = (ts = this.threeDElements.length) - 1; te >= 0; te -= 1) this.resizerElem.appendChild(this.threeDElements[te].perspectiveElem)
                        }, HybridRendererBase.prototype.addTo3dContainer = function(te, ti) {
                            for (var ts = 0, tr = this.threeDElements.length; ts < tr;) {
                                if (ti <= this.threeDElements[ts].endPos) {
                                    for (var tn, ta = this.threeDElements[ts].startPos; ta < ti;) this.elements[ta] && this.elements[ta].getBaseElement && (tn = this.elements[ta].getBaseElement()), ta += 1;
                                    tn ? this.threeDElements[ts].container.insertBefore(te, tn) : this.threeDElements[ts].container.appendChild(te);
                                    break
                                }
                                ts += 1
                            }
                        }, HybridRendererBase.prototype.configAnimation = function(te) {
                            var ti = createTag("div"),
                                ts = this.animationItem.wrapper,
                                tr = ti.style;
                            tr.width = te.w + "px", tr.height = te.h + "px", this.resizerElem = ti, styleDiv(ti), tr.transformStyle = "flat", tr.mozTransformStyle = "flat", tr.webkitTransformStyle = "flat", this.renderConfig.className && ti.setAttribute("class", this.renderConfig.className), ts.appendChild(ti), tr.overflow = "hidden";
                            var tn = createNS("svg");
                            tn.setAttribute("width", "1"), tn.setAttribute("height", "1"), styleDiv(tn), this.resizerElem.appendChild(tn);
                            var ta = createNS("defs");
                            tn.appendChild(ta), this.data = te, this.setupGlobalData(te, tn), this.globalData.defs = ta, this.layers = te.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                        }, HybridRendererBase.prototype.destroy = function() {
                            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                            var te, ti = this.layers ? this.layers.length : 0;
                            for (te = 0; te < ti; te += 1) this.elements[te].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, HybridRendererBase.prototype.updateContainerSize = function() {
                            var te, ti, ts, tr, tn = this.animationItem.wrapper.offsetWidth,
                                ta = this.animationItem.wrapper.offsetHeight,
                                to = tn / ta;
                            this.globalData.compSize.w / this.globalData.compSize.h > to ? (te = tn / this.globalData.compSize.w, ti = tn / this.globalData.compSize.w, ts = 0, tr = (ta - this.globalData.compSize.h * (tn / this.globalData.compSize.w)) / 2) : (te = ta / this.globalData.compSize.h, ti = ta / this.globalData.compSize.h, ts = (tn - this.globalData.compSize.w * (ta / this.globalData.compSize.h)) / 2, tr = 0);
                            var th = this.resizerElem.style;
                            th.webkitTransform = "matrix3d(" + te + ",0,0,0,0," + ti + ",0,0,0,0,1,0," + ts + "," + tr + ",0,1)", th.transform = th.webkitTransform
                        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                            this.resizerElem.style.display = "none"
                        }, HybridRendererBase.prototype.show = function() {
                            this.resizerElem.style.display = "block"
                        }, HybridRendererBase.prototype.initItems = function() {
                            if (this.buildAllItems(), this.camera) this.camera.setup();
                            else {
                                var te, ti = this.globalData.compSize.w,
                                    ts = this.globalData.compSize.h,
                                    tr = this.threeDElements.length;
                                for (te = 0; te < tr; te += 1) {
                                    var tn = this.threeDElements[te].perspectiveElem.style;
                                    tn.webkitPerspective = Math.sqrt(Math.pow(ti, 2) + Math.pow(ts, 2)) + "px", tn.perspective = tn.webkitPerspective
                                }
                            }
                        }, HybridRendererBase.prototype.searchExtraCompositions = function(te) {
                            var ti, ts = te.length,
                                tr = createTag("div");
                            for (ti = 0; ti < ts; ti += 1)
                                if (te[ti].xt) {
                                    var tn = this.createComp(te[ti], tr, this.globalData.comp, null);
                                    tn.initExpressions(), this.globalData.projectInterface.registerComposition(tn)
                                }
                        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                        }, HCompElement.prototype.addTo3dContainer = function(te, ti) {
                            for (var ts, tr = 0; tr < ti;) this.elements[tr] && this.elements[tr].getBaseElement && (ts = this.elements[tr].getBaseElement()), tr += 1;
                            ts ? this.layerElement.insertBefore(te, ts) : this.layerElement.appendChild(te)
                        }, HCompElement.prototype.createComp = function(te) {
                            return this.supports3d ? new HCompElement(te, this.globalData, this) : new SVGCompElement(te, this.globalData, this)
                        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(te) {
                            return this.supports3d ? new HCompElement(te, this.globalData, this) : new SVGCompElement(te, this.globalData, this)
                        };
                        var CompExpressionInterface = function(te) {
                                function ti(ti) {
                                    for (var ts = 0, tr = te.layers.length; ts < tr;) {
                                        if (te.layers[ts].nm === ti || te.layers[ts].ind === ti) return te.elements[ts].layerInterface;
                                        ts += 1
                                    }
                                    return null
                                }
                                return Object.defineProperty(ti, "_name", {
                                    value: te.data.nm
                                }), ti.layer = ti, ti.pixelAspect = 1, ti.height = te.data.h || te.globalData.compSize.h, ti.width = te.data.w || te.globalData.compSize.w, ti.pixelAspect = 1, ti.frameDuration = 1 / te.globalData.frameRate, ti.displayStartTime = 0, ti.numLayers = te.layers.length, ti
                            },
                            Expressions = function() {
                                var te = {};
                                return te.initExpressions = function(te) {
                                    var ti = 0,
                                        ts = [];
                                    te.renderer.compInterface = CompExpressionInterface(te.renderer), te.renderer.globalData.projectInterface.registerComposition(te.renderer), te.renderer.globalData.pushExpression = function() {
                                        ti += 1
                                    }, te.renderer.globalData.popExpression = function() {
                                        0 == (ti -= 1) && function() {
                                            var te, ti = ts.length;
                                            for (te = 0; te < ti; te += 1) ts[te].release();
                                            ts.length = 0
                                        }()
                                    }, te.renderer.globalData.registerExpressionProperty = function(te) {
                                        -1 === ts.indexOf(te) && ts.push(te)
                                    }
                                }, te
                            }(),
                            MaskManagerInterface = function() {
                                function te(te, ti) {
                                    this._mask = te, this._data = ti
                                }
                                return Object.defineProperty(te.prototype, "maskPath", {
                                        get: function() {
                                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                        }
                                    }), Object.defineProperty(te.prototype, "maskOpacity", {
                                        get: function() {
                                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                        }
                                    }),
                                    function(ti) {
                                        var ts, tr = createSizedArray(ti.viewData.length),
                                            tn = ti.viewData.length;
                                        for (ts = 0; ts < tn; ts += 1) tr[ts] = new te(ti.viewData[ts], ti.masksProperties[ts]);
                                        return function(te) {
                                            for (ts = 0; ts < tn;) {
                                                if (ti.masksProperties[ts].nm === te) return tr[ts];
                                                ts += 1
                                            }
                                            return null
                                        }
                                    }
                            }(),
                            ExpressionPropertyInterface = function() {
                                var te = {
                                        pv: 0,
                                        v: 0,
                                        mult: 1
                                    },
                                    ti = {
                                        pv: [0, 0, 0],
                                        v: [0, 0, 0],
                                        mult: 1
                                    };

                                function ts(te, ti, ts) {
                                    Object.defineProperty(te, "velocity", {
                                        get: function() {
                                            return ti.getVelocityAtTime(ti.comp.currentFrame)
                                        }
                                    }), te.numKeys = ti.keyframes ? ti.keyframes.length : 0, te.key = function(tr) {
                                        if (!te.numKeys) return 0;
                                        var tn = "";
                                        tn = "s" in ti.keyframes[tr - 1] ? ti.keyframes[tr - 1].s : "e" in ti.keyframes[tr - 2] ? ti.keyframes[tr - 2].e : ti.keyframes[tr - 2].s;
                                        var ta = "unidimensional" === ts ? new Number(tn) : Object.assign({}, tn);
                                        return ta.time = ti.keyframes[tr - 1].t / ti.elem.comp.globalData.frameRate, ta.value = "unidimensional" === ts ? tn[0] : tn, ta
                                    }, te.valueAtTime = ti.getValueAtTime, te.speedAtTime = ti.getSpeedAtTime, te.velocityAtTime = ti.getVelocityAtTime, te.propertyGroup = ti.propertyGroup
                                }

                                function tr() {
                                    return te
                                }
                                return function(tn) {
                                    return tn ? "unidimensional" === tn.propType ? function(ti) {
                                        ti && "pv" in ti || (ti = te);
                                        var tr = 1 / ti.mult,
                                            tn = ti.pv * tr,
                                            ta = new Number(tn);
                                        return ta.value = tn, ts(ta, ti, "unidimensional"),
                                            function() {
                                                return ti.k && ti.getValue(), tn = ti.v * tr, ta.value !== tn && ((ta = new Number(tn)).value = tn, ts(ta, ti, "unidimensional")), ta
                                            }
                                    }(tn) : function(te) {
                                        te && "pv" in te || (te = ti);
                                        var tr = 1 / te.mult,
                                            tn = te.data && te.data.l || te.pv.length,
                                            ta = createTypedArray("float32", tn),
                                            to = createTypedArray("float32", tn);
                                        return ta.value = to, ts(ta, te, "multidimensional"),
                                            function() {
                                                te.k && te.getValue();
                                                for (var ti = 0; ti < tn; ti += 1) to[ti] = te.v[ti] * tr, ta[ti] = to[ti];
                                                return ta
                                            }
                                    }(tn) : tr
                                }
                            }(),
                            TransformExpressionInterface = function(te) {
                                var ti, ts, tr, tn;

                                function ta(te) {
                                    switch (te) {
                                        case "scale":
                                        case "Scale":
                                        case "ADBE Scale":
                                        case 6:
                                            return ta.scale;
                                        case "rotation":
                                        case "Rotation":
                                        case "ADBE Rotation":
                                        case "ADBE Rotate Z":
                                        case 10:
                                            return ta.rotation;
                                        case "ADBE Rotate X":
                                            return ta.xRotation;
                                        case "ADBE Rotate Y":
                                            return ta.yRotation;
                                        case "position":
                                        case "Position":
                                        case "ADBE Position":
                                        case 2:
                                            return ta.position;
                                        case "ADBE Position_0":
                                            return ta.xPosition;
                                        case "ADBE Position_1":
                                            return ta.yPosition;
                                        case "ADBE Position_2":
                                            return ta.zPosition;
                                        case "anchorPoint":
                                        case "AnchorPoint":
                                        case "Anchor Point":
                                        case "ADBE AnchorPoint":
                                        case 1:
                                            return ta.anchorPoint;
                                        case "opacity":
                                        case "Opacity":
                                        case 11:
                                            return ta.opacity;
                                        default:
                                            return null
                                    }
                                }
                                return Object.defineProperty(ta, "rotation", {
                                    get: ExpressionPropertyInterface(te.r || te.rz)
                                }), Object.defineProperty(ta, "zRotation", {
                                    get: ExpressionPropertyInterface(te.rz || te.r)
                                }), Object.defineProperty(ta, "xRotation", {
                                    get: ExpressionPropertyInterface(te.rx)
                                }), Object.defineProperty(ta, "yRotation", {
                                    get: ExpressionPropertyInterface(te.ry)
                                }), Object.defineProperty(ta, "scale", {
                                    get: ExpressionPropertyInterface(te.s)
                                }), te.p ? tn = ExpressionPropertyInterface(te.p) : (ti = ExpressionPropertyInterface(te.px), ts = ExpressionPropertyInterface(te.py), te.pz && (tr = ExpressionPropertyInterface(te.pz))), Object.defineProperty(ta, "position", {
                                    get: function() {
                                        return te.p ? tn() : [ti(), ts(), tr ? tr() : 0]
                                    }
                                }), Object.defineProperty(ta, "xPosition", {
                                    get: ExpressionPropertyInterface(te.px)
                                }), Object.defineProperty(ta, "yPosition", {
                                    get: ExpressionPropertyInterface(te.py)
                                }), Object.defineProperty(ta, "zPosition", {
                                    get: ExpressionPropertyInterface(te.pz)
                                }), Object.defineProperty(ta, "anchorPoint", {
                                    get: ExpressionPropertyInterface(te.a)
                                }), Object.defineProperty(ta, "opacity", {
                                    get: ExpressionPropertyInterface(te.o)
                                }), Object.defineProperty(ta, "skew", {
                                    get: ExpressionPropertyInterface(te.sk)
                                }), Object.defineProperty(ta, "skewAxis", {
                                    get: ExpressionPropertyInterface(te.sa)
                                }), Object.defineProperty(ta, "orientation", {
                                    get: ExpressionPropertyInterface(te.or)
                                }), ta
                            },
                            LayerExpressionInterface = function() {
                                function te(te) {
                                    var ti = new Matrix;
                                    return void 0 !== te ? this._elem.finalTransform.mProp.getValueAtTime(te).clone(ti) : this._elem.finalTransform.mProp.applyToMatrix(ti), ti
                                }

                                function ti(te, ti) {
                                    var ts = this.getMatrix(ti);
                                    return ts.props[12] = 0, ts.props[13] = 0, ts.props[14] = 0, this.applyPoint(ts, te)
                                }

                                function ts(te, ti) {
                                    var ts = this.getMatrix(ti);
                                    return this.applyPoint(ts, te)
                                }

                                function tr(te, ti) {
                                    var ts = this.getMatrix(ti);
                                    return ts.props[12] = 0, ts.props[13] = 0, ts.props[14] = 0, this.invertPoint(ts, te)
                                }

                                function tn(te, ti) {
                                    var ts = this.getMatrix(ti);
                                    return this.invertPoint(ts, te)
                                }

                                function ta(te, ti) {
                                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var ts, tr = this._elem.hierarchy.length;
                                        for (ts = 0; ts < tr; ts += 1) this._elem.hierarchy[ts].finalTransform.mProp.applyToMatrix(te)
                                    }
                                    return te.applyToPointArray(ti[0], ti[1], ti[2] || 0)
                                }

                                function to(te, ti) {
                                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var ts, tr = this._elem.hierarchy.length;
                                        for (ts = 0; ts < tr; ts += 1) this._elem.hierarchy[ts].finalTransform.mProp.applyToMatrix(te)
                                    }
                                    return te.inversePoint(ti)
                                }

                                function th(te) {
                                    var ti = new Matrix;
                                    if (ti.reset(), this._elem.finalTransform.mProp.applyToMatrix(ti), this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var ts, tr = this._elem.hierarchy.length;
                                        for (ts = 0; ts < tr; ts += 1) this._elem.hierarchy[ts].finalTransform.mProp.applyToMatrix(ti)
                                    }
                                    return ti.inversePoint(te)
                                }

                                function tl() {
                                    return [1, 1, 1, 1]
                                }
                                return function(tp) {
                                    function tf(te) {
                                        switch (te) {
                                            case "ADBE Root Vectors Group":
                                            case "Contents":
                                            case 2:
                                                return tf.shapeInterface;
                                            case 1:
                                            case 6:
                                            case "Transform":
                                            case "transform":
                                            case "ADBE Transform Group":
                                                return tc;
                                            case 4:
                                            case "ADBE Effect Parade":
                                            case "effects":
                                            case "Effects":
                                                return tf.effect;
                                            case "ADBE Text Properties":
                                                return tf.textInterface;
                                            default:
                                                return null
                                        }
                                    }
                                    tf.getMatrix = te, tf.invertPoint = to, tf.applyPoint = ta, tf.toWorld = ts, tf.toWorldVec = ti, tf.fromWorld = tn, tf.fromWorldVec = tr, tf.toComp = ts, tf.fromComp = th, tf.sampleImage = tl, tf.sourceRectAtTime = tp.sourceRectAtTime.bind(tp), tf._elem = tp;
                                    var tc, tu = getDescriptor(tc = TransformExpressionInterface(tp.finalTransform.mProp), "anchorPoint");
                                    return Object.defineProperties(tf, {
                                        hasParent: {
                                            get: function() {
                                                return tp.hierarchy.length
                                            }
                                        },
                                        parent: {
                                            get: function() {
                                                return tp.hierarchy[0].layerInterface
                                            }
                                        },
                                        rotation: getDescriptor(tc, "rotation"),
                                        scale: getDescriptor(tc, "scale"),
                                        position: getDescriptor(tc, "position"),
                                        opacity: getDescriptor(tc, "opacity"),
                                        anchorPoint: tu,
                                        anchor_point: tu,
                                        transform: {
                                            get: function() {
                                                return tc
                                            }
                                        },
                                        active: {
                                            get: function() {
                                                return tp.isInRange
                                            }
                                        }
                                    }), tf.startTime = tp.data.st, tf.index = tp.data.ind, tf.source = tp.data.refId, tf.height = 0 === tp.data.ty ? tp.data.h : 100, tf.width = 0 === tp.data.ty ? tp.data.w : 100, tf.inPoint = tp.data.ip / tp.comp.globalData.frameRate, tf.outPoint = tp.data.op / tp.comp.globalData.frameRate, tf._name = tp.data.nm, tf.registerMaskInterface = function(te) {
                                        tf.mask = new MaskManagerInterface(te, tp)
                                    }, tf.registerEffectsInterface = function(te) {
                                        tf.effect = te
                                    }, tf
                                }
                            }(),
                            propertyGroupFactory = function(te, ti) {
                                return function(ts) {
                                    return (ts = void 0 === ts ? 1 : ts) <= 0 ? te : ti(ts - 1)
                                }
                            },
                            PropertyInterface = function(te, ti) {
                                var ts = {
                                    _name: te
                                };
                                return function(te) {
                                    return (te = void 0 === te ? 1 : te) <= 0 ? ts : ti(te - 1)
                                }
                            },
                            EffectsExpressionInterface = function() {
                                function te(ts, tr, tn, ta) {
                                    function to(te) {
                                        for (var ti = ts.ef, tr = 0, tn = ti.length; tr < tn;) {
                                            if (te === ti[tr].nm || te === ti[tr].mn || te === ti[tr].ix) return 5 === ti[tr].ty ? tp[tr] : tp[tr]();
                                            tr += 1
                                        }
                                        throw Error()
                                    }
                                    var th, tl = propertyGroupFactory(to, tn),
                                        tp = [],
                                        tf = ts.ef.length;
                                    for (th = 0; th < tf; th += 1) 5 === ts.ef[th].ty ? tp.push(te(ts.ef[th], tr.effectElements[th], tr.effectElements[th].propertyGroup, ta)) : tp.push(ti(tr.effectElements[th], ts.ef[th].ty, ta, tl));
                                    return "ADBE Color Control" === ts.mn && Object.defineProperty(to, "color", {
                                        get: function() {
                                            return tp[0]()
                                        }
                                    }), Object.defineProperties(to, {
                                        numProperties: {
                                            get: function() {
                                                return ts.np
                                            }
                                        },
                                        _name: {
                                            value: ts.nm
                                        },
                                        propertyGroup: {
                                            value: tl
                                        }
                                    }), to.enabled = 0 !== ts.en, to.active = to.enabled, to
                                }

                                function ti(te, ti, ts, tr) {
                                    var tn = ExpressionPropertyInterface(te.p);
                                    return te.p.setGroupProperty && te.p.setGroupProperty(PropertyInterface("", tr)),
                                        function() {
                                            return 10 === ti ? ts.comp.compInterface(te.p.v) : tn()
                                        }
                                }
                                return {
                                    createEffectsInterface: function(ti, ts) {
                                        if (ti.effectsManager) {
                                            var tr, tn = [],
                                                ta = ti.data.ef,
                                                to = ti.effectsManager.effectElements.length;
                                            for (tr = 0; tr < to; tr += 1) tn.push(te(ta[tr], ti.effectsManager.effectElements[tr], ts, ti));
                                            var th = ti.data.ef || [],
                                                tl = function(te) {
                                                    for (tr = 0, to = th.length; tr < to;) {
                                                        if (te === th[tr].nm || te === th[tr].mn || te === th[tr].ix) return tn[tr];
                                                        tr += 1
                                                    }
                                                    return null
                                                };
                                            return Object.defineProperty(tl, "numProperties", {
                                                get: function() {
                                                    return th.length
                                                }
                                            }), tl
                                        }
                                        return null
                                    }
                                }
                            }(),
                            ShapePathInterface = function(te, ti, ts) {
                                var tr = ti.sh;

                                function tn(te) {
                                    return "Shape" === te || "shape" === te || "Path" === te || "path" === te || "ADBE Vector Shape" === te || 2 === te ? tn.path : null
                                }
                                var ta = propertyGroupFactory(tn, ts);
                                return tr.setGroupProperty(PropertyInterface("Path", ta)), Object.defineProperties(tn, {
                                    path: {
                                        get: function() {
                                            return tr.k && tr.getValue(), tr
                                        }
                                    },
                                    shape: {
                                        get: function() {
                                            return tr.k && tr.getValue(), tr
                                        }
                                    },
                                    _name: {
                                        value: te.nm
                                    },
                                    ix: {
                                        value: te.ix
                                    },
                                    propertyIndex: {
                                        value: te.ix
                                    },
                                    mn: {
                                        value: te.mn
                                    },
                                    propertyGroup: {
                                        value: ts
                                    }
                                }), tn
                            },
                            ShapeExpressionInterface = function() {
                                function te(te, th, tm) {
                                    var td, tg = [],
                                        ty = te ? te.length : 0;
                                    for (td = 0; td < ty; td += 1) "gr" === te[td].ty ? tg.push(ti(te[td], th[td], tm)) : "fl" === te[td].ty ? tg.push(ts(te[td], th[td], tm)) : "st" === te[td].ty ? tg.push(ta(te[td], th[td], tm)) : "tm" === te[td].ty ? tg.push(to(te[td], th[td], tm)) : "tr" === te[td].ty || ("el" === te[td].ty ? tg.push(tl(te[td], th[td], tm)) : "sr" === te[td].ty ? tg.push(tp(te[td], th[td], tm)) : "sh" === te[td].ty ? tg.push(ShapePathInterface(te[td], th[td], tm)) : "rc" === te[td].ty ? tg.push(tf(te[td], th[td], tm)) : "rd" === te[td].ty ? tg.push(tc(te[td], th[td], tm)) : "rp" === te[td].ty ? tg.push(tu(te[td], th[td], tm)) : "gf" === te[td].ty ? tg.push(tr(te[td], th[td], tm)) : tg.push(tn(te[td], th[td])));
                                    return tg
                                }

                                function ti(ti, ts, tr) {
                                    var tn = function(te) {
                                        switch (te) {
                                            case "ADBE Vectors Group":
                                            case "Contents":
                                            case 2:
                                                return tn.content;
                                            default:
                                                return tn.transform
                                        }
                                    };
                                    tn.propertyGroup = propertyGroupFactory(tn, tr);
                                    var ta = function(ti, ts, tr) {
                                            var tn, ta = function(te) {
                                                for (var ti = 0, ts = tn.length; ti < ts;) {
                                                    if (tn[ti]._name === te || tn[ti].mn === te || tn[ti].propertyIndex === te || tn[ti].ix === te || tn[ti].ind === te) return tn[ti];
                                                    ti += 1
                                                }
                                                return "number" == typeof te ? tn[te - 1] : null
                                            };
                                            ta.propertyGroup = propertyGroupFactory(ta, tr), tn = te(ti.it, ts.it, ta.propertyGroup), ta.numProperties = tn.length;
                                            var to = th(ti.it[ti.it.length - 1], ts.it[ts.it.length - 1], ta.propertyGroup);
                                            return ta.transform = to, ta.propertyIndex = ti.cix, ta._name = ti.nm, ta
                                        }(ti, ts, tn.propertyGroup),
                                        to = th(ti.it[ti.it.length - 1], ts.it[ts.it.length - 1], tn.propertyGroup);
                                    return tn.content = ta, tn.transform = to, Object.defineProperty(tn, "_name", {
                                        get: function() {
                                            return ti.nm
                                        }
                                    }), tn.numProperties = ti.np, tn.propertyIndex = ti.ix, tn.nm = ti.nm, tn.mn = ti.mn, tn
                                }

                                function ts(te, ti, ts) {
                                    function tr(te) {
                                        return "Color" === te || "color" === te ? tr.color : "Opacity" === te || "opacity" === te ? tr.opacity : null
                                    }
                                    return Object.defineProperties(tr, {
                                        color: {
                                            get: ExpressionPropertyInterface(ti.c)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(ti.o)
                                        },
                                        _name: {
                                            value: te.nm
                                        },
                                        mn: {
                                            value: te.mn
                                        }
                                    }), ti.c.setGroupProperty(PropertyInterface("Color", ts)), ti.o.setGroupProperty(PropertyInterface("Opacity", ts)), tr
                                }

                                function tr(te, ti, ts) {
                                    function tr(te) {
                                        return "Start Point" === te || "start point" === te ? tr.startPoint : "End Point" === te || "end point" === te ? tr.endPoint : "Opacity" === te || "opacity" === te ? tr.opacity : null
                                    }
                                    return Object.defineProperties(tr, {
                                        startPoint: {
                                            get: ExpressionPropertyInterface(ti.s)
                                        },
                                        endPoint: {
                                            get: ExpressionPropertyInterface(ti.e)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(ti.o)
                                        },
                                        type: {
                                            get: function() {
                                                return "a"
                                            }
                                        },
                                        _name: {
                                            value: te.nm
                                        },
                                        mn: {
                                            value: te.mn
                                        }
                                    }), ti.s.setGroupProperty(PropertyInterface("Start Point", ts)), ti.e.setGroupProperty(PropertyInterface("End Point", ts)), ti.o.setGroupProperty(PropertyInterface("Opacity", ts)), tr
                                }

                                function tn() {
                                    return function() {
                                        return null
                                    }
                                }

                                function ta(te, ti, ts) {
                                    var tr, tn = propertyGroupFactory(tp, ts),
                                        ta = propertyGroupFactory(tl, tn);

                                    function to(ts) {
                                        Object.defineProperty(tl, te.d[ts].nm, {
                                            get: ExpressionPropertyInterface(ti.d.dataProps[ts].p)
                                        })
                                    }
                                    var th = te.d ? te.d.length : 0,
                                        tl = {};
                                    for (tr = 0; tr < th; tr += 1) to(tr), ti.d.dataProps[tr].p.setGroupProperty(ta);

                                    function tp(te) {
                                        return "Color" === te || "color" === te ? tp.color : "Opacity" === te || "opacity" === te ? tp.opacity : "Stroke Width" === te || "stroke width" === te ? tp.strokeWidth : null
                                    }
                                    return Object.defineProperties(tp, {
                                        color: {
                                            get: ExpressionPropertyInterface(ti.c)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(ti.o)
                                        },
                                        strokeWidth: {
                                            get: ExpressionPropertyInterface(ti.w)
                                        },
                                        dash: {
                                            get: function() {
                                                return tl
                                            }
                                        },
                                        _name: {
                                            value: te.nm
                                        },
                                        mn: {
                                            value: te.mn
                                        }
                                    }), ti.c.setGroupProperty(PropertyInterface("Color", tn)), ti.o.setGroupProperty(PropertyInterface("Opacity", tn)), ti.w.setGroupProperty(PropertyInterface("Stroke Width", tn)), tp
                                }

                                function to(te, ti, ts) {
                                    function tr(ti) {
                                        return ti === te.e.ix || "End" === ti || "end" === ti ? tr.end : ti === te.s.ix ? tr.start : ti === te.o.ix ? tr.offset : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts);
                                    return tr.propertyIndex = te.ix, ti.s.setGroupProperty(PropertyInterface("Start", tn)), ti.e.setGroupProperty(PropertyInterface("End", tn)), ti.o.setGroupProperty(PropertyInterface("Offset", tn)), tr.propertyIndex = te.ix, tr.propertyGroup = ts, Object.defineProperties(tr, {
                                        start: {
                                            get: ExpressionPropertyInterface(ti.s)
                                        },
                                        end: {
                                            get: ExpressionPropertyInterface(ti.e)
                                        },
                                        offset: {
                                            get: ExpressionPropertyInterface(ti.o)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.mn = te.mn, tr
                                }

                                function th(te, ti, ts) {
                                    function tr(ti) {
                                        return te.a.ix === ti || "Anchor Point" === ti ? tr.anchorPoint : te.o.ix === ti || "Opacity" === ti ? tr.opacity : te.p.ix === ti || "Position" === ti ? tr.position : te.r.ix === ti || "Rotation" === ti || "ADBE Vector Rotation" === ti ? tr.rotation : te.s.ix === ti || "Scale" === ti ? tr.scale : te.sk && te.sk.ix === ti || "Skew" === ti ? tr.skew : te.sa && te.sa.ix === ti || "Skew Axis" === ti ? tr.skewAxis : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts);
                                    return ti.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", tn)), ti.transform.mProps.p.setGroupProperty(PropertyInterface("Position", tn)), ti.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", tn)), ti.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", tn)), ti.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", tn)), ti.transform.mProps.sk && (ti.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", tn)), ti.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", tn))), ti.transform.op.setGroupProperty(PropertyInterface("Opacity", tn)), Object.defineProperties(tr, {
                                        opacity: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.o)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.p)
                                        },
                                        anchorPoint: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.a)
                                        },
                                        scale: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.s)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.r)
                                        },
                                        skew: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.sk)
                                        },
                                        skewAxis: {
                                            get: ExpressionPropertyInterface(ti.transform.mProps.sa)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.ty = "tr", tr.mn = te.mn, tr.propertyGroup = ts, tr
                                }

                                function tl(te, ti, ts) {
                                    function tr(ti) {
                                        return te.p.ix === ti ? tr.position : te.s.ix === ti ? tr.size : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts);
                                    tr.propertyIndex = te.ix;
                                    var ta = "tm" === ti.sh.ty ? ti.sh.prop : ti.sh;
                                    return ta.s.setGroupProperty(PropertyInterface("Size", tn)), ta.p.setGroupProperty(PropertyInterface("Position", tn)), Object.defineProperties(tr, {
                                        size: {
                                            get: ExpressionPropertyInterface(ta.s)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(ta.p)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.mn = te.mn, tr
                                }

                                function tp(te, ti, ts) {
                                    function tr(ti) {
                                        return te.p.ix === ti ? tr.position : te.r.ix === ti ? tr.rotation : te.pt.ix === ti ? tr.points : te.or.ix === ti || "ADBE Vector Star Outer Radius" === ti ? tr.outerRadius : te.os.ix === ti ? tr.outerRoundness : te.ir && (te.ir.ix === ti || "ADBE Vector Star Inner Radius" === ti) ? tr.innerRadius : te.is && te.is.ix === ti ? tr.innerRoundness : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts),
                                        ta = "tm" === ti.sh.ty ? ti.sh.prop : ti.sh;
                                    return tr.propertyIndex = te.ix, ta.or.setGroupProperty(PropertyInterface("Outer Radius", tn)), ta.os.setGroupProperty(PropertyInterface("Outer Roundness", tn)), ta.pt.setGroupProperty(PropertyInterface("Points", tn)), ta.p.setGroupProperty(PropertyInterface("Position", tn)), ta.r.setGroupProperty(PropertyInterface("Rotation", tn)), te.ir && (ta.ir.setGroupProperty(PropertyInterface("Inner Radius", tn)), ta.is.setGroupProperty(PropertyInterface("Inner Roundness", tn))), Object.defineProperties(tr, {
                                        position: {
                                            get: ExpressionPropertyInterface(ta.p)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(ta.r)
                                        },
                                        points: {
                                            get: ExpressionPropertyInterface(ta.pt)
                                        },
                                        outerRadius: {
                                            get: ExpressionPropertyInterface(ta.or)
                                        },
                                        outerRoundness: {
                                            get: ExpressionPropertyInterface(ta.os)
                                        },
                                        innerRadius: {
                                            get: ExpressionPropertyInterface(ta.ir)
                                        },
                                        innerRoundness: {
                                            get: ExpressionPropertyInterface(ta.is)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.mn = te.mn, tr
                                }

                                function tf(te, ti, ts) {
                                    function tr(ti) {
                                        return te.p.ix === ti ? tr.position : te.r.ix === ti ? tr.roundness : te.s.ix === ti || "Size" === ti || "ADBE Vector Rect Size" === ti ? tr.size : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts),
                                        ta = "tm" === ti.sh.ty ? ti.sh.prop : ti.sh;
                                    return tr.propertyIndex = te.ix, ta.p.setGroupProperty(PropertyInterface("Position", tn)), ta.s.setGroupProperty(PropertyInterface("Size", tn)), ta.r.setGroupProperty(PropertyInterface("Rotation", tn)), Object.defineProperties(tr, {
                                        position: {
                                            get: ExpressionPropertyInterface(ta.p)
                                        },
                                        roundness: {
                                            get: ExpressionPropertyInterface(ta.r)
                                        },
                                        size: {
                                            get: ExpressionPropertyInterface(ta.s)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.mn = te.mn, tr
                                }

                                function tc(te, ti, ts) {
                                    function tr(ti) {
                                        return te.r.ix === ti || "Round Corners 1" === ti ? tr.radius : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts),
                                        ta = ti;
                                    return tr.propertyIndex = te.ix, ta.rd.setGroupProperty(PropertyInterface("Radius", tn)), Object.defineProperties(tr, {
                                        radius: {
                                            get: ExpressionPropertyInterface(ta.rd)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.mn = te.mn, tr
                                }

                                function tu(te, ti, ts) {
                                    function tr(ti) {
                                        return te.c.ix === ti || "Copies" === ti ? tr.copies : te.o.ix === ti || "Offset" === ti ? tr.offset : null
                                    }
                                    var tn = propertyGroupFactory(tr, ts),
                                        ta = ti;
                                    return tr.propertyIndex = te.ix, ta.c.setGroupProperty(PropertyInterface("Copies", tn)), ta.o.setGroupProperty(PropertyInterface("Offset", tn)), Object.defineProperties(tr, {
                                        copies: {
                                            get: ExpressionPropertyInterface(ta.c)
                                        },
                                        offset: {
                                            get: ExpressionPropertyInterface(ta.o)
                                        },
                                        _name: {
                                            value: te.nm
                                        }
                                    }), tr.mn = te.mn, tr
                                }
                                return function(ti, ts, tr) {
                                    var tn;

                                    function ta(te) {
                                        if ("number" == typeof te) return 0 === (te = void 0 === te ? 1 : te) ? tr : tn[te - 1];
                                        for (var ti = 0, ts = tn.length; ti < ts;) {
                                            if (tn[ti]._name === te) return tn[ti];
                                            ti += 1
                                        }
                                        return null
                                    }
                                    return ta.propertyGroup = propertyGroupFactory(ta, function() {
                                        return tr
                                    }), tn = te(ti, ts, ta.propertyGroup), ta.numProperties = tn.length, ta._name = "Contents", ta
                                }
                            }(),
                            TextExpressionInterface = function(te) {
                                var ti, ts;

                                function tr(te) {
                                    return "ADBE Text Document" === te ? tr.sourceText : null
                                }
                                return Object.defineProperty(tr, "sourceText", {
                                    get: function() {
                                        te.textProperty.getValue();
                                        var tr = te.textProperty.currentData.t;
                                        return tr !== ti && (ti = te.textProperty.currentData.t, (ts = new String(tr)).value = tr || new String(tr), Object.defineProperty(ts, "style", {
                                            get: function() {
                                                return {
                                                    fillColor: te.textProperty.currentData.fc
                                                }
                                            }
                                        })), ts
                                    }
                                }), tr
                            };

                        function _typeof$2(te) {
                            return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }
                        var dataInterfaceFactory, FootageInterface = (dataInterfaceFactory = function(te) {
                                function ti(te) {
                                    return "Outline" === te ? ti.outlineInterface() : null
                                }
                                return ti._name = "Outline", ti.outlineInterface = function(te) {
                                    var ti = "",
                                        ts = te.getFootageData();

                                    function tr(te) {
                                        if (ts[te]) return ti = te, "object" === _typeof$2(ts = ts[te]) ? tr : ts;
                                        var tn = te.indexOf(ti);
                                        return -1 !== tn ? "object" === _typeof$2(ts = ts[parseInt(te.substr(tn + ti.length), 10)]) ? tr : ts : ""
                                    }
                                    return function() {
                                        return ti = "", ts = te.getFootageData(), tr
                                    }
                                }(te), ti
                            }, function(te) {
                                function ti(te) {
                                    return "Data" === te ? ti.dataInterface : null
                                }
                                return ti._name = "Data", ti.dataInterface = dataInterfaceFactory(te), ti
                            }),
                            interfaces = {
                                layer: LayerExpressionInterface,
                                effects: EffectsExpressionInterface,
                                comp: CompExpressionInterface,
                                shape: ShapeExpressionInterface,
                                text: TextExpressionInterface,
                                footage: FootageInterface
                            };

                        function getInterface(te) {
                            return interfaces[te] || null
                        }

                        function _typeof$1(te) {
                            return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }

                        function seedRandom(te, ti) {
                            var ts = this,
                                tr = ti.pow(256, 6),
                                tn = ti.pow(2, 52),
                                ta = 2 * tn;

                            function to(te) {
                                var ti, ts = te.length,
                                    tr = this,
                                    tn = 0,
                                    ta = tr.i = tr.j = 0,
                                    to = tr.S = [];
                                for (ts || (te = [ts++]); tn < 256;) to[tn] = tn++;
                                for (tn = 0; tn < 256; tn++) to[tn] = to[ta = 255 & ta + te[tn % ts] + (ti = to[tn])], to[ta] = ti;
                                tr.g = function(te) {
                                    for (var ti, ts = 0, tn = tr.i, ta = tr.j, to = tr.S; te--;) ti = to[tn = 255 & tn + 1], ts = 256 * ts + to[255 & (to[tn] = to[ta = 255 & ta + ti]) + (to[ta] = ti)];
                                    return tr.i = tn, tr.j = ta, ts
                                }
                            }

                            function th(te, ti) {
                                return ti.i = te.i, ti.j = te.j, ti.S = te.S.slice(), ti
                            }

                            function tl(te, ti) {
                                for (var ts, tr = te + "", tn = 0; tn < tr.length;) ti[255 & tn] = 255 & (ts ^= 19 * ti[255 & tn]) + tr.charCodeAt(tn++);
                                return tp(ti)
                            }

                            function tp(te) {
                                return String.fromCharCode.apply(0, te)
                            }
                            ti.seedrandom = function(tf, tc, tu) {
                                var tm = [],
                                    td = tl(function te(ti, ts) {
                                        var tr, tn = [],
                                            ta = _typeof$1(ti);
                                        if (ts && "object" == ta)
                                            for (tr in ti) try {
                                                tn.push(te(ti[tr], ts - 1))
                                            } catch (te) {}
                                        return tn.length ? tn : "string" == ta ? ti : ti + "\x00"
                                    }((tc = !0 === tc ? {
                                        entropy: !0
                                    } : tc || {}).entropy ? [tf, tp(te)] : null === tf ? function() {
                                        try {
                                            var ti = new Uint8Array(256);
                                            return (ts.crypto || ts.msCrypto).getRandomValues(ti), tp(ti)
                                        } catch (ti) {
                                            var tr = ts.navigator,
                                                tn = tr && tr.plugins;
                                            return [+new Date, ts, tn, ts.screen, tp(te)]
                                        }
                                    }() : tf, 3), tm),
                                    tg = new to(tm),
                                    ty = function() {
                                        for (var te = tg.g(6), ti = tr, ts = 0; te < tn;) te = 256 * (te + ts), ti *= 256, ts = tg.g(1);
                                        for (; te >= ta;) te /= 2, ti /= 2, ts >>>= 1;
                                        return (te + ts) / ti
                                    };
                                return ty.int32 = function() {
                                    return 0 | tg.g(4)
                                }, ty.quick = function() {
                                    return tg.g(4) / 4294967296
                                }, ty.double = ty, tl(tp(tg.S), te), (tc.pass || tu || function(te, ts, tr, tn) {
                                    return tn && (tn.S && th(tn, tg), te.state = function() {
                                        return th(tg, {})
                                    }), tr ? (ti.random = te, ts) : te
                                })(ty, td, "global" in tc ? tc.global : this == ti, tc.state)
                            }, tl(ti.random(), te)
                        }

                        function initialize$2(te) {
                            seedRandom([], te)
                        }
                        var propTypes = {
                            SHAPE: "shape"
                        };

                        function _typeof(te) {
                            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(te) {
                                return typeof te
                            } : function(te) {
                                return te && "function" == typeof Symbol && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te
                            })(te)
                        }
                        var ExpressionManager = function() {
                                var ob = {},
                                    Math = BMMath,
                                    window = null,
                                    document = null,
                                    XMLHttpRequest = null,
                                    fetch = null,
                                    frames = null;

                                function $bm_isInstanceOfArray(te) {
                                    return te.constructor === Array || te.constructor === Float32Array
                                }

                                function isNumerable(te, ti) {
                                    return "number" === te || "boolean" === te || "string" === te || ti instanceof Number
                                }

                                function $bm_neg(te) {
                                    var ti = _typeof(te);
                                    if ("number" === ti || "boolean" === ti || te instanceof Number) return -te;
                                    if ($bm_isInstanceOfArray(te)) {
                                        var ts, tr = te.length,
                                            tn = [];
                                        for (ts = 0; ts < tr; ts += 1) tn[ts] = -te[ts];
                                        return tn
                                    }
                                    return te.propType ? te.v : -te
                                }
                                initialize$2(BMMath);
                                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                                function sum(te, ti) {
                                    var ts = _typeof(te),
                                        tr = _typeof(ti);
                                    if ("string" === ts || "string" === tr || isNumerable(ts, te) && isNumerable(tr, ti)) return te + ti;
                                    if ($bm_isInstanceOfArray(te) && isNumerable(tr, ti)) return (te = te.slice(0))[0] += ti, te;
                                    if (isNumerable(ts, te) && $bm_isInstanceOfArray(ti)) return (ti = ti.slice(0))[0] = te + ti[0], ti;
                                    if ($bm_isInstanceOfArray(te) && $bm_isInstanceOfArray(ti)) {
                                        for (var tn = 0, ta = te.length, to = ti.length, th = []; tn < ta || tn < to;)("number" == typeof te[tn] || te[tn] instanceof Number) && ("number" == typeof ti[tn] || ti[tn] instanceof Number) ? th[tn] = te[tn] + ti[tn] : th[tn] = void 0 === ti[tn] ? te[tn] : te[tn] || ti[tn], tn += 1;
                                        return th
                                    }
                                    return 0
                                }
                                var add = sum;

                                function sub(te, ti) {
                                    var ts = _typeof(te),
                                        tr = _typeof(ti);
                                    if (isNumerable(ts, te) && isNumerable(tr, ti)) return "string" === ts && (te = parseInt(te, 10)), "string" === tr && (ti = parseInt(ti, 10)), te - ti;
                                    if ($bm_isInstanceOfArray(te) && isNumerable(tr, ti)) return (te = te.slice(0))[0] -= ti, te;
                                    if (isNumerable(ts, te) && $bm_isInstanceOfArray(ti)) return (ti = ti.slice(0))[0] = te - ti[0], ti;
                                    if ($bm_isInstanceOfArray(te) && $bm_isInstanceOfArray(ti)) {
                                        for (var tn = 0, ta = te.length, to = ti.length, th = []; tn < ta || tn < to;)("number" == typeof te[tn] || te[tn] instanceof Number) && ("number" == typeof ti[tn] || ti[tn] instanceof Number) ? th[tn] = te[tn] - ti[tn] : th[tn] = void 0 === ti[tn] ? te[tn] : te[tn] || ti[tn], tn += 1;
                                        return th
                                    }
                                    return 0
                                }

                                function mul(te, ti) {
                                    var ts, tr, tn, ta = _typeof(te),
                                        to = _typeof(ti);
                                    if (isNumerable(ta, te) && isNumerable(to, ti)) return te * ti;
                                    if ($bm_isInstanceOfArray(te) && isNumerable(to, ti)) {
                                        for (ts = createTypedArray("float32", tn = te.length), tr = 0; tr < tn; tr += 1) ts[tr] = te[tr] * ti;
                                        return ts
                                    }
                                    if (isNumerable(ta, te) && $bm_isInstanceOfArray(ti)) {
                                        for (ts = createTypedArray("float32", tn = ti.length), tr = 0; tr < tn; tr += 1) ts[tr] = te * ti[tr];
                                        return ts
                                    }
                                    return 0
                                }

                                function div(te, ti) {
                                    var ts, tr, tn, ta = _typeof(te),
                                        to = _typeof(ti);
                                    if (isNumerable(ta, te) && isNumerable(to, ti)) return te / ti;
                                    if ($bm_isInstanceOfArray(te) && isNumerable(to, ti)) {
                                        for (ts = createTypedArray("float32", tn = te.length), tr = 0; tr < tn; tr += 1) ts[tr] = te[tr] / ti;
                                        return ts
                                    }
                                    if (isNumerable(ta, te) && $bm_isInstanceOfArray(ti)) {
                                        for (ts = createTypedArray("float32", tn = ti.length), tr = 0; tr < tn; tr += 1) ts[tr] = te / ti[tr];
                                        return ts
                                    }
                                    return 0
                                }

                                function mod(te, ti) {
                                    return "string" == typeof te && (te = parseInt(te, 10)), "string" == typeof ti && (ti = parseInt(ti, 10)), te % ti
                                }
                                var $bm_sum = sum,
                                    $bm_sub = sub,
                                    $bm_mul = mul,
                                    $bm_div = div,
                                    $bm_mod = mod;

                                function clamp(te, ti, ts) {
                                    if (ti > ts) {
                                        var tr = ts;
                                        ts = ti, ti = tr
                                    }
                                    return Math.min(Math.max(te, ti), ts)
                                }

                                function radiansToDegrees(te) {
                                    return te / degToRads
                                }
                                var radians_to_degrees = radiansToDegrees;

                                function degreesToRadians(te) {
                                    return te * degToRads
                                }
                                var degrees_to_radians = radiansToDegrees,
                                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                                function length(te, ti) {
                                    if ("number" == typeof te || te instanceof Number) return ti = ti || 0, Math.abs(te - ti);
                                    ti || (ti = helperLengthArray);
                                    var ts, tr = Math.min(te.length, ti.length),
                                        tn = 0;
                                    for (ts = 0; ts < tr; ts += 1) tn += Math.pow(ti[ts] - te[ts], 2);
                                    return Math.sqrt(tn)
                                }

                                function normalize(te) {
                                    return div(te, length(te))
                                }

                                function rgbToHsl(te) {
                                    var ti, ts, tr = te[0],
                                        tn = te[1],
                                        ta = te[2],
                                        to = Math.max(tr, tn, ta),
                                        th = Math.min(tr, tn, ta),
                                        tl = (to + th) / 2;
                                    if (to === th) ti = 0, ts = 0;
                                    else {
                                        var tp = to - th;
                                        switch (ts = tl > .5 ? tp / (2 - to - th) : tp / (to + th), to) {
                                            case tr:
                                                ti = (tn - ta) / tp + (tn < ta ? 6 : 0);
                                                break;
                                            case tn:
                                                ti = (ta - tr) / tp + 2;
                                                break;
                                            case ta:
                                                ti = (tr - tn) / tp + 4
                                        }
                                        ti /= 6
                                    }
                                    return [ti, ts, tl, te[3]]
                                }

                                function hue2rgb(te, ti, ts) {
                                    return ts < 0 && (ts += 1), ts > 1 && (ts -= 1), ts < 1 / 6 ? te + 6 * (ti - te) * ts : ts < .5 ? ti : ts < 2 / 3 ? te + (ti - te) * (2 / 3 - ts) * 6 : te
                                }

                                function hslToRgb(te) {
                                    var ti, ts, tr, tn = te[0],
                                        ta = te[1],
                                        to = te[2];
                                    if (0 === ta) ti = to, tr = to, ts = to;
                                    else {
                                        var th = to < .5 ? to * (1 + ta) : to + ta - to * ta,
                                            tl = 2 * to - th;
                                        ti = hue2rgb(tl, th, tn + 1 / 3), ts = hue2rgb(tl, th, tn), tr = hue2rgb(tl, th, tn - 1 / 3)
                                    }
                                    return [ti, ts, tr, te[3]]
                                }

                                function linear(te, ti, ts, tr, tn) {
                                    if (void 0 !== tr && void 0 !== tn || (tr = ti, tn = ts, ti = 0, ts = 1), ts < ti) {
                                        var ta = ts;
                                        ts = ti, ti = ta
                                    }
                                    if (te <= ti) return tr;
                                    if (te >= ts) return tn;
                                    var to, th = ts === ti ? 0 : (te - ti) / (ts - ti);
                                    if (!tr.length) return tr + (tn - tr) * th;
                                    var tl = tr.length,
                                        tp = createTypedArray("float32", tl);
                                    for (to = 0; to < tl; to += 1) tp[to] = tr[to] + (tn[to] - tr[to]) * th;
                                    return tp
                                }

                                function random(te, ti) {
                                    if (void 0 === ti && (void 0 === te ? (te = 0, ti = 1) : (ti = te, te = void 0)), ti.length) {
                                        var ts, tr = ti.length;
                                        te || (te = createTypedArray("float32", tr));
                                        var tn = createTypedArray("float32", tr),
                                            ta = BMMath.random();
                                        for (ts = 0; ts < tr; ts += 1) tn[ts] = te[ts] + ta * (ti[ts] - te[ts]);
                                        return tn
                                    }
                                    return void 0 === te && (te = 0), te + BMMath.random() * (ti - te)
                                }

                                function createPath(te, ti, ts, tr) {
                                    var tn, ta = te.length,
                                        to = shapePool.newElement();
                                    to.setPathData(!!tr, ta);
                                    var th, tl, tp = [0, 0];
                                    for (tn = 0; tn < ta; tn += 1) th = ti && ti[tn] ? ti[tn] : tp, tl = ts && ts[tn] ? ts[tn] : tp, to.setTripleAt(te[tn][0], te[tn][1], tl[0] + te[tn][0], tl[1] + te[tn][1], th[0] + te[tn][0], th[1] + te[tn][1], tn, !0);
                                    return to
                                }

                                function initiateExpression(elem, data, property) {
                                    function noOp(te) {
                                        return te
                                    }
                                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                                    var transform, $bm_transform, content, effect, val = data.x,
                                        needsVelocity = /velocity(?![\w\d])/.test(val),
                                        _needsRandom = -1 !== val.indexOf("random"),
                                        elemType = elem.data.ty,
                                        thisProperty = property;
                                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                        get: function() {
                                            return thisProperty.v
                                        }
                                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                                    var loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                        width = elem.data.sw ? elem.data.sw : 0,
                                        height = elem.data.sh ? elem.data.sh : 0,
                                        name = elem.data.nm,
                                        expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                        numKeys = property.kf ? data.k.length : 0,
                                        active = !this.data || !0 !== this.data.hd,
                                        wiggle = (function(te, ti) {
                                            var ts, tr, tn = this.pv.length ? this.pv.length : 1,
                                                ta = createTypedArray("float32", tn),
                                                to = Math.floor(5 * time);
                                            for (ts = 0, tr = 0; ts < to;) {
                                                for (tr = 0; tr < tn; tr += 1) ta[tr] += -ti + 2 * ti * BMMath.random();
                                                ts += 1
                                            }
                                            var th = 5 * time,
                                                tl = th - Math.floor(th),
                                                tp = createTypedArray("float32", tn);
                                            if (tn > 1) {
                                                for (tr = 0; tr < tn; tr += 1) tp[tr] = this.pv[tr] + ta[tr] + (-ti + 2 * ti * BMMath.random()) * tl;
                                                return tp
                                            }
                                            return this.pv + ta[0] + (-ti + 2 * ti * BMMath.random()) * tl
                                        }).bind(this);

                                    function loopInDuration(te, ti) {
                                        return loopIn(te, ti, !0)
                                    }

                                    function loopOutDuration(te, ti) {
                                        return loopOut(te, ti, !0)
                                    }
                                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                                    var time, velocity, value, text, textIndex, textTotal, selectorValue, comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                                    function lookAt(te, ti) {
                                        var ts = [ti[0] - te[0], ti[1] - te[1], ti[2] - te[2]],
                                            tr = Math.atan2(ts[0], Math.sqrt(ts[1] * ts[1] + ts[2] * ts[2])) / degToRads;
                                        return [-Math.atan2(ts[1], ts[2]) / degToRads, tr, 0]
                                    }

                                    function easeOut(te, ti, ts, tr, tn) {
                                        return applyEase(easeOutBez, te, ti, ts, tr, tn)
                                    }

                                    function easeIn(te, ti, ts, tr, tn) {
                                        return applyEase(easeInBez, te, ti, ts, tr, tn)
                                    }

                                    function ease(te, ti, ts, tr, tn) {
                                        return applyEase(easeInOutBez, te, ti, ts, tr, tn)
                                    }

                                    function applyEase(te, ti, ts, tr, tn, ta) {
                                        void 0 === tn ? (tn = ts, ta = tr) : ti = (ti - ts) / (tr - ts), ti > 1 ? ti = 1 : ti < 0 && (ti = 0);
                                        var to = te(ti);
                                        if ($bm_isInstanceOfArray(tn)) {
                                            var th, tl = tn.length,
                                                tp = createTypedArray("float32", tl);
                                            for (th = 0; th < tl; th += 1) tp[th] = (ta[th] - tn[th]) * to + tn[th];
                                            return tp
                                        }
                                        return (ta - tn) * to + tn
                                    }

                                    function nearestKey(te) {
                                        var ti, ts, tr, tn = data.k.length;
                                        if (data.k.length && "number" != typeof data.k[0]) {
                                            if (ts = -1, (te *= elem.comp.globalData.frameRate) < data.k[0].t) ts = 1, tr = data.k[0].t;
                                            else {
                                                for (ti = 0; ti < tn - 1; ti += 1) {
                                                    if (te === data.k[ti].t) {
                                                        ts = ti + 1, tr = data.k[ti].t;
                                                        break
                                                    }
                                                    if (te > data.k[ti].t && te < data.k[ti + 1].t) {
                                                        te - data.k[ti].t > data.k[ti + 1].t - te ? (ts = ti + 2, tr = data.k[ti + 1].t) : (ts = ti + 1, tr = data.k[ti].t);
                                                        break
                                                    }
                                                } - 1 === ts && (ts = ti + 1, tr = data.k[ti].t)
                                            }
                                        } else ts = 0, tr = 0;
                                        var ta = {};
                                        return ta.index = ts, ta.time = tr / elem.comp.globalData.frameRate, ta
                                    }

                                    function key(te) {
                                        if (!data.k.length || "number" == typeof data.k[0]) throw Error("The property has no keyframe at index " + te);
                                        te -= 1, ti = {
                                            time: data.k[te].t / elem.comp.globalData.frameRate,
                                            value: []
                                        };
                                        var ti, ts, tr, tn = Object.prototype.hasOwnProperty.call(data.k[te], "s") ? data.k[te].s : data.k[te - 1].e;
                                        for (tr = tn.length, ts = 0; ts < tr; ts += 1) ti[ts] = tn[ts], ti.value[ts] = tn[ts];
                                        return ti
                                    }

                                    function framesToTime(te, ti) {
                                        return ti || (ti = elem.comp.globalData.frameRate), te / ti
                                    }

                                    function timeToFrames(te, ti) {
                                        return te || 0 === te || (te = time), ti || (ti = elem.comp.globalData.frameRate), te * ti
                                    }

                                    function seedRandom(te) {
                                        BMMath.seedrandom(randSeed + te)
                                    }

                                    function sourceRectAtTime() {
                                        return elem.sourceRectAtTime()
                                    }

                                    function substring(te, ti) {
                                        return "string" == typeof value ? void 0 === ti ? value.substring(te) : value.substring(te, ti) : ""
                                    }

                                    function substr(te, ti) {
                                        return "string" == typeof value ? void 0 === ti ? value.substr(te) : value.substr(te, ti) : ""
                                    }

                                    function posterizeTime(te) {
                                        value = valueAtTime(time = 0 === te ? 0 : Math.floor(time * te) / te)
                                    }
                                    var parent, index = elem.data.ind,
                                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                        randSeed = Math.floor(1e6 * Math.random()),
                                        globalData = elem.globalData;

                                    function executeExpression(te) {
                                        return value = te, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || ($bm_transform = transform = elem.layerInterface("ADBE Transform Group"), transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                                    }
                                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                                }
                                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
                            }(),
                            expressionHelpers = {
                                searchExpressions: function(te, ti, ts) {
                                    ti.x && (ts.k = !0, ts.x = !0, ts.initiateExpression = ExpressionManager.initiateExpression, ts.effectsSequence.push(ts.initiateExpression(te, ti, ts).bind(ts)))
                                },
                                getSpeedAtTime: function(te) {
                                    var ti, ts = this.getValueAtTime(te),
                                        tr = this.getValueAtTime(te + -.01),
                                        tn = 0;
                                    if (ts.length) {
                                        for (ti = 0; ti < ts.length; ti += 1) tn += Math.pow(tr[ti] - ts[ti], 2);
                                        tn = 100 * Math.sqrt(tn)
                                    } else tn = 0;
                                    return tn
                                },
                                getVelocityAtTime: function(te) {
                                    if (void 0 !== this.vel) return this.vel;
                                    var ti, ts, tr = this.getValueAtTime(te),
                                        tn = this.getValueAtTime(te + -.001);
                                    if (tr.length)
                                        for (ti = createTypedArray("float32", tr.length), ts = 0; ts < tr.length; ts += 1) ti[ts] = -((tn[ts] - tr[ts]) / .001);
                                    else ti = -((tn - tr) / .001);
                                    return ti
                                },
                                getValueAtTime: function(te) {
                                    return te *= this.elem.globalData.frameRate, (te -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < te ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(te, this._cachingAtTime), this._cachingAtTime.lastFrame = te), this._cachingAtTime.value
                                },
                                getStaticValueAtTime: function() {
                                    return this.pv
                                },
                                setGroupProperty: function(te) {
                                    this.propertyGroup = te
                                }
                            };

                        function addPropertyDecorator() {
                            function te(te, ti, ts) {
                                if (!this.k || !this.keyframes) return this.pv;
                                te = te ? te.toLowerCase() : "";
                                var tr, tn, ta, to, th, tl = this.comp.renderedFrame,
                                    tp = this.keyframes,
                                    tf = tp[tp.length - 1].t;
                                if (tl <= tf) return this.pv;
                                if (ts ? tn = tf - (tr = ti ? Math.abs(tf - this.elem.comp.globalData.frameRate * ti) : Math.max(0, tf - this.elem.data.ip)) : ((!ti || ti > tp.length - 1) && (ti = tp.length - 1), tr = tf - (tn = tp[tp.length - 1 - ti].t)), "pingpong" === te) {
                                    if (Math.floor((tl - tn) / tr) % 2 != 0) return this.getValueAtTime((tr - (tl - tn) % tr + tn) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === te) {
                                        var tc = this.getValueAtTime(tn / this.comp.globalData.frameRate, 0),
                                            tu = this.getValueAtTime(tf / this.comp.globalData.frameRate, 0),
                                            tm = this.getValueAtTime(((tl - tn) % tr + tn) / this.comp.globalData.frameRate, 0),
                                            td = Math.floor((tl - tn) / tr);
                                        if (this.pv.length) {
                                            for (to = (th = Array(tc.length)).length, ta = 0; ta < to; ta += 1) th[ta] = (tu[ta] - tc[ta]) * td + tm[ta];
                                            return th
                                        }
                                        return (tu - tc) * td + tm
                                    }
                                    if ("continue" === te) {
                                        var tg = this.getValueAtTime(tf / this.comp.globalData.frameRate, 0),
                                            ty = this.getValueAtTime((tf - .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (to = (th = Array(tg.length)).length, ta = 0; ta < to; ta += 1) th[ta] = tg[ta] + (tg[ta] - ty[ta]) * ((tl - tf) / this.comp.globalData.frameRate) / 5e-4;
                                            return th
                                        }
                                        return tg + (tl - tf) / .001 * (tg - ty)
                                    }
                                }
                                return this.getValueAtTime(((tl - tn) % tr + tn) / this.comp.globalData.frameRate, 0)
                            }

                            function ti(te, ti, ts) {
                                if (!this.k) return this.pv;
                                te = te ? te.toLowerCase() : "";
                                var tr, tn, ta, to, th, tl = this.comp.renderedFrame,
                                    tp = this.keyframes,
                                    tf = tp[0].t;
                                if (tl >= tf) return this.pv;
                                if (ts ? tn = tf + (tr = ti ? Math.abs(this.elem.comp.globalData.frameRate * ti) : Math.max(0, this.elem.data.op - tf)) : ((!ti || ti > tp.length - 1) && (ti = tp.length - 1), tr = (tn = tp[ti].t) - tf), "pingpong" === te) {
                                    if (Math.floor((tf - tl) / tr) % 2 == 0) return this.getValueAtTime(((tf - tl) % tr + tf) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === te) {
                                        var tc = this.getValueAtTime(tf / this.comp.globalData.frameRate, 0),
                                            tu = this.getValueAtTime(tn / this.comp.globalData.frameRate, 0),
                                            tm = this.getValueAtTime((tr - (tf - tl) % tr + tf) / this.comp.globalData.frameRate, 0),
                                            td = Math.floor((tf - tl) / tr) + 1;
                                        if (this.pv.length) {
                                            for (to = (th = Array(tc.length)).length, ta = 0; ta < to; ta += 1) th[ta] = tm[ta] - (tu[ta] - tc[ta]) * td;
                                            return th
                                        }
                                        return tm - (tu - tc) * td
                                    }
                                    if ("continue" === te) {
                                        var tg = this.getValueAtTime(tf / this.comp.globalData.frameRate, 0),
                                            ty = this.getValueAtTime((tf + .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (to = (th = Array(tg.length)).length, ta = 0; ta < to; ta += 1) th[ta] = tg[ta] + (tg[ta] - ty[ta]) * (tf - tl) / .001;
                                            return th
                                        }
                                        return tg + (tg - ty) * (tf - tl) / .001
                                    }
                                }
                                return this.getValueAtTime((tr - ((tf - tl) % tr + tf)) / this.comp.globalData.frameRate, 0)
                            }

                            function ts(te, ti) {
                                if (!this.k || (te = .5 * (te || .4), (ti = Math.floor(ti || 5)) <= 1)) return this.pv;
                                var ts, tr, tn = this.comp.renderedFrame / this.comp.globalData.frameRate,
                                    ta = tn - te,
                                    to = ti > 1 ? (tn + te - ta) / (ti - 1) : 1,
                                    th = 0,
                                    tl = 0;
                                for (ts = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; th < ti;) {
                                    if (tr = this.getValueAtTime(ta + th * to), this.pv.length)
                                        for (tl = 0; tl < this.pv.length; tl += 1) ts[tl] += tr[tl];
                                    else ts += tr;
                                    th += 1
                                }
                                if (this.pv.length)
                                    for (tl = 0; tl < this.pv.length; tl += 1) ts[tl] /= ti;
                                else ts /= ti;
                                return ts
                            }

                            function tr(te) {
                                this._transformCachingAtTime || (this._transformCachingAtTime = {
                                    v: new Matrix
                                });
                                var ti = this._transformCachingAtTime.v;
                                if (ti.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                                    var ts = this.a.getValueAtTime(te);
                                    ti.translate(-ts[0] * this.a.mult, -ts[1] * this.a.mult, ts[2] * this.a.mult)
                                }
                                if (this.appliedTransformations < 2) {
                                    var tr = this.s.getValueAtTime(te);
                                    ti.scale(tr[0] * this.s.mult, tr[1] * this.s.mult, tr[2] * this.s.mult)
                                }
                                if (this.sk && this.appliedTransformations < 3) {
                                    var tn = this.sk.getValueAtTime(te),
                                        ta = this.sa.getValueAtTime(te);
                                    ti.skewFromAxis(-tn * this.sk.mult, ta * this.sa.mult)
                                }
                                if (this.r && this.appliedTransformations < 4) {
                                    var to = this.r.getValueAtTime(te);
                                    ti.rotate(-to * this.r.mult)
                                } else if (!this.r && this.appliedTransformations < 4) {
                                    var th = this.rz.getValueAtTime(te),
                                        tl = this.ry.getValueAtTime(te),
                                        tp = this.rx.getValueAtTime(te),
                                        tf = this.or.getValueAtTime(te);
                                    ti.rotateZ(-th * this.rz.mult).rotateY(tl * this.ry.mult).rotateX(tp * this.rx.mult).rotateZ(-tf[2] * this.or.mult).rotateY(tf[1] * this.or.mult).rotateX(tf[0] * this.or.mult)
                                }
                                if (this.data.p && this.data.p.s) {
                                    var tc = this.px.getValueAtTime(te),
                                        tu = this.py.getValueAtTime(te);
                                    if (this.data.p.z) {
                                        var tm = this.pz.getValueAtTime(te);
                                        ti.translate(tc * this.px.mult, tu * this.py.mult, -tm * this.pz.mult)
                                    } else ti.translate(tc * this.px.mult, tu * this.py.mult, 0)
                                } else {
                                    var td = this.p.getValueAtTime(te);
                                    ti.translate(td[0] * this.p.mult, td[1] * this.p.mult, -td[2] * this.p.mult)
                                }
                                return ti
                            }

                            function tn() {
                                return this.v.clone(new Matrix)
                            }
                            var ta = TransformPropertyFactory.getTransformProperty;
                            TransformPropertyFactory.getTransformProperty = function(te, ti, ts) {
                                var to = ta(te, ti, ts);
                                return to.dynamicProperties.length ? to.getValueAtTime = tr.bind(to) : to.getValueAtTime = tn.bind(to), to.setGroupProperty = expressionHelpers.setGroupProperty, to
                            };
                            var to = PropertyFactory.getProp;
                            PropertyFactory.getProp = function(tr, tn, ta, th, tl) {
                                var tp = to(tr, tn, ta, th, tl);
                                tp.kf ? tp.getValueAtTime = expressionHelpers.getValueAtTime.bind(tp) : tp.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(tp), tp.setGroupProperty = expressionHelpers.setGroupProperty, tp.loopOut = te, tp.loopIn = ti, tp.smooth = ts, tp.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(tp), tp.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(tp), tp.numKeys = 1 === tn.a ? tn.k.length : 0, tp.propertyIndex = tn.ix;
                                var tf = 0;
                                return 0 !== ta && (tf = createTypedArray("float32", 1 === tn.a ? tn.k[0].s.length : tn.k.length)), tp._cachingAtTime = {
                                    lastFrame: initialDefaultFrame,
                                    lastIndex: 0,
                                    value: tf
                                }, expressionHelpers.searchExpressions(tr, tn, tp), tp.k && tl.addDynamicProperty(tp), tp
                            };
                            var th = ShapePropertyFactory.getConstructorFunction(),
                                tl = ShapePropertyFactory.getKeyframedConstructorFunction();

                            function tp() {}
                            tp.prototype = {
                                vertices: function(te, ti) {
                                    this.k && this.getValue();
                                    var ts, tr = this.v;
                                    void 0 !== ti && (tr = this.getValueAtTime(ti, 0));
                                    var tn = tr._length,
                                        ta = tr[te],
                                        to = tr.v,
                                        th = createSizedArray(tn);
                                    for (ts = 0; ts < tn; ts += 1) th[ts] = "i" === te || "o" === te ? [ta[ts][0] - to[ts][0], ta[ts][1] - to[ts][1]] : [ta[ts][0], ta[ts][1]];
                                    return th
                                },
                                points: function(te) {
                                    return this.vertices("v", te)
                                },
                                inTangents: function(te) {
                                    return this.vertices("i", te)
                                },
                                outTangents: function(te) {
                                    return this.vertices("o", te)
                                },
                                isClosed: function() {
                                    return this.v.c
                                },
                                pointOnPath: function(te, ti) {
                                    var ts = this.v;
                                    void 0 !== ti && (ts = this.getValueAtTime(ti, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(ts));
                                    for (var tr, tn = this._segmentsLength, ta = tn.lengths, to = tn.totalLength * te, th = 0, tl = ta.length, tp = 0; th < tl;) {
                                        if (tp + ta[th].addedLength > to) {
                                            var tf = th,
                                                tc = ts.c && th === tl - 1 ? 0 : th + 1,
                                                tu = (to - tp) / ta[th].addedLength;
                                            tr = bez.getPointInSegment(ts.v[tf], ts.v[tc], ts.o[tf], ts.i[tc], tu, ta[th]);
                                            break
                                        }
                                        tp += ta[th].addedLength, th += 1
                                    }
                                    return tr || (tr = ts.c ? [ts.v[0][0], ts.v[0][1]] : [ts.v[ts._length - 1][0], ts.v[ts._length - 1][1]]), tr
                                },
                                vectorOnPath: function(te, ti, ts) {
                                    1 == te ? te = this.v.c : 0 == te && (te = .999);
                                    var tr = this.pointOnPath(te, ti),
                                        tn = this.pointOnPath(te + .001, ti),
                                        ta = tn[0] - tr[0],
                                        to = tn[1] - tr[1],
                                        th = Math.sqrt(Math.pow(ta, 2) + Math.pow(to, 2));
                                    return 0 === th ? [0, 0] : "tangent" === ts ? [ta / th, to / th] : [-to / th, ta / th]
                                },
                                tangentOnPath: function(te, ti) {
                                    return this.vectorOnPath(te, ti, "tangent")
                                },
                                normalOnPath: function(te, ti) {
                                    return this.vectorOnPath(te, ti, "normal")
                                },
                                setGroupProperty: expressionHelpers.setGroupProperty,
                                getValueAtTime: expressionHelpers.getStaticValueAtTime
                            }, extendPrototype([tp], th), extendPrototype([tp], tl), tl.prototype.getValueAtTime = function(te) {
                                return this._cachingAtTime || (this._cachingAtTime = {
                                    shapeValue: shapePool.clone(this.pv),
                                    lastIndex: 0,
                                    lastTime: initialDefaultFrame
                                }), te *= this.elem.globalData.frameRate, (te -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < te ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = te, this.interpolateShape(te, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                            }, tl.prototype.initiateExpression = ExpressionManager.initiateExpression;
                            var tf = ShapePropertyFactory.getShapeProp;
                            ShapePropertyFactory.getShapeProp = function(te, ti, ts, tr, tn) {
                                var ta = tf(te, ti, ts, tr, tn);
                                return ta.propertyIndex = ti.ix, ta.lock = !1, 3 === ts ? expressionHelpers.searchExpressions(te, ti.pt, ta) : 4 === ts && expressionHelpers.searchExpressions(te, ti.ks, ta), ta.k && te.addDynamicProperty(ta), ta
                            }
                        }

                        function initialize$1() {
                            addPropertyDecorator()
                        }

                        function addDecorator() {
                            TextProperty.prototype.getExpressionValue = function(te, ti) {
                                var ts = this.calculateExpression(ti);
                                if (te.t !== ts) {
                                    var tr = {};
                                    return this.copyData(tr, te), tr.t = ts.toString(), tr.__complete = !1, tr
                                }
                                return te
                            }, TextProperty.prototype.searchProperty = function() {
                                var te = this.searchKeyframes(),
                                    ti = this.searchExpressions();
                                return this.kf = te || ti, this.kf
                            }, TextProperty.prototype.searchExpressions = function() {
                                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                            }
                        }

                        function initialize() {
                            addDecorator()
                        }

                        function SVGComposableEffect() {}
                        SVGComposableEffect.prototype = {
                            createMergeNode: function(te, ti) {
                                var ts, tr, tn = createNS("feMerge");
                                for (tn.setAttribute("result", te), tr = 0; tr < ti.length; tr += 1)(ts = createNS("feMergeNode")).setAttribute("in", ti[tr]), tn.appendChild(ts), tn.appendChild(ts);
                                return tn
                            }
                        };
                        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                        function SVGTintFilter(te, ti, ts, tr, tn) {
                            this.filterManager = ti;
                            var ta = createNS("feColorMatrix");
                            ta.setAttribute("type", "matrix"), ta.setAttribute("color-interpolation-filters", "linearRGB"), ta.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = ta, ta.setAttribute("result", tr + "_tint_1"), te.appendChild(ta), (ta = createNS("feColorMatrix")).setAttribute("type", "matrix"), ta.setAttribute("color-interpolation-filters", "sRGB"), ta.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), ta.setAttribute("result", tr + "_tint_2"), te.appendChild(ta), this.matrixFilter = ta;
                            var to = this.createMergeNode(tr, [tn, tr + "_tint_1", tr + "_tint_2"]);
                            te.appendChild(to)
                        }

                        function SVGFillFilter(te, ti, ts, tr) {
                            this.filterManager = ti;
                            var tn = createNS("feColorMatrix");
                            tn.setAttribute("type", "matrix"), tn.setAttribute("color-interpolation-filters", "sRGB"), tn.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), tn.setAttribute("result", tr), te.appendChild(tn), this.matrixFilter = tn
                        }

                        function SVGStrokeEffect(te, ti, ts) {
                            this.initialized = !1, this.filterManager = ti, this.elem = ts, this.paths = []
                        }

                        function SVGTritoneFilter(te, ti, ts, tr) {
                            this.filterManager = ti;
                            var tn = createNS("feColorMatrix");
                            tn.setAttribute("type", "matrix"), tn.setAttribute("color-interpolation-filters", "linearRGB"), tn.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), te.appendChild(tn);
                            var ta = createNS("feComponentTransfer");
                            ta.setAttribute("color-interpolation-filters", "sRGB"), ta.setAttribute("result", tr), this.matrixFilter = ta;
                            var to = createNS("feFuncR");
                            to.setAttribute("type", "table"), ta.appendChild(to), this.feFuncR = to;
                            var th = createNS("feFuncG");
                            th.setAttribute("type", "table"), ta.appendChild(th), this.feFuncG = th;
                            var tl = createNS("feFuncB");
                            tl.setAttribute("type", "table"), ta.appendChild(tl), this.feFuncB = tl, te.appendChild(ta)
                        }

                        function SVGProLevelsFilter(te, ti, ts, tr) {
                            this.filterManager = ti;
                            var tn = this.filterManager.effectElements,
                                ta = createNS("feComponentTransfer");
                            (tn[10].p.k || 0 !== tn[10].p.v || tn[11].p.k || 1 !== tn[11].p.v || tn[12].p.k || 1 !== tn[12].p.v || tn[13].p.k || 0 !== tn[13].p.v || tn[14].p.k || 1 !== tn[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", ta)), (tn[17].p.k || 0 !== tn[17].p.v || tn[18].p.k || 1 !== tn[18].p.v || tn[19].p.k || 1 !== tn[19].p.v || tn[20].p.k || 0 !== tn[20].p.v || tn[21].p.k || 1 !== tn[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", ta)), (tn[24].p.k || 0 !== tn[24].p.v || tn[25].p.k || 1 !== tn[25].p.v || tn[26].p.k || 1 !== tn[26].p.v || tn[27].p.k || 0 !== tn[27].p.v || tn[28].p.k || 1 !== tn[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", ta)), (tn[31].p.k || 0 !== tn[31].p.v || tn[32].p.k || 1 !== tn[32].p.v || tn[33].p.k || 1 !== tn[33].p.v || tn[34].p.k || 0 !== tn[34].p.v || tn[35].p.k || 1 !== tn[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", ta)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (ta.setAttribute("color-interpolation-filters", "sRGB"), te.appendChild(ta)), (tn[3].p.k || 0 !== tn[3].p.v || tn[4].p.k || 1 !== tn[4].p.v || tn[5].p.k || 1 !== tn[5].p.v || tn[6].p.k || 0 !== tn[6].p.v || tn[7].p.k || 1 !== tn[7].p.v) && ((ta = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), ta.setAttribute("result", tr), te.appendChild(ta), this.feFuncRComposed = this.createFeFunc("feFuncR", ta), this.feFuncGComposed = this.createFeFunc("feFuncG", ta), this.feFuncBComposed = this.createFeFunc("feFuncB", ta))
                        }

                        function SVGDropShadowEffect(te, ti, ts, tr, tn) {
                            var ta = ti.container.globalData.renderConfig.filterSize,
                                to = ti.data.fs || ta;
                            te.setAttribute("x", to.x || ta.x), te.setAttribute("y", to.y || ta.y), te.setAttribute("width", to.width || ta.width), te.setAttribute("height", to.height || ta.height), this.filterManager = ti;
                            var th = createNS("feGaussianBlur");
                            th.setAttribute("in", "SourceAlpha"), th.setAttribute("result", tr + "_drop_shadow_1"), th.setAttribute("stdDeviation", "0"), this.feGaussianBlur = th, te.appendChild(th);
                            var tl = createNS("feOffset");
                            tl.setAttribute("dx", "25"), tl.setAttribute("dy", "0"), tl.setAttribute("in", tr + "_drop_shadow_1"), tl.setAttribute("result", tr + "_drop_shadow_2"), this.feOffset = tl, te.appendChild(tl);
                            var tp = createNS("feFlood");
                            tp.setAttribute("flood-color", "#00ff00"), tp.setAttribute("flood-opacity", "1"), tp.setAttribute("result", tr + "_drop_shadow_3"), this.feFlood = tp, te.appendChild(tp);
                            var tf = createNS("feComposite");
                            tf.setAttribute("in", tr + "_drop_shadow_3"), tf.setAttribute("in2", tr + "_drop_shadow_2"), tf.setAttribute("operator", "in"), tf.setAttribute("result", tr + "_drop_shadow_4"), te.appendChild(tf);
                            var tc = this.createMergeNode(tr, [tr + "_drop_shadow_4", tn]);
                            te.appendChild(tc)
                        }
                        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(te) {
                            if (te || this.filterManager._mdf) {
                                var ti = this.filterManager.effectElements[0].p.v,
                                    ts = this.filterManager.effectElements[1].p.v,
                                    tr = this.filterManager.effectElements[2].p.v / 100;
                                this.linearFilter.setAttribute("values", linearFilterValue + " " + tr + " 0"), this.matrixFilter.setAttribute("values", ts[0] - ti[0] + " 0 0 0 " + ti[0] + " " + (ts[1] - ti[1]) + " 0 0 0 " + ti[1] + " " + (ts[2] - ti[2]) + " 0 0 0 " + ti[2] + " 0 0 0 1 0")
                            }
                        }, SVGFillFilter.prototype.renderFrame = function(te) {
                            if (te || this.filterManager._mdf) {
                                var ti = this.filterManager.effectElements[2].p.v,
                                    ts = this.filterManager.effectElements[6].p.v;
                                this.matrixFilter.setAttribute("values", "0 0 0 0 " + ti[0] + " 0 0 0 0 " + ti[1] + " 0 0 0 0 " + ti[2] + " 0 0 0 " + ts + " 0")
                            }
                        }, SVGStrokeEffect.prototype.initialize = function() {
                            var te, ti, ts, tr, tn = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                            for (1 === this.filterManager.effectElements[1].p.v ? (tr = this.elem.maskManager.masksProperties.length, ts = 0) : tr = (ts = this.filterManager.effectElements[0].p.v - 1) + 1, (ti = createNS("g")).setAttribute("fill", "none"), ti.setAttribute("stroke-linecap", "round"), ti.setAttribute("stroke-dashoffset", 1); ts < tr; ts += 1) te = createNS("path"), ti.appendChild(te), this.paths.push({
                                p: te,
                                m: ts
                            });
                            if (3 === this.filterManager.effectElements[10].p.v) {
                                var ta = createNS("mask"),
                                    to = createElementID();
                                ta.setAttribute("id", to), ta.setAttribute("mask-type", "alpha"), ta.appendChild(ti), this.elem.globalData.defs.appendChild(ta);
                                var th = createNS("g");
                                for (th.setAttribute("mask", "url(" + getLocationHref() + "#" + to + ")"); tn[0];) th.appendChild(tn[0]);
                                this.elem.layerElement.appendChild(th), this.masker = ta, ti.setAttribute("stroke", "#fff")
                            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                                if (2 === this.filterManager.effectElements[10].p.v)
                                    for (tn = this.elem.layerElement.children || this.elem.layerElement.childNodes; tn.length;) this.elem.layerElement.removeChild(tn[0]);
                                this.elem.layerElement.appendChild(ti), this.elem.layerElement.removeAttribute("mask"), ti.setAttribute("stroke", "#fff")
                            }
                            this.initialized = !0, this.pathMasker = ti
                        }, SVGStrokeEffect.prototype.renderFrame = function(te) {
                            this.initialized || this.initialize();
                            var ti, ts, tr, tn = this.paths.length;
                            for (ti = 0; ti < tn; ti += 1)
                                if (-1 !== this.paths[ti].m && (ts = this.elem.maskManager.viewData[this.paths[ti].m], tr = this.paths[ti].p, (te || this.filterManager._mdf || ts.prop._mdf) && tr.setAttribute("d", ts.lastPath), te || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || ts.prop._mdf)) {
                                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                        var ta = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                            to = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                            th = tr.getTotalLength();
                                        tl = "0 0 0 " + th * ta + " ";
                                        var tl, tp, tf = Math.floor(th * (to - ta) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
                                        for (tp = 0; tp < tf; tp += 1) tl += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                        tl += "0 " + 10 * th + " 0 0"
                                    } else tl = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                                    tr.setAttribute("stroke-dasharray", tl)
                                }
                            if ((te || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (te || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (te || this.filterManager.effectElements[3].p._mdf)) {
                                var tc = this.filterManager.effectElements[3].p.v;
                                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * tc[0]) + "," + bmFloor(255 * tc[1]) + "," + bmFloor(255 * tc[2]) + ")")
                            }
                        }, SVGTritoneFilter.prototype.renderFrame = function(te) {
                            if (te || this.filterManager._mdf) {
                                var ti = this.filterManager.effectElements[0].p.v,
                                    ts = this.filterManager.effectElements[1].p.v,
                                    tr = this.filterManager.effectElements[2].p.v,
                                    tn = tr[0] + " " + ts[0] + " " + ti[0],
                                    ta = tr[1] + " " + ts[1] + " " + ti[1],
                                    to = tr[2] + " " + ts[2] + " " + ti[2];
                                this.feFuncR.setAttribute("tableValues", tn), this.feFuncG.setAttribute("tableValues", ta), this.feFuncB.setAttribute("tableValues", to)
                            }
                        }, SVGProLevelsFilter.prototype.createFeFunc = function(te, ti) {
                            var ts = createNS(te);
                            return ts.setAttribute("type", "table"), ti.appendChild(ts), ts
                        }, SVGProLevelsFilter.prototype.getTableValue = function(te, ti, ts, tr, tn) {
                            for (var ta, to, th = 0, tl = Math.min(te, ti), tp = Math.max(te, ti), tf = Array.call(null, {
                                    length: 256
                                }), tc = 0, tu = tn - tr, tm = ti - te; th <= 256;) to = (ta = th / 256) <= tl ? tm < 0 ? tn : tr : ta >= tp ? tm < 0 ? tr : tn : tr + tu * Math.pow((ta - te) / tm, 1 / ts), tf[tc] = to, tc += 1, th += 256 / 255;
                            return tf.join(" ")
                        }, SVGProLevelsFilter.prototype.renderFrame = function(te) {
                            if (te || this.filterManager._mdf) {
                                var ti, ts = this.filterManager.effectElements;
                                this.feFuncRComposed && (te || ts[3].p._mdf || ts[4].p._mdf || ts[5].p._mdf || ts[6].p._mdf || ts[7].p._mdf) && (ti = this.getTableValue(ts[3].p.v, ts[4].p.v, ts[5].p.v, ts[6].p.v, ts[7].p.v), this.feFuncRComposed.setAttribute("tableValues", ti), this.feFuncGComposed.setAttribute("tableValues", ti), this.feFuncBComposed.setAttribute("tableValues", ti)), this.feFuncR && (te || ts[10].p._mdf || ts[11].p._mdf || ts[12].p._mdf || ts[13].p._mdf || ts[14].p._mdf) && (ti = this.getTableValue(ts[10].p.v, ts[11].p.v, ts[12].p.v, ts[13].p.v, ts[14].p.v), this.feFuncR.setAttribute("tableValues", ti)), this.feFuncG && (te || ts[17].p._mdf || ts[18].p._mdf || ts[19].p._mdf || ts[20].p._mdf || ts[21].p._mdf) && (ti = this.getTableValue(ts[17].p.v, ts[18].p.v, ts[19].p.v, ts[20].p.v, ts[21].p.v), this.feFuncG.setAttribute("tableValues", ti)), this.feFuncB && (te || ts[24].p._mdf || ts[25].p._mdf || ts[26].p._mdf || ts[27].p._mdf || ts[28].p._mdf) && (ti = this.getTableValue(ts[24].p.v, ts[25].p.v, ts[26].p.v, ts[27].p.v, ts[28].p.v), this.feFuncB.setAttribute("tableValues", ti)), this.feFuncA && (te || ts[31].p._mdf || ts[32].p._mdf || ts[33].p._mdf || ts[34].p._mdf || ts[35].p._mdf) && (ti = this.getTableValue(ts[31].p.v, ts[32].p.v, ts[33].p.v, ts[34].p.v, ts[35].p.v), this.feFuncA.setAttribute("tableValues", ti))
                            }
                        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(te) {
                            if (te || this.filterManager._mdf) {
                                if ((te || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), te || this.filterManager.effectElements[0].p._mdf) {
                                    var ti = this.filterManager.effectElements[0].p.v;
                                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * ti[0]), Math.round(255 * ti[1]), Math.round(255 * ti[2])))
                                }
                                if ((te || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), te || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                    var ts = this.filterManager.effectElements[3].p.v,
                                        tr = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                        tn = ts * Math.cos(tr),
                                        ta = ts * Math.sin(tr);
                                    this.feOffset.setAttribute("dx", tn), this.feOffset.setAttribute("dy", ta)
                                }
                            }
                        };
                        var _svgMatteSymbols = [];

                        function SVGMatte3Effect(te, ti, ts) {
                            this.initialized = !1, this.filterManager = ti, this.filterElem = te, this.elem = ts, ts.matteElement = createNS("g"), ts.matteElement.appendChild(ts.layerElement), ts.matteElement.appendChild(ts.transformedElement), ts.baseElement = ts.matteElement
                        }

                        function SVGGaussianBlurEffect(te, ti, ts, tr) {
                            te.setAttribute("x", "-100%"), te.setAttribute("y", "-100%"), te.setAttribute("width", "300%"), te.setAttribute("height", "300%"), this.filterManager = ti;
                            var tn = createNS("feGaussianBlur");
                            tn.setAttribute("result", tr), te.appendChild(tn), this.feGaussianBlur = tn
                        }
                        return SVGMatte3Effect.prototype.findSymbol = function(te) {
                            for (var ti = 0, ts = _svgMatteSymbols.length; ti < ts;) {
                                if (_svgMatteSymbols[ti] === te) return _svgMatteSymbols[ti];
                                ti += 1
                            }
                            return null
                        }, SVGMatte3Effect.prototype.replaceInParent = function(te, ti) {
                            var ts = te.layerElement.parentNode;
                            if (ts) {
                                for (var tr, tn = ts.children, ta = 0, to = tn.length; ta < to && tn[ta] !== te.layerElement;) ta += 1;
                                ta <= to - 2 && (tr = tn[ta + 1]);
                                var th = createNS("use");
                                th.setAttribute("href", "#" + ti), tr ? ts.insertBefore(th, tr) : ts.appendChild(th)
                            }
                        }, SVGMatte3Effect.prototype.setElementAsMask = function(te, ti) {
                            if (!this.findSymbol(ti)) {
                                var ts = createElementID(),
                                    tr = createNS("mask");
                                tr.setAttribute("id", ti.layerId), tr.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(ti);
                                var tn = te.globalData.defs;
                                tn.appendChild(tr);
                                var ta = createNS("symbol");
                                ta.setAttribute("id", ts), this.replaceInParent(ti, ts), ta.appendChild(ti.layerElement), tn.appendChild(ta);
                                var to = createNS("use");
                                to.setAttribute("href", "#" + ts), tr.appendChild(to), ti.data.hd = !1, ti.show()
                            }
                            te.setMatte(ti.layerId)
                        }, SVGMatte3Effect.prototype.initialize = function() {
                            for (var te = this.filterManager.effectElements[0].p.v, ti = this.elem.comp.elements, ts = 0, tr = ti.length; ts < tr;) ti[ts] && ti[ts].data.ind === te && this.setElementAsMask(this.elem, ti[ts]), ts += 1;
                            this.initialized = !0
                        }, SVGMatte3Effect.prototype.renderFrame = function() {
                            this.initialized || this.initialize()
                        }, SVGGaussianBlurEffect.prototype.renderFrame = function(te) {
                            if (te || this.filterManager._mdf) {
                                var ti = .3 * this.filterManager.effectElements[0].p.v,
                                    ts = this.filterManager.effectElements[1].p.v,
                                    tr = 3 == ts ? 0 : ti,
                                    tn = 2 == ts ? 0 : ti;
                                this.feGaussianBlur.setAttribute("stdDeviation", tr + " " + tn);
                                var ta = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                                this.feGaussianBlur.setAttribute("edgeMode", ta)
                            }
                        }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
                    })
                }),
                REACT_LOTTIE_PLAYER_VERSION = "3.5.3",
                LOTTIE_WEB_VERSION = "^5.10.2";

            function parseSrc(te) {
                if ("object" == typeof te) return te;
                try {
                    return JSON.parse(te)
                } catch (te) {}
                try {
                    return new URL(te).toString()
                } catch (te) {}
                return te
            }! function(te) {
                te.Loading = "loading", te.Playing = "playing", te.Paused = "paused", te.Stopped = "stopped", te.Frozen = "frozen", te.Error = "error"
            }(PlayerState || (PlayerState = {})),
            function(te) {
                te.Load = "load", te.InstanceSaved = "instanceSaved", te.Error = "error", te.Ready = "ready", te.Play = "play", te.Pause = "pause", te.Stop = "stop", te.Freeze = "freeze", te.Loop = "loop", te.Complete = "complete", te.Frame = "frame"
            }(PlayerEvent || (PlayerEvent = {}));
            var defaultOptions = {
                    clearCanvas: !1,
                    hideOnTransparent: !0,
                    progressiveLoad: !0
                },
                Player = function(te) {
                    function ti(ti) {
                        var ts = te.call(this, ti) || this;
                        return ts.container = null, ts.unmounted = !1, ts.handleBgChange = function(te) {
                            ts.setState({
                                background: te
                            })
                        }, ts.triggerDownload = function(te, ti) {
                            var ts = document.createElement("a");
                            ts.href = te, ts.download = ti, document.body.appendChild(ts), ts.click(), document.body.removeChild(ts)
                        }, ts.snapshot = function(te) {
                            void 0 === te && (te = !0);
                            var ti, tr = ts.props.id ? ts.props.id : "lottie",
                                tn = document.getElementById(tr);
                            if ("svg" === ts.props.renderer) {
                                if (tn) {
                                    var ta = tn.querySelector("svg");
                                    ta && (ti = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(ta)))
                                }
                                te && ts.triggerDownload(ti, "snapshot.svg")
                            } else if ("canvas" === ts.props.renderer) {
                                if (tn) {
                                    var to = tn.querySelector("canvas");
                                    to && (ti = to.toDataURL("image/png"))
                                }
                                te && ts.triggerDownload(ti, "snapshot.png")
                            }
                            return ti
                        }, "undefined" != typeof window && (window.lottie = lottie), ts.state = {
                            animationData: null,
                            background: "transparent",
                            containerRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(),
                            debug: !0,
                            instance: null,
                            playerState: PlayerState.Loading,
                            seeker: 0
                        }, ts
                    }
                    return __extends(ti, te), ti.getDerivedStateFromProps = function(te, ti) {
                        return __awaiter(this, void 0, void 0, function() {
                            return __generator(this, function(ts) {
                                return te.background !== ti.background ? [2, {
                                    background: te.background
                                }] : [2, null]
                            })
                        })
                    }, ti.prototype.getVersions = function() {
                        return {
                            lottieWebVersion: LOTTIE_WEB_VERSION,
                            lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION
                        }
                    }, ti.prototype.componentDidMount = function() {
                        return __awaiter(this, void 0, void 0, function() {
                            return __generator(this, function(te) {
                                switch (te.label) {
                                    case 0:
                                        return this.unmounted ? [3, 2] : [4, this.createLottie()];
                                    case 1:
                                        te.sent(), te.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, ti.prototype.componentWillUnmount = function() {
                        this.unmounted = !0, this.state.instance && this.state.instance.destroy()
                    }, ti.prototype.componentDidUpdate = function(te) {
                        return __awaiter(this, void 0, void 0, function() {
                            return __generator(this, function(ti) {
                                switch (ti.label) {
                                    case 0:
                                        return this.props.src === te.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
                                    case 1:
                                        ti.sent(), ti.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, ti.prototype.render = function() {
                        var te = this,
                            ti = this.props,
                            ts = ti.children,
                            tr = ti.loop,
                            tn = ti.style,
                            ta = ti.onBackgroundChange,
                            to = ti.className,
                            th = this.state,
                            tl = th.animationData,
                            tp = th.instance,
                            tf = th.playerState,
                            tc = th.seeker,
                            tu = th.debug,
                            tm = th.background;
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-player-container"
                        }, this.state.playerState === PlayerState.Error ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-error"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
                            "aria-label": "error-symbol",
                            role: "img"
                        }, "⚠️")) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            id: this.props.id ? this.props.id : "lottie",
                            ref: function(ti) {
                                return te.container = ti
                            },
                            style: __assign({
                                background: tm,
                                margin: "0 auto",
                                outline: "none",
                                overflow: "hidden"
                            }, tn),
                            className: to
                        }), react__WEBPACK_IMPORTED_MODULE_0__.Children.map(ts, function(ti) {
                            return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(ti) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(ti, {
                                animationData: tl,
                                background: tm,
                                debug: tu,
                                instance: tp,
                                loop: tr,
                                pause: function() {
                                    return te.pause()
                                },
                                play: function() {
                                    return te.play()
                                },
                                playerState: tf,
                                seeker: tc,
                                setBackground: function(ti) {
                                    te.setState({
                                        background: ti
                                    }), "function" == typeof ta && ta(ti)
                                },
                                setSeeker: function(ti, ts) {
                                    return te.setSeeker(ti, ts)
                                },
                                stop: function() {
                                    return te.stop()
                                },
                                toggleDebug: function() {
                                    return te.toggleDebug()
                                },
                                setLoop: function(ti) {
                                    return te.setLoop(ti)
                                },
                                colorChangedEvent: function(ti) {
                                    te.handleBgChange(ti)
                                },
                                snapshot: function() {
                                    te.snapshot()
                                }
                            }) : null
                        }))
                    }, ti.prototype.toggleDebug = function() {
                        this.setState({
                            debug: !this.state.debug
                        })
                    }, ti.prototype.createLottie = function() {
                        return __awaiter(this, void 0, void 0, function() {
                            var te, ti, ts, tr, tn, ta, to, th, tl, tp, tf, tc, tu, tm, td = this;
                            return __generator(this, function(tg) {
                                switch (tg.label) {
                                    case 0:
                                        if (ti = (te = this.props).autoplay, ts = te.direction, tr = te.loop, tn = te.lottieRef, ta = te.renderer, to = te.speed, th = te.src, tl = te.background, tp = te.rendererSettings, tf = te.hover, tc = this.state.instance, !th || !this.container) return [2];
                                        tg.label = 1;
                                    case 1:
                                        return tg.trys.push([1, 5, , 6]), "string" != typeof(tu = parseSrc(th)) ? [3, 4] : [4, fetch(tu).catch(function() {
                                            throw td.setState({
                                                playerState: PlayerState.Error
                                            }), td.triggerEvent(PlayerEvent.Error), Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                                        })];
                                    case 2:
                                        return [4, tg.sent().json().catch(function() {
                                            throw td.setState({
                                                playerState: PlayerState.Error
                                            }), td.triggerEvent(PlayerEvent.Error), Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                                        })];
                                    case 3:
                                        tu = tg.sent(), tg.label = 4;
                                    case 4:
                                        return tc && tc.destroy(), tm = lottie.loadAnimation({
                                            rendererSettings: tp || defaultOptions,
                                            animationData: tu,
                                            autoplay: ti || !1,
                                            container: this.container,
                                            loop: tr || !1,
                                            renderer: ta
                                        }), to && tm.setSpeed(to), this.setState({
                                            animationData: tu
                                        }), this.setState({
                                            instance: tm
                                        }, function() {
                                            td.triggerEvent(PlayerEvent.InstanceSaved), "function" == typeof tn && tn(tm), ti && td.play()
                                        }), tm.addEventListener("enterFrame", function() {
                                            td.triggerEvent(PlayerEvent.Frame), td.setState({
                                                seeker: Math.floor(tm.currentFrame)
                                            })
                                        }), tm.addEventListener("DOMLoaded", function() {
                                            td.triggerEvent(PlayerEvent.Load)
                                        }), tm.addEventListener("data_ready", function() {
                                            td.triggerEvent(PlayerEvent.Ready)
                                        }), tm.addEventListener("data_failed", function() {
                                            td.setState({
                                                playerState: PlayerState.Error
                                            }), td.triggerEvent(PlayerEvent.Error)
                                        }), tm.addEventListener("loopComplete", function() {
                                            td.triggerEvent(PlayerEvent.Loop)
                                        }), tm.addEventListener("complete", function() {
                                            td.triggerEvent(PlayerEvent.Complete), td.setState({
                                                playerState: PlayerState.Paused
                                            }), td.props.keepLastFrame && !td.props.loop || td.setSeeker(0)
                                        }), this.container && (this.container.addEventListener("mouseenter", function() {
                                            tf && td.state.playerState !== PlayerState.Playing && (td.props.keepLastFrame && td.stop(), td.play())
                                        }), this.container.addEventListener("mouseleave", function() {
                                            tf && td.state.playerState === PlayerState.Playing && td.stop()
                                        })), to && this.setPlayerSpeed(to), ts && this.setPlayerDirection(ts), tl && this.setState({
                                            background: tl
                                        }), [3, 6];
                                    case 5:
                                        return tg.sent(), this.setState({
                                            playerState: PlayerState.Error
                                        }), this.triggerEvent(PlayerEvent.Error), [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }, ti.prototype.play = function() {
                        var te = this.state.instance;
                        te && (this.triggerEvent(PlayerEvent.Play), te.play(), this.setState({
                            playerState: PlayerState.Playing
                        }))
                    }, ti.prototype.pause = function() {
                        var te = this.state.instance;
                        te && (this.triggerEvent(PlayerEvent.Pause), te.pause(), this.setState({
                            playerState: PlayerState.Paused
                        }))
                    }, ti.prototype.stop = function() {
                        var te = this.state.instance;
                        te && (this.triggerEvent(PlayerEvent.Stop), te.stop(), this.setState({
                            playerState: PlayerState.Stopped
                        }))
                    }, ti.prototype.setPlayerSpeed = function(te) {
                        var ti = this.state.instance;
                        ti && ti.setSpeed(te)
                    }, ti.prototype.setPlayerDirection = function(te) {
                        var ti = this.state.instance;
                        ti && ti.setDirection(te)
                    }, ti.prototype.setSeeker = function(te, ti) {
                        void 0 === ti && (ti = !1);
                        var ts = this.state,
                            tr = ts.instance,
                            tn = ts.playerState;
                        tr && (ti && tn === PlayerState.Playing ? tr.goToAndPlay(te, !0) : (tr.goToAndStop(te, !0), this.triggerEvent(PlayerEvent.Pause), this.setState({
                            playerState: PlayerState.Paused
                        })))
                    }, ti.prototype.setLoop = function(te) {
                        var ti = this.state.instance;
                        ti && (ti.loop = te, this.setState({
                            instance: ti
                        }))
                    }, ti.prototype.triggerEvent = function(te) {
                        var ti = this.props.onEvent;
                        ti && ti(te)
                    }, ti.defaultProps = {
                        loop: !1
                    }, ti
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

            function styleInject(te, ti) {
                void 0 === ti && (ti = {});
                var ts = ti.insertAt;
                if (te && "undefined" != typeof document) {
                    var tr = document.head || document.getElementsByTagName("head")[0],
                        tn = document.createElement("style");
                    tn.type = "text/css", "top" === ts && tr.firstChild ? tr.insertBefore(tn, tr.firstChild) : tr.appendChild(tn), tn.styleSheet ? tn.styleSheet.cssText = te : tn.appendChild(document.createTextNode(te))
                }
            }
            var css_248z = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n",
                stylesheet = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n";
            styleInject(css_248z);
            var ColorPicker = function(te) {
                    function ti() {
                        var ti = null !== te && te.apply(this, arguments) || this;
                        return ti.state = {
                            red: 0,
                            green: 0,
                            blue: 0,
                            rgba: null,
                            hex: "#000000",
                            colorComponents: []
                        }, ti.handleChange = function(te, ts) {
                            if ("r" === te) {
                                var tr = "#" + (256 | ts).toString(16).slice(1) + (256 | ti.state.green).toString(16).slice(1) + (256 | ti.state.blue).toString(16).slice(1);
                                ti.setState({
                                    hex: tr
                                })
                            } else "g" === te ? (tr = "#" + (256 | ti.state.red).toString(16).slice(1) + (256 | ts).toString(16).slice(1) + (256 | ti.state.blue).toString(16).slice(1), ti.setState({
                                hex: tr
                            })) : "b" === te && (tr = "#" + (256 | ti.state.red).toString(16).slice(1) + (256 | ti.state.green).toString(16).slice(1) + (256 | ts).toString(16).slice(1), ti.setState({
                                hex: tr
                            }))
                        }, ti.parseColor = function(te) {
                            var ts;
                            if ("string" == typeof te) {
                                if ("#" === te[0]) {
                                    var tr = 4 === te.length ? [te.slice(1, 2), te.slice(2, 3), te.slice(3, 4)].map(function(te) {
                                        return parseInt("" + te + te, 16)
                                    }) : [te.slice(1, 3), te.slice(3, 5), te.slice(5, 7)].map(function(te) {
                                        return parseInt(te, 16)
                                    });
                                    ti.setState({
                                        colorComponents: tr
                                    })
                                } else te.startsWith("rgb") && void 0 !== (tr = null === (ts = te.match(/\d+/g)) || void 0 === ts ? void 0 : ts.map(function(te) {
                                    return parseInt(te)
                                })) && ti.setState({
                                    colorComponents: tr
                                });
                                ti.state.colorComponents.length && (ti.setState({
                                    red: ti.state.colorComponents[0]
                                }), ti.setState({
                                    green: ti.state.colorComponents[1]
                                }), ti.setState({
                                    blue: ti.state.colorComponents[2]
                                }))
                            }
                        }, ti
                    }
                    return __extends(ti, te), ti.prototype.componentDidUpdate = function(te, ti) {
                        return this.props.colorChangedEvent && this.state.hex !== ti.hex && this.props.colorChangedEvent(this.state.hex), !0
                    }, ti.prototype.render = function() {
                        var te = this;
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-picker"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-selectors"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-component"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Red"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            type: "range",
                            min: "0",
                            max: "255",
                            value: this.state.red,
                            onChange: function(ti) {
                                te.setState({
                                    red: ti.target.value
                                }), te.handleChange("r", ti.target.value)
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "number",
                            min: "0",
                            max: "255",
                            value: this.state.red,
                            onChange: function(ti) {
                                te.setState({
                                    red: ti.target.value
                                }), te.handleChange("r", ti.target.value)
                            }
                        })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-component"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Green"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            type: "range",
                            min: "0",
                            max: "255",
                            value: this.state.green,
                            onChange: function(ti) {
                                te.setState({
                                    green: ti.target.value
                                }), te.handleChange("g", ti.target.value)
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "number",
                            min: "0",
                            max: "255",
                            value: this.state.green,
                            onChange: function(ti) {
                                te.setState({
                                    green: ti.target.value
                                }), te.handleChange("g", ti.target.value)
                            }
                        })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-component"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Blue"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            type: "range",
                            min: "0",
                            max: "255",
                            value: this.state.blue,
                            onChange: function(ti) {
                                te.setState({
                                    blue: ti.target.value
                                }), te.handleChange("b", ti.target.value)
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "number",
                            min: "0",
                            max: "255",
                            value: this.state.blue,
                            onChange: function(ti) {
                                te.setState({
                                    blue: ti.target.value
                                }), te.handleChange("b", ti.target.value)
                            }
                        }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-preview"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-preview",
                            style: {
                                background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "text",
                            value: this.state.hex,
                            onChange: function(ti) {
                                te.setState({
                                    hex: ti.target.value
                                }), te.parseColor(ti.target.value)
                            }
                        }))))
                    }, ti
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                Popover = function(te) {
                    var ti = te.children,
                        ts = te.icon,
                        tr = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                        tn = tr[0],
                        ta = tr[1],
                        to = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                        th = to[0],
                        tl = to[1],
                        tp = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                        tf = tp[0],
                        tc = tp[1],
                        tu = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
                        tm = tu[0],
                        td = tu[1];
                    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
                        if (tn && th) {
                            var te = tn.getBoundingClientRect(),
                                ti = th.getBoundingClientRect();
                            tc(te.left + ti.width > window.innerWidth ? -1 : 0)
                        }
                    }, [tf, th, tn]), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        className: "lf-popover",
                        onMouseOver: function() {
                            td(!0)
                        },
                        onMouseLeave: function() {
                            td(!1)
                        },
                        ref: function(te) {
                            ta(te)
                        }
                    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        className: " lf-player-btn"
                    }, ts), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        className: "lf-popover-content",
                        ref: function(te) {
                            tl(te)
                        },
                        style: {
                            bottom: "22px",
                            right: "0px",
                            zIndex: 2,
                            visibility: tm ? "visible" : "hidden"
                        }
                    }, ti))
                },
                Seeker = function(te) {
                    function ti(ti) {
                        var ts = te.call(this, ti) || this;
                        return ts.inputRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), ts.handleChange = function() {
                            return function(te) {
                                var ti = Math.floor(te.target.value / 100 * ts.props.max);
                                ts.props.onChange(ti)
                            }
                        }, ts.state = {
                            value: 0
                        }, ts
                    }
                    return __extends(ti, te), ti.prototype.render = function() {
                        var te = this.props.value / this.props.max * 100,
                            ti = {
                                backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + te + "%, rgba(15, 204, 206, 0.4)), color-stop(" + te + "%, #DAE1E7))"
                            },
                            ts = {
                                position: "absolute",
                                left: 0,
                                marginTop: "8px",
                                width: "20px",
                                display: "block",
                                border: "0px",
                                backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                                color: this.props.darkTheme ? "#B9B9B9" : "#555",
                                padding: "2px",
                                textAlign: "center",
                                borderRadius: "3px",
                                fontSize: "8px",
                                fontWeight: "bold"
                            },
                            tr = {
                                position: "absolute",
                                right: 0,
                                marginTop: "8px",
                                width: "20px",
                                display: "block",
                                border: "0px",
                                backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                                color: this.props.darkTheme ? "#B9B9B9" : "#555",
                                padding: "2px",
                                textAlign: "center",
                                borderRadius: "3px",
                                fontSize: "8px",
                                fontWeight: "bold"
                            };
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                                marginRight: "5px",
                                marginLeft: "5px",
                                position: "relative"
                            }
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            ref: this.inputRef,
                            id: "track",
                            className: "lf-progress",
                            name: "progress",
                            "aria-label": "progress",
                            type: "range",
                            min: "0",
                            max: "100",
                            step: "0.1",
                            value: te,
                            onInput: this.handleChange(),
                            onChange: this.handleChange(),
                            style: ti
                        }), this.props.showLabels && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between"
                            }
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: ts
                        }, this.props.min), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: tr
                        }, this.props.max)))
                    }, ti
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                ControlButtonStyle = {
                    display: "inline-flex",
                    cursor: "pointer"
                },
                Controls = function(te) {
                    function ti(ti) {
                        var ts = te.call(this, ti) || this;
                        return ts.state = {
                            activeFrame: 0,
                            mouseDown: !1
                        }, ts
                    }
                    return __extends(ti, te), ti.prototype.render = function() {
                        var te = this,
                            ti = this.props,
                            ts = ti.instance,
                            tr = ti.playerState,
                            tn = ti.seeker,
                            ta = ti.setLoop,
                            to = ti.setSeeker,
                            th = ti.play,
                            tl = ti.pause,
                            tp = ti.stop,
                            tf = ti.visible,
                            tc = ti.buttons;
                        if (!ts || !tf) return null;
                        var tu = !tc || tc.includes("play"),
                            tm = !tc || tc.includes("stop"),
                            td = !tc || tc.includes("repeat"),
                            tg = !tc || tc.includes("frame"),
                            ty = !tc || tc.includes("background"),
                            tv = !tc || tc.includes("snapshot"),
                            tb = {
                                width: 14,
                                height: 14,
                                viewBox: "0 0 24 24"
                            },
                            tx = Math.round(ts.currentFrame);
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-player-controls",
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                height: "60px",
                                alignItems: "center",
                                backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff",
                                paddingLeft: "10px",
                                paddingRight: "10px"
                            }
                        }, tu && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            role: "button",
                            "aria-label": tr === PlayerState.Playing ? PlayerEvent.Pause : PlayerEvent.Play,
                            tabIndex: 0,
                            onClick: function() {
                                tr === PlayerState.Playing ? "function" == typeof tl && tl() : "function" == typeof th && th()
                            },
                            onKeyDown: function() {
                                tr === PlayerState.Playing ? "function" == typeof tl && tl() : "function" == typeof th && th()
                            },
                            className: "lf-player-btn",
                            style: ControlButtonStyle
                        }, tr === PlayerState.Playing ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, tb), react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                            height: "22.9",
                            rx: "1.9",
                            width: "7.6",
                            x: "14",
                            y: ".5"
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                            height: "22.9",
                            rx: "1.9",
                            width: "7.6",
                            x: "2",
                            y: ".5"
                        })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, tb), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"
                        }))), tm && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            tabIndex: 0,
                            role: "button",
                            "aria-label": PlayerEvent.Stop,
                            onClick: function() {
                                return tp && tp()
                            },
                            onKeyDown: function() {
                                return tp && tp()
                            },
                            className: tr === PlayerState.Stopped ? "lf-player-btn active" : "lf-player-btn",
                            style: ControlButtonStyle
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, tb), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333\n            22H3.667A1.67 1.67 0 0 1 2 20.333z"
                        }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Seeker, {
                            min: 0,
                            step: 1,
                            max: ts ? ts.totalFrames : 1,
                            value: tn || 0,
                            onChange: function(ti) {
                                to && te.setState({
                                    activeFrame: ti
                                }, function() {
                                    to(ti, !1)
                                })
                            },
                            onChangeEnd: function(ti) {
                                to && te.setState({
                                    activeFrame: ti
                                }, function() {
                                    to(ti, !1)
                                })
                            },
                            showLabels: this.props.showLabels,
                            darkTheme: this.props.darkTheme
                        }), tg && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            role: "button",
                            className: "lf-player-btn-container"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            style: {
                                outline: "none",
                                border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid",
                                borderRadius: "3px",
                                width: "40px",
                                textAlign: "center",
                                backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff",
                                color: this.props.darkTheme ? "#B9B9B9" : "#999",
                                fontSize: "0.7rem",
                                padding: "0",
                                fontFamily: "inherit"
                            },
                            type: "text",
                            value: tx,
                            readOnly: !0
                        })), td && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            role: "button",
                            "aria-label": PlayerEvent.Loop,
                            tabIndex: 0,
                            onClick: function() {
                                ts && ta && ta(!ts.loop)
                            },
                            onKeyDown: function() {
                                ts && ta && ta(!ts.loop)
                            },
                            className: ts.loop ? "lf-player-btn active" : "lf-player-btn",
                            style: ControlButtonStyle
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, tb), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116\n            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0\n            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025\n            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0\n            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115\n            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z",
                            stroke: "#8795A1",
                            strokeWidth: ".26"
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M11.1482\n            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898\n            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347\n            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014\n            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453\n            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368\n            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671\n            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442\n            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z",
                            fill: "#8795A1",
                            stroke: "#8795A1",
                            strokeWidth: ".26"
                        }))), ty && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popover, {
                            icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, tb), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                d: "M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0\n            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1\n            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0\n            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6\n            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z"
                            }))
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            slot: "content",
                            className: "lf-popover popover-background"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorPicker, {
                            colorChangedEvent: this.props.colorChangedEvent
                        }))), tv && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popover, {
                            icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, tb), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                clipRule: "evenodd",
                                d: "M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983\n              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0\n              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z",
                                fillRule: "evenodd"
                            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z"
                            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
                                cx: "7.444",
                                cy: "6.513",
                                r: "2.032"
                            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                d: "M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0\n              01-.803.804H9.562a1.061 1.061 0 100 2.123z",
                                stroke: "#8795a1",
                                strokeWidth: ".215"
                            }))
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            slot: "content",
                            className: "lf-popover lf-popover-snapshot",
                            onWheel: function(te) {
                                to && to(tx + (te.deltaY > 0 ? -1 : 1), !1)
                            }
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Frame ", tx), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                cursor: "pointer",
                                color: "#0FCCCE"
                            },
                            onClick: this.props.snapshot
                        }, "Download SVG"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                cursor: "pointer",
                                color: "#0FCCCE"
                            },
                            onClick: this.props.snapshot
                        }, "Download PNG"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
                            className: "lf-note"
                        }, "Scroll with mousewheel to find exact frame"))))
                    }, ti
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component)
        }
    }
]);
(function(exports) {
    "use strict";
    typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" && self;
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    var browserPolyfill = {
        exports: {}
    };
    (function(module, exports2) {
        (function(global2, factory) {
            factory(module);
        })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" && self, (function(module2) {
            if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
            if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
                const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
                const wrapAPIs = extensionAPIs => {
                    const apiMetadata = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: false
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: true
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class DefaultWeakMap extends WeakMap {
                        constructor(createItem, items = void 0) {
                            super(items);
                            this.createItem = createItem;
                        }
                        get(key) {
                            if (!this.has(key)) this.set(key, this.createItem(key));
                            return super.get(key);
                        }
                    }
                    const isThenable = value => value && typeof value === "object" && typeof value.then === "function";
                    const makeCallback = (promise, metadata) => (...callbackArgs) => {
                        if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message)); else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]); else promise.resolve(callbackArgs);
                    };
                    const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
                    const wrapAsyncFunction = (name, metadata) => function(target, ...args) {
                        if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                        if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                        return new Promise(((resolve, reject) => {
                            if (metadata.fallbackToNoCallback) try {
                                target[name](...args, makeCallback({
                                    resolve: resolve,
                                    reject: reject
                                }, metadata));
                            } catch (cbError) {
                                console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                                target[name](...args);
                                metadata.fallbackToNoCallback = false;
                                metadata.noCallback = true;
                                resolve();
                            } else if (metadata.noCallback) {
                                target[name](...args);
                                resolve();
                            } else target[name](...args, makeCallback({
                                resolve: resolve,
                                reject: reject
                            }, metadata));
                        }));
                    };
                    const wrapMethod = (target, method, wrapper) => new Proxy(method, {
                        apply(targetMethod, thisObj, args) {
                            return wrapper.call(thisObj, target, ...args);
                        }
                    });
                    let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
                    const wrapObject = (target, wrappers = {}, metadata = {}) => {
                        let cache = Object.create(null);
                        let handlers = {
                            has(proxyTarget2, prop) {
                                return prop in target || prop in cache;
                            },
                            get(proxyTarget2, prop, receiver) {
                                if (prop in cache) return cache[prop];
                                if (!(prop in target)) return;
                                let value = target[prop];
                                if (typeof value === "function") if (typeof wrappers[prop] === "function") value = wrapMethod(target, target[prop], wrappers[prop]); else if (hasOwnProperty(metadata, prop)) {
                                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                    value = wrapMethod(target, target[prop], wrapper);
                                } else value = value.bind(target); else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) value = wrapObject(value, wrappers[prop], metadata[prop]); else if (hasOwnProperty(metadata, "*")) value = wrapObject(value, wrappers[prop], metadata["*"]); else {
                                    Object.defineProperty(cache, prop, {
                                        configurable: true,
                                        enumerable: true,
                                        get() {
                                            return target[prop];
                                        },
                                        set(value2) {
                                            target[prop] = value2;
                                        }
                                    });
                                    return value;
                                }
                                cache[prop] = value;
                                return value;
                            },
                            set(proxyTarget2, prop, value, receiver) {
                                if (prop in cache) cache[prop] = value; else target[prop] = value;
                                return true;
                            },
                            defineProperty(proxyTarget2, prop, desc) {
                                return Reflect.defineProperty(cache, prop, desc);
                            },
                            deleteProperty(proxyTarget2, prop) {
                                return Reflect.deleteProperty(cache, prop);
                            }
                        };
                        let proxyTarget = Object.create(target);
                        return new Proxy(proxyTarget, handlers);
                    };
                    const wrapEvent = wrapperMap => ({
                        addListener(target, listener2, ...args) {
                            target.addListener(wrapperMap.get(listener2), ...args);
                        },
                        hasListener(target, listener2) {
                            return target.hasListener(wrapperMap.get(listener2));
                        },
                        removeListener(target, listener2) {
                            target.removeListener(wrapperMap.get(listener2));
                        }
                    });
                    const onRequestFinishedWrappers = new DefaultWeakMap((listener2 => {
                        if (typeof listener2 !== "function") return listener2;
                        return function(req) {
                            const wrappedReq = wrapObject(req, {}, {
                                getContent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            });
                            listener2(wrappedReq);
                        };
                    }));
                    const onMessageWrappers = new DefaultWeakMap((listener2 => {
                        if (typeof listener2 !== "function") return listener2;
                        return function(message, sender, sendResponse) {
                            let didCallSendResponse = false;
                            let wrappedSendResponse;
                            let sendResponsePromise = new Promise((resolve => {
                                wrappedSendResponse = function(response) {
                                    didCallSendResponse = true;
                                    resolve(response);
                                };
                            }));
                            let result;
                            try {
                                result = listener2(message, sender, wrappedSendResponse);
                            } catch (err) {
                                result = Promise.reject(err);
                            }
                            const isResultThenable = result !== true && isThenable(result);
                            if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                            const sendPromisedResult = promise => {
                                promise.then((msg => {
                                    sendResponse(msg);
                                }), (error => {
                                    let message2;
                                    if (error && (error instanceof Error || typeof error.message === "string")) message2 = error.message; else message2 = "An unexpected error occurred";
                                    sendResponse({
                                        __mozWebExtensionPolyfillReject__: true,
                                        message: message2
                                    });
                                })).catch((err => {
                                    console.error("Failed to send onMessage rejected reply", err);
                                }));
                            };
                            if (isResultThenable) sendPromisedResult(result); else sendPromisedResult(sendResponsePromise);
                            return true;
                        };
                    }));
                    const wrappedSendMessageCallback = ({reject: reject, resolve: resolve}, reply) => {
                        if (extensionAPIs.runtime.lastError) if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve(); else reject(new Error(extensionAPIs.runtime.lastError.message)); else if (reply && reply.__mozWebExtensionPolyfillReject__) reject(new Error(reply.message)); else resolve(reply);
                    };
                    const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
                        if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                        if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                        return new Promise(((resolve, reject) => {
                            const wrappedCb = wrappedSendMessageCallback.bind(null, {
                                resolve: resolve,
                                reject: reject
                            });
                            args.push(wrappedCb);
                            apiNamespaceObj.sendMessage(...args);
                        }));
                    };
                    const staticWrappers = {
                        devtools: {
                            network: {
                                onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                            }
                        },
                        runtime: {
                            onMessage: wrapEvent(onMessageWrappers),
                            onMessageExternal: wrapEvent(onMessageWrappers),
                            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    };
                    const settingMetadata = {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    };
                    apiMetadata.privacy = {
                        network: {
                            "*": settingMetadata
                        },
                        services: {
                            "*": settingMetadata
                        },
                        websites: {
                            "*": settingMetadata
                        }
                    };
                    return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
                };
                module2.exports = wrapAPIs(chrome);
            } else module2.exports = globalThis.browser;
        }));
    })(browserPolyfill);
    var browserPolyfillExports = browserPolyfill.exports;
    const browser = getDefaultExportFromCjs(browserPolyfillExports);
    var RedditObjectKind = (RedditObjectKind2 => {
        RedditObjectKind2["comment"] = "t1";
        RedditObjectKind2["account"] = "t2";
        RedditObjectKind2["link"] = "t3";
        RedditObjectKind2["message"] = "t4";
        RedditObjectKind2["subreddit"] = "t5";
        RedditObjectKind2["award"] = "t6";
        return RedditObjectKind2;
    })(RedditObjectKind || {});
    function mapObjToQueryStr(params) {
        return Object.entries(params).map((pair => pair.join("="))).join("&");
    }
    const redditUrl = "https://reddit.com";
    const redditOldUrl = "https://old.reddit.com";
    function getRedditBaseUrl(urlType, customUrl) {
        switch (urlType) {
          case "old":
            return redditOldUrl;

          case "custom":
            return customUrl;

          default:
            return redditUrl;
        }
    }
    const generateId = () => Math.random().toString(36).substring(2, 6) + (new Date).getTime().toString(36);
    function constructUrl(endpoint, opts) {
        try {
            return new URL(endpoint, getRedditBaseUrl(opts.redditUrlType, opts.customRedditUrl)).href;
        } catch (error) {
            return new URL(endpoint, redditUrl).href;
        }
    }
    function getSubredditUrl(subreddit, opts) {
        const endpoint = `/r/${subreddit}/new`;
        return constructUrl(endpoint, opts);
    }
    function getInboxUrl(opts) {
        const endpoint = "/message/inbox";
        return constructUrl(endpoint, opts);
    }
    function getSearchQueryUrl(query = "", subreddit = "", opts) {
        const endpoint = subreddit ? `/r/${subreddit}/search?sort=new&restrict_sr=on&q=${query}` : `/search?q=${query}&sort=new`;
        return constructUrl(endpoint, opts);
    }
    function getUserProfileUrl(username, type = "overview", opts) {
        let endpoint = `/user/${username}`;
        if (type === "comments") endpoint += "/comments";
        if (type === "submitted") endpoint += opts.redditUrlType === "old" ? "/submitted" : "/posts";
        return constructUrl(endpoint, opts);
    }
    function filterKeys(allowedKeys, obj = {}) {
        return allowedKeys.reduce(((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }), {});
    }
    function filterPostDataProperties(post) {
        var _a, _b;
        if (!(post == null ? void 0 : post.data)) return post;
        const filterList = [ "author", "created_utc", "created", "id", "link_flair_text", "name", "over_18", "permalink", "preview", "selftext", "subreddit", "title", "url", "is_gallery", "media_metadata" ];
        const data = filterKeys(filterList, post.data);
        if ((((_a = data.selftext) == null ? void 0 : _a.length) || 0) > 400) data.selftext = (_b = data.selftext) == null ? void 0 : _b.slice(0, 400);
        return {
            ...post,
            data: data
        };
    }
    function getAccountByScope(accounts, scopeList) {
        const fit = Object.values(accounts || {}).filter((ac => {
            var _a;
            if (scopeList == null ? void 0 : scopeList.length) {
                if (!((_a = ac.auth.scope) == null ? void 0 : _a.length)) return false;
                const acScopes = ac.auth.scope.split(" ");
                if (!scopeList.every((s => acScopes.includes(s)))) return false;
            }
            return ac.auth.refreshToken;
        }));
        return fit.length ? fit[0] : null;
    }
    function idToUserIdx(id) {
        const indexNum = Number.parseInt(id.split("_")[1]);
        if (!Number.isNaN(indexNum)) return indexNum;
        return null;
    }
    const DEFAULT_OPTIONS = {
        updateInterval: 60,
        waitTimeout: 2,
        limit: 25,
        theme: "auto",
        expandWithItems: 5,
        delPostAfterBodyClick: false,
        delListAfterOpening: false,
        hideEmptyGroups: false,
        notificationSoundId: null,
        pollUserInterval: 10 * 60,
        redditUrlType: "new",
        customRedditUrl: "https://troddit.com/",
        onBadgeClick: "popup"
    };
    const dataFields = {
        mail: {},
        accounts: {},
        options: DEFAULT_OPTIONS,
        queries: {},
        queriesList: [],
        subredditList: [],
        subreddits: {},
        pinnedPostList: [],
        notifications: [],
        usersList: [],
        showReddixPromo: true
    };
    function concatUnique(arr1, arr2, getId) {
        const result = [];
        if (!arr1) arr1 = [];
        if (!arr2) arr2 = [];
        const ids = new Set;
        [ ...arr1, ...arr2 ].forEach((item => {
            if (ids.has(getId(item))) return;
            ids.add(getId(item));
            result.push(item);
        }));
        return result;
    }
    function filterUnreadMessages(unreadMessages, mail) {
        if (!unreadMessages) return;
        if (!mail.messages) mail.messages = [];
        const prevUnread = mail.messages;
        const ids = new Set;
        mail.messages.forEach((m => ids.add(m.data.id)));
        unreadMessages = unreadMessages.filter((m => !ids.has(m.data.id)));
        mail.messages = [ ...unreadMessages, ...prevUnread ];
        if (unreadMessages[0]) mail.lastPostCreated = unreadMessages[0].data.created;
    }
    const storage = {
        setLocal(items) {
            return browser.storage.local.set(items);
        },
        getLocal(keys) {
            return browser.storage.local.get(keys);
        },
        async getMail() {
            const {mail: mail} = await storage.getLocal({
                mail: {}
            });
            return mail;
        },
        async getAccounts() {
            const {accounts: accounts} = await storage.getLocal({
                accounts: {}
            });
            return accounts;
        },
        async getOptions() {
            const {options: options} = await storage.getLocal({
                options: DEFAULT_OPTIONS
            });
            return options;
        },
        async getPinnedPostList() {
            const {pinnedPostList: pinnedPostList} = await storage.getLocal({
                pinnedPostList: []
            });
            return pinnedPostList;
        },
        async getSubredditList() {
            const {subredditList: subredditList} = await storage.getLocal({
                subredditList: []
            });
            return subredditList;
        },
        async getSubredditData() {
            const {subreddits: subreddits} = await storage.getLocal({
                subreddits: {}
            });
            return subreddits;
        },
        async getQueriesList() {
            const {queriesList: queriesList} = await storage.getLocal({
                queriesList: []
            });
            return queriesList;
        },
        async getQueriesData() {
            const {queries: queries} = await storage.getLocal({
                queries: {}
            });
            return queries;
        },
        async getUsersList() {
            const {usersList: usersList} = await storage.getLocal({
                usersList: []
            });
            return usersList;
        },
        async getNotificationsData() {
            const {notifications: notifications} = await storage.getLocal({
                notifications: []
            });
            return notifications;
        },
        async getAllData() {
            return storage.getLocal(dataFields);
        },
        async getExportData(accounts = false) {
            var _a;
            const data = await storage.getLocal({
                ...accounts ? {
                    accounts: {}
                } : {},
                options: DEFAULT_OPTIONS,
                queriesList: [],
                subredditList: [],
                usersList: [],
                pinnedPostList: []
            });
            if (data.accounts) Object.values(data.accounts).forEach((acc => {
                acc.mail = {
                    messages: []
                };
            }));
            (_a = data.usersList) == null ? void 0 : _a.forEach((u => {
                u.data = [];
            }));
            return data;
        },
        async importData(data) {
            const sData = await storage.getAllData();
            if (data.options) {
                data.options.limit = DEFAULT_OPTIONS.limit;
                data.options.waitTimeout = DEFAULT_OPTIONS.waitTimeout;
                data.options.updateInterval = Math.max(2, Number.parseInt(data.options.updateInterval) || DEFAULT_OPTIONS.updateInterval);
                sData.options = {
                    ...sData.options,
                    ...data.options
                };
            }
            if (data.accounts) {
                Object.values(data.accounts).forEach((acc => {
                    acc.mail = {
                        messages: [],
                        lastUpdate: 0
                    };
                }));
                sData.accounts = {
                    ...sData.accounts || {},
                    ...data.accounts
                };
            }
            if (data.subredditList && Array.isArray(data.subredditList)) sData.subredditList = concatUnique(sData.subredditList, data.subredditList, (i => i.id));
            if (data.queriesList && Array.isArray(data.queriesList)) sData.queriesList = concatUnique(sData.queriesList, data.queriesList, (i => i.id));
            if (data.pinnedPostList && Array.isArray(data.pinnedPostList)) sData.pinnedPostList = concatUnique(sData.pinnedPostList, data.pinnedPostList, (i => i.data.id));
            if (data.usersList && Array.isArray(data.usersList)) sData.usersList = concatUnique(sData.usersList || [], data.usersList, (i => i.username));
            await storage.setLocal(sData);
        },
        async saveAccounts(accounts) {
            return storage.setLocal({
                accounts: accounts
            });
        },
        async saveAuthData({id: id, data: data}) {
            const accounts = await storage.getAccounts();
            if (!accounts[id]) accounts[id] = {
                id: id,
                auth: {},
                checkMail: true,
                mailNotify: true,
                mail: {
                    messages: []
                }
            };
            const auth2 = accounts[id].auth;
            if (data) {
                auth2.accessToken = data.access_token;
                auth2.refreshToken = data.refresh_token;
                auth2.scope = data.scope || "";
                auth2.error = "";
                const expiresInRelative = +data.expires_in || 0;
                auth2.expiresIn = expiresInRelative && (new Date).getTime() + expiresInRelative * 1e3;
            }
            return storage.setLocal({
                accounts: accounts
            });
        },
        async saveMail(mail) {
            return storage.setLocal({
                mail: mail
            });
        },
        async saveMessageData({unreadMessages: unreadMessages, error: error}) {
            const mail = await storage.getMail() || {
                messages: []
            };
            if (error) {
                mail.error = `Couldn't fetch messages. ${error.message || ""}`;
                return storage.saveMail(mail);
            }
            mail.error = null;
            mail.lastUpdate = Date.now();
            filterUnreadMessages(unreadMessages, mail);
            return storage.saveMail(mail);
        },
        async saveAccMessageData(accId, {unreadMessages: unreadMessages, error: error}) {
            const accs = await storage.getAccounts();
            if (!accs[accId]) accs[accId] = {
                id: accId,
                auth: {},
                mail: {
                    messages: []
                }
            };
            if (error) {
                accs[accId].error = `Couldn't fetch messages. ${error.message || ""}`;
                return storage.saveAccounts(accs);
            }
            accs[accId].error = null;
            accs[accId].auth.error = null;
            if (!accs[accId].mail) accs[accId].mail = {
                messages: []
            };
            const mail = accs[accId].mail;
            mail.lastUpdate = Date.now();
            filterUnreadMessages(unreadMessages, mail);
            return storage.saveAccounts(accs);
        },
        async saveOptions(data) {
            const optionsPrev = await storage.getOptions();
            return storage.setLocal({
                options: {
                    ...optionsPrev,
                    ...data
                }
            });
        },
        async savePinnedPost(post) {
            const prev = await storage.getPinnedPostList();
            if (prev.findIndex((p => p.data.id === post.data.id)) !== -1) return;
            return storage.setLocal({
                pinnedPostList: [ post, ...prev ]
            });
        },
        async saveSubredditList(subredditList) {
            await storage.prune({
                subIdList: subredditList.map((s => s.id))
            });
            return storage.setLocal({
                subredditList: subredditList
            });
        },
        async saveSubredditOpts(subOpts) {
            const sOpts = await storage.getSubredditList();
            let wasUpdated = false;
            const updatedList = sOpts.map((current => {
                if (current.id !== subOpts.id) return current;
                if (subOpts.subreddit !== current.subreddit) storage.removeSubredditData(current.id).catch(console.error);
                wasUpdated = true;
                return subOpts;
            }));
            if (!wasUpdated) updatedList.push(subOpts);
            return storage.setLocal({
                subredditList: updatedList
            });
        },
        async saveQuery(query) {
            const queriesList = await storage.getQueriesList();
            const updateStatus = {
                wasUpdated: false,
                shouldClear: false
            };
            const queriesUpdated = queriesList.map((q => {
                const {id: id, subreddit: prevSubreddit, query: prevQuery} = q;
                if (id !== query.id) return q;
                if (prevQuery !== query.query || prevSubreddit !== query.subreddit) updateStatus.shouldClear = true;
                updateStatus.wasUpdated = true;
                return query;
            }));
            if (!updateStatus.wasUpdated) queriesUpdated.push(query);
            if (updateStatus.shouldClear) await storage.removeQueryData(query.id);
            return storage.setLocal({
                queriesList: queriesUpdated
            });
        },
        saveUsersList(usersList) {
            return storage.setLocal({
                usersList: usersList
            });
        },
        updateWatchDataObject(prevData, {posts: newPosts = [], error: error = null, limit: limit = 50, lastPostCreated: lastPostCreated} = {}) {
            const result = {
                ...prevData
            };
            if (newPosts && newPosts.length) {
                const savedPosts = prevData.posts || [];
                const ids = new Set(savedPosts.map((p => p.data.id)));
                const postFiltered = newPosts.map((p => filterPostDataProperties(p))).filter((p => !ids.has(p.data.id)));
                result.posts = [ ...postFiltered, ...savedPosts ].slice(0, limit);
                if (postFiltered[0]) {
                    result.lastPost = postFiltered[0].data.name;
                    result.lastPostCreated = lastPostCreated || postFiltered[0].data.created;
                }
            }
            result.error = error;
            result.lastUpdate = Date.now();
            return result;
        },
        async saveQueryData(queryId, postData) {
            const data = await storage.getQueriesData();
            const current = data[queryId] || {};
            const updatedQuery = storage.updateWatchDataObject(current, postData);
            await storage.setLocal({
                queries: {
                    ...data,
                    [queryId]: updatedQuery
                }
            });
        },
        async saveSubredditData(id, postData) {
            const prevData = await storage.getSubredditData();
            const current = prevData[id] || {};
            const updatedSubreddit = storage.updateWatchDataObject(current, postData);
            return storage.setLocal({
                subreddits: {
                    ...prevData,
                    [id]: updatedSubreddit
                }
            });
        },
        async getAudioFile() {
            const {audio: audio} = await storage.getLocal({
                audio: {}
            });
            return audio;
        },
        async saveAudioFile(dataUrl) {
            return storage.setLocal({
                audio: {
                    dataUrl: dataUrl
                }
            });
        },
        async saveNotificationsData(id, data) {
            const prev = await storage.getNotificationsData();
            const notifications = prev.slice(-9);
            notifications.push({
                id: id,
                data: data
            });
            return storage.setLocal({
                notifications: notifications
            });
        },
        async setAuthError(error) {
            const accs = await storage.getAccounts();
            const {id: id} = error;
            if (!accs[id]) return;
            accs[id].auth.error = error.message;
            if (error.invalidateToken) accs[id].auth.refreshToken = null;
            return storage.saveAccounts(accs);
        },
        async clearStorage() {
            return browser.storage.local.clear();
        },
        async removeAccount(ids) {
            const accs = await storage.getAccounts();
            const result = {};
            Object.keys(accs).forEach((k => {
                var _a;
                if (ids.includes((_a = accs[k]) == null ? void 0 : _a.id)) return;
                result[k] = accs[k];
            }));
            return storage.saveAccounts(result);
        },
        async removeAccountMessage({accId: accId, messageId: messageId}) {
            var _a;
            const accounts = await storage.getAccounts();
            const mail = (_a = accounts[accId]) == null ? void 0 : _a.mail;
            if (!mail) return;
            mail.messages = (mail.messages || []).filter((m => m.data.id !== messageId));
            await storage.setLocal({
                accounts: accounts
            });
        },
        async removeQueryData(queryId) {
            const queries = await storage.getQueriesData();
            queries[queryId] = {
                posts: []
            };
            await storage.setLocal({
                queries: queries
            });
        },
        async removeSubredditData(id) {
            const subreddits = await storage.getSubredditData();
            subreddits[id] = {
                posts: []
            };
            await storage.setLocal({
                subreddits: subreddits
            });
        },
        async removePost({id: id, subreddit: subreddit, searchId: searchId, accountId: accountId}) {
            var _a, _b, _c, _d;
            if (subreddit) {
                const subreddits = await storage.getSubredditData();
                subreddits[subreddit].posts = (_a = subreddits[subreddit].posts) == null ? void 0 : _a.filter((({data: data}) => data.id !== id));
                await storage.setLocal({
                    subreddits: subreddits
                });
            }
            if (searchId) {
                const queries = await storage.getQueriesData();
                queries[searchId].posts = (_b = queries[searchId].posts) == null ? void 0 : _b.filter((({data: data}) => data.id !== id));
                await storage.setLocal({
                    queries: queries
                });
            }
            if (accountId) {
                const accounts = await storage.getAccounts();
                const mail = (_c = accounts[accountId]) == null ? void 0 : _c.mail;
                if (!mail) return;
                mail.messages = (_d = mail.messages) == null ? void 0 : _d.filter((({data: data}) => data.id !== id));
                await storage.saveAccounts(accounts);
            }
        },
        async removeUserPost({userIndex: userIndex, postId: postId}) {
            var _a, _b;
            const usersList = await storage.getUsersList();
            if ((_a = usersList[userIndex]) == null ? void 0 : _a.data) {
                usersList[userIndex].data = (_b = usersList[userIndex].data) == null ? void 0 : _b.filter((item => item.data.id !== postId));
                await storage.saveUsersList(usersList);
            }
        },
        async removePinPost(id) {
            const pinnedPostList = await storage.getPinnedPostList();
            return storage.setLocal({
                pinnedPostList: pinnedPostList.filter((p => p.data.id !== id))
            });
        },
        async removePostsFrom({subredditId: subredditId, searchId: searchId, followUserIndex: followUserIndex, clearTS: clearTS}) {
            if (subredditId) {
                const subreddits = await storage.getSubredditData();
                subreddits[subredditId].posts = [];
                if (clearTS) subreddits[subredditId].lastPostCreated = null;
                await storage.setLocal({
                    subreddits: subreddits
                });
            }
            if (searchId) {
                const queries = await storage.getQueriesData();
                queries[searchId].posts = [];
                if (clearTS) queries[searchId].lastPostCreated = null;
                await storage.setLocal({
                    queries: queries
                });
            }
            if (followUserIndex !== void 0) {
                const usersList = await storage.getUsersList();
                usersList[followUserIndex].data = [];
                if (clearTS) usersList[followUserIndex].lastPostCreated = null;
                await storage.saveUsersList(usersList);
            }
        },
        async removeAllPosts() {
            const {queries: queries, subreddits: subreddits, usersList: usersList, mail: mail, accounts: accounts} = await storage.getAllData();
            Object.values(accounts || {}).forEach((acc => {
                if (!acc.mail) acc.mail = {
                    messages: []
                }; else acc.mail.messages = [];
            }));
            Object.keys(subreddits).forEach((subr => {
                subreddits[subr].posts = [];
            }));
            Object.keys(queries).forEach((q => {
                queries[q].posts = [];
            }));
            usersList == null ? void 0 : usersList.forEach((u => {
                u.data = [];
            }));
            if (mail) mail.messages = [];
            await storage.setLocal({
                subreddits: subreddits,
                queries: queries,
                usersList: usersList,
                mail: mail,
                accounts: accounts
            });
        },
        async removeMessages() {
            const mail = await storage.getMail() || {};
            mail.messages = [];
            await storage.setLocal({
                mail: mail
            });
        },
        async removeAccountMessages(accId) {
            var _a;
            const {accounts: accounts = {}} = await storage.getLocal({
                accounts: {}
            });
            if (!accounts[accId]) return;
            const m = (_a = accounts[accId]) == null ? void 0 : _a.mail;
            if (!m) return;
            m.messages = [];
            await storage.setLocal({
                accounts: accounts
            });
        },
        async removeAllMessages() {
            const {mail: mail = {}, accounts: accounts = {}} = await storage.getLocal({
                mail: {},
                accounts: {}
            });
            Object.values(accounts).forEach((a => {
                if (!a.mail) a.mail = {
                    messages: []
                };
                a.mail.messages = [];
            }));
            mail.messages = [];
            await storage.setLocal({
                mail: mail,
                accounts: accounts
            });
        },
        async removeMessage({accId: accId, messageId: messageId}) {
            var _a;
            if (accId) {
                const accounts = await storage.getAccounts();
                const mail2 = (_a = accounts[accId]) == null ? void 0 : _a.mail;
                if (!mail2) return;
                mail2.messages = (mail2.messages || []).filter((m => m.data.id !== messageId));
                await storage.setLocal({
                    accounts: accounts
                });
                return;
            }
            const mail = await storage.getMail();
            if (!mail) return;
            mail.messages = (mail.messages || []).filter((m => m.data.id !== messageId));
            await storage.setLocal({
                mail: mail
            });
        },
        async removeSubreddits(ids = []) {
            const subredditList = await storage.getSubredditList();
            const updated = subredditList.filter((q => !ids.includes(q.id)));
            await storage.prune({
                subIdList: updated.map((s => s.id))
            });
            return storage.setLocal({
                subredditList: updated
            });
        },
        async removeQueries(ids = []) {
            const queriesList = await storage.getQueriesList();
            const queriesUpdated = queriesList.filter((q => !ids.includes(q.id)));
            await storage.prune({
                queriesIdList: queriesUpdated.map((q => q.id))
            });
            return storage.setLocal({
                queriesList: queriesUpdated
            });
        },
        async removeNotificationData(id) {
            const prev = await storage.getNotificationsData();
            const notifications = prev.filter((n => n.id !== id));
            return storage.setLocal({
                notifications: notifications
            });
        },
        async prune({subIdList: subIdList, queriesIdList: queriesIdList}) {
            if (subIdList) {
                const subs = await storage.getSubredditData();
                if (subs) return storage.setLocal({
                    subreddits: filterKeys(subIdList, subs)
                });
            }
            if (queriesIdList) {
                const queries = await storage.getQueriesData();
                if (queries) return storage.setLocal({
                    queries: filterKeys(queriesIdList, queries)
                });
            }
        },
        async countNumberOfUnreadItems(updateBadge = true) {
            var _a, _b;
            let count = 0;
            const {subredditList: subredditList, queriesList: queriesList, queries: queries, subreddits: subreddits, accounts: accounts, usersList: usersList, mail: mail} = await storage.getAllData();
            if (subreddits) subredditList == null ? void 0 : subredditList.forEach((s => {
                var _a2, _b2;
                count += ((_b2 = (_a2 = subreddits[s.id]) == null ? void 0 : _a2.posts) == null ? void 0 : _b2.length) || 0;
            }));
            if (queries) queriesList == null ? void 0 : queriesList.forEach((q => {
                var _a2, _b2;
                count += ((_b2 = (_a2 = queries[q.id]) == null ? void 0 : _a2.posts) == null ? void 0 : _b2.length) || 0;
            }));
            usersList == null ? void 0 : usersList.forEach((u => {
                var _a2;
                count += ((_a2 = u.data) == null ? void 0 : _a2.length) || 0;
            }));
            count += ((_a = mail == null ? void 0 : mail.messages) == null ? void 0 : _a.length) || 0;
            (_b = Object.values(accounts || {})) == null ? void 0 : _b.forEach((a => {
                var _a2, _b2;
                count += ((_b2 = (_a2 = a.mail) == null ? void 0 : _a2.messages) == null ? void 0 : _b2.length) || 0;
            }));
            if (updateBadge) await browser.action.setBadgeText({
                text: count ? String(count) : ""
            });
            return count;
        }
    };
    async function removePostsFromGroup(id, type) {
        if (type === "search") return storage.removePostsFrom({
            searchId: id
        });
        if (type === "subreddit") return storage.removePostsFrom({
            subredditId: id
        });
        if (type === "user") {
            const index = idToUserIdx(id);
            if (index == null) return;
            return storage.removePostsFrom({
                followUserIndex: index
            });
        }
        if (type === "message") return storage.removeMessages();
        if (type === "account-message") return storage.removeAccountMessages(id);
    }
    async function openGroups({groups: groups, remove: remove} = {
        groups: [],
        remove: false
    }) {
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            if (remove) await removePostsFromGroup(group.id, group.type);
            await browser.tabs.create({
                url: group.href,
                active: i === 0
            });
        }
    }
    const messageListeners = new Map;
    async function sendMessage(id, payload) {
        try {
            const message = {
                id: id,
                payload: payload
            };
            const response = await chrome.runtime.sendMessage(message);
            return response;
        } catch (error) {
            const msg = error.message;
            if (msg === "Could not establish connection. Receiving end does not exist.") {
                console.warn(msg);
                return;
            }
            console.error(error, msg);
        }
    }
    let listener;
    function listenForMessages(context) {
        if (listener && browser.runtime.onMessage.hasListener(listener)) browser.runtime.onMessage.removeListener(listener);
        listener = function(request) {
            var _a;
            const message = request;
            console.info(`${context} received message`, message);
            void ((_a = messageListeners.get(message.id)) == null ? void 0 : _a(message.payload));
        };
        browser.runtime.onMessage.addListener(listener);
    }
    function onMessage(id, cb) {
        messageListeners.set(id, cb);
    }
    const config = {
        clientId: "epWgHbLDyrRfkg",
        clientSecret: "",
        redirectUri: "https://hoolgoecmeegpbidbbcefgkjegdejibd.chromiumapp.org/",
        userAgent: "chrome_extension:reddit_post_notifier:v6.1.0 (by /u/flytaly)"
    };
    let creating = null;
    async function setupOffscreenDocument(path) {
        const offscreenUrl = chrome.runtime.getURL(path);
        const matchedClients = await self.clients.matchAll();
        for (const client of matchedClients) if (client.url === offscreenUrl) return;
        if (creating) await creating; else {
            creating = chrome.offscreen.createDocument({
                url: path,
                reasons: [ chrome.offscreen.Reason.AUDIO_PLAYBACK ],
                justification: "play notification sounds"
            });
            await creating;
            creating = null;
        }
    }
    const notificationSoundFiles = {
        sound_00: "/audio/234524__foolboymedia__notification-up-1.webm",
        sound_01: "/audio/234523__foolboymedia__notification-up-2.webm",
        sound_02: "/audio/235911__yourfriendjesse__notification-sound.webm",
        sound_03: "/audio/415763__thebuilder15__doorbell-notification.webm",
        sound_04: "/audio/512136__beezlefm__notification-sound.webm"
    };
    async function getAudioSrc(soundId) {
        if (!soundId) return "";
        if (soundId === "custom") {
            const file2 = await storage.getAudioFile();
            return (file2 == null ? void 0 : file2.dataUrl) || "";
        }
        const file = notificationSoundFiles[soundId];
        if (!file) return "";
        return browser.runtime.getURL(file);
    }
    async function playAudio(audioId) {
        const src = await getAudioSrc(audioId);
        if (!src) return;
        await setupOffscreenDocument("/dist/offscreen/index.html");
        await chrome.runtime.sendMessage({
            type: "PLAY_AUDIO",
            target: "offscreen",
            data: src
        });
        return;
    }
    var NotificationId = (NotificationId2 => {
        NotificationId2["mail"] = "mail";
        NotificationId2["post"] = "post";
        NotificationId2["user"] = "user";
        NotificationId2["test"] = "test";
        return NotificationId2;
    })(NotificationId || {});
    function isMessage(n) {
        return n.type === "mail";
    }
    function isPost(n) {
        return n.type === "post";
    }
    function isUser(n) {
        return n.type === "user";
    }
    function isTest(n) {
        return n.type === "test";
    }
    function notify(notif, soundId) {
        async function createNotification(id, options, links) {
            await browser.notifications.create(id, options);
            if (soundId) void playAudio(soundId);
            if (links) void storage.saveNotificationsData(id, links);
        }
        const opts = {
            type: "basic",
            iconUrl: browser.runtime.getURL("/images/icon-96.png")
        };
        if (isTest(notif)) {
            const nOpts = {
                ...opts,
                title: "Test title",
                message: notif.message
            };
            void createNotification(`${"test"}__${Date.now()}`, nOpts);
            return;
        }
        if (!notif.items.length) return;
        if (isMessage(notif)) {
            const message = notif.items.map((i => {
                if (i.username) return `${i.username || ""} (${i.len})`;
                return `${i.len} unread messages`;
            })).join(",\n");
            const nOpts = {
                ...opts,
                title: "Reddit: new mail",
                message: message
            };
            void storage.getOptions().then((opts2 => {
                const url = getInboxUrl(opts2);
                return createNotification(`${"mail"}__${Date.now()}`, nOpts, [ url ]);
            }));
        }
        if (isPost(notif)) {
            const nOpts = {
                ...opts,
                title: "Reddit: new posts",
                message: `New posts in: ${notif.items.map((({name: name, len: len}) => `${name} (${len})`)).join(", ")}`
            };
            const links = notif.items.filter((item => item.link)).map((item => item.link));
            void createNotification(`${"post"}__${Date.now()}`, nOpts, [ ...links ]);
        }
        if (isUser(notif)) {
            const nOpts = {
                ...opts,
                title: "Reddit: new users activities",
                message: notif.items.map((({len: len, name: name}) => `${name} (${len})`)).join(", ")
            };
            const links = notif.items.filter((item => item.link)).map((item => item.link));
            void createNotification(`${"post"}__${Date.now()}`, nOpts, links);
        }
    }
    function addNotificationClickListener() {
        const clickHandler = async notifyId => {
            const notifyArr = await storage.getNotificationsData();
            if (notifyArr && notifyArr.length) {
                const n = notifyArr.find((({id: id}) => id === notifyId));
                if (n && n.data && n.data.length) n.data.forEach(((link, index, array) => {
                    void browser.tabs.create({
                        url: link,
                        active: index === array.length - 1
                    });
                }));
                await storage.removeNotificationData(notifyId);
                return browser.notifications.clear(notifyId);
            }
        };
        browser.notifications.onClicked.addListener((notifyId => void clickHandler(notifyId)));
    }
    class AuthError extends Error {
        constructor(message, id, invalidateToken) {
            super();
            this.name = "AuthError";
            this.message = message;
            this.id = id;
            this.invalidateToken = invalidateToken || false;
        }
    }
    function isAuthError(e) {
        return (e == null ? void 0 : e.name) === "AuthError";
    }
    const redditScopes = {
        creddits: {
            description: "Spend my reddit gold creddits on giving gold to other users.",
            id: "creddits",
            name: "Spend reddit gold creddits"
        },
        modcontributors: {
            description: "Add/remove users to approved submitter lists and ban/unban or mute/unmute users from subreddits I moderate.",
            id: "modcontributors",
            name: "Approve submitters and ban users"
        },
        modmail: {
            description: "Access and manage modmail via mod.reddit.com.",
            id: "modmail",
            name: "New Modmail"
        },
        modconfig: {
            description: "Manage the configuration, sidebar, and CSS of subreddits I moderate.",
            id: "modconfig",
            name: "Moderate Subreddit Configuration"
        },
        subscribe: {
            description: 'Manage my subreddit subscriptions. Manage "friends" - users whose content I follow.',
            id: "subscribe",
            name: "Edit My Subscriptions"
        },
        structuredstyles: {
            description: "Edit structured styles for a subreddit I moderate.",
            id: "structuredstyles",
            name: "Edit structured styles"
        },
        vote: {
            description: "Submit and change my votes on comments and submissions.",
            id: "vote",
            name: "Vote"
        },
        wikiedit: {
            description: "Edit wiki pages on my behalf",
            id: "wiki",
            name: "Wiki Editing"
        },
        mysubreddits: {
            description: "Access the list of subreddits I moderate, contribute to, and subscribe to.",
            id: "mysubreddits",
            name: "My Subreddits"
        },
        submit: {
            description: "Submit links and comments from my account.",
            id: "submit",
            name: "Submit Content"
        },
        modlog: {
            description: "Access the moderation log in subreddits I moderate.",
            id: "modlog",
            name: "Moderation Log"
        },
        modposts: {
            description: "Approve, remove, mark nsfw, and distinguish content in subreddits I moderate.",
            id: "modposts",
            name: "Moderate Posts"
        },
        modflair: {
            description: "Manage and assign flair in subreddits I moderate.",
            id: "modflair",
            name: "Moderate Flair"
        },
        save: {
            description: "Save and unsave comments and submissions.",
            id: "save",
            name: "Save Content"
        },
        modothers: {
            description: "Invite or remove other moderators from subreddits I moderate.",
            id: "modothers",
            name: "Invite or remove other moderators"
        },
        read: {
            description: "Access posts and comments through my account.",
            id: "read",
            name: "Read Content"
        },
        privatemessages: {
            description: "Access my inbox and send private messages to other users.",
            id: "privatemessages",
            name: "Private Messages"
        },
        report: {
            description: "Report content for rules violations. Hide & show individual submissions.",
            id: "report",
            name: "Report content"
        },
        identity: {
            description: "Access my reddit username and signup date.",
            id: "identity",
            name: "My Identity"
        },
        livemanage: {
            description: "Manage settings and contributors of live threads I contribute to.",
            id: "livemanage",
            name: "Manage live threads"
        },
        account: {
            description: "Update preferences and related account information. Will not have access to your email or password.",
            id: "account",
            name: "Update account information"
        },
        modtraffic: {
            description: "Access traffic stats in subreddits I moderate.",
            id: "modtraffic",
            name: "Subreddit Traffic"
        },
        wikiread: {
            description: "Read wiki pages through my account",
            id: "wikiread",
            name: "Read Wiki Pages"
        },
        edit: {
            description: "Edit and delete my comments and submissions.",
            id: "edit",
            name: "Edit Posts"
        },
        modwiki: {
            description: "Change editors and visibility of wiki pages in subreddits I moderate.",
            id: "modwiki",
            name: "Moderate Wiki"
        },
        modself: {
            description: "Accept invitations to moderate a subreddit. Remove myself as a moderator or contributor of subreddits I moderate or contribute to.",
            id: "modself",
            name: "Make changes to your subreddit moderator and contributor status"
        },
        history: {
            description: "Access my voting history and comments or submissions I've saved or hidden.",
            id: "history",
            name: "History"
        },
        flair: {
            description: "Select my subreddit flair. Change link flair on my submissions.",
            id: "flair",
            name: "Manage My Flair"
        }
    };
    const {clientId: clientId, clientSecret: clientSecret, redirectUri: redirectUri, userAgent: userAgent} = config;
    function isErrorTokenResponse(r) {
        return !r.access_token;
    }
    const BASE_URL = "https://www.reddit.com/api/v1";
    const auth = {
        authState: "",
        get accessTokenURL() {
            return `${BASE_URL}/access_token`;
        },
        async getAccessToken(account) {
            const {accessToken: accessToken, expiresIn: expiresIn, refreshToken: refreshToken} = account.auth;
            const now = new Date;
            const expires = new Date((expiresIn || 0) - 6e4 * 5);
            const token = expires > now && accessToken ? accessToken : await auth.renewAccessToken(refreshToken, account.id);
            return token;
        },
        generateAuthState() {
            return (Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
        },
        getAuthURL(authState) {
            const params = {
                response_type: "code",
                redirect_uri: encodeURIComponent(redirectUri || ""),
                client_id: clientId,
                scope: `${redditScopes.identity.id} ${redditScopes.read.id} ${redditScopes.privatemessages.id} ${redditScopes.history.id}`,
                state: authState,
                duration: "permanent"
            };
            return `${BASE_URL}/authorize?${mapObjToQueryStr(params)}`;
        },
        async getAuthCode(authState, id) {
            const response = await browser.identity.launchWebAuthFlow({
                url: auth.getAuthURL(authState),
                interactive: true
            });
            const responseURL = new URL(response);
            if (responseURL.searchParams.has("error")) throw new AuthError(responseURL.searchParams.get("error") || "", id);
            if (responseURL.searchParams.get("state") === authState) return responseURL.searchParams.get("code");
            return false;
        },
        fetchAuthInit(params) {
            const base64Credentials = btoa(`${clientId || ""}:${clientSecret || ""}`);
            return {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": userAgent
                },
                body: mapObjToQueryStr(params)
            };
        },
        async getTokens(code, id) {
            const params = {
                grant_type: "authorization_code",
                redirect_uri: encodeURIComponent(redirectUri || ""),
                code: code
            };
            const response = await fetch(auth.accessTokenURL, auth.fetchAuthInit(params));
            if (response.status !== 200) throw new AuthError(`Couldn't receive tokens. ${response.status}: ${response.statusText || ""}`, id);
            const body = await response.json();
            if (isErrorTokenResponse(body)) throw new AuthError(`Couldn't receive tokens. Error: ${body.error || ""}`, id);
            return body;
        },
        async renewAccessToken(refreshToken, id) {
            const params = {
                grant_type: "refresh_token",
                refresh_token: refreshToken || ""
            };
            const response = await fetch(auth.accessTokenURL, auth.fetchAuthInit(params));
            if (response.status >= 500) throw new AuthError(`Couldn't refresh access token. ${response.status}: ${response.statusText || ""}`, id, false);
            let body;
            try {
                body = await response.json();
            } catch (e) {
                const error = e;
                body = {
                    error: `${error.status}`,
                    message: error.message
                };
            }
            if (isErrorTokenResponse(body)) throw new AuthError(`Couldn't refresh access token. ${body.error || ""}: ${body.message || ""}`, id, true);
            await storage.saveAuthData({
                data: body,
                id: id
            });
            return body.access_token;
        },
        async login(id) {
            if (!id) id = generateId();
            auth.authState = auth.generateAuthState();
            const code = await auth.getAuthCode(auth.authState, id);
            if (!code) throw new AuthError("Couldn't get auth code", id);
            const authData = await auth.getTokens(code, id);
            await storage.saveAuthData({
                data: authData,
                id: id
            });
            return id;
        }
    };
    const RateLimitHeaders = {
        remaining: "x-ratelimit-remaining",
        reset: "x-ratelimit-reset",
        used: "x-ratelimit-used"
    };
    function getRateLimits(response) {
        const rateLimits = {
            used: response.headers.get(RateLimitHeaders.used),
            reset: response.headers.get(RateLimitHeaders.reset),
            remaining: response.headers.get(RateLimitHeaders.remaining)
        };
        return {
            used: rateLimits.used ? Number.parseInt(rateLimits.used) : null,
            reset: rateLimits.reset ? Number.parseInt(rateLimits.reset) : null,
            remaining: rateLimits.remaining ? Number.parseInt(rateLimits.remaining) : null
        };
    }
    class RedditApiClient {
        constructor(onRateLimits) {
            this.fetchOpts = {
                cache: "reload"
            };
            this.authOrigin = "https://oauth.reddit.com";
            this.publicOrigin = "https://www.reddit.com";
            this.headers = {
                Accept: "application/json"
            };
            this.onRateLimits = onRateLimits;
        }
        async GET(endpoint, queryParams = {}) {
            const query = mapObjToQueryStr({
                ...queryParams,
                raw_json: "1"
            });
            const init = {
                method: "GET",
                headers: {
                    ...this.headers
                },
                ...this.fetchOpts
            };
            if (this.accessToken) {
                if (!init.headers) init.headers = {};
                const headers = init.headers;
                headers["User-Agent"] = config.userAgent;
                headers.Authorization = `bearer ${this.accessToken}`;
            }
            const origin = this.accessToken ? this.authOrigin : this.publicOrigin;
            const actualEndpoint = this.accessToken ? endpoint : `${endpoint}.json`;
            const result = await fetch(encodeURI(`${origin}${actualEndpoint}?${query}`), init);
            if (this.onRateLimits && !this.accessToken) this.onRateLimits(getRateLimits(result));
            if (result.ok) return result.json();
            try {
                const errorResponse = await result.json();
                return errorResponse;
            } catch (error) {
                throw new Error(`status code: ${result.status}. ${result.statusText}`);
            }
        }
        setAccessToken(accessToken) {
            this.accessToken = accessToken;
        }
        getSubreddit(subreddit) {
            return {
                new: async listing => this.GET(`/r/${subreddit}/new`, listing),
                search: async listing => this.search(listing, subreddit)
            };
        }
        user(username) {
            return {
                overview: async listing => this.GET(`/user/${username}/overview`, listing),
                comments: async listing => this.GET(`/user/${username}/comments`, listing),
                submitted: async listing => this.GET(`/user/${username}/submitted`, listing)
            };
        }
        search(listing, subreddit = null) {
            const listingSortByNew = {
                sort: "new",
                ...listing
            };
            if (subreddit) return this.GET(`/r/${subreddit}/search`, listingSortByNew);
            return this.GET("/search", listingSortByNew);
        }
        get messages() {
            return {
                unread: async listing => this.GET("/message/unread", listing),
                inbox: async listing => this.GET("/message/inbox", listing)
            };
        }
        me() {
            return this.GET("/api/me");
        }
    }
    const separator = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
    const tokenizer = str => str.split(separator);
    const normalize = str => str.trim().toLowerCase();
    const engStemming = [ "ance", "ence", "ness", "able", "ible", "ment", "ful", "ent", "ism", "ed", "s" ];
    const stemRegExp = new RegExp(`(${engStemming.join("|")})\\b`);
    function stemmer(word, minLen = 3) {
        if (word.length <= minLen) return word;
        return word.replace(stemRegExp, "");
    }
    function intersect(arrays) {
        const idsList = arrays[0];
        if (arrays.length < 1) return [];
        const resultIds = [];
        for (let i = 0; i < idsList.length; i++) {
            const id = idsList[i];
            let count = 1;
            for (let j = 1; j < arrays.length; j++) if (arrays[j].includes(id)) count += 1;
            if (count === arrays.length) resultIds.push(id);
        }
        return resultIds;
    }
    class Index {
        constructor(opts = {}) {
            this.normalize = opts.normalize ?? normalize;
            this.stemmer = opts.stemmer ?? stemmer;
            this.tokenizer = opts.tokenizer ?? tokenizer;
            this.map = {};
        }
        add(id, str) {
            if (!str || !id) return;
            const tokens = this.getTokens(str);
            if (!tokens.length) return;
            const duplicates = {};
            let token = "";
            for (let i = 0; i < tokens.length; i++) {
                token = this.stemmer ? this.stemmer(tokens[i]) : tokens[i];
                if (!token || duplicates[token]) continue;
                duplicates[token] = 1;
                if (!this.map[token]) this.map[token] = [];
                this.map[token].push(id);
            }
        }
        getTokens(str) {
            str = this.normalize ? this.normalize(str) : str;
            return this.tokenizer ? this.tokenizer(str) : [ str ];
        }
        search(query) {
            if (!query) return [];
            const queryTokens = this.getTokens(query);
            const result = [];
            for (let i = 0; i < queryTokens.length; i++) {
                const token = this.stemmer ? this.stemmer(queryTokens[i]) : queryTokens[i];
                result.push(this.map[token] || []);
            }
            return intersect(result);
        }
    }
    class Document {
        constructor({fields: fields, id: id = "id"}) {
            this.indexes = {};
            this.fields = fields;
            fields.forEach((f => {
                if (f.field) this.indexes[f.field] = new Index(f.options);
            }));
            this.id = id;
        }
        add(document) {
            this.fields.forEach((f => {
                const text = document[f.field];
                if (text) this.indexes[f.field].add(document[this.id], document[f.field]);
            }));
        }
        search(searchData) {
            let result = [];
            for (let i = 0; i < searchData.length; i++) {
                const {field: field, query: query} = searchData[i] || {};
                const fieldIndex = this.indexes[field];
                if (!fieldIndex || !query) continue;
                const matchIds = fieldIndex.search(query);
                if (!matchIds.length) return [];
                if (!result.length) result = matchIds; else {
                    result = intersect([ result, matchIds ]);
                    if (!result.length) return [];
                }
            }
            return result;
        }
    }
    const allFields = [ "title", "selftext", "author", "link_flair_text" ];
    function postFilter(posts, queriesLists, fields = allFields) {
        const usedFields = fields.map((field => {
            const result2 = {
                field: field
            };
            if (field === "author") result2.options = {
                normalize: false,
                stemmer: false,
                tokenizer: false
            };
            if (field === "link_flair_text") result2.options = {
                stemmer: false
            };
            return result2;
        }));
        const doc = new Document({
            fields: usedFields,
            id: "id"
        });
        posts.forEach((p => doc.add(p.data)));
        const result = new Set;
        for (let i = 0; i < queriesLists.length; i++) {
            const qList = queriesLists[i];
            if (!qList) continue;
            const ids = doc.search(qList);
            ids.forEach((id => result.add(id)));
        }
        return posts.filter((p => result.has(p.data.id)));
    }
    function wait(ms = 1e3) {
        return new Promise((resolve => setTimeout(resolve, ms)));
    }
    function filterNewItems(timestamp, items) {
        const newPosts = [];
        for (const item of items) if (item.data.created > timestamp) newPosts.push(item); else return newPosts;
        return newPosts;
    }
    function extractNewItems(response, info) {
        const items = response.data.children;
        const newItems = info.lastPostCreated ? filterNewItems(info.lastPostCreated, items) : items;
        if (newItems.length !== 0) return newItems;
        return null;
    }
    function isErrorResponse(result) {
        return result.data === void 0;
    }
    class NotifierApp {
        constructor(onRateLimits) {
            this.reddit = new RedditApiClient(onRateLimits);
        }
        async updateSubreddit({subOpts: subOpts, subData: subData = {}, listing: listing}) {
            var _a, _b;
            const {subreddit: subreddit, id: id, filterOpts: filterOpts} = subOpts;
            const info = subData;
            if (info.error && info.lastUpdate && Date.now() - info.lastUpdate < 1e3 * 60 * 2) return null;
            let response;
            try {
                response = await this.reddit.getSubreddit(subreddit).new(listing);
            } catch (error) {
                response = {
                    message: error.message
                };
            }
            if (isErrorResponse(response)) {
                console.error(`Error during fetching new posts from r/${subreddit}: `, response);
                await storage.saveSubredditData(id, {
                    error: response
                });
                return null;
            }
            let newPosts = extractNewItems(response, info) || [];
            let lastPostCreated = null;
            if (newPosts.length && (filterOpts == null ? void 0 : filterOpts.enabled) && ((_a = filterOpts == null ? void 0 : filterOpts.rules) == null ? void 0 : _a.length)) {
                lastPostCreated = (_b = newPosts[0].data) == null ? void 0 : _b.created;
                newPosts = postFilter(newPosts, filterOpts.rules, filterOpts.fields);
            }
            await storage.saveSubredditData(id, {
                posts: newPosts,
                lastPostCreated: lastPostCreated
            });
            return newPosts;
        }
        async updateQuery({query: query, queryData: queryData, listing: listing = {}}) {
            const {id: id, subreddit: subreddit, query: q} = query;
            if (!q || !id) return null;
            const data = queryData || {};
            if (data.error && data.lastUpdate && Date.now() - data.lastUpdate < 1e3 * 60 * 10) return null;
            let response;
            try {
                response = subreddit ? await this.reddit.getSubreddit(subreddit).search({
                    ...listing,
                    q: q,
                    restrict_sr: "on"
                }) : await this.reddit.search({
                    ...listing,
                    q: q
                });
            } catch (error) {
                response = {
                    message: error.message
                };
            }
            if (isErrorResponse(response)) {
                console.error(`Error during fetching posts query ${query.query || ""} on ${query.subreddit || "reddit"}: `, response);
                await storage.saveQueryData(query.id, {
                    error: response
                });
                return null;
            }
            const newPosts = extractNewItems(response, data) || [];
            await storage.saveQueryData(query.id, {
                posts: newPosts,
                error: null
            });
            return newPosts;
        }
        async updateUnreadMsg(mail) {
            try {
                this.clearAccessToken();
                const response = await this.reddit.messages.unread();
                if (isErrorResponse(response)) throw new Error(response.message);
                const newMessages = extractNewItems(response, mail || {});
                await storage.saveMessageData({
                    unreadMessages: newMessages
                });
                return newMessages;
            } catch (error) {
                const message = error.message || error;
                console.error("Error during fetching unread messages ", message);
                await storage.saveMessageData({
                    error: {
                        message: message
                    }
                });
                return null;
            }
        }
        async updateUnreadAccountMsg(account) {
            try {
                const token = await auth.getAccessToken(account);
                if (!token) return null;
                this.reddit.setAccessToken(token);
                const response = await this.reddit.messages.unread();
                if (isErrorResponse(response)) throw new Error(response.message);
                const newMessages = extractNewItems(response, account.mail || {});
                await storage.saveAccMessageData(account.id, {
                    unreadMessages: newMessages
                });
                return newMessages;
            } catch (error) {
                if (isAuthError(error)) return this.onAuthError(error);
                const message = error.message || error;
                console.error(`Error during fetching unread messages`, message);
                await storage.saveAccMessageData(account.id, {
                    error: {
                        message: message
                    }
                });
                return null;
            }
        }
        async updateFollowingUser(user) {
            var _a, _b;
            user = {
                ...user
            };
            const fetchUser = this.reddit.user(user.username);
            let response;
            try {
                switch (user.watch) {
                  case "comments":
                    response = await fetchUser.comments();
                    break;

                  case "submitted":
                    response = await fetchUser.submitted();
                    break;

                  default:
                    response = await fetchUser.overview();
                }
            } catch (error) {
                response = {
                    message: error.message
                };
            }
            if (isErrorResponse(response)) {
                console.error(`Error during fetching ${user.username}'s activities`, response);
                user.error = response;
                return {
                    user: user
                };
            }
            if (!((_b = (_a = response.data) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) return {
                user: user
            };
            const newItems = extractNewItems(response, user);
            if (!newItems) return {
                user: user
            };
            const itemsToSave = newItems.map((p => p.kind === RedditObjectKind.link ? filterPostDataProperties(p) : p));
            user.data = [ ...itemsToSave, ...user.data || [] ].slice(0, 50);
            user.error = null;
            user.lastPostCreated = itemsToSave[0].data.created;
            user.lastUpdate = Date.now();
            return {
                user: user,
                newItemsLen: itemsToSave.length
            };
        }
        async updateUsersList(usersList, options, ignorePollInterval = false) {
            const pollInterval = ignorePollInterval ? 0 : options.pollUserInterval * 1e3;
            const notifyInfo = {
                type: NotificationId.user,
                items: []
            };
            let updated = 0;
            for (let i = 0; i < usersList.length; i++) {
                const ts = Date.now();
                if (ts - (usersList[i].lastUpdate || 0) < pollInterval) continue;
                const {user: user, newItemsLen: newItemsLen} = await this.updateFollowingUser(usersList[i]);
                usersList[i] = user;
                if (user.notify && newItemsLen) {
                    const link = getUserProfileUrl(user.username, user.watch, options);
                    notifyInfo.items.push({
                        len: newItemsLen,
                        link: link,
                        name: user.username
                    });
                }
                user.lastUpdate = ts;
                updated += 1;
                if (i < usersList.length - 1) await wait(1e3);
            }
            await storage.saveUsersList(usersList);
            if (notifyInfo.items.length) notify(notifyInfo, options.notificationSoundId);
            return updated;
        }
        async setAccessToken(accounts) {
            try {
                accounts = accounts || await storage.getAccounts();
                const withScopes = [ redditScopes.identity.id, redditScopes.read.id, redditScopes.privatemessages.id, redditScopes.history.id ];
                const account = getAccountByScope(accounts, withScopes);
                if (!account) return this.clearAccessToken();
                const token = await auth.getAccessToken(account);
                this.reddit.setAccessToken(token || null);
            } catch (e) {
                if (isAuthError(e)) return this.onAuthError(e);
                console.error(e);
            }
        }
        async onAuthError(e) {
            console.error(e);
            this.clearAccessToken();
            await storage.setAuthError(e);
            return null;
        }
        clearAccessToken() {
            this.reddit.setAccessToken(null);
        }
        async updateMail(mail, options) {
            const msgNotify = {
                type: NotificationId.mail,
                items: []
            };
            const newMessages = await this.updateUnreadMsg(mail);
            if ((newMessages == null ? void 0 : newMessages.length) && (mail == null ? void 0 : mail.mailNotify)) msgNotify.items.push({
                len: newMessages.length,
                username: ""
            });
            if (msgNotify.items.length) notify(msgNotify, options.notificationSoundId);
        }
        async updateAccountMail(accounts, options) {
            var _a;
            const msgNotify = {
                type: NotificationId.mail,
                items: []
            };
            for (const ac of Object.values(accounts || {})) if (ac.auth.refreshToken && ac.checkMail && ((_a = ac.auth.scope) == null ? void 0 : _a.includes("privatemessages"))) {
                const newMessages = await this.updateUnreadAccountMsg(ac);
                if ((newMessages == null ? void 0 : newMessages.length) && ac.mailNotify) msgNotify.items.push({
                    username: ac.name || "",
                    len: newMessages.length
                });
                await wait(options.waitTimeout * 1e3);
            }
            if (msgNotify.items.length) notify(msgNotify, options.notificationSoundId);
        }
        async updateAccountInfo(user) {
            if (!user) return user;
            const ac = {
                ...user
            };
            try {
                if (ac == null ? void 0 : ac.auth.refreshToken) {
                    if (!ac.auth.scope || !ac.auth.scope.includes(redditScopes.identity.id)) throw new AuthError("Extension doesn't have permissions to fetch user's identity", ac.id);
                    const token = await auth.getAccessToken(ac);
                    this.reddit.setAccessToken(token || null);
                    const response = await this.reddit.me();
                    if (isErrorResponse(response)) {
                        console.error("Error during fetching account information", response);
                        ac.error = `Couldn't fetch account information: ${response.message || ""}`;
                        return ac;
                    }
                    if (response.data) {
                        const d = response.data;
                        ac.redditId = d.id;
                        ac.name = d.name;
                        ac.img = d.icon_img;
                        ac.inboxCount = d.inbox_count;
                        ac.hasMail = d.has_mail;
                        ac.totalKarma = d.total_karma;
                        ac.error = null;
                        ac.auth.error = null;
                    }
                }
            } catch (error) {
                if (isAuthError(error)) {
                    ac.auth.error = error.message;
                    return ac;
                }
                ac.error = error == null ? void 0 : error.message;
            }
            return ac;
        }
        async updateAccounts(accounts, id) {
            const updated = {
                ...accounts
            };
            const updateArray = !id ? Object.values(accounts) : [ accounts[id] ];
            for (const acc of updateArray) updated[acc.id] = await this.updateAccountInfo(accounts[acc.id]);
            const names = [];
            const filtered = Object.fromEntries(Object.entries(updated).filter((([, v]) => {
                if (names.includes(v.name || "")) return false;
                if (v.name) names.push(v.name);
                return true;
            })));
            await storage.saveAccounts(filtered);
        }
        async update(isForcedByUser = false) {
            var _a, _b;
            const {queries: queryData, queriesList: queriesList, subredditList: subredditList, subreddits: subData, accounts: accounts, options: options, usersList: usersList, mail: mail} = await storage.getAllData();
            const {waitTimeout: waitTimeout, limit: limit = 10, notificationSoundId: notificationSoundId} = options;
            let shouldThrottle = false;
            async function throttle() {
                if (!shouldThrottle) return;
                await wait(waitTimeout * 1e3);
                shouldThrottle = false;
            }
            if (usersList) {
                const updated = await this.updateUsersList(usersList, options, isForcedByUser);
                if (updated) shouldThrottle = true;
            }
            let postNotif = {
                type: NotificationId.post,
                items: []
            };
            for (const subOpts of subredditList) {
                await throttle();
                if (subOpts.disabled) continue;
                const actualLimit = ((_a = subOpts.filterOpts) == null ? void 0 : _a.enabled) && !((_b = subData[subOpts.id]) == null ? void 0 : _b.lastPostCreated) ? Math.max(limit, 25) : limit;
                const newPosts = await this.updateSubreddit({
                    subOpts: subOpts,
                    subData: subData[subOpts.id],
                    listing: {
                        limit: actualLimit
                    }
                });
                if (subOpts.notify && (newPosts == null ? void 0 : newPosts.length)) {
                    const link = getSubredditUrl(subOpts.subreddit, options);
                    postNotif.items.push({
                        name: subOpts.name || subOpts.subreddit,
                        len: newPosts.length,
                        link: link
                    });
                }
                shouldThrottle = true;
            }
            if (postNotif.items.length) notify(postNotif, notificationSoundId);
            postNotif = {
                type: NotificationId.post,
                items: []
            };
            for (const query of queriesList) {
                if (query.disabled) continue;
                await throttle();
                const newMessages = await this.updateQuery({
                    query: query,
                    queryData: queryData[query.id],
                    listing: {
                        limit: limit
                    }
                });
                if (query.notify && (newMessages == null ? void 0 : newMessages.length)) postNotif.items.push({
                    name: query.name || query.query || "",
                    len: newMessages.length,
                    link: getSearchQueryUrl(query.query || "", query.subreddit, options)
                });
                shouldThrottle = true;
            }
            if (postNotif.items.length) notify(postNotif, notificationSoundId);
            if (accounts) await this.updateAccountMail(accounts, options);
            if (mail == null ? void 0 : mail.checkMail) await this.updateMail(mail, options);
        }
    }
    let isUpdating = false;
    async function updateData(isForcedByUser = false, isRecurring = false) {
        if (isUpdating) return;
        isUpdating = true;
        void sendMessage("UPDATING_START");
        let shouldReupdate = false;
        try {
            const app = new NotifierApp((rl => {
                if (rl.reset) void sendMessage("RATE_LIMITS", rl);
            }));
            await app.update(isForcedByUser);
        } catch (e) {
            console.error(e);
            if (isAuthError(e)) {
                await storage.setAuthError(e);
                if (e.invalidateToken) shouldReupdate = true;
            }
        }
        isUpdating = false;
        void sendMessage("UPDATING_END");
        if (shouldReupdate && !isRecurring) return updateData(isForcedByUser, true);
    }
    async function updateAndSchedule(isForcedByUser = false) {
        await updateData(isForcedByUser);
        await scheduleNextUpdate();
    }
    var AlarmType = (AlarmType2 => {
        AlarmType2["ALARM_UPDATE"] = "ALARM_UPDATE";
        return AlarmType2;
    })(AlarmType || {});
    function watchAlarms() {
        browser.alarms.onAlarm.addListener((({name: name}) => {
            if (name === AlarmType.ALARM_UPDATE) void updateData();
        }));
    }
    async function scheduleNextUpdate() {
        const {updateInterval: updateInterval} = await storage.getOptions();
        const minInterval = 30;
        const delayInMinutes = Math.max(updateInterval, minInterval);
        const period = delayInMinutes / 60;
        browser.alarms.create(AlarmType.ALARM_UPDATE, {
            delayInMinutes: period,
            periodInMinutes: period
        });
    }
    async function setIcons({isDark: isDark}) {
        const iconPaths = isDark ? {
            16: "../../images/icon-16-light.png",
            32: "../../images/icon-32-light.png",
            64: "../../images/icon-64-light.png"
        } : {
            16: "../../images/icon-16.png",
            32: "../../images/icon-32.png",
            64: "../../images/icon-64.png"
        };
        return browser.action.setIcon({
            path: iconPaths
        });
    }
    async function mergeOptions() {
        const options = await storage.getOptions();
        await storage.saveOptions({
            ...DEFAULT_OPTIONS,
            ...options
        });
        return options;
    }
    async function onInstall() {
        const listener2 = () => {
            void mergeOptions();
        };
        browser.runtime.onInstalled.addListener(listener2);
    }
    async function restoreIcon() {
        const {iconTheme: iconTheme} = await storage.getOptions();
        if (!iconTheme) return;
        await setIcons({
            isDark: iconTheme === "dark"
        });
    }
    async function setTheme() {
        await browser.action.setBadgeBackgroundColor({
            color: "darkred"
        });
        await restoreIcon();
    }
    let started = false;
    async function startExtension() {
        if (started) return;
        await onInstall();
        browser.runtime.onStartup.addListener((() => void startExtension()));
        void setTheme();
        browser.storage.onChanged.addListener((() => void storage.countNumberOfUnreadItems()));
        void storage.countNumberOfUnreadItems();
        addNotificationClickListener();
        watchAlarms();
        listenForMessages("background");
        onMessage("UPDATE_NOW", (() => updateAndSchedule(true)));
        onMessage("SCHEDULE_NEXT_UPDATE", (() => scheduleNextUpdate()));
        onMessage("OPEN_GROUPS", (payload => openGroups(payload)));
        if (isUpdating) void sendMessage("UPDATING_START");
        await updateAndSchedule();
        started = true;
    }
    void startExtension();
    exports.startExtension = startExtension;
    Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
    });
})(this["reddit-post-notifier"] = this["reddit-post-notifier"] || {});

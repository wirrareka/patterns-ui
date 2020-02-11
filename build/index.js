'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@blueprintjs/core');
var select = require('@blueprintjs/select');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : defineProperty({}, "immer-nothing", true);

var DRAFT_STATE = typeof Symbol !== "undefined" ? Symbol("immer-state") : "__$immer_state";

function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
}

function isDraftable(value) {
    if (!value) return false;
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
    if (Array.isArray(value)) return true;
    var proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}

var assign = Object.assign || function assign(target, value) {
    for (var key in value) {
        if (has(value, key)) {
            target[key] = value[key];
        }
    }
    return target;
};

function shallowCopy(value) {
    if (Array.isArray(value)) return value.slice();
    var target = value.__proto__ === undefined ? Object.create(null) : {};
    return assign(target, value);
}

function each(value, cb) {
    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            cb(i, value[i], value);
        }
    } else {
        for (var key in value) {
            cb(key, value[key], value);
        }
    }
}

function has(thing, prop) {
    return Object.prototype.hasOwnProperty.call(thing, prop);
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

function generatePatches(state, basePath, patches, inversePatches) {
    Array.isArray(state.base) ? generateArrayPatches(state, basePath, patches, inversePatches) : generateObjectPatches(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy,
        assigned = state.assigned;

    var minLength = Math.min(base.length, copy.length);

    // Look for replaced indices.
    for (var i = 0; i < minLength; i++) {
        if (assigned[i] && base[i] !== copy[i]) {
            var path = basePath.concat(i);
            patches.push({ op: "replace", path: path, value: copy[i] });
            inversePatches.push({ op: "replace", path: path, value: base[i] });
        }
    }

    // Did the array expand?
    if (minLength < copy.length) {
        for (var _i = minLength; _i < copy.length; _i++) {
            patches.push({
                op: "add",
                path: basePath.concat(_i),
                value: copy[_i]
            });
        }
        inversePatches.push({
            op: "replace",
            path: basePath.concat("length"),
            value: base.length
        });
    }

    // ...or did it shrink?
    else if (minLength < base.length) {
            patches.push({
                op: "replace",
                path: basePath.concat("length"),
                value: copy.length
            });
            for (var _i2 = minLength; _i2 < base.length; _i2++) {
                inversePatches.push({
                    op: "add",
                    path: basePath.concat(_i2),
                    value: base[_i2]
                });
            }
        }
}

function generateObjectPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy;

    each(state.assigned, function (key, assignedValue) {
        var origValue = base[key];
        var value = copy[key];
        var op = !assignedValue ? "remove" : key in base ? "replace" : "add";
        if (origValue === base && op === "replace") return;
        var path = basePath.concat(key);
        patches.push(op === "remove" ? { op: op, path: path } : { op: op, path: path, value: value });
        inversePatches.push(op === "add" ? { op: "remove", path: path } : op === "remove" ? { op: "add", path: path, value: origValue } : { op: "replace", path: path, value: origValue });
    });
}

function applyPatches(draft, patches) {
    for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];
        var path = patch.path;

        if (path.length === 0 && patch.op === "replace") {
            draft = patch.value;
        } else {
            var base = draft;
            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {
                base = base[path[_i3]];
                if (!base || (typeof base === "undefined" ? "undefined" : _typeof(base)) !== "object") throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); // prettier-ignore
            }
            var key = path[path.length - 1];
            switch (patch.op) {
                case "replace":
                case "add":
                    // TODO: add support is not extensive, it does not support insertion or `-` atm!
                    base[key] = patch.value;
                    break;
                case "remove":
                    if (Array.isArray(base)) {
                        if (key !== base.length - 1) throw new Error("Only the last index of an array can be removed, index: " + key + ", length: " + base.length); // prettier-ignore
                        base.length -= 1;
                    } else {
                        delete base[key];
                    }
                    break;
                default:
                    throw new Error("Unsupported patch operation: " + patch.op);
            }
        }
    }
    return draft;
}

// @ts-check

var descriptors = {};

// For nested produce calls:
var scopes = [];
var currentScope = function currentScope() {
    return scopes[scopes.length - 1];
};

function willFinalize(result, baseDraft, needPatches) {
    var scope = currentScope();
    scope.forEach(function (state) {
        return state.finalizing = true;
    });
    if (result === undefined || result === baseDraft) {
        if (needPatches) markChangesRecursively(baseDraft);
        // This is faster when we don't care about which attributes changed.
        markChangesSweep(scope);
    }
}

function createDraft(base, parent) {
    var draft = void 0;
    if (isDraft(base)) {
        var _state = base[DRAFT_STATE];
        // Avoid creating new drafts when copying.
        _state.finalizing = true;
        draft = shallowCopy(_state.draft);
        _state.finalizing = false;
    } else {
        draft = shallowCopy(base);
    }
    each(base, function (prop) {
        Object.defineProperty(draft, "" + prop, createPropertyProxy("" + prop));
    });

    // See "proxy.js" for property documentation.
    var state = {
        scope: parent ? parent.scope : currentScope(),
        modified: false,
        finalizing: false, // es5 only
        finalized: false,
        assigned: {},
        parent: parent,
        base: base,
        draft: draft,
        copy: null,
        revoke: revoke,
        revoked: false // es5 only
    };

    createHiddenProperty(draft, DRAFT_STATE, state);
    state.scope.push(state);
    return draft;
}

function revoke() {
    this.revoked = true;
}

function source(state) {
    return state.copy || state.base;
}

function _get(state, prop) {
    assertUnrevoked(state);
    var value = source(state)[prop];
    // Drafts are only created for proxyable values that exist in the base state.
    if (!state.finalizing && value === state.base[prop] && isDraftable(value)) {
        prepareCopy(state);
        return state.copy[prop] = createDraft(value, state);
    }
    return value;
}

function _set(state, prop, value) {
    assertUnrevoked(state);
    state.assigned[prop] = true;
    if (!state.modified) {
        if (is(source(state)[prop], value)) return;
        markChanged(state);
        prepareCopy(state);
    }
    state.copy[prop] = value;
}

function markChanged(state) {
    if (!state.modified) {
        state.modified = true;
        if (state.parent) markChanged(state.parent);
    }
}

function prepareCopy(state) {
    if (!state.copy) state.copy = shallowCopy(state.base);
}

function createPropertyProxy(prop) {
    return descriptors[prop] || (descriptors[prop] = {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            return _get(this[DRAFT_STATE], prop);
        },
        set: function set$$1(value) {
            _set(this[DRAFT_STATE], prop, value);
        }
    });
}

function assertUnrevoked(state) {
    if (state.revoked === true) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(state.copy || state.base));
}

// This looks expensive, but only proxies are visited, and only objects without known changes are scanned.
function markChangesSweep(scope) {
    // The natural order of drafts in the `scope` array is based on when they
    // were accessed. By processing drafts in reverse natural order, we have a
    // better chance of processing leaf nodes first. When a leaf node is known to
    // have changed, we can avoid any traversal of its ancestor nodes.
    for (var i = scope.length - 1; i >= 0; i--) {
        var state = scope[i];
        if (state.modified === false) {
            if (Array.isArray(state.base)) {
                if (hasArrayChanges(state)) markChanged(state);
            } else if (hasObjectChanges(state)) markChanged(state);
        }
    }
}

function markChangesRecursively(object) {
    if (!object || (typeof object === "undefined" ? "undefined" : _typeof(object)) !== "object") return;
    var state = object[DRAFT_STATE];
    if (!state) return;
    var base = state.base,
        draft = state.draft,
        assigned = state.assigned;

    if (!Array.isArray(object)) {
        // Look for added keys.
        Object.keys(draft).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (base[key] === undefined && !has(base, key)) {
                assigned[key] = true;
                markChanged(state);
            } else if (!assigned[key]) {
                // Only untouched properties trigger recursion.
                markChangesRecursively(draft[key]);
            }
        });
        // Look for removed keys.
        Object.keys(base).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (draft[key] === undefined && !has(draft, key)) {
                assigned[key] = false;
                markChanged(state);
            }
        });
    } else if (hasArrayChanges(state)) {
        markChanged(state);
        assigned.length = true;
        if (draft.length < base.length) {
            for (var i = draft.length; i < base.length; i++) {
                assigned[i] = false;
            }
        } else {
            for (var _i = base.length; _i < draft.length; _i++) {
                assigned[_i] = true;
            }
        }
        for (var _i2 = 0; _i2 < draft.length; _i2++) {
            // Only untouched indices trigger recursion.
            if (assigned[_i2] === undefined) markChangesRecursively(draft[_i2]);
        }
    }
}

function hasObjectChanges(state) {
    var base = state.base,
        draft = state.draft;

    // Search for added keys. Start at the back, because non-numeric keys
    // are ordered by time of definition on the object.

    var keys = Object.keys(draft);
    for (var i = keys.length - 1; i >= 0; i--) {
        // The `undefined` check is a fast path for pre-existing keys.
        if (base[keys[i]] === undefined && !has(base, keys[i])) {
            return true;
        }
    }

    // Since no keys have been added, we can compare lengths to know if an
    // object has been deleted.
    return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
    var draft = state.draft;

    if (draft.length !== state.base.length) return true;
    // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1);
    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
    if (descriptor && !descriptor.get) return true;
    // For all other cases, we don't have to compare, as they would have been picked up by the index setters
    return false;
}

function createHiddenProperty(target, prop, value) {
    Object.defineProperty(target, prop, {
        value: value,
        enumerable: false,
        writable: true
    });
}



var legacyProxy = Object.freeze({
	scopes: scopes,
	currentScope: currentScope,
	willFinalize: willFinalize,
	createDraft: createDraft
});

// @ts-check

// For nested produce calls:
var scopes$1 = [];
var currentScope$1 = function currentScope() {
    return scopes$1[scopes$1.length - 1];
};

// Do nothing before being finalized.
function willFinalize$1() {}

function createDraft$1(base, parent) {
    var state = {
        // Track which produce call this is associated with.
        scope: parent ? parent.scope : currentScope$1(),
        // True for both shallow and deep changes.
        modified: false,
        // Used during finalization.
        finalized: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned: {},
        // The parent draft state.
        parent: parent,
        // The base state.
        base: base,
        // The base proxy.
        draft: null,
        // Any property proxies.
        drafts: {},
        // The base copy with any updated values.
        copy: null,
        // Called by the `produce` function.
        revoke: null
    };

    var _ref = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps),
        revoke = _ref.revoke,
        proxy = _ref.proxy;

    state.draft = proxy;
    state.revoke = revoke;

    state.scope.push(state);
    return proxy;
}

var objectTraps = {
    get: get$1,
    has: function has$$1(target, prop) {
        return prop in source$1(target);
    },
    ownKeys: function ownKeys(target) {
        return Reflect.ownKeys(source$1(target));
    },

    set: set$1,
    deleteProperty: deleteProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    defineProperty: defineProperty$1,
    setPrototypeOf: function setPrototypeOf() {
        throw new Error("Immer does not support `setPrototypeOf()`.");
    }
};

var arrayTraps = {};
each(objectTraps, function (key, fn) {
    arrayTraps[key] = function () {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function (state, prop) {
    if (isNaN(parseInt(prop))) throw new Error("Immer does not support deleting properties from arrays: " + prop);
    return objectTraps.deleteProperty.call(this, state[0], prop);
};
arrayTraps.set = function (state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop))) throw new Error("Immer does not support setting non-numeric properties on arrays: " + prop);
    return objectTraps.set.call(this, state[0], prop, value);
};

function source$1(state) {
    return state.copy || state.base;
}

function get$1(state, prop) {
    if (prop === DRAFT_STATE) return state;
    var drafts = state.drafts;

    // Check for existing draft in unmodified state.

    if (!state.modified && has(drafts, prop)) {
        return drafts[prop];
    }

    var value = source$1(state)[prop];
    if (state.finalized || !isDraftable(value)) return value;

    // Check for existing draft in modified state.
    if (state.modified) {
        // Assigned values are never drafted. This catches any drafts we created, too.
        if (value !== state.base[prop]) return value;
        // Store drafts on the copy (when one exists).
        drafts = state.copy;
    }

    return drafts[prop] = createDraft$1(value, state);
}

function set$1(state, prop, value) {
    if (!state.modified) {
        // Optimize based on value's truthiness. Truthy values are guaranteed to
        // never be undefined, so we can avoid the `in` operator. Lastly, truthy
        // values may be drafts, but falsy values are never drafts.
        var isUnchanged = value ? is(state.base[prop], value) || value === state.drafts[prop] : is(state.base[prop], value) && prop in state.base;
        if (isUnchanged) return true;
        markChanged$1(state);
    }
    state.assigned[prop] = true;
    state.copy[prop] = value;
    return true;
}

function deleteProperty(state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (state.base[prop] !== undefined || prop in state.base) {
        state.assigned[prop] = false;
        markChanged$1(state);
    }
    if (state.copy) delete state.copy[prop];
    return true;
}

function getOwnPropertyDescriptor(state, prop) {
    var owner = state.modified ? state.copy : has(state.drafts, prop) ? state.drafts : state.base;
    var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (descriptor && !(Array.isArray(owner) && prop === "length")) descriptor.configurable = true;
    return descriptor;
}

function defineProperty$1() {
    throw new Error("Immer does not support defining properties on draft objects.");
}

function markChanged$1(state) {
    if (!state.modified) {
        state.modified = true;
        state.copy = assign(shallowCopy(state.base), state.drafts);
        state.drafts = null;
        if (state.parent) markChanged$1(state.parent);
    }
}

var modernProxy = Object.freeze({
	scopes: scopes$1,
	currentScope: currentScope$1,
	willFinalize: willFinalize$1,
	createDraft: createDraft$1
});

function verifyMinified() {}

var configDefaults = {
    useProxies: typeof Proxy !== "undefined" && typeof Reflect !== "undefined",
    autoFreeze: typeof process !== "undefined" ? process.env.NODE_ENV !== "production" : verifyMinified.name === "verifyMinified",
    onAssign: null,
    onDelete: null,
    onCopy: null
};

var Immer = function () {
    function Immer(config) {
        classCallCheck(this, Immer);

        assign(this, configDefaults, config);
        this.setUseProxies(this.useProxies);
        this.produce = this.produce.bind(this);
    }

    createClass(Immer, [{
        key: "produce",
        value: function produce(base, recipe, patchListener) {
            var _this = this;

            // curried invocation
            if (typeof base === "function" && typeof recipe !== "function") {
                var defaultBase = recipe;
                recipe = base;

                // prettier-ignore
                return function () {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBase;
                    return _this.produce(base, function (draft) {
                        var _recipe;

                        return (_recipe = recipe).call.apply(_recipe, [draft, draft].concat(args));
                    });
                };
            }

            // prettier-ignore
            {
                if (typeof recipe !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
                if (patchListener !== undefined && typeof patchListener !== "function") throw new Error("the third argument of a producer should not be set or a function");
            }

            var result = void 0;
            // Only create proxies for plain objects/arrays.
            if (!isDraftable(base)) {
                result = recipe(base);
                if (result === undefined) return base;
            }
            // See #100, don't nest producers
            else if (isDraft(base)) {
                    result = recipe.call(base, base);
                    if (result === undefined) return base;
                }
                // The given value must be proxied.
                else {
                        this.scopes.push([]);
                        var baseDraft = this.createDraft(base);
                        try {
                            result = recipe.call(baseDraft, baseDraft);
                            this.willFinalize(result, baseDraft, !!patchListener);

                            // Never generate patches when no listener exists.
                            var patches = patchListener && [],
                                inversePatches = patchListener && [];

                            // Finalize the modified draft...
                            if (result === undefined || result === baseDraft) {
                                result = this.finalize(baseDraft, [], patches, inversePatches);
                            }
                            // ...or use a replacement value.
                            else {
                                    // Users must never modify the draft _and_ return something else.
                                    if (baseDraft[DRAFT_STATE].modified) throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore

                                    // Finalize the replacement in case it contains (or is) a subset of the draft.
                                    if (isDraftable(result)) result = this.finalize(result);

                                    if (patchListener) {
                                        patches.push({
                                            op: "replace",
                                            path: [],
                                            value: result
                                        });
                                        inversePatches.push({
                                            op: "replace",
                                            path: [],
                                            value: base
                                        });
                                    }
                                }
                        } finally {
                            this.currentScope().forEach(function (state) {
                                return state.revoke();
                            });
                            this.scopes.pop();
                        }
                        patchListener && patchListener(patches, inversePatches);
                    }
            // Normalize the result.
            return result === NOTHING ? undefined : result;
        }
    }, {
        key: "setAutoFreeze",
        value: function setAutoFreeze(value) {
            this.autoFreeze = value;
        }
    }, {
        key: "setUseProxies",
        value: function setUseProxies(value) {
            this.useProxies = value;
            assign(this, value ? modernProxy : legacyProxy);
        }
        /**
         * @internal
         * Finalize a draft, returning either the unmodified base state or a modified
         * copy of the base state.
         */

    }, {
        key: "finalize",
        value: function finalize(draft, path, patches, inversePatches) {
            var state = draft[DRAFT_STATE];
            if (!state) {
                if (Object.isFrozen(draft)) return draft;
                return this.finalizeTree(draft);
            }
            // Never finalize drafts owned by an outer scope.
            if (state.scope !== this.currentScope()) {
                return draft;
            }
            if (!state.modified) return state.base;
            if (!state.finalized) {
                state.finalized = true;
                this.finalizeTree(state.draft, path, patches, inversePatches);
                if (this.onDelete) {
                    var assigned = state.assigned;

                    for (var prop in assigned) {
                        assigned[prop] || this.onDelete(state, prop);
                    }
                }
                if (this.onCopy) this.onCopy(state);

                // Nested producers must never auto-freeze their result,
                // because it may contain drafts from parent producers.
                if (this.autoFreeze && this.scopes.length === 1) {
                    Object.freeze(state.copy);
                }

                if (patches) generatePatches(state, path, patches, inversePatches);
            }
            return state.copy;
        }
        /**
         * @internal
         * Finalize all drafts in the given state tree.
         */

    }, {
        key: "finalizeTree",
        value: function finalizeTree(root, path, patches, inversePatches) {
            var _this2 = this;

            var state = root[DRAFT_STATE];
            if (state) {
                root = this.useProxies ? state.copy : state.copy = shallowCopy(state.draft);
            }

            var onAssign = this.onAssign;

            var finalizeProperty = function finalizeProperty(prop, value, parent) {
                // Only `root` can be a draft in here.
                var inDraft = !!state && parent === root;

                if (isDraft(value)) {
                    // prettier-ignore
                    parent[prop] = value =
                    // Patches are never generated for assigned properties.
                    patches && inDraft && !state.assigned[prop] ? _this2.finalize(value, path.concat(prop), patches, inversePatches) : _this2.finalize(value);

                    // Unchanged drafts are ignored.
                    if (inDraft && value === state.base[prop]) return;
                }
                // Unchanged draft properties are ignored.
                else if (inDraft && is(value, state.base[prop])) {
                        return;
                    }
                    // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
                    else if (isDraftable(value) && !Object.isFrozen(value)) {
                            each(value, finalizeProperty);
                        }

                if (inDraft && onAssign) {
                    onAssign(state, prop, value);
                }
            };

            each(root, finalizeProperty);
            return root;
        }
    }]);
    return Immer;
}();

var immer = new Immer();

/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */
var produce = immer.produce;

/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */
var applyPatches$1 = produce(applyPatches);

var en = {
    code: 'en',
    range_from: 'Since',
    range_to: 'Till',
    day: 'Day',
    at_day: 'At given date',
    older_than: 'Older than',
    newer_than: 'Newer than',
    range: 'Range',
    value: 'Value',
    equal: 'Equal',
    less_than: 'Less than',
    greater_than: 'Greater than',
    contains: 'Contains',
    starts_with: 'Starts with',
    ends_with: 'Ends with',
    per_page: 'per page',
    selection_none: 'No selection',
    selection_one: 'Selected',
    selection_few: 'Selected',
    selection_many: 'Selected',
    items_none: 'Item',
    items_one: 'Item',
    items_few: 'Items',
    items_many: 'Items',
    first: 'First',
    last: 'Last',
    datePosted: 'Date Posted',
    dateDelivered: 'Delivery Date',
    dateDue: 'Due Date',
    paymentMethod: 'Payment Method',
    bank: 'Bank',
    bankAccount: 'Bank Account',
    variableSymbol: 'Variable Symbol',
    constantSymbol: 'Constant Symbol',
    newItem: 'New Item',
    invoices: {
        new: 'New Invoice',
        type: 'INVOICE / TAX DOCUMENT'
    }
};

var sk = {
    code: 'sk',
    range_from: 'Od',
    range_to: 'Do',
    day: 'Deň',
    at_day: 'V daný deň',
    older_than: 'Staršie ako',
    newer_than: 'Novšie ako',
    range: 'Rozsah',
    value: 'Hodnota',
    equal: 'Rovné',
    less_than: 'Menšie ako',
    greater_than: 'Väčšie ako',
    contains: 'Obsahuje',
    starts_with: 'Začína na',
    ends_with: 'Končí na',
    per_page: 'na stranu',
    selection_none: 'žiadny výber',
    selection_one: 'vybraná',
    selection_few: 'vybrané',
    selection_many: 'vybraných',
    items_none: 'položka',
    items_one: 'položka',
    items_few: 'položky',
    items_many: 'položiek',
    first: 'Prvá',
    last: 'Posledná',
    datePosted: 'Dátum vystavenia',
    dateDelivered: 'Dátum dodania',
    dateDue: 'Dátum splatnosti',
    paymentMethod: 'Spôsob úhrady',
    bank: 'Banka',
    bankAccount: 'Číslo účtu',
    variableSymbol: 'Variabilný symbol',
    constantSymbol: 'Konštantný symbol',
    newItem: 'Nová položka',
    invoices: {
        new: 'Nová faktúra',
        type: 'FAKTŮRA / DAŇOVÝ DOKLAD'
    }
};

var LocaleManager = /** @class */ (function () {
    function LocaleManager() {
        var _this = this;
        this.t = function (key) {
            return _this.locales[_this.locale][key];
        };
        this.tc = function (key, count) {
            var suffix = 'none';
            if (count === 1) {
                suffix = 'one';
            }
            else if (count > 1 && count < 5) {
                suffix = 'few';
            }
            else if (count >= 5) {
                suffix = 'many';
            }
            return _this.t(key + "." + suffix);
        };
        this.locale = 'en';
        this.locales = { en: en, sk: sk };
        this.t = this.t.bind(this);
        this.tc = this.tc.bind(this);
        this.setLocale = this.setLocale.bind(this);
    }
    LocaleManager.prototype.setLocale = function (code, locale) {
        if (this.locales[code]) {
            if (locale) {
                this.locales[code] = locale;
            }
            else {
                throw new Error('Patterns LocaleManager: setLocale called with code for unknown Locale object');
            }
        }
        this.locale = code;
    };
    return LocaleManager;
}());
var localeManager = new LocaleManager();
var t = localeManager.t;

var PageSizeSelect = select.Select.ofType();
function Pagination(_a) {
    var page = _a.page, size = _a.size, total = _a.total, onChange = _a.onChange;
    var pageSizes = [25, 50, 100, 500].map(function (size) { return ({ title: size + " " + t('per_page'), value: size }); });
    var totalPages = Math.ceil(total / size);
    var startPage = 0;
    var endPage = 0;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // more than 10 total pages so calculate start and end pages
        if (page <= 6) {
            startPage = 1;
            endPage = 10;
        }
        else if (page + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        else {
            startPage = page - 5;
            endPage = page + 4;
        }
    }
    var pages = Array.from({ length: endPage + 1 - startPage }, function (_, i) { return startPage + i; });
    return React__default.createElement("div", { className: "patterns-data-table-pagination" },
        React__default.createElement(core.ButtonGroup, null,
            React__default.createElement(core.Button, { disabled: page === 1, minimal: true, onClick: function () { return onChange(1, size); } }, t('first')),
            React__default.createElement(core.Button, { icon: "chevron-left", disabled: page === 1, minimal: true, onClick: function () { return onChange(page, Math.max(1, page - 1)); } }),
            pages.map(function (_page) { return (React__default.createElement(core.Button, { key: _page, style: {
                    color: page === _page ? core.Colors.BLUE1 : core.Colors.GRAY1,
                    fontWeight: page === _page ? 'bold' : 'normal'
                }, minimal: true, onClick: function () { return onChange(_page, size); } }, _page)); }),
            React__default.createElement(core.Button, { icon: "chevron-right", disabled: page === totalPages, minimal: true, onClick: function () {
                    return onChange(Math.min(page + 1, totalPages), size);
                } }),
            React__default.createElement(core.Button, { disabled: page === totalPages, minimal: true, onClick: function () { return onChange(totalPages, size); } }, t('last')),
            React__default.createElement(PageSizeSelect, { items: pageSizes, itemRenderer: function (item, options) { return React__default.createElement(core.MenuItem, { key: "pagination-item-" + item.value, text: item.title, onClick: options.handleClick }); }, onItemSelect: function (item) { return onChange(page, item.value); } },
                React__default.createElement(core.Button, { minimal: true, rightIcon: "chevron-down", text: size + " " + t('per_page'), style: { margin: 0 }, className: "low-button" }))));
}

var Container = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-data-table', style: style }, children);
};
var FlexRow = function (_a) {
    var children = _a.children, flex = _a.flex, style = _a.style;
    return React.createElement('div', { className: 'patterns-flex-row', style: __assign(__assign({}, style), { flex: flex }) }, children);
};
var FlexColumn = function (_a) {
    var children = _a.children, flex = _a.flex, style = _a.style;
    return React.createElement('div', { className: 'patterns-flex-column', style: __assign(__assign({}, style), { flex: flex }) }, children);
};
var Toolbar = function (_a) {
    var children = _a.children, style = _a.style;
    return React.createElement('div', { className: 'patterns-toolbar', style: style }, children);
};

var ColumnPicker = /** @class */ (function (_super) {
    __extends(ColumnPicker, _super);
    function ColumnPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnPicker.ofType = function () {
        return ColumnPicker;
    };
    ColumnPicker.prototype.renderColumns = function () {
        var _this = this;
        return this.props.columns.map(function (column) { return React.createElement(core.Checkbox, { key: "datatable-column-picker-checkbox-" + column.id, label: column.title, checked: column.visible || false, onChange: function (evt) {
                _this.props.onChange(column, evt.currentTarget.checked);
            } }); });
    };
    ColumnPicker.prototype.render = function () {
        return React.createElement(core.Popover, { interactionKind: core.PopoverInteractionKind.CLICK, position: core.PopoverPosition.BOTTOM_RIGHT },
            React.createElement(core.Button, { minimal: true, icon: React.createElement(core.Icon, { icon: "settings" }) }),
            React.createElement("div", { className: "patterns-data-table-column-picker" },
                React.createElement(FlexColumn, { style: { padding: 6, paddingRight: 12 } },
                    React.createElement("strong", { style: { marginBottom: 12 } }, "V\u00FDber st\u013Apcov"),
                    this.renderColumns())));
    };
    return ColumnPicker;
}(React.Component));

(function (ColumnType) {
    ColumnType[ColumnType["Text"] = 0] = "Text";
    ColumnType[ColumnType["Number"] = 1] = "Number";
    ColumnType[ColumnType["Date"] = 2] = "Date";
    ColumnType[ColumnType["DateTime"] = 3] = "DateTime";
    ColumnType[ColumnType["Custom"] = 4] = "Custom";
})(exports.ColumnType || (exports.ColumnType = {}));
(function (Alignment) {
    Alignment["Center"] = "center";
    Alignment["Left"] = "left";
    Alignment["Right"] = "right";
})(exports.Alignment || (exports.Alignment = {}));

// export const Container = <div className="patterns-data-table"/>
var Header = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-data-table-header', style: style }, children);
};
var Content = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-data-table-content', style: style }, children);
};
var ItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-data-table-item-row', style: __assign({}, style) }, children);
};
var ExpandedItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-data-table-item-row-expanded', style: style }, children);
};
var SelectionCount = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-data-table-selection-count', style: style }, children);
};
var Cell = function (_a) {
    var children = _a.children, width = _a.width, flex = _a.flex, head = _a.head, onClick = _a.onClick, className = _a.className, alignment = _a.alignment;
    var style = {};
    if (flex) {
        style.flex = "" + flex;
    }
    if (width) {
        style.width = width + "px";
    }
    if (!flex && !width) {
        style.flex = '1';
    }
    var _className = [
        head ? 'patterns-data-table-cell header' : 'patterns-data-table-cell'
    ];
    if (className) {
        _className.push(className);
    }
    if (alignment) {
        if (width) {
            style.textAlign = alignment;
        }
        if (alignment === exports.Alignment.Center) {
            style.justifyContent = 'center';
        }
        else {
            style.justifyContent = alignment === exports.Alignment.Left ? 'flex-start' : 'flex-end';
        }
    }
    return React__default.createElement('div', { className: _className.join(' '), style: style, onClick: onClick }, children);
};
var Filter = function (_a) {
    var children = _a.children;
    return React__default.createElement('div', { className: 'patterns-data-table-filter' }, children);
};

function TextFilter(_a) {
    var column = _a.column, filterState = _a.filterState, setFilterValue = _a.setFilterValue, setFilterActive = _a.setFilterActive, setFilterComparator = _a.setFilterComparator;
    return React__default.createElement(Filter, null,
        React__default.createElement(FlexColumn, { flex: 1 },
            React__default.createElement(FlexRow, { style: { height: 30, justifyContent: 'center' } },
                React__default.createElement(core.FormGroup, { style: { marginRight: 12 } },
                    React__default.createElement(core.InputGroup, { placeholder: "Filter...", value: filterState.value || '', onChange: function (evt) { return setFilterValue(column, evt.currentTarget.value); } })),
                React__default.createElement(core.Button, { minimal: true, intent: core.Intent.DANGER, className: core.Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, false); }, icon: "cross" }),
                React__default.createElement(core.Button, { minimal: true, intent: core.Intent.SUCCESS, className: core.Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, true); }, icon: "tick" })),
            React__default.createElement(FlexRow, { style: { fontSize: 12, justifyContent: 'start', paddingTop: 6, paddingLeft: 6, marginTop: 6 } },
                React__default.createElement(core.RadioGroup, { selectedValue: filterState.comparator, onChange: function (evt) { return setFilterComparator(column, evt.currentTarget.value); } },
                    React__default.createElement(core.Radio, { label: t('contains'), value: "contains" }),
                    React__default.createElement(core.Radio, { label: t('starts_with'), value: "starts_with" }),
                    React__default.createElement(core.Radio, { label: t('ends_with'), value: "ends_with" })))));
}

function NumberFilter(_a) {
    var column = _a.column, filterState = _a.filterState, setFilterValue = _a.setFilterValue, setFilterActive = _a.setFilterActive, setFilterComparator = _a.setFilterComparator;
    var getValue = function (secondary) {
        if (filterState.comparator === 'range') {
            if (Array.isArray(filterState.value)) {
                return filterState.value[secondary ? 1 : 0].toString();
            }
            else {
                if (secondary) {
                    return '0';
                }
                else {
                    return filterState.value.toString();
                }
            }
        }
        else {
            return filterState.value.toString() || '0';
        }
    };
    return React__default.createElement(Filter, null,
        React__default.createElement(FlexColumn, { flex: 1 },
            React__default.createElement(FlexRow, { style: { height: 30, justifyContent: 'center' } },
                React__default.createElement(core.ControlGroup, null,
                    React__default.createElement(core.FormGroup, { style: { marginRight: 12 } },
                        React__default.createElement(core.InputGroup, { placeholder: filterState.comparator === 'range' ? t('range_from') : t('value'), value: getValue(false), onChange: function (evt) { return setFilterValue(column, parseFloat(evt.currentTarget.value)); } })),
                    filterState.comparator === 'range' &&
                        React__default.createElement(core.FormGroup, null,
                            React__default.createElement(core.InputGroup, { placeholder: t('range_to'), value: getValue(true), onChange: function (evt) { return setFilterValue(column, parseFloat(evt.currentTarget.value), true); } }))),
                React__default.createElement(core.Button, { minimal: true, intent: core.Intent.DANGER, className: core.Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, false); }, icon: "cross" }),
                React__default.createElement(core.Button, { minimal: true, intent: core.Intent.SUCCESS, className: core.Classes.POPOVER_DISMISS, onClick: function (evt) { return setFilterActive(column, true); }, icon: "tick" })),
            React__default.createElement(FlexRow, { style: { fontSize: 12, justifyContent: 'start', paddingTop: 6, paddingLeft: 6, marginTop: 6 } },
                React__default.createElement(core.RadioGroup, { selectedValue: filterState.comparator, onChange: function (evt) { return setFilterComparator(column, evt.currentTarget.value); } },
                    React__default.createElement(core.Radio, { label: t('equal'), value: "eq" }),
                    React__default.createElement(core.Radio, { label: t('less_than'), value: "lte" }),
                    React__default.createElement(core.Radio, { label: t('greater_than'), value: "gte" }),
                    React__default.createElement(core.Radio, { label: t('range'), value: "range" })))));
}

var FilterRenderer = /** @class */ (function (_super) {
    __extends(FilterRenderer, _super);
    function FilterRenderer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.setFilterValue = _this.setFilterValue.bind(_this);
        _this.setFilterComparator = _this.setFilterComparator.bind(_this);
        _this.setFilterActive = _this.setFilterActive.bind(_this);
        return _this;
    }
    FilterRenderer.prototype.setFilterValue = function (column, value, secondary) {
        if (secondary === void 0) { secondary = false; }
        var filterState = produce(this.props.filterState, function (state) {
            if (state.comparator === 'range') {
                // range
                if (column.type === exports.ColumnType.Number) {
                    if (!Array.isArray(state)) {
                        state.value = secondary ? [0, value] : [value, 0];
                    }
                    else {
                        if (secondary) {
                            state.value = [state.value, value];
                        }
                        else {
                            state.value = [value, state.value];
                        }
                    }
                }
                if (column.type === exports.ColumnType.Date) {
                    if (!Array.isArray(state.value)) {
                        state.value = secondary ? [state.value, value] : [value, state.value];
                    }
                    else {
                        var nextVal = state.value[0];
                        if (secondary) {
                            state.value = [nextVal, value];
                        }
                        else {
                            state.value = [value, nextVal];
                        }
                    }
                }
            }
            else {
                // single value
                state.value = value;
            }
        });
        this.props.onFilterStateChange(filterState, false);
    };
    FilterRenderer.prototype.setFilterComparator = function (column, comparator) {
        var filterState = produce(this.props.filterState, function (state) {
            state.comparator = comparator;
        });
        this.props.onFilterStateChange(filterState, false);
    };
    FilterRenderer.prototype.setFilterActive = function (column, value) {
        var filterState = produce(this.props.filterState, function (state) {
            state.active = value;
            if (!value) {
                if (column.type === exports.ColumnType.Text) {
                    state.value = '';
                }
                else if (column.type === exports.ColumnType.Number) {
                    state.value = 0;
                }
                else if (column.type === exports.ColumnType.Date) {
                    state.value = new Date();
                }
            }
        });
        this.props.onFilterStateChange(filterState, true);
    };
    FilterRenderer.prototype.render = function () {
        var filterProps = {
            column: this.props.column,
            filterState: this.props.filterState,
            setFilterActive: this.setFilterActive,
            setFilterComparator: this.setFilterComparator,
            setFilterValue: this.setFilterValue
        };
        if (this.props.column.type === exports.ColumnType.Text) {
            return React__default.createElement(TextFilter, __assign({}, filterProps));
        }
        if (this.props.column.type === exports.ColumnType.Number) {
            return React__default.createElement(NumberFilter, __assign({}, filterProps));
        }
        if (this.props.column.type === exports.ColumnType.Date) {
            return React__default.createElement(NumberFilter, __assign({}, filterProps));
        }
        return React__default.createElement("div", null, "unknown filter");
    };
    return FilterRenderer;
}(React__default.Component));

___$insertStyle("/*\n * Copyright 2017 Palantir Technologies, Inc. All rights reserved.\n */\n.patterns-data-table {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.patterns-data-table .patterns-data-table-header {\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #ced9e0;\n  background-color: #f5f8fa;\n  font-size: 12px;\n  cursor: pointer;\n  height: 32px;\n  flex-shrink: 0;\n}\n.patterns-data-table .patterns-data-table-content {\n  flex: 1;\n  display: block;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  flex-shrink: 1 0 auto;\n}\n.patterns-data-table .patterns-data-table-item-row {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #e1e8ed;\n}\n.patterns-data-table .patterns-data-table-item-row:nth-child(even) {\n  background-color: #f5f8fa;\n}\n.patterns-data-table .patterns-data-table-item-row:hover {\n  background-color: #ebf1f5;\n}\n.patterns-data-table .patterns-data-table-item-row-expanded {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #e1e8ed;\n}\n.patterns-data-table .patterns-data-table-selection-count {\n  margin-left: 12px;\n  align-self: center;\n}\n.patterns-data-table .patterns-data-table-cell {\n  padding-left: 6px;\n  padding-right: 6px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  line-height: 32px;\n  border-left: 1px solid #e1e8ed;\n}\n.patterns-data-table .patterns-data-table-cell:first-child {\n  border-left: none;\n}\n.patterns-data-table .patterns-data-table-cell label.bp3-checkbox {\n  max-width: 40px;\n}\n.patterns-data-table .patterns-data-table-cell.header:hover {\n  background-color: #e1e8ed;\n}\n.patterns-data-table .patterns-data-table-filter {\n  padding: 6px;\n  display: flex;\n  flex-direction: row;\n}\n\n.patterns-data-table-column-picker {\n  padding: 6px 12px;\n}\n\n.patterns-data-table-pagination {\n  text-align: center;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n}\n\n.patterns-flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.patterns-flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.patterns-toolbar {\n  height: 38px;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  flex-shrink: 0;\n  padding: 0 10px;\n  border-top: 1px solid #ced9e0;\n}\n.patterns-toolbar button {\n  font-size: 12px;\n  font-weight: bold;\n  color: #293742;\n}");

var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    function DataTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            query: '',
            page: 1,
            pageSize: 50,
            total: 0,
            sort: _this.props.columns[0].id,
            sortDir: 'asc',
            items: [],
            loading: false,
            selection: {},
            expanded: {},
            columns: _this.props.columns,
            filterStates: _this.buildFilterStates(_this.props.columns)
        };
        _this.selectAll = _this.selectAll.bind(_this);
        return _this;
    }
    DataTable.ofType = function () {
        return DataTable;
    };
    DataTable.prototype.componentDidMount = function () {
        this.fetch();
    };
    DataTable.prototype.buildFilterStates = function (columns) {
        var state = {};
        var getState = function (column) {
            var base = {
                column: column.id,
                active: false,
                comparator: 'contains',
                type: column.type
            };
            if (column.type === exports.ColumnType.Text) {
                return __assign(__assign({}, base), { value: '', comparator: 'contains' });
            }
            if (column.type === exports.ColumnType.Number) {
                return __assign(__assign({}, base), { value: 0, comparator: 'eq' });
            }
            if (column.type === exports.ColumnType.Date) {
                return __assign(__assign({}, base), { value: new Date(), comparator: 'eq' });
            }
            return base;
        };
        columns.forEach(function (column) { return state[column.id] = getState(column); });
        return state;
    };
    DataTable.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, pageSize, sort, sortDir, filterStates, _b, items, total, selection;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.setState({ loading: true })];
                    case 1:
                        _c.sent();
                        _a = this.state, page = _a.page, pageSize = _a.pageSize, sort = _a.sort, sortDir = _a.sortDir, filterStates = _a.filterStates;
                        return [4 /*yield*/, this.props.fetch(page, pageSize, sort, sortDir, filterStates)];
                    case 2:
                        _b = _c.sent(), items = _b.items, total = _b.total;
                        selection = {};
                        items.forEach(function (item) { return selection[item.id] = false; });
                        return [4 /*yield*/, this.setState({ items: items, selection: selection, total: total, loading: false })];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataTable.prototype.formatSelection = function () {
        var count = this.getSelectedIds().length;
        if (count === 0) {
            return React__default.createElement(SelectionCount, null, t('selection_none'));
        }
        else if (count === 1) {
            return React__default.createElement(SelectionCount, null,
                t('selection_one'),
                " ",
                React__default.createElement(core.Tag, { round: true, minimal: true, intent: "primary" },
                    React__default.createElement("strong", null, count)),
                " ",
                t('items_one'));
        }
        else if (count > 1 && count < 5) {
            return React__default.createElement(SelectionCount, null,
                t('selection_few'),
                " ",
                React__default.createElement(core.Tag, { round: true, minimal: true, intent: "primary" },
                    React__default.createElement("strong", null, count)),
                " ",
                t('items_few'));
        }
        else {
            return React__default.createElement(SelectionCount, null,
                t('selection_many'),
                " ",
                React__default.createElement(core.Tag, { round: true, minimal: true, intent: "primary" },
                    React__default.createElement("strong", null, count)),
                " ",
                t('items_many'));
        }
    };
    DataTable.prototype.formatValue = function (item, column) {
        if (column.format) {
            return column.format(item);
        }
        var _item = item;
        var value = _item[column.id];
        if (column.type === exports.ColumnType.Date) {
            return this.props.formatDate(value);
        }
        if (column.type === exports.ColumnType.DateTime) {
            return this.props.formatDate(value);
        }
        return value;
    };
    DataTable.prototype.getSelectedIds = function () {
        var _this = this;
        return Object.keys(this.state.selection).filter(function (key) { return _this.state.selection[key]; });
    };
    DataTable.prototype.isSelected = function (item) {
        return this.getSelectedIds().includes(item.id);
    };
    DataTable.prototype.isExpanded = function (item) {
        return this.getExpandedIds().includes(item.id);
    };
    DataTable.prototype.getExpandedIds = function () {
        var _this = this;
        return Object.keys(this.state.expanded).filter(function (key) { return _this.state.expanded[key]; });
    };
    DataTable.prototype.selectAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allSelected, selection, items;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allSelected = this.getSelectedIds().length === this.state.items.length;
                        selection = produce(this.state.selection, function (state) {
                            Object.keys(state).forEach(function (key) { return state[key] = !allSelected; });
                        });
                        return [4 /*yield*/, this.setState({ selection: selection })];
                    case 1:
                        _a.sent();
                        items = this.getSelectedIds().map(function (id) { return _this.state.items.find(function (item) { return item.id === id; }); });
                        this.props.onSelectionChange(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    DataTable.prototype.renderFilter = function (column) {
        var _this = this;
        return React__default.createElement(FilterRenderer, { column: column, filterState: this.state.filterStates[column.id], onFilterStateChange: function (state, fetch) { return __awaiter(_this, void 0, void 0, function () {
                var filterStates;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            filterStates = produce(this.state.filterStates, function (states) {
                                states[column.id] = state;
                            });
                            return [4 /*yield*/, this.setState({ filterStates: filterStates })];
                        case 1:
                            _a.sent();
                            if (!fetch) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.fetch()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); }, formatDate: this.props.formatDate, parseDate: this.props.parseDate });
    };
    DataTable.prototype.renderEmptyCell = function (column, index) {
        var key = "data-table-item-empty-cell-" + column.id + "-" + index;
        return React__default.createElement(Cell, { className: core.Classes.SKELETON, flex: column.flex, width: column.width, key: key }, "\u00A0");
    };
    DataTable.prototype.renderCell = function (item, column, index) {
        var _this = this;
        if (!column.visible) {
            return null;
        }
        var key = "data-table-item-cell-" + column.id + "-" + index;
        return React__default.createElement(Cell, { flex: column.flex, width: column.width, key: key, onClick: function () { return _this.props.onItemSelect(item); }, alignment: column.alignment }, this.formatValue(item, column));
    };
    DataTable.prototype.renderEmpty = function () {
        var _this = this;
        var rows = [];
        var _loop_1 = function (i) {
            rows.push(React__default.createElement(ItemRow, { key: "data-table-empty-row-" + i }, this_1.state.columns.map(function (column) { return _this.renderEmptyCell(column, i); })));
        };
        var this_1 = this;
        for (var i = 1; i < this.state.pageSize; i++) {
            _loop_1(i);
        }
        return rows;
    };
    DataTable.prototype.renderItems = function () {
        var _this = this;
        return this.state.items.map(function (item, index) {
            var cells = _this.state.columns.map(function (column) { return _this.renderCell(item, column, index); });
            var _item = item;
            if (_this.props.multiple) {
                cells.splice(0, 0, React__default.createElement(Cell, { width: 30, key: "datatable-row-selection-" + index },
                    React__default.createElement(core.Checkbox, { style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }, className: "datatable-item-selector", checked: _this.state.selection[_item.id], onChange: function (evt) { return __awaiter(_this, void 0, void 0, function () {
                            var selection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        selection = produce(this.state.selection, function (state) {
                                            state[_item.id] = evt.currentTarget.checked;
                                        });
                                        return [4 /*yield*/, this.setState({ selection: selection })];
                                    case 1:
                                        _a.sent();
                                        this.props.onSelectionChange(this.state.items.filter(function (item) { return Object.keys(selection).filter(function (key) { return selection[key]; }).includes(item.id); }));
                                        return [2 /*return*/];
                                }
                            });
                        }); } })));
            }
            if (_this.props.expandable) {
                cells.splice(0, 0, React__default.createElement(Cell, { width: 36, key: "datatable-row-expand-" + index },
                    React__default.createElement(core.Button, { minimal: true, icon: React__default.createElement(core.Icon, { color: _this.isExpanded(item) ? core.Colors.RED1 : core.Colors.GRAY5, icon: _this.isExpanded(item) ? 'chevron-down' : 'chevron-right' }), style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }, onClick: function (evt) { return __awaiter(_this, void 0, void 0, function () {
                            var expanded;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        expanded = produce(this.state.expanded, function (state) {
                                            if (typeof state[_item.id] === 'undefined') {
                                                state[_item.id] = false;
                                            }
                                            state[_item.id] = !state[_item.id];
                                        });
                                        return [4 /*yield*/, this.setState({ expanded: expanded })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } })));
            }
            return React__default.createElement(React__default.Fragment, { key: "data-table-item-row-" + index + "-fragment" },
                React__default.createElement(ItemRow, { key: "data-table-item-row-" + index }, cells),
                (_this.props.expandable && _this.isExpanded(item)) &&
                    React__default.createElement(ExpandedItemRow, { key: "data-table-expanded-row-" + index }, _this.props.detailRenderer(item)));
        });
    };
    DataTable.prototype.renderHeader = function () {
        var _this = this;
        var ClientColumnPicker = ColumnPicker.ofType();
        var setSort = function (column) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setState({
                            sort: column.id,
                            sortDir: this.state.sort === column.id ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'asc'
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fetch()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        var cells = this.state.columns.map(function (column) {
            if (!column.visible) {
                return null;
            }
            return React__default.createElement(Cell, { head: true, flex: column.flex, width: column.width, alignment: column.alignment, key: "datatable-header-" + column.id },
                React__default.createElement("div", { style: { flex: 3 }, onClick: function () {
                        if (column.sortable) {
                            setSort(column);
                        }
                    } },
                    React__default.createElement("span", null, column.title)),
                (column.sortable || column.filterable) &&
                    React__default.createElement("div", { style: { flex: 1, alignItems: 'flex-end', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' } },
                        column.sortable && React__default.createElement(core.Button, { className: _this.state.sort === column.id ? '' : 'visible-on-hover', intent: _this.state.sort === column.id ? 'primary' : 'none', minimal: true, onClick: function () { return setSort(column); }, icon: _this.state.sort === column.id ? _this.state.sortDir === 'asc' ? "chevron-up" : 'chevron-down' : 'chevron-up' }),
                        column.filterable && React__default.createElement(core.Popover, { interactionKind: core.PopoverInteractionKind.CLICK, position: core.PopoverPosition.BOTTOM },
                            React__default.createElement(core.Button, { minimal: true, icon: React__default.createElement(core.Icon, { color: _this.state.filterStates[column.id].active ? core.Colors.RED1 : core.Colors.GRAY4, icon: "filter" }), style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 } }),
                            _this.renderFilter(column))));
        });
        if (this.props.multiple) {
            cells.splice(0, 0, React__default.createElement(Cell, { width: 30, key: "datatable-header-selection" },
                React__default.createElement(core.Tooltip, { interactionKind: core.PopoverInteractionKind.HOVER, position: core.PopoverPosition.RIGHT },
                    React__default.createElement(core.Checkbox, { checked: this.getSelectedIds().length === this.state.items.length, onChange: this.selectAll, style: { justifySelf: 'center', alignSelf: 'center', marginBottom: 0 } }),
                    "Ozna\u010Di\u0165 v\u0161etky")));
        }
        if (this.props.expandable) {
            cells.splice(0, 0, React__default.createElement(Cell, { width: 36, key: "datatable-header-expand" },
                React__default.createElement(ClientColumnPicker, { columns: this.state.columns, onChange: function (column, visible) {
                        var columns = produce(_this.state.columns, function (state) {
                            var col = state.find(function (col) { return col.id === column.id; });
                            if (col) {
                                col.visible = visible;
                            }
                        });
                        _this.setState({ columns: columns });
                    } })));
        }
        return React__default.createElement(Header, null, cells);
    };
    DataTable.prototype.renderPagination = function () {
        var _this = this;
        return React__default.createElement(Pagination, { page: this.state.page, size: this.state.pageSize, total: this.state.total, onChange: function (page, pageSize) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.setState({ page: page, pageSize: pageSize })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.fetch()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } });
    };
    DataTable.prototype.render = function () {
        var _this = this;
        return React__default.createElement(Container, null,
            this.renderHeader(),
            React__default.createElement(Content, null,
                this.state.loading && this.renderEmpty(),
                !this.state.loading && this.renderItems()),
            React__default.createElement(Toolbar, null,
                React__default.createElement(FlexRow, { flex: 1 },
                    React__default.createElement(core.Button, { minimal: true, icon: "refresh", onClick: function () { return _this.fetch(); } }),
                    this.formatSelection()),
                React__default.createElement(FlexColumn, { flex: 4 }, this.renderPagination()),
                React__default.createElement(FlexColumn, { flex: 1 }, "\u00A0")));
    };
    return DataTable;
}(React.Component));

exports.Container = Container;
exports.DataTable = DataTable;
exports.FlexColumn = FlexColumn;
exports.FlexRow = FlexRow;
exports.Toolbar = Toolbar;
exports.localeManager = localeManager;
//# sourceMappingURL=index.js.map

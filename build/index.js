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
var datetime = require('@blueprintjs/datetime');

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
    'invoice.new': 'New Invoice',
    'invoice.type': 'INVOICE / TAX DOCUMENT',
    'offer.new': 'New Offer',
    'offer.type': 'PRICE OFFER'
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
    'invoice.new': 'Nová faktúra',
    'invoice.type': 'FAKTŮRA / DAŇOVÝ DOKLAD',
    'offer.new': 'Nová cenová ponuka',
    'offer.type': 'CENOVÁ PONUKA'
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

var Wrapper = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-wrapper', style: style }, children);
};
var Page = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-page', style: style }, children);
};
var Header$1 = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-header', style: style }, children);
};
var Logo = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-logo', style: style }, children);
};
var HeaderCode = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-header-code', style: style }, children);
};
var DocumentType = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-type', style: style }, children);
};
var InvoiceItemRow = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-item-row', style: style }, children);
};
var InvoiceCurrency = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-currency', style: style }, children);
};
var InvoiceTableHeader = function (_a) {
    var children = _a.children, style = _a.style, align = _a.align;
    return React__default.createElement('div', { className: 'patterns-invoice-table-header', style: __assign(__assign({}, style), { textAlign: align }) }, children);
};
var InvoiceItemsHeaderRow = function (_a) {
    var children = _a.children, style = _a.style, flex = _a.flex;
    return React__default.createElement('div', { className: 'patterns-invoice-table-header-row', style: __assign(__assign({}, style), { flex: flex }) }, children);
};
var InvoiceItemsContainer = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-items', style: style }, children);
};
var AddressBoxContainer = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-address-box', style: style }, children);
};
var AddressBoxHeader = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-address-box-header', style: style }, children);
};
var AddressBoxName = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-address-box-name', style: style }, children);
};
var AddressBoxOther = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-address-box-other', style: style }, children);
};
var AddressBoxVatLabel = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-address-box-vat-label', style: style }, children);
};
var AddressBoxVatValue = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.createElement('div', { className: 'patterns-invoice-address-box-vat-value', style: style }, children);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lodash_clonedeep = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
});

var BaseModel = /** @class */ (function () {
    function BaseModel(_data) {
        this.id = _data.id;
        this.createdAt = _data.createdAt ? new Date(_data.createdAt) : new Date();
        this.updatedAt = _data.updatedAt ? new Date(_data.updatedAt) : new Date();
    }
    Object.defineProperty(BaseModel.prototype, "exists", {
        get: function () {
            return typeof this.id === 'string' && this.id.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "clone", {
        get: function () {
            return lodash_clonedeep(this);
        },
        enumerable: true,
        configurable: true
    });
    return BaseModel;
}());

var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name || '';
        _this.street = data.street || '';
        _this.street2 = data.street2 || '';
        _this.zip = data.zip || '';
        _this.city = data.city || '';
        _this.country = data.country || '';
        _this.email = data.email || '';
        _this.phone = data.phone || '';
        _this.site = data.site || '';
        _this.business_id = data.business_id || '';
        _this.vat_id = data.vat_id || '';
        _this.vat_payer_id = data.vat_payer_id || '';
        _this.isActive = data.isActive || '';
        _this.note = data.note || '';
        _this.firstName = data.firstName || '';
        _this.lastName = data.lastName || '';
        _this.fullName = data.fullName || [data.firstName, data.lastName].filter(function (f) { return f && f.length > 0; }).join(' ');
        return _this;
    }
    return Contact;
}(BaseModel));

var Currency = /** @class */ (function (_super) {
    __extends(Currency, _super);
    function Currency(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        _this.symbol = data.symbol;
        return _this;
    }
    return Currency;
}(BaseModel));

var InvoiceItem = /** @class */ (function (_super) {
    __extends(InvoiceItem, _super);
    function InvoiceItem(data) {
        var _this = _super.call(this, data) || this;
        _this.invoice_id = data.invoice_id || '';
        _this.index = data.index || 0;
        _this.item_id = data.item_id || '';
        _this.item_name = data.item_name || '';
        _this.item_description = data.item_description || '';
        _this.unit_id = data.unit_id || '';
        _this.unit_code = data.unit_code || '';
        _this.unit_price = data.unit_price || 0;
        _this.line_price = data.line_price || 0;
        _this.quantity = data.quantity || 0;
        _this.vat = data.vat || 0;
        _this.vat_price = data.vat_price || 0;
        _this.price_with_vat = data.price_with_vat || 0;
        _this.note = data.note || '';
        return _this;
    }
    InvoiceItem.prototype.recalculate = function () {
        this.line_price = this.unit_price * this.quantity;
        this.vat_price = this.line_price * (this.vat / 100);
        this.price_with_vat = this.line_price + this.vat_price;
    };
    return InvoiceItem;
}(BaseModel));

var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(data) {
        var _this = _super.call(this, data) || this;
        _this.code = data.code;
        _this.currency = new Currency(data.currency || {});
        _this.company = new Contact(data.company || {});
        _this.customer = new Contact(data.customer || {});
        _this.price = data.price || 0;
        _this.price_with_vat = data.price_with_vat || 0;
        _this.dueAt = data.dueAt ? new Date(data.dueAt) : new Date(_this.createdAt);
        _this.note = data.note || '';
        _this.items = (data.items || []).map(function (i) { return new InvoiceItem(i); });
        _this.paymentMethod = data.paymentMethod;
        _this.recalculate();
        return _this;
    }
    Invoice.prototype.recalculate = function () {
        console.log('recalculate', this);
        this.price = this.items.reduce(function (prev, next) { return prev + (next.line_price); }, 0) || 0;
        this.price_with_vat = this.items.reduce(function (prev, next) { return prev + (next.line_price + next.vat_price); }, 0) || 0;
    };
    Object.defineProperty(Invoice.prototype, "vats", {
        get: function () {
            var vats = {};
            this.items.forEach(function (item) {
                if (!vats["" + item.vat]) {
                    vats["" + item.vat] = { base: item.line_price, price: item.vat_price };
                }
                else {
                    vats["" + item.vat] += { base: item.line_price, price: item.vat_price };
                }
            });
            return Object.keys(vats).map(function (vat) { return ({ vat: vat, base: vats[vat].base, price: vats[vat].price }); });
        },
        enumerable: true,
        configurable: true
    });
    return Invoice;
}(BaseModel));

var PaymentMethod = /** @class */ (function (_super) {
    __extends(PaymentMethod, _super);
    function PaymentMethod(data) {
        var _this = _super.call(this, data) || this;
        _this.title = data.title;
        return _this;
    }
    return PaymentMethod;
}(BaseModel));

var rightAlign = {
    textAlign: 'right',
    justifyContent: 'flex-end'
};
function InvoiceItemView(_a) {
    var item = _a.item, onChange = _a.onChange;
    var onNameChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.item_name = value;
        onChange(clone);
    };
    var onPriceChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.unit_price = value;
        clone.recalculate();
        onChange(clone);
    };
    var onLinePriceChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.line_price = value;
        clone.unit_price = value / clone.quantity;
        clone.recalculate();
        onChange(clone);
    };
    var onQuantityChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.quantity = value;
        clone.recalculate();
        onChange(clone);
    };
    var onVatChange = function (value) {
        var clone = new InvoiceItem(item);
        clone.vat = value;
        clone.recalculate();
        onChange(clone);
    };
    return React__default.createElement(InvoiceItemRow, { key: "invoice-item-" + item.index },
        React__default.createElement(FlexRow, { flex: 2, style: { textAlign: 'left', fontSize: 14 } },
            React__default.createElement(core.InputGroup, { fill: true, placeholder: "Editova\u0165", value: item.item_name, onChange: function (evt) { return onNameChange(evt.currentTarget.value); }, name: "name" })),
        React__default.createElement(FlexRow, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React__default.createElement(core.NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.unit_price, onValueChange: onPriceChange }),
            React__default.createElement(InvoiceCurrency, null, "EUR")),
        React__default.createElement(FlexRow, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React__default.createElement(core.NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.quantity, onValueChange: onQuantityChange }),
            React__default.createElement(InvoiceCurrency, null, item.unit_code || 'ks')),
        React__default.createElement(FlexRow, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React__default.createElement(core.NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.line_price, onValueChange: onLinePriceChange }),
            React__default.createElement(InvoiceCurrency, null, "EUR")),
        React__default.createElement(FlexRow, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React__default.createElement(core.NumericInput, { fill: true, buttonPosition: "none", className: "align-right", placeholder: "Editova\u0165", value: item.vat, onValueChange: onVatChange }),
            React__default.createElement(InvoiceCurrency, null, "%")),
        React__default.createElement(FlexRow, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React__default.createElement(core.EditableText, { className: "align-right", placeholder: "Editova\u0165", value: "" + item.vat_price.toFixed(2) }),
            React__default.createElement(InvoiceCurrency, null, "EUR")),
        React__default.createElement(FlexRow, { flex: 1, style: __assign(__assign({}, rightAlign), { alignItems: 'center' }) },
            React__default.createElement(core.EditableText, { className: "align-right", placeholder: "Editova\u0165", value: "" + item.price_with_vat.toFixed(2) }),
            React__default.createElement(InvoiceCurrency, null, "EUR")));
}

function InvoiceItems(_a) {
    var invoice = _a.invoice, onChange = _a.onChange;
    var change = function (item) {
        var clone = new Invoice(invoice);
        clone.items.splice(item.index, 1, item);
        onChange(clone);
    };
    var trash = function (item) {
        var clone = new Invoice(invoice);
        clone.items.splice(item.index, 1);
        onChange(clone);
    };
    var duplicate = function (item) {
        var clone = new Invoice(invoice);
        clone.items.splice(item.index, 0, item.clone);
        clone.items.forEach(function (item, index) { return item.index = index; });
        onChange(clone);
    };
    return React__default.createElement(InvoiceItemsContainer, null,
        React__default.createElement(InvoiceItemsHeaderRow, null,
            React__default.createElement(FlexColumn, { flex: 2 },
                React__default.createElement(InvoiceTableHeader, null, "N\u00C1ZOV")),
            React__default.createElement(FlexColumn, { flex: 1 },
                React__default.createElement(InvoiceTableHeader, { align: "right" }, "JEDN. CENA BEZ DPH")),
            React__default.createElement(FlexColumn, { flex: 1 },
                React__default.createElement(InvoiceTableHeader, { align: "right" }, "MNO\u017DSTVO")),
            React__default.createElement(FlexColumn, { flex: 1 },
                React__default.createElement(InvoiceTableHeader, { align: "right" }, "CELKOM BEZ DPH")),
            React__default.createElement(FlexColumn, { flex: 1 },
                React__default.createElement(InvoiceTableHeader, { align: "right" }, "DPH")),
            React__default.createElement(FlexColumn, { flex: 1 },
                React__default.createElement(InvoiceTableHeader, { align: "right" }, "HODNOTA DPH")),
            React__default.createElement(FlexColumn, { flex: 1 },
                React__default.createElement(InvoiceTableHeader, { align: "right" }, "HODNOTA S DPH"))),
        invoice.items.map(function (item, index) { return React__default.createElement("div", { key: "invoice-item-" + index, style: { flex: 1 } },
            React__default.createElement(core.Popover, { key: "invoice-item-" + index, interactionKind: core.PopoverInteractionKind.HOVER, position: core.PopoverPosition.RIGHT },
                React__default.createElement(InvoiceItemView, { item: item, onChange: function (item) { return change(item); } }),
                React__default.createElement(core.ButtonGroup, null,
                    React__default.createElement(core.Button, { minimal: true, intent: "danger", icon: "trash", onClick: function () { return trash(item); } }),
                    React__default.createElement(core.Button, { minimal: true, intent: "none", icon: "duplicate", onClick: function () { return duplicate(item); } })))); }));
}

var ContactSuggest = select.Suggest.ofType();
function AddressBox(_a) {
    var _this = this;
    var contact = _a.contact, header = _a.header, onChange = _a.onChange, fetch = _a.fetch, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var _c = React.useState([]), results = _c[0], setResults = _c[1];
    var _d = React.useState(''), query = _d[0], setQuery = _d[1];
    console.log('contact changed', contact);
    React.useEffect(function () {
        setQuery(contact.name.length > 0 ? contact.name : contact.fullName);
    }, [contact]);
    var update = function (field, value) { return __awaiter(_this, void 0, void 0, function () {
        var clone, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('update', value);
                    clone = new Contact(contact.clone);
                    clone[field] = value;
                    if (!(field === 'name')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(value)];
                case 1:
                    items = _a.sent();
                    setResults(items);
                    _a.label = 2;
                case 2:
                    onChange(clone);
                    return [2 /*return*/];
            }
        });
    }); };
    var inputUpdate = function (evt) {
        console.log('on input update');
        var clone = new Contact(contact.clone);
        clone[evt.currentTarget.name] = evt.currentTarget.value;
        onChange(clone);
    };
    var onSelect = function (contact) {
        console.log('on select');
        var clone = new Contact(contact.clone);
        onChange(clone);
    };
    return React__default.createElement(AddressBoxContainer, null,
        React__default.createElement(AddressBoxHeader, null, header),
        React__default.createElement(AddressBoxName, null, !disabled ?
            React__default.createElement(FlexRow, null,
                React__default.createElement(ContactSuggest, { fill: true, className: "suggest-minimal", items: results, inputValueRenderer: function (contact) { return contact.name || contact.fullName; }, itemRenderer: function (contact, options) { return React__default.createElement(core.MenuItem, { key: "contact-" + contact.id, text: contact.name.length > 0 ? contact.name : contact.fullName, onClick: options.handleClick }); }, onItemSelect: function (contact) { return onSelect(contact); }, query: query, selectedItem: contact, onQueryChange: function (query) { return update('name', query); }, noResults: React__default.createElement(core.MenuItem, { icon: "plus", text: "Nov\u00FD klient" }) }),
                React__default.createElement(core.Button, { minimal: true, style: { width: 30 }, icon: "cross", onClick: function () {
                        setResults([new Contact({})]);
                        setQuery('');
                        onChange(new Contact({}));
                    } }))
            :
                React__default.createElement("div", { className: "suggest-minimal" },
                    React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.name, name: "name", onChange: inputUpdate, placeholder: "Meno" }))),
        React__default.createElement(AddressBoxOther, null,
            React__default.createElement(FlexColumn, null,
                React__default.createElement(FlexRow, { style: { height: 26 } },
                    React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.street, name: "street", onChange: inputUpdate, placeholder: "Ulica" })),
                (!disabled || contact.street2.length > 0) &&
                    React__default.createElement(FlexRow, { style: { height: 26 } },
                        React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.street2, name: "street2", onChange: inputUpdate, placeholder: "Ulica 2" })),
                disabled && (contact.street2.length === 0) && React__default.createElement(FlexRow, { style: { height: 26 } })),
            React__default.createElement(FlexRow, { style: { height: 26 } },
                React__default.createElement("div", { style: { flex: 1 } },
                    React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.zip, name: "zip", onChange: inputUpdate, placeholder: "PS\u010C" })),
                React__default.createElement("div", { style: { flex: 4 } },
                    React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.city, name: "city", onChange: inputUpdate, placeholder: "Mesto" }))),
            React__default.createElement(FlexRow, { style: { height: 26 } },
                React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.country, name: "country", onChange: inputUpdate, placeholder: "Krajina" }))),
        React__default.createElement(FlexRow, null,
            React__default.createElement(FlexColumn, { style: { flex: 1, marginTop: 14 } },
                (!disabled || contact.business_id.length > 0) &&
                    React__default.createElement(FlexRow, null,
                        React__default.createElement(AddressBoxVatLabel, null, "I\u010CO:"),
                        React__default.createElement(AddressBoxVatValue, null,
                            React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.business_id, name: "business_id", onChange: inputUpdate, placeholder: "I\u010CO" }))),
                (!disabled || contact.vat_payer_id.length > 0) &&
                    React__default.createElement(FlexRow, null,
                        React__default.createElement(AddressBoxVatLabel, null, "DI\u010C:"),
                        React__default.createElement(AddressBoxVatValue, null,
                            React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.vat_payer_id, name: "vat_payer_id", onChange: inputUpdate, placeholder: "DI\u010C" }))),
                (!disabled || contact.vat_id.length > 0) &&
                    React__default.createElement(FlexRow, null,
                        React__default.createElement(AddressBoxVatLabel, null, "I\u010C DPH:"),
                        React__default.createElement(AddressBoxVatValue, null,
                            React__default.createElement(core.InputGroup, { fill: true, disabled: disabled, value: contact.vat_payer_id, name: "vat_id", onChange: inputUpdate, placeholder: "I\u010C DPH" }))))));
}

___$insertStyle("/*\n * Copyright 2017 Palantir Technologies, Inc. All rights reserved.\n */\n.patterns-invoice-wrapper {\n  background-color: #ced9e0;\n  width: 100%;\n  max-height: calc(100vh - 46px);\n  overflow-y: scroll;\n}\n.patterns-invoice-wrapper .patterns-invoice-page {\n  background-color: white;\n  max-width: 90%;\n  min-height: 800px;\n  margin: 40px auto;\n  padding: 50px 50px;\n  box-shadow: 0 15px 15px 5px #ced9e0;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input {\n  border: none;\n  box-shadow: none;\n  height: 24px;\n  line-height: 20px;\n  margin: 0 0 0 -6px;\n  padding: 0 0 0 6px;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input:hover, .patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input:focus {\n  background-color: #e1e8ed;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input:disabled, .patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input.bp3-disabled {\n  color: black;\n  background-color: transparent;\n}\n.patterns-invoice-wrapper .patterns-invoice-header {\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n}\n.patterns-invoice-wrapper .patterns-invoice-logo {\n  flex: 1;\n}\n.patterns-invoice-wrapper .patterns-invoice-logo img {\n  max-height: 60px;\n}\n.patterns-invoice-wrapper .patterns-invoice-header-code {\n  text-align: right;\n  font-size: 36px;\n  font-weight: bold;\n}\n.patterns-invoice-wrapper .patterns-invoice-type {\n  text-align: right;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8f8f8f;\n}\n.patterns-invoice-wrapper .patterns-invoice-item {\n  flex: 2;\n  border-top: 3px solid #cccccc;\n  padding-top: 10px;\n  margin-left: 5px;\n  flex-direction: column;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input {\n  border: none;\n  box-shadow: none;\n  height: 24px;\n  line-height: 20px;\n  margin: 0 0 0 -6px;\n  padding: 0 0 0 6px;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input:hover, .patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input:focus {\n  background-color: #e1e8ed;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input:disabled, .patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input.bp3-disabled {\n  color: black;\n  background-color: transparent;\n}\n.patterns-invoice-wrapper .patterns-invoice-items {\n  margin-top: 50px;\n  flex-direction: column;\n  flex: 1;\n}\n.patterns-invoice-wrapper .patterns-invoice-items .bp3-popover-target {\n  width: 100%;\n}\n.patterns-invoice-wrapper .patterns-invoice-items .bp3-popover-target input {\n  text-align: right;\n}\n.patterns-invoice-wrapper .patterns-invoice-items .bp3-popover-target input[name=name] {\n  text-align: left;\n}\n.patterns-invoice-wrapper .patterns-invoice-item-row {\n  flex-direction: row;\n  display: flex;\n  flex: 1;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.patterns-invoice-wrapper .patterns-invoice-table-header {\n  font-size: 12px;\n  font-weight: normal;\n  color: black;\n}\n.patterns-invoice-wrapper .patterns-invoice-table-header-row {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 3px solid black;\n  padding-bottom: 6px;\n  margin-top: 24px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box {\n  flex: 2;\n  border-top: 3px solid #cccccc;\n  padding-top: 10px;\n  margin-left: 5px;\n  flex-direction: column;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input {\n  border: none;\n  box-shadow: none;\n  height: 24px;\n  line-height: 20px;\n  margin: 0 0 0 -6px;\n  padding: 0 0 0 6px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input:hover, .patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input:focus {\n  background-color: #e1e8ed;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input:disabled, .patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input.bp3-disabled {\n  color: black;\n  background-color: transparent;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-header {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #d0d0d0;\n  font-weight: bold;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-name {\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 4px;\n  height: 36px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-other {\n  font-size: 14px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-vat-label {\n  font-size: 14px;\n  line-height: 24px;\n  flex: 1;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-vat-value {\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: bold;\n  flex: 1;\n}");

var DefaultPaymentMethods = [
    new PaymentMethod({ id: 'cash', title: 'Hotovosť' }),
    new PaymentMethod({ id: 'card', title: 'Kartou' }),
    new PaymentMethod({ id: 'transfer', title: 'Bankový prevod' }),
    new PaymentMethod({ id: 'paypal', title: 'Paypal' })
];
var PaymentMethodSelect = select.Select.ofType();
var InvoiceDocument = /** @class */ (function (_super) {
    __extends(InvoiceDocument, _super);
    function InvoiceDocument(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    InvoiceDocument.prototype.onChange = function (invoice) {
        invoice.recalculate();
        this.props.onChange(invoice);
    };
    InvoiceDocument.prototype.render = function () {
        var _this = this;
        var paymentMethod = this.props.paymentMethods.find(function (method) { return method.id === _this.props.invoice.paymentMethod; }) || DefaultPaymentMethods[2];
        return React__default.createElement(Wrapper, null,
            React__default.createElement(Page, null,
                React__default.createElement(Header$1, null,
                    this.props.logo && React__default.createElement(Logo, null,
                        React__default.createElement("img", { alt: "logo", src: this.props.logo })),
                    React__default.createElement(FlexColumn, { style: { flex: 1 } },
                        React__default.createElement(HeaderCode, null, this.props.invoice.code || t('invoice.new')),
                        React__default.createElement(DocumentType, null, t('invoice.documentType')))),
                React__default.createElement(FlexRow, { style: { alignItems: 'flex-start' } },
                    React__default.createElement(FlexColumn, { flex: 1, style: { justifyContent: 'flex-end', marginRight: 30 } }, "Obchodny\u0301 register OS Trnava Oddiel Sro, vloz\u030Cka c\u030C. 34375/T"),
                    React__default.createElement(AddressBox, { key: "address-vendor", disabled: true, header: "DOD\u00C1VATE\u013D", contact: this.props.invoice.company, onChange: function (contact) {
                            var clone = new Invoice(_this.props.invoice.clone);
                            clone.company = contact;
                            _this.onChange(clone);
                        }, fetch: function (query) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, []];
                        }); }); } }),
                    React__default.createElement(AddressBox, { key: "address-customer", header: "ODBERATE\u013D", contact: this.props.invoice.customer, onChange: function (contact) {
                            var clone = new Invoice(_this.props.invoice.clone);
                            clone.customer = contact;
                            _this.onChange(clone);
                        }, fetch: function (query) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, []];
                        }); }); } })),
                React__default.createElement(FlexRow, { style: { marginTop: 24, paddingTop: 0, fontSize: 14, marginBottom: 24, alignItems: 'flex-start' } },
                    React__default.createElement(FlexRow, { flex: 1, style: { borderTop: '3px solid #cccccc', paddingTop: 10, marginRight: 30 } },
                        React__default.createElement(FlexColumn, { flex: 1 },
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('datePosted')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('dateDelivered')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('dateDue')))),
                    React__default.createElement(FlexRow, { flex: 2, style: { borderTop: '3px solid #cccccc', paddingTop: 10 } },
                        React__default.createElement(FlexColumn, { style: { marginLeft: 5, fontWeight: 'bold' } },
                            React__default.createElement(datetime.DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.invoice.createdAt }),
                            React__default.createElement(datetime.DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.invoice.createdAt }),
                            React__default.createElement(datetime.DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.invoice.dueAt }))),
                    React__default.createElement(FlexRow, { flex: 2, style: { borderTop: '3px solid #cccccc', marginLeft: 5, paddingTop: 10 } },
                        React__default.createElement(FlexColumn, { flex: 1 },
                            React__default.createElement(FlexRow, { style: { height: 30, alignItems: 'center' } }, t('paymentMethod')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('bank')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('bankAccount')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('variableSymbol')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('constantSymbol'))),
                        React__default.createElement(FlexColumn, { flex: 1, style: { fontWeight: 'bold' } },
                            React__default.createElement(FlexRow, { style: { height: 30, alignItems: 'center' } },
                                React__default.createElement(PaymentMethodSelect, { items: this.props.paymentMethods, activeItem: paymentMethod, onItemSelect: function (item) {
                                        var clone = new Invoice(_this.props.invoice.clone);
                                        clone.paymentMethod = item.id;
                                        _this.onChange(clone);
                                    }, itemRenderer: function (item, options) { return React__default.createElement(core.MenuItem, { key: item.id, text: item.title, onClick: options.handleClick }); } },
                                    React__default.createElement(core.Button, { style: { marginLeft: -10, fontWeight: 'bold' }, minimal: true, rightIcon: "chevron-down", text: paymentMethod.title }))),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, "V\u00DAB, a.s."),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, "2121123456 / 1100"),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, this.props.invoice.code),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, "0308")))),
                React__default.createElement(InvoiceItems, { invoice: this.props.invoice, onChange: this.onChange }),
                React__default.createElement(FlexRow, null,
                    React__default.createElement(FlexRow, { flex: 2, style: { marginTop: 12, alignItems: 'start' } },
                        React__default.createElement(core.Button, { minimal: true, intent: "success", icon: "plus", text: t('newItem'), onClick: function () {
                                var invoice = new Invoice(_this.props.invoice.clone);
                                invoice.items.push(new InvoiceItem({ index: _this.props.invoice.items.length }));
                                _this.onChange(invoice);
                            } })),
                    React__default.createElement(FlexColumn, { flex: 1, style: { paddingTop: 24 } },
                        React__default.createElement(FlexRow, { flex: 1 },
                            React__default.createElement(FlexColumn, { flex: 1 }, "Vat Recap"),
                            React__default.createElement(FlexColumn, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "RATE"),
                            React__default.createElement(FlexColumn, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "BASE"),
                            React__default.createElement(FlexColumn, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "VAT")),
                        this.props.invoice.vats.map(function (vat, index) { return React__default.createElement(FlexRow, { key: "invoice-vat-" + index, flex: 1, style: { height: 24, alignItems: 'center' } },
                            React__default.createElement(FlexColumn, { flex: 1 }),
                            React__default.createElement(FlexColumn, { style: { textAlign: 'right' }, flex: 1 },
                                vat.vat,
                                "%"),
                            React__default.createElement(FlexColumn, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.base, _this.props.invoice.currency)),
                            React__default.createElement(FlexColumn, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.price, _this.props.invoice.currency))); }),
                        React__default.createElement(FlexRow, { flex: 1, style: { height: 42, alignItems: 'center' } },
                            React__default.createElement(FlexColumn, { flex: 1 }, "Total"),
                            React__default.createElement(FlexColumn, { style: { borderTop: '3px solid black', textAlign: 'right', height: 32, justifyContent: 'center', fontSize: 18, backgroundColor: core.Colors.LIGHT_GRAY5 }, flex: 3 }, this.props.formatPrice(this.props.invoice.price, this.props.invoice.currency))))),
                React__default.createElement(FlexRow, { style: { marginTop: 120 } },
                    React__default.createElement(FlexColumn, { flex: 1 }),
                    React__default.createElement(FlexColumn, { flex: 1, style: { textAlign: 'right' } },
                        React__default.createElement("div", null, "......................................................."),
                        React__default.createElement("div", null, "Podpis")))));
    };
    return InvoiceDocument;
}(React.Component));

var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer(data) {
        var _this = _super.call(this, data) || this;
        _this.validTill = data.validTill ? new Date(data.validTill) : new Date(_this.createdAt);
        return _this;
    }
    return Offer;
}(Invoice));

___$insertStyle("/*\n * Copyright 2017 Palantir Technologies, Inc. All rights reserved.\n */\n.patterns-invoice-wrapper {\n  background-color: #ced9e0;\n  width: 100%;\n  max-height: calc(100vh - 46px);\n  overflow-y: scroll;\n}\n.patterns-invoice-wrapper .patterns-invoice-page {\n  background-color: white;\n  max-width: 90%;\n  min-height: 800px;\n  margin: 40px auto;\n  padding: 50px 50px;\n  box-shadow: 0 15px 15px 5px #ced9e0;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input {\n  border: none;\n  box-shadow: none;\n  height: 24px;\n  line-height: 20px;\n  margin: 0 0 0 -6px;\n  padding: 0 0 0 6px;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input:hover, .patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input:focus {\n  background-color: #e1e8ed;\n}\n.patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input:disabled, .patterns-invoice-wrapper .patterns-invoice-page .bp3-input-group input.bp3-input.bp3-disabled {\n  color: black;\n  background-color: transparent;\n}\n.patterns-invoice-wrapper .patterns-invoice-header {\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n}\n.patterns-invoice-wrapper .patterns-invoice-logo {\n  flex: 1;\n}\n.patterns-invoice-wrapper .patterns-invoice-logo img {\n  max-height: 60px;\n}\n.patterns-invoice-wrapper .patterns-invoice-header-code {\n  text-align: right;\n  font-size: 36px;\n  font-weight: bold;\n}\n.patterns-invoice-wrapper .patterns-invoice-type {\n  text-align: right;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8f8f8f;\n}\n.patterns-invoice-wrapper .patterns-invoice-item {\n  flex: 2;\n  border-top: 3px solid #cccccc;\n  padding-top: 10px;\n  margin-left: 5px;\n  flex-direction: column;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input {\n  border: none;\n  box-shadow: none;\n  height: 24px;\n  line-height: 20px;\n  margin: 0 0 0 -6px;\n  padding: 0 0 0 6px;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input:hover, .patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input:focus {\n  background-color: #e1e8ed;\n}\n.patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input:disabled, .patterns-invoice-wrapper .patterns-invoice-item .bp3-input-group input.bp3-input.bp3-disabled {\n  color: black;\n  background-color: transparent;\n}\n.patterns-invoice-wrapper .patterns-invoice-items {\n  margin-top: 50px;\n  flex-direction: column;\n  flex: 1;\n}\n.patterns-invoice-wrapper .patterns-invoice-items .bp3-popover-target {\n  width: 100%;\n}\n.patterns-invoice-wrapper .patterns-invoice-items .bp3-popover-target input {\n  text-align: right;\n}\n.patterns-invoice-wrapper .patterns-invoice-items .bp3-popover-target input[name=name] {\n  text-align: left;\n}\n.patterns-invoice-wrapper .patterns-invoice-item-row {\n  flex-direction: row;\n  display: flex;\n  flex: 1;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.patterns-invoice-wrapper .patterns-invoice-table-header {\n  font-size: 12px;\n  font-weight: normal;\n  color: black;\n}\n.patterns-invoice-wrapper .patterns-invoice-table-header-row {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 3px solid black;\n  padding-bottom: 6px;\n  margin-top: 24px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box {\n  flex: 2;\n  border-top: 3px solid #cccccc;\n  padding-top: 10px;\n  margin-left: 5px;\n  flex-direction: column;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input {\n  border: none;\n  box-shadow: none;\n  height: 24px;\n  line-height: 20px;\n  margin: 0 0 0 -6px;\n  padding: 0 0 0 6px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input:hover, .patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input:focus {\n  background-color: #e1e8ed;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input:disabled, .patterns-invoice-wrapper .patterns-invoice-address-box .bp3-input-group input.bp3-input.bp3-disabled {\n  color: black;\n  background-color: transparent;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-header {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #d0d0d0;\n  font-weight: bold;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-name {\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 4px;\n  height: 36px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-other {\n  font-size: 14px;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-vat-label {\n  font-size: 14px;\n  line-height: 24px;\n  flex: 1;\n}\n.patterns-invoice-wrapper .patterns-invoice-address-box .patterns-invoice-address-box-vat-value {\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: bold;\n  flex: 1;\n}");

var DefaultPaymentMethods$1 = [
    new PaymentMethod({ id: 'cash', title: 'Hotovosť' }),
    new PaymentMethod({ id: 'card', title: 'Kartou' }),
    new PaymentMethod({ id: 'transfer', title: 'Bankový prevod' }),
    new PaymentMethod({ id: 'paypal', title: 'Paypal' })
];
var PaymentMethodSelect$1 = select.Select.ofType();
var OfferDocument = /** @class */ (function (_super) {
    __extends(OfferDocument, _super);
    function OfferDocument(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    OfferDocument.prototype.onChange = function (offer) {
        offer.recalculate();
        this.props.onChange(offer);
    };
    OfferDocument.prototype.render = function () {
        var _this = this;
        var paymentMethod = this.props.paymentMethods.find(function (method) { return method.id === _this.props.offer.paymentMethod; }) || DefaultPaymentMethods$1[2];
        return React__default.createElement(Wrapper, null,
            React__default.createElement(Page, null,
                React__default.createElement(Header$1, null,
                    this.props.logo && React__default.createElement(Logo, null,
                        React__default.createElement("img", { alt: "logo", src: this.props.logo })),
                    React__default.createElement(FlexColumn, { style: { flex: 1 } },
                        React__default.createElement(HeaderCode, null, this.props.offer.code || t('offer.new')),
                        React__default.createElement(DocumentType, null, t('offer.documentType')))),
                React__default.createElement(FlexRow, { style: { alignItems: 'flex-start' } },
                    React__default.createElement(FlexColumn, { flex: 1, style: { justifyContent: 'flex-end', marginRight: 30 } }, "Obchodny\u0301 register OS Trnava Oddiel Sro, vloz\u030Cka c\u030C. 34375/T"),
                    React__default.createElement(AddressBox, { key: "address-vendor", disabled: true, header: "DOD\u00C1VATE\u013D", contact: this.props.offer.company, onChange: function (contact) {
                            var clone = new Offer(_this.props.offer.clone);
                            clone.company = contact;
                            _this.onChange(clone);
                        }, fetch: this.props.fetch }),
                    React__default.createElement(AddressBox, { key: "address-customer", header: "ODBERATE\u013D", contact: this.props.offer.customer, onChange: function (contact) {
                            var clone = new Offer(_this.props.offer.clone);
                            clone.customer = contact;
                            _this.onChange(clone);
                        }, fetch: this.props.fetch })),
                React__default.createElement(FlexRow, { style: { marginTop: 24, paddingTop: 0, fontSize: 14, marginBottom: 24, alignItems: 'flex-start' } },
                    React__default.createElement(FlexRow, { flex: 1, style: { borderTop: '3px solid #cccccc', paddingTop: 10, marginRight: 30 } },
                        React__default.createElement(FlexColumn, { flex: 1 },
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('datePosted')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('dateDelivered')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('dateDue')))),
                    React__default.createElement(FlexRow, { flex: 2, style: { borderTop: '3px solid #cccccc', paddingTop: 10 } },
                        React__default.createElement(FlexColumn, { style: { marginLeft: 5, fontWeight: 'bold' } },
                            React__default.createElement(datetime.DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.offer.createdAt }),
                            React__default.createElement(datetime.DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.offer.createdAt }),
                            React__default.createElement(datetime.DateInput, { formatDate: this.props.formatDate, parseDate: this.props.parseDate, value: this.props.offer.dueAt }))),
                    React__default.createElement(FlexRow, { flex: 2, style: { borderTop: '3px solid #cccccc', marginLeft: 5, paddingTop: 10 } },
                        React__default.createElement(FlexColumn, { flex: 1 },
                            React__default.createElement(FlexRow, { style: { height: 30, alignItems: 'center' } }, t('paymentMethod')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('bank')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('bankAccount')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('variableSymbol')),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, t('constantSymbol'))),
                        React__default.createElement(FlexColumn, { flex: 1, style: { fontWeight: 'bold' } },
                            React__default.createElement(FlexRow, { style: { height: 30, alignItems: 'center' } },
                                React__default.createElement(PaymentMethodSelect$1, { items: this.props.paymentMethods, activeItem: paymentMethod, onItemSelect: function (item) {
                                        var clone = new Offer(_this.props.offer.clone);
                                        clone.paymentMethod = item.id;
                                        _this.onChange(clone);
                                    }, itemRenderer: function (item, options) { return React__default.createElement(core.MenuItem, { key: item.id, text: item.title, onClick: options.handleClick }); } },
                                    React__default.createElement(core.Button, { style: { marginLeft: -10, fontWeight: 'bold' }, minimal: true, rightIcon: "chevron-down", text: paymentMethod.title }))),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, "V\u00DAB, a.s."),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, "2121123456 / 1100"),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, this.props.offer.code),
                            React__default.createElement(FlexRow, { style: { height: 24, alignItems: 'center' } }, "0308")))),
                React__default.createElement(InvoiceItems, { invoice: this.props.offer, onChange: this.onChange }),
                React__default.createElement(FlexRow, null,
                    React__default.createElement(FlexRow, { flex: 2, style: { marginTop: 12, alignItems: 'start' } },
                        React__default.createElement(core.Button, { minimal: true, intent: "success", icon: "plus", text: t('newItem'), onClick: function () {
                                var offer = new Offer(_this.props.offer.clone);
                                offer.items.push(new InvoiceItem({ index: _this.props.offer.items.length }));
                                _this.onChange(offer);
                            } })),
                    React__default.createElement(FlexColumn, { flex: 1, style: { paddingTop: 24 } },
                        React__default.createElement(FlexRow, { flex: 1 },
                            React__default.createElement(FlexColumn, { flex: 1 }, "Vat Recap"),
                            React__default.createElement(FlexColumn, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "RATE"),
                            React__default.createElement(FlexColumn, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "BASE"),
                            React__default.createElement(FlexColumn, { style: { borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }, flex: 1 }, "VAT")),
                        this.props.offer.vats.map(function (vat, index) { return React__default.createElement(FlexRow, { key: "invoice-vat-" + index, flex: 1, style: { height: 24, alignItems: 'center' } },
                            React__default.createElement(FlexColumn, { flex: 1 }),
                            React__default.createElement(FlexColumn, { style: { textAlign: 'right' }, flex: 1 },
                                vat.vat,
                                "%"),
                            React__default.createElement(FlexColumn, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.base, _this.props.offer.currency)),
                            React__default.createElement(FlexColumn, { style: { textAlign: 'right' }, flex: 1 }, _this.props.formatPrice(vat.price, _this.props.offer.currency))); }),
                        React__default.createElement(FlexRow, { flex: 1, style: { height: 42, alignItems: 'center' } },
                            React__default.createElement(FlexColumn, { flex: 1 }, "Total"),
                            React__default.createElement(FlexColumn, { style: { borderTop: '3px solid black', textAlign: 'right', height: 32, justifyContent: 'center', fontSize: 18, backgroundColor: core.Colors.LIGHT_GRAY5 }, flex: 3 }, this.props.formatPrice(this.props.offer.price, this.props.offer.currency))))),
                React__default.createElement(FlexRow, { style: { marginTop: 120 } },
                    React__default.createElement(FlexColumn, { flex: 1 }),
                    React__default.createElement(FlexColumn, { flex: 1, style: { textAlign: 'right' } },
                        React__default.createElement("div", null, "......................................................."),
                        React__default.createElement("div", null, "Podpis")))));
    };
    return OfferDocument;
}(React.Component));

var index = {
    BaseModel: BaseModel,
    Contact: Contact,
    Currency: Currency,
    Invoice: Invoice,
    InvoiceItem: InvoiceItem,
    Offer: Offer,
    PaymentMethod: PaymentMethod
};

exports.Container = Container;
exports.DataTable = DataTable;
exports.DefaultPaymentMethods = DefaultPaymentMethods;
exports.FlexColumn = FlexColumn;
exports.FlexRow = FlexRow;
exports.Invoice = InvoiceDocument;
exports.Models = index;
exports.Offer = OfferDocument;
exports.Toolbar = Toolbar;
exports.localeManager = localeManager;
//# sourceMappingURL=index.js.map

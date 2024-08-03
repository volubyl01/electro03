/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/react-dom@18.3.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from "react";
import n from "scheduler";
var t = { exports: {} };
var r = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l = e,
  a = n;
function u(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var o = new Set(),
  i = {};
function s(e, n) {
  c(e, n);
  c(e + "Capture", n);
}
function c(e, n) {
  i[e] = n;
  for (e = 0; e < n.length; e++) o.add(n[e]);
}
var f = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  d = Object.prototype.hasOwnProperty,
  p =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  h = {},
  m = {};
function g(e) {
  if (d.call(m, e)) return !0;
  if (d.call(h, e)) return !1;
  if (p.test(e)) return (m[e] = !0);
  h[e] = !0;
  return !1;
}
function v(e, n, t, r) {
  if (null !== t && 0 === t.type) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (r) return !1;
      if (null !== t) return !t.acceptsBooleans;
      e = e.toLowerCase().slice(0, 5);
      return "data-" !== e && "aria-" !== e;
    default:
      return !1;
  }
}
function y(e, n, t, r) {
  if (null === n || "undefined" === typeof n || v(e, n, t, r)) return !0;
  if (r) return !1;
  if (null !== t)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return !1 === n;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function b(e, n, t, r, l, a, u) {
  this.acceptsBooleans = 2 === n || 3 === n || 4 === n;
  this.attributeName = r;
  this.attributeNamespace = l;
  this.mustUseProperty = t;
  this.propertyName = e;
  this.type = n;
  this.sanitizeURL = a;
  this.removeEmptyString = u;
}
var k = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    k[e] = new b(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  k[n] = new b(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  k[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  k[e] = new b(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    k[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  k[e] = new b(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  k[e] = new b(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  k[e] = new b(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  k[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var w = /[\-:]([a-z])/g;
function S(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(w, S);
    k[n] = new b(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(w, S);
    k[n] = new b(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(w, S);
  k[n] = new b(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  k[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
k.xlinkHref = new b(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  k[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function x(e, n, t, r) {
  var l = k.hasOwnProperty(n) ? k[n] : null;
  if (
    null !== l
      ? 0 !== l.type
      : r ||
        !(2 < n.length) ||
        ("o" !== n[0] && "O" !== n[0]) ||
        ("n" !== n[1] && "N" !== n[1])
  )
    y(n, t, l, r) && (t = null),
      r || null === l
        ? g(n) &&
          (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
          ? (e[l.propertyName] = null === t ? (3 === l.type ? !1 : "") : t)
          : ((n = l.attributeName),
            (r = l.attributeNamespace),
            null === t
              ? e.removeAttribute(n)
              : ((l = l.type),
                (t = 3 === l || (4 === l && !0 === t) ? "" : "" + t),
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t)));
}
var E = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  C = Symbol.for("react.element"),
  N = Symbol.for("react.portal"),
  _ = Symbol.for("react.fragment"),
  z = Symbol.for("react.strict_mode"),
  P = Symbol.for("react.profiler"),
  L = Symbol.for("react.provider"),
  T = Symbol.for("react.context"),
  M = Symbol.for("react.forward_ref"),
  F = Symbol.for("react.suspense"),
  R = Symbol.for("react.suspense_list"),
  D = Symbol.for("react.memo"),
  O = Symbol.for("react.lazy");
var I = Symbol.for("react.offscreen");
var U = Symbol.iterator;
function V(e) {
  if (null === e || "object" !== typeof e) return null;
  e = (U && e[U]) || e["@@iterator"];
  return "function" === typeof e ? e : null;
}
var A = Object.assign,
  B;
function H(e) {
  if (void 0 === B)
    try {
      throw Error();
    } catch (e) {
      var n = e.stack.trim().match(/\n( *(at )?)/);
      B = (n && n[1]) || "";
    }
  return "\n" + B + e;
}
var W = !1;
function Q(e, n) {
  if (!e || W) return "";
  W = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        "object" === typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (e) {
          var r = e;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (e) {
          r = e;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (e) {
        r = e;
      }
      e();
    }
  } catch (n) {
    if (n && r && "string" === typeof n.stack) {
      for (
        var l = n.stack.split("\n"),
          a = r.stack.split("\n"),
          u = l.length - 1,
          o = a.length - 1;
        1 <= u && 0 <= o && l[u] !== a[o];

      )
        o--;
      for (; 1 <= u && 0 <= o; u--, o--)
        if (l[u] !== a[o]) {
          if (1 !== u || 1 !== o) {
            do {
              if ((u--, o--, 0 > o || l[u] !== a[o])) {
                var i = "\n" + l[u].replace(" at new ", " at ");
                e.displayName &&
                  i.includes("<anonymous>") &&
                  (i = i.replace("<anonymous>", e.displayName));
                return i;
              }
            } while (1 <= u && 0 <= o);
          }
          break;
        }
    }
  } finally {
    (W = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? H(e) : "";
}
function j(e) {
  switch (e.tag) {
    case 5:
      return H(e.type);
    case 16:
      return H("Lazy");
    case 13:
      return H("Suspense");
    case 19:
      return H("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Q(e.type, !1)), e;
    case 11:
      return (e = Q(e.type.render, !1)), e;
    case 1:
      return (e = Q(e.type, !0)), e;
    default:
      return "";
  }
}
function $(e) {
  if (null == e) return null;
  if ("function" === typeof e) return e.displayName || e.name || null;
  if ("string" === typeof e) return e;
  switch (e) {
    case _:
      return "Fragment";
    case N:
      return "Portal";
    case P:
      return "Profiler";
    case z:
      return "StrictMode";
    case F:
      return "Suspense";
    case R:
      return "SuspenseList";
  }
  if ("object" === typeof e)
    switch (e.$$typeof) {
      case T:
        return (e.displayName || "Context") + ".Consumer";
      case L:
        return (e._context.displayName || "Context") + ".Provider";
      case M:
        var n = e.render;
        e = e.displayName;
        e ||
          ((e = n.displayName || n.name || ""),
          (e = "" !== e ? "ForwardRef(" + e + ")" : "ForwardRef"));
        return e;
      case D:
        return (
          (n = e.displayName || null), null !== n ? n : $(e.type) || "Memo"
        );
      case O:
        n = e._payload;
        e = e._init;
        try {
          return $(e(n));
        } catch (e) {}
    }
  return null;
}
function K(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $(n);
    case 8:
      return n === z ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof n) return n.displayName || n.name || null;
      if ("string" === typeof n) return n;
  }
  return null;
}
function q(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Y(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    "input" === e.toLowerCase() &&
    ("checkbox" === n || "radio" === n)
  );
}
function X(e) {
  var n = Y(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    "undefined" !== typeof t &&
    "function" === typeof t.get &&
    "function" === typeof t.set
  ) {
    var l = t.get,
      a = t.set;
    Object.defineProperty(e, n, {
      configurable: !0,
      get: function () {
        return l.call(this);
      },
      set: function (e) {
        r = "" + e;
        a.call(this, e);
      },
    });
    Object.defineProperty(e, n, { enumerable: t.enumerable });
    return {
      getValue: function () {
        return r;
      },
      setValue: function (e) {
        r = "" + e;
      },
      stopTracking: function () {
        e._valueTracker = null;
        delete e[n];
      },
    };
  }
}
function G(e) {
  e._valueTracker || (e._valueTracker = X(e));
}
function Z(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue();
  var r = "";
  e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value);
  e = r;
  return e !== t ? (n.setValue(e), !0) : !1;
}
function J(e) {
  e = e || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof e) return null;
  try {
    return e.activeElement || e.body;
  } catch (n) {
    return e.body;
  }
}
function ee(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != t ? t : e._wrapperState.initialChecked,
  });
}
function ne(e, n) {
  var t = null == n.defaultValue ? "" : n.defaultValue,
    r = null != n.checked ? n.checked : n.defaultChecked;
  t = q(null != n.value ? n.value : t);
  e._wrapperState = {
    initialChecked: r,
    initialValue: t,
    controlled:
      "checkbox" === n.type || "radio" === n.type
        ? null != n.checked
        : null != n.value,
  };
}
function te(e, n) {
  n = n.checked;
  null != n && x(e, "checked", n, !1);
}
function re(e, n) {
  te(e, n);
  var t = q(n.value),
    r = n.type;
  if (null != t)
    if ("number" === r) {
      if ((0 === t && "" === e.value) || e.value != t) e.value = "" + t;
    } else e.value !== "" + t && (e.value = "" + t);
  else if ("submit" === r || "reset" === r) {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ae(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ae(e, n.type, q(n.defaultValue));
  null == n.checked &&
    null != n.defaultChecked &&
    (e.defaultChecked = !!n.defaultChecked);
}
function le(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        ("submit" !== r && "reset" !== r) ||
        (void 0 !== n.value && null !== n.value)
      )
    )
      return;
    n = "" + e._wrapperState.initialValue;
    t || n === e.value || (e.value = n);
    e.defaultValue = n;
  }
  t = e.name;
  "" !== t && (e.name = "");
  e.defaultChecked = !!e._wrapperState.initialChecked;
  "" !== t && (e.name = t);
}
function ae(e, n, t) {
  if ("number" !== n || J(e.ownerDocument) !== e)
    null == t
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t);
}
var ue = Array.isArray;
function oe(e, n, t, r) {
  e = e.options;
  if (n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    t = "" + q(t);
    n = null;
    for (l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0;
        r && (e[l].defaultSelected = !0);
        return;
      }
      null !== n || e[l].disabled || (n = e[l]);
    }
    null !== n && (n.selected = !0);
  }
}
function ie(e, n) {
  if (null != n.dangerouslySetInnerHTML) throw Error(u(91));
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function se(e, n) {
  var t = n.value;
  if (null == t) {
    t = n.children;
    n = n.defaultValue;
    if (null != t) {
      if (null != n) throw Error(u(92));
      if (ue(t)) {
        if (1 < t.length) throw Error(u(93));
        t = t[0];
      }
      n = t;
    }
    null == n && (n = "");
    t = n;
  }
  e._wrapperState = { initialValue: q(t) };
}
function ce(e, n) {
  var t = q(n.value),
    r = q(n.defaultValue);
  null != t &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t));
  null != r && (e.defaultValue = "" + r);
}
function fe(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n);
}
function de(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pe(e, n) {
  return null == e || "http://www.w3.org/1999/xhtml" === e
    ? de(n)
    : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var he,
  me = (function (e) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
      e.innerHTML = n;
    else {
      he = he || document.createElement("div");
      he.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>";
      for (n = he.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function ge(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && 3 === t.nodeType) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var ve = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ye = ["Webkit", "ms", "Moz", "O"];
Object.keys(ve).forEach(function (e) {
  ye.forEach(function (n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1);
    ve[n] = ve[e];
  });
});
function be(e, n, t) {
  return null == n || "boolean" === typeof n || "" === n
    ? ""
    : t || "number" !== typeof n || 0 === n || (ve.hasOwnProperty(e) && ve[e])
      ? ("" + n).trim()
      : n + "px";
}
function ke(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = 0 === t.indexOf("--"),
        l = be(t, n[t], r);
      "float" === t && (t = "cssFloat");
      r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var we = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Se(e, n) {
  if (n) {
    if (we[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
      throw Error(u(137, e));
    if (null != n.dangerouslySetInnerHTML) {
      if (null != n.children) throw Error(u(60));
      if (
        "object" !== typeof n.dangerouslySetInnerHTML ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(u(61));
    }
    if (null != n.style && "object" !== typeof n.style) throw Error(u(62));
  }
}
function xe(e, n) {
  if (-1 === e.indexOf("-")) return "string" === typeof n.is;
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ee = null;
function Ce(e) {
  e = e.target || e.srcElement || window;
  e.correspondingUseElement && (e = e.correspondingUseElement);
  return 3 === e.nodeType ? e.parentNode : e;
}
var Ne = null,
  _e = null,
  ze = null;
function Pe(e) {
  if ((e = Hl(e))) {
    if ("function" !== typeof Ne) throw Error(u(280));
    var n = e.stateNode;
    n && ((n = Ql(n)), Ne(e.stateNode, e.type, n));
  }
}
function Le(e) {
  _e ? (ze ? ze.push(e) : (ze = [e])) : (_e = e);
}
function Te() {
  if (_e) {
    var e = _e,
      n = ze;
    ze = _e = null;
    Pe(e);
    if (n) for (e = 0; e < n.length; e++) Pe(n[e]);
  }
}
function Me(e, n) {
  return e(n);
}
function Fe() {}
var Re = !1;
function De(e, n, t) {
  if (Re) return e(n, t);
  Re = !0;
  try {
    return Me(e, n, t);
  } finally {
    if (((Re = !1), null !== _e || null !== ze)) Fe(), Te();
  }
}
function Oe(e, n) {
  var t = e.stateNode;
  if (null === t) return null;
  var r = Ql(t);
  if (null === r) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          "button" === e ||
          "input" === e ||
          "select" === e ||
          "textarea" === e
        )));
      e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && "function" !== typeof t) throw Error(u(231, n, typeof t));
  return t;
}
var Ie = !1;
if (f)
  try {
    var Ue = {};
    Object.defineProperty(Ue, "passive", {
      get: function () {
        Ie = !0;
      },
    });
    window.addEventListener("test", Ue, Ue);
    window.removeEventListener("test", Ue, Ue);
  } catch (e) {
    Ie = !1;
  }
function Ve(e, n, t, r, l, a, u, o, i) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, s);
  } catch (e) {
    this.onError(e);
  }
}
var Ae = !1,
  Be = null,
  He = !1,
  We = null,
  Qe = {
    onError: function (e) {
      Ae = !0;
      Be = e;
    },
  };
function je(e, n, t, r, l, a, u, o, i) {
  Ae = !1;
  Be = null;
  Ve.apply(Qe, arguments);
}
function $e(e, n, t, r, l, a, o, i, s) {
  je.apply(this, arguments);
  if (Ae) {
    if (Ae) {
      var c = Be;
      Ae = !1;
      Be = null;
    } else throw Error(u(198));
    He || ((He = !0), (We = c));
  }
}
function Ke(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do {
      (n = e), 0 !== (n.flags & 4098) && (t = n.return), (e = n.return);
    } while (e);
  }
  return 3 === n.tag ? t : null;
}
function qe(e) {
  if (13 === e.tag) {
    var n = e.memoizedState;
    null === n && ((e = e.alternate), null !== e && (n = e.memoizedState));
    if (null !== n) return n.dehydrated;
  }
  return null;
}
function Ye(e) {
  if (Ke(e) !== e) throw Error(u(188));
}
function Xe(e) {
  var n = e.alternate;
  if (!n) {
    n = Ke(e);
    if (null === n) throw Error(u(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (null === l) break;
    var a = l.alternate;
    if (null === a) {
      r = l.return;
      if (null !== r) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === t) return Ye(l), e;
        if (a === r) return Ye(l), n;
        a = a.sibling;
      }
      throw Error(u(188));
    }
    if (t.return !== r.return) (t = l), (r = a);
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === t) {
          o = !0;
          t = l;
          r = a;
          break;
        }
        if (i === r) {
          o = !0;
          r = l;
          t = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === t) {
            o = !0;
            t = a;
            r = l;
            break;
          }
          if (i === r) {
            o = !0;
            r = a;
            t = l;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(u(189));
      }
    }
    if (t.alternate !== r) throw Error(u(190));
  }
  if (3 !== t.tag) throw Error(u(188));
  return t.stateNode.current === t ? e : n;
}
function Ge(e) {
  e = Xe(e);
  return null !== e ? Ze(e) : null;
}
function Ze(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e; ) {
    var n = Ze(e);
    if (null !== n) return n;
    e = e.sibling;
  }
  return null;
}
var Je = a.unstable_scheduleCallback,
  en = a.unstable_cancelCallback,
  nn = a.unstable_shouldYield,
  tn = a.unstable_requestPaint,
  rn = a.unstable_now,
  ln = a.unstable_getCurrentPriorityLevel,
  an = a.unstable_ImmediatePriority,
  un = a.unstable_UserBlockingPriority,
  on = a.unstable_NormalPriority,
  sn = a.unstable_LowPriority,
  cn = a.unstable_IdlePriority,
  fn = null,
  dn = null;
function pn(e) {
  if (dn && "function" === typeof dn.onCommitFiberRoot)
    try {
      dn.onCommitFiberRoot(fn, e, void 0, 128 === (e.current.flags & 128));
    } catch (e) {}
}
var hn = Math.clz32 ? Math.clz32 : vn,
  mn = Math.log,
  gn = Math.LN2;
function vn(e) {
  e >>>= 0;
  return 0 === e ? 32 : (31 - ((mn(e) / gn) | 0)) | 0;
}
var yn = 64,
  bn = 4194304;
function kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function wn(e, n) {
  var t = e.pendingLanes;
  if (0 === t) return 0;
  var r = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    u = t & 268435455;
  if (0 !== u) {
    var o = u & ~l;
    0 !== o ? (r = kn(o)) : ((a &= u), 0 !== a && (r = kn(a)));
  } else (u = t & ~l), 0 !== u ? (r = kn(u)) : 0 !== a && (r = kn(a));
  if (0 === r) return 0;
  if (
    0 !== n &&
    n !== r &&
    0 === (n & l) &&
    ((l = r & -r), (a = n & -n), l >= a || (16 === l && 0 !== (a & 4194240)))
  )
    return n;
  0 !== (r & 4) && (r |= t & 16);
  n = e.entangledLanes;
  if (0 !== n)
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - hn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Sn(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xn(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var u = 31 - hn(a),
      o = 1 << u,
      i = l[u];
    if (-1 === i) {
      if (0 === (o & t) || 0 !== (o & r)) l[u] = Sn(o, n);
    } else i <= n && (e.expiredLanes |= o);
    a &= ~o;
  }
}
function En(e) {
  e = e.pendingLanes & -1073741825;
  return 0 !== e ? e : e & 1073741824 ? 1073741824 : 0;
}
function Cn() {
  var e = yn;
  yn <<= 1;
  0 === (yn & 4194240) && (yn = 64);
  return e;
}
function Nn(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function _n(e, n, t) {
  e.pendingLanes |= n;
  536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0));
  e = e.eventTimes;
  n = 31 - hn(n);
  e[n] = t;
}
function zn(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n;
  e.suspendedLanes = 0;
  e.pingedLanes = 0;
  e.expiredLanes &= n;
  e.mutableReadLanes &= n;
  e.entangledLanes &= n;
  n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - hn(t),
      a = 1 << l;
    n[l] = 0;
    r[l] = -1;
    e[l] = -1;
    t &= ~a;
  }
}
function Pn(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - hn(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n);
    t &= ~l;
  }
}
var Ln = 0;
function Tn(e) {
  e &= -e;
  return 1 < e ? (4 < e ? (0 !== (e & 268435455) ? 16 : 536870912) : 4) : 1;
}
var Mn,
  Fn,
  Rn,
  Dn,
  On,
  In = !1,
  Un = [],
  Vn = null,
  An = null,
  Bn = null,
  Hn = new Map(),
  Wn = new Map(),
  Qn = [],
  jn =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function $n(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vn = null;
      break;
    case "dragenter":
    case "dragleave":
      An = null;
      break;
    case "mouseover":
    case "mouseout":
      Bn = null;
      break;
    case "pointerover":
    case "pointerout":
      Hn.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(n.pointerId);
  }
}
function Kn(e, n, t, r, l, a) {
  if (null === e || e.nativeEvent !== a)
    return (
      (e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [l],
      }),
      null !== n && ((n = Hl(n)), null !== n && Fn(n)),
      e
    );
  e.eventSystemFlags |= r;
  n = e.targetContainers;
  null !== l && -1 === n.indexOf(l) && n.push(l);
  return e;
}
function qn(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (Vn = Kn(Vn, e, n, t, r, l)), !0;
    case "dragenter":
      return (An = Kn(An, e, n, t, r, l)), !0;
    case "mouseover":
      return (Bn = Kn(Bn, e, n, t, r, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      Hn.set(a, Kn(Hn.get(a) || null, e, n, t, r, l));
      return !0;
    case "gotpointercapture":
      return (
        (a = l.pointerId), Wn.set(a, Kn(Wn.get(a) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Yn(e) {
  var n = Bl(e.target);
  if (null !== n) {
    var t = Ke(n);
    if (null !== t)
      if (((n = t.tag), 13 === n)) {
        if (((n = qe(t)), null !== n)) {
          e.blockedOn = n;
          On(e.priority, function () {
            Rn(t);
          });
          return;
        }
      } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null;
        return;
      }
  }
  e.blockedOn = null;
}
function Xn(e) {
  if (null !== e.blockedOn) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ot(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (null === t) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      Ee = r;
      t.target.dispatchEvent(r);
      Ee = null;
    } else return (n = Hl(t)), null !== n && Fn(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Gn(e, n, t) {
  Xn(e) && t.delete(n);
}
function Zn() {
  In = !1;
  null !== Vn && Xn(Vn) && (Vn = null);
  null !== An && Xn(An) && (An = null);
  null !== Bn && Xn(Bn) && (Bn = null);
  Hn.forEach(Gn);
  Wn.forEach(Gn);
}
function Jn(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    In ||
      ((In = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Zn)));
}
function et(e) {
  function n(n) {
    return Jn(n, e);
  }
  if (0 < Un.length) {
    Jn(Un[0], e);
    for (var t = 1; t < Un.length; t++) {
      var r = Un[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  null !== Vn && Jn(Vn, e);
  null !== An && Jn(An, e);
  null !== Bn && Jn(Bn, e);
  Hn.forEach(n);
  Wn.forEach(n);
  for (t = 0; t < Qn.length; t++)
    (r = Qn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qn.length && ((t = Qn[0]), null === t.blockedOn); )
    Yn(t), null === t.blockedOn && Qn.shift();
}
var nt = E.ReactCurrentBatchConfig,
  tt = !0;
function rt(e, n, t, r) {
  var l = Ln,
    a = nt.transition;
  nt.transition = null;
  try {
    (Ln = 1), at(e, n, t, r);
  } finally {
    (Ln = l), (nt.transition = a);
  }
}
function lt(e, n, t, r) {
  var l = Ln,
    a = nt.transition;
  nt.transition = null;
  try {
    (Ln = 4), at(e, n, t, r);
  } finally {
    (Ln = l), (nt.transition = a);
  }
}
function at(e, n, t, r) {
  if (tt) {
    var l = ot(e, n, t, r);
    if (null === l) pl(e, n, r, ut, t), $n(e, r);
    else if (qn(l, e, n, t, r)) r.stopPropagation();
    else if (($n(e, r), n & 4 && -1 < jn.indexOf(e))) {
      for (; null !== l; ) {
        var a = Hl(l);
        null !== a && Mn(a);
        a = ot(e, n, t, r);
        null === a && pl(e, n, r, ut, t);
        if (a === l) break;
        l = a;
      }
      null !== l && r.stopPropagation();
    } else pl(e, n, r, null, t);
  }
}
var ut = null;
function ot(e, n, t, r) {
  ut = null;
  e = Ce(r);
  e = Bl(e);
  if (null !== e)
    if (((n = Ke(e)), null === n)) e = null;
    else if (((t = n.tag), 13 === t)) {
      e = qe(n);
      if (null !== e) return e;
      e = null;
    } else if (3 === t) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return 3 === n.tag ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  ut = e;
  return null;
}
function it(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ln()) {
        case an:
          return 1;
        case un:
          return 4;
        case on:
        case sn:
          return 16;
        case cn:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  ct = null,
  ft = null;
function dt() {
  if (ft) return ft;
  var e,
    n = ct,
    t = n.length,
    r,
    l = "value" in st ? st.value : st.textContent,
    a = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[a - r]; r++);
  return (ft = l.slice(e, 1 < r ? 1 - r : void 0));
}
function pt(e) {
  var n = e.keyCode;
  "charCode" in e
    ? ((e = e.charCode), 0 === e && 13 === n && (e = 13))
    : (e = n);
  10 === e && (e = 13);
  return 32 <= e || 13 === e ? e : 0;
}
function ht() {
  return !0;
}
function mt() {
  return !1;
}
function gt(e) {
  function n(n, t, r, l, a) {
    this._reactName = n;
    this._targetInst = r;
    this.type = t;
    this.nativeEvent = l;
    this.target = a;
    this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    this.isDefaultPrevented = (
      null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue
    )
      ? ht
      : mt;
    this.isPropagationStopped = mt;
    return this;
  }
  A(n.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var e = this.nativeEvent;
      e &&
        (e.preventDefault
          ? e.preventDefault()
          : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
        (this.isDefaultPrevented = ht));
    },
    stopPropagation: function () {
      var e = this.nativeEvent;
      e &&
        (e.stopPropagation
          ? e.stopPropagation()
          : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
        (this.isPropagationStopped = ht));
    },
    persist: function () {},
    isPersistent: ht,
  });
  return n;
}
var vt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yt = gt(vt),
  bt = A({}, vt, { view: 0, detail: 0 }),
  kt = gt(bt),
  wt,
  St,
  xt,
  Et = A({}, bt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: At,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      if ("movementX" in e) return e.movementX;
      e !== xt &&
        (xt && "mousemove" === e.type
          ? ((wt = e.screenX - xt.screenX), (St = e.screenY - xt.screenY))
          : (St = wt = 0),
        (xt = e));
      return wt;
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : St;
    },
  }),
  Ct = gt(Et),
  Nt = A({}, Et, { dataTransfer: 0 }),
  _t = gt(Nt),
  zt = A({}, bt, { relatedTarget: 0 }),
  Pt = gt(zt),
  Lt = A({}, vt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tt = gt(Lt),
  Mt = A({}, vt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ft = gt(Mt),
  Rt = A({}, vt, { data: 0 }),
  Dt = gt(Rt),
  Ot = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  It = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ut = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Vt(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ut[e]) ? !!n[e] : !1;
}
function At() {
  return Vt;
}
var Bt = A({}, bt, {
    key: function (e) {
      if (e.key) {
        var n = Ot[e.key] || e.key;
        if ("Unidentified" !== n) return n;
      }
      return "keypress" === e.type
        ? ((e = pt(e)), 13 === e ? "Enter" : String.fromCharCode(e))
        : "keydown" === e.type || "keyup" === e.type
          ? It[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: At,
    charCode: function (e) {
      return "keypress" === e.type ? pt(e) : 0;
    },
    keyCode: function (e) {
      return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return "keypress" === e.type
        ? pt(e)
        : "keydown" === e.type || "keyup" === e.type
          ? e.keyCode
          : 0;
    },
  }),
  Ht = gt(Bt),
  Wt = A({}, Et, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qt = gt(Wt),
  jt = A({}, bt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: At,
  }),
  $t = gt(jt),
  Kt = A({}, vt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qt = gt(Kt),
  Yt = A({}, Et, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xt = gt(Yt),
  Gt = [9, 13, 27, 32],
  Zt = f && "CompositionEvent" in window,
  Jt = null;
f && "documentMode" in document && (Jt = document.documentMode);
var er = f && "TextEvent" in window && !Jt,
  nr = f && (!Zt || (Jt && 8 < Jt && 11 >= Jt)),
  tr = String.fromCharCode(32),
  rr = !1;
function lr(e, n) {
  switch (e) {
    case "keyup":
      return -1 !== Gt.indexOf(n.keyCode);
    case "keydown":
      return 229 !== n.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ar(e) {
  e = e.detail;
  return "object" === typeof e && "data" in e ? e.data : null;
}
var ur = !1;
function or(e, n) {
  switch (e) {
    case "compositionend":
      return ar(n);
    case "keypress":
      if (32 !== n.which) return null;
      rr = !0;
      return tr;
    case "textInput":
      return (e = n.data), e === tr && rr ? null : e;
    default:
      return null;
  }
}
function ir(e, n) {
  if (ur)
    return "compositionend" === e || (!Zt && lr(e, n))
      ? ((e = dt()), (ft = ct = st = null), (ur = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return nr && "ko" !== n.locale ? null : n.data;
    default:
      return null;
  }
}
var sr = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function cr(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return "input" === n ? !!sr[e.type] : "textarea" === n ? !0 : !1;
}
function fr(e, n, t, r) {
  Le(r);
  n = ml(n, "onChange");
  0 < n.length &&
    ((t = new yt("onChange", "change", null, t, r)),
    e.push({ event: t, listeners: n }));
}
var dr = null,
  pr = null;
function hr(e) {
  ol(e, 0);
}
function mr(e) {
  var n = Wl(e);
  if (Z(n)) return e;
}
function gr(e, n) {
  if ("change" === e) return n;
}
var vr = !1;
if (f) {
  var yr;
  if (f) {
    var br = "oninput" in document;
    if (!br) {
      var kr = document.createElement("div");
      kr.setAttribute("oninput", "return;");
      br = "function" === typeof kr.oninput;
    }
    yr = br;
  } else yr = !1;
  vr = yr && (!document.documentMode || 9 < document.documentMode);
}
function wr() {
  dr && (dr.detachEvent("onpropertychange", Sr), (pr = dr = null));
}
function Sr(e) {
  if ("value" === e.propertyName && mr(pr)) {
    var n = [];
    fr(n, pr, e, Ce(e));
    De(hr, n);
  }
}
function xr(e, n, t) {
  "focusin" === e
    ? (wr(), (dr = n), (pr = t), dr.attachEvent("onpropertychange", Sr))
    : "focusout" === e && wr();
}
function Er(e) {
  if ("selectionchange" === e || "keyup" === e || "keydown" === e)
    return mr(pr);
}
function Cr(e, n) {
  if ("click" === e) return mr(n);
}
function Nr(e, n) {
  if ("input" === e || "change" === e) return mr(n);
}
function _r(e, n) {
  return (e === n && (0 !== e || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var zr = "function" === typeof Object.is ? Object.is : _r;
function Pr(e, n) {
  if (zr(e, n)) return !0;
  if (
    "object" !== typeof e ||
    null === e ||
    "object" !== typeof n ||
    null === n
  )
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!d.call(n, l) || !zr(e[l], n[l])) return !1;
  }
  return !0;
}
function Lr(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tr(e, n) {
  var t = Lr(e);
  e = 0;
  for (var r; t; ) {
    if (3 === t.nodeType) {
      r = e + t.textContent.length;
      if (e <= n && r >= n) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Lr(t);
  }
}
function Mr(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && 3 === e.nodeType
        ? !1
        : n && 3 === n.nodeType
          ? Mr(e, n.parentNode)
          : "contains" in e
            ? e.contains(n)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(n) & 16)
              : !1
    : !1;
}
function Fr() {
  for (var e = window, n = J(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = "string" === typeof n.contentWindow.location.href;
    } catch (e) {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = J(e.document);
  }
  return n;
}
function Rr(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    (("input" === n &&
      ("text" === e.type ||
        "search" === e.type ||
        "tel" === e.type ||
        "url" === e.type ||
        "password" === e.type)) ||
      "textarea" === n ||
      "true" === e.contentEditable)
  );
}
function Dr(e) {
  var n = Fr(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Mr(t.ownerDocument.documentElement, t)
  ) {
    if (null !== r && Rr(t))
      if (
        ((n = r.start),
        (e = r.end),
        void 0 === e && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          a = Math.min(r.start, l);
        r = void 0 === r.end ? a : Math.min(r.end, l);
        !e.extend && a > r && ((l = r), (r = a), (a = l));
        l = Tr(t, a);
        var u = Tr(t, r);
        l &&
          u &&
          (1 !== e.rangeCount ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(n), e.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    n = [];
    for (e = t; (e = e.parentNode); )
      1 === e.nodeType &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    "function" === typeof t.focus && t.focus();
    for (t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Or = f && "documentMode" in document && 11 >= document.documentMode,
  Ir = null,
  Ur = null,
  Vr = null,
  Ar = !1;
function Br(e, n, t) {
  var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
  Ar ||
    null == Ir ||
    Ir !== J(r) ||
    ((r = Ir),
    "selectionStart" in r && Rr(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vr && Pr(Vr, r)) ||
      ((Vr = r),
      (r = ml(Ur, "onChange")),
      0 < r.length &&
        ((n = new yt("onChange", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Ir))));
}
function Hr(e, n) {
  var t = {};
  t[e.toLowerCase()] = n.toLowerCase();
  t["Webkit" + e] = "webkit" + n;
  t["Moz" + e] = "moz" + n;
  return t;
}
var Wr = {
    animationend: Hr("Animation", "AnimationEnd"),
    animationiteration: Hr("Animation", "AnimationIteration"),
    animationstart: Hr("Animation", "AnimationStart"),
    transitionend: Hr("Transition", "TransitionEnd"),
  },
  Qr = {},
  jr = {};
f &&
  ((jr = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wr.animationend.animation,
    delete Wr.animationiteration.animation,
    delete Wr.animationstart.animation),
  "TransitionEvent" in window || delete Wr.transitionend.transition);
function $r(e) {
  if (Qr[e]) return Qr[e];
  if (!Wr[e]) return e;
  var n = Wr[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in jr) return (Qr[e] = n[t]);
  return e;
}
var Kr = $r("animationend"),
  qr = $r("animationiteration"),
  Yr = $r("animationstart"),
  Xr = $r("transitionend"),
  Gr = new Map(),
  Zr =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Jr(e, n) {
  Gr.set(e, n);
  s(n, [e]);
}
for (var el = 0; el < Zr.length; el++) {
  var nl = Zr[el],
    tl = nl.toLowerCase(),
    rl = nl[0].toUpperCase() + nl.slice(1);
  Jr(tl, "on" + rl);
}
Jr(Kr, "onAnimationEnd");
Jr(qr, "onAnimationIteration");
Jr(Yr, "onAnimationStart");
Jr("dblclick", "onDoubleClick");
Jr("focusin", "onFocus");
Jr("focusout", "onBlur");
Jr(Xr, "onTransitionEnd");
c("onMouseEnter", ["mouseout", "mouseover"]);
c("onMouseLeave", ["mouseout", "mouseover"]);
c("onPointerEnter", ["pointerout", "pointerover"]);
c("onPointerLeave", ["pointerout", "pointerover"]);
s(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
s(
  "onChange",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
s(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
s(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
s(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ll =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  al = new Set("cancel close invalid load scroll toggle".split(" ").concat(ll));
function ul(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t;
  $e(r, n, void 0, e);
  e.currentTarget = null;
}
function ol(e, n) {
  n = 0 !== (n & 4);
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var o = r[u],
            i = o.instance,
            s = o.currentTarget;
          o = o.listener;
          if (i !== a && l.isPropagationStopped()) break e;
          ul(l, o, s);
          a = i;
        }
      else
        for (u = 0; u < r.length; u++) {
          o = r[u];
          i = o.instance;
          s = o.currentTarget;
          o = o.listener;
          if (i !== a && l.isPropagationStopped()) break e;
          ul(l, o, s);
          a = i;
        }
    }
  }
  if (He) throw ((e = We), (He = !1), (We = null), e);
}
function il(e, n) {
  var t = n[Ul];
  void 0 === t && (t = n[Ul] = new Set());
  var r = e + "__bubble";
  t.has(r) || (dl(n, e, 2, !1), t.add(r));
}
function sl(e, n, t) {
  var r = 0;
  n && (r |= 4);
  dl(t, e, r, n);
}
var cl = "_reactListening" + Math.random().toString(36).slice(2);
function fl(e) {
  if (!e[cl]) {
    e[cl] = !0;
    o.forEach(function (n) {
      "selectionchange" !== n && (al.has(n) || sl(n, !1, e), sl(n, !0, e));
    });
    var n = 9 === e.nodeType ? e : e.ownerDocument;
    null === n || n[cl] || ((n[cl] = !0), sl("selectionchange", !1, n));
  }
}
function dl(e, n, t, r) {
  switch (it(n)) {
    case 1:
      var l = rt;
      break;
    case 4:
      l = lt;
      break;
    default:
      l = at;
  }
  t = l.bind(null, n, t, e);
  l = void 0;
  !Ie || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (l = !0);
  r
    ? void 0 !== l
      ? e.addEventListener(n, t, { capture: !0, passive: l })
      : e.addEventListener(n, t, !0)
    : void 0 !== l
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function pl(e, n, t, r, l) {
  var a = r;
  if (0 === (n & 1) && 0 === (n & 2) && null !== r)
    e: for (;;) {
      if (null === r) return;
      var u = r.tag;
      if (3 === u || 4 === u) {
        var o = r.stateNode.containerInfo;
        if (o === l || (8 === o.nodeType && o.parentNode === l)) break;
        if (4 === u)
          for (u = r.return; null !== u; ) {
            var i = u.tag;
            if (3 === i || 4 === i)
              if (
                ((i = u.stateNode.containerInfo),
                i === l || (8 === i.nodeType && i.parentNode === l))
              )
                return;
            u = u.return;
          }
        for (; null !== o; ) {
          u = Bl(o);
          if (null === u) return;
          i = u.tag;
          if (5 === i || 6 === i) {
            r = a = u;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  De(function () {
    var r = a,
      l = Ce(t),
      u = [];
    e: {
      var o = Gr.get(e);
      if (void 0 !== o) {
        var i = yt,
          s = e;
        switch (e) {
          case "keypress":
            if (0 === pt(t)) break e;
          case "keydown":
          case "keyup":
            i = Ht;
            break;
          case "focusin":
            s = "focus";
            i = Pt;
            break;
          case "focusout":
            s = "blur";
            i = Pt;
            break;
          case "beforeblur":
          case "afterblur":
            i = Pt;
            break;
          case "click":
            if (2 === t.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            i = Ct;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            i = _t;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            i = $t;
            break;
          case Kr:
          case qr:
          case Yr:
            i = Tt;
            break;
          case Xr:
            i = qt;
            break;
          case "scroll":
            i = kt;
            break;
          case "wheel":
            i = Xt;
            break;
          case "copy":
          case "cut":
          case "paste":
            i = Ft;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            i = Qt;
        }
        var c = 0 !== (n & 4),
          f = !c && "scroll" === e,
          d = c ? (null !== o ? o + "Capture" : null) : o;
        c = [];
        for (var p = r, h; null !== p; ) {
          h = p;
          var m = h.stateNode;
          5 === h.tag &&
            null !== m &&
            ((h = m),
            null !== d && ((m = Oe(p, d)), null != m && c.push(hl(p, m, h))));
          if (f) break;
          p = p.return;
        }
        0 < c.length &&
          ((o = new i(o, s, null, t, l)), u.push({ event: o, listeners: c }));
      }
    }
    if (0 === (n & 7)) {
      e: {
        o = "mouseover" === e || "pointerover" === e;
        i = "mouseout" === e || "pointerout" === e;
        if (
          o &&
          t !== Ee &&
          (s = t.relatedTarget || t.fromElement) &&
          (Bl(s) || s[Il])
        )
          break e;
        if (i || o) {
          o =
            l.window === l
              ? l
              : (o = l.ownerDocument)
                ? o.defaultView || o.parentWindow
                : window;
          if (i) {
            if (
              ((s = t.relatedTarget || t.toElement),
              (i = r),
              (s = s ? Bl(s) : null),
              null !== s &&
                ((f = Ke(s)), s !== f || (5 !== s.tag && 6 !== s.tag)))
            )
              s = null;
          } else (i = null), (s = r);
          if (i !== s) {
            c = Ct;
            m = "onMouseLeave";
            d = "onMouseEnter";
            p = "mouse";
            if ("pointerout" === e || "pointerover" === e)
              (c = Qt),
                (m = "onPointerLeave"),
                (d = "onPointerEnter"),
                (p = "pointer");
            f = null == i ? o : Wl(i);
            h = null == s ? o : Wl(s);
            o = new c(m, p + "leave", i, t, l);
            o.target = f;
            o.relatedTarget = h;
            m = null;
            Bl(l) === r &&
              ((c = new c(d, p + "enter", s, t, l)),
              (c.target = h),
              (c.relatedTarget = f),
              (m = c));
            f = m;
            if (i && s)
              n: {
                c = i;
                d = s;
                p = 0;
                for (h = c; h; h = gl(h)) p++;
                h = 0;
                for (m = d; m; m = gl(m)) h++;
                for (; 0 < p - h; ) (c = gl(c)), p--;
                for (; 0 < h - p; ) (d = gl(d)), h--;
                for (; p--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break n;
                  c = gl(c);
                  d = gl(d);
                }
                c = null;
              }
            else c = null;
            null !== i && vl(u, o, i, c, !1);
            null !== s && null !== f && vl(u, f, s, c, !0);
          }
        }
      }
      e: {
        o = r ? Wl(r) : window;
        i = o.nodeName && o.nodeName.toLowerCase();
        if ("select" === i || ("input" === i && "file" === o.type)) var g = gr;
        else if (cr(o))
          if (vr) g = Nr;
          else {
            g = Er;
            var v = xr;
          }
        else
          (i = o.nodeName) &&
            "input" === i.toLowerCase() &&
            ("checkbox" === o.type || "radio" === o.type) &&
            (g = Cr);
        if (g && (g = g(e, r))) {
          fr(u, g, t, l);
          break e;
        }
        v && v(e, o, r);
        "focusout" === e &&
          (v = o._wrapperState) &&
          v.controlled &&
          "number" === o.type &&
          ae(o, "number", o.value);
      }
      v = r ? Wl(r) : window;
      switch (e) {
        case "focusin":
          if (cr(v) || "true" === v.contentEditable)
            (Ir = v), (Ur = r), (Vr = null);
          break;
        case "focusout":
          Vr = Ur = Ir = null;
          break;
        case "mousedown":
          Ar = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ar = !1;
          Br(u, t, l);
          break;
        case "selectionchange":
          if (Or) break;
        case "keydown":
        case "keyup":
          Br(u, t, l);
      }
      var y;
      if (Zt)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        ur
          ? lr(e, t) && (b = "onCompositionEnd")
          : "keydown" === e && 229 === t.keyCode && (b = "onCompositionStart");
      b &&
        (nr &&
          "ko" !== t.locale &&
          (ur || "onCompositionStart" !== b
            ? "onCompositionEnd" === b && ur && (y = dt())
            : ((st = l),
              (ct = "value" in st ? st.value : st.textContent),
              (ur = !0))),
        (v = ml(r, b)),
        0 < v.length &&
          ((b = new Dt(b, e, null, t, l)),
          u.push({ event: b, listeners: v }),
          y ? (b.data = y) : ((y = ar(t)), null !== y && (b.data = y))));
      if ((y = er ? or(e, t) : ir(e, t)))
        (r = ml(r, "onBeforeInput")),
          0 < r.length &&
            ((l = new Dt("onBeforeInput", "beforeinput", null, t, l)),
            u.push({ event: l, listeners: r }),
            (l.data = y));
    }
    ol(u, n);
  });
}
function hl(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function ml(e, n) {
  for (var t = n + "Capture", r = []; null !== e; ) {
    var l = e,
      a = l.stateNode;
    5 === l.tag &&
      null !== a &&
      ((l = a),
      (a = Oe(e, t)),
      null != a && r.unshift(hl(e, a, l)),
      (a = Oe(e, n)),
      null != a && r.push(hl(e, a, l)));
    e = e.return;
  }
  return r;
}
function gl(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e ? e : null;
}
function vl(e, n, t, r, l) {
  for (var a = n._reactName, u = []; null !== t && t !== r; ) {
    var o = t,
      i = o.alternate,
      s = o.stateNode;
    if (null !== i && i === r) break;
    5 === o.tag &&
      null !== s &&
      ((o = s),
      l
        ? ((i = Oe(t, a)), null != i && u.unshift(hl(t, i, o)))
        : l || ((i = Oe(t, a)), null != i && u.push(hl(t, i, o))));
    t = t.return;
  }
  0 !== u.length && e.push({ event: n, listeners: u });
}
var yl = /\r\n?/g,
  bl = /\u0000|\uFFFD/g;
function kl(e) {
  return ("string" === typeof e ? e : "" + e).replace(yl, "\n").replace(bl, "");
}
function wl(e, n, t) {
  n = kl(n);
  if (kl(e) !== n && t) throw Error(u(425));
}
function Sl() {}
var xl = null,
  El = null;
function Cl(e, n) {
  return (
    "textarea" === e ||
    "noscript" === e ||
    "string" === typeof n.children ||
    "number" === typeof n.children ||
    ("object" === typeof n.dangerouslySetInnerHTML &&
      null !== n.dangerouslySetInnerHTML &&
      null != n.dangerouslySetInnerHTML.__html)
  );
}
var Nl = "function" === typeof setTimeout ? setTimeout : void 0,
  _l = "function" === typeof clearTimeout ? clearTimeout : void 0,
  zl = "function" === typeof Promise ? Promise : void 0,
  Pl =
    "function" === typeof queueMicrotask
      ? queueMicrotask
      : "undefined" !== typeof zl
        ? function (e) {
            return zl.resolve(null).then(e).catch(Ll);
          }
        : Nl;
function Ll(e) {
  setTimeout(function () {
    throw e;
  });
}
function Tl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    e.removeChild(t);
    if (l && 8 === l.nodeType)
      if (((t = l.data), "/$" === t)) {
        if (0 === r) {
          e.removeChild(l);
          et(n);
          return;
        }
        r--;
      } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
    t = l;
  } while (t);
  et(n);
}
function Ml(e) {
  for (; null != e; e = e.nextSibling) {
    var n = e.nodeType;
    if (1 === n || 3 === n) break;
    if (8 === n) {
      n = e.data;
      if ("$" === n || "$!" === n || "$?" === n) break;
      if ("/$" === n) return null;
    }
  }
  return e;
}
function Fl(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (8 === e.nodeType) {
      var t = e.data;
      if ("$" === t || "$!" === t || "$?" === t) {
        if (0 === n) return e;
        n--;
      } else "/$" === t && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Rl = Math.random().toString(36).slice(2),
  Dl = "__reactFiber$" + Rl,
  Ol = "__reactProps$" + Rl,
  Il = "__reactContainer$" + Rl,
  Ul = "__reactEvents$" + Rl,
  Vl = "__reactListeners$" + Rl,
  Al = "__reactHandles$" + Rl;
function Bl(e) {
  var n = e[Dl];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Il] || t[Dl])) {
      t = n.alternate;
      if (null !== n.child || (null !== t && null !== t.child))
        for (e = Fl(e); null !== e; ) {
          if ((t = e[Dl])) return t;
          e = Fl(e);
        }
      return n;
    }
    e = t;
    t = e.parentNode;
  }
  return null;
}
function Hl(e) {
  e = e[Dl] || e[Il];
  return !e || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function Wl(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(u(33));
}
function Ql(e) {
  return e[Ol] || null;
}
var jl = [],
  $l = -1;
function Kl(e) {
  return { current: e };
}
function ql(e) {
  0 > $l || ((e.current = jl[$l]), (jl[$l] = null), $l--);
}
function Yl(e, n) {
  $l++;
  jl[$l] = e.current;
  e.current = n;
}
var Xl = {},
  Gl = Kl(Xl),
  Zl = Kl(!1),
  Jl = Xl;
function ea(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Xl;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in t) l[a] = n[a];
  r &&
    ((e = e.stateNode),
    (e.__reactInternalMemoizedUnmaskedChildContext = n),
    (e.__reactInternalMemoizedMaskedChildContext = l));
  return l;
}
function na(e) {
  e = e.childContextTypes;
  return null !== e && void 0 !== e;
}
function ta() {
  ql(Zl);
  ql(Gl);
}
function ra(e, n, t) {
  if (Gl.current !== Xl) throw Error(u(168));
  Yl(Gl, n);
  Yl(Zl, t);
}
function la(e, n, t) {
  var r = e.stateNode;
  n = n.childContextTypes;
  if ("function" !== typeof r.getChildContext) return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(u(108, K(e) || "Unknown", l));
  return A({}, t, r);
}
function aa(e) {
  e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xl;
  Jl = Gl.current;
  Yl(Gl, e);
  Yl(Zl, Zl.current);
  return !0;
}
function ua(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(u(169));
  t
    ? ((e = la(e, n, Jl)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ql(Zl),
      ql(Gl),
      Yl(Gl, e))
    : ql(Zl);
  Yl(Zl, t);
}
var oa = null,
  ia = !1,
  sa = !1;
function ca(e) {
  null === oa ? (oa = [e]) : oa.push(e);
}
function fa(e) {
  ia = !0;
  ca(e);
}
function da() {
  if (!sa && null !== oa) {
    sa = !0;
    var e = 0,
      n = Ln;
    try {
      var t = oa;
      for (Ln = 1; e < t.length; e++) {
        var r = t[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      oa = null;
      ia = !1;
    } catch (n) {
      throw (null !== oa && (oa = oa.slice(e + 1)), Je(an, da), n);
    } finally {
      (Ln = n), (sa = !1);
    }
  }
  return null;
}
var pa = [],
  ha = 0,
  ma = null,
  ga = 0,
  va = [],
  ya = 0,
  ba = null,
  ka = 1,
  wa = "";
function Sa(e, n) {
  pa[ha++] = ga;
  pa[ha++] = ma;
  ma = e;
  ga = n;
}
function xa(e, n, t) {
  va[ya++] = ka;
  va[ya++] = wa;
  va[ya++] = ba;
  ba = e;
  var r = ka;
  e = wa;
  var l = 32 - hn(r) - 1;
  r &= ~(1 << l);
  t += 1;
  var a = 32 - hn(n) + l;
  if (30 < a) {
    var u = l - (l % 5);
    a = (r & ((1 << u) - 1)).toString(32);
    r >>= u;
    l -= u;
    ka = (1 << (32 - hn(n) + l)) | (t << l) | r;
    wa = a + e;
  } else (ka = (1 << a) | (t << l) | r), (wa = e);
}
function Ea(e) {
  null !== e.return && (Sa(e, 1), xa(e, 1, 0));
}
function Ca(e) {
  for (; e === ma; )
    (ma = pa[--ha]), (pa[ha] = null), (ga = pa[--ha]), (pa[ha] = null);
  for (; e === ba; )
    (ba = va[--ya]),
      (va[ya] = null),
      (wa = va[--ya]),
      (va[ya] = null),
      (ka = va[--ya]),
      (va[ya] = null);
}
var Na = null,
  _a = null,
  za = !1,
  Pa = null;
function La(e, n) {
  var t = uc(5, null, null, 0);
  t.elementType = "DELETED";
  t.stateNode = n;
  t.return = e;
  n = e.deletions;
  null === n ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Ta(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      n =
        1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase()
          ? null
          : n;
      return null !== n
        ? ((e.stateNode = n), (Na = e), (_a = Ml(n.firstChild)), !0)
        : !1;
    case 6:
      return (
        (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n),
        null !== n ? ((e.stateNode = n), (Na = e), (_a = null), !0) : !1
      );
    case 13:
      return (
        (n = 8 !== n.nodeType ? null : n),
        null !== n
          ? ((t = null !== ba ? { id: ka, overflow: wa } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = uc(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (Na = e),
            (_a = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ma(e) {
  return 0 !== (e.mode & 1) && 0 === (e.flags & 128);
}
function Fa(e) {
  if (za) {
    var n = _a;
    if (n) {
      var t = n;
      if (!Ta(e, n)) {
        if (Ma(e)) throw Error(u(418));
        n = Ml(t.nextSibling);
        var r = Na;
        n && Ta(e, n)
          ? La(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (za = !1), (Na = e));
      }
    } else {
      if (Ma(e)) throw Error(u(418));
      e.flags = (e.flags & -4097) | 2;
      za = !1;
      Na = e;
    }
  }
}
function Ra(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  Na = e;
}
function Da(e) {
  if (e !== Na) return !1;
  if (!za) return Ra(e), (za = !0), !1;
  var n;
  (n = 3 !== e.tag) &&
    !(n = 5 !== e.tag) &&
    ((n = e.type),
    (n = "head" !== n && "body" !== n && !Cl(e.type, e.memoizedProps)));
  if (n && (n = _a)) {
    if (Ma(e)) throw (Oa(), Error(u(418)));
    for (; n; ) La(e, n), (n = Ml(n.nextSibling));
  }
  Ra(e);
  if (13 === e.tag) {
    e = e.memoizedState;
    e = null !== e ? e.dehydrated : null;
    if (!e) throw Error(u(317));
    e: {
      e = e.nextSibling;
      for (n = 0; e; ) {
        if (8 === e.nodeType) {
          var t = e.data;
          if ("/$" === t) {
            if (0 === n) {
              _a = Ml(e.nextSibling);
              break e;
            }
            n--;
          } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
        }
        e = e.nextSibling;
      }
      _a = null;
    }
  } else _a = Na ? Ml(e.stateNode.nextSibling) : null;
  return !0;
}
function Oa() {
  for (var e = _a; e; ) e = Ml(e.nextSibling);
}
function Ia() {
  _a = Na = null;
  za = !1;
}
function Ua(e) {
  null === Pa ? (Pa = [e]) : Pa.push(e);
}
var Va = E.ReactCurrentBatchConfig;
function Aa(e, n, t) {
  e = t.ref;
  if (null !== e && "function" !== typeof e && "object" !== typeof e) {
    if (t._owner) {
      t = t._owner;
      if (t) {
        if (1 !== t.tag) throw Error(u(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(u(147, e));
      var l = r,
        a = "" + e;
      if (
        null !== n &&
        null !== n.ref &&
        "function" === typeof n.ref &&
        n.ref._stringRef === a
      )
        return n.ref;
      n = function (e) {
        var n = l.refs;
        null === e ? delete n[a] : (n[a] = e);
      };
      n._stringRef = a;
      return n;
    }
    if ("string" !== typeof e) throw Error(u(284));
    if (!t._owner) throw Error(u(290, e));
  }
  return e;
}
function Ba(e, n) {
  e = Object.prototype.toString.call(n);
  throw Error(
    u(
      31,
      "[object Object]" === e
        ? "object with keys {" + Object.keys(n).join(", ") + "}"
        : e,
    ),
  );
}
function Ha(e) {
  var n = e._init;
  return n(e._payload);
}
function Wa(e) {
  function n(n, t) {
    if (e) {
      var r = n.deletions;
      null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
    }
  }
  function t(t, r) {
    if (!e) return null;
    for (; null !== r; ) n(t, r), (r = r.sibling);
    return null;
  }
  function r(e, n) {
    for (e = new Map(); null !== n; )
      null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
    return e;
  }
  function l(e, n) {
    e = sc(e, n);
    e.index = 0;
    e.sibling = null;
    return e;
  }
  function a(n, t, r) {
    n.index = r;
    if (!e) return (n.flags |= 1048576), t;
    r = n.alternate;
    if (null !== r) return (r = r.index), r < t ? ((n.flags |= 2), t) : r;
    n.flags |= 2;
    return t;
  }
  function o(n) {
    e && null === n.alternate && (n.flags |= 2);
    return n;
  }
  function i(e, n, t, r) {
    if (null === n || 6 !== n.tag)
      return (n = pc(t, e.mode, r)), (n.return = e), n;
    n = l(n, t);
    n.return = e;
    return n;
  }
  function s(e, n, t, r) {
    var a = t.type;
    if (a === _) return f(e, n, t.props.children, r, t.key);
    if (
      null !== n &&
      (n.elementType === a ||
        ("object" === typeof a &&
          null !== a &&
          a.$$typeof === O &&
          Ha(a) === n.type))
    )
      return (r = l(n, t.props)), (r.ref = Aa(e, n, t)), (r.return = e), r;
    r = cc(t.type, t.key, t.props, null, e.mode, r);
    r.ref = Aa(e, n, t);
    r.return = e;
    return r;
  }
  function c(e, n, t, r) {
    if (
      null === n ||
      4 !== n.tag ||
      n.stateNode.containerInfo !== t.containerInfo ||
      n.stateNode.implementation !== t.implementation
    )
      return (n = hc(t, e.mode, r)), (n.return = e), n;
    n = l(n, t.children || []);
    n.return = e;
    return n;
  }
  function f(e, n, t, r, a) {
    if (null === n || 7 !== n.tag)
      return (n = fc(t, e.mode, r, a)), (n.return = e), n;
    n = l(n, t);
    n.return = e;
    return n;
  }
  function d(e, n, t) {
    if (("string" === typeof n && "" !== n) || "number" === typeof n)
      return (n = pc("" + n, e.mode, t)), (n.return = e), n;
    if ("object" === typeof n && null !== n) {
      switch (n.$$typeof) {
        case C:
          return (
            (t = cc(n.type, n.key, n.props, null, e.mode, t)),
            (t.ref = Aa(e, null, n)),
            (t.return = e),
            t
          );
        case N:
          return (n = hc(n, e.mode, t)), (n.return = e), n;
        case O:
          var r = n._init;
          return d(e, r(n._payload), t);
      }
      if (ue(n) || V(n)) return (n = fc(n, e.mode, t, null)), (n.return = e), n;
      Ba(e, n);
    }
    return null;
  }
  function p(e, n, t, r) {
    var l = null !== n ? n.key : null;
    if (("string" === typeof t && "" !== t) || "number" === typeof t)
      return null !== l ? null : i(e, n, "" + t, r);
    if ("object" === typeof t && null !== t) {
      switch (t.$$typeof) {
        case C:
          return t.key === l ? s(e, n, t, r) : null;
        case N:
          return t.key === l ? c(e, n, t, r) : null;
        case O:
          return (l = t._init), p(e, n, l(t._payload), r);
      }
      if (ue(t) || V(t)) return null !== l ? null : f(e, n, t, r, null);
      Ba(e, t);
    }
    return null;
  }
  function h(e, n, t, r, l) {
    if (("string" === typeof r && "" !== r) || "number" === typeof r)
      return (e = e.get(t) || null), i(n, e, "" + r, l);
    if ("object" === typeof r && null !== r) {
      switch (r.$$typeof) {
        case C:
          return (e = e.get(null === r.key ? t : r.key) || null), s(n, e, r, l);
        case N:
          return (e = e.get(null === r.key ? t : r.key) || null), c(n, e, r, l);
        case O:
          var a = r._init;
          return h(e, n, t, a(r._payload), l);
      }
      if (ue(r) || V(r)) return (e = e.get(t) || null), f(n, e, r, l, null);
      Ba(n, r);
    }
    return null;
  }
  function m(l, u, o, i) {
    for (
      var s = null, c = null, f = u, m = (u = 0), g = null;
      null !== f && m < o.length;
      m++
    ) {
      f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
      var v = p(l, f, o[m], i);
      if (null === v) {
        null === f && (f = g);
        break;
      }
      e && f && null === v.alternate && n(l, f);
      u = a(v, u, m);
      null === c ? (s = v) : (c.sibling = v);
      c = v;
      f = g;
    }
    if (m === o.length) return t(l, f), za && Sa(l, m), s;
    if (null === f) {
      for (; m < o.length; m++)
        (f = d(l, o[m], i)),
          null !== f &&
            ((u = a(f, u, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
      za && Sa(l, m);
      return s;
    }
    for (f = r(l, f); m < o.length; m++)
      (g = h(f, l, m, o[m], i)),
        null !== g &&
          (e && null !== g.alternate && f.delete(null === g.key ? m : g.key),
          (u = a(g, u, m)),
          null === c ? (s = g) : (c.sibling = g),
          (c = g));
    e &&
      f.forEach(function (e) {
        return n(l, e);
      });
    za && Sa(l, m);
    return s;
  }
  function g(l, o, i, s) {
    var c = V(i);
    if ("function" !== typeof c) throw Error(u(150));
    i = c.call(i);
    if (null == i) throw Error(u(151));
    for (
      var f = (c = null), m = o, g = (o = 0), v = null, y = i.next();
      null !== m && !y.done;
      g++, y = i.next()
    ) {
      m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
      var b = p(l, m, y.value, s);
      if (null === b) {
        null === m && (m = v);
        break;
      }
      e && m && null === b.alternate && n(l, m);
      o = a(b, o, g);
      null === f ? (c = b) : (f.sibling = b);
      f = b;
      m = v;
    }
    if (y.done) return t(l, m), za && Sa(l, g), c;
    if (null === m) {
      for (; !y.done; g++, y = i.next())
        (y = d(l, y.value, s)),
          null !== y &&
            ((o = a(y, o, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
      za && Sa(l, g);
      return c;
    }
    for (m = r(l, m); !y.done; g++, y = i.next())
      (y = h(m, l, g, y.value, s)),
        null !== y &&
          (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
          (o = a(y, o, g)),
          null === f ? (c = y) : (f.sibling = y),
          (f = y));
    e &&
      m.forEach(function (e) {
        return n(l, e);
      });
    za && Sa(l, g);
    return c;
  }
  function v(e, r, a, u) {
    "object" === typeof a &&
      null !== a &&
      a.type === _ &&
      null === a.key &&
      (a = a.props.children);
    if ("object" === typeof a && null !== a) {
      switch (a.$$typeof) {
        case C:
          e: {
            for (var i = a.key, s = r; null !== s; ) {
              if (s.key === i) {
                i = a.type;
                if (i === _) {
                  if (7 === s.tag) {
                    t(e, s.sibling);
                    r = l(s, a.props.children);
                    r.return = e;
                    e = r;
                    break e;
                  }
                } else if (
                  s.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === O &&
                    Ha(i) === s.type)
                ) {
                  t(e, s.sibling);
                  r = l(s, a.props);
                  r.ref = Aa(e, s, a);
                  r.return = e;
                  e = r;
                  break e;
                }
                t(e, s);
                break;
              } else n(e, s);
              s = s.sibling;
            }
            a.type === _
              ? ((r = fc(a.props.children, e.mode, u, a.key)),
                (r.return = e),
                (e = r))
              : ((u = cc(a.type, a.key, a.props, null, e.mode, u)),
                (u.ref = Aa(e, r, a)),
                (u.return = e),
                (e = u));
          }
          return o(e);
        case N:
          e: {
            for (s = a.key; null !== r; ) {
              if (r.key === s)
                if (
                  4 === r.tag &&
                  r.stateNode.containerInfo === a.containerInfo &&
                  r.stateNode.implementation === a.implementation
                ) {
                  t(e, r.sibling);
                  r = l(r, a.children || []);
                  r.return = e;
                  e = r;
                  break e;
                } else {
                  t(e, r);
                  break;
                }
              else n(e, r);
              r = r.sibling;
            }
            r = hc(a, e.mode, u);
            r.return = e;
            e = r;
          }
          return o(e);
        case O:
          return (s = a._init), v(e, r, s(a._payload), u);
      }
      if (ue(a)) return m(e, r, a, u);
      if (V(a)) return g(e, r, a, u);
      Ba(e, a);
    }
    return ("string" === typeof a && "" !== a) || "number" === typeof a
      ? ((a = "" + a),
        null !== r && 6 === r.tag
          ? (t(e, r.sibling), (r = l(r, a)), (r.return = e), (e = r))
          : (t(e, r), (r = pc(a, e.mode, u)), (r.return = e), (e = r)),
        o(e))
      : t(e, r);
  }
  return v;
}
var Qa = Wa(!0),
  ja = Wa(!1),
  $a = Kl(null),
  Ka = null,
  qa = null,
  Ya = null;
function Xa() {
  Ya = qa = Ka = null;
}
function Ga(e) {
  var n = $a.current;
  ql($a);
  e._currentValue = n;
}
function Za(e, n, t) {
  for (; null !== e; ) {
    var r = e.alternate;
    (e.childLanes & n) !== n
      ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
      : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n);
    if (e === t) break;
    e = e.return;
  }
}
function Ja(e, n) {
  Ka = e;
  Ya = qa = null;
  e = e.dependencies;
  null !== e &&
    null !== e.firstContext &&
    (0 !== (e.lanes & n) && (Wo = !0), (e.firstContext = null));
}
function eu(e) {
  var n = e._currentValue;
  if (Ya !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), null === qa)) {
      if (null === Ka) throw Error(u(308));
      qa = e;
      Ka.dependencies = { lanes: 0, firstContext: e };
    } else qa = qa.next = e;
  return n;
}
var nu = null;
function tu(e) {
  null === nu ? (nu = [e]) : nu.push(e);
}
function ru(e, n, t, r) {
  var l = n.interleaved;
  null === l ? ((t.next = t), tu(n)) : ((t.next = l.next), (l.next = t));
  n.interleaved = t;
  return lu(e, r);
}
function lu(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  null !== t && (t.lanes |= n);
  t = e;
  for (e = e.return; null !== e; )
    (e.childLanes |= n),
      (t = e.alternate),
      null !== t && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return 3 === t.tag ? t.stateNode : null;
}
var au = !1;
function uu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ou(e, n) {
  e = e.updateQueue;
  n.updateQueue === e &&
    (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects,
    });
}
function iu(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function su(e, n, t) {
  var r = e.updateQueue;
  if (null === r) return null;
  r = r.shared;
  if (0 !== (es & 2)) {
    var l = r.pending;
    null === l ? (n.next = n) : ((n.next = l.next), (l.next = n));
    r.pending = n;
    return lu(e, t);
  }
  l = r.interleaved;
  null === l ? ((n.next = n), tu(r)) : ((n.next = l.next), (l.next = n));
  r.interleaved = n;
  return lu(e, t);
}
function cu(e, n, t) {
  n = n.updateQueue;
  if (null !== n && ((n = n.shared), 0 !== (t & 4194240))) {
    var r = n.lanes;
    r &= e.pendingLanes;
    t |= r;
    n.lanes = t;
    Pn(e, t);
  }
}
function fu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (null !== r && ((r = r.updateQueue), t === r)) {
    var l = null,
      a = null;
    t = t.firstBaseUpdate;
    if (null !== t) {
      do {
        var u = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        null === a ? (l = a = u) : (a = a.next = u);
        t = t.next;
      } while (null !== t);
      null === a ? (l = a = n) : (a = a.next = n);
    } else l = a = n;
    t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    };
    e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate;
  null === e ? (t.firstBaseUpdate = n) : (e.next = n);
  t.lastBaseUpdate = n;
}
function du(e, n, t, r) {
  var l = e.updateQueue;
  au = !1;
  var a = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    o = l.shared.pending;
  if (null !== o) {
    l.shared.pending = null;
    var i = o,
      s = i.next;
    i.next = null;
    null === u ? (a = s) : (u.next = s);
    u = i;
    var c = e.alternate;
    null !== c &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== u &&
        (null === o ? (c.firstBaseUpdate = s) : (o.next = s),
        (c.lastBaseUpdate = i)));
  }
  if (null !== a) {
    var f = l.baseState;
    u = 0;
    c = s = i = null;
    o = a;
    do {
      var d = o.lane,
        p = o.eventTime;
      if ((r & d) === d) {
        null !== c &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var h = e,
            m = o;
          d = n;
          p = t;
          switch (m.tag) {
            case 1:
              h = m.payload;
              if ("function" === typeof h) {
                f = h.call(p, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              h = m.payload;
              d = "function" === typeof h ? h.call(p, f, d) : h;
              if (null === d || void 0 === d) break e;
              f = A({}, f, d);
              break e;
            case 2:
              au = !0;
          }
        }
        null !== o.callback &&
          0 !== o.lane &&
          ((e.flags |= 64),
          (d = l.effects),
          null === d ? (l.effects = [o]) : d.push(o));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          null === c ? ((s = c = p), (i = f)) : (c = c.next = p),
          (u |= d);
      o = o.next;
      if (null === o)
        if (((o = l.shared.pending), null === o)) break;
        else
          (d = o),
            (o = d.next),
            (d.next = null),
            (l.lastBaseUpdate = d),
            (l.shared.pending = null);
    } while (1);
    null === c && (i = f);
    l.baseState = i;
    l.firstBaseUpdate = s;
    l.lastBaseUpdate = c;
    n = l.shared.interleaved;
    if (null !== n) {
      l = n;
      do {
        (u |= l.lane), (l = l.next);
      } while (l !== n);
    } else null === a && (l.shared.lanes = 0);
    is |= u;
    e.lanes = u;
    e.memoizedState = f;
  }
}
function pu(e, n, t) {
  e = n.effects;
  n.effects = null;
  if (null !== e)
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (null !== l) {
        r.callback = null;
        r = t;
        if ("function" !== typeof l) throw Error(u(191, l));
        l.call(r);
      }
    }
}
var hu = {},
  mu = Kl(hu),
  gu = Kl(hu),
  vu = Kl(hu);
function yu(e) {
  if (e === hu) throw Error(u(174));
  return e;
}
function bu(e, n) {
  Yl(vu, n);
  Yl(gu, e);
  Yl(mu, hu);
  e = n.nodeType;
  switch (e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : pe(null, "");
      break;
    default:
      (e = 8 === e ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = pe(n, e));
  }
  ql(mu);
  Yl(mu, n);
}
function ku() {
  ql(mu);
  ql(gu);
  ql(vu);
}
function wu(e) {
  yu(vu.current);
  var n = yu(mu.current);
  var t = pe(n, e.type);
  n !== t && (Yl(gu, e), Yl(mu, t));
}
function Su(e) {
  gu.current === e && (ql(mu), ql(gu));
}
var xu = Kl(0);
function Eu(e) {
  for (var n = e; null !== n; ) {
    if (13 === n.tag) {
      var t = n.memoizedState;
      if (
        null !== t &&
        ((t = t.dehydrated), null === t || "$?" === t.data || "$!" === t.data)
      )
        return n;
    } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
      if (0 !== (n.flags & 128)) return n;
    } else if (null !== n.child) {
      n.child.return = n;
      n = n.child;
      continue;
    }
    if (n === e) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return;
    n = n.sibling;
  }
  return null;
}
var Cu = [];
function Nu() {
  for (var e = 0; e < Cu.length; e++)
    Cu[e]._workInProgressVersionPrimary = null;
  Cu.length = 0;
}
var _u = E.ReactCurrentDispatcher,
  zu = E.ReactCurrentBatchConfig,
  Pu = 0,
  Lu = null,
  Tu = null,
  Mu = null,
  Fu = !1,
  Ru = !1,
  Du = 0,
  Ou = 0;
function Iu() {
  throw Error(u(321));
}
function Uu(e, n) {
  if (null === n) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!zr(e[t], n[t])) return !1;
  return !0;
}
function Vu(e, n, t, r, l, a) {
  Pu = a;
  Lu = n;
  n.memoizedState = null;
  n.updateQueue = null;
  n.lanes = 0;
  _u.current = null === e || null === e.memoizedState ? xo : Eo;
  e = t(r, l);
  if (Ru) {
    a = 0;
    do {
      Ru = !1;
      Du = 0;
      if (25 <= a) throw Error(u(301));
      a += 1;
      Mu = Tu = null;
      n.updateQueue = null;
      _u.current = Co;
      e = t(r, l);
    } while (Ru);
  }
  _u.current = So;
  n = null !== Tu && null !== Tu.next;
  Pu = 0;
  Mu = Tu = Lu = null;
  Fu = !1;
  if (n) throw Error(u(300));
  return e;
}
function Au() {
  var e = 0 !== Du;
  Du = 0;
  return e;
}
function Bu() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  null === Mu ? (Lu.memoizedState = Mu = e) : (Mu = Mu.next = e);
  return Mu;
}
function Hu() {
  if (null === Tu) {
    var e = Lu.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = Tu.next;
  var n = null === Mu ? Lu.memoizedState : Mu.next;
  if (null !== n) (Mu = n), (Tu = e);
  else {
    if (null === e) throw Error(u(310));
    Tu = e;
    e = {
      memoizedState: Tu.memoizedState,
      baseState: Tu.baseState,
      baseQueue: Tu.baseQueue,
      queue: Tu.queue,
      next: null,
    };
    null === Mu ? (Lu.memoizedState = Mu = e) : (Mu = Mu.next = e);
  }
  return Mu;
}
function Wu(e, n) {
  return "function" === typeof n ? n(e) : n;
}
function Qu(e) {
  var n = Hu(),
    t = n.queue;
  if (null === t) throw Error(u(311));
  t.lastRenderedReducer = e;
  var r = Tu,
    l = r.baseQueue,
    a = t.pending;
  if (null !== a) {
    if (null !== l) {
      var o = l.next;
      l.next = a.next;
      a.next = o;
    }
    r.baseQueue = l = a;
    t.pending = null;
  }
  if (null !== l) {
    a = l.next;
    r = r.baseState;
    var i = (o = null),
      s = null,
      c = a;
    do {
      var f = c.lane;
      if ((Pu & f) === f)
        null !== s &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        null === s ? ((i = s = d), (o = r)) : (s = s.next = d);
        Lu.lanes |= f;
        is |= f;
      }
      c = c.next;
    } while (null !== c && c !== a);
    null === s ? (o = r) : (s.next = i);
    zr(r, n.memoizedState) || (Wo = !0);
    n.memoizedState = r;
    n.baseState = o;
    n.baseQueue = s;
    t.lastRenderedState = r;
  }
  e = t.interleaved;
  if (null !== e) {
    l = e;
    do {
      (a = l.lane), (Lu.lanes |= a), (is |= a), (l = l.next);
    } while (l !== e);
  } else null === l && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function ju(e) {
  var n = Hu(),
    t = n.queue;
  if (null === t) throw Error(u(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    a = n.memoizedState;
  if (null !== l) {
    t.pending = null;
    var o = (l = l.next);
    do {
      (a = e(a, o.action)), (o = o.next);
    } while (o !== l);
    zr(a, n.memoizedState) || (Wo = !0);
    n.memoizedState = a;
    null === n.baseQueue && (n.baseState = a);
    t.lastRenderedState = a;
  }
  return [a, r];
}
function $u() {}
function Ku(e, n) {
  var t = Lu,
    r = Hu(),
    l = n(),
    a = !zr(r.memoizedState, l);
  a && ((r.memoizedState = l), (Wo = !0));
  r = r.queue;
  ao(Xu.bind(null, t, r, e), [e]);
  if (r.getSnapshot !== n || a || (null !== Mu && Mu.memoizedState.tag & 1)) {
    t.flags |= 2048;
    eo(9, Yu.bind(null, t, r, l, n), void 0, null);
    if (null === ns) throw Error(u(349));
    0 !== (Pu & 30) || qu(t, n, l);
  }
  return l;
}
function qu(e, n, t) {
  e.flags |= 16384;
  e = { getSnapshot: n, value: t };
  n = Lu.updateQueue;
  null === n
    ? ((n = { lastEffect: null, stores: null }),
      (Lu.updateQueue = n),
      (n.stores = [e]))
    : ((t = n.stores), null === t ? (n.stores = [e]) : t.push(e));
}
function Yu(e, n, t, r) {
  n.value = t;
  n.getSnapshot = r;
  Gu(n) && Zu(e);
}
function Xu(e, n, t) {
  return t(function () {
    Gu(n) && Zu(e);
  });
}
function Gu(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !zr(e, t);
  } catch (e) {
    return !0;
  }
}
function Zu(e) {
  var n = lu(e, 1);
  null !== n && zs(n, e, 1, -1);
}
function Ju(e) {
  var n = Bu();
  "function" === typeof e && (e = e());
  n.memoizedState = n.baseState = e;
  e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: Wu,
    lastRenderedState: e,
  };
  n.queue = e;
  e = e.dispatch = yo.bind(null, Lu, e);
  return [n.memoizedState, e];
}
function eo(e, n, t, r) {
  e = { tag: e, create: n, destroy: t, deps: r, next: null };
  n = Lu.updateQueue;
  null === n
    ? ((n = { lastEffect: null, stores: null }),
      (Lu.updateQueue = n),
      (n.lastEffect = e.next = e))
    : ((t = n.lastEffect),
      null === t
        ? (n.lastEffect = e.next = e)
        : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)));
  return e;
}
function no() {
  return Hu().memoizedState;
}
function to(e, n, t, r) {
  var l = Bu();
  Lu.flags |= e;
  l.memoizedState = eo(1 | n, t, void 0, void 0 === r ? null : r);
}
function ro(e, n, t, r) {
  var l = Hu();
  r = void 0 === r ? null : r;
  var a = void 0;
  if (null !== Tu) {
    var u = Tu.memoizedState;
    a = u.destroy;
    if (null !== r && Uu(r, u.deps)) {
      l.memoizedState = eo(n, t, a, r);
      return;
    }
  }
  Lu.flags |= e;
  l.memoizedState = eo(1 | n, t, a, r);
}
function lo(e, n) {
  return to(8390656, 8, e, n);
}
function ao(e, n) {
  return ro(2048, 8, e, n);
}
function uo(e, n) {
  return ro(4, 2, e, n);
}
function oo(e, n) {
  return ro(4, 4, e, n);
}
function io(e, n) {
  if ("function" === typeof n)
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (null !== n && void 0 !== n)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function so(e, n, t) {
  t = null !== t && void 0 !== t ? t.concat([e]) : null;
  return ro(4, 4, io.bind(null, n, e), t);
}
function co() {}
function fo(e, n) {
  var t = Hu();
  n = void 0 === n ? null : n;
  var r = t.memoizedState;
  if (null !== r && null !== n && Uu(n, r[1])) return r[0];
  t.memoizedState = [e, n];
  return e;
}
function po(e, n) {
  var t = Hu();
  n = void 0 === n ? null : n;
  var r = t.memoizedState;
  if (null !== r && null !== n && Uu(n, r[1])) return r[0];
  e = e();
  t.memoizedState = [e, n];
  return e;
}
function ho(e, n, t) {
  if (0 === (Pu & 21))
    return (
      e.baseState && ((e.baseState = !1), (Wo = !0)), (e.memoizedState = t)
    );
  zr(t, n) || ((t = Cn()), (Lu.lanes |= t), (is |= t), (e.baseState = !0));
  return n;
}
function mo(e, n) {
  var t = Ln;
  Ln = 0 !== t && 4 > t ? t : 4;
  e(!0);
  var r = zu.transition;
  zu.transition = {};
  try {
    e(!1), n();
  } finally {
    (Ln = t), (zu.transition = r);
  }
}
function go() {
  return Hu().memoizedState;
}
function vo(e, n, t) {
  var r = _s(e);
  t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (bo(e)) ko(n, t);
  else if (((t = ru(e, n, t, r)), null !== t)) {
    var l = Ns();
    zs(t, e, r, l);
    wo(t, n, r);
  }
}
function yo(e, n, t) {
  var r = _s(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (bo(e)) ko(n, l);
  else {
    var a = e.alternate;
    if (
      0 === e.lanes &&
      (null === a || 0 === a.lanes) &&
      ((a = n.lastRenderedReducer), null !== a)
    )
      try {
        var u = n.lastRenderedState,
          o = a(u, t);
        l.hasEagerState = !0;
        l.eagerState = o;
        if (zr(o, u)) {
          var i = n.interleaved;
          null === i
            ? ((l.next = l), tu(n))
            : ((l.next = i.next), (i.next = l));
          n.interleaved = l;
          return;
        }
      } catch (e) {
      } finally {
      }
    t = ru(e, n, l, r);
    null !== t && ((l = Ns()), zs(t, e, r, l), wo(t, n, r));
  }
}
function bo(e) {
  var n = e.alternate;
  return e === Lu || (null !== n && n === Lu);
}
function ko(e, n) {
  Ru = Fu = !0;
  var t = e.pending;
  null === t ? (n.next = n) : ((n.next = t.next), (t.next = n));
  e.pending = n;
}
function wo(e, n, t) {
  if (0 !== (t & 4194240)) {
    var r = n.lanes;
    r &= e.pendingLanes;
    t |= r;
    n.lanes = t;
    Pn(e, t);
  }
}
var So = {
    readContext: eu,
    useCallback: Iu,
    useContext: Iu,
    useEffect: Iu,
    useImperativeHandle: Iu,
    useInsertionEffect: Iu,
    useLayoutEffect: Iu,
    useMemo: Iu,
    useReducer: Iu,
    useRef: Iu,
    useState: Iu,
    useDebugValue: Iu,
    useDeferredValue: Iu,
    useTransition: Iu,
    useMutableSource: Iu,
    useSyncExternalStore: Iu,
    useId: Iu,
    unstable_isNewReconciler: !1,
  },
  xo = {
    readContext: eu,
    useCallback: function (e, n) {
      Bu().memoizedState = [e, void 0 === n ? null : n];
      return e;
    },
    useContext: eu,
    useEffect: lo,
    useImperativeHandle: function (e, n, t) {
      t = null !== t && void 0 !== t ? t.concat([e]) : null;
      return to(4194308, 4, io.bind(null, n, e), t);
    },
    useLayoutEffect: function (e, n) {
      return to(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return to(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Bu();
      n = void 0 === n ? null : n;
      e = e();
      t.memoizedState = [e, n];
      return e;
    },
    useReducer: function (e, n, t) {
      var r = Bu();
      n = void 0 !== t ? t(n) : n;
      r.memoizedState = r.baseState = n;
      e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n,
      };
      r.queue = e;
      e = e.dispatch = vo.bind(null, Lu, e);
      return [r.memoizedState, e];
    },
    useRef: function (e) {
      var n = Bu();
      e = { current: e };
      return (n.memoizedState = e);
    },
    useState: Ju,
    useDebugValue: co,
    useDeferredValue: function (e) {
      return (Bu().memoizedState = e);
    },
    useTransition: function () {
      var e = Ju(!1),
        n = e[0];
      e = mo.bind(null, e[1]);
      Bu().memoizedState = e;
      return [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = Lu,
        l = Bu();
      if (za) {
        if (void 0 === t) throw Error(u(407));
        t = t();
      } else {
        t = n();
        if (null === ns) throw Error(u(349));
        0 !== (Pu & 30) || qu(r, n, t);
      }
      l.memoizedState = t;
      var a = { value: t, getSnapshot: n };
      l.queue = a;
      lo(Xu.bind(null, r, a, e), [e]);
      r.flags |= 2048;
      eo(9, Yu.bind(null, r, a, t, n), void 0, null);
      return t;
    },
    useId: function () {
      var e = Bu(),
        n = ns.identifierPrefix;
      if (za) {
        var t = wa;
        var r = ka;
        t = (r & ~(1 << (32 - hn(r) - 1))).toString(32) + t;
        n = ":" + n + "R" + t;
        t = Du++;
        0 < t && (n += "H" + t.toString(32));
        n += ":";
      } else (t = Ou++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  Eo = {
    readContext: eu,
    useCallback: fo,
    useContext: eu,
    useEffect: ao,
    useImperativeHandle: so,
    useInsertionEffect: uo,
    useLayoutEffect: oo,
    useMemo: po,
    useReducer: Qu,
    useRef: no,
    useState: function () {
      return Qu(Wu);
    },
    useDebugValue: co,
    useDeferredValue: function (e) {
      var n = Hu();
      return ho(n, Tu.memoizedState, e);
    },
    useTransition: function () {
      var e = Qu(Wu)[0],
        n = Hu().memoizedState;
      return [e, n];
    },
    useMutableSource: $u,
    useSyncExternalStore: Ku,
    useId: go,
    unstable_isNewReconciler: !1,
  },
  Co = {
    readContext: eu,
    useCallback: fo,
    useContext: eu,
    useEffect: ao,
    useImperativeHandle: so,
    useInsertionEffect: uo,
    useLayoutEffect: oo,
    useMemo: po,
    useReducer: ju,
    useRef: no,
    useState: function () {
      return ju(Wu);
    },
    useDebugValue: co,
    useDeferredValue: function (e) {
      var n = Hu();
      return null === Tu ? (n.memoizedState = e) : ho(n, Tu.memoizedState, e);
    },
    useTransition: function () {
      var e = ju(Wu)[0],
        n = Hu().memoizedState;
      return [e, n];
    },
    useMutableSource: $u,
    useSyncExternalStore: Ku,
    useId: go,
    unstable_isNewReconciler: !1,
  };
function No(e, n) {
  if (e && e.defaultProps) {
    n = A({}, n);
    e = e.defaultProps;
    for (var t in e) void 0 === n[t] && (n[t] = e[t]);
    return n;
  }
  return n;
}
function _o(e, n, t, r) {
  n = e.memoizedState;
  t = t(r, n);
  t = null === t || void 0 === t ? n : A({}, n, t);
  e.memoizedState = t;
  0 === e.lanes && (e.updateQueue.baseState = t);
}
var zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ke(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = Ns(),
      l = _s(e),
      a = iu(r, l);
    a.payload = n;
    void 0 !== t && null !== t && (a.callback = t);
    n = su(e, a, l);
    null !== n && (zs(n, e, l, r), cu(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = Ns(),
      l = _s(e),
      a = iu(r, l);
    a.tag = 1;
    a.payload = n;
    void 0 !== t && null !== t && (a.callback = t);
    n = su(e, a, l);
    null !== n && (zs(n, e, l, r), cu(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = Ns(),
      r = _s(e),
      l = iu(t, r);
    l.tag = 2;
    void 0 !== n && null !== n && (l.callback = n);
    n = su(e, l, r);
    null !== n && (zs(n, e, r, t), cu(n, e, r));
  },
};
function Po(e, n, t, r, l, a, u) {
  e = e.stateNode;
  return "function" === typeof e.shouldComponentUpdate
    ? e.shouldComponentUpdate(r, a, u)
    : n.prototype && n.prototype.isPureReactComponent
      ? !Pr(t, r) || !Pr(l, a)
      : !0;
}
function Lo(e, n, t) {
  var r = !1,
    l = Xl;
  var a = n.contextType;
  "object" === typeof a && null !== a
    ? (a = eu(a))
    : ((l = na(n) ? Jl : Gl.current),
      (r = n.contextTypes),
      (a = (r = null !== r && void 0 !== r) ? ea(e, l) : Xl));
  n = new n(t, a);
  e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null;
  n.updater = zo;
  e.stateNode = n;
  n._reactInternals = e;
  r &&
    ((e = e.stateNode),
    (e.__reactInternalMemoizedUnmaskedChildContext = l),
    (e.__reactInternalMemoizedMaskedChildContext = a));
  return n;
}
function To(e, n, t, r) {
  e = n.state;
  "function" === typeof n.componentWillReceiveProps &&
    n.componentWillReceiveProps(t, r);
  "function" === typeof n.UNSAFE_componentWillReceiveProps &&
    n.UNSAFE_componentWillReceiveProps(t, r);
  n.state !== e && zo.enqueueReplaceState(n, n.state, null);
}
function Mo(e, n, t, r) {
  var l = e.stateNode;
  l.props = t;
  l.state = e.memoizedState;
  l.refs = {};
  uu(e);
  var a = n.contextType;
  "object" === typeof a && null !== a
    ? (l.context = eu(a))
    : ((a = na(n) ? Jl : Gl.current), (l.context = ea(e, a)));
  l.state = e.memoizedState;
  a = n.getDerivedStateFromProps;
  "function" === typeof a && (_o(e, n, a, t), (l.state = e.memoizedState));
  "function" === typeof n.getDerivedStateFromProps ||
    "function" === typeof l.getSnapshotBeforeUpdate ||
    ("function" !== typeof l.UNSAFE_componentWillMount &&
      "function" !== typeof l.componentWillMount) ||
    ((n = l.state),
    "function" === typeof l.componentWillMount && l.componentWillMount(),
    "function" === typeof l.UNSAFE_componentWillMount &&
      l.UNSAFE_componentWillMount(),
    n !== l.state && zo.enqueueReplaceState(l, l.state, null),
    du(e, t, l, r),
    (l.state = e.memoizedState));
  "function" === typeof l.componentDidMount && (e.flags |= 4194308);
}
function Fo(e, n) {
  try {
    var t = "",
      r = n;
    do {
      (t += j(r)), (r = r.return);
    } while (r);
    var l = t;
  } catch (e) {
    l = "\nError generating stack: " + e.message + "\n" + e.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Ro(e, n, t) {
  return {
    value: e,
    source: null,
    stack: null != t ? t : null,
    digest: null != n ? n : null,
  };
}
function Do(e, n) {
  try {
    console.error(n.value);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
var Oo = "function" === typeof WeakMap ? WeakMap : Map;
function Io(e, n, t) {
  t = iu(-1, t);
  t.tag = 3;
  t.payload = { element: null };
  var r = n.value;
  t.callback = function () {
    gs || ((gs = !0), (vs = r));
    Do(e, n);
  };
  return t;
}
function Uo(e, n, t) {
  t = iu(-1, t);
  t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ("function" === typeof r) {
    var l = n.value;
    t.payload = function () {
      return r(l);
    };
    t.callback = function () {
      Do(e, n);
    };
  }
  var a = e.stateNode;
  null !== a &&
    "function" === typeof a.componentDidCatch &&
    (t.callback = function () {
      Do(e, n);
      "function" !== typeof r &&
        (null === ys ? (ys = new Set([this])) : ys.add(this));
      var t = n.stack;
      this.componentDidCatch(n.value, { componentStack: null !== t ? t : "" });
    });
  return t;
}
function Vo(e, n, t) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new Oo();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), void 0 === l && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Js.bind(null, e, n, t)), n.then(e, e));
}
function Ao(e) {
  do {
    var n;
    if ((n = 13 === e.tag))
      (n = e.memoizedState),
        (n = null !== n ? (null !== n.dehydrated ? !0 : !1) : !0);
    if (n) return e;
    e = e.return;
  } while (null !== e);
  return null;
}
function Bo(e, n, t, r, l) {
  if (0 === (e.mode & 1))
    return (
      e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          1 === t.tag &&
            (null === t.alternate
              ? (t.tag = 17)
              : ((n = iu(-1, 1)), (n.tag = 2), su(t, n, 1))),
          (t.lanes |= 1)),
      e
    );
  e.flags |= 65536;
  e.lanes = l;
  return e;
}
var Ho = E.ReactCurrentOwner,
  Wo = !1;
function Qo(e, n, t, r) {
  n.child = null === e ? ja(n, null, t, r) : Qa(n, e.child, t, r);
}
function jo(e, n, t, r, l) {
  t = t.render;
  var a = n.ref;
  Ja(n, l);
  r = Vu(e, n, t, r, a, l);
  t = Au();
  if (null !== e && !Wo)
    return (
      (n.updateQueue = e.updateQueue),
      (n.flags &= -2053),
      (e.lanes &= ~l),
      fi(e, n, l)
    );
  za && t && Ea(n);
  n.flags |= 1;
  Qo(e, n, r, l);
  return n.child;
}
function $o(e, n, t, r, l) {
  if (null === e) {
    var a = t.type;
    if (
      "function" === typeof a &&
      !oc(a) &&
      void 0 === a.defaultProps &&
      null === t.compare &&
      void 0 === t.defaultProps
    )
      return (n.tag = 15), (n.type = a), Ko(e, n, a, r, l);
    e = cc(t.type, null, r, n, n.mode, l);
    e.ref = n.ref;
    e.return = n;
    return (n.child = e);
  }
  a = e.child;
  if (0 === (e.lanes & l)) {
    var u = a.memoizedProps;
    t = t.compare;
    t = null !== t ? t : Pr;
    if (t(u, r) && e.ref === n.ref) return fi(e, n, l);
  }
  n.flags |= 1;
  e = sc(a, r);
  e.ref = n.ref;
  e.return = n;
  return (n.child = e);
}
function Ko(e, n, t, r, l) {
  if (null !== e) {
    var a = e.memoizedProps;
    if (Pr(a, r) && e.ref === n.ref)
      if (((Wo = !1), (n.pendingProps = r = a), 0 !== (e.lanes & l)))
        0 !== (e.flags & 131072) && (Wo = !0);
      else return (n.lanes = e.lanes), fi(e, n, l);
  }
  return Xo(e, n, t, r, l);
}
function qo(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    a = null !== e ? e.memoizedState : null;
  if ("hidden" === r.mode)
    if (0 === (n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Yl(as, ls),
        (ls |= t);
    else {
      if (0 === (t & 1073741824))
        return (
          (e = null !== a ? a.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          Yl(as, ls),
          (ls |= e),
          null
        );
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      r = null !== a ? a.baseLanes : t;
      Yl(as, ls);
      ls |= r;
    }
  else
    null !== a ? ((r = a.baseLanes | t), (n.memoizedState = null)) : (r = t),
      Yl(as, ls),
      (ls |= r);
  Qo(e, n, l, t);
  return n.child;
}
function Yo(e, n) {
  var t = n.ref;
  if ((null === e && null !== t) || (null !== e && e.ref !== t))
    (n.flags |= 512), (n.flags |= 2097152);
}
function Xo(e, n, t, r, l) {
  var a = na(t) ? Jl : Gl.current;
  a = ea(n, a);
  Ja(n, l);
  t = Vu(e, n, t, r, a, l);
  r = Au();
  if (null !== e && !Wo)
    return (
      (n.updateQueue = e.updateQueue),
      (n.flags &= -2053),
      (e.lanes &= ~l),
      fi(e, n, l)
    );
  za && r && Ea(n);
  n.flags |= 1;
  Qo(e, n, t, l);
  return n.child;
}
function Go(e, n, t, r, l) {
  if (na(t)) {
    var a = !0;
    aa(n);
  } else a = !1;
  Ja(n, l);
  if (null === n.stateNode) ci(e, n), Lo(n, t, r), Mo(n, t, r, l), (r = !0);
  else if (null === e) {
    var u = n.stateNode,
      o = n.memoizedProps;
    u.props = o;
    var i = u.context,
      s = t.contextType;
    "object" === typeof s && null !== s
      ? (s = eu(s))
      : ((s = na(t) ? Jl : Gl.current), (s = ea(n, s)));
    var c = t.getDerivedStateFromProps,
      f =
        "function" === typeof c ||
        "function" === typeof u.getSnapshotBeforeUpdate;
    f ||
      ("function" !== typeof u.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof u.componentWillReceiveProps) ||
      ((o !== r || i !== s) && To(n, u, r, s));
    au = !1;
    var d = n.memoizedState;
    u.state = d;
    du(n, r, u, l);
    i = n.memoizedState;
    o !== r || d !== i || Zl.current || au
      ? ("function" === typeof c && (_o(n, t, c, r), (i = n.memoizedState)),
        (o = au || Po(n, t, o, r, d, i, s))
          ? (f ||
              ("function" !== typeof u.UNSAFE_componentWillMount &&
                "function" !== typeof u.componentWillMount) ||
              ("function" === typeof u.componentWillMount &&
                u.componentWillMount(),
              "function" === typeof u.UNSAFE_componentWillMount &&
                u.UNSAFE_componentWillMount()),
            "function" === typeof u.componentDidMount && (n.flags |= 4194308))
          : ("function" === typeof u.componentDidMount && (n.flags |= 4194308),
            (n.memoizedProps = r),
            (n.memoizedState = i)),
        (u.props = r),
        (u.state = i),
        (u.context = s),
        (r = o))
      : ("function" === typeof u.componentDidMount && (n.flags |= 4194308),
        (r = !1));
  } else {
    u = n.stateNode;
    ou(e, n);
    o = n.memoizedProps;
    s = n.type === n.elementType ? o : No(n.type, o);
    u.props = s;
    f = n.pendingProps;
    d = u.context;
    i = t.contextType;
    "object" === typeof i && null !== i
      ? (i = eu(i))
      : ((i = na(t) ? Jl : Gl.current), (i = ea(n, i)));
    var p = t.getDerivedStateFromProps;
    (c =
      "function" === typeof p ||
      "function" === typeof u.getSnapshotBeforeUpdate) ||
      ("function" !== typeof u.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof u.componentWillReceiveProps) ||
      ((o !== f || d !== i) && To(n, u, r, i));
    au = !1;
    d = n.memoizedState;
    u.state = d;
    du(n, r, u, l);
    var h = n.memoizedState;
    o !== f || d !== h || Zl.current || au
      ? ("function" === typeof p && (_o(n, t, p, r), (h = n.memoizedState)),
        (s = au || Po(n, t, s, r, d, h, i) || !1)
          ? (c ||
              ("function" !== typeof u.UNSAFE_componentWillUpdate &&
                "function" !== typeof u.componentWillUpdate) ||
              ("function" === typeof u.componentWillUpdate &&
                u.componentWillUpdate(r, h, i),
              "function" === typeof u.UNSAFE_componentWillUpdate &&
                u.UNSAFE_componentWillUpdate(r, h, i)),
            "function" === typeof u.componentDidUpdate && (n.flags |= 4),
            "function" === typeof u.getSnapshotBeforeUpdate &&
              (n.flags |= 1024))
          : ("function" !== typeof u.componentDidUpdate ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (n.flags |= 4),
            "function" !== typeof u.getSnapshotBeforeUpdate ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = h)),
        (u.props = r),
        (u.state = h),
        (u.context = i),
        (r = s))
      : ("function" !== typeof u.componentDidUpdate ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (n.flags |= 4),
        "function" !== typeof u.getSnapshotBeforeUpdate ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Zo(e, n, t, r, a, l);
}
function Zo(e, n, t, r, l, a) {
  Yo(e, n);
  var u = 0 !== (n.flags & 128);
  if (!r && !u) return l && ua(n, t, !1), fi(e, n, a);
  r = n.stateNode;
  Ho.current = n;
  var o =
    u && "function" !== typeof t.getDerivedStateFromError ? null : r.render();
  n.flags |= 1;
  null !== e && u
    ? ((n.child = Qa(n, e.child, null, a)), (n.child = Qa(n, null, o, a)))
    : Qo(e, n, o, a);
  n.memoizedState = r.state;
  l && ua(n, t, !0);
  return n.child;
}
function Jo(e) {
  var n = e.stateNode;
  n.pendingContext
    ? ra(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && ra(e, n.context, !1);
  bu(e, n.containerInfo);
}
function ei(e, n, t, r, l) {
  Ia();
  Ua(l);
  n.flags |= 256;
  Qo(e, n, t, r);
  return n.child;
}
var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ri(e, n, t) {
  var r = n.pendingProps,
    l = xu.current,
    a = !1,
    u = 0 !== (n.flags & 128),
    o;
  (o = u) || (o = null !== e && null === e.memoizedState ? !1 : 0 !== (l & 2));
  if (o) (a = !0), (n.flags &= -129);
  else if (null === e || null !== e.memoizedState) l |= 1;
  Yl(xu, l & 1);
  if (null === e) {
    Fa(n);
    e = n.memoizedState;
    if (null !== e && ((e = e.dehydrated), null !== e))
      return (
        0 === (n.mode & 1)
          ? (n.lanes = 1)
          : "$!" === e.data
            ? (n.lanes = 8)
            : (n.lanes = 1073741824),
        null
      );
    u = r.children;
    e = r.fallback;
    return a
      ? ((r = n.mode),
        (a = n.child),
        (u = { mode: "hidden", children: u }),
        0 === (r & 1) && null !== a
          ? ((a.childLanes = 0), (a.pendingProps = u))
          : (a = dc(u, r, 0, null)),
        (e = fc(e, r, t, null)),
        (a.return = n),
        (e.return = n),
        (a.sibling = e),
        (n.child = a),
        (n.child.memoizedState = ti(t)),
        (n.memoizedState = ni),
        e)
      : li(n, u);
  }
  l = e.memoizedState;
  if (null !== l && ((o = l.dehydrated), null !== o))
    return ui(e, n, u, r, o, l, t);
  if (a) {
    a = r.fallback;
    u = n.mode;
    l = e.child;
    o = l.sibling;
    var i = { mode: "hidden", children: r.children };
    0 === (u & 1) && n.child !== l
      ? ((r = n.child),
        (r.childLanes = 0),
        (r.pendingProps = i),
        (n.deletions = null))
      : ((r = sc(l, i)), (r.subtreeFlags = l.subtreeFlags & 14680064));
    null !== o ? (a = sc(o, a)) : ((a = fc(a, u, t, null)), (a.flags |= 2));
    a.return = n;
    r.return = n;
    r.sibling = a;
    n.child = r;
    r = a;
    a = n.child;
    u = e.child.memoizedState;
    u =
      null === u
        ? ti(t)
        : {
            baseLanes: u.baseLanes | t,
            cachePool: null,
            transitions: u.transitions,
          };
    a.memoizedState = u;
    a.childLanes = e.childLanes & ~t;
    n.memoizedState = ni;
    return r;
  }
  a = e.child;
  e = a.sibling;
  r = sc(a, { mode: "visible", children: r.children });
  0 === (n.mode & 1) && (r.lanes = t);
  r.return = n;
  r.sibling = null;
  null !== e &&
    ((t = n.deletions),
    null === t ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e));
  n.child = r;
  n.memoizedState = null;
  return r;
}
function li(e, n) {
  n = dc({ mode: "visible", children: n }, e.mode, 0, null);
  n.return = e;
  return (e.child = n);
}
function ai(e, n, t, r) {
  null !== r && Ua(r);
  Qa(n, e.child, null, t);
  e = li(n, n.pendingProps.children);
  e.flags |= 2;
  n.memoizedState = null;
  return e;
}
function ui(e, n, t, r, l, a, o) {
  if (t) {
    if (n.flags & 256)
      return (n.flags &= -257), (r = Ro(Error(u(422)))), ai(e, n, o, r);
    if (null !== n.memoizedState)
      return (n.child = e.child), (n.flags |= 128), null;
    a = r.fallback;
    l = n.mode;
    r = dc({ mode: "visible", children: r.children }, l, 0, null);
    a = fc(a, l, o, null);
    a.flags |= 2;
    r.return = n;
    a.return = n;
    r.sibling = a;
    n.child = r;
    0 !== (n.mode & 1) && Qa(n, e.child, null, o);
    n.child.memoizedState = ti(o);
    n.memoizedState = ni;
    return a;
  }
  if (0 === (n.mode & 1)) return ai(e, n, o, null);
  if ("$!" === l.data) {
    r = l.nextSibling && l.nextSibling.dataset;
    if (r) var i = r.dgst;
    r = i;
    a = Error(u(419));
    r = Ro(a, r, void 0);
    return ai(e, n, o, r);
  }
  i = 0 !== (o & e.childLanes);
  if (Wo || i) {
    r = ns;
    if (null !== r) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = 0 !== (l & (r.suspendedLanes | o)) ? 0 : l;
      0 !== l &&
        l !== a.retryLane &&
        ((a.retryLane = l), lu(e, l), zs(r, e, l, -1));
    }
    Hs();
    r = Ro(Error(u(421)));
    return ai(e, n, o, r);
  }
  if ("$?" === l.data)
    return (
      (n.flags |= 128),
      (n.child = e.child),
      (n = nc.bind(null, e)),
      (l._reactRetry = n),
      null
    );
  e = a.treeContext;
  _a = Ml(l.nextSibling);
  Na = n;
  za = !0;
  Pa = null;
  null !== e &&
    ((va[ya++] = ka),
    (va[ya++] = wa),
    (va[ya++] = ba),
    (ka = e.id),
    (wa = e.overflow),
    (ba = n));
  n = li(n, r.children);
  n.flags |= 4096;
  return n;
}
function oi(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  null !== r && (r.lanes |= n);
  Za(e.return, n, t);
}
function ii(e, n, t, r, l) {
  var a = e.memoizedState;
  null === a
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((a.isBackwards = n),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = t),
      (a.tailMode = l));
}
function si(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    a = r.tail;
  Qo(e, n, r.children, t);
  r = xu.current;
  if (0 !== (r & 2)) (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (null !== e && 0 !== (e.flags & 128))
      e: for (e = n.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && oi(e, t, n);
        else if (19 === e.tag) oi(e, t, n);
        else if (null !== e.child) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    r &= 1;
  }
  Yl(xu, r);
  if (0 === (n.mode & 1)) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        t = n.child;
        for (l = null; null !== t; )
          (e = t.alternate),
            null !== e && null === Eu(e) && (l = t),
            (t = t.sibling);
        t = l;
        null === t
          ? ((l = n.child), (n.child = null))
          : ((l = t.sibling), (t.sibling = null));
        ii(n, !1, l, t, a);
        break;
      case "backwards":
        t = null;
        l = n.child;
        for (n.child = null; null !== l; ) {
          e = l.alternate;
          if (null !== e && null === Eu(e)) {
            n.child = l;
            break;
          }
          e = l.sibling;
          l.sibling = t;
          t = l;
          l = e;
        }
        ii(n, !0, t, null, a);
        break;
      case "together":
        ii(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function ci(e, n) {
  0 === (n.mode & 1) &&
    null !== e &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function fi(e, n, t) {
  null !== e && (n.dependencies = e.dependencies);
  is |= n.lanes;
  if (0 === (t & n.childLanes)) return null;
  if (null !== e && n.child !== e.child) throw Error(u(153));
  if (null !== n.child) {
    e = n.child;
    t = sc(e, e.pendingProps);
    n.child = t;
    for (t.return = n; null !== e.sibling; )
      (e = e.sibling), (t = t.sibling = sc(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function di(e, n, t) {
  switch (n.tag) {
    case 3:
      Jo(n);
      Ia();
      break;
    case 5:
      wu(n);
      break;
    case 1:
      na(n.type) && aa(n);
      break;
    case 4:
      bu(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      Yl($a, r._currentValue);
      r._currentValue = l;
      break;
    case 13:
      r = n.memoizedState;
      if (null !== r) {
        if (null !== r.dehydrated)
          return Yl(xu, xu.current & 1), (n.flags |= 128), null;
        if (0 !== (t & n.child.childLanes)) return ri(e, n, t);
        Yl(xu, xu.current & 1);
        e = fi(e, n, t);
        return null !== e ? e.sibling : null;
      }
      Yl(xu, xu.current & 1);
      break;
    case 19:
      r = 0 !== (t & n.childLanes);
      if (0 !== (e.flags & 128)) {
        if (r) return si(e, n, t);
        n.flags |= 128;
      }
      l = n.memoizedState;
      null !== l &&
        ((l.rendering = null), (l.tail = null), (l.lastEffect = null));
      Yl(xu, xu.current);
      if (r) break;
      else return null;
    case 22:
    case 23:
      return (n.lanes = 0), qo(e, n, t);
  }
  return fi(e, n, t);
}
var pi, hi, mi, gi;
pi = function (e, n) {
  for (var t = n.child; null !== t; ) {
    if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
    else if (4 !== t.tag && null !== t.child) {
      t.child.return = t;
      t = t.child;
      continue;
    }
    if (t === n) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === n) return;
      t = t.return;
    }
    t.sibling.return = t.return;
    t = t.sibling;
  }
};
hi = function () {};
mi = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode;
    yu(mu.current);
    var a = null;
    switch (t) {
      case "input":
        l = ee(e, l);
        r = ee(e, r);
        a = [];
        break;
      case "select":
        l = A({}, l, { value: void 0 });
        r = A({}, r, { value: void 0 });
        a = [];
        break;
      case "textarea":
        l = ie(e, l);
        r = ie(e, r);
        a = [];
        break;
      default:
        "function" !== typeof l.onClick &&
          "function" === typeof r.onClick &&
          (e.onclick = Sl);
    }
    Se(t, r);
    var u;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
        if ("style" === c) {
          var o = l[c];
          for (u in o) o.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
        } else
          "dangerouslySetInnerHTML" !== c &&
            "children" !== c &&
            "suppressContentEditableWarning" !== c &&
            "suppressHydrationWarning" !== c &&
            "autoFocus" !== c &&
            (i.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var s = r[c];
      o = null != l ? l[c] : void 0;
      if (r.hasOwnProperty(c) && s !== o && (null != s || null != o))
        if ("style" === c)
          if (o) {
            for (u in o)
              !o.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (t || (t = {}), (t[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                o[u] !== s[u] &&
                (t || (t = {}), (t[u] = s[u]));
          } else t || (a || (a = []), a.push(c, t)), (t = s);
        else
          "dangerouslySetInnerHTML" === c
            ? ((s = s ? s.__html : void 0),
              (o = o ? o.__html : void 0),
              null != s && o !== s && (a = a || []).push(c, s))
            : "children" === c
              ? ("string" !== typeof s && "number" !== typeof s) ||
                (a = a || []).push(c, "" + s)
              : "suppressContentEditableWarning" !== c &&
                "suppressHydrationWarning" !== c &&
                (i.hasOwnProperty(c)
                  ? (null != s && "onScroll" === c && il("scroll", e),
                    a || o === s || (a = []))
                  : (a = a || []).push(c, s));
    }
    t && (a = a || []).push("style", t);
    var c = a;
    if ((n.updateQueue = c)) n.flags |= 4;
  }
};
gi = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function vi(e, n) {
  if (!za)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; null !== n; )
          null !== n.alternate && (t = n), (n = n.sibling);
        null === t ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; null !== t; )
          null !== t.alternate && (r = t), (t = t.sibling);
        null === r
          ? n || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function yi(e) {
  var n = null !== e.alternate && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; null !== l; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; null !== l; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  e.subtreeFlags |= r;
  e.childLanes = t;
  return n;
}
function bi(e, n, t) {
  var r = n.pendingProps;
  Ca(n);
  switch (n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return yi(n), null;
    case 1:
      return na(n.type) && ta(), yi(n), null;
    case 3:
      r = n.stateNode;
      ku();
      ql(Zl);
      ql(Gl);
      Nu();
      r.pendingContext &&
        ((r.context = r.pendingContext), (r.pendingContext = null));
      if (null === e || null === e.child)
        Da(n)
          ? (n.flags |= 4)
          : null === e ||
            (e.memoizedState.isDehydrated && 0 === (n.flags & 256)) ||
            ((n.flags |= 1024), null !== Pa && (Ms(Pa), (Pa = null)));
      hi(e, n);
      yi(n);
      return null;
    case 5:
      Su(n);
      var l = yu(vu.current);
      t = n.type;
      if (null !== e && null != n.stateNode)
        mi(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (null === n.stateNode) throw Error(u(166));
          yi(n);
          return null;
        }
        e = yu(mu.current);
        if (Da(n)) {
          r = n.stateNode;
          t = n.type;
          var a = n.memoizedProps;
          r[Dl] = n;
          r[Ol] = a;
          e = 0 !== (n.mode & 1);
          switch (t) {
            case "dialog":
              il("cancel", r);
              il("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              il("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < ll.length; l++) il(ll[l], r);
              break;
            case "source":
              il("error", r);
              break;
            case "img":
            case "image":
            case "link":
              il("error", r);
              il("load", r);
              break;
            case "details":
              il("toggle", r);
              break;
            case "input":
              ne(r, a);
              il("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple };
              il("invalid", r);
              break;
            case "textarea":
              se(r, a), il("invalid", r);
          }
          Se(t, a);
          l = null;
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              "children" === o
                ? "string" === typeof s
                  ? r.textContent !== s &&
                    (!0 !== a.suppressHydrationWarning &&
                      wl(r.textContent, s, e),
                    (l = ["children", s]))
                  : "number" === typeof s &&
                    r.textContent !== "" + s &&
                    (!0 !== a.suppressHydrationWarning &&
                      wl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : i.hasOwnProperty(o) &&
                  null != s &&
                  "onScroll" === o &&
                  il("scroll", r);
            }
          switch (t) {
            case "input":
              G(r);
              le(r, a, !0);
              break;
            case "textarea":
              G(r);
              fe(r);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof a.onClick && (r.onclick = Sl);
          }
          r = l;
          n.updateQueue = r;
          null !== r && (n.flags |= 4);
        } else {
          o = 9 === l.nodeType ? l : l.ownerDocument;
          "http://www.w3.org/1999/xhtml" === e && (e = de(t));
          "http://www.w3.org/1999/xhtml" === e
            ? "script" === t
              ? ((e = o.createElement("div")),
                (e.innerHTML = "<script></script>"),
                (e = e.removeChild(e.firstChild)))
              : "string" === typeof r.is
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  "select" === t &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
            : (e = o.createElementNS(e, t));
          e[Dl] = n;
          e[Ol] = r;
          pi(e, n, !1, !1);
          n.stateNode = e;
          e: {
            o = xe(t, r);
            switch (t) {
              case "dialog":
                il("cancel", e);
                il("close", e);
                l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                il("load", e);
                l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < ll.length; l++) il(ll[l], e);
                l = r;
                break;
              case "source":
                il("error", e);
                l = r;
                break;
              case "img":
              case "image":
              case "link":
                il("error", e);
                il("load", e);
                l = r;
                break;
              case "details":
                il("toggle", e);
                l = r;
                break;
              case "input":
                ne(e, r);
                l = ee(e, r);
                il("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple };
                l = A({}, r, { value: void 0 });
                il("invalid", e);
                break;
              case "textarea":
                se(e, r);
                l = ie(e, r);
                il("invalid", e);
                break;
              default:
                l = r;
            }
            Se(t, l);
            s = l;
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var c = s[a];
                "style" === a
                  ? ke(e, c)
                  : "dangerouslySetInnerHTML" === a
                    ? ((c = c ? c.__html : void 0), null != c && me(e, c))
                    : "children" === a
                      ? "string" === typeof c
                        ? ("textarea" !== t || "" !== c) && ge(e, c)
                        : "number" === typeof c && ge(e, "" + c)
                      : "suppressContentEditableWarning" !== a &&
                        "suppressHydrationWarning" !== a &&
                        "autoFocus" !== a &&
                        (i.hasOwnProperty(a)
                          ? null != c && "onScroll" === a && il("scroll", e)
                          : null != c && x(e, a, c, o));
              }
            switch (t) {
              case "input":
                G(e);
                le(e, r, !1);
                break;
              case "textarea":
                G(e);
                fe(e);
                break;
              case "option":
                null != r.value && e.setAttribute("value", "" + q(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple;
                a = r.value;
                null != a
                  ? oe(e, !!r.multiple, a, !1)
                  : null != r.defaultValue &&
                    oe(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                "function" === typeof l.onClick && (e.onclick = Sl);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      }
      yi(n);
      return null;
    case 6:
      if (e && null != n.stateNode) gi(e, n, e.memoizedProps, r);
      else {
        if ("string" !== typeof r && null === n.stateNode) throw Error(u(166));
        t = yu(vu.current);
        yu(mu.current);
        if (Da(n)) {
          r = n.stateNode;
          t = n.memoizedProps;
          r[Dl] = n;
          if ((a = r.nodeValue !== t))
            if (((e = Na), null !== e))
              switch (e.tag) {
                case 3:
                  wl(r.nodeValue, t, 0 !== (e.mode & 1));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    wl(r.nodeValue, t, 0 !== (e.mode & 1));
              }
          a && (n.flags |= 4);
        } else
          (r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r)),
            (r[Dl] = n),
            (n.stateNode = r);
      }
      yi(n);
      return null;
    case 13:
      ql(xu);
      r = n.memoizedState;
      if (
        null === e ||
        (null !== e.memoizedState && null !== e.memoizedState.dehydrated)
      ) {
        if (za && null !== _a && 0 !== (n.mode & 1) && 0 === (n.flags & 128))
          Oa(), Ia(), (n.flags |= 98560), (a = !1);
        else if (((a = Da(n)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!a) throw Error(u(318));
            a = n.memoizedState;
            a = null !== a ? a.dehydrated : null;
            if (!a) throw Error(u(317));
            a[Dl] = n;
          } else
            Ia(),
              0 === (n.flags & 128) && (n.memoizedState = null),
              (n.flags |= 4);
          yi(n);
          a = !1;
        } else null !== Pa && (Ms(Pa), (Pa = null)), (a = !0);
        if (!a) return n.flags & 65536 ? n : null;
      }
      if (0 !== (n.flags & 128)) return (n.lanes = t), n;
      r = null !== r;
      r !== (null !== e && null !== e.memoizedState) &&
        r &&
        ((n.child.flags |= 8192),
        0 !== (n.mode & 1) &&
          (null === e || 0 !== (xu.current & 1) ? 0 === us && (us = 3) : Hs()));
      null !== n.updateQueue && (n.flags |= 4);
      yi(n);
      return null;
    case 4:
      return (
        ku(), hi(e, n), null === e && fl(n.stateNode.containerInfo), yi(n), null
      );
    case 10:
      return Ga(n.type._context), yi(n), null;
    case 17:
      return na(n.type) && ta(), yi(n), null;
    case 19:
      ql(xu);
      a = n.memoizedState;
      if (null === a) return yi(n), null;
      r = 0 !== (n.flags & 128);
      o = a.rendering;
      if (null === o)
        if (r) vi(a, !1);
        else {
          if (0 !== us || (null !== e && 0 !== (e.flags & 128)))
            for (e = n.child; null !== e; ) {
              o = Eu(e);
              if (null !== o) {
                n.flags |= 128;
                vi(a, !1);
                r = o.updateQueue;
                null !== r && ((n.updateQueue = r), (n.flags |= 4));
                n.subtreeFlags = 0;
                r = t;
                for (t = n.child; null !== t; )
                  (a = t),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    null === o
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                Yl(xu, (xu.current & 1) | 2);
                return n.child;
              }
              e = e.sibling;
            }
          null !== a.tail &&
            rn() > hs &&
            ((n.flags |= 128), (r = !0), vi(a, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Eu(o)), null !== e)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              null !== t && ((n.updateQueue = t), (n.flags |= 4)),
              vi(a, !0),
              null === a.tail && "hidden" === a.tailMode && !o.alternate && !za)
            )
              return yi(n), null;
          } else
            2 * rn() - a.renderingStartTime > hs &&
              1073741824 !== t &&
              ((n.flags |= 128), (r = !0), vi(a, !1), (n.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = a.last),
            null !== t ? (t.sibling = o) : (n.child = o),
            (a.last = o));
      }
      if (null !== a.tail)
        return (
          (n = a.tail),
          (a.rendering = n),
          (a.tail = n.sibling),
          (a.renderingStartTime = rn()),
          (n.sibling = null),
          (t = xu.current),
          Yl(xu, r ? (t & 1) | 2 : t & 1),
          n
        );
      yi(n);
      return null;
    case 22:
    case 23:
      return (
        Us(),
        (r = null !== n.memoizedState),
        null !== e && (null !== e.memoizedState) !== r && (n.flags |= 8192),
        r && 0 !== (n.mode & 1)
          ? 0 !== (ls & 1073741824) &&
            (yi(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : yi(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(u(156, n.tag));
}
function ki(e, n) {
  Ca(n);
  switch (n.tag) {
    case 1:
      return (
        na(n.type) && ta(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        ku(),
        ql(Zl),
        ql(Gl),
        Nu(),
        (e = n.flags),
        0 !== (e & 65536) && 0 === (e & 128)
          ? ((n.flags = (e & -65537) | 128), n)
          : null
      );
    case 5:
      return Su(n), null;
    case 13:
      ql(xu);
      e = n.memoizedState;
      if (null !== e && null !== e.dehydrated) {
        if (null === n.alternate) throw Error(u(340));
        Ia();
      }
      e = n.flags;
      return e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
    case 19:
      return ql(xu), null;
    case 4:
      return ku(), null;
    case 10:
      return Ga(n.type._context), null;
    case 22:
    case 23:
      return Us(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wi = !1,
  Si = !1,
  xi = "function" === typeof WeakSet ? WeakSet : Set,
  Ei = null;
function Ci(e, n) {
  var t = e.ref;
  if (null !== t)
    if ("function" === typeof t)
      try {
        t(null);
      } catch (t) {
        Zs(e, n, t);
      }
    else t.current = null;
}
function Ni(e, n, t) {
  try {
    t();
  } catch (t) {
    Zs(e, n, t);
  }
}
var _i = !1;
function zi(e, n) {
  xl = tt;
  e = Fr();
  if (Rr(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && 0 !== r.rangeCount) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, a.nodeType;
          } catch (e) {
            t = null;
            break e;
          }
          var o = 0,
            i = -1,
            s = -1,
            c = 0,
            f = 0,
            d = e,
            p = null;
          n: for (;;) {
            for (var h; ; ) {
              d !== t || (0 !== l && 3 !== d.nodeType) || (i = o + l);
              d !== a || (0 !== r && 3 !== d.nodeType) || (s = o + r);
              3 === d.nodeType && (o += d.nodeValue.length);
              if (null === (h = d.firstChild)) break;
              p = d;
              d = h;
            }
            for (;;) {
              if (d === e) break n;
              p === t && ++c === l && (i = o);
              p === a && ++f === r && (s = o);
              if (null !== (h = d.nextSibling)) break;
              d = p;
              p = d.parentNode;
            }
            d = h;
          }
          t = -1 === i || -1 === s ? null : { start: i, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  El = { focusedElem: e, selectionRange: t };
  tt = !1;
  for (Ei = n; null !== Ei; )
    if (((n = Ei), (e = n.child), 0 !== (n.subtreeFlags & 1028) && null !== e))
      (e.return = n), (Ei = e);
    else
      for (; null !== Ei; ) {
        n = Ei;
        try {
          var m = n.alternate;
          if (0 !== (n.flags & 1024))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== m) {
                  var g = m.memoizedProps,
                    v = m.memoizedState,
                    y = n.stateNode,
                    b = y.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? g : No(n.type, g),
                      v,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = b;
                }
                break;
              case 3:
                var k = n.stateNode.containerInfo;
                1 === k.nodeType
                  ? (k.textContent = "")
                  : 9 === k.nodeType &&
                    k.documentElement &&
                    k.removeChild(k.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(u(163));
            }
        } catch (e) {
          Zs(n, n.return, e);
        }
        e = n.sibling;
        if (null !== e) {
          e.return = n.return;
          Ei = e;
          break;
        }
        Ei = n.return;
      }
  m = _i;
  _i = !1;
  return m;
}
function Pi(e, n, t) {
  var r = n.updateQueue;
  r = null !== r ? r.lastEffect : null;
  if (null !== r) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0;
        void 0 !== a && Ni(n, t, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Li(e, n) {
  n = n.updateQueue;
  n = null !== n ? n.lastEffect : null;
  if (null !== n) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ti(e) {
  var n = e.ref;
  if (null !== n) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    "function" === typeof n ? n(e) : (n.current = e);
  }
}
function Mi(e) {
  var n = e.alternate;
  null !== n && ((e.alternate = null), Mi(n));
  e.child = null;
  e.deletions = null;
  e.sibling = null;
  5 === e.tag &&
    ((n = e.stateNode),
    null !== n &&
      (delete n[Dl], delete n[Ol], delete n[Ul], delete n[Vl], delete n[Al]));
  e.stateNode = null;
  e.return = null;
  e.dependencies = null;
  e.memoizedProps = null;
  e.memoizedState = null;
  e.pendingProps = null;
  e.stateNode = null;
  e.updateQueue = null;
}
function Fi(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Ri(e) {
  e: for (;;) {
    for (; null === e.sibling; ) {
      if (null === e.return || Fi(e.return)) return null;
      e = e.return;
    }
    e.sibling.return = e.return;
    for (e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
      if (e.flags & 2) continue e;
      if (null === e.child || 4 === e.tag) continue e;
      else (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Di(e, n, t) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode),
      n
        ? 8 === t.nodeType
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (8 === t.nodeType
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          (null !== t && void 0 !== t) ||
            null !== n.onclick ||
            (n.onclick = Sl));
  else if (4 !== r && ((e = e.child), null !== e))
    for (Di(e, n, t), e = e.sibling; null !== e; ) Di(e, n, t), (e = e.sibling);
}
function Oi(e, n, t) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (4 !== r && ((e = e.child), null !== e))
    for (Oi(e, n, t), e = e.sibling; null !== e; ) Oi(e, n, t), (e = e.sibling);
}
var Ii = null,
  Ui = !1;
function Vi(e, n, t) {
  for (t = t.child; null !== t; ) Ai(e, n, t), (t = t.sibling);
}
function Ai(e, n, t) {
  if (dn && "function" === typeof dn.onCommitFiberUnmount)
    try {
      dn.onCommitFiberUnmount(fn, t);
    } catch (e) {}
  switch (t.tag) {
    case 5:
      Si || Ci(t, n);
    case 6:
      var r = Ii,
        l = Ui;
      Ii = null;
      Vi(e, n, t);
      Ii = r;
      Ui = l;
      null !== Ii &&
        (Ui
          ? ((e = Ii),
            (t = t.stateNode),
            8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t))
          : Ii.removeChild(t.stateNode));
      break;
    case 18:
      null !== Ii &&
        (Ui
          ? ((e = Ii),
            (t = t.stateNode),
            8 === e.nodeType
              ? Tl(e.parentNode, t)
              : 1 === e.nodeType && Tl(e, t),
            et(e))
          : Tl(Ii, t.stateNode));
      break;
    case 4:
      r = Ii;
      l = Ui;
      Ii = t.stateNode.containerInfo;
      Ui = !0;
      Vi(e, n, t);
      Ii = r;
      Ui = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Si &&
        ((r = t.updateQueue), null !== r && ((r = r.lastEffect), null !== r))
      ) {
        l = r = r.next;
        do {
          var a = l,
            u = a.destroy;
          a = a.tag;
          void 0 !== u &&
            (0 !== (a & 2) ? Ni(t, n, u) : 0 !== (a & 4) && Ni(t, n, u));
          l = l.next;
        } while (l !== r);
      }
      Vi(e, n, t);
      break;
    case 1:
      if (
        !Si &&
        (Ci(t, n),
        (r = t.stateNode),
        "function" === typeof r.componentWillUnmount)
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (e) {
          Zs(t, n, e);
        }
      Vi(e, n, t);
      break;
    case 21:
      Vi(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((Si = (r = Si) || null !== t.memoizedState), Vi(e, n, t), (Si = r))
        : Vi(e, n, t);
      break;
    default:
      Vi(e, n, t);
  }
}
function Bi(e) {
  var n = e.updateQueue;
  if (null !== n) {
    e.updateQueue = null;
    var t = e.stateNode;
    null === t && (t = e.stateNode = new xi());
    n.forEach(function (n) {
      var r = tc.bind(null, e, n);
      t.has(n) || (t.add(n), n.then(r, r));
    });
  }
}
function Hi(e, n) {
  var t = n.deletions;
  if (null !== t)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var a = e,
          o = n,
          i = o;
        e: for (; null !== i; ) {
          switch (i.tag) {
            case 5:
              Ii = i.stateNode;
              Ui = !1;
              break e;
            case 3:
              Ii = i.stateNode.containerInfo;
              Ui = !0;
              break e;
            case 4:
              Ii = i.stateNode.containerInfo;
              Ui = !0;
              break e;
          }
          i = i.return;
        }
        if (null === Ii) throw Error(u(160));
        Ai(a, o, l);
        Ii = null;
        Ui = !1;
        var s = l.alternate;
        null !== s && (s.return = null);
        l.return = null;
      } catch (e) {
        Zs(l, n, e);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; null !== n; ) Wi(n, e), (n = n.sibling);
}
function Wi(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Hi(n, e);
      Qi(e);
      if (r & 4) {
        try {
          Pi(3, e, e.return), Li(3, e);
        } catch (n) {
          Zs(e, e.return, n);
        }
        try {
          Pi(5, e, e.return);
        } catch (n) {
          Zs(e, e.return, n);
        }
      }
      break;
    case 1:
      Hi(n, e);
      Qi(e);
      r & 512 && null !== t && Ci(t, t.return);
      break;
    case 5:
      Hi(n, e);
      Qi(e);
      r & 512 && null !== t && Ci(t, t.return);
      if (e.flags & 32) {
        var l = e.stateNode;
        try {
          ge(l, "");
        } catch (n) {
          Zs(e, e.return, n);
        }
      }
      if (r & 4 && ((l = e.stateNode), null != l)) {
        var a = e.memoizedProps,
          o = null !== t ? t.memoizedProps : a,
          i = e.type,
          s = e.updateQueue;
        e.updateQueue = null;
        if (null !== s)
          try {
            "input" === i && "radio" === a.type && null != a.name && te(l, a);
            xe(i, o);
            var c = xe(i, a);
            for (o = 0; o < s.length; o += 2) {
              var f = s[o],
                d = s[o + 1];
              "style" === f
                ? ke(l, d)
                : "dangerouslySetInnerHTML" === f
                  ? me(l, d)
                  : "children" === f
                    ? ge(l, d)
                    : x(l, f, d, c);
            }
            switch (i) {
              case "input":
                re(l, a);
                break;
              case "textarea":
                ce(l, a);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                null != h
                  ? oe(l, !!a.multiple, h, !1)
                  : p !== !!a.multiple &&
                    (null != a.defaultValue
                      ? oe(l, !!a.multiple, a.defaultValue, !0)
                      : oe(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[Ol] = a;
          } catch (n) {
            Zs(e, e.return, n);
          }
      }
      break;
    case 6:
      Hi(n, e);
      Qi(e);
      if (r & 4) {
        if (null === e.stateNode) throw Error(u(162));
        l = e.stateNode;
        a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (n) {
          Zs(e, e.return, n);
        }
      }
      break;
    case 3:
      Hi(n, e);
      Qi(e);
      if (r & 4 && null !== t && t.memoizedState.isDehydrated)
        try {
          et(n.containerInfo);
        } catch (n) {
          Zs(e, e.return, n);
        }
      break;
    case 4:
      Hi(n, e);
      Qi(e);
      break;
    case 13:
      Hi(n, e);
      Qi(e);
      l = e.child;
      l.flags & 8192 &&
        ((a = null !== l.memoizedState),
        (l.stateNode.isHidden = a),
        !a ||
          (null !== l.alternate && null !== l.alternate.memoizedState) ||
          (ps = rn()));
      r & 4 && Bi(e);
      break;
    case 22:
      f = null !== t && null !== t.memoizedState;
      e.mode & 1 ? ((Si = (c = Si) || f), Hi(n, e), (Si = c)) : Hi(n, e);
      Qi(e);
      if (r & 8192) {
        c = null !== e.memoizedState;
        if ((e.stateNode.isHidden = c) && !f && 0 !== (e.mode & 1))
          for (Ei = e, f = e.child; null !== f; ) {
            for (d = Ei = f; null !== Ei; ) {
              p = Ei;
              h = p.child;
              switch (p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pi(4, p, p.return);
                  break;
                case 1:
                  Ci(p, p.return);
                  var m = p.stateNode;
                  if ("function" === typeof m.componentWillUnmount) {
                    r = p;
                    t = p.return;
                    try {
                      (n = r),
                        (m.props = n.memoizedProps),
                        (m.state = n.memoizedState),
                        m.componentWillUnmount();
                    } catch (e) {
                      Zs(r, t, e);
                    }
                  }
                  break;
                case 5:
                  Ci(p, p.return);
                  break;
                case 22:
                  if (null !== p.memoizedState) {
                    qi(d);
                    continue;
                  }
              }
              null !== h ? ((h.return = p), (Ei = h)) : qi(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (5 === d.tag) {
            if (null === f) {
              f = d;
              try {
                (l = d.stateNode),
                  c
                    ? ((a = l.style),
                      "function" === typeof a.setProperty
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((i = d.stateNode),
                      (s = d.memoizedProps.style),
                      (o =
                        void 0 !== s &&
                        null !== s &&
                        s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (i.style.display = be("display", o)));
              } catch (n) {
                Zs(e, e.return, n);
              }
            }
          } else if (6 === d.tag) {
            if (null === f)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (n) {
                Zs(e, e.return, n);
              }
          } else if (
            ((22 !== d.tag && 23 !== d.tag) ||
              null === d.memoizedState ||
              d === e) &&
            null !== d.child
          ) {
            d.child.return = d;
            d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; null === d.sibling; ) {
            if (null === d.return || d.return === e) break e;
            f === d && (f = null);
            d = d.return;
          }
          f === d && (f = null);
          d.sibling.return = d.return;
          d = d.sibling;
        }
      }
      break;
    case 19:
      Hi(n, e);
      Qi(e);
      r & 4 && Bi(e);
      break;
    case 21:
      break;
    default:
      Hi(n, e), Qi(e);
  }
}
function Qi(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; null !== t; ) {
          if (Fi(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(u(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ge(l, ""), (r.flags &= -33));
          var a = Ri(e);
          Oi(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            i = Ri(e);
          Di(e, i, o);
          break;
        default:
          throw Error(u(161));
      }
    } catch (n) {
      Zs(e, e.return, n);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function ji(e, n, t) {
  Ei = e;
  $i(e);
}
function $i(e, n, t) {
  for (var r = 0 !== (e.mode & 1); null !== Ei; ) {
    var l = Ei,
      a = l.child;
    if (22 === l.tag && r) {
      var u = null !== l.memoizedState || wi;
      if (!u) {
        var o = l.alternate,
          i = (null !== o && null !== o.memoizedState) || Si;
        o = wi;
        var s = Si;
        wi = u;
        if ((Si = i) && !s)
          for (Ei = l; null !== Ei; )
            (u = Ei),
              (i = u.child),
              22 === u.tag && null !== u.memoizedState
                ? Yi(l)
                : null !== i
                  ? ((i.return = u), (Ei = i))
                  : Yi(l);
        for (; null !== a; ) (Ei = a), $i(a), (a = a.sibling);
        Ei = l;
        wi = o;
        Si = s;
      }
      Ki(e);
    } else
      0 !== (l.subtreeFlags & 8772) && null !== a
        ? ((a.return = l), (Ei = a))
        : Ki(e);
  }
}
function Ki(e) {
  for (; null !== Ei; ) {
    var n = Ei;
    if (0 !== (n.flags & 8772)) {
      var t = n.alternate;
      try {
        if (0 !== (n.flags & 8772))
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Si || Li(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Si)
                if (null === t) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : No(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = n.updateQueue;
              null !== a && pu(n, a, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (null !== o) {
                t = null;
                if (null !== n.child)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                pu(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (null === t && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === n.memoizedState) {
                var c = n.alternate;
                if (null !== c) {
                  var f = c.memoizedState;
                  if (null !== f) {
                    var d = f.dehydrated;
                    null !== d && et(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(u(163));
          }
        Si || (n.flags & 512 && Ti(n));
      } catch (e) {
        Zs(n, n.return, e);
      }
    }
    if (n === e) {
      Ei = null;
      break;
    }
    t = n.sibling;
    if (null !== t) {
      t.return = n.return;
      Ei = t;
      break;
    }
    Ei = n.return;
  }
}
function qi(e) {
  for (; null !== Ei; ) {
    var n = Ei;
    if (n === e) {
      Ei = null;
      break;
    }
    var t = n.sibling;
    if (null !== t) {
      t.return = n.return;
      Ei = t;
      break;
    }
    Ei = n.return;
  }
}
function Yi(e) {
  for (; null !== Ei; ) {
    var n = Ei;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            Li(4, n);
          } catch (e) {
            Zs(n, t, e);
          }
          break;
        case 1:
          var r = n.stateNode;
          if ("function" === typeof r.componentDidMount) {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (e) {
              Zs(n, l, e);
            }
          }
          var a = n.return;
          try {
            Ti(n);
          } catch (e) {
            Zs(n, a, e);
          }
          break;
        case 5:
          var u = n.return;
          try {
            Ti(n);
          } catch (e) {
            Zs(n, u, e);
          }
      }
    } catch (e) {
      Zs(n, n.return, e);
    }
    if (n === e) {
      Ei = null;
      break;
    }
    var o = n.sibling;
    if (null !== o) {
      o.return = n.return;
      Ei = o;
      break;
    }
    Ei = n.return;
  }
}
var Xi = Math.ceil,
  Gi = E.ReactCurrentDispatcher,
  Zi = E.ReactCurrentOwner,
  Ji = E.ReactCurrentBatchConfig,
  es = 0,
  ns = null,
  ts = null,
  rs = 0,
  ls = 0,
  as = Kl(0),
  us = 0,
  os = null,
  is = 0,
  ss = 0,
  cs = 0,
  fs = null,
  ds = null,
  ps = 0,
  hs = Infinity,
  ms = null,
  gs = !1,
  vs = null,
  ys = null,
  bs = !1,
  ks = null,
  ws = 0,
  Ss = 0,
  xs = null,
  Es = -1,
  Cs = 0;
function Ns() {
  return 0 !== (es & 6) ? rn() : -1 !== Es ? Es : (Es = rn());
}
function _s(e) {
  if (0 === (e.mode & 1)) return 1;
  if (0 !== (es & 2) && 0 !== rs) return rs & -rs;
  if (null !== Va.transition) return 0 === Cs && (Cs = Cn()), Cs;
  e = Ln;
  if (0 !== e) return e;
  e = window.event;
  e = void 0 === e ? 16 : it(e.type);
  return e;
}
function zs(e, n, t, r) {
  if (50 < Ss) throw ((Ss = 0), (xs = null), Error(u(185)));
  _n(e, t, r);
  if (0 === (es & 2) || e !== ns)
    e === ns && (0 === (es & 2) && (ss |= t), 4 === us && Rs(e, rs)),
      Ps(e, r),
      1 === t &&
        0 === es &&
        0 === (n.mode & 1) &&
        ((hs = rn() + 500), ia && da());
}
function Ps(e, n) {
  var t = e.callbackNode;
  xn(e, n);
  var r = wn(e, e === ns ? rs : 0);
  if (0 === r)
    null !== t && en(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    null != t && en(t);
    if (1 === n)
      0 === e.tag ? fa(Ds.bind(null, e)) : ca(Ds.bind(null, e)),
        Pl(function () {
          0 === (es & 6) && da();
        }),
        (t = null);
    else {
      switch (Tn(r)) {
        case 1:
          t = an;
          break;
        case 4:
          t = un;
          break;
        case 16:
          t = on;
          break;
        case 536870912:
          t = cn;
          break;
        default:
          t = on;
      }
      t = lc(t, Ls.bind(null, e));
    }
    e.callbackPriority = n;
    e.callbackNode = t;
  }
}
function Ls(e, n) {
  Es = -1;
  Cs = 0;
  if (0 !== (es & 6)) throw Error(u(327));
  var t = e.callbackNode;
  if (Xs() && e.callbackNode !== t) return null;
  var r = wn(e, e === ns ? rs : 0);
  if (0 === r) return null;
  if (0 !== (r & 30) || 0 !== (r & e.expiredLanes) || n) n = Ws(e, r);
  else {
    n = r;
    var l = es;
    es |= 2;
    var a = Bs();
    if (ns !== e || rs !== n) (ms = null), (hs = rn() + 500), Vs(e, n);
    do {
      try {
        js();
        break;
      } catch (n) {
        As(e, n);
      }
    } while (1);
    Xa();
    Gi.current = a;
    es = l;
    null !== ts ? (n = 0) : ((ns = null), (rs = 0), (n = us));
  }
  if (0 !== n) {
    2 === n && ((l = En(e)), 0 !== l && ((r = l), (n = Ts(e, l))));
    if (1 === n) throw ((t = os), Vs(e, 0), Rs(e, r), Ps(e, rn()), t);
    if (6 === n) Rs(e, r);
    else {
      l = e.current.alternate;
      if (
        0 === (r & 30) &&
        !Fs(l) &&
        ((n = Ws(e, r)),
        2 === n && ((a = En(e)), 0 !== a && ((r = a), (n = Ts(e, a)))),
        1 === n)
      )
        throw ((t = os), Vs(e, 0), Rs(e, r), Ps(e, rn()), t);
      e.finishedWork = l;
      e.finishedLanes = r;
      switch (n) {
        case 0:
        case 1:
          throw Error(u(345));
        case 2:
          qs(e, ds, ms);
          break;
        case 3:
          Rs(e, r);
          if ((r & 130023424) === r && ((n = ps + 500 - rn()), 10 < n)) {
            if (0 !== wn(e, 0)) break;
            l = e.suspendedLanes;
            if ((l & r) !== r) {
              Ns();
              e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Nl(qs.bind(null, e, ds, ms), n);
            break;
          }
          qs(e, ds, ms);
          break;
        case 4:
          Rs(e, r);
          if ((r & 4194240) === r) break;
          n = e.eventTimes;
          for (l = -1; 0 < r; ) {
            var o = 31 - hn(r);
            a = 1 << o;
            o = n[o];
            o > l && (l = o);
            r &= ~a;
          }
          r = l;
          r = rn() - r;
          r =
            (120 > r
              ? 120
              : 480 > r
                ? 480
                : 1080 > r
                  ? 1080
                  : 1920 > r
                    ? 1920
                    : 3e3 > r
                      ? 3e3
                      : 4320 > r
                        ? 4320
                        : 1960 * Xi(r / 1960)) - r;
          if (10 < r) {
            e.timeoutHandle = Nl(qs.bind(null, e, ds, ms), r);
            break;
          }
          qs(e, ds, ms);
          break;
        case 5:
          qs(e, ds, ms);
          break;
        default:
          throw Error(u(329));
      }
    }
  }
  Ps(e, rn());
  return e.callbackNode === t ? Ls.bind(null, e) : null;
}
function Ts(e, n) {
  var t = fs;
  e.current.memoizedState.isDehydrated && (Vs(e, n).flags |= 256);
  e = Ws(e, n);
  2 !== e && ((n = ds), (ds = t), null !== n && Ms(n));
  return e;
}
function Ms(e) {
  null === ds ? (ds = e) : ds.push.apply(ds, e);
}
function Fs(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (null !== t && ((t = t.stores), null !== t))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!zr(a(), l)) return !1;
          } catch (e) {
            return !1;
          }
        }
    }
    t = n.child;
    if (n.subtreeFlags & 16384 && null !== t) (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return;
      n = n.sibling;
    }
  }
  return !0;
}
function Rs(e, n) {
  n &= ~cs;
  n &= ~ss;
  e.suspendedLanes |= n;
  e.pingedLanes &= ~n;
  for (e = e.expirationTimes; 0 < n; ) {
    var t = 31 - hn(n),
      r = 1 << t;
    e[t] = -1;
    n &= ~r;
  }
}
function Ds(e) {
  if (0 !== (es & 6)) throw Error(u(327));
  Xs();
  var n = wn(e, 0);
  if (0 === (n & 1)) return Ps(e, rn()), null;
  var t = Ws(e, n);
  if (0 !== e.tag && 2 === t) {
    var r = En(e);
    0 !== r && ((n = r), (t = Ts(e, r)));
  }
  if (1 === t) throw ((t = os), Vs(e, 0), Rs(e, n), Ps(e, rn()), t);
  if (6 === t) throw Error(u(345));
  e.finishedWork = e.current.alternate;
  e.finishedLanes = n;
  qs(e, ds, ms);
  Ps(e, rn());
  return null;
}
function Os(e, n) {
  var t = es;
  es |= 1;
  try {
    return e(n);
  } finally {
    (es = t), 0 === es && ((hs = rn() + 500), ia && da());
  }
}
function Is(e) {
  null !== ks && 0 === ks.tag && 0 === (es & 6) && Xs();
  var n = es;
  es |= 1;
  var t = Ji.transition,
    r = Ln;
  try {
    if (((Ji.transition = null), (Ln = 1), e)) return e();
  } finally {
    (Ln = r), (Ji.transition = t), (es = n), 0 === (es & 6) && da();
  }
}
function Us() {
  ls = as.current;
  ql(as);
}
function Vs(e, n) {
  e.finishedWork = null;
  e.finishedLanes = 0;
  var t = e.timeoutHandle;
  -1 !== t && ((e.timeoutHandle = -1), _l(t));
  if (null !== ts)
    for (t = ts.return; null !== t; ) {
      var r = t;
      Ca(r);
      switch (r.tag) {
        case 1:
          r = r.type.childContextTypes;
          null !== r && void 0 !== r && ta();
          break;
        case 3:
          ku();
          ql(Zl);
          ql(Gl);
          Nu();
          break;
        case 5:
          Su(r);
          break;
        case 4:
          ku();
          break;
        case 13:
          ql(xu);
          break;
        case 19:
          ql(xu);
          break;
        case 10:
          Ga(r.type._context);
          break;
        case 22:
        case 23:
          Us();
      }
      t = t.return;
    }
  ns = e;
  ts = e = sc(e.current, null);
  rs = ls = n;
  us = 0;
  os = null;
  cs = ss = is = 0;
  ds = fs = null;
  if (null !== nu) {
    for (n = 0; n < nu.length; n++)
      if (((t = nu[n]), (r = t.interleaved), null !== r)) {
        t.interleaved = null;
        var l = r.next,
          a = t.pending;
        if (null !== a) {
          var u = a.next;
          a.next = l;
          r.next = u;
        }
        t.pending = r;
      }
    nu = null;
  }
  return e;
}
function As(e, n) {
  do {
    var t = ts;
    try {
      Xa();
      _u.current = So;
      if (Fu) {
        for (var r = Lu.memoizedState; null !== r; ) {
          var l = r.queue;
          null !== l && (l.pending = null);
          r = r.next;
        }
        Fu = !1;
      }
      Pu = 0;
      Mu = Tu = Lu = null;
      Ru = !1;
      Du = 0;
      Zi.current = null;
      if (null === t || null === t.return) {
        us = 1;
        os = n;
        ts = null;
        break;
      }
      e: {
        var a = e,
          o = t.return,
          i = t,
          s = n;
        n = rs;
        i.flags |= 32768;
        if (
          null !== s &&
          "object" === typeof s &&
          "function" === typeof s.then
        ) {
          var c = s,
            f = i,
            d = f.tag;
          if (0 === (f.mode & 1) && (0 === d || 11 === d || 15 === d)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var h = Ao(o);
          if (null !== h) {
            h.flags &= -257;
            Bo(h, o, i, a, n);
            h.mode & 1 && Vo(a, c, n);
            n = h;
            s = c;
            var m = n.updateQueue;
            if (null === m) {
              var g = new Set();
              g.add(s);
              n.updateQueue = g;
            } else m.add(s);
            break e;
          } else {
            if (0 === (n & 1)) {
              Vo(a, c, n);
              Hs();
              break e;
            }
            s = Error(u(426));
          }
        } else if (za && i.mode & 1) {
          var v = Ao(o);
          if (null !== v) {
            0 === (v.flags & 65536) && (v.flags |= 256);
            Bo(v, o, i, a, n);
            Ua(Fo(s, i));
            break e;
          }
        }
        a = s = Fo(s, i);
        4 !== us && (us = 2);
        null === fs ? (fs = [a]) : fs.push(a);
        a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536;
              n &= -n;
              a.lanes |= n;
              var y = Io(a, s, n);
              fu(a, y);
              break e;
            case 1:
              i = s;
              var b = a.type,
                k = a.stateNode;
              if (
                0 === (a.flags & 128) &&
                ("function" === typeof b.getDerivedStateFromError ||
                  (null !== k &&
                    "function" === typeof k.componentDidCatch &&
                    (null === ys || !ys.has(k))))
              ) {
                a.flags |= 65536;
                n &= -n;
                a.lanes |= n;
                var w = Uo(a, i, n);
                fu(a, w);
                break e;
              }
          }
          a = a.return;
        } while (null !== a);
      }
      Ks(t);
    } catch (e) {
      n = e;
      ts === t && null !== t && (ts = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Bs() {
  var e = Gi.current;
  Gi.current = So;
  return null === e ? So : e;
}
function Hs() {
  if (0 === us || 3 === us || 2 === us) us = 4;
  null === ns ||
    (0 === (is & 268435455) && 0 === (ss & 268435455)) ||
    Rs(ns, rs);
}
function Ws(e, n) {
  var t = es;
  es |= 2;
  var r = Bs();
  if (ns !== e || rs !== n) (ms = null), Vs(e, n);
  do {
    try {
      Qs();
      break;
    } catch (n) {
      As(e, n);
    }
  } while (1);
  Xa();
  es = t;
  Gi.current = r;
  if (null !== ts) throw Error(u(261));
  ns = null;
  rs = 0;
  return us;
}
function Qs() {
  for (; null !== ts; ) $s(ts);
}
function js() {
  for (; null !== ts && !nn(); ) $s(ts);
}
function $s(e) {
  var n = rc(e.alternate, e, ls);
  e.memoizedProps = e.pendingProps;
  null === n ? Ks(e) : (ts = n);
  Zi.current = null;
}
function Ks(e) {
  var n = e;
  do {
    var t = n.alternate;
    e = n.return;
    if (0 === (n.flags & 32768)) {
      if (((t = bi(t, n, ls)), null !== t)) {
        ts = t;
        return;
      }
    } else {
      t = ki(t, n);
      if (null !== t) {
        t.flags &= 32767;
        ts = t;
        return;
      }
      if (null !== e)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        us = 6;
        ts = null;
        return;
      }
    }
    n = n.sibling;
    if (null !== n) {
      ts = n;
      return;
    }
    ts = n = e;
  } while (null !== n);
  0 === us && (us = 5);
}
function qs(e, n, t) {
  var r = Ln,
    l = Ji.transition;
  try {
    (Ji.transition = null), (Ln = 1), Ys(e, n, t, r);
  } finally {
    (Ji.transition = l), (Ln = r);
  }
  return null;
}
function Ys(e, n, t, r) {
  do {
    Xs();
  } while (null !== ks);
  if (0 !== (es & 6)) throw Error(u(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (null === t) return null;
  e.finishedWork = null;
  e.finishedLanes = 0;
  if (t === e.current) throw Error(u(177));
  e.callbackNode = null;
  e.callbackPriority = 0;
  var a = t.lanes | t.childLanes;
  zn(e, a);
  e === ns && ((ts = ns = null), (rs = 0));
  (0 === (t.subtreeFlags & 2064) && 0 === (t.flags & 2064)) ||
    bs ||
    ((bs = !0),
    lc(on, function () {
      Xs();
      return null;
    }));
  a = 0 !== (t.flags & 15990);
  if (0 !== (t.subtreeFlags & 15990) || a) {
    a = Ji.transition;
    Ji.transition = null;
    var o = Ln;
    Ln = 1;
    var i = es;
    es |= 4;
    Zi.current = null;
    zi(e, t);
    Wi(t, e);
    Dr(El);
    tt = !!xl;
    El = xl = null;
    e.current = t;
    ji(t);
    tn();
    es = i;
    Ln = o;
    Ji.transition = a;
  } else e.current = t;
  bs && ((bs = !1), (ks = e), (ws = l));
  a = e.pendingLanes;
  0 === a && (ys = null);
  pn(t.stateNode);
  Ps(e, rn());
  if (null !== n)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gs) throw ((gs = !1), (e = vs), (vs = null), e);
  0 !== (ws & 1) && 0 !== e.tag && Xs();
  a = e.pendingLanes;
  0 !== (a & 1) ? (e === xs ? Ss++ : ((Ss = 0), (xs = e))) : (Ss = 0);
  da();
  return null;
}
function Xs() {
  if (null !== ks) {
    var e = Tn(ws),
      n = Ji.transition,
      t = Ln;
    try {
      Ji.transition = null;
      Ln = 16 > e ? 16 : e;
      if (null === ks) var r = !1;
      else {
        e = ks;
        ks = null;
        ws = 0;
        if (0 !== (es & 6)) throw Error(u(331));
        var l = es;
        es |= 4;
        for (Ei = e.current; null !== Ei; ) {
          var a = Ei,
            o = a.child;
          if (0 !== (Ei.flags & 16)) {
            var i = a.deletions;
            if (null !== i) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (Ei = c; null !== Ei; ) {
                  var f = Ei;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(8, f, a);
                  }
                  var d = f.child;
                  if (null !== d) (d.return = f), (Ei = d);
                  else
                    for (; null !== Ei; ) {
                      f = Ei;
                      var p = f.sibling,
                        h = f.return;
                      Mi(f);
                      if (f === c) {
                        Ei = null;
                        break;
                      }
                      if (null !== p) {
                        p.return = h;
                        Ei = p;
                        break;
                      }
                      Ei = h;
                    }
                }
              }
              var m = a.alternate;
              if (null !== m) {
                var g = m.child;
                if (null !== g) {
                  m.child = null;
                  do {
                    var v = g.sibling;
                    g.sibling = null;
                    g = v;
                  } while (null !== g);
                }
              }
              Ei = a;
            }
          }
          if (0 !== (a.subtreeFlags & 2064) && null !== o)
            (o.return = a), (Ei = o);
          else
            e: for (; null !== Ei; ) {
              a = Ei;
              if (0 !== (a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pi(9, a, a.return);
                }
              var y = a.sibling;
              if (null !== y) {
                y.return = a.return;
                Ei = y;
                break e;
              }
              Ei = a.return;
            }
        }
        var b = e.current;
        for (Ei = b; null !== Ei; ) {
          o = Ei;
          var k = o.child;
          if (0 !== (o.subtreeFlags & 2064) && null !== k)
            (k.return = o), (Ei = k);
          else
            e: for (o = b; null !== Ei; ) {
              i = Ei;
              if (0 !== (i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Li(9, i);
                  }
                } catch (e) {
                  Zs(i, i.return, e);
                }
              if (i === o) {
                Ei = null;
                break e;
              }
              var w = i.sibling;
              if (null !== w) {
                w.return = i.return;
                Ei = w;
                break e;
              }
              Ei = i.return;
            }
        }
        es = l;
        da();
        if (dn && "function" === typeof dn.onPostCommitFiberRoot)
          try {
            dn.onPostCommitFiberRoot(fn, e);
          } catch (e) {}
        r = !0;
      }
      return r;
    } finally {
      (Ln = t), (Ji.transition = n);
    }
  }
  return !1;
}
function Gs(e, n, t) {
  n = Fo(t, n);
  n = Io(e, n, 1);
  e = su(e, n, 1);
  n = Ns();
  null !== e && (_n(e, 1, n), Ps(e, n));
}
function Zs(e, n, t) {
  if (3 === e.tag) Gs(e, e, t);
  else
    for (; null !== n; ) {
      if (3 === n.tag) {
        Gs(n, e, t);
        break;
      } else if (1 === n.tag) {
        var r = n.stateNode;
        if (
          "function" === typeof n.type.getDerivedStateFromError ||
          ("function" === typeof r.componentDidCatch &&
            (null === ys || !ys.has(r)))
        ) {
          e = Fo(t, e);
          e = Uo(n, e, 1);
          n = su(n, e, 1);
          e = Ns();
          null !== n && (_n(n, 1, e), Ps(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Js(e, n, t) {
  var r = e.pingCache;
  null !== r && r.delete(n);
  n = Ns();
  e.pingedLanes |= e.suspendedLanes & t;
  ns === e &&
    (rs & t) === t &&
    (4 === us || (3 === us && (rs & 130023424) === rs && 500 > rn() - ps)
      ? Vs(e, 0)
      : (cs |= t));
  Ps(e, n);
}
function ec(e, n) {
  0 === n &&
    (0 === (e.mode & 1)
      ? (n = 1)
      : ((n = bn), (bn <<= 1), 0 === (bn & 130023424) && (bn = 4194304)));
  var t = Ns();
  e = lu(e, n);
  null !== e && (_n(e, n, t), Ps(e, t));
}
function nc(e) {
  var n = e.memoizedState,
    t = 0;
  null !== n && (t = n.retryLane);
  ec(e, t);
}
function tc(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode;
      var l = e.memoizedState;
      null !== l && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(u(314));
  }
  null !== r && r.delete(n);
  ec(e, t);
}
var rc;
rc = function (e, n, t) {
  if (null !== e)
    if (e.memoizedProps !== n.pendingProps || Zl.current) Wo = !0;
    else {
      if (0 === (e.lanes & t) && 0 === (n.flags & 128))
        return (Wo = !1), di(e, n, t);
      Wo = 0 !== (e.flags & 131072) ? !0 : !1;
    }
  else (Wo = !1), za && 0 !== (n.flags & 1048576) && xa(n, ga, n.index);
  n.lanes = 0;
  switch (n.tag) {
    case 2:
      var r = n.type;
      ci(e, n);
      e = n.pendingProps;
      var l = ea(n, Gl.current);
      Ja(n, t);
      l = Vu(null, n, r, e, l, t);
      var a = Au();
      n.flags |= 1;
      "object" === typeof l &&
      null !== l &&
      "function" === typeof l.render &&
      void 0 === l.$$typeof
        ? ((n.tag = 1),
          (n.memoizedState = null),
          (n.updateQueue = null),
          na(r) ? ((a = !0), aa(n)) : (a = !1),
          (n.memoizedState =
            null !== l.state && void 0 !== l.state ? l.state : null),
          uu(n),
          (l.updater = zo),
          (n.stateNode = l),
          (l._reactInternals = n),
          Mo(n, r, e, t),
          (n = Zo(null, n, r, !0, a, t)))
        : ((n.tag = 0), za && a && Ea(n), Qo(null, n, l, t), (n = n.child));
      return n;
    case 16:
      r = n.elementType;
      e: {
        ci(e, n);
        e = n.pendingProps;
        l = r._init;
        r = l(r._payload);
        n.type = r;
        l = n.tag = ic(r);
        e = No(r, e);
        switch (l) {
          case 0:
            n = Xo(null, n, r, e, t);
            break e;
          case 1:
            n = Go(null, n, r, e, t);
            break e;
          case 11:
            n = jo(null, n, r, e, t);
            break e;
          case 14:
            n = $o(null, n, r, No(r.type, e), t);
            break e;
        }
        throw Error(u(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : No(r, l)),
        Xo(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : No(r, l)),
        Go(e, n, r, l, t)
      );
    case 3:
      e: {
        Jo(n);
        if (null === e) throw Error(u(387));
        r = n.pendingProps;
        a = n.memoizedState;
        l = a.element;
        ou(e, n);
        du(n, r, null, t);
        var o = n.memoizedState;
        r = o.element;
        if (a.isDehydrated)
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = a),
            (n.memoizedState = a),
            n.flags & 256)
          ) {
            l = Fo(Error(u(423)), n);
            n = ei(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Fo(Error(u(424)), n);
            n = ei(e, n, r, t, l);
            break e;
          } else
            for (
              _a = Ml(n.stateNode.containerInfo.firstChild),
                Na = n,
                za = !0,
                Pa = null,
                t = ja(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          Ia();
          if (r === l) {
            n = fi(e, n, t);
            break e;
          }
          Qo(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        wu(n),
        null === e && Fa(n),
        (r = n.type),
        (l = n.pendingProps),
        (a = null !== e ? e.memoizedProps : null),
        (o = l.children),
        Cl(r, l) ? (o = null) : null !== a && Cl(r, a) && (n.flags |= 32),
        Yo(e, n),
        Qo(e, n, o, t),
        n.child
      );
    case 6:
      return null === e && Fa(n), null;
    case 13:
      return ri(e, n, t);
    case 4:
      return (
        bu(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        null === e ? (n.child = Qa(n, null, r, t)) : Qo(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : No(r, l)),
        jo(e, n, r, l, t)
      );
    case 7:
      return Qo(e, n, n.pendingProps, t), n.child;
    case 8:
      return Qo(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return Qo(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        r = n.type._context;
        l = n.pendingProps;
        a = n.memoizedProps;
        o = l.value;
        Yl($a, r._currentValue);
        r._currentValue = o;
        if (null !== a)
          if (zr(a.value, o)) {
            if (a.children === l.children && !Zl.current) {
              n = fi(e, n, t);
              break e;
            }
          } else
            for (a = n.child, null !== a && (a.return = n); null !== a; ) {
              var i = a.dependencies;
              if (null !== i) {
                o = a.child;
                for (var s = i.firstContext; null !== s; ) {
                  if (s.context === r) {
                    if (1 === a.tag) {
                      s = iu(-1, t & -t);
                      s.tag = 2;
                      var c = a.updateQueue;
                      if (null !== c) {
                        c = c.shared;
                        var f = c.pending;
                        null === f
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s));
                        c.pending = s;
                      }
                    }
                    a.lanes |= t;
                    s = a.alternate;
                    null !== s && (s.lanes |= t);
                    Za(a.return, t, n);
                    i.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (10 === a.tag) o = a.type === n.type ? null : a.child;
              else if (18 === a.tag) {
                o = a.return;
                if (null === o) throw Error(u(341));
                o.lanes |= t;
                i = o.alternate;
                null !== i && (i.lanes |= t);
                Za(o, t, n);
                o = a.sibling;
              } else o = a.child;
              if (null !== o) o.return = a;
              else
                for (o = a; null !== o; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  a = o.sibling;
                  if (null !== a) {
                    a.return = o.return;
                    o = a;
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        Qo(e, n, l.children, t);
        n = n.child;
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Ja(n, t),
        (l = eu(l)),
        (r = r(l)),
        (n.flags |= 1),
        Qo(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = No(r, n.pendingProps)),
        (l = No(r.type, l)),
        $o(e, n, r, l, t)
      );
    case 15:
      return Ko(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : No(r, l)),
        ci(e, n),
        (n.tag = 1),
        na(r) ? ((e = !0), aa(n)) : (e = !1),
        Ja(n, t),
        Lo(n, r, l),
        Mo(n, r, l, t),
        Zo(null, n, r, !0, e, t)
      );
    case 19:
      return si(e, n, t);
    case 22:
      return qo(e, n, t);
  }
  throw Error(u(156, n.tag));
};
function lc(e, n) {
  return Je(e, n);
}
function ac(e, n, t, r) {
  this.tag = e;
  this.key = t;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = n;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = r;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function uc(e, n, t, r) {
  return new ac(e, n, t, r);
}
function oc(e) {
  e = e.prototype;
  return !(!e || !e.isReactComponent);
}
function ic(e) {
  if ("function" === typeof e) return oc(e) ? 1 : 0;
  if (void 0 !== e && null !== e) {
    e = e.$$typeof;
    if (e === M) return 11;
    if (e === D) return 14;
  }
  return 2;
}
function sc(e, n) {
  var t = e.alternate;
  null === t
    ? ((t = uc(e.tag, n, e.key, e.mode)),
      (t.elementType = e.elementType),
      (t.type = e.type),
      (t.stateNode = e.stateNode),
      (t.alternate = e),
      (e.alternate = t))
    : ((t.pendingProps = n),
      (t.type = e.type),
      (t.flags = 0),
      (t.subtreeFlags = 0),
      (t.deletions = null));
  t.flags = e.flags & 14680064;
  t.childLanes = e.childLanes;
  t.lanes = e.lanes;
  t.child = e.child;
  t.memoizedProps = e.memoizedProps;
  t.memoizedState = e.memoizedState;
  t.updateQueue = e.updateQueue;
  n = e.dependencies;
  t.dependencies =
    null === n ? null : { lanes: n.lanes, firstContext: n.firstContext };
  t.sibling = e.sibling;
  t.index = e.index;
  t.ref = e.ref;
  return t;
}
function cc(e, n, t, r, l, a) {
  var o = 2;
  r = e;
  if ("function" === typeof e) oc(e) && (o = 1);
  else if ("string" === typeof e) o = 5;
  else
    e: switch (e) {
      case _:
        return fc(t.children, l, a, n);
      case z:
        o = 8;
        l |= 8;
        break;
      case P:
        return (e = uc(12, t, n, l | 2)), (e.elementType = P), (e.lanes = a), e;
      case F:
        return (e = uc(13, t, n, l)), (e.elementType = F), (e.lanes = a), e;
      case R:
        return (e = uc(19, t, n, l)), (e.elementType = R), (e.lanes = a), e;
      case I:
        return dc(t, l, a, n);
      default:
        if ("object" === typeof e && null !== e)
          switch (e.$$typeof) {
            case L:
              o = 10;
              break e;
            case T:
              o = 9;
              break e;
            case M:
              o = 11;
              break e;
            case D:
              o = 14;
              break e;
            case O:
              o = 16;
              r = null;
              break e;
          }
        throw Error(u(130, null == e ? e : typeof e, ""));
    }
  n = uc(o, t, n, l);
  n.elementType = e;
  n.type = r;
  n.lanes = a;
  return n;
}
function fc(e, n, t, r) {
  e = uc(7, e, r, n);
  e.lanes = t;
  return e;
}
function dc(e, n, t, r) {
  e = uc(22, e, r, n);
  e.elementType = I;
  e.lanes = t;
  e.stateNode = { isHidden: !1 };
  return e;
}
function pc(e, n, t) {
  e = uc(6, e, null, n);
  e.lanes = t;
  return e;
}
function hc(e, n, t) {
  n = uc(4, null !== e.children ? e.children : [], e.key, n);
  n.lanes = t;
  n.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation,
  };
  return n;
}
function mc(e, n, t, r, l) {
  this.tag = n;
  this.containerInfo = e;
  this.finishedWork =
    this.pingCache =
    this.current =
    this.pendingChildren =
      null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = Nn(0);
  this.expirationTimes = Nn(-1);
  this.entangledLanes =
    this.finishedLanes =
    this.mutableReadLanes =
    this.expiredLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = Nn(0);
  this.identifierPrefix = r;
  this.onRecoverableError = l;
  this.mutableSourceEagerHydrationData = null;
}
function gc(e, n, t, r, l, a, u, o, i) {
  e = new mc(e, n, t, o, i);
  1 === n ? ((n = 1), !0 === a && (n |= 8)) : (n = 0);
  a = uc(3, null, null, n);
  e.current = a;
  a.stateNode = e;
  a.memoizedState = {
    element: r,
    isDehydrated: t,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null,
  };
  uu(a);
  return e;
}
function vc(e, n, t) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: N,
    key: null == r ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function yc(e) {
  if (!e) return Xl;
  e = e._reactInternals;
  e: {
    if (Ke(e) !== e || 1 !== e.tag) throw Error(u(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (na(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (null !== n);
    throw Error(u(171));
  }
  if (1 === e.tag) {
    var t = e.type;
    if (na(t)) return la(e, t, n);
  }
  return n;
}
function bc(e, n, t, r, l, a, u, o, i) {
  e = gc(t, r, !0, e, l, a, u, o, i);
  e.context = yc(null);
  t = e.current;
  r = Ns();
  l = _s(t);
  a = iu(r, l);
  a.callback = void 0 !== n && null !== n ? n : null;
  su(t, a, l);
  e.current.lanes = l;
  _n(e, l, r);
  Ps(e, r);
  return e;
}
function kc(e, n, t, r) {
  var l = n.current,
    a = Ns(),
    u = _s(l);
  t = yc(t);
  null === n.context ? (n.context = t) : (n.pendingContext = t);
  n = iu(a, u);
  n.payload = { element: e };
  r = void 0 === r ? null : r;
  null !== r && (n.callback = r);
  e = su(l, n, u);
  null !== e && (zs(e, l, u, a), cu(e, l, u));
  return u;
}
function wc(e) {
  e = e.current;
  if (!e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sc(e, n) {
  e = e.memoizedState;
  if (null !== e && null !== e.dehydrated) {
    var t = e.retryLane;
    e.retryLane = 0 !== t && t < n ? t : n;
  }
}
function xc(e, n) {
  Sc(e, n);
  (e = e.alternate) && Sc(e, n);
}
function Ec() {
  return null;
}
var Cc =
  "function" === typeof reportError
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nc(e) {
  this._internalRoot = e;
}
_c.prototype.render = Nc.prototype.render = function (e) {
  var n = this._internalRoot;
  if (null === n) throw Error(u(409));
  kc(e, n, null, null);
};
_c.prototype.unmount = Nc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (null !== e) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Is(function () {
      kc(null, e, null, null);
    });
    n[Il] = null;
  }
};
function _c(e) {
  this._internalRoot = e;
}
_c.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Dn();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < Qn.length && 0 !== n && n < Qn[t].priority; t++);
    Qn.splice(t, 0, e);
    0 === t && Yn(e);
  }
};
function zc(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Pc(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
  );
}
function Lc() {}
function Tc(e, n, t, r, l) {
  if (l) {
    if ("function" === typeof r) {
      var a = r;
      r = function () {
        var e = wc(u);
        a.call(e);
      };
    }
    var u = bc(n, r, e, 0, null, !1, !1, "", Lc);
    e._reactRootContainer = u;
    e[Il] = u.current;
    fl(8 === e.nodeType ? e.parentNode : e);
    Is();
    return u;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if ("function" === typeof r) {
    var o = r;
    r = function () {
      var e = wc(i);
      o.call(e);
    };
  }
  var i = gc(e, 0, !1, null, null, !1, !1, "", Lc);
  e._reactRootContainer = i;
  e[Il] = i.current;
  fl(8 === e.nodeType ? e.parentNode : e);
  Is(function () {
    kc(n, i, t, r);
  });
  return i;
}
function Mc(e, n, t, r, l) {
  var a = t._reactRootContainer;
  if (a) {
    var u = a;
    if ("function" === typeof l) {
      var o = l;
      l = function () {
        var e = wc(u);
        o.call(e);
      };
    }
    kc(n, u, e, l);
  } else u = Tc(t, n, e, l, r);
  return wc(u);
}
Mn = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kn(n.pendingLanes);
        0 !== t &&
          (Pn(n, t | 1),
          Ps(n, rn()),
          0 === (es & 6) && ((hs = rn() + 500), da()));
      }
      break;
    case 13:
      Is(function () {
        var n = lu(e, 1);
        if (null !== n) {
          var t = Ns();
          zs(n, e, 1, t);
        }
      }),
        xc(e, 1);
  }
};
Fn = function (e) {
  if (13 === e.tag) {
    var n = lu(e, 134217728);
    if (null !== n) {
      var t = Ns();
      zs(n, e, 134217728, t);
    }
    xc(e, 134217728);
  }
};
Rn = function (e) {
  if (13 === e.tag) {
    var n = _s(e),
      t = lu(e, n);
    if (null !== t) {
      var r = Ns();
      zs(t, e, n, r);
    }
    xc(e, n);
  }
};
Dn = function () {
  return Ln;
};
On = function (e, n) {
  var t = Ln;
  try {
    return (Ln = e), n();
  } finally {
    Ln = t;
  }
};
Ne = function (e, n, t) {
  switch (n) {
    case "input":
      re(e, t);
      n = t.name;
      if ("radio" === t.type && null != n) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        t = t.querySelectorAll(
          "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
        );
        for (n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = Ql(r);
            if (!l) throw Error(u(90));
            Z(r);
            re(r, l);
          }
        }
      }
      break;
    case "textarea":
      ce(e, t);
      break;
    case "select":
      (n = t.value), null != n && oe(e, !!t.multiple, n, !1);
  }
};
Me = Os;
Fe = Is;
var Fc = { usingClientEntryPoint: !1, Events: [Hl, Wl, Ql, Le, Te, Os] },
  Rc = {
    findFiberByHostInstance: Bl,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  };
var Dc = {
  bundleType: Rc.bundleType,
  version: Rc.version,
  rendererPackageName: Rc.rendererPackageName,
  rendererConfig: Rc.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: E.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (e) {
    e = Ge(e);
    return null === e ? null : e.stateNode;
  },
  findFiberByHostInstance: Rc.findFiberByHostInstance || Ec,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var Oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oc.isDisabled && Oc.supportsFiber)
    try {
      (fn = Oc.inject(Dc)), (dn = Oc);
    } catch (e) {}
}
r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
r.createPortal = function (e, n) {
  var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!zc(n)) throw Error(u(200));
  return vc(e, n, null, t);
};
r.createRoot = function (e, n) {
  if (!zc(e)) throw Error(u(299));
  var t = !1,
    r = "",
    l = Cc;
  null !== n &&
    void 0 !== n &&
    (!0 === n.unstable_strictMode && (t = !0),
    void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
    void 0 !== n.onRecoverableError && (l = n.onRecoverableError));
  n = gc(e, 1, !1, null, null, t, !1, r, l);
  e[Il] = n.current;
  fl(8 === e.nodeType ? e.parentNode : e);
  return new Nc(n);
};
r.findDOMNode = function (e) {
  if (null == e) return null;
  if (1 === e.nodeType) return e;
  var n = e._reactInternals;
  if (void 0 === n) {
    if ("function" === typeof e.render) throw Error(u(188));
    e = Object.keys(e).join(",");
    throw Error(u(268, e));
  }
  e = Ge(n);
  e = null === e ? null : e.stateNode;
  return e;
};
r.flushSync = function (e) {
  return Is(e);
};
r.hydrate = function (e, n, t) {
  if (!Pc(n)) throw Error(u(200));
  return Mc(null, e, n, !0, t);
};
r.hydrateRoot = function (e, n, t) {
  if (!zc(e)) throw Error(u(405));
  var r = (null != t && t.hydratedSources) || null,
    l = !1,
    a = "",
    o = Cc;
  null !== t &&
    void 0 !== t &&
    (!0 === t.unstable_strictMode && (l = !0),
    void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
    void 0 !== t.onRecoverableError && (o = t.onRecoverableError));
  n = bc(n, null, e, 1, null != t ? t : null, l, !1, a, o);
  e[Il] = n.current;
  fl(e);
  if (r)
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        null == n.mutableSourceEagerHydrationData
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new _c(n);
};
r.render = function (e, n, t) {
  if (!Pc(n)) throw Error(u(200));
  return Mc(null, e, n, !1, t);
};
r.unmountComponentAtNode = function (e) {
  if (!Pc(e)) throw Error(u(40));
  return e._reactRootContainer
    ? (Is(function () {
        Mc(null, null, e, !1, function () {
          e._reactRootContainer = null;
          e[Il] = null;
        });
      }),
      !0)
    : !1;
};
r.unstable_batchedUpdates = Os;
r.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!Pc(t)) throw Error(u(200));
  if (null == e || void 0 === e._reactInternals) throw Error(u(38));
  return Mc(e, n, t, !1, r);
};
r.version = "18.3.1-next-f1338f8080-20240426";
function Ic() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function"
  ) {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
  } catch (e) {
    console.error(e);
  }
}
{
  Ic();
  t.exports = r;
}
var Uc = t.exports;
var Vc = t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var Ac = t.exports.createPortal;
var Bc = t.exports.createRoot;
var Hc = t.exports.findDOMNode;
var Wc = t.exports.flushSync;
var Qc = t.exports.hydrate;
var jc = t.exports.hydrateRoot;
var $c = t.exports.render;
var Kc = t.exports.unmountComponentAtNode;
var qc = t.exports.unstable_batchedUpdates;
var Yc = t.exports.unstable_renderSubtreeIntoContainer;
var Xc = t.exports.version;
export {
  Vc as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ac as createPortal,
  Bc as createRoot,
  Uc as default,
  Hc as findDOMNode,
  Wc as flushSync,
  Qc as hydrate,
  jc as hydrateRoot,
  $c as render,
  Kc as unmountComponentAtNode,
  qc as unstable_batchedUpdates,
  Yc as unstable_renderSubtreeIntoContainer,
  Xc as version,
};

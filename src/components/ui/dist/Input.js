"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var Input = react_1.forwardRef(function (_a, ref) {
    var className = _a.className, error = _a.error, icon = _a.icon, _b = _a.iconPosition, iconPosition = _b === void 0 ? "right" : _b, props = __rest(_a, ["className", "error", "icon", "iconPosition"]);
    var hasIcon = !!icon;
    return (React.createElement("div", { className: "relative" },
        React.createElement("input", __assign({ className: cn_1.cn("flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors", "placeholder:text-gray-400", "focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20", "hover:border-gray-400", "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50", error &&
                "border-red-500 focus:border-red-500 focus:ring-red-400/20", hasIcon && iconPosition === "left" && "pl-10", hasIcon && iconPosition === "right" && "pr-10", className), ref: ref }, props)),
        hasIcon && (React.createElement("div", { className: cn_1.cn("absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none", iconPosition === "left" && "left-3", iconPosition === "right" && "right-3") }, icon)),
        error && React.createElement("p", { className: "mt-1 text-sm text-red-600" }, error)));
});
exports.Input = Input;
Input.displayName = "Input";

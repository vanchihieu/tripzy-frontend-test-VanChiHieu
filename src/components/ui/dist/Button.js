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
exports.Button = void 0;
var cn_1 = require("@/utils/cn");
var react_1 = require("react");
var Button = react_1.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, _d = _a.rounded, rounded = _d === void 0 ? "lg" : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, disabled = _a.disabled, props = __rest(_a, ["className", "variant", "size", "rounded", "loading", "leftIcon", "rightIcon", "children", "disabled"]);
    var baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    var variantStyles = {
        primary: "bg-cyan-500 text-white hover:bg-cyan-600 focus-visible:ring-cyan-500",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
        outline: "border border-gray-300 bg-white hover:bg-gray-50 focus-visible:ring-gray-500",
        ghost: "hover:bg-gray-100 focus-visible:ring-gray-500",
        danger: "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500"
    };
    var sizeStyles = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10"
    };
    var roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
    };
    return (React.createElement("button", __assign({ className: cn_1.cn(baseStyles, variantStyles[variant], sizeStyles[size], roundedStyles[rounded], className), ref: ref, disabled: disabled || loading }, props),
        loading && (React.createElement("div", { className: "animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" })),
        !loading && leftIcon && leftIcon,
        children,
        !loading && rightIcon && rightIcon));
});
exports.Button = Button;
Button.displayName = "Button";

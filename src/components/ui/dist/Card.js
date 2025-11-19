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
exports.CardFooter = exports.CardContent = exports.CardHeader = exports.Card = void 0;
var cn_1 = require("@/utils/cn");
var Card = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: cn_1.cn("rounded-3xl border border-gray-200 bg-white shadow-2xl", className) }, props), children));
};
exports.Card = Card;
var CardHeader = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: cn_1.cn("flex flex-col space-y-1.5 p-6", className) }, props), children));
};
exports.CardHeader = CardHeader;
var CardContent = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: cn_1.cn("p-6 pt-0", className) }, props), children));
};
exports.CardContent = CardContent;
var CardFooter = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: cn_1.cn("flex items-center p-6 pt-0", className) }, props), children));
};
exports.CardFooter = CardFooter;

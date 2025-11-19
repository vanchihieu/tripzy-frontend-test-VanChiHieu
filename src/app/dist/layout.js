"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
// @ts-expect-error: Cannot find module or type declarations for side-effect import of './globals.css'.
require("./globals.css");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Tripzy - Travel Smarter, Not Harder",
    description: "Make every trip effortless. Tripzy lets you book rides and plan journeys with ease."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement("div", { className: "min-h-screen bg-gray-50" }, children))));
}
exports["default"] = RootLayout;

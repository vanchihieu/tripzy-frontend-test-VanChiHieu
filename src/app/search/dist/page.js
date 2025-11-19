"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
function SearchContent() {
    var searchParams = navigation_1.useSearchParams();
    var params = {
        mode: searchParams.get("mode") || "bus",
        from: searchParams.get("from") || "",
        to: searchParams.get("to") || "",
        dep: searchParams.get("dep") || "",
        ret: searchParams.get("ret") || "",
        pax: searchParams.get("pax") || "1"
    };
    var formatDate = function (dateString) {
        if (!dateString)
            return "";
        try {
            var date = new Date(dateString);
            return date.toLocaleDateString("vi-VN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }
        catch (_a) {
            return dateString;
        }
    };
    var isRoundTrip = !!params.ret;
    return (React.createElement("div", { className: "min-h-screen", style: {
            background: "linear-gradient(180deg, #e0f2fe 0%, #e0f2fe 50%, #ffffff 50%, #ffffff 100%)"
        } },
        React.createElement("header", { className: "bg-transparent" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" },
                React.createElement("div", { className: "flex items-center justify-between" },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement(lucide_react_1.Snowflake, { className: "w-8 h-8 text-cyan-400 mr-3" }),
                        React.createElement("h1", { className: "text-2xl font-bold text-cyan-600" }, "Tripzy")),
                    React.createElement(link_1["default"], { href: "/", className: "flex items-center text-gray-600 hover:text-cyan-600 transition-colors font-medium" },
                        React.createElement(lucide_react_1.ArrowLeft, { className: "w-4 h-4 mr-2" }),
                        "New Search")))),
        React.createElement("main", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[900px]" },
            React.createElement("div", { className: "bg-white rounded-3xl shadow-2xl p-10 mb-8 min-h-[400px]" },
                React.createElement("div", { className: "space-y-6" },
                    React.createElement("div", { className: "text-gray-700 text-lg" },
                        React.createElement("span", { className: "font-semibold" }, "From: "),
                        React.createElement("span", { className: "text-gray-900" }, params.from ? decodeURIComponent(params.from) : "Thủ Đức")),
                    React.createElement("div", { className: "text-gray-700 text-lg" },
                        React.createElement("span", { className: "font-semibold" }, "To: "),
                        React.createElement("span", { className: "text-gray-900" }, params.to ? decodeURIComponent(params.to) : "Cầu Giấy")),
                    React.createElement("div", { className: "text-gray-700 text-lg" },
                        React.createElement("span", { className: "font-semibold" }, "Departure date: "),
                        React.createElement("span", { className: "text-gray-900" }, params.dep
                            ? formatDate(params.dep)
                            : "Thứ Sáu, 28 tháng 11, 2025")),
                    isRoundTrip && (React.createElement("div", { className: "text-gray-700 text-lg" },
                        React.createElement("span", { className: "font-semibold" }, "Return date: "),
                        React.createElement("span", { className: "text-gray-900" }, params.ret ? formatDate(params.ret) : ""))),
                    React.createElement("div", { className: "text-gray-700 text-lg" },
                        React.createElement("span", { className: "font-semibold" }, "No. of passenger: "),
                        React.createElement("span", { className: "text-gray-900" }, params.pax || "1")))))));
}
function SearchPage() {
    return (React.createElement(react_1.Suspense, { fallback: React.createElement("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center" },
            React.createElement("div", { className: "text-center" },
                React.createElement(lucide_react_1.Bus, { className: "w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" }),
                React.createElement("p", { className: "text-gray-600" }, "\u0110ang t\u1EA3i..."))) },
        React.createElement(SearchContent, null)));
}
exports["default"] = SearchPage;

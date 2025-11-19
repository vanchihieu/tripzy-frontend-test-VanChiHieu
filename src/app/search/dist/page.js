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
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)"
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
        React.createElement("main", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" },
            React.createElement("div", { className: "bg-white rounded-3xl shadow-2xl p-10 mb-8" },
                React.createElement("div", { className: "space-y-4" },
                    React.createElement("div", { className: "text-gray-700" },
                        React.createElement("span", { className: "font-semibold" }, "From: "),
                        React.createElement("span", { className: "text-gray-900" }, params.from ? decodeURIComponent(params.from) : "Thủ Đức")),
                    React.createElement("div", { className: "text-gray-700" },
                        React.createElement("span", { className: "font-semibold" }, "To: "),
                        React.createElement("span", { className: "text-gray-900" }, params.to ? decodeURIComponent(params.to) : "Cầu Giấy")),
                    React.createElement("div", { className: "text-gray-700" },
                        React.createElement("span", { className: "font-semibold" }, "Departure date: "),
                        React.createElement("span", { className: "text-gray-900" }, params.dep
                            ? formatDate(params.dep)
                            : "Thứ Sáu, 28 tháng 11, 2025")),
                    isRoundTrip && (React.createElement("div", { className: "text-gray-700" },
                        React.createElement("span", { className: "font-semibold" }, "Return date: "),
                        React.createElement("span", { className: "text-gray-900" }, params.ret ? formatDate(params.ret) : ""))),
                    React.createElement("div", { className: "text-gray-700" },
                        React.createElement("span", { className: "font-semibold" }, "No. of passenger: "),
                        React.createElement("span", { className: "text-gray-900" }, params.pax || "1")))),
            React.createElement("div", { className: "bg-white rounded-3xl shadow-2xl p-10" },
                React.createElement("div", { className: "text-center mb-8" },
                    React.createElement(lucide_react_1.Bus, { className: "w-16 h-16 text-gray-300 mx-auto mb-4" }),
                    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2" }, "K\u1EBFt qu\u1EA3 t\u00ECm ki\u1EBFm"),
                    React.createElement("p", { className: "text-gray-600 mb-8 max-w-md mx-auto" }, "Trong m\u1ED9t \u1EE9ng d\u1EE5ng th\u1EF1c t\u1EBF, \u0111\u00E2y s\u1EBD l\u00E0 danh s\u00E1ch c\u00E1c chuy\u1EBFn xe bus ph\u00F9 h\u1EE3p v\u1EDBi ti\u00EAu ch\u00ED t\u00ECm ki\u1EBFm c\u1EE7a b\u1EA1n.")),
                React.createElement("div", { className: "space-y-6" },
                    React.createElement("div", { className: "border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" },
                        React.createElement("div", { className: "flex justify-between items-center" },
                            React.createElement("div", { className: "flex-1" },
                                React.createElement("div", { className: "flex items-center space-x-3 mb-2" },
                                    React.createElement("h4", { className: "text-lg font-bold text-gray-900" }, "Nh\u00E0 xe Ph\u01B0\u01A1ng Trang"),
                                    React.createElement("span", { className: "text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full" }, "Gi\u01B0\u1EDDng n\u1EB1m VIP")),
                                React.createElement("div", { className: "flex items-center space-x-6 text-sm text-gray-600" },
                                    React.createElement("span", null, "Kh\u1EDFi h\u00E0nh: 6:30"),
                                    React.createElement("span", null, "Th\u1EDDi gian: 7h 20m"),
                                    React.createElement("span", null, "C\u00F2n 15 ch\u1ED7"))),
                            React.createElement("div", { className: "text-right" },
                                React.createElement("div", { className: "text-2xl font-bold text-cyan-600 mb-2" }, "300\u20AB"),
                                React.createElement("button", { className: "bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors" }, "Ch\u1ECDn ch\u1ED7")))),
                    React.createElement("div", { className: "border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" },
                        React.createElement("div", { className: "flex justify-between items-center" },
                            React.createElement("div", { className: "flex-1" },
                                React.createElement("div", { className: "flex items-center space-x-3 mb-2" },
                                    React.createElement("h4", { className: "text-lg font-bold text-gray-900" }, "Nh\u00E0 xe Mai Linh"),
                                    React.createElement("span", { className: "text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full" }, "Limousine")),
                                React.createElement("div", { className: "flex items-center space-x-6 text-sm text-gray-600" },
                                    React.createElement("span", null, "Kh\u1EDFi h\u00E0nh: 7:30"),
                                    React.createElement("span", null, "Th\u1EDDi gian: 8h 10m"),
                                    React.createElement("span", null, "C\u00F2n 10 ch\u1ED7"))),
                            React.createElement("div", { className: "text-right" },
                                React.createElement("div", { className: "text-2xl font-bold text-cyan-600 mb-2" }, "350\u20AB"),
                                React.createElement("button", { className: "bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors" }, "Ch\u1ECDn ch\u1ED7")))),
                    React.createElement("div", { className: "border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" },
                        React.createElement("div", { className: "flex justify-between items-center" },
                            React.createElement("div", { className: "flex-1" },
                                React.createElement("div", { className: "flex items-center space-x-3 mb-2" },
                                    React.createElement("h4", { className: "text-lg font-bold text-gray-900" }, "Nh\u00E0 xe Th\u00E0nh B\u01B0\u1EDFi"),
                                    React.createElement("span", { className: "text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full" }, "Gh\u1EBF ng\u1ED3i")),
                                React.createElement("div", { className: "flex items-center space-x-6 text-sm text-gray-600" },
                                    React.createElement("span", null, "Kh\u1EDFi h\u00E0nh: 8:30"),
                                    React.createElement("span", null, "Th\u1EDDi gian: 9h 0m"),
                                    React.createElement("span", null, "C\u00F2n 5 ch\u1ED7"))),
                            React.createElement("div", { className: "text-right" },
                                React.createElement("div", { className: "text-2xl font-bold text-cyan-600 mb-2" }, "400\u20AB"),
                                React.createElement("button", { className: "bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors" }, "Ch\u1ECDn ch\u1ED7")))))))));
}
function SearchPage() {
    return (React.createElement(react_1.Suspense, { fallback: React.createElement("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center" },
            React.createElement("div", { className: "text-center" },
                React.createElement(lucide_react_1.Bus, { className: "w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" }),
                React.createElement("p", { className: "text-gray-600" }, "\u0110ang t\u1EA3i..."))) },
        React.createElement(SearchContent, null)));
}
exports["default"] = SearchPage;

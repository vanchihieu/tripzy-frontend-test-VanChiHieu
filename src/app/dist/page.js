"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var Tabs_1 = require("@/components/Tabs");
var BusSearchForm_1 = require("@/components/BusSearchForm");
var locations_json_1 = require("@/data/locations.json");
var locations = locations_json_1["default"];
function HomePage() {
    var _a = react_1.useState("bus"), activeTab = _a[0], setActiveTab = _a[1];
    var tabs = [
        {
            id: "bus",
            label: "Bus & Shuttle",
            icon: React.createElement(lucide_react_1.Bus, { className: "w-4 h-4" })
        },
        {
            id: "hotel",
            label: "Hotel & Accommodation",
            icon: React.createElement(lucide_react_1.Hotel, { className: "w-4 h-4" })
        },
        {
            id: "flight",
            label: "Flight",
            icon: React.createElement(lucide_react_1.Plane, { className: "w-4 h-4" })
        },
    ];
    var renderTabContent = function () {
        switch (activeTab) {
            case "bus":
                return React.createElement(BusSearchForm_1["default"], { locations: locations });
            case "hotel":
            case "flight":
                return (React.createElement("div", { className: "py-16 text-center text-gray-500" },
                    React.createElement("div", { className: "mb-4" }, activeTab === "hotel" ? (React.createElement(lucide_react_1.Hotel, { className: "w-16 h-16 mx-auto text-gray-300" })) : (React.createElement(lucide_react_1.Plane, { className: "w-16 h-16 mx-auto text-gray-300" }))),
                    React.createElement("h3", { className: "text-lg font-medium mb-2" }, "No data"),
                    React.createElement("p", null, "This feature is not available yet.")));
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "min-h-screen", style: {
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)"
        } },
        React.createElement("header", { className: "bg-transparent" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement(lucide_react_1.Snowflake, { className: "w-8 h-8 text-cyan-400 mr-3" }),
                    React.createElement("h1", { className: "text-2xl font-bold text-cyan-600" }, "Tripzy")))),
        React.createElement("main", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" },
            React.createElement("div", { className: "text-center mb-16" },
                React.createElement("h2", { className: "text-5xl font-bold text-gray-800 mb-6" }, "Travel Smarter, Not Harder"),
                React.createElement("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" }, "Make every trip effortless. Tripzy lets you book rides and plan journeys with ease")),
            React.createElement("div", { className: "bg-white rounded-3xl shadow-2xl p-10 max-w-5xl mx-auto" },
                React.createElement(Tabs_1["default"], { tabs: tabs, activeTab: activeTab, onTabChange: setActiveTab, className: "mb-10" }),
                React.createElement("div", { className: "mt-8" }, renderTabContent()))),
        React.createElement("footer", { className: "bg-white mt-20 border-t" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" },
                React.createElement("div", { className: "text-center text-gray-600" },
                    React.createElement("p", null, "\u00A9 2025 Tripzy. All rights reserved."))))));
}
exports["default"] = HomePage;

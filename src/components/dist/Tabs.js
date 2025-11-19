"use client";
"use strict";
exports.__esModule = true;
function Tabs(_a) {
    var tabs = _a.tabs, activeTab = _a.activeTab, onTabChange = _a.onTabChange, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("div", { className: "border-b border-gray-200 " + className },
        React.createElement("nav", { className: "-mb-px flex space-x-12" }, tabs.map(function (tab) { return (React.createElement("button", { key: tab.id, onClick: function () { return onTabChange(tab.id); }, className: "py-4 px-2 border-b-3 font-semibold text-base transition-colors duration-200 " + (activeTab === tab.id
                ? "border-cyan-400 text-cyan-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300") },
            React.createElement("div", { className: "flex items-center space-x-3" },
                tab.icon && (React.createElement("span", { className: activeTab === tab.id ? "text-cyan-500" : "text-gray-400" }, tab.icon)),
                React.createElement("span", null, tab.label)))); }))));
}
exports["default"] = Tabs;

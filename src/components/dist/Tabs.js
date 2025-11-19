"use client";
"use strict";
exports.__esModule = true;
function Tabs(_a) {
    var tabs = _a.tabs, activeTab = _a.activeTab, onTabChange = _a.onTabChange, _b = _a.className, className = _b === void 0 ? "" : _b;
    var getTabColors = function (tabId, isActive) {
        var colors = {
            bus: {
                active: {
                    border: "border-cyan-400",
                    text: "text-cyan-600",
                    icon: "text-cyan-500",
                    bg: "bg-cyan-50"
                },
                inactive: {
                    border: "border-transparent",
                    text: "text-gray-500 hover:text-cyan-600",
                    icon: "text-gray-400 hover:text-cyan-500",
                    bg: "hover:bg-cyan-25"
                }
            },
            hotel: {
                active: {
                    border: "border-green-400",
                    text: "text-green-600",
                    icon: "text-green-500",
                    bg: "bg-green-50"
                },
                inactive: {
                    border: "border-transparent",
                    text: "text-gray-500 hover:text-green-600",
                    icon: "text-gray-400 hover:text-green-500",
                    bg: "hover:bg-green-25"
                }
            },
            flight: {
                active: {
                    border: "border-purple-400",
                    text: "text-purple-600",
                    icon: "text-purple-500",
                    bg: "bg-purple-50"
                },
                inactive: {
                    border: "border-transparent",
                    text: "text-gray-500 hover:text-purple-600",
                    icon: "text-gray-400 hover:text-purple-500",
                    bg: "hover:bg-purple-25"
                }
            }
        };
        return colors[tabId] || colors.bus;
    };
    return (React.createElement("div", { className: "border-b border-gray-200 " + className },
        React.createElement("nav", { className: "-mb-px flex space-x-12" }, tabs.map(function (tab) {
            var colors = getTabColors(tab.id, activeTab === tab.id);
            var isActive = activeTab === tab.id;
            return (React.createElement("button", { key: tab.id, onClick: function () { return onTabChange(tab.id); }, className: "py-4 px-6 border-b-3 font-semibold text-base transition-all duration-200 rounded-t-lg " + (isActive
                    ? colors.active.border + " " + colors.active.text + " " + colors.active.bg
                    : colors.inactive.border + " " + colors.inactive.text + " " + colors.inactive.bg + " hover:border-gray-300") },
                React.createElement("div", { className: "flex items-center space-x-3" },
                    tab.icon && (React.createElement("span", { className: isActive ? colors.active.icon : colors.inactive.icon }, tab.icon)),
                    React.createElement("span", null, tab.label))));
        }))));
}
exports["default"] = Tabs;

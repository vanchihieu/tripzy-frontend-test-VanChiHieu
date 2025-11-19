"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
function Autocomplete(_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, locations = _a.locations, error = _a.error, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var _c = react_1.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = react_1.useState(locations), filteredLocations = _d[0], setFilteredLocations = _d[1];
    var containerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (value) {
            var filtered = locations.filter(function (location) {
                return location.englishName.toLowerCase().includes(value.toLowerCase()) ||
                    location.shortCode.toLowerCase().includes(value.toLowerCase()) ||
                    location.codeState.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredLocations(filtered);
        }
        else {
            setFilteredLocations(locations);
        }
    }, [value, locations]);
    react_1.useEffect(function () {
        var handleClickOutside = function (event) {
            if (containerRef.current &&
                !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    var handleSelect = function (location) {
        onChange(location.englishName);
        setIsOpen(false);
    };
    return (React.createElement("div", { className: "relative", ref: containerRef },
        React.createElement("div", { className: "relative" },
            React.createElement("input", { type: "text", value: value, onChange: function (e) {
                    onChange(e.target.value);
                    setIsOpen(true);
                }, onFocus: function () { return setIsOpen(true); }, placeholder: placeholder, disabled: disabled, className: "w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-colors text-gray-700 " + (error ? "border-red-500" : "border-gray-300") + " " + (disabled
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-white hover:border-gray-400") }),
            React.createElement(lucide_react_1.ChevronDown, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform " + (isOpen ? "rotate-180" : "") })),
        error && React.createElement("p", { className: "mt-1 text-sm text-red-600" }, error),
        isOpen && !disabled && (React.createElement("div", { className: "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto" }, filteredLocations.length === 0 ? (React.createElement("div", { className: "px-4 py-3 text-gray-500 text-center" }, "No locations found")) : (filteredLocations.map(function (location) { return (React.createElement("div", { key: location.shortCode, onClick: function () { return handleSelect(location); }, className: "px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0" },
            React.createElement("div", { className: "flex items-center space-x-3" },
                React.createElement("div", { className: "w-8 h-8 bg-gray-100 rounded flex items-center justify-center" },
                    React.createElement("span", { className: "text-xs font-bold text-gray-600" }, location.shortCode)),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("div", { className: "font-medium text-gray-900" }, location.englishName),
                    React.createElement("div", { className: "text-sm text-gray-500" }, location.codeState))))); }))))));
}
exports["default"] = Autocomplete;

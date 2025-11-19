"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var date_fns_1 = require("date-fns");
function DatePicker(_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, error = _a.error, min = _a.min, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var handleDateChange = function (e) {
        onChange(e.target.value);
    };
    var formatDisplayDate = function (dateString) {
        if (!dateString)
            return placeholder;
        try {
            var date = new Date(dateString);
            return date_fns_1.format(date, "dd/MM/yyyy");
        }
        catch (_a) {
            return placeholder;
        }
    };
    return (React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "relative" },
            React.createElement("input", { type: "date", value: value, onChange: handleDateChange, min: min, disabled: disabled, className: "w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-colors text-gray-700 " + (error ? "border-red-500" : "border-gray-300") + " " + (disabled
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-white hover:border-gray-400") }),
            React.createElement(lucide_react_1.Calendar, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" })),
        error && React.createElement("p", { className: "mt-1 text-sm text-red-600" }, error)));
}
exports["default"] = DatePicker;

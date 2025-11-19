"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
function PassengerCounter(_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.min, min = _b === void 0 ? 1 : _b, _c = _a.max, max = _c === void 0 ? 20 : _c, error = _a.error, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    var increment = function () {
        if (value < max && !disabled) {
            onChange(value + 1);
        }
    };
    var decrement = function () {
        if (value > min && !disabled) {
            onChange(value - 1);
        }
    };
    var handleInputChange = function (e) {
        var inputValue = e.target.value;
        var newValue = parseInt(inputValue);
        // Early return if invalid number
        if (isNaN(newValue)) {
            console.error("Invalid number input: " + inputValue);
            return;
        }
        // Early return if below minimum
        if (newValue < min) {
            console.error("Value " + newValue + " is below minimum " + min);
            return;
        }
        // Early return if above maximum
        if (newValue > max) {
            console.error("Value " + newValue + " is above maximum " + max);
            return;
        }
        // All validations passed, update value
        onChange(newValue);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "relative flex items-center justify-between border rounded-lg px-4 py-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400 transition-all " + (error ? "border-red-500" : "border-gray-300") + " " + (disabled ? "bg-gray-100" : "bg-white") },
            React.createElement("div", { className: "flex items-center" },
                React.createElement(lucide_react_1.Users, { className: "w-5 h-5 text-gray-400 mr-2" })),
            React.createElement("div", { className: "flex items-center space-x-3" },
                React.createElement("button", { type: "button", onClick: decrement, disabled: disabled || value <= min, className: "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors " + (disabled || value <= min
                        ? "text-gray-300 cursor-not-allowed border-gray-200"
                        : "text-gray-600 hover:text-gray-800 hover:border-gray-400") },
                    React.createElement(lucide_react_1.Minus, { className: "w-3 h-3" })),
                React.createElement("span", { className: "font-semibold text-gray-900 min-w-[20px] text-center" }, value),
                React.createElement("button", { type: "button", onClick: increment, disabled: disabled || value >= max, className: "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors " + (disabled || value >= max
                        ? "text-gray-300 cursor-not-allowed border-gray-200"
                        : "text-gray-600 hover:text-gray-800 hover:border-gray-400") },
                    React.createElement(lucide_react_1.Plus, { className: "w-3 h-3" })))),
        error && React.createElement("p", { className: "mt-1 text-sm text-red-600" }, error)));
}
exports["default"] = PassengerCounter;

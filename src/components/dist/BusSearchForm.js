"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var Autocomplete_1 = require("./Autocomplete");
var DatePicker_1 = require("./DatePicker");
function BusSearchForm(_a) {
    var _this = this;
    var _b, _c, _d, _e;
    var locations = _a.locations;
    var router = navigation_1.useRouter();
    var _f = react_1.useState(false), isRoundTrip = _f[0], setIsRoundTrip = _f[1];
    var _g = react_1.useState(false), isLoading = _g[0], setIsLoading = _g[1];
    var _h = react_hook_form_1.useForm({
        defaultValues: {
            mode: "bus",
            from: "",
            to: "",
            departureDate: "",
            returnDate: "",
            passengers: 1,
            isRoundTrip: false
        }
    }), watch = _h.watch, setValue = _h.setValue, handleSubmit = _h.handleSubmit, errors = _h.formState.errors, setError = _h.setError, clearErrors = _h.clearErrors;
    var watchedValues = watch();
    // Get today's date in YYYY-MM-DD format
    var today = new Date().toISOString().split("T")[0];
    var swapLocations = function () {
        var fromValue = watchedValues.from;
        var toValue = watchedValues.to;
        setValue("from", toValue);
        setValue("to", fromValue);
        clearErrors(["from", "to"]);
    };
    var validateForm = function (data) {
        var isValid = true;
        // Clear previous errors
        clearErrors();
        // Validate from location
        if (!data.from.trim()) {
            setError("from", { message: "Please select departure location" });
            isValid = false;
        }
        // Validate to location
        if (!data.to.trim()) {
            setError("to", { message: "Please select destination" });
            isValid = false;
        }
        // Check if from and to are the same
        if (data.from && data.to && data.from === data.to) {
            setError("to", {
                message: "Destination must be different from departure"
            });
            isValid = false;
        }
        // Validate departure date
        if (!data.departureDate) {
            setError("departureDate", { message: "Please select departure date" });
            isValid = false;
        }
        else {
            var depDate = new Date(data.departureDate);
            var today_1 = new Date();
            today_1.setHours(0, 0, 0, 0);
            if (depDate < today_1) {
                setError("departureDate", {
                    message: "Departure date cannot be in the past"
                });
                isValid = false;
            }
        }
        // Validate return date if round trip
        if (isRoundTrip && data.returnDate) {
            var depDate = new Date(data.departureDate);
            var retDate = new Date(data.returnDate);
            if (retDate < depDate) {
                setError("returnDate", {
                    message: "Return date must be after departure date"
                });
                isValid = false;
            }
        }
        // Validate passengers
        if (data.passengers < 1) {
            setError("passengers", {
                message: "Number of passengers must be at least 1"
            });
            isValid = false;
        }
        return isValid;
    };
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            if (!validateForm(data)) {
                return [2 /*return*/];
            }
            setIsLoading(true);
            try {
                params = new URLSearchParams({
                    mode: data.mode,
                    from: encodeURIComponent(data.from),
                    to: encodeURIComponent(data.to),
                    dep: data.departureDate,
                    pax: data.passengers.toString()
                });
                if (isRoundTrip && data.returnDate) {
                    params.append("ret", data.returnDate);
                }
                // Navigate to search page
                router.push("/search?" + params.toString());
            }
            catch (error) {
                console.error("Search error:", error);
            }
            finally {
                setIsLoading(false);
            }
            return [2 /*return*/];
        });
    }); };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6" },
        React.createElement("div", { className: "grid grid-cols-5 gap-4" },
            React.createElement("div", null,
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "FROM"),
                React.createElement(Autocomplete_1["default"], { value: watchedValues.from, onChange: function (value) {
                        setValue("from", value);
                        clearErrors("from");
                    }, placeholder: "Enter location", locations: locations, error: (_b = errors.from) === null || _b === void 0 ? void 0 : _b.message })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "TO"),
                React.createElement(Autocomplete_1["default"], { value: watchedValues.to, onChange: function (value) {
                        setValue("to", value);
                        clearErrors("to");
                    }, placeholder: "Enter destination", locations: locations, error: (_c = errors.to) === null || _c === void 0 ? void 0 : _c.message })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "DEPARTURE DATE"),
                React.createElement(DatePicker_1["default"], { value: watchedValues.departureDate, onChange: function (date) {
                        setValue("departureDate", date);
                        clearErrors("departureDate");
                    }, placeholder: "mm/dd/yyyy", min: today, error: (_d = errors.departureDate) === null || _d === void 0 ? void 0 : _d.message })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "ROUND TRIP"),
                React.createElement("div", { className: "flex items-center space-x-4 h-12" },
                    React.createElement("label", { className: "flex items-center cursor-pointer" },
                        React.createElement("input", { type: "radio", name: "tripType", checked: !isRoundTrip, onChange: function () {
                                setIsRoundTrip(false);
                                setValue("returnDate", "");
                                clearErrors("returnDate");
                            }, className: "w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500" }),
                        React.createElement("span", { className: "ml-2 text-sm font-medium text-gray-700" }, "One way")),
                    React.createElement("label", { className: "flex items-center cursor-pointer" },
                        React.createElement("input", { type: "radio", name: "tripType", checked: isRoundTrip, onChange: function () { return setIsRoundTrip(true); }, className: "w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500" }),
                        React.createElement("span", { className: "ml-2 text-sm font-medium text-gray-700" }, "Return")))),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "NO. OF PASSENGERS"),
                React.createElement("div", { className: "relative" },
                    React.createElement("select", { value: watchedValues.passengers, onChange: function (e) {
                            setValue("passengers", parseInt(e.target.value));
                            clearErrors("passengers");
                        }, className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white appearance-none cursor-pointer h-12 text-gray-700" }, Array.from({ length: 9 }, function (_, i) { return i + 1; }).map(function (num) { return (React.createElement("option", { key: num, value: num }, num)); })),
                    React.createElement("div", { className: "absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none" },
                        React.createElement("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })))),
                errors.passengers && (React.createElement("p", { className: "mt-1 text-sm text-red-600" }, errors.passengers.message)))),
        isRoundTrip && (React.createElement("div", { className: "mt-4" },
            React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "RETURN DATE"),
            React.createElement("div", { className: "w-1/5" },
                React.createElement(DatePicker_1["default"], { value: watchedValues.returnDate || "", onChange: function (date) {
                        setValue("returnDate", date);
                        clearErrors("returnDate");
                    }, placeholder: "mm/dd/yyyy", min: watchedValues.departureDate || today, error: (_e = errors.returnDate) === null || _e === void 0 ? void 0 : _e.message })))),
        React.createElement("div", { className: "flex justify-center pt-6" },
            React.createElement("button", { type: "submit", disabled: isLoading, className: "bg-cyan-400 hover:bg-cyan-500 disabled:bg-cyan-300 text-white font-bold py-3 px-12 rounded-lg transition-colors flex items-center justify-center space-x-2 uppercase tracking-wide text-sm shadow-lg" },
                React.createElement(lucide_react_1.Search, { className: "w-5 h-5" }),
                React.createElement("span", null, isLoading ? "SEARCHING..." : "SEARCH")))));
}
exports["default"] = BusSearchForm;

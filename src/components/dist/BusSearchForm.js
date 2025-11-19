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
var helpers_1 = require("@/utils/helpers");
var Button_1 = require("@/components/ui/Button");
var Autocomplete_1 = require("./Autocomplete");
var DatePicker_1 = require("./DatePicker");
var PassengerCounter_1 = require("./PassengerCounter");
function BusSearchForm(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f;
    var locations = _a.locations;
    var router = navigation_1.useRouter();
    var _g = react_1.useState(false), isRoundTrip = _g[0], setIsRoundTrip = _g[1];
    var _h = react_1.useState(false), isLoading = _h[0], setIsLoading = _h[1];
    var _j = react_hook_form_1.useForm({
        defaultValues: {
            mode: "bus",
            from: "",
            to: "",
            departureDate: "",
            returnDate: "",
            passengers: 1,
            isRoundTrip: false
        }
    }), watch = _j.watch, setValue = _j.setValue, handleSubmit = _j.handleSubmit, errors = _j.formState.errors, setError = _j.setError, clearErrors = _j.clearErrors;
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
        clearErrors();
        // Validate from location
        var fromError = helpers_1.validationRules.required(data.from, "Departure");
        if (fromError) {
            setError("from", { message: "Select departure" });
            isValid = false;
        }
        // Validate to location
        var toError = helpers_1.validationRules.required(data.to, "Destination");
        if (toError) {
            setError("to", { message: "Select destination" });
            isValid = false;
        }
        // Check if from and to are different
        var sameLocationError = helpers_1.validationRules.notEqual(data.from, data.to, "Destination");
        if (sameLocationError) {
            setError("to", { message: "Must be different" });
            isValid = false;
        }
        // Validate departure date
        var dateError = helpers_1.validationRules.required(data.departureDate, "Date");
        if (dateError) {
            setError("departureDate", { message: "Select date" });
            isValid = false;
        }
        else {
            var futureDateError = helpers_1.validationRules.futureDate(data.departureDate, "Departure date");
            if (futureDateError) {
                setError("departureDate", { message: "Cannot be in past" });
                isValid = false;
            }
        }
        // Validate return date if round trip
        if (isRoundTrip && data.returnDate) {
            var dateRangeError = helpers_1.validationRules.dateRange(data.departureDate, data.returnDate);
            if (dateRangeError) {
                setError("returnDate", { message: "Must be after departure" });
                isValid = false;
            }
        }
        // Validate passengers
        var passengersError = helpers_1.validationRules.numberRange(data.passengers, 1, 9, "Passengers");
        if (passengersError) {
            setError("passengers", { message: "Between 1-9" });
            isValid = false;
        }
        return isValid;
    };
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var searchParams;
        return __generator(this, function (_a) {
            if (!validateForm(data)) {
                return [2 /*return*/];
            }
            setIsLoading(true);
            try {
                searchParams = helpers_1.urlUtils.buildSearchParams({
                    mode: data.mode,
                    from: data.from,
                    to: data.to,
                    dep: data.departureDate,
                    ret: isRoundTrip ? data.returnDate : undefined,
                    pax: data.passengers
                });
                // Navigate to search page
                router.push("/search?" + searchParams);
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
        React.createElement("div", { className: "flex items-end gap-3" },
            React.createElement("div", { className: "flex-1 min-w-[220px]" },
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "FROM"),
                React.createElement(Autocomplete_1["default"], { value: watchedValues.from, onChange: function (value) {
                        setValue("from", value);
                        clearErrors("from");
                    }, placeholder: "Enter city, terminal...", locations: locations, error: (_b = errors.from) === null || _b === void 0 ? void 0 : _b.message })),
            React.createElement("div", { className: "pb-3" },
                React.createElement("button", { type: "button", onClick: swapLocations, className: "bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 transition-colors shadow-md" },
                    React.createElement(lucide_react_1.ArrowLeftRight, { className: "w-5 h-5" }))),
            React.createElement("div", { className: "flex-1 min-w-[220px]" },
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "TO"),
                React.createElement(Autocomplete_1["default"], { value: watchedValues.to, onChange: function (value) {
                        setValue("to", value);
                        clearErrors("to");
                    }, placeholder: "Enter city, terminal...", locations: locations, error: (_c = errors.to) === null || _c === void 0 ? void 0 : _c.message })),
            React.createElement("div", { className: "w-40" },
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "DEPARTURE DATE"),
                React.createElement(DatePicker_1["default"], { value: watchedValues.departureDate, onChange: function (date) {
                        setValue("departureDate", date);
                        clearErrors("departureDate");
                    }, placeholder: "mm/dd/yyyy", min: today, error: (_d = errors.departureDate) === null || _d === void 0 ? void 0 : _d.message })),
            React.createElement("div", { className: "w-40" },
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "ROUND TRIP"),
                React.createElement("div", { className: "h-12 flex items-center space-x-4" },
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
            React.createElement("div", { className: "w-46" },
                React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "NO. OF PASSENGERS"),
                React.createElement(PassengerCounter_1["default"], { value: watchedValues.passengers, onChange: function (count) {
                        setValue("passengers", count);
                        clearErrors("passengers");
                    }, min: 1, max: 9, error: (_e = errors.passengers) === null || _e === void 0 ? void 0 : _e.message }))),
        isRoundTrip && (React.createElement("div", { className: "mt-4" },
            React.createElement("label", { className: "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide" }, "RETURN DATE"),
            React.createElement("div", { className: "w-1/5" },
                React.createElement(DatePicker_1["default"], { value: watchedValues.returnDate || "", onChange: function (date) {
                        setValue("returnDate", date);
                        clearErrors("returnDate");
                    }, placeholder: "mm/dd/yyyy", min: watchedValues.departureDate || today, error: (_f = errors.returnDate) === null || _f === void 0 ? void 0 : _f.message })))),
        React.createElement("div", { className: "flex justify-center pt-6" },
            React.createElement(Button_1.Button, { type: "submit", loading: isLoading, size: "xl", className: "px-12 uppercase tracking-wide shadow-lg", leftIcon: React.createElement(lucide_react_1.Search, { className: "w-5 h-5" }) }, isLoading ? "SEARCHING..." : "SEARCH"))));
}
exports["default"] = BusSearchForm;

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.arrayUtils = exports.urlUtils = exports.formatters = exports.validationRules = void 0;
// Form validation utilities
exports.validationRules = {
    required: function (value, fieldName) {
        if (!value || (typeof value === "string" && !value.trim())) {
            return fieldName + " is required";
        }
        return null;
    },
    minLength: function (value, min, fieldName) {
        if (value && value.length < min) {
            return fieldName + " must be at least " + min + " characters";
        }
        return null;
    },
    maxLength: function (value, max, fieldName) {
        if (value && value.length > max) {
            return fieldName + " must not exceed " + max + " characters";
        }
        return null;
    },
    futureDate: function (value, fieldName) {
        if (value) {
            var date = new Date(value);
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if (date < today) {
                return fieldName + " cannot be in the past";
            }
        }
        return null;
    },
    dateRange: function (startDate, endDate) {
        if (startDate && endDate) {
            var start = new Date(startDate);
            var end = new Date(endDate);
            if (end < start) {
                return "End date must be after start date";
            }
        }
        return null;
    },
    numberRange: function (value, min, max, fieldName) {
        if (value < min || value > max) {
            return fieldName + " must be between " + min + " and " + max;
        }
        return null;
    },
    notEqual: function (value1, value2, fieldName) {
        if (value1 && value2 && value1 === value2) {
            return fieldName + " must be different";
        }
        return null;
    }
};
// Date formatting utilities
exports.formatters = {
    date: function (dateString, locale) {
        if (locale === void 0) { locale = "en-US"; }
        if (!dateString)
            return "";
        try {
            var date = new Date(dateString);
            return date.toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            });
        }
        catch (_a) {
            return dateString;
        }
    },
    shortDate: function (dateString) {
        if (!dateString)
            return "";
        try {
            var date = new Date(dateString);
            return date.toLocaleDateString("en-GB"); // DD/MM/YYYY format
        }
        catch (_a) {
            return dateString;
        }
    },
    currency: function (amount, currency) {
        if (currency === void 0) { currency = "USD"; }
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency
        }).format(amount);
    },
    truncate: function (text, maxLength) {
        if (text.length <= maxLength)
            return text;
        return text.slice(0, maxLength) + "...";
    }
};
// URL parameter utilities
exports.urlUtils = {
    buildSearchParams: function (params) {
        var searchParams = new URLSearchParams();
        Object.entries(params).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined && value !== null && value !== "") {
                searchParams.set(key, String(value));
            }
        });
        return searchParams.toString();
    },
    parseSearchParams: function (searchParams) {
        var params = {};
        searchParams.forEach(function (value, key) {
            params[key] = value;
        });
        return params;
    }
};
// Array utilities for locations/data
exports.arrayUtils = {
    filterLocations: function (locations, query) {
        if (!query.trim())
            return locations;
        var lowerQuery = query.toLowerCase();
        return locations.filter(function (location) {
            var _a, _b, _c;
            return ((_a = location.englishName) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(lowerQuery)) || ((_b = location.shortCode) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(lowerQuery)) || ((_c = location.codeState) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(lowerQuery));
        });
    },
    sortBy: function (array, key, direction) {
        if (direction === void 0) { direction = "asc"; }
        return __spreadArrays(array).sort(function (a, b) {
            var aVal = a[key];
            var bVal = b[key];
            if (aVal < bVal)
                return direction === "asc" ? -1 : 1;
            if (aVal > bVal)
                return direction === "asc" ? 1 : -1;
            return 0;
        });
    },
    groupBy: function (array, key) {
        return array.reduce(function (groups, item) {
            var groupKey = String(item[key]);
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(item);
            return groups;
        }, {});
    }
};

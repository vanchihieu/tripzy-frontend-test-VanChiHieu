"use strict";
exports.__esModule = true;
exports.ANIMATIONS = exports.TRAVEL_MODES = exports.ROUTES = exports.ERROR_MESSAGES = exports.FORM_LIMITS = exports.APP_CONFIG = void 0;
// App configuration
exports.APP_CONFIG = {
    name: "Tripzy",
    description: "Travel booking made easy",
    version: "1.0.0"
};
// Form constraints
exports.FORM_LIMITS = {
    passengers: {
        min: 1,
        max: 9
    },
    locations: {
        maxResults: 10
    }
};
// Error messages
exports.ERROR_MESSAGES = {
    required: "This field is required",
    selectDeparture: "Select departure",
    selectDestination: "Select destination",
    selectDate: "Select date",
    mustBeDifferent: "Must be different",
    cannotBeInPast: "Cannot be in past",
    mustBeAfterDeparture: "Must be after departure",
    passengerRange: "Between 1-9"
};
// Routes
exports.ROUTES = {
    home: "/",
    search: "/search"
};
// Tab configurations
exports.TRAVEL_MODES = {
    bus: {
        id: "bus",
        label: "Bus & Shuttle",
        colors: {
            primary: "cyan",
            active: "bg-cyan-50 border-cyan-400 text-cyan-600",
            inactive: "hover:text-cyan-600 hover:bg-cyan-25"
        }
    },
    hotel: {
        id: "hotel",
        label: "Hotel & Accommodation",
        colors: {
            primary: "green",
            active: "bg-green-50 border-green-400 text-green-600",
            inactive: "hover:text-green-600 hover:bg-green-25"
        }
    },
    flight: {
        id: "flight",
        label: "Flight",
        colors: {
            primary: "purple",
            active: "bg-purple-50 border-purple-400 text-purple-600",
            inactive: "hover:text-purple-600 hover:bg-purple-25"
        }
    }
};
// Animation durations
exports.ANIMATIONS = {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms"
};

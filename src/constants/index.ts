// App configuration
export const APP_CONFIG = {
  name: "Tripzy",
  description: "Travel booking made easy",
  version: "1.0.0",
} as const;

// Form constraints
export const FORM_LIMITS = {
  passengers: {
    min: 1,
    max: 9,
  },
  locations: {
    maxResults: 10,
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  required: "This field is required",
  selectDeparture: "Select departure",
  selectDestination: "Select destination",
  selectDate: "Select date",
  mustBeDifferent: "Must be different",
  cannotBeInPast: "Cannot be in past",
  mustBeAfterDeparture: "Must be after departure",
  passengerRange: "Between 1-9",
} as const;

// Routes
export const ROUTES = {
  home: "/",
  search: "/search",
} as const;

// Tab configurations
export const TRAVEL_MODES = {
  bus: {
    id: "bus",
    label: "Bus & Shuttle",
    colors: {
      primary: "cyan",
      active: "bg-cyan-50 border-cyan-400 text-cyan-600",
      inactive: "hover:text-cyan-600 hover:bg-cyan-25",
    },
  },
  hotel: {
    id: "hotel",
    label: "Hotel & Accommodation",
    colors: {
      primary: "green",
      active: "bg-green-50 border-green-400 text-green-600",
      inactive: "hover:text-green-600 hover:bg-green-25",
    },
  },
  flight: {
    id: "flight",
    label: "Flight",
    colors: {
      primary: "purple",
      active: "bg-purple-50 border-purple-400 text-purple-600",
      inactive: "hover:text-purple-600 hover:bg-purple-25",
    },
  },
} as const;

// Animation durations
export const ANIMATIONS = {
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
} as const;

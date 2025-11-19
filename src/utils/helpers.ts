// Form validation utilities
export const validationRules = {
  required: (value: any, fieldName: string) => {
    if (!value || (typeof value === "string" && !value.trim())) {
      return `${fieldName} is required`;
    }
    return null;
  },

  minLength: (value: string, min: number, fieldName: string) => {
    if (value && value.length < min) {
      return `${fieldName} must be at least ${min} characters`;
    }
    return null;
  },

  maxLength: (value: string, max: number, fieldName: string) => {
    if (value && value.length > max) {
      return `${fieldName} must not exceed ${max} characters`;
    }
    return null;
  },

  futureDate: (value: string, fieldName: string) => {
    if (value) {
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (date < today) {
        return `${fieldName} cannot be in the past`;
      }
    }
    return null;
  },

  dateRange: (startDate: string, endDate: string) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end < start) {
        return "End date must be after start date";
      }
    }
    return null;
  },

  numberRange: (value: number, min: number, max: number, fieldName: string) => {
    if (value < min || value > max) {
      return `${fieldName} must be between ${min} and ${max}`;
    }
    return null;
  },

  notEqual: (value1: any, value2: any, fieldName: string) => {
    if (value1 && value2 && value1 === value2) {
      return `${fieldName} must be different`;
    }
    return null;
  },
};

// Date formatting utilities
export const formatters = {
  date: (dateString: string, locale: string = "en-US") => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
    } catch {
      return dateString;
    }
  },

  shortDate: (dateString: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB"); // DD/MM/YYYY format
    } catch {
      return dateString;
    }
  },

  currency: (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  },

  truncate: (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  },
};

// URL parameter utilities
export const urlUtils = {
  buildSearchParams: (params: Record<string, any>) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.set(key, String(value));
      }
    });

    return searchParams.toString();
  },

  parseSearchParams: (searchParams: URLSearchParams) => {
    const params: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  },
};

// Array utilities for locations/data
export const arrayUtils = {
  filterLocations: (locations: any[], query: string) => {
    if (!query.trim()) return locations;

    const lowerQuery = query.toLowerCase();
    return locations.filter(
      (location) =>
        location.englishName?.toLowerCase().includes(lowerQuery) ||
        location.shortCode?.toLowerCase().includes(lowerQuery) ||
        location.codeState?.toLowerCase().includes(lowerQuery)
    );
  },

  sortBy: <T>(array: T[], key: keyof T, direction: "asc" | "desc" = "asc") => {
    return [...array].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
  },

  groupBy: <T>(array: T[], key: keyof T) => {
    return array.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  },
};

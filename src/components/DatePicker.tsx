"use client";

import { Calendar } from "lucide-react";
import { format } from "date-fns";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder: string;
  error?: string;
  min?: string;
  disabled?: boolean;
}

export default function DatePicker({
  value,
  onChange,
  placeholder,
  error,
  min,
  disabled = false,
}: DatePickerProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return placeholder;
    try {
      const date = new Date(dateString);
      return format(date, "dd/MM/yyyy");
    } catch {
      return placeholder;
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={handleDateChange}
          min={min}
          disabled={disabled}
          className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-colors text-gray-700 ${
            error ? "border-red-500" : "border-gray-300"
          } ${
            disabled
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white hover:border-gray-400"
          }`}
        />
        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

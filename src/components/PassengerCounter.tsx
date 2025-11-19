"use client";

import { Minus, Plus, Users } from "lucide-react";

interface PassengerCounterProps {
  value: number;
  onChange: (count: number) => void;
  min?: number;
  max?: number;
  error?: string;
  disabled?: boolean;
}

export default function PassengerCounter({
  value,
  onChange,
  min = 1,
  max = 20,
  error,
  disabled = false,
}: PassengerCounterProps) {
  const increment = () => {
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <div
        className={`relative flex items-center justify-between border rounded-lg px-4 py-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400 transition-all ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100" : "bg-white"}`}
      >
        <div className="flex items-center">
          <Users className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-gray-600 text-sm">Passengers</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={decrement}
            disabled={disabled || value <= min}
            className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors ${
              disabled || value <= min
                ? "text-gray-300 cursor-not-allowed border-gray-200"
                : "text-gray-600 hover:text-gray-800 hover:border-gray-400"
            }`}
          >
            <Minus className="w-3 h-3" />
          </button>

          <span className="font-semibold text-gray-900 min-w-[20px] text-center">
            {value}
          </span>

          <button
            type="button"
            onClick={increment}
            disabled={disabled || value >= max}
            className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors ${
              disabled || value >= max
                ? "text-gray-300 cursor-not-allowed border-gray-200"
                : "text-gray-600 hover:text-gray-800 hover:border-gray-400"
            }`}
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { Location } from "@/types";
import { ChevronDown, MapPin } from "lucide-react";

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  locations: Location[];
  error?: string;
  disabled?: boolean;
}

export default function Autocomplete({
  value,
  onChange,
  placeholder,
  locations,
  error,
  disabled = false,
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredLocations, setFilteredLocations] =
    useState<Location[]>(locations);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const filtered = locations.filter(
        (location) =>
          location.english_name.toLowerCase().includes(value.toLowerCase()) ||
          location.short_code.toLowerCase().includes(value.toLowerCase()) ||
          location.code_state.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  }, [value, locations]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (location: Location) => {
    onChange(location.english_name);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-colors text-gray-700 ${
            error ? "border-red-500" : "border-gray-300"
          } ${
            disabled
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white hover:border-gray-400"
          }`}
        />
        <ChevronDown
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredLocations.length === 0 ? (
            <div className="px-4 py-3 text-gray-500 text-center">
              No locations found
            </div>
          ) : (
            filteredLocations.map((location) => (
              <div
                key={location.short_code}
                onClick={() => handleSelect(location)}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">
                      {location.short_code}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {location.english_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {location.code_state}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

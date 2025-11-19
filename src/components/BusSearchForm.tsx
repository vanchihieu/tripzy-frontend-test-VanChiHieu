"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeftRight, Search } from "lucide-react";
import { SearchFormData, Location } from "@/types";
import Autocomplete from "./Autocomplete";
import DatePicker from "./DatePicker";
import PassengerCounter from "./PassengerCounter";

interface BusSearchFormProps {
  locations: Location[];
}

export default function BusSearchForm({ locations }: BusSearchFormProps) {
  const router = useRouter();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SearchFormData>({
    defaultValues: {
      mode: "bus",
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      passengers: 1,
      isRoundTrip: false,
    },
  });

  const watchedValues = watch();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const swapLocations = () => {
    const fromValue = watchedValues.from;
    const toValue = watchedValues.to;
    setValue("from", toValue);
    setValue("to", fromValue);
    clearErrors(["from", "to"]);
  };

  const validateForm = (data: SearchFormData) => {
    let isValid = true;

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
        message: "Destination must be different from departure",
      });
      isValid = false;
    }

    // Validate departure date
    if (!data.departureDate) {
      setError("departureDate", { message: "Please select departure date" });
      isValid = false;
    } else {
      const depDate = new Date(data.departureDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (depDate < today) {
        setError("departureDate", {
          message: "Departure date cannot be in the past",
        });
        isValid = false;
      }
    }

    // Validate return date if round trip
    if (isRoundTrip && data.returnDate) {
      const depDate = new Date(data.departureDate);
      const retDate = new Date(data.returnDate);

      if (retDate < depDate) {
        setError("returnDate", {
          message: "Return date must be after departure date",
        });
        isValid = false;
      }
    }

    // Validate passengers
    if (data.passengers < 1) {
      setError("passengers", {
        message: "Number of passengers must be at least 1",
      });
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = async (data: SearchFormData) => {
    if (!validateForm(data)) {
      return;
    }

    setIsLoading(true);

    try {
      // Build query parameters
      const params = new URLSearchParams({
        mode: data.mode,
        from: encodeURIComponent(data.from),
        to: encodeURIComponent(data.to),
        dep: data.departureDate,
        pax: data.passengers.toString(),
      });

      if (isRoundTrip && data.returnDate) {
        params.append("ret", data.returnDate);
      }

      // Navigate to search page
      router.push(`/search?${params.toString()}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Main Grid Layout - Exactly matches Figma */}
      <div className="grid grid-cols-5 gap-4">
        {/* FROM */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            FROM
          </label>
          <Autocomplete
            value={watchedValues.from}
            onChange={(value) => {
              setValue("from", value);
              clearErrors("from");
            }}
            placeholder="Enter location"
            locations={locations}
            error={errors.from?.message}
          />
        </div>

        {/* TO */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            TO
          </label>
          <Autocomplete
            value={watchedValues.to}
            onChange={(value) => {
              setValue("to", value);
              clearErrors("to");
            }}
            placeholder="Enter destination"
            locations={locations}
            error={errors.to?.message}
          />
        </div>

        {/* DEPARTURE DATE */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            DEPARTURE DATE
          </label>
          <DatePicker
            value={watchedValues.departureDate}
            onChange={(date) => {
              setValue("departureDate", date);
              clearErrors("departureDate");
            }}
            placeholder="mm/dd/yyyy"
            min={today}
            error={errors.departureDate?.message}
          />
        </div>

        {/* ROUND TRIP */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            ROUND TRIP
          </label>
          <div className="flex items-center space-x-4 h-12">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={!isRoundTrip}
                onChange={() => {
                  setIsRoundTrip(false);
                  setValue("returnDate", "");
                  clearErrors("returnDate");
                }}
                className="w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                One way
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={isRoundTrip}
                onChange={() => setIsRoundTrip(true)}
                className="w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Return
              </span>
            </label>
          </div>
        </div>

        {/* NO. OF PASSENGERS */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            NO. OF PASSENGERS
          </label>
          <div className="relative">
            <select
              value={watchedValues.passengers}
              onChange={(e) => {
                setValue("passengers", parseInt(e.target.value));
                clearErrors("passengers");
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white appearance-none cursor-pointer h-12 text-gray-700"
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {errors.passengers && (
            <p className="mt-1 text-sm text-red-600">
              {errors.passengers.message}
            </p>
          )}
        </div>
      </div>

      {/* Return Date Row - Show below if round trip */}
      {isRoundTrip && (
        <div className="mt-4">
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            RETURN DATE
          </label>
          <div className="w-1/5">
            <DatePicker
              value={watchedValues.returnDate || ""}
              onChange={(date) => {
                setValue("returnDate", date);
                clearErrors("returnDate");
              }}
              placeholder="mm/dd/yyyy"
              min={watchedValues.departureDate || today}
              error={errors.returnDate?.message}
            />
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-cyan-400 hover:bg-cyan-500 disabled:bg-cyan-300 text-white font-bold py-3 px-12 rounded-lg transition-colors flex items-center justify-center space-x-2 uppercase tracking-wide text-sm shadow-lg"
        >
          <Search className="w-5 h-5" />
          <span>{isLoading ? "SEARCHING..." : "SEARCH"}</span>
        </button>
      </div>
    </form>
  );
}

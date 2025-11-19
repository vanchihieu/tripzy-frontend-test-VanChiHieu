"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeftRight, Search } from "lucide-react";
import { SearchFormData, Location } from "@/types";
import { validationRules, urlUtils } from "@/utils/helpers";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
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
    clearErrors();

    // Validate from location
    const fromError = validationRules.required(data.from, "Departure");
    if (fromError) {
      setError("from", { message: "Select departure" });
      isValid = false;
    }

    // Validate to location
    const toError = validationRules.required(data.to, "Destination");
    if (toError) {
      setError("to", { message: "Select destination" });
      isValid = false;
    }

    // Check if from and to are different
    const sameLocationError = validationRules.notEqual(
      data.from,
      data.to,
      "Destination"
    );
    if (sameLocationError) {
      setError("to", { message: "Must be different" });
      isValid = false;
    }

    // Validate departure date
    const dateError = validationRules.required(data.departureDate, "Date");
    if (dateError) {
      setError("departureDate", { message: "Select date" });
      isValid = false;
    } else {
      const futureDateError = validationRules.futureDate(
        data.departureDate,
        "Departure date"
      );
      if (futureDateError) {
        setError("departureDate", { message: "Cannot be in past" });
        isValid = false;
      }
    }

    // Validate return date if round trip
    if (isRoundTrip && data.returnDate) {
      const dateRangeError = validationRules.dateRange(
        data.departureDate,
        data.returnDate
      );
      if (dateRangeError) {
        setError("returnDate", { message: "Must be after departure" });
        isValid = false;
      }
    }

    // Validate passengers
    const passengersError = validationRules.numberRange(
      data.passengers,
      1,
      9,
      "Passengers"
    );
    if (passengersError) {
      setError("passengers", { message: "Between 1-9" });
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
      // Build query parameters using utility
      const searchParams = urlUtils.buildSearchParams({
        mode: data.mode,
        from: data.from,
        to: data.to,
        dep: data.departureDate,
        ret: isRoundTrip ? data.returnDate : undefined,
        pax: data.passengers,
      });

      // Navigate to search page
      router.push(`/search?${searchParams}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Single Row Layout */}
      <div className="flex items-end gap-3">
        {/* FROM */}
        <div className="flex-1 min-w-[220px]">
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            FROM
          </label>
          <Autocomplete
            value={watchedValues.from}
            onChange={(value) => {
              setValue("from", value);
              clearErrors("from");
            }}
            placeholder="Enter city, terminal..."
            locations={locations}
            error={errors.from?.message}
          />
        </div>

        {/* SWAP BUTTON */}
        <div className="pb-3">
          <button
            type="button"
            onClick={swapLocations}
            className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 transition-colors shadow-md"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* TO */}
        <div className="flex-1 min-w-[220px]">
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            TO
          </label>
          <Autocomplete
            value={watchedValues.to}
            onChange={(value) => {
              setValue("to", value);
              clearErrors("to");
            }}
            placeholder="Enter city, terminal..."
            locations={locations}
            error={errors.to?.message}
          />
        </div>

        {/* DEPARTURE DATE */}
        <div className="w-40">
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
        <div className="w-40">
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            ROUND TRIP
          </label>
          <div className="h-12 flex items-center space-x-4">
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
        <div className="w-46">
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            NO. OF PASSENGERS
          </label>
          <PassengerCounter
            value={watchedValues.passengers}
            onChange={(count) => {
              setValue("passengers", count);
              clearErrors("passengers");
            }}
            min={1}
            max={9}
            error={errors.passengers?.message}
          />
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
        <Button
          type="submit"
          loading={isLoading}
          size="xl"
          className="px-12 uppercase tracking-wide shadow-lg"
          leftIcon={<Search className="w-5 h-5" />}
        >
          {isLoading ? "SEARCHING..." : "SEARCH"}
        </Button>
      </div>
    </form>
  );
}

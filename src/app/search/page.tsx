"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  ArrowRight,
  Bus,
  Snowflake,
} from "lucide-react";
import { SearchParams } from "@/types";

function SearchContent() {
  const searchParams = useSearchParams();

  const params: SearchParams = {
    mode: searchParams.get("mode") || "bus",
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    dep: searchParams.get("dep") || "",
    ret: searchParams.get("ret") || "",
    pax: searchParams.get("pax") || "1",
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const isRoundTrip = !!params.ret;

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #e0f2fe 0%, #e0f2fe 50%, #ffffff 50%, #ffffff 100%)",
      }}
    >
      {/* Header */}
      <header className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Snowflake className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-2xl font-bold text-cyan-600">Tripzy</h1>
            </div>
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              New Search
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[900px]">
        {/* Search Summary Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 min-h-[400px]">
          <div className="space-y-6">
            {/* From */}
            <div className="text-gray-700 text-lg">
              <span className="font-semibold">From: </span>
              <span className="text-gray-900">
                {params.from ? decodeURIComponent(params.from) : "Thủ Đức"}
              </span>
            </div>

            {/* To */}
            <div className="text-gray-700 text-lg">
              <span className="font-semibold">To: </span>
              <span className="text-gray-900">
                {params.to ? decodeURIComponent(params.to) : "Cầu Giấy"}
              </span>
            </div>

            {/* Departure Date */}
            <div className="text-gray-700 text-lg">
              <span className="font-semibold">Departure date: </span>
              <span className="text-gray-900">
                {params.dep
                  ? formatDate(params.dep)
                  : "Thứ Sáu, 28 tháng 11, 2025"}
              </span>
            </div>

            {/* Return Date */}
            {isRoundTrip && (
              <div className="text-gray-700 text-lg">
                <span className="font-semibold">Return date: </span>
                <span className="text-gray-900">
                  {params.ret ? formatDate(params.ret) : ""}
                </span>
              </div>
            )}

            {/* Passengers */}
            <div className="text-gray-700 text-lg">
              <span className="font-semibold">No. of passenger: </span>
              <span className="text-gray-900">{params.pax || "1"}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Bus className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
            <p className="text-gray-600">Đang tải...</p>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}

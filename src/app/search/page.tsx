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
          "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
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
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
          <div className="space-y-4">
            {/* From */}
            <div className="text-gray-700">
              <span className="font-semibold">From: </span>
              <span className="text-gray-900">
                {params.from ? decodeURIComponent(params.from) : "Thủ Đức"}
              </span>
            </div>

            {/* To */}
            <div className="text-gray-700">
              <span className="font-semibold">To: </span>
              <span className="text-gray-900">
                {params.to ? decodeURIComponent(params.to) : "Cầu Giấy"}
              </span>
            </div>

            {/* Departure Date */}
            <div className="text-gray-700">
              <span className="font-semibold">Departure date: </span>
              <span className="text-gray-900">
                {params.dep
                  ? formatDate(params.dep)
                  : "Thứ Sáu, 28 tháng 11, 2025"}
              </span>
            </div>

            {/* Return Date */}
            {isRoundTrip && (
              <div className="text-gray-700">
                <span className="font-semibold">Return date: </span>
                <span className="text-gray-900">
                  {params.ret ? formatDate(params.ret) : ""}
                </span>
              </div>
            )}

            {/* Passengers */}
            <div className="text-gray-700">
              <span className="font-semibold">No. of passenger: </span>
              <span className="text-gray-900">{params.pax || "1"}</span>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <Bus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Kết quả tìm kiếm
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Trong một ứng dụng thực tế, đây sẽ là danh sách các chuyến xe bus
              phù hợp với tiêu chí tìm kiếm của bạn.
            </p>
          </div>

          {/* Bus Results */}
          <div className="space-y-6">
            {/* Bus Option 1 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      Nhà xe Phương Trang
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Giường nằm VIP
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span>Khởi hành: 6:30</span>
                    <span>Thời gian: 7h 20m</span>
                    <span>Còn 15 chỗ</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">
                    300₫
                  </div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Chọn chỗ
                  </button>
                </div>
              </div>
            </div>

            {/* Bus Option 2 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      Nhà xe Mai Linh
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Limousine
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span>Khởi hành: 7:30</span>
                    <span>Thời gian: 8h 10m</span>
                    <span>Còn 10 chỗ</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">
                    350₫
                  </div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Chọn chỗ
                  </button>
                </div>
              </div>
            </div>

            {/* Bus Option 3 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      Nhà xe Thành Bưởi
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Ghế ngồi
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span>Khởi hành: 8:30</span>
                    <span>Thời gian: 9h 0m</span>
                    <span>Còn 5 chỗ</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">
                    400₫
                  </div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Chọn chỗ
                  </button>
                </div>
              </div>
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

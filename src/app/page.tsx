"use client";

import { useState } from "react";
import { Bus, Hotel, Plane, Snowflake } from "lucide-react";
import Tabs from "@/components/Tabs";
import BusSearchForm from "@/components/BusSearchForm";
import { Location } from "@/types";
import locationsData from "@/data/locations.json";

const locations: Location[] = locationsData as Location[];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("bus");

  const tabs = [
    {
      id: "bus",
      label: "Bus & Shuttle",
      icon: <Bus className="w-4 h-4" />,
    },
    {
      id: "hotel",
      label: "Hotel & Accommodation",
      icon: <Hotel className="w-4 h-4" />,
    },
    {
      id: "flight",
      label: "Flight",
      icon: <Plane className="w-4 h-4" />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "bus":
        return <BusSearchForm locations={locations} />;
      case "hotel":
      case "flight":
        return (
          <div className="py-16 text-center text-gray-500">
            <div className="mb-4">
              {activeTab === "hotel" ? (
                <Hotel className="w-16 h-16 mx-auto text-gray-300" />
              ) : (
                <Plane className="w-16 h-16 mx-auto text-gray-300" />
              )}
            </div>
            <h3 className="text-lg font-medium mb-2">No data</h3>
            <p>This feature is not available yet.</p>
          </div>
        );
      default:
        return null;
    }
  };

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
          <div className="flex items-center">
            <Snowflake className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-2xl font-bold text-cyan-600">Tripzy</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Travel Smarter, Not Harder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Make every trip effortless. Tripzy lets you book rides and plan
            journeys with ease
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto">
          {/* Tabs */}
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="mb-10"
          />

          {/* Tab Content */}
          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </main>
    </div>
  );
}

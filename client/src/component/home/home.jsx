import React, { useState } from 'react';
import Button from '../ui/Button';
import { ClipboardList, TrendingUp, Shield, Clock, Truck, FileText, Users, Building2 } from "lucide-react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import VendorLogin from "../login/VendorLogin";
import MiningCorporationLogin from "../login/MiningCorporationLogin";

// Mining Equipment SVG Component
const MiningIllustration = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
    <rect x="20" y="60" width="160" height="80" className="fill-gray-200 stroke-gray-400"/>
    <circle cx="50" cy="140" r="15" className="fill-gray-400"/>
    <circle cx="150" cy="140" r="15" className="fill-gray-400"/>
    <rect x="40" y="80" width="120" height="40" className="fill-gray-300 stroke-gray-400"/>
    <rect x="60" y="40" width="20" height="40" className="fill-gray-400"/>
    <rect x="120" y="40" width="20" height="40" className="fill-gray-400"/>
  </svg>
);

// Mining Site SVG Component
const MiningSiteIllustration = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
    <path d="M10,100 L50,40 L90,100 Z" className="fill-gray-300 stroke-gray-400"/>
    <path d="M70,100 L110,30 L150,100 Z" className="fill-gray-400 stroke-gray-500"/>
    <rect x="40" y="70" width="80" height="30" className="fill-gray-500"/>
    <circle cx="150" cy="60" r="20" className="fill-yellow-400"/>
  </svg>
);

// Mining Excavator SVG Component
const ExcavatorIllustration = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
    <rect x="120" y="60" width="60" height="40" className="fill-gray-500"/>
    <rect x="140" y="40" width="20" height="20" className="fill-gray-600"/>
    <path d="M20,100 L120,100 L120,60" className="stroke-gray-600 stroke-2 fill-none"/>
    <circle cx="40" cy="100" r="20" className="fill-gray-400"/>
    <circle cx="160" cy="100" r="20" className="fill-gray-400"/>
  </svg>
);

// Hero Background SVG
const HeroBackground = () => (
  <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="stroke-gray-700"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#1a365d"/>
    <rect width="100%" height="100%" fill="url(#grid)" className="opacity-10"/>
    {/* Mining Elements */}
    <path d="M100,200 L300,100 L500,200" className="fill-gray-700 opacity-30"/>
    <path d="M300,200 L500,120 L700,200" className="fill-gray-800 opacity-30"/>
    <rect x="200" y="150" width="100" height="50" className="fill-gray-600 opacity-30"/>
    <rect x="400" y="160" width="80" height="40" className="fill-gray-600 opacity-30"/>
  </svg>
);

const StatCard = ({ icon: Icon, count, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
    <Icon className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
    <div className="text-3xl font-bold text-gray-900 mb-1">{count}+</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <Icon className="w-8 h-8 text-blue-600 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage = () => {
  const [showModal, setShowModal] = useState(false); // useState for modal state
  const navigate = useNavigate(); // useNavigate for navigation
  
  const handleLoginOption = (role) => {
    if (role === "vendor") navigate("/vendor-login");
    else navigate("/mining-login");
  };

  const features = [
    {
      icon: ClipboardList,
      title: "Bid Management",
      description: "Submit and track bids for coal mining projects with real-time status updates"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Monitor your vendor performance metrics and contract fulfillment rates"
    },
    {
      icon: Shield,
      title: "Compliance Tracking",
      description: "Stay updated with safety regulations and certification requirements"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant notifications for new opportunities and bid status changes"
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "Track deliveries and manage transportation schedules efficiently"
    },
    {
      icon: FileText,
      title: "Document Control",
      description: "Manage all your contracts and documentation in one secure location"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 3L3 8.2V15.8L12 21L21 15.8V8.2L12 3Z" />
                <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" />
              </svg>
              <span className="text-xl font-bold text-gray-900">CoalOptimizer</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Mining Background */}
      <div className="relative pt-32 pb-20 px-4 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <HeroBackground />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-16 h-16 mb-4 text-white"
            fill="none"
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 3L3 8.2V15.8L12 21L21 15.8V8.2L12 3Z" />
            <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" />
          </svg>
          <h1 className="text-4xl font-bold text-white mb-2 text-center">Coal Mining Vendor Portal</h1>
          <p className="text-gray-300 text-xl mb-8 text-center">Access your vendor dashboard</p>
          <div className="flex justify-center items-center h-screen bg-gray">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Login to Portal
            </button>

            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Choose Login Option</h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleLoginOption("vendor")}
                      className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                    >
                      Login as Vendor
                    </button>
                    <button
                      onClick={() => handleLoginOption("mining")}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    >
                      Login as Mining Corporation
                    </button>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-4 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard icon={Users} count="1,500" label="Registered Vendors" />
          <StatCard icon={Building2} count="300" label="Mining Companies" />
        </div>
      </div>

      {/* Mining Illustrations Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg h-48">
            <MiningIllustration />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg h-48">
            <MiningSiteIllustration />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg h-48">
            <ExcavatorIllustration />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Portal Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-white border-t border-gray-100">
        © 2025 CoalOptimizer. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;

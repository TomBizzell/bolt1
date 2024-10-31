import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Transform Your Workflow with Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          to="/pricing"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Shield className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Zap className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Globe className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
            <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&crop=edges" alt="Company logo" className="h-12 object-contain mx-auto" />
            <img src="https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?w=200&h=100&fit=crop&crop=edges" alt="Company logo" className="h-12 object-contain mx-auto" />
            <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=100&fit=crop&crop=edges" alt="Company logo" className="h-12 object-contain mx-auto" />
            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=100&fit=crop&crop=edges" alt="Company logo" className="h-12 object-contain mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
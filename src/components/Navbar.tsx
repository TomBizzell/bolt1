import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export function Navbar() {
  const { isSubscribed } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">SaaSApp</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            {isSubscribed ? (
              <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
            ) : (
              <Link to="/pricing" className="text-gray-700 hover:text-indigo-600">Pricing</Link>
            )}
            <Link
              to="/pricing"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              {isSubscribed ? 'Manage Subscription' : 'Get Started'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
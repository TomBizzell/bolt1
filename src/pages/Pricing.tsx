import React from 'react';
import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { useAuthStore } from '../store/useAuthStore';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
const stripePromise = loadStripe('pk_live_51HKClIAqy0PedGLbgx9CWFpeyy2R3KHO0Q9siofqbQCzXIzlgimDq8WAtvqqt8kOoPbHf0rU5FrI98awGtzK4ZcG00FbVTIsec');

export function Pricing() {
  const { setSubscribed } = useAuthStore();
  const [loading, setLoading] = React.useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Create checkout session
      const response = await fetch(`${BACKEND_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Check URL params for successful subscription
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    
    if (sessionId) {
      setSubscribed(true);
      // Remove the query parameter
      window.history.replaceState({}, '', '/dashboard');
    }
  }, [setSubscribed]);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            One plan, everything you need. No hidden fees.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 px-6 py-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-2">Premium</h3>
            <div className="mt-4 flex justify-center items-baseline">
              <span className="text-5xl font-bold text-white">$10</span>
              <span className="text-xl text-indigo-200 ml-2">/month</span>
            </div>
          </div>
          
          <div className="px-6 py-8">
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Team collaboration tools</span>
              </li>
            </ul>

            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`mt-8 w-full bg-indigo-600 text-white rounded-lg py-4 font-semibold hover:bg-indigo-700 transition-colors ${
                loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Processing...' : 'Get Started Now'}
            </button>
            
            <p className="mt-4 text-sm text-center text-gray-500">
              Instant access. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
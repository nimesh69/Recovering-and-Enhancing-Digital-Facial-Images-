import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Header } from '../components/Header/Header';
import { SocialLogin } from '../components/Login/SocialLogin';
export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
      backgroundSize: '30px 30px',
      backgroundPosition: '-5px -5px',
    }}>
        <Header />
      <div className="max-w-lg mx-auto pt-8">
        <div className="flex justify-between items-center mb-12">
          <div className="text-sm mx-auto">
            <span className="text-gray-500">New here?</span>{' '}
            <Link to="/signup" className="text-black font-medium ml-2">
              Create Account
            </Link>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif mb-4">Login to Your Account</h1>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Phone / Email "
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="Passcode"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
          />
          <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2">
            Login to Your Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
          <SocialLogin />

        <div className="mt-8 text-center">
          <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-black">
            Forgot Passcode?
          </Link>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
          <span className="mx-2">•</span>
          <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
}
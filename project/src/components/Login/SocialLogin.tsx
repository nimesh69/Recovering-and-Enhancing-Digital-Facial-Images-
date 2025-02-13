import React from 'react';

export function SocialLogin() {
  return (
    <div className="py-3">
    <div className="max-w-md mx-auto space-y-3">
      <button className="w-full border border-gray-800 py-3 rounded-full flex items-center justify-center gap-2">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
        Sign in with Gmail
      </button>
      <button className="w-full border border-gray-800 py-3 rounded-full flex items-center justify-center gap-2">
        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-4 h-4" />
        Sign in Facebook
      </button>
    </div>
    </div>
  );
}
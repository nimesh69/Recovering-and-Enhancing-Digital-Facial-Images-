import React from 'react';

const ContactInfo = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Info</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">EMAIL</p>
            <p className="text-gray-600">nimeshstha79@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
import React from 'react';
import { ImageComparison } from './ImageComparision';
import { Link } from '../Header/Link';
export function Hero() {
  return (
    <div className="flex justify-between items-center gap-12 px-6 py-12">
      <div className="flex-1">
        <div className="inline-block px-4 py-1 rounded-full bg-orange-200 text-orange-800 mb-4">
          Facial Restoration & Enhancement
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Restore Your<br />Best Moments <span className="text-yellow-400">✨</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Our advanced AI technology revives old and blurred facial images, enhancing every detail to bring out natural beauty.
          Upload your photo and witness the transformation—preserve memories with clarity and brilliance.
        </p>
        <div className="flex gap-4">
          <Link href="/Trynow" className="bg-sky-700 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition-colors flex items-center gap-2">
            Try Now <span>→</span>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <ImageComparison />
      </div>
    </div>
  );
}
import React from 'react';

interface ProductFeatureProps {
  price: number;
  originalPrice: number;
  title: string;
  description: string;
}

export function ProductFeature({ price, originalPrice, title, description }: ProductFeatureProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm mt-8 max-w-md">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        {title} <span className="text-yellow-400">✨</span>
      </h2>
      <p className="text-gray-600 mt-2 mb-4">{description}</p>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 line-through">${originalPrice}</span>
        <span className="text-2xl font-bold">${price}</span>
        <button className="ml-auto bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-colors flex items-center gap-2">
          Buy now <span>→</span>
        </button>
      </div>
    </div>
  );
}
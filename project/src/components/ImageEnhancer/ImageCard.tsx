import React from 'react';

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function ImageCard({ image, title, description, action }: ImageCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {action}
      </div>
    </div>
  );
}
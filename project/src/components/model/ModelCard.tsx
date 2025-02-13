import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ClickableImage } from './ClickableImage';
interface PerformanceMetrics {
  psnr: string;
  Time_Taken: string;
  Iteration: string;
}

interface ModelCardProps {
  name: string;
  description: string;
  metrics: PerformanceMetrics;
  resultImage: string;
  graphImages: string[];
  reverse?: boolean;
}

export function ModelCard({ name, description, metrics, resultImage, graphImages, reverse = false }: ModelCardProps) {
  return (
    <div className="w-full py-16">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${reverse ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12`}>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{name}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <ArrowRight className="w-4 h-4 mr-2" />
              <span>PSNR: {metrics.psnr}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <ArrowRight className="w-4 h-4 mr-2" />
              <span>Time Taken: {metrics.Time_Taken}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <ArrowRight className="w-4 h-4 mr-2" />
              <span>Iteration: {metrics.Iteration}</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ClickableImage 
              src={resultImage} 
              alt={`${name} result`}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              {graphImages.map((graph, index) => (
                <ClickableImage
                  key={index}
                  src={graph}
                  alt={`Performance graph ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
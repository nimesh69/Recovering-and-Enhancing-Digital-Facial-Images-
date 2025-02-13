import React from 'react';
import { Download } from 'lucide-react';
import { ImageCard } from './ImageCard';

interface ImageComparisonProps {
  originalImage: string;
  enhancedImage: string;
}

export function ImageComparison({ originalImage, enhancedImage }: ImageComparisonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = enhancedImage;
    link.download = 'enhanced-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <ImageCard 
        image={originalImage} 
        title="Original Image" 
        description="Your uploaded image"
      />
      <ImageCard 
        image={enhancedImage} 
        title="Enhanced Image" 
        description="AI enhanced version"
        action={
          <button
            onClick={handleDownload}
            className="mt-4 inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Enhanced Image
          </button>
        }
      />
    </div>
  );
}
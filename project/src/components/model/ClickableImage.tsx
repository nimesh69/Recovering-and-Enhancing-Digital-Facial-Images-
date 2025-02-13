import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ClickableImage({ src, alt, className }: ClickableImageProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        className={`cursor-pointer transition-transform hover:scale-[1.02] ${className}`}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <ImageModal
          imageUrl={src}
          altText={alt}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
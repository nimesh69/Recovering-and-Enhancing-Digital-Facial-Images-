import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { ImageUploader } from '../components/ImageEnhancer/ImageUploader';
import { ImageComparison } from '../components/ImageEnhancer/ImageComparison';
import { Sparkles } from 'lucide-react';

export function Trynow() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageSelect = async (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;
      setOriginalImage(imageData);
      processImage(imageData);
    };
    reader.readAsDataURL(file);
  };
  const processImage = async (imageData: string) => {
    setIsProcessing(true);
  
    try {
      // Convert Base64 string to Blob
      const base64ToBlob = (base64: string): Blob => {
        const byteString = atob(base64.split(',')[1]);
        const arrayBuffer = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
          arrayBuffer[i] = byteString.charCodeAt(i);
        }
        return new Blob([arrayBuffer], { type: 'image/jpeg' });
      };
  
      const imageBlob = base64ToBlob(imageData);
      const formData = new FormData();
      formData.append('file', imageBlob, 'uploaded_image.jpg');
  
      // Call the FastAPI `/enhance` endpoint
      const response = await fetch('http://localhost:8000/enhance', {  //adjust according to our local host
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // Get the enhanced image as a Blob
      const enhancedBlob = await response.blob();
  
      // Convert the Blob to a Base64 string for display
      const enhancedBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(enhancedBlob);
      });
  
      setEnhancedImage(enhancedBase64);
    } catch (error) {
      console.error('Error enhancing image:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  

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
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-200 text-gray-950 px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Facial Restoration & Enhancement
          </div>
          <h1 className="text-5xl font-serif mb-4">
          Rediscover Clarity & Beauty in Every Photo ✨
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our advanced AI technology revitalizes and restores facial images, bringing out the best in every detail. Upload your photo and witness enhanced resolution, sharper details, and clearer memories.
                let your face shine with the brilliance it deserves.
                                Start your journey to flawless image enhancement today!
          </p>
        </div>

        {!originalImage ? (
          <ImageUploader onImageSelect={handleImageSelect} />
        ) : (
          <div className="space-y-8">
            {isProcessing ? (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 mx-auto animate-spin text-orange-500" />
                <p className="mt-4 text-lg text-gray-700">Enhancing your image please wait patiently...</p>
              </div>
            ) : (
              enhancedImage && (
                <ImageComparison
                  originalImage={originalImage}
                  enhancedImage={enhancedImage}
                />
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}
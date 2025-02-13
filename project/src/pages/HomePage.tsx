import React from 'react';
import { Header } from '../components/Header/Header';
import  {Hero } from '../components/home/Hero';
// import  { ProductFeature }  from '../components/home/ProductFeature';
function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50"   style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
    backgroundSize: '30px 30px',
    backgroundPosition: '-5px -5px',
  }}>
      <Header />
      <main className="container mx-auto">
        <Hero />
        {/* <ProductFeature 
          title="Skin Revival N°5"
          description="Experience skin regeneration that revitalizes, rejuvenates, and restores a youthful, radiant glow."
          price={0}
          originalPrice={350}
        /> */}
      </main>
    </div>
  );
}

export default HomePage;
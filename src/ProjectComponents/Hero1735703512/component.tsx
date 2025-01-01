import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Garbage_Trading_Platform_1735703509/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/9f9a3a4a8804432799f329c5d6ba48bb.jpeg')` }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Turn Your Trash into Treasure</h1>
          <p className="text-xl mb-6">The ultimate marketplace for buying, selling, and trading waste materials</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }
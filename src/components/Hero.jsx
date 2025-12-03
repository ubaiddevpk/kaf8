import React from 'react';





const Hero = () => {
  return (
    <section className="relative w-full py-16 px-6 lg:px-16 overflow-hidden  bg-no-repeat bg-bottom bg-[url('/Rectangle160.png')]">
      {/* Curved Background Shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(142.32% 142.32% at 66.29% 147.71%, rgba(230, 239, 252, 0) 49.48%, #E6EFFC 100%)',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Mobile App Image */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative">
            <img 
              src="/phoneframe.png"
              alt="Kaf8 Mobile App" 
              className="w-72 lg:w-80 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            La meilleur solution<br />
            de livraison en 2023
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            Essayer kaf8 c'est l'adopter
          </p>

          {/* App Store Buttons - Desktop */}
          <div className="hidden lg:flex flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-3">
               
               <img src="/Vector.PNG" alt=""  className='w-8 h-8'/>
                <div className="text-left">
                  <div className="text-xs">Télécharger dans</div>
                  <div className="text-sm font-semibold">l'App Store</div>
                </div>
              </div>
            </a>

            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-3">
              <img src="/GooglePlay.png" alt=""  className='w-8 h-8'/>
                <div className="text-left">
                  <div className="text-xs">Disponible sur</div>
                  <div className="text-sm font-semibold">Google Play Store</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* App Store Buttons - Mobile (Below Image) */}
      <div className="lg:hidden flex flex-col gap-4 mt-8 max-w-sm mx-auto order-3">
        <a 
          href="#" 
          className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-3">
             <img src="/Vector.png" alt=""  className='w-8 h-8'/>
            <div className="text-left">
              <div className="text-xs">Télécharger dans</div>
              <div className="text-sm font-semibold">l'App Store</div>
            </div>
          </div>
        </a>

        <a 
          href="#" 
          className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-3">
         <img src="/GooglePlay.png" alt=""  className='w-8 h-8'/>
            <div className="text-left">
              <div className="text-xs">Disponible sur</div>
              <div className="text-sm font-semibold">Google Play Store</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
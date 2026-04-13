import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-5">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Main Banner */}
        <div className="w-full md:w-3/5 rounded-xl overflow-hidden relative min-h-[260px] flex items-center p-8 md:p-10 cursor-pointer group"
          style={{ backgroundImage: 'url(/images/hero-main.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/50 group-hover:from-primary-dark/85 group-hover:via-primary/75 transition-all duration-500"></div>
          <div className="absolute -right-10 -bottom-10 w-52 h-52 bg-white/5 rounded-full"></div>
          <div className="absolute right-14 top-6 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="relative z-10">
            <span className="bg-secondary text-white text-[11px] font-semibold px-3 py-1
              rounded-full font-poppins inline-block mb-4">🔥 Special Offer</span>
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Big Market, Big Savings!
            </h2>
            <p className="text-white/70 font-poppins text-sm mb-5">
              Up to 15% off on all organic products
            </p>
            <button className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5
              rounded-lg font-poppins text-sm font-semibold transition-colors cursor-pointer">
              Shop Now →
            </button>
          </div>
        </div>

        {/* Side Banner */}
        <div className="w-full md:w-2/5 rounded-xl overflow-hidden relative min-h-[200px] md:min-h-[260px] flex items-center p-8 cursor-pointer group"
          style={{ backgroundImage: 'url(/images/hero-side.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/85 via-secondary/70 to-secondary/40 group-hover:from-secondary-dark/80 transition-all duration-500"></div>
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-poppins text-xl md:text-2xl font-bold text-white mb-2">
              Pure Mustard Oil
            </h2>
            <p className="text-white/80 font-poppins text-sm mb-4">
              100% Pure & Natural
            </p>
            <span className="bg-white text-secondary px-4 py-1.5 rounded-full
              text-sm font-bold font-poppins inline-block">৳350/Liter</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

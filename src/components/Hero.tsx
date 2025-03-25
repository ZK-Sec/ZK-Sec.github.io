import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ZeroLogo } from './ZeroLogo';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Animation */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer
          url="https://prod.spline.design/SAuY8WrPJDiN8qeI/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            position: 'relative',
            zIndex: 0
          }}
        />
        {/* Additional overlay to ensure watermark is hidden */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 999999 }}></div>
      </div>

      {/* Subtle gradient overlays for text visibility without blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-900/80 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/80 z-[1]"></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 pt-32 z-[2]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 animate-fade-in-up">
              <ZeroLogo className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary">Enterprise Security Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
              Secure Your
              <span className="block mt-2 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up max-w-xl" style={{ animationDelay: '0.4s' }}>
              Enterprise-grade cybersecurity consulting for organizations that demand excellence. 
              We protect your assets with next-generation security solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={scrollToContact}
                className="bg-primary text-gray-900 px-8 py-4 rounded-xl hover:bg-primary-hover transition-all hover:scale-105 flex items-center justify-center font-semibold group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-primary/50 text-primary px-8 py-4 rounded-xl hover:bg-primary/10 transition-all hover:scale-105"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Right column - Empty to allow full visibility of Spline animation */}
          <div className="lg:h-[600px]"></div>
        </div>
      </div>
    </section>
  );
}
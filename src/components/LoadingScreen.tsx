import React from 'react';
import { ZeroLogo } from './ZeroLogo';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(204,115,248,0.03)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(204,115,248,0.03)_1.5px,transparent_1.5px)] bg-[size:44px_44px] animate-[grid_20s_linear_infinite]"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-gray-900"></div>

      {/* Loading content */}
      <div className="relative flex flex-col items-center">
        <div className="relative">
          {/* Multiple blur effects for enhanced glow */}
          <div className="absolute -inset-8 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl"></div>
          
          {/* Logo container with larger size and enhanced border */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-full p-8 border-2 border-primary/50 shadow-[0_0_15px_rgba(204,115,248,0.3)]">
            <ZeroLogo className="h-24 w-24 text-primary animate-[bounce_2s_ease-in-out_infinite] filter drop-shadow-[0_0_8px_rgba(204,115,248,0.5)]" />
          </div>
        </div>
        
        {/* Loading text with enhanced visibility */}
        <h2 className="mt-8 text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_2px_rgba(204,115,248,0.5)]">
          Loading...
        </h2>
      </div>
    </div>
  );
}
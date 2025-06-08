import React from 'react';

const BubbleChamberLogo = () => {
  return (
    <div className="absolute top-6 left-4 z-50">
      <div className="flex items-center gap-4 relative">
        <div className="flex flex-col gap-2 relative">
          <div 
            className="w-4 h-4 bg-gradient-to-br from-white/80 via-white/50 to-white/20 rounded-full shadow-lg shadow-white/30"
            style={{
              animation: 'bubble-float 4s ease-in-out infinite 0s'
            }}
          ></div>
          <div 
            className="w-3 h-3 bg-gradient-to-br from-white/80 via-white/50 to-white/20 rounded-full shadow-lg shadow-white/30"
            style={{
              animation: 'bubble-float 4s ease-in-out infinite -0.5s'
            }}
          ></div>
          <div 
            className="w-5 h-5 bg-gradient-to-br from-white/80 via-white/50 to-white/20 rounded-full shadow-lg shadow-white/30"
            style={{
              animation: 'bubble-float 4s ease-in-out infinite -1s'
            }}
          ></div>
          <div 
            className="w-2 h-2 bg-gradient-to-br from-white/80 via-white/50 to-white/20 rounded-full shadow-lg shadow-white/30"
            style={{
              animation: 'bubble-float 4s ease-in-out infinite -1.5s'
            }}
          ></div>
        </div>
        
        <span className="text-4xl mt-[-26px] text-white tracking-[0.35em] font-noto font-bold drop-shadow-2xl">
          KIBAN
        </span>
      </div>
      
      <style jsx>{`
        @keyframes bubble-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-15px) scale(1.1); 
            opacity: 1; 
          }
        }

      `}</style>
    </div>
  );
};

export default BubbleChamberLogo;
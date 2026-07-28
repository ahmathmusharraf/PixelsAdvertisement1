import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  logoPngPath?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  logoPngPath = 'public/PixelsLogo.png',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[180px] sm:max-w-[210px]',
    md: 'h-10 sm:h-12 max-w-[220px] sm:max-w-[280px]',
    lg: 'h-14 sm:h-16 max-w-[320px] sm:max-w-[380px]',
    xl: 'h-20 sm:h-24 max-w-[420px] sm:max-w-[500px]',
  };

  return (
    <div className={`inline-flex flex-col select-none group cursor-pointer ${className}`}>
      {/* 4799 x 1309 PNG Format Banner Logo Image */}
      <div className="flex items-center">
        <img
          src={logoPngPath}
          alt="Pixels Advertisement Logo (4799x1309)"
          referrerPolicy="no-referrer"
          className={`${sizeClasses[size]} w-auto object-contain rounded-xl shadow-md border border-white/10 group-hover:scale-[1.02] transition-all duration-300`}
        />
      </div>

      {/* Subtitle text if explicitly requested */}
      {showSubtitle && (
        <div className="flex items-center justify-between w-full mt-1 px-0.5 tracking-wider text-[10px] md:text-[11px] font-bold">
          <span className="text-[#FF6A00] uppercase tracking-widest font-sans">
            PIXELS ADVERTISEMENT
          </span>
          <span className="text-[#FF6A00] font-arabic font-extrabold tracking-normal">
            بيكسلز للدعاية والاعلان
          </span>
        </div>
      )}
    </div>
  );
};


import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Ambiente de hospedagem hotevo',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#E9EFF0] via-[#F2F5F7] to-[#DDE6E6] text-[#2D4B47] p-6 text-center ${className}`}
      >
        <Building2 className="w-8 h-8 mb-2 opacity-70" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-sm font-medium text-[#1F3533]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

import React, { useState } from 'react';

interface BrandMarkProps {
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * hotevo brand mark using the official logo asset (/assets/aistudio/image_3ef2cb56.png).
 */
export function BrandMark({ size = 'sm', className = '' }: BrandMarkProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span
        style={{ fontFamily: 'var(--sk-display-font-stack)' }}
        className={`inline-flex items-center font-semibold tracking-[-0.025em] text-[#1d1d1f] whitespace-nowrap shrink-0 ${
          size === 'md' ? 'text-[22px]' : 'text-[19px]'
        } ${className}`}
      >
        hotevo
      </span>
    );
  }

  const boxClass = size === 'md' ? 'w-[165px] h-[50px]' : 'w-[132px] h-[40px]';
  const imgClass =
    size === 'md'
      ? 'w-[262px] h-[105px] left-[-29px] top-[-22px]'
      : 'w-[210px] h-[84px] left-[-23px] top-[-18px]';

  return (
    <span className={`relative inline-block overflow-hidden shrink-0 ${boxClass} ${className}`}>
      <img
        src="/assets/aistudio/image_3ef2cb56.png"
        alt="hotevo — Property Management"
        draggable={false}
        onError={() => setHasError(true)}
        className={`absolute max-w-none mix-blend-multiply select-none ${imgClass}`}
      />
    </span>
  );
}

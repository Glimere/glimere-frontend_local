import React, { ReactNode, CSSProperties } from 'react';

interface InfiniteSliderProps {
  children: ReactNode;
  duration: number;
  reverse: boolean;
  isHovered: boolean;
  className?: string;
  loopClass?: string;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ children, duration, reverse = false, isHovered, className, loopClass }) => {
  const style: CSSProperties = {
    '--duration': `${duration}ms`,
    '--direction': reverse ? 'reverse' : 'normal',
    animationPlayState: isHovered ? 'paused' : 'running',
  } as CSSProperties; // Type assertion for CSS custom properties

  return (
    <div
      className={`loop-slider overflow-hidden ${loopClass}`}
      style={style}
    >
      <div className={`flex w-fit animate-loop ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default InfiniteSlider;

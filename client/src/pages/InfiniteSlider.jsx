import React, { useState } from 'react';

export default function InfiniteSlider({ children, duration, reverse = false, isHovered }) {

  return (
    <div
      className='loop-slider h-full'
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
        // animationPlayState: isHovered ? 'paused' : 'running',
      }
    }>
      <div className='inner gap-[100px] h-full'>
        {children}
      </div>
    </div>
  );
}

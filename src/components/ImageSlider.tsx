'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageSliderProps = {
  images: string[];
  interval?: number; // in milliseconds
};

export default function ImageSlider({ images, interval = 2000 }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id); // cleanup on unmount
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i}`}
          fill
          className={`transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit: 'cover' }}
        />
      ))}
    </div>
  );
}

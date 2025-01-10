import { dir } from 'console';
import { FC } from 'react';

interface SliderPageIndicatorProps {
  totalCount: number;
  current: number;
  direction?: 'horizontal' | 'vertical';
}

const SliderPageIndicator: FC<SliderPageIndicatorProps> = ({ totalCount, current, direction }) => {

    // console.log('totalCount', totalCount)
  return (
    <div className={`h-full flex items-center`}>
      <div className={`flex gap-[5px] ${direction === 'horizontal' ? 'flex-row' : 'flex-col'}`}>
        {Array.from({ length: totalCount }, (_, index) => (
          <div key={index}>
            <div
              className={`h-[10px] w-[10px] rounded-full ${
                index + 1 === current ? 'bg-primary-100' : 'bg-gray-100'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderPageIndicator;

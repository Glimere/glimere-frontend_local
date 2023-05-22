import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { constants } from '../auth/constants';

const VerticalCarousel = ({ images }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-[15px]">
      <Carousel
        showStatus={true}
        showThumbs={true}
        showArrows={true}
        axis="vertical"
        selectedItem={0}
      >
        {images.map((img, id) => (
          <div key={id} style={{ width: '300px', height: '500px' }}>
            <img src={`${constants.url}${img.attributes.url}`} alt={`Image ${id + 1}`} />
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${constants.url}${img.attributes.url})` }}
            ></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;
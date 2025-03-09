'use client';

import { serverSideFunction } from '@/utils/server-utils';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientRoutePage() {
  // const result = serverSideFunction();

  // return <h1>Client route</h1>;

  const settings = {
    dots: true,
  };
  return (
    <div className='image-slider-container'>
      <Slider {...settings}>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
        <div>
          <img src='https://picsum.photos/400/200' />
        </div>
      </Slider>
    </div>
  );
}

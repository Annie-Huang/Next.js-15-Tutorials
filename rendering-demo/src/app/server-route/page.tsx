import { serverSideFunction } from '@/utils/server-utils';

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import { ImageSlider } from '@/components/ImageSlider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ServerRoutePage() {
  const result = serverSideFunction();

  // You cannot use client-only code into server component.
  // const clientResult = clientSideFunction();

  // return <h1>Server Route {result}</h1>;

  // const settings = {
  //   dots: true,
  // };
  // return (
  //   <div className='image-slider-container'>
  //     <Slider {...settings}>
  //       <div>
  //         <img src='https://picsum.photos/400/200' />
  //       </div>
  //       <div>
  //         <img src='https://picsum.photos/400/200' />
  //       </div>
  //       <div>
  //         <img src='https://picsum.photos/400/200' />
  //       </div>
  //       <div>
  //         <img src='https://picsum.photos/400/200' />
  //       </div>
  //     </Slider>
  //   </div>
  // );

  // Solution is to use a custom component to wrap the 3rd party lib that use client component only.
  return (
    <>
      <h1>
        {/*Server Route {result} {clientResult}*/}
        Server Route {result}
      </h1>
      <ImageSlider />
    </>
  );
}

import React from 'react';
import Marquee, { Scale } from 'react-marquee-slider';
import { influencerstop } from '../../../constants';
import SliderCard from './SliderCard';
export const Slider = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '250px',
        background: 'transparent',
      }}
    >
      <Marquee
        direction='rtl'
        velocity={20}
        scatterRandomly={false}
        resetAfterTries={100}
        onInit={() => {
          console.log('init');
        }}
        onFinish={() => {
          console.log('finish');
        }}
      >
        {influencerstop.map((item: any, index: number) => (
          <Scale scale={1} key={`marquee-${index}`}>
            <SliderCard desc={item.decs} img={item.img} name={item.name} />
          </Scale>
        ))}
      </Marquee>
    </div>
  );
};

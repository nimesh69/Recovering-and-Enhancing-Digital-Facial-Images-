import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import enhance from '../images/enhanced.png';
import blur from '../images/blur.png';
export function ImageComparison() {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={enhance}
            alt="Before skincare routine"
            className="w-full"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={blur}
            alt="After skincare routine"
            className="w-full"
          />
        }
        position={50}
        style={{
          height: '512px',
        //   width: '512px',
        }}
      />
    </div>
  );
}
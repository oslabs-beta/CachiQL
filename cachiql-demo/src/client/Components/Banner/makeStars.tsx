import React from 'react';
import Star from './Star';

export const makeStars = () => {
  let i = 0;
  const starArr = new Array(500);
  while (i < starArr.length) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    const duration = Math.random() * 10;
    const size = Math.random() * 2;
    starArr[i] = <Star {...{ x, y, duration, size }} key={`star-${i}`} />;
    i += 1;
  }
  return starArr;
};

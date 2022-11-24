import React, { useState, useEffect } from 'react';
import './Banner.scss';

const Banner = () => {
  const [count, setCount] = useState(1);
  const [transition, setTransition] = useState('0.2s');

  const newArray = arr => {
    const modifiedArray = [arr[arr.length - 1], ...arr, arr[0]];
    return modifiedArray;
  };

  const prevBtn = () => {
    const newCurr = count - 1;
    setCount(newCurr);

    if (newCurr === 0) {
      slideMov(bannerList.length);
    }

    setTransition('0.2s');
  };

  const nextBtn = () => {
    const newCurr = count + 1;
    setCount(newCurr);

    if (newCurr === bannerList.length + 1) {
      slideMov(1);
    }

    setTransition('0.2s');
  };

  const slideMov = i => {
    setTimeout(() => {
      setTransition('');
      setCount(i);
    }, 500);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      const newCurr = count + 1;
      setCount(newCurr);

      if (newCurr === bannerList.length + 1) {
        slideMov(1);
      }

      setTransition('0.2s');
    }, 3000);

    return () => clearTimeout(interval);
  }, [count]);

  return (
    <div className="banner-slider">
      <div
        className="slider-box"
        style={{
          transform: `translateX(-${count}00%)`,
          transition: `${transition}`,
        }}
      >
        {newArray(bannerList).map(img => {
          return (
            <div className="slide" key={img.id}>
              <img src={img.src} alt="샘플 배너" />
            </div>
          );
        })}
      </div>
      <div className="slide-btn">
        <button type="button" className="btn-prev" onClick={prevBtn}>
          prev
        </button>
        <button type="button" className="btn-next" onClick={nextBtn}>
          next
        </button>
      </div>
      {/* <div className="slide-pagination">
        <span className="count">{count}</span>/<span>{bannerList.length}</span>
      </div> */}
    </div>
  );
};

export default Banner;

const bannerList = [
  { id: 1, src: '/images/visual_1.jpg' },
  { id: 2, src: '/images/visual_2.jpg' },
  { id: 3, src: '/images/visual_3.jpg' },
  { id: 4, src: '/images/visual_4.jpg' },
];

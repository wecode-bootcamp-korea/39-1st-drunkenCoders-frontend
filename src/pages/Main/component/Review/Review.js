import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Review.scss';

const Review = () => {
  const [reviewItem, setReviewItem] = useState([]);

  useEffect(() => {
    fetch('/data/reviewItem.json')
      .then(response => response.json())
      .then(result => setReviewItem(result));
  }, []);

  return (
    <div className="review-slider">
      <div className="review-list col3">
        {reviewItem.map(item => {
          return (
            <Link to="/" className="review-item" key={item.id}>
              <div className="thumb">
                <img src={item.src} alt="샘플" />
              </div>
              <div className="rating-bg">
                <div className="rating" style={{ width: `${item.rating}%` }} />
              </div>
              <p className="txt">{item.txt}</p>
              <p className="name">{item.name}</p>
            </Link>
          );
        })}
      </div>
      {/* <div className="slide-btn">
        <button type="button" className="btn-prev">
          prev
        </button>
        <button type="button" className="btn-next">
          next
        </button>
      </div> */}
    </div>
  );
};

export default Review;

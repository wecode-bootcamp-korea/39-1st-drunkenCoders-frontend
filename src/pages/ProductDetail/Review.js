import React, { useState, useEffect } from 'react';

const Review = ({ productData }) => {
  const [currReviewId, setCurrReviewId] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.122:3000/comments/product?productId=1`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setCurrReviewId(data.data));
  }, []);

  return (
    <div className="Review">
      {currReviewId.map(item => (
        <div className="Review-one-wrapper" key={item.id}>
          <div className="Review-header">
            <div className="Review-header-content">
              <div className="Review-name">{item.nick_name}</div>
              <div className="Review-header-right">
                <div className="Review-text">{item.title}</div>
                <div className="rating-bg">
                  <div className="rating" style={{ width: item.rating }} />
                </div>
                <div className="time-stamp">{item.date}</div>
              </div>
            </div>
          </div>
          <div className="Review-main">
            <div className="Review-content">
              <span className="main-text">{item.text1}</span>
              <br />
              <span>{item.text2}</span>
            </div>
            <div className="Review-img">
              <img src={item.image_url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;

import React from 'react';
// import { useSearchParams } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({ data }) => {
  return (
    <>
      {/* 제품 전체 박스 */}
      {data.map(item => (
        <div className="product-info-box" key={item.id}>
          <div className="product-info">
            <a href="" className="product-link">
              <div className="image-wrapper">
                <span className="">
                  <span />
                  <img
                    className="product-img"
                    src={item.image_url}
                    alt="drink"
                  />
                </span>
              </div>

              {/* 제품 설명 */}

              <div className="product-content-box">
                <div className="product-wrapper">
                  <div className="product-name">{item.name}</div>
                </div>
                {/* 가격 정보 */}
                <div className="product-wrapper">
                  <div className="product-price-wrapper">
                    <p className="origin-price" />
                    <div className="discount-price-wrapper">
                      <p className="discount-price">
                        {item.price}
                        <span>원</span>
                      </p>
                    </div>
                  </div>
                  {/* 별점 & 리뷰 */}
                  <div className="score-box">
                    <img
                      className="star-img"
                      src="/images/black-star.png"
                      alt="star"
                    />
                    <p className="rated-score">{item.ratings}</p>
                    <div className="column-line" />
                    <p className="review-number">{item.reviews}</p>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-tag-box">
                    <div className="product-tag">{item.tags[0].tags}</div>
                    <div className="product-tag">{item.tags[1].tags}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;

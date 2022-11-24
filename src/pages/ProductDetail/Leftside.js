import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTab from './ProductTab';
import Review from './Review';
import './Leftside.scss';

const Leftside = ({ productData }) => {
  const [slideClick, setSlideClick] = useState(false);

  const handleToggle = () => {
    setSlideClick(!slideClick);
  };

  return (
    <div className="left-side">
      <div className="detail-box">
        <div className="detail-img">
          <img className="detailImg" src={productData.image_url} />
        </div>
        <div className="detail-string">
          <div className="sector-first">
            <div className="detail-mainString">{productData.product_name}</div>
          </div>
          <div className="sector-second">
            <div className="detail-secondString">{productData.description}</div>
            <div className="detail-hashtag">{productData.tags[0].tags}</div>
            <div className="detail-hashtag">{productData.tags[1].tags}</div>
            <div className="rating">
              <div className="rating-star">
                <div className="rating-bg">
                  <div
                    className="rating"
                    style={{ width: `${productData.ratings}%` }}
                  />
                </div>
              </div>
              <span className="review">{productData.reviews}</span>
            </div>
            <div className="sector-third">
              <div className="flex">
                <label className="third-string">주종:</label>
                <span className="third-string">{productData.name}</span>
              </div>
              <div className="flex">
                <label className="third-string">도수:</label>
                <span className="third-string">{productData.alchol}</span>
              </div>
              <div className="flex">
                <label className="third-string">용량:</label>
                <span className="third-string">{productData.capacity_ml}</span>
              </div>
              <div className="flex">
                <div className="delivery_string">
                  <label>배송기간:</label>
                  <span>2일 이내 배송</span>
                </div>
              </div>
            </div>
            <div className="sector-fourth">
              <div className="flex-price">
                <label>판매가격:</label>
              </div>
              <div className="flex-discount">
                <div className="discountBox">
                  <span>{productData.price?.toLocaleString()}원</span>
                </div>
              </div>
              <div className="fourth-div">
                <div className="flex">
                  <label className="fourth-string">유통기한:</label>
                  <span className="fourth-string">병입일로 부터 3개월</span>
                </div>
              </div>
              <div className="fourth-div">
                <div className="flex">
                  <label className="fourth-string">보관방법:</label>
                  <span className="fourth-string"> 냉장 보관</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={!slideClick ? 'image-stack' : 'image-stack active'}>
        <img className="imgStack" src={productData.detail_image} />
        <div className="foled-button-down">
          <button className="fold-btn" onClick={handleToggle}>
            {!slideClick ? '상품설명 펼치기' : '상품설명 접기'}
          </button>
        </div>
      </div>

      <ProductTab />
      <Review />
    </div>
  );
};

export default Leftside;

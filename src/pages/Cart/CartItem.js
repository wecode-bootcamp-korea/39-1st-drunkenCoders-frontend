import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ itemInfo, cartItemList, setCartItemList, deleteItem }) => {
  const { product_id, name, price, image_url, sub, id, quantity } = itemInfo;

  const totalPrice = price * quantity;

  // 수량 제어 버튼
  const plusAmount = () => {
    // 처음 fetch 받아온 리스트에서 수량을 수정
    const changedCartList = cartItemList.map(item => {
      if (product_id === item.product_id) {
        item.quantity = quantity + 1;
      }
      return item;
    });
    setCartItemList(changedCartList);
  };

  const subAmount = () => {
    // 처음 fetch 받아온 리스트에서 수량을 수정
    const changedCartList = cartItemList.map(item => {
      if (product_id === item.product_id && item.quantity > 1) {
        item.quantity = quantity - 1;
      } else if (product_id === item.product_id) {
        item.quantity = 1;
      }

      return item;
    });
    setCartItemList(changedCartList);
  };

  return (
    <div className="cart-delivery-info">
      <div className="cart-info">
        <div className="cart-header">
          <div className="header-left"></div>
          <div className="header-right">무료배송!</div>
        </div>
        <div className="solid"></div>
        <div className="content">
          <div className="cart-product-wrapper">
            <div className="check-box">
              <button type="button" className="custom-checkbox">
                <input type="checkbox" />
              </button>
            </div>
            <div className="product-info-top">
              <div className="thumbnail">
                <img className="thumbnail-img" src={image_url} />
              </div>
              <div className="product-name">{name}</div>
              <button
                onClick={deleteItem}
                type="button"
                className="product-remove-btn"
              >
                <img
                  className="remove-btn"
                  src={'./images/kunwooSample/tooltip_close.png'}
                />
              </button>
              <div className="select-wrapper">{sub}</div>
            </div>
            <div className="product-info-bottom">
              <div className="amount-control">
                <div className="common-decrease">
                  <button type="button">
                    <img
                      onClick={subAmount}
                      className="minus"
                      src="./images/kunwooSample/minus.png"
                    />
                  </button>
                </div>
                <div className="amount">
                  <span className="amount-number">{quantity}</span>
                </div>
                <div className="common-increase">
                  <button type="button">
                    <img
                      onClick={plusAmount}
                      className="plus"
                      src="./images/kunwooSample/plus.png"
                    />
                  </button>
                </div>
              </div>
              <div className="price">
                <div className="discount">
                  <span>{price?.toLocaleString()}원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="solid"></div>
        </div>
      </div>
      <div className="footer">
        <div className="product-price">
          <div className="price-title">상품금액</div>
          <div className="price">{totalPrice?.toLocaleString()}원</div>
        </div>
        <div className="discount-price">
          <div className="price-title">즉시할인금액</div>
          <div className="price">0원</div>
        </div>
        <div className="delivery-price">
          <div className="price-title">배송비</div>
          <div className="price">0원</div>
        </div>
        <div className="total-price">
          <div className="total-title">총 금액</div>
          <div className="totalPrice">{totalPrice?.toLocaleString()}원</div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;

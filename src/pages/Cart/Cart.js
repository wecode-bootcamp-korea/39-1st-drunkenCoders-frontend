import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './Cart.scss';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { productId } = useParams();
  const [cartItemList, setCartItemList] = useState([]);

  // const setPaymentItem = () => {
  //   const paymentItem = cartItemList.filter(obj => {
  //     return obj.isCheck === true;
  //   });
  //   localStorage.setItem('orderList', JSON.stringify(paymentItem));
  //   return paymentItem;
  // };
  useEffect(() => {
    // mock data fetch
    fetch(`http://10.58.52.122:3000/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        const cartList = data.data.map(item => {
          return { ...item, isCheck: true };
        });
        setCartItemList(cartList);
      });
  }, []);

  // 총 주문 수량 계산
  const calTotalAmount = arr => {
    if (arr) {
      let totalAmount = 0;
      arr.forEach(obj => {
        if (obj.isCheck) {
          totalAmount += obj.quantity;
        }
      });
      return totalAmount;
    }
  };

  // 총 주문 가격 계산
  const calTotalPrice = arr => {
    if (arr) {
      let priceTotal = 0;
      arr.forEach(obj => {
        if (obj.isCheck) {
          priceTotal += obj.quantity * obj.price;
        }
      });
      return priceTotal;
    }
  };

  const totalAmount = calTotalAmount(cartItemList);
  const totalPrice = calTotalPrice(cartItemList);

  return (
    <div className="container">
      <div className="top-item-wrapper"></div>
      <div className="whole-wrapper">
        <div className="leftSide">
          {cartItemList.map((obj, index) => (
            <CartItem
              itemInfo={obj}
              key={index}
              setCartItemList={setCartItemList}
              cartItemList={cartItemList}
              index={index}
              deleteItem={function deleteComment() {
                //   const deletedItem = [...cartItemList];
                //   deletedItem.splice(index, 1);
                //   setCartItemList(deletedItem);
                // }}
                //백앤드 연결시 아래코드로 대체
                fetch(`http://10.58.52.128:3000/carts`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    authorization: localStorage.getItem('TOKEN'),
                  },
                  body: JSON.stringify({
                    id: [obj.id],
                  }),
                })
                  .then(response => {
                    if (response.status !== 204) {
                      throw new Error('error');
                    } else {
                      //fetch 성공시
                      const deletedItem = [...cartItemList];
                      deletedItem.splice(index, 1);
                      setCartItemList(deletedItem);
                    }
                  })
                  .catch(error => {
                    alert('장바구니 삭제에 실패하였습니다.');
                  });
              }}
            />
          ))}
        </div>
        <div className="rightSide">
          <div className="bill">
            <div className="title">계산서</div>
            <div className="solid-top" />
            <div className="content">
              <div className="row">
                <div>총 상품금액</div>
                <div className="price">{totalPrice?.toLocaleString()}원</div>
              </div>
              <div className="row">
                <div>총 즉시할인금액</div>
                <div className="price">0원</div>
              </div>
              <div className="row">
                <div>총 배송비</div>
                <div className="price">0원</div>
              </div>
              <div className="info">
                <div className="info-icon">
                  <img className="infoIcon" />
                </div>
                <div className="info-text">
                  제주도 및 도서산간의 경우 배송비가 추가될 수 있습니다
                </div>
              </div>
            </div>
            <div className="solid-bottom"></div>
            <div className="footer">
              <div>총 결제 예상 금액</div>
              <span className="Fprice">{totalPrice?.toLocaleString()}원</span>
            </div>
          </div>
          <div className="action-button-wrapper">
            <div className="btn-left">
              <div open className="open-btn">
                여러 명도 가능해요
                <div className="close-btn">
                  <img
                    className="closeBtn"
                    src="./images/kunwooSample/tooltip_close.png"
                  />
                </div>
              </div>
              <button className="present-btn">
                <img
                  className="icon-img"
                  src="./images/kunwooSample/icon_gift_box.png"
                />
                선물하기
              </button>
            </div>
            <button className="purchase-btn">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

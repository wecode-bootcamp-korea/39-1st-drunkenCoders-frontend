import React from 'react';
import { Link } from 'react-router-dom';
import './LinkList.scss';

const LinkList = () => {
  return (
    <div className="main-link-area">
      <Link to="/productList" className="icon1">
        <span>탁주</span>
      </Link>
      <Link to="/productList" className="icon2">
        <span>약·청주</span>
      </Link>
      <Link to="/productList" className="icon3">
        <span>과실주</span>
      </Link>
      <Link to="/productList" className="icon4">
        <span>증류주</span>
      </Link>
      <Link to="/productList" className="icon5">
        <span>선물세트</span>
      </Link>
      <Link to="/productList" className="icon6">
        <span>ONLY 술담화</span>
      </Link>
      <Link to="/productList" className="icon7">
        <span>이벤트</span>
      </Link>
      <Link to="/productList" className="icon8">
        <span>기업구매</span>
      </Link>
    </div>
  );
};

export default LinkList;

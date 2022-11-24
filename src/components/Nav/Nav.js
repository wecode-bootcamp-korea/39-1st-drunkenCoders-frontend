import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/Nav/mainLogo.png';
import searchIcon from './../../assets/Nav/searchIcon.svg';

import './Nav.scss';

const Nav = () => {
  const isLoginCheck = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <div className="header">
      <div className="inner">
        <h1>
          <Link to="/">
            <img src={logo} alt="술담화 로고" />
          </Link>
        </h1>
        <div className="link-area">
          <Link to="/">구독서비스</Link>
          <Link to="/" className="active">
            담화마켓(스토어)
          </Link>
        </div>
        <Link to="/search" className="search-area">
          <img src={searchIcon} alt="검색 아이콘" />
          <span className="txt">무엇을 찾고 계신가요?</span>
        </Link>
        <div className="info-area">
          {isLoginCheck ? (
            <>
              <Link to="/mypage" className="arrow">
                빛상준님
              </Link>
              <Link to="/" className="gray" onClick={handleLogout}>
                로그아웃
              </Link>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
          <Link to="/cart" className="cart">
            장바구니
            {/* <span className="num">1</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

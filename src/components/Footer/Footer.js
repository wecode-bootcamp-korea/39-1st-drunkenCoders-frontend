import React from 'react';
import { Link } from 'react-router-dom';
import Sns from './component/Sns';
import './Footer.scss';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="footer">
      <div className="inner">
        <div className="company-info">
          <div className="box">
            <p className="tit">담화컴퍼니 주식회사</p>
            <ul className="list">
              <li>고객센터 : 070-5014-1282</li>
              <li>평일 10:00 ~ 18:00, 주말 휴무</li>
            </ul>
          </div>
          <Sns />
        </div>
        <ul className="link-area">
          <li>
            <Link to="/">이용약관</Link>
          </li>
          <li>
            <Link to="/">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="/">입점문의</Link>
          </li>
          <li>
            <Link to="/">기업 구매</Link>
          </li>
        </ul>
        <div className="info-area">
          <ul>
            <li>대표 : 이재욱</li>
            <li>
              사업자등록번호 : 620-81-58299 <a href="">사업자확인</a>
            </li>
            <li>통신판매 신고번호 : 2021-서울서초-2084</li>
          </ul>
          <ul>
            <li>
              주소 : 서울특별시 서초구 강남대로 527, 10층(브랜드칸타워, 술담화)
            </li>
            <li>정보보호 책임자 : 박준형</li>
            <li>대표 전화 : 070-5014-1282</li>
            <li>이메일 : info@sooldamhwa.com</li>
          </ul>
        </div>
        <p className="sub-txt">
          술담화는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한
          상품정보 및 거래에 대해 술담화는 책임을 지지 않습니다.
          <br />
          고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
          NICE구매안전 (에스크로) 서비스를 이용하실 수 있습니다.
        </p>
        <a
          className="service-link"
          href="https://npg.nicepay.co.kr/issue/issueEscrow.do?Mid=IMPsoold1m&amp;CoNo=6208158299"
        >
          서비스가입사실 확인
        </a>
      </div>
      <button type="button" className="btn-top" onClick={scrollTop}>
        <span>TOP</span>
      </button>
    </div>
  );
};

export default Footer;

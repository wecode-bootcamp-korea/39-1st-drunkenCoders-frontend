import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconKakao from './../../assets/Login/icon_kakao.png';
import iconNaver from './../../assets/Login/icon_naver.png';
import iconGoogle from './../../assets/Login/icon_google.png';
import './Login.scss';

const PW_REG_EXP =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPassword: '',
  });

  const getUserInfo = e => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = e => {
    e.preventDefault();

    fetch('http://10.58.52.65:3000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPassword,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/main');
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
        }
      });
  };

  const { userId, userPassword } = userInfo;

  const isInputValid = userId.includes('@') && PW_REG_EXP.test(userPassword);

  return (
    <div className="login">
      <h4 className="title-login">로그인</h4>

      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="form-wrap">
            <label htmlFor="input-email">이메일</label>
            <input
              onChange={getUserInfo}
              id="input-email"
              name="userId"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          <div className="form-wrap">
            <label htmlFor="input-password">비밀번호</label>
            <input
              onChange={getUserInfo}
              id="input-password"
              name="userPassword"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <button className="login-button" disabled={!isInputValid}>
            로그인
          </button>
        </form>

        <div className="signup">
          <Link to="/register">회원가입(최대 4000p적립)</Link>
        </div>

        <div className="social-button">
          <button className="loginButton-kakao" type="submit">
            <img src={iconKakao} />
            카카오 로그인
          </button>
          <button className="loginButton-naver" type="submit">
            <img src={iconNaver} />
            네이버 로그인
          </button>
          <button className="loginButton-google" type="submit">
            <img src={iconGoogle} />
            구글 로그인
          </button>
        </div>

        <div className="link-find">
          <Link to="/login">아이디 찾기</Link>
        </div>
        <div className="link-find">
          <Link to="/register">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import iconsignup from '../../assets/Register/signup.png';
import './Register.scss';

const reg =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
const rules = {
  useremail: email => email.includes('@' && '.'),
  userpassword: password => password.length >= 8 && reg.test(password),
  userpassword2: (password2, password) => password2 === password,
};

const Register = () => {
  // 이메일, 비밀번호, 비밀번호 확인, 닉네임
  const [userInfo, setUserInfo] = useState({
    useremail: '',
    userpassword: '',
    userpassword2: '',
    usernickname: '',
  });

  const [isDuplicate, setIsDuplicate] = useState(true);

  const [isValid, setIsValid] = useState({
    useremail: true,
    userpassword: true,
    userpassword2: true,
    usernickname: true,
  });

  const navigate = useNavigate();

  const getUserInfo = e => {
    const { name, value } = e.target;
    // 1. spread operator로 기존 내용을 복사
    // 2. 계산된 속성명으로 수정되는 값 업데이트
    setUserInfo({ ...userInfo, [name]: value });
    setIsValid({
      ...isValid,
      [name]: rules[name](value, userInfo.userpassword),
    });
  };

  // // 이메일 검사 : @가 포함될것.
  const idValueChecked = userInfo.useremail.includes('@');
  // // 비밀번호 검사 : 8글자 이상일 것.
  const pwValueChecked =
    userInfo.userpassword.length >= 8 && reg.test(userInfo.userpassword);
  const pwRepeatChecked = userInfo.userpassword === userInfo.userpassword2;

  //버튼 활성화하기
  // 검사한 모든 로직의 유효성 검사가 true가 될때 getIsActive함수가 작동한다. 버튼 클릭 이벤트가 발생할때 넣어줄 함수.
  const isButtonActive =
    idValueChecked && pwValueChecked && pwRepeatChecked && !isDuplicate;

  // 유효성 검사 중 하나라도 만족하지못할때 즉, 버튼이 비활성화 될 때 버튼을 클릭하면 아래와 같은 경고창이 뜬다.
  const handleSignup = () => {
    if (!isButtonActive) {
      alert('please fill in the blanks');
    } else {
      fetch('API', {
        method: 'POST',
        body: JSON.stringify({
          Email: userInfo.usernickname,
          password: userInfo.userpassword,
          password2: userInfo.userpassword2,
          nickname: userInfo.usernickname,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
            navigate('/');
          } else {
            alert('입력창을 다시 확인해주세요!');
          }
        });
    }
  };

  const checkIsDuplicate = () => {
    fetch('http://10.58.52.141:3000/users/checknick', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        nickname: userInfo.usernickname,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          console.log('1111!');
        } else {
          console.log('이미 존재하는 닉네임입니다!');
        }
      });
  };

  return (
    <div className="all-container">
      <div className="container">
        <h4 className="signup">회원가입</h4>
        <img className="iconsignup" src={iconsignup} alt="회원가입 아이콘" />

        <div className="signup-form">
          <div className="form-wrap">
            <label htmlFor="email">이메일</label>
            <input
              onChange={getUserInfo}
              className={isValid.useremail ? '' : 'error'}
              name="useremail"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <p className="alert-txt">올바른 이메일을 입력해주세요</p>
          </div>

          <div className="form-wrap">
            <label htmlFor="pw">비밀번호</label>
            <input
              onChange={getUserInfo}
              className={isValid.userpassword ? '' : 'error'}
              name="userpassword"
              type="password"
              placeholder="영문, 숫자, 특수문자를 포함해서 8자 이상으로 입력해주세요"
            />
            <p className="alert-txt">비밀번호를 입력해주세요</p>
          </div>

          <div className="form-wrap">
            <label htmlFor="pw2">비밀번호 확인</label>
            <input
              onChange={getUserInfo}
              className={isValid.userpassword2 ? '' : 'error'}
              name="userpassword2"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <p className="alert-txt">비밀번호가 일치하지 않습니다.</p>
          </div>
          <div className="form-wrap">
            <div className="nickname-repeat">
              <label htmlFor="nickname">닉네임</label>
              <input
                onChange={getUserInfo}
                className={'nickname' && 'error'}
                name="usernickname"
                type="text"
                placeholder="닉네임"
              />
              <button className="check-repeat" onClick={checkIsDuplicate}>
                중복확인
              </button>
              <p className="alert-txt">닉네임이 중복되었습니다.</p>
            </div>

            <p className="alert-name">
              닉네임을 설정하지 않을 시,
              <br /> 성함이 가운데 부분이 * 처리된 상태로 노출됩니다. <br />
              <span> 예시 홍*동 </span>
            </p>

            <button className="check-adult">휴대폰으로 성인인증하기</button>

            <div className="form-wrap">
              <label>술담화를 어떻게 알게 되셨나요?</label>
            </div>
          </div>

          <select>
            <option disabled selected>
              선택해주세요
            </option>
            <option>지인소개</option>
            <option>인스타그램</option>
            <option>페이스북</option>
            <option>유투브</option>
            <option>검색</option>
            <option>블로그</option>
            <option>기사/언론</option>
            <option>기타</option>
          </select>

          <div className="agreement">
            <span className="blue">이용약관</span> 및
            <span className="blue"> 개인정보처리방침</span> 내용을 <br />
            확인하였으며, 이에 동의합니다.
          </div>

          <div className="agreement-checkbox">
            <div className="agreement">
              <span className="blue">이용약관</span> 동의
              <span className="red"> [필수] </span>
              <input type="checkbox" value="coding" checked />
            </div>
            <div className="agreement">
              <span className="blue">개인정보처리방침</span> 동의
              <span className="red"> [필수] </span>
              <input type="checkbox" value="music" checked />
            </div>
          </div>

          <button
            className={`submit-btn${isButtonActive ? 'registerAction' : ''}`}
            onClick={handleSignup}
          >
            가입 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

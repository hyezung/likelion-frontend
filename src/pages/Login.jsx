import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button';


const buttonText = "로그인"

const Login = (props) => {
  
  return (
    <div className="login-main">
      <p className="userlogin">사용자 로그인</p>
      <form method="post" action="서버의url" id="login-form">
        <div className="form-group">
          <p><label htmlFor='input_id'>이메일주소</label></p>
          <input type="text" name="userName"/>
        </div>
        <div className="form-group">
          <p><label htmlFor='input_pw'>비밀번호</label></p>
          <input type="password" name="userPassword" />
        </div>
        <div className="checkform">
            <label  htmlFor="remember-check">
              <input type="checkbox" id="remember-check"/>
              <span>아이디 저장하기</span>
            </label>
            </div>
    
            <Button text={buttonText} />
            
           <Link to="/join" style={{ color: "gray", textDecoration: "none", fontSize: "14px" }}>
                {""}
                이메일로 회원가입 
            </Link> 
          
      </form>
      <div className="loginsub">
        <div className="iconimg">
        <img src="/kakaotalk.png" alt="kakako" />
        </div>
        <div className="iconimg">
        <img src="/naver.png" alt="naver" />
        </div>
        <div className="iconimg">
        <img src="/google-icon.png" alt="google" />
        </div>
      </div>
    </div>

  );
};

export default Login;
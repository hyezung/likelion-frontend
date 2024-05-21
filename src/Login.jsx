import React from 'react';



/* styled-components를 사용하여 버튼 스타일링하기
const StyledButton = styled.button`
  background: var(--Main, #85D6D1);
  border: none;
  border-radius: 7px;
  width: 378px;
  height: 52px;
  padding: 17px 0px;
  display: flex;
 justify-content: center;
 align-items: center;
  margin: 15px 10px;
`; */

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
              <span id="checktext">
                아이디 기억하기</span>
            </label>
            </div>
      </form>
    </div>

  );
};

export default Login;
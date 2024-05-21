import React from 'react'


const Signup = (props) => {

    return(
      <div id="container">
        <div className="signup-main">
      <form method="post" action="서버의url" className="signup-form">
        <p className="main-text">회원가입</p>
        <div className="form-group">
          <p><label htmlFor='input_id'>이름</label></p>
          <input type="text" name="userName"/>
        </div>
        <div className="form-group">
          <p><label htmlFor='input_em'>이메일</label></p>
            <div className="email-input">
              <input id="emailform" type="text" name="userEmail"/>
              <button type="submit">인증하기</button>
              </div>
          </div>

        <div className="form-group">
          <p><label htmlFor='input_pw'>비밀번호</label></p>
          <input type="password" name="userName"/> 
        </div>
        <div className="form-group">
          <p><label htmlFor='input_pw'>비밀번호 재입력</label></p>
          <input type="password" name="userName"/> 
        </div>
    </form>
    </div>
    </div>
   );
};

export default Signup;
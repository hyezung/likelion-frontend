import React from 'react'

const Sub = (props) => {
    return(
      <div className="sublogin">
        <p className="form-text">
            이메일로 회원가입 
           </p>
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

export default Sub;

const Login = (props) => {
    return(
     <div className="App">
        <div className="header">
        <div className="header-left">
          <img src="/logo.png" alt="App Logo" />
        </div>
        <div className="header-list">
        <div id="header-tab">
            <span className="list1">뉴스</span>
            <span className="list1">교과서 </span>
          </div>
        </div>
        <div className="header-search">
          <div className="search-input">
          Search...
          </div>
          <div className="search-icon">
          <img src="/magnify.png" alt="Search Icon" />
          </div>
        </div>
        <div><span id="list2">로그인</span></div>
     </div>

        <div className="header">
        <div className="header-left">
          <img src="/logo.png" alt="App Logo" />
        </div>
        <div className="header-list">
          <div id="header-tab">
            <span className="list1">뉴스</span>
            <span className="list1">교과서 </span>
          </div>
        </div>
        <div className="header-search">
          <div className="search-input">
            Search...
          </div>
          <div className="search-icon">
          <img src="/magnify.png" alt="Search Icon" />
          </div>
        </div>
        <div className="logintab">
          <div>{props.name}</div>
          <img src="user-image.jpg" alt="userlogo" />
        </div>
       </div>

      <div className="footer">
        <p className="f-menu">이용약관   |   개인정보처리방침   |   고객센터   |   사업자 정보확인</p>
      </div>
    </div>
    );
};

export default Login;

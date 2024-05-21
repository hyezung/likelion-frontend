
const Header = (props) => {
    return(
     <div className="App">
        <div className="header">
        <div className="header-left">
          <img src="/applogo.png" alt="앱 로고" />
        </div>
        <div className="header-list">
        <div id="header-tab">
            <span className="list1">뉴스</span>
            <span className="list1">교과서 </span>
          </div>
        </div>
        <div className="header-search">
          <input type="text" placeholder="search..." className="search-input"/>
          <div className="search-icon">
          <img src="/magnify.png" alt="검색 아이콘" />
          </div>
        </div>
        <div><span id="list2">로그인</span></div>
     </div>

    </div>
    );
};

export default Header;

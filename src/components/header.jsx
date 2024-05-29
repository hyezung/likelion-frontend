import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
    return(
     <div className="App">
        <div className="header">
        <div className="header-left">
          <img src="/applogo.png" alt="App Logo" />
        </div>
        <div className="header-list">
        <div id="header-tab">
            <Link to="/News" style={{textDecoration: "none"}}><span className="list1">뉴스</span></Link>
            <Link to="/Textbook" style={{textDecoration: "none"}}><span className="list1">교과서</span></Link>
          </div>
        </div>
        <div className="header-search">
        <input type="text" placeholder="search..." className="search-input"/>
          <div className="search-icon">
          <img src="/magnify.png" alt="Search Icon" />
          </div>
        </div>
        <Link to="/login" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}><div>로그인</div></Link>
     </div>

    </div>
    );
};

export default Header;

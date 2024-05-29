import React from "react";
import './NewsItem.css';

const NewsItem = (props) => {
    return (
      <div className="news-item">
        <div className="news-content">
          <h3>{props.channel}</h3>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <div className="newsImg">
          <img src={props.imageUrl} alt="뉴스 이미지" />
        </div>
      </div>
  
  
  
    );
  }
  
  export default NewsItem;
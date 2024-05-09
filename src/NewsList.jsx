import React from 'react';

const NewsList = (props) => {
  return (
    <div className="news-item">
      <div className="textbook-content">
        <h3>{props.channel}</h3>
        <h2>{props.title}</h2>
        <h4>{props.content}</h4>
      </div>
      <div className="newsImg">
        <img src={props.imageUrl} alt="뉴스 이미지" />
      </div>
    </div>



  );
}

export default NewsList;
import React from "react";
import './BookItem.css';

const BookItem = (props) => {
    return (
      <div className="textbook-item">
        <div className="textbook-content">
          <p>{props.title}</p>
          <p>{props.content}</p>
        </div>
        <div className="textbook-Img"style={{ backgroundColor: props.backgroundColor }}>
          <img src={props.imageUrl} alt="교과서 이미지" />
        </div>
      </div>
  
  
  
    );
  }
  
  export default BookItem;
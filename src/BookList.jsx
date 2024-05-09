import React from 'react';

const BookList = (props) => {
  return (
    <div className="textbook-item">
        <h2>{props.title2}</h2>
        <div className='img2'>
          {props.svg}
        </div>
    </div>
  );
};

export default BookList;
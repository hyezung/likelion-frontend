import React from 'react';


const TitleTab = (props) => {
    return (
        <div className="titlename">
        <><h2>{props.maintitle}</h2>
        <h3>{props.subtitle}</h3></>
        </div>
    );
    };


  
export default TitleTab;
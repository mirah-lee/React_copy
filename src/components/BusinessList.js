import React from "react";
import BusinessItem from "./BusinessItem";

function BusinessList(props) {
  return (
    
      <ul>
        {BusinessItem.map((item) => {
            const { id, imgUrl, title, description } = item;
            return (
                <li key={id}>
                    <div className="gb_imgbox">
                        <img src={imgUrl} alt='gb' />
                    </div>
                    <div className="gb_textbox">
                        <h5>{title}</h5>
                        <h6>{description}</h6>
                    </div>
                </li>
            );
        })}
      </ul>
      
  );
}

export default BusinessList;

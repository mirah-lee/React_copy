import React from "react";
import OurProductItem from "./OurProductItem";

function OurProductList(props) {
    return(
        <div class="op">
            {OurProductItem.map((item) => {
                const { id, name, title } = item;
                return (
                  <div className={name} key={id}>
                    <div className="op-title">
                      <h5>{title}</h5>
                      <div className="op-btn">view</div>
                    </div>
                  </div>
                );
              })}
        </div>
    )
}
export default OurProductList;

import React from 'react';
import InsideItem from './InsideItem';

function InsideList(props) {
    return (
        <ul>
            {InsideItem.map((item)=>{
                const { id, imgUrl, title, description } = item;
                return (
                    <li key={id}>
                        <img src={imgUrl} alt="os" />
                        <h5>{title}</h5>
                        <h6>{description}</h6>
                    </li>
                )
            })}
        </ul>
    );
}

export default InsideList;
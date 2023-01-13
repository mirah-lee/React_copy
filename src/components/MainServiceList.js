import React from 'react';
import MainServiceItem from './MainServiceItem';

function MainServiceList(props) {
    return (
        <ul>
            {MainServiceItem.map((item)=>{
                const { id, imgUrl, title, description } = item;
                return (
                    <li key={id}>
                        <a href="#">
                            <div className="ms_img">
                                <img src={imgUrl} alt="ms" />
                            </div>
                            <div className="ms_textbox">
                                <h5>{title}</h5>
                                <h6>{description}</h6>
                                <div className="ms_btn"> view detail</div>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    );
}

export default MainServiceList;
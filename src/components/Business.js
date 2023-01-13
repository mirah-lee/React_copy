import React from 'react';
import BusinessList from './BusinessList';

function Business(props) {
    const path = process.env.PUBLIC_URL;
    
    return (
        <>
          <section class="business">
                <div class="gb">
                    <div class="gb_title">
                        <h4>global business</h4>
                        <p>정직과 신뢰, 디자인으로 함께 하는 파이브 스톤</p>
                    </div>
                    <BusinessList />
                    {/* <ul>
                        <li>
                            <div class="gb_imgbox">
                                <img src={path + "./images/m-mb01.jpg"} alt="gb" />
                            </div>
                            <div class="gb_textbox">
                                <h5>사업분야01</h5>
                                <h6>고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다.</h6>
                            </div>
                        </li>
                        <li>
                            <div class="gb_imgbox">
                                <img src={path + "./images/m-mb02.jpg"} alt="gb" />
                            </div>
                            <div class="gb_textbox">
                                <h5>사업분야02</h5>
                                <h6>고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다.</h6>
                            </div>
                        </li>
                        <li>
                            <div class="gb_imgbox">
                                <img src={path + "./images/m-mb03.jpg"} alt="gb" />
                            </div>
                            <div class="gb_textbox">
                                <h5>사업분야03</h5>
                                <h6>고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다.</h6>
                            </div>
                        </li>
                        <li>
                            <div class="gb_imgbox">
                                <img src={path + "./images/m-mb04.jpg"} alt="gb" />
                            </div>
                            <div class="gb_textbox">
                                <h5>사업분야04</h5>
                                <h6>고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다.</h6>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </section>  
        </>
    );
}

export default Business;
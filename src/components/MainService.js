import React from 'react';
import MainServiceList from './MainServiceList';

function MainService(props) {
    const path = process.env.PUBLIC_URL;

    return (
        <>
           <section className="main_service">
                <h4>MAIN SERVICE</h4>
                <p>정직과 신뢰, 디자인으로 함께 하는 파이브 스톤</p>
                <div className="ms_imgbox">
                    <MainServiceList />
                </div>
            </section> 
        </>
    );
}

export default MainService;
                    {/* <ul>
                        <li>
                            <a href="#">
                                <div className="ms_img">
                                    <img src={path+"./images/m-ms01.jpg"} alt="ms" />
                                </div>
                                <div className="ms_textbox">
                                    <h5>회사개요</h5>
                                    <h6>고객과 함께 꾸준히 성장한 당사의 회사개요 및 비전, 연혁 등의 내용을 간략히 소개합니다.</h6>
                                    <div className="ms_btn"> view detail</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="ms_img">
                                    <img src={path+"./images/m-ms02.jpg"} alt="ms" />
                                </div>
                                <div className="ms_textbox">
                                    <h5>사업분야</h5>
                                    <h6>당사의 사업내역 및 앞으로 계획하고 진행할 다양한 사업계획을 자세하게 정리하였습니다.</h6>
                                    <div className="ms_btn">view detail</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="ms_img">
                                    <img src={path+"./images/m-ms03.jpg"} alt="ms" />
                                </div>
                                <div className="ms_textbox">
                                    <h5>채용안내</h5>
                                    <h6>고객감동을 실현하는 당사와 함께 성장한 창의적인 인재를 모집하는 공간입니다.</h6>
                                    <div className="ms_btn">view detail</div>
                                </div>
                            </a>
                        </li>
                    </ul> */}
import React, { useState } from 'react';
import styled from 'styled-components';


function Header(props) {
    const path = process.env.PUBLIC_URL;
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    };
    const handleMouseOut = () => {
        setIsHover(false);
    };

    return (
        <>
            <header>
                <div class="logo">
                    <img src={path + "./images/logo.png"} alt="logo" />
                </div>
                <nav>
                    <ul class={'gnb' + (isHover ? ' open' : '')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <li>
                            회사소개
                            <div className={"gnb-sub" + (isHover ? ' open' : '')}>
                                <ul>
                                    <li>회사개요</li>
                                    <li>CEO 인사말</li>
                                    <li>오시는길</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            사업분야
                            <div className={"gnb-sub" + (isHover ? ' open' : '')}>
                                <ul>
                                    <li>사업분야01</li>
                                    <li>사업분야02</li>
                                    <li>사업분야03</li>
                                    <li>사업분야04</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            제품안내
                            <div className={"gnb-sub" + (isHover ? ' open' : '')}>
                                <ul>
                                    <li>제품안내01</li>
                                    <li>제품안내02</li>
                                    <li>제품안내03</li>
                                    <li>제품안내04</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            커뮤니티
                            <div className={"gnb-sub" + (isHover ? ' open' : '')}>
                                <ul>
                                    <li>공지사항</li>
                                    <li>홍보자료</li>
                                    <li>채용안내</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            고객지원
                            <div className={"gnb-sub" + (isHover ? ' open' : '')}>
                                <ul>
                                    <li>1:1문의</li>
                                    <li>묻고답하기</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </li>   
                    </ul>
                </nav>

                <div class="mj">
                    <div class="btn">
                        <img src={path + "./images/icon-home.png"} alt="home" /> 
                        <img src={path + "./images/icon-contact.png"} alt="contact" />
                    </div>
                </div>
                <div class={"sub-gnb" + (isHover ? ' open' : '')}>
                </div>
            </header>
            
        </>
    );
}

export default Header;
                {/* <div class="gnb">
                    <ul>
                        <li>
                            <a href="#">회사소개</a>
                            <div className="gnb-sub">
                                <ul>
                                    <li>회사개요</li>
                                    <li>CEO인사말</li>
                                    <li>오시는길</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">사업분야</a>
                            <div class="gnb-sub">
                                <ul>
                                    <li>사업분야01</li>
                                    <li>사업분야02</li>
                                    <li>사업분야03</li>
                                    <li>사업분야04</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">제품안내</a>
                            <div class="gnb-sub">
                                <ul>
                                    <li>제품안내01</li>
                                    <li>제품안내02</li>
                                    <li>제품안내03</li>
                                    <li>제품안내04</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">커뮤니티</a>
                            <div class="gnb-sub">
                                <ul>
                                    <li>공지사항</li>
                                    <li>홍보자료</li>
                                    <li>채용안내</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">고객지원</a>
                            <div class="gnb-sub">
                                <ul>
                                    <li>1:1문의</li>
                                    <li>묻고답하기</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div> */}
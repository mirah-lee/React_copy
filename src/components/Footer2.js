import React from 'react';

function Footer2(props) {
    const path = process.env.PUBLIC_URL;
    return (
        <>
         <div className="footer-wrap2">
            <div className="foot_icon">
                <ul>
                    <li><a href="#"><img src={path + "/images/mf-icon01.png"} alt="icon" /></a></li>
                    <li><a href="#"><img src={path + "/images/mf-icon02.png"} alt="icon" /></a></li>
                    <li><a href="#"><img src={path + "/images/mf-icon03.png"} alt="icon" /></a></li>
                    <li><a href="#"><img src={path + "/images/mf-icon04.png"} alt="icon" /></a></li>
                </ul>
            </div>
            <div className="address">
                <ul>
                    <li>회사 : 파이브스톤</li>
                    <li>대표: 김성용</li>
                    <li>주소 : 경기도 고양시 삼송로 193번길 28-3 하준빌딩 401호</li>
                    <li>고객지원 : 010-2709-0828</li>
                    <li>FAX : 070-777-5555</li>
                    <li>EMAIL : fivestone55@daum.net</li>
                    <li>사업자등록번호 : 780-42-00047</li>
                    <li>통신판매업 : 제2015-경기-00974호</li>
                </ul>
            </div>
            <p>COPYRIGHT(C) 2022 FIVESTONE.ALL RIGHT RESERVED.</p>
        </div>   
        </>
    );
}

export default Footer2;
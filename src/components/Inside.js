import React from 'react';
import InsideList from './InsideList';

function Inside(props) {
    const path = process.env.PUBLIC_URL;
    return (
        <>
            <section class="inside">
                <div class="mi">
                    <h4>fivestone inside</h4>
                    <p>파이브 스톤과 함께 하세요!</p>
                    <InsideList />
                </div>
            </section>
        </>
    );
}

export default Inside;
{/* <ul>
    <li>
        <img src={path + "./images/m-os01.png"} alt="os" />
        <h5>공지사항</h5>
        <h6>당사의 새로운 소식을<br />보실 수 있습니다.</h6>
    </li>
    <li>
        <img src={path + "./images/m-os02.png"} alt="os" />
        <h5>홍보자료</h5>
        <h6>미디어에 홍보된 자료를<br />보실 수 있습니다.</h6>
    </li>
    <li>
        <img src={path + "./images/m-os03.png"} alt="os" />
        <h5>1:1문의</h5>
        <h6>문의사항을 남기시면 친절히<br />답변드립니다.</h6>
    </li>
    <li>
        <img src={path + "./images/m-os04.png"} alt="os" />
        <h5>FAQ</h5>
        <h6>자주하는 질문과 내용을<br />보실 수 있습니다.</h6>
    </li>
</ul> */}
import React from 'react';
import OurProductList from './OurProductList';

function OurProduct(props) {
    return (
        <>
            <section className="our_product gird">
                <h4>our product</h4>
                <p>정직과 신뢰, 디자인으로 함께 하는 파이브 스톤</p>
                <div className="product">
                    <OurProductList />
                </div>
            </section>
        </>
    );
}

export default OurProduct;
{/* 
    <div className="op">
        <div className="op_img box1">
            <div className="op-title">
                <h5>DFSA 101</h5>
                <div className="op-btn">view</div>
            </div>
        </div>
        <div className="op_img box2">
            <div className="op-title">
                <h5>SAFE 102</h5>
                <div className="op-btn">view</div>
            </div>
        </div>
        <div className="op_img box3">
            <div className="op-title">
                <h5>XPYB 103</h5>
                <div className="op-btn">view</div>
            </div>
        </div>
        <div className="op_img box4">
            <div className="op-title">
                <h5>ULQV 104</h5>
                <div className="op-btn">view</div>
            </div>
        </div>
        <div className="op_img box5">
            <div className="op-title">
                <h5>ZMEG 105</h5>
                <div className="op-btn">view</div>
            </div>
        </div>
        <div className="op_img box6">
            <div className="op-title">
                <h5>BFNQ 106</h5>
                <div className="op-btn">view</div>
            </div>
        </div> 
    </div>
*/}
import React from 'react';

function Feature(props) {
    const path = process.env.PUBLIC_URL;
    return (
        <>
            <section className="feature">
                <div className="f_part1">
                    <img src={path + "/images/m-au01.jpg"} alt="au" />
                    <div className="f_textbox1">
                        <div className="f_tt1">CREATIVE</div>
                        <div className="f_tt2">파이브스톤은 끊임없는 열정과<br />도전으로 가치를 창조합니다.</div>
                        <div className="f_tt3">파이브스톤은 다양한 환경에 적응하며 경쟁하기 위해 모든 기술과 디자인 역량을 집중하고 고객과의 친밀한 소통과 협력을 통해 최고의 품질을
                            제공하고 있습니다. 오랫동안 쌓은 전문지식과 노하우를 바탕으로 고객과 함께하겠습니다.</div>
                        <div className="f_btn">view detail</div>
                    </div>
                </div>
                <div className="f_part2">
                    <div className="f_textbox2">
                        <div className="f_tt1">HONESTY</div>
                        <div className="f_tt2">정직과 신뢰, 디자인으로<br />고객과 함께 합니다.</div>
                        <div className="f_tt3">파이브스톤은 디자인을 통한 비지니스 네트워크를 구축하여 고객의 필요와 요구를 파악하고 기존 사업과 연계하여 시너지를 창출하며 고객 감동을
                            실현해 나갈 것입니다.</div>
                        <div className="f_btn">view detail</div>
                    </div>
                    <img src={path + "/images/m-au02.jpg"} alt="au" />
                </div>
            </section>
        </>
    );
}

export default Feature;
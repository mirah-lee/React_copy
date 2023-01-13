import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';


import{Pagination, Autoplay} from 'swiper';
// import SlideImgList from "./SlideImgList";

function SlideImg(props) {
    const path = process.env.PUBLIC_URL;
    return (
        <div>
            <section class="slide_img">
                <Swiper
                pagination={{
                    dynamicBullets:true,
                }}
                loop={true}
                autoplay={{
                    delay:3000,
                }}
                modules={[Pagination, Autoplay]}
                calssName="mySwiper"
                >
                    <SwiperSlide>
                        <div class="img_box1 s_img">
                            <h3>FIVESTONE</h3>
                            <h2>CREATIVE DESIGN</h2>
                            <p>정직과 신뢰, 디자인을 최우선으로 생각하며</p>
                            <p>고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="img_box2 s_img">
                            <h3>FIVESTONE</h3>
                            <h2>VERSATILE DESIGN</h2>
                            <p>정직과 신뢰, 디자인을 최우선으로 생각하며</p>
                            <p>고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="img_box3 s_img">
                            <h3>FIVESTONE</h3>
                            <h2>RESPONSIVE DESIGN</h2>
                            <p>정직과 신뢰, 디자인을 최우선으로 생각하며</p>
                            <p>고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
}

export default SlideImg;
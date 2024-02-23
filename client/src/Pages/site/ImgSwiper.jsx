import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const ImgSwiper = () => {
    return (
        <div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="https://thetoyshop.az/image/cache/catalog/barbie-1440x550.jpg?v=3" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://thetoyshop.az/image/cache/catalog/tmnt-2-1440x550.jpg?v=3" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://thetoyshop.az/image/cache/catalog/hot-wheels-1440x550.jpg?v=3" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ImgSwiper
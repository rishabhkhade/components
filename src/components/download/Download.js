import React from "react";
import "./Download.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Download() {
  return (
    <>
      <div class="parent parent-download">
        <div class="cont cont-download">
          <div class="down-card">
            <h3>Lorem, ipsum.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div class="btn" style={{ width: "fit-content" }}>
              submit
            </div>
          </div>
        </div>
      </div>

      <div class="parent parent-project">
        <div class="cont cont-project">
          <div class="pro-card">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 25004444,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;

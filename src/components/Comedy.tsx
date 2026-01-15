import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import img from '../Assets/images/c-s1.webp';
import img2 from '../Assets/images/cs1.png';
import img3 from '../Assets/images/cs2.png';
import img4 from '../Assets/images/cs3.png';
import tag from '../Assets/images/permium.webp';
import s_main from '../Assets/images/s-main.webp';
import sp1 from '../Assets/images/sp1.webp';
import sp2 from '../Assets/images/sp2.webp';
import sp3 from '../Assets/images/sp3.webp';


const Comdey = () => {
  const navigate = useNavigate();

  const SeeAll = () => {
    navigate('/comedy');
  };
  return (
    <>
      <div className="dramas-section comedy-section main-color main-padding">
        <div className="ds_image cs_image">
          <img src={img} alt="" />
        </div>
        <div className='ds_container cs_container custom-container'>
          <div className="ds_title cs_title">
            <h2 className='ds_title_text banner-desc cs_title_text banner-desc ds_title_text banner-desc'>the one to watch </h2>
            <h2 className='ds_title_heading banner-title'>Comedy</h2>
            <div className="all-btn ds_all_btn">
              <button onClick={SeeAll}>See All <span className="arrow">→</span></button>
            </div>
          </div>

          <div className="ds_swiper">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: '.comedy-next',
                prevEl: '.comedy-prev',
              }} pagination={{
                clickable: true,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img4} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img4} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comedy-slider drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img2} alt="" className='cs-slider-items' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comedy-slider drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img3} alt="" className='cs-slider-items' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comedy-slider drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img4} alt="" className='cs-slider-items' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comedy-slider drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img2} alt="" className='cs-slider-items' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comedy-slider drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img3} alt="" className='cs-slider-items' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comedy-slider drama-slider'>
                  <img src={tag} alt="" className='tag' />
                  <img src={img4} alt="" className='cs-slider-items' />
                </div>
              </SwiperSlide>
            </Swiper>

          </div>

          {/* Custom navigation buttons */}
          <div className="custom-swiper-nav">
            <div className="swiper-button-prev drama-prev comedy-prev"></div>
            <div className="swiper-button-next drama-next comedy-next"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comdey
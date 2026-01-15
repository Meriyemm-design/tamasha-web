import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import img from '../Assets/images/ls-1.webp';
import img2 from '../Assets/images/ls-2.webp';
import img3 from '../Assets/images/ls-3.webp';
import img4 from '../Assets/images/ls-4.webp';
import img5 from '../Assets/images/ls-5.webp';
import tag from '../Assets/images/permium.webp';
import logo from '../Assets/images/logo.webp'

const LiveShows = () => {
    return (
        <>
            <div className="live-shows-section main-color main-padding">
                <div className="custom-container">
                    <div className="vc_title">
                        <h2 className='vc_title_text'>Live Shows  </h2>
                        <div className="all-btn">
                            <button>See All <span className="arrow">→</span></button>
                        </div>
                    </div>

                    <div className="vc_slider">
                        <Swiper
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}

                            speed={1000}
                            slidesPerView={5}
                            spaceBetween={20}
                            // pagination={{
                            //     el: '.custom-pagination',
                            //     clickable: true,
                            // }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    <img src={tag} alt="" className='tag' />
                                    <img src={img} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    {/* <img src={tag} alt="" className='tag' /> */}
                                    <img src={img2} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    {/* <img src={tag} alt="" className='tag' /> */}
                                    <img src={img3} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    {/* <img src={tag} alt="" className='tag' /> */}
                                    <img src={img4} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    {/* <img src={tag} alt="" className='tag' /> */}
                                    <img src={img5} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    <img src={tag} alt="" className='tag' />
                                    <img src={img} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ls_slider_items">
                                    {/* <img src={tag} alt="" className='tag' /> */}
                                    <img src={img2} alt="" />
                                    <p className='ls_slider_item_desc'> Movie Name </p>
                                </div>
                            </SwiperSlide>

                            {/* <div className='custom-pagination'>
                        </div> */}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="trending_section main-color main-padding" style={{ border: 'none' }}>
                <div className="custom-container">
                    <div className="ts-container">
                        <div className="ts-content">
                            <h1 className='vc_title_text ts-ban-title'> Tamasha Prime - Watch without Limits!</h1>
                            <p className='ts-ban-desc'> Non-stop drama, sports, and entertainment — all in one app, anytime, anywhere!</p>
                        </div>
                        <div className="ts_logo">
                            <img src={logo} alt="" style={{ width: '180px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveShows
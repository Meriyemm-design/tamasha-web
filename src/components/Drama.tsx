import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import img from '../Assets/images/korean.png'
import img2 from '../Assets/images/Untitled-1.png'
import img3 from '../Assets/images/permium.webp'

const Drama = () => {
    const navigate = useNavigate(); 

    const SeeAll = () => {
        navigate('/drama'); 
    };

    return (
        <>
            <div className="dramas-section main-color main-padding">
                <div className="ds_image">
                    <img src={img} alt="" />
                </div>
                <div className='ds_container custom-container'>
                    <div className="ds_title">
                        <h2 className='ds_title_text banner-desc'>the one to watch </h2>
                        <h2 className='ds_title_heading banner-title'>Dramas</h2>
                        <div className="all-btn ds_all_btn">
                            <button onClick={SeeAll} >See All <span className="arrow">→</span></button>
                        </div>
                    </div>

                    <div className="ds_swiper">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            loop={true}
                            navigation={{
                                nextEl: '.drama-next',
                                prevEl: '.drama-prev',
                            }} pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>   <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='drama-slider'>
                                    <img src={img3} alt="" className='tag' />
                                    <img src={img2} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Custom navigation buttons */}
                    <div className="custom-swiper-nav">
                        <div className="swiper-button-prev drama-prev"></div>
                        <div className="swiper-button-next drama-next"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Drama
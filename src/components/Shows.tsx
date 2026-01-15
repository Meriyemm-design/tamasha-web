import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import img from '../Assets/images/tenth.webp';
import img2 from '../Assets/images/permium.webp';
import img3 from '../Assets/images/logo.webp';

const Shows = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className='show-section main-padding main-color'>
                <div className="custom-container">
                    <div className="ss_content">
                        <h3 className="ss-title">
                            Top <span style={{ color: '#007aff' }}> 10 </span> Shows Today in Pakistan
                        </h3>
                    </div>

                    <div className="ss_slider">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={3}
                            loop={true}
                            onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.realIndex)}
                            onSwiper={(swiper: SwiperClass) => console.log(swiper)}
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 160,
                                modifier: 2,
                                slideShadows: true,
                            }}
                            navigation={true}
                            modules={[EffectCoverflow, Navigation]}
                            className="mySwiper"
                        >

                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 0 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play slider-btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 1 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 2 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>

                            {/* Slide 4 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 3 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>

                            {/* Slide 5 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 4 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>

                            {/* Slide 6 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 5 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>

                            {/* Slide 7 */}
                            <SwiperSlide>
                                <div className="ss-slider-item">
                                    <img src={img2} alt='image' className='tag' />
                                    <img src={img} alt='image' />
                                    {activeIndex === 6 && (
                                        <div className="ban-btns slider-buttons">
                                            <button className='btn-play'>Play</button>
                                            <button className='btn-play trailer show_btn'>Watch Trailer</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="trending_section main-color main-padding">
                <div className="custom-container">
                    <div className="ts-container">
                        <div className="ts-content">
                            <h1 className='vc_title_text ts-ban-title'> Stream the trending movies & shows</h1>
                            <p className='ts-ban-desc'> Non-stop drama, sports, and entertainment — all in one app, anytime, anywhere!</p>
                        </div>
                        <div className="ts_logo">
                            <img src={img3} alt="" style={{ width: '180px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shows;

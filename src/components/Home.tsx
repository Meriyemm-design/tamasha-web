import React from 'react'
import logo from '../Assets//images/logo.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
import heroImage from '../Assets/images/hero-banner.webp'
import img from '../Assets/images/one.webp'
import img2 from '../Assets/images/Untitled-1.png'
import img3 from '../Assets/images/korean.png'
import img4 from '../Assets/images/permium.webp'
import h1 from '../Assets/images/h1.webp';
import h2 from '../Assets/images/h2.webp';
import h3 from '../Assets/images/h3.webp';
import h4 from '../Assets/images/h4.webp';
import h5 from '../Assets/images/h5.webp';
import h6 from '../Assets/images/h6.webp';

const Home = () => {
    return (
        <>
            <section className='hero-section'>
                <div className="hero-img">
                    <img src={heroImage} alt="" />
                </div>

                <div className="hero-content">
                    <div className="custom-container">
                        <div className="tp-banner">
                            <div className="hero-banner">
                                <h1 className='banner-title'>Another Love</h1>
                                <p className='banner-desc'> (Urdu Dubbed)</p>
                                <div className="ban-btns">
                                    <button className='btn-play'>Play</button>
                                    <button className='btn-play trailer'>Watch Trailer</button>
                                </div>
                                <div className="gen-icons">
                                    <div className="genres">
                                        <p className='genre-item'>Genres: </p>
                                        <p className='genre-item white'>Drama</p>
                                    </div>
                                    <div className="icons">
                                        <a href="#" className="ri-thumb-up-line"></a>
                                        <a href="#" className="ri-add-circle-line"></a>
                                        {/* <a href="#" className="ri-share-forward-line icon"></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slider">
                                <Swiper
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    onSlideChange={() => console.log('slide change')}
                                    // // onSwiper={(swiper) => console.log(swiper)}

                                    loop={true}
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={img4} alt='image' className='tag' />
                                            <img src={h1} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={img4} alt='image' className='tag' />
                                            <img src={h2} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={img4} alt='image' className='tag' />
                                            <img src={h3} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={img4} alt='image' className='tag' />
                                            <img src={h4} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={img4} alt='image' className='tag' />
                                            <img src={h5} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={img4} alt='image' className='tag' />
                                            <img src={h6} alt="" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="vertical-section">
                <div className="custom-container">
                    <div className="vc_title">
                        <h2 className='vc_title_text'>Vertical Cinema </h2>
                        <div className="all-btn">
                            <button>See All <span className="arrow">→</span></button>
                        </div>
                    </div>

                </div>
                <div className="vc_slider">
                    <Swiper
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}

                        speed={1000}
                        slidesPerView={6}
                        spaceBetween={15}
                        pagination={{
                            el: '.custom-pagination',
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="vc_slider_items">
                                <img src={img4} alt="" className='tag' />
                                <img src={img} alt="" />
                                <p className='vc_slider_item_desc'> Movie Name </p>
                            </div>
                        </SwiperSlide>

                        <div className='custom-pagination'>
                        </div>
                    </Swiper>
                </div>
            </div>

            {/* <div className="dramas-section main-padding">
                <div className="ds_image">
                    <img src={img3} alt="" />
                </div>
                <div className='ds_container custom-container'>
                    <div className="ds_title">
                        <h2 className='ds_title_text banner-desc'>the one to watch </h2>
                        <h2 className='ds_title_heading banner-title'>Dramas</h2>
                        <div className="all-btn">
                            <button>See All <span className="arrow">→</span></button>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='drama-slider'>
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='drama-slider'>
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='drama-slider'>
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='drama-slider'>
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='drama-slider'>
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='drama-slider'>
                                <img src={img2} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div> */}
        </>
    )
}

export default Home




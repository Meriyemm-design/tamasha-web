import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import c_main from '../Assets/images/comedy_main.webp'
import tag from '../Assets/images/permium.webp'
import h1 from '../Assets/images/h1.webp';
import h2 from '../Assets/images/h2.webp';
import h3 from '../Assets/images/h3.webp';
import h4 from '../Assets/images/h4.webp';
import h5 from '../Assets/images/h.webp'
import h6 from '../Assets/images/h0.webp'

import cs1 from '../Assets/images/cs01.webp'
import cs2 from '../Assets/images/cs02.webp'
import cs3 from '../Assets/images/cs03.webp'
import cs4 from '../Assets/images/cs04.webp'
import cs5 from '../Assets/images/cs05.webp'
import cs6 from '../Assets/images/cs01.webp'
import cs7 from '../Assets/images/d1.webp'
import cs8 from '../Assets/images/d3.webp'
import cs9 from '../Assets/images/d2.webp'
import cs10 from '../Assets/images/d4.webp'


const C__Banner = () => {
    return (
        <>
            <section className='hero-section'>
                <div className="hero-img">
                    <img src={c_main} alt="" />
                </div>

                <div className="hero-content">
                    <div className="custom-container">
                        <div className="prev_btn">
                            <a href="#">
                                <i className="ri-arrow-left-long-line" style={{ color: 'white', fontSize: '24px' }}></i>
                            </a>
                        </div>

                        <div className="tp-banner">
                            <div className="hero-banner">
                                <h1 className='banner-title'>May Amini</h1>
                                <p className='banner-desc'> (Urdu Dubbed)</p>
                                <div className="ban-btns">
                                    <button className='btn-play'>Play</button>
                                    <button className='btn-play trailer'>Watch Trailer</button>
                                </div>
                                <div className="gen-icons">
                                    <div className="genres">
                                        <p className='genre-item'>Genres: </p>
                                        <p className='genre-item white'>Comedy</p>
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
                                    // modules={[Autoplay]}
                                    // speed={2000}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={tag} alt='image' className='tag' />
                                            <img src={h1} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={tag} alt='image' className='tag' />
                                            <img src={h5} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={tag} alt='image' className='tag' />
                                            <img src={h2} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={tag} alt='image' className='tag' />
                                            <img src={h3} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={tag} alt='image' className='tag' />
                                            <img src={h4} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-slider-item">
                                            <img src={tag} alt='image' className='tag' />
                                            <img src={h6} alt="" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" d__dramas comedy__section main-color main-padding">
                <div className="custom-container">
                    <div className="vc_title">
                        <h2 className='vc_title_text'>Comedy</h2>
                    </div>

                    {/* <div className="d__drama_cat">
                        <div className="d__cat">
                            <img src={tag} alt="" className='tag' />
                            <img src={img} alt="" />
                        </div>
                        <div className="d__cat">
                            <img src={tag} alt="" className='tag' />
                            <img src={img2} alt="" />
                        </div>
                        <div className="d__cat">
                            <img src={tag} alt="" className='tag' />
                            <img src={img3} alt="" />
                        </div>
                        <div className="d__cat">
                            <img src={tag} alt="" className='tag' />
                            <img src={img4} alt="" />
                        </div>
                    </div> */}

                    <div className="c__cats">
                        <div className="com__shows">
                            <div className="row">
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs1} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs2} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs3} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="com__shows">
                            <div className="row">
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs5} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs6} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs7} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs8} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="com__shows">
                            <div className="row">
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs2} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs9} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs10} alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="c__show-cats">
                                        <img src={tag} alt="" className='tag' style={{ width: '45px' }} />
                                        <img src={cs5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="btn-play">See More </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default C__Banner
{/* <div className="c__all_shows"></div> */ }
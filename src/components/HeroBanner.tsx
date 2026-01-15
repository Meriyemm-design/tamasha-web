import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import logo from '../Assets/images/logo.webp'
import topLabel from '../Assets/images/label.webp'
import main from '../Assets/images/d-main.webp'
import img from '../Assets/images/d1.webp'
import img2 from '../Assets/images/d2.webp'
import img3 from '../Assets/images/d3.webp'
import img4 from '../Assets/images/d4.webp'
import tag from '../Assets/images/permium.webp';
import play from '../Assets/images/play.webp'
import ep1 from '../Assets/images/epi1.webp'
import ep2 from '../Assets/images/epi2.webp'
import ep3 from '../Assets/images/epi3.webp'


const HeroBanner = () => {
    return (
        <>
            <section className='hero-section d-heropanel'>
                <div className="hero-img">
                    <img src={main} alt="" />
                </div>

                <div className="hero-content">
                    <div className="custom-container">
                        <div className="tp-banner">
                            <div className="hero-banner">
                                <h1 className='banner-title'>Halka</h1>
                                <p className='banner-desc'> (Urdu Dubbed)</p>
                                <div className="ban-btns hb-btns">
                                    <button className='btn-play hb-btn-play'>Play</button>
                                    <button className='btn-play trailer'>Watch Trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d__top main-color main-padding">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-8">
                            <div className="d__content">
                                <div className="d__img">
                                    <img src={topLabel} alt="" style={{ width: '40px' }} />
                                </div>
                                <div className="d__name">
                                    <p> Halka</p>
                                </div>
                            </div>
                            <div className="d__desc">
                                After their elder sons' tragic deaths, the feuding Adam and Nawab families' future rests on Shahmeer and Ana. Amid grief, they fall in love, teaming with police to end the long rivalry and bring peace to their town.
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d__categories">
                                <div className="genres">
                                    <p className='genre-item'>Genres: </p>
                                    <p className='genre-item white'>TV Dramas, Pakistani, Crime</p>
                                </div>
                                <div className="icons">
                                    {/* <a href="#" className="ri-heart-3-fill icon"></a> */}
                                    <a href="#" className="ri-thumb-up-line"></a>
                                    <a href="#" className="ri-add-circle-line"></a>
                                    {/* <a href="#" className="ri-share-forward-line icon"></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d__episodes main-color mai-padding">
                <div className="custom-container">
                    <div className="vc_title">
                        <h2 className='vc_title_text'>Episodes  </h2>

                        <div className="custom-dropdown">
                            Season 1
                            <div className="dropdown-options">
                                <a href="#">Season 1</a>
                                <a href="#">Season 2</a>
                                <a href="#">Season 3</a>
                            </div>
                        </div>
                    </div>

                    <div className="d__content_scrollable">
                        <div className="d__episodes_content">
                            <div className="row">
                                <div className="col-1">
                                    <div className="d__epi_num">
                                        <h1> 1 </h1>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="d__content_img">
                                        <img src={ep1} alt="" />
                                        <img src={play} alt="" style={{ width: '90px' }} className='d_play' />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="d__epi-details">
                                        <div className="d_details">
                                            <h4> S1. Episode 1 </h4>
                                            <h5> 52 min</h5>
                                        </div>
                                        <p className='d__desc'> Haru accompanies Karen to investigate a whistleblower's apartment. Meanwhile, several other Tawaras are tempted to step out of their ordinary . </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d__episodes_content">
                            <div className="row">
                                <div className="col-1">
                                    <div className="d__epi_num">
                                        <h1> 2 </h1>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="d__content_img">
                                        <img src={ep2} alt="" />
                                        <img src={play} alt="" style={{ width: '90px' }} className='d_play' />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="d__epi-details">
                                        <div className="d_details">
                                            <h4> S1. Episode 2 </h4>
                                            <h5> 52 min</h5>
                                        </div>
                                        <p className='d__desc'> Haru accompanies Karen to investigate a whistleblower's apartment. Meanwhile, several other Tawaras are tempted to step out of their ordinary . </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d__episodes_content">
                            <div className="row">
                                <div className="col-1">
                                    <div className="d__epi_num">
                                        <h1> 3 </h1>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="d__content_img">
                                        <img src={ep3} alt="" />
                                        <img src={play} alt="" style={{ width: '90px' }} className='d_play' />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="d__epi-details">
                                        <div className="d_details">
                                            <h4> S1. Episode 3 </h4>
                                            <h5> 52 min</h5>
                                        </div>
                                        <p className='d__desc'> Haru accompanies Karen to investigate a whistleblower's apartment. Meanwhile, several other Tawaras are tempted to step out of their ordinary . </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d__episodes_content">
                            <div className="row">
                                <div className="col-1">
                                    <div className="d__epi_num">
                                        <h1> 4 </h1>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="d__content_img">
                                        <img src={main} alt="" />
                                        <img src={play} alt="" style={{ width: '90px' }} className='d_play' />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="d__epi-details">
                                        <div className="d_details">
                                            <h4> S1. Episode 4 </h4>
                                            <h5> 52 min</h5>
                                        </div>
                                        <p className='d__desc'> Haru accompanies Karen to investigate a whistleblower's apartment. Meanwhile, several other Tawaras are tempted to step out of their ordinary . </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" d__dramas main-color main-padding">
                <div className="custom-container">
                    <div className="vc_title">
                        <h2 className='vc_title_text'>Related Dramas  </h2>
                        <div className="all-btn">
                            <button>View More
                                {/* <span className="arrow">→</span> */}
                            </button>
                        </div>
                    </div>

                    <div className="d__drama_cat">
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

export default HeroBanner
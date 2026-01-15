import { useEffect, useState } from "react";
import React from 'react'
import img from '../Assets/images/app_store.webp'

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300); // Show button after 300px scroll
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    },
        []
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="footer-section main-color ">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="tp-footer-items">
                                <div className="footer-nav">
                                    <h4 className='nav-title'> Navigation</h4>
                                    <ul className='footer-nav-items'>
                                        <li>
                                            <a href="#"> Home </a>
                                        </li>
                                        <li>
                                            <a href="#"> Dramas </a>
                                        </li>
                                        <li>
                                            <a href="#"> Comedy </a>
                                        </li>
                                        <li>
                                            <a href="#"> Shows  </a>
                                        </li>
                                        <li>
                                            <a href="#"> Sports </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-legal">
                                    <h4 className='nav-title'> Legal </h4>
                                    <ul className='footer-nav-items'>
                                        <li>
                                            <a href="#"> Terms & Conditions  </a>
                                        </li>
                                        <li>
                                            <a href="#"> Privacy Policy </a>
                                        </li>
                                        <li>
                                            <a href="#"> FAQ's </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <div className="tp-footer-icons">
                                <div className="footer-play">
                                    <a href="#">
                                        <i className="ri-google-play-line"></i>
                                    </a>
                                </div>
                                <div className="footer-play app">
                                    <a href="#">
                                        <img src={img} alt="" style={{ width: '55px' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-social-icons">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="tp-footer-social-icons">
                                    <div className="tp-fb-icon">
                                        <a href="#">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </div>
                                    <div className="tp-fb-icon tp-insta-icon">
                                        <a href="#">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/* <div className="tp-arrow"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }} >
                                    <div className="scroll-to-top">
                                        <i className="ri-arrow-up-long-fill"></i>
                                    </div>
                                </div> */}
                                {isVisible && (
                                    <div className="tp-arrow" onClick={scrollToTop} style={{ cursor: "pointer" }}>
                                        <div className="scroll-to-top">
                                            <i className="ri-arrow-up-long-fill"></i>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="tp-copyright-section">
                        <span> <i className="ri-copyright-line"></i> </span> 2025 - Copyright
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer
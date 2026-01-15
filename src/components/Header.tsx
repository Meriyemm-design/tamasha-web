import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets//images/logo.webp'

const Home = () => {
    return (
        <>
            <section className="tp-header">
                <div className="row">
                    {/* Left: Logo and Menu */}
                    <div className="col-6">
                        <div className="tp-header-left">
                            <div className="tp-logo">
                                <img src={logo} alt="Logo" style={{ width: '150px' }} />
                            </div>
                            {/* <div className="tp-nav">
                                <ul className="tp-menu-list">
                                    <li><a href="/" className="tp-menu-link tp-active">Home</a></li>
                                    <li><a href="" className="tp-menu-link">Comedy</a></li>
                                    <li><a href="" className="tp-menu-link">Shows</a></li>
                                    <li><a href="" className="tp-menu-link">Sports</a></li>
                                    <li>
                                        <Link to="/drama" className="tp-menu-link">Drama</Link>
                                        </li>
                                </ul>
                            </div> */}
                            <div className="tp-nav">
                                <ul className="tp-menu-list">
                                    <li><Link to="/" className="tp-menu-link tp-active">Home</Link></li>
                                    <li><Link to="/comedy" className="tp-menu-link">Comedy</Link></li>
                                    <li><Link to="/shows" className="tp-menu-link">Shows</Link></li>
                                    <li><Link to="/sports" className="tp-menu-link">Sports</Link></li>
                                    <li><Link to="/drama" className="tp-menu-link">Drama</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        {/* Right: Search and Icons */}
                        <div className="tp-header-right">
                            <form className="tp-search-form" role="search">
                                <input
                                    type="search"
                                    className="tp-search-input"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button type="submit" className="tp-search-btn" aria-label="Search">
                                    <i className="ri-search-line"></i>
                                </button>
                            </form>
                            <div className="tp-header-icons">
                                <a href="#" className="tp-header-icon" aria-label="Notifications">
                                    <i className="ri-notification-3-line"></i>
                                </a>
                                <a href="#" className="tp-header-icon" aria-label="Menu">
                                    <i className="ri-menu-3-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

// // breakpoints={{
//                                 320: {
//                                     slidesPerView: 1,
//                                     spaceBetween: 10,
//                                 },
//                                 640: {
//                                     slidesPerView: 2,
//                                     spaceBetween: 20,
//                                 },
//                                 768: {
//                                     slidesPerView: 3,
//                                     spaceBetween: 30,
//                                 },
//                                 1024: {
//                                     slidesPerView: 6,
//                                     spaceBetween: 20,
//                                 },
//                             }}
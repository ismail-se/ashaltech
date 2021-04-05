import Link from 'next/link';
import React from 'react';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="banner-area-six">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <ReactWOW animation='fadeInLeft'>
                                <h1>Cyber Security Solutions Built on Customer Trust</h1>
                            </ReactWOW>

                            <ReactWOW animation='fadeInRight'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </ReactWOW>

                            <ReactWOW animation='fadeInUp'>
                                <div className="banner-btn">
                                    <Link href="/pricing">
                                        <a className="default-btn six">
                                            <i className="bx bx-file"></i>
                                            Get a Quote
                                        </a>
                                    </Link>

                                    <Link href="/about">
                                        <a className="default-btn active">
                                            <i className="bx bx-user"></i>
                                            Discover More
                                        </a>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="banner-img">
                            <img src="/img/home-six/banner/banner-img.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-shape-1">
                <img src="/img/home-six/banner/shape-1.png" alt="Image" />
            </div>

            <div className="banner-shape-2">
                <img src="/img/home-six/banner/shape-2.png" alt="Image" />
            </div>
        </div>
    )
}

export default MainBanner;
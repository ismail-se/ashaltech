import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer className="footer-top-area pt-100 pb-70 jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <Link href="/">
                                <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                    <img src="/img/ashaltech-logo.png" alt="logo" className="mb-4"/>
                                </a>
                            </Link>
                            <div className="text-white">
                                <p>We are specialists in Information Security and Technology of unique and exclusive applications. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-widget contact">
                                <h3>Contact Us Today</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="bx bx-location-plus"></i>
                                                <span>ASHALTECH UAE Head Office:</span> 
                                                Suite #. 302 , Al Wahda Building Near Deira City Center, Dubai - UAE
                                            </li>
                                            <li>
                                                <i className="bx bx-phone-call"></i>
                                                <span>Landline :</span> 
                                                <a href="tel:Phone:+971 (4) 255 5525">
                                                    +971 (4) 255 5525
                                                </a>
                                            </li>
                                            <li>
                                                <i className="bx bx-phone-call"></i>
                                                <span>Cellular :</span> 
                                                <a href="tel:Phone:+971 (56) 455 4943">
                                                    +971 (56) 455 4943
                                                </a>
                                            </li>
                                            <li>
                                                <i className="bx bx-envelope"></i>
                                                <span>Email:</span> 
                                                <a href="mailto:info@ashaltech.com">
                                                    info@ashaltech.com
                                                </a>
                                            </li>   
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <ul className="contact-info">  
                                            <li>
                                                <i className="bx bx-location-plus"></i>
                                                <span>ASHALTECH Pakistan Office</span> 
                                            </li>
                                            <li>
                                                <i className="bx bx-phone-call"></i>
                                                <span>Phone :</span> 
                                                <a href="tel:Phone:+92 321 242 1700">
                                                    +92 321 242 1700
                                                </a>
                                            </li>
                                            <li>
                                                <i className="bx bx-envelope"></i>
                                                <span>Email:</span> 
                                                <a href="mailto:pakistan@ashaltech.com">
                                                    pakistan@ashaltech.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Find Us</h3>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4441064539596!2d55.32792631501065!3d25.255641783869038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef26763ae558a138!2sASHAL%20TECH!5e0!3m2!1sen!2suk!4v1617365049490!5m2!1sen!2suk"></iframe>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </footer>   
            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="copy-right">
                                <p>&copy;{currentYear} Copyright ASHAL TECH | ALL RIGHTS RESERVED</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="justify-content-end d-flex">
                                <li className="px-2">
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                </li>
                                <li className="px-2">
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li className="px-2">
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </li>
                                <li className="px-2">
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
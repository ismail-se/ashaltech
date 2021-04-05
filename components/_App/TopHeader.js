import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-8">
                        <ul className="header-content-left">
                            <li>
                                <a href="javascript:;">
                                    <i className="bx bx-envelope"></i>
                                    Email: pakistan@ashaltech.com
                                </a>
                            </li>

                            <li>
                                <i className="bx bx-location-plus"></i>
                                Suite #. 302 , Al Wahda Building Near Deira City Center, Dubai - UAE
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-4">
                        <ul className="header-content-right">
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
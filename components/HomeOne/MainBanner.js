import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import Features from './Features';

const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
            
            <section className="banner-area banner-item-bg-1 jarallax">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="banner-text">
                                <h1>EVOLVING SECURITY</h1>
                                <p>EVOLVING THE WAY YOU MANAGE SECURITY & TECHNOLOGY</p>

                                <div className="banner-btn">
                                    <Link href="/work">
                                        <a className="default-btn">
                                            EXPLORE RECENT WORK
                                        </a>
                                    </Link>
                                    <Link href="/#">
                                        <a className="default-btn active">
                                            GET A QUOTE TODAY
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div> 

                <Features/>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MainBanner;
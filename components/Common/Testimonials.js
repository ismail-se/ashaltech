import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    center: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="client-area ptb-100 mb-5">
            <div className="container"> 
                <div className="section-title white-title"> 
					<h2>“If you spend more on coffee than on IT security, you will be hacked. What’s more, you deserve to be hacked.”</h2>
                    <p className="text-right"><em>— White House Cybersecurity Advisor, Richard Clarke</em></p>
				</div>  
            </div>
        </section>
    )
}

export default Testimonials;
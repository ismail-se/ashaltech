import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop: true,
    margin: 30,
    nav: true,
    mouseDrag: true,
    items:1,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    center: true,
    nav:false,
    navText: false,
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area bg-color-f9f9f9 pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<h2 className="mb-2">WE HELP ORGANIZATIONS TO</h2>
						<ul>
                            <li>&bull; Effectively align IT and Business Processes with their Strategic goals</li>
                            <li>&bull; Prove the Value of their Services</li>
                            <li>&bull; Streamline/Automate the approach to managing service levels in order to enhance effectiveness & efficiency.</li>
                            <li>&bull; Provide real-time visibility and data into performance to identify</li>
                            <li>&bull; Minimize the risk of litigation</li>
                            <li>&bull; Manage the complexity of incorporating a balanced mix of in sourced and outsourced relationships into their Organization</li>
                            <li>&bull; Accelerate the adoption of ITIL, best practices and corporate governance frameworks</li>
                            <li>&bull; Improve customer retention and satisfaction in order to increase contract renewals</li>
                        </ul>
					</div>
					<div className="col-lg-2 col-md-6">
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="">
		                    {display ? <OwlCarousel 
		                        className="testimonials-slider owl-carousel owl-theme"
		                        {...options}
		                    > 
								<div className="testimonials-item">
									<img src="/img/about/about-1.png" alt="Image"/>
								</div>
								<div className="testimonials-item">
									<img src="/img/about/about-2.png" alt="Image" />
								</div>
								<div className="testimonials-item">
									<img src="/img/about/about-3.png" alt="Image" />
								</div>
							</OwlCarousel> : ''}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Testimonials;
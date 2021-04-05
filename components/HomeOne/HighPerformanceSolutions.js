import React from 'react';
import Link from 'next/link';

const HighPerformanceSolutions = () => {
    return (
        <section className="mt-5 performance-area bg-none pb-70">
			<div className="container"> 	
				<div className="row">
					<div className="col-lg-12 col-sm-12">
						<div className="text-center mb-5">
							<h2>Specialists In Information Security & Technology</h2>
							<p>ASHAL TECH is focused on delivering the best IT security for businesses, Ashal Tech was established in 2012.We lead the way in a different approach to Information security to protect you better, give you more visibility, make security innovations simple to deploy, that fit your security budget.</p>
							<p>Our approach allows you to simplify your network security infrastructure and to eliminate the need for a variety of stand-alone and bolt-on security devices. We provide next-generation information technology solutions that enable business to be conducted securely and privately on the Internet.</p>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="flaticon-website"></i>
							<h3>COMPLIANCE & AUDIT</h3>
							<p>Most organizations today are faced with industry regulations and noncompliance negatively impacts your business.</p>
                            <Link href="/get-quote">
                                <a className="read-more">Get a Quote</a>
                            </Link>

							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="flaticon-profile"></i>
							<h3>VA & PEN TEST</h3>
							<p>Vulnerability Assessment and Penetration Testing are two important processes.</p>
							<Link href="/get-quote">
                                <a className="read-more">Get a Quote</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="flaticon-content"></i>
							<h3>GRC CONSULTING</h3>
							<p>Governance, Risk Management, and Compliance or GRC is the umbrella term covering an organization’s approach across these three areas.</p>
							<Link href="/get-quote">
                                <a className="read-more">Get a Quote</a>
                            </Link>
							
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>
					
					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="flaticon-cyber"></i>
							<h3>OPEN SOURCE CONSULTING</h3>
							<p>ASHAL TECH provide dynamic and highly specialized open source consultancy.</p>
							<Link href="/get-quote">
                                <a className="read-more">Get a Quote</a>
                            </Link>
                            <img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default HighPerformanceSolutions;
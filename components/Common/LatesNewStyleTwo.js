import React from 'react';
import Link from 'next/link';

const LatesNewStyleTwo = () => {
    return (
        <section className="blog-area pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Latest News</h2>
					<p>ASHAL TECH – FOCUS ON  ISO 27001, BCM 22301, ITSM 22000-1 CONSULTANCY,TRAINING & CERTIFICATIONS,Wi-Fi HOTSPOT SOLUTION,INCIDENT RESPONSE, SECURITY OPERATIONS AND REMIDIATION PROCESSES</p>
				</div>	
				<div className="row">
					<div className="col-lg-2 col-sm-6">
					</div>
					<div className="col-lg-4 col-sm-6">
						<div className="single-blog">
							<img src="/img/blog/blog2.jpg" alt="Image" />	
							<span><i className="bx bx-calendar"></i> September 23rd, 2017</span>	
							<div className="blog-content">		
								<h3>
                                    <Link href="/blog-details">
									    <a>ISO Standards</a>
                                    </Link>
								</h3>
								<p>ISO Standards & Risk Management Consulting We provide Consulting and Implementation services leading to certification on the following ISO Standards:ISO 27001 Information security management systems standardsISO 22301 Business continuity management systems standardsISO 9001 Quality management.</p>
                                <Link href="/iso-standards">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>	
					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-blog">
							<img src="/img/blog/blog1.jpg" alt="Image" />
							<span><i className="bx bx-calendar"></i> September 9th, 2017</span>

							<div className="blog-content">	
								<h3>
                                    <Link href="/blog-details">
                                        <a>WiFi Elixir</a>
                                    </Link>
								</h3>
                                <Link href="/wifi-elixir">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-sm-6 offset-sm-3 offset-lg-0">
					</div>
					<div className="text-center">
						<Link href="javascript:;">
	                        <a className="default-btn six">
	                            View All Articles
	                        </a>
	                    </Link>
	                </div>
				</div>
			</div>
		</section>
    )
}

export default LatesNewStyleTwo;
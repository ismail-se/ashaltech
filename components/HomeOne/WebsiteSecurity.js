import React from 'react';
import Link from 'next/link';

const WebsiteSecurity = () => {
    return (
        <section className="security-area pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-sm-12">
						<div className="text-center mb-5">
							<h2>UNIQUE EXPERTISE FOR DEFENDING AGAINST & RESPONDING TO CRITICAL SECURITY INCIDENTS</h2>
							<h3>WE ARE INFORMATION SECURITY CONSULTING COMPANY</h3>
							<p>ASHAL TECH is a fast growing one-stop-shop service provider for all your business needs. We provide all Business and IT Solutions, Services and Training in the region through our robust world class delivery processes.</p>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="bx bx-radio-circle-marked"></i>
							<h3>ISO 27001 Consultancy</h3>
							<p>The ISO/IEC 27000 family of standards helps organizations keep information assets secure.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="bx bxl-codepen"></i>
							<h3>VA & Pen Test</h3>
							<p>Both are integral components of a Threat and Vulnerability Management process.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="flaticon-support"></i>
							<h3>Open Source Consultancy</h3>
							<p>Whether its the Linux Kernel, web engines, graphics or multimedia, Ashaltech’s expertise spans across all key areas of Open Source software development.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security" style={{height:'300px'}}>
							<i className="bx bxs-briefcase"></i>
							<h3>GRC Consultancy</h3>
							<p>GRC Consulting Services assists organizations in developing an integrated cycle of Governance, Risk and Compliance (GRC) initiatives.</p>
						</div>
					</div>
					<div className="text-center banner-btn">
                        <Link href="/services">
                            <a className="default-btn">
                                View All Services
                            </a>
                        </Link>
                    </div>
				</div>
			</div>
		</section>
    )
}

export default WebsiteSecurity;
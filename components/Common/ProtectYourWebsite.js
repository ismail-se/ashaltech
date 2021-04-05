import React from 'react';
import Link from 'next/link';

const ProtectYourWebsite = () => {
    return (
        <div className="manual-area bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="manual-img">
							<img src="/img/manual-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="manual-content mr-auto ml-0">
							<h2>Building Inspiring OpenSOC</h2>
							<p>OpenSOC (Open Security Operations Center) is a Big Data security analytics framework designed to consume and monitor network traffic and machine exhaust data of a data center. OpenSOC is extensible and is designed to work at a massive scale.</p>
                            <Link href="/contact">
                                <a className="default-btn mt-30">
                                    Contact Us
                                </a>
                            </Link>
                            <p>Only takes a few seconds!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ProtectYourWebsite;
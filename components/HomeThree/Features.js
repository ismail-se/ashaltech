import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-sm-6 p-0">
						<div className="single-features">
							<h3><i className="bx bx-check-shield"></i> Security</h3>
							<p>To protect your business, family and the things that matter the most. Prevention. Protection. Safety. Ashal Technologies</p>
							<div className="mt-3">
	                            <div className="get-quote">
	                                <Link href="/get-quote">
	                                    <a className="default-btn">
	                                        Get A Free Quote
	                                    </a>
	                                </Link>
	                            </div>
	                        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
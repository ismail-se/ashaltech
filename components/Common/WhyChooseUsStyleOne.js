import React from 'react';
import Link from 'next/link';

const WhyChooseUsStyleOne = () => {
    return (
        <div className="choose-area ptb-100 mb-5">
			<div className="container">
				<div className="text-white text-center">
					<h2 className="text-white"><span>Mile2<sup>®</sup></span></h2>
					<p>Mile2 is a developer of proprietary vendor neutral cyber security certifications which are accredited by NSA’s CNSS 4011-4016. Mile2’s courses are approved on Homeland’s Security NICCS training schedule and is on the FBI’s preferred cyber security certification requirements. Mile2® administers its certification exams through the MACS (Mile2 Assessment and Certification System) system.</p>	
                    <Link href="/trainings">
                        <a className="default-btn mt-30">
                        <i className="bx bx-share"></i>
                            Learn More
                        </a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default WhyChooseUsStyleOne;
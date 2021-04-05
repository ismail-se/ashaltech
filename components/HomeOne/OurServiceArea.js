import React from 'react';

const OurServiceArea = () => {
    return (
        <div className="our-serve-area bg-color-f9f9f9 pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="text-center mb-5">
							<h2><span style={{color: "#d80650"}}>Our Core Values</span></h2>
							<p>A company operating globally in different countries needs common principles to strengthen the sense of belonging and as a foundation for uniform decision making. The principles promote personal commitment and describe the ways that we create customer value.</p>
							<p>ASHAL TECH’s values are based on four statements that serve as reminders for us when we do our daily work.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-serve">
							<i className="bx bx-home"></i>
							<h3>Customer Focused</h3>
							<p>Everything we do adds value for our customers. We aim to exceed our customers’ expectations. We build long term partnerships with our customers.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-serve">
							<i className="bx bx-cog"></i>
							<h3>Achieving Together</h3>
							<p>We are one team. We share ideas and respect and rely on each other. We recognize and celebrate achievements.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-serve">
							<i className="bx bx-user-plus"></i>
							<h3>Proactive</h3>
							<p>We continuously improve our competencies and capabilities to stay one step ahead.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-serve">
							<i className="bx bx-bulb"></i>
							<h3>Engaged to Perform</h3>
							<p>We enjoy challenges and keep our promises. We always act ethically and we are efficient in everything we do.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurServiceArea;
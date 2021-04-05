import React from 'react';

const ContactForm = () => {
    return (
        <div className="faq-contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<span className="top-title">Contact Us</span>
									<h2>Talk To Us – We’re Here To Help</h2>
									<p>ASHAL TECH is a fast growing one-stop-shop service provider for all your business needs. We provide all Business and IT Solutions, Services and Training in the region through our robust world class delivery processes.</p>
								</div>

								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
											</div>
										</div>
			
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Your Subject" />
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="8" required  placeholder="Your Message"></textarea>
											</div>
										</div>
			
										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn page-btn">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactForm;
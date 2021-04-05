import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area">
			<div className="container-fluid">
				<div className="row mb-5">
					<div className="col-lg-3 p-0">
						<div className="single-contact-info py-5" style={{height:'402px'}}>
							<i className="bx bx-location-plus"></i>
							<h3>UAE OFFICE</h3>
							<p>Suite #. 302, Al Wahda Building Near Deira City Center P.O Box 12963 Dubai – UAE</p>
							<a href="mailto:info@ashaltech.com">Email: info@ashaltech.com</a>
							<a href="tel:+971 (4) 255 5525">Landline: +971 (4) 255 5525</a>
							<a href="tel:+971 (56) 455 4943">Cellular: +971 (56) 455 4943</a>
							<p>Timing: Sun – Thu . 9.00 – 17.00</p>
						</div>
					</div>

					<div className="col-lg-6 p-0">
						<div className="single-contact-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4441064539596!2d55.32792631501065!3d25.255641783869038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef26763ae558a138!2sASHAL%20TECH!5e0!3m2!1sen!2suk!4v1617365049490!5m2!1sen!2suk"></iframe>
                        </div>
					</div>

					<div className="col-lg-3 p-0">
						<div className="single-contact-info" style={{height:'402px'}}>
							<i className="bx bx-location-plus"></i>
							<h3>PAKISTAN OFFICE</h3>
							<a href="mailto:pakistan@ashaltech.com">Email: pakistan@ashaltech.com</a>
							<a href="tel:+92 321 242 1700">Phone: +92 321 242 1700</a>
							<p>Timing: Mon – Fri . 9.00 – 17.00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactInfo;
import React from 'react';
import Link from 'next/link'; 
import RelatedPost from './RelatedPost';

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="blog-details-desc">
							<div className="article-content"> 
								<div className="article-image">
									<img src="/img/blog-details/Wifi-Hotspot.jpg" alt="image" />
								</div> 
								<div className="entry-meta border-top border-bottom">
									<ul>
										<li>
                                            <span>Posted On:</span> 
                                            <Link href="javascript:;">
                                                <a>September 9th, 2017</a>
                                            </Link>
                                        </li>
										<li>
                                            <span>Posted By:</span> 
                                            <Link href="javascript:;">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <span>News</span> 
                                        </li>
									</ul>
								</div>
							</div>

							<div className="article-footer">
								<div className="article-tags">
									<span><i className='bx bx-share-alt'></i></span>

									<a href="#">Share</a>
								</div>

								<div className="article-share">
									<ul className="social">
										<li>
											<a href="#" target="_blank">
												<i className='bx bxl-facebook'></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i className='bx bxl-twitter'></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i className='bx bxl-linkedin'></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i className='bx bxl-pinterest-alt'></i>
											</a>
										</li>
									</ul>
								</div>
							</div> 
						</div>
					</div>

					<div className="col-lg-4 col-md-12"> 
                        <div className="blog-right-sidebar sidebar-pl-15">
                            <h5 className="pt-4">CONTACT US TODAY</h5><hr/>
                            <span className="text-secondary"><i className="bx bx-location-plus"></i> ASHALTECH UAE Head Office</span>
                            <p>Suite #. 302 , Al Wahda Building Near Deira City Center, Dubai - UAE</p><hr/>
                            <p><i className="bx bx-phone-call"></i> <span>Landline :</span> <a href="tel:Phone:+971 (4) 255 5525">+971 (4) 255 5525</a></p><hr/>
                            <p><i className="bx bx-phone-call"></i> <span>Cellular :</span> <a href="tel:Phone:+971 (56) 455 4943">+971 (56) 455 4943</a></p><hr/>
                            <p><i className="bx bx-envelope"></i> <span>Email:</span> <a href="mailto:info@ashaltech.com">info@ashaltech.com</a></p><hr/>
                        	<span className="text-secondary"><i className="bx bx-location-plus"></i> ASHALTECH Pakistan Office</span><hr/>
                            <p><i className="bx bx-phone-call"></i> <span>Landline :</span> <a href="tel:Phone:+92 321 242 1700">+92 321 242 1700</a></p><hr/>
                            <p><i className="bx bx-envelope"></i> <span>Email:</span> <a href="mailto:pakistan@ashaltech.com">pakistan@ashaltech.com</a></p><hr/>
                        </div>
					</div>
					<RelatedPost 
						Date="September 23rd, 2017"
						Heading="ISO Standards"
						Text="ISO Standards & Risk Management Consulting We provide Consulting and Implementation services leading to certification on the following ISO Standards:ISO 27001 Information security management systems standardsISO 22301 Business continuity management systems standardsISO 9001 Quality management."
						pgLink="iso-standards"
					/>
				</div>
			</div>
		</section>
    )
}

export default BlogDetailsContent;
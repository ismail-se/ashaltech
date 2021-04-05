import React from 'react';
import Link from 'next/link'; 

const RelatedPost = ({Date,Heading,Text,pgLink}) => {
    return (
        <section className="blog-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<h3 className="mb-4">Related Posts</h3>
						<div className="single-blog">
							<img src="/img/blog/blog2.jpg" alt="Image" />	
							<span><i className="bx bx-calendar"></i> {Date}</span>	
							<div className="blog-content">		
								<h3>
                                    <Link href="/{pgLink}">
									    <a>{Heading}</a>
                                    </Link>
								</h3>
								<p>{Text}</p>
                                <Link href="/iso-standards">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</section>
    )
}

export default RelatedPost;
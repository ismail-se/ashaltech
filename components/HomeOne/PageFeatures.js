import React from 'react';
import Link from 'next/link';

const PageFeatures = ({Heading, Text}) => {
    return (
        <div className="features-area pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-6 p-0">
                        <div className="single-features">
                            <h3 className="text-center">{Heading}</h3>
                            <p className="text-center">{Text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageFeatures;
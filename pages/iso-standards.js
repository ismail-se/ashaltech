import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent1 from '../components/Blog/BlogDetailsContent1';
import Footer from '../components/_App/Footer';

const ISOStandards = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="ISO Standards" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="ISO Standards" 
            /> 
            <BlogDetailsContent1 />
            <Footer />
        </React.Fragment>
    )
}

export default ISOStandards;
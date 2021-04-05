import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogCardStyleOne from '../components/Blog/BlogCardStyleOne';
import Footer from '../components/_App/Footer';

const BlogLeftSidebar = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog Left Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Left Sidebar" 
            /> 
            <BlogCardStyleOne />
            <Footer />
        </React.Fragment>
    )
}

export default BlogLeftSidebar;
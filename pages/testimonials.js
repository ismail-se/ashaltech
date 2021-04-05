import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TestimonialsCard from '../components/Testimonials/TestimonialsCard';
import Footer from '../components/_App/Footer';

const Testimonials = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
            /> 
            <TestimonialsCard />
            <Footer />
        </React.Fragment>
    )
}

export default Testimonials;
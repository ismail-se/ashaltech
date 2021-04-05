import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../components/_App/Footer';

const ServiceDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Service Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Service Details" 
            /> 
            <ServiceDetailsContent />
            <Footer />
        </React.Fragment>
    )
}

export default ServiceDetails;
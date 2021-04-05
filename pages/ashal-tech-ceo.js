import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Features from '../components/ServicesStyleOne/Features';
import DigitalWorkflow from '../components/HomeThree/DigitalWorkflow';
import Footer from '../components/_App/Footer';

const AshalTech = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Ashal Tech CEO" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Ashal Tech CEO" 
            />
            <Features />
            <DigitalWorkflow /> 
            <Footer />
        </React.Fragment>
    )
}

export default AshalTech;
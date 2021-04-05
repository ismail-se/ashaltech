import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FeaturesCard from '../components/ServicesStyleTwo/FeaturesCard';
import ServicesCard from '../components/ServicesStyleTwo/ServicesCard';
import Footer from '../components/_App/Footer';

const ServicesTwo = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Services Style Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style Two" 
            /> 
            <FeaturesCard />
            <ServicesCard /> 
            <Footer />
        </React.Fragment>
    )
}

export default ServicesTwo;
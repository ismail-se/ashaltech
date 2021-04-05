import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Features from '../components/ServicesStyleOne/Features';
import WhyChooseUs from '../components/ServicesStyleOne/WhyChooseUs';
import Partner from '../components/Common/Partner';
import PageForm from '../components/Common/PageForm';
import Footer from '../components/_App/Footer';

const Services = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
            />
            <Features />
            <WhyChooseUs /> 
            <Partner />
            <PageForm
                Head="Get A Quote Today"
                Text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas."
            /> 
            <Footer />
        </React.Fragment>
    )
}

export default Services;
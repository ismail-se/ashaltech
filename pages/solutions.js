import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PageFeatures from '../components/HomeOne/PageFeatures';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import Partner from '../components/Common/Partner';
import PageForm from '../components/Common/PageForm';
import Footer from '../components/_App/Footer';

const Solutions = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Solutions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Solutions" 
            />
            <PageFeatures 
                Heading="OUR SOLUTIONS"
                Text="Custom & Off-The-Shelf Solutions For Your Business Needs."
            />
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

export default Solutions;
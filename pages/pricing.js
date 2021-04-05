import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingPlan from '../components/Pricing/PricingPlan';
import Footer from '../components/_App/Footer';

const Pricing = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
            /> 
            <div className="pt-100">
                <PricingPlan />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Pricing;
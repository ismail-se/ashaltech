import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import HighPerformanceSolutions from '../components/HomeOne/HighPerformanceSolutions';
import Testimonials from '../components/Common/Testimonials';
import WebsiteSecurity from '../components/HomeOne/WebsiteSecurity';
import OurServiceArea from '../components/HomeOne/OurServiceArea';
import WhyChooseUsStyleOne from '../components/Common/WhyChooseUsStyleOne';
import LatesNewStyleTwo from '../components/Common/LatesNewStyleTwo';
import Partner from '../components/Common/Partner';
import ProtectYourWebsite from '../components/Common/ProtectYourWebsite';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            <HighPerformanceSolutions />
            <Testimonials />
            <WebsiteSecurity />
            <OurServiceArea />   
            <WhyChooseUsStyleOne />
            <LatesNewStyleTwo />
            <Partner /> 
            <ProtectYourWebsite />
            <Footer />
        </React.Fragment>
    )
}

export default Index;
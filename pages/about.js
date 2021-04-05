import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PageFeatures from '../components/HomeOne/PageFeatures';
import Technologies from '../components/HomeOne/Technologies';
import WhyChooseUsStyleTwo from '../components/Common/WhyChooseUsStyleTwo';
import Testimonials from '../components/HomeOne/Testimonials';
import Partner from '../components/Common/Partner';
import PageForm from '../components/Common/PageForm';
import Footer from '../components/_App/Footer';

const About = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
            /> 
            <PageFeatures 
                Heading="PEOPLE WITH A DIFFERENCE"
                Text="Technologies Puts The Focus Back on Exceptional Service"
            />
            <Technologies />
            <WhyChooseUsStyleTwo />
            <Testimonials />
            <Partner />
            <PageForm
                Head="Get A Quote Today"
                Text="Please fill the form below and one of our representatives will get back to you shortly."
            />
            <Footer />
        </React.Fragment>
    )
}

export default About;
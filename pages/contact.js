import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PageFeatures from '../components/HomeOne/PageFeatures';
import ContactInfo from '../components/Contact/ContactInfo';
import PageForm from '../components/Common/PageForm';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact" 
            /> 
            <PageFeatures 
                Heading="Our IT Team's On-Hand To Help Everyday"
                Text=""
            />
            <ContactInfo />
            <PageForm
                Head="Talk To Us – We’re Here To Help"
                Text="ASHAL TECH is a fast growing one-stop-shop service provider for all your business needs. We provide all Business and IT Solutions, Services and Training in the region through our robust world class delivery processes."
            />
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}

export default Contact;
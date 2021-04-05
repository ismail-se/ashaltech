import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PageFeatures from '../components/HomeOne/PageFeatures';
import Partner from '../components/Common/Partner';
import PageForm from '../components/Common/PageForm';
import Footer from '../components/_App/Footer';

const Trainings = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Trainings" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Trainings" 
            />
            <PageFeatures 
                Heading="Knowledge. Skills. Tools. Performance. Impact"
            />
            <Partner />
            <PageForm
                Head="Get A Quote Today"
                Text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas."
            /> 
            <Footer />
        </React.Fragment>
    )
}

export default Trainings;
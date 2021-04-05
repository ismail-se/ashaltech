import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/_App/Footer';

const Team = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
            /> 
            <TeamCard />
            <Footer />
        </React.Fragment>
    )
}

export default Team;
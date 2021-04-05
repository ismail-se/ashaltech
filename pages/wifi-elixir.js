import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent2 from '../components/Blog/BlogDetailsContent2';
import Footer from '../components/_App/Footer';

const WifiElixir = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Wifi Elixir" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Wifi Elixir" 
            /> 
            <BlogDetailsContent2 />
            <Footer />
        </React.Fragment>
    )
}

export default WifiElixir;
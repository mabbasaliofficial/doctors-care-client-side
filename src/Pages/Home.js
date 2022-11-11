import React from 'react';
import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import Services from '../Components/Services';
import Treatment from '../Components/Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Treatment/>
            <Services/>
            <ContactUs/>
        </div>
    );
};

export default Home;
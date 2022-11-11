import React from 'react';
import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import Services from '../Components/Services';
import Treatment from '../Components/Treatment';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
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
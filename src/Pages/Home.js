import React from 'react';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import Treatment from '../Components/Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Treatment/>
            <Services/>
        </div>
    );
};

export default Home;
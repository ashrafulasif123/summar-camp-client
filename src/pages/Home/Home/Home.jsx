import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './Slider/Slider';
import Extrasection from '../Extrasection/Extrasection';
import PopularClassesPart from './PopularClassesPart/PopularClassesPart';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home | Sports Exut
                </title>
            </Helmet>
            <Slider></Slider>
            <PopularClassesPart></PopularClassesPart>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;
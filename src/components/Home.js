import React from 'react';
import About from './About';
import HeroPage from './HeroPage';
import Projects from './Projects';

const Home = () => {
    return (
        <>
        <HeroPage></HeroPage>
        <About></About>
        <Projects></Projects>
        </>
    );
};

export default Home;
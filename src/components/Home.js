import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroPage from './HeroPage';
import Projects from './Projects';

const Home = () => {
    return (
        <>
        <HeroPage></HeroPage>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        </>
    );
};

export default Home;
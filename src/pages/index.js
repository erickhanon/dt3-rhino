import React, { useState } from 'react';
import Banner from '../components/Banner';
import { homeObjone, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/Index';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
           <Sidebar isOpen = { isOpen } toggle = { toggle }/>
           <Navbar toggle = { toggle }/>
           <Banner />
            <InfoSection {...homeObjone}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    );
};

export default Home;

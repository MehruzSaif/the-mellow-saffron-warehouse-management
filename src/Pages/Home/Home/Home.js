import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import PremiumProducts from '../PremiumProducts/PremiumProducts';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <PremiumProducts></PremiumProducts>
        </>
    );
};

export default Home;
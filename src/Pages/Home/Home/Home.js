import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import PremiumItems from '../PremiumItems/PremiumItems';
import BestBrands from '../PremiumProducts/BestBrands';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <BestBrands></BestBrands>
            <PremiumItems></PremiumItems>
        </>
    );
};

export default Home;
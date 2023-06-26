import React, { useState } from 'react';

import NavBar from '../components/Dashboard/NavBar';
import TopBar from '../components/Dashboard/TopBar';
import Categories from '../components/Categories';
import Promotions from '../components/Dashboard/Promotions';
import Explore from '../components/Dashboard/Explore';
import SmallBanner from '../components/Dashboard/SmallBanner';
import Blogs from '../components/Dashboard/Blogs';
import ClaimOffer from '../components/Dashboard/ClaimOffer';
import Footer from '../components/Footer';
import Packages from '../components/Categories/Packages';

const Dashboard = () => {
    const [tobBarShow, setTobarShow] = useState(false);

    return (
        <>
            {!tobBarShow && <TopBar tobBarShow={tobBarShow} setTobarShow={setTobarShow} />}
            <NavBar />

            <Categories />

            <Promotions />

            <Explore />
           
            <ClaimOffer />

            <SmallBanner />

            <Blogs />

            <Packages />

            <Footer />
        </>
    );
}

export default Dashboard;
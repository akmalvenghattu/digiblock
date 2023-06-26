import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import Hotels from '../../components/Categories/Hotels';
import Fligths from '../../components/Categories/Fligths';
import HotelsAndFligths from '../../components/Categories/HotelsAndFligths';
import Activities from '../../components/Categories/Activities';

const Categories = () => {
    const search = useLocation()?.search;
    let tab = new URLSearchParams(search).get("tab") || 'hotels';



    const selectedTabs = [
        { selectedTab: <Hotels />, activeTab: 'hotels' },
        { selectedTab: <Fligths />, activeTab: 'flights' },
        { selectedTab: <HotelsAndFligths />, activeTab: 'hotelsandflights' },
        { selectedTab: <Activities />, activeTab: 'activities' }
    ];
    const bagimage = require("../../asset/images/sea.jpg");

    return (
        <div className={`flex justify-center items-center -m-4 z-1 relative `} style={{ backgroundImage: `url(${bagimage})` }} >
            <div className="flex flex-col justify-center md:justify-start items-center w-full sm:w-4/5 mx-4 sm:mx-0  p-10  bg-gray-100   shadow-sm shadow-slate-100 rounded-3xl">
                {selectedTabs?.filter(selectedTab => selectedTab.activeTab == tab).map((selectedTab) => selectedTab.selectedTab)}
                <div className='mt-8'>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 rounded-md py-4 px-24 md:px-20 font-bold text-xs md:text-sm text-white cursor-pointer"
                        onClick={() => alert("test search")} >
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Categories;
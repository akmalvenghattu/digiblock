import React, { useState } from 'react';

const SmallBanner = () => {
    const [activeStatus, setActiveStatus] = useState("1");

    return (
        <div className="w-full  md:p-16 p-10 ">

            <div className='flex justify-center border border-gray-300 p-10'>
                <img className='w-20 sm:w-28 h-20 sm:h-28' src={require("../../asset/images/GlobeGeniusBadge.png")} />
                <div className="flex flex-col w-full">
                    <div className="font-semibold text-2xl">
                        Get instant discounts
                    </div>
                    <span className="mt-2 text-xs sm:text-md break-words">Just sign into your Booking.com account and look for the </span>
                    <span className="mt-2 text-xs sm:text-md">blue Genius logo to save</span>
                    <div className="flex gap-x-1 sm:gap-x-2 mt-5 md:mt3">
                        <button className={`border ${activeStatus == 1 ? "border-blue-500" : ""} p-1 sm:p-2 w-16 sm:w-24 rounded-md text-xs sm:text-sm`} onClick={() => setActiveStatus(1)}>Sign</button>
                        <button className={`border ${activeStatus == 2 ? "border-blue-500" : ""} p-1 sm:p-2 w-16 sm:w-24 rounded-md text-xs sm:text-sm`} onClick={() => setActiveStatus(2)}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallBanner;
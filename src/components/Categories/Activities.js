import React from 'react';
import { BsSearch, BsPeopleFill } from "react-icons/bs";


const Activities = () => {
    return (
        <div className="flex justify-center items-center w-full relative mt-6 md:mt-12 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <BsSearch className='text-gray-400' />
            </div>
            <input type="text" className="w-full px-10 h-16 border border-gray-200 rounded-lg placeholder:text-gray-400 " placeholder="Search by city or activityy" />
        </div>
    );
}

export default Activities;
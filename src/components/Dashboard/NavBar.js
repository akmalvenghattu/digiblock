import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import { MdFlight } from "react-icons/md";
import { BsActivity } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { TbHotelService } from "react-icons/tb";
import { Link } from "react-router-dom";


const NavBar = () => {
    const search = useLocation()?.search;
    let tab = new URLSearchParams(search).get("tab") || 'hotels';
    const [activeTab, setActiveTab] = useState("1");


    const categories = [
        { value: 1, text: "Hotels", activeTab: 'hotels', activeStatus: "1", icons: <FaHotel className='w-3 h-3 md:w-4 md:h-4 ' /> },
        { value: 2, text: "Fligths", activeTab: 'flights', activeStatus: "2", icons: <MdFlight className='w-3 h-3 md:w-4 md:h-4 ' /> },
        { value: 3, text: "Hotels/ Fligths", activeTab: 'hotelsandflights', activeStatus: "3", icons: <TbHotelService className='w-3 h-3 md:w-4 md:h-4 ' /> },
        { value: 4, text: "Activities", activeTab: 'activities', activeStatus: "4", icons: <BsActivity className='w-3 h-3 md:w-4 md:h-4 ' /> }
    ];


    return (
        <div className='flex flex-col w-full bg-blue-600 relative pb-4'>
            <div className="flex justify-center p-5">
                <div className="w-16 h-16 ml-4 ">  <img src={require("../../asset/images/bookingnow.png")} /></div>
            </div>
            <div className="flex flex-col justify-center items-center px-8 pb-8">
                <div className="text-xl md:text-4xl font-bold text-white ">Find your next stay</div>
                <div className="text-lg md:text-base font-bold text-white">Search deals on Flights, hotels, homes, and much more...</div>
            </div>
            <div className='flex justify-center items-center '>
              
                <div className="flex w-full sm:w-2/3 mx-4 sm:mx-0 pt-4  bg-white -bottom-10  relative z-20 shadow-md shadow-slate-400 rounded-3xl overflow-hidden">
                    <div className="flex flex-grow gap-x-2 ">
                        {categories.map((category, index) => (
                            <Link className={`flex flex-col items-center justify-center w-1/4 ${tab == category.activeTab ? "bg-white transition duration-150 border-b-10 border-transparent border-blue-500" : "transition duration-150 border-b-8 border-transparent hover:border-blue-500 "} rounded-md cursor-pointer`}
                                to={`/?tab=${category.activeTab}`}  >
                                <div
                                    className={`flex flex-col justify-center items-center  p-2 font-bold ${tab == category.activeTab ?"text-violet-950":"text-blue-600"}  `}
                                    key={category.value}
                                    >

                                    {category.icons}
                                    <span className="text-xs sm:text-sm">  {category.text}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

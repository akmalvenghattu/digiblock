import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";

const TopBar = ({ tobBarShow, setTobarShow }) => {

    const starRatings = [1, 2, 3, 4, 5];
    return (
        <div className='w-full flex justify-between items-center px-2 md:px-4 py-2 md:py-3 bg-green-50'>
            <div className='flex items-center'>
                <div className="cursor-pointer">  <AiOutlineClose className='w-5 h-5' onClick={() => setTobarShow(!tobBarShow)} /></div>
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ml-4 border rounded-md p-1 md:p-2">  <img src={require("../../asset/images/WhiteBanner_Image.png")} /></div>
                <div className="px-2">
                    <span className="font-bold text-xs md:text-sm">Get extra 10% off on your 1st App booking</span>
                    <div className="flex items-center gap-x-1">
                        {starRatings.map((starRating, index) => (
                            <BsFillStarFill className='w-3 h-3 md:w-4 md:h-4 text-yellow-500' key={index} />
                        ))}
                        <span className="text-gray-400 text-xs md:text-sm">(3,655)</span>
                    </div>
                </div>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-xs md:text-sm text-white cursor-pointer"
                    onClick={() => alert("test coupon")} >
                    Get Coupon
                </button>
            </div>
        </div>
    );
}

export default TopBar;
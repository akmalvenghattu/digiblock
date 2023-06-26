import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center px-16 py-10 bg-gray-500">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <div className="text-white font-medium break-words">
                    All material herein © 2005–2023 ABCD Company Pte. Ltd. All Rights Reserved.
                </div>
                <div className="text-white font-medium break-words">
                    ABCD is part of Booking Holdings Inc., the world leader in online travel & related services.
                </div>
            </div>
            <div className="flex justify-center pt-5 gap-x-2 md:gap-x-10">
                <div className="w-12 sm:w-16 h-12 sm:h-16 ">  <img src={require("../asset/images/bookingnow.png")} /></div>
                <div className="w-12 sm:w-16 h-12 sm:h-16 ">  <img src={require("../asset/images/bookingnow.png")} /></div>
                <div className="w-12 sm:w-16 h-12 sm:h-16 ">  <img src={require("../asset/images/bookingnow.png")} /></div>
                <div className="w-12 sm:w-16 h-12 sm:h-16 ">  <img src={require("../asset/images/bookingnow.png")} /></div>
                <div className="w-12 sm:w-16 h-12 sm:h-16 ">  <img src={require("../asset/images/bookingnow.png")} /></div>
            </div>
        </div>
    );
}

export default Footer;
import React, { useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { BsSearch, BsPeopleFill } from "react-icons/bs";

const Hotels = () => {
    const [activeStatus, setActiveStatus] = useState("1");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (date) => {
        console.log(date)
        if (!startDate && !endDate) {
            setStartDate(date);

        } else if (startDate && !endDate) {
            setEndDate(date);
        }
        if (startDate && endDate) {
            setStartDate(date);
            setEndDate(null);
        }
    }


    return (
        <div className='flex flex-col w-full p-1 md:px-20'>
            <div className='flex items-center justify-center md:justify-start mt-3 md:mt-5 gap-x-2 md:gap-x-3'>
                <div className={`border ${activeStatus == 1 ? "border-blue-500" : "border-gray-300"} rounded-full py-1 px-2 hover:bg-blue-100 cursor-pointer`}
                    onClick={() => setActiveStatus(1)}>
                    Overnight Stays
                </div>
                <div className={`border ${activeStatus == 2 ? "border-blue-500" : "border-gray-300"} rounded-full py-1 px-2 hover:bg-blue-100 cursor-pointer`}
                    onClick={() => setActiveStatus(2)}>
                    Day Use Stays
                </div>
            </div>
            <div className="flex flex-col mt-8 gap-y-3">

                {activeStatus == 2 &&
                    <div className='break-words '><span className="text-pink-600">Day Use Stays</span> are inexpensive, 4-12 hour room rentals that are not overnight. Your check-in and check-out will be on the same date.</div>
                }
                <div className="flex justify-center items-center w-full relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <BsSearch className='text-gray-400' />
                    </div>
                    <input type="text" className="w-full px-10 h-16 border border-gray-200 rounded-lg placeholder:text-gray-400 " placeholder="Enter a destination or property" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <DatePicker
                        placeholder="please select on date"
                        containerClassName="border border-gray-200 rounded-lg overflow-hidden w-full "
                        inputClass="p-2 text-gray-400 border border-gray-200 rounded-lg overflow-hidden w-full"
                        value={startDate}
                        onChange={(date) => handleDateChange(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        selectsEnd
                        inline />
                    <div className="flex justify-center items-center w-full relative  rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <BsPeopleFill className='text-gray-400' />
                        </div>
                        <input type="text" className="w-full px-10 p-2 border border-gray-200 rounded-lg placeholder:text-gray-400 " placeholder="No. of rooms" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotels;
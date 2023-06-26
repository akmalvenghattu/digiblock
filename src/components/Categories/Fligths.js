import React, { useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { BsPeopleFill } from "react-icons/bs";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";
import { MdDepartureBoard } from "react-icons/md";

const Fligths = () => {
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
                    One-way
                </div>
                <div className={`border ${activeStatus == 2 ? "border-blue-500" : "border-gray-300"} rounded-full py-1 px-2 hover:bg-blue-100 cursor-pointer`}
                    onClick={() => setActiveStatus(2)}>
                    Round-trip
                </div>
            </div>
            <div className="flex flex-col mt-8 gap-y-3">

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className="flex justify-center items-center w-full relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <PiAirplaneTakeoffLight className='text-gray-700' />
                        </div>
                        <input type="text" className="w-full px-10 h-16 border border-gray-200 rounded-lg placeholder:text-gray-600 " placeholder="Flying from" />

                    </div>
                    <div className="flex justify-center items-center w-full relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <LuMapPin className='text-gray-700' />
                        </div>
                        <input type="text" className="w-full px-10 h-16 border border-gray-200 rounded-lg placeholder:text-gray-600 " placeholder="Flying to" />

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className={`${activeStatus == 2 && "grid grid-cols-1 md:grid-cols-2 gap-2"}`}>
                        <div className="flex justify-center items-center w-full relative  rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MdDepartureBoard className='text-gray-400' />
                            </div>
                            <input type="text" className="w-full px-10 p-2 border border-gray-200 rounded-lg placeholder:text-gray-400 " placeholder="Departure" />
                        </div>
                        {activeStatus == 2 &&
                            <DatePicker
                                placeholder="Return"
                                containerClassName="border border-gray-200 rounded-lg overflow-hidden w-full "
                                inputClass="p-2 text-gray-400 border border-gray-200 rounded-lg overflow-hidden w-full"
                                value={startDate}
                                onChange={(date) => handleDateChange(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                selectsEnd
                                inline />
                        }
                    </div>
                    <div className="flex justify-center items-center w-full relative  rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <BsPeopleFill className='text-gray-400' />
                        </div>
                        <input type="text" className="w-full px-10 p-2 border border-gray-200 rounded-lg placeholder:text-gray-400 " placeholder="Paasengers" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fligths;
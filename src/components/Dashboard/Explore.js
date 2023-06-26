import React from 'react';

const Explore = () => {

    return (
        <div className="flex flex-col justify-center items-center px-10 md:px-16">
            <div className="text-2xl font-semibold">Explore more travel vacation rentals</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="flex flex-col border border-gray-300">
                    <img className='w-full h-full' src={require("../../asset/images/rent/entire-apartment.jpg")} />
                    <div className="flex flex-col p-2">
                        <span className="font-semibold">Apartments</span>
                        <span className="text-gray-400">156,786 properties</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-300">
                    <img className='w-full h-full' src={require("../../asset/images/rent/entire-bungalow.jpg")} />
                    <div className="flex flex-col p-2">
                        <span className="font-semibold">Vacation Rentals</span>
                        <span className="text-gray-400">426,786 properties</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-300">
                    <img className='w-full h-full' src={require("../../asset/images/rent/entire-house.jpg")} />
                    <div className="flex flex-col p-2">
                        <span className="font-semibold">Private Villas</span>
                        <span className="text-gray-400">236,786 properties</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-300">
                    <img className='w-full h-full' src={require("../../asset/images/rent/entire-villa.jpg")} />
                    <div className="flex flex-col p-2">
                        <span className="font-semibold">Bungalows</span>
                        <span className="text-gray-400">676,786 properties</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Explore;
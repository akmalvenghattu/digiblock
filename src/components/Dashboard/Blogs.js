import React from 'react';

const Blogs = () => {
    return (
        <div className="flex flex-col  px-10 md:px-16">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Explore more travel vacation rentals</div>
                <div className="text-lg text-blue-500 hover:underline cursor-pointer">More</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

                <div className="flex flex-col ">
                    <img className='w-full h-full' src={require("../../asset/images/travel/225084214.jpg")} />
                    <div className="flex flex-col p-2">
                        <span className="break-words font-semibold">Europe’s finest and most scenic train rides</span>
                        <span className="text-gray-400 break-words">Not only is traveling by train a great way to see more of your destination</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="flex flex-col ">
                        <img className='w-full h-full' src={require("../../asset/images/travel/225084138.jpg")} />
                        <div className="flex flex-col p-2">
                            <span className="break-words font-semibold">Europe’s finest and most scenic train rides</span>
                            <span className="text-gray-400 break-words">Europe has some of the most scenic train routes in the world.</span>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <img className='w-full h-full' src={require("../../asset/images/travel/225084098.jpg")} />
                        <div className="flex flex-col p-2">
                            <span className="break-words font-semibold">Europe’s finest and most scenic train rides</span>
                            <span className="text-gray-400 break-words">ling by train a great way to see more of your destination</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
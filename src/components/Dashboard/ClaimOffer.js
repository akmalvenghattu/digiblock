import React from 'react';

const ClaimOffer = () => {
    return (
        <div className=" px-10 md:px-16 pt-10">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Claim Offer</div>
                <div className="text-lg text-blue-500 hover:underline cursor-pointer">More</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col rounded-3xl  overflow-hidden shadow-sm shadow-slate-200">
                    <img className='w-full ' src={require("../../asset/images/travel/Clear_MediaCard_600x200-2.webp")} />
                    <div className="flex flex-col px-2 py-4">
                        <span className="break-words font-semibold">Get CLEAR Plus for 2 Months FREE!</span>
                        <span className="text-gray-400 break-words">Summer travel made better. Get faster, easier security at 50+ airports nationwide with CLEAR Plus</span>
                    </div>
                    <div className="p-4 text-lg text-blue-500 hover:underline cursor-pointer">Claim Now</div>
                </div>
                <div className="flex flex-col rounded-3xl  overflow-hidden shadow-sm shadow-slate-200">
                    <img className='w-full ' src={require("../../asset/images/travel/HP_Package_MediaCard_600x200.webp")} />
                    <div className="flex flex-col px-2 py-4">
                        <span className="break-words font-semibold">Get CLEAR Plus for 2 Months FREE!</span>
                        <span className="text-gray-400 break-words">Summer travel made better. Get faster, easier security at 50+ airports nationwide with CLEAR Plus</span>
                    </div>
                    <div className="p-4 text-lg text-blue-500 hover:underline cursor-pointer">Claim Now</div>
                </div>
            </div>
        </div>
    );
}

export default ClaimOffer;
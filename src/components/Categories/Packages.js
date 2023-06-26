import React from 'react';

const Packages = () => {
    return (
        <div className="p-10 md:p-16 text-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-200 p-5 md:p-10 rounded-2xl">
                <div className="flex flex-col rounded-3xl  overflow-hidden shadow-sm shadow-slate-200">
                    <img className='w-full h-full' src={require("../../asset/images/travel/packages.webp")} />
                </div>
                <div className="flex flex-col justify-center md:justify-start items-center md:items-start p-5 md:p-10">
                    <span className='font-semibold text-gray-600 text-[14px]'>UNITED PACKAGES SWEEPSTAKES</span>
                    <div className="font-semibold text-xl md:text-5xl mt-4">Win an all-inclusive vacation for two</div>
                    <p className="font-serif break-words mt-5 text-[19px]">
                        Sign up for a chance to win a Los Cabos vacation for two including airfare, a romantic beach dinner, and 4-night accommodation at the all-inclusive Grand Fiesta Americana. Prize valued at $4,800. See <span className='text-blue-500 hover:underline cursor-pointer'>Official Rules</span> for details.
                    </p>

                    <button className="mt-5 p-2 font-semibold text-[17px] rounded-full bg-blue-500 hover:bg-blue-600 w-32 text-white">Enter to Win</button>
                </div>
            </div>
        </div>
    );
}

export default Packages;
import React, { useRef } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Promotions = () => {
    const carouselRef = useRef();
    const responsive = {
        0: { items: 1 },
        1280: { items: 2 },
    };

    return (
        <div className="p-10 md:p-16 text-2xl">
            <div className="font-semibold">Accommodation Promotions</div>
            <div className="flex justify-center items-center mt-5">
                <div className="flex w-full  bg-white  overflow-hidden relative">
                    <button
                        data-carousel="important-notes"
                        data-target="prev"
                        className="absolute top-1/2 transform -translate-y-1/2 z-[99] btn px-2   ml-2 rounded-full "
                        onClick={() => carouselRef.current.slidePrev()}>
                        <BsArrowLeftCircle className="w-5 h-7 md:w-10 md:h-10 text-black" />
                    </button>
                    <AliceCarousel
                        mouseTracking
                        // disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        ref={carouselRef} >

                        <img className='w-full h-full' src={require("../../asset/images/hotel-offers.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/Goibibo-Diwali-Hotel-Sale.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/hotel-offers.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/Goibibo-Diwali-Hotel-Sale.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/hotel-offers.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/Goibibo-Diwali-Hotel-Sale.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/hotel-offers.jpg")} />
                        <img className='w-full h-full' src={require("../../asset/images/Goibibo-Diwali-Hotel-Sale.jpg")} />
                    </AliceCarousel>
                    <button
                        data-carousel="important-notes"
                        data-target="next"
                        className="absolute  top-1/2 transform -translate-y-1/2 right-0 z-[99] btn px-2  mr-2 rounded-full bg-gary-400"
                        onClick={() => carouselRef.current.slideNext()}>
                        <BsArrowRightCircle className="w-5 h-7 md:w-10 md:h-10 text-black" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Promotions;
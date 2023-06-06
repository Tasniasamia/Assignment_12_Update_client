import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carusal = () => {
    return (
        <div>
         {/* [rgba(21, 21, 21, 0)] */}
         <Carousel>
                <div className=''>
                    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2016/01/port6.jpg" />
                    <div className=' mx-5
      md:-mt-64 -mt-64 py-10 md:py-0 md:w-1/2  bg-gradient-to-r space-y-4 md:text-left md:p-10 text-center'><div className='md:text-3xl text-white font-bold'>
        TRAIN WIH US &
        </div>
        <div className='text-dark md:text-5xl text-xl font-extrabold'>BECOME A PRO</div>
        <div className='text-white text-xl md:block hidden pb-20'>We train you with the best professional trainers for the specific sport you choose.</div>
        {/* <button  className="btn btn-outline border-0 border-b-2 border-s-2 mt-10 capitalize text-white  ">Learn More </button> */}

            </div>
                {/* <div className=' mx-5
      md:-mt-96 -mt-64 py-10 md:py-0 md:w-1/2  bg-gradient-to-r space-y-4 md:text-left md:p-10 text-center'><div className='md:text-3xl text-white font-bold'>
        TRAIN WIH US &
        </div>
        <div className='text-white md:text-5xl text-2xl font-extrabold'>FEEL ADRENALIN</div>
        <div className='text-white text-xl md:block hidden'>Get professional advise from experts in the
sport you love!</div>
        <button  className="btn btn-outline border-0 border-b-2 border-s-2 mt-10 capitalize text-white  ">Learn More </button>

            </div> */}
                </div>
                <div>
                    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2016/01/port8.jpg" />
                    <div className=' mx-5
      md:-mt-96 -mt-64 py-10 md:py-0 md:w-1/2  bg-gradient-to-r space-y-4 md:text-left md:p-10 text-center'><div className='md:text-3xl text-white font-bold'>
        TRAIN WIH US &
        </div>
        <div className='text-white md:text-5xl text-2xl font-extrabold'>FEEL ADRENALIN</div>
        <div className='text-white text-xl md:block hidden'>Get professional advise from experts in the
sport you love!</div>
        <button  className="btn btn-outline border-0 border-b-2 border-s-2 mt-10 capitalize text-white  ">Learn More </button>

            </div>
                </div>
                <div>
                    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2016/01/port7.jpg" />
                    <div className=' mx-5
      md:-mt-96 -mt-64 py-10 md:py-0 md:w-1/2  bg-gradient-to-r space-y-3 md:text-left md:p-20 text-center'><div className='md:text-3xl text-white font-bold'>
       BE A PART OF IT
        </div>
        <div className='text-white md:text-5xl text-xl font-extrabold'>WE CREATE HISTORY</div>
        <div className='text-white text-xl md:block hidden'>Get professional advise from experts in the
sport you love! Get professional advise from experts</div>
        

            </div>
                </div>
            </Carousel>    
        </div>
    );
};

export default Carusal;
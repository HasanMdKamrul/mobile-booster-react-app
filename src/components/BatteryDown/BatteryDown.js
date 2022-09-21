/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const BatteryDown = () => {
    const [charge,setCharge] = useState(100);

    // chargeDownHandler

    const chargeDownHandler = ()=>{
        const newCharge = charge - 10;
        newCharge <= 0 ? setCharge(0) : setCharge(newCharge);
    };

    // ** chargeBoostHandler

    const chargeBoostHandler = ()=>{
        const newCharge = charge + 10;
        newCharge > 100 ? setCharge(100) : setCharge(newCharge)
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Mobile Charge Percentage</h1>
                        <p className="max-w-2xl mb-6 font-light text-blue-700 lg:mb-8 md:text-lg lg:text-6xl  dark:text-blue-700">{(charge === 0 ? "Battery died" : charge === 100 ? "Battery full" : charge)}</p>
                        <button onClick={chargeDownHandler} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Charge Down
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <button onClick={chargeBoostHandler} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Charge Boost
                        </button> 
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
                    </div>                
                </div>
            </section>
        </div>
    );
};

export default BatteryDown;
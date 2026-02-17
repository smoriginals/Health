import React from 'react';
import cnbc from "../assets/cnbc.svg";
import economic from "../assets/economic.svg";
import entrackr from "../assets/entrackr.svg";
import inc42 from "../assets/inc42.svg";
import yourstory from "../assets/yourstory.svg";

export default function HexaNews() {
    return (
        <>
            <div className='flex h-60 w-full flex-col flex-nowrap justify-center p-8 text-center text-gray-600'>
                <h1 className='text-2xl font-bold'>Hexa In The News</h1>

                <div className='mt-8 flex items-center justify-evenly gap-10 overflow-x-auto'>

                    <img src={yourstory} alt="yourstory" className='h-20 w-auto' />
                    <img src={economic} alt="economic" className='h-10 w-auto' />
                    <img src={inc42} alt="inc42" className='h-8 w-auto' />
                    <img src={cnbc} alt="cnbc" className='h-14 w-auto' />
                    <img src={entrackr} alt="entrackr" className='h-8 w-auto' />
                </div>

            </div>
        </>

    )
}
import React from 'react';
import { Activity } from "lucide-react";
export default function HexaNews() {
    return (
        <>
            <div className='h-60 w-full flex justify-center p-8 text-gray-600 flex-col flex-nowrap text-center'>
                <h1 className='text-2xl font-bold'>Hexa In The News</h1>

                <div className='flex justify-evenly items-center mt-8'>
                    <Activity size={40} />
                    <Activity size={40} />
                    <Activity size={40} />
                    <Activity size={40} />
                </div>

            </div>
        </>

    )
}
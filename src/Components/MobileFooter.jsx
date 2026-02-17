import React from 'react';
import { Calendar, HandHeart, Bot, UsersRound, CircleUserRound } from 'lucide-react';
export default function MobileFooter() {
    return (
        <>
            <footer className="fixed bottom-0 flex h-20 w-full items-center justify-center border-t-2 bg-white md:hidden">
                <div className='flex w-full items-center justify-between px-6'>
                    <div><Calendar size={30} /><p></p></div>
                    <div><HandHeart size={30} /></div>
                    <div><Bot size={30} /></div>
                    <div><UsersRound size={30} /></div>
                    <div><CircleUserRound size={30} /></div>
                </div>
            </footer>
        </>
    );
}
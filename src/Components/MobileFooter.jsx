import React from 'react';
import { Calendar, HandHeart, Bot, UsersRound, CircleUserRound } from 'lucide-react';
import BookingAppointments from './BookingAppointments';


export default function MobileFooter() {
    return (
        <footer className="fixed bottom-0 flex h-20 w-full items-center justify-center border-t-2 bg-white md:hidden">
            <div className=" flex w-full items-center justify-between px-2">

                {/*<button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">*/}
                {/*    <Calendar size={24} />*/}
                {/*    <span className="text-center leading-tight">*/}
                {/*        Book<br />Appointments*/}
                {/*    </span>*/}
                {/*</button>*/}

                <BookingAppointments>
                    <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                        <Calendar size={24} />
                        <span className="text-center leading-tight">Book<br />Appointments </span>
                    </button>
                </BookingAppointments>


                <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                    <HandHeart size={24} />
                    <span className="text-center leading-tight">
                        Second<br />Opinion
                    </span>
                </button>

                <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                    <Bot size={24} />
                    <span className="text-center leading-tight">
                        Ask<br />HealthGPT
                    </span>
                </button>

                <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                    <UsersRound size={24} />
                    <span className="text-center leading-tight">
                        Health<br />Community
                    </span>
                </button>

                <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                    <CircleUserRound size={24} />
                    <span className="text-center leading-tight">
                        Login<br />Now
                    </span>
                </button>

            </div>
        </footer>
    );
}
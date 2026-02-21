import React from 'react';
import { Calendar, HandHeart, Bot, UsersRound, CircleUserRound } from 'lucide-react';

import BookingAppointments from '../Main/BookingAppointments';
import SecondOption from '../Main/SecondOption';
import AskGpt from '../Main/AskGpt';
import Community from '../Main/Community';
import LoginDrawer from '../Header/LoginDrawer';


export default function MobileFooter() {
    return (
        <footer className="fixed bottom-0 z-40 flex h-20 w-dvw items-center justify-center border-t-2 bg-white px-4 md:hidden">
            <div className="flex w-full justify-between">

                <div>
                    <BookingAppointments>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                            <Calendar size={24} />
                            <span className="text-center leading-tight">
                                Book <br />Appointments </span>
                        </button>
                    </BookingAppointments>
                </div>

                <div>
                    <SecondOption>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                            <HandHeart size={24} />
                            <span className="text-center leading-tight">
                                Second<br />Opinion
                            </span>
                        </button>
                    </SecondOption>
                </div>

                <div>
                    <AskGpt>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                            <Bot size={24} />
                            <span className="text-center leading-tight">
                                Ask<br />HealthGPT
                            </span>
                        </button>
                    </AskGpt>
                </div>

                <div>
                    <Community>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                            <UsersRound size={24} />
                            <span className="text-center leading-tight">
                                Health<br />Community
                            </span>
                        </button>
                    </Community>
                </div>
                <div>
                    <LoginDrawer>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:text-blue-500">
                            <CircleUserRound size={24} />
                            <span className="text-center leading-tight">
                                Login<br />Now
                            </span>
                        </button>
                    </LoginDrawer>
                </div>

            </div>
        </footer>
    );
}
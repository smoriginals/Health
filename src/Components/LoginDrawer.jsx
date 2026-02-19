import { CircleUserRound } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LoginDrawer({ children }) {
    const [mobile, setMobile] = useState("");

    const handleLogin = () => {
        console.log("Mobile:", mobile);
    };

    return (
        <Sheet>

            {/* Trigger */}
            <SheetTrigger asChild>
                {children ? (
                    children
                ) : (
                    <Button
                            className="w-9 h-9 rounded-full border flex justify-center items-center"
                        variant="outline"
                    >
                        <CircleUserRound stroke="blue" size={20} />
                    </Button>
                )}
            </SheetTrigger>

            {/* Drawer */}
            <SheetContent side="bottom" className="rounded-t-2xl">
                <SheetHeader className="text-left">
                    <SheetTitle className="text-2xl">Login</SheetTitle>
                    <SheetDescription className="text-sm font-semibold">
                        Enter your mobile number to receive a verification code.
                    </SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-4">
                    <Input
                        type="tel"
                        placeholder="Enter mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="h-14"
                    />

                    <Button
                        className="h-12 w-full"
                        onClick={handleLogin}
                        disabled={!mobile}
                    >
                        Verify & Login
                    </Button>
                </div>
            </SheetContent>

        </Sheet>
    );
}

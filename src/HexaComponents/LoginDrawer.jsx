import { useState } from "react"
import { CircleUserRound } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function LoginDrawer({ children }) {
    const [mobile, setMobile] = useState("")

    const handleLogin = () => {
        console.log("Mobile:", mobile)
    }

    // Shared Trigger
    const TriggerUI = children ? (
        children
    ) : (
        <Button
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            variant="outline"
        >
            <CircleUserRound stroke="blue" size={20} />
        </Button>
    )

    // Shared Form
    const FormUI = (
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
    )

    return (
        <>
            {/* MOBILE */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        {TriggerUI}
                    </SheetTrigger>

                    <SheetContent side="bottom" className="rounded-t-2xl">
                        <SheetHeader className="text-left">
                            <SheetTitle className="text-2xl">
                                Login
                            </SheetTitle>
                            <SheetDescription className="text-sm font-semibold">
                                Enter your mobile number to receive a verification code.
                            </SheetDescription>
                        </SheetHeader>

                        {FormUI}
                    </SheetContent>
                </Sheet>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
                <Dialog>
                    <DialogTrigger asChild>
                        {TriggerUI}
                    </DialogTrigger>

                    <DialogContent className="max-w-sm">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                Login
                            </DialogTitle>
                            <DialogDescription className="text-sm font-semibold">
                                Enter your mobile number to receive a verification code.
                            </DialogDescription>
                        </DialogHeader>

                        {FormUI}
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}
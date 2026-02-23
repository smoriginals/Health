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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

export default function LoginDrawer({ children }) {
    const [mobile, setMobile] = useState("")

    // Strict Indian mobile validation
    const isValidMobile = /^[6-9]\d{9}$/.test(mobile)

    const handleLogin = () => {
        if (!isValidMobile) return
        console.log("Valid Mobile:", mobile)
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
        <div className="mt-6 space-y-4 w-full flex flex-col justify-center items-center">

            <InputOTP
                maxLength={10}
                value={mobile}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={(value) => {
                    // Remove non-digits
                    let numbersOnly = value.replace(/\D/g, "")

                    // Enforce first digit between 6-9
                    if (numbersOnly.length === 1 && !/[6-9]/.test(numbersOnly)) {
                        numbersOnly = ""
                    }

                    setMobile(numbersOnly)
                }}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} className='border-gray-600' />
                    <InputOTPSlot index={1} className='border-gray-600' />
                    <InputOTPSlot index={2} className='border-gray-600' />
                    <InputOTPSlot index={3} className='border-gray-600' />
                    <InputOTPSlot index={4} className='border-gray-600' />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={5} className='border-gray-600' />
                    <InputOTPSlot index={6} className='border-gray-600' />
                    <InputOTPSlot index={7} className='border-gray-600' />
                    <InputOTPSlot index={8} className='border-gray-600' />
                    <InputOTPSlot index={9} className='border-gray-600' />
                </InputOTPGroup>
            </InputOTP>

            <Button
                className="h-12 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleLogin}
                disabled={!isValidMobile}
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

                    <DialogContent className="w-full max-w-lg p-8">
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
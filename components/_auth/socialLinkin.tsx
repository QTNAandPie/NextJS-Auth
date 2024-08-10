"use client"

import { FcGoogle } from "react-icons/fc"
import { FaYahoo } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export function Social() {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="default"
                className="w-full"
                variant="outline"
                onClick={() => {}}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size="default"
                className="w-full"
                variant="outline"
                onClick={() => {}}
            >
                <FaYahoo className="h-5 w-5" />
            </Button>
        </div>
    )
}
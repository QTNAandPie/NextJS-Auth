'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col justify-center items-center bg-gradient-to-tr to-cyan-800 from-emerald-500">
            <div className="bg-white text-center p-5 rounded-lg shadow-lg">
                <h1 className="text-8xl text-black">404</h1>
                <p className="mt-2 text-black">Look like you go wrong page</p>
                <p className="mt-1 text-black underline">Press the back arrow in your browser to get your previous page</p>
            </div>
        </div>
    )
}
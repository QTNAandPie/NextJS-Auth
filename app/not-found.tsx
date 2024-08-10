'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col justify-center items-center bg-gradient-to-bl to-blue-500 from-pink-400">
            <div className="text-center">
                <h1 className="text-8xl text-white">404</h1>
                <p className="mt-2 text-white">Look like you go wrong page</p>
                <p className="mt-1 text-white">Press the back arrow in your browser to get your previous page</p>
            </div>
        </div>
    )
}
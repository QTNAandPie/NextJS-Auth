import { SignInInteractive } from "@/components/_auth/SignInInteractive";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex h-screen flex-col justify-center items-center bg-gradient-to-bl to-blue-500 from-pink-400">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mt-1">Auth Application</h1>
                <p className="text-white text-center mb-5">Testing auth system</p>
                <div className="mb-2 space-x-2">
                    <SignInInteractive><Button className="bg-slate-500" size="sm">Sign in</Button></SignInInteractive>
                </div>
            </div>
        </main>
    )
}
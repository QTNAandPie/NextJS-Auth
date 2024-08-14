import { SignInInteractive } from "@/components/_auth/SignInInteractive";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="h-screen bg-gradient-to-bl to-blue-500 from-pink-400">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white w-[400px] p-5 rounded-lg shadow-2xl">
                <h1 className="text-4xl font-bold text-black mb-5">Auth Application</h1>
                <p className="text-black text-center mb-5">Testing auth system</p>
                <div>
                    <SignInInteractive><Button className="bg-slate-500" size="sm">Sign in</Button></SignInInteractive>
                </div>
            </div>
        </main>
    )
}
export default function AuthLayout({ children }: { children: React.ReactNode}) {

    return (
        <div className="flex h-screen flex-col justify-center items-center bg-gradient-to-tl to-green-500 from-blue-400">
            {children}
        </div>
    )
}
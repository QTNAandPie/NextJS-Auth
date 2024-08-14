export default function AuthLayout({ children }: { children: React.ReactNode}) {

    return (
        <div className="h-screen bg-gradient-to-tl to-green-500 from-blue-400">
            {children}
        </div>
    )
}
'use client'

import { useRouter } from "next/navigation";

interface ButtonInteractiveProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const SignInInteractive = ({
    children,
    mode = "redirect",
    asChild
}: ButtonInteractiveProps) => {
    const router = useRouter()

    const OnClick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            // TODO
            <span>
                TODO: IMPLEMENT MODAL
            </span>
        )
    }

    return (
        <span onClick={OnClick} className="cursor-pointer">
            {children}
        </span>
    )
}
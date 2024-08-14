"use client"

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "../ui/card";
import { BackButton } from "./backButton";
import { Header } from "./header";
import { Social } from "./socialLinkin";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export function CardWrapper({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) {
    return (
        <Card className="w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}

            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}
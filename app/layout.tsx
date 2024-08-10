import "./globals.css"
import { Be_Vietnam_Pro } from 'next/font/google';

import { cn } from "@/lib/utils"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Next.JS",
  description: "Build in Next.JS, Typescript JSX"
}

export const font = Be_Vietnam_Pro({
  subsets : ["latin"],
  weight : "600"
})

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          font.className
        )}
      >
        {children}
      </body>
    </html>
  )
}

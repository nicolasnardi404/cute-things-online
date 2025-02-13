import { Press_Start_2P, Courier_Prime } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import { Toaster } from "@/components/ui/toaster"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
})

export const metadata = {
  title: "CUTE THINGS ONLINE",
  description: "A cozy corner of the internet for cute pixel art and creative projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${courierPrime.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'
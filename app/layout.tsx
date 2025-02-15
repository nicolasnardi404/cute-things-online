import { Press_Start_2P, Courier_Prime } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import LoadingWrapper from "../components/LoadingWrapper"
import Footer from "@/components/Footer"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-courier-prime",
})

export const metadata = {
  title: "CUTE THINGS ONLINE",
  description: "A cozy corner of the internet for cute pixel art and creative projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${courierPrime.variable}`}>
      <body>
        <LoadingWrapper>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider>
              <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {children}
                <Footer />
              </div>
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </LoadingWrapper>
      </body>
    </html>
  )
}

import './globals.css'
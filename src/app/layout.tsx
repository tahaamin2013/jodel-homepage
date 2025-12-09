import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shisha Bar - Shisha Lounge & Mediterranean Restaurant",
  description: "Welcome to Shisha Bar - A Shisha Lounge, Bar and Mediterranean Restaurant based in Oxford",
  generator: "v0.app",
}

// const corinthia = Corinthia({
//   subsets: ["latin"],
//   variable: "--font-corinthia",
//   weight: ["400"], // Corinthia has only one weight
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
      style={{ fontFamily: "Bauhaus" }}
       className={`font-sans scroll-smooth  antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import { Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Metadata } from "next"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-opensans",
})

export const metadata: Metadata = {
  title: "REVentureInsights",
  description: "Catalysing Connectivity Between Emerging Real Estate Managers, Landlords and Capital Partners",
  icons: {
    icon: "/images/RVI-favicon.png",
    apple: "/images/webclip.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={openSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

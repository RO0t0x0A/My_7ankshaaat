import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samy Akram - Cyber Security Engineer | Links",
  description:
    "Connect with Samy Akram, a passionate cyber security engineer. Find all my social media links and professional profiles in one place.",
  keywords: "cyber security, ethical hacker, security engineer, social media links",
  authors: [{ name: "Samy Akram" }],
  openGraph: {
    title: "Samy Akram - Cyber Security Engineer",
    description: "Connect with me across all platforms",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

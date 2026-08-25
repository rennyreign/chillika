import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chillika – From Odisha's Soul to India's Streets",
  description:
    "Every bite tells a story. Experience the vibrant flavours of Odisha with a modern street food twist.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Chillika – From Odisha's Soul to India's Streets",
    description:
      "Every bite tells a story. Experience the vibrant flavours of Odisha with a modern street food twist.",
    locale: "en_GB",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <div className="scroll-progress" />
        {children}
      </body>
    </html>
  )
}

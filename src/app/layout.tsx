import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GSM.ASIA - Premier GSM Marketplace',
  description: 'Unlock devices, access tools, and find certified services instantly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

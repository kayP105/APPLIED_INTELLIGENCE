import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Applied Intelligence Academy | AI Productivity & Career Training for MBA & Management Students',
  description: 'Applied Intelligence Academy helps MBA, BBA and management students master AI tools and become placement-ready professionals. AI training for non-engineers across India.',
  keywords: 'AI for MBA students, AI for management students, AI for non-engineers, AI productivity course India, placement training MBA, career readiness program, AI skills for BBA students',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
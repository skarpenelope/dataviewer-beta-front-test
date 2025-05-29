import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { DefaultSidebar } from '@/components/ui/sidebar'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: 'Dataviewer Beta',
  description: 'A beta version of the Dataviewer application by Natalnet'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex min-h-screen'>
          <aside className='w-64'>
            <DefaultSidebar/>

          </aside>

          <main className='flex-1 p-6'>{children}</main>

        </div>
      </body>
    </html>
  )
}

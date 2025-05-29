import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Sidebar } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

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
        <SidebarProvider>
         <div className='flex h-screen'>
          <Sidebar/>
          <main className='flex-1 overflow-auto'>{children}</main>
        </div>
       
        </SidebarProvider>
      </body>
    </html>
  )
}

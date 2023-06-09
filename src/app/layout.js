import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './Provider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Movie App',
  description: 'Created by Zubby',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}

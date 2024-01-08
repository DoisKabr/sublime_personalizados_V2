import { Inter } from 'next/font/google'
import './globals.css'

import Header from './modulos/header'
import Footer from './modulos/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import { MenuMain } from '../../components/molecules/menu/Menu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio de John Jairo Cortes Murillo',
  description: 'Desarrollador front-end, Docente e Investigador',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MenuMain></MenuMain>
      {children}
      </body>
    </html>
  )
}

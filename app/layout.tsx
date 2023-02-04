import Header from '@/components/Header'
import '@/styles/globals.css'
import { font } from './font'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

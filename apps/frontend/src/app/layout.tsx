import { Inter } from 'next/font/google';
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shiploads',
  description: 'Shiploads modern site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

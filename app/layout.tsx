
import type { Metadata } from 'next'
import { BackDropContextProvider, FileContextProvider, LoaderContextProvider, ThemeContextProvider } from '@/hooks';
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'SpringTown AI Assistant',
  description: 'A Leading Generated AI platform to help the businesses to grow & scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <BackDropContextProvider>
          <LoaderContextProvider>
            <body className='h-screen bg-[#f3f3ee]'>
              <div className='h-full'>
                <FileContextProvider>
                  {children}
                </FileContextProvider>
                <ToastContainer />
              </div>
            </body>
          </LoaderContextProvider>
        </BackDropContextProvider>
      </ThemeContextProvider>
    </html>
  )
}

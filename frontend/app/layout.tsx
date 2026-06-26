import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Focus Study Well | Learn Biotechnology & Microbiology',
  description: 'Master Biotechnology and Microbiology with simplified notes, diagrams, quizzes, and downloadable PDFs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light dark:bg-dark text-dark dark:text-light">
        {children}
      </body>
    </html>
  )
}

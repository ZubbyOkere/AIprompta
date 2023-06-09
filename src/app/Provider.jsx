'use client'
import { ThemeProvider } from 'next-themes'

const Provider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true}>
      <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Provider

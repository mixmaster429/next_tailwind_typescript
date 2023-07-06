import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeChanger() {
  const { theme, setTheme } = useTheme() // useTheme only works on client-side.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>
  else
    return (
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
        <div className='pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5'>
          <div className='h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out'></div>
        </div>
      </div>
    )
}

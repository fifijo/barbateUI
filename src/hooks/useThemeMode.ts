import { useEffect, useState } from 'react'

export const useThemeMode = (): object => {
  const [theme, setTheme] = useState('dark')

  const setMode = (mode: string): void => {
    window.localStorage.setItem('theme', mode)

    setTheme(mode)
  }

  const themeToggler = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const localTheme = JSON.parse(localStorage.getItem('theme') ?? '{}')

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTheme(localTheme)
  }, [])

  return { theme, themeToggler }
}

export default useThemeMode

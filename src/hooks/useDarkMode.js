import React from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [ isDark, setIsDark ] = useLocalStorage('key', initialValue)

   

   // We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode.



    return [isDark, setIsDark]

  
}

export default useDarkMode

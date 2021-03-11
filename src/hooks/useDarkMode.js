import React from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [ isDark, setIsDark ] = useLocalStorage('key', initialValue)

    
   


    
    return [isDark, setIsDark]

  
}

export default useDarkMode

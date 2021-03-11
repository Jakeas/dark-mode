import { useState } from 'react'

const useLocalStorage = (key, initialValue) => 
{console.log(initialValue)
    console.log({key})
    const [storedValue, setStoredValue] = useState(() => {
    
        const item = window.localStorage.getItem(key)
         console.log({item})   
        return item ? JSON.parse(item) : initialValue 

    })
    console.log({storedValue})
        const setValue = (value) => {
            console.log({value})
            setStoredValue(value)    
            window.localStorage.setItem(key, JSON.stringify(value))   
        }
        
    return [storedValue, setValue]

}

export default useLocalStorage

import { useState, createContext } from "react"

export const IsPlayingContext = createContext(null)
export const IsPlayingProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const value = {isPlaying, setIsPlaying}
    return (  
    <IsPlayingContext.Provider value={value}>
        {children}
    </IsPlayingContext.Provider>
  )
}

import { useState, createContext} from "react";

export const TimerContext = createContext(null)
export const TimerProvider = ({children}) =>{
    const [currentTimer, setTimer] = useState('1800');
    const value = {currentTimer, setTimer}

    return(
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    )
}
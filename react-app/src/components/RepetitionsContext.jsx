import { useState, createContext } from "react";

export const RepetitionsContext = createContext(null);
export const RepetitionsProvider = ({children}) => {
    const [currentRepetitions, setRepetitions] = useState(0);
    value = {currentRepetitions, setRepetitions}
    return(
        <RepetitionsContext.Provider value={value}>
            {children}
        </RepetitionsContext.Provider>
    )
}
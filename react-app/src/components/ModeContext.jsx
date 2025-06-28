import { useState, createContext} from "react";

export const ModeContext = createContext(null);
export const ModeProvider = ({children}) => {
  const [ispomodoro, setPomodoro] = useState(true);
  const value = {ispomodoro, setPomodoro};
  return(
    <ModeContext.Provider value={value}>
        {children}
    </ModeContext.Provider>)
}
import { useState, createContext} from "react";
import BreakStyle from "./BreakStyle";
import PomodoroStyle from './PomodoroStyle';

export const ModeContext = createContext(null);
export const ModeProvider = ({children}) => {
  const [ispomodoro, setpomodoro] = useState(true);
  const ModesStyles = ispomodoro ? PomodoroStyle: BreakStyle;

  const value = {ispomodoro, setpomodoro, ModesStyles};
  return(
    <ModeContext.Provider value={value}>
        {children}
    </ModeContext.Provider>)
}
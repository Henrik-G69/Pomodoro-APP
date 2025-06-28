import { useState, createContext} from "react";

export const TaskContext = createContext(null);
export const TaskProvider = ({children}) => {
    const[currentTask,setTask] = useState('Current Task');
    const value = {currentTask, setTask}
    return(
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

import { useContext } from "react";
import EditingDiv from "./EditingDiv";
import { TaskContext } from "./TaskContext";

export default function Task({style}) {
  const {currentTask, setTask} = useContext(TaskContext);
  return (
    <EditingDiv changecontent= {setTask} content={currentTask} style={style} divclass={'currentTask'}></EditingDiv>
  )
}

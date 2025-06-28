import Timer from '../components/Timer'
import Task from '../components/Task'
import TimerControls from './TimerControls'
import MusicControls from './MusicControls'

export default function PomodoroTimer() {
  return (
    <div className='Timer'>
      <Task></Task>
      <Timer></Timer>
      <TimerControls></TimerControls>
      <MusicControls></MusicControls>
    </div>
  )
}

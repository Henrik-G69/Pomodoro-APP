import Button from '../components/Button';
import { useState } from 'react';
import List from '../components/List';
import SoundOnIcon from '../assets/icons/sound-on.svg'
import SoundOffIcon from '../assets/icons/sound-off.svg'
import ArrowDownIcon from '../assets/icons/arrow-down-circle.svg'

const Songs = ['song1', 'song1']
export default function MusicControls() {
  const [isContainerShowing, setContainerView]  = useState(false);
  const [currentSong,setSong] = useState(Songs[1]);
  const [isPlaying, setPlaying] = useState (true);

  const clickingPlayingButton = () =>{
  setPlaying(!isPlaying);
}
  const selectSong = (item) => {
    setSong(item);
    setContainerView(false);
  }

  return (
    <div className='musicControl'>
    <Button>
      <img src = { isPlaying === true ? SoundOnIcon : SoundOffIcon} onClick = {clickingPlayingButton} alt='song playing'/>
      <p>Currently Playing {currentSong}</p>
      <img src= {ArrowDownIcon} onClick = {() => {setContainerView(!isContainerShowing)}} alt='show songs list'
      style={{transform: isContainerShowing ? 'rotate(180deg)' : null ,
        transition: 'transform 0.2s ease-in-out'
      }}
      />
    </Button>
      {
        <List listClass='songsList' style={{display: isContainerShowing ? 'block' : 'none'}}>
            {Songs.map((item,index) => {
              return <li key={index}>{index+1}. {item}</li>
          })}
        </List>
      }
    </div>
  )
}

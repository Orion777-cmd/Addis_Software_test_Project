import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Homepage from './pages/Homepage/homepage.component';
import { createMusic } from './firebase/firebase.utils';

function App() {
  const [count, setCount] = useState(0)
  const musicData = {
    title: 'My Song',
    artist: 'My Artist',
    genre: 'Pop',
    duration: '3:30',
    releaseDate: '2023-10-13',
    album: 'My Album',
    coverArtUrl: 'https://example.com/cover-art.jpg',
    audioFileUrl: 'https://example.com/audio-file.mp3'
  };
  useEffect( () => {

    createMusic(musicData);

  },[])

  return (
    <div className="App">

      <Homepage />
      
    </div>
  )
}

export default App

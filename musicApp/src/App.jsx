import { useState, useEffect } from 'react'
import styled from "@emotion/styled"

const AppContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: transparent;
`

// import './App.css'

import Homepage from './pages/Homepage/homepage.component';
import { createMusic } from './firebase/firebase.utils';
import {Header} from './components/Header/header.component';

function App() {
  
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
    <AppContainer>
      <Header />
      <Homepage />
      
    </AppContainer>
  )
}

export default App

import { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import "./App.css"
import {useSelector } from "react-redux"

const AppContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`

// import './App.css'

import Homepage from './pages/Homepage/homepage.component';

import {Header} from './components/Header/header.component';
import Footer from './components/footer/footer.component';

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

  },[])

  const {mode } = useSelector(state => state.theme)
  console.log("App mode: ", mode)

  return (
    <AppContainer className={mode === "dark"? 'dark-theme' : 'light-theme'}>
      
      <Header />
      <Homepage />
      <Footer />
            
    </AppContainer>
  )
}

export default App

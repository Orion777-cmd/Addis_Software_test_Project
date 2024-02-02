import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import Input from '../CustomInput/customInput.component';
import styled from '@emotion/styled';

import {useSelector} from "react-redux"

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid {(mode) => (mode === "dark" ? "#fff" : "#000")};
  background: ${(mode) => (mode === "dark" ? "#000" : "#fff")};
  color: ${(mode) => (mode === "dark" ? "#fff" : "#000")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;

  button{
    background-color: ${(mode) => (mode === "dark" ? "#fff" : "#000")};
    color: ${(mode) => (mode === "dark" ? "#000" : "#fff")};
    border : none;
    cursor: pointer;
    

  }
`;
const MusicForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    duration: '',
    coverArtUrl: '',
    audioFileUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormData({
      title: '',
      artist: '',
      genre: '',
      duration: '',
      coverArtUrl: '',
      audioFileUrl: ''
    });
    
  };

  const {mode} = useSelector(state => state.theme)


  return (
    <FormContainer className='container' mode={mode} as="form" onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()} >
      <Box mb={1}>
        <label>Title:</label>
        <Input type="text" name="title" value={formData.title} onChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Artist:</label>
        <Input type="text" name="artist" value={formData.artist} onChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Genre:</label>
        <Input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Duration:</label>
        <Input type="text" name="duration" value={formData.duration} onChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Cover Art URL:</label>
        <Input type="text" name="coverArtUrl" value={formData.coverArtUrl} onChange={handleChange} />
      </Box>
     
      <Button type="submit" >Submit</Button>
    </FormContainer>
  );
};

export default MusicForm;
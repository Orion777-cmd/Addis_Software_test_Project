import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import CustomInput from '../CustomInput/customInput.component';
import styled from '@emotion/styled';

import {useSelector, useDispatch} from "react-redux"
import { postMusicAction } from '../../redux/music/music.reducer';


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
const MusicForm = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    duration: '',
    coverArtUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name is: ", name, "value: ", value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data is : ", formData)
    dispatch(postMusicAction(formData));
    setFormData({
      title: '',
      artist: '',
      genre: '',
      duration: '',
      coverArtUrl: '',
      
    });
    
  };

  const {mode} = useSelector(state => state.theme)


  return (
    <FormContainer className='container' mode={mode} as="form" onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()} >
      <Box mb={1}>
        <label>Title:</label>
        <CustomInput type="text" name="title" value={formData.title} handleChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Artist:</label>
        <CustomInput type="text" name="artist" value={formData.artist} handleChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Genre:</label>
        <CustomInput type="text" name="genre" value={formData.genre} handleChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Duration:</label>
        <CustomInput type="text" name="duration" value={formData.duration} handleChange={handleChange} />
      </Box>
      <Box mb={1}>
        <label>Cover Art URL:</label>
        <CustomInput type="text" name="coverArtUrl" value={formData.coverArtUrl} handleChange={handleChange} />
      </Box>
     
      <Button type="submit" >Submit</Button>
    </FormContainer>
  );
};

export default MusicForm;
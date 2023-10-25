import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import Input from '../CustomInput/customInput.component';

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
    onSubmit(formData);
    setFormData({
      title: '',
      artist: '',
      genre: '',
      duration: '',
      coverArtUrl: '',
      audioFileUrl: ''
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} maxWidth={400} m="0 auto">
      <Box mb={3}>
        <label>Title:</label>
        <Input type="text" name="title" value={formData.title} onChange={handleChange} />
      </Box>
      <Box mb={3}>
        <label>Artist:</label>
        <Input type="text" name="artist" value={formData.artist} onChange={handleChange} />
      </Box>
      <Box mb={3}>
        <label>Genre:</label>
        <Input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </Box>
      <Box mb={3}>
        <label>Duration:</label>
        <Input type="text" name="duration" value={formData.duration} onChange={handleChange} />
      </Box>
      <Box mb={3}>
        <label>Cover Art URL:</label>
        <Input type="text" name="coverArtUrl" value={formData.coverArtUrl} onChange={handleChange} />
      </Box>
      <Box mb={3}>
        <label>Audio File URL:</label>
        <Input type="text" name="audioFileUrl" value={formData.audioFileUrl} onChange={handleChange} />
      </Box>
      <Button type="submit" >Submit</Button>
    </Box>
  );
};

export default MusicForm;
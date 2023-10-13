import React, { useState } from 'react';
import { css } from '@emotion/css';

export const formStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  div {
    margin-bottom: 10px;
  }

  label {
    font-weight: bold;
  }

  input[type="text"] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button[type="submit"] {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const MusicForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    duration: '',
    releaseDate: '',
    album: '',
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
      releaseDate: '',
      album: '',
      coverArtUrl: '',
      audioFileUrl: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} css={formStyles}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Artist:</label>
        <input type="text" name="artist" value={formData.artist} onChange={handleChange} />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </div>
      <div>
        <label>Duration:</label>
        <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
      </div>
      <div>
        <label>Release Date:</label>
        <input type="text" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
      </div>
      <div>
        <label>Album:</label>
        <input type="text" name="album" value={formData.album} onChange={handleChange} />
      </div>
      <div>
        <label>Cover Art URL:</label>
        <input type="text" name="coverArtUrl" value={formData.coverArtUrl} onChange={handleChange} />
      </div>
      <div>
        <label>Audio File URL:</label>
        <input type="text" name="audioFileUrl" value={formData.audioFileUrl} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default MusicForm;
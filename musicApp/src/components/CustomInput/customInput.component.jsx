import React from 'react';
import { Box } from 'rebass';
import styled from '@emotion/styled';
import { space, color, layout, typography, flexbox, border } from 'styled-system';
import { CiSearch } from "react-icons/ci";


const CustomInput = () => {
  return (
    <Box
      as="input"
      type="text"
      placeholder="input text"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        border: '1px solid #646cff',
        padding: '0.6em 1.2em',
        fontSize: '1em',
        fontWeight: '500',
        fontFamily: 'inherit',
        backgroundColor: '#fff',
        color: 'black',
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        '&:hover': {
          borderColor: '#646cff',
        },
        '&:focus': {
          outline: '4px auto -webkit-focus-ring-color',
        },
      }}
    />
  )
}
export default CustomInput;
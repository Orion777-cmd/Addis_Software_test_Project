import React from 'react';
import { Box } from 'rebass';
import styled from '@emotion/styled';
import { space, color, layout, typography, flexbox, border } from 'styled-system';
import { CiSearch } from "react-icons/ci";

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #646cff;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #fff;
  color: black;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const CustomInput = ({ name, handleChange, value}) => {
  return (
    <StyledInput
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder='input the respective value'
    />
  );
};

export default CustomInput;

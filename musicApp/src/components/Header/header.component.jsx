import React from "react";
import styled from "@emotion/styled";
import {Button } from "rebass"
import CustomInput from "../CustomInput/customInput.component";

const Headercontainer = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
const SearchContainer = styled.div`
    width: 30%;
    &input{
        width: 100%;    
    }

`
const SigninSignupContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
`

export const Header = () => {
    return (
        <Headercontainer>
            <h1>Music App</h1>
            <searchcontainer>
                <CustomInput placeholder="Search" />
            </searchcontainer>
            <SigninSignupContainer>
                <Button>Log in</Button>
                <Button>Sign up</Button>
            </SigninSignupContainer>
        </Headercontainer>
    )
}

export default Header;
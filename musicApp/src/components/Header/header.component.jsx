import React from "react";
import styled from "@emotion/styled";
import {Button } from "rebass"
import CustomInput from "../CustomInput/customInput.component";

const HamburgerContainer = styled.button`
    margin-right: 2em;

    background-color: transparent;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: black;
    border: none;

    &:focus, &:hover, &:active{
        outline: none;
        .menu-icon{
            background-color: transparent;
        }
        .menu-icon::before{
            transform: translateX(-20px) rotate(45deg);
        }
        .menu-icon::after{
            transform: translateX(-20px) rotate(-45deg);
        }
    }

    .menu-icon,
    .menu-icon::before,
    .menu-icon::after{
        background-color:#fff;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        transition: all 0.5s;
    }
    .menu-icon::before,
    .menu-icon::after{
        content: "";
    
    }
    

    .menu-icon::before{
        transform:  translate(-20px, -12px);
    }
    .menu-icon::after{
        transform: translate(-20px, 12px);
    }


`

const Headercontainer = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1em;
    // padding-right: 1em;
   
    
    
    }

`;
const SearchContainer = styled.div`
    width: 30%;
    &input{
        width: 100%;    
    }

`
const SigninSignupContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
                <HamburgerContainer className="menu-button">
                    <div className="menu-icon"></div>
            </HamburgerContainer>
            </SigninSignupContainer>
            
        </Headercontainer>
    )
}

export default Header;
import React from "react";
import styled from "@emotion/styled";
import {Button } from "rebass"
import CustomInput from "../CustomInput/customInput.component";
import {RiNeteaseCloudMusicFill} from "react-icons/ri"
import { MdOutlineMail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import { toggleTheme } from "../../redux/theme/theme.reducer";
import {useDispatch, useSelector} from "react-redux"


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
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1em;
    // padding-right: 1em;
     
    }

`;
const SearchContainer = styled.input`
    width: 50%;
    height: 20%;
    border-radius: 20px;
    border: 1px solid #646cff;
    padding: 1.6em 1.2em;
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
    &::placeholder {
        font-size: 1.2em;

    }
`;

const RightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;

    button {
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        color: #000;
    }
    
`

const LeftContainer = styled.div`
    display: flex;
    gap: 10%;
    align-items: center;
    width: 60%;
    font-size: 0.6rem;
`;

export const Header = () => {
    const dispatch = useDispatch();
    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    }

    const {mode} = useSelector(state => state.theme)
    console.log("current theme: ", mode);
    return (
        <Headercontainer>
            <LeftContainer>
                <RiNeteaseCloudMusicFill size="80px" color="#000" />
                <SearchContainer type="text" placeholder="&#128269; search for songs, artists..."/>
            </LeftContainer>
            
            <RightContainer>
                <button><MdOutlineMail size="30px" color="#000" /></button>
                <button><IoIosNotificationsOutline size="30px" color="#000" /></button>
                <button onClick={handleThemeToggle}>{mode == "light"? <MdDarkMode size={30}/>: <CiLight size={30}/>}</button>
                <button><CgProfile size="30px" color="#000" /></button>
            </RightContainer>
            
        </Headercontainer>
    )
}

export default Header;
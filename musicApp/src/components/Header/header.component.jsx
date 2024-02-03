import React from "react";
import styled from "@emotion/styled";

import {RiNeteaseCloudMusicFill} from "react-icons/ri"
import { MdOutlineMail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import { toggleTheme } from "../../redux/theme/theme.reducer";
import {toggleProfile} from "../../redux/profile/profile.reducer";
import {useDispatch, useSelector} from "react-redux"
import { selectProfileHidden } from "../../redux/profile/profile.selector";
import ProfilePopup from "../profilePopup/profilePopup";

const Headercontainer = styled.div`
    position: relative;
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1em;
    // padding-right: 1em;
     
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
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
    background:transparent;
    color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
    cursor: pointer;
    transition: border-color 0.25s;
    &:hover {
        border-color: #646cff;
    }
    &:focus {
        outline: 4px auto -webkit-focus-ring-color;
    }
    &::placeholder {
        font-size: 0.9em;

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

    const handleProfileToggle = () => {
        dispatch(toggleProfile());
    }

    const profileState = useSelector(selectProfileHidden);
    const {mode} = useSelector(state => state.theme)
    console.log("current theme: ", mode);
    return (
        <Headercontainer>
            <LeftContainer>
                <RiNeteaseCloudMusicFill size="80px" color={mode == "dark"? "#fff":"000"} />
                <SearchContainer mode={mode} type="text" placeholder="&#128269; search for songs, artists..."/>
            </LeftContainer>
            
            <RightContainer>
                <button><MdOutlineMail size="30px" color={mode == "dark"? "#fff":"000"} /></button>
                <button><IoIosNotificationsOutline size="30px" color={mode == "dark"? "#fff":"000"} /></button>
                <button onClick={handleThemeToggle}>{mode == "light"? <MdDarkMode size={30}/>: <CiLight color={mode == "dark"? "#fff":"000"} size={30}/>}</button>
                <button onClick={handleProfileToggle}><CgProfile size="30px" color={mode == "dark"? "#fff":"000"} /></button>
                {!profileState? <ProfilePopup />: null}
            </RightContainer>
            
        </Headercontainer>
    )
}

export default Header;
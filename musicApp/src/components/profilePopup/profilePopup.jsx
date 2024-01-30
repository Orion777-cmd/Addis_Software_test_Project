import React, { useState } from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux"

const ProfilePopupContainer = styled.div`
    position: absolute;
    width: 15%;
    top : 50px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    background:transparent;
    
    // border: 1px solid #ccc;
    // border-radius: 5px;
    box-shadow: ${({mode}) => (mode === "dark"? "0 0px 10px rgba(255,255,255, 0.6)":"0 0px 10px rgba(0, 0, 0, 0.4)")};
    padding: 5px 5px;
    z-index: 10; 

    button {
        color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
        border: none;
        cursor: pointer;
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items:center;
        font-family: inherit;
        font-size: 0.7em;
        text-decoration: none;
        margin-top: 0.5em;

        :hover{
            text-decoration: underline;
        }
    }
`;

const ProfilePopup = () => {
    const {mode} = useSelector(state => state.theme)
    console.log("profilepopup mode: ", mode)
    return (        
            
        <ProfilePopupContainer mode= {mode}>
            <button>edit profile</button>
            <button>logout</button>
        </ProfilePopupContainer>
);
};

export default ProfilePopup;

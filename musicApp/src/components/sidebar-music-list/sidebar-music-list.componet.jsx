import React from "react";
import styled from "@emotion/styled";

import imageUrl from "../../assets/thinkingOutLoud.png";

const SidebarMusicListContainer = styled.div`
    border-bottom: 1px solid lightgray;
    margin: 10px;
    cursor: pointer;
    display: flex;
    color: black;
    align-items: center;
    padding-bottom: 10px;
    &:hover {
        color:  #2e2b2b;
    }
    &:hover {
        scale: 1.02;
    }

    img{
        text-align: center;
        width: 65px;
        height: 65px;
        border-radius: 10px;
    }
    .music-details {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .singer-name {
    font-size: 15px;
    margin: 0 0 0 10px;
    }
    .music-name {
    font-size: 16px;
    margin: 0 0 10px 10px;
    } 

`;

const SidebarMusicList = () => {
    return (
        <SidebarMusicListContainer>
            <img src={imageUrl} alt="" />
            <div className="music-details">
                <h4 className="music-name">Thinking Out Loud</h4>
                <p className="singer-name">Ed Sheeran</p>
               
            </div>
        </SidebarMusicListContainer>
    )
    
}

export default SidebarMusicList;
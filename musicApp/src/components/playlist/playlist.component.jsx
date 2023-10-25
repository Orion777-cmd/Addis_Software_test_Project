import React from "react"
import Card from "../card/card.component"
import Sidebar from "../sidebar/sidebar.component";
import styled from "@emotion/styled";

const PlaylistContainer = styled.div`
    display: flex;
    margin: 10px auto;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background: #fbd3e9; /* fallback for old browsers */

    background: #fff;

    border-radius: 10px;
    // box-shadow: 2px 8px 8px lightgray;
    overflow: hidden;

`;


export const Playlist = () => {
    return (
        <PlaylistContainer>
            <Card />
            <Sidebar />
        </PlaylistContainer>
    )
}

export default Playlist;
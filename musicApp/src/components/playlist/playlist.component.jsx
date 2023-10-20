import React from "react"
import Card from "../card/card.component"
import styled from "@emotion/styled";

const PlaylistContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
    padding: 1em;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    margin: 1em;

`;


export const Playlist = () => {
    return (
        <PlaylistContainer>
            <Card />
        </PlaylistContainer>
    )
}

export default Playlist;
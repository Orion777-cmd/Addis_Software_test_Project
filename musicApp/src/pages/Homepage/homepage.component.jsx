import React from "react";
import Playlist from "../../components/playlist/playlist.component";
import styled from "@emotion/styled"
import MusicForm from "../../components/MusicForm/MusicForm.component";

const HomepageContainer = styled.div`
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Homepage = () => {
    return (
        <HomepageContainer>
            <Playlist/>
        </HomepageContainer>
    )
}

export default Homepage;
import React from "react";
import Playlist from "../../components/playlist/playlist.component";
import styled from "@emotion/styled"
import MusicForm from "../../components/MusicForm/MusicForm.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Turntable from "../../components/turntable/turntable.component";
import LeftSidebar from "../../components/leftSidebar/leftSidebar.component";
import Middle from "../../components/middle/middle.component";
import RightSidebar from  "../../components/rightSidebar/rigtSidebar.component";

const HomepageContainer = styled.div`
    margin: 1em 0;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 1em;
    width: 100%;
    height: 100vh;
`;

export const Homepage = () => {
    return (
        <HomepageContainer>
            <LeftSidebar/>
            <Middle/>
            <RightSidebar/>
           
        </HomepageContainer>
    )
}

export default Homepage;
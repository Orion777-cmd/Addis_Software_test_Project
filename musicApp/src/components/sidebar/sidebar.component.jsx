import React from "react";
import styled from "@emotion/styled";

import SidebarMusicList from "../sidebar-music-list/sidebar-music-list.componet";

const SidebarContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid lightgray;
    overflow-y: scroll;
    margin-top: 15px;
    &::-webkit-scrollbar-track {
        background-color: lightgray;
    }

    &::-webkit-scrollbar {
        width: 5px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2e2b2b;
        border: 2px solid #555555;
    }
    
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarMusicList />
        </SidebarContainer>
    )
}

export default Sidebar;
import React from "react";
import styled from "@emotion/styled";

const SidebarContainer = styled.div`
    height: 100%;
    width: 50%;
    border: 1px solid black;
    
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <p>sidebar container</p>
        </SidebarContainer>
    )
}

export default Sidebar;
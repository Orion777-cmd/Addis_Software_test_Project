import React, {useEffect} from "react";
import Playlist from "../../components/playlist/playlist.component";
import styled from "@emotion/styled"

import LeftSidebar from "../../components/leftSidebar/leftSidebar.component";
import Middle from "../../components/middle/middle.component";
import RightSidebar from  "../../components/rightSidebar/rigtSidebar.component";

import {useDispatch , useSelector} from "react-redux";
import { selectAllMusicData } from "../../redux/music/music.selector";

import { getAllMusicAction} from "../../redux/music/music.reducer";


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
    const musics = useSelector(selectAllMusicData);
    console.log("hompage musics: ", musics)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMusicAction())
    },[])

   

    return (
        <HomepageContainer>
            <LeftSidebar/>
            <Middle/>
            <RightSidebar/>
           
        </HomepageContainer>
    )
}

export default Homepage;
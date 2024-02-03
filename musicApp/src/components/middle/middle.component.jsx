import react from "react"
import styled from "@emotion/styled"
import Turntable from "../turntable/turntable.component"
import ProgressBar from "../progressbar/progressbar.component"
import Tag from "../tag/tag.component"
import {TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled} from "react-icons/tb"
import {PiPlayFill, PiPauseFill} from "react-icons/pi"
import {FiHeart} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {BsRepeat, BsThreeDots} from "react-icons/bs"
import {BiShuffle} from "react-icons/bi"
import { BsArrowsAngleExpand } from "react-icons/bs";
import { BsArrowsAngleContract } from "react-icons/bs";


import {useDispatch, useSelector} from "react-redux";
import { selectCurrentMusicData, selectCurrentMusicPlayPause } from "../../redux/music/music.selector"
import {toggleCurrentMusic} from "../../redux/music/music.reducer"

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    width: fit-content;
    height: 90%;

`;

const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    p {
        margin: 0;
        padding: 0;
    }
`;

const GenreContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5em;
    width: 90%;
`;

const PlayerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    p {
        margin: 0;
        padding: 0;
        font-size: 0.8em;
    }
`;

const ControlButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    width: 90%;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
        color: #2e2b2b;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: #e1e1e1;
            scale: 1.02;
        }
    }
`;


const Middle = () => {
    const {mode} = useSelector(state => state.theme)
    const dispatch = useDispatch();
    const pauseButton = useSelector(selectCurrentMusicPlayPause);
    const musicData = useSelector(selectCurrentMusicData);

    const handlePlayPauseToggle = () => {
        dispatch(toggleCurrentMusic())
    }

    console.log("pauseButton: ", pauseButton);
    return (
        <MiddleContainer>
           
            <Turntable />           
            
            <NameContainer>
                <p>{musicData? musicData.title: 'song name'}</p>
                <p>{musicData? musicData.artist: 'artist name'}</p>
            </NameContainer>
            <GenreContainer>
                <Tag Genre={musicData? musicData.genre : 'genre'}/>
            </GenreContainer>

            <PlayerContainer>
                <p>0:00</p>
                <ProgressBar />
                <p>{musicData? musicData.duration: '3:30'}</p>
            </PlayerContainer>
            
            <ControlButtonsContainer>
                <button><BsArrowsAngleContract size={35} color={mode == "dark"? "#fff":"000"}/></button>
                <button><TbPlayerTrackPrevFilled size={35} color={mode == "dark"? "#fff":"000"}/></button>                    
                <button onClick={handlePlayPauseToggle}>{pauseButton? <PiPauseFill size={35} color={mode == "dark"? "#fff":"000"}/>: <PiPlayFill size={35} color={mode == "dark"? "#fff":"000"}/>}</button>
                <button><TbPlayerTrackNextFilled size={35} color={mode == "dark"? "#fff":"000"}/></button>
                <button><BsRepeat size={35} color={mode == "dark"? "#fff":"000"}/></button>
                <button><BiShuffle size={35} color={mode == "dark"? "#fff":"000"}/></button>
            </ControlButtonsContainer>
        </MiddleContainer>
    )
}

export default Middle;
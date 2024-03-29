
import styled from "@emotion/styled"
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {useSelector, useDispatch} from "react-redux";
import MusicPopup from "../musicPopup/musicPopup.component"

import { selectCurrentMusicData, selectCurrentMusicPlayPause, selectMusicHidden } from "../../redux/music/music.selector"
import { toggleCurrentMusic, toggleMusic } from "../../redux/music/music.reducer";



const ListCardContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    position: relative;

    div{
        display: flex;
        align-items: center;
        gap: 1em;
        img{
            width: 50px;
            height: 50px;
            border-radius: 10px;

        }

        .info{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 0.5em;
            h3{
                margin: 0;
                padding: 0;
                font-size: 0.8em;
            }
            p{
                margin: 0;
                padding: 0;
                font-size: 0.6em;
            }
        }
        
    }
   
    button{
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


const ListCard = ({idx, data, isLoading}) => {
    const {mode} = useSelector(state=> state.theme)
    const playPause = useSelector(selectCurrentMusicPlayPause)
    const currentMusic = useSelector(selectCurrentMusicData)
    const dispatch = useDispatch()

    const musicHidden = useSelector(selectMusicHidden)
    
    const handleMusicPopupToggle = () => {
        dispatch(toggleMusic({
            idx : idx
        }))
    }

    const handleCurrentMusic = () =>{
        dispatch(toggleCurrentMusic(
            data
        ))
    }

    return (
        <ListCardContainer>
            {
            <div>
                <img src={data? data.coverArtUrl: "https://picsum.photos/200"} alt="cover" />

                <div className="info">
                    <h3>{data != null? data.title: 'title'}</h3>
                    <p>{data != null? data.artist: 'artist'}</p>
                </div>
            </div>
            
            }
            <div className="left-buttons">
                <button onClick={handleCurrentMusic}>{playPause && currentMusic._id === data._id? <FaRegCirclePause size={40} color={mode == "dark"? "#fff":"000"}/>:<IoPlayCircleOutline size={40} color={mode == "dark"? "#fff":"000"}/>}</button>
                <button onClick={handleMusicPopupToggle}><HiOutlineDotsHorizontal size={40} color={mode == "dark"? "#fff":"000"}/></button>
            </div>
            {musicHidden === idx && <MusicPopup data={data}/>}
        </ListCardContainer>
    )
}

export default ListCard;

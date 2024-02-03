import react from "react"
import styled from "@emotion/styled"
import { IoMdHome } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { PiPlaylistFill } from "react-icons/pi";;
import { FaCompactDisc } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";


import MusicForm from "../MusicForm/MusicForm.component";
import {useSelector, useDispatch} from "react-redux"
import Modal from "../modal/modal.component";
import { toggleAddModalState } from "../../redux/modal/modal.reducer";
import { selectAddModalState } from "../../redux/modal/modal.selector";

const LeftSidebarContainer = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 2em;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
        color: #2e2b2b;
        transition: all 0.2s ease-in-out;
        &:hover {
            scale: 1.1;
        }
    
    }

`;

const LeftSidebar = () => {
    const {mode} = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const modalState = useSelector(selectAddModalState)
    const handleToggleModal = () => {
        dispatch(toggleAddModalState())
    }
    console.log("modalState", modalState)

    
    return (
        <>
        <LeftSidebarContainer >
            <button><IoMdHome size={30} color={mode == "dark"? "#fff":"000"}/></button>
            <button><MdFavoriteBorder size={30} color={mode == "dark"? "#fff":"000"}/></button>
            {/* <button><MdFavorite size={30}/></button> */}
            <button><PiPlaylistFill size={30} color={mode == "dark"? "#fff":"000"}/></button>
            <button><FaCompactDisc size={30} color={mode == "dark"? "#fff":"000"}/></button>
            <button><HiAdjustments size={30} color={mode == "dark"? "#fff":"000"}/></button>
            <button onClick={handleToggleModal}><IoIosAddCircle size={30} color={mode == "dark"? "#fff":"000"}/></button>
            {!modalState && <Modal MusicForm={MusicForm}/>}
        </LeftSidebarContainer>
        </>
    )
}

export default LeftSidebar;
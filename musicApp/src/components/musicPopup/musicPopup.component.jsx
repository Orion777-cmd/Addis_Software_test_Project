import react from "react"
import styled from "@emotion/styled"
import { MdEdit } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BiSolidAlbum } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { TbShare2 } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import Modal from "../modal/modal.component";
import { useSelector, useDispatch } from "react-redux";
import { selectModalState } from "../../redux/modal/modal.selector";
import { toggleModal } from "../../redux/modal/modal.reducer";
import { deleteMusicAction } from "../../redux/music/music.reducer";

const MusicPopupContainer = styled.div`
    position: absolute;
    width: 250px;
    
    top: -10px;
    right: 70px;
    display: flex;
    // color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
    background-color: ${({mode}) => (mode === "dark"? "#000": "#fff")};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;

    border: 1px solid #fff;
    border-radius: 20px;
    // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    // padding: 10px;
    z-index: 10; 


`
const ButtonContainer = styled.div`
    color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    gap: 2em;

    button{
        color: ${({ mode }) => (mode === "dark" ? "#fff" : "$000")};
        
        border: none;
        cursor: pointer;
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items:center;
        font-family: inherit;
        font-size: 0.7em;
        text-decoration: none;
        margin-top: 0.5em;

        :hover{
            text-decoration: underline;
        }
    }
`

const MusicPopup = ({data}) => {
    
    const {mode} = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const modalState = useSelector(selectModalState)

    const handleToggleModal = (e) => {
        e.stopPropagation();
        dispatch(toggleModal(data));
    }

    const deleteMusic = (e, id) => {
        e.stopPropagation();
        dispatch(deleteMusicAction(id));
        
    }
    

    return (
        <>
        <MusicPopupContainer mode={mode}>
            <ButtonContainer mode={mode}>
                <MdEdit size={20} />
                <button onClick={(e) => handleToggleModal(e)}>edit music</button>
            </ButtonContainer>
            <ButtonContainer mode={mode}>
                <MdDelete size={20} />
                <button onClick={(e) => deleteMusic(e, data._id)}>delete music</button>
            </ButtonContainer>
            <ButtonContainer mode={mode}>
                <MdFavorite size={20} />
                <button>add to favorite</button>
            </ButtonContainer>
            <ButtonContainer mode={mode}>
                <MdOutlinePlaylistAdd size={20} />
                <button>add to playlist</button>
            </ButtonContainer>
            <ButtonContainer mode={mode}>
                <BiSolidAlbum size={20} />
                <button>Go to Album</button>
            </ButtonContainer>
            <ButtonContainer mode={mode}>
                <IoMdPerson size={20} />
                <button>Go to Artist</button>
            </ButtonContainer>
            <ButtonContainer mode={mode}>
                <TbShare2 size={20} />
                <button>Share</button>
            </ButtonContainer>
           
        </MusicPopupContainer>
         
         </>
    )
}

export default MusicPopup;
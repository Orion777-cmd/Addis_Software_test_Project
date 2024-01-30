import react from "react"
import styled from "@emotion/styled"
import { MdEdit } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BiSolidAlbum } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { TbShare2 } from "react-icons/tb";


const MusicPopupContainer = styled.div`
    position: absolute;
    width: 30%;
    height: 200px;
    top: 0;
    right: 0;
    display: flex;
    background: red;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    background:transparent;

    // border: 1px solid #ccc;
    // border-radius: 5px;
    // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    // padding: 10px;
    z-index: 10; 


`
const ButtonContainer = styled.div`
    color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    gap: 2em;

    button{
        background-color: transparent;
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
    }
`

const MusicPopup = () => {
    return (
        <MusicPopupContainer>
            <ButtonContainer>
                <MdEdit size={20} />
                <button>edit music</button>
            </ButtonContainer>
            <ButtonContainer>
                <MdFavorite size={20} />
                <button>add to favorite</button>
            </ButtonContainer>
            <ButtonContainer>
                <MdOutlinePlaylistAdd size={20} />
                <button>add to playlist</button>
            </ButtonContainer>
            <ButtonContainer>
                <BiSolidAlbum size={20} />
                <button>Go to Album</button>
            </ButtonContainer>
            <ButtonContainer>
                <IoMdPerson size={20} />
                <button>Go to Artist</button>
            </ButtonContainer>
            <ButtonContainer>
                <TbShare2 size={20} />
                <button>Share</button>
            </ButtonContainer>
        </MusicPopupContainer>
    )
}

export default MusicPopup;
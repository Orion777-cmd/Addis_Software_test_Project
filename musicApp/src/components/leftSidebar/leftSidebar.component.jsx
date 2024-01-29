import react from "react"
import styled from "@emotion/styled"
import { IoMdHome } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { RiMusicFill } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";

const LeftSidebarContainer = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2em;
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

const LeftSidebar = () => {
    return (
        <LeftSidebarContainer>
            <button><IoMdHome size={30}/></button>
            <button><MdFavoriteBorder size={30}/></button>
            {/* <button><MdFavorite size={30}/></button> */}
            <button><RiMusicFill size={30}/></button>
            <button><FaCompactDisc size={30}/></button>
            <button><HiAdjustments size={30}/></button>
            <button><IoIosAddCircle size={30}/></button>
        </LeftSidebarContainer>
    )
}

export default LeftSidebar;
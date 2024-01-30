import react from "react"
import styled from "@emotion/styled"
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


const ListCardContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;

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
            }
            p{
                margin: 0;
                padding: 0;
                font-size: 12px;
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


const ListCard = () => {
    return (
        <ListCardContainer>
            <div>
                <img src="https://picsum.photos/200" alt="cover" />
                <div className="info">
                    <h3>title</h3>
                    <p>artist</p>
                </div>
            </div>
            
            <div>
                <button><IoPlayCircleOutline size={40}/></button>
                <button><HiOutlineDotsHorizontal size={40}/></button>
            </div>
        </ListCardContainer>
    )
}

export default ListCard;

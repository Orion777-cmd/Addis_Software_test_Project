import React from "react";

import {TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled} from "react-icons/tb"
import {PiPlayFill, PiPauseFill} from "react-icons/pi"
import {FiHeart} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {BsRepeat, BsThreeDots} from "react-icons/bs"
import {BiShuffle} from "react-icons/bi"
import styled from "@emotion/styled";
import { FaCirclePause } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";

import {useSelector} from "react-redux"

const CardContainer = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    padding: 1em;
    border-radius: 10px;

    :hover{
        .imageContainer button{
            opacity: 1;
        }
        background: rgba(0 , 0, 0, 0.1);
    }
    p{
        margin: 0;
        padding: 0;
        font-size: 0.5em;
    }

    img{
        width: 100%;
        height: 90%;
        border-radius: 10px;
        position: relative;
    }
    .imageContainer{
        position:relative;

        button{
            opacity: 0;
            background: transparent;
            border: none;
            cursor: pointer;
            position: absolute;
            bottom: 5%;
            right: 0%;
            transition: opacity 0.3s ease-in-out;
        }

    }
    .detailContainer{
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2em;
        justify-content: center;

        .artist-name{
            text-decoration: underline;
        }
    }

   
`


export const Card = ({imageUrl}) => {
    const {mode} = useSelector(state => state.theme)
    return (
        <CardContainer>
            <div className="imageContainer" mode={mode}>
                <img src={imageUrl} alt="" />
                <button><FaCirclePlay size={40} color="#fff"/> </button> 
            </div>
             
            <div className="detailContainer">
                <p>song Name</p>
                <p className="artist-name">by:Artist Name</p>
            </div>
            
               
        </CardContainer>
    )
}

export default Card;

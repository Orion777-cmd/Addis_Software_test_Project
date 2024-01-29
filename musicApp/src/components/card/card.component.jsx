import React from "react";

import {TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled} from "react-icons/tb"
import {PiPlayFill, PiPauseFill} from "react-icons/pi"
import {FiHeart} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {BsRepeat, BsThreeDots} from "react-icons/bs"
import {BiShuffle} from "react-icons/bi"
import styled from "@emotion/styled";

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
    p{
        margin: 0;
        padding: 0;
        font-size: 0.5em;
    }

    img{
        width: 100%;
        height: 70%;
        border-radius: 10px;

    }

   
`


export const Card = ({imageUrl}) => {
    return (
        <CardContainer>
            <img src={imageUrl} alt="" />  
            <p>song Name</p>
            <p>by:Artist Name</p>
               
        </CardContainer>
    )
}

export default Card;

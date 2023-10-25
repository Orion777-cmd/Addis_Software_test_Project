import React from "react";
import imageUrl from "../../assets/thinkingOutLoud.png";
import playIcon from "../../assets/play-pause.png"
import {TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled} from "react-icons/tb"
import {PiPlayFill, PiPauseFill} from "react-icons/pi"
import {FiHeart} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {BsRepeat, BsThreeDots} from "react-icons/bs"
import {BiShuffle} from "react-icons/bi"
import styled from "@emotion/styled";

const CardContainer = styled.div`
    background-color: #fff;
    padding: 0;
    height: 600px;
    width: 366px;
    margin-inline: auto;
    margin-bottom : 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    overflow: hidden;
   

`

const Imagecontainer = styled.div`
    background-repeat: no-repeat;
    background-image: url(${imageUrl});
    background-size: cover;
    width: 366px;
    height: 350px;
    padding: 0;
    margin: 0;
    
`;
const BodyPlayer = styled.div`
   
    margin: 0;
    padding: 0;
    height: 286px;
    width: 366px;
    background: #fff;

       
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2, h3{
        margin: 0;
        padding: 0;
    }
`
const MusicButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 20px;

`
const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 20px;
`

export const Card = () => {
    return (
        <CardContainer>
            <Imagecontainer />    
    
            <BodyPlayer>
                <InfoContainer>
                    <h2>Thinking Out Loud</h2>
                    <h3>Ed Sheeran</h3>
                </InfoContainer>
                
				<MusicButtons>
                    <TbPlayerTrackPrevFilled size={30}/>
                    <PiPlayFill size={30}/>
                    <TbPlayerTrackNextFilled size={30}/>
                </MusicButtons>
				
                <Footer>
                    <FiHeart size={30}/>
                    <BsRepeat size={30}/>
                    <BiShuffle size={30}/>
                    <BsThreeDots size={30}/>
                </Footer>
            </BodyPlayer>
               
        </CardContainer>
    )
}

export default Card;

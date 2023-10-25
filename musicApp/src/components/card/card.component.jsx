import React from "react";
import imageUrl from "../../assets/thinkingOutLoud.png";
import playIcon from "../../assets/play-pause.png"
import styled from "@emotion/styled";

const CardContainer = styled.div`
    background-color: #fff;
    padding: 0;
    height: 650px;
    width: 366px;
    margin-inline: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    overflow: hidden;
   

`

const Imagecontainer = styled.div`
    background-repeat: no-repeat;
    background-image: url(${imageUrl});
    background-size: cover;
    width: 366px;
    height: 366px;
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


export const Card = () => {
    return (
        <CardContainer>
            <Imagecontainer />    
    
            <BodyPlayer>
                <InfoContainer>
                    <h2>Thinking Out Loud</h2>
                    <h3>Ed Sheeran</h3>
                </InfoContainer>
                
				
				
            </BodyPlayer>
               
        </CardContainer>
    )
}

export default Card;

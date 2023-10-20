import React from "react";
import imageUrl from "../../assets/thinkingOutLoud.png";
import playIcon from "../../assets/play-pause.png"
import styled from "@emotion/styled";

const CardContainer = styled.div`
    width: 350px;
    height: auto;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    margin: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
        trasnparent: 0.4;
        .cover-photo {
            opacity: 0.7;
        }
        .play-pause {
            opacity: 1;
        }
    }
   
    .detail-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: #000;
        .left {
            text-align: left;
            padding-left: 0.5em;
        }
        .right {
            text-align: right;
            padding-right: 0.5em;
        }
   
    }

`

const Imagecontainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .cover-photo {
        border-radius: 8px 8px 0 0;
        
    }
    .play-pause {
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        opacity: 0;
    }


`

export const Card = () => {
    return (
        <CardContainer>
            <Imagecontainer>    
                <img class="cover-photo" src={imageUrl} alt="cover photo of the music" />
                <img class="play-pause"  src={playIcon} alt="play icon" />
            </Imagecontainer>
            

            <div className="detail-container">
                <div className="left">
                    <h3>title: Thinking Out Loud</h3>
                    <p>artist: Ed Sheeran</p>
                </div>

                <div className="right">
                    <p>genre: Pop</p>
                    <p>duration: 3:30</p>
                </div>
                
            </div>
        </CardContainer>
    )
}

export default Card;

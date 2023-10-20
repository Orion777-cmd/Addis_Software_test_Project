import React from "react";
import imageUrl from "../../assets/thinkingOutLoud.png";
import styled from "@emotion/styled";

const CardContainer = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    margin: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
        width: 90%;
        height: 100%;
        object-fit: cover;
    }
    .detail-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        color: #000;
        .left {
            text-align: left;
        }
        .right {
            text-align: right;
        }
    }

`

export const Card = () => {
    return (
        <CardContainer>
            <img src={imageUrl} alt="cover photo of the music" />
            <div className="detail-container">
                <div className="left">
                    <h3>Thinking Out Loud</h3>
                    <p>Ed Sheeran</p>
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

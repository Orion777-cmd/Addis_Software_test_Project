import react from "react"
import styled from "@emotion/styled"

const ProgressBarContainer = styled.div`
    width: 80%;
    height: 35px;
    display: flex;
    gap : 0.05em;
    align-items: center;
    justify-content: space-between;
    margin-inline: 7px;
    margin-top: 10px;
    margin-bottom: 10px;


    .progress {
        width: 5px;
        height: 100%;
        background-color: #000;
        border-radius: 5px;
    }

`;



const ProgressBar = () => {
    return (
        <ProgressBarContainer>
            {[...Array(25)].map((e, i) => <div className="progress" key={i}></div>)}
        </ProgressBarContainer>
    )
}

export default ProgressBar;

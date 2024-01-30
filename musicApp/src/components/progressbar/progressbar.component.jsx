import react from "react"
import styled from "@emotion/styled"

const ProgressBarContainer = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
 
    align-items: center;
    justify-content: space-between;
    margin-inline: 7px;
    margin-top: 10px;
    margin-bottom: 10px;

    .progress {
        width: 5px;
        background-color: #000;
        border-radius: 5px;
        transition: height 0.2s ease-in-out; /* Add smooth height transition */
    }

    /* Alternating height for even and odd progress bars */
    .progress:nth-of-type(even) {
        height: 80%;
    }

    .progress:nth-of-type(odd) {
        height: 60%;
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

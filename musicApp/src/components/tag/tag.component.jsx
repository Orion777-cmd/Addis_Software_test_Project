import react from "react"
import styled from "@emotion/styled"

const TagContainer = styled.div`
    wdith: 50px;
    height: 20px;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 5px;
    padding: 0px 10px;
    cursor: pointer;
    p {
        margin:0;
        padding: 0;
        font-size: 10px;
    }
    :hover {
        background: #fff;
        color: #000;
    }
`;

const Tag = ({Genre}) => {
    return (
        <TagContainer>
            <p>{Genre}</p>
        </TagContainer>
    )
}

export default Tag;
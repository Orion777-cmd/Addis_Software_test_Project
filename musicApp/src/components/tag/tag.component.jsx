import react from "react"
import styled from "@emotion/styled"
import {useSelector} from "react-redux"

const TagContainer = styled.div`
    wdith: 50px;
    height: 20px;
    background-color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
    color: ${({ mode }) => (mode === "dark" ? "#000" : "#fff")};
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
        color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
        background-color: ${({ mode }) => (mode === "dark" ? "#000" : "#fff")};
    }
    
`;

const Tag = ({Genre}) => {
    const {mode} = useSelector(state => state.theme)
    return (
        <TagContainer mode={mode}>
            <p>{Genre}</p>
        </TagContainer>
    )
}

export default Tag;
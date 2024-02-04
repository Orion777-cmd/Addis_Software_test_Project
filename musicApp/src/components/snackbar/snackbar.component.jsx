import React from "react"
import styled from "@emotion/styled"
import {useSelector} from "react-redux"



const SnackbarContainer = styled.div`
    position: absolute;
    top: 50px;
    left:50px;
    width: 200px;
    height: 50px;
    background-color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
    color: ${({ mode }) => (mode === "dark" ? "#000" : "#fff")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
    padding: 1em;
    
    p {
        margin: 0;
        padding: 0;
        font-size: 0.7em;
    }

    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }

        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }



`

const Snackbar = ({message}) => {

    const {mode} = useSelector(state => state.theme);
    return (
        <SnackbarContainer mode={mode}>
            <p>{message? message : "sorry!, to be implemented soon"}</p>
        </SnackbarContainer>
    )
}

export default Snackbar;
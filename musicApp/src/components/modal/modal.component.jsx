import React from "react";
import styled from "@emotion/styled";

import {useDispatch, useSelector} from "react-redux";
import { selectAddModalState, selectModalState } from "../../redux/modal/modal.selector";
import { toggleAddModalState, toggleModal } from "../../redux/modal/modal.reducer";

const ModalContainer = styled.div`

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 10;
    .overlay{
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        background: rgba(49,49,49,0.8);
    }

    .modal-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #f1f1f1;
        padding: 14px 28px;
        border-radius: 30px;
        max-width: 900px;
        min-width: 400px;
        box-shadow: 0 5px 15px black);
    }
    `;

const Modal = ({MusicForm, musicData}) => {
    const {mode}  = useSelector(state => state.theme)
    const modalState = useSelector(selectModalState)
    const addModalState = useSelector(selectAddModalState)
    const dispatch = useDispatch()

    const handleHideModal = () => {
        if (!modalState) {
            dispatch(toggleModal())
        }
        if (!addModalState){
            dispatch(toggleAddModalState())
        }
    }
    return (
        <ModalContainer mode={mode} onClick={handleHideModal}>
            <div className="overlay" >

            </div>
            <div className="modal-content">
                <MusicForm musicData={musicData}/>
            </div>
        </ModalContainer>
    )
}

export default Modal;
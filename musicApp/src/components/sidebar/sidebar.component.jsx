import React, { useState } from "react";
import styled from "@emotion/styled";
import { AiFillPlusCircle } from "react-icons/ai";

import SidebarMusicList from "../sidebar-music-list/sidebar-music-list.componet";
import Modal from "../modal/modal.component";

const SidebarContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid lightgray;
  overflow-y: scroll;
  margin-top: 15px;

  &::-webkit-scrollbar-track {
    background-color: lightgray;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2e2b2b;
    border: 2px solid #555555;
  }
`;

const Sidebar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <Modal toggleModal={toggleModal}/>
      ) : (
        <SidebarContainer>
          <SidebarMusicList />
          <AiFillPlusCircle
            size="70px"
            color="#000"
            style={{ margin: "0 200px", position: "absolute", bottom: "0" }}
            onClick={toggleModal}
          />
        </SidebarContainer>
      )}
    </>
  );
};

export default Sidebar;
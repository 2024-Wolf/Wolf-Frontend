import styled from "styled-components";
import { Overlay, ModalWrapper, CloseButton } from "../GlobalStyledComponents";

import React from "react";
import MiniIcon from "../Icon/MiniIcon";


// components/Modal/ModalContainer.jsx
export const ModalContent = styled.form`
    display: flex;
    flex-direction: column; 
    overflow-y: scroll;
    gap: 10px;
`;

const ModalContainer = ({ children, onClose }) => {
    return (
        <Overlay onClick={onClose}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <MiniIcon src="CloseIcon.png" alt="closeBtn" />
                </CloseButton>
                <ModalContent>{children}</ModalContent>
            </ModalWrapper>
        </Overlay>
    );
};

export default ModalContainer;

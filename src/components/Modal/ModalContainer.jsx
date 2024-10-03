import styled from "styled-components";
import { Overlay, ModalWrapper, ModalContent, CloseButton } from "../GlobalStyledComponents";

import React from "react";
import MiniIcon from "../Icon/MiniIcon";

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

import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* 배경 투명도 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* 모달이 다른 요소 위에 나타나도록 */
`;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color:var(--violet100);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 550px;
    width: 100%;
    text-align: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column; 
`;

const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    color: var(--black800);
    background-color: var(--violet100);
`;

const ModalContainer = ({ children, onClose }) => {
    return (
        <Overlay onClick={onClose}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <Icon src="CloseIcon.png" alt="closeBtn"/>
                </CloseButton>
                <ModalContent>{children}</ModalContent>
            </ModalWrapper>
        </Overlay>
    );
};

export default ModalContainer;

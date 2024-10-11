import styled from "styled-components";
import { Overlay, ModalWrapper, ModalContent, CloseButton } from "../GlobalStyledComponents";

import React, { useEffect } from "react";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    z-index: 1000;
    flex-direction: column;
    gap: 5px;
`;


// components/Declaration.js, components/Group/TodoContent.js
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 90%;
  border-radius: 20px;
`;

const OpenModal = ({ children, onClose, isModalOpen, style, ...props }) => {
    // 아래는 부모에서 작성하고 onClose={closeModal}을 전달해줘야 함
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            {isModalOpen && (
                <>
                    <ModalOverlay style={style} {...props}>
                        <ModalContainer>
                            {children}
                        </ModalContainer>
                    </ModalOverlay>
                </>
            )}
        </>

    );
};

export default OpenModal;
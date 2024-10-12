import styled from "styled-components";

import React, { useEffect, useState, useRef } from "react";

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
export const ModalContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50%;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 90%;
  border-radius: 20px;
  max-height: 80%;
  min-height: 30%;
  overflow-y: ${(props) => (props.isOverflow ? 'auto' : 'none')}; // 조건부 overflow

@media (max-width: 768px) {
  max-width: 80%;
  }

  @media (max-width: 480px) {
  max-width: 90%;
  }

    @media (max-width: 300px) {
  max-width: 95%;
  }
`;

const ModalForm = ({ children, onClose, isModalOpen, onSubmit, focusRef, style, ...props }) => {
    const [isOverflow, setIsOverflow] = useState(false);

    // 포커스 대상 useRef 설정하는 법, 부모에서 작성하고 focusRef에 전달하면 됨
    // const inputRefs = useRef([]); // 여러 개의 ref를 저장할 배열
    // const addInputRef = (el) => {
    //     if (el && !inputRefs.current.includes(el)) {
    //       inputRefs.current.push(el);
    //     }
    //   };
    // <input ref={addInputRef} />

    // 아래는 부모에서 작성하고 onClose={closeModal}을 전달해줘야 함
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    useEffect(() => {
        if (isModalOpen) {
            if (focusRef && focusRef.current) {
                focusRef.current.focus();
            }
        }
    }, [isModalOpen, focusRef]);

    useEffect(() => {
        const updateOverflow = () => {
            const modalHeight = window.innerHeight * 0.8; // 화면 높이의 80%
            const modal = document.getElementById('modal');
            if (modal) {
                const isOverflown = modal.scrollHeight > modalHeight;
                setIsOverflow(isOverflown);
            }
        };

        updateOverflow();
        window.addEventListener('resize', updateOverflow);
        return () => window.removeEventListener('resize', updateOverflow);
    }, [children]);


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
                        <ModalContainer onSubmit={onSubmit} isOverflow={isOverflow} id="modal">
                            {children}
                        </ModalContainer>
                    </ModalOverlay>
                </>
            )}
        </>

    );
};

export default ModalForm;
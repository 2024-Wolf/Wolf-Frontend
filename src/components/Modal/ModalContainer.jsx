import styled from "styled-components";
import { Overlay, ModalWrapper, CloseButton } from "../GlobalStyledComponents";

import React from "react";
import MiniIcon from "../Icon/MiniIcon";
import ModalForm from "./ModalForm";
import CancelIcon from "../Icon/CancelIcon";


const ModalContainer = ({ children, onClose }) => {
    return (
        <ModalForm
            isModalOpen={true}
            containerStyle={{
                paddingTop: '45px',
                backgroundColor: 'var(--violet100)', textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}>
            <CancelIcon
                style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                }}
                type='button'
                onClick={onClose}
            />
            {children}
        </ModalForm>
    );
};

export default ModalContainer;

import styled from 'styled-components';

import React from 'react';

import { FormLabel } from "../../GlobalStyledComponents";

// components/Group/GroupComponent/FormField.jsx
const FormFieldSingleWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    width: 100%;
    color: var(--black700);

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: start;
    }
`;

const FormFieldSingle = ({ label, children }) => {
    return (
        <FormFieldSingleWrapper>
            <FormLabel>{label}</FormLabel>
            {children}
        </FormFieldSingleWrapper>
    );
};

export default FormFieldSingle;

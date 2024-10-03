import styled from 'styled-components';

import React from 'react';

import { FormLabel } from "../../GlobalStyledComponents";

// components/Group/GroupComponent/FormField.jsx
const FormFieldMultipleWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    width: fit-content;
    color: var(--black700);
`;

const FormFieldMultiple = ({ label, children }) => {
    return (
        <FormFieldMultipleWrapper>
            <FormLabel>{label}</FormLabel>
            {children}
        </FormFieldMultipleWrapper>
    );
};

export default FormFieldMultiple;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;

    label {
        font-size: 16px;
        line-height: 1.5;
    }
`;

const FormField = ({ label, children }) => {
    return (
        <Wrapper>
            <label>{label}</label>
            {children}
        </Wrapper>
    );
};

export default FormField;
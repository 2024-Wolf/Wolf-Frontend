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

    @media (max-width: 768px) {
        gap: 5px;

        label {
            font-size: 14px;
        }
    }
    
    @media (max-width: 530px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label {
            font-size: 12px;
        }
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

import styled from 'styled-components';

import React from 'react';

import { FormLabel, FormChildrenGroup, FormLabelGroup, FormDescription } from "../../GlobalStyledComponents";

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

const FormFieldSingle = ({ label, label2, children, description }) => {
    return (
        <FormFieldSingleWrapper>
            <FormLabelGroup>
                <FormLabel>{label}</FormLabel>
                {label2 && <FormLabel>{label2}</FormLabel>} {/* 2번째 라벨이 있으면 보임 */}
            </FormLabelGroup>
            {description && (
                <FormChildrenGroup> {/* 설명이 있으면 설명과 children을 보임 */}
                    <FormDescription>{description}</FormDescription>
                    {children}
                </FormChildrenGroup>
            )}
            {!description && children} {/* 설명이 없을 경우 children만 보임 */}
        </FormFieldSingleWrapper>
    );
};

export default FormFieldSingle;

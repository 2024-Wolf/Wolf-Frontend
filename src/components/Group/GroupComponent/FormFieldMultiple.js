import styled from 'styled-components';

import React from 'react';

import { FormLabel, FormChildrenGroup, FormLabelGroup, FormDescription } from "../../GlobalStyledComponents";

// components/Group/GroupComponent/FormField.jsx
const FormFieldMultipleWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    width: fit-content;
    color: var(--black700);

    @media (max-width: 950px) {
        width: fit-content;
        flex-direction: column;
        align-items: start;
    }
`;

const FormFieldMultiple = ({ label, label2, children, description }) => {
    return (
        <FormFieldMultipleWrapper>
            <FormLabelGroup>
                <FormLabel>{label}</FormLabel>
                {label2 && <FormLabel>{label2}</FormLabel>} {/* 2번째 라벨이 있으면 보임 */}
            </FormLabelGroup>
            <FormChildrenGroup>
                {description && (
                    <>
                        {/* 설명이 있으면 설명과 children이 보임 */}
                        <FormDescription>{description}</FormDescription>
                        {children}
                    </>
                )}

                {!description && children} {/* 설명이 없을 경우 children만 보임 */}
            </FormChildrenGroup>
        </FormFieldMultipleWrapper>
    );
};

export default FormFieldMultiple;

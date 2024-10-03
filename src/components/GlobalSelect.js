import styled, { css } from "styled-components";


// components/Declaration.js
export const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid #8578D8;
  font-size: 12px;
  color: #666;
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const Select2 = styled.select`
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid var(--violet500);

    @media (max-width: 768px) {
        padding: 6px 10px;
    }

    @media (max-width: 480px) {
        padding: 5px 8px;
    }
`;


// components/Group/GroupInfoModal/ApplicantModal.js, components/Group/GroupInfoModal/ApplicantConfirmModal.js
export const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
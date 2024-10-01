import styled, { css } from "styled-components";

// components/ChallengeModal/ChallengeApplyModal.js
export const FeeInput = styled.input.attrs({
    type: 'text'
})`
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #2E2E2E;
    border: 1px solid #9787FF;
    margin-left: 20px;
`;


// components/Group/TodoContent.js
export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-right: 10px;
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const HiddenFileInput = styled.input`
    display: none;
`;


// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;


// components/Input/WhiteInputBox.jsx
export const ActiveTextInput = styled.input`
    width: 100%;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 5px 10px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px 10px;
    }
    
    &:disabled {
        background-color: var(--black000);
        border-radius: 5px;

        @media (max-width: 768px) {
            font-size: 14px;
            padding: 5px 10px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
            padding: 5px 10px;
        }
    }
`;


// components/MainPageComponents/SearchBar/SearchBar.jsx
export const SearchInput = styled.input`
    width: 100%;
    border: none;
    color: var(--black700);
    background-color: var(--black200);
`;

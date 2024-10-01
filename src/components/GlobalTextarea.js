import styled, { css } from "styled-components";

// components/Declaration.js
export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #8578D8;
  margin-bottom: 20px;
  resize: none;
  font-size: 12px;
  color: #666;
`;


// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const TextArea3 = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
`;

// components/Group/Question/CommentSection.jsx
export const TextArea4 = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`;

// components/Group/Question/QuestionForm.jsx
export const TextArea5 = styled.textarea`
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid var(--black400);
    width: 100%;
    height: 100px;
    padding: 10px;
    resize: none;
    margin-top: 15px;
    line-height: 1.3;
`;

// components/MyPageComponents/UserInfoContent.js
export const TextArea6 = styled.textarea`
    width: 100%;
    min-height: 80px;
    padding: 15px 15px;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;
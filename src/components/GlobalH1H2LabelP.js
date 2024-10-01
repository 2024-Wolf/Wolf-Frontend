import styled, { css } from "styled-components";

// pages/CreateGroupPage.js, pages/FAQ.js, pages/MyPage.js
export const Title = styled.h1`
    text-align: left;
    font-weight: bold;
    font-size: 2.5rem;
    color: var(--black800);
    margin: 30px 0;
`;


// components/Declaration.js
export const Title3 = styled.h2`
  text-align: center;
  background-color: #8578D8;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 30px auto;
  width: 140px;
  font-size: 12px;
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const Title6 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin: 30px 0;

    @media (max-width: 768px) {
        font-size: 18px;
        margin: 20px 0;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin: 15px 0;
    }
`;


// pages/StudyPage.js
export const StudyTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;


// components/MemberEvaluation.js
export const ProjectName = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;


// components/Declaration.js
export const Description = styled.p`
  font-size: 10px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;


// components/Card/Card.jsx
export const CardTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #333;
    text-align: left;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;


// 포스트 제목
// components/Group/GroupInfoContent.js
export const PostTitle = styled.h3` 
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;


// 지원 제목
// components/Group/GroupManageContent.js
export const ApplyTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0;

    @media (max-width: 768px) {
        font-size: 20px;
        margin: 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        margin: 10px 0;
    }
`;


// components/Group/MeetingContent.js
export const MeetingHeader = styled.h3`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: var(--black800);
    text-align: left;
`;


// components/Group/TodoContent.js
export const TodoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;


// components/Group/TodoContent.js
export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// components/Group/TodoContent.js
export const Modaldescription = styled.h4`
  font-size: 10px;
  color: #ccc;
  margin-bottom: 30px;
`;


// components/Group/TodoContent.js
export const LinkInputTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  color: #000000;
`;


// components/MyPageComponents/UserInfoContent.js
export const SubTitle2 = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: var(--black800);

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;


// components/Group/Question/QuestionForm.jsx
export const FileInputButton = styled.label`
  background-color: #fff;
  color: #000000;
  border: 1px solid #968AFF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  display: inline-block;
  &:hover {
    background-color: #CEC6FF;
  }
`;


// components/MyPageComponents/ActivitiesContent.js
export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: var(--black800);
    margin: 15px 0;
`;

// components/MyPageComponents/UserInfoContent.js
export const InputLabel = styled.label`
    font-size: 18px;
    font-weight: 500;
    color: var(--black800);

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;


// components/SignInContent/FirstProcessContent.jsx
export const RadioButtonLabel = styled.label`
    font-size: 16px;
    color: var(--black800);

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;
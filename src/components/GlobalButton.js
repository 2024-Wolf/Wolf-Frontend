import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";

export const ontSize = css`
    font-size: 14px;
    
    @media (max-width: 480px) {
        
    }
`;

// pages/FAQ.js
export const TabButton = styled.button`
  cursor: pointer;
  border: none;
  text-align: center;

  padding: 15px 0;
  background: none;
  font-size: 16px;
  flex: 1;
  outline: none;

  color: ${(props) => (props.active ? '#6a5acd' : '#333')};
  background-color: ${(props) => (props.active ? '#F2F0FF' : 'none')};
  border-bottom: ${(props) => (props.active ? '2px solid #6a5acd' : 'none')};
  
  &:hover {
    background-color: #f0f0f0;
  }
`;


// pages/Tabs.js FAQ에서 쓰는 탭으로 확인됨
export const TabButton2 = styled.button`
  cursor: pointer;
  border: none;
  text-align: center;

  padding: 10px;
  flex-basis: 20%;

  transition: background-color 0.3s ease;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  background-color: ${(props) => (props.isActive ? '#f2f0ff' : 'transparent')};
  border-bottom: ${(props) => (props.isActive ? '2px solid #6c63ff' : 'none')};

  &:hover {
    background-color: #f0f0f0;
  }
`;


// components/Header.js
export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 32px;
`;

// components/MemberEvaluation.js
export const Button2 = styled.button`

  color: ${(props) => (props.isSelected ? 'white' : '#8578D8')};
  background-color: ${(props) => (props.isSelected ? '#8578D8' : 'white')};

  border: 1px solid #8578D8;
  padding: 8px 0;
  cursor: pointer;
  font-size: 10px;
  width: 130px; 
  transition: all 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #8578D8;
    color: white;
  }
`;

// pages/StudyPage.js
export const Button3 = styled.button`
  cursor: pointer;
  color: white;

  padding: 10px 15px;
  background-color: var(--violet500);

  border: none;
  border-radius: 5px;

  transition: background-color 0.3s;
  margin-left: auto;

  &:hover {
    background-color: var(--violet300);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

// components/Card/Card.jsx
export const Button4 = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    background-color: var(--violet000);
    border: 1px solid var(--violet400);
    color: var(--black700);
    font-size: 12px;

    @media (max-width: 768px) {
        padding: 4px 8px;
        font-size: 11px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 3px 6px;
        font-size: 10px;
    }
`;


// 버튼 스타일
// components/Group/GroupManageContent.js
export const Button6 = styled.button`
    padding: 12px 20px;
    background-color: var(--violet600);
    color: var(--black000);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--violet700);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 8px 12px;
    }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const Button7 = styled.button`
    padding: 10px 15px;
    background-color: var(--violet400);
    color: white;
    border: 1px solid var(--violet500);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--violet700);
    }

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 14px;
        width: 100%;
    }
    
    @media (max-width: 480px) {
        padding: 5px;
        font-size: 12px;
    }
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const Button8 = styled.button`
    padding: 10px 20px;
    white-space: nowrap;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--violet300);
    }
`;

// components/Input/Link/LinkInput.jsx
export const Button9 = styled.button`
    cursor: pointer;
    background-color: white;
    color: var(--black800);
    border-radius: 5px;
    border: 1px solid var(--violet500);

    font-size: 14px;
    padding: 10px 15px;
    width: 6%;
    height: 100%;

    &:hover {
        background-color: var(--violet400);
        color: white;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 5px 15px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 5px 10px;
    }
`;


// components/MyPageComponents/NotificationContent.js
export const Button11 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 5px;
    padding: 10px 15px;
    border: 1px solid var(--violet400);
    background-color: transparent;
    color: var(--black700);

    cursor: pointer;
    font-size: 12px;
    font-weight: 500;

    &:hover {
        background-color: var(--violet400);
        color: white;
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 11px;
    }

    @media (max-width: 480px) {
        width: 100%; /* 작은 화면에서는 버튼이 가득 차도록 */
        font-size: 10px;
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const Button12 = styled.button`
    border-radius: 10px;
    padding: 15px 50px;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: 768px) {
        padding: 12px 40px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

// components/SignInContent/Components/NextButton.jsx
export const Button13 = styled.button`
    width: 100%;
    background: var(--violet500);
    color: var(--black000);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
    padding: 13px 0;
    margin-top: 5px;

    &:hover {
        background-color: var(--violet600);
    }

    &:active {
        background-color: var(--violet700);
    }

    @media (max-width: 768px) {
        padding: 10px 0;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 8px 0;
        font-size: 12px;
    }
`;

// components/SignInContent/Components/OptionButton.jsx
export const Button14 = styled.button`
    min-width: calc(100% / ${({ buttonCount }) => buttonCount} - 15px);
    border: 1px solid var(--violet500);
    border-radius: 20px;
    padding: 15px 10px;
    background-color: ${({ selected }) => (selected ? "var(--black700)" : "#fff")};
    color: ${({ selected }) => (selected ? "#fff" : "var(--black500)")};
    cursor: pointer;
    font-size: 14px;
    margin: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: var(--violet500);
        color: #fff;
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 8px 8px;
        font-size: 10px;
    }
`;


// pages/Tabs.js, components/Group/MeetingContent.js
export const StartMeetingButton = styled.button`
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #574dff;
  }
`;


// components/MemberEvaluation.js, components/Declaration.js
export const SubmitButton = styled.button`
  background-color: #CEC6FF; 
  color: #000000; 
  border: 1px solid #8578D8; 
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 12px;
  /* margin-right: 10px; */ /* components/MemberEvaluation.js */

  &:hover {
    background-color: #8578D8;
    color: white;
  }
`;

// components/Group/Question/CommentSection.jsx
export const SubmitButton2 = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #574dc2;
  }
`;

// components/Group/Question/QuestionForm.jsx
export const SubmitButton3 = styled.button`
  background-color: #fff;
  color: #000000;
  border: 1px solid #968AFF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    background-color: #CEC6FF;
  }
`;


// components/Footer.js
export const NoBackgroundButton = styled.button`
  background: none;
  color: var(--black500);
  border: none;
  cursor: pointer;
  font-weight: 700;

  margin-right: 20px; // 모든 버튼의 오른쪽에 간격 설정
  &:last-child {
    margin-right: 0; // 마지막 버튼의 오른쪽 여백 제거
  }

  // Hover effect
  &:hover {
    color: var(--black600);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  // Active (마우스 클릭 또는 모바일 터치) effect
  &:active {
    color: var(--black800);
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.1s ease, color 0.1s ease;
  }

  @media (max-width: 768px) {
    font-size: 80%;
  }
`;


// components/Declaration.js, components/MemberEvaluation.js
export const CancelButton = styled.button`
  cursor: pointer;

  background-color: white;
  color: #8578D8;
  border: 1px solid #8578D8;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 12px;

  &:hover {
    background-color: #CEC6FF;
    color: white;
  }
`;


// 지원하기 버튼
// components/Group/GroupInfoContent.js
export const SupportButton = styled.button` 
    padding: 10px 15px;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--violet300);
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px 10px;
    }
`;


// components/Group/TodoContent.js
export const TodoButton = styled.button`
  background-color: #FFFFFF;
  color: #000;
  border: 1px solid #9787FF;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #8578d8;
    color: white;
  }
`;


// components/Group/MeetingComponent/MeetingWindow.js
export const ControlButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#6c63ff' : '#ccc')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #574dff;
  }
`;


// components/MainPageComponents/SearchBar/ButtonContainer.jsx
export const OptionButton = styled.button`
    background-color: white;
    border: 1px solid var(--violet500);
    border-radius: 7px;
    margin-right: 10px;
    padding: 5px 10px;
    font-size: 16px;
    
    @media (max-width: 768px) {
        font-size: 12px; 
        padding: 3px 8px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 2px 6px;
    }
`;


// components/Modal/ModalContainer.jsx
export const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    color: var(--black800);
    background-color: var(--violet100);
`;


// components/SignInContent/LoginContent.jsx
export const GoogleLoginButton = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background: var(--black000);
    border: 2px solid var(--black200);
    border-radius: 10px;

    &:hover {
        background: var(--black200);
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    &:active {
        background: var(--black200);
        transition: background-color 0.1s ease, color 0.1s ease;
    }
`;

// components/Tab/TabButton.js
export const TabButtonContainer = styled.button`
    width: calc(100% / 3);
    background-color: var(--black000);
    border: 1px solid var(--black100);
    font-weight: 500;
    padding: 15px;
`;

// components/Tab/TabButton.js
export const ActiveTabButtonContainer = styled.button`
    width: calc(100% / 3);
    font-weight: 500;
    padding: 15px;
    background-color: var(--violet000);
    border: 1px solid var(--black100);
    
    border-bottom: 2px solid var(--violet700);
`;

// components/Header.js
export const LightBackgroundButton = styled(Button)`
  background: var(--violet100);
  color: var(--black500);
  &:hover {
    background-color: var(--violet200);
    transition: background-color 0.3s ease;
  }
  &:active {
    background-color: var(--violet200);
    transition: background-color 0.1s ease;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

// components/Header.js
export const LogginButton = styled(Button)`
  background: none;
  color: var(--black500);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

// components/MyPageComponents/UserInfoContent.js
export const CancelButton3 = styled(Button)`
    border: 1px solid var(--violet800);
    background-color: var(--violet000);
    color: var(--violet800);
`;

// components/DateInputButton/DateButton.jsx
export const DatePickerCustom = styled(DatePicker)`
    font-size: 16px;
    width: 100%;
    max-width: 95px;
    
    @media (max-width: 768px) {
        font-size: 12px;
        max-width: 70px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        max-width: 60px;
    }
`;


// components/Group/GroupComponent/GroupWritingContent.jsx
export const DeleteCancelButton = styled(Button)`
    background-color: var(--black000);
    color: var(--black800);
    &:hover {
        background-color: var(--black300);
    }
`;


// components/Header.js
export const DarkBackgroundButton = styled(Button)`
  background: var(--violet600);
  color: var(--violet000);
  &:hover {
    background-color: var(--violet700);
    transition: background-color 0.3s ease;
  }
  &:active {
    background-color: var(--violet700);
    transition: background-color 0.1s ease;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

// components/MyPageComponents/UserInfoContent.js
export const UpdateButton = styled(Button)`
            font-weight: 500;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            padding: 10px 32px;
            background-color: var(--violet500);
            color: white;

            &:hover {
                background-color: var(--violet700);
                transition: background-color 0.3s ease;
            }

            &:active {
                background-color: var(--violet700);
                transition: background-color 0.1s ease;
            }
`;

// 삭제---------------------------

// // components/Group/GroupComponent/GroupWritingContent.jsx
// export const StyledButton = styled.button`
//     background-color: ${({ clicked }) => (clicked ? "var(--black700)" : "white")};
//     color: ${({ clicked }) => (clicked ? "white" : "black")};
//     border: 1px solid var(--violet500);
//     padding: 13px 15px;
//     margin: 5px;
//     border-radius: 30px;
//     cursor: pointer;

//     @media (max-width: 768px) {
//         padding: 8px;
//         font-size: 12px;
//         flex: 1;
//     }
    
//     @media (max-width: 480px) {
//         padding: 5px;
//         font-size: 10px;
//         flex: 1;
//     }
// `;
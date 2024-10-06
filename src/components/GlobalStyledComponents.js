import styled, { css } from "styled-components";


export const MainContents = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    height: auto;
    width: 100%;
    max-width: 1500px;
    flex-direction: column;
    margin: 30px auto;
    min-height: 700px;
    gap: 40px;
    padding: 0px 70px;

    @media (max-width: 1200px) {
    }

    @media (max-width: 768px) {
        padding: 0px 20px;
    }

    @media (max-width: 576px) {
        padding: 0px 5px;
    }
`;

export const FormLabelGroup = styled.div`
    display: flex;
    gap: 5px;
    align-items: start;
    justify-content: start;
    width: fit-content;
    flex-direction: column;
    height: 100%;
    margin-top: 18px;

    @media (max-width: 950px) {
    flex-direction: row;
    margin-top: 0px;
    }

    @media (max-width: 480px) {

    }
`;

export const FormDescription = styled.span`
    font-size: 12px;
    color : var(--black600);
`;

export const FormChildrenGroup = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

// components/Declaration.js, components/MemberEvaluation.js
export const ButtonGroupWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;

    @media (max-width: 768px) {
    }
    
    @media (max-width: 480px) {
    }
`;


// components/Declaration.js, components/MemberEvaluation.js
export const ButtonGroupCenter = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
    @media (max-width: 768px) {
    }
    
    @media (max-width: 480px) {
    }
`;
// components/Group/GroupComponent/GroupWritingContent.jsx, 
// components/SignInContent/FirstProcessContent.jsx
export const FormFieldRow = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
    width: 100%;
    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
    }
`;

// components/Group/GroupComponent/GroupWritingContent.jsx, 
// components/SignInContent/FirstProcessContent.jsx
export const FormFieldColumn = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    @media (max-width: 480px) {
    }
`;

export const MemberInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px 0px;
    border-bottom: 1px solid var(--black300);
    gap: 20px;
    align-items: center;

    @media (max-width: 768px) {
        align-items: start;
        flex-direction: column;
        gap: 15px;
    }

    @media (max-width: 480px) {
    }
`;


// components/Declaration.js, components/MemberEvaluation.js
export const ButtonGroupRight = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: right;
    @media (max-width: 768px) {
    }
    
    @media (max-width: 480px) {
    }
`;

// components/Declaration.js, components/MemberEvaluation.js
export const ButtonGroupLeft = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: left;
    @media (max-width: 768px) {
    }
    
    @media (max-width: 480px) {
    }
`;

// -------------------모든 버튼 공통-------------------
export const CommonButton = css`
    text-wrap: nowrap;
    padding: 5px 20px;
    height: 35px;
    font-size: 16px;
    color: var(--black500);
    width: auto;

    @media (max-width: 768px) {
        font-size: 15px; 
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }

    &::placeholder {
        color: var(--black300);
    }

    &:disabled {
        pointer-events: none;
    }
`;

export const HeaderButton = css`
    padding: 5px 32px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const IconButton = css`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        padding: 10px;
    }
    svg{
        width: 15px;
        heignt: 15px;
    }
`;

export const IconInnerText = styled.span`
    @media (max-width: 480px) {
        display: none;
    }
`;


// -------------------사각형/타원형 버튼 모양-------------------

export const Square = css`
    ${CommonButton}
    border-radius: 7px;
`;

export const Round = css`
    ${CommonButton}
    border-radius: 20px;
`;

// -------------------스타일만 정의-------------------

// Style
export const Black500Line = css`
    border: 1px solid var(--black500);
    background-color: var(--black000);

    &:disabled {
        background-color: var(--black200);
    }
    &[readonly] {
        background-color: var(--black200);
    }
`;

export const Violet500Line = css`
    border: 1px solid var(--violet500);
    background-color: var(--violet000);

    &:disabled {
        background-color: var(--violet200);
    }
    &[readonly] {
        background-color: var(--violet200);
    }

    /* components/DateInputButton/OptionButton.js */
    /* 선택 됐을 때 보라색 */
    ${({ isOptionActive }) => isOptionActive && `
        background-color: var(--violet500);
        color: var(--violet100);
    `}
    
    /* 선택 됐을 때 검은색 */
    ${({ clicked }) => clicked && `
        background-color: var(--black700);
        color: var(--violet000);
        border: 1px solid var(--black700);
    `}
`;

export const Violet400Background = css`
    background-color: var(--violet400);
    color: var(--violet000);
`;

export const Violet500Background = css`
    background-color: var(--violet500);
    color: var(--violet000);
`;

export const Violet600Background = css`
  background: var(--violet600);
  color: var(--violet000);
`;


export const Violet100Background = css`
  background: var(--violet100);
  color: var(--black500);
`;

export const NoBackground = css`
   background: none;
    &:disabled {
    }
    &[readonly] {
    }
`;

export const BlueViolet600Background = css`
    background-color: var(--blueViolet600);
    color: white;
`;
export const Black300Background = css`
    background-color: var(--black300);
    color: var(--violet000);
`;

// Hover
export const Violet400BackgroundHover = css`
    &:hover {
        background-color: var(--violet600);
    }
    &:active {
        background-color: var(--violet600);
    }
`;



export const Black300BackgroundBlueHover = css`
    &:hover {
        background-color: var(--blueViolet700);
    }

    &:active {
        background-color: var(--blueViolet600);
    }
`;

export const Black200BackgroundBlueHover = css`
    &:hover {
        background-color: var(--black200);
    }

    &:active {
        background-color: var(--black200);
    }
`;


export const BlueViolet600BackgroundHover = css`
    &:hover {
        background-color: var(--blueViolet800);
    }
    &:active {
        background-color: var(--blueViolet800);
    }
`;


export const Violet500BackgroundHover = css`
    &:hover {
        background-color: var(--violet600);
        color: var(--violet100);
        transition: background-color 0.3s ease;
    }

    &:active {
        background-color: var(--violet600);
        color: var(--violet100);
        transition: background-color 0.1s ease;
    }
`;

export const Violet500LineHover = css`
    &:hover {
        background-color: var(--violet500);
        color: var(--violet100);
    }

    &:active {
        background-color: var(--violet500);
        color: var(--violet100);
    }
`;

export const Violet500LineBlackHover = css`
    &:hover {
        background-color: var(--black700);
        color: var(--violet000);
        border: 1px solid var(--black700);
    }

    &:active {
        background-color: var(--black700);
        color: var(--violet000);
        border: 1px solid var(--black700);
    }
`;

export const Violet600BackgroundHover = css`
  &:hover {
    color: var(--violet000);
    background-color: var(--violet700);
  }
  &:active {
    color: var(--violet000);
    background-color: var(--violet700);
  }
`;

export const Violet100BackgroundHover = css`
  &:hover {
    background-color: var(--violet200);
    transition: background-color 0.3s ease;
  }
  &:active {
    background-color: var(--violet200);
    transition: background-color 0.1s ease;
  }
`;

export const NoBackgroundHover = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const NoBackgroundHover2 = css`
  &:hover {
    color: var(--black600);
  }

  // Active (마우스 클릭 또는 모바일 터치) effect
  &:active {
    color: var(--black600);
  }
`;

// -------------------스타일별 버튼-------------------

// SquareButton


export const NoBackgroundButton = styled.button`
    ${Square}  
    ${NoBackground}
    ${NoBackgroundHover}
`;

export const Violet500LineButton = styled.button`
    ${Square}
    ${Violet500Line}
    ${Violet100BackgroundHover}
`;

export const Violet500LineSquareButton = styled.button`
    ${Square}
    ${Violet500Line}
    ${Violet500LineHover}
    ${IconButton}
`;

export const Black300BackgroundButton = styled.button`
    ${Square}  
    ${Black300Background}
    ${Black300BackgroundBlueHover}
`;

export const BlueViolet600BackgroundButton = styled.button`
    ${Square}  
    ${BlueViolet600Background}
    ${BlueViolet600BackgroundHover}
`;

export const Violet100BackgroundButton = styled.button`
    ${Square}  
    ${Violet100Background}
    ${Violet100BackgroundHover}
`;


export const Violet400BackgroundButton = styled.button`
    ${Square}  
    ${Violet400Background}
    ${Violet400BackgroundHover}
`;

export const Violet500BackgroundButton = styled.button`
    ${Square}  
    ${Violet500Background}
    ${Violet500BackgroundHover}
`;

export const Violet600BackgroundButton = styled.button`
    ${Square}
    ${Violet600Background}
    ${Violet600BackgroundHover}
`;

// RoundButton
export const Violet500LineRoundButton = styled.button`
    ${Round}
    ${Violet500Line}
    ${Violet100BackgroundHover}
`;

// -------------------------여기부터 버튼 끝------------------------------

// pages/CreateGroupPage.js, pages/FAQ.js, pages/MyPage.js
export const PageTitle = styled.h2`
    text-wrap: nowrap;
    font-weight: bold;
    font-size: 26px;
    color: var(--black800);
    padding: 10px;
`;

// components/Group/GroupComponent/GroupWritingContent.jsx
export const FormTitle = styled.h3`
    text-wrap: nowrap;
    font-size: 20px;
    font-weight: 400;
    color: var(--black800);
    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--violet600);
    height: 35px;
    font-weight: 500;
`;

// components/Group/GroupComponent/FormField.jsx
export const FormLabel = styled.label`
    text-wrap: nowrap;
    font-size: 17px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--black700);

    @media (max-width: 950px) {
        width: 100%;
        min-width: auto;
        justify-content: start;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 15px;
    }
`;




// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js, 
// components/MyPageComponents/UserInfoContent.js, components/Group/GroupInfoModal/ApplicantConfirmModal.js, 
// components/Group/GroupInfoModal/ApplicantModal.js, components/MainPageComponents/SearchBar/ButtonContainer.jsx
export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center; /* 버튼들을 가로 가운데 정렬 */

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
    }
`;


// --------------------------------------------------------------------위는 확정--------------------------------------------------------------

// components/MyPageComponents/UserInfoContent.js
export const responsivePadding = css`
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const responsiveFontSize = css`
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

// components/TabContentsWrapper.jsx
export const ContentsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--violet000);
    border: 1px solid var(--violet300);
`;



// components/MyPageComponents/UserInfoContent.js
export const ContentsWrapper3 = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid var(--black300);
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    ${responsivePadding}
`;

// components/MemberEvaluation.js
export const Title2 = styled.div`
  background-color: #9f87ff;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  width: 150px;
  margin: 30px auto 20px auto;
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

// components/Challenge/ChallengeDetail.js
export const Title4 = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    font-size: 25px;
`;

// components/Challenge/ChallengeListItem.js
export const Title5 = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: var(--black800);
    text-align: left;
    margin-bottom: 15px;

    min-height: 36px;

    @media (max-width: 768px) {
        font-size: 14px;
        min-height: 30px;
        margin-bottom: 10px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        min-height: 24px;
        margin-bottom: 8px;
    }
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const Title7 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--violet500);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    width: 140px;
    margin-bottom: 20px;
    align-self: center; /* ModalContainer 안에서 세로 가운데 정렬 */
`;


// pages/Tabs.js FAQ에서 쓰는 탭으로 확인됨
export const TabButton2 = styled.button`
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

// components/Challenge/ChallengeList.js
export const Container2 = styled.div`
    flex-direction: column;
    display: flex;

    padding: 15px;
    width: 100%;
    gap: 40px;
`;

// components/Challenge/ChallengeListItem.js
export const Container3 = styled.div`
    width: 100%;
    max-width: 240px;
    height: 240px;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 0.5px solid var(--black300);
    border-radius: 30px;
    overflow: hidden;
    background-color: #ffffff;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        max-width: 200px; 
        height: 220px;
    }

    @media (max-width: 480px) {
        max-width: 160px; 
        height: 180px;
    }
`;

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengePayCompleteModal.js, 
// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const Container4 = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(226, 227, 227, 0.8);
`;



// components/SignInContent/ThirdProcessContent.jsx
export const CategoryButton2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
        background-color: ${({ selected }) => (selected ? "var(--violet200)" : "var(--violet000)")};
        border: ${({ selected }) => (selected ? "2px solid var(--violet500)" : "none")};
        border-radius: 50%;
        padding: 5px;

        &:hover {
            background-color: var(--violet500);
        }
    }

    span {
        font-size: 14px;
        color: var(--black700);
    }

    @media (max-width: 768px) {
        img {
            width: 40px;
            height: 40px;
        }

        span {
            font-size: 12px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 30px;
            height: 30px;
        }

        span {
            font-size: 10px;
        }
    }
`;

// pages/StudyPage.js
export const StudyTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

// components/Header.js
export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 32px;
`;

// components/MemberEvaluation.js
export const Button2 = styled.button`

  color: ${(props) => (props.isSelected ? 'white' : '#8578D8')};
  background-color: ${(props) => (props.isSelected ? '#8578D8' : 'white')};

  border: 1px solid #8578D8;
  padding: 8px 0;
  font-size: 10px;
  width: 130px; 
  transition: all 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #8578D8;
    color: white;
  }
`;

// components/Challenge/ChallengeListItem.js
export const Button5 = styled.div`
    margin: 0 auto;
    padding: 8px 10px;
    background: var(--violet200);
    border: 1px solid var(--violet400);
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--black700);
    font-weight: 500;
    font-size: 14px;

    &:hover {
        background: var(--violet400);
        border: 1px solid #8578D8;
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 5px 6px;
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


// components/Input/Link/LinkInput.jsx
export const Button9 = styled.button`
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

    ${responsiveFontSize}
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

// pages/StudyPage.js
export const StudyDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;


// pages/StudyPage.js
export const LeaderText = styled.span`
  margin-left: 10px;
  color: #a0a0a0;
`;

// pages/Tabs.js
export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;



// pages/Tabs.js
export const MeetingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

// components/Group/MeetingContent.js
export const MeetingContainer2 = styled(ContentsWrapper)`
    padding: 20px;
    border-radius: 0 0 3px 3px;
`;

// components/Group/MeetingComponent/MeetingWindow.js
export const MeetingContainer3 = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: space-between;
`;

// pages/Tabs.js, components/Group/MeetingContent.js
export const StartMeetingButton = styled.button`
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #574dff;
  }
`;

// components/MemberEvaluation.js
export const ProjectName = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

// components/MemberEvaluation.js
export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

// components/MemberEvaluation.js
export const MemberName = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;



// components/MemberEvaluation.js
export const SubmitContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

// components/MemberEvaluation.js, components/Declaration.js
export const SubmitButton = styled.button`
  background-color: #CEC6FF; 
  color: #000000; 
  border: 1px solid #8578D8; 
  border-radius: 5px;
  padding: 8px 20px;
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
  &:hover {
    background-color: #574dc2;
  }
`;



// components/Header.js
export const DropdownContent = styled.div`
  display: ${props => (props.isDropdownOpen ? 'flex' : 'none')};
  position: absolute;
  min-width: 120px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  top: calc(100% + 10px);
  border-radius: 10px;
  background: var(--black000);
  padding: 10px;
  flex-direction: column;
  align-items: center;
@media (max-width: 576px) {
    right: -20px;
  }
`;

// components/Header.js
export const DropdownItem = styled.a`
  width: 100%;
  color: var(--black600);
  padding: 5px;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  &:hover {
    background-color: var(--black100);
  }
`;

// components/Header.js
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 2px;
`;

// components/Header.js
export const DisplayNoneDropdownItem = styled(DropdownItem)`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;

// components/MemberEvaluation.js
export const ModalContainer = styled.div`
  width: 600px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
`;

// components/Declaration.js, components/Group/TodoContent.js
export const ModalContainer2 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const ModalContainer4 = styled.div`
    z-index: 1000;
    width: 90%; /* 화면에 삐져나가는 문제 해결을 위해 너비를 %로 설정 */
    max-width: 650px;
    height: 664px;
    background-color: #fcfcfc;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
`;

// components/Declaration.js
export const Description = styled.p`
  font-size: 10px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

// components/MyPageComponents/UserInfoContent.js
export const Description2 = styled.div`
    font-size: 14px;
    color: var(--black800);
    ${responsiveFontSize}
`;

// components/SignInContent/LoginContent.jsx
export const Description3 = styled.div`
    margin: 10px 0;
    font-size: 15px;
    line-height: 1.5;
    color: var(--black800);
`;

// components/Declaration.js
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

    ${responsiveFontSize}
`;


// components/SignInContent/SecondProcessContent.jsx, components/SignInContent/ThirdProcessContent.jsx
export const ButtonGroup3 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    max-width: 100%;
`;


// components/Declaration.js, components/MemberEvaluation.js
export const CancelButton = styled.button`

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

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengeAuthModal.js, 
// components/ChallengeModal/ChallengePayCompleteModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const CancelButton2 = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center; 

    &:hover{
        background: #F2F0FF;
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const CancelButton3 = styled(Button)`
    border: 1px solid var(--violet800);
    background-color: var(--violet000);
    color: var(--violet800);
`;


// components/ActivityScore/ActivityScoreBar.jsx
export const BarContainer = styled.div`
    width: 100%;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarWrapper = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 10px 0;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarFiller = styled.div`
    background-color: var(--violet300);
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--black800);
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
`;

// components/ActivityScore/ActivityScoreBar.jsx
export const BarLabel = styled.span`
    padding: 0 10px;
    font-size: 16px;
    color: var(--black800);
`;














// components/SignInContent/ThirdProcessContent.jsx
export const CategoryWrapper2 = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;



// components/Challenge/ChallengeDetail.js
export const Period = styled.div`
    width: 80%;
    height: 100px;
    line-height: 100px;
    background: #FFF;
    border: 1px solid #CEC6FF;
    margin: 0px auto;
    margin-top: 30px;
`;

// components/Challenge/ChallengeDetail.js
export const PeriodText = styled.span`
    float: left;
    margin-left: 50px;
`;

// components/Challenge/ChallengeDetail.js
export const ParticipationButton = styled.div`
    float: right;
    width: 80px;
    height: 35px;
    background: #FAF9FF;
    border: 1px solid #B3A8FF;
    border-radius: 5px;
    line-height: 35px;
    margin-top: 30px;
    margin-right: 50px;

    &:hover {
        cursor: pointer;
        background: #CEC6FF;
    }
`;

// components/Challenge/ChallengeDetail.js
export const Content = styled.div`
    width: 80%;
    min-height: 300px;
    background: #FFF;
    border: 1px solid #CEC6FF;
    margin: 0px auto;
    margin-top: 30px;
    clear: both;
    padding: 30px;
    text-align: left;
    color: #A0A0A0;
`;



// components/Challenge/ChallengeDetail.js
export const ChallengeWarning = styled.div`
    width: 80%;
    min-height: 300px;
    background: #9787FF;
    color: #FAF9FF;
    margin: 0px auto;
    margin-top: 30px;
    padding: 30px;
    text-align: left;
`;

// components/Challenge/ChallengeDetail.js
export const BackButton = styled.div`
    width: 10%;
    height: 50px;
    margin: 25px auto;
    background: #E5E1FF;
    border: 1px solid #9787FF;
    color: #49494A;
    font-weight: bold;
    font-size: 25px;
    line-height: 50px;
    text-align: center;

    &:hover {
        background: #B3A8FF;
        border: 1px solid #8578D8;
        cursor: pointer;
    }
`;



// components/Challenge/ChallengeList.js
export const Category = styled.div`
    height: 50px;
    line-height: 50px;

    width: 100%;
    border-radius: 10px;

    font-size: 20px;
    font-weight: 500;
`;

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengePayCompleteModal.js, 
// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const Category2 = styled.div`
    width: 40%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0px auto;
    margin-bottom: 10px;
    background: #9787FF;
    border-radius: 5px;
    color: #FFF;
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const Category3 = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    align-self: center; /* ModalContainer 안에서 세로 가운데 정렬 */
`;

// components/Challenge/ChallengeList.js
export const Items = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    @media (max-width: 768px) {
        margin: 0 auto;
        gap: 10px;
    }
    @media (max-width: 480px) {
        gap: 5px;
    }
`;

// components/Challenge/ChallengeListItem.js
export const Top = styled.div`
    width: 100%;
    height: 45%;
    font-family: 'Kavoon', cursive;
    font-size: 35px;
    color: var(--black600);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

// components/Challenge/ChallengeListItem.js
export const Bottom = styled.div`
    width: 100%;
    padding: 10px;
`;



// components/Challenge/ChallengeListItem.js
export const Date = styled.div`
    width: 100%;
    color: var(--black600);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    font-size: 12px;

    @media (max-width: 768px) {
        font-size: 10px;
        margin-bottom: 10px;  
    }

    @media (max-width: 480px) {
        font-size: 8px;
        margin-bottom: 8px;
    }
`;

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengePayCompleteModal.js, 
// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const Modal = styled.div`
    width: 580px;
    height: auto;
    background: #FCFCFC;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// components/ChallengeModal/ChallengeApplyModal.js
export const ModalBody = styled.div`
    width: 90%;
    margin-top: 10px;
    font-size: 15px;
    border-radius: 3px;
    padding: 20px 10px;

    color: #FFF;
    background: #8578D8;
    text-align: left;
    height: 350px; /* components/ChallengeModal/ChallengeApplyModal.js */

`;

// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengePayCompleteModal.js, 
// components/ChallengeModal/ChallengePayModal.js, components/ChallengeModal/ChallengeResultModal.js
export const ModalBody2 = styled.div`
    width: 90%;
    margin-top: 10px;
    font-size: 15px;
    border-radius: 3px;
    padding: 20px 10px;

    color: #111111;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
`;

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengeAuthModal.js, 
// components/ChallengeModal/ChallengePayModal.js, components/ChallengeModal/ChallengeResultModal.js
export const ModalFooter = styled.div`
    width: 90%;
    margin-top: 10px;
    height: 100px;
`;

// components/Challenge/ChallengeDetail.js
export const ChallengeFee = styled.div`
    width: 80%;
    min-height: 200px;
    background: #FFF;
    border: 1px solid #CEC6FF;
    margin: 0px auto;
    margin-top: 30px;
    padding: 30px;
    text-align: left;
    color: #A0A0A0;
`;

// components/ChallengeModal/ChallengeApplyModal.js
export const ChallengeFee2 = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    line-height: 50px;
    padding: 20px 30px;
`;

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

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengeAuthModal.js, 
// components/ChallengeModal/ChallengePayCompleteModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;



// components/ChallengeModal/ChallengeApplyModal.js
export const ApplyButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center;
    margin-left: 20px;

    &:hover{
        cursor: pointer;
        background: #F2F0FF;
    }
`;





// components/ChallengeModal/ChallengeAuthModal.js
export const AuthOrganization = styled.div`
    width: 100%;
    text-align: left;
    font-size: 13px;
    line-height: 30px;
    margin-top: 30px;
`;

// components/ChallengeModal/ChallengeAuthModal.js
export const AuthCode = styled.div`
    width: 100%;
    text-align: left;
    font-size: 13px;
    line-height: 30px;
    margin-top: 30px;
`;

// components/ChallengeModal/ChallengeAuthModal.js
export const AuthWarning = styled.div`
    width: 100%;
    height: 160px;
    background: #8578D8;
    color: #fff;
    margin-top: 30px;
    text-align: left;
    padding: 10px;
`;





// components/ChallengeModal/ChallengeAuthModal.js
export const AuthButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center;
    margin-left: 20px;
    &:hover{
        cursor: pointer;
        background: #F2F0FF;
    }
`;

// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengeApplyModal.js, 
// components/ChallengeModal/ChallengePayCompleteModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const ModalHeader = styled.div`
    width: 90%;
    height: 100px;
    margin-top: 20px;
    text-align: center;
`;

// components/ChallengeModal/ChallengePayModal.js
export const PayButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #FCFCFC;
    border: 1px solid #9787FF;
    text-align: center;
    margin-left: 20px;
    &:hover{
        cursor: pointer;
        background: #F2F0FF;
    }
`;

// components/ChallengeModal/ChallengeResultModal.js
export const TotalAmount = styled.div`
    width: 100%;
    height: 120px;
    background: #8578D8;
    color: #FCFCFC;
    padding: 10px 50px;
    font-size: 28px;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const ResultDetail = styled.div`
    width: 100%;
    height: 200px;
    background: #CEC6FF;
    border: #9787FF;
    display: flex;
    font-size: 18px;
    padding: 25px 63px;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const Success = styled.div`
    width: 50%;
    height: 100%;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const Fail = styled.div`
    width: 50%;
    height: 100%;
`;





// components/MyPageComponents/UserInfoContent.js
export const Wrapper3 = styled(ContentsWrapper)`
    gap: 20px;
    padding: 50px 35px;
    ${responsivePadding}
`;



// components/Group/ChallengeTab.js
export const ChallengeLists = styled(ContentsWrapper)`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

// 전체 div 묶음
// components/Group/GroupInfoContent.js
export const InfoContainer = styled(ContentsWrapper)` 
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: var(--violet100);
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

// 정보 묶음
// components/Group/GroupInfoContent.js

export const Violet500LineDiv = styled.div` 
    ${Violet500Line}
    ${Square}
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 25px;
    height: auto;
`;


export const DoubleDateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    font-size: 16px;
    color: var(--black500);

    @media (max-width: 768px) {
        font-size: 15px; 
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

// 포스트 내용
// components/Group/GroupInfoContent.js
export const PostContent = styled.div` 
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;


// 질문 헤더
// components/Group/GroupInfoContent.js
export const QuestionHeader = styled.div` 
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: var(--black800);
    text-align: left;
    margin-left: 5px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;




// 섹션
// components/Group/GroupManageContent.js
export const Section = styled.section`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--violet100);
    border: 1px solid var(--black200);
    border-radius: 0px 0px 7px 7px;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
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

// 지원자 관리 div
// components/Group/GroupManageContent.js
export const ApplyInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 768px) {
        align-items: center;
        padding: 5px 0;
    }

    .UserDetails {
        display: flex;
        align-items: center;
    }

    .roleSelect {
        width: fit-content;
        display: flex;
        align-items: center;
        flex: 0.35;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 5px;
            font-size: 14px;
            align-items: center;
            justify-content: center;
            
            label {
                font-size: 16px;
            }
        }

        @media (max-width: 480px) {
            font-size: 10px;
            flex-direction: column;

            label {
                font-size: 14px;
            }
        }
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const SubTitle2 = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: var(--black800);
    ${responsiveFontSize}
`;

// 사용자 이미지
// components/Group/GroupManageContent.js, components/Group/GroupComponent/GroupWritingContent.jsx
export const UserImg = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #6c63ff;
    margin-right: 10px;
`;

// 사용자 이름
// components/Group/GroupManageContent.js, components/Group/GroupComponent/GroupWritingContent.jsx
export const UserName = styled.div`
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

// 사용자 직위
// components/Group/GroupManageContent.js
export const UserPosition = styled.div`
    margin-left: 50px;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 768px) {
        margin-left: 0;
        font-size: 12px;
        text-align: center;
    }
`;

// 날짜 스타일
// components/Group/GroupManageContent.js
export const DateStyle = styled.div`
    margin: 0 40px;
    font-size: 16px;
    color: var(--black600);
    text-align: center;

    @media (max-width: 768px) {
        margin: 0 20px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        margin: 0 10px;
        font-size: 12px;
    }
`;



// 지원자 섹션   
// components/Group/GroupManageContent.js
export const ApplySection = styled.div`
    padding: 20px;
    width: 100%;
    
    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

// components/Group/GroupTabs.jsx, components/MyPageComponents/MyPageTabs.jsx
export const TabContainer = styled.div`
    display: flex;
    width: 100%;
`;


// components/Group/MeetingContent.js
export const MeetingHeader = styled.h3`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: var(--black800);
    text-align: left;
`;



// components/Group/MeetingContent.js
export const MeetingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

// components/Group/TodoContent.js
export const TodoContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #F2F0FF;
  border-radius: 8px;
`;

// components/Group/TodoContent.js
export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// components/Group/TodoContent.js
export const TodoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

// components/Group/TodoContent.js
export const TodoButton = styled.button`
  background-color: #FFFFFF;
  color: #000;
  border: 1px solid #9787FF;
  padding: 8px 20px;
  border-radius: 5px;


  &:hover {
    background-color: #8578d8;
    color: white;
  }
`;



// components/Group/TodoContent.js
export const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: #ffffff;
`;

// components/Group/TodoContent.js
export const Column = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  margin: 0 10px;
  border-radius: 8px;
  min-height: 200px;
`;

// components/MyPageComponents/UserInfoContent.js
export const Column2 = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// components/Group/TodoContent.js
export const TodoItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #968AFF;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
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
export const ModalInput = styled.div`
  width: 75%; 
  display: flex;
  flex-direction: column;
  border: 1px solid #9787FF;
  border-radius: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

// components/Group/TodoContent.js
export const ModalInputDate = styled.div`
  width: 25%; 
  display: flex;
  border: 1px solid #9787FF;
  border-radius: 5px;
  align-items: center;
  margin-left: 10px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

// components/Group/TodoContent.js
export const TodoPlus = styled.div`
  font-size: 30px;
  color: #9787FF;
  cursor: pointer;
  text-align: center;
`;

// components/Group/TodoContent.js
export const ModalTaskInput = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  border: 1px solid #9787FF;
  border-radius: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

// components/Group/TodoContent.js
export const LinkInputTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  color: #000000;
`;

// components/Group/TodoContent.js
export const LinkInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;

// components/Group/TodoContent.js
export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-right: 10px;
`;

// components/Group/TodoContent.js
export const StatusButton = styled.div`
  background-color: #9787FF;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  width: 100%;
`;

// components/Group/TodoContent.js
export const CalendarIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/3/3a/Calendar_icon.svg');
  background-size: cover;
`;





// components/Group/GroupComponent/GroupWritingContent.jsx, 
// components/SignInContent/FirstProcessContent.jsx
export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
    }
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js, 
// components/MyPageComponents/UserInfoContent.js
export const Row2 = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px; /* 이메일과 지원직군 사이에 여백 추가 */
`;



// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
`;





// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const NoticeDiv = styled.div`
    margin: 30px 0 30px 0;
    background-color: var(--violet500);
    width: 100%;
    height: 500px;
    padding: 20px;
    line-height: 2;
    border-radius: 5px;
    color: white;
`;

// components/Group/GroupInfoModal/ApplicantModal.js
export const SubTitle = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;


// components/SignInContent/LoginContent.jsx
export const SubTitle3 = styled.div`
    margin: 20px 0;
    font-size: 20px;
    color: var(--black800);
`;

// components/Group/GroupInfoModal/ApplicantModal.js, components/Group/GroupInfoModal/ApplicantConfirmModal.js
export const PortfolioRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 입력 칸과 버튼 사이의 간격 조절 */

  .PortfolioButton {
    padding: 10px 20px;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background-color: var(--violet300);
    }
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

// components/Group/MeetingComponent/MeetingWindow.js
export const VideoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

// components/Group/MeetingComponent/MeetingWindow.js
export const VideoWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #333;
  position: relative;
`;

// components/Group/MeetingComponent/MeetingWindow.js
export const ParticipantList = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: 2px solid #ddd;
`;

// components/Group/MeetingComponent/MeetingWindow.js
export const ParticipantItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

// components/Group/MeetingComponent/MeetingWindow.js
export const ControlBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
`;

// components/Group/MeetingComponent/MeetingWindow.js
export const ControlButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#6c63ff' : '#ccc')};
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #574dff;
  }
`;

// components/Group/Question/CommentSection.jsx
export const CommentItem = styled.div`
    background-color: #ffffff;
    padding: 15px;
    border-radius: 3px;
    margin-bottom: 15px;
`;

// components/Group/Question/CommentSection.jsx
export const CommentBody = styled.div`
    margin-top: 10px;
`;



// components/Group/Question/CommentSection.jsx, components/Group/Question/QuestionForm.jsx
export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
    align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

// components/Group/Question/QuestionForm.jsx
export const QuestionFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
`;

// components/Group/Question/QuestionForm.jsx
export const FileInputButton = styled.label`
    ${Square}
    ${Violet500Line}
    ${Violet100BackgroundHover}
    display:flex;
    align-items: center;
    gap: 5px;
    
    @media (max-width: 480px) {
        svg {
            display:none;
        }
    }

    ${({ disabled }) => disabled && `
        background-color: var(--violet200);
        pointer-events: none;
    `}
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionItemContainer = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 20px;
`;

// components/Group/Question/QuestionItem.jsx
export const ActionButtons = styled.div`
    background-color: white;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
        background-color: white;
    }
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 25px;
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionText = styled.div`
    font-size: 16px;
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionDate = styled.div`
    font-size: 14px;
    color: var(--black500);
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionAuthor = styled.div`
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;



// components/Icon/RegularIcon.jsx
export const IconContainer2 = styled.img`
    width: 28px;
    height: 28px;

    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 480px) {
        width: 18px;
        height: 18px; 
    }
`;


// components/Input/Link/LinkInput.jsx
export const LinkRowContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 15px;
`;



// components/Modal/ModalContainer.jsx
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* 배경 투명도 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* 모달이 다른 요소 위에 나타나도록 */
`;

// components/Modal/ModalContainer.jsx
export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--violet100);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 550px;
    width: 100%;
    text-align: center;
`;

// components/Modal/ModalContainer.jsx
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column; 
`;

// components/Modal/ModalContainer.jsx
export const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    color: var(--black800);
    background-color: var(--violet100);
`;

// components/MyPageComponents/ActivitiesContent.js
export const PageContainer = styled(ContentsWrapper)`
    padding: 20px;
    gap: 15px;
    position: relative;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

// components/MyPageComponents/ActivitiesContent.js
export const SectionContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

// components/MyPageComponents/ActivitiesContent.js
export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: var(--black800);
    margin: 15px 0;
`;

// components/MyPageComponents/ActivityCardList.jsx
export const ActivityCardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;


// components/MyPageComponents/NotificationContent.js
export const NotificationContainer = styled(ContentsWrapper)`
    gap: 15px;
    position: relative;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

// components/MyPageComponents/NotificationContent.js
export const Timeline = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left: 25px;

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        margin-left: 15px;
        gap: 20px;
    }
`;

// components/MyPageComponents/NotificationContent.js
export const Line = styled.div`
    position: absolute;
    left: 58px;
    top: 0;
    bottom: 0;
    width: 2px;
    border-left: 1px dotted var(--black500);

    @media (max-width: 768px) {
        left: 45px;
    }

    @media (max-width: 480px) {
        left: 35px;
    }
`;

// components/SignInContent/Components/StatusButton.jsx
export const Line2 = styled.div`
    width: 25px;
    height: 2px;
    background-color: var(--black500);
    margin: 0 10px;

    @media (max-width: 768px) {
        width: 20px;
        margin: 0 8px;
    }

    @media (max-width: 480px) {
        width: 15px;
        margin: 0 6px;
    }
`;

// components/MyPageComponents/NotificationContent.js
export const NotificationEvent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;

    @media (max-width: 768px) {
        gap: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column; 
        align-items: flex-start;
        padding: 5px;
    }
`;

// components/MyPageComponents/NotificationContent.js
export const EventMarker = styled.div`
    width: 8px;
    height: 8px;
    background-color: var(--black800);
    border-radius: 50%;

    @media (max-width: 480px) {
        width: 6px;
        height: 6px;
    }
`;

// components/MyPageComponents/NotificationContent.js
export const EventContent = styled.div`
    border: 1px solid var(--violet400);
    border-radius: 5px;
    background-color: white;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }

    .title {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 10px;

        @media (max-width: 480px) {
            margin-bottom: 5px;
        }
    }
    .date {
        font-size: 12px;
        color: var(--black500);
    }
    strong {
        font-size: 16px;
        color: var(--black800);
        font-weight: 600;

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }
    p {
        font-size: 14px;
        color: var(--black800);
        margin: 5px 0;

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
`;



// components/MyPageComponents/UserInfoContent.js
export const ContentsRow = styled(Row2)`
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;



// components/MyPageComponents/UserInfoContent.js
export const SubContentsWrapper = styled(ContentsWrapper3)`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const EtcContentsWrapper = styled(ContentsWrapper3)`
    width: 100%;
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

// components/SignInContent/FirstProcessContent.jsx, components/SignInContent/FourthProcessContent.jsx
export const InputLabel2 = styled.div`
    text-align: left;
    font-size: 16px;
    color: var(--black800);
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 5px;
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const ToggleBox = styled.input.attrs({ type: "select" })`
    background-color: var(--violet000);
    border: 1px solid var(--violet400);
    border-radius: 15px;
    width: 150px;
    font-size: 16px;
    color: var(--black800);

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// components/MyPageComponents/UserInfoContent.js
export const LinkRow = styled(Row2)`
    align-items: center;
`;



// components/MyPageComponents/UserInfoContent.js
export const UpdateButton = styled(Button)`
    border: 1px solid var(--violet500);
    background-color: var(--violet500);
    color: white;
`;

// components/SignInContent/Components/StatusButton.jsx
export const CircleButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? 'var(--violet400)' : 'var(--black200)')};
    color: ${({ active }) => (active ? '#fff' : 'var(--black000)')};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
    }
`;

// components/SignInContent/Components/StatusButton.jsx
export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 8px;
    }

    @media (max-width: 480px) {
        gap: 5px;
    }
`;

// components/SignInContent/Components/SubTitle.jsx
export const SubTitleWrapper = styled.div`
    white-space: pre-line;
    font-size: 20px;
    color: var(--black800);
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;



// components/SignInContent/FirstProcessContent.jsx, components/SignInContent/FourthProcessContent.jsx
export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

// components/SignInContent/FirstProcessContent.jsx
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 5px;
    gap: 5px;
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

// components/SignInContent/FirstProcessContent.jsx
export const RadioButton = styled.input.attrs({ type: "radio" })`
    cursor: pointer;
    appearance: none;
    border: 2px solid var(--violet500);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: var(--black000);

    &:checked {
        background-color: var(--violet500);
    }

    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
    }

    @media (max-width: 480px) {
        width: 12px;
        height: 12px;
    }
`;

// components/SignInContent/FourthProcessContent.jsx, components/SignInContent/FirstProcessContent.jsx
// components/SignInContent/SecondProcessContent.jsx, components/SignInContent/ThirdProcessContent.jsx
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

// components/SignInContent/LoginContent.jsx
export const LogoL = styled.div`
    font-family: "Kavoon";
    font-size: 96px;
    font-weight: 700;
    background-size: 100%;
    margin: 0 auto;
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


















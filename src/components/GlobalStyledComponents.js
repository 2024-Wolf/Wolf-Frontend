import styled, { css } from "styled-components";

export const QuestionItemContainer = styled.div`
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardMapingContainer = styled.div`
    @media (max-width: 616px) {
        display: flex;
        width: 90%;
        height: 300px;
        border-radius: 10px;
    }
`;

// components/Card/Card.jsx
export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 13px;
    color: var(--black500);
    margin-bottom: 10px;

    span {
        white-space: nowrap;
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
`;

// components/Card/Card.jsx
export const CardTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: var(--black700);
    text-align: left;
    margin-bottom: 8px;

    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis; 
`;

// components/Card/Card.jsx
export const CardContainer = styled.div`
    width: 250px;
    height: 260px;
    
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid var(--black200);
    border-radius: 30px;
    background-color: #ffffff;
    transition: transform 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
    
    @media (max-width: 616px) {
        width: 100%;
        height: auto;
        &:hover {
            transform: scale(1.02);
        }
        border-radius: 10px;
    }
`;



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
  color: var(--black600);
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
  gap: 5px;
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
    gap: 20px;
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
    button {
      max-width: 458px;
      width: 100%;
    }
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
  svg {
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




export const Violet200Line = css`
  background: var(--violet200);
  border: 1px solid var(--violet400);

  &:disabled {
    background-color: var(--violet200);
  }
  &[readonly] {
    background-color: var(--violet200);
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
  ${({ isOptionActive }) =>
    isOptionActive &&
    `
        background-color: var(--violet500);
        color: var(--violet100);
    `}

  /* 선택 됐을 때 검은색 */
    ${({ clicked }) =>
    clicked &&
    `
        background-color: var(--black700);
        color: var(--violet000);
        border: 1px solid var(--black700);
    `}
    
`;

export const Violet300Background = css`
  background-color: var(--violet300);
`;

export const Violet400Background = css`
  background-color: var(--violet400);
  color: var(--violet000);

    &:disabled {
      background-color: var(--black400);
  }
  &[readonly] {
    background-color: var(--black400);
  }
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
export const Black100Background = css`
  background-color: var(--black100);
`;

export const Black200Background = css`
  background-color: var(--black200);
`;

export const Black300Background = css`
  background-color: var(--black300);
  color: var(--violet000);
`;

// Hover
export const blueViolet700BackgroundHover = css`
  &:hover {
    background-color: var(--blueViolet700);
  }

  &:active {
    background-color: var(--blueViolet700);
  }
`;

export const Black100BackgroundHover = css`
  &:hover {
    background-color: var(--black100);
  }

  &:active {
    background-color: var(--black100);
  }
`;

export const Black200BackgroundHover = css`
  &:hover {
    background-color: var(--black200);
  }

  &:active {
    background-color: var(--black200);
  }
`;

export const Black300BackgroundHover = css`
  &:hover {
    background-color: var(--black300);
    color: var(--black000);
  }

  &:active {
    background-color: var(--black300);
    color: var(--black000);
  }
`;

export const Black600BackgroundHover = css`
  &:hover {
    color: var(--violet000);
    background-color: var(--black600);
    border: 1px solid var(--black600);
  }

  &:active {
    color: var(--violet000);
    background-color: var(--black600);
    border: 1px solid var(--black600);
  }
`;

export const Violet200LineHover = css`
  &:hover {
    background: var(--violet400);
    border: 1px solid #8578d8;
  }
  &:active {
    background: var(--violet400);
    border: 1px solid #8578d8;
  }
`;

export const Black400BackgroundHover = css`
  &:hover {
    background-color: var(--black400);
    color: var(--black000);
  }

  &:active {
    background-color: var(--black400);
    color: var(--black000);
  }
`;

export const BlueViolet800BackgroundHover = css`
  &:hover {
    background-color: var(--blueViolet800);
  }
  &:active {
    background-color: var(--blueViolet800);
  }
`;

export const Violet600BackgroundHover = css`
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

export const Violet400BackgroundHover = css`
  &:hover {
    background-color: var(--violet400);
    color: var(--violet100);
  }

  &:active {
    background-color: var(--violet400);
    color: var(--violet100);
  }
`;

export const Violet300BackgroundHover = css`
  &:hover {
    background-color: var(--violet300);
    color: var(--violet100);
  }

  &:active {
    background-color: var(--violet300);
    color: var(--violet100);
  }
`;

export const Violet500BackgroundHover = css`
  &:hover {
    background-color: var(--violet500);
    color: var(--violet100);
  }

  &:active {
    background-color: var(--violet500);
    color: var(--violet100);
  }
`;

export const Violet700BackgroundHover = css`
  &:hover {
    color: var(--violet000);
    background-color: var(--violet700);
  }
  &:active {
    color: var(--violet000);
    background-color: var(--violet700);
  }
`;

export const Violet200BackgroundHover = css`
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

export const fontColorHover = css`
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

// Style
export const Black200BackgroundButton = styled.button`
  ${Square}
  ${Black100Background}
  ${Black200BackgroundHover}
`;

export const RedLineButton = styled.button`
  ${Square}

  color: #ED4E51;
  border: 1px solid #ED4E51;
  background-color: var(--violet000);

  &:disabled {
    background-color: #fad3d4;
  }
  &[readonly] {
    background-color: #fad3d4;
  }

  &:hover {
    background-color: #fad3d4;
  }

  &:active {
    background-color: #fad3d4;
  }
`;
export const Black500LineButton = styled.button`
  ${Square}
  ${Black500Line}
    ${NoBackgroundHover}
`;

export const NoBackgroundButton = styled.button`
  ${Square}
  ${NoBackground}
    ${NoBackgroundHover}
`;

export const Violet500LineButton = styled.button`
  ${Square}
  ${Violet500Line}
    ${Violet200BackgroundHover}
`;

export const Violet500LineSquareButton = styled.button`
  ${Square}
  ${Violet500Line}
    ${Violet500BackgroundHover}
    ${IconButton}
`;

export const Black300BackgroundButton = styled.button`
  ${Square}
  ${Black300Background}
    ${blueViolet700BackgroundHover}
`;


export const Violet100BackgroundButton = styled.button`
  ${Square}
  ${Violet100Background}
    ${Violet200BackgroundHover}
`;

export const Violet400BackgroundButton = styled.button`
  ${Square}
  ${Violet400Background}
    ${Violet600BackgroundHover}
`;

export const Violet500BackgroundButton = styled.button`
  ${Square}
  ${Violet500Background}
    ${Violet600BackgroundHover}

  &:disabled {
    background-color: #ccc; /* 비활성화 시 배경색 */
  }
`;

export const Violet600BackgroundButton = styled.button`
  ${Square}
  ${Violet600Background}
    ${Violet700BackgroundHover}
`;


export const BlueViolet600BackgroundButton = styled.button`
  ${Square}
  ${BlueViolet600Background}
    ${BlueViolet800BackgroundHover}
`;

// RoundButton
export const Violet500LineRoundButton = styled.button`
  ${Round}
  ${Violet500Line}
    ${Violet200BackgroundHover}
`;

export const Violet200LineSuqreButton = styled.button`
  ${Square}
  ${Violet200Line}
  ${Violet200LineHover}
`;

export const Violet400LineRoundButton = styled.button`
  ${Round}
  ${Violet200Line}
  ${Violet200LineHover}
  color: var(--black700);
  font-weight: 500;

  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  margin-top: 20px;
`;

// -------------------------여기부터 버튼 끝------------------------------

// pages/CreateGroupPage.js, pages/FAQ.js, pages/MyPage.js, TeamOfService.js
export const PageTitle = styled.h2`
  text-wrap: nowrap;
  font-weight: bold;
  font-size: 30px;
  color: var(--black800);
  padding: 10px;
  width: 100%;
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

export const ImagePreview = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 214px;
  border: 1.5px solid var(--black200);
  border-radius: 10px;
`;

// components/Group/GroupComponent/FormField.jsx
export const FormLabel = styled.label`
  text-wrap: nowrap;
  font-size: 17px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--black600);


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

// components/TabContentsWrapper.jsx
export const ContentsWrapperForm = styled.form`
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
  background-color: #8578d8;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 30px auto;
  width: 140px;
  font-size: 12px;
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

// pages/StudyPage.js
export const CategoryMainTitle = styled.div`
    background-color: var(--black500);
    color: var(--black000);
    border-radius: 20px;
    font-size: 14px;
    text-align: center;
    padding: 10px 20px;
    font-weight: bold;
    text-wrap: nowrap;
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const TitleDiv = styled.div`
  background-color: var(--black500);
  color: var(--black000);
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  padding: 10px 20px;
  font-weight: bold;
  text-wrap: nowrap;
  margin-bottom: 5px;
  width: 120px;
`;

// pages/Tabs.js FAQ에서 쓰는 탭으로 확인됨
export const TabButton2 = styled.button`
  border: none;
  text-align: center;

  padding: 10px;
  flex-basis: 20%;

  transition: background-color 0.3s ease;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  background-color: ${(props) => (props.isActive ? "#f2f0ff" : "transparent")};
  border-bottom: ${(props) => (props.isActive ? "2px solid #6c63ff" : "none")};

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
    background-color: ${({ selected }) =>
    selected ? "var(--violet200)" : "var(--violet000)"};
    border: ${({ selected }) =>
    selected ? "2px solid var(--violet500)" : "none"};
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
  color: ${(props) => (props.isSelected ? "white" : "#8578D8")};
  background-color: ${(props) => (props.isSelected ? "#8578D8" : "white")};

  border: 1px solid #8578d8;
  padding: 8px 0;
  font-size: 10px;
  width: 130px;
  transition: all 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #8578d8;
    color: white;
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
  background-color: #cec6ff;
  color: #000000;
  border: 1px solid #8578d8;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 12px;
  /* margin-right: 10px; */ /* components/MemberEvaluation.js */

  &:hover {
    background-color: #8578d8;
    color: white;
  }
`;

// components/Header.js
export const DropdownContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isDropdownOpen'].includes(prop),
})`
  display: ${({ isDropdownOpen }) => (isDropdownOpen ? "flex" : "none")};
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
  text-wrap: nowrap;
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


// components/MemberEvaluation.js
export const ModalContentWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  height: 100%;
`;


// components/Declaration.js, components/Group/TodoContent.js
export const ModalContainer2 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  max-height: 90%;
  border-radius: 20px;
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const ModalContainer4 = styled.div`
  z-index: 10000;
  position: relative;
  width: 90%; /* 화면에 삐져나가는 문제 해결을 위해 너비를 %로 설정 */
  max-width: 700px;
  height: auto;
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
  font-size: 14px;
  color: #666;
  text-align: center;
`;

// components/MyPageComponents/UserInfoContent.js
export const Description2 = styled.div`
  font-size: 14px;
  color: var(--black800);
  ${responsiveFontSize}
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
  border: 1px solid #8578d8;
  font-size: 12px;
  color: #666;
`;

// components/Declaration.js
export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #8578d8;
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
export const OptionButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  align-items: center;
`;

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengeAuthModal.js,
// components/ChallengeModal/ChallengePayCompleteModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const CancelButton2 = styled.div`
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #fcfcfc;
  border: 1px solid #9787ff;
  text-align: center;

  &:hover {
    background: #f2f0ff;
  }
`;

// components/MyPageComponents/UserInfoContent.js
export const CancelButton3 = styled(Button)`
  border: 1px solid var(--violet800);
  background-color: var(--violet000);
  color: var(--violet800);
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
  background: #fff;
  border: 1px solid #cec6ff;
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
  background: #faf9ff;
  border: 1px solid #b3a8ff;
  border-radius: 5px;
  line-height: 35px;
  margin-top: 30px;
  margin-right: 50px;

  &:hover {
    cursor: pointer;
    background: #cec6ff;
  }
`;

// components/Challenge/ChallengeDetail.js
export const Content = styled.div`
  width: 80%;
  min-height: 300px;
  background: #fff;
  border: 1px solid #cec6ff;
  margin: 0px auto;
  margin-top: 30px;
  clear: both;
  padding: 30px;
  text-align: left;
  color: #a0a0a0;
`;

// components/Challenge/ChallengeDetail.js
export const ChallengeWarning = styled.div`
  width: 80%;
  min-height: 300px;
  background: #9787ff;
  color: #faf9ff;
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
  background: #e5e1ff;
  border: 1px solid #9787ff;
  color: #49494a;
  font-weight: bold;
  font-size: 25px;
  line-height: 50px;
  text-align: center;

  &:hover {
    background: #b3a8ff;
    border: 1px solid #8578d8;
    cursor: pointer;
  }
`;

// components/Challenge/ChallengeList.js
export const CategoryTitle = styled.div`
  height: 60px;
  line-height: 60px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  margin: 0;

  position: sticky;
  top: 0;
  z-index: 500;
  border-radius: 0px 0px 5px 5px;
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
  background: #9787ff;
  border-radius: 5px;
  color: #fff;
`;

// components/Group/GroupInfoModal/ApplicantConfirmModal.js, components/Group/GroupInfoModal/ApplicantModal.js
export const Category3 = styled.div`
  font-size: 24px;
  align-self: center; /* ModalContainer 안에서 세로 가운데 정렬 */
`;

export const MainCardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 17px;
    align-items: center;
    justify-content: start;
    width: 100%;

    @media (max-width: 616px) {
        flex-wrap: nowrap;
        flex-direction: column;
        height: 100%;
    }
`;

export const MainCardParentContainer = styled.div`
    display: flex;
    gap: 27.5px;
    align-items: center;
    justify-content: start;
    width: 1318px;
    margin: auto;
    // 카드 가로 5개

    @media (max-width: 1500px) {
        width: 1051px;
        // 카드 가로 4개
    }
        
    @media (max-width: 1257px) {
        width: 784px;
        // 카드 가로 3개
    }

    @media (max-width: 964px) {
        width: 517px;
        // 카드 가로 2개
    }

    @media (max-width: 616px) {
        width: 100%;
        // 카드 가로 1개
    }
`;

// components/Challenge/ChallengeListItem.js
export const Bottom = styled.div`
  width: 100%;
  height: 100%;
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
  background: #fcfcfc;
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

  color: #fff;
  background: #8578d8;
  text-align: left;
  height: 350px; /* components/ChallengeModal/ChallengeApplyModal.js */
`;

// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengePayCompleteModal.js,
// components/ChallengeModal/ChallengePayModal.js, components/ChallengeModal/ChallengeResultModal.js
export const ModalBody2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
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
  background: #fff;
  border: 1px solid #cec6ff;
  margin: 0px auto;
  margin-top: 30px;
  padding: 30px;
  text-align: left;
  color: #a0a0a0;
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
  type: "text",
})`
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #2e2e2e;
  border: 1px solid #9787ff;
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
  background: #fcfcfc;
  border: 1px solid #9787ff;
  text-align: center;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
    background: #f2f0ff;
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
  background: #8578d8;
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
  background: #fcfcfc;
  border: 1px solid #9787ff;
  text-align: center;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background: #f2f0ff;
  }
`;

// components/ChallengeModal/ChallengeAuthModal.js, components/ChallengeModal/ChallengeApplyModal.js,
// components/ChallengeModal/ChallengePayCompleteModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
`;

// components/ChallengeModal/ChallengePayModal.js
export const PayButton = styled.div`
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #fcfcfc;
  border: 1px solid #9787ff;
  text-align: center;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background: #f2f0ff;
  }
`;

// components/ChallengeModal/ChallengeResultModal.js
export const TotalAmount = styled.div`
  width: 100%;
  height: 120px;
  background: #8578d8;
  color: #fcfcfc;
  padding: 10px 50px;
  font-size: 28px;
`;

// components/ChallengeModal/ChallengeResultModal.js
export const ResultDetail = styled.div`
  width: 100%;
  height: 200px;
  background: #cec6ff;
  border: #9787ff;
  display: flex;
  font-size: 18px;
  padding: 25px 63px;
`;



// components/MyPageComponents/UserInfoContent.js
export const WrapperForm = styled(ContentsWrapperForm)`
  gap: 20px;
  padding: 30px 40px;
  ${responsivePadding}
`;

// components/Group/ChallengeTab.js
export const ChallengeLists = styled(ContentsWrapper)`
  padding-bottom: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
  background-color: white;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
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
export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// components/Group/TodoContent.js
export const TodoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

// components/Group/TodoContent.js
export const TodoButton = styled.button`
  background-color: #ffffff;
  color: #000;
  border: 1px solid #9787ff;
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
  background-color: white;
  border-radius: 8px;
  width: 100%;
  flex-direction: row;
  hr, hr:first-of-type {
    display : none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    hr {
      display: inline-block
    }
  }
`;

// components/Group/TodoContent.js
export const Column = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;



// components/Group/TodoContent.js
export const TodoItem = styled.div`
  background-color: white;
  border: 1px solid var(--violet500);
  border-radius: 5px;
  font-size: 15px;

  display: flex;
  flex-direction: row;
  min-height: 35px;

  width: 100%;
  padding: 10px;
  gap: 10px;

  text-wrap: wrap;
  word-break: break-all;
  white-space: pre-wrap;

    overflow: auto; /* 넘치는 부분 숨김 */
    text-overflow: ellipsis; /* 생략 기호(...) 사용 */
    line-height: 1.2; /* 줄 높이 설정 */
`;

// components/Group/TodoContent.js
export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// components/Group/TodoContent.js
export const Modaldescription = styled.h4`
  font-size: 13px;
  color: var(--black300);
  margin-bottom: 20px;
  text-wrap: wrap;
`;


export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  color: var(--black700);
  width: 100%;
  align-items: start;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: end;
  justify-content: start;
`;

export const ChangeColumn480px = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: start;
  justify-content: start;

  @media (max-width: 768px) {

  }

  @media (max-width: 480px) {
      flex-direction: column;
  }
`;

export const ChangeColumn768px = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: end;
  justify-content: center;

  @media (max-width: 768px) {
      flex-direction: column;
  }

  @media (max-width: 480px) {

  }
`;

export const Label = styled.label`
    width: 100%;
    min-width: auto;
    justify-content: start;
    font-size: 16px;
    text-wrap: nowrap;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: var(--black600);
`;

// components/Group/TodoContent.js
export const ModalInput = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  border: 1px solid #9787ff;
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
  border: 1px solid #9787ff;
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
  color: #9787ff;
  cursor: pointer;
  text-align: center;
`;

// components/Group/TodoContent.js
export const ModalTaskInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #9787ff;
  border-radius: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


// components/Group/TodoContent.js
export const LinkInputForm = styled.form`
  display: flex;
  align-items: start;
  font-size: 14px;
  gap: 10px;
`;


// components/Group/TodoContent.js
export const LinkInputDiv = styled.div`
  display: flex;
  align-items: start;
  font-size: 14px;
  gap: 10px;
`;

// components/Group/TodoContent.js
export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-right: 10px;
`;

// components/Group/TodoContent.js
export const TaskStatus = styled.div`
    background-color: var(--violet500);
    color: white;
    border-radius: 7px;
    text-align: center;
    font-size: 17px;
    width: 100%;
    text-wrap: nowrap;
    height: 50px;
    line-height: 50px;
  `;

// components/Group/TodoContent.js
export const CalendarIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/3a/Calendar_icon.svg");
  background-size: cover;
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
  background-color: var(--violet500);
  min-height: 100px;
  width: 1000;
  padding: 15px;
  line-height: 2;
  border-radius: 5px;
  color: white;
`;


// compoents/MyPageComponents/UserInfoContent.js
export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: var(--violet600);
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
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
  background-color: ${(props) => (props.active ? "#6c63ff" : "#ccc")};
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #574dff;
  }
`;

// components/Group/Question/CommentSection.jsx
export const CommentBody = styled.div`
  margin-top: 10px;
`;

// components/Group/Question/CommentSection.jsx, components/Group/Question/QuestionForm.jsx
export const ButtonRow = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  gap: 10px;
  text-overflow: ellipsis;
  flex-direction: row;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: end;
  }
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

  label {
    cursor: pointer;
    color: var(--black500);
    font-size: 14px;
  }
`;

export const Hr = styled.hr`
  border-bottom: 1px solid var(--black300);
  width: 100%;
`;

// components/Group/Question/QuestionItem.jsx
export const QuestionRow = styled.div`
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// components/Group/Question/QuestionItem.jsx
export const ItemRow = styled.div`
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// components/Group/Question/QuestionItem.jsx
export const ItemCol = styled.div`
  font-weight: bold;
  color: #333;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
  align-items: start;

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
  z-index: 10000; /* 모달이 다른 요소 위에 나타나도록 */
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
    left: 53px;
  }

  @media (max-width: 480px) {
    left: 34px;
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
`;

// components/MyPageComponents/NotificationContent.js
export const EventContent = styled.div`
  border: 1px solid var(--violet400);
  border-radius: 7px;
  background-color: white;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    button {
      width: 100%;
    }
  }

  .title {
    display: flex;
    gap: 10px;
    align-items: end;
    margin-bottom: 10px;
    justify-content: start;
    text-wrap: nowrap;
    flex-direction: row;

    @media (max-width: 270px) {
      flex-direction: column;
      align-items: start;
    }
  }
  .date {
    font-size: 14px;
    color: var(--black500);
  }
  strong {
    font-size: 16px;
    color: var(--black800);
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  p {
    font-size: 16px;
    color: var(--black800);
    margin: 5px 0;

    @media (max-width: 480px) {
      font-size: 15px;
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
export const ToggleBox = styled.select`
  background-color: var(--violet000);
  border: 1px solid var(--violet400);
  border-radius: 15px;
  width: auto;
  font-size: 16px;
  text-align: center;
  color: var(--black800);
  option {
    font-size: 16px;
    color: var(--black500);
  }

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
  margin-right: 5px;
  gap: 5px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: end;
`;

// components/SignInContent/FirstProcessContent.jsx
export const RadioButtonLabel = styled.label`
  font-size: 14px;
  color: var(--black800);

  @media (max-width: 768px) {
    font-size: 13px;
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


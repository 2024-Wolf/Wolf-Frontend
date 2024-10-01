import styled from "styled-components";

// components/TabContentsWrapper.jsx
export const ContentsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--violet000);
    border: 1px solid var(--violet300);
`;

// pages/CreateGroupPage.js, pages/Main.js
export const MainContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1340px; /* 최대 너비를 1300px로 설정 (변경 가능성 O)*/
    gap: 50px;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
        gap: 30px;
        /*margin: 50px auto;*/ /* pages/Main.js */
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        gap: 20px;
        /* margin: 30px auto;*/ /* pages/Main.js */
    }
`;

// pages/CreateGroupPage.js, pages/FAQ.js, pages/MyPage.js
export const Title = styled.h1`
    text-align: left;
    font-weight: bold;
    font-size: 2.5rem;
    color: var(--black800);
    margin: 30px 0;
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


// pages/CreateGroupPage.js
export const GroupInfoContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--violet000);
    border-radius: 10px;
    border: 1px solid var(--violet400);
    padding: 30px 50px;
`;

// pages/FAQ.js
export const FAQContainer = styled.div`
  max-width: 1440px;
  margin: 80px auto;
  padding: 0 50px;
`;

// pages/FAQ.js
export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ccc;
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

// pages/FAQ.js
export const FAQList = styled.div`
  margin-top: 0;
  padding: 0;
`;

// pages/FAQ.js
export const FAQItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
`;

// pages/FAQ.js
export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  padding: 15px 0;
  line-height: 1.5;
  min-height: 30px;
  background-color: ${(props) => (props.active ? '#F2F0FF' : 'none')};
`;

// pages/FAQ.js
export const FAQAnswer = styled.div`
  margin-top: 10px;
  padding-left: 20px;
  color: #666;
  line-height: 1.6;
`;

// pages/FAQ.js
export const Arrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: ${(props) => (props.isOpen ? 'none' : '6px solid #333')};
  border-bottom: ${(props) => (props.isOpen ? '6px solid #333' : 'none')};
`;

// pages/Main.js
export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

// pages/MyPage.js
export const MyPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1340px; /* 최대 너비를 1340px  설정 (변경 가능성 O)*/
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
        margin: 50px auto;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        margin: 30px auto;
    }
`;

// pages/StudyPage.js
export const Container = styled.div`
  flex-direction: column;
  display: flex;

  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  margin: 80px auto;
  max-width: 1340px; /* 최대 너비를 1340px  설정 (변경 가능성 O)*/

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

// pages/StudyPage.js
export const StudyInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// pages/StudyPage.js
export const CategoryButton = styled.div`
  background-color: #9787ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  font-size: 12px;
  width: 140px;
  position: relative;
`;

// pages/StudyPage.js
export const StudyTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
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

// pages/StudyPage.js
export const StudyDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;



// pages/StudyPage.js
export const LeaderInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000000;
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

// pages/Tabs.js
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

// components/Header.js, components/MemberEvaluation.js, pages/StudyPage.js
export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  /* margin: auto 30px; */ /* components/MemberEvaluation.js */
  /* margin-right: 10px; */ /* pages/StudyPage.js */
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
  cursor: pointer;
  font-size: 12px;
  /* margin-right: 10px; */ /* components/MemberEvaluation.js */

  &:hover {
    background-color: #8578D8;
    color: white;
  }
`;

// components/Footer.js
export const FooterContainer = styled.footer`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 30px 35px;
  background: var(--violet100);
`;

// components/Footer.js
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 768px) {
    font-size: 10px;
    flex-direction: column;
  }
`;

// components/Footer.js
export const FooterText = styled.div`
  font-size: 14px;
  color: var(--black500);
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 130%;
  }
`;

// components/Footer.js
export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--black700);
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

// components/Footer.js
export const LogoS = styled.div`
  font-family: "Kavoon";
  font-size: 24px;
  color: var(--black700);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// components/Header.js
export const HeaderContainer = styled.header`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
  background: var(--black000);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
  max-width: 1500px;
  width: 100%;
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
export const MainLogo = styled.a`
  color: var(--black900);
  font: 32px Kavoon, sans-serif;
  text-decoration: none;
`;



// components/Header.js
export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 15px;
  gap: 10px;
  border-radius: 20px;
  width: 153.55px;
`;

// components/Header.js
export const StyledHeaderIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: var(--violet600);
  cursor: pointer;
`;

// components/Header.js
export const DropdownContainer = styled.div`
  position: relative;
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

// components/Header.js
export const LogginButton = styled(Button)`
  background: none;
  color: var(--black500);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
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

// components/Declaration.js
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

// components/AlramPreview.js
export const ModalContainer3 = styled.div`
  display: ${props => (props.isAlarmOpen ? 'fixed' : 'none')};
  position: absolute;
  min-width: 350px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0px;
  top: calc(100% + 10px);
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
`;

// components/Declaration.js
export const Description = styled.p`
  font-size: 10px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
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

// components/Declaration.js, components/MemberEvaluation.js
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; /* components/Declaration.js */

  /* gap: 0; */ /* components/MemberEvaluation.js */
  /* justify-content: center; */ /* components/Declaration.js */
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

// components/ChallengeModal/ChallengeApplyModal.js, components/ChallengeModal/ChallengeAuthModal.js, 
// components/ChallengeModal/ChallengePayCompleteModal.js, components/ChallengeModal/ChallengePayModal.js
// components/ChallengeModal/ChallengeResultModal.js
export const CancelButton2 = styled.div`
    cursor: pointer;
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

// components/AlramPreview.js
export const AlramTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 20px;
  text-align: left; 
`;

// components/AlramPreview.js
export const AlramHeader = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: left; 
`;

// components/AlramPreview.js
export const AlramItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  flex-direction: column; 
`;

// components/AlramPreview.js
export const AlramContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px; 
`;

// components/AlramPreview.js
export const AlramImg = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 5px; 
`;

// components/AlramPreview.js
export const AlramText = styled.div`
  font-size: 12px;
  margin-top: 5px; 
  margin-left: 25px;
`;

// components/AlramPreview.js
export const AlramDate = styled.div`
  font-size: 10px;
  color: #999;
`;

// components/AlramPreview.js
export const AlramFooter = styled.div`
  margin-top: 15px;
  text-align: right;
  font-size: 10px;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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

// components/Card/Card.jsx
export const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 240px;
    height: 250px;
    border: 0.5px solid var(--black300);
    border-radius: 30px;
    background-color: #ffffff;
    position: relative;
    transition: transform 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        max-width: 200px;
        height: 220px;
    }

    @media (max-width: 480px) {
        justify-items: center;
        max-width: 160px;
        height: 180px;
    }
`;

// components/Card/Card.jsx
export const CardBody = styled.div`
    width: 100%;
    padding: 10px;
`;

// components/Card/Card.jsx
export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
    color: #838586;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
        font-size: 10px;
    }

    @media (max-width: 480px) {
        font-size: 9px;
    }
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

// components/Card/Card.jsx
export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;
    padding-bottom: 8px;
    border-bottom: 1px solid #838586;

    @media (max-width: 768px) {
        gap: 3px;
    }

    @media (max-width: 480px) {
        gap: 2px;
    }
`;

// components/Card/Card.jsx
export const BottomInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    @media (max-width: 768px) {
        margin-top: 3px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;



// components/Card/Category.jsx
export const CategoryContainer = styled.div`
    width: 100%;
    height: 110px;
    position: relative;
    background-image: ${(props) =>
    props.category === "스터디"
      ? `url('/CardViewThumbnail/ProjectThumbnail.png')`
      : `url('/CardViewThumbnail/StudyThumbnail.png')`};
    background-size: cover;
    background-position: center;
    border-radius: 30px 30px 0 0;
    
    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        height: 90px; /* 태블릿 크기 이하일 때 높이 조정 */
    }

    @media (max-width: 480px) {
        height: 70px; /* 모바일 크기 이하일 때 높이 조정 */
    }
`;

// components/Card/Category.jsx
export const CategoryTag = styled.span`
    background-color: var(--violet500); /* color system 500 */
    color: white;
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 12px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 0.5;
`;

// components/Card/Profile.jsx
export const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: #333;
    margin-top: 8px;

    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        font-size: 12px; /* 태블릿에서 텍스트 크기 줄이기 */
    }

    @media (max-width: 480px) {
        font-size: 10px; /* 모바일에서 텍스트 크기 더 줄이기 */
    }
`;

// components/Card/Profile.jsx
export const ProfileImg = styled.img`
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;

// components/Card/Tag.jsx
export const TagContainer = styled.span`
    background-color: var(--violet100);
    color: var(--violet700);
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 12px;

    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        font-size: 11px; /* 태블릿에서 태그 크기 줄이기 */
        padding: 3px 7px;
    }

    @media (max-width: 480px) {
        font-size: 10px; /* 모바일에서 태그 크기 더 줄이기 */
        padding: 2px 6px;
    }
`;

// components/Category/Category.jsx
export const CategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
`;

// components/Category/Category.jsx
export const CategoryItem = styled.div`
    margin-right: 25px;
    font-size: 22px;
    font-weight: 700;
    color: ${({ $isActive }) => ($isActive ? 'var(--black700)' : 'var(--black400)')};
    cursor: pointer;
    transition: color 0.3s;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-right: 20px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-right: 15px;
    }
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

// components/Card/Card.jsx
export const Date2 = styled.div`
    font-size: 12px;

    @media (max-width: 768px) {
        font-size: 11px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
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






















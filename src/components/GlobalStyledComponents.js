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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  flex-direction: column;
  margin: 80px auto;
  max-width: 1340px; /* 최대 너비를 1340px  설정 (변경 가능성 O)*/
  padding: 0 20px;
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
  background-color: white;
  color: #8578D8;
  border: 1px solid #8578D8;
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #CEC6FF;
    color: white;
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
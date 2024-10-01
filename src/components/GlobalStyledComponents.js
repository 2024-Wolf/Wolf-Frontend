import styled from "styled-components";

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

// pages/StudyPage.js
export const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--violet500);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

// pages/StudyPage.js
export const StudyDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;

// pages/StudyPage.js
export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
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

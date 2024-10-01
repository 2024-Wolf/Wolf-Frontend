import styled, { css } from "styled-components";

// pages/FAQ.js
export const Arrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: ${(props) => (props.isOpen ? 'none' : '6px solid #333')};
  border-bottom: ${(props) => (props.isOpen ? '6px solid #333' : 'none')};
`;


// pages/StudyPage.js
export const LeaderText = styled.span`
  margin-left: 10px;
  color: #a0a0a0;
`;


// components/ActivityScore/ActivityScoreBar.jsx
export const BarLabel = styled.span`
    padding: 0 10px;
    font-size: 16px;
    color: var(--black800);
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


// components/Challenge/ChallengeDetail.js
export const PeriodText = styled.span`
    float: left;
    margin-left: 50px;
`;


// components/Group/TodoContent.js
export const CalendarIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/3/3a/Calendar_icon.svg');
  background-size: cover;
`;

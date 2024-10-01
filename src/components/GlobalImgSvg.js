import styled, { css } from "styled-components";


// components/Header.js, components/MemberEvaluation.js, pages/StudyPage.js, components/Group/Question/QuestionItem.jsx
export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  /* margin: auto 30px; */ /* components/MemberEvaluation.js */
  /* margin-right: 10px; */ /* pages/StudyPage.js */
`;


// components/Header.js
export const StyledHeaderIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: var(--violet600);
  cursor: pointer;
`;


// components/Card/Profile.jsx
export const ProfileImg = styled.img`
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;


// components/Icon/MiniIcon.jsx
export const IconContainer = styled.img`
    width: 16px;
    height: 16px;

    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        width: 14px;
        height: 14px; /* 태블릿에서 아이콘 크기 줄이기 */
    }

    @media (max-width: 480px) {
        width: 12px;
        height: 12px; /* 모바일에서 아이콘 크기 더 줄이기 */
    }
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


// components/MainPageComponents/Banner/BannerSlider.jsx
export const Slide = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 1300px) {
        object-fit: contain;
    }
`;
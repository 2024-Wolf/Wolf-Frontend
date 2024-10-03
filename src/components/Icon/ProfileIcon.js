import styled from "styled-components";

import React from 'react';

// components/Header.js, components/MemberEvaluation.js, pages/StudyPage.js, 
// components/Group/Question/QuestionItem.jsx
export const ProfileIconWrapper = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  /* margin: auto 30px; */ /* components/MemberEvaluation.js */
  /* margin-right: 10px; */ /* pages/StudyPage.js */
`;

const ProfileIcon = ({ src, alt }) => {
    return <ProfileIconWrapper src={src} alt={alt} />
};

export default ProfileIcon;



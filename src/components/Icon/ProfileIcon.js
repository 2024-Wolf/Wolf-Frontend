import styled from "styled-components";

import React from 'react';

const ProfileIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const ProfileIconImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.span`
  text-wrap: nowrap;
  font-size: 16px;
  color: var(--black500);
`;

const ProfileIcon = ({ src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  alt = "Profile",
  children
}) => {
  return (
    <ProfileIconWrapper>
      <ProfileIconImg
        src={src}
        alt={alt}
      />
      {{ children } && <UserName>{children}</UserName>}
    </ProfileIconWrapper>
  )
};

export default ProfileIcon;



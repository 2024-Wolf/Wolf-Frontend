import styled from 'styled-components';

import React from 'react';


// components/Card/Profile.jsx
export const ProfileContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    color: #333;
    margin-top: 10px;

    span {
        white-space: nowrap;
        text-overflow: ellipsis; 
    }
`;

// components/Card/Profile.jsx
export const ProfileImg = styled.img`
    width: 18px;
    height: 18px;
    border-radius: 50%;
`;

const Profile = ({ imgSrc, name }) => {
    return (
        <ProfileContainer>
            <ProfileImg src={imgSrc} alt="profile" />
            <span>{name}</span>
        </ProfileContainer>
    );
};

export default Profile;

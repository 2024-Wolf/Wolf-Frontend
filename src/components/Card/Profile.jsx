import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
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

const ProfileImg = styled.img`
    width: 15px;
    height: 15px;
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

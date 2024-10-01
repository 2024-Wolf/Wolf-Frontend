import styled from 'styled-components';
import { ProfileContainer, ProfileImg } from "../GlobalStyledComponents";

import React from 'react';

const Profile = ({ imgSrc, name }) => {
    return (
        <ProfileContainer>
            <ProfileImg src={imgSrc} alt="profile" />
            <span>{name}</span>
        </ProfileContainer>
    );
};

export default Profile;

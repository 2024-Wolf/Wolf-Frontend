// components/ProfileDropdown.js
import React from 'react';
import { ProfileIcon, DropdownContainer, StyledHeaderIcon, DropdownContent, DropdownItem, DisplayNoneDropdownItem, UserWrapper } from '../GlobalStyledComponents';

import DropdownIcon from '../Icon/DropdownIcon';

const ProfileDropdown = ({ handleProfileClick, isDropdownOpen, toggleDropdown, handleItemClick, offLogin }) => {
    return (
        <UserWrapper>
            <ProfileIcon
                dataAction="profile"
                onClick={handleProfileClick}
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="Profile"
            />
            <DropdownContainer>
                <DropdownIcon onClick={toggleDropdown} />
                <DropdownContent isDropdownOpen={isDropdownOpen}>
                    <DropdownItem onClick={() => handleItemClick('/mypage')}>내 정보</DropdownItem>
                    {/*<DropdownItem onClick={() => handleItemClick('/study')}>챌린지 보기</DropdownItem>*/}
                    <DisplayNoneDropdownItem onClick={() => handleItemClick('/write')}>팀원 모집하기</DisplayNoneDropdownItem>
                    <DisplayNoneDropdownItem onClick={() => handleItemClick('/faq')}>FAQ</DisplayNoneDropdownItem>
                    <DropdownItem onClick={offLogin}>로그아웃</DropdownItem>
                </DropdownContent>
            </DropdownContainer>
        </UserWrapper>
    );
};

export default ProfileDropdown;

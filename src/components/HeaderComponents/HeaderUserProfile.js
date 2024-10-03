import React from 'react';
import HeaderUserProfile from './HeaderUserProfile';
import NotificationBell from './NotificationBell';
import ProfileDropdown from './ProfileDropdown';

const HeaderUserProfile = ({ isLoggedIn, notifications, hasNotifications, openModal, offLogin, setHasNotifications }) => {
    const [isAlarmOpen, setIsAlarmOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const toggleAlarm = () => {
        setIsAlarmOpen(prev => !prev);
        setIsDropdownOpen(false);
        if (hasNotifications) setHasNotifications(false);
    };

    const handleProfileClick = () => {
        navigate('/user');
    };

    const toggleDropdown = () => {
        setIsAlarmOpen(false);
        setIsDropdownOpen(prev => !prev);
    };

    const handleItemClick = (item) => {
        navigate(item);
        setIsDropdownOpen(false);
    };

    return (
        <UserProfileContainer>
            <NotificationBell
                isAlarmOpen={isAlarmOpen}
                notifications={notifications}
                toggleAlarm={toggleAlarm}
            />
            <ProfileDropdown
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                handleProfileClick={handleProfileClick}
                handleItemClick={handleItemClick}
                offLogin={offLogin}
            />
        </UserProfileContainer>
    );
};

export default HeaderUserProfile;

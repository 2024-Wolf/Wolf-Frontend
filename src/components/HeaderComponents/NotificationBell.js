// components/NotificationBell.js
import React from 'react';
import BellIcon from '../Icon/BellIcon';
import AlramPreview from '../AlramPreview';
import { DropdownContainer } from '../GlobalStyledComponents';

const NotificationBell = ({ isAlarmOpen, notifications, toggleAlarm }) => {
    return (
        <DropdownContainer>
            <BellIcon onClick={toggleAlarm} />
            <AlramPreview isAlarmOpen={isAlarmOpen} notifications={notifications} userId={"늑대"} />
        </DropdownContainer>
    );
};

export default NotificationBell;

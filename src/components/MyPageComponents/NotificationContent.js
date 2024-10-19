import { NotificationContainer, Timeline, Line, NotificationEvent, EventMarker, EventContent, Button11, Violet500LineButton } from "../GlobalStyledComponents";

import PaginatedList from '../Pagination/PaginatedList'
import React, { useEffect, useState } from 'react';


const NotificationItem = ({ date, title, description, link }) => (
    <NotificationEvent>
        <EventMarker />
        <EventContent>
            <div style={{ width: '100%' }}>
                <div className="title">
                    <strong>[알림]</strong>
                    <div className="date">{date}</div>
                </div>
                <p>{description}</p>
            </div>
            <a href={link}>
                <Violet500LineButton type="button">
                    인증하기
                </Violet500LineButton>
            </a>
        </EventContent>
    </NotificationEvent>
);

//         <NotificationItem date="0000.00.00" title="[모임]" description="신규 목표 파일 프로젝트가 등록되었습니다." />

const renderItems = (items) => (
    <>
        <Line />
        <Timeline>
            {items?.map((item, index) => (
                <>
                    <NotificationItem key={index} date={item.alertTime} description={item.alertContent} link={item.alertLink} />
                </>
            ))}
        </Timeline>
    </>
);

const NotificationContent = ({ alarmData }) => {
    const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호

    return (
        <NotificationContainer>
            <PaginatedList data={alarmData} renderItems={renderItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </NotificationContainer>
    )
};

export default NotificationContent;

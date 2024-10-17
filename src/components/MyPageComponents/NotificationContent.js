import { NotificationContainer, Timeline, Line, NotificationEvent, EventMarker, EventContent, Button11, Violet500LineButton } from "../GlobalStyledComponents";

import PaginatedList from '../Pagination/PaginatedList'
import React, { useEffect, useState } from 'react';

const dummyData = [
    { alertTime: '0000.00.00', alertLink: '[모임]', alertContent: '신규 목표 파일 프로젝트가 등록되었습니다.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[유저]', alertContent: '공지사항을 확인해보세요.' },
    { alertTime: '0000.00.00', alertLink: '[신고]', alertContent: '신고가 접수되어 경고 처리되었습니다.' },
]

const NotificationItem = ({ date, title, description }) => (
    <NotificationEvent>
        <EventMarker />
        <EventContent>
            <div style={{ width: '100%' }}>
                <div className="title">
                    <strong>{title}</strong>
                    <div className="date">{date}</div>
                </div>
                <p>{description}</p>
            </div>
            <Violet500LineButton type="button">
                인증하기
            </Violet500LineButton>

        </EventContent>
    </NotificationEvent>
);

//         <NotificationItem date="0000.00.00" title="[모임]" description="신규 목표 파일 프로젝트가 등록되었습니다." />

const renderItems = (items) => (
    <>
        <Line />
        <Timeline>
            {items?.map((item, index) => (
                <NotificationItem key={index} date={item.alertTime} title={item.alertLink} description={item.alertContent} />
            ))}
        </Timeline>
    </>
);

const NotificationContent = ({ alarmData }) => {
    const [readData, setReadData] = useState(alarmData || {
        alertContent: "",
        alertLink: "",
        alertTime: ""
    });
    const [currentPage, setCurrentPage] = useState(1); // 최근 페이지 번호

    return (
        <NotificationContainer>
            <PaginatedList data={alarmData} renderItems={renderItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </NotificationContainer>
    )
};

export default NotificationContent;

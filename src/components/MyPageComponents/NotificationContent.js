import styled from 'styled-components';
import { NotificationContainer, Timeline, Line, NotificationEvent, EventMarker, EventContent, Button11 } from "../GlobalStyledComponents";

const NotificationItem = ({ date, title, description }) => (
    <NotificationEvent>
        <EventMarker />
        <EventContent>
            <div>
                <div className="title">
                    <strong>{title}</strong>
                    <div className="date">{date}</div>
                </div>
                <p>{description}</p>
            </div>
            <Button11>인증하기</Button11>
        </EventContent>
    </NotificationEvent>
);

const NotificationContent = () => (
    <NotificationContainer>
        <Line />
        <Timeline>
            <NotificationItem date="00.00.00" title="[모임]" description="신규 목표 파일 프로젝트가 등록되었습니다." />
            <NotificationItem date="00.00.00" title="[모임]" description="신규 목표 파일 프로젝트가 등록되었습니다." />
            <NotificationItem date="00.00.00" title="[모임]" description="신규 목표 파일 프로젝트가 등록되었습니다." />
        </Timeline>
    </NotificationContainer>
);

export default NotificationContent;

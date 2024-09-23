import styled from 'styled-components';

const NotificationContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-color: var(--violet000);
    border: 1px solid var(--violet400);
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const Timeline = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left: 25px;

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        margin-left: 15px;
        gap: 20px;
    }
`;

const Line = styled.div`
    position: absolute;
    left: 58px;
    top: 0;
    bottom: 0;
    width: 2px;
    border-left: 1px dotted var(--black500);

    @media (max-width: 768px) {
        left: 45px;
    }

    @media (max-width: 480px) {
        left: 35px;
    }
`;

const NotificationEvent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;

    @media (max-width: 768px) {
        gap: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column; 
        align-items: flex-start;
        padding: 5px;
    }
`;

const EventMarker = styled.div`
    width: 8px;
    height: 8px;
    background-color: var(--black800);
    border-radius: 50%;

    @media (max-width: 480px) {
        width: 6px;
        height: 6px;
    }
`;

const EventContent = styled.div`
    border: 1px solid var(--violet400);
    border-radius: 5px;
    background-color: white;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column; /* 작은 화면에서 내용과 버튼이 수직으로 배치 */
        align-items: flex-start;
        padding: 10px;
    }

    .title {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 10px;

        @media (max-width: 480px) {
            margin-bottom: 5px;
        }
    }
    .date {
        font-size: 12px;
        color: var(--black500);
    }
    strong {
        font-size: 16px;
        color: var(--black800);
        font-weight: 600;

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }
    p {
        font-size: 14px;
        color: var(--black800);
        margin: 5px 0;

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 5px;
    padding: 10px 15px;
    border: 1px solid var(--violet400);
    background-color: transparent;
    color: var(--black700);

    cursor: pointer;
    font-size: 12px;
    font-weight: 500;

    &:hover {
        background-color: var(--violet400);
        color: white;
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 11px;
    }

    @media (max-width: 480px) {
        width: 100%; /* 작은 화면에서는 버튼이 가득 차도록 */
        font-size: 10px;
    }
`;

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
            <Button>인증하기</Button>
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

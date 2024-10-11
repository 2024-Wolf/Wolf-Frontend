import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from './Icon/ArrowLeftIcon';
import ArrowRightIcon from './Icon/ArrowRightIcon';

const CalendarContainer = styled.div`
    width: 100%;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    background-color: white;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
    
    @media (max-width: 480px) {
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

const DaysOfWeek = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 10px 10px 0 10px;
`;

const DayOfWeek = styled.div`
    text-align: center;
    font-weight: bold;
    color: #333;
`;

const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 10px;
`;

const Day = styled.div`
    padding: 13px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    margin: 2px;
    width:42px;
    background-color: ${({ isSelected, isToday }) => (isSelected ? 'var(--violet300)' : isToday ? 'var(--violet200)' : 'transparent')};
    color: ${({ isSelected }) => (isSelected ? 'var(--violet700)' : '#000')};
    font-weight: ${({ isSelected }) => (isSelected ? 'bold' : '')};

    &:hover {
        background-color: ${({ isSelected }) => (isSelected ? 'var(--violet400)' : 'var(--violet200)')};
    }
`;
const DayWrapper = styled.div`
    position: relative;
    widthL 100%;
    display: flex;
    justify-content: center;
`;


const Empty = styled.div`
    padding: 15px;
`;

const ScheduleIndicator = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--violet700);
    position: absolute;
    top: 8px;
    right: 8px;
`;

const Schedule = styled.div`
    width: 100%;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderDate = styled.h2`
    width: 90px;
`;

const TodayButton = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--violet600);
    color: white;
    font-size: 15px;
    &:hover {
        background-color: var(--violet700);
    }
`;

const Calendar = (data) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [schedules, setSchedules] = useState([
        { date: null, startDate: new Date('2024-10-15'), endDate: new Date('2024-10-16'), task: "회의" },
        { date: null, startDate: new Date('2024-10-15'), endDate: new Date('2024-10-15'), task: "프로젝트 마감" },
        { date: null, startDate: new Date('2024-10-20'), endDate: new Date('2024-10-20'), task: "출장" },
    ]);
    // const [schedules, setSchedules] = useState(data || [{}]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const handleToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`);
    };

    const isToday = (dateKey) => {
        const today = new Date();
        return dateKey === `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const days = [];

        for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
            days.push(<Empty key={`prev-${i}`} />);
        }

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

            const hasSchedule = schedules.some(schedule => {
                const startDate = new Date(schedule.startDate);
                const endDate = new Date(schedule.endDate);

                // dateKey가 startDate와 endDate 사이에 있는지 확인
                return startDate <= new Date(dateKey) && new Date(dateKey) <= endDate;
            });

            days.push(
                <DayWrapper key={i}>
                    {hasSchedule && <ScheduleIndicator />}
                    <Day
                        onClick={() => setSelectedDate(dateKey)}
                        isSelected={selectedDate === dateKey}
                        isToday={isToday(dateKey)}
                    >
                        {i}
                    </Day>
                </DayWrapper>
            );
        }
        return days;
    };
    const getSchedule = () => {
        if (selectedDate) {
            const eventList = schedules.filter(schedule => {
                const scheduleStartDate = schedule.startDate.toISOString().split('T')[0];
                const scheduleEndDate = schedule.endDate.toISOString().split('T')[0];
                return selectedDate >= scheduleStartDate && selectedDate <= scheduleEndDate;
            });

            if (eventList.length > 0) {
                return eventList.map((event, index) => (
                    <li style={{ marginBottom: '5px' }} key={index}>{event.task}</li>
                ));
            }
            return <p>일정이 없습니다.</p>;
        }
        return <p>날짜를 선택해주세요</p>;
    };


    return (
        <CalendarContainer>
            <Schedule>
                <h3 style={{ fontSize: '', color: 'var(--black400)' }}>{selectedDate || ''} 일정</h3>
                <div>
                    {getSchedule()}
                </div>
            </Schedule>
            <div>
                <Header>
                    <IconContainer>
                        <HeaderDate>{`${currentDate.getFullYear()}년 ${String(currentDate.getMonth() + 1).padStart(2, '0')}월`}</HeaderDate>
                        <IconContainer>
                            <ArrowLeftIcon onClick={handlePrevMonth} aria-label="이전 달로 이동" />
                            <ArrowRightIcon onClick={handleNextMonth} aria-label="다음 달로 이동" />
                        </IconContainer>
                    </IconContainer>
                    <TodayButton onClick={handleToday} aria-label="오늘 날짜로 돌아가기">오늘</TodayButton>
                </Header>
                <DaysOfWeek>
                    <DayOfWeek>일</DayOfWeek>
                    <DayOfWeek>월</DayOfWeek>
                    <DayOfWeek>화</DayOfWeek>
                    <DayOfWeek>수</DayOfWeek>
                    <DayOfWeek>목</DayOfWeek>
                    <DayOfWeek>금</DayOfWeek>
                    <DayOfWeek>토</DayOfWeek>
                </DaysOfWeek>
                <Days>
                    {generateCalendar()}
                </Days>
            </div>
        </CalendarContainer>
    );
};

export default Calendar;

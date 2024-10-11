import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from './Icon/ArrowLeftIcon';
import ArrowRightIcon from './Icon/ArrowRightIcon';
import CaretRightIcon from './Icon/CaretRightIcon';
import CaretDownIcon from './Icon/CaretDownIcon';
import { NoBackground } from './GlobalStyledComponents';

const CalendarContainer = styled.div`
    width: 100%;
    height: 364.58px;
    margin: 20px auto;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    background-color: white;
    padding:20px;
    gap:10px;

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

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
    height: 100%;
    padding: 10px;
    background-color: var(--black100);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: scroll;
`;

const ScheduleContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
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

const ShowList = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    color: var(--black300);
    cursor: pointer;

    &:hover {
      color: var(--black600);
    }

    &:active {
      color: var(--black600);
    }

  ${({ isActive }) => isActive && `
    &:hover {
      color: var(--black300);
    }

    &:active {
      color: var(--black300);
    }
    cursor: auto;
  `}


`;



const Calendar = (data) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isShowSchedule, setIsShowSchedule] = useState(false);
    const [isShowAllSchedule, setIsShowAllSchedule] = useState(true);

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
        setIsShowSchedule(true); setIsShowAllSchedule(false);
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
                        onClick={() => { setSelectedDate(dateKey); setIsShowSchedule(true); setIsShowAllSchedule(false); }}
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
                    <li style={{ marginBottom: '5px' }} key={index}>
                        {console.log()}
                        {event.task}
                        {(event.startDate.toISOString().split('T')[0]) == (event.endDate.toISOString().split('T')[0]) ?
                            <></> :
                            <span style={{ fontSize: '12px', color: 'var(--black300)' }}>
                                &nbsp;
                                ({event.startDate.toISOString().split('T')[0]} ~ {event.endDate.toISOString().split('T')[0]})
                            </span>
                        }
                    </li>
                ));
            }
            return <p>일정이 없습니다.</p>;
        }
        return <p>날짜를 선택해주세요</p>;
    };

    const getAllSchedule = () => {
        if (schedules.length > 0) {
            return schedules.map((schedule, index) => (
                <li style={{ marginBottom: '5px' }} key={index}>
                    {schedule.task}
                    {(schedule.startDate.toISOString().split('T')[0]) == (schedule.endDate.toISOString().split('T')[0]) ?
                        <span style={{ fontSize: '12px', color: 'var(--black300)' }}>
                            &nbsp; ({schedule.startDate.toISOString().split('T')[0]})
                        </span> :
                        <span style={{ fontSize: '12px', color: 'var(--black300)' }}>
                            &nbsp; ({schedule.startDate.toISOString().split('T')[0]} ~ {schedule.endDate.toISOString().split('T')[0]})
                        </span>
                    }
                </li>
            ));
        }
        return <p>일정이 없습니다.</p>;
    };


    return (
        <CalendarContainer>
            <ScheduleContainer>
                {/* 전체 일정 리스트 */}
                {isShowAllSchedule ? (
                    <ShowList isActive={isShowAllSchedule}>
                        <CaretDownIcon style={{ backgroundColor: 'transpose' }} />
                        <h3 style={{ fontWeight: '700', cursor: 'default' }}>
                            전체 일정
                        </h3>
                    </ShowList>
                ) : (
                    <ShowList isActive={isShowAllSchedule}
                        onClick={() => { setIsShowAllSchedule(true); setIsShowSchedule(false); }}>
                        <CaretRightIcon />
                        <h3>
                            전체 일정
                        </h3>
                    </ShowList>
                )}


                {isShowAllSchedule &&
                    <Schedule>
                        {getAllSchedule()}
                    </Schedule>
                }

                {/* 특정 날짜 일정 */}
                {isShowSchedule ? (
                    <ShowList isActive={isShowSchedule}>
                        <CaretDownIcon style={{ cursor: 'auto', backgroundColor: 'transpose' }} />
                        <h3 style={{ fontWeight: '700', cursor: 'default' }}>
                            {selectedDate || ''} 일정
                        </h3>
                    </ShowList>
                ) : (
                    <ShowList isActive={isShowSchedule} onClick={() => { setIsShowSchedule(true); setIsShowAllSchedule(false); }}>
                        <CaretRightIcon />
                        <h3>
                            {selectedDate || ''} 일정
                        </h3>
                    </ShowList>
                )}
                {isShowSchedule &&
                    <Schedule>
                        {getSchedule()}
                    </Schedule>
                }
            </ScheduleContainer>
            <div>
                <Header>
                    <HeaderContainer>
                        <HeaderDate>{`${currentDate.getFullYear()}년 ${String(currentDate.getMonth() + 1).padStart(2, '0')}월`}</HeaderDate>
                        <IconContainer>
                            <ArrowLeftIcon onClick={handlePrevMonth} aria-label="이전 달로 이동" />
                            <ArrowRightIcon onClick={handleNextMonth} aria-label="다음 달로 이동" />
                        </IconContainer>
                    </HeaderContainer>
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

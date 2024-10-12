import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import ArrowLeftIcon from './Icon/ArrowLeftIcon';
import ArrowRightIcon from './Icon/ArrowRightIcon';
import CaretRightIcon from './Icon/CaretRightIcon';
import CaretDownIcon from './Icon/CaretDownIcon';
import DeleteIcon from './Icon/DeleteIcon';
import { Hr } from './GlobalStyledComponents';

const CalendarContainer = styled.div`
    width: 100%;
    height: 364.58px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    background-color: white;
    padding:20px;
    gap:10px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        height: 684px;
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

const CalendarViewer = styled.div`
    @media (max-width: 480px) {
        min-width: 160.67px;
        min-height: 321.25px;
        overflow-x: auto;
    }
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

      @media (max-width: 768px) {
  }

  @media (max-width: 300px) {
    min-width: 228px;
  }
`;

const DayOfWeek = styled.div`
    text-align: center;
    font-weight: bold;
    color: #333;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 15px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 10px;
    font-size: 16px;
    min-height: 250px;

    @media (max-width: 768px) {
        font-size: 15px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const Day = styled.div`
    padding: 0px;
    cursor: pointer;
    border-radius: 50%;
    margin: 2px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        min-width: 30px;
        max-width: 42px
    }

    @media (max-width: 580px) {
        width: 32px;
        max-height: 32px
    }

    @media (max-width: 480px) {
        height: 25px;
        min-width: 25px;
        max-width: 25px
    }


    background-color: ${({ isSelected, istoday }) => (isSelected ? 'var(--violet300)' : istoday ? 'var(--violet200)' : 'transparent')};
    color: ${({ isSelected }) => (isSelected ? 'var(--violet700)' : '#000')};
    font-weight: ${({ isSelected }) => (isSelected ? 'bold' : '')};

    &:hover {
        background-color: ${({ isSelected }) => (isSelected ? 'var(--violet400)' : 'var(--violet200)')};
    }

`;
const DayWrapper = styled.div`
    position: relative;
    width: 100%;
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
    right: 7px;

    @media (max-width: 768px) {
        top: 19%;
        right: 30%;
    }

    @media (max-width: 600px) {
    top: 10%;
    right: 25%;
    }

    @media (max-width: 480px) {
    top: 5%;
    right: 16%;
    }

    @media (max-width: 340px) {
    top: 4%;
    right: 3%;
    }
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

    @media (max-width: 768px) {
        max-height: 250px;
    }

`;

const ScheduleContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    hr {
        display: none;
    }

    @media (max-width: 768px) {
        hr {
            display: inline-block;
        }
    }

`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderDate = styled.h2`
    width: 90px;
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 15px;
        width: 85px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        width: 80px;
    }
`;

const TodayButton = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--violet600);
    color: white;
    font-size: 15px;
    white-space: nowrap;
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
      color: var(--violet500);
    }

    &:active {
      color: var(--violet500);
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

const ListGroup = styled.li`
    &::marker {
        content: '✔';
        color: var(--blueViolet800);
    }
    line-height: 1.3;

    button {
        display:none;
    }
    
    &:hover button {
        display: inline; /* 호버 시 버튼 표시 */
    }

    @media (max-width: 768px) {
         button {
        display:inline;
    }
    }
}
`;



const Calendar = ({ data, handleEditSchedule, handleDeleteSchedule, ...props }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isShowSchedule, setIsShowSchedule] = useState(false);
    const [isShowAllSchedule, setIsShowAllSchedule] = useState(true);
    const [schedules, setSchedules] = useState([]);



    const formatDateInKoreanTime = (date) => {
        // 한글 시간 데이터 포멧을 YYYY-MM-DD 형식으로 변환하고 시간&분은 무시함, 사용하기 편리한 UTC(협정 세계시) 형식을 사용함
        if (!date) return ''; // date가 undefined일 경우 빈 문자열 반환

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`; // YYYY-MM-DD 형식으로 포맷팅
    };

    useEffect(() => {
        if (Array.isArray(data)) {
            const formattedSchedules = data.map(data => ({
                ...data,
                startDate: new Date(formatDateInKoreanTime(new Date(data.startDate))),
                endDate: new Date(formatDateInKoreanTime(new Date(data.endDate))),
            }));

            setSchedules(formattedSchedules);
        } else {
            setSchedules([]);
        }
    }, [data]); // 처음 마운팅 될 때만 실행



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
                        istoday={isToday(dateKey)}
                    >
                        {hasSchedule && <ScheduleIndicator />}
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
                const scheduleStartDate = new Date(schedule.startDate).toISOString().split('T')[0];
                const scheduleEndDate = new Date(schedule.endDate).toISOString().split('T')[0];
                return selectedDate >= scheduleStartDate && selectedDate <= scheduleEndDate;
            });


            if (eventList.length > 0) {
                return eventList.map((event, index) => (
                    <ListGroup style={{ margin: '2px' }} key={index}>
                        &nbsp;
                        {event.task}
                        {(event.startDate.toISOString().split('T')[0]) === (event.endDate.toISOString().split('T')[0]) ?
                            <></> :
                            <span style={{ fontSize: '12px', color: 'var(--black300)' }}>
                                &nbsp;
                                ({event.startDate.toISOString().split('T')[0]} ~ {event.endDate.toISOString().split('T')[0]})
                            </span>
                        }
                        &nbsp;
                        <button onClick={() => handleEditSchedule(index)}
                            style={{
                                fontSize: '15px'
                            }}>✒️</button>
                        <DeleteIcon
                            onClick={() => {
                                if (window.confirm("일정을 삭제하시겠습니까?")) {
                                    handleDeleteSchedule(index);
                                }
                            }}
                            size={13}
                            style={{
                                width: '13px', height: '13px'
                            }}
                        />
                    </ListGroup>
                ));
            }
            return <p style={{ margin: '2px' }}>일정이 없습니다.</p>;
        }
        return <p style={{ margin: '2px' }}>날짜를 선택해주세요</p>;
    };

    const getAllSchedule = () => {
        if (schedules.length > 0) {
            return schedules.map((schedule, index) => (
                <ListGroup style={{
                    margin: '2px',
                }} key={index}>
                    &nbsp;
                    {schedule.task}
                    {(schedule.startDate.toISOString().split('T')[0]) === (schedule.endDate.toISOString().split('T')[0]) ?
                        <span style={{ fontSize: '12px', color: 'var(--black300)' }}>
                            &nbsp; ({schedule.startDate.toISOString().split('T')[0]})
                        </span> :
                        <span style={{ fontSize: '12px', color: 'var(--black300)' }}>
                            &nbsp; ({schedule.startDate.toISOString().split('T')[0]} ~ {schedule.endDate.toISOString().split('T')[0]})
                        </span>
                    }
                    &nbsp;
                    <button onClick={() => handleEditSchedule(index)}
                        style={{
                            fontSize: '15px'
                        }}>✒️</button>
                    <DeleteIcon
                        onClick={() => {
                            if (window.confirm("일정을 삭제하시겠습니까?")) {
                                handleDeleteSchedule(index);
                            }
                        }}
                        size={13}
                        style={{
                            width: '13px', height: '13px'
                        }}
                    />
                </ListGroup>
            ));
        }
        return <p>일정이 없습니다.</p>;
    };


    return (
        <CalendarContainer>
            <ScheduleContainer>
                <Hr />
                {/* 전체 일정 리스트 */}
                {isShowAllSchedule ? (
                    <ShowList isActive={isShowAllSchedule}>
                        <CaretDownIcon style={{ backgroundColor: 'transparent' }} />
                        <h3 style={{ fontWeight: '700', color: 'var(--violet500)', cursor: 'default' }}>
                            전체 일정 ({schedules.length || '0'})
                        </h3>
                    </ShowList>
                ) : (
                    <ShowList isActive={isShowAllSchedule}
                        onClick={() => { setIsShowAllSchedule(true); setIsShowSchedule(false); }}>
                        <CaretRightIcon />
                        <h3>
                            전체 일정 ({schedules.length || '0'})
                        </h3>
                    </ShowList>
                )}


                {isShowAllSchedule &&
                    <Schedule>
                        {getAllSchedule()}
                    </Schedule>
                }

                {/* 특정 날짜 일정 리스트 */}
                {isShowSchedule ? (
                    <ShowList isActive={isShowSchedule}>
                        <CaretDownIcon style={{ backgroundColor: 'transparent' }} />
                        <h3 style={{ fontWeight: '700', color: 'var(--violet500)', cursor: 'default' }}>
                            {selectedDate || ''} 일정 (
                            {
                                (() => {
                                    // selectedDate가 유효한지 확인
                                    if (!selectedDate) return '0';

                                    const targetDate = new Date(selectedDate);
                                    return schedules.filter(schedule =>
                                        new Date(schedule.startDate) <= targetDate &&
                                        targetDate <= new Date(schedule.endDate)
                                    ).length || '0';
                                })()
                            }
                            )
                        </h3>
                    </ShowList>
                ) : (
                    <ShowList isActive={isShowSchedule} onClick={() => { setIsShowSchedule(true); setIsShowAllSchedule(false); }}>
                        <CaretRightIcon />
                        <h3>
                            {selectedDate || ''} 일정 (
                            {
                                (() => {
                                    // selectedDate가 유효한지 확인
                                    if (!selectedDate) return '0';

                                    const targetDate = new Date(selectedDate);
                                    return schedules.filter(schedule =>
                                        new Date(schedule.startDate) <= targetDate &&
                                        targetDate <= new Date(schedule.endDate)
                                    ).length || '0';
                                })()
                            }
                            )
                        </h3>
                    </ShowList>
                )}
                {isShowSchedule &&
                    <Schedule>
                        {getSchedule()}
                    </Schedule>
                }
            </ScheduleContainer>
            <CalendarViewer>
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
            </CalendarViewer>
        </CalendarContainer>
    );
};

export default Calendar;

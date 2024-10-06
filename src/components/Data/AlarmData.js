const AlarmData = [
    {
        alert_id: 1,
        user_id: 1,
        nickname: '늑대',
        group_post_id: null, // 회원 관련 알림
        alert_content: '{nickname} 님, 만나서 반가워요 👋🏻 <br />' +
            '여러 명이 {nickname}님에 대해 알고 싶어 하네요! <br />' +
            '지금 프로필을 작성하고 팀 매칭률을 높여볼까요?',
        alert_date: '2024-09-25T12:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 2,
        user_id: 2,
        nickname: '사슴',
        group_post_id: null, // 회원 관련 알림
        alert_content: '{nickname} 님에게 새로운 메시지가 도착했습니다!',
        alert_date: '2024-09-26T08:30:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 3,
        user_id: 3,
        nickname: '여우',
        group_post_id: null, // 회원 관련 알림
        alert_content: '{nickname} 님, 친구 요청이 도착했습니다! <br />' +
            '친구 요청을 수락하시겠어요?',
        alert_date: '2024-09-26T09:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 4,
        user_id: 4,
        nickname: '토끼',
        group_post_id: 1, // 그룹 관련 알림
        alert_content: '팀 매칭이 성공적으로 완료되었습니다!',
        alert_date: '2024-09-18T12:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 5,
        user_id: 5,
        nickname: '곰',
        group_post_id: 1, // 그룹 관련 알림
        alert_content: '새로운 스터디 요청이 도착했습니다!',
        alert_date: '2024-09-15T15:00:00Z',
        is_read: '0',
        alert_link: null
    },
    {
        alert_id: 6,
        user_id: 6,
        nickname: '올빼미',
        group_post_id: 1, // 그룹 관련 알림
        alert_content: '자격증 챌린지가 개최되었습니다! <br />' +
            '이벤트에 참여해 보세요!',
        alert_date: '2024-09-10T10:00:00Z',
        is_read: '0',
        alert_link: null
    }
];

export default AlarmData;

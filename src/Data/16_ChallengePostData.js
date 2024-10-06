const ChallengePostData = [
  {
    challenge_post_id: 1,
    challenge_img: 'image1.jpg',
    challenge_title: '코딩 챌린지',
    challenge_date: new Date('2024-09-01'),
    challenge_deadline: new Date('2024-09-30'),
    challenge_content: '코딩 과제 제출',
    challenge_manner: '제출 전 반드시 테스트를 통과해야 합니다.',
    challenge_award_content: '참가비는 없습니다.',
    user_id: 1
  },
  {
    challenge_post_id: 2,
    challenge_img: 'image2.jpg',
    challenge_title: '프레젠테이션 챌린지',
    challenge_date: new Date('2024-09-05'),
    challenge_deadline: new Date('2024-10-15'),
    challenge_content: '발표 자료 준비',
    challenge_manner: '발표 시간은 10분을 넘기면 안 됩니다.',
    challenge_award_content: '참가비는 없습니다.',
    user_id: 2
  },
  {
    challenge_post_id: 3,
    challenge_img: 'image3.jpg',
    challenge_title: '디자인 챌린지',
    challenge_date: new Date('2024-09-10'),
    challenge_deadline: new Date('2024-10-20'),
    challenge_content: '디자인 샘플 제출',
    challenge_manner: '최소 3개의 디자인 샘플이 필요합니다.',
    challenge_award_content: '참가비는 10000원입니다.',
    user_id: 3
  },
  {
    challenge_post_id: 4,
    challenge_img: 'image4.jpg',
    challenge_title: '문서화 챌린지',
    challenge_date: new Date('2024-09-15'),
    challenge_deadline: new Date('2024-11-01'),
    challenge_content: '프로젝트 문서 작성',
    challenge_manner: '문서화 작업은 상세히 작성해야 합니다.',
    challenge_award_content: '참가비는 없습니다.',
    user_id: 4
  },
  {
    challenge_post_id: 5,
    challenge_img: 'image5.jpg',
    challenge_title: '프로그래밍 챌린지',
    challenge_date: new Date('2024-09-20'),
    challenge_deadline: new Date('2024-11-10'),
    challenge_content: '프로그래밍 문제 해결',
    challenge_manner: '문제 해결을 위한 코드 제출',
    challenge_award_content: '참가비는 15000원입니다.',
    user_id: 5
  }
];

export default ChallengePostData;

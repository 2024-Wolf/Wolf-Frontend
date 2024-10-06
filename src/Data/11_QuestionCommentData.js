const QuestionCommentData = [
  {
    comment_id: 1,
    question_id: 1,
    parent_comment_id: null,
    author_id: 2,
    comment_date: new Date('2024-09-02'),
    comment_details: '이 기능은 사용자가 입력한 데이터를 실시간으로 처리합니다.',
    comment_image_url: 'http://example.com/images/comment1.jpg'
  },
  {
    comment_id: 2,
    question_id: 1,
    parent_comment_id: 1,
    author_id: 3,
    comment_date: new Date('2024-09-03'),
    comment_details: '추가적인 설명이 필요합니다.',
    comment_image_url: 'http://example.com/images/comment2.jpg'
  },
  {
    comment_id: 3,
    question_id: 2,
    parent_comment_id: null,
    author_id: 4,
    comment_date: new Date('2024-09-03'),
    comment_details: '팀 미팅 시간 변경을 확인했습니다.',
    comment_image_url: 'http://example.com/images/comment3.jpg'
  },
  {
    comment_id: 4,
    question_id: 3,
    parent_comment_id: null,
    author_id: 5,
    comment_date: new Date('2024-09-04'),
    comment_details: '데이터베이스 디자인의 예제는 다음 링크에서 확인할 수 있습니다.',
    comment_image_url: 'http://example.com/images/comment4.jpg'
  },
  {
    comment_id: 5,
    question_id: 4,
    parent_comment_id: null,
    author_id: 1,
    comment_date: new Date('2024-09-05'),
    comment_details: '프로젝트 진행 상황을 보고하겠습니다.',
    comment_image_url: 'http://example.com/images/comment5.jpg'
  },
  {
    comment_id: 6,
    question_id: 6,
    parent_comment_id: null,
    author_id: 7,
    comment_date: new Date('2024-09-07'),
    comment_details: '협업 툴 사용법에 대한 간단한 설명서를 확인해 보세요.',
    comment_image_url: 'http://example.com/images/comment6.jpg'
  },
  {
    comment_id: 7,
    question_id: 7,
    parent_comment_id: null,
    author_id: 8,
    comment_date: new Date('2024-09-08'),
    comment_details: 'API 문서 업데이트는 매월 첫째 주에 진행됩니다.',
    comment_image_url: 'http://example.com/images/comment7.jpg'
  },
  {
    comment_id: 8,
    question_id: 8,
    parent_comment_id: 1,
    author_id: 9,
    comment_date: new Date('2024-09-09'),
    comment_details: '회의 시간 변경 요청은 관리자에게 직접 전달해 주세요.',
    comment_image_url: 'http://example.com/images/comment8.jpg'
  },
  {
    comment_id: 9,
    question_id: 9,
    parent_comment_id: null,
    author_id: 10,
    comment_date: new Date('2024-09-10'),
    comment_details: '서버 보안 강화는 주기적으로 이루어집니다.',
    comment_image_url: 'http://example.com/images/comment9.jpg'
  },
  {
    comment_id: 10,
    question_id: 10,
    parent_comment_id: null,
    author_id: 1,
    comment_date: new Date('2024-09-11'),
    comment_details: '소통 방법 개선 아이디어는 팀 회의에서 논의될 것입니다.',
    comment_image_url: 'http://example.com/images/comment10.jpg'
  }
];

export default QuestionCommentData;
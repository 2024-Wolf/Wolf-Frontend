import React, { useState } from 'react';

const dummyQuestions = [
    {
        id: 1,
        author: 'gahyun',
        text: '백엔드는 정말 어렵네요. 추가로 공부할만한 책이 있나요?',
        date: '2024.08.28',
        file: null,
        comments: [
            {
                author: 'user2',
                text: '맞아요, 백엔드가 어렵긴 하죠. 저는 "백엔드 개발자를 위한 가이드" 같은 책도 추천합니다. 실전에서 사용할 수 있는 사례가 많아서 도움이 될 거예요.',
                date: '2024.08.29',
                file: null,
            },
        ],
    },
    {
        id: 2,
        author: 'myeongju',
        text: '화면 구현이 빨리 끝나야할텐데... 언제까지 가능하신지 댓글로 남겨주세요.',
        date: '2024.09.20',
        file: null,
        comments: [
            {
                author: 'user5',
                text: '화면 구현은 주어진 기한 내에 맞춰야 하니, 계획적으로 진행하는 게 중요해요. 저는 보통 일주일 정도의 여유를 두고 작업을 진행합니다.',
                date: '2024.09.21',
                file: null,
            },
            {
                author: 'user1',
                text: '저도 그렇게 해요. 의존성 배열을 잘 활용하면 상태 변화에 따라 필요한 업데이트를 쉽게 관리할 수 있으니, 이를 잘 활용하면 시간을 단축할 수 있을 거예요.',
                date: '2024.09.21',
                file: null,
            },
        ],
    },
];

const QnA = () => {
    const [questions, setQuestions] = useState(dummyQuestions);
    const [newQuestion, setNewQuestion] = useState('');
    const [userComments, setUserComments] = useState({});
    const [showComments, setShowComments] = useState({});
    const [editQuestionId, setEditQuestionId] = useState(null);
    const [editCommentIds, setEditCommentIds] = useState({});

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        if (!newQuestion) return;

        const question = {
            id: questions.length + 1,
            author: 'currentUser',
            text: newQuestion,
            date: new Date().toLocaleDateString(),
            file: null,
            comments: [],
        };

        setQuestions((prev) => [...prev, question]);
        setNewQuestion('');
    };

    const handleCommentSubmit = (e, questionId) => {
        e.preventDefault();
        const commentText = e.target.elements.comment.value;
        if (!commentText) return;

        const newComment = {
            author: 'currentUser',
            text: commentText,
            date: new Date().toLocaleDateString(),
        };

        setUserComments((prev) => ({
            ...prev,
            [questionId]: [...(prev[questionId] || []), newComment],
        }));

        e.target.reset();
    };

    const handleEditQuestion = (id) => {
        const questionToEdit = questions.find(q => q.id === id);
        setNewQuestion(questionToEdit.text);
        setEditQuestionId(id);
    };

    const handleUpdateQuestion = (e) => {
        e.preventDefault();
        setQuestions(prev =>
            prev.map(q => (q.id === editQuestionId ? { ...q, text: newQuestion } : q))
        );
        setNewQuestion('');
        setEditQuestionId(null);
    };

    const handleDeleteQuestion = (id) => {
        setQuestions(prev => prev.filter(q => q.id !== id));
    };

    const handleDeleteComment = (questionId, commentIndex) => {
        setUserComments(prev => ({
            ...prev,
            [questionId]: prev[questionId].filter((_, index) => index !== commentIndex),
        }));
    };

    const toggleComments = (questionId) => {
        setShowComments((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    const handleEditComment = (questionId, commentIndex) => {
        const commentToEdit = userComments[questionId][commentIndex];
        setEditCommentIds((prev) => ({
            ...prev,
            [questionId]: commentIndex,
        }));
    };

    const handleUpdateComment = (e, questionId, commentIndex) => {
        e.preventDefault();
        const updatedText = e.target.elements.comment.value;
        setUserComments(prev => ({
            ...prev,
            [questionId]: prev[questionId].map((comment, index) =>
                index === commentIndex ? { ...comment, text: updatedText } : comment
            ),
        }));
        setEditCommentIds((prev) => ({
            ...prev,
            [questionId]: null,
        }));
    };

    return (
        <div>
            <h1>질문과 댓글</h1>

            {/* 질문 등록 폼 */}
            <form onSubmit={editQuestionId ? handleUpdateQuestion : handleQuestionSubmit}>
                <input
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="새 질문을 입력하세요"
                />
                <button type="submit">{editQuestionId ? '질문 수정' : '질문 등록'}</button>
            </form>

            {/* 질문 목록 */}
            {questions.map((question) => (
                <div key={question.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h2>{question.author}의 질문:</h2>
                    {editQuestionId === question.id ? (
                        <form onSubmit={handleUpdateQuestion}>
                            <input
                                type="text"
                                value={newQuestion}
                                onChange={(e) => setNewQuestion(e.target.value)}
                                placeholder="질문을 수정하세요"
                            />
                            <button type="submit">수정 완료</button>
                        </form>
                    ) : (
                        <>
                            <p>{question.text}</p>
                            <p>날짜: {question.date}</p>
                            <button onClick={() => handleEditQuestion(question.id)}>수정</button>
                            <button onClick={() => handleDeleteQuestion(question.id)}>삭제</button>
                        </>
                    )}

                    <button onClick={() => toggleComments(question.id)}>
                        {showComments[question.id] ? '댓글 숨기기' : '댓글 보기'}
                    </button>

                    {showComments[question.id] && (
                        <div>
                            <h3>댓글:</h3>
                            {userComments[question.id] && userComments[question.id].map((comment, index) => (
                                <div key={index}>
                                    <strong>{comment.author}:</strong>
                                    {editCommentIds[question.id] === index ? (
                                        <form onSubmit={(e) => handleUpdateComment(e, question.id, index)}>
                                            <input
                                                type="text"
                                                defaultValue={comment.text}
                                                name="comment"
                                                placeholder="댓글을 수정하세요"
                                            />
                                            <button type="submit">수정 완료</button>
                                        </form>
                                    ) : (
                                        <span>{comment.text} <em>({comment.date})</em></span>
                                    )}
                                    <button onClick={() => handleEditComment(question.id, index)}>수정</button>
                                    <button onClick={() => handleDeleteComment(question.id, index)}>삭제</button>
                                </div>
                            ))}

                            {/* 댓글 입력 폼 */}
                            <form onSubmit={(e) => handleCommentSubmit(e, question.id)}>
                                <input
                                    type="text"
                                    name="comment"
                                    placeholder="댓글을 입력하세요"
                                />
                                <button type="submit">댓글 달기</button>
                            </form>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QnA;

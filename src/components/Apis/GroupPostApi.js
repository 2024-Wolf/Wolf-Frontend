import axios from "axios";
import { BASE_URL, Token } from "./Common";

// 그룹 생성
export async function registerGroupPost(groupPost) {

    return await axios.post(`${BASE_URL}/post`, {
        name: groupPost.name,
        type: groupPost.type,
        startDate: groupPost.startDate,
        endDate: groupPost.endDate,
        recruitStartDate: new Date(),
        recruitDeadlineDate: groupPost.deadLineDate,
        shortIntro: "한 줄 소개",
        tag: groupPost.techStack,
        optionalRequirements: groupPost.optionalRequirements,
        recruitments: groupPost.recruitments,
        targetMembers: groupPost.targetMembers,
        thumbnail: groupPost.thumbnail,
        topic: groupPost.topic,
        description: groupPost.description,
        warning: groupPost.warning,
        challengeStatus: 'N'
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            // 받은 데이터로 수행할 작업
            return response;
        })
        .catch(function (error) {
            return error;
        });
}

// 그룹 수정
export function updateGroupPost(groupPost, postId) {
    axios.put(`${BASE_URL}/post/{postId}`, {
        name: groupPost.name,
        leaderUser: groupPost.leader_user,
        type: groupPost.type,
        startDate: groupPost.start_date,
        endDate: groupPost.end_date,
        recruitStartDate: groupPost.recruit_start_date,
        recruitDeadlineDate: groupPost.recruit_deadline_date,
        shortIntro: groupPost.short_intro,
        tag: groupPost.tag,
        optionalRequirements: groupPost.optional_requirements,
        targetMembers: groupPost.target_members,
        thumbnail: groupPost.thumbnail,
        topic: groupPost.topic,
        description: groupPost.description,
        warning: groupPost.warning,
        challengeStatus: groupPost.challenge_status
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            // 받은 데이터로 수행할 작업
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 그룹 목록 조회 / 모집글 Type별 View
// option = ("all", "study", "project")
// pageable = { page: 0, size: 1, sort: ["string"] }
export async function getGroupPosts(type, page = 0, size = 10, sort = "desc") {
    try {
        const response = await axios.get(`${BASE_URL}/post/view/${type}`, {
            headers: {
                Authorization: Token.getAccessToken()
            },
            params: {
                page,
                size,
                sort,
            }
        });
        // 받은 데이터로 수행할 작업
        return response.data;
    } catch (error) {
        // 에러 처리
        console.error('Error fetching group posts:', error);
        return error;
    }
}



// 그룹 단일 조회
export async function getGroupPost(postId) {
    try {
        const response = await axios.get(`${BASE_URL}/post/${postId}`, {
            headers: {
                Authorization: Token.getAccessToken(),
            },
        });
        // 응답 데이터 반환
        return response.data;
    } catch (error) {
        console.error('API 호출 실패:', error);
        throw error; // 에러를 다시 던져 호출한 곳에서 처리할 수 있게 함
    }
}

// 그룹원 조회
export function getGroupMember(groupId) {
    axios.get(`${BASE_URL}/post/${groupId}/members`, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 그룹 지원
export function applyGroup(groupId, applyment) {
    axios.post(`${BASE_URL}/post/${groupId}/apply`, {
        position: applyment.position,
        email: applyment.email,
        applicationReason: applyment.application_reason,
        introduction: applyment.introduction,
        techStack: applyment.tech_stack,
        portfolioLink: applyment.portfolio_link,
        availableDays: applyment.available_days,
        additionalNotes: applyment.additional_notes
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 할 일 조회
export async function getTasks(groupId) {
    return await axios.get(`${BASE_URL}/post/${groupId}/task`, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 할 일 등록
// status = ("not_started", "in_progress", "completed")
export async function registerTask(groupId, content) {
    return await axios.post(`${BASE_URL}/post/${groupId}/task`, {
        details: content,
        status: "not_started"
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}
// 할 일 수정
export async function updateTask(task) {
    let status;
    switch (task.status) {
        case "기획 중":
            status = "NOT_STARTED";
            break;
        case "진행 중":
            status = "IN_PROGRESS";
            break;
        default:
            status = "COMPLETED";
            break;
    }

    return await axios.put(`${BASE_URL}/post/task/${task.id}`, {
        details: task.details,
        status
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 할 일 삭제
export async function deleteTask(id) {
    return await axios.delete(`${BASE_URL}/post/task/${id}`, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 질문 목록 조회
// option = ('QUESTION', 'COMMUNICATION')
export async function getQuestionsWithComments(groupId, option, page = 0, size = 10, sort = "asc") {
    const params = {
        page,
        size,
        sort
    };
    try {
        const response = await axios.get(`${BASE_URL}/post/${groupId}/question/${option}`,
            {
                params: params, // params를 설정 객체의 일부로 포함
                headers: {
                    Authorization: Token.getAccessToken()
                },
            });

        return response.data; // 필요한 경우 데이터를 반환
    } catch (error) {
        console.error('질문 목록 조회 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}


// 질문 등록
// option = ('QUESTION', 'COMMUNICATION')
export async function registerQuestion(groupId, option, question) {
    const data = {
        questionDetails: question.questionDetails,
        questionImageUrl: question.questionImageUrl,
        questionTime: question.questionTime,
    };

    try {
        const response = await axios.post(
            `${BASE_URL}/post/${groupId}/question/${option}`,
            data, // 본문 데이터
            {
                headers: {
                    Authorization: Token.getAccessToken()
                },
            }
        );
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('질문 등록 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 질문 수정
// option = ('QUESTION', 'COMMUNICATION')
export async function updateQuestion(groupId, questionId, question) {
    const data = {
        questionDetails: question.questionDetails,
        questionImageUrl: question.questionImageUrl,
        questionTime: question.questionTime,
    };

    try {
        const response = await axios.put(`${BASE_URL}/post/${groupId}/question/${questionId}`,
            data,
            {
                headers: {
                    Authorization: Token.getAccessToken()
                }
            });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('질문 수정 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 질문 삭제
// option = ("question", "communication")
export async function deleteQuestion(groupId, questionId) {
    try {
        const response = await axios.delete(`${BASE_URL}/post/${groupId}/question/${questionId}`, {
            headers: {
                Authorization: Token.getAccessToken()
            }
        });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('질문 삭제 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 댓글 작성
export async function registerComment(groupId, questionId, comment) {
    const data = {
        commentDetails: comment.commentDetails,
        commentImageUrl: comment.commentImageUrl,
        commentTime: comment.commentTime,
    };

    try {
        const response = await axios.post(`${BASE_URL}/post/${groupId}/question/${questionId}/comment`,
            data,
            {
                headers: {
                    Authorization: Token.getAccessToken()
                }
            });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('댓글 작성 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 댓글 수정
export async function updateComment(groupId, questionId, commentId, comment) {
    const data = {
        commentDetails: comment.commentDetails,
        commentImageUrl: comment.commentImageUrl,
        commentTime: comment.commentTime,
    };

    try {
        const response = await axios.put(`${BASE_URL}/post/${groupId}/question/${questionId}/comment/${commentId}`,
            data,
            {
                headers: {
                    Authorization: Token.getAccessToken()
                }
            });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('댓글 수정 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 댓글 삭제
export async function deleteComment(groupId, questionId, commentId) {
    try {
        const response = await axios.delete(`${BASE_URL}/post/${groupId}/question/${questionId}/comment/${commentId}`, {
            headers: {
                Authorization: Token.getAccessToken()
            }
        });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('댓글 삭제 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 대댓글 작성
export async function registerReply(groupId, questionId, parentCommentId, reply) {
    const data = {
        commentDetails: reply.commentDetails,
        commentImageUrl: reply.commentImageUrl,
        commentTime: reply.commentTime,
    };

    try {
        const response = await axios.post(`${BASE_URL}/post/${groupId}/question/${questionId}/comment/${parentCommentId}`,
            data,
            {
                headers: {
                    Authorization: Token.getAccessToken()
                }
            });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('대댓글 작성 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

import { BASE_URL, Token } from "./Common";
import axiosInstance from "./axiosConfig";
import axios from "axios";

// 그룹 생성
export async function registerGroupPost(groupPost) {

    return await axiosInstance.post(`${BASE_URL}/post`, {
        name: groupPost.name,
        type: groupPost.type,
        startDate: groupPost.startDate,
        endDate: groupPost.endDate,
        recruitStartDate: groupPost.beginDate,
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
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

// 그룹 수정
export async function updateGroupPost(groupPost, postId) {
    return await axiosInstance.put(`${BASE_URL}/post/${postId}`, {
        name: groupPost.name,
        type: groupPost.type,
        startDate: groupPost.startDate,
        endDate: groupPost.endDate,
        recruitStartDate: groupPost.beginDate,
        recruitDeadlineDate: groupPost.deadLineDate,
        shortIntro: groupPost.shortIntro,
        tag: groupPost.techStack,
        optionalRequirements: groupPost.optionalRequirements,
        recruitments: groupPost.recruitments,
        targetMembers: groupPost.targetMembers,
        thumbnail: groupPost.thumbnail,
        topic: groupPost.topic,
        description: groupPost.description,
        warning: groupPost.warning,
        challengeStatus: groupPost.challengeStatus
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            // 받은 데이터로 수행할 작업
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

// 그룹 목록 조회 / 모집글 Type별 View
// option = ("all", "study", "project")
// pageable = { page: 0, size: 1, sort: ["string"] }
export async function getGroupPosts(type, page = 0, size = 20, sort = "desc") {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/post/view/${type}`, {
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
        const response = await axiosInstance.get(`${BASE_URL}/post/${postId}`, {
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

// 그룹 삭제
export async function deleteGroupPost(groupPostId) {
    try {
        const response = await axios.delete(`${BASE_URL}/post/${groupPostId}`, {
            headers: {
                Authorization: Token.getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        // 에러 처리
        console.error('Error fetching group posts:', error);
        return error;
    }
}

// 그룹원 조회
export async function getGroupMember(groupId) {
    return await axiosInstance.get(`${BASE_URL}/post/${groupId}/members`, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

// 그룹 지원
export async function applyGroup(groupId, applyment) {
    return await axiosInstance.post(`${BASE_URL}/post/apply/${groupId}`, {
        position: applyment.position,
        email: applyment.email,
        applicationReason: applyment.reason,
        introduction: applyment.introduce,
        techStack: applyment.techStack,
        portfolioLink: applyment.portfolioLink,
        availableDays: applyment.day.toString(),
        additionalNotes: applyment.freeEntry
    }, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

// 그룹 지원자 조회
export async function getApplicants(groupId){
    try {
        const response = await axiosInstance.get(`${BASE_URL}/post/apply/${groupId}`,
            {
                headers: {
                    Authorization: Token.getAccessToken() // 토큰을 헤더에 추가
                }
            });
        return response.data; 
    } catch (error) {
        console.error('그룹 지원자 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 지원자 정보 조회
export async function getApplicantDetail(recruitApplyId){
    try {
        const response = await axiosInstance.get(`${BASE_URL}/post/apply/detail/${recruitApplyId}`,
            {
                headers: {
                    Authorization: Token.getAccessToken() // 토큰을 헤더에 추가
                }
            });
        return response.data; 
    } catch (error) {
        console.error('그룹 지원자 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 지원 상태 변경
// status = (PENDING, ACCEPTED, REJECTED)
export async function changeApplyStatus(recruitApplyId, status){
    try {
        const response = await axiosInstance.get(`${BASE_URL}/post/apply/${recruitApplyId}/${status}`,
            {
                headers: {
                    Authorization: Token.getAccessToken() // 토큰을 헤더에 추가
                }
            });
        return response.data; 
    } catch (error) {
        console.error('그룹 지원 상태 변경 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 일정 조회
export async function getSchedule(groupId) {
    return await axiosInstance.get(`${BASE_URL}/post/${groupId}/schedule`, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}
//일정 등록
export async function registerSchedule(groupId, content) {
    return await axiosInstance.post(`${BASE_URL}/post/${groupId}/schedule`, {
        details: content.details,
        startDate: content.startDate,
        endDate: content.endDate

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

//일정 수정
export async function updateSchedule(schedule) {
    return await axiosInstance.put(`${BASE_URL}/post/schedule/${schedule.id}`, {
        details: schedule.details,
        startDate: schedule.startDate,
        endDate: schedule.endDate
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

//일정 삭제
export async function deleteSchedule(id) {
    return await axiosInstance.delete(`${BASE_URL}/post/schedule/${id}`, {
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

// 할 일 조회
export async function getTasks(groupId) {
    return await axiosInstance.get(`${BASE_URL}/post/${groupId}/task`, {
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
    return await axiosInstance.post(`${BASE_URL}/post/${groupId}/task`, {
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

    return await axiosInstance.put(`${BASE_URL}/post/task/${task.id}`, {
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
    return await axiosInstance.delete(`${BASE_URL}/post/task/${id}`, {
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
        .then(function (response) {
            console.log(id)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 공유 링크 조회
export async function getLinks(groupId) {
    return await axiosInstance.get(`${BASE_URL}/post/${groupId}/links`, {
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

//공유 링크 등록
export async function registerLinks(groupId,type, link) {
    return await axiosInstance.post(`${BASE_URL}/post/${groupId}/links`, {
        linkType : type,
        linkUrl : link
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

//공유 링크 수정
export async function updateLinks(groupId, link) {
    return await axiosInstance.put(`${BASE_URL}/post/${groupId}/links/${link.linkId}`, {
        linkType : link.linkType,
        linkUrl : link.linkUrl
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

//공유 링크 삭제
export async function deleteLinks(groupId, id) {
    return await axiosInstance.delete(`${BASE_URL}/post/${groupId}/links/${id}`, {
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
        const response = await axiosInstance.get(`${BASE_URL}/post/${groupId}/question/${option}`,
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
        const response = await axiosInstance.post(
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
        const response = await axiosInstance.put(`${BASE_URL}/post/${groupId}/question/${questionId}`,
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
        const response = await axiosInstance.delete(`${BASE_URL}/post/${groupId}/question/${questionId}`, {
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
        const response = await axiosInstance.post(`${BASE_URL}/post/${groupId}/question/${questionId}/comment`,
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
        const response = await axiosInstance.put(`${BASE_URL}/post/${groupId}/question/${questionId}/comment/${commentId}`,
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
        const response = await axiosInstance.delete(`${BASE_URL}/post/${groupId}/question/${questionId}/comment/${commentId}`, {
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
        const response = await axiosInstance.post(`${BASE_URL}/post/${groupId}/question/${questionId}/comment/${parentCommentId}`,
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

async function getFAQByCategory(category, page = 0, size = 10, sort = "asc") {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/faqs/${category}`, {
            params: {
                page,
                size,
                sort,
            },
        });
        return response.data; // 데이터를 성공적으로 받아오면 반환
    } catch (error) {
        console.error("Error fetching FAQ data: ", error); // 오류 메시지 출력
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 유저별 그룹 검색
// type : STUDY, PROJECT
// status : APPLYING, ONGOING, COMPLETED
export const getUserGroupsByTypeAndStatus = async (type, status, page = 0, size = 10, sort = "asc") => {

    try {
        const response = await axiosInstance.get(`${BASE_URL}/post/${type}/${status}`,
            {
                headers: {
                    Authorization: Token.getAccessToken() // 토큰을 헤더에 추가
                },
                params: {
                    page,
                    size,
                    sort
                }
            });
        return response.data; // 검색된 그룹 데이터를 반환
    } catch (error) {
        console.error('유저별 그룹 검색 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}

// 최신 소식 조회
export const getGroupNews = async (groupId) => {
    try {
        const response = await axios.get(`${BASE_URL}/post/${groupId}/news`);
        return response.data;
    } catch (error) {
        console.error('최신 소식 조회 실패:', error);
        throw error;
    }
};


// 팀원 평가 작성
export const postEvaluate = async (groupId, evaluateData) => {
    try {
        const response = await axios.post(`${BASE_URL}/post/${groupId}/evaluate`,
            evaluateData,
            {
                headers: {
                    Authorization: Token.getAccessToken()
                }
            });
        return response.data; // 필요에 따라 데이터 반환
    } catch (error) {
        console.error('팀원 평가 제출 중 오류 발생:', error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있게 함
    }
}
import axios from "axios";
import { BASE_URL, accessToken } from "./Common";

// 그룹 생성
export function registerGroupPost(groupPost) {
    axios.post(`${BASE_URL}/post`, {
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
            Authorization: accessToken
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
            Authorization: accessToken
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

// 그룹 목록 조회
// option = ("all", "study", "project")
export async function getGroupPosts(type) {
    return await axios.get(`${BASE_URL}/post/view/${type}`, {
        headers: {
            Authorization: accessToken
        }
    })
        .then(function (response) {
            // 받은 데이터로 수행할 작업
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 그룹 단일 조회
export function getGroupPost(postId) {
    axios.get(`${BASE_URL}/post/${postId}`, {
        headers: {
            Authorization: accessToken
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

// 그룹원 조회
export function getGroupMember(groupId) {
    axios.get(`${BASE_URL}/post/${groupId}/members`, {
        headers: {
            Authorization: accessToken
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
            Authorization: accessToken
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 질문 목록 조회
// option = ("question", "communication")
export function getQuestions(groupId, option) {
    axios.get(`${BASE_URL}/post/${groupId}/question/${option}`, {
        headers: {
            Authorization: accessToken
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 질문 등록
// option = ("question", "communication")
export function registerQuestion(groupId, option, question) {
    axios.post(`${BASE_URL}/post/${groupId}/question/${option}`, {
        user: question.user_id,
        questionDetails: question.question_details,
        questionImageUrl: question.question_image_url,
        questionTime: question.question_date
    }, {
        headers: {
            Authorization: accessToken
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 질문 수정
// option = ("question", "communication")
export function updateQuestion(groupId, questionId, question) {
    axios.put(`${BASE_URL}/post/${groupId}/question/${questionId}`, {
        user: question.user_id,
        questionDetails: question.question_details,
        questionImageUrl: question.question_image_url,
        questionTime: question.question_date
    }, {
        headers: {
            Authorization: accessToken
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 질문 삭제
// option = ("question", "communication")
export function deleteQuestions(groupId, questionId) {
    axios.delete(`${BASE_URL}/post/${groupId}/question/${questionId}`, {
        headers: {
            Authorization: accessToken
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


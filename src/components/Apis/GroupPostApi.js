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

// 그룹 조회
// option = ("all", "study", "project")
export function getGroupPosts(option) {
    axios.get(`${BASE_URL}/post/${option}`, {
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
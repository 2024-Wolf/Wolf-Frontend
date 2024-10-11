import axios from "axios";
import { BASE_URL, accessToken } from "./Common";

// 그룹 생성
export function registerGroupPost(groupPost){
    axios.post(`${BASE_URL}/post`, {
        name: groupPost.name,
        leaderUser: groupPost.leaderUser,
        type: groupPost.type,
        startDate: groupPost.startDate,
        endDate: groupPost.endDate,
        recruitStartDate: groupPost.recruitStartDate,
        recruitDeadlineDate: groupPost.recruitDeadlineDate,
        shortIntro: groupPost.shortIntro,
        tag: groupPost.tag,
        optionalRequirements: groupPost.optionalRequirements,
        targetMembers: groupPost.targetMembers,
        thumbnail: groupPost.thumbnail,
        title: groupPost.title,
        description: groupPost.description,
        warning: groupPost.warning,
        challengeStatus: groupPost.challengeStatus
    },{
        headers: {
            Authorization: accessToken
        }
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}

// 그룹 조회
// option = ("all", "study", "project")
export function getGroupPosts(option){
    axios.get(`${BASE_URL}/post/${option}`,{
        headers:{
            Authorization: accessToken
        }
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}
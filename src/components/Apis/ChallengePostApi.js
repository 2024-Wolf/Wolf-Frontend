import { BASE_URL, Token } from "./Common";
import axiosInstance from "./axiosConfig";

// 챌린지 단일 조회
export async function getChallenge(challengePostId){
    return await axiosInstance.get(`${BASE_URL}/challenge/${challengePostId}`,{
        headers:{
            Authorization: Token.getAccessToken()
        }
    })
    .then(function(response){
        // 받은 데이터로 수행할 작업
        return response.data;
    })
    .catch(function(error){
        console.log(error);
    });
}

// 그룹내 챌린지 조회
export async function getChallenges(groupPostId, status, page = 0, size = 10, sort = "asc"){
    return await axiosInstance.get(`${BASE_URL}/challenges/${groupPostId}/${status}`,{
        headers:{
            Authorization: Token.getAccessToken()
        },
        params:{
            page,
            size,
            sort
        }
    })
    .then(function(response){
        // 받은 데이터로 수행할 작업
        return response.data;
    })
    .catch(function(error){
        console.log(error);
    });
}

// 챌린지 신청(그룹장)
export async function registerChallenge(challengePostId, groupPostId, challengeAmount){
    return await axiosInstance.post(`${BASE_URL}/registration`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        challengeAmount: challengeAmount
    },{
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
    .then(function(response){
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
}

// 챌린지 참여(그룹원)
export async function participateChallenge(challengePostId, groupPostId, challengeAmount){
    return await axiosInstance.post(`${BASE_URL}/registrations`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        challengeAmount: challengeAmount
    },{
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
    .then(function(response){
        // 받은 데이터로 수행할 작업
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
}

// 챌린지 결제
export async function payChallenge(challengePostId, groupPostId, amount, status){
    return await axiosInstance.post(`${BASE_URL}/payment`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        amount: amount,
        payStatus: status
    },{
        headers: {
            Authorization: Token.getAccessToken(),
            
        }
    })
    .then(function(response){
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
}

// 챌린지 인증
export async function verifyChallenge(challengePostId, groupPostId, name, status, certificatonNo, institutionCode, content){
    return await axiosInstance.post(`${BASE_URL}/challenge/verification`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        nickname: name,
        status: status,
        certificationNo: certificatonNo,
        institutionName: institutionCode,
        content : content
    },{
        headers: {
            Authorization: Token.getAccessToken()
        }
    })
    .then(function(response){
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
}

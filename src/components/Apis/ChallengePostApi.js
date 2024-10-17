import axios from "axios";
import { BASE_URL, accessToken } from "./Common";

// 챌린지 단일 조회
export async function getChallenge(challengePostId){
    return await axios.get(`${BASE_URL}/challenge/${challengePostId}`,{
        headers:{
            Authorization: accessToken
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
    return await axios.get(`${BASE_URL}/challenges/${groupPostId}/${status}`,{
        headers:{
            Authorization: accessToken
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
export function registerChallenge(challengePostId, groupPostId, challengeAmount){
    axios.post(`${BASE_URL}/registration`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        challengeAmount: challengeAmount
    },{
        headers: {
            Authorization: accessToken
        }
    })
    .then(function(response){
        return;
    })
    .catch(function(error){
        console.log(error);
    })
}

// 챌린지 참여(그룹원)
export function participateChallenge(challengePostId, groupPostId, challengeAmount){
    axios.post(`${BASE_URL}/registrations`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        challengeAmount: challengeAmount
    },{
        headers: {
            Authorization: accessToken
        }
    })
    .then(function(response){
        // 받은 데이터로 수행할 작업
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
}

// 챌린지 결제
export function payChallenge(challengePostId, groupPostId, amount, status){
    axios.post(`${BASE_URL}/payment`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        amount: amount,
        payStatus: status
    },{
        headers: {
            Authorization: accessToken
        }
    })
    .then(function(response){
        return;
    })
    .catch(function(error){
        console.log(error);
    })
}

// 챌린지 인증
export async function verifyChallenge(challengePostId, groupPostId, status, certificatonNo, institutionCode, content){
    return await axios.post(`${BASE_URL}/challenge/verification`,{
        challengePostId: challengePostId,
        groupPostId: groupPostId,
        status: status,
        certificationNo: certificatonNo,
        institutionName: institutionCode,
        verificationContent : content
    },{
        headers: {
            Authorization: accessToken
        }
    })
    .then(function(response){
        return;
    })
    .catch(function(error){
        console.log(error);
    })
}

// 정부24 자격증 진위확인 api(작업 중)
export async function certificatonCheck(inst, name, code){

    return await axios.post("https://www.gov.kr/mw/NisCertificateConfirmExecute.do", {
            reqtInstCode: inst,
            reqtUserName: name,
            ctftNo: code
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .then(function(response){
            console.log(response)
            return response;
        })
        .catch(function(error){
            console.log(error);
        })
}

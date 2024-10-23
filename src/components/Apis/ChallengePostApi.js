import axios from "axios";
import { BASE_URL, Token } from "./Common";

// 챌린지 단일 조회
export async function getChallenge(challengePostId){
    return await axios.get(`${BASE_URL}/challenge/${challengePostId}`,{
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
    return await axios.get(`${BASE_URL}/challenges/${groupPostId}/${status}`,{
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
    return await axios.post(`${BASE_URL}/registration`,{
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
    return await axios.post(`${BASE_URL}/registrations`,{
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
    return await axios.post(`${BASE_URL}/payment`,{
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
    return await axios.post(`${BASE_URL}/challenge/verification`,{
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

// 정부24 자격증 진위확인 api(작업 중)
export async function certificatonCheck(inst, name, code){

    const requestData = new URLSearchParams();
    requestData.append('reqtInstCode', inst);
    requestData.append('reqtUserName', name);
    requestData.append('ctftNo', code);

    return await axios.post("https://cors-anywhere.herokuapp.com/https://www.gov.kr/mw/NisCertificateConfirmExecute.do", requestData,{
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

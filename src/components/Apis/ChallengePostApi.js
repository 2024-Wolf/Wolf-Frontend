import axios from "axios";
import { BASE_URL, accessToken } from "./Common";

// 챌린지 단일 조회
export function getChallenge(challengePostId){
    axios.get(`${BASE_URL}/challenge/${challengePostId}`,{
        headers:{
            Authorization: accessToken
        }
    })
    .then(function(response){
        // 받은 데이터로 수행할 작업
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}

// 그룹내 챌린지 조회
export function getGroupChallenge(groupPostId){
    axios.get(`${BASE_URL}/challenge/${groupPostId}`,{
        headers:{
            Authorization: accessToken
        }
    })
    .then(function(response){
        // 받은 데이터로 수행할 작업
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}

// 챌린지 신청(그룹장)
export function registerChallenge(registration){
    axios.post(`${BASE_URL}/registration`,{
        challengePostId: registration.challenge_post_id,
        groupPostId: registration.group_post_id,
        challengeAmount: registration.challenge_amount
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

// 챌린지 참여(그룹원)
export function participateChallenge(participation){
    axios.post(`${BASE_URL}/registrations`,{
        challengePostId: participation.challenge_post_id,
        groupPostId: participation.group_post_id,
        challengeAmount: participation.challenge_amount
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
export function payChallenge(payment){
    axios.post(`${BASE_URL}/payment`,{
        challengePostId: payment.challenge_post_id,
        groupPostId: payment.group_post_id,
        amount: payment.amount,
        payStatus: payment.status
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

// 챌린지 인증
export function verifyChallenge(verification){
    axios.post(`${BASE_URL}/payment`,{
        challengePostId: verification.challenge_post_id,
        groupPostId: verification.group_post_id,
        status: verification.status,
        certificationNo: verification.certification_no,
        institutionName: verification.institution_code,
        verificationContent : verification.content
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

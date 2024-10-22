// api/UserApi.js
import axios from 'axios';
import { BASE_URL, getAccessToken, Token } from './Common';
import axiosInstance from "./axiosConfig"; // Common.js에서 BASE_URL과 accessToken 가져오기


// 신고하기
export const reportIssue = async (report) => {
    const params = {
        reportTopic: report.reportTopic, // 신고 주제 (GROUP, REPLY, QUESTION, USER)
        targetId: report.targetId,         // 신고할 대상 ID
        reportCategoryId: report.reportCategoryId, // 신고 카테고리 ID
        reportReason: report.reportReason,  // 신고 사유
    };

    try {
        const response = await axiosInstance.post(`${BASE_URL}/api/v1/reports`, params,
            {
                headers: {
                    Authorization: Token.getAccessToken() // 인증 헤더 추가
                }
            });
        return response.data; // 성공적으로 받은 데이터 반환
    } catch (error) {
        console.error('신고하기 실패:', error);
        throw error; // 에러 발생 시 throw
    }
};
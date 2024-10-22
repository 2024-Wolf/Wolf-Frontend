// api/UserApi.js
import axios from 'axios';
import { BASE_URL, getAccessToken, Token } from './Common';
import axiosInstance from "./axiosConfig"; // Common.js에서 BASE_URL과 accessToken 가져오기



// 신고하기
export const getUserProfile = async () => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/reports`, {
            headers: {
                Authorization: Token.getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        throw error;
    }
};

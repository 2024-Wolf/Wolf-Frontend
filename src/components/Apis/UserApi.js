// api/UserApi.js
import axios from 'axios';
import {BASE_URL, accessToken, getAccessToken} from './Common';
import axiosInstance from "./axiosConfig"; // Common.js에서 BASE_URL과 accessToken 가져오기



// 유저 프로필 조회
export const getUserProfile = async (userId) => {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/user/${userId}`, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        throw error;
    }
};


// 마이페이지 내 프로필 조회
export const getMyProfile = async () => {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/user/my`, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        throw error;
    }
};

// 마이페이지 내 프로필 수정
export const postMyProfile = async (data) => { // data 인자를 추가
    try {
        const response = await axiosInstance.post(`${BASE_URL}/user/my`, data, { // data를 요청 본문에 추가
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('내 프로필 수정 실패:', error);
        throw error;
    }
};

// 회원 정보 로그인
export const signUpUser = async (data) => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/user/sign-up`, data, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('회원 추가 정보 저장 실패:', error);
        throw error;
    }
};

// 알림 전체 조회
export const getAlarms = async () => {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/user/alarms`, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('알림 전체 조회 실패:', error);
        throw error;
    }
};

// 알림 미리보기 조회
export const getAlarmsPreview = async () => {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/user/alarms/preview`, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('알림 미리보기 조회 실패:', error);
        throw error;
    }
};

export const readAlarm = async (alertId) => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/user/alarms/${alertId}`, {}, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('알림 읽음 처리 실패:', error);
        throw error;
    }
}
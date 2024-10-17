// api/UserApi.js
import axios from 'axios';
import { BASE_URL, accessToken } from './Common'; // Common.js에서 BASE_URL과 accessToken 가져오기

// 회원 정보 로그인
export const signUpUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/sign-up`, data, {
            headers: {
                Authorization: accessToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('회원 추가 정보 저장 실패:', error);
        throw error;
    }
};

// 마이페이지 내 프로필 조회
export const getMyProfile = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user/my`, {
            headers: {
                Authorization: accessToken
            }
        });

        // 성공적으로 데이터를 받았을 때 처리
        return response.data;

    } catch (error) {
        // 에러 응답이 있는 경우
        if (error.response) {
            const { status, data } = error.response;

            // 401 Unauthorized 처리 (토큰 만료 등)
            if (status === 401) {
                console.error('인증 오류: 토큰이 유효하지 않거나 만료되었습니다.', data);
                // 필요 시, 재인증 로직을 추가할 수 있음
            }

            // 기타 상태 코드 처리
            console.error(`프로필 조회 실패 (상태 코드: ${status}):`, data.message || '알 수 없는 오류');
        } else {
            // 응답이 없는 경우 (네트워크 문제 등)
            console.error('네트워크 오류 또는 서버가 응답하지 않습니다:', error.message);
        }

        throw error; // 에러를 상위로 다시 던져 호출한 곳에서 처리하도록 할 수 있음
    }
};

// 마이페이지 내 프로필 수정
export const postMyProfile = async (data) => { // data 인자를 추가
    try {
        const response = await axios.post(`${BASE_URL}/user/my`, data, { // data를 요청 본문에 추가
            headers: {
                Authorization: accessToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('내 프로필 수정 실패:', error);
        throw error;
    }
};

// 유저 프로필 조회
export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/${userId}`, {
            headers: {
                Authorization: accessToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        throw error;
    }
};

// 프로필 사진 등록
export const uploadProfilePhoto = async (userId, photoData) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/${userId}/photo`, photoData, {
            headers: {
                Authorization: accessToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('프로필 사진 등록 실패:', error);
        throw error;
    }
};

// 프로필 정보 수정
export const updateUserProfile = async (userId, data) => {
    try {
        const response = await axios.patch(`${BASE_URL}/user/${userId}`, data, {
            headers: {
                Authorization: accessToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('프로필 정보 수정 실패:', error);
        throw error;
    }
};

// 알림 전체 조회
export const getAlarms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user/alarms`, {
            headers: {
                Authorization: accessToken
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
        const response = await axios.get(`${BASE_URL}/user/alarms/preview`, {
            headers: {
                Authorization: accessToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('알림 미리보기 조회 실패:', error);
        throw error;
    }
};

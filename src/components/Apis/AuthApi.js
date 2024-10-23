import { BASE_URL, getAccessToken, removeAccessToken, removeRefreshToken } from './Common';
import axiosInstance from "./axiosConfig"; // Common.js에서 BASE_URL과 accessToken 가져오기

// 로그인 함수
export const login = async (idToken, fcmToken) => {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/auth/login`,
            { idToken, fcmToken }, // 본문 데이터
            {
                headers: {
                    Authorization: getAccessToken()
                }
            }
        );
        return response.data; // 로그인 성공 시 데이터 반환
    } catch (error) {
        console.error('로그인 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

//fcmToken 저장 함수
export const saveFcmToken = async (fcmToken) => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/auth/fcm`,
            { fcmToken }, // 본문 데이터
            {
                headers: {
                    Authorization: getAccessToken()
                }
            }
        );
        return response.data; // fcmToken 저장 성공 시 데이터 반환
    } catch (error) {
        console.error('fcmToken 저장 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

// 구글 로그인 함수
export const googleLogin = async (idToken) => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/auth/google`,
            { idToken }
        );
        return response.data; // 로그인 성공 시 데이터 반환
    } catch (error) {
        console.error('구글 로그인 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

// test-login 함수
export const testLogin = async () => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/auth/test-login`,
            null,
            {
                headers: {
                    Authorization: getAccessToken(),
                    accept: '*/*'
                }
            });
        return response.data; // 테스트 로그인 성공 시 데이터 반환
    } catch (error) {
        console.error('테스트 로그인 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

// 중복 닉네임 체크 함수
export const checkNickname = async (nickname) => {
    try {
        const response = await axiosInstance.get(`${BASE_URL}/user/nickname`, {
            params: { nickname }, // 쿼리 파라미터로 전달
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data.data; // 중복 닉네임 체크 성공 시 데이터 반환
    } catch (error) {
        console.error('중복 닉네임 체크 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};


// 엑세스 토큰 재발급 함수
export const reissueAccessToken = async (accessToken, refreshToken) => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/auth/reissue`, {
            accessToken,
            refreshToken,
        }, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data;
    } catch (error) {
        console.error('엑세스 토큰 재발급 실패:', error);
        throw error;
    }
};


// 로그아웃 함수
export const logout = async (refreshToken, fcmToken) => {
    try {
        const response = await axiosInstance.post(`${BASE_URL}/auth/user`, {
            refreshToken,
            fcmToken,
        }, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data; // 로그아웃 성공 시 데이터 반환
    } catch (error) {
        removeAccessToken();
        removeRefreshToken();
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

// 회원 탈퇴 함수
export const deleteUser = async () => {
    try {
        const response = await axiosInstance.delete(`${BASE_URL}/auth/user`, {
            headers: {
                Authorization: getAccessToken()
            }
        });
        return response.data; // 탈퇴 성공 시 데이터 반환
    } catch (error) {
        console.error('회원 탈퇴 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

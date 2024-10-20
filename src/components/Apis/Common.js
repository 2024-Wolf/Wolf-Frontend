import Cookies from 'js-cookie';
import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer " + getAccessToken();
export let refreshToken = "Bearer " + getRefreshToken();

// Access Token을 로컬 스토리지에 저장
export function setAccessToken(token) {
    localStorage.setItem('accessToken', "Bearer " + token);
}

// Refresh Token을 쿠키에 저장
export function setRefreshToken(token) {
    Cookies.set('refreshToken', "Bearer " + token, { expires: 7, path: '/' });
}

// Access Token 가져오기 (로컬 스토리지에서)
export function getAccessToken() {
    return localStorage.getItem('accessToken');
}

// Refresh Token 가져오기 (쿠키에서)
export function getRefreshToken() {
    return Cookies.get('refreshToken');
}

// Access Token 제거
export function removeAccessToken() {
    localStorage.removeItem('accessToken');
}

// Refresh Token 제거
export function removeRefreshToken() {
    Cookies.remove('refreshToken', { path: '/' });
}

export async function refreshAccessToken() {
    try {
        const refreshToken = getRefreshToken();
        const accessToken = getAccessToken();
        if (!refreshToken) {
            throw new Error("No refresh token found");
        }
        if (!accessToken) {
            throw new Error("No access token found");
        }

        // 리프레시 토큰을 서버로 보내서 새 엑세스 토큰을 요청
        const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
            accessToken: accessToken,
            refreshToken: refreshToken
        });

        // 응답에서 새로운 엑세스 토큰과 리프레시 토큰 추출
        const newAccessToken = response.data.data.accessToken;
        const newRefreshToken = response.data.data.refreshToken;

        // 새로운 토큰을 로컬 스토리지와 쿠키에 저장
        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);

        return newAccessToken; // 새로 발급된 엑세스 토큰 반환
    } catch (error) {
        console.error("Access token refresh failed:", error);
        throw error; // 실패 시 예외 발생
    }
}
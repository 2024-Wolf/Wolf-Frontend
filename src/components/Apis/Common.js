import Cookies from 'js-cookie';
import axios from "axios";
import axiosInstance from "./axiosConfig";

export const BASE_URL = "http://localhost:8080/api/v1";
//export const BASE_URL = "http://18.223.187.130:8080/api/v1";

export let accessToken = getAccessToken();
export let refreshToken = getRefreshToken();

// Access Token을 로컬 스토리지에 저장
export function setAccessToken(token) {
    localStorage.setItem('accessToken', "Bearer " + token);
}

// Refresh Token을 쿠키에 저장
export function setRefreshToken(token) {
    Cookies.set('refreshToken', token, { expires: 7, path: '/' });
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
        console.log("Refreshing access token...");

        const refreshToken = getRefreshToken();
        if (!refreshToken) {
            throw new Error("No refresh token found");
        }

        const accessToken = getAccessToken();
        if (!accessToken) {
            throw new Error("No access token found");
        }

        // 리프레시 토큰을 서버로 보내서 새 엑세스 토큰을 요청
        const response = await axiosInstance.post(`${BASE_URL}/auth/reissue`, {
            accessToken: removeBearerPrefix(accessToken),
            refreshToken: refreshToken
        });

        // 새로운 액세스 토큰과 리프레시 토큰 저장
        const newAccessToken = response.data.data.accessToken;
        const newRefreshToken = response.data.data.refreshToken;

        await Promise.all([
            setAccessToken(newAccessToken),
            setRefreshToken(newRefreshToken)
        ]);

        console.log("New Access Token Set: ", newAccessToken);
        return newAccessToken; // 새로 발급된 액세스 토큰 반환
    } catch (error) {
        console.error("Access token refresh failed:", error);
        throw error; // 실패 시 예외 발생
    }
}

function removeBearerPrefix(token) {
    if (token.startsWith("Bearer ")) {
        return token.substring(7); // "Bearer "는 7글자이므로 앞부분을 제거
    }
    return token; // 만약 "Bearer "로 시작하지 않으면 그대로 반환
}

class TokenManager {
    setAccessToken(token) {
        localStorage.setItem("accessToken", `Bearer ${token}`);
    }

    getAccessToken() {
        return localStorage.getItem("accessToken"); // Bearer가 포함된 상태로 반환
    }

    setRefreshToken(token) {
        Cookies.set('refreshToken', token, { expires: 7, path: '/' });
    }

    getRefreshToken() {
        return Cookies.get('refreshToken');
    }
}

export const Token = new TokenManager();


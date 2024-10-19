import Cookies from 'js-cookie';

export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer " + getAccessToken();
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk1NTUyMzd9.1AEDIEFB17TtGliNB7Zf7LaxZpf9brJHuk3xTM2psfxlac0Ow9s1dfOHCsxyE8Bi";

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
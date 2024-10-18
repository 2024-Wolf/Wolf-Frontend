export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzI5MjA0MTc1LCJleHAiOjE3Mjk2MzYxNzV9.lOSmRMHLQkaCYEXzeOYHAWuX9SVoojEwI-qc-xIXxVu9_se2TB0HoliMpZEpeocD";
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk1NTUyMzd9.1AEDIEFB17TtGliNB7Zf7LaxZpf9brJHuk3xTM2psfxlac0Ow9s1dfOHCsxyE8Bi";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
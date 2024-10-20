export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzI5NDI3OTAzLCJleHAiOjE3Mjk4NTk5MDN9.nVoiQQ6sL0WHwJ_tzv8gPzDij6MC7ZkqYU4zF43-EiVkUIRJqVgYW5mDNxRryxCt";
export let refreshToken = "Bearer ";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzI5NDY3MTkzLCJleHAiOjE3Mjk4OTkxOTJ9.pDtTxiddipwQoUtXztsptUJvxHRXuHXVtatQmKsD0WLF4TatEObGmHcJKubqen7C";
export let refreshToken = "Bearer ";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
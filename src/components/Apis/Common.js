export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyMyIsIlVzZXJSb2xlVHlwZSI6IlVTRVIiLCJpYXQiOjE3MjkyMDc1MTcsImV4cCI6MTcyOTYzOTUxN30.Vk-ZQ-S1K10omFBT6l5I8vUSRELwWZcYOw7SpFPynXmUOFpMv9zuXiBpx1e_98pj";
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk4MTIzMTd9.7htonRa_RUKMg7xF6eA8nl2eV3NhMs-FkoMUwBJd4rdOuL4qanmcu60DLHiN3JNH";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
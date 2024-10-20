export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer ";
export let refreshToken = "Bearer ";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
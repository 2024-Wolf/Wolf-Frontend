export const BASE_URL = "http://localhost:8080/api/v1";
export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiVVNFUiIsImlhdCI6MTcyODk1MDQzNywiZXhwIjoxNzI4OTU0MDM3fQ.Kfv5InB5GBGElrxCUMO7G0p-kAUsVQZRQzroc8AXnq_xG2t685azy5-_vt-_fy3c";
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk1NTUyMzd9.1AEDIEFB17TtGliNB7Zf7LaxZpf9brJHuk3xTM2psfxlac0Ow9s1dfOHCsxyE8Bi";

export function setAccessToken(token){
    accessToken = "Bearer" + token;
}

export function setRefreshToken(token){
    refreshToken = "Bearer" + token;
}
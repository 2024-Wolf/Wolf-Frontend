export const BASE_URL = "http://localhost:8080/api/v1";
export let accessToken = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiVVNFUiIsImlhdCI6MTcyODk4MzExNywiZXhwIjoxNzI4OTg2NzE3fQ.Y6POMeXkf1Rdni-fcyFz4kHQqMVP-12CGlYoZd76abNQCg_9yBfLD20dCuevUI00";
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk1NTUyMzd9.1AEDIEFB17TtGliNB7Zf7LaxZpf9brJHuk3xTM2psfxlac0Ow9s1dfOHCsxyE8Bi";

export function setAccessToken(token){
    accessToken = "Bearer" + token;
}

export function setRefreshToken(token){
    refreshToken = "Bearer" + token;
}
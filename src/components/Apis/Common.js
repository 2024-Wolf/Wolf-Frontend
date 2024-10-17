export const BASE_URL = "http://localhost:8080/api/v1";
export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyMSIsIlVzZXJSb2xlVHlwZSI6IlVTRVIiLCJpYXQiOjE3MjkyMDMwNzEsImV4cCI6MTcyOTYzNTA3MX0.MAuGOYEyX5VQluo8BoqXf-JJ3TdcX7IfnSfyQUFq7W04j7g5NcOB-98prsbkpbvH";
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk1NTUyMzd9.1AEDIEFB17TtGliNB7Zf7LaxZpf9brJHuk3xTM2psfxlac0Ow9s1dfOHCsxyE8Bi";

export function setAccessToken(token){
    accessToken = "Bearer" + token;
}

export function setRefreshToken(token){
    refreshToken = "Bearer" + token;
}
export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiVVNFUiIsImlhdCI6MTcyOTMxODY4NCwiZXhwIjoxNzI5NzUwNjg0fQ.pyE6rSfTVz5s-HhSXwQlO0Sl7qoSgZPf94O9nTwb-INUstgRzeydLTvDjkDs5wB2"
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk5MjM0ODR9.S_lUZJ2TcfFSgadgmoEieL8ujbxmtrRDBEcpksNPYKhpkEdO7aOnvwoS0aow8wSv"


export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
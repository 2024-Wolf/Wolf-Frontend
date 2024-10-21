export const BASE_URL = "http://localhost:8080/api/v1";

export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiVXNlclJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzI5NDc0MjE5LCJleHAiOjE3Mjk5MDYyMTl9.Hu7dvOmXlL1tQUDE2lTL0Dl0CD4goQonsEYgJ_ssriedFxVfsHIUWipvqGtZHxJF";
export let refreshToken = "Bearer ";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}
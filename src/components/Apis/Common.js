export const BASE_URL = "http://localhost:8080/api/v1";
export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI4NjE5OTE1LCJleHAiOjE3Mjg2MjM1MTV9.0wmykNwTTSVvjtlbLAtX8XI-qhFCoxqT9mUiMEg6rparIh57mWwb06vZII8IcV4W";

export function setAccessToken(token){
    accessToken = "Bearer" + token;
}
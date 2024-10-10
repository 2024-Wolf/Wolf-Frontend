export const BASE_URL = "http://localhost:8080/api/v1";
export let accessToken = "";

export function setAccessToken(token){
    accessToken = token;
}
export const BASE_URL = "http://localhost:8080/api/v1";
//export const BASE_URL = "http://18.223.187.130:8080/api/v1";

class TokenManager {
    setAccessToken(token) {
        localStorage.setItem("accessToken", JSON.stringify(`Bearer ${token}`));
    }

    getAccessToken() {
        return JSON.parse(localStorage.getItem("accessToken"));
    }
}

export const Token = new TokenManager();

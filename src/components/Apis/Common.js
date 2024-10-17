export const BASE_URL = "http://localhost:8080/api/v1";
export let accessToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyMyIsIlVzZXJSb2xlVHlwZSI6IlVTRVIiLCJpYXQiOjE3MjkxMjg1NDEsImV4cCI6MTcyOTU2MDU0MX0.BA-mX102mSD2K4pHmIBhYsrhLysQ3X4TrCkMp-05sMOS0gsVUrtn9nzm2EwqvyQ6";
export let refreshToken = "Bearer eyJhbGciOiJIUzM4NCJ9.eyJleHAiOjE3Mjk3MzMzNDF9.gSK9P8Xj1Vds4cxIjX-0i1Zm9dlGuZgNpRWHqLxOTGWpq-48M2a64paKE4ahxjS6";

export function setAccessToken(token) {
    accessToken = "Bearer " + token;
}

export function setRefreshToken(token) {
    refreshToken = "Bearer " + token;
}



export const isLoggedIn = () => {
    if (accessToken) {
        const tokenWithoutBearer = accessToken.split(' ')[1]; // "Bearer " 제거
        console.log("Token Without Bearer:", tokenWithoutBearer);

        try {
            const decodedToken = jwtDecode(tokenWithoutBearer);
            console.log("디코드된 토큰:", decodedToken); // 디코딩된 토큰 출력

            // 디코드된 토큰의 추가적인 필드들 출력
            console.log("토큰 발급자 (iss):", decodedToken.iss); // 발급자 (issuer)
            console.log("토큰 대상자 (sub):", decodedToken.sub); // 대상자 (subject)
            console.log("토큰 발급 대상 (aud):", decodedToken.aud); // 발급 대상 (audience)

            // 만료 시간 확인
            const expDate = new Date(decodedToken.exp * 1000); // 초를 밀리초로 변환
            console.log("토큰 만료 날짜:", expDate);

            const currentTime = Date.now() / 1000; // 현재 시간(초)
            console.log("현재 시간 (초 단위):", currentTime);

            if (decodedToken.exp > currentTime) {
                console.log("로그인된 상태임");
                return true; // 로그인 상태
            } else {
                console.log("만료된 토큰임");
                return false; // 만료된 토큰
            }
        } catch (error) {
            // 디코딩 중 발생한 에러를 상세하게 출력
            console.error("토큰 디코딩 중 오류 발생:", error.name);
            console.error("오류 메시지:", error.message);

            if (error instanceof SyntaxError) {
                console.error("토큰의 형식이 잘못됨:", error);
            } else if (error instanceof jwtDecode.InvalidTokenError) {
                console.error("유효하지 않은 토큰:", error);
            } else {
                console.error("알 수 없는 디코딩 오류:", error);
            }

            return false; // 디코딩 오류가 발생하면 로그인 상태가 아님
        }
    } else {
        console.log("토큰이 없음");
    }
    return false; // 토큰이 없으면 로그인 상태가 아님
};
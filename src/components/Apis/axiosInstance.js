import axios from 'axios';
import { BASE_URL, accessToken } from './Common';

// Axios 기본 설정
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = accessToken; // 모든 요청에 액세스 토큰 추가
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

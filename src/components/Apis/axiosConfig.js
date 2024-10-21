// src/api/axiosConfig.js

import axios from 'axios';
import {getAccessToken, refreshAccessToken, removeAccessToken, removeRefreshToken} from './Common';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터: 401 에러 시 토큰 재발급
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;

    if (response && response.status === 401 && !config._retry) {
      config._retry = true;

      try {
        // Access Token 재발급
        const newAccessToken = await refreshAccessToken();

        // 새로운 토큰으로 Authorization 헤더 설정
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        // 요청을 다시 시도
        return axiosInstance(config);
      } catch (refreshError) {
        console.error('토큰 재발급 실패:', refreshError);
        removeAccessToken();
        removeRefreshToken();
        return Promise.reject(refreshError);  // 재발급 실패 시 처리
      }
    }

    return Promise.reject(error);  // 그 외의 에러 처리
  }
);


export default axiosInstance;
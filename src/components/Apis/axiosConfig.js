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

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        axios.defaults.headers.common['Authorization'] = await refreshAccessToken();
        return axiosInstance(originalRequest);
      } catch (err) {
        removeAccessToken();
        removeRefreshToken();
        // 로그아웃 처리 또는 에러 핸들링
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
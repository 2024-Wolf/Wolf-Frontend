import axiosInstance from './axiosInstance';


// 구글 로그인 함수
export const googleLogin = async (idToken, fcmToken) => {
    try {
        const response = await axiosInstance.post('/auth/google', {
            idToken,
            fcmToken,
        });
        return response.data; // 로그인 성공 시 데이터 반환
    } catch (error) {
        console.error('구글 로그인 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

// 로그아웃 함수
export const logout = async (refreshToken, fcmToken) => {
    try {
        const response = await axiosInstance.post('/auth/user', {
            refreshToken,
            fcmToken,
        });
        return response.data; // 로그아웃 성공 시 데이터 반환
    } catch (error) {
        console.error('로그아웃 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};

// 회원 탈퇴 함수
export const deleteUser = async () => {
    try {
        const response = await axiosInstance.delete('/auth/user');
        return response.data; // 탈퇴 성공 시 데이터 반환
    } catch (error) {
        console.error('회원 탈퇴 실패:', error);
        throw error; // 오류 발생 시 예외를 발생시킴
    }
};


// 엑세스 토큰 재발급
export const reissueAccessToken = async (accessToken, refreshToken) => {
    try {
        const response = await axiosInstance.post('/auth/reissue', {
            accessToken,
            refreshToken,
        });
        return response.data;
    } catch (error) {
        console.error('엑세스 토큰 재발급 실패:', error);
        throw error;
    }
};


// 예제 컴포넌트
// components/AuthComponent.js

// import React, { useState } from 'react';
// import { googleLogin, logout, deleteUser, reissueAccessToken } from '../api/auth';
// import { setAccessToken, setRefreshToken } from '../api/Common';

// const AuthComponent = () => {
//     const [idToken, setIdToken] = useState('');
//     const [fcmToken, setFcmToken] = useState('');

//     const handleGoogleLogin = async () => {
//         try {
//             const response = await googleLogin(idToken, fcmToken);
//             setAccessToken(response.accessToken); // 로그인 성공 시 토큰 설정
//             setRefreshToken(response.refreshToken); // 로그인 성공 시 리프레시 토큰 설정
//             console.log('구글 로그인 성공:', response);
//         } catch (error) {
//             console.error('구글 로그인 오류:', error);
//         }
//     };

//     const handleLogout = async () => {
//         try {
//             const response = await logout('your-refresh-token', fcmToken);
//             console.log('로그아웃 성공:', response);
//         } catch (error) {
//             console.error('로그아웃 오류:', error);
//         }
//     };

//     const handleDeleteUser = async () => {
//         try {
//             const response = await deleteUser();
//             console.log('회원 탈퇴 성공:', response);
//         } catch (error) {
//             console.error('회원 탈퇴 오류:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Auth Component</h2>
//             <button onClick={handleGoogleLogin}>구글 로그인</button>
//             <button onClick={handleLogout}>로그아웃</button>
//             <button onClick={handleDeleteUser}>회원 탈퇴</button>
//         </div>
//     );
// };

// export default AuthComponent;
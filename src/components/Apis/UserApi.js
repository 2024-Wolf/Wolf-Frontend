// api/user.js

import axiosInstance from './axiosInstance';

// 회원 추가 정보 저장
export const signUpUser = async (data) => {
    try {
        const response = await axiosInstance.post('/user/sign-up', data);
        return response.data;
    } catch (error) {
        console.error('회원 추가 정보 저장 실패:', error);
        throw error;
    }
};

// 내 프로필 조회
export const getMyProfile = async () => {
    try {
        const response = await axiosInstance.get('/users/my');
        return response.data;
    } catch (error) {
        console.error('내 프로필 조회 실패:', error);
        throw error;
    }
};

// 프로필 조회
export const getUserProfile = async (userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        throw error;
    }
};

// 프로필 사진 등록
export const uploadProfilePhoto = async (userId, photoData) => {
    try {
        const response = await axiosInstance.post(`/users/${userId}/photo`, photoData);
        return response.data;
    } catch (error) {
        console.error('프로필 사진 등록 실패:', error);
        throw error;
    }
};

// 프로필 정보 수정
export const updateUserProfile = async (userId, data) => {
    try {
        const response = await axiosInstance.patch(`/users/${userId}`, data);
        return response.data;
    } catch (error) {
        console.error('프로필 정보 수정 실패:', error);
        throw error;
    }
};

// 알림 전체 조회
export const getAlarms = async () => {
    try {
        const response = await axiosInstance.get('/users/alarms');
        return response.data;
    } catch (error) {
        console.error('알림 전체 조회 실패:', error);
        throw error;
    }
};

// 알림 미리보기 조회
export const getAlarmsPreview = async () => {
    try {
        const response = await axiosInstance.get('/users/alarms/preview');
        return response.data;
    } catch (error) {
        console.error('알림 미리보기 조회 실패:', error);
        throw error;
    }
};


// 예제 컴포넌트
// components/UserProfile.js

// import React, { useEffect, useState } from 'react';
// import { getMyProfile, getAlarms, getAlarmsPreview } from '../api/user';

// const UserProfile = () => {
//     const [profile, setProfile] = useState(null);
//     const [alarms, setAlarms] = useState([]);
//     const [previewAlarms, setPreviewAlarms] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const profileData = await getMyProfile();
//                 setProfile(profileData);

//                 const alarmsData = await getAlarms();
//                 setAlarms(alarmsData);

//                 const previewData = await getAlarmsPreview();
//                 setPreviewAlarms(previewData);
//             } catch (error) {
//                 console.error('데이터 조회 중 오류 발생:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h2>내 프로필</h2>
//             {profile && (
//                 <div>
//                     <h3>{profile.name}</h3>
//                     <p>{profile.email}</p>
//                 </div>
//             )}

//             <h2>알림 전체</h2>
//             <ul>
//                 {alarms.map((alarm) => (
//                     <li key={alarm.id}>{alarm.content}</li>
//                 ))}
//             </ul>

//             <h2>알림 미리보기</h2>
//             <ul>
//                 {previewAlarms.map((preview) => (
//                     <li key={preview.id}>{preview.content}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserProfile;

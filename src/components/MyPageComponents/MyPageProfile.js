



import styled from "styled-components";

import ImagePreview from "../Img/ImagePreview";
import React, { useState } from 'react';

// pages/MyPage.js
const MyPageProfileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    button {
        &:hover {
            opacity: 1;    /* 보일 때 투명도 */
            background-color: rgba(0, 0, 0, 0.05); // 검정색 배경에 50% 투명도
        }
    }
`;

const MyPageProfile = ({ contentsType, profileData }) => {
    const [selectedFile, setSelectedFile] = useState(null); // 사용자가 선택한 파일
    const [profilePicture, setProfilePicture] = useState(profileData.profilePicture ? profileData.profilePicture : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");     // 미리보기 URL

    // 파일이 선택되었을 때 호출되는 함수
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();

            // 파일 읽기가 완료되면 미리보기 URL 설정
            reader.onload = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // 프로필 사진을 초기화하는 함수
    const handleReset = () => {
        setSelectedFile(null);
        setProfilePicture(null);
    };

    // 서버로 전송하는 함수 (예시로 작성)
    const handleSubmit = () => {
        if (!selectedFile) {
            alert("프로필 사진을 선택하세요.");
            return;
        }

        // FormData에 파일을 추가해 서버로 전송할 수 있습니다.
        const formData = new FormData();
        formData.append("profileImage", selectedFile);

        // axios 등을 사용해 서버로 파일을 전송
        // axios.post('/upload', formData);
        console.log("프로필 사진이 업로드되었습니다.");
    };



    return (
        <MyPageProfileWrapper>
            {console.log(profileData)}
            {contentsType == "strangerViewing" ? (<>
                {/* strangerViewing */}
                <ImagePreview
                    ImagePlaceholderStyle={{ margin: '0px' }}
                    imgStyle={{ width: '120px', height: '120px', borderRadius: '50%' }}
                    src={profilePicture}
                    imageFile={profilePicture}
                />
            </>) : (<>
                {/* myselfViewing */}
                {/* myselfEditing */}
                <ImagePreview
                    ProfileImgPlaceholderStyle={{ margin: '0px' }}
                    ProfileImgStyle={{ width: '120px', height: '120px', borderRadius: '50%' }}
                    isProfileImgEditButtonAppear={true}
                    defaultImgSrc={profilePicture}
                    imageFile={profilePicture}
                    alt="Profile Preview"
                />
            </>)}
        </MyPageProfileWrapper>
    )
};

export default MyPageProfile;
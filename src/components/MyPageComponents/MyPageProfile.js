



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
    const [newProfilePicture, setNewProfilePicture] = useState(profileData.profilePicture ? profileData.profilePicture : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");     // 미리보기 URL


    // 프로필 사진 선택 변경
    const handleProfilePictureChange = (file) => {
        if (file) {
            setNewProfilePicture(file); // 선택한 파일로 설정
        }
    };

    // 프로필 사진 삭제, 초기화
    const handleProfilePictureDelete = () => {
        setNewProfilePicture("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"); // 기본이미지로 설정
    };




    // 서버로 전송
    const handleSubmit = () => {
        if (!newProfilePicture) {
            alert("프로필 사진을 선택하세요.");
            return;
        }

        const formData = new FormData();
        formData.append("profileImage", newProfilePicture);

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
                    imgStyle={{ width: '140px', height: '140px', borderRadius: '50%' }}
                    src={newProfilePicture}
                    imageFile={newProfilePicture}
                />
            </>) : (<>
                {/* myselfViewing */}
                {/* myselfEditing */}
                <ImagePreview
                    onClick={() => handleProfilePictureDelete()}
                    onChange={(file) => handleProfilePictureChange(file)}
                    ProfileImgPlaceholderStyle={{ margin: '0px' }}
                    ProfileImgStyle={{ width: '140px', height: '140px', borderRadius: '50%' }}
                    isProfileImgEditButtonAppear={true}
                    defaultImgSrc={newProfilePicture}
                    imageFile={newProfilePicture}
                    alt="Profile Preview"
                />
            </>)}
        </MyPageProfileWrapper>
    )
};

export default MyPageProfile;
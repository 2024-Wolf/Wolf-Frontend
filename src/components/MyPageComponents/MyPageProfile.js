



import styled from "styled-components";

import ImagePreview from "../Img/ImagePreview";
import React, { useState } from 'react';
import { postMyProfile } from "../Apis/UserApi";

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
    const [newProfileData, setNewProfileData] = useState(profileData);
    const [newProfilePicture, setNewProfilePicture] = useState(profileData.profilePicture ? profileData.profilePicture : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");

    // console.log('profileData', profileData);
    // console.log('newProfileData', newProfileData);
    // console.log('newProfilePicture', newProfilePicture);

    // 프로필 사진 선택 변경
    const handleProfilePictureChange = (file) => {
        if (file) {
            setNewProfilePicture(file); // 선택한 파일로 설정

            setNewProfileData((prev) => ({
                ...prev,
                profilePicture: file
            }));

            handleFormSubmit();
        }
    };

    // 프로필을 기본 이미지로 초기화
    const handleProfilePictureDelete = () => {
        const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

        setNewProfilePicture(defaultImage);

        setNewProfileData((prev) => ({
            ...prev,
            profilePicture: defaultImage
        }));

        handleFormSubmit();
    };

    const handleFormSubmit = async () => {

        try {
            const result = await postMyProfile(newProfileData);

            // 상태 코드가 200-299 범위인지 확인
            if (result.status < 200 || result.status >= 300) {
                throw new Error('네트워크 오류');
            }

            alert("프로필 이미지가 수정되었습니다");
            // window.location.reload(); // 페이지 새로 고침

        } catch (error) {
            // setError('프로필 이미지 수정 실패');
            console.error(error);
        } finally {
            // setIsLoading(false);
        }

    }

    // 서버로 전송하는 건 ImagePreview 컴포넌트 내에서 이루어짐

    return (
        <MyPageProfileWrapper>
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
                <form
                    id='uploadForm'
                    method="post" encType="multipart/form-data" action="/user"
                    onClick={() => alert('사진 수정 기능은 업데이트 예정입니다')} // 프로필 업로드 기능이 미구현되어서 안내 멘트 설정해둠
                >
                    <ImagePreview
                        disabled={true} // 프로필 업로드 기능이 미구현되어서 disabled로 설정해둠

                        onClick={() => handleProfilePictureDelete()}
                        onChange={(file) => handleProfilePictureChange(file)}
                        ProfileImgPlaceholderStyle={{ margin: '0px' }}
                        ProfileImgStyle={{ width: '140px', height: '140px', borderRadius: '50%' }}
                        isProfileImgEditButtonAppear={true}
                        defaultImgSrc={newProfilePicture}
                        imageFile={newProfilePicture}
                        alt="Profile Preview"
                    />
                </form>
            </>)}
        </MyPageProfileWrapper>
    )
};

export default MyPageProfile;
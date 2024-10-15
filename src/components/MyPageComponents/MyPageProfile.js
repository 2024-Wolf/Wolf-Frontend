



import styled from "styled-components";

import React, { useState } from "react";
import Profile from "../Card/Profile";
import ImagePreview from "../Img/ImagePreview";
import EditButton from "../Button/EditButton";
import EditIcon from "../Icon/EditIcon";


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

const MyPageProfile = ({ contentsType }) => {
    const [imgSrc, setImgSrc] = useState("");


    return (
        <MyPageProfileWrapper>
            {contentsType == "strangerViewing" ? (<>
                {/* strangerViewing */}
                <ImagePreview
                    ImagePlaceholderStyle={{ margin: '0px' }}
                    imgStyle={{ width: '120px', height: '120px', borderRadius: '50%' }}
                    src={imgSrc || "https://image.utoimage.com/preview/cp927958/2020/09/202009015931_500.jpg"}
                    imageFile={imgSrc || "https://image.utoimage.com/preview/cp927958/2020/09/202009015931_500.jpg"}
                />
            </>) : (<>
                {/* myselfViewing */}
                {/* myselfEditing */}
                <Profile
                    src={imgSrc || "https://image.utoimage.com/preview/cp927958/2020/09/202009015931_500.jpg"}
                    style={{ width: '120px', height: '120px' }}
                    ProfileContainerStyle={{ gap: '0px', margin: '0px' }} />
                <EditIcon size={18} style={{ width: '120px', height: '120px', position: 'absolute', borderRadius: '50%' }} />
            </>)}
        </MyPageProfileWrapper>
    )
};

export default MyPageProfile;
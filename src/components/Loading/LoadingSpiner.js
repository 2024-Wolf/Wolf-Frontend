import styled from "styled-components";
import { Square, Black500Line } from "../GlobalStyledComponents";
import React from "react";

// components/Input/TextAreaWrapper.jsx
const LoadingSpinerWrapper = styled.div`
    width: 100%;
    
    .spinner-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh; /* 화면 중앙에 표시 */
        width: 100%;
        gap: 10px;
    }

    .spinner {
        border: 8px solid rgba(0, 0, 0, 0.1); /* 회색 배경 */
        border-top: 8px solid var(--violet500); /* 파란색 회전 부분 */
        border-radius: 50%; /* 원형 모양 */
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite; /* 회전 애니메이션 */
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;





const LoadingSpiner = (props) => {

    return (
        <LoadingSpinerWrapper>
            <div className="spinner-container">
                로딩중...
                <div className="spinner"></div>
            </div>
        </LoadingSpinerWrapper>
    );
}

export default LoadingSpiner;

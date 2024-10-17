

import styled from "styled-components";
import React from "react";

// components/Input/TextAreaWrapper.jsx
const ErrorUIWrapper = styled.div`
    width: 100%;
    
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* 화면 중앙에 표시 */
        color: #e74c3c; /* 에러 메시지를 빨간색으로 */
        text-align: center;
    }
    
    .error-icon {
        font-size: 3rem; /* 큰 사이즈의 경고 아이콘 */
    }
    
    .error-message {
        font-size: 1.5rem;
        margin-top: 10px;
    }
`;





const ErrorUI = ({ error, ...props }) => {

    return (
        <ErrorUIWrapper>
            <div className="error-container">
                <div className="error-icon">⚠️</div> {/* 에러 아이콘 추가 */}
                <p className="error-message">{error}</p> {/* 에러 메시지 출력 */}
            </div>
        </ErrorUIWrapper>
    );
}

export default ErrorUI;

import React from 'react';
import styled from 'styled-components';

const MainContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  height: auto;
  flex-direction: column;
  margin: 50px 0px;
  gap: 50px;
`;

function MainContent(props) {
    return (
        <MainContents>
            {/* 컨텐츠 내용 */}
            <div style={{ backgroundColor: "#F2F0FF" }}>
                컨텐츠 내용1
            </div>
            <div style={{ backgroundColor: "#E5E1FF" }}>
                컨텐츠 내용2
            </div>
            <div style={{ backgroundColor: "#CEC6FF" }}>
                컨텐츠 내용3
            </div>
        </MainContents>
    );
};

export default MainContent;
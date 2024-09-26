import React, { useState } from "react";
import styled from "styled-components";
import ChallengeList from "../Challenge/ChallengeList"
import ChallengeDetail from "../Challenge/ChallengeDetail";
import ContentsWrapper from "../TabContentsWrapper";

const ChallengeLists = styled(ContentsWrapper)`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;


const ChallengeTab = () => {
    const [detailOpen, setDetailOpen] = useState(false);

    const handleDetail = () => {
      setDetailOpen(!detailOpen);
    }

    return (
      <ChallengeLists>
        {detailOpen ? 
        <>
          <ChallengeDetail clickFunc={handleDetail} />
        </>
        :
        <>
          <ChallengeList clickFunc={handleDetail} category="진행중" />
          <ChallengeList clickFunc={handleDetail} category="완료" />
          <ChallengeList clickFunc={handleDetail} category="진행 가능" />
        </>}
      </ChallengeLists>);
  };
  
  export default ChallengeTab;
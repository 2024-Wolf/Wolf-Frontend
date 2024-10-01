import styled from "styled-components";
import { ChallengeLists } from "../GlobalStyledComponents"; // 필요한 컴포넌트를 import

import React, { useState } from "react";
import ChallengeList from "../Challenge/ChallengeList"
import ChallengeDetail from "../Challenge/ChallengeDetail";


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
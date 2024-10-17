import React, { useState } from "react";

import { ChallengeLists } from "../GlobalStyledComponents"; // 필요한 컴포넌트를 import

import ChallengeList from "../Challenge/ChallengeList"
import ChallengePostData from "../../Data/16_ChallengePostData";
import ChallengeDetail from "../Challenge/ChallengeDetail";

const ChallengeTab = () => {
  const [detailModalOn, setDetailModalOn] = useState(false);
  const [item, setItem] = useState();

  // 진행 가능
  const before = [...ChallengePostData.filter(data => data.status === "PAY").sort((a, b) => a.challenge_deadline - b.challenge_deadline)
  , ...ChallengePostData.filter(data => data.status === "APPLY").sort((a, b) => a.challenge_deadline - b.challenge_deadline)
  , ...ChallengePostData.filter(data => data.status === "PARTICIPATE").sort((a, b) => a.challenge_deadline - b.challenge_deadline)];

  // 진행중
  const now = [...ChallengePostData.filter(data => data.status === "CERTIFICATION").sort((a, b) => a.challenge_deadline - b.challenge_deadline)
  , ...ChallengePostData.filter(data => data.status === "CERTIFICATION_COMPLETE").sort((a, b) => a.challenge_deadline - b.challenge_deadline)];

  // 완료
  const after = ChallengePostData.filter(data => data.status === "RESULT_CONFIRM").sort((a, b) => a.challenge_deadline - b.challenge_deadline)

  // 챌린지 상세
  function setDetailItem(item){
    setDetailModalOn(true);
    setItem(item);
}

  return (
      <ChallengeLists>
        {detailModalOn ? <ChallengeDetail item={item} prevClick={() => setDetailModalOn(false)} /> : 
        <>
          <ChallengeList list={now} category="진행중" setDetail={setDetailItem} />
          <ChallengeList list={after} category="완료" setDetail={setDetailItem} />
          <ChallengeList list={before} category="진행 가능" setDetail={setDetailItem} />
        </>
        }
        
      </ChallengeLists>
  );
};

export default ChallengeTab;
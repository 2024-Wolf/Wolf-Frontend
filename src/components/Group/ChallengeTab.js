import React, { useEffect, useState } from "react";

import { ChallengeLists } from "../GlobalStyledComponents"; // 필요한 컴포넌트를 import

import ChallengeList from "../Challenge/ChallengeList"
import ChallengeDetail from "../Challenge/ChallengeDetail";
import { getChallenges } from "../Apis/ChallengePostApi";
import { setAccessToken } from "../Apis/Common";

const ChallengeTab = (props) => {
  const [detailModalOn, setDetailModalOn] = useState(false);
  const [item, setItem] = useState();

  const [before, setBefore] = useState([]);
  const [now, setNow] = useState([]);
  const [after, setAfter] = useState([]);

  const [tokenInput, setTokenInput] = useState();


  // 챌린지 목록 불러오기 함수
  async function fetchChallenges(){
    // 진행 가능한 챌린지
    try {
      const responses = await Promise.all([
        getChallenges(props.groupPostId, "APPLY"),
        getChallenges(props.groupPostId, "PAY"),
        getChallenges(props.groupPostId, "PARTICIPATE")
      ]);

      // 각 응답에서 챌린지 배열을 추출하고, 빈 배열은 제외
      const validChallenges = responses
        .map(response => response.data.challenges)
        .filter(challenges => challenges.length > 0)
        .flat();

      if (validChallenges.length > 0) {
        setBefore(validChallenges);
      }
    }catch (error) {
      console.error("데이터 불러오기 실패:", error);
    }

    // 완료된 챌린지
    try {
      const responses = await Promise(
        getChallenges(props.groupPostId, "RESULT_CONFIRM")
      );

      // 각 응답에서 챌린지 배열을 추출하고, 빈 배열은 제외
      const validChallenges = responses
        .map(response => response.data.challenges)

      if (validChallenges.length > 0) {
        setAfter(validChallenges);
      }
    }catch (error) {
      console.error("데이터 불러오기 실패:", error);
    }
  

    // 진행중인 챌린지
    try {
      const responses = await Promise.all([
        getChallenges(props.groupPostId, "CERTIFICATION"),
        getChallenges(props.groupPostId, "CERTIFICATION_COMPLETE")
      ]);

      // 각 응답에서 챌린지 배열을 추출하고, 빈 배열은 제외
      const validChallenges = responses
        .map(response => response.data.challenges)
        .filter(challenges => challenges.length > 0)
        .flat();


      if (validChallenges.length > 0) {
        setNow(validChallenges);
      }
    }catch (error) {
      console.error("데이터 불러오기 실패:", error);
      }
    }


  useEffect(()=>{
    fetchChallenges();
  }, []);


  // 챌린지 상세
  function setDetailItem(item){
    setDetailModalOn(true);
    setItem(item);
  }

  function handleTokenInput(e){
    setTokenInput(e.target.value);
  }

  function handleTokenButton(e){
    setAccessToken(tokenInput);
    alert("설정된 토큰 값 : " + tokenInput);
  }

  return (
      <ChallengeLists>
        {detailModalOn ? <ChallengeDetail challengePostId={item.challengePostId} prevClick={() => setDetailModalOn(false)} /> : 
        <>
          <ChallengeList groupPostId={props.groupPostId} list={now} fetchChallenges={fetchChallenges} category="진행중" setDetail={setDetailItem} />
          <ChallengeList groupPostId={props.groupPostId} list={after} fetchChallenges={fetchChallenges} category="완료" setDetail={setDetailItem} />
          <ChallengeList groupPostId={props.groupPostId} list={before} fetchChallenges={fetchChallenges} category="진행 가능" setDetail={setDetailItem} />
        </>
        }
        <div>
          <input type="text" value={tokenInput} onChange={handleTokenInput}/>
          <button onClick={handleTokenButton}>토큰 입력</button>
        </div>
      </ChallengeLists>
  );
};

export default ChallengeTab;
import styled from "styled-components";
import axios from "axios";
import {
  ChangeColumn320px,
  ButtonContainer,
  ModalContentWrapper,
  ModalHeader,
  CategoryMainTitle,
  Violet500LineButton,
  Modaldescription,
} from "../../GlobalStyledComponents";

import React, { useEffect, useState } from "react";
import CancelIcon from "../../Icon/CancelIcon";
import InputTextBlackLine from "../../Input/InputTextBlackLine";
import TextAreaBlackLine from "../../Input/TextAreaBlackLine";
import SelectButtonBlackLine from "../../Button/SelectButtonBlackLine";
import TextAreaNoCss from "../../Input/TextAreaNoCss";
import ModalForm from "../../Modal/ModalForm";
import FormFieldSingle from "../GroupComponent/FormFieldSingle";
import FormCheckBoxButton from "../../Button/FormCheckBoxButtonBlackLine";
import CopyButton from "../../Button/CopyButton";
import ProfileIcon from "../../Icon/ProfileIcon";
import TripleButton from "../../Button/TripleButton";
import { getGroupMember, postEvaluate } from "../../Apis/GroupPostApi";


const initialGroupData = {
  groupType: "study",
  startDate: new Date(),
  endDate: new Date(),
  deadLineDate: new Date(),
  title: "",
  techStack: "",
  buttons: [
    { label: "이메일", clicked: true },
    { label: "지원직군", clicked: true },
    { label: "지원사유", clicked: true },
    { label: "다룰 수 있는 언어", clicked: false },
    { label: "참여가능 요일", clicked: false },
    { label: "자기소개", clicked: false },
    { label: "포트폴리오 링크", clicked: false },
    { label: "자유기재", clicked: false }
  ],
  totalMemberCount: 0,
  subject: "",
  introduction: "",
  guidelines: "",
  fileName: ""
};

const EvaluationModal = ({ onClose, onSubmit, applicant, isView, optionalRequirements, groupId }) => {
  const [isPortfolioValid, setIsPortfolioValid] = useState(true); // 포트폴리오 링크 입력했는지 검증하는 상태
  const [isDayValid, setIsDayValid] = useState(true); // 요일 입력했는지 검증하는 상태
  const [isSelectRoldValid, setIsSelectRoldValid] = useState(true); // 지원직군 선택했는지 검증하는 상태
  const [isPortfolioTextValid, setIsPortfolioTextValid] = useState(true); // 지원직군 선택했는지 검증하는 상태

  const [buttonStatus, setButtonStatus] = useState("");
  const [linkButtonDisable, setLinkButtonDisable] = useState(false);
  const [activityRating, setActivityRating] = useState('');

  const [modalData, setModalData] = useState(null);
  const [groupMemberData, setGroupMemberData] = useState({});



  const handleClickGood = (memberId) => {
    setActivityRating('good');
    setModalData((prev) => ({
      ...prev,
      memberId: memberId,
      rate: 'good',
    }));
  }
  const handleClickSoso = (memberId) => {
    setActivityRating('soso');
    setModalData((prev) => ({
      ...prev,
      memberId: memberId,
      rate: 'soso',
    }));
  }
  const handleClickBad = (memberId) => {
    setActivityRating('bad');
    setModalData((prev) => ({
      ...prev,
      memberId: memberId,
      rate: 'bad',
    }));

  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postEvaluate(groupId, modalData);
    } catch (error) {
      // 에러 처리: 콘솔에 에러 메시지 출력
      console.error('그룹원 데이터 불러오기 실패:', error);
    } finally {
      // 로딩 상태 종료
      // setLoading(false);
    }

  };

  useEffect(() => {
    const fetchGroupMemberList = async () => {
      try {
        const dataUserProfile = await getGroupMember(groupId);
        setGroupMemberData(dataUserProfile);
      } catch (error) {
        // 에러 처리: 콘솔에 에러 메시지 출력
        console.error('그룹원 데이터 불러오기 실패:', error);
      } finally {
        // 로딩 상태 종료
        // setLoading(false);
      }
    };
    fetchGroupMemberList();
  }, [groupId]);

  return (
    <ModalForm isModalOpen={true} method="post" onSubmit={handleSubmit}>
      <CancelIcon
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
        }}
        type='button'
        onClick={onClose}
      />

      <ModalContentWrapper>
        <ModalHeader>
          <CategoryMainTitle>평가하기</CategoryMainTitle>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--black900)' }}>파이널 프로젝트 - 지금 2조</p>
          <Modaldescription
            style={{ textAlign: 'center', marginBottom: '0px' }}>
            결과는 평가 지표에 반영됩니다!<br />성실하게 입력해주세요
          </Modaldescription>
        </ModalHeader>

        {/*  */}
        <ChangeColumn320px style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ProfileIcon
            // userId={profileData?.id}
            // reportTopicText={"USER"}
            // targetUserId={groupPostData?.leaderUser?.userId}
            // src={groupPostData?.leaderUser?.userProfileImg}
            // alt="Profile"
            DropdownContainerStyle={{ width: '150px' }}
            userNameStyle={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            허gjjjjjjjjjjjjjjjjjhjjjjjjjjjjjjjjjjjj
          </ProfileIcon>
          {/* [질문[수정중O]]-완료 & 취소 버튼 */}
          <TripleButton
            leftButtonType={"button"}
            leftButtonOnClick={handleClickGood}
            centerButtonType={"button"}
            centerButtonOnClick={handleClickSoso}
            rightButtonType={"button"}
            rightButtonOnClick={handleClickBad}
            selecting={activityRating}
          />
        </ChangeColumn320px>

        <ButtonContainer>
          <Violet500LineButton
            type='submit'
            style={{ margin: '0 auto' }}>
            제출하기
          </Violet500LineButton>
        </ButtonContainer>
      </ModalContentWrapper>
    </ModalForm >
  );
};

export default EvaluationModal;

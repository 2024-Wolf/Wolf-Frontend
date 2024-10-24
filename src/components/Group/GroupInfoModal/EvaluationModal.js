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
  Hr,
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
import InputTextNoCss from "../../Input/InputTextNoCss";
import { useNavigate } from "react-router-dom";


const ProfileWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  span {
    color: var(--black700);
  }
  p {
    color: var(--black300);
    font-size: 12px;
  }
`;

const EvaluationModal = ({ onClose, onSubmit, applicant, isView, optionalRequirements, userId, groupId }) => {
  const [isPortfolioValid, setIsPortfolioValid] = useState(true); // 포트폴리오 링크 입력했는지 검증하는 상태
  const [isDayValid, setIsDayValid] = useState(true); // 요일 입력했는지 검증하는 상태
  const [isSelectRoldValid, setIsSelectRoldValid] = useState(true); // 지원직군 선택했는지 검증하는 상태
  const [isPortfolioTextValid, setIsPortfolioTextValid] = useState(true); // 지원직군 선택했는지 검증하는 상태

  const [buttonStatus, setButtonStatus] = useState("");
  const [linkButtonDisable, setLinkButtonDisable] = useState(false);
  const [activityRating, setActivityRating] = useState('');

  const [modalData, setModalData] = useState([]);
  const [groupMemberData, setGroupMemberData] = useState([]);

  const navigate = useNavigate();

  const handleClickGood = (memberId) => {
    setActivityRating('good');
    setModalData((prev) => {
      const existingMember = prev.find((member) => member.memberId === memberId);
      if (existingMember) {
        // 기존 데이터가 있다면 업데이트
        return prev.map((member) =>
          member.memberId === memberId ? { ...member, rate: 'good' } : member
        );
      } else {
        // 새로운 데이터 추가
        return [...prev, { memberId: memberId, rate: 'good' }];
      }
    });
  };

  const handleClickSoso = (memberId) => {
    setActivityRating('soso');
    setModalData((prev) => {
      const existingMember = prev.find((member) => member.memberId === memberId);
      if (existingMember) {
        // 기존 데이터가 있다면 업데이트
        return prev.map((member) =>
          member.memberId === memberId ? { ...member, rate: 'soso' } : member
        );
      } else {
        // 새로운 데이터 추가
        return [...prev, { memberId: memberId, rate: 'soso' }];
      }
    });
  };

  const handleClickBad = (memberId) => {
    setActivityRating('bad');
    setModalData((prev) => {
      const existingMember = prev.find((member) => member.memberId === memberId);
      if (existingMember) {
        // 기존 데이터가 있다면 업데이트
        return prev.map((member) =>
          member.memberId === memberId ? { ...member, rate: 'bad' } : member
        );
      } else {
        // 새로운 데이터 추가
        return [...prev, { memberId: memberId, rate: 'bad' }];
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredMembers = groupMemberData.filter(groupMember =>
      groupMember?.groupUser?.userId !== userId
    );

    if (modalData?.length !== filteredMembers?.length) {
      alert('모든 그룹원에 대해 평가를 선택해주세요')
      return
    }

    try {
      await postEvaluate(groupId, modalData);

      alert('그릅원 평가가 제출되었습니다');
      navigate('/');
    } catch (error) {
      // 에러 처리: 콘솔에 에러 메시지 출력
      console.error('그룹원 평가하기 제출 실패:', error);
    } finally {
      // 로딩 상태 종료
      // setLoading(false);
    }
  };

  useEffect(() => {
    const fetchGroupMemberList = async () => {
      try {
        // groupId
        const dataUserProfile = await getGroupMember(groupId);
        setGroupMemberData(dataUserProfile.data);
        { console.log(groupId, dataUserProfile.data) }
      } catch (error) {
        // 에러 처리: 콘솔에 에러 메시지 출력
        console.error('그룹원 데이터 불러오기 실패:', error);
      } finally {
        // 로딩 상태 종료
        // setLoading(false);
      }
    };
    fetchGroupMemberList();
  }, []);

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
        {groupMemberData?.map((groupMember) => {
          return (
            <>
              <ChangeColumn320px style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ProfileWrapper>
                  <ProfileIcon
                    key={groupMember?.groupUser?.userId}
                    userId={userId}
                    reportTopicText={"USER"}
                    targetUserId={groupMember?.groupUser?.userId}
                    src={groupMember?.groupUser?.userProfileImg}
                    alt="Profile"
                    DropdownContainerStyle={{ width: '150px' }}
                    wrapperStyle={{ overflow: 'hidden' }}
                    userNameStyle={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      padding: '5px 0'
                    }}
                  >
                    {groupMember.groupUser.userNickname}
                  </ProfileIcon>
                  <p>{groupMember.role}</p>
                </ProfileWrapper>
                {(groupMember?.groupUser?.userId == userId) ? <>
                  <InputTextNoCss value="본인" style={{ textAlign: 'center' }} />
                </> : <>
                  {/* 그룹원 평가 버튼 */}
                  <TripleButton
                    leftButtonType={"button"}
                    leftButtonOnClick={() => handleClickGood(groupMember?.id)} // 함수 참조
                    centerButtonType={"button"}
                    centerButtonOnClick={() => handleClickSoso(groupMember?.id)} // 함수 참조
                    rightButtonType={"button"}
                    rightButtonOnClick={() => handleClickBad(groupMember?.id)} // 함수 참조
                    selecting={modalData?.find((member) => member.memberId === groupMember?.id)?.rate || ''} // 수정된 부분
                  />
                </>}
              </ChangeColumn320px>
              <Hr />
            </>
          );
        })}


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

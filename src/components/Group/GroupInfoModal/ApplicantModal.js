import styled from "styled-components";
import axios from "axios";
import {
  Black200BackgroundButton,
  ButtonContainer,
  ModalContentWrapper,
  ModalHeader,
  CategoryMainTitle,
  Violet500LineButton,
  Violet500LineDiv,
  Modaldescription,
  ButtonGroupWrap,
  Violet500BackgroundButton,
  RedLineButton, Label,
  BlueViolet600BackgroundButton, ChangeColumn768px, Row, Div
} from "../../GlobalStyledComponents";

import React, { useState, useEffect } from "react";
import CancelIcon from "../../Icon/CancelIcon";
import InputTextBlackLine from "../../Input/InputTextBlackLine";
import TextAreaBlackLine from "../../Input/TextAreaBlackLine";
import SelectButtonBlackLine from "../../Button/SelectButtonBlackLine";
import TextAreaNoCss from "../../Input/TextAreaNoCss";
import ModalForm from "../../Modal/ModalForm";
import FormFieldSingle from "../GroupComponent/FormFieldSingle";
import FormCheckBoxButton from "../../Button/FormCheckBoxButtonBlackLine";
import CopyButton from "../../Button/CopyButton";
import { applyGroup, changeApplyStatus, getApplicantDetail } from "../../Apis/GroupPostApi";

const ApplicantModal = ({ onClose, onSubmit, applicantId, groupPostId, isView, optionalRequirements, fetchGroupApplicantData }) => {

  const [isPortfolioValid, setIsPortfolioValid] = useState(true); // 포트폴리오 링크 입력했는지 검증하는 상태
  const [isDayValid, setIsDayValid] = useState(true); // 요일 입력했는지 검증하는 상태
  const [isSelectRoleValid, setIsSelectRoleValid] = useState(true); // 지원직군 선택했는지 검증하는 상태
  const [isPortfolioTextValid, setIsPortfolioTextValid] = useState(true); // 지원직군 선택했는지 검증하는 상태

  const [buttonStatus, setButtonStatus] = useState("");
  const [linkButtonDisable, setLinkButtonDisable] = useState(false);

  const [modalData, setModalData] = useState({
    name: "",
    email: "",
    position: "",
    reason: "",
    portfolioLink: "",
    introduce: "",
    freeEntry: "",
    day: [],
    techStack: "",
  });

  useEffect(() => {
    async function fetchApplicant() {
      const response = await getApplicantDetail(applicantId);
      setModalData({
        name: response.data.name,
        email: response.data.email,
        position: response.data.position.toLowerCase(),
        reason: response.data.applicationReason,
        portfolioLink: response.data.portfolioLink,
        introduce: response.data.introduction,
        day: response.data.availableDays.split(","),
        techStack: response.data.techStack,
        freeEntry: response.data.additionalNotes
      });
    }

    if (isView) {
      fetchApplicant();
    }
  }, []);

  //전송 api
  ///post/{postId}/apply
  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(modalData);

    switch (buttonStatus) {
      case "지원하기":
        if (modalData.position === '' || !linkButtonDisable) {
          alert('모든 양식을 입력하세요');
          if (optionalRequirements.includes("참여 가능 요일") && modalData.day.length === 0) {
            setIsDayValid(false); // 요일 체크박스 안내멘트 출력
          } else {
            setIsDayValid(true); // 요일 체크박스 안내멘트 출력
          }
          if (modalData.position === '') {
            setIsSelectRoleValid(false); // 직군 선택 항목 안내멘트 출력
          } else {
            setIsSelectRoleValid(true); // 직군 선택 항목 안내멘트 출력
          }
          if (!linkButtonDisable) {
            setIsPortfolioTextValid(false);  // 포트폴리오 링크를 등록하라는 멘트 출력
          } else {
            setIsPortfolioTextValid(true);  // 포트폴리오 링크를 등록하라는 멘트 출력
          }
        } else {
          applyGroup(groupPostId, modalData)
            .then(function (response) {
              if (response.status < 200 || response.status > 300) {
                alert(response.message);
                return;
              }
              alert('지원하기 폼이 제출되었습니다');
              setIsDayValid(true);  // 유효성 검사 초기화
              setIsSelectRoleValid(true); // 유효성 검사 초기화
              onClose();
            });
        }
        break;
      case "지원승인":
        changeApplyStatus(applicantId, "ACCEPTED")
          .then(function (response) {
            window.location.reload();
            alert("지원승인");
            // 모달창 닫기
            onClose();
          });
        break;
      case "지원거절":
        changeApplyStatus(applicantId, "REJECTED")
          .then(function (response) {
            fetchGroupApplicantData();
            alert("지원거절");
            // 모달창 닫기
            onClose();
          });
        break;
    }
  };

  const handlePortfolio = (e) => {
    e.preventDefault();

    // 포트폴리오 링크 URL 유효성 검사
    const isValidURL = (urlString) => {
      try {
        const url = new URL(urlString);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch (_) {
        return false;
      }
    };

    const isValidLink = isValidURL(modalData.portfolioLink);
    setIsPortfolioValid(isValidLink); // 상태 업데이트

    if (isValidLink) {
      alert("포트폴리오 링크가 등록되었습니다:", modalData.portfolioLink);
      setLinkButtonDisable(true);
      setIsPortfolioTextValid(true);
    } else {
      alert("유효한 링크를 입력하세요");
    }
  };
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
          <CategoryMainTitle>{isView ? (<>지원글 확인하기</>) : (<>지원하기</>)}</CategoryMainTitle>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--black900)' }}>파이널 프로젝트 - 지금 2조</p>
          {isView ? (
            <></>
          ) : (
            <Modaldescription
              style={{ textAlign: 'center', marginBottom: '0px' }}>
              각 항목은 필수 입력입니다!<br />성실하게 작성 할수록 참여 승인이 잘 됩니다
            </Modaldescription>

          )}
        </ModalHeader>

        {/* 이름 */}
        <Div>
          <Label>이름</Label>
          <InputTextBlackLine
            readOnly={isView}
            type="text"
            placeholder="이름을 입력하세요"
            value={modalData.name}
            onChange={(e) =>
              setModalData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </Div>

        <ChangeColumn768px>
          <Div>
            <Label>이메일</Label>
            <InputTextBlackLine
              readOnly={isView}
              type="email"
              value={modalData.email}
              onChange={(e) =>
                setModalData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="이메일을 입력하세요"
              required
            />
          </Div>

          <Div>
            <Label>지원직군</Label>
            {!isSelectRoleValid &&
              <span
                style={{
                  fontSize: '13px', color: '#ED4E51'
                }}>
                지원직군을 선택하세요
              </span>
            }
            <SelectButtonBlackLine
              disabled={isView}
              value={modalData.position}
              onChange={(e) =>
                setModalData((prev) => ({ ...prev, position: e.target.value }))
              }
              required
              style={{ width: '100%' }}
            >
              <option value="" disabled>
                선택하세요
              </option>
              <option value="frontend">프론트엔드개발자</option>
              <option value="backend">백엔드개발자</option>
              <option value="planner">기획자</option>
              <option value="designer">디자이너</option>
            </SelectButtonBlackLine>
          </Div>
        </ChangeColumn768px>

        <Div>
          <Label>자기소개</Label>
          <TextAreaBlackLine
            readOnly={isView}
            rows="5"
            cols="30"
            placeholder="자기소개를 입력하세요"
            value={modalData.introduce}
            onChange={(e) =>
              setModalData((prev) => ({
                ...prev,
                introduce: e.target.value,
              }))
            }
            required={optionalRequirements.includes("자기소개")}
          />
        </Div>
        <Div>
          <Label>자유기재</Label>
          <TextAreaBlackLine
            readOnly={isView}
            rows="5"
            cols="30"
            placeholder="자유롭게 내용을 입력하세요"
            value={modalData.additionalNotes}
            onChange={(e) =>
              setModalData((prev) => ({
                ...prev,
                additionalNotes: e.target.value,
              }))
            }
            required={optionalRequirements.includes("자유기재")}
          />
        </Div>
        <Div>
          <Label>참여 가능 요일</Label>
          {!isDayValid &&
            <span
              style={{
                fontSize: '13px', color: '#ED4E51'
              }}>
              한 개 이상의 요일을 선택하세요
            </span>
          }
          <ButtonGroupWrap>
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
              <FormCheckBoxButton
                key={"day-" + index}
                name="day"
                value={day}
                checked={modalData.day.includes(day)}
                disabled={isView}
                onChange={(e) => {
                  setModalData((prev) => ({
                    ...prev,
                    day: e.target.checked
                      ? [...prev.day, e.target.value] // 체크 시 배열에 추가
                      : prev.day.filter((day) => day !== e.target.value), // 체크 해제시 배열에서 제거
                  }));
                }
                }
              >
                {day}
              </FormCheckBoxButton>
            ))}
          </ButtonGroupWrap>
        </Div>
        <Div>
          <Label>다룰 수 있는 언어</Label>
          <InputTextBlackLine
            readOnly={isView}
            type="text"
            value={modalData.techStack}
            onChange={(e) =>
              setModalData((prev) => ({
                ...prev,
                techStack: e.target.value,
              }))
            }
            placeholder="다룰 수 있는 언어를 입력하세요"
            required={optionalRequirements.includes("다룰 수 있는 언어")}
          />
        </Div>

        <Div>
          <Label>지원사유</Label>
          <TextAreaBlackLine
            readOnly={isView}
            rows="5"
            cols="30"
            placeholder="지원사유를 입력하세요"
            value={modalData.reason}
            onChange={(e) =>
              setModalData((prev) => ({ ...prev, reason: e.target.value }))
            }
            required
          />
        </Div>

        <Row>
          <Div>
            <Label>포트폴리오 링크</Label>
            {!isPortfolioTextValid &&
              <span
                style={{
                  fontSize: '13px', color: '#ED4E51'
                }}>
                포트폴리오 링크를 등록하세요
              </span>
            }
            {!isPortfolioValid &&
              <span
                style={{
                  fontSize: '13px', color: '#ED4E51'
                }}>
                유효한 포트폴리오 링크를 입력하세요
              </span>
            }
            <InputTextBlackLine
              readOnly={isView}
              type="url"
              placeholder="링크를 등록하세요"
              value={modalData.portfolioLink}
              onChange={(e) =>
                setModalData((prev) => ({
                  ...prev,
                  portfolioLink: e.target.value,
                }))
              }
              disabled={linkButtonDisable}
              required={optionalRequirements.includes("포트폴리오 링크")}
            />
          </Div>
          {isView ? (
            <>
              <CopyButton copyTarget={modalData.portfolioLink}>
              </CopyButton>
            </>
          ) : (
            linkButtonDisable ? (
              <>
                <Black200BackgroundButton
                  type="button"
                  onClick={(e) => {
                    setLinkButtonDisable(false)
                    setModalData((prev) => ({
                      ...prev,
                      portfolioLink: "",
                    }))
                  }}
                >
                  취소
                </Black200BackgroundButton>
              </>
            ) : (
              <>
                <Violet500BackgroundButton
                  type="button"
                  onClick={handlePortfolio}
                  disabled={linkButtonDisable}
                >
                  등록
                </Violet500BackgroundButton>
              </>
            )
          )}

        </Row>


        {/* 프로젝트 유의사항 */}
        <Violet500LineDiv
          style={{ background: 'var(--violet500)', color: 'var(--violet000)', gap: '0px' }}
        >
          <FormFieldSingle
            labelStyle={{ color: 'var(--violet000)', minWidth: '80px' }}
            FormLabelGroupStyle={{ marginTop: '0px' }}
            label={"프로젝트 유의사항"}>
          </FormFieldSingle>
          <TextAreaNoCss
            style={{ background: 'var(--violet500)', color: 'var(--violet000)' }}
            value={
              `- 도중 이탈 시 평가지표에 불이익을 줄 수 있음.`
            }
          />
        </Violet500LineDiv>
        <ButtonContainer>
          {isView ? (
            <>
              <BlueViolet600BackgroundButton
                onClick={() => setButtonStatus("지원승인")}
                type="submit"
              >
                승인
              </BlueViolet600BackgroundButton>

              <RedLineButton
                onClick={() => setButtonStatus("지원거절")}
                type="submit"
              >
                거절
              </RedLineButton>
            </>
          ) : (
            <>
              <Violet500LineButton
                type='submit'
                onClick={() => setButtonStatus("지원하기")}
                style={{ margin: '0 auto' }}>
                지원하기
              </Violet500LineButton>
            </>
          )}
        </ButtonContainer>
      </ModalContentWrapper>
    </ModalForm >
  );
};

export default ApplicantModal;

import styled from "styled-components";
import axios from "axios";
import {
  Black200BackgroundButton,
  ModalBackground,
  ModalContainer4,
  TitleDiv,
  Category3,
  SubTitle,
  PortfolioRow,
  InputField,
  SelectField,
  TextArea3,
  Button,
  ButtonContainer,
  Row2,
  NoticeDiv,
  ModalContentWrapper,
  ModalHeader,
  CategoryMainTitle,
  Violet500LineButton,
  Violet500LineDiv,
  Modaldescription,
  ButtonGroupWrap,
  Violet500BackgroundButton,
} from "../../GlobalStyledComponents";

import React, { useState } from "react";
import CancelIcon from "../../Icon/CancelIcon";
import InputTextBlackLine from "../../Input/InputTextBlackLine";
import TextAreaBlackLine from "../../Input/TextAreaBlackLine";
import SelectButtonBlackLine from "../../Button/SelectButtonBlackLine";
import TextAreaNoCss from "../../Input/TextAreaNoCss";
import ModalForm from "../../Modal/ModalForm";
import FormFieldSingle from "../GroupComponent/FormFieldSingle";
import InputText from "../../Input/InputText";
import FormOptionButton from "../../Button/FormOptionButton";
import FormCheckBoxButton from "../../Button/FormCheckBoxButtonBlackLine";

// components/Group/GroupInfoModal/ApplicantModal.js
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  color: var(--black700);
  width: 100%;
  align-items: start;
`;

const Label = styled.label`
    width: 100%;
    min-width: auto;
    justify-content: start;
    font-size: 16px;
    text-wrap: nowrap;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: var(--black600);
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: end;
  justify-content: center;
`;

const ChangeColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: end;
  justify-content: center;

  @media (max-width: 768px) {
      flex-direction: column;
  }

  @media (max-width: 480px) {

  }
`;

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

const ApplicantModal = ({ onClose, onSubmit, applicant, isView }) => {
  const [isPortfolioValid, setIsPortfolioValid] = useState(true); // 포트폴리오 링크 입력했는지 검증하는 상태
  const [isDayValid, setIsDayValid] = useState(true); // 요일 입력했는지 검증하는 상태
  const [isSelectRoldValid, setIsSelectRoldValid] = useState(true); // 지원직군 선택했는지 검증하는 상태
  const [isPortfolioTextValid, setIsPortfolioTextValid] = useState(true); // 지원직군 선택했는지 검증하는 상태

  const [buttonStatus, setButtonStatus] = useState("");
  const [linkButtonDisable, setLinkButtonDisable] = useState(false);

  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지상태 추가
  const [checkedDays, setCheckedDays] = useState([]);
  const [showError, setShowError] = useState(false);

  const [modalData, setModalData] = useState(
    applicant || {
      name: "",
      email: "",
      role: "",
      reason: "",
      portfolioLink: "",
      date: "",
      introduce: "",
      freeEntry: "",
      day: [],
      language: "",
    }
  );


  //전송 api
  ///post/{postId}/apply
  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (buttonStatus) {
      case "지원하기":
        if (modalData.day.length === 0 || modalData.role === '' || !linkButtonDisable) {
          alert('모든 양식을 입력하세요');
          if (modalData.day.length === 0) {
            setIsDayValid(false); // 요일 체크박스 안내멘트 출력
          }
          if (modalData.role === '') {
            setIsSelectRoldValid(false); // 직군 선택 항목 안내멘트 출력
          }
          if (!linkButtonDisable) {
            setIsPortfolioTextValid(false);  // 포트폴리오 링크를 등록하라는 멘트 출력
          }
        } else {
          alert('지원하기 폼이 제출되었습니다');
          setIsDayValid(true);  // 유효성 검사 초기화
          setIsSelectRoldValid(true); // 유효성 검사 초기화
          try {
            const formData = new FormData();
            formData.append("name", modalData.name);
            formData.append("email", modalData.email);
            formData.append("role", modalData.role);
            formData.append("reason", modalData.reason);
            formData.append("portfolioLink", modalData.portfolioLink);
            formData.append("date", modalData.date);
            formData.append("introduce", modalData.introduce);
            formData.append("freeEntry", modalData.freeEntry);
            formData.append("day", modalData.day);
            formData.append("language", modalData.language);

            const response = await axios.post(
              `http://localhost:3000/post/{postId}/apply`,
              formData
            );
            // 성공 시 처리
            alert("지원하기 완료");
          } catch (error) {
            // 에러 발생 시 처리
            console.error(
              "요청 실패:",
              error.response ? error.response.data : error.message
            );
            alert("지원하기에 실패했습니다. 다시 시도해주세요.");
          }
        }
        break;
      case "지원승인":
        alert("지원승인");
        break;
      case "지원거절":
        alert("지원거절");
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





  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedDays((prev) =>
      checked ? [...prev, value] : prev.filter((day) => day !== value)
    );
    setShowError(false);
  };

  // const toggleButtonClick = (index) => {
  //   setNewFormData(prevState => {
  //     const newButtons = prevState.buttons.map((button, idx) =>
  //       idx === index ? { ...button, clicked: !button.clicked } : button
  //     );
  //     return { ...prevState, buttons: newButtons };
  //   });
  // };

  // const handleButtonClick = (e) => {
  //   if (
  //     !modalData.name ||
  //     !modalData.email ||
  //     !modalData.role ||
  //     !modalData.reason ||
  //     !modalData.portfolioLink
  //   ) {
  //     e.preventDefault(); // form 제출 막기
  //     setErrorMessage("빈칸을 모두 작성해주세요.");
  //   } else {
  //     setErrorMessage(""); // 조건이 충족되면 에러 메시지 초기화
  //   }
  // };

  //input, 포트폴리오 링크등록버튼, 지원하기
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
          <CategoryMainTitle>{isView ? (<>지원 글 확인하기</>) : (<>지원하기</>)}</CategoryMainTitle>
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

        <ChangeColumn>
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
            {!isSelectRoldValid &&
              <span
                style={{
                  fontSize: '13px', color: '#ED4E51'
                }}>
                직군을 선택하세요
              </span>
            }
            <SelectButtonBlackLine
              disabled={isView}
              value={modalData.role}
              onChange={(e) =>
                setModalData((prev) => ({ ...prev, role: e.target.value }))
              }
              required
              style={{ width: '100%' }}
            >
              <option value="" disabled>
                선택하세요
              </option>
              <option value="frontEnd">프론트엔드개발자</option>
              <option value="backEnd">백엔드개발자</option>
              <option value="planner">기획자</option>
              <option value="designer">디자이너</option>
            </SelectButtonBlackLine>
          </Div>
        </ChangeColumn>

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
            required
          />
        </Div>
        <Div>
          <Label>자유기재</Label>
          <TextAreaBlackLine
            readOnly={isView}
            rows="5"
            cols="30"
            placeholder="자유롭게 내용을 입력하세요"
            value={modalData.freeEntry}
            onChange={(e) =>
              setModalData((prev) => ({
                ...prev,
                freeEntry: e.target.value,
              }))
            }
            required
          />
        </Div>
        <Div>
          <Label>참여가능 요일</Label>
          {!isDayValid &&
            <span
              style={{
                fontSize: '13px', color: '#ED4E51'
              }}>
              하나 이상의 요일을 선택하세요
            </span>
          }
          <ButtonGroupWrap>
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
              <FormCheckBoxButton
                key={"day-" + index}
                name="day"
                value={day}
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
            value={modalData.language}
            onChange={(e) =>
              setModalData((prev) => ({
                ...prev,
                language: e.target.value,
              }))
            }
            placeholder="다룰 수 있는 언어를 입력하세요"
            required
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
              placeholder="링크를 등록하asd세요"
              value={modalData.portfolioLink}
              onChange={(e) =>
                setModalData((prev) => ({
                  ...prev,
                  portfolioLink: e.target.value,
                }))
              }
              disabled={linkButtonDisable}
              required
            />
          </Div>

          {isView ? (
            <></>
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
              <Black200BackgroundButton
                onClick={() => setButtonStatus("지원승인")}
                type="submit"
              >
                승인
              </Black200BackgroundButton>
              <Black200BackgroundButton
                onClick={() => setButtonStatus("지원거절")}
                type="submit"
              >
                거절
              </Black200BackgroundButton>
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

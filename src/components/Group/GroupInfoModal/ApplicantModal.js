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
} from "../../GlobalStyledComponents";

import React, { useState } from "react";
import CancelIcon from "../../Icon/CancelIcon";
import InputTextBlackLine from "../../Input/InputTextBlackLine";
import TextAreaBlackLine from "../../Input/TextAreaBlackLine";
import SelectButtonBlackLine from "../../Button/SelectButtonBlackLine";
import TextAreaNoCss from "../../Input/TextAreaNoCss";

// components/Group/GroupInfoModal/ApplicantModal.js
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: end;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  width: 80%;
  max-width: 700px;
  min-height: auto;
  margin: 20px;
`;

const ApplicantModal = ({ onClose, onSubmit, applicant, isView }) => {
  const [isPortfolioValid, setIsPortfolioValid] = useState(true); // 포트폴리오 유효성 상태 추가
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지상태 추가
  const [modalData, setModalData] = useState(
    applicant || {
      name: "",
      email: "",
      role: "",
      reason: "",
      portfolioLink: "",
      date: "",
    }
  );
  const [buttonStatus, setButtonStatus] = useState("");
  const [isValid, setIsValid] = useState(false);

  //전송 api
  ///post/{postId}/apply
  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (buttonStatus) {
      case "지원하기":
        // handleButtonClick(); // 클릭 시 에러 메시지 처리
        if (isValid) {
          alert("지원하기");
        }
        break;
      case "지원승인":
        alert("지원승인");
        break;
      case "지원거절":
        alert("지원거절");
        break;
    }

    try {
      const formData = new FormData();
      formData.append("name", modalData.name);
      formData.append("email", modalData.email);
      formData.append("role", modalData.role);
      formData.append("reason", modalData.reason);
      formData.append("portfolioLink", modalData.portfolioLink);

      const response = await axios.post(
        `http://localhost:3000/post/{postId}/apply`,
        formData
      );

      // 성공 시 처리
      console.log("요청 성공:", response.data);
      alert("지원하기 완료");
    } catch (error) {
      // 에러 발생 시 처리
      console.error(
        "요청 실패:",
        error.response ? error.response.data : error.message
      );
      alert("지원하기에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handlePortfolio = (e) => {
    e.preventDefault();
    // 포트폴리오 링크 유효성 검사
    setIsValid(
      modalData.portfolioLink.startsWith("http://") ||
      modalData.portfolioLink.startsWith("https://")
    );
    setIsPortfolioValid(isValid);

    if (isValid) {
      alert("포트폴리오 링크가 등록되었습니다:", modalData.portfolioLink);
    } else {
      alert("유효한 포트폴리오 링크를 입력하세요.");
    }
  };

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
    <ModalBackground>
      <FormContainer method="post" onSubmit={handleSubmit}>
        <CancelIcon
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
          }}
          onClick={onClose}
        />
        <TitleDiv>프로젝트</TitleDiv>
        <Category3>파이널 프로젝트 - 지금 2조</Category3>

        {isView ? (
          <TextAreaNoCss
            value={""}
            style={{ textAlign: "center", lineHeight: "1.2", padding: "0px" }}
          ></TextAreaNoCss>
        ) : (
          <TextAreaNoCss
            value={
              "이메일, 지원직군, 지원사유는 필수 입력 값입니다!\n성실하게 작성 할수록 참여 승인이 잘 됩니다."
            }
            style={{ textAlign: "center", lineHeight: "1.2", padding: "0px" }}
          ></TextAreaNoCss>
        )}

        <Div>
          <label>이름</label>
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

        <Row>
          <Div>
            <label>이메일</label>
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
            <label>지원직군</label>
            <SelectButtonBlackLine
              disabled={isView}
              value={modalData.role}
              onChange={(e) =>
                setModalData((prev) => ({ ...prev, role: e.target.value }))
              }
              required
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
        </Row>
        <Div>
          <label>지원사유</label>
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
            <label>포트폴리오 링크</label>
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
              required
            />
          </Div>

          {isView ? (
            <></>
          ) : (
            <Black200BackgroundButton onClick={handlePortfolio}>
              등록
            </Black200BackgroundButton>
          )}
        </Row>
        {!isPortfolioValid && (
          <div style={{ color: "red" }}>
            유효한 포트폴리오 링크를 입력하세요.
          </div>
        )}

        <NoticeDiv>
          프로젝트 유의사항 <br />
          - 도중 이탈 시 평가지표의 불이익을 줄 수 있음. <br />
        </NoticeDiv>

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
              <Black200BackgroundButton
                type="submit"
                onClick={() => setButtonStatus("지원하기")}
              >
                지원하기
              </Black200BackgroundButton>
            </>
          )}
        </ButtonContainer>

        {/* 에러 메시지를 보여주는 부분 */}
        {errorMessage && (
          <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
        )}
      </FormContainer>
    </ModalBackground>
  );
};

export default ApplicantModal;

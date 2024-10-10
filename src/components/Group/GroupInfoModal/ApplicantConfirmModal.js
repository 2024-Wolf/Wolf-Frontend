import React from "react";
import styled from "styled-components";
import {
  ModalBackground,
  ModalContainer4,
  Title7,
  Category3,
  PortfolioRow,
  InputField,
  SelectField,
  TextArea3,
  ButtonContainer,
  Button,
  Row2,
  NoticeDiv,
} from "../../GlobalStyledComponents";

const ApplicantConfirmModal = ({ onClose, applicant }) => {
  return (
    <ModalBackground>
      <form method="post">
        <ModalContainer4>
          <Title7>프로젝트</Title7>
          <Category3>파이널 프로젝트 - 지금 2조</Category3>

          <div>
            <div>
              <label>이름</label>
              <InputField
                type="text"
                placeholder="이름"
                value={applicant.name}
                readOnly
              />
            </div>

            <Row2>
              <div>
                <label>이메일</label>
                <InputField
                  type="email"
                  placeholder="이메일"
                  value={applicant.email}
                  readOnly
                />
              </div>

              <div>
                <label>지원직군</label>
                <SelectField value={applicant.role} disabled>
                  <option value={applicant.role}>{applicant.role}</option>
                </SelectField>
              </div>
            </Row2>
          </div>
          <div>
            <label>지원 사유</label>
            <TextArea3 rows="5" cols="30" value={applicant.reason} readOnly />
          </div>

          <PortfolioRow>
            <label>포트폴리오</label>
            <InputField type="url" value={applicant.portfolioLink} readOnly />
          </PortfolioRow>

          <NoticeDiv>
            프로젝트 유의사항 <br />
            - 도중 이탈 시 평가지표의 불이익을 줄 수 있음. <br />
          </NoticeDiv>

          <ButtonContainer>
            <Button type="submit">승인</Button>
            <Button onClick={onClose}>거절</Button>
          </ButtonContainer>
        </ModalContainer4>
      </form>
    </ModalBackground>
  );
};

export default ApplicantConfirmModal;

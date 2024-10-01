import React from "react";
import styled from "styled-components";
import { ModalBackground, ModalContainer4, Title7, Category3, PortfolioRow, InputField, SelectField, TextArea3, ButtonContainer, Button8, Row2, NoticeDiv } from "../../GlobalStyledComponents";



const MeetingApplicant = ({ onClose }) => {
    const handlePortfolio = (e) => {
        e.preventDefault();
    };
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
                                required
                            />
                        </div>

                        <Row2>
                            <div>
                                <label>이메일</label>
                                <InputField
                                    type="email"
                                    placeholder="이메일"
                                    required
                                />
                            </div>

                            <div>
                                <label>지원직군</label>
                                <SelectField defaultValue="" required>
                                    <option value="frontEnd">
                                        프론트엔드개발자
                                    </option>
                                    <option value="backEnd">
                                        백엔드개발자
                                    </option>
                                    <option value="planner">기획자</option>
                                    <option value="designer">디자이너</option>
                                </SelectField>
                            </div>
                        </Row2>
                    </div>
                    <div>
                        <label>지원 사유</label>
                        <TextArea3
                            rows="5"
                            cols="30"
                            placeholder="지원사유를 입력하세요"
                            required
                        />
                    </div>

                    <PortfolioRow>
                        <label>포트폴리오 링크</label>
                        <InputField
                            type="url"
                            placeholder="링크를 등록하세요"
                            required
                        />
                        <Button8
                            onClick={handlePortfolio}
                        >
                            등록
                        </Button8>
                    </PortfolioRow>

                    <NoticeDiv>
                        프로젝트 유의사항 <br />
                        - 도중 이탈 시 평가지표의 불이익을 줄 수 있음. <br />
                    </NoticeDiv>

                    <ButtonContainer>
                        <Button8 type="submit">승인</Button8>
                        <Button8 onClick={onClose}>거절</Button8>
                    </ButtonContainer>
                </ModalContainer4>
            </form>
        </ModalBackground>
    );
};

export default MeetingApplicant;

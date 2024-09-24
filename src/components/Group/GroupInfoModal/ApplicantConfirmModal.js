import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
`;

const ModalContainer = styled.div`
    z-index: 1000;
    width: 90%; /* 화면에 삐져나가는 문제 해결을 위해 너비를 %로 설정 */
    max-width: 650px;
    height: 664px;
    background-color: #fcfcfc;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--violet500);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    width: 140px;
    margin-bottom: 20px;
    align-self: center; /* ModalContainer 안에서 세로 가운데 정렬 */
`;

const Category = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    align-self: center; /* ModalContainer 안에서 세로 가운데 정렬 */
`;


const PortfolioRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* 입력 칸과 버튼 사이의 간격 조절 */
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SelectField = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; /* 버튼들을 가로 가운데 정렬 */
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    white-space: nowrap;
    background-color: var(--violet500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: var(--violet300);
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px; /* 이메일과 지원직군 사이에 여백 추가 */
`;

const NoticeDiv = styled.div`
    margin: 30px 0 30px 0;
    background-color: var(--violet500);
    width: 100%;
    height: 500px;
    padding: 20px;
    line-height: 2;
    border-radius: 5px;
    color: white;
`;

const MeetingApplicant = ({ onClose }) => {
    const handlePortofolio = (e) => {
        e.preventDefault();
    };
    return (
        <ModalBackground>
            <form method="post">
                <ModalContainer>
                    <Title>프로젝트</Title>
                    <Category>파이널 프로젝트 - 지금 2조</Category>

                    <div>
                        <div>
                            <label>이름</label>
                            <InputField
                                type="text"
                                placeholder="이름"
                                required
                            />
                        </div>

                        <Row>
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
                        </Row>
                    </div>
                    <div>
                        <label>지원 사유</label>
                        <TextArea
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
                        <Button
                            onClick={handlePortofolio}
                        >
                            등록
                        </Button>
                    </PortfolioRow>

                    <NoticeDiv>
                        프로젝트 유의사항 <br />
                        - 도중 이탈 시 평가지표의 불이익을 줄 수 있음. <br />
                    </NoticeDiv>

                    <ButtonContainer>
                        <Button type="submit">승인</Button>
                        <Button onClick={onClose}>거절</Button>
                    </ButtonContainer>
                </ModalContainer>
            </form>
        </ModalBackground>
    );
};

export default MeetingApplicant;

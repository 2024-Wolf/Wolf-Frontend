import React from "react";
import styled from "styled-components";
import ChallengeListItem from "./ChallengeListItem";

const Container = styled.div`
    width: 95%;
    margin: 0px auto;
`;

const Category = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
`;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    gap: 50px;
    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        gap: 15px;
    }
`;

function ChallengeList(props){

    let items = ['제목1입니다.', '제목2입니다.', '제목3입니다.', '제목4입니다.', '제목5입니다.'];
    let category;
    let background;
    let buttonText;

    switch(props.category){
        case "진행중":
            category = '진행 중인 챌린지🔥';
            background = '#CEC6FF';
            buttonText = '인증 완료';
            break;
        case "완료":
            category = '완료된 챌린지';
            background = '#E2E3E3';
            buttonText = '결과 확인'
            break;
        default :
            category = '진행 가능한 챌린지✨';
            background = '#B3A8FF';
            buttonText = '참여하기';
            break;
    }    

    return(
        <Container>
            <Category style={{background:background}}>{category}</Category>
            <Items>
                {items.map((title, index) => (
                    <ChallengeListItem title={title} category={props.category} buttonText={buttonText} key={index} />
                ))}
            </Items>
        </Container>
    )
}

export default ChallengeList;
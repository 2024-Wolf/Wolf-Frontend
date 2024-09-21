import React, { useEffect } from "react";
import styled from "styled-components";
import WebFont from "webfontloader";

const Container = styled.div`
    width: 220px;
    height: 200px;
    border: 1px solid #838586;
    border-radius: 30px;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        border: 3px solid #111111;
    }
`;

const Top = styled.div`
    width: 100%;
    height: 50%;
    font-family: 'Kavoon', cursive;
    font-size: 35px;
    color: #666869;
    line-height: 90px;
`;

const Bottom = styled.div`
    width: 100%;
    height: 50%;
    padding-top: 10px;
`;

const Title = styled.div`
    width: 90%;
    height: 35%;
    color: #49494A;
    font-size: 18px;
    margin: 0px auto;
    text-align: center;
`;

const Date = styled.div`
    width: 90%;
    height: 20%;
    color: #838586;
    font-size: 11px;
    margin-bottom: 5px;
`;

const Button = styled.div`
    width: 85%;
    height: 30%;
    margin: 0px auto;
    background: #E5E1FF;
    border: 1px solid #9787FF;
    color: #49494A;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;

    &:hover{
        background: #B3A8FF;
        border: 1px solid #8578D8;
    }
`;

function ChallengeListItem(props){

    let topBgColor = props.category === '완료' ? '#B3B4B4' : '#F2F0FF';

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Kavoon']
          }
        });
      }, []);

    return(
        <Container onClick={()=>{alert("챌린지 아이템 클릭")}}>
            <Top style={{background:topBgColor}}>
                WOLF
            </Top>
            <Bottom>
                <Title>{props.title}</Title>
                <Date>
                    <span>등록일 | 2024.09.15</span>
                    <span style={{float: 'right', clear:'both'}}>마감일 | 2024.12.15</span>
                </Date>
                <Button onClick={(e)=>{e.stopPropagation(); alert(props.buttonText);}}>
                    {props.buttonText}
                </Button>
            </Bottom>
        </Container>
    )
}

export default ChallengeListItem;
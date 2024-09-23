import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import Profile from './Profile';
import Category from './Category';
import MiniIcon from "../Icon/MiniIcon";

const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 240px;
    height: 250px;
    border: 0.5px solid var(--black300);
    border-radius: 30px;
    background-color: #ffffff;
    position: relative;
    transition: transform 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    }

    /* 반응형 미디어 쿼리 */
    @media (max-width: 768px) {
        
        max-width: 200px; /* 태블릿 화면에서는 카드 크기를 줄임 */
        height: 220px;
    }

    @media (max-width: 480px) {
        justify-items: center;
        
        max-width: 160px; /* 모바일 화면에서는 카드 크기를 더 줄임 */
        height: 180px;
    }
`;

const CardBody = styled.div`
    width: 100%;
    padding: 10px;
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
    color: #838586;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 10px; /* 화면이 작을 때 텍스트 크기 줄임 */
    }

    @media (max-width: 480px) {
        font-size: 9px; /* 더 작은 화면에서는 더 줄임 */
    }
`;

const CardTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #333;
    text-align: left;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }

`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;
    padding-bottom: 8px;
    border-bottom: 1px solid #838586;

    @media (max-width: 768px) {
        gap: 3px;
    }

    @media (max-width: 480px) {
        gap: 2px;
    }
`;

const Card = ({ category, title, deadline, challenge, tags, icons, profile }) => {
    return (
        <CardContainer>
            <Category category={category} />
            <CardBody>
                <CardInfo>
                    <span>{`마감일 | ${deadline}`}</span>
                    {challenge && <span className="challenge">챌린지 포함🔥</span>}
                </CardInfo>
                <CardTitle>{title}</CardTitle>
                <Tags>
                    {icons.map((icon, idx) => (
                        <MiniIcon key={idx} src={icon.src} alt={icon.alt} />
                    ))}
                    {tags.map((tag, idx) => (
                        <Tag key={idx} tag ={tag}/>
                    ))}
                </Tags>
                <Profile imgSrc={profile.imgSrc} name={profile.name} />
            </CardBody>
        </CardContainer>
    );
};

export default Card;

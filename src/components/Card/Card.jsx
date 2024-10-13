import styled from 'styled-components';

import { CardInfo, CardTitle, CardContainer, Container3, Top, Bottom, Title5, Date, Button5 } from "../GlobalStyledComponents";

import React, { useEffect } from "react";
import Tag from './Tag';
import Profile from './Profile';
import CardThumbnail from './CardThumbnail';
import MiniIcon from "../Icon/MiniIcon";
import WebFont from "webfontloader";


// components/Card/Card.jsx
export const Date2 = styled.div`
    font-size: 12px;

    @media (max-width: 768px) {
        font-size: 11px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

// components/Card/Card.jsx
export const BottomInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

// components/Card/Card.jsx
export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 5px;
    padding-bottom: 10px;
    max-width:100%;
    height: 50px;
    border-bottom: 1px solid var(--black200);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
`;





// components/Card/Card.jsx
export const CardBody = styled.div`
    width: 100%;
    padding: 10px;
    height: 100%;
`;

// components/Card/Card.jsx
export const Button4 = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    background-color: var(--violet000);
    border: 1px solid var(--violet400);
    color: var(--black700);
    font-size: 12px;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
    }
`;

const Card = ({
    category, title, deadline, challenge, tags, icons, profile, applicationDate, joinDate, buttonText,
}) => {

    return (
        <>
            <CardContainer>
                <CardThumbnail category={category} />
                <CardBody>
                    <CardInfo>
                        <span>{`마감일 | ${deadline}`}</span>
                        {challenge && <span className="challenge">챌린지 포함🔥</span>}
                    </CardInfo>
                    <CardTitle>{title}</CardTitle>
                    <Tags>
                        {icons && icons.map((icon, idx) => (
                            <MiniIcon key={idx} src={icon.src} alt={icon.alt} />
                        ))}
                        {tags && tags.map((tag, idx) => (
                            <Tag key={idx} tag={tag} />
                        ))}
                    </Tags>
                    {profile ? (
                        <Profile imgSrc={profile.imgSrc} name={profile.name} />
                    ) : null
                    }
                    <BottomInfo>
                        {applicationDate ? (
                            <Date2>{`신청일: ${applicationDate}`}</Date2>
                        ) : joinDate ? (
                            <Date2>{`합류일: ${joinDate}`}</Date2>
                        ) : null}
                        {buttonText && <Button4>{buttonText}</Button4>}
                    </BottomInfo>
                </CardBody>
            </CardContainer>
        </>
    );
};

export default Card;

import styled from 'styled-components';
import { CardContainer, CardBody, CardInfo, CardTitle, Tags, BottomInfo, Date2, Button4 } from "../GlobalStyledComponents";

import React from 'react';
import Tag from './Tag';
import Profile from './Profile';
import Category from './Category';
import MiniIcon from "../Icon/MiniIcon";

const Card = ({ category, title, deadline, challenge, tags, icons, profile, applicationDate, joinDate, buttonText }) => {
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
    );
};

export default Card;

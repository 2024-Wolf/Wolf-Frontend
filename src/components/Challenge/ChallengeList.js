import { CardMapingContainer, CategoryTitle, MainCardParentContainer, MainCardListContainer } from "../GlobalStyledComponents";

import React from "react";
import ChallengeListItem from "./ChallengeListItem";


function ChallengeList(props) {   
    let category;
    let background;

    switch (props.category) {
        case "진행중":
            category = '진행 중인 챌린지🔥';
            background = 'var(--violet300)';
            break;
        case "완료":
            category = '완료된 챌린지';
            background = 'var(--black200)';
            break;
        default:
            category = '진행 가능한 챌린지 ✨';
            background = 'var(--violet400)';
            break;
    }

    return (
        <div style={{ width: '100%', display: 'flex', gap: '15px', flexDirection: 'column' }}>
            <CategoryTitle style={{ background: background }}>{category}</CategoryTitle>
                <MainCardParentContainer>
                    <MainCardListContainer>
                        {props.list.map((item) => (
                            <CardMapingContainer key={item.challenge_post_id}>
                                <ChallengeListItem
                                    item={item}
                                    fetchChallenges={props.fetchChallenges}
                                    setDetail={props.setDetail}
                                />
                            </CardMapingContainer>
                        ))}
                    </MainCardListContainer>
                </MainCardParentContainer>
        </div>
    )
}

export default ChallengeList;
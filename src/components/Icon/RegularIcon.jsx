import React from 'react';
import styled from "styled-components";

const IconContainer = styled.img`
    width: 28px;
    height: 28px;

   
    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 480px) {
        width: 18px;
        height: 18px; 
    }
`;


const RegularIcon = ({ src, alt }) => {
    return <IconContainer src={src} alt={alt}/>
};

export default RegularIcon;

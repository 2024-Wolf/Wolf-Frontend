import styled from "styled-components";

import React from 'react';

// components/Icon/MiniIcon.jsx
export const IconContainer = styled.img`
    width: 17px;
    height: 17px;
`;

const MiniIcon = ({ src, alt }) => {
    return <IconContainer src={src} alt={alt} />
};

export default MiniIcon;

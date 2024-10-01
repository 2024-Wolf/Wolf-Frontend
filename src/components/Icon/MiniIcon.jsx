import styled from "styled-components";
import { IconContainer } from "../GlobalStyledComponents";

import React from 'react';

const MiniIcon = ({ src, alt }) => {
    return <IconContainer src={src} alt={alt} />
};

export default MiniIcon;

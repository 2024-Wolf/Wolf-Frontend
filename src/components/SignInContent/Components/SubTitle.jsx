import styled from 'styled-components';
import { SubTitleWrapper } from "../../GlobalStyledComponents";

import React from 'react';


const SubTitle = ({ title }) => {
    return (
        <SubTitleWrapper>
            {title}
        </SubTitleWrapper>
    )
}

export default SubTitle;
import styled from 'styled-components';
import { TagContainer } from "../GlobalStyledComponents";

import React from 'react';

const Tag = ({ tag }) => {
    return <TagContainer>{tag}</TagContainer>;
};

export default Tag;

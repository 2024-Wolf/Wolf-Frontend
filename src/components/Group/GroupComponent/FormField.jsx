import styled from 'styled-components';
import { Wrapper2 } from "../../GlobalStyledComponents";

import React from 'react';

const FormField = ({ label, children }) => {
    return (
        <Wrapper2>
            <label>{label}</label>
            {children}
        </Wrapper2>
    );
};

export default FormField;

import React from "react";
import styled from "styled-components";
import { Button13 } from "../../GlobalStyledComponents";

const NextButton = ({ onClick, children }) => {
    return (
        <Button13 onClick={onClick}>
            {children}
        </Button13>
    );
}

export default NextButton;
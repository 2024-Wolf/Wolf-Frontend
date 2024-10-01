import styled from "styled-components";
import { Button14 } from "../../GlobalStyledComponents";

import React, { useState } from "react";


const OptionButton = ({ label, count, selected, onClick }) => {
    return (
        <Button14
            buttonCount={count}
            selected={selected}
            onClick={onClick}
        >
            {label}
        </Button14>
    );
};

export default OptionButton;

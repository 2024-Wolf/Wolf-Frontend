import styled from "styled-components";
import { DotsContainer, Dot } from "../../GlobalStyledComponents";

import React from "react";

const Dots = ({ images, currentPosition, goToSlide }) => {
    return (
        <DotsContainer>
            {images.map((image, index) => (
                <Dot
                    key={index}
                    active={index === currentPosition}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </DotsContainer>
    );
};

export default Dots;

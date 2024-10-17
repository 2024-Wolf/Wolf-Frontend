import styled from "styled-components";

import React from "react";

// components/MainPageComponents/Banner/Dots.jsx
export const DotsContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 10px;
    background-color: var(--black000);
    padding: 5px 10px;
    margin: 5px;
    border-radius: 10px;
    left: 47%;
    bottom: 0%;
    cursor: auto;

    @media (max-width: 768px) {
        gap: 8px;
        padding: 4px 7px;
        bottom: -2%;
        left: 43%;
    }

    @media (max-width: 480px) {
        gap: 5px;
        padding: 3px 6px;
        left: 41%;
    }
    @media (max-width: 300px) {
        left: 37%;
    }
`;

// components/MainPageComponents/Banner/Dots.jsx
export const Dot = styled.div`
    width: 0.9em;
    height: 0.9em;
    background-color: ${({ $active }) =>
        $active ? "var(--black400)" : "var(--black200)"};
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 1200px) {
        width: 0.85em;
        height: 0.85em;
    }

    @media (max-width: 768px) {
        width: 0.7em;
        height: 0.7em;
    }

    @media (max-width: 480px) {
    }
`;

const Dots = ({ images, currentPosition, goToSlide }) => {
    return (
        <DotsContainer>
            {images.map((image, index) => (
                <Dot
                    key={index}
                    $active={index === currentPosition}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </DotsContainer>
    );
};

export default Dots;

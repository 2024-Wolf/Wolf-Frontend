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
    left: 50%;
    bottom: 0%;
    cursor: auto;

    @media (max-width: 768px) {
        gap: 8px;
        padding: 4px 7px;
        bottom: -5%;
    }

    @media (max-width: 480px) {
        gap: 5px;
        bottom: -10%;
        padding: 3px 6px;
    }
`;

// components/MainPageComponents/Banner/Dots.jsx
export const Dot = styled.div`
    width: 0.9em;
    height: 0.9em;
    background-color: ${(props) =>
        props.active ? "var(--black400)" : "var(--black200)"};
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 1200px) {
        width: 0.8em;
        height: 0.8em;
    }

    @media (max-width: 768px) {
        width: 0.6em;
        height: 0.6em;
    }

    @media (max-width: 480px) {
        width: 0.4em;
        height: 0.4em;
    }
`;

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

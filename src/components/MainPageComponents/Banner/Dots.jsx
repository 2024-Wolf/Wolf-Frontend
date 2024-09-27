import React from "react";
import styled from "styled-components";

const DotsContainer = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        bottom: 10px;
        right: 10px;
        gap: 8px;
    }

    @media (max-width: 480px) {
        bottom: 5px;
        right: 5px;
        gap: 5px;
    }
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${(props) => 
            props.active ? "var(--black100)" : "var(--black400)"};
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 8px;
        height: 8px;
    }

    @media (max-width: 480px) {
        width: 6px;
        height: 6px;
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

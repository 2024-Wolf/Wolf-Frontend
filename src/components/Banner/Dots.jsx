import React from "react";
import styled from "styled-components";

const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
    background-color: ${(props) =>
            props.active ? "var(--black000)" : "var(--black400)"};
  border-radius: 50%;
  cursor: pointer;
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

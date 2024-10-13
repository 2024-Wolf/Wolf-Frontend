import styled from "styled-components";
import { Button14 } from "../GlobalStyledComponents";

import React, { useState } from "react";



// components/SignInContent/Components/OptionButton.jsx
export const OptionButtonWrapper = styled.button`
  min-width: calc(100% / ${({ buttonCount }) => buttonCount} - 15px);
  border: 1px solid var(--violet500);
  border-radius: 20px;
  padding: 10px;
  background-color: ${({ selected }) =>
    selected ? "var(--black700)" : "#fff"};
  color: ${({ selected }) => (selected ? "#fff" : "var(--black500)")};
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;
  max-height: 40px;
  &:hover {
    background-color: var(--violet500);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px 8px;
    font-size: 10px;
  }
`;


const OptionButton = ({ label, count, selected, onClick }) => {
  return (
    <OptionButtonWrapper
      type="button"
      buttonCount={count}
      selected={selected}
      onClick={onClick}
    >
      {label}
    </OptionButtonWrapper>
  );
};

export default OptionButton;

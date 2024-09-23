import React, {useState} from "react";
import styled from "styled-components";

const Button = styled.button`
    min-width: calc(100% / ${({ buttonCount }) => buttonCount} - 15px);
    border: 1px solid var(--violet500);
    border-radius: 20px;
    padding: 15px 15px;
    background-color: ${({ selected }) => (selected ? "var(--black700)" : "#fff")};
    color: ${({ selected }) => (selected ? "#fff" : "var(--black500)")};
    cursor: pointer;
    font-size: 14px;
    margin: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: var(--violet500);
        color: #fff;
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 8px 8px;
        font-size: 10px;
    }
`;

const OptionButton = ({ label, count, selected, onClick }) => {
    const [buttonCount, setButtonCount] = useState(2);

    if(count !== 2) {
        setButtonCount(3);
    }
    return (
        <Button
            buttonCount={buttonCount}
            selected={selected}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default OptionButton;


import styled from "styled-components";
import { Round, Violet500Line, Violet700BackgroundHover } from "../GlobalStyledComponents";
import { useState } from "react";


const FormCheckBoxButtonWrapper = styled.button`
    ${Round}
    ${Violet500Line}
    
    &:active {
        color: var(--violet000);
        background-color: var(--violet700);
    }

    /* 선택 됐을 때 검은색 */
    ${({ checked }) =>
        checked &&
        `
        background-color: var(--black700);
        border: 1px solid var(--black700);
        color: var(--violet000);
    `}

    &:disabled {
        background-color: ${({ checked }) => (checked ? "var(--black600)" : "var(--violet200)")};
        color: ${({ checked }) => (checked ? "var(--violet000)" : "")};
    }
`;

const FormCheckBoxButton = ({ style, onChange, children, checked, name, key, value, disabled }) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const handleButtonClick = (e) => {
        if (!disabled) {
            setIsChecked(!isChecked);

            onChange({
                target: {
                    name,
                    value,
                    checked: !isChecked,
                },
            });
        }
    };

    return (
        <FormCheckBoxButtonWrapper
            style={style}
            type="button" key={key} checked={isChecked}
            onClick={handleButtonClick} disabled={disabled} >
            {children}
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                style={{ display: 'none' }}
            />
        </FormCheckBoxButtonWrapper >
    );
}

export default FormCheckBoxButton;
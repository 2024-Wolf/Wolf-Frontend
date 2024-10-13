
import styled from "styled-components";
import { Round, Black500Line, Black600BackgroundHover } from "../GlobalStyledComponents";
import { useState } from "react";


const FormCheckBoxButtonBlackLineWrapper = styled.button`
    ${Round}
    ${Black500Line}
    ${Black600BackgroundHover}



      /* 선택 됐을 때 검은색 */
    ${({ checked }) =>
        checked &&
        `
        background-color: var(--black700);
        border: 1px solid var(--black700);
        color: var(--violet000);
    `}

    &:disabled {
        background-color: ${({ checked }) => (checked ? "var(--black600)" : "var(--black200)")};
        color: ${({ checked }) => (checked ? "var(--violet000)" : "")};
    }
`;

const FormCheckBoxButtonBlackLine = ({ onChange, children, name, key, value, disabled }) => {
    const [isChecked, setIsChecked] = useState(false);

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
        <FormCheckBoxButtonBlackLineWrapper
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
        </FormCheckBoxButtonBlackLineWrapper >
    );
}

export default FormCheckBoxButtonBlackLine;
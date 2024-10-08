
import styled from "styled-components";
import { Round, Violet500Line, Violet700BackgroundHover } from "../GlobalStyledComponents";


const FormOptionButtonWrapper = styled.button`
    ${Round}
    ${Violet500Line}
    ${Violet700BackgroundHover}

    &:disabled {
        background-color: ${({ clicked }) => (clicked ? "var(--black600)" : "var(--violet200)")};
        color: ${({ clicked }) => (clicked ? "var(--violet000)" : "")};
    }

`;

const FormOptionButton = ({ children, key, clicked, onClick, disabled }) => {

    return (
        <FormOptionButtonWrapper type="button" key={key} clicked={clicked}
            onClick={onClick} disabled={disabled}>
            {children}
        </FormOptionButtonWrapper>
    );
}

export default FormOptionButton;
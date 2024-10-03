
import styled from "styled-components";
import { Violet500LineRoundButton } from "../GlobalStyledComponents";

const FormOptionButton = ({ children, key, clicked, onClick, disabled }) => {

    return (
        <Violet500LineRoundButton key={key} clicked={clicked}
            onClick={onClick} disabled={disabled}>
            {children}
        </Violet500LineRoundButton>
    );
}

export default FormOptionButton;
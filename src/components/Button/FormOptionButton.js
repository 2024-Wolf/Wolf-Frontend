
import styled from "styled-components";
import { PurplelineRoundButton } from "../GlobalStyledComponents";

const FormOptionButton = ({ children, key, clicked, onClick, disabled }) => {

    return (
        <PurplelineRoundButton key={key} clicked={clicked}
            onClick={onClick} disabled={disabled}>
            {children}
        </PurplelineRoundButton>
    );
}

export default FormOptionButton;
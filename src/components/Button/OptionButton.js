
import styled from "styled-components";
import { PurplelineSquareButton } from "../GlobalStyledComponents";

const OptionButton = ({ innerText, onClick, isOptionActive }) => {

    return (
        <PurplelineSquareButton onClick={onClick} isOptionActive={isOptionActive}>
            {innerText}
        </PurplelineSquareButton>
    );
}

export default OptionButton;
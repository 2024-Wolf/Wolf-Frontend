
import styled from "styled-components";
import { PurplelineSquareButton } from "../GlobalStyledComponents";

const MainOptionButton = ({ children, onClick, isOptionActive }) => {

    return (
        <PurplelineSquareButton onClick={onClick} isOptionActive={isOptionActive}>
            {children}
        </PurplelineSquareButton>
    );
}

export default MainOptionButton;
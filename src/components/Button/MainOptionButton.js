
import styled from "styled-components";
import { Violet500LineSquareButton } from "../GlobalStyledComponents";

const MainOptionButton = ({ children, onClick, isOptionActive }) => {

    return (
        <Violet500LineSquareButton onClick={onClick} isOptionActive={isOptionActive}>
            {children}
        </Violet500LineSquareButton>
    );
}

export default MainOptionButton;
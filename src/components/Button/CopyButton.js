
import styled from "styled-components";
import { NoBackgroundButton, Black100BackgroundHover, IconInnerText } from "../GlobalStyledComponents";

const CopyButtonWrapper = styled(NoBackgroundButton)`

${Black100BackgroundHover}
    padding: 10px;
`;

const CopyButton = ({ copyTarget, children }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(copyTarget) // 클립보드에 input 값 복사
            .then(() => {
                alert('링크가 복사되었습니다');
            })
            .catch((err) => {
                alert('링크 복사가 실패하였습니다');
                console.error('복사 오류:', err);
            });
    };

    return (
        <CopyButtonWrapper type="button" onClick={() => { handleCopy() }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
            </svg>
            {children && <IconInnerText>{children}</IconInnerText>}
        </CopyButtonWrapper>
    );
}

export default CopyButton;



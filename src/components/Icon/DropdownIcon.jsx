// components/BellIcon.js
import styled from 'styled-components';

const DropdownIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--violet600);
    cursor: pointer;
`;

function DropdownIcon({ onClick }) {
    return (
        <DropdownIconWrapper onClick={onClick} dataAction="dropdown">
            {/* 아래 화살표 드롭다운 아이콘 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </DropdownIconWrapper>
    );
}

export default DropdownIcon;

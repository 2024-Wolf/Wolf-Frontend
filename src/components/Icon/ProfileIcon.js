import styled from "styled-components";
import React, { useRef, useState, useEffect } from 'react';
import { DropdownContainer } from "../HeaderComponents/HeaderLogin";
import { DisplayNoneDropdownItem, DropdownContent, DropdownItem } from "../GlobalStyledComponents";
import { useNavigate } from "react-router-dom";  // useNavigate 훅 사용
import Declaration from "../Declaration";



const ProfileIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const ProfileIconImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.span`
  text-wrap: nowrap;
  font-size: 16px;
  color: var(--black500);
`;

const ProfileIcon = ({
  src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  alt = "Profile",
  children,
  targetUserId,
  reportTopicText
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // 드롭다운 참조 생성
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleItemClick = (item) => {
    navigate(item);
    setIsDropdownOpen(false);
    window.location.reload();
  };



  // 드롭다운 외부 클릭 시 닫히도록 처리
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <DropdownContainer ref={dropdownRef}>
        {/* 드롭다운창 */}
        <DropdownContent
          isDropdownOpen={isDropdownOpen}
          style={{
            minWidth: '0',
            left: '0px',
            top: 'calc(100%)',
            width: '80px'
          }}>
          <DropdownItem onClick={() => handleItemClick(`/user/${targetUserId}`)}>정보보기</DropdownItem>
          <DropdownItem onClick={openModal}>신고하기</DropdownItem>
        </DropdownContent>
        {/* 프로필 아이콘 */}
        <ProfileIconWrapper>
          <ProfileIconImg
            onClick={handleProfileClick}
            src={src}
            alt={alt}
          />
          {children && <UserName>{children}</UserName>}
        </ProfileIconWrapper>
      </DropdownContainer>
      {isModalOpen &&
        <Declaration
          onClose={closeModal}
          targetReportId={targetUserId}
          reportTopicText={reportTopicText} />}
    </>
  )
};

export default ProfileIcon;

import styled from "styled-components";
import { Square, NoBackground } from "../GlobalStyledComponents";
import React, { useRef, useEffect, useState } from "react";

// components/Input/TextAreaWrapper.jsx
const TextAreaNoCssWrapper = styled.textarea`
  ${Square}
  ${NoBackground}
  padding: 10px;
  width: 100%;
  height: auto;
  resize: none;
  line-height: 1.5;
  white-space: pre-wrap; // 줄바꿈 및 공백 유지
  overflow-wrap: break-word; // 브라우저 호환성 용어
  border: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  color: var(--black700);
  transition: border 0.3s ease, color 0.3s ease; /* transition 추가 */

  ${({ $editing }) =>
    $editing
      ? `
    border: 2px solid var(--violet500);
    color: var(--black700);
      `
      : `
        caret-color: transparent; 
        cursor: default;
      `}

  &:focus {
    outline: none;
  }
`;

const TextAreaNoCss = ({ value, editing, style, ...props }) => {
  const [inputValue, setInputValue] = useState(value); // 상태로 value 관리
  const textAreaRef = useRef(null);

  // 입력 및 화면 크기 변화에 따라 높이를 동적으로 조정하는 함수
  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // 높이 초기화
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // 내용에 맞춰 높이 설정
    }
  };

  // 입력 핸들러
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // 사용자의 입력을 상태로 반영
    adjustHeight(); // 입력할 때마다 높이 조정
  };

  // 화면 크기 변경 시에도 높이를 조정
  useEffect(() => {
    window.addEventListener("resize", adjustHeight);
    adjustHeight(); // 최초 렌더링 시 높이를 맞춤

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  // 포커스 설정
  useEffect(() => {
    if (editing && textAreaRef.current) {
      textAreaRef.current.focus(); // 포커스 설정
    }
  }, [editing]); // isEditing이 true일 때 포커스 설정

  // value 변경 시 상태를 업데이트
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <TextAreaNoCssWrapper
      style={style}
      ref={textAreaRef}
      value={inputValue}
      onChange={handleInputChange} // 입력 변화 시 상태 업데이트
      wrap="soft" // 줄바꿈 설정 (HTML 속성으로 전달)
      {...props}
      $editing={editing}
      required
    />
  );
};

export default TextAreaNoCss;

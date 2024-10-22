import styled from 'styled-components';
import { ModalContainer2, Title3, Description, Form, Select, ButtonGroupCenter, SubmitButton, CancelButton, ModalContentWrapper, ModalHeader, CategoryMainTitle, Violet500LineButton } from "./GlobalStyledComponents";

import React, { useEffect, useState } from 'react';
import ModalForm from './Modal/ModalForm';
import CancelIcon from './Icon/CancelIcon';
import SelectButton from './Button/SelectButton';
import TextArea from './Input/TextArea'
import { reportIssue, getReportCategories } from "./Apis/ReportApi";  // useNavigate 훅 사용

const Declaration = ({ onSubmit, onClose, targetReportId, reportTopicText }) => {
  const [reason, setReason] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [reportReasonText, setReportReasonText] = useState('');
  const [categories, setCategories] = useState([]);


  // 전체 카테고리 목록 불러오기
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getReportCategories();
        setCategories(result.data);

      } catch (err) {
        // setError('데이터를 불러오는 데 실패했습니다.');
        console.error(err);
      } finally {
        // setLoading(false);  // 로딩 상태 종료
      }
    };
    fetchCategories();
  }, []);



  // 신고하기 제출
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      reportTopic: reportTopicText, // USER, GROUP, REPLY, QUESTION
      targetId: targetReportId,
      reportCategoryId: reason,
      reportReason: reportReasonText,
    };

    try {
      // setLoading(true);  // 로딩 상태 시작
      // setError(null);    // 에러 초기화
      const result = await reportIssue(data); // reportIssue 함수 호출
      alert('신고가 정상적으로 접수되었습니다.')
      onClose();
    } catch (err) {
      // setError('데이터를 불러오는 데 실패했습니다.');
      console.error(err);
    } finally {
      // setLoading(false);  // 로딩 상태 종료
    }

    // onSubmit이 함수일 때만 호출
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(data);
    } else {
    }

  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setIsFocused(false);
    }
  };

  return (
    <ModalForm isModalOpen={true} onSubmit={handleSubmit}>
      <CancelIcon
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
        }}
        type='button'
        onClick={onClose}
      />
      <ModalContentWrapper>
        <ModalHeader>
          <CategoryMainTitle>{reportTopicText} 신고하기</CategoryMainTitle>
          <Description>
            악의적이고 반복적인 신고는 회원정지 등의 제재 사유가 될 수 있습니다. 신중하게 작성해주세요!
          </Description>
        </ModalHeader>
        {/* 신고 사유 */}
        <SelectButton
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required>
          <option value="" disabled>신고 사유를 선택해주세요</option>
          {categories?.map((category) => (
            <option key={category?.id} value={category?.id}>{category?.category}</option> // key와 value 설정
          ))}
        </SelectButton>

        {/* 신고 내용 */}
        <TextArea
          value={reportReasonText}
          onChange={(e) => setReportReasonText(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={!isFocused ? '신고 내용을 구체적으로 작성해주세요.' : ''}
          required
        />
        <Violet500LineButton type='submit' style={{ margin: '15px auto 0 auto' }}>
          전송
        </Violet500LineButton>
      </ModalContentWrapper>
    </ModalForm>
  );
};

export default Declaration;




// 테스트

/* 
import React, { useState } from 'react';
import Declaration from './Components/Declaration';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    console.log('제출된 신고:', data);
    setSubmittedData(data);
    setIsModalOpen(false); 
  };

  return (
    <div>
      <h1>신고하기 테스트</h1>
      <button onClick={() => setIsModalOpen(true)}>신고하기</button>

      {isModalOpen && (
        <Declaration onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
      )}

      {submittedData && (
        <div>
          <h2>제출된 신고 내용</h2>
          <p>신고 사유: {submittedData.reason}</p>
          <p>신고 내용: {submittedData.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

*/
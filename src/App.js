import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Main from "./pages/Main";
import StudyPage from "./pages/StudyPage";
import MyPage from "./pages/MyPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainContents } from "../src/components/GlobalStyledComponents";
import Tos from "./pages/TermsOfService";
import RedirectPage from "./pages/RedirectPage";
import { getMyProfile, getAlarmsPreview } from './components/Apis/UserApi';
import LoadingSpinner from "./components/Loading/LoadingSpinner";

const App = () => {
  // 로그인 상태 및 알림 데이터 관리
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // accessToken이 있으면 true, 없으면 false
  });

  const onLogin = () => setIsLoggedIn(true);
  const offLogin = () => setIsLoggedIn(false);

  // 내 프로필 데이터 관리
  const [profileData, setProfileData] = useState({});
  const [alarmsPreviewData, setAlarmsPreviewData] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가


  useEffect(() => {
    if (isLoggedIn) {
      // 로그인 상태일 때 내 프로필과 알람 미리보기 가져오기
      const fetchProfile = async () => {
        try {
          setLoading(true);  // 로딩 상태 시작
          // setError(null);    // 에러 초기화
          const dataProfile = await getMyProfile(); // 프로필 데이터 설정
          setProfileData(dataProfile.data);
          const dataAlarmsPreview = await getAlarmsPreview(); // 알람 미리보기 설정
          setAlarmsPreviewData(dataAlarmsPreview.data);

        } catch (err) {
          // setError('데이터를 불러오는 데 실패했습니다.');
          console.error(err);
        } finally {
          setLoading(false); // 로딩 상태 종료
        }
      };

      fetchProfile(); // 프로필 데이터 가져오기
    }
  }, [isLoggedIn]);

  const renderWithLoading = (Component) => {
    return loading ? <LoadingSpinner /> : <Component />;
  };

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={onLogin}
        offLogin={offLogin}
        profileData={profileData}
        alarmsPreviewData={alarmsPreviewData}
      />
      <MainContents>
        <Routes>
          <Route path="/" element={renderWithLoading(Main)} /> {/* 메인 페이지 */}
          <Route path="/post/:postId" element={renderWithLoading(() => <StudyPage profileData={profileData} />)} /> {/* 스터디 페이지 */}
          <Route path="/faq" element={renderWithLoading(FAQ)} /> {/* FAQ 페이지 */}
          <Route path="/user" element={renderWithLoading(MyPage)} /> {/* 마이페이지 */}
          <Route path="/write" element={renderWithLoading(CreateGroupPage)} /> {/* 글쓰기 페이지 */}
          <Route path="/tos" element={renderWithLoading(Tos)} /> {/* 이용약관 페이지 */}
          <Route path="/user/my" element={renderWithLoading(() => <MyPage profileData={profileData} />)} /> {/* 마이페이지-내가볼때 */}
          <Route path="/user/:userId" element={renderWithLoading(MyPage)} /> {/* 마이페이지-남이볼때 */}
          <Route path="/google/callback" element={renderWithLoading(RedirectPage)} />
        </Routes>
      </MainContents>
      <Footer />
    </Router>
  );
};

export default App;

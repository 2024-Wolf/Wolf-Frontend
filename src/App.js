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


// 렌더링 최적화
const MemoizedMain = React.memo(Main);
const MemoizedStudyPage = React.memo(StudyPage);
const MemoizedFAQ = React.memo(FAQ);
const MemoizedCreateGroupPage = React.memo(CreateGroupPage);
const MemoizedTos = React.memo(Tos);
const MemoizedMyPage = React.memo(MyPage);
const MemoizedRedirectPage = React.memo(RedirectPage);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('accessToken'));
  const [profileData, setProfileData] = useState({});
  const [alarmsPreviewData, setAlarmsPreviewData] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태

  useEffect(() => {
    const fetchProfile = async () => {
      if (!isLoggedIn) return; // 로그인 상태가 아닐 때 실행X

      setLoading(true);
      try {
        const dataProfile = await getMyProfile(); // 내 프로필 데이터 가져오기
        const dataAlarmsPreview = await getAlarmsPreview(); // 알람 미리보기 데이터 가져오기
        setProfileData(dataProfile.data);
        setAlarmsPreviewData(dataAlarmsPreview.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isLoggedIn]);

  const renderWithLoading = (Component, props) => (
    loading ? <LoadingSpinner /> : <Component {...props} />
  );

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        offLogin={() => setIsLoggedIn(false)}
        profileData={profileData}
        alarmsPreviewData={alarmsPreviewData}
      />
      <MainContents>
        <Routes>
          <Route path="/" element={renderWithLoading(MemoizedMain)} />
          <Route path="/post/:postId" element={renderWithLoading(MemoizedStudyPage, { profileData })} />
          <Route path="/faq" element={renderWithLoading(MemoizedFAQ)} />
          <Route path="/write" element={renderWithLoading(MemoizedCreateGroupPage)} />
          <Route path="/tos" element={renderWithLoading(MemoizedTos)} />
          <Route path="/user" element={renderWithLoading(MemoizedMyPage)} />
          <Route path="/user/my" element={renderWithLoading(MemoizedMyPage, { profileData })} />
          <Route path="/user/:userId" element={renderWithLoading(MemoizedMyPage)} />
          <Route path="/google/callback" element={renderWithLoading(MemoizedRedirectPage)} />
        </Routes>
      </MainContents>
      <Footer />
    </Router>
  );
};

export default App;
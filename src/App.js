import React, { useState } from "react";
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

const App = () => {
  // 로그인 상태 및 알림 데이터 관리
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // accessToken이 있으면 true, 없으면 false
  });

  const onLogin = () => setIsLoggedIn(true);
  const offLogin = () => setIsLoggedIn(false);

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={onLogin}
        offLogin={offLogin}
      />
      <MainContents>
        <Routes>
          <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
          <Route path="/post/:postId" element={<StudyPage />} /> {/* 스터디 페이지 */}
          <Route path="/faq" element={<FAQ />} /> {/* FAQ 페이지 */}
          <Route path="/user" element={<MyPage />} /> {/* 마이페이지 */}
          <Route path="/write" element={<CreateGroupPage />} /> {/* 글쓰기 페이지 */}
          <Route path="/tos" element={<Tos />} /> {/* 이용약관 페이지 */}
          <Route path="/user/my" element={<MyPage />} /> {/* 마이페이지-내가볼때 */}
          <Route path="/user/:userId" component={<MyPage />} /> {/* 마이페이지-남이볼때 */}
          <Route path="/post/:postId" component={<StudyPage />} /> {/* 스터디 페이지 */}
          <Route path="/google/callback" element={<RedirectPage />} />
        </Routes>
      </MainContents>
      <Footer />
    </Router>
  );
};

export default App;

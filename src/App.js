import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Main from './pages/Main';
import StudyPage from './pages/StudyPage';
import MyPage from "./pages/MyPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import Header from './components/Header';
import Footer from './components/Footer';
import { MainContents } from '../src/components/GlobalStyledComponents';
import AlarmData from './components/Data/AlarmData';

const App = () => {
    // 로그인 상태 및 알림 데이터 관리
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [notifications, setNotifications] = useState(AlarmData);

    const onLogin = () => setIsLoggedIn(true);
    const offLogin = () => setIsLoggedIn(false);

    return (
        <Router>
            <Header
                isLoggedIn={isLoggedIn}
                onLogin={onLogin}
                offLogin={offLogin}
                notifications={notifications}
                setNotifications={setNotifications}
            />
            <MainContents>
                <Routes>
                    <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
                    <Route path="/post" element={<StudyPage />} /> {/* 스터디 페이지 */}
                    <Route path="/faq" element={<FAQ />} /> {/* FAQ 페이지 */}
                    <Route path="/user" element={<MyPage />} /> {/* 마이페이지 */}
                    <Route path="/write" element={<CreateGroupPage />} /> {/* 글쓰기 페이지 */}

                    <Route path="/user/:userId" component={<MyPage />} /> {/* 마이페이지 */}
                    <Route path="/post/:postId" component={<StudyPage />} /> {/* 스터디 페이지 */}
                </Routes>
            </MainContents>
            <Footer />
        </Router>
    );
};

export default App;

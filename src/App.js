import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Main from './pages/Main';
import StudyPage from './pages/StudyPage';
import MyPage from "./pages/MyPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
                <Route path="/post" element={<StudyPage />} /> {/* 스터디 페이지 */}
                <Route path="/faq" element={<FAQ />} /> {/* FAQ 페이지 */}
                <Route path="/user" element={<MyPage />} /> {/* 마이페이지 */}
                <Route path="/write" element={<CreateGroupPage />} /> {/* 글쓰기 페이지 */}

                <Route path="/user/:userId" component={<MyPage />} /> {/* 마이페이지 */}
                <Route path="/post/:postId" component={<StudyPage />} /> {/* 스터디 페이지 */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

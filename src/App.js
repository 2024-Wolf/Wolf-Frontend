import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Main from './pages/Main';
import StudyPage from './pages/StudyPage';
import MyPage from "./pages/MyPage";

const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                {/* 버튼으로 페이지 이동 */}
                <Link to="/" style={{ margin: '10px' }}>
                    <button>Home</button>
                </Link>
                <Link to="/study" style={{ margin: '10px' }}>
                    <button>Study Page</button>
                </Link>
                <Link to="/faq" style={{ margin: '10px' }}>
                    <button>FAQ</button>
                </Link>
                <Link to="/mypage" style={{ margin: '10px' }}>
                    <button>My Page</button>
                </Link>
            </div>

          <Routes>
              <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
              <Route path="/study" element={<StudyPage />} /> {/* 스터디 페이지 */}
              <Route path="/faq" element={<FAQ />} /> {/* FAQ 페이지 */}
              <Route path="/mypage" element={<MyPage />} /> {/* 마이페이지 */}
          </Routes>
        </Router>
    );
};

export default App;

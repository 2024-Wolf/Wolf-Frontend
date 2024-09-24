import React from 'react';
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './pages/FAQ';
import StudyPage from './pages/StudyPage'; 
import MeetingPage from './components/MeetingTab';
import Footer from './components/Footer';
import TeamRecruit from './pages/TeamRecruit';



const App = () => {
  return (
    <Router>
    <Header />
    <div> 
      <Routes>
        <Route path="/" element={<StudyPage />} />  {/* 스터디 기본 페이지 */}
        <Route path="/meeting" element={<MeetingPage />} />  {/* 화상회의 화면 */}
        <Route path="/faq" element={<FAQ />} />     {/* FAQ 페이지 */}
        <Route path='/post' element={<TeamRecruit />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  );
};


export default App;